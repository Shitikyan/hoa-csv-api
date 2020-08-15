import { inject } from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';
import { FILE_UPLOAD_SERVICE } from '../keys';
import { FileUploadHandler, ReqFile } from '../types';
import { StringUtils } from '../Utils/stringUtils';
import { BatchRepository } from '../repositories/batch.repository'
import { BatchRowRepository } from '../repositories/batch-row.repository'
import { repository } from '@loopback/repository';
import { Batch } from '../models/batch.model';
import { BatchRow } from '../models';
import { CSVService } from '../services/csv.service';
import { XLSXService } from '../services/xlsx.service';

/**
 * A controller to handle file uploads using multipart/form-data media type
 */
export class FileUploadController {
  /**
   * Constructor
   * @param handler - Inject an express request handler to deal with the request
   */
  constructor(
    @inject(FILE_UPLOAD_SERVICE) private handler: FileUploadHandler,
    @repository(BatchRepository)
    public batchRepository: BatchRepository,
    @repository(BatchRowRepository)
    public batchRowRepository: BatchRowRepository,
  ) { }
  @post('/files', {
    responses: {
      200: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
            },
          },
        },
        description: 'Files and fields',
      },
    },
  })
  async fileUpload(
    @requestBody.file()
    request: Request,
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<object> {
    return new Promise<object>((resolve, reject) => {
      this.handler(request, response, async (err: unknown) => {
        if (err) {
          reject(err);
          return;
        }

        const result = FileUploadController.getFilesAndFields(request);
        const file = result.files[0];
        const filename = file.originalname;
        const extension = StringUtils.getExtension(filename);
        const buffer = file.buffer;
        let batchRows: Array<BatchRow> = [];

        if (extension === 'xlsx') {
          batchRows = await XLSXService.parseXLSX(buffer);
        }
        else if (extension === 'csv') {
          batchRows = await CSVService.parseCSV(buffer);
        }
        else {
          reject({ success: 'false', message: 'invalid file extension' })
          return;
        }

        const batch = new Batch();
        batch.name = filename.substring(0, filename.lastIndexOf('.'));
        const resBatch = await this.batchRepository.create(batch);
        const id = resBatch.getId().toString();
        batchRows.forEach(element => {
          element.batchId = id;
        })

        await this.batchRowRepository.createAll(batchRows);

        resolve({ success: true });
      });
    });
  }

  /**
   * Get files and fields for the request
   * @param request - Http request
   */
  private static getFilesAndFields(request: Request) {
    const uploadedFiles = request.files;
    const mapper = (f: ReqFile): ReqFile => ({ ...f });
    let files: ReqFile[] = [];

    if (Array.isArray(uploadedFiles)) {
      files = uploadedFiles.map(mapper);
    } else {
      for (const filename in uploadedFiles) {
        files.push(...uploadedFiles[filename].map(mapper));
      }
    }

    return { files, fields: request.body };
  }
}

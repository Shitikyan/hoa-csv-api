import { inject } from '@loopback/core';
import {
  post,
  Request,
  requestBody,
  Response,
  RestBindings,
} from '@loopback/rest';
import { CSV } from '../services/csv.service';
import { FILE_UPLOAD_SERVICE } from '../keys';
import { FileUploadHandler, ReqFile } from '../types';
import { Helper } from '../services/helper.service';
import { BatchRepository } from '../repositories/batch.repository'
import { BatchRowRepository } from '../repositories/batch-row.repository'
import { repository } from '@loopback/repository';
import { Batch } from '../models/batch.model';
import { BatchRow } from '../models';
const CSVService = new CSV()

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
        if (err) reject(err);
        else {
          const result = FileUploadController.getFilesAndFields(request);
          const filename = result.files[0].originalname;
          const extension = Helper.getExtension(filename);
          const buffer = result.files[0].buffer;
          let CSVObj: Array<BatchRow> = [];

          if (extension === 'xlsx') {
            CSVObj = await CSVService.XLSXToSCVParser(buffer);
            CSVObj.forEach((row: any) => {
              for (var prop in row) {
                if (Object.prototype.hasOwnProperty.call(row, prop)) {
                  if (prop == "undefined") {
                    delete row[prop];
                  }
                  const newProp = Helper.titleFormatter(prop);
                  if (newProp != prop) {
                    row[newProp] = row[prop];
                    delete row[prop];
                  }
                }
              }
            })
          }
          else if (extension === 'csv') {
            CSVObj = await CSVService.StreamToCSVParser(buffer);
          }
          else {
            reject({ success: 'false', message: 'invalid file extension' })
            return;
          }

          let batch = new Batch();
          batch.name = filename.substring(0, filename.lastIndexOf('.'));
          let resBatch = await this.batchRepository.create(batch);
          let id = resBatch.getId().toString();
          CSVObj.forEach(async element => {
            element.batchId = id;
          })
          
          await this.batchRowRepository.createAll(CSVObj);

          resolve({ success: true });
        }
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

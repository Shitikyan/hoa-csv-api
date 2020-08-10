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
import { Helper } from '../services/helper.service'
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

          if (extension === 'xlsx') {
            const CSVString = CSVService.XLSXToSCVParser(buffer);
            const CSVObj = CSVService.CSVToObject(CSVString);

          }
          else if (extension === 'csv') {
            const CSVObj = await CSVService.StreamToCSVParser(buffer);

          }
          else {

          }
          resolve(result);
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

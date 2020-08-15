import { RequestHandler } from 'express-serve-static-core';
import { BatchRow } from './models/batchRow.model';

export type FileUploadHandler = RequestHandler;
export type ReqFile = globalThis.Express.Multer.File;
export type BatchRowResponse = BatchRow | null;

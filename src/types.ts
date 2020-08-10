import { RequestHandler } from 'express-serve-static-core';

export type FileUploadHandler = RequestHandler;
export type ReqFile = globalThis.Express.Multer.File;

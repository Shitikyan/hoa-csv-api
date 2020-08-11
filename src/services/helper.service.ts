const { Readable } = require('stream');
import { BatchRow } from '../models/batchRow.model'

export class Helper {
  static bufferToStream(binary: Buffer) {
    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });
    return readableInstanceStream;
  }

  static getExtension(filename: string): string {
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length)
  }

  static titleFormatter(title: string) : string {
    let spaceCount = (title.match(/ /g) || []).length
    let lineCount = (title.match(/-/g) || []).length

    if (spaceCount > 0) {
      for (let i = 0; i < spaceCount; i++) {
        title = title.replace(' ', '_');
      }
    }

    if (lineCount > 0) {
      for (let i = 0; i < lineCount; i++) {
        title = title.replace('-', '_');
      }
    }

    return title;
  }
}

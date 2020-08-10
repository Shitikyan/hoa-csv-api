const { Readable } = require('stream');

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
}

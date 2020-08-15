import { Readable } from 'stream';

export class StreamUtils {
  static bufferToStream(binary: Buffer) {
    const readableInstanceStream = new Readable({
      read() {
        this.push(binary);
        this.push(null);
      }
    });
    return readableInstanceStream;
  }
}

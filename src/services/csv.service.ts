import { StreamUtils } from '../Utils/streamUtils';
import csv from 'csv-parser';
import { BatchRow } from '../models';

class CSVServ {
  async parseCSV(buffer: Buffer): Promise<Array<BatchRow>> {
    const results: Array<BatchRow> = [];
    await StreamUtils.bufferToStream(buffer)
      .pipe(csv())
      .on('data', (data: any) => {
        if (data) {
          results.push(data);
        }
      });

    return results;
  }
}

export const CSVService = new CSVServ();

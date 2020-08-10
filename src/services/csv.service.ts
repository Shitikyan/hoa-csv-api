import XLSX, { WorkSheet, utils } from 'xlsx';
import { Helper } from '.';
import csv from 'csv-parser';

export class CSV {

  XLSXToSCVParser(data: Buffer, separator = ','): any {
    const workbook = XLSX.read(data, { type: 'buffer' });

    if (workbook) {
      for (const key in workbook.Sheets) {
        if (Object.prototype.hasOwnProperty.call(workbook.Sheets, key)) {
          const element = (workbook.Sheets)[key] as WorkSheet;
          return utils.sheet_to_csv(element, { FS: separator });
        }
      }
    }
  }

  CSVToObject(csvString: string) {
    const arr: Array<string> = csvString.split('\n');
    const jsonObj: Array<object> = [];
    const headers: Array<string> = arr[0].split(',');
    arr.shift();
    headers.shift();

    for (let i = 1; i < arr.length; i++) {
      const data: Array<string> = arr[i].split(',');
      data.shift();
      const obj: any = {};
      for (let j = 0; j < data.length; j++) {
        if (headers[j]) {
          headers[j] = headers[j].trim();
        } else {
          continue;
        }
        if (data[j]) {
          data[j] = data[j].trim();
        }
        const title = headers[j];
        const field = data[j];
        obj[title] = field;
      }
      if (JSON.stringify(obj) !== "{}") {
        jsonObj.push(obj);
      }
    }
    return jsonObj;
  }

  async StreamToCSVParser(buffer: Buffer) {
    const results: any = [];
    await Helper.bufferToStream(buffer)
      .pipe(csv())
      .on('data', (data: any) => {
        if (data) {
          results.push(data);
        }
      });
    return results;
  }
}

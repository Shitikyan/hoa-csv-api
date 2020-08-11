import XLSX, { WorkSheet, utils } from 'xlsx';
import xslx from 'node-xlsx';
import { Helper } from '.';
import csv from 'csv-parser';
import { BatchRow } from '../models';

export class CSV {

  XLSXToSCVParser(buff: Buffer, separator = ','): any {
    const workbook = XLSX.read(buff, { type: 'buffer' });

    var sheet_name_list = workbook.SheetNames;
    var data: any = [];
    sheet_name_list.forEach(function (y) {
      var worksheet = workbook.Sheets[y];
      var headers: any = {};
      for (let z in worksheet) {
        if (z[0] === '!') continue;
        //parse out the column, row, and value
        var tt = 0;
        for (var i = 0; i < z.length; i++) {
          if (!isNaN(z[i] as any)) {
            tt = i;
            break;
          }
        };

        var col = z.substring(0, tt);
        var row = parseInt(z.substring(tt));
        var value = worksheet[z].v;

        //store header names
        if (row == 2 && value) {
          headers[col] = value;
          continue;
        }

        if (!data[row]) data[row] = {};
        data[row][headers[col]] = value;
      }
      //drop those first two rows which are empty
      data.shift();
      data.shift();
      console.log(data);
    });

    return data;

    // if (workbook) {
    //   for (const key in workbook.Sheets) {
    //     if (Object.prototype.hasOwnProperty.call(workbook.Sheets, key)) {
    //       const element = (workbook.Sheets as any)[key] as WorkSheet;
    //       let c = utils.sheet_to_json(element);
    //       console.log(c);
    //       return [];
    //     }
    //   }
    // }
  }

  CSVToObject(csvString: string) {
    const arr: Array<string> = csvString.split('\n');
    const jsonObj: Array<object> = [];
    const headers: Array<string> = arr[1].split(',');
    const testObj = {};
    arr.shift();
    headers.shift();

    for (let i = 1; i < arr.length; i++) {
      const data: Array<string> = arr[i].split(',');
      data.shift();
      const obj: any = {};
      for (let j = 0; j < data.length; j++) {
        if (headers[j]) {
          headers[j] = headers[j].trim();
          headers[j] = Helper.titleFormatter(headers[j]);
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

      if (JSON.stringify(obj) !== JSON.stringify(testObj)) {
        jsonObj.push(obj);
      }
    }
    return jsonObj;
  }

  async StreamToCSVParser(buffer: Buffer): Promise<Array<BatchRow>> {
    const results: Array<BatchRow> = [];
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

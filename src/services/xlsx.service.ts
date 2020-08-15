import XLSX from 'xlsx';
import { StringUtils } from '../Utils/stringUtils';

class XLSXServ {
  parseXLSX(buff: Buffer): Array<any> {
    const workbook = XLSX.read(buff, { type: 'buffer' });

    const sheetNameList = workbook.SheetNames;
    const data: any = [];
    sheetNameList.forEach((sheetName) => {
      const worksheet = workbook.Sheets[sheetName];
      const headers: any = {};
      for (const z in worksheet) {
        if (z[0] === '!') continue;
        //parse out the column, row, and value
        let tt = 0;
        for (let i = 0; i < z.length; i++) {
          if (!isNaN(z[i] as any)) {
            tt = i;
            break;
          }
        };

        const col = z.substring(0, tt);
        const row = parseInt(z.substring(tt)) - 1;
        let value = worksheet[z].v;

        if (row === 0) continue;

        //store header names
        if (row === 1 && value) {
          headers[col] = StringUtils.titleFormatter(value.trim());
          continue;
        }

        if (!data[row]) data[row] = {};
        if (StringUtils.isString(value)) {
          value = value?.trim();
        }

        const currentObj = data[row];
        const prop = headers[col];
        currentObj[prop] = value;

        if (currentObj['undefined']) {
          delete currentObj['undefined'];
        }
      }
      //drop those first three rows which are empty
      data.shift();
      data.shift();
    });

    return data;
  }
}

export const XLSXService = new XLSXServ()

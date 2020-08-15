export class StringUtils {
  static getExtension(filename: string): string {
    return filename.substring(filename.lastIndexOf('.') + 1, filename.length)
  }

  static isString(data: object) {
    return typeof (data) === "string";
  }

  static titleFormatter(title: string): string {
    const spaceCount = (title.match(/ /g) ?? []).length
    const lineCount = (title.match(/-/g) ?? []).length

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

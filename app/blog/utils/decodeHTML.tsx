export default function decodeHtmlEntities(str: string): string {
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
      const num = parseInt(numStr, 10);
      return String.fromCharCode(num);
    }).replace(/&(ndash|nbsp|amp|quot|lt|gt|apos|cent|pound|yen|euro|copy|reg);/gi, function(match, entity) {
      const translate: { [key: string]: string } = {
        'ndash': '–',
        'nbsp': ' ',
        'amp': '&',
        'quot': '"',
        'lt': '<',
        'gt': '>',
        'apos': "'",
        'cent': '¢',
        'pound': '£',
        'yen': '¥',
        'euro': '€',
        'copy': '©',
        'reg': '®'
      };
      return translate[entity];
    });
  }
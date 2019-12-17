export default {
  formatJSON(array, key) {
    return array.filter((item) => {
      if (item[key]) {
        item[key] = item[key].split(',');
      }
      return item;
    });
  },

  jsonToArr(str) {
    return JSON.parse(str);
  },

  strToArr(str) {
    return str.split(',');
  },

  replaceToSpace(str) {
    return str.replace(/,/g, ' ');
  }
}

const today = new Date();

const [month, day, year] = [
  today.getMonth() + 1,  // getMonth() は0から始まるため、1を加えます。
  today.getDate(),       // getDate() を使用します。
  today.getFullYear(),
];

console.log(year + '年' + month + '月' + day + '日');
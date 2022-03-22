var input = require('fs').readFileSync('1329', 'utf8');
var lines = input.split('\r\n');
// var info = lines.shift();

let info;
do {
  for (let i = 0; i < lines.length; i++) {
    info = lines[i];
    if (info.length > 1) {
      let m = 0;
      let j = 0;
      let num;

      for (let i = 0; i < info.length; i++) {
        num = info[i];
        if (num == '0') {
          m++;
        } else if (num == '1') {
          j++;
        } else {
          null;
        }
      }
      console.log(`Mary won ${m} times and John won ${j} times`);
    }
  }
} while (info !== '0');

//

var input = require('fs').readFileSync('1237', 'utf8');
var lines = input.split('\r\n');

var first = [];
var second = [];

first.push(lines[0]);
second.push(lines[1]);

var str = first.join('');
var str2 = second.join('');

let m = str.length;
let n = str2.length;
let res = 0;

for (i = 0; i < m; i++) {
  for (j = 0; j < n; j++) {
    if (str[i] == str2[j]) {
      let c = 0;
      for (k = 0; k + i < m, k + j < n; k++) {
        if (str[k + i] != str2[k + j]) {
          break;
        } else {
          c++;
        }
        if (c > res) {
          res = c;
        }
      }
    }
  }
}
console.log(res);
// if (str.length >= str2.length) {
//   sub(str, str2);
// } else {
//   sub(str2, str);
// }

// function sub(str, str2) {
//   let c = 0;
//   let big = 0;

//   for (i = 0; i < str2.length; i++) {
//     for (j = 0; i < str.length; j++) {
//       for (m = i, n = j; str2[n] == str[m]; m++, n++) {
//         if (n == str2 || m == str) {
//           break;
//         } else {
//           c++;
//         }
//         if (c > big) {
//           big = c;
//         }
//       }
//     }
//   }
//   console.log(big);
// }

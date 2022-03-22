var input = require('fs').readFileSync('1151', 'utf8');
var lines = input.split('\n');
var info = lines.shift();

let array = [];

for (let i = 0; i < info; i++) {
  if (i <= 1) {
    array[i] = i;
  } else {
    array[i] = array[i - 1] + array[i - 2];
  }
}
console.log(array);

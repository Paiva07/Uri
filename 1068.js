var input = require('fs').readFileSync('1068', 'utf8');
var lines = input.split('\n');
var info = lines.shift();

let n = 0;
let open = false;
let caracter;

for (let i = 0; i < info.length; i++) {
  caracter = info.charAt(i);
  if (caracter == '(') {
    n++;
  } else if (caracter == ')') {
    if (n == 0) {
      open = true;
    }
    n--;
  }
}
if (open || n != 0) {
  console.log('incorrect');
} else {
  console.log('correct');
}

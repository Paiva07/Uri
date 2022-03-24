var input = require('fs').readFileSync('1340', 'utf8');
var lines = input.split('\r\n');

let aux = 0;
let stackArray = [];
let queueArray = [];
let prioityArray = [];

let stack = 1;
let queue = 1;
let prioity = 1;

for (i = 0; i < lines.length; i++) {
  info = +lines[i].split(' ').join('');
  if (info > 10 && info < 20) {
    aux++;
    stackArray.push(info);
    queueArray.push(info);
    prioityArray.push(info);
    prioityArray.sort((a, b) => b - a);
  } else if (info > 20) {
    if (stackArray[aux - 1] == info - 10 && stack == 1) {
      aux--;
      stackArray.pop();
    } else {
      stack = 0;
    }
    if (queueArray[0] == info - 10 && queue == 1) {
      queueArray.shift();
    } else {
      queue = 0;
    }
    if (prioityArray[0] == info - 10 && prioity == 1) {
      prioityArray.shift();
    } else {
      prioity = 0;
    }
  }
}

if (
  (stack == 1 && queue == 1) ||
  (stack == 1 && prioity == 1) ||
  (queue == 1 && prioity == 1)
) {
  console.log('Not Sure');
} else if (stack == 1) {
  console.log('Stack');
} else if (queue == 1) {
  console.log('Queue');
} else if (prioity == 1) {
  console.log('Priority');
} else {
  console.log('Impossible');
}

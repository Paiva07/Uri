var input = require('fs').readFileSync('1019', 'utf8');
var lines = input.split('\n');
var time = parseInt(lines.shift());

let hour = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);
let seconds = time % 60;

console.log(hour + ':' + minutes + ':' + seconds);

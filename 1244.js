var input = require('fs').readFileSync('1244', 'utf8');
var lines = input.split('\r\n');

let dados = [];
for (i = 0; i < lines.length; i++) {
  dados.push(lines[i]);
  let info = dados.shift();
  let newDados = info.split(' ');

  let imp = newDados.sort(compar);
  console.log(imp.toString());
  dados.pop(lines[i]);

  function compar(a, b) {
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
  }
}

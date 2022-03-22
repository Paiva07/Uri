var input = require('fs').readFileSync('1244', 'utf8');
var lines = input.split('\r\n');

var info = lines.shift();

var dados = info.split(' ');
console.log(dados);
var dadosAtualizados = [];

for (i = 0; i < dados.length; i++) {
  let dadosAtua = dados[i];
  let dadosAnt = dados[i - 1];

  if (dadosAtualizados.length == 0) {
    dadosAtualizados.push(dadosAtua);
  } else if (dadosAtua.length > dadosAnt.length) {
    dadosAtualizados.unshift(dadosAtua);
  } else {
    dadosAtualizados.push(dadosAtua);
  }
}

console.log(dadosAtualizados);

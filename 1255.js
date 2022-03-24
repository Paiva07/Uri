var input = require('fs').readFileSync('1255', 'utf8');
var lines = input.split('\r\n');

let info = lines.shift();
let str = info.toLowerCase();

let dados = [];

var produtos = [
  { letra: 'a', quat: 0 },
  { letra: 'b', quat: 0 },
  { letra: 'c', quat: 0 },
  { letra: 'd', quat: 0 },
  { letra: 'e', quat: 0 },
  { letra: 'f', quat: 0 },
  { letra: 'g', quat: 0 },
  { letra: 'h', quat: 0 },
  { letra: 'i', quat: 0 },
  { letra: 'j', quat: 0 },
  { letra: 'k', quat: 0 },
  { letra: 'l', quat: 0 },
  { letra: 'm', quat: 0 },
  { letra: 'n', quat: 0 },
  { letra: 'o', quat: 0 },
  { letra: 'p', quat: 0 },
  { letra: 'q', quat: 0 },
  { letra: 'r', quat: 0 },
  { letra: 's', quat: 0 },
  { letra: 't', quat: 0 },
  { letra: 'u', quat: 0 },
  { letra: 'v', quat: 0 },
  { letra: 'x', quat: 0 },
  { letra: 'z', quat: 0 },
];

for (i = 0; i < str.length; i++) {
  let dados = str[i];
  produtos.map((produto) => (produto.letra == dados ? produto.quat++ : null));
}
produtos.map((produto) => dados.push(produto.quat));

var max = dados.reduce(function (a, b) {
  return Math.max(a, b);
});

let result = [];
produtos.map((produto) =>
  produto.quat == max ? result.push(produto.letra) : null,
);
console.log(result.sort().join(''));

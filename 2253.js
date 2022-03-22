var input = require('fs').readFileSync('2253', 'utf8');
var lines = input.split('\r\n');

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z]{6,32}$/;

lines.map((e) => {
  let dados = regex.test(e);
  if (dados === true) {
    console.log('Senha valida.');
  } else {
    console.log('Senha invalida.');
  }
});

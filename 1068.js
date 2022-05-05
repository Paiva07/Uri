var input = require('fs').readFileSync('1068', 'utf8');
var lines = input.split('\n');
var expression = lines.shift();

let countOpenParentheses = 0;
let openIncorretParentheses = false;
let caracter;

const validationParanthes = (caracter) => {
  if (caracter == '(') {
    countOpenParentheses++;
  }
  if (caracter == ')') {
    if (countOpenParentheses == 0) {
      openIncorretParentheses = true;
    }
    countOpenParentheses--;
  }
};
const validationExpression = () => {
  if (openIncorretParentheses || countOpenParentheses != 0) {
    console.log('incorrect');
  } else {
    console.log('correct');
  }
};

for (let i = 0; i < expression.length; i++) {
  caracter = expression.charAt(i);
  validationParanthes(caracter);
}
validationExpression();

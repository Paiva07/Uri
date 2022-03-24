var input = require('fs').readFileSync('1478', 'utf8');
var lines = input.split('\r\n');

// let info = lines.map((e) => +e);

let num = lines[0];

// do {
//   for (i = 0; i < info.length; i++) num = lines[i];
//   console.log(info);
//   num = info[i];
//   console.log(num);
//   var matriz = new Array(num);
//   for (var i = 0; i < num; i++) {
//     matriz[i] = new Array(num);
//   }

//   for (lin = 0; lin < num; lin++) {
//     for (col = 0; col < num; col++) {
//       if (lin == col) {
//         matriz[lin][col] = 1;
//       } else if (lin < col) {
//         matriz[lin][col] = col - lin + 1;
//       } else if (lin > col) {
//         matriz[lin][col] = lin - col + 1;
//       }
//     }
//   }
//   console.log(matriz);
// } while (num !== '0');

var matriz = new Array(num);
for (var i = 0; i < num; i++) {
  matriz[i] = new Array(num);
}

for (lin = 0; lin < num; lin++) {
  for (col = 0; col < num; col++) {
    if (lin == col) {
      matriz[lin][col] = 1;
    } else if (lin < col) {
      matriz[lin][col] = col - lin + 1;
    } else if (lin > col) {
      matriz[lin][col] = lin - col + 1;
    }
  }
}
console.log(matriz);

// for (linha = 0; linha < num; linha++) {
//   for (coluna = 0; coluna < num; coluna++) {
//     if (coluna == 0) console.log('  ' + matriz[linha][coluna]);
//     else console.log('  ' + matriz[linha][coluna]);
//   }
//   console.log('\n');
// }
// console.log('\n');

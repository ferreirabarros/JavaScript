const valores = ['Xandy', 'Vitoria','Potinhos'];
console.log(valores[2],valores[1]);
// Potinhos Vitoria

valores[3]= "Ferreira";
console.log(valores);
// [ 'Xandy', 'Vitoria', 'Potinhos', 'Ferreira' ]

valores[6]= "Barros";
console.log(valores);
/* [
  'Xandy',
  'Vitoria',
  'Potinhos',
  'Ferreira',
  <2 empty items>,
  'Barros'
] */

console.log(valores.length);
//retorna o numero de elemento no array

valores.push({id:3}, false, null, "text", 23);
// push add elementa ao array
console.log(valores);

valores.pop();
console.log(valores);
//pop retira o ultimo elemento do array

delete valores[0];
console.log(valores);
//delete deleta o valor do elemento escolhido do array e deixa o espaço vazio


console.log(typeof valores);
//array é do tipo Object


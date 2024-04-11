//função sem retorno
function imprimirSoma(a ,b){
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma();//erro NaN
imprimirSoma(2);//b será undefined
imprimirSoma(2, 3, 5, 6, 7, 8); //pegara os dois primeiros e ira ignorar o restante

//função com retorno

function ImprimirSub( a, b){
  return a - b;
}
console.log(ImprimirSub(3, 2));

//Atribuindo uma funcção a uma variavel

const Soma = function (a, b){
  console.log(a + b);
}

Soma(2, 3);
// 5

// forma reduzida com =>
const Sub = (a, b) => {
  console.log(a - b);
}

Sub(3, 2);
//1


//forma mais reduzida quando a função so tem um linha de codigo dentro
//função é com retorno por padrão
const adc = (a, b) => a + b;

console.log(adc(2, 3));
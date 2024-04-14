function exibir(num){
  console.log('A operação resultou em :' + num )
}

function soma (a ,b , callback){
  var op = a + b;
  callback(op);
}

soma(2,2,exibir);

//estou pasando o valor de a=2 e b=2 e callback = exibir

// 2 e 2 serão atribuidos a  op

//e como callback se torna exibir
// exibir(callback(op)) passa a valor op e chama a função
 
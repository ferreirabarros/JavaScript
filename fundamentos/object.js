const prod1 = {}
prod1.nome = 'Xandy';

console.log(prod1);
{ nome: 'Xandy' }
// object é um conjunto de elementos que tem sua chave (nome/atributo) e valor (Xandy)

prod1.preco = `R$` + 59.90;

console.log(prod1);


const prod2 = {
  nome: 'vitoria',
  preco: `R$` + 79.90,
}

console.log(prod2);

console.log(typeof prod1, prod2);
//tipo Object

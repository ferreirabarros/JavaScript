// 

const pessoa = {
  nome: 'Ana',
  idade: 25,
  endereço: {
    lagadouro: 'Rua travessa',
    numero: 45,
  }
}

//desestrituração
//const + {} refere a object e serve para criar uma variavel que esta dentro desse object
const { nome } = pessoa
console.log(nome, idade = true);
//nome é mostrado, mas idade não , pois não foi decladara nem retirado do object



//voce pode crian array com op-destructuring, assim vc tbm ja cria variaveis declaradas

//array
const [a , b, c, d] = [3, 5, 1, 15]
console.log(a);

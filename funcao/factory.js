// Function fatory Simples

//retorno pronto
function pessoas(){
  return{
    nome: 'Ana',
    sobrenome: 'Silva'
  }
} //A factory retorna coisas ja prontos ou guase prontas como array e object

console.log(pessoas())



//retorno guase pronto
function produto(nome, preco){
  return{
    nome,
    preco,
    desconto: 0.1
  }
} // nome e preco espera os parametro na hora de chamar


console.log(produto('Notebook', 2199.99));
//passando os valores e finalizando a criação do object




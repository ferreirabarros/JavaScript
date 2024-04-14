// VINCULAÇÃO PADRÃO - quando chamamos sem objeto na frente

function mostrar(){
  console.log(this);
}
mostrar(); // object global

//VINCULADO AO PROPRIO ESCOPO - quando usando arrow function

const compara = parametro => console.log(this == parametro)
compara(global);
//false
compara(module.exports); //isso é: o modulo(compara) que ele foi escrito 
//true   (isto acontesse mesmo usando bind)

//VINCULAÇÃO IMPLICITA -  quando chamamos uma função usando ponto

const menina = {
  nome: 'Cristina',
  jogos: ['GTA', 'Zelda', 'Pes'],

  mostrarJogos(){
    console.log(this.jogos);
  }
}
//o que tiver do lado esquedo do ponto do metodo que chama, será o escopo referenciado pelo this
menina.mostrarJogos();


//VINCULAÇÃO EXPLICITA - quando usa .call ou .apply


const jogo={
  nome: 'GTA'
}

//aqui tando o object jogo quanto o carro tem nome

const carro = {
  nome: 'Toyota',
  mostrarNome(){
    console.log(this.nome);
  }
}

carro.mostrarNome(); //this referencia o segundo nome que seria o do object carro aonde ele foi chamado
carro.mostrarNome.call(jogo);//this refenrencia o nome do object que o .call ou .apply chamaou
//a diferença é que com o apply se pode passar varios argumentos dentro de um array


// VINCULAÇÃO USANDO .BLIND - quando o blind é chamado apartir de uma variavel


const pessoa ={
  nome: 'Ana',
  mostrarNome2(){
    console.log(this.nome)
  }
}


const chamandoPessoa = pessoa.mostrarNome2.bind(pessoa)
chamandoPessoa()
//para usar o bind precisa atribuilo ao uma variavel
//pois somente o resultado dessa variavem vai referenciar o this ao objet do argumento



//VINCULADO UM OBJECT QUE DESPARA UM EVENTO

const botao = document.getElementById('botao');
botao.addEventListener('click', function(){
 console.log(this)//se this estiver referenciando ele msotrara o objeto referenciado nesse caso é botao
 this.style.background='blue'; //se this esta referenciando ele mudara de cor 
})
//o this sera referenciado ao objeto botao pois ele desparou o evento



//VINCULADO COM UMA NOVA INSTANCIA USANDO CONTRUCTOR -  new

function Pessoa(nome){
  this.nome=nome;
}

const p1 = new Pessoa('Ana');
console.log(p1.nome);//new faz com que this se referencia ao objto em que o atributo foi criado

const p2 = new Pessoa('Ferreira');
console.log(p2.nome);// new faz com que o this aponte para a propria instacia que acaba de ser criada


//VINCULADO NO CALLBAC


const pessoa3 = {
  nome: 'Ana',
  jogos: ['GTA', 'Zelda', 'Pes'],

  mostrarJogos(){
    console.log(this.jogos);
  }
}
menina.mostrarJogos();



//criando função literal

function fun1() {}
//() se coloca os parametros

//armazenar uma função em uma variavel
const fun2 = function(){} //função anonima 

//armazenar uma função em um array
const array = [function(a, b){ return a + b}/*declarar dentro*/, fun2 /*armazenada*/, fun1 /*literal*/]

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return 'opa'}


//como fazer uma função ter como parametro outra função
function run(fun){
  fun() ///para envocar uma função precisa dos ()
}

run(function(){console.log('Executando...')})

//uma função pode contar ou retornar outra funçao
function soma(a ,b){
  return function (c){
    console.log(a + b + c)
  }
}

soma(3, 4)(4)

//ou

//como determinar um parametro padrão

// 1°
function soma1(a , b,c){
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b +c
}

console.log(soma1()/*=3 pois todas foram padrão 1*/, soma1(3)/*somente a o restante padraão 1*/, soma1(1,2,3), soma1(0,0,0))
//com 0 esta metodo não retorna o valor padrão pois 0 é Number porem não acrecenta




function soma2(a,b,c){
  //2°
  a = a !== undefined ? a : 1 //se a for diferende indefinido ele recede a se não recebe 1
  //esse caso so daria certo de for colocado valor null
  //3°
  b = 1 in arguments ? b : 1 // se indice b que é o 1 existe b recebe a se não recebe 1
  //4°
  c = isNaN(c) ? 1 : c //se c não for numero ele recebe 1 se sim ele recebe c
  
  return a+b+c
}

console.log(soma2(),soma2(3),soma2(1,2,3))



//5° usando valor padrão na ultima versão ecma2015

function soma3(a =1, b=1, c=1){
  return a + b + c
}


console.log(soma3(),soma3(3),soma3(1,2,3))
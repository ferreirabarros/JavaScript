function fatorial (numero) {
  if(numero == 0){
      return 1
  } else {
      return numero * fatorial(numero - 1) 
  }
}

//função callback

console.log(fatorial(10))
function soma(){
  let soma = 0 
  for(i in arguments){
    soma += arguments[i] //a cada passagem (i in arguments) o elemento sera somada o variavel soma 
  }
}

console.log()
console.log(1)
console.log(1.1, 2.2, 3.3)

console.log(1.1, 2.2, "teste")
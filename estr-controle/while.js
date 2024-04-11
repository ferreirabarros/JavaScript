function getInteiroAleatoriaEntre(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}


var opcao = 0
while(opcao != -1){
  opcao = getInteiroAleatoriaEntre(-1, 10)
  console.log( `Opção escolhida foi ${opcao}.`)
}

console.log('Até a proxima!')




//DO/WHILE

function getInteiroAleatoriaEntre(min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}


var opcao = -1
do {
  opcao = getInteiroAleatoriaEntre(-1, 10)
  console.log( `Opção escolhida foi ${opcao}.`)
}while(opcao != -1)

//ela ira ser lida pelo menos uma vez

console.log('Até a proxima!')
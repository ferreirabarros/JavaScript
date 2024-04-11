const imprimirResultado = function (nota){
  switch (Math.floor(nota)) {
    case 10:
    case 9: //dessa forma os dois case respondem com a linha 5
      console.log('Quadro de Honra')
      break // break serve para ele para de ler e sair desse bloco
    case 8:
    case 7:
      console.log('Aprovado')
      break
    case 6:
    case 5:
    case 4:
      console.log('Recuperação')
      break
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota Invalida')
  }
}


imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(4)
imprimirResultado(-1)
imprimirResultado(11)

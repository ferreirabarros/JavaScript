function soBoaNoticia(nota){
  if(nota >= 7){
    console.log('Aprovado' + nota)
  }
} //este bloco so sera executado de a condição de if for true


function soVerdadeEuFalo(valor){
  if(valor){
    console.log('É verdade ...' + valor)
  }
} //este bloco so sera executado de a condição de if for true

soVerdadeEuFalo() //false
soVerdadeEuFalo(null)//false
soVerdadeEuFalo(undefined)//false
soVerdadeEuFalo(NaN)//false
soVerdadeEuFalo('')//false
soVerdadeEuFalo(0)//false
soVerdadeEuFalo(-1)//true
soVerdadeEuFalo(' ')//true
soVerdadeEuFalo([])//true
soVerdadeEuFalo([1,2])//true
soVerdadeEuFalo({})//true


const imprimirResultado = function(nota){
  if(nota>= 7){
    console.log('Aprovado')
  } else{
    console.log('Reprovado')
  }
}

imprimirResultado(10)
imprimirResultado(4)




Number.prototype.entre = function (inicio, fim){
  return this >= inicio && this <= fim
}

const imprimirResultado2 = function (nota){
  if(nota.entre(9, 10)){
    console.log('Quandro de Honra')
  } else if(nota.entre(7, 8.99)){
    console.log('Aprovado')
  } else if(nota.entre(4, 6.99)){
    console.log('Recuperação')
  } else if (nota.entre(0, 3.99)){
    console.log('Reprovado')
  } else{
    console.log('Nota inválida')
  }
}

imprimirResultado2(10)
imprimirResultado2(8)
imprimirResultado2(5)
imprimirResultado2(3)
imprimirResultado2(-1)
let notas = [93,78,63,69,40,39,38,37,53,81]
let aprovados = []
let reprovados = []
function arredonda(notas){
  for(i = 0; i < notas.length; i++){
    let teste = notas[i] + 2
    let teste1 = notas[i] + 1
    let resto = teste % 5
    let resto1 = teste1 % 5
    let t = 0
    if(resto == 0){
      while(t<2){
        notas[i] = notas[i] + 1
        t++
      }
    }else if(resto1 == 0){
      while(t<1){
        notas[i] = notas[i] + 1
        t++
      }
    }
    if(notas[i]>= 40){
      aprovados.push(notas[i])
    }else{
      reprovados.push(notas[i])
    }
  }
  return console.log('Aprovados '+ aprovados , 'Reprovados ' + reprovados)
}

arredonda(notas)



//ou


let nota = [93,78,63,69,40,39,38,37,53,81]
function arredonda(nota){
  let aprova = []
  let reprova = []
  for(i = 0; i < notas.length; i++){
    if(nota[i]%5 > 2){
      nota[i] = nota[i] + (5 - (nota[i]%5))
    }
    
    if(nota[i]>= 40){
      aprova.push(nota[i])
    }else{
      reprova.push(nota[i])
    }
  }
  return console.log('Aprovados '+ aprova, 'Reprovados ' + reprova)
}

arredonda(nota)
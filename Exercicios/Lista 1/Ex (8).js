let string = "30 40 20 4 51 25 42 38 56 0"
 
function avaliacao(string){
  let pontuacao = string.split(" ")
  console.log(pontuacao)

  let qRecordes = 0
  let nPiorJogo = 1
  let maiorPontuacao = pontuacao[0]
  let menorPontuacao = pontuacao[0]
  for(i=1; i < pontuacao.length; i++){
    if(pontuacao[i]>maiorPontuacao){
      maiorPontuacao = pontuacao[i]
      qRecordes++
    } else if(pontuacao[i]<menorPontuacao){
      menorPontuacao = pontuacao[i]
      nPiorJogo = i+1
    }
  }
  return [qRecordes, nPiorJogo]
}

console.log(avaliacao(string))

 
 
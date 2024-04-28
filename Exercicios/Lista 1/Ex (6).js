//juros Simples
function JS(capital, taxa, tempo){
  return montante = capital*taxa*tempo + capital
}

console.log(JS(1000,0.05,2))


//juros composto
function JC(capital, taxa, tempo){
  return montante = capital*(1 + taxa)**tempo
}

console.log(JC(1000,0.05,2))


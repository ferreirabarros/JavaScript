function plano(idade){
  if(idade >= 0 && idade <10){
    console.log("Valor a pagar: R$ " + (100 + 80))
  }else if(idade >= 10 && idade <= 30){
    console.log("Valor a pagar: R$ " + (100 + 50))
  }else if(idade >30 && idade <= 60){
    console.log("Valor a pagar: R$ " + (100 + 95))
  }else if(idade > 60){
    console.log("Valor a pagar: R$ " + (100 + 130))
  }
}

plano(5)
plano(30)
plano(60)
plano(70)
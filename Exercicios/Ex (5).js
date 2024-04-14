function formatar(num){
  return console.log(`R$ ${num.toFixed(2).toString().replace(".",",")}`)
}

formatar(3.8928393)
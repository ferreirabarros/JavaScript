function Lanche(codigo, Q){
  switch(codigo){
    case 100:
      return 'R$' + Q * 3.00
    case 200:
      return Q * 4.00
    case 300:
      return Q * 5.50
    case 400:
      return Q * 7.50
    case 500:
      return Q * 3.50
    case 600:
      return Q * 2.80
    default:
      return 'Produto não Existente'
  }
}

console.log(Lanche(100,2))
console.log(Lanche(200,2))
console.log(Lanche(300,2))
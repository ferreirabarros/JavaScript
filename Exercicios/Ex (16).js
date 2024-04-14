function op (n1,sinal,n2){
 switch(sinal){
  case '+':
    return n1 + n2
  case '-':
    return n1 - n2
  case '*':
    return n1 * n2
  case '/':
    return n1 / n2
  default:
    return 'Operação invalida'
 }
}


console.log(op(2,'+',2))
console.log(op(2,'-',2))
console.log(op(2,'*',2))
console.log(op(2,'/',2))
console.log(op(2,'2',2))
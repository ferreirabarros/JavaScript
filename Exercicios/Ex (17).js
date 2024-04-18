function nSalario(plano, salario) {
  switch(plano){
    case 'A':
      return salario * 1.10
    case 'B':
      return salario * 1.15
    case 'C':
      return salario * 1.20
    default:
      return 'Plano Invalido'
  }
}

console.log(Math.floor(nSalario('A', 1500)))
console.log(nSalario('B', 2000))
console.log(nSalario('C', 2500))
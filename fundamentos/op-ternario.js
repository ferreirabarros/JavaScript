const resultado = nota => nota >=7 ? 'aprovado' : 'reprovado'

//no op ternario (3 operandos) a ( 1° (comparação) ? 2° (se true) : 3° (se false) )

console.log(resultado(7.1)) //true 'aprovado'
console.log(resultado(6.7)) //false 'reprovado'

let contador = 1

while(contador <= 10){
  console.log(`Contador = ${contador}`)
  contador++
}


//declara a variavel > expressão condicional > add + 1
for(let i = 1; i <= 10; i++){
  console.log(`i = ${i}`)
}



//percorrendo o array
const notas = [6.7, 4.5, 6.3, 9.8, 10]
for(let i = 0; i < notas.length; i++){ //length é o numero de elemento no array
  console.log(`nota = ${notas[i]}`)
}


const notas2 = [6.7, 4.5, 6.3, 9.8, 10]
for(i in notas2){ //in serve para percorrer array ou object
  console.log(i, notas2[i])
}


const pessoa = {
  nome: 'Ana',
  sobrenome: 'Silva',
  idade: 25,
  peso: 65
}


for(atributo in pessoa) { //in serve para percorrer array ou object
  console.log(`${atributo} = ${pessoa[atributo]}`)
}
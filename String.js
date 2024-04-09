let nome = "Xandy";

console.log(typeof nome, nome);

var num = String(25);
// String() torna do tipo string (S maiusculo)

console.log(typeof num, num);

var num = 10;

console.log(num.toString(), num);

// toString torna a leitura na função para uma leitura spring


let frase = nome + " tem " + num + " anos de idade.";
// + juntas as strings

console.log(typeof frase, frase);

let frase1 = `${nome} tem ${num} anos de idade.`;

// a crase permite uso de ${} que chama variaveis

console.log(typeof frase1, frase1);

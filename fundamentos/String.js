let nome = "Xandy";

console.log(typeof nome, nome);

console.log(nome.charAt(4));
// charAt se referencia a letra n 4 (a partir do 0)

console.log(nome.indexOf('d'));
// indexOf diz o endereço do em ()

console.log(nome.substring(0,4));
// mostra a partir de 0 ate o 4 letra sem a 4 letra

console.log("Meu nome é ".concat(nome).concat(" Ferreira."));
// concat serve para juntar

console.log(nome.replace("y","e"));
// replace troca y por e

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

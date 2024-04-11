var idade = 29;

console.log(typeof idade, idade);


var idade = Number("29");
// com Number () tornamos a leiruta em numeros

console.log(typeof idade, idade);

var num = Number(false);
// com Number () tornamos a leiruta em numeros
// as do tipo Boolean  true= 1 e false=0

console.log(typeof num, num);


var num = new Date();
// new Date() chama a data e hora de agora 
//tipo null - nulo

console.log(typeof num, num);




var nome = "25.0393020";


console.log(typeof parseInt(nome), parseInt(nome));
// parseInt torna string em number inteiros



var nome = "25.0393020";


console.log(typeof parseFloat(nome), parseFloat(nome));
// parseFloat torna string em number quebrados



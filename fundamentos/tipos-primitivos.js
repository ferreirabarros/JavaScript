// string = conjusto de caracteres (entre "" ou entre '' ou entre `` ou entre )
let nome = "Xandy";

//typeof mostra o tipo primitivo da variaveis
console.log(typeof nome, nome);



// number = numeros (simplimente somente numeros)
let num = 12;

//typeof mostra o tipo primitivo da variaveis
console.log(typeof num, num);




// boolean = true ou false (verdadeiro ou falso)
let vf = true;

//typeof mostra o tipo primitivo da variaveis
console.log(typeof vf, vf);

var vf = true;
var vf1 = 1;
// 1 é true

// ! uma ves inverte o resultado !! duas vezes mostra o resultado original mas força a torna lo do tipo boolean
console.log('Tipos que são verdadeiros');
console.log(!!3); //numeros inteiro
console.log(!!-1); // numeros inteiros e negativod != de 0
console.log(!!"  "); //Spring somente com espaço
console.log(!![]); //arrays
console.log(!!{});//objects
console.log(!!Infinity);//infinito
console.log(!! "text");//springs com texto
console.log(!!(isAtivo = true));//qual variavem atribuidas a estes valores anteriores


console.log('Tipos que são False');
console.log(!!0);//0
console.log(!!'');//spring vazias
console.log(!!null);//nulo
console.log(!!(undefined)); indefinido
console.log(!!(isAtivo - false));// qualquer variavel que foi atribuida a um desses varoleres anteriores

console.log("tipo boolean usando || (ou)");
console.log(!!('' || null || 0 || '  '));
//true pois spring com espaço e true
//true paraquando tem um ou mais item true
//false quando todos são false


console.log(('' || undefined || 0 || 3 ));
//retorna somente o valor verdadeiro
var nome = "";
console.log( nome || "Vitoria");




// null/object = nulo 
let nulo = null;
//não tem nenhum valor nem tipo
//não se referencia a nenhum endereço de memoria

//typeof mostra o tipo primitivo da variaveis
console.log(typeof nulo, nulo);



// underfned = indefinida
let indef;
//normalmento o proprio codigo atribue esse tipo

//typeof mostra o tipo primitivo da variaveis
console.log(typeof indef, indef);

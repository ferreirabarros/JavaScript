/*tabelas op logicos
v e v = v  
v e f = f
v e ? = f

// com e todos tem que ser true para dar true
// basta um ser false resultado será false


v ou ? = v
f ou v = v
f ou f = f

//com ou basta um ser true resultado será true


v xor v = f
v xor f = v
f xor v = v
f xor f = f
//com xor(exclusivo) para dar true os dois tem que ser diferentes


!v = f
!f = v
!!v = v
!!f = f
// ! é a negação, ele inverte o valor

*/



function compras(t1, t2){
  const comprarSorvete = t1 || t2 //vai comprar sorvete se um ou dois T derem certo
  const comprarTV50 = t1 && t2 // vai comprar tv de 50 se os dois T derem certo
  const comprarTV32 = !!(t1 ^ t2) // vai comprar tv de 32 se somente um T der certo
  //(t1 != t2) o diferente simula a ação de ou exclusivo
  const manterSaudavel = !comprarSorvete// vai manter saudavel se os dois T não derem certo

  return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
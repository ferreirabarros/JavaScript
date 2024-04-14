function triangulo(l1,l2,l3){
  if(l1==l2 && l2==l3){
    console.log('Triangulo Equilatero')
  }else if(l1!=l2 && l1!=l3 && l2!=l3){
    console.log('Triangulo Escaleno')
  }else if(l1==l2 ||l2==l3||l3==l1){
    console.log('Triangulo Isósceles')    
  }else{
    console.log('Este valores não formam triangulo')
  }
}

triangulo(4,3,3)





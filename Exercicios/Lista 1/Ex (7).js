function bhaskara(a=1,b=0,c=0){
   resultado = []
   delta = b**2 - 4*a*c
   if(delta > 0){

    x1 = (-b +delta**0.5)/2*a

    x2 = (-b -delta**0.5)/2*a

    resultado.push(x1)
    resultado.push(x2)

    console.log(resultado)
    


   } else if(delta = 0){

     x = (-b)/2*a

     console.log(x)

   } else{
      console.log('Delta é negativo')

   }
}

bhaskara(-1,1,6)
bhaskara(3,-5,12)


//ou 


function bhaskara(a=1,b=0,c=0){
  resultado = []
  delta = b**2 - 4*a*c
  if(delta > 0){

   x1 = (-b +Math.sqrt(delta))/2*a

   x2 = (-b -Math.sqrt(delta))/2*a

   resultado.push(x1)
   resultado.push(x2)

   console.log(resultado)
   


  } else if(delta = 0){

    x = (-b)/2*a

    console.log(x)

  } else{
     console.log('Delta é negativo')

  }
}

bhaskara(-1,1,6)
bhaskara(3,-5,12)
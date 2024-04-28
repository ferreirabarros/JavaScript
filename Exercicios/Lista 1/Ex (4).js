function div(dividendo, divisor){
  let resultado = dividendo / divisor
  let resto = dividendo % divisor
  console.log(resultado)
  console.log(resto)
}

div(4,2)


// ou

function div(dividendo, divisor){
  console.log('resultado: ' + parseFloat(dividendo / divisor).toFixed(2))
  console.log('resto:' + parseFloat(dividendo%divisor).toFixed(3) )
}

div(4.3,2.1)
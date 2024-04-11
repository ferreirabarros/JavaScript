function tratarErroELancar(erro){
  throw "erro ..."
  //throw significa lançar
}

function imprimirNomeGritando(obj){
  try{
    console.log(obj.name.toUpperCase() + "!!!")
  }  catch(e){
    tratarErroELancar(e)
  } finally{
    console.log("fim")
  }
}


const obj = { nome: "ORberto"}

imprimirNomeGritando(obj)
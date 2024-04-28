function bi6 (ano){
  p4 = ano%4 == 0
  p100 = ano%100 == 0
  p400 = ano%400 == 0
  if(p4==true && p100==false){
    bissexto = true
    console.log(`O ano de ${ano} É bissexto?: ${bissexto}` )
  } else if(p4==true && p100==true && p400==true){
    bissexto = true
    console.log(`O ano de ${ano} É bissexto?: ${bissexto}` )
  }else{
    bissexto = false
    console.log(`O ano de ${ano} É bissexto?: ${bissexto}` )
  }
}

bi6(1903)
bi6(2020)
bi6(2400)
bi6(100)
bi6(8)
bi6(200)
bi6(400)


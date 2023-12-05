function manufacture(gifts, materials){
  return gifts.filter(regalo=>{
    return regalo.split("") // hola ["h","o",l,a]
      .every(letra=>materials.includes(letra))
    
  })
}


// hacemos un filtro a tods los regalos
//    itero las letras
//      me fijo si esa letra esta en los materiales
//         Cuando no hay una letra retorno false
//         Si hay devolvemos true
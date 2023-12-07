
function drawGift(size, symbol) {
  // Code here
  if(size==1){
 return '#\n'
  }

      let gift=""
      //parte inicial
      
      //gift+=" ".repeat(size)
    // Parte arriba del regalo
      gift+=" ".repeat(size-1)+"#".repeat(size-1)+"#\n"
    for (let i = 0; i < size -2; i++) {
       gift += " ".repeat(size -2-i)+"#"+symbol.repeat(size-2)+ "#"+symbol.repeat(i)+'#\n'
    }
 
  
  //parte mitad
    gift+="#".repeat(size)+symbol.repeat(size-2)+'#\n'
    
  //parte abajo
     for (let i =size-2; i > 0; i--) {
       gift += "#"+symbol.repeat(size-2)+ "#"+symbol.repeat(i-1)+'#\n'
    }
  
  gift+="#".repeat(size-1)+"#\n"
  
  
  //console.log(gift)
  return gift
}
drawGift(4, "+")
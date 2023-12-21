function checkIsValidCopy(original, copy) {
    for(let index=0;index<original.length;index++){
      let char=original[index].match(/\w/g)
   
      const valid=`${char ? `${char}${char[0].toLowerCase()}`: ''}#+:. `
     // console.log(original[index],valid)
      
      if(valid.indexOf(copy[index])<valid.indexOf(original[index])){
        return false
      }
    }
    return true
  
  }
  
  
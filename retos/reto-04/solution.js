
function decode(message){
    let stack=[]
    let result=""
    
    for(let char of message){
      //console.log(char)
      if(char==='('){
        //
        stack.push(result)
        result= ''
      }
      else if(char===')'){
        
        result=stack.pop()+result.split("").reverse("").join("")
      }else{
        result+=char
      }
    
    }
    return result
  }
  decode('(olleh) (dlrow)!')
  
function cyberReindeer(road, time) {

    let res=[road]
    let lastChar="."
    
    for(let i =1;i<time;i++){
      if(i===5) road=road.replaceAll("|","*")
      
      
    const matches = road.match(/S[\.\*]/g);
    //console.log(matches)
      if(matches){
        console.log(matches[0])
        road=road.replace(matches[0],lastChar+"S")
        lastChar=matches[0][1]
       //  console.log(matches[0][1])
      }
    
    res.push(road)
      
    }
    return res
  }
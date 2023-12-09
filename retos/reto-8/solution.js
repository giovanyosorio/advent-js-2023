function organizeGifts(gifts) {
    const countGifts = gifts.match(/\d+/g);
    const nameGifts = gifts.match(/[^0-9]/g);
      console.log(countGifts)
        console.log(nameGifts)
      let i=0
      let response=""
      for (let c of countGifts){
         const g = nameGifts[i]
         
        let a = ""
    
        c = parseInt(c)
        a += `[${g}]`.repeat(c / 50)
       // console.log(a)
        c%=50
        console.log(c)
        a+=`{${g}}`.repeat(c/10)
        c%=10
         console.log(c)
        if(c>0){
              a+=`(${g.repeat(c)})`
        }
    
        
        response+=a
        i++
      }
      console.log(response)
      return response
    
    }
    
    organizeGifts(`76a11b`)// '[a]{a}{a}(aaaaaa){b}(b)'
    //console.log(result1)
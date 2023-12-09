
function adjustLights(lights) {
    // Code here
    let changes=0
    
      for (let i = 0; i < lights.length; i++) {
          if (i % 2 === 0 && lights[i] !== '🟢') {
          changes++;
          } else if (i % 2 === 1 && lights[i] !== '🔴') {
          changes++;
          }
      }
  
      // Si el número de cambios es mayor a la mitad del número de luces, 
      // es más eficiente cambiar las luces que no se han contado.
      if (changes > lights.length / 2) {
          changes = lights.length - changes;
      }
    
    return changes
  
  }
  
  
  
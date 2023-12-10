function createChristmasTree(ornaments, height) {
    let arbol = "";
   let contadorAdornos = 0;

 for(let nivel=1;nivel<=height;nivel++){
    let espacios = ' '.repeat(height - nivel); 
  
   for (let i = 0; i < nivel; i++) {
     
           espacios += ornaments[contadorAdornos % ornaments.length] + ' '
           contadorAdornos++;
       }
   arbol += espacios.trimEnd() + '\n';
   

 }
  // Añadir el tronco
   arbol += ' '.repeat(height-1) + "|\n";
 return arbol;

}
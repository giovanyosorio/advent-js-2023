function maxDistance(movements) {
  let distance = 0;
  let stars = 0;

  // Recorrer cada caracter de la cadena
  for (let i = 0; i < movements.length; i++) {
      if (movements[i] === '>') {
          distance++;
      } else if (movements[i] === '<') {
          distance--;
      } else if (movements[i] === '*') {
          stars++;
      }
  }
  // Luego, usar los '*' para maximizar la distancia
  while (stars > 0) {
      if (distance >= 0) {
          distance++; // Si la distancia es cero o positiva, ir a la derecha
      } else {
          distance--; // Si la distancia es negativa, ir a la izquierda
      }
      stars--;
  }
  return Math.abs(distance);
}
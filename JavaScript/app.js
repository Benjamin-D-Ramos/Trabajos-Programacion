  // Escribe una función que divide un arreglo (primer argumento)
  // en grupos de la longitud size(segundo argumento) y los devuelva 
  // como un arreglo bidimensional.

  function chunkArrayInGroups(array, size,) {
    let resultado = [];
    for (let i = 0; i < array.length; i += size) {
      resultado.push(array.slice(i, i + size));
    }
    return resultado;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

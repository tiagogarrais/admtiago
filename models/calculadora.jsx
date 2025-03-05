function somar(...numeros) {
  if (!numeros.every((num) => typeof num === "number")) {
    throw new Error("Todos os valores devem ser números.");
  }

  return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

function subtrair(...numeros) {
  if (!numeros.every((num) => typeof num === "number")) {
    throw new Error("Todos os valores devem ser números.");
  }

  return numeros
    .slice(1)
    .reduce((acumulador, atual) => acumulador - atual, numeros[0]);
}

function dividir(...numeros) {
  if (!numeros.every((num) => typeof num === "number")) {
    throw new Error("Todos os valores devem ser números.");
  }

  return numeros
    .slice(1)
    .reduce((acumulador, atual) => acumulador / atual, numeros[0]);
}

function multiplicar(...numeros) {
  if (!numeros.every((num) => typeof num === "number")) {
    throw new Error("Todos os valores devem ser números.");
  }

  return numeros.reduce((acumulador, atual) => acumulador * atual, 1);
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.dividir = dividir;
exports.multiplicar = multiplicar;

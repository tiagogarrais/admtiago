function somar(...numeros) {
  if (!numeros.every((num) => typeof num === "number")) {
    throw new Error("Todos os valores devem ser números.");
  }

  return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

function subtrair(...numeros) {
  return numeros
    .slice(1)
    .reduce((acumulador, atual) => acumulador - atual, numeros[0]);
}

function dividir(num1, num2) {
  return num1 / num2;
}

function multiplicar(...numeros) {
  return numeros.reduce((acumulador, atual) => acumulador * atual, 1);
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.dividir = dividir;
exports.multiplicar = multiplicar;

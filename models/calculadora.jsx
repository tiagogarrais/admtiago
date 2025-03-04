function somar(...numeros) {
  return numeros.reduce((acumulador, atual) => acumulador + atual, 0);
}

function subtrair(num1, num2) {
  return num1 - num2;
}

function dividir(num1, num2) {
  return num1 / num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

exports.somar = somar;
exports.subtrair = subtrair;
exports.dividir = dividir;
exports.multiplicar = multiplicar;

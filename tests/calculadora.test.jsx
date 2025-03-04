const calculadora = require("../models/calculadora.jsx");

test("Resultado deveria retornar 27", () => {
  const resultado = calculadora.somar(1, 2, 1, 5, 2, 8, 4, 1, 3);
  expect(resultado).toBe(27);
});

test("Subtrair 9 - 5 deveria retornar 4", () => {
  const resultado = calculadora.subtrair(9, 5);
  expect(resultado).toBe(4);
});

test("Dividir 10 / 5 deveria retornar 2", () => {
  const resultado = calculadora.dividir(10, 5);
  expect(resultado).toBe(2);
});

test("Multiplicar 45 * 7 * 2 deveria retornar 315", () => {
  const resultado = calculadora.multiplicar(45, 7, 2);
  expect(resultado).toBe(630);
});

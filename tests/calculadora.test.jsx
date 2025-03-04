const calculadora = require("../models/calculadora.jsx");

test("Somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Subtrair 9 - 5 deveria retornar 4", () => {
  const resultado = calculadora.subtrair(9, 5);
  expect(resultado).toBe(4);
});

test("Dividir 10 / 5 deveria retornar 2", () => {
  const resultado = calculadora.dividir(10, 5);
  expect(resultado).toBe(2);
});

test("Multiplicar 45 * 7 deveria retornar 315", () => {
  const resultado = calculadora.multiplicar(45, 7);
  expect(resultado).toBe(315);
});

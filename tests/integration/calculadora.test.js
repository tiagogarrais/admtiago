const calculadora = require("../../models/calculadora.jsx");

test("Resultado da soma deveria retornar o número 27", () => {
  const resultado = calculadora.somar(1, 2, 1, 5, 2, 8, 4, 1, 3);
  expect(typeof resultado).toBe("number");
  expect(resultado).toBe(27);
});

test("Subtrair 9 - 5 deveria retornar o número 4", () => {
  const resultado = calculadora.subtrair(9, 5);
  expect(typeof resultado).toBe("number");
  expect(resultado).toBe(4);
});

test("Dividir 10 / 5 deveria retornar o número 2", () => {
  const resultado = calculadora.dividir(10, 5);
  expect(typeof resultado).toBe("number");
  expect(resultado).toBe(2);
});

test("Multiplicar 45 * 7 * 2 deveria retornar o número 315", () => {
  const resultado = calculadora.multiplicar(45, 7, 2);
  expect(typeof resultado).toBe("number");
  expect(resultado).toBe(630);
});

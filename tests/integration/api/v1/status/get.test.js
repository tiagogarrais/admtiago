test("GET para api/v1/status deve retornar 200", async () => {
  const response = await fetch("http://localhost/api/v1/status");
  expect(response).toBe(200);
});

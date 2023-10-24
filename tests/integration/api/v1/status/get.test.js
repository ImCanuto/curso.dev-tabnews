test("GET to /api/v1/status should return 200", async () => {
  // async: torna o método assíncrono
  const response = await fetch("http://localhost:3000/api/v1/status"); // await: faz com que o método aguarde o retorno do fetch
  expect(response.status).toBe(200);
});

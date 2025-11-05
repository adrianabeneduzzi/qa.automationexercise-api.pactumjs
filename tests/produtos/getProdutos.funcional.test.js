const { spec } = require('pactum');

describe('GET /produtos - Teste Funcional', function() {
  it('Deve listar todos os produtos', async function() {
    await spec()
      .get('https://serverest.dev/produtos')
      .expectStatus(200)
      .expectJsonMatch([{}]);
  });
});

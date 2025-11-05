const { spec } = require('pactum');

describe('GET /produtos/:id - Teste Funcional', function() {
  let produtoId;

  before(async function() {
    produtoId = await spec()
      .get('https://serverest.dev/produtos')
      .expectStatus(200)
      .returns('body[0]._id');
  });

  it('Deve retornar um produto pelo ID', async function() {
    await spec()
      .get(`https://serverest.dev/produtos/${produtoId}`)
      .expectStatus(200)
      .expectJsonLike({ _id: produtoId });
  });
});

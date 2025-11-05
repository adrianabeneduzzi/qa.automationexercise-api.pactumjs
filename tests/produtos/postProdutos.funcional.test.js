const { spec } = require('pactum');

describe('POST /produtos - Teste Funcional', function() {
  let token;

  before(async function() {
    const res = await spec()
      .post('https://serverest.dev/login')
      .withJson({ email: 'beneo@qa.com.br', password: 'Duzzi' })
      .expectStatus(200);

    token = res.header['authorization'] || res.body.authorization;
  });

  it('Deve cadastrar um produto com nome único', async function() {
    const nomeProduto = `ProdutoTeste-${Date.now()}`;

    await spec()
      .post('https://serverest.dev/produtos')
      .withHeaders('Authorization', `Bearer ${token}`)
      .withJson({
        nome: nomeProduto,
        preco: 100,
        descricao: 'Descrição teste produto',
        quantidade: 5
      })
      .expectStatus(201)
      .expectJsonLike({ nome: nomeProduto });
  });
});

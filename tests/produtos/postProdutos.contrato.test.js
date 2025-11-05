const { spec } = require('pactum');

describe('POST /produtos - Teste de Contrato', function() {
  let token;

  before(async function() {
    const res = await spec()
      .post('https://serverest.dev/login')
      .withJson({ email: 'beneo@qa.com.br', password: 'Duzzi' })
      .expectStatus(200);

    token = res.header['authorization'] || res.body.authorization;
  });

  it('Deve validar o contrato de cadastro de produto', async function() {
    const nomeProduto = `ProdutoContrato-${Date.now()}`;

    await spec()
      .post('https://serverest.dev/produtos')
      .withHeaders('Authorization', `Bearer ${token}`)
      .withJson({
        nome: nomeProduto,
        preco: 120,
        descricao: 'Produto teste contrato',
        quantidade: 3
      })
      .expectStatus(201)
      .expectJsonSchema({
        type: 'object',
        properties: {
          _id: { type: 'string' },
          nome: { type: 'string' },
          preco: { type: 'number' },
          descricao: { type: 'string' },
          quantidade: { type: 'number' }
        },
        required: ['_id','nome','preco','descricao','quantidade']
      });
  });
});

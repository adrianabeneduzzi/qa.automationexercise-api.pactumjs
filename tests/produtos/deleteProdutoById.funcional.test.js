const { spec } = require('pactum');

describe('DELETE /produtos/:id - Teste Funcional', function() {
  let token;
  let produtoId;

  before(async function() {
    const login = await spec()
      .post('https://serverest.dev/login')
      .withJson({ email: 'beneo@qa.com.br', password: 'Duzzi' })
      .expectStatus(200);

    token = login.header['authorization'] || login.body.authorization;

    produtoId = await spec()
      .post('https://serverest.dev/produtos')
      .withHeaders('Authorization', `Bearer ${token}`)
      .withJson({
        nome: `ProdutoParaDelete-${Date.now()}`,
        preco: 50,
        descricao: 'Produto para teste delete',
        quantidade: 1
      })
      .expectStatus(201)
      .returns('body._id');
  });

  it('Deve deletar o produto criado', async function() {
    await spec()
      .delete(`https://serverest.dev/produtos/${produtoId}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200);
  });
});

const pactum = require('pactum');
const { baseUrl } = require('../../config/api');

pactum.request.setBaseUrl(baseUrl);

describe('POST /usuarios - Teste Funcional', () => {
  it('Deve cadastrar um novo usuário com sucesso', async () => {
    const randomEmail = `teste_${Date.now()}@qa.com`;

    await pactum.spec()
      .post('/usuarios')
      .withHeaders('Content-Type', 'application/json')
      .withBody({
        nome: 'Usuário QA',
        email: randomEmail,
        password: '1234',
        administrador: 'true'
      })
      .expectStatus(201)
      .expectJsonLike({
        message: 'Cadastro realizado com sucesso'
      });
  });
});
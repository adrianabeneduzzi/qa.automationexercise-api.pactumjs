const pactum = require('pactum');
const { baseUrl } = require('../../config/api');

pactum.request.setBaseUrl(baseUrl);

describe('POST /login - Teste Funcional', () => {
  it('Deve realizar login com sucesso', async () => {
    await pactum.spec()
      .post('/login')
      .withBody({
        email: 'fulano@qa.com.br',
        password: 'Duzzi'
      })
      .expectStatus(200)
      .expectJsonLike({
        message: 'Login realizado com sucesso'
      });
  });
});

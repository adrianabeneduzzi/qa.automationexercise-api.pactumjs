const pactum = require('pactum');
const { baseUrl } = require('../../config/api');
const loginSchema = require('../../schemas/loginSchema');

pactum.request.setBaseUrl(baseUrl);

describe('POST /login - Teste de Contrato', () => {
  it('Deve realizar login e validar contrato', async () => {
    await pactum.spec()
      .post('/login')
      .withBody({
        email: 'fulano@qa.com.br',
        password: 'teste'
      })
      .expectStatus(200)      
      .expectJsonSchema(loginSchema);
  });
});

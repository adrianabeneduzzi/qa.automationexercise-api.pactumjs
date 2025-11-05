const pactum = require('pactum');
const { baseUrl } = require('../../config/api');

pactum.request.setBaseUrl(baseUrl);

describe('GET /usuarios/{_id} - Teste Funcional', () => {

  let userId;

  before(async () => {
    const response = await pactum.spec()
      .post('/usuarios')
      .withBody({
        nome: 'Usuário Teste',
        email: `user_${Date.now()}@qa.com`,
        password: '1234',
        administrador: 'true'
      });
    userId = response.json._id;
  });

  it('Deve buscar o usuário por ID com sucesso', async () => {
    await pactum.spec()
      .get(`/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonLike({
        nome: 'Usuário Teste'
      });
  });
});
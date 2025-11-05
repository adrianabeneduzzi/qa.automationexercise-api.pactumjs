const pactum = require('pactum');
const { baseUrl } = require('../../config/api');

pactum.request.setBaseUrl(baseUrl);

describe('PUT /usuarios/{_id} - Teste Funcional', () => {

  let userId;

  before(async () => {
    const response = await pactum.spec()
      .post('/usuarios')
      .withBody({
        nome: 'Usuário Editar',
        email: `editar_${Date.now()}@qa.com`,
        password: '1234',
        administrador: 'true'
      });
    userId = response.json._id;
  });

  it('Deve editar o usuário com sucesso', async () => {
    await pactum.spec()
      .put(`/usuarios/${userId}`)
      .withBody({
        nome: 'Usuário Editado',
        email: `editar_${Date.now()}@qa.com`,
        password: '1234',
        administrador: 'true'
      })
      .expectStatus(200)
      .expectJsonLike({
        message: 'Registro alterado com sucesso'
      });
  });
});
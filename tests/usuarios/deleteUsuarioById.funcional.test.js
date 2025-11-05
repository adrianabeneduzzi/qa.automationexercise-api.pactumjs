const pactum = require('pactum');
const { baseUrl } = require('../../config/api');
const { deleteUsuarioSchema } = require('../../schemas/usuariosSchema');

pactum.request.setBaseUrl(baseUrl);

describe('DELETE /usuarios/{_id} - Teste Funcional', () => {

  let userId;

  before(async () => {
    const response = await pactum.spec()
      .post('/usuarios')
      .withBody({
        nome: 'Usuário Excluir',
        email: `excluir_${Date.now()}@qa.com`,
        password: '1234',
        administrador: 'true'
      });
    userId = response.json._id;
  });

  it('Deve excluir o usuário com sucesso', async () => {
    await pactum.spec()
      .delete(`/usuarios/${userId}`)
      .expectStatus(200)
      .expectJsonSchema(deleteUsuarioSchema);
  });
});

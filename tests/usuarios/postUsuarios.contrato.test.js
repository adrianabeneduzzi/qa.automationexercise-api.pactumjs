const pactum = require('pactum');
const { baseUrl } = require('../../config/api');
const { postUsuarioSchema } = require('../../schemas/usuariosSchema');

pactum.request.setBaseUrl(baseUrl);

describe('POST /usuarios - Teste de Contrato', () => {

  it('Deve validar o contrato da resposta de cadastro com sucesso (201)', async () => {
    await pactum.spec()
      .post('/usuarios')
      .withHeaders('Content-Type', 'application/json')
      .withBody({
        nome: 'Usuário Contrato QA',
        email: `contrato_${Date.now()}@qa.com`,
        password: 'teste',
        administrador: 'true'
      })
      .expectStatus(201)
      .expectJsonSchema(postUsuarioSchema);
  });

});
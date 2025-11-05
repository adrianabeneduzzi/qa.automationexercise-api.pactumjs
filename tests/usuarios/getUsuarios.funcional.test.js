const pactum = require('pactum');
const { baseUrl } = require('../../config/api');

pactum.request.setBaseUrl(baseUrl);

describe('GET /usuarios - Teste Funcional', () => {

  it('Deve retornar a lista de usuários com sucesso', async () => {
    const response = await pactum.spec()
      .get('/usuarios')
      .expectStatus(200)
      .returns('res.body');

    // Validações manuais adicionais:
    if (typeof response.quantidade !== 'number') {
      throw new Error(`Esperado número em 'quantidade', mas veio: ${typeof response.quantidade}`);
    }

    if (!Array.isArray(response.usuarios)) {
      throw new Error(`Esperado array em 'usuarios', mas veio: ${typeof response.usuarios}`);
    }

    console.log(`✅ Total de usuários retornados: ${response.quantidade}`);
  });

});
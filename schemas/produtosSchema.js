module.exports = {
  postProdutoSchema: {
    type: 'object',
    required: ['message', '_id'],
    properties: {
      message: { type: 'string' },
      _id: { type: 'string' }
    }
  },

  getProdutosSchema: {
    type: 'object',
    required: ['quantidade', 'produtos'],
    properties: {
      quantidade: { type: 'number' },
      produtos: {
        type: 'array',
        items: {
          type: 'object',
          required: ['nome', 'preco', 'descricao', '_id'],
          properties: {
            nome: { type: 'string' },
            preco: { type: 'number' },
            descricao: { type: 'string' },
            _id: { type: 'string' }
          }
        }
      }
    }
  },

  getProdutoByIdSchema: {
    type: 'object',
    required: ['nome', 'preco', 'descricao', '_id'],
    properties: {
      nome: { type: 'string' },
      preco: { type: 'number' },
      descricao: { type: 'string' },
      _id: { type: 'string' }
    }
  },

  putProdutoSchema: {
    type: 'object',
    required: ['message'],
    properties: { message: { type: 'string' } }
  },

  deleteProdutoSchema: {
    type: 'object',
    required: ['message'],
    properties: { message: { type: 'string' } }
  }
};

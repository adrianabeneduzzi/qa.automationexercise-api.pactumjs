// tests/schemas/usuariosSchema.js

module.exports = {

  // 🔹 POST /usuarios
  postUsuarioSchema: {
    type: 'object',
    required: ['message', '_id'],
    properties: {
      message: { type: 'string' },
      _id: { type: 'string' }
    }
  },

  // 🔹 GET /usuarios
  getUsuariosSchema: {
    type: 'object',
    required: ['quantidade', 'usuarios'],
    properties: {
      quantidade: { type: 'number' },
      usuarios: {
        type: 'array',
        items: {
          type: 'object',
          required: ['nome', 'email', 'password', 'administrador', '_id'],
          properties: {
            nome: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
            administrador: { type: 'string' },
            _id: { type: 'string' }
          }
        }
      }
    }
  },

  // 🔹 GET /usuarios/{_id}
  getUsuarioByIdSchema: {
    type: 'object',
    required: ['nome', 'email', 'password', 'administrador', '_id'],
    properties: {
      nome: { type: 'string' },
      email: { type: 'string' },
      password: { type: 'string' },
      administrador: { type: 'string' },
      _id: { type: 'string' }
    }
  },

  // 🔹 DELETE /usuarios/{_id}
  deleteUsuarioSchema: {
    type: 'object',
    required: ['message'],
    properties: {
      message: { type: 'string' }
    }
  },

  // 🔹 PUT /usuarios/{_id}
  putUsuarioSchema: {
    type: 'object',
    required: ['message'],
    properties: {
      message: { type: 'string' }
    }
  }
};
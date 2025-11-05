# 🧪 QA Automation Exercise API — PactumJS

Automação de testes de API utilizando **PactumJS**, **Mocha** e **mochawesome** para relatórios em HTML.  
O projeto tem como objetivo validar endpoints de forma funcional e contratual, garantindo a qualidade e consistência das APIs.

---

## ⚙️ Instalação e Configuração

### 🧩 Pré-requisitos

Antes de iniciar, verifique se possui instalado:

- **Node.js** (versão 18 ou superior)  
- **npm** (gerenciador de pacotes do Node)

Verifique as versões:
```bash
node -v
npm -v
```

---

### 1️⃣ Instalar dependências

No diretório raiz do projeto, execute:

```bash
npm install
```

---

### 2️⃣ Configurar o endpoint da API

Edite o arquivo `config/api.js` com o endereço base da API:

```javascript
module.exports = {
  baseUrl: 'https://serverest.dev'
};
```

💡 *Dica:* Você pode alterar essa URL conforme o ambiente (produção, homologação ou local).

---

## 🧰 Estrutura do Projeto

```
qa.automationexercise-api.pactumjs/
│
├── config/
│   └── api.js
│
├── schemas/
│   ├── loginSchema.js
│   ├── usuarioSchema.js
│   └── produtoSchema.js
│
├── tests/
│   ├── login/
│   ├── usuarios/
│   └── produtos/
│
└── reports/
    └── mochawesome-report.html
```

---

## 🚀 Execução dos Testes

### ▶️ Executar **todos os testes**
```bash
npm test
```

---

### 🔐 Testes de Login
```bash
npm run test:login
```

---

### 👥 Testes de Usuários
```bash
npm run test:usuarios
```

---

### 📦 Testes de Produtos
```bash
npm run test:produtos
```

---

## 🧾 Gerar Relatórios HTML

Após a execução, os relatórios serão gerados automaticamente na pasta:
```
./reports/mochawesome-report/
```

Para abrir o relatório:
```bash
npx mochawesome-merge reports/*.json > reports/report.json
npx marge reports/report.json
```

Ou, se tiver configurado o script no `package.json`:
```bash
npm run report:login
npm run report:usuarios
npm run report:produtos
```
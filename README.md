# 🚀 Cypress + Cucumber (BDD) Test Automation

Projeto de automação de testes web desenvolvido com **Cypress** e **Cucumber**, aplicando conceitos de **BDD (Behavior Driven Development)** e organização com **Page Objects**.

O foco principal deste projeto foi praticar a escrita de cenários em **Gherkin**, implementação de **step definitions** e automação de fluxos de **login** e **cadastro**.

---

## 📌 Objetivo

Este projeto foi criado com o objetivo de:

- Praticar automação de testes com Cypress
- Aplicar BDD com Cucumber (Gherkin)
- Estruturar testes com Page Objects
- Separar responsabilidades entre cenários, steps e ações
- Simular cenários reais de validação de sistema

---

## 🛠 Tecnologias utilizadas

- JavaScript
- Cypress
- Cucumber (BDD)
- Gherkin

---

## 📁 Estrutura do projeto

```bash
cypress-bdd-cucumber/
│
├── cypress/
│   ├── e2e/
│   │   └── features/
│   │       ├── login.feature
│   │       └── register_user.feature
│   │
│   ├── support/
│   │   ├── pages/
│   │   │   ├── home_page.js
│   │   │   ├── login_page.js
│   │   │   └── register_page.js
│   │   │
│   │   ├── step_definitions/
│   │   │   ├── login_steps.js
│   │   │   └── register_steps.js
│   │   │
│   │   ├── commands.js
│   │   └── e2e.js
│
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Arquitetura dos testes

O projeto segue a seguinte organização:

### ✅ Feature files (.feature)

Contêm os cenários escritos em Gherkin (BDD), descrevendo o comportamento esperado da aplicação.

### ✅ Step Definitions

Responsáveis por implementar os passos descritos nos arquivos `.feature`, conectando o comportamento à automação em código.

### ✅ Page Objects

Centralizam os elementos e ações das páginas, promovendo:

- reutilização de código  
- manutenção facilitada  
- melhor organização  

---

## 🔄 Fluxo dos testes

.feature (BDD)
↓
Step Definitions
↓
Page Objects
↓
Cypress Commands


---

## 🧪 Cenários cobertos

### 🔐 Login

- Login com sucesso  
- Login com credenciais inválidas  
- Validação de campos obrigatórios  

### 📝 Cadastro

- Cadastro com sucesso  
- Cadastro com campo nome vazio  
- Cadastro com campo e-mail vazio  
- Cadastro com e-mail inválido  
- Cadastro com senha vazia  
- Cadastro com senha inválida  

---

## 💡 Boas práticas aplicadas

- Separação de responsabilidades (BDD + Steps + Pages)  
- Uso de Page Objects  
- Reutilização de métodos  
- Organização de estrutura de pastas  
- Escrita de cenários legíveis (Gherkin)  

---

## ▶️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>

### 2. Instalar dependências
npm install

### 3. Executar testes (modo interativo)
npx cypress open

### 4. Executar testes (modo headless)
npx cypress run

⚠️ Observações

Este projeto foi desenvolvido com foco em aprendizado e prática de Cypress com Cucumber

Os testes simulam cenários reais de validação de formulário

Para cenários de cadastro com sucesso, recomenda-se utilizar e-mails dinâmicos para evitar conflitos


👩‍💻 Autora

Desenvolvido por Ruth Dantas 🚀


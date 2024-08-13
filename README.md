# Projeto MKS 🚀

Este é o projeto MKS, uma aplicação completa que inclui um frontend em Angular, um backend em Java com Spring Boot, e um banco de dados PostgreSQL. O projeto também integra Swagger para a documentação das APIs.

## Estrutura do Projeto 🏗️

### Frontend 🌐

- **Tecnologia:** Angular 18
- **Framework:** Angular Material
- **Funcionalidades:**
  - Tela de login (mockada)
  - Tela de cadastro e edição de registros
  - Tela de lista com pesquisa e paginação para a entidade `Overlay`

### Backend 🔧

- **Tecnologia:** Java 17
- **Framework:** Spring Boot
- **Banco de Dados:** PostgreSQL (produção), H2 (teste)
- **Funcionalidades:**
  - CRUD completo para a entidade `Overlay`
  - Controle de usuários com diferentes níveis de acesso
  - Endpoints protegidos e não protegidos
  - Configuração de segurança personalizada

### Banco de Dados 🗄️

- **Tecnologia:** PostgreSQL
- **Estrutura:**
  - **Tabela `overlay`:** Armazena informações sobre os registros de overlay
  - **Tabela `usuarios`:** Armazena informações de usuários com níveis de acesso

### Swagger 📜

- **Descrição:** Swagger é utilizado para a documentação das APIs. Permite a visualização e teste das APIs diretamente na interface web.

## Configuração e Execução ⚙️

### Backend 🔧

1. **Configuração do Banco de Dados:**
   - Certifique-se de que o PostgreSQL está instalado e em execução.
   - Crie o banco de dados necessário para o projeto.
   - Atualize o arquivo `application.properties` com as credenciais e detalhes do banco de dados.

2. **Executar o Backend:**
   - Navegue até o diretório do backend.
   - Compile e execute a aplicação Spring Boot:
     ```bash
     ./mvnw spring-boot:run
     ```

### Frontend 🌐

1. **Configuração do Projeto:**
   - Certifique-se de que o Node.js e o Angular CLI estão instalados.
   - Navegue até o diretório do frontend.
   - Instale as dependências do projeto:
     ```bash
     npm install
     ```

2. **Executar o Frontend:**
   - Inicie o servidor de desenvolvimento Angular:
     ```bash
     ng serve
     ```
   - Acesse a aplicação no navegador através de `http://localhost:4200`.

### Swagger 📜

- **Acesso à Documentação:**
  - Após iniciar o backend, a documentação Swagger pode ser acessada em `http://localhost:8080/swagger-ui.html`.

## Tabelas do Banco de Dados 🗄️

### Tabela `overlay`

```sql
CREATE TABLE overlay (
    id SERIAL PRIMARY KEY,
    idProduto VARCHAR(255),
    paredeFornalha VARCHAR(255),
    local VARCHAR(255),
    numeroTubo INT,
    numeroTuboAdjacente VARCHAR(255),
    elevacaoInferior INT,
    elevacaoSuperior INT,
    dimensao INT,
    escopo VARCHAR(255),
    lado VARCHAR(255),
    tipoEscopo VARCHAR(255),
    liberadoGeral VARCHAR(255),
    pendenteGeralParceiro VARCHAR(255),
    pendenteGeralMKS VARCHAR(255),
    executadoSoldaMKS INT,
    terminoMKS DATE,
    validacaoCQMKS INT,
    validacaoMKS DATE,
    validadoParceiro INT,
    vsParceiro INT,
    lpParceiro INT,
    liberadoParceiro VARCHAR(255),
    dataLiberadoParceiro DATE,
    status VARCHAR(255),
    observacaoAlumar TEXT,
    observacaoMKS TEXT,
    observacaoParceiro TEXT
);

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    usuario VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    nivel VARCHAR(255) NOT NULL
);

-- Inserir usuários
INSERT INTO usuarios (usuario, senha, nivel) VALUES
('operador', '123', '3'),
('admin', 'admin', '1'),
('supervisor', '456', '2');



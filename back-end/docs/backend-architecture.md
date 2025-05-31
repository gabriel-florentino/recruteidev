# 🧱 Arquitetura Base – Backend (MVP)

> Documentação da arquitetura inicial do backend para o MVP da plataforma de recrutamento reverso de devs.

---

## 📌 Visão Geral

* **Objetivo:** Construir uma API backend simples, segura e escalável para o MVP.
* **Público-alvo:** Desenvolvedores e empresas.
* **Arquitetura:** RESTful com separação por módulos (MVC por domínio).
* **Tech Stack:**

  * **Node.js + Express**
  * **PostgreSQL** com ORM **Prisma**
  * **Autenticação:** JWT + Google OAuth2
  * **Gerenciador de rotas:** Express Router
  * **Deploy:** Railway (ou alternativa)

---

## 🗂️ Estrutura de Pastas

```ruby
src/
├── config/               # Configurações globais (DB, Swagger, env)
├── modules/              # Cada módulo isolado (auth, users, onboarding...)
│   ├── auth/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── routes/
│   │   ├── validators/
│   │   └── auth.module.ts
│   └── user/
│       ├── controllers/
│       ├── services/
│       ├── routes/
│       ├── validators/
│       └── user.module.ts
├── middlewares/          # Autenticação, erros, logs, etc.
├── shared/               # Utilitários e tipos comuns (helpers, utils, enums)
├── prisma/               # Prisma schema e client (ou outro ORM)
│   ├── schema.prisma
│   └── client.ts
├── app.ts                # Inicialização do app (Express config)
├── server.ts             # Entrada da aplicação
└── routes.ts             # Rotas centralizadas
```

### 🧩 Divisão de Responsabilidades

| Pasta          | Responsabilidade                                                 |
| -------------- | ---------------------------------------------------------------- |
| `config/`      | Swagger, .env, Cors, RateLimiter, conexão DB                     |
| `modules/`     | Domínio de negócio isolado. Fácil escalar sem virar bola de neve |
| `middlewares/` | JWT, erros globais, logging, validações cruzadas                 |
| `shared/`      | Funções utilitárias, constantes globais, tipos DTO               |
| `prisma/`      | (Se usar Prisma) ou equivalente para Sequelize, TypeORM          |
| `routes.ts`    | Centraliza todas as rotas registradas                            |
| `app.ts`       | Aplica middlewares, configurações e rotas                        |
| `server.ts`    | Sobe o servidor (HTTP ou com Socket, se precisar)                |

---

## 🛠️ Stack Tecnológica Recomendada

| Item               | Tecnologia                            |
| ------------------ | ------------------------------------- |
| Server             | Express.js (com TypeScript)           |
| ORM                | Prisma (ou Sequelize / TypeORM)       |
| Auth               | JWT + Google OAuth2                   |
| Docs               | Swagger (OpenAPI 3)                   |
| Validação          | Zod ou Joi                            |
| Log & Erro         | Winston ou pino + Middleware global   |
| Testes             | Jest ou Vitest                        |
| Banco              | PostgreSQL (ideal) / MySQL            |
| CI/CD (mais tarde) | GitHub Actions / Railway / Vercel API |

---

## 🔐 Autenticação

* **Login tradicional:** Email + senha com JWT (armazenado via HttpOnly cookies).
* **Login alternativo:** Google OAuth2 (usando Firebase Auth).
* **Proteção de rotas:** Middleware que verifica o token JWT.
* **Tokens expiram em:** 7 dias (renováveis).
* **Rota de logout:** limpa o cookie.
* **Rota de esqueci minha senha:** Token com duração de 1 hora.

---

## 🧾 Modelos de Dados (Banco de Dados)

### User

* id (UUID)
* email (único)
* senha\_hash
* tipo: `DEV` | `EMPRESA`
* perfil\_completo (boolean)
* criado\_em
* reset\_token: string | null
* reset\_token\_expiration: Date | null

### DevProfile

* id: UUID
* user\_id: UUID (FK para User)
* nome\_completo: string
* titulo\_perfil: string
* cpf: string (único)
* descricao: text
* curriculo\_url: string
* portfolio\_url: string
* stacks: string\[]
* senioridade: enum
* disponibilidade: enum\[]
* imagem\_url: string
* cidades\_interesse: string\[]
* pretensao\_salarial: number
* perfil\_publico: boolean
* mostrar\_pretensao: boolean
* criado\_em: datetime
* atualizado\_em: datetime

### CompanyProfile

* id: UUID
* user\_id: UUID (FK para User)
* nome\_fantasia: string
* logotipo\_url: string
* titulo\_perfil: string
* cnpj: string (único)
* descricao: text
* criado\_em: datetime
* atualizado\_em: datetime

---

## 🔄 Fluxos de Autenticação

### Cadastro

* Inicial: apenas email + senha + confirmação de tipo (dev ou empresa)
* CPF ou CNPJ **não são exigidos no cadastro inicial**, serão coletados no onboarding

### Onboarding

* Perfil incompleto → bloqueado o acesso ao dashboard
* Devs: preencher CPF e informações técnicas
* Empresas: preencher CNPJ e dados de empresa
* Onboarding salva progresso entre etapas

---

## 🔐 Proteção e Segurança

* Validação de entrada (`zod` ou `express-validator`)
* Hash de senha com **bcrypt**
* O token é um UUID aleatório, com validade curta (1 hora).
* Enviado por email (ex: via Nodemailer).
* Não incluir o token no corpo de requisições inseguras (apenas no link).
* Nova senha exige força mínima (validação).
* JWT com segredo assinado e tempo de expiração
* Cookies `HttpOnly` e `Secure`
* CORS configurado com whitelist
* Debounce nos formulários de autenticação para evitar spam
* Rate limiting com `express-rate-limit`

---

## 💬 Mensagens de Erro (Backend)

| Código | Situação                              | Mensagem JSON                                             |
| ------ | ------------------------------------- | --------------------------------------------------------- |
| 409    | Email já cadastrado                   | `{ error: "E-mail já está em uso" }`                      |
| 422    | Dados inválidos                       | `{ error: "CPF inválido" }`                               |
| 401    | Usuário/senha incorretos              | `{ error: "Credenciais inválidas" }`                      |
| 403    | Acesso negado                         | `{ error: "Perfil incompleto" }`                          |
| 500    | Erro interno                          | `{ error: "Erro inesperado" }`                            |
| 400    | Token inválido ou expirado            | `{ error: "Token inválido ou expirado" }`                 |
| 422    | Senha fraca ou inválida               | `{ error: "Senha inválida" }`                             |
| 200    | Link enviado (sem revelar existência) | `{ message: "Se o e-mail existir, enviaremos um link." }` |

---

## 🧪 Testes

* **Unitários** com Jest
* **Testes de integração** com Supertest nas rotas principais
* Cobrir:

  * Cadastro
  * Login
  * Onboarding
  * Proteção de rotas privadas

---

## 🚀 Deploy

* Ambiente: Railway (alternativa: Render ou VPS com PM2)
* Variáveis `.env`:

```env
DATABASE_URL=
JWT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

* Logs por ambiente (`dev`, `staging`, `prod`)
* Documentação de API com Swagger (ou Postman Collection exportada)

---

## ✅ Checklist MVP

* [x] Cadastro com email/senha
* [x] Login com JWT
* [x] Google OAuth
* [x] Onboarding obrigatório com salvamento progressivo
* [x] Validação de CPF/CNPJ (no onboarding)
* [x] Proteção de rotas com middleware
* [x] Recuperação de senha com link seguro
* [x] Testes de rotas e autenticação

---

## 📡 Rotas e Endpoints

### Auth

| Método | Endpoint                | Descrição                      |
| ------ | ----------------------- | ------------------------------ |
| POST   | `/auth/register`        | Cadastro de usuário            |
| POST   | `/auth/login`           | Login tradicional (JWT)        |
| POST   | `/auth/google`          | Login via Google OAuth2        |
| POST   | `/auth/logout`          | Logout (limpa cookie)          |
| POST   | `/auth/forgot-password` | Inicia processo de recuperação |
| POST   | `/auth/reset-password`  | Redefine senha via token       |

### User

| Método | Endpoint       | Descrição                |
| ------ | -------------- | ------------------------ |
| GET    | `/user/me`     | Retorna dados do usuário |
| PATCH  | `/user/update` | Atualiza dados básicos   |

### Onboarding

| Método | Endpoint              | Descrição                          |
| ------ | --------------------- | ---------------------------------- |
| POST   | `/onboarding/dev`     | Criação de perfil de dev           |
| POST   | `/onboarding/company` | Criação de perfil de empresa       |
| GET    | `/onboarding/status`  | Verifica se o perfil está completo |
| PATCH  | `/onboarding/dev`     | Atualiza perfil de dev             |
| PATCH  | `/onboarding/company` | Atualiza perfil de empresa         |

---

## 📈 Futuras Melhorias

* Confirmação de email
* Uploads via Cloudinary/S3
* Webhooks para integração com ATS
* Dashboard de analytics para devs e empresas
* Match automático baseado em stack e salário


---

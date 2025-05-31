# Plataforma de Recrutamento com Testes Técnicos (LinkedIn Reverso)

Este projeto é uma **plataforma de recrutamento baseada em habilidades**, onde **os candidatos se destacam por seus resultados em testes técnicos** — e **as empresas buscam talentos já qualificados** com base nesses dados. Ao contrário de um LinkedIn tradicional, aqui **os candidatos são avaliados primeiro** para depois serem encontrados pelas empresas.

---

## 💡 Visão do Projeto

- Candidatos realizam testes técnicos e constroem um perfil baseado em **performance real**, não em títulos.
- Empresas acessam candidatos já testados, com **dados objetivos sobre as habilidades**.
- É como um **LinkedIn reverso**: em vez de o candidato buscar a empresa, **a empresa busca quem realmente domina as habilidades**.

---

## 🧩 Funcionalidades do MVP

- Cadastro e login para candidatos e empresas
- Perfil técnico com resultados de testes públicos
- Realização de testes técnicos em diversas áreas (dev, design, etc.)
- Dashboard de desempenho para o candidato
- Painel de busca para empresas com filtros por performance
- Recuperação de senha por e-mail
- Autenticação segura com JWT e Google OAuth (em breve)

---

## 🛠 Tecnologias

**Design:**
- Figma (para design componentizado em atomic design)
- Cloudnary (para imagens do design-system)

**Frontend:**
- React + Vite + Tailwind CSS + Typescript
- Atomic Design
- Zustand (gerenciamento de estado leve)
- Context API para temas e autenticação

**Backend:**
- Node.js + Express
- PostgreSQL + Prisma ORM
- JWT + refresh tokens + cookies HttpOnly
- Zod para validações
- Arquitetura modular RESTful

**Hospedagem:**
- Frontend: Vercel  
- Backend: Render

---

## 🧱 Arquitetura do Backend

O backend segue uma estrutura **modular, escalável e segura**, com validações robustas, autenticação completa e separação clara de responsabilidades.

👉 Leia mais em [`backend-architecture.md`](back-end/docs/backend-architecture.md)

---

## 🧬 Frontend com Atomic Design

Utilizamos **Atomic Design** para estruturar os componentes de forma reutilizável e consistente.

👉 Detalhes em [`frontend-architecture.md`](front-end/docs/frontend-architecture.md)

---

## 🎨 Design System

Nosso Design System inclui:

- Tokens de espaçamento, cores e tipografia
- Componentes visuais documentados
- Acessibilidade e responsividade como padrões

👉 Veja mais em [`design-system.md`](design/design-system.md)

---

## 🎨 Protótipo no Figma

Quer entender visualmente como será a plataforma? Acesse o design no Figma:

👉 [Abrir Figma](https://www.figma.com/design/EZAE9PXkrPzwHwDIfEuzoy/Recruteii?node-id=2-3&t=MFtyoSGDUpu9857C-1)

---

## 🧱 Estrutura do Repositório

```perl

recruteidev/
├── back/ # Backend (API, banco de dados, autenticação)
│   └── docs/
│       └── backend-architecture.md
│
├── front/ # Frontend (interfaces, rotas, componentes)
│   └── docs/
│       └── frontend-architecture.md
│       └── components.md
│
├── design/ # Figma, imagens, Design System
│   └── design-system.md
│   └── auth-flow.md
│   └── components.md
│   └── tokens.js
│
├── README.md # Este arquivo
└── ROADMAP.md # Arquivo com os proximos passos

```

---

## 🚧 Status do Projeto

O projeto está em fase de **desenvolvimento inicial**, com as bases estruturais do backend e frontend sendo implementadas.

👉 Acompanhe o progresso no [`ROADMAP.md`](./ROADMAP.md)

---

## 🤝 Contribuições

Este projeto é pessoal, mas **aberto a feedbacks e colaborações**. Quer testar, revisar ou sugerir melhorias? Fique à vontade para abrir uma issue.

---

## 📫 Contato

Caso queira conversar sobre o projeto, parcerias ou ideias:

📧 [gabrielflorentino.contato@gmail.com]  
🔗 [LinkedIn](https://www.linkedin.com/in/gabriel-florentino/)

---

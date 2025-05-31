# 🧱 Arquitetura Base – Frontend (MVP)

>Documentação da arquitetura inicial do frontend para o MVP da plataforma de recrutamento reverso de devs.

## 📌 Visão Geral

* **Objetivo**: Criar um frontend moderno, modular, reutilizável e performático.
* **Framework**: React (com Vite)
* **Linguagem**: TypeScript
* **Design** System: Atomic Design
* **Gerenciamento** de Estado: Context API + custom hooks
* **Estilização**: CSS Modules ou Tailwind CSS (a depender da stack decidida)
* **Consumo** de API: Axios + hooks personalizados
* **Roteamento**: React Router DOM
* **Autenticação**: Context + cookies HttpOnly
* **Deploy**: Vercel (ou Netlify, Render, etc.)

---

## Tecnologias Principais

| Tecnologia          | Propósito                                     |
|---------------------|----------------------------------------------|
| **Vite**            | Bundler rápido e moderno                      |
| **React**           | UI declarativa e componente                   |
| **TailwindCSS**     | Estilos utilitários sem sofrimento            |
| **Context API**     | Gerenciamento leve de estado global            |
| **Axios**           | Chamadas HTTP                                 |
| **Framer Motion**   | Animações fluidas e naturais                   |
| **React Hook Form** | Gerenciamento de formulários eficientes       |
| **Yup**             | Validação de formulários declarativa           |
| **Jest**            | Testes unitários e integração                   |

---

## Fluxo e Boas Práticas

- Átomos são componentes atômicos e reutilizáveis, como botões, inputs e ícones.
- Moléculas combinam átomos para criar pequenas unidades funcionais, como um grupo de input com label e validação.
- Organismos são seções maiores, por exemplo, cabeçalho, formulário complexo ou lista de cards.
- Templates definem layouts de página sem conteúdo final — a “moldura” do design.
- Páginas combinam templates com dados reais e lógica.

- Todos os dados assíncronos são carregados na camada de organismos ou páginas, usando Axios e Context API para compartilhamento.
- Formulários são implementados com React Hook Form e validados com Yup, localizados em moléculas ou organismos.
- Animações são usadas em organismos e templates para melhorar UX.
- Testes com Jest garantem estabilidade dos átomos, moléculas e organismos, focando também na interação dos formulários.

---

## Benefícios dessa arquitetura

- Modularidade real, que facilita manutenção e escalabilidade.
- Reutilização explícita e lógica na composição.
- Facilita onboarding de novos devs (e a vida fica mais fácil pra você).
- Separação clara entre visual, estrutura e dados.
- Mais fácil de implementar design system e manter consistência visual.
- Melhora performance com componentes pequenos e bem definidos.

---


## 🗂️ Atomic Design - Estrutura de Pastas

``` perl

src/
├── assets/              # Imagens, fontes, ícones
├── components/          # Componentes globais (Atomic Design)
│   ├── atoms/           # Elementos básicos: Botão, Input, Label
│   ├── molecules/       # Combinações simples: FormField, CardPerfil
│   ├── organisms/       # Estruturas complexas: Formulários, Header
│   └── templates/       # Layouts de página: Dashboard, AuthLayout
├── contexts/            # Context API (auth, onboarding, theme, etc.)
├── hooks/               # Custom Hooks (useAuth, useOnboarding, useApi)
├── pages/               # Páginas do app (rotas)
│   ├── Home/
│   ├── Auth/
│   ├── Dashboard/
│   └── Onboarding/
├── services/            # Configuração de API (Axios)
├── types/               # Tipagens globais (DTOs, enums, etc.)
├── utils/               # Helpers e funções reutilizáveis
├── styles/              # Estilos globais (se usar CSS modules ou global.css)
├── routes/              # Definição das rotas públicas/privadas
├── App.tsx              # Setup principal do app
├── main.tsx             # Entrada da aplicação
└── vite.config.ts       # Configuração do Vite

```

---

## 🧩 Padrões Utilizados

| Abordagem     | Descrição                                                                 |
| ------------- | ------------------------------------------------------------------------- |
| Atomic Design | Componentes organizados por granularidade (atom > molecule > organism...) |
| Context API   | Contextos para Auth, Onboarding, Theme, etc.                              |
| Custom Hooks  | Encapsular lógica reutilizável (`useAuth`, `useFormPersist`, etc.)        |
| DTOs tipados  | Interface dos dados espelhando o backend                                  |
| Modularização | Separação clara entre domínios e responsabilidades                        |

---

## 🔐 Autenticação (Frontend)

* **Context**: AuthContext controla login, logout, dados do usuário.
* **Armazenamento**: Cookies HttpOnly (não acessíveis via JS, maior segurança).
* **Verificação**: Check inicial em App.tsx (requisição /user/me).
* **Proteção** de rotas: Componente PrivateRoute no react-router.

---

## 💻 Telas e Rotas (MVP)

| Página             | Rota                  | Regras de acesso                |
| ------------------ | --------------------- | ------------------------------- |
| Home               | `/`                   | Pública                         |
| Login              | `/login`              | Pública (redireciona se logado) |
| Cadastro           | `/register`           | Pública                         |
| Onboarding Dev     | `/onboarding/dev`     | Protegida (após login)          |
| Onboarding Empresa | `/onboarding/company` | Protegida (após login)          |
| Dashboard Dev      | `/dashboard/dev`      | Protegida + perfil completo     |
| Dashboard Empresa  | `/dashboard/company`  | Protegida + perfil completo     |

---

## 🔁 Integração com API

* **Axios**: Instância com interceptors para injetar cookies automaticamente.
* **Hooks** personalizados: useApi, useAuth, useOnboarding.
* **Mensagens** de erro: Toasts ou modais com base na resposta do backend.
* **Validação** frontend: Zod ou Yup em conjunto com React Hook Form.

---


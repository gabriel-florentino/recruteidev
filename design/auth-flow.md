# 🧾 Documentação Técnica – Fluxo de Cadastro e Login

> Este documento descreve o comportamento detalhado do fluxo de autenticação (login/cadastro), recuperação de senha, onboarding e redirecionamento para o dashboard.

<img width="100%" src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748621166/Untitled_qtgxvh.jpg
"/>
---

## 📌 Visão Geral do Fluxo

1. Início → Entrar ou Cadastrar
2. Login com email/senha ou Google OAuth
3. Verificação de existência do usuário
4. Se não cadastrou → processo de cadastro
5. Se não concluiu perfil → onboarding
6. Se sim → redireciona para Dashboard

---

## 🧍 Cadastro

### Campos obrigatórios

- Email `email`  **Obrigatorio**
  - Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - Erro inline: "E-mail inválido"
  - Backend valida duplicidade
- Senha `password` **Obrigatorio**
  - Mínimo: 6 caracteres
  - Requisitos: não pode haver sequencia
  - Erro inline: "A senha precisa ter 6 caracteres e não pode ser sequencial EX: 123 ou abc"
- Chechbox `checkbox`  **Obrigatorio** se sou empresa não ativo
  - booleano: Sou dev?
- Chechbox `checkbox` **Obrigatorio** se sou dev não ativo
  - booleano: Sou empresa?

### Interações

- Checkbox "Sou dev" ativo - Desativa o "Sou empresa"
- Checkbox "Sou empresa" ativo - Desativa o "Sou dev"
- Botão "Cadastrar" só habilita quando todos os campos estão válidos
- Spinner aparece ao enviar
- Inputs ficam desativados durante envio
- Backend responde:
  - `201 Created` → redireciona para login
  - `409 Conflict` → email já cadastrado → mostra erro inline
  - `422 Unprocessable` → erro de validação backend → exibe mensagens correspondentes

---

## 🔐 Login

### Campos

- Email
- Senha
- Lembre-se de mim
- Ou login via Google OAuth

### Fluxo

- Verifica se email existe no banco
  - Se não existe → "Usuário não encontrado"
- Valida senha
  - Se inválida → "Senha incorreta"
- Se tudo ok:
  - Inicia sessão (JWT ou Google)
  - Verifica se o perfil está completo

---

## 👤 Onboarding

Usuário logado, mas com perfil incompleto.

### Exigência

- Completar informações pendentes (ex: localização, preferências, tipo de conta, etc.)

### Comportamento

- Usuário não acessa o Dashboard até concluir
- Onboarding é sequencial (step-by-step)
- Salva progresso entre os passos

---

## 💬 Mensagens Inline (front-end)

| Cenário                         | Mensagem                           |
|-------------------------------|------------------------------------|
| Campo vazio                   | "Preencha este campo"              |
| Email inválido                | "E-mail inválido"                  |
| Senha fraca                   | "Senha precisa ser mais forte"     |
| Senhas diferentes             | "As senhas não coincidem"          |
| Email já cadastrado           | "Esse e-mail já está em uso"       |
| Login: usuário não existe     | "Usuário não encontrado"           |
| Login: senha errada           | "Senha incorreta"                  |
| Backend: erro genérico        | "Algo deu errado, tente novamente" |

---

## 🔁 Recuperação de Senha

### Passos

1. Usuário clica em "Esqueci minha senha"
2. Digita o e-mail
3. Backend envia token por e-mail
4. Usuário clica no link → redireciona para tela de nova senha
5. Define nova senha
6. Backend atualiza e redireciona para login

---

## 🔐 JWT / OAuth

- Login padrão usa token JWT
- Google OAuth disponível como alternativa
- Tokens salvos via `HttpOnly cookies`

---

## 🎯 Redirecionamento final

| Situação                          | Destino       |
|----------------------------------|----------------|
| Cadastro incompleto              | Onboarding     |
| Login com perfil incompleto      | Onboarding     |
| Login com perfil completo        | Dashboard      |

---

## 📎 Considerações

- Usar debounce no front para evitar spam de requisições
- Backend deve ter validação idêntica à do front (não confiar só no JS)
- Priorizar acessibilidade: leitores de tela, contraste de erro, etc.

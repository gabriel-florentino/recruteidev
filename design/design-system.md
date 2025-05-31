# 🧠 Sistema de Design — RecruteiDev
>Este Design System define os padrões visuais, interativos e de código da aplicação, garantindo consistência, acessibilidade e escalabilidade — sem dor de cabeça, sem gambiarra.

🔗 Veja aqui:
<a href="https://www.figma.com/design/mBT01lLxGsINrvo6XED6md/RecruteiDev?node-id=0-1&t=o5pxsU3GTziJXgpq-1">
Figma do projeto</a> | <a href="components.md"> 📄 components.md </a> | <a href="tokens.js"> 📍 tokens.js </a>


## 🎨 Cores
Como estamos criando uma plataforma para programadores, nada mais justo que homenagear o ambiente onde eles passam boa parte da vida: o editor de código. A paleta foi inspirada no Visual Studio Code — o queridinho da categoria.

O tema principal é escuro (dark mode) por padrão. Isso reduz a fadiga visual e, de quebra, deixa tudo com aquele visual hacker que a gente respeita.

### Tokens de Cor
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Token</th>
      <th>Valor</th>
      <th>Uso típico</th>
      <th>Visual</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bg</code></td>
      <td>#1e1e2e</td>
      <td>Fundo principal da aplicação</td>
      <td>
        <div style="width: 100%; height: 24px; background: #1e1e2e; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>surface</code></td>
      <td>#2C2C3A</td>
      <td>Superfícies de cards e painéis</td>
      <td>
        <div style="width: 100%; height: 24px; background: #2C2C3A; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td>#fefefe</td>
      <td>Cor padrão do texto principal</td>
      <td>
        <div style="width: 100%; height: 24px; background: #fefefe; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>muted</code></td>
      <td>#a0a0b2</td>
      <td>Textos secundários, legendas</td>
      <td>
        <div style="width: 100%; height: 24px; background: #a0a0b2; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>primary</code></td>
      <td>#3B82F6</td>
      <td>Ação principal, botões e links</td>
      <td>
        <div style="width: 100%; height: 24px; background: #3B82F6; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>disable</code></td>
      <td>#60A5FA</td>
      <td>Estado hover do botão primário</td>
      <td>
        <div style="width: 100%; height: 24px; background: #60A5FA; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>secondary</code></td>
      <td>#00FF9C</td>
      <td>Ações secundárias, destaques menores</td>
      <td>
        <div style="width: 100%; height: 24px; background: #00FF9C; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>danger</code></td>
      <td>#DC2626</td>
      <td>Sombras de Alertas e erros</td>
      <td>
        <div style="width: 100%; height: 24px; background: #EF4444; border: 1px solid #ccc;"></div>
      </td>
    </tr>
    <tr>
      <td><code>border</code></td>
      <td>#3F3F4F</td>
      <td>Bordas e separadores</td>
      <td>
        <div style="width: 100%; height: 24px; background: #3F3F4F; border: 1px solid #ccc;"></div>
      </td>
    </tr>
  </tbody>
</table>


| Par                  | Contraste |Texto normal |Texto grande |
|----------------------|-------------|-------------|-----------|
| text - bg            | 16.26     | ✅AA/✅AAA | ✅AA/✅AAA |
| text - surface       | 13.62     | ✅AA/✅AAA | ❌AA/✅AAA |
| muted - bg           | 6.38      | ✅AA/❌AAA | ✅AA/✅AAA |
| muted - surface      | 5.35      | ✅AA/❌AAA | ✅AA/✅AAA |
| primary - text       | 3.26      | ❌AA/❌AAA | ✅AA/AAA❌ |
| primary - bg         | 5.35      | ✅AA/❌AAA | ✅AA/✅AAA |
| secondary - bg       | 4.32      | ❌AA/❌AAA | ✅AA/❌AAA |
| disable - text | 2.69      | ❌AA/❌AAA | ❌AA/❌AAA | 
| danger - bg          | 4.46      | ❌AA/❌AAA | ✅AA/❌AAA |      
| danger - surface     | 3.78      | ❌AA/❌AAA | ✅AA/❌AAA |


---

## 🔤 Tipografias
Nada de firulas: a tipografia foi pensada para falar direto com quem vive no terminal. A fonte principal é a JetBrains Mono, a mesma usada por quem escreve código como quem escreve poesia. E para parágrafos e textos mais longos, vamos com a boa e confiável Roboto — legível e neutra.

> Tamanhos vão de 11px a 48px, com hierarquia clara e visual limpo. 

## Tokens de tipografia
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th>Token</th>
      <th>Tamanho</th>
      <th>Fonte</th>
      <th>Uso típico</th>
      <th>Exemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>h1</code></td>
      <td>48px</td>
      <td>JetBrains Mono</td>
      <td>Títulos principais, chamadas impactantes</td>
      <td style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace; font-size: 54px;">Título H1</td>
    </tr>
    <tr>
      <td><code>h2</code></td>
      <td>36px</td>
      <td>JetBrains Mono</td>
      <td>Subtítulos, seções importantes</td>
      <td style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace; font-size: 36px;">Título H2</td>
    </tr>
    <tr>
      <td><code>h3</code></td>
      <td>24px</td>
      <td>JetBrains Mono</td>
      <td>Subtítulos menores, destaques internos</td>
      <td style="font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace; font-size: 24px;">Título H3</td>
    </tr>
    <tr>
      <td><code>p</code></td>
      <td>16px</td>
      <td>Roboto</td>
      <td>Texto de parágrafos padrão, leitura confortável</td>
      <td style="font-family: 'Roboto', sans-serif; font-size: 16px;">Texto parágrafo</td>
    </tr>
    <tr>
      <td><code>small</code></td>
      <td>11px</td>
      <td>Roboto</td>
      <td>Textos menores, legendas e notas</td>
      <td style="font-family: 'Roboto', sans-serif; font-size: 11px;">Texto pequeno</td>
    </tr>
  </tbody>
</table>

---

## 📏 Espaçamentos
Espaçamento padronizado em múltiplos de 4, ancorado em 16px (1rem). Isso facilita responsividade e escalabilidade.

| Token | Valor  | Uso típico               | Visual                              |
|-------|--------|-------------------------|-----------------------------------|
| xs    | 4px    | Espaçamentos muito pequenos | <div style="width:4px; height:20px; background:#3B82F6;"></div>    |
| sm    | 8px    | Espaçamentos pequenos    | <div style="width:8px; height:20px; background:#3B82F6;"></div>    |
| md    | 16px   | Espaçamentos médios      | <div style="width:16px; height:20px; background:#3B82F6;"></div>   |
| lg    | 24px   | Espaçamentos grandes     | <div style="width:24px; height:20px; background:#3B82F6;"></div>   |
| xl    | 32px   | Espaçamentos muito grandes | <div style="width:32px; height:20px; background:#3B82F6;"></div>   |

---

## 🧱 Grid e Layout
Usamos um sistema de 12 colunas fluídas, baseado em CSS Grid, com gutters (espaços entre colunas) de 16px. A responsividade é mobile-first, com breakpoints pensados para os dispositivos mais comuns.

| Token   | Largura mínima   | Uso comum              | 
|---------|------------------|------------------------|
| xs    | 0px | Celulares pequenos      | 
| sm | 640px | Smartphones |
| md | 768px | Tablets |
| lg   | 1024px | Laptops      |
| xl   | 1280px | Desktops grandes      |

- Máximo de 1280px de largura para o conteúdo.
- Padding horizontal padrão de 16px.
- Conteúdo centralizado por padrão.
- Colunas podem ser agrupadas, colapsadas ou empilhadas conforme a viewport.

---

## 📦 Arredondamentos
Aqui, o design é sério — com cantos levemente arredondados. Nada muito "fofinho", mas o suficiente para deixar a interface amigável e moderna.

| Token | Valor  | Uso típico                          | Visual                              |
|-------|--------|-----------------------------------|-----------------------------------|
| sm    | 4px    | Bordas levemente arredondadas, botões e inputs básicos | <div style="width:40px; height:40px; background:#3B82F6; border-radius:4px;"></div>    |
| md    | 8px    | Cartões, modais, elementos que pedem arredondamento médio | <div style="width:40px; height:40px; background:#3B82F6; border-radius:8px;"></div>    |
| lg    | 16px   | Botões grandes, badges, chips      | <div style="width:40px; height:40px; background:#3B82F6; border-radius:16px;"></div>   |
| full  | 9999px | Círculos completos, avatares, botões circulares | <div style="width:40px; height:40px; background:#3B82F6; border-radius:9999px;"></div> |

---

## 🌟 Efeitos
Nada de sombra tímida. Aqui é glow real, destacando o que importa com presença visual.

| Token   | Valor            | Uso típico              | Visual                             |
|---------|------------------|------------------------|----------------------------------|
| glow    | 0 0 12px #FEFEFE | Destaques gerais       | <div style="width:50px; height:30px; box-shadow: 0 0 12px #FEFEFE; border:1px solid #ccc;"></div> |
| primary | 0 0 12px #3B82F6 | Botões e elementos azuis | <div style="width:50px; height:30px; box-shadow: 0 0 12px #3B82F6; border:1px solid #ccc;"></div>  |
| success | 0 0 12px #00FF9C | Indicadores de sucesso | <div style="width:50px; height:30px; box-shadow: 0 0 12px #00FF9C; border:1px solid #ccc;"></div>  |
| error   | 0 0 12px #EF4444 | Mensagens de erro      | <div style="width:50px; height:30px; box-shadow: 0 0 12px #EF4444; border:1px solid #ccc;"></div>  |

---

## 🔡 Ícones
Ícones são monocromáticos e minimalistas, preferencialmente do pacote Lucide. A cor padrão é text-muted, com escala proporcional ao tamanho da fonte (1em).

--- 

## ♿ Acessibilidade
Este Design System já nasce com empatia no código. Alguns princípios adotados:

- Contraste mínimo de 4.5:1 entre texto e fundo
- Uso consistente de aria-* nos componentes
- Feedbacks visuais e auditivos sempre que possível
- Navegabilidade 100% via teclado
- Sem dependência exclusiva de cor para transmitir informação

--- 

## 📱 Responsividade
O design é mobile-first e pensado para funcionar de forma fluida desde o smartphone mais humilde até um monitor ultrawide de 49". Componentes se adaptam graciosamente entre os breakpoints, e textos e ícones escalam proporcionalmente com rem.

---

## 🧩 Componentes
Os componentes seguem a filosofia Atomic Design: átomos (botões, inputs), moléculas (formulários, cards), organismos (listas, painéis), templates e páginas. Cada componente é construído com:

- Semântica HTML apropriada
- Acessibilidade (aria-labels, foco visível, contraste adequado)
- Tokens de design reutilizáveis (cores, tipografia, espaçamento)

▶ A lista completa está em:
<a href="components.md"> 📄 components.md </a>

---

## ⚙️ Integração com Código
Todos os estilos estão disponíveis via classes utilitárias no padrão Tailwind é só fazer a importação no arquivo de configuração conforme abaixo. Exemplo:

```js
//tailwind.config.js
const tokens = require('./tokens');

module.exports = {
  theme: {
    extend: {
      colors: tokens.colors,
      borderRadius: tokens.borderRadius,
      spacing: tokens.spacing,
      fontFamily: tokens.fontFamily,
      fontSize: tokens.fontSize,
      boxShadow: tokens.boxShadow,
    },
  },
};

```

---

## 🚨 Observações Finais
Este Design System está vivo: evolui com o produto, com o time e com o feedback dos devs que usam.

Toda sugestão é bem-vinda, menos usar Comic Sans. Aí já é heresia.

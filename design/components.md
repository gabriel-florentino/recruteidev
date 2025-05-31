# 🎨 `components.md` – Guia Visual de Componentes
>📌 Este arquivo descreve o comportamento visual, estados, padrões de layout e estilo dos principais componentes da aplicação. Serve como guia para designers e desenvolvedores manterem consistência na interface.

🔗 Veja aqui:
<a href="https://www.figma.com/design/mBT01lLxGsINrvo6XED6md/RecruteiDev?node-id=0-1&t=o5pxsU3GTziJXgpq-1">
Figma do projeto</a> | <a href="design-system.md"> 📄 design-system.md </a>

**Todas as referencias a estão no arquivo**  <a href="tokens.js"> 📍 tokens.js </a>


---

# Atoms

## 🧱 Botão (`button`)
### ✔️ Uso
Utilizado para ações primárias e secundárias (salvar, enviar, cancelar, etc.).
### 💡 Estilos

```js
    boxShadow: {
        glow: '0 0 12px #FEFEFE', 
        primary: '0 0 12px #3B82F6', //Para botão azul
        success: '0 0 12px #00FF9C', //Para botão verde
        error: '0 0 12px #EF4444', //Para botão vermelho
      },
```

### 🔤 Tipografia

- Fonte: Roboto, semibold, 11px
- Padding interno: `8px 16px`
- Border-radius: `4px`
- Espaçamento entre ícone e texto (caso tenha): `8px`


### 🎨 Variantes

| Variante  | Cor de Fundo  | Texto  | Borda  |
| --------- | ------------- | ------ | ------ | 
| Primary   | `color: primary` | `color: text`  | none | `boxShadow: primary`|
| Secondary | `color: secondary` | `color: bg`  | none | `boxShadow: secondary`|
| Danger | `color: danger` | `color: text`  | none | `boxShadow: danger`|


| Variante  | Padrão  | Hover | Ativo | Desabilitado|
| --------- | ------------- | ----- | ----------- | --- |
| Primary | ![Botão primario](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422368/Status_Default_b7dfju.png) |![Botão primario hover](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422368/Status_Hover_bdqfno.png)  | ![Botão ativo](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422368/Status_Clicked_jbk1yn.png) | ![Botão disable](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748430240/Property_1_Disable_vl0p7l.png) |
| Secondary | ![Botão secundario](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422405/Property_1_Default_xmcovj.png) | ![Botão secundario hover](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422404/Property_1_Hover_gaxptn.png)  | ![Botão secundario ativo](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422404/Property_1_Clicked_gcxhkd.png) | ![Botão secundario disable](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748430240/Property_1_Disable_vl0p7l.png) |
| Danger | ![Botão danger](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422428/Property_1_Default_worzah.png) |![Botão danger hover](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422428/Property_1_Hover_jibk3p.png)  | ![Botão danger ativo](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748422428/Property_1_Clicked_qohvrs.png) |  ![Botão danger disable](https://res.cloudinary.com/dgrhic6tl/image/upload/v1748430240/Property_1_Disable_vl0p7l.png) |

---

## 📋 Input (`input`)
### ✔️ Uso
Campo para digitação de dados. Pode ter ícones de ação embutidos.


### 🧩 Layout
- Altura: `40px`
- Padding interno: `8px 16px`
- Border-radius: `8px`
- Border: `none`
- Placeholder: color: `muted`
- Icones com no maximo 16px

### 🔤 Tipografia

- Fonte: Roboto, 16px
- Espaçamento entre ícone e texto: 16px || between
- Texto digitado: `color: text`


### 🧭 Estados

<table>
    <thead>
        <tr>
            <td>
                Estado
            </td>
            <td>
                Estilo
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Normal
            </td>
            <td>
                <code>color: surface</code>
            </td>
        </tr>
        <tr>
            <td>
                Focus
            </td>
            <td>
                <code>boxShadow: glow</code>
            </td>
        </tr>
        <tr>
            <td>
                Error
            </td>
            <td>
                <code>boxShadow: error</code>
            </td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">
                    <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748423276/input_ju1fyc.png" alt = "Campos de input"/>
            </td>
        </tr>
    </tfoot>
    <tfooter>
    
</table>

---

## 📩 Label (`label`)
### ✔️ Uso
Utilizado acima de campos de entrada para exibir descrições.

### 🔤 Tipografia

- Fonte: Roboto
- Padding interno: `0px 8px`
- Cor: `text`

<table>
    <thead>
        <tr>
            <td>
                Variante
            </td>
            <td>
                Fonte
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                small
            </td>
            <td>
                <code>11px</code>
            </td>
        </tr>
        <tr>
            <td>
                normal
            </td>
            <td>
                <code>16px</code>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                    <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748424989/label_1_geh7rb.png" alt = "Label"/>
            </td>
        </tr>
    </tbody>
</table>

---

## ✔️ Checkbox (`checkbox`)
### ✔️ Uso
Utilizado para entradas booleanas.

### 🔤 Tipografia

- Fonte: Roboto, 11px
- Gap: `8px`

<table>
    <thead>
        <tr>
            <td>
                Estado
            </td>
            <td>
                Exemplo
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Normal
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606006/Property_1_Default_1_rw7knv.png" alt = "checkbox-"/>
            </td>
        </tr>
        <tr>
            <td>
                Checked
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606004/Property_1_Checked_1_curyx5.png" alt = "checkbox"/>
            </td>
        </tr>
        <tr>
            <td>
                Disable
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748603411/Property_1_disable_1_dguy2s.png" alt = "checkbox"/>
            </td>
        </tr>
    </tbody>
</table>

---

## 🌐 Link (`a`)
### ✔️ Uso
Texto clicável que leva a outra página ou site.

### 🔤 Tipografia

- Fonte: Roboto, `11px`

<table>
    <thead>
        <tr>
            <td>
                Variante
            </td>
            <td>
                Estilo
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Primary
            </td>
            <td style= "background-color: #1E1E2E">
                <p style="color: #3B82F6; font-size: 11px;">Cadastre-se </p>
            </td>
        </tr>
        <tr>
            <td>
                Secondary
            </td>
            <td style= "background-color: #1E1E2E">
                <p style="color: #00FF9C; font-size: 11px;">Cadastre-se </p>
            </td>
        </tr>
        <tr>
            <td>
                Hover
            </td>
            <td style= "background-color: #1E1E2E">
                <p style="color: #FEFEFE; font-size: 11px;">Cadastre-se </p>
            </td>
        </tr>
    </tbody>
</table>

---

## 🔠 Paragraph (`p`)
### ✔️ Uso
Utilizado para exibir blocos de texto informativo.

### 🔤 Tipografia

- Fonte: Roboto
- Padding interno: `8px`

<table>
    <thead>
        <tr>
            <td>
                Variante
            </td>
            <td>
                Fonte
            </td>
            <td>
                Cor
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                small
            </td>
            <td>
                <code>11px</code>
            </td>
            <td>
                <code>color: text</code>
            </td>
        </tr>
        <tr>
            <td>
                small leve
            </td>
            <td>
                <code>11px</code>
            </td>
            <td>
                <code>color: muted</code>
            </td>
        </tr>
        <tr>
            <td>
                normal
            </td>
            <td>
                <code>16px</code>
            </td>
            <td>
                <code>color: text</code>
            </td>
        </tr>
        <tr>
            <td>
                normal leve
            </td>
            <td>
                <code>16px</code>
            </td>
            <td>
                <code>color: muted</code>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                    <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748426517/paragraph_yamlmz.png" alt = "Paragrafo"/>
            </td>
        </tr>
    </tbody>
</table>

---

## 💥 Title (`h*`)
### ✔️ Uso
Utilizado para títulos e subtítulos de seções.

### 🔤 Tipografia

- Fonte: Roboto
- Padding-bottom: `8px`

<table>
    <thead>
        <tr>
            <td>
                Variante
            </td>
            <td>
                Tamanho
            </td>
            <td>
                Estilo
            </td>
            <td>
                Exemplo
            </td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                H1
            </td>
            <td>
                <code>48px</code>
            </td>
            <td>
                <code>bold</code>
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748426656/Headers_H1_xsbl6o.png" alt = "Titulo H1"/>
            </td>
        </tr>
        <tr>
            <td>
                H2 ou H1
            </td>
            <td>
                <code>48px</code>
            </td>
            <td>
                <code>regular</code>
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748426655/Headers_H2___H1_cbxfmh.png" alt = "Titulo H1 ou H2"/>
            </td>
        </tr>
        <tr>
            <td>
                H2
            </td>
            <td>
                <code>36px</code>
            </td>
            <td>
                <code>regular</code>
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748426657/Headers_H2___H1_pequeno_g0eyhc.png" alt = "Titulo H2"/>
            </td>
        </tr>
        <tr>
            <td>
                H3
            </td>
            <td>
                <code>24px</code>
            </td>
            <td>
                <code>regular</code>
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748426655/Headers_H3_xs8bez.png" alt = "Titulo H3"/>
            </td>
        </tr>
    </tbody>
</table>

---

## 🤳 Image profile (`img`)
### ✔️ Uso
Utilizado para mostrar aparencia do usuario.

### 🧩 Layout

- Rounded: `full`
- Border: `none`

### 🎁 Exemplo

<img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606404/image-bio_evxjij.png"/>

---

## ➗ Divisor (`divisor`)
### ✔️ Uso
Utilizado para separar itens em um layout

### 🧩 Layout

- Color: `border`
- Border: `2px, solid`
- PaddingY: `4px`

### 🔤 Tipografia

- Font: `16px`
- Color: `border`

### 🎁 Exemplo

<img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606316/divisor_m49wsu.png"/>

---

## 📍 Tags (`tag`)
### ✔️ Uso
Utilizado para organizar informações do perfil dos devs.

### 🧩 Layout

- Bg-Color: `surface`
- Border: `none`
- Rounded: `4px`
- Padding: `4px 8px`
- Gap: `8px`

### 🔤 Tipografia

- Font: `16px`
- Color: `text`

### 🎁 Exemplo

<img src="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606320/tags_s7ysfm.png"/>

---

## 🎈 Item search (`Item`)
### ✔️ Uso
Utilizado em campos de pesquisa e adição de tags

### 🧩 Layout

- Padding: `4px 16px`
- Gap: `between`

###  ✨ Icons

- size: `8px 8px`

### 🔤 Tipografia

- Font: `11px`
- Color: `text`

<table>
    <thead>
        <tr>
            <th>
                Estado
            </th>
            <th>
                Estilo
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Normal
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606128/Property_1_normal_hnonsl.png" alt = "Item em hover"/>
            </td>
        </tr>
        <tr>
            <td>
                Hover / Clicked
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748606108/Property_1_hover_bnmqx7.png" alt = "item em modo normal"/>
            </td>
        </tr>
    </tbody>
</table>

---

## 🎱 Circle of progress bar (`Circle`)
### ✔️ Uso
Utilizado para mostrar ao usuario o sua atual nivel na progress bar

### 🧩 Layout

- size externo: `16px 16px`
- size interno: `8px 8px`

<table>
    <thead>
        <tr>
            <th>
                Estado
            </th>
            <th>
                Estilo
            </th>
             <th>
                Exemplo
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Normal
            </td>
             <td>
                <code>boxShadow: glow | color: surface</code>
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748612110/Property_1_Variant2_glkmxo.png"/>
            </td>
        </tr>
        <tr>
            <td>
                Selected
            </td>
            <td>
                <code>boxShadow: primary | color: primary</code>
            </td>
            <td>
                <img src ="https://res.cloudinary.com/dgrhic6tl/image/upload/v1748612111/Property_1_Default_2_euhipv.png"/>
            </td>
        </tr>
    </tbody>
</table>

---

# Molecules

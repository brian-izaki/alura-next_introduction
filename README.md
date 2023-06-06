# Curso: Introdução a Next.js

Projeto básico com 2 páginas estáticas utilizando o framework Next.js

## Sumário

- [Iniciar projeto](#iniciar-projeto)
- [Conteúdos](#conteúdos)
  - [Roteamento](#roteamento)
- [Referências](#referências)

---

## Iniciar projeto

- Projeto foi iniciado usando o node.js na versão do [.nvmrc](./.nvmrc)
  - caso utilize o nvm use o comando `nvm use` para baixar a versão.
- baixar dependencias `yarn`
- start do ambiente de desenvolvimento `yarn dev`

---

## Conteúdos

Temas centrais abordados no projeto

### Estrutura pro projeto

<details>
<summary>Detalhes</summary>

- Criação de componentes
  - o ideal, é criar um diretório src (que é seu) e criar componentes (que são isolados) dentro dele.
  - Dentro do diretório `pages` ficariam apenas as páginas do site, pois é um diretório do próprio Next.
- diretório [screens](src/screens/)
  - responsável por ter os "pedaços" de componentes a serem utilizados nos arquivos do diretório `pages`
- diretório [components](src/components)
  - [patterns](src/components/patterns)
    - O nome é uma convenção utilizada pelo instrutor (Mario souto).
    - Nele ficam os componentes mais complexos do layout. ex: Header, Footer, etc.
- diretório [theme](src/theme)
  - [theme.js](src/theme/theme.js)
    - são as estilizações que os designers passam para utilizar no sistema (configs que estão no figma, adobe XD, etc).
    - nele terá estilizações de fontes, paleta de cores, tamanhos de responsividade, etc.
  - [components.js](src/theme/components.js)
    - são os componentes preparados com as estilizações. (prontos para uso)
---

</details>


### Roteamento

<details>
<summary>Detalhes</summary>

- O framework já abstrai a parte de roteamento.
- Diferente da lib react-router-dom, onde colocamos no código as rotas que a aplicação terá. No Next criamos diretórios dentro do diretório `pages`.

---

</details>

### Navegação estilo SPA

<details>
<summary>Detalhes</summary>

- É usado um componente do próprio Next, para fazer uso da navegação client-side
- [referência doc](https://nextjs.org/docs/pages/api-reference/components/link)

---

</details>

### Build

<details>
<summary>Detalhes</summary>

- Por default, o build do next irá gerar arquivos estáticos
- utilize o comando `yarn export` para gerar os arquivos
  - é uma abordagem que poderia armazenar em buckets no S3 da aws ou outros servidores
- [referecncia doc](https://nextjs.org/docs/app/api-reference/next-cli#production)

---

</details>

### CSS-in-JS no Next

<details>
<summary>Detalhes</summary>

- é o CSS sendo usado no JS dentro de cada componente.
- a convenção dessa forma é utilizar os valores dos atributos css com valores de propriedades.
  - ex: `color: themeColor.red`, onde `themeColor` é um objeto com a propriedade `red`, que por sua vez possui uma string `#912`
- o Next tem uma abordagem expecífica pra estilização no componente,
  - dentro do próprio componente utiliza o seguinte código:
    ```jsx
    // ... código do componente
    return (
      <h1>Título</h1>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    )
    // ... código do componente
    ```
- **Estilização global:**
  - na tag style é necessário adicionar o atributo `global`

- [ref doc styles](https://nextjs.org/docs/pages/building-your-application/styling/css-in-js)
---

</details>

### Middleware das páginas

<details>
<summary>Detalhes</summary>

- [_app.js](./pages/_app.js) é o arquivo 'especial' do Next para o middleware das páginas da aplicação, ou seja, se aplicar algo ali, irá aparecer para todas as outras páginas
  - bom para estilos globais, configs globais, etc.
- [ref doc](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)
---

</details>

---

## Referências

- [curso da alura](https://cursos.alura.com.br/course/next-js-iniciando-framework)
- [documentação do Next.js](https://nextjs.org/docs)
- [Abordagem CSS: utility-first](https://blog.codecasts.com.br/conhecendo-css-utility-first-com-tailwind-css-55f81b65f9e4#:~:text=O%20que%20voc%C3%AA%20precisa%20apreender,seus%20elementos%20usando%20essas%20classes.)
# Curso: Introdução a Next.js

Projeto básico com 2 páginas estáticas utilizando o framework Next.js

## Sumário

- [Iniciar projeto](#iniciar-projeto)
- [Conteúdos](#conteúdos)
  - [Estrutura do projeto](#estrutura-pro-projeto)
  - [Roteamento](#roteamento)
  - [Navegação estilo SPA](#navegação-estilo-spa)
  - [Build](#build)
  - [CSS-in-JS no Next](#css-in-js-no-next)
  - [Middleware das páginas](#middleware-das-páginas)
  - [Arquivos estáticos](#arquivos-estáticos)
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

<br/>

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
    - São componentes que seriam junções de outros componentes em um único componente.
- diretório [theme](src/theme)
  - [theme.js](src/theme/theme.js)
    - são as estilizações que os designers passam para utilizar no sistema (configs que estão no figma, adobe XD, etc).
    - nele terá estilizações de fontes, paleta de cores, tamanhos de responsividade, etc.
  - [components.js](src/theme/components.js)
    - são os componentes preparados com as estilizações. (prontos para uso)
    - são os componentes mais simples.

---

</details>

<br/>

### Next.js

<details>
<summary>Detalhes</summary>

- APIs principais

  - `getStaticProps()`: é executado apenas no lado do servidor e o retorno dele preenche o `props` do componente.
    - Os dados que são montados por ele, ocorrem por default quando realizar o build da aplicação, e depois do build a aplicação não executará mais o código.
    - para verificar, execute o `build` e depois o `start` ou `export` (geração de sites estáticos - SSG)
    - [mais detalhes](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#when-does-getstaticprops-run)
  - `getServerSideProps()`: mesma coisa que o `getStaticProps` com algumas diferenças:
    - mesmo depois do build a aplicação irá executar o código dentro dele sempre que o usuário acessar o componente.
    - para verificar, precisa fazer o `build` e depois `start` no build (sites no servidor - SSR)
      - obs: o `export` é só pra SSG.
    - [mais detalhes](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props)

- Componentes principais
  - `Head`: usado para representar a tag `head` do html (onde ficam link do css, metadados da página, título da página, etc)

- configs do Next
  - config fica no next.config.js
  - **trailing slash**: é a barra no final de uma URL. Ex: /about<span style="color: green;">/</span>
    - é bom pra quem trabalha com o google analítics, pois eles precisam dessa barra no final.
  - **redirects**: redirecionamento para outra url quando tenta acessar uma url
  - [refs](#referências)

---

</details>

<br/>

### Roteamento

<details>
<summary>Detalhes</summary>

- O framework já abstrai a parte de roteamento.
- Diferente da lib react-router-dom, onde colocamos no código as rotas que a aplicação terá. No Next criamos diretórios dentro do diretório `pages`.

---

</details>

<br/>

### Navegação estilo SPA

<details>
<summary>Detalhes</summary>

- É usado um componente do próprio Next, para fazer uso da navegação client-side
- [referência doc](https://nextjs.org/docs/pages/api-reference/components/link)

---

</details>

<br/>

### Build

<details>
<summary>Detalhes</summary>

- Por default, o build do next irá gerar arquivos estáticos
- utilize o comando `yarn export` para gerar os arquivos
  - é uma abordagem que poderia armazenar em buckets no S3 da aws ou outros servidores
- [referecncia doc](https://nextjs.org/docs/app/api-reference/next-cli#production)

---

</details>

<br/>

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

<br/>

### Middleware das páginas

<details>
<summary>Detalhes</summary>

- [\_app.js](./pages/_app.js) é o arquivo 'especial' do Next para o middleware das páginas da aplicação, ou seja, se aplicar algo ali, irá aparecer para todas as outras páginas
  - bom para estilos globais, configs globais, etc.
- [ref doc](https://nextjs.org/docs/pages/building-your-application/routing/custom-app)

---

</details>

<br/>

### Arquivos estáticos

<details>
<summary>Detalhes</summary>

- Apenas colocar em um diretório [`public`](public) que o arquivo irá ficar disponível pro navegador, podendo ser acessado da seguinte maneira: `url_site/nome_arquivo`

---

</details>

---

## Referências

- [curso da alura](https://cursos.alura.com.br/course/next-js-iniciando-framework)
- [documentação do Next.js](https://nextjs.org/docs)
- [Abordagem CSS: utility-first](https://blog.codecasts.com.br/conhecendo-css-utility-first-com-tailwind-css-55f81b65f9e4#:~:text=O%20que%20voc%C3%AA%20precisa%20apreender,seus%20elementos%20usando%20essas%20classes.)
  - libs que usam essa abordagem:
    - [xtyled](https://xstyled.dev/)
    - [tailwindCss](https://tailwindcss.com/)
- Estrutura de projeto
  - [intro para estruturar projeto frontend](https://youtu.be/mJK5oGixSYo)
  - O livro domain-driven-design
  - [design systems](https://github.com/alexpate/awesome-design-systems)
- Next.js
  - [doc `getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props)
  - [doc configurações](https://nextjs.org/docs/app/api-reference/next-config-js)
    - [redirects](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)
    - [trailing slash](https://nextjs.org/docs/app/api-reference/next-config-js/trailingSlash)

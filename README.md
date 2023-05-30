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

---

## Referências

- [curso da alura](https://cursos.alura.com.br/course/next-js-iniciando-framework)
- [documentação do Next.js](https://nextjs.org/docs)

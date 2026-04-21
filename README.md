# Olefoot — landing (protótipo)

Repositório da **landing page Olefoot**: protótipos estáticos em HTML/CSS/JS exportados do fluxo de design (Claude Design), prontos para evoluir para produção (framework, CMS, etc.).

## Estrutura

| Caminho | Uso |
|--------|-----|
| `public/index.html` | Página principal da landing (referência visual principal). |
| `public/contato.html` | Página de contato; navegação aponta para âncoras em `index.html`. |
| `public/print.html` | Variante voltada a impressão/PDF. |
| `public/standalone-src.html` | Mesma landing com CSS “fonte” (links Google Fonts). |
| `public/standalone-bundle.html` | Versão **standalone** (~9 MB): fontes e assets embutidos; útil offline ou para entrega única. |
| `public/assets/` | Imagens e outros arquivos estáticos. |
| `public/fonts/` | Arquivos de fonte (Agency FB, Moret) + `face.css` (`@font-face`). |
| `public/blog/` | Blog estático: listagem `index.html`, artigos, `blog.css`, `data.js` (lista de posts) e `sidebar.js` (menu lateral de histórico). |

Novo post: 1) criar o `.html` em `public/blog/`, 2) adicionar uma entrada no array `posts` em `public/blog/data.js` (campos `id`, `href`, `title`, `dateLabel`, únicos por post). O corpo de `data-current-post` no `<body>` do artigo deve coincidir com `id`.

Servir a pasta `public/` como raiz do site:

```bash
npm install   # primeira vez
npm start     # abre o site local (serve)
```

Ou, sem instalar dependências: `npx serve public`. Em produção, use qualquer hospedagem estática apontando para `public/`.

## Imagens em `public/assets/`

- **`assinatura-amarelo.png`** — logo Olefoot no cabeçalho e rodapé (`index.html`, `contato.html`, `print.html`, `standalone-src.html`).
- **`lugano-topo.png`** — fundo do hero / slider de topo (`index.html`, `print.html`, `standalone-src.html`).
- **`lugano-embaixador.png`** — foto na seção Embaixador.

O arquivo `standalone-bundle.html` continua com mídia embutida na exportação antiga; para refletir imagens novas nele, é preciso reexportar o bundle ou editar manualmente.

## Nota para implementação

Os arquivos são **protótipos**, não código de produção. Para um app real, vale recriar o layout no stack escolhido mantendo tokens (cores, tipografia) e o comportamento definidos no HTML/CSS.

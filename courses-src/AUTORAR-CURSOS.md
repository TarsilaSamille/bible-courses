# Como escrever lições de curso

Cada lição é escrita em **três arquivos**, um por idioma, e o merger junta as
três cópias em `courses/<id>.json`.

```
courses-src/<id>/<NN>.pt.ts   texto autoritativo — escrever primeiro
courses-src/<id>/<NN>.en.ts
courses-src/<id>/<NN>.es.ts
```

Todo arquivo começa com `import { C, T, V } from '../shared.mts';`, linha em
branco, e `export default { id: NN, ... };` com os campos nesta ordem: `id`,
`section`, `title`, `subtitle`, `body`, `vocab`, `rules`, `notes`, `examples`,
`tables`, `exercise`, `exercises`.

## As três shorthands

- `T('texto')` — texto traduzido: título, seção, legenda, glosa, enunciado
- `C(`corpo`)` — corpo da lição, o único campo com Markdown de bloco
- `V('forma', 'lema', 'glosa')` — entrada de vocabulário clicável

`vocab` usa a **forma que aparece entre chaves no corpo** e o **lema que o
dicionário busca**. Em grego e latim os dois são a mesma palavra escrita;
em línguas com escrita não latina (`zh`, `ja`, `ko`, `ar`, `heb`) a forma é
romanizada e o lema é o caractere nativo. Em russo e nas línguas eslavônicas
eles coincidem.

## Regras do merger

Cada uma é um portão de CI. Violar reprova o build.

1. `id` e `answer` de `choose`/`match` são **números**, nunca string
2. `form`, `lemma`, `kind`, `id` e `answer` **não são traduzidos** e precisam
   ser idênticos nos três idiomas
3. `exercises[].gloss` é **sempre `T()`**, nunca string solta
4. Toda linha de `rows` tem exatamente o mesmo número de células que `head`
5. `choose`: 2–4 opções, `answer` é índice 0-based; `fill`: `answer` string;
   `match`: 2 ou mais pares com todos os `a` distintos
6. `vocab[].form` e `lemma` não podem ficar vazios
7. Todo lesson precisa de `title`, `body`, `vocab` e `exercise`

## O tom

Leia **`courses-src/TOM.md`** antes de escrever. Ele documenta os seis
vícios que fazem uma lição soar a texto gerado por IA, com antes/depois tirados
das lições que já foram corrigidas (`zh`, `ja`, `ko` — os três já passaram por
isso e servem de padrão).

Medida depois de escrever:

```bash
cd /Users/macbook/GitHub/mestrado/bible-courses
grep -o '—' courses-src/<id>/<NN>.pt.ts | wc -l   # travessões
grep -o '\*\*' courses-src/<id>/<NN>.pt.ts | wc -l # negritos
```

Alvo por lição: **1 ou 2 travessões**, e negrito só na regra.

## Portões

```bash
cd /Users/macbook/GitHub/mestrado/bible-courses
bun run build:course -- <id> --only <NN>   # confere a lição
bun run build:course -- <id> --force       # monta o curso
bun run check:content                      # fontes, manifesto e alfabetos
cd ../bible-reader-web
bun run export:courses                     # contentVersion + manifest
bun run check:i18n                         # inglês em campo pt/es
bun run audit:courses                      # estrutura
```

Para alterações só de conteúdo, `bun run check:content` e os portões de cursos
do `bible-reader-web` são a validação necessária; o lint e a suíte completa do
app ficam para alterações de código.

Ao escrever numa língua CJK (`zh`, `ja`, `ko`), nenhum caractere nativo pode
aparecer na prosa fora de `{chaves}` — o `check-script-misturado` reprova.

E o inverso: quem ensina o sistema de escrita tem de **mostrar o glifo** em
algum lugar que o leitor não precisa clicar. Uma lição de coreano que explica
a fórmula inicial + vogal + final e só escreve "g, k, n, s" no lugar dos
símbolos manda o aluno identificar posições de um quadrado que ele nunca viu
desenhado. O glifo entra em `examples[].text` e nas tabelas; dentro de
`{chaves}` continua sendo a forma romanizada, e é por ali que o clique traz o
caractere. O `check-simbolos-nativos` reprova a lição que esquece.

## Ao acrescentar uma lição a um curso existente

1. Leia as duas ou três últimas lições do seu idioma em `courses-src/<id>/`, para
   pegar o tom e o nível de detalhe
2. Escreva `<NN+1>.pt.ts`
3. Rode `--only <NN+1>`: ele diz se a forma está certa e se os outros dois
   idiomas ainda não existem
4. Escreva `.en.ts` e `.es.ts` a partir do `pt` — os três precisam ter a mesma
   estrutura: mesmo número de seções, de entradas de vocabulário e de
   exercícios
5. `--force`, depois `bun run export:courses` no repositório `bible-reader-web`

O padrão didático de cada lição: 4 seções `## ` de exposição, 2–3 tabelas de
paradigma, 4–5 regras, 8–10 exemplos, 2 notas de manual, 12–17 entradas de
vocabulário, 4 exercícios (1 + 3 extras).

## Nada de referência cruzada morta

Dizer "a partícula {i} é a da lição 2" é útil, porque aponta para um fato da
língua. Dizer "como a última seção vai explicar" é ruído: aponta para a
estrutura da própria lição, que o leitor não precisa. Ver o item 3 do TOM.md.

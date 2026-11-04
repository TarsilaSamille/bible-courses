# Como escrever uma lição de curso

Cada lição de um curso é escrita em **três arquivos**, um por idioma. Este
arquivo é a especificação; o exemplo a imitar é a lição 09.

```
courses-src/<id>/<NN>.pt.ts   texto autoritativo — escrever primeiro
courses-src/<id>/<NN>.en.ts
courses-src/<id>/<NN>.es.ts
```

## Antes de escrever, ler

- `courses-src/zh/09.pt.ts` e os `.en` / `.es` da mesma lição
- `courses-src/shared.mts` — as três shorthands
- `scripts/build-course.mts` — o merger e o validador, que são a lei

A estrutura tem de ser indistinguível da 09. Ordem dos campos: `id`, `section`,
`title`, `subtitle`, `body`, `vocab`, `rules`, `notes`, `examples`, `tables`,
`exercise`, `exercises`.

Proporções da 09: ~8 entradas de vocabulário, 5 regras, 2 notas, 4 exemplos,
1–2 tabelas, 1 exercício `choose` mais 3 (um `fill`, um `match`, mais um).

## As três shorthands

`shared.mts` exporta:

- `T('texto')` — texto traduzido: título, seção, legenda, glosa, enunciado
- `C(`corpo`)` — corpo da lição. Nome separado porque é o único campo com
  Markdown de bloco (`##`, `**`), e o nome é o aviso
- `V('pinyin', 'hanzi', 'glosa')` — entrada de vocabulário clicável

`vocab` usa pinyin como `form` e hanzi como `lemma`: a `form` é o que aparece
entre chaves no corpo, o `lemma` é o que o dicionário busca.

Todo arquivo começa com `import { C, T, V } from '../shared.mts';`, linha em
branco, e `export default { id: NN, ... };`.

## Regras duras

Cada uma é um portão de CI. Violar reprova o build.

1. **Nenhum caractere CJK fora de `{chaves}`** em campo de prosa: `body`,
   `title`, `subtitle`, `section`, `rules[].text`, `notes[].label`,
   `notes[].text`, `tables[].caption`, `head`, `rows`. Hanzi só é legal dentro
   de `{chaves}`, em `vocab[].lemma`, em `examples[].text` e no `answer` de um
   `fill`. Checado por `scripts/check-script-misturado.mts`. Para citar uma
   palavra chinesa na prosa, embrulha em chaves.
2. **Nenhuma palavra em inglês nos arquivos `pt` e `es`.** Português e espanhol
   de verdade. Checado por `scripts/check-i18n.mts`.
3. `examples` é `{ text: '汉字', gloss: T('pinyin — glosa no idioma editorial') }`.
   O `text` é hanzi e **não** é traduzido; a glosa **é** localizada e tem de
   diferir por idioma.
4. Toda `{chave}` do corpo tem entrada em `vocab` ou é frase de várias palavras
   (frase sem entrada própria é válida — o renderizador destaca as palavras
   dentro dela).
5. `id` e `answer` são **números**, nunca string. `id` tem de ser igual ao
   número do arquivo, e `answer` de `choose` é índice 0-based no intervalo das
   opções. `answer` de `match` é lista de índices.
6. Toda linha de `rows` tem exatamente o mesmo número de células que `head`.
7. `form`, `lemma`, `kind`, `id` e `answer` **não são traduzidos** e precisam
   ser idênticos nos três idiomas. Erro neles não aparece em nenhuma
   tradução — o merger é o que pega.

## O que o merger pega

`build-course.mts` compara as três árvores e sai com erro em:

- campo presente num idioma e ausente em outro (`notes` vs `notas`)
- array de tamanhos diferentes entre idiomas
- `form`/`lemma` divergentes, `kind`/`id`/`answer` divergentes
- `id` fora de ordem, exercício sem resposta no intervalo
- `match` com pistas repetidas, linha de tabela mais estreita que o cabeçalho

Isto substitui a leitura de três textos lado a lado. O `id` é o caso que a
leitura não pegava: por definição igual nos três, só aparece comparando as
árvores.

## Verificação

```
cd /Users/macbook/GitHub/mestrado/bible-courses
bun run build:course -- zh --only NN
```

A lição é nova, então o destino em disco não a tem: a última linha deve ser
`lição NN: DIFERENTE do destino — rode com --force para gravar.` e **não pode
aparecer nenhum bloco "problema(s)"**.

Depois, conferir a regra 1 nos três arquivos com os próprios olhos.

**Não** rodar `build-course.mts <id> --force` num curso em que outro agente
ainda está escrevendo: `--force` reescreve o JSON inteiro a partir do que está
em disco e pode apagar a lição que o outro acabou de escrever. O build final é
de quem coordena.

## Ao terminar a lição

```
cd /Users/macbook/GitHub/mestrado/bible-courses
bun run build:course -- <id> --force
cd ../bible-reader-web
bun run export:courses
```

O exportador é quem calcula o `contentVersion` e a linha do `manifest.json`.

## O padrão didático

Cada lição é um capítulo: 4 subseções `## ` de exposição, 2–3 tabelas, 4–5
regras, 8–10 exemplos, 2 notas de manual, 12–17 entradas de vocabulário, 4
questões (1 + 3 extras). A lista de lições planejadas de cada curso está em
`docs/planos/COURSE-PLAN.md`.

Cada lição nova amarra as anteriores de propósito. O leitor precisa perceber
que 不 (lição 9) vem antes do verbo, 了 (10) depois, e 在 (11) antes de novo —
e que a ordem das partículas é o que torna a língua legível.

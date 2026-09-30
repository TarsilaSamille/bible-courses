# bible-courses

Cursos de gramática bíblica em JSON, separados do aplicativo. Serve para duas
coisas ao mesmo tempo:

- **O leitor busca aqui** em vez de carregar o conteúdo no bundle, para que
  corrigir um texto não exija publicar um app novo.
- **Qualquer outro programa** lê os mesmos arquivos: um site, um app de
  estudo, um script que gere flashcards, um conjunto de dados para busca.

## O formato

Um arquivo por curso, em `courses/<id>.json`, e um índice em `manifest.json`.
O contrato está em [`schema/course.schema.json`](schema/course.schema.json) e é
o arquivo a que qualquer consumidor deve se ligar — o README é explicação, o
schema é o acordo.

Numa linha: é só conteúdo. Não há componente, estado, rota nem estilo. O texto
usa `{chaves}` para marcar palavra clicável e `**negrito**` para ênfase, em
Markdown simples, para que um consumidor que não quer cliques ainda renderize
algo legível.

```
manifest.json          índice: id, lang, versão, tamanho, hash
courses/grc.json       30 lições
courses/heb.json       24 lições
courses/pt-gram.json   28 lições
...                    14 cursos no total
schema/course.schema.json
```

## Por que um arquivo por curso

O app já carrega um curso inteiro na memória e o usuário o percorre do começo ao
fim. Um arquivo por curso é uma requisição só quando ele abre aquele curso, e o
maior deles (`fr`, 1,4 MB cru) fica em 352 kB com gzip. Dividir por lição
serviria para um app que abre capítulo a capítulo; se um dia for o caso, é
`courses/<id>/<nn>.json` e nada mais no formato precisa mudar.

## Versão

Cada curso tem `contentVersion` no formato `1.0.0+g<hash>`, e o hash é derivado
do **próprio conteúdo**. Isso é deliberado: se a versão fosse digitada, existiria
um estado em que alguém edita o texto, esquece de subir a versão, e o consumidor
acredita estar atualizado quando não está. Aqui, mudar um acento muda o hash.

`schemaVersion` é separado e só sobe em mudança incompatível. Quem consome deve
**recusar** um `schemaVersion` maior que o que conhece, e pode ignorar um
menor com segurança.

O `manifest.json` traz `sha256` de cada arquivo para o consumidor conferir o
download.

## Como publicar

```
npx tsx scripts/export-courses.mts            # extrai do app e escreve aqui
npx tsx scripts/export-courses.mts --check    # só confere, não escreve
```

O exportador usa `loadCourse`, não os arquivos-fonte de cada pasta, porque
alguns cursos passam tudo por `completeLesson` em tempo de execução. Exportar os
arquivos-fonte publicaria um documento diferente do que o app mostra — o que
aconteceu de fato com `pt-gram` durante o desenvolvimento.

`--check` é o gate de CI: sai com erro se o conteúdo em disco divergir do que o
app tem, o que impede editar conteúdo e esquecer de exportar.

Depois é `git commit` e `git push` neste repositório. O app busca por **tag**, não
por `main`: buscar `main` faz o conteúdo mudar debaixo de um app já publicado e
torna qualquer problema irreprodutível.

## Como consumir

Busque o índice, ache o curso, compare `contentVersion` com o que você tem:

```js
const BASE = 'https://cdn.jsdelivr.net/gh/USUARIO/bible-courses@v1';

const { courses } = await (await fetch(`${BASE}/manifest.json`)).json();
const alvo = courses.find(c => c.id === 'grc');

const resp = await fetch(`${BASE}/${alvo.file}`);
const curso = await resp.json();

if (curso.schemaVersion > 1) throw new Error('formato novo demais para este leitor');
console.log(curso.lang, curso.contentVersion, curso.lessons.length);
```

O `jsDelivr` aparece no lugar do `raw.githubusercontent.com` de propósito: o
segundo não é CDN, e os termos do GitHub restringem uso do repositório para
distribuir volume alto. A falha de um é lenta e difícil de diagnosticar. Se um dia o
volume pedir outra coisa, o formato da URL é o mesmo e só a base muda.

### Com validação

Qualquer consumidor sério deveria validar contra o schema — é o que substitui a
checagem de tipo que o compilador fazia quando o conteúdo era TypeScript:

```js
import Ajv from 'ajv';
const validate = Ajv.compile(await (await fetch(`${BASE}/schema/course.schema.json`)).json());
if (!validate(curso)) console.error(validate.errors);
```

## Licença

O conteúdo dos cursos é trabalho original. A Bíblia em grego, hebraico e aramaico
que os comentários usam é domínio público; as traduções de referência citadas nas
lições pertencem aos seus autores.

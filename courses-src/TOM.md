# Tom

O conteúdo das lições está bom. O problema é a embalagem: o texto se escreve
nele próprio e se explica, e isso soa a IA. Este arquivo diz o que trocar.

Cada item traz um exemplo real das lições e a versão reescrita. Os exemplos
foram tirados de `courses-src/zh/` — se você estiver no `ja` ou no
`ko`, o padrão é o mesmo e os exemplos servem de medida, não de modelo a
copiar.

---

## 1. O travessão como vício de pontuação

É o vício mais visível e o mais fácil de medir. Nas 24 lições do chinês há
**310 travessões no `body`**: mais de quatro por lição, um a cada quatro
linhas. O travessão deixou de ser pausa e virou o esqueleto da frase.

Travessão marca um interdependent — uma inversão, um contraste que o leitor
não espera, um par que precisa ser lido junto. Quando marca, marca uma vez
por parágrafo, não três.

**Antes** (`zh/07`, três travessões em duas linhas):

> Mandarin diz {wǒ chī píngguǒ} — o mesmo, com o {chī} no meio. Parece
> idêntico; a diferença aparece no que vem **depois**.

**Depois**:

> Mandarin diz {wǒ chī píngguǒ}, o mesmo com o {chī} no meio. Parece
> idêntico, e a diferença aparece no que vem depois.

**Antes** (`zh/09`):

> {bù} e {méi} são partículas, não palavras com sentido próprio. {wǒ bù}
> sozinho não quer dizer nada; {bù} sozinho também não.

**Depois**:

> {bù} e {méi} são partículas: não têm sentido próprio. Nem {wǒ bù} nem {bù}
> quer dizer alguma coisa sozinhos.

**Como medir**: `grep -o '—' | wc -l` num arquivo. O alvo é **cerca de um por
lição** no curso inteiro — 24 lições, umas 20 ocorrências. Se passar de um por
seção, corte.

**Atenção**: o vício não está só no `body`. No primeiroZW run, 171 dos 197
travessões do curso estavam em `rules`, `notes` e `tables` — sobretudo em
pares como `{sujeito — verbo — objeto}` e `não — com sentido próprio`. Se o
seu mandato inclui esses campos, trate-os também. Se não inclui, saiba que o
número do curso inteiro não vai chegar a 20 mesmo com o `body` limpo.

---

## 2. Negrito como gesto, não como ênfase

São **234 marcas** no chinês. Quando tudo está em negrito, nada está. Um
manual didático marca **a regra** e deixa a explicação correr em corrente.

Marque: a regra que se decora, o termo técnico, o par que se confunde. Não
marque: "acontece", "aparece", "funciona", "importa", uma palavra que está em
ênfase só porque está no fim da frase.

**Antes** (`zh/07`, seis marcas num parágrafo):

> A ordem é sempre **sujeito — verbo — objeto**, e nunca se inverte. Por isso
> uma oração não pode ser movida para a frente como o português permite.

**Depois**:

> A ordem é sempre **sujeito, verbo, objeto**, e não se inverte. Por isso uma
> oração não pode ser movida para a frente como o português permite.

Aqui o único negrito que sobra é a regra. "nunca se inverte" já se lê forte sem
ajuda.

**Antes** (`zh/20`):

> A sílaba é lida {yī} quando vem sozinha ou em posição neutra. Antes de outra
> sílaba, o tom muda para não deixar dois tons uninais colados — e a regra cabe
> numa linha:

**Depois**:

> A sílaba se lê {yī} quando vem sozinha ou em posição neutra. Antes de outra
> sílaba o tom muda, para não deixar dois tons uninais colados. A regra cabe
> numa linha:

O travessão saiu e o "e"綜合 saiu com ele. Nenhum dos dois fazia trabalho.

**Como medir**: `grep -o '\*\*' | wc -l` dividido por dois. O alvo é cerca de
um terço do que existe hoje.

---

## 3. O texto falando de si mesmo

Este é o que mais denuncia a origem. O texto se refere a si próprio como
documento: "esta lição", "a lição 5 introduziu", "como vimos", "vale notar",
"o que importa para a leitura". Um manual não fala de si; ele fala do idioma.

Isso não é proibido quando serve ao leitor — mas precisa servir. Dizer que a
lição 20 conecta com a 5 é útil. Dizer que "vale notar" é ruído.

**Antes** (`zh/20`, versão antiga — o título é metatexto e o parágrafo narratesó a estrutura da própria lição):

> ## Onde a lição 5 parou
>
> A lição 5 introduziu o classificador: em {liǎng} {běn} {shū} — dois livros
> — o número {liǎng} diz _quanto_, o classificador {běn} diz _o quê_, e {shū} é
> o substantivo. Ela deixou duas coisas em aberto, e são exatamente estas.

Repare que o título sozinho já viola o item 4: é uma frase fazendo comentário
sobre a lição, não o assunto dela.

**Depois**:

> ## Numeral e classificador: dois pontos que se confundem
>
> Em {liǎng} {běn} {shū}, "dois livros", o número {liǎng} diz quanto, o
> classificador {běn} diz o quê, e {shū} é o substantivo. Duas coisas
> continuam em aberto: como o numeral muda de som e onde ele fica.

O título deixou de ser um índice ("Onde a lição 5 parou" é metatexto) e passou
a dizer o assunto. O parágrafo deixou de narrar a própria estrutura e passou
a mostrar o problema.

**Antes** (`zh/02`, primeira seção):

> ## Para que serve o pinyin
>
> O pinyin é a romanização oficial do chinês, aprovada em 1958. Ele não é uma
> língua: é o mapa entre a letra que se digita e o caractere que se vê. Quem
> está no teclado do celular precisa dele; quem lê caracteres não precisa.

Esse parágrafo está bom e é o padrão a manter: informativo, sem se
autorreferenciar, sem muleta.

**Procure e corte**: "vale notar", "vale acrescentar", "vale a pena",
"é aqui que", "note que", "esta lição", "a lição anterior", "como vimos",
"como já dissemos", "já vimos", "nesta seção", "o que importa para a leitura",
"o que importa é que", "vale repetir".

**Substitua por**: a afirmação direta. "Vale notar que {le} pode vir antes do
verbo" → "{le} pode vir antes do verbo". O "vale notar" não informava nada.

---

## 4. O fragmento-balanço

O tic mais marcado. Uma frase curta, isolada, para dar peso: "A diferença é
tempo, e só isso." "Nem toda frase tem verbo." "A ordem não se inverte." São
boas frases —作為 balanço, não como escrita. Em sequência, soam a legenda
de vídeo.

O problema é a frequência: quando todo parágrafo termina em frase-balanço, o
peso vira ruído.

**Antes** (`zh/09`):

> ## Duas palavras, uma diferença
>
> A diferença é tempo, e só isso.

**Depois**:

> ## {bù} e {méi}: o que separa as duas
>
> A diferença é o tempo.

Metade do problema era o título, que já era uma frase. Títulos de seção devem
dizer o assunto, não fazer comentário.

**Antes** (`zh/09`):

> A diferença é tempo, e só isso.

Manter, se vier depois de um parágrafo que já explicou. Não fazer da primeira
frase da seção.

**Regra prática**: no máximo uma frase-balanço por lição. Ela funciona como
fecho, não como cadência.

---

## 5. Ritmo do parágrafo

Três linhas, três linhas, três linhas. Todo parágrafo tem o mesmo tamanho e a
mesma forma, e isso é o que faz o texto parecer gerado.

Varia. Uma seção pode ter um parágrafo de duas linhas (a regra) e um de oito
(a exceção que quase todo mundo comete). Uma lição pode ser toda curta; a
outra pode ter um parágrafo longo que se enrola de propósito, para o leitor
perder o fio e reencontrar — que é o que um texto sobre línguas deve fazer,
porque é o que o leitor vai sentir.

**Antes** (`zh/09`), três parágrafos de três linhas:

> {bù} e {méi} são partículas, não palavras com sentido próprio…
>
> A posição é a mesma nas duas: antes do verbo, colada nele…
>
> A diferença é tempo, e só isso.

**Depois**:

> {bù} e {méi} são partículas: não têm sentido próprio. Nem {wǒ bù} nem {bù}
> quer dizer alguma coisa sozinhos.
>
> A posição é a mesma nas duas, antes do verbo e colada nele. Quem traduz do
> português escreve {wǒ chī bù}, e o Mandarin não tem lugar para esse {bù}
> depois do verbo: a partícula vem na frente e o verbo fica onde está. Em
> português a negação também precede o verbo, mas em Mandarin ela precede
> também o sujeito, o que é uma diferença que aparece só quando a frase tem
> mais de uma peça.

O segundo parágrafo é mais longo porque o ponto é mais difícil. Esse é o
critério: **o parágrafo é do tamanho do que tem que dizer**.

### O parágrafo de uma linha

Os cinco vícios tratam do excesso. Falta o caso contrário, e ele trava mais:
**o que fazer quando o que tem que dizer cabe numa linha.**

Uma seção pode ter um parágrafo de uma linha, e deve ter quando a regra é
curta. "A diferença é o tempo." sozinho já é a lição. O problema é quando
tudo é curto: dezesseis seções de uma linha cada lêem como legenda, não como
manual.

**Critério**: a seção mais longa do curso é a que ensina a exceção. Se todas
as seções têm o mesmo tamanho, não há uma mais difícil que as outras — e há.

Nas lições 11 e 13 (japonês e coreano) esse foi o ponto que mais travou. A
regra do verbo cabe em uma linha; a exceção custa um parágrafo de oito. É
isso que dá a lição o formato dela.

---

## 6. O que NÃO mexer

O conteúdo está bom e foi revisado. Não reescreva substantivo por substantivo
para dizer outra coisa — o que já está certo, está certo por ter sido
verificado.

Preserve sem mexer:

- a voz em segunda pessoa, que conversa com o leitor ("quem traduz do português
  escreve…") — isso é didática, não é muleta
- o contraste com o português, que é o fio do curso inteiro
- a estrutura de regra → exemplo → contraexemplo
- os títulos de seção, desde que digam o assunto
- o gancho bíblico no fim, e a nota sobre por que ele importa
- as tabelas e os exercícios, que têm outro contrato

Se uma frase já está curta e direta, deixe quieta. O objetivo não é um texto
mais longo nem mais curto: é um texto que não se escuta escrever.

---

## Verificação

Antes de dizer que terminou, rode no seu idioma:

```bash
cd /Users/macbook/GitHub/mestrado/bible-courses
# travessões (no body; nos outros campos a regra do item 1 também vale)
grep -o '—' courses-src/<id>/*.pt.ts | wc -l
# negrito (÷2 porque ** abre e fecha)
grep -o '\*\*' courses-src/<id>/*.pt.ts | wc -l
# muletas de auto-referência
grep -o -E 'vale notar|valor a pena|é aqui que|note que|esta lição|como vimos|já vimos' courses-src/<id>/*.pt.ts | sort | uniq -c
# e os portões
bun run build:course -- <id> --force
bun run check:content
cd ../bible-reader-web
bun run export:courses
bun run check:i18n
bun run audit:courses
```

Alvos para as 24 lições de cada idioma: travessões de 310 para cerca de 20 no
`body`, negrito de 234 para cerca de 85, zero muletas de auto-referência.

O `zh` já passou por isso e é a referência: 20 travessões e 85 negritos.

Se um gate reprovar, é porque você quebrou o CJK ou vazou inglês. Corrija e
rode de novo — não use `--force` para contornar, ele é quem monta o destino,
não quem decide se está certo.
---

# Correções depois de aplicar em ja e ko

Duas rodadas de agentes acharam coisas neste arquivo que estavam erradas ou
faltando. Estão aqui porque o próximo idioma vai ler isto.

## O negrito não é o problema

O item 2 está calibrado para o chinês: 234 marcas em 24 lições, alvo 85. O
coreano tinha **66** — bem abaixo do alvo — e mesmo assim soava igual.

Se você seguir o item 2 ao pé da letra no coreano, vai **acrescentar** negrito
para "atingir 85" e piorar o texto. Os dois cursos que já passaram por isto:

```
zh  234 -> 85    (partia do excesso)
ko   66 -> 64    (já estava certo; mexeu quase nada)
ja  179 -> 91    (partia do excesso)
```

O que resolve é o travessão e a auto-referência. Meça sempre os três juntos e
julgue pelo que soa, não pelo número.

## A lista de muletas é só portuguesa

Os arquivos `.en.ts` e `.es.ts` têm as mesmas muletas, e quem procurar
"esta lição" num arquivo em inglês não acha nada e conclui que está limpo.

Procure também: `this lesson`, `in this lesson`, `notice that`, `it is worth`,
`vale la pena`, `es aquí donde`, `fíjese en`.

## Referência cruzada: quando cortar

O item 3 diz que dizer que a lição 20 conecta com a 5 é útil. No coreano
essa forma aparecia dezenas de vezes, e é a mesma auto-referência de outro
jeito.

O critério que funciona:

- **sobrevive** quando aponta para um **fato** da língua: "a partícula {i} é a
  da lição 2", "é o que o verbo flexiona da lição 7"
- **morre** quando aponta para uma **seção da própria lição**: "como a última
  seção vai explicar", "a tabela do fim desta lição amarra as doze anteriores",
  "a lição 8 mostrou que"

O que mata a segunda forma é que ela é sobre o documento, não sobre a língua.

## Título de seção: o critério

O item 3 dá o exemplo do `zh/20` ("Onde a lição 5 parou"), que é metatexto
puro. O padrão que sobrou no coreano é mais sutil:

> "Recapitulação, e como ler a Bíblia em coreano"
> "Onde a lição bate na Bíblia"
> "Nas outras duas línguas, e o gancho bíblico"

Nenhum é puro metatexto: todos dizem algo. Mas todos comentam a **estrutura**
("onde a lição bate") em vez do **assunto**.

**Critério: o título aponta para um pedaço da língua ou para um pedaço da
lição?**

## Travessão legítimo

Depois das duas rodadas sobraram 8 travessões no curso inteiro, e todos são o
objeto do exemplo: uma lista de conectivos em que o travessão abre e fecha, ou
uma fala citada que contém travessão.

Não corte esses. O alvo de ~20 por curso já foi calculado sabendo deles.

## Item 5 é medível só assim

"Uma seção de duas linhas e outra de oito" não diz _quais_ seções. Os dois
agentes interpretaram como "a regra é curta, a exceção é longa, em toda
lição", e o resultado foi bom nos dois casos. Fixado: **em cada lição, a
seção mais longa é a que ensina a exceção**, e a regra cabe em uma ou duas
linhas.

## Campo proibido com erro visível

`vocab`, `rules`, `notes` e `tables` estão fora do escopo do mandat. Mas às
vezes o erro está lá e é visível. A conduta que os dois agentes usaram, e que
funcionou: **deixar como está e reportar**. Não corrigir em silêncio e não
aumentar o escopo para "resolver" o problema.

---

## 7. A seção é um capítulo, e o sumário agrupa por seção

`LessonView` agrupa as lições do sumário por **seção consecutiva**: duas
lições seguidas com a mesma seção formam um bloco, e a mudança de seção abre
bloco novo (`src/components/LessonView.tsx:722`). Isso significa que a seção
não é um rótulo decorativo, é o capítulo do livro.

Duas regras saem daí:

**Nenhuma seção tem uma lição só.** Um capítulo de uma lição não é um
capítulo. Se a seção nova tem uma lição, ela precisa de duas ou três, ou se
junta a uma seção vizinha de verdade.

**A mesma seção não pode aparecer duas vezes no curso.** Se a lição 3 é
`O verbo` e a lição 24 é `Verbo`, o sumário mostra dois capítulos com o
mesmo nome. Escolha uma grafia e use nas 30 lições. `O nome` e `Nome` contam
como a mesma seção.

Isto vale para as três línguas ao mesmo tempo: `section` é traduzida, e
`O verbo` / `The verb` / `El verbo` têm de ser o mesmo capítulo nos três.

**A ordem das seções é a ordem de aprendizagem.** Substantivo antes de verbo,
verbo antes de advérbio,advérbio antes de sintaxe, leitura no fim. Se o
sumário mostra `Pronomes` depois de `Kanji`, o percurso está errado mesmo
que cada lição esteja boa.

## 8. Palavra da língua entre chaves, termo técnico em itálico

Uma regra de gramática que não nomeia a forma é uma frase sobre gramática, não
uma regra. `*facile* → *facilmente*` ensina; "apaga-se o -e antes de -mente"
também, mas a forma é o que o leitor procura no dicionário.

- **Forma da língua**: entre chaves, sempre. `{nepotē}`, `{bene}`, `{написать}`.
- **Termo técnico ou categoria**: em itálico. `*genitivo partitivo*`, `*qatal*`.

O asterisco vira itálico na tela (`LessonView.tsx:67`), e a chave vira a
palavra clicável que abre a gramática (`LessonView.tsx:97`). São dois
efeitos diferentes: itáculo é para ler, chave é para consultar. Uma regra que
nomeia {forma} duas vezes ganha as duas coisas.

Medida: num bom curso, **75% ou mais** das regras têm pelo menos uma chave.

## 9. Regra específica é regra que se testa

Regra genérica: "O advérbio de modo vem depois do verbo". É verdade
português, é verdade em todas as línguas, não ensina nada.

Regra específica: "O advérbio de frequência vem **depois do auxiliar**:
{I have always wanted it}, e não {I always have wanted it}". Diz onde, diz o
contraste, e o leitor sabe quando aplicar.

O teste: **a regra poderia estar escrita na seção de outra língua sem mudar
nada?** Então não é regra, é frase. Reescreva com a forma e o par que se
confunde.

## 10. O curso não anuncia a própria ordem

Nada de "como vimos na lição 12", "esta seção vai explicar", "vamos ver
agora". O sumário já mostra a ordem; repetir isso no corpo é o que faz o
texto parecer gerado. Referência cruzada só quando aponta **para um fato da
língua**: "o {aoristo} da lição 18 é o mesmo tempo que este {subjuntivo}".

E o subtítulo não promete o que a lição não entrega. "Síntese final" numa
lição que tem 28 depois é mentira editorial.

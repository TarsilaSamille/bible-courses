import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Os artigos definidos'),
  subtitle: T('{le, la, les} — o artigo que identifica, e as dez contrações que fazem o resto'),
  section: T('Artigos'),
  body: C(`## O artigo definido é uma promessa de que você já sabe do que se trata

O português diz {o livro} quando quer dizer *um entre muitos*. O francês diz {le livre} e quer dizer **aquele** livro, o único que importa na conversa. É por isso que ele aparece tanto: em quase toda frase French há um artigo, e é por meio dele que o ouvinte sabe do que você está falando.

São três formas, e elas não variam em gênero — variam em **gênero e número do nome**:

| | Singular | Plural |
|---|---|---|
| Masculino | {le} {livre} | {les} {livres} |
| Feminino | {la} {lettre} | {les} {lettres} |
| Antes de vogal | {l’} {homme} | {les} {amis} |

Repare num detalhe: antes de vogal ou {h} muda, o masculino vira {l’} e o feminino vira {l’} também. {l’homme}, {l’école}, {l’ami}, {l’astre}. Não existe {la homme} nem {le ami}.

O plural {les} é idêntico nos dois gêneros, como em português. E {les} quase nunca significa apenas «os da minha casa»: fora de um contexto que já estabeleceu o conjunto, {les} é um plural geral, uma totalidade. {J’aime les Spanols} «eu gosto dos espanhóis» é uma afirmação sobre todos, não sobre alguns.

## O que o artigo faz com uma pessoa

Aqui o francês se separa de você. {Pierre est un étudiant} «Pierre é um estudante» — {un} é genérico, vale para a categoria. Mas {le Père est Dieu} «o Pai é Deus», {la longueur est fixe} «o comprimento é fixo»: antes de um nome próprio ou de um substantivo abstrato, o artigo definido marca que **aquele** é o assunto, e não um exemplar qualquer. É o que os gramáticos chamam de artigo definido com valor Unique.

O resultado é que o mesmo substantivo muda de significado conforme o artigo. {le château} «o castelo» (um castelo específico), {un château} «um castelo» (um qualquer, um que se vai construir), {du château} «castelo» (material, e neste caso o {d’} + {le} = {du}, regra do capítulo seguinte).

## Elisão e contratação: as duas operações

Duas regras diferentes produzem o mesmo tipo de efeito, e confundi-las é o erro mais comum de quem aprende.

**Elisão** é quando um artigo definida termina em vogal e encontrar uma palavra que começa por vogal: um dos dois perde a vogal. Isso vale para artigos definidos {le, la} e indefinidos {un, une}, nunca para {les}, {de}, {du} ou {des}.

**Contratação** é quando dois elementos **não article** se fundem numa palavra só: {de + le = du}, {de + les = des}, {à + le = au}, {à + les = aux}, {de + la = de la}, {à + la = à la}. Nenhuma vogal desaparece aqui; as duas palavras se justapõem.

O quadro completo:

| Preposição | + le | + la | + les |
|---|---|---|---|
| {de} | {du} | {de la} | {des} |
| {à} | {au} | {à la} | {aux} |
| {en} | — | — | — |

Repare que {de le} nunca aparece sozinho: ou vira {du}, ou o substantivo é plural e vira {des}, ou o substantivo começa por vogal e o {de} fica sozinho: {de l’homme}. Não existe {de le} nem {de les}.

## O plural partitivo, que morde mais cedo

Um uso do {des} merece atenção desde já: {des} é muito comum com substantivos que em português não levam artigo, e significa «alguns», «um pouco de». {du pain} «pão», {des fruits} «frutas», {du vin} «vinho», {de l’eau} «água», {du riz} «arroz». Em português seria {o pão}, {as frutas} — a mudança é constante, e o nome “partitivo” vem exatamente daí. A lição seguinte é dedicada a isso.

## Leitura aplicada

Releia {Jean 1:1} em **Louis Segond** com os artigos isolados: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}. Quatro contrações {de + le}: {avec Dieu} (Dieu é masculino), {parole} com {la} duas vezes, {était} duas vezes. Cada {la Parole} aponta para **a mesma** Palavra, e é essa identidade — o que um artigo definido faz — que o texto inteiro defende.

Em {Jean 1:5}: {La lumière brille dans les ténèbres, et les ténèbres ne l’ont point reçue}. {La lumière} com {l’} antes de vogal; {les ténèbres} duas vezes, o mesmo substantivo; {l’ont} é {ne … l’ + ont} com o pronome {la} elidido. Em {Jean 1:14}: {Et la parole est devenu chair} — a parallel entre {la parole} e {la chair} mostra a mesma construção com {la} nas duas, uma vez e meia mais que o {le}.

Do outro lado, {Jean 1:6}: {Il y eut un homme envoyé de Dieu, dont le nom était Jean}. Aqui {un homme} é indefinido, {de Dieu} é origem, e {le nom} volta a definido. A alternância {un} / {le} na mesma frase é o artigo mais importante trabalho: {un} apresenta, {le} identifica.

## O essencial

O artigo definido é o que dá identidade. Ele concorda em gênero e número, vira {l’} antes de vogal, e some em {du}, {aux}, {des} — mas essas fusesões são com {de} e {à}, não com o artigo sozinho. Distinga sempre **elisão** (perde-se uma vogal) de **contração** (fundem-se duas palavras).`),
  vocab: [
    V('le', 'le', 'o (artigo definido masculino singular); vira {l’} antes de vogal'),
    V('la', 'la', 'a (artigo definido feminino singular); vira {l’} antes de vogal'),
    V('les', 'les', 'os, as (plural, ambos os gêneros); nunca se elide'),
    V('l’homme', 'homme', 'o homem; {h} muda mas o artigo continua visível'),
    V('l’école', 'école', 'a escola; elisão {la} + {école}'),
    V('le livre', 'livre', 'o livro; definido = aquele livro, conhecido'),
    V('la lumière', 'lumière', 'a luz; {è} aberto e {i} final mudo'),
    V('les ténèbres', 'ténèbres', 'as trevas; {é} aberto e {s} final muda'),
    V('le Père', 'père', 'o Pai; definido com nome abstrato, valor único'),
    V('du château', 'château', 'castelo (material); {de + le} contraído'),
    V('aux Vineyard', 'vigne', 'as videiras; {à + les} contraído em {aux}'),
    V('de l’homme', 'homme', 'do homem; {de} fica solo porque o nome começa por vogal'),
    V('de la vie', 'vie', 'da vida; {de + la} não contrai, ficam separadas'),
    V('la parole', 'parole', 'a palavra; {e} final mudo e {o} aberto [ɔ]'),
    V('la chair', 'chair', 'a carne; {ch} = [ʃ] e {r} uvular final'),
    V('l’', 'le', 'forma elidida do artigo definido diante de vogal ou {h} muda'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {la Parole était avec Dieu}, o que o {la} indica?'),
    options: [
      T('Que se trata da mesma Palavra mencionada antes, e não de qualquer palavra'),
      T('Que a Palavra é um substantivo comum, igual a {lettre}'),
      T('Que a frase é uma pergunta retórica sobre palavras'),
      T('Que o artigo foi escolhido apenas por sometria eétrica'),
    ],
    answer: 0,
    hint: T('Regra §1: artigo definido = identidade, não categoria.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Artigo definido masculino antes de {école}: l___ école'),
      hint: T('A palavra já começa com {l’}. Nada entra no espaço.'),
      answer: '’',
    },
    {
      kind: 'choose',
      prompt: T('Qual frase contém uma contratação e não uma elisão?'),
      options: [
        T('{Il va au temple}'),
        T('{Il va à l’école}'),
        T('{Il va à la maison}'),
        T('{Il va de l’école}'),
      ],
      answer: 0,
      hint: T(
        'Regra §3: contração funde {à} com {les}; elisão só envolve {le}, {la}, {un}, {une}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Associe a forma ao contexto correto'),
      pairs: [
        { a: T('{l’}'), b: T('elisão de {le} ou {la} diante de vogal') },
        { a: T('{du}'), b: T('contração de {de} com {le}') },
        { a: T('{aux}'), b: T('contração de {à} com {les}') },
        { a: T('{de la}'), b: T('sem contração possível entre {de} e {la}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Quantas vezes aparece {la Parole} na primeira frase de João 1?'),
      answer: 'trois',
      hint: T('Uma vez no fim da oração, e duas vezes na oração seguinte.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O artigo definido marca identidade, não categoria: {le Père est Dieu} é «o Pai (único) é Deus», não «um pai».',
      ),
    },
    {
      n: '2',
      text: T('Antes de vogal ou {h} muda, {le} e {la} viram {l’}; o plural {les} nunca se elide.'),
    },
    {
      n: '3',
      text: T(
        'Elisão perde uma vogal; contração é apenas junção. {l’ami} = elisão, {du} e {aux} = contração, {de la} = nada.',
      ),
    },
    {
      n: '4',
      text: T(
        '{de + le = du}, {de + les = des}, {à + le = au}, {à + les = aux}; {de + la} e {à + la} ficam separados.',
      ),
    },
    {
      n: '5',
      text: T(
        '{de le} e {de les} nunca aparecem isolados: ou viram {du}/{des}, ou o nome começa por vogal e fica {de l…}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O artigo em português lhe dá information de graça'),
      text: T(
        'Em português, distinguir {o} de {um} muda o sentido, mas o contexto didático faz boa parte do trabalho. Em francês a distinção é mais rígido: se o substantivo é um nome próprio, {un} é errado; se é abstrato e único, {le} é obrigatório. Traduzir palavra por palavra produz {la vie est belle} no lugar de {la vie est belle} — que só funciona se {la} for realmente o artigo definido genérico {la vie} = «a vida como conceito».',
      ),
    },
    {
      label: T('{les} é total, não enumerado'),
      text: T(
        'Em português {os fulfils} soa naturalmente distributivo; em francês {les} com um nome próprio soa como uma afirmação sobre **todos** os membros desse país. {J’aime les pommes} é uma opinião sobre a fruta como categoria. Para a leitura distributiva do português, o recurso é {les … un peu}, {le … un} ou a repetição do substantivo.',
      ),
    },
  ],
  examples: [
    { text: 'la Parole', gloss: T('a Palavra — definido = aquela mesma Palavra') },
    { text: 'l’Éternel', gloss: T('o Senhor (Salmo 23:1) — {l’} + {Éternel} vogal') },
    { text: 'le Père', gloss: T('o Pai — valor único, como em {le Père est Dieu}') },
    {
      text: 'les ténèbres ne l’ont point reçue',
      gloss: T('as trevas não a receberam — {l’} = pronome {la} elidido'),
    },
    {
      text: 'un homme envoyé de Dieu',
      gloss: T('um homem enviado por Deus — {un} indefinido, {de} sem contração'),
    },
    {
      text: 'dont le nom était Jean',
      gloss: T('cujo nome era João — {le} volta a definido após o indefinido'),
    },
    { text: 'au commencement', gloss: T('no princípio — {à + le} contraído em {au}') },
    { text: 'avec Dieu', gloss: T('com Deus — nome próprio masculino dispensa artigo') },
    {
      text: 'la vie est la lumière',
      gloss: T('a vida é a luz (Jo 8:12) — {la} + {e} mudo dois vezes'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O artigo definido por gênero e número'),
      head: [T('Gênero'), T('Singular'), T('Plural'), T('Ante vogal')],
      rows: [
        ['Masculino', 'le', 'les', "l'ami"],
        ['Feminino', 'la', 'les', "l'école"],
        ['Exemplo', '{le livre}', '{les livres}', '{l’homme}'],
      ],
    },
    {
      caption: T('Tabela 2 — Elisão e contrjeção lado a lado'),
      head: [T('Operação'), T('Entrada'), T('Saída'), T('Vogal perdida')],
      rows: [
        ['Elisão', '{le} + {ami}', "{l'ami}", 'sim'],
        ['Elisão', '{la} + {école}', "{l'école}", 'sim'],
        ['Contratação', '{de} + {le}', '{du}', 'não'],
        ['Contratação', '{à} + {les}', '{aux}', 'não'],
        ['Sem fusão', '{de} + {la}', '{de la}', 'não'],
        ['Sem fusão', '{de} + {l’homme}', '{de l’homme}', 'não'],
      ],
    },
  ],
};

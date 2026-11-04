import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Os pronomes relativos'),
  subtitle: T('que, quien, cuyo, lo que, donde'),
  section: T('Os pronomes'),
  body: C(`## {que} — o relativo universal

{que} liga qualquer substantivo, pessoa ou coisa, e **nunca** tem acento: {el hombre que vino} «o homem que veio» · {la luz que brilla} «a luz que brilha» · {los que creen} «os que creem».

É o mais comum: mais de 90% dos casos.

## {quien} / {quienes} — pessoas

Usado para **pessoas**, sobretudo com preposição ou em ênfase: {el hombre con quien hablé} «o homem com quem falei» · {¿Quién es?} «quem é?» · {quien cree, tiene vida} «quem crê, tem vida».

Após ponto e vírgula, {que} é preferível: {Los que hablaron, que sabían}

## {cuyo} — posse

{cuyo} significa «de quem» e **concorda com a coisa possuída**, não com o possuidor: {Dios, cuyo nombre es santo} «Deus, cujo nome é santo» · {el hombre cuya fe} «cuja fé» · {los sus hijos} «los sus hijos».

Repare: {cuyo} é **invariável** (m., f. e pl.), porque concorda com o nome de quem é possuído: {cuyo}, {cuya}, {cuyos}, {cuyas}.

## {lo que}, {lo cual}, {donde}, {cuando}

**{lo que}** = «o que», com verbo: {haz lo que dice} «faz o que diz» · {lo que importa} «o que importa».
**{lo cual}** = retomando o período anterior: {creyó, lo cual agradó a Dios} «acreditou, o que agradou a Deus».
**{donde}** = «onde»: {¿Dónde moras?} «onde moras?» (Jo 1:38).
**{cuando}** = «quando»: {cuando vio, lloró} «quando viu, chorou».

A regra fina: {donde} e {cuando} substituem preposição + {que}. Depois de {de}, {en}, {a}, {para}, etc., repete-se o substantivo: {el día en que}, {la ciudad de donde} «de onde».

Bíblico: {Bienaventurados los que creen en él} «bem-aventurados os que creem nele» (Jo 1:12) · {El que cree en mí} «o que crê em mim» (Jo 11:26) — {el que} no período: «aquele que».`),
  vocab: [
    V('que', 'que', 'que (universal!)'),
    V('quien', 'quien', 'quem (pessoas!)'),
    V('cuyo', 'cuyo', 'cujo (possessivo!)'),
    V('lo que', 'lo que', 'o que'),
    V('donde', 'donde', 'onde'),
    V('cuyo nombre', 'cuyo', 'cujo nome (Mt 6:9)'),
    V('el que', 'que', 'o que (aquele que!)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "el hombre ___ vino"'),
    answer: 'que',
    hint: T('O relativo universal.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Dios, ___ nombre es santo" (cujo nome é santo)'),
      answer: 'cuyo',
      hint: T('Regra §3: o relativo de posse.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual pronome relativo NÃO pode ter acento?'),
      options: [T('{qué}'), T('{quien}'), T('{que}'), T('{cuál}')],
      answer: 2,
      hint: T('Regra §1: «que» relativo é sempre sem acento.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o relativo ao exemplo'),
      pairs: [
        { a: T('{que}'), b: T('{la luz que brilla}') },
        { a: T('{quien}'), b: T('{¿Quién es?}') },
        { a: T('{cuyo}'), b: T('{Dios, cuyo nombre}') },
        { a: T('{lo que}'), b: T('{haz lo que dice}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('«Que» relativo nunca tem acento: el hombre que vino. Interrogativo é «qué».'),
    },
    {
      n: '2',
      text: T('«Quien» é para pessoas, sobretudo com preposição: el hombre con quien hablé.'),
    },
    { n: '3', text: T('«Cuyo» concorda com a coisa possuída: el hombre cuya fe (cuya = a fé).') },
    {
      n: '4',
      text: T(
        'Onde e quando substituem preposição + que: donde está, cuando vino. Com substantivo: la ciudad de donde.',
      ),
    },
  ],
  notes: [
    {
      label: T('A vírgula é o que separa'),
      text: T(
        '{el hombre que vino} restringe — só aquele homem veio. {el hombre, que vino,} explica — e o fato é que ele veio, entre outros. A mesma palavra, resultado oposto.',
      ),
    },
  ],
  examples: [
    { text: '{¿Dónde moras?}', gloss: T('Onde moras? (Jo 1:38 — a pergunta dos discípulos).') },
    {
      text: '{Dios, cuyo nombre es santo}',
      gloss: T('Deus, cujo nome é santo (cuyo concorda com «nome»).'),
    },
    {
      text: '{El que cree en mí}',
      gloss: T('O que crê em mim (Jo 11:26 — {el que} = aquele que).'),
    },
    { text: '{haz lo que dice}', gloss: T('Faz o que diz ({lo que} = substantivo).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os relativos'),
      head: [T('Pronome'), T('Usa com'), T('Números'), T('Exemplo')],
      rows: [
        ['{que}', T('pessoas e coisas'), 'sg./pl.', '{el hombre que vino}'],
        ['{quien}', T('só pessoas'), 'sg./pl.', '{¿Quién es?}'],
        ['{cuyo}', T('posse'), 'invariável', '{cuyo nombre}'],
        ['{lo que}', T('ideia / fato'), 'invariável', '{lo que dice}'],
        ['{lo cual}', T('retomada'), 'invariável', '{lo cual agradó}'],
        ['{donde}', T('lugar'), 'invariável', '{¿Dónde moras?}'],
        ['{cuando}', T('tempo'), 'invariável', '{cuando vino}'],
      ],
    },
    {
      caption: T('Tabela 2 — {cuyo} concorda com a coisa'),
      head: [T('Frase'), T('Cordo que concorda'), T('Forma')],
      rows: [
        ['{el hombre cuya fe}', '{fe}', '{cuya}'],
        ['{el hombre cuyo hijo}', '{hijo}', '{cuyo}'],
        ['{los hombres cuyas casas}', '{casas}', '{cuyas}'],
        ['{Dios, cuyo nombre es santo}', '{nombre}', '{cuyo}'],
      ],
    },
  ],
};

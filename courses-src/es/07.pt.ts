import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('O plural dos substantivos'),
  subtitle: T('-s, -es — e os invariáveis'),
  section: T('Os substantivos'),
  body: C(`## As três regras

**Vogal + -s**: {libro} → {libros} · {madre} → {madres} · {palabra} → {palabras} · {día} → {días}.

**Consoante + -es**: {pan} → {panes} · {reloj} → {relojes} · {joven} → {jóvenes} · {árbol} → {árboles}.

**-z → -ces**: {luz} → {luces} · {vez} → {veces} · {voz} → {voces} · {cruz} → {cruces} · {raíz} → {raíces}.

## O plural mexe no acento

A terminação nova pode mudar a sílaba tônica e o acento precisa ser refeito:

• {árbol} → {árboles}: perde o acento! A palavra passa a ser grave terminada em consoante, que é a regra natural.
• {joven} → {jóvenes}: ganha acento! {joven} era aguda terminada em {n}; {jóvenes} é esdrújula, então acento obrigatório.
• {limón} → {limones}: perde o acento pela mesma razão de {árbol}.

## Invariáveis

Substantivos terminados em {-s} com última sílaba **átona** não recebem marca de plural:

• {el lunes} → {los lunes} «as segundas»
• {el martes} → {los martes}
• {el análisis} → {los análisis}
• {la crisis} → {las crisis} · {la tesis} → {las tesis}

Já os dias de semana em {-es} são irregulares: {el lunes} mas {los martes}, {los miércoles}, {los viernes}, {los sábados}, {los domingos} — marca apenas no artigo.

## Corpo humano

O corpo tem plurais irregulares: {el pie} → {los pies} · {la mano} → {las manos} · {el diente} → {los dientes} · {la mano}.`),
  vocab: [
    V('libros', 'libro', 'livros (+s)'),
    V('luces', 'luz', 'luzes (z→c!)'),
    V('árboles', 'árbol', 'árvores (perde acento!)'),
    V('los lunes', 'lunes', 'segundas (invariável!)'),
    V('los pies', 'pie', 'os pés'),
    V('jóvenes', 'joven', 'jovens (ganha acento!)'),
    V('las palabras', 'palabra', 'as palavras (Jo 1:1)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "luz → ___" (luzes)'),
    answer: 'luces',
    hint: T('z vira c + es.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural de "árbol": ___ (sem acento!)'),
      answer: 'árboles',
      hint: T('Regra §2: o plural reposiciona o acento.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual substantivo é invariável?'),
      options: [
        T('{el lunes} → {los lunes}'),
        T('{el libro} → {los libros}'),
        T('{la luz} → {las luces}'),
        T('{la mano} → {las manos}'),
      ],
      answer: 0,
      hint: T('Termina em -s com última sílaba átona.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o plural de "pie": los ___ (os pés)'),
      answer: 'pies',
      hint: T('Plural irregular do corpo.'),
    },
  ],
  rules: [
    { n: '1', text: T('Vogal + -s; consoante + -es; -z vira -ces.') },
    {
      n: '2',
      text: T(
        'O plural pode roubar ou dar acento: árbol → arboles (perde!), joven → jóvenes (ganha!).',
      ),
    },
    {
      n: '3',
      text: T('Substantivos em -s com última sílaba átona são invariáveis: los lunes, las crisis.'),
    },
  ],
  notes: [
    {
      label: T('Agrupamento do plural'),
      text: T(
        'Os plurais segue três famílias: -{es} para os que terminam em consoante ({ciudades}), -{es} após {-z} ({cielo} → {cielos}, o {z} vira {ce}) e {-s} no resto. Com {-ón} a regra muda de novo: {cansión} → {cansiones}.',
      ),
    },
  ],
  examples: [
    { text: '{libros}', gloss: T('Livros.') },
    { text: '{luces}', gloss: T('Luzes (z→c!).') },
    { text: '{los pies}', gloss: T('Os pés.') },
    { text: '{los árboles}', gloss: T('As árvores (o acento desapareceu!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Plurais regulares'),
      head: [T('Termina em'), T('Plural'), T('Exemplo')],
      rows: [
        ['vogal', '+ -s', '{libros}'],
        ['consoante', '+ -es', '{panes}'],
        ['-z', '-ces', '{luces}'],
        ['-s átono', T('invariável!'), '{los lunes}'],
      ],
    },
    {
      caption: T('Tabela 2 — Plurais irregulares'),
      head: [T('Singular'), T('Plural'), T('Nota')],
      rows: [
        ['{el pie}', '{los pies}', T('pé')],
        ['{la mano}', '{las manos}', T('mão')],
        ['{el diente}', '{los dientes}', T('dente')],
        ['{el lunes}', '{los lunes}', T('-s átono: só o artigo muda')],
        ['{el árbol}', '{los árboles}', T('perde o acento')],
      ],
    },
  ],
};

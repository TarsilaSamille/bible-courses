import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Noun plurals'),
  subtitle: T('-s, -es — and invariables'),
  section: T('Nouns'),
  body: C(`## The three rules

**Vowel + -s**: {libro} → {libros} · {madre} → {madres} · {palabra} → {palabras} · {día} → {días}.

**Consonant + -es**: {pan} → {panes} · {reloj} → {relojes} · {joven} → {jóvenes} · {árbol} → {árboles}.

**-z → -ces**: {luz} → {luces} · {vez} → {veces} · {voz} → {voces} · {cruz} → {cruces} · {raíz} → {raíces}.

## The plural touches the accent

The new ending can move the stress, and the accent must be recomputed:

• {árbol} → {árboles}: loses its accent! The word becomes a penultimate word ending in a consonant, which is the natural rule.
• {joven} → {jóvenes}: gains an accent! {joven} was stressed-final in -n; {jóvenes} is proparoxytone, so the accent is obligatory.
• {limón} → {limones}: loses its accent for the same reason as {árbol}.

## Invariables

Nouns ending in {-s} with an **unstressed** last syllable take no plural marker:

• {el lunes} → {los lunes} "Mondays"
• {el martes} → {los martes}
• {el análisis} → {los análisis}
• {la crisis} → {las crisis} · {la tesis} → {las tesis}

Weekday nouns in {-es} are irregular: {el lunes} but {los martes}, {los miércoles}, {los viernes}, {los sábados}, {los domingos} — the marker sits in the article alone.

## The body

Body parts have irregular plurals: {el pie} → {los pies} · {la mano} → {las manos} · {el diente} → {los dientes}.`),
  vocab: [
    V('libros', 'libro', 'books (+s)'),
    V('luces', 'luz', 'lights (z→c!)'),
    V('árboles', 'árbol', 'trees (loses accent!)'),
    V('los lunes', 'lunes', 'Mondays (invariable!)'),
    V('los pies', 'pie', 'feet'),
    V('jóvenes', 'joven', 'young people (gains accent!)'),
    V('las palabras', 'palabra', 'the words (John 1:1)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "luz → ___" (lights)'),
    answer: 'luces',
    hint: T('z becomes c + es.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural of "árbol": ___ (no accent!)'),
      answer: 'árboles',
      hint: T('Rule §2: the plural moves the stress.'),
    },
    {
      kind: 'choose',
      prompt: T('Which noun is invariable?'),
      options: [
        T('{el lunes} → {los lunes}'),
        T('{el libro} → {los libros}'),
        T('{la luz} → {las luces}'),
        T('{la mano} → {las manos}'),
      ],
      answer: 0,
      hint: T('Ends in -s with an unstressed last syllable.'),
    },
    {
      kind: 'fill',
      prompt: T('Write the plural of "pie": los ___ (feet)'),
      answer: 'pies',
      hint: T('Irregular body plural.'),
    },
  ],
  rules: [
    { n: '1', text: T('Vowel + -s; consonant + -es; -z becomes -ces.') },
    {
      n: '2',
      text: T(
        'Plurals can steal or grant accents: árbol → arboles (loses!), joven → jóvenes (gains!).',
      ),
    },
    {
      n: '3',
      text: T(
        'Nouns in -s with an unstressed last syllable are invariable: los lunes, las crisis.',
      ),
    },
  ],
  notes: [
    {
      label: T('Plural grouping'),
      text: T(
        'Plurals fall into three families: -{es} after a consonant ({ciudades}), -{es} after {-z} ({cielo} → {cielos}, the {z} becoming {ce}), and {-s} elsewhere. With {-ón} the rule shifts again: {cansión} → {cansiones}.',
      ),
    },
  ],
  examples: [
    { text: '{libros}', gloss: T('Books.') },
    { text: '{luces}', gloss: T('Lights (z→c!).') },
    { text: '{los pies}', gloss: T('Feet.') },
    { text: '{los árboles}', gloss: T('The trees (the accent is gone!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Regular plurals'),
      head: [T('Ends in'), T('Plural'), T('Example')],
      rows: [
        ['vogal', '+ -s', '{libros}'],
        ['consoante', '+ -es', '{panes}'],
        ['-z', '-ces', '{luces}'],
        ['-s átono', T('invariable!'), '{los lunes}'],
      ],
    },
    {
      caption: T('Table 2 — Irregular plurals'),
      head: [T('Singular'), T('Plural'), T('Note')],
      rows: [
        ['{el pie}', '{los pies}', T('foot')],
        ['{la mano}', '{las manos}', T('hand')],
        ['{el diente}', '{los dientes}', T('tooth')],
        ['{el lunes}', '{los lunes}', T('-s unstressed: only the article changes')],
        ['{el árbol}', '{los árboles}', T('loses its accent')],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('Meaning and subordination'),
  title: T('Figures of speech'),
  subtitle: T('Comparison, substitution and expressive effect'),
  body: C(`**Overview.** A {metaphor} transfers sense with no marker of comparison, and a {simile} marks it: in {Eu sou a videira} there is no {como}; in {Ele é como um anjo} there is.

**Rule 1.** {Metonymy} replaces a term with another linked by relation and not by likeness: in {a coroa de José}, {coroa} stands for {rei}, who is the one who wears it.

**Rule 2.** {Hyperbole} enlarges beyond the possible and {euphemism} softens: in {morreram de fome}, the first; in {passou desta vida}, the second.

**Rule 3.** {Irony} says the opposite of what is meant, and {personification} gives human action to what is not human: in {o vento uivava}, the second.

**Rule 4.** {Antithesis} places side by side what opposes, and it is the most explicit figure in the biblical text: in {O amor é paciente; o amor, não}, the opposition is written out.

**Application.** In {Eu sou a videira, e vós os ramos}, the metaphor is explicit in the image and implicit in the marker: the verb {ser} keeps the comparison, and that is why the sentence can become {Ele é como a videira} without losing its sense. In {Isto é o meu corpo}, Greek (τοῦτό ἐστιν τὸ σῶμά μου) uses a verb of identity and not of comparison, which makes the **sacramental** reading compulsory and not a metaphor.

**Check.** For each figure, ask: is the verb {ser} or {parecer}? If it is {ser} with an image, it is a **metaphor**; if there is {como}, it is a {simile}. Is the association of {likeness} or of {relation}? And is the force to {intensify}, to {soften} or to {contrast}? Three questions tell you what to do with the translation, and the last decides whether Greek may become comparison in Portuguese.`),
  vocab: [
    V('metáfora', 'metáfora', 'comparison without {como}'),
    V('comparação', 'comparação', 'comparison with {como}'),
    V('metonímia', 'metonímia', 'substitution by relation'),
    V('hipérbole', 'hipérbole', 'enlargement beyond the real'),
    V('eufemismo', 'eufemismo', 'softening of a harsh term'),
    V('ironia', 'ironia', 'saying the opposite of what is meant'),
    V('personificação', 'personificação', 'human action in what is not human'),
    V('antítese', 'antítese', 'opposition written side by side'),
    V('a videira', 'a videira', 'image from John 15'),
    V('οὐδείς', 'οὐδείς', 'Greek hyperbole of negation'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {metaphor} transfers sense with no marker of comparison, and a {simile} marks it: in {Eu sou a videira} there is no {como}; in {Ele é como um anjo} there is.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{Metonymy} replaces a term with another linked by relation and not by likeness: in {a coroa de José}, {coroa} stands for {rei}, who is the one who wears it.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{Hyperbole} enlarges beyond the possible and {euphemism} softens: in {morreram de fome}, the first; in {passou desta vida}, the second.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{Irony} says the opposite of what is meant, and {personification} gives human action to what is not human: in {o vento uivava}, the second.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{Antithesis} places side by side what opposes, and it is the most explicit figure in the biblical text: in {O amor é paciente; o amor, não}, the opposition is written out.',
      ),
    },
  ],
  notes: [
    {
      label: T('The metaphor Greek does not mark'),
      text: T(
        'Ancient Greek hardly uses {como} in comparisons, and that is why the Greek reading is more compact than the Portuguese one. Portuguese introduced the {como}, and with it the possibility of reading the sentence as an explicit simile. Rendering {οἶδα ὅσον} as {sei como} adds a marker the Greek lacked, and that is why translation sometimes creates a new metaphor and sometimes keeps the old one.',
      ),
    },
    {
      label: T('The hyperbole Greek uses most'),
      text: T(
        'In {οὐδεὶς ἄνθρωπος}, {nenhum homem}, Greek joins the negative {οὐδείς} to an absolute expression, and the result is stronger than any current Portuguese. In Greek the negation intensifies; in Portuguese the double negative {não é possível que ninguém} sounds weaker. It is a hyperbole only the source language performs.',
      ),
    },
  ],
  examples: [
    {
      text: 'Eu sou a videira, e vós os ramos',
      gloss: T('Metaphor: {a videira} stands for {Deus} with no {como} in between.'),
    },
    {
      text: 'Ele é como um anjo',
      gloss: T('Explicit simile: the {como} marks the transfer of sense.'),
    },
    {
      text: 'a coroa de José',
      gloss: T('Metonymy: {coroa} stands for {rei}, who is the one who wears it.'),
    },
    {
      text: 'morreram de fome no deserto',
      gloss: T('Hyperbole: no man dies of hunger alone in the desert, and the image reinforces.'),
    },
    { text: 'passou desta vida', gloss: T('Euphemism: what is {died} appears as {passed}.') },
    {
      text: 'o vento uivava',
      gloss: T('Personification: the {vento} receives the human action of {uivar}.'),
    },
    {
      text: 'O amor é paciente; o amor, não',
      gloss: T('Antithesis: {é paciente} and {não} stand side by side, and the {é} repeats.'),
    },
    {
      text: 'bendito o que vem em nome do Senhor',
      gloss: T(
        'The sentence is literal, and it is the form of the text that makes it a quotation.',
      ),
    },
    {
      text: 'isto é o meu corpo',
      gloss: T(
        'The verb {é} is one of identity, not of comparison, and the reading is sacramental.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Figures of comparison and of substitution'),
      head: [T('Figura'), T('O que faz'), T('Marca'), T('Exemplo')],
      rows: [
        [T('{metáfora}'), T('transfere sentido'), T('nenhuma'), T('{Eu sou a videira}')],
        [T('{comparação}'), T('compara com {como}'), T('{como}'), T('{Ele é como um anjo}')],
        [T('{metonímia}'), T('troca por relação'), T('nenhuma'), T('{a coroa de José}')],
        [T('{alegoria}'), T('dá um sentido escondido'), T('símbolo'), T('{o bom pastor}')],
        [T('{ironia}'), T('diz o contrário'), T('tom do texto'), T('{ótimo, ottimo}')],
      ],
    },
    {
      caption: T('Figures of effect'),
      head: [T('Figura'), T('Força'), T('Efeito'), T('Exemplo')],
      rows: [
        [T('{hipérbole}'), T('amplia'), T('reforça'), T('{ninguém believe}')],
        [T('{eufemismo}'), T('atenua'), T('suaviza'), T('{passou desta vida}')],
        [T('{ironia}'), T('inverte'), T('contradiz'), T('{ótimo, ottimo}')],
        [T('{personificação}'), T('humaniza'), T('dá vida'), T('{o vento uivava}')],
        [T('{apóstrofe}'), T('dirige-se a alguém'), T('chama'), T('{Deus, meu Deus}')],
        [T('{antítese}'), T('opõe'), T('contrasta'), T('{é paciente; o amor, não}')],
      ],
    },
    {
      caption: T('What the verb decides in the figure'),
      head: [T('Verbo'), T('Com imagem'), T('Com {como}'), T('O que traduzir')],
      rows: [
        [T('{ser}'), T('metáfora'), T('comparação'), T('manter o verbo')],
        [T('{parecer}'), T('sugestão'), T('hipérbole'), T('atenuar')],
        [T('{tornar-se}'), T('transformação'), T('comparação'), T('manter o verbo')],
        [T('{ficar}'), T('resultado'), T('eufemismo'), T('manter o verbo')],
        [T('{chamar}'), T('símbolo'), T('comparação'), T('não traduzir por {como}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {a coroa de José}, the figure used is:'),
    options: [
      T('metonymy, because {coroa} replaces {rei} by relation'),
      T('metaphor, because {coroa} is an image of {rei}'),
      T('hyperbole, because {coroa} is larger than the king'),
      T('euphemism, because {coroa} avoids saying {rei}'),
    ],
    answer: 0,
    hint: T('Metonymy is relation, not likeness: the one who wears the crown is the king.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In {Ele é como um anjo}, there is:'),
      options: [
        T('an explicit simile, marked by {como}'),
        T('a metaphor, because there is no verb {ser}'),
        T('hyperbole, because the angel is greater than the man'),
        T('metonymy, because {anjo} designates God'),
      ],
      answer: 0,
      hint: T('The {como} is the mark that distinguishes simile from metaphor.'),
    },
    {
      kind: 'match',
      prompt: T('Match each figure to what it does.'),
      pairs: [
        { a: T('{metáfora}'), b: T('transfer of sense') },
        { a: T('{metonímia}'), b: T('substitution by relation') },
        { a: T('{hipérbole}'), b: T('enlargement beyond the real') },
        { a: T('{eufemismo}'), b: T('softening of the term') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('The figure that enlarges the sense beyond the possible is the ______.'),
      answer: 'hipérbole',
      hint: T('In {morreram de fome}, nobody dies of that alone.'),
    },
  ],
};

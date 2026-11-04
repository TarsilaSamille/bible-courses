import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('Word inflection and agreement'),
  title: T('Nominal inflection'),
  subtitle: T('Gender, number and degree'),
  body: C(`**Overview.** The {gender} of nouns is given by the ending, and that is why {amigo} is masculine and {amiga} feminine: the {o} and the {a} are the mark.

**Rule 1.** The {regular plural} adds {-s} or {-es}: {livro} gives {livros}, {lápis} gives {lápis}, {pão} gives {pães}, and {Deus} gives {deuses}.

**Rule 2.** {Number} has irregular plurals: {homem} gives {homens}, {pão} gives {pães}, and {mão} gives {mãos}, where the plural adds nothing visible.

**Rule 3.** The {comparative} in the synthetic form uses {-or} or {-ior}: {alto} gives {mais alto} and {altíssimo}; the {absolute superlative} takes no comparison phrase.

**Rule 4.** {Augmentative} and {diminutive} change the scale, not the meaning: {livro} gives {livrão} and {livrinho}, and the sense stays the same.

**Application.** In {Deus amou o mundo}, the article {o} is masculine singular and {mundo} is a masculine singular noun, and the plural {mundos} confirms the inflection. In {as maiores profetas}, {as} is a feminine plural article, {maiores} is a comparative of {grande}, and {profetas} is a feminine plural noun. Note that the adjective {maiores} agrees with the noun {profetas} and **not** with the article {as}: both are feminine, but the agreement is with the noun, always.

**Check.** Four questions settle nominal inflection entirely: what is the **gender**, what is the **number**, is the comparative **synthetic** ({-or, -ior}) or **analytic** ({mais}), and does the superlative need a comparison phrase? And a fifth, the most important of all: the adjective agrees with the **noun**, which is why {os maiores} and {as maiores} share the same {maiores}.`),
  vocab: [
    V('gênero', 'gênero', 'marking of sex or class'),
    V('número', 'número', 'marking of quantity'),
    V('grau', 'grau', 'comparison and scale'),
    V('comparativo', 'comparativo', 'compares two terms'),
    V('superlativo', 'superlativo', 'compares three or more'),
    V('diminutivo', 'diminutivo', 'reduces the scale'),
    V('aumentativo', 'aumentativo', 'increases the scale'),
    V('coletivo', 'coletivo', 'noun naming a group'),
    V('maiores', 'maiores', 'irregular comparative of {grande}'),
    V('altíssimo', 'altíssimo', 'synthetic superlative of {alto}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The {gender} of nouns is given by the ending, and that is why {amigo} is masculine and {amiga} feminine: the {o} and the {a} are the mark.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The {regular plural} adds {-s} or {-es}: {livro} gives {livros}, {lápis} gives {lápis}, {pão} gives {pães}, and {Deus} gives {deuses}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{Number} has irregular plurals: {homem} gives {homens}, {pão} gives {pães}, and {mão} gives {mãos}, where the plural adds nothing visible.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The {comparative} in the synthetic form uses {-or} or {-ior}: {alto} gives {mais alto} and {altíssimo}; the {absolute superlative} takes no comparison phrase.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{Augmentative} and {diminutive} change the scale, not the meaning: {livro} gives {livrão} and {livrinho}, and the sense stays the same.',
      ),
    },
  ],
  notes: [
    {
      label: T('The superlative Greek accented more'),
      text: T(
        'Ancient Greek had a superlative of its own, with the ending {-τος}: {μέγιστος} is {very large}, and {πιστότατος} is {very faithful}. Portuguese lost the ending and kept the sense in {muito} or in the accent: {fidelíssimo}. Where Greek said the scale in the ending, Portuguese says it in the form of the word, and translation loses the contrast between {μέγιστος} and {μέγας}.',
      ),
    },
    {
      label: T('The augmentative that changes the tone, not the sense'),
      text: T(
        'In {livrão}, the {ão} enlarges the object and often adds contempt; in {casa-grande}, the {grande} enlarges with no change at all. What the augmentative does is shift the scale of the noun, and biblical reading depends on it: {cavalo} and {cavalo grande} are not the same thing, and one may be praise and the other an insult.',
      ),
    },
  ],
  examples: [
    {
      text: 'o mundo',
      gloss: T('Masculine singular noun: the article {o} and the noun {mundo} agree.'),
    },
    {
      text: 'os mundos',
      gloss: T('Regular plural of {mundo}: it adds {-s} and keeps the gender.'),
    },
    {
      text: 'as maiores profetas',
      gloss: T('Comparative {maiores} in feminine plural, because it agrees with {profetas}.'),
    },
    {
      text: 'o maior dos mandamentos',
      gloss: T('Relative superlative: the term {dos mandamentos} delimits the comparison.'),
    },
    {
      text: 'altíssimo',
      gloss: T('Synthetic superlative of {alto}, with {-íssimo}: it takes no {o mais}.'),
    },
    {
      text: 'o mais alto',
      gloss: T('Analytic superlative: {mais} plus the adjective, and here no special ending.'),
    },
    {
      text: 'um livrinho',
      gloss: T('Diminutive with {-inho}: it reduces the scale and adds affection.'),
    },
    {
      text: 'oIsrael',
      gloss: T('Masculine singular proper noun: {Israel} does not inflect in current use.'),
    },
    {
      text: 'o povo',
      gloss: T('Collective noun: in the singular it names many, and the verb may go plural.'),
    },
  ],
  tables: [
    {
      caption: T('Gender by ending'),
      head: [T('Gênero'), T('Terminações comuns'), T('Exceção'), T('Exemplo')],
      rows: [
        [T('masculino'), T('{-o}'), T('{mão}, {leão}'), T('{o dia}')],
        [T('feminino'), T('{-a}'), T('{dia}, {pó}, {mão}'), T('{a mão}')],
        [T('masculino'), T('{-ão}'), T('{irmã}, {viúva}'), T('{o irmão}')],
        [T('feminino'), T('{-ade}, {-esa}'), T('{poeta}, {princesa}'), T('{a poetisa}')],
        [T('feminino'), T('{-triz}'), T('{atriz}, {mistriz}'), T('{a matriz}')],
        [T('comum aos dois'), T('{-e}'), T('{jovem}, {feliz}'), T('{o jovem}, {a feliz}')],
      ],
    },
    {
      caption: T('Irregular plurals'),
      head: [T('Singular'), T('Plural'), T('O que muda'), T('Origem')],
      rows: [
        [T('{homem}'), T('{homens}'), T('acréscimo de {-ens}'), T('radical {hom-}')],
        [T('{pão}'), T('{pães}'), T('acréscimo de {-ões}'), T('radical {pã-}')],
        [T('{mão}'), T('{mãos}'), T('apenas {s}'), T('radical {mã-}')],
        [T('{lápis}'), T('{lápis}'), T('apenas {s}'), T('radical {láp-}')],
        [T('{Deus}'), T('{deuses}'), T('acréscimo de {-es}'), T('radical {deus-}')],
        [T('{rei}'), T('{reis}'), T('perda do {u}'), T('radical {re-}')],
        [T('{obra}'), T('{obras}'), T('apenas {-s}'), T('radical {obr-}')],
      ],
    },
    {
      caption: T('Comparative and superlative'),
      head: [T('Tipo'), T('Como se forma'), T('Exemplo'), T('Frase')],
      rows: [
        [
          T('comparativo analítico'),
          T('{mais} + adjetivo'),
          T('{mais alto}'),
          T('{Ele é mais alto.}'),
        ],
        [T('comparativo sintético'), T('{-or} ou {-ior}'), T('{maior}'), T('{Ele é maior.}')],
        [
          T('superlativo analítico'),
          T('{o mais} + adjetivo'),
          T('{o mais alto}'),
          T('{Ele é o mais alto.}'),
        ],
        [T('superlativo sintético'), T('{-íssimo}'), T('{altíssimo}'), T('{Ele é altíssimo.}')],
        [
          T('superlativo relativo'),
          T('superlativo + {de}'),
          T('{o maior dos}'),
          T('{o maior dos sete}'),
        ],
        [T('aumentativo'), T('{-ão}, {-aço}'), T('{livrão}'), T('{um livrão}')],
        [T('diminutivo'), T('{-inho}, {-zinho}'), T('{livrinho}'), T('{um livrinho}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {as maiores profetas}, what does {maiores} agree with?'),
    options: [
      T('with the noun {profetas}'),
      T('with the article {as}'),
      T('with the verb of the main clause'),
      T('with the numeral that follows'),
    ],
    answer: 0,
    hint: T('Nominal agreement is with the noun, never with the determiner.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What is the plural of {homem}?'),
      options: [
        T('{homens}, with the addition of {-ens}'),
        T('{homes}, with no number mark'),
        T('{homens}, with {o} becoming {e}'),
        T('{homena}, by analogy with {pão}'),
      ],
      answer: 0,
      hint: T('The plural of {homem} adds {-ens} to the root {hom-}.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to what it indicates.'),
      pairs: [
        { a: T('{o mais alto}'), b: T('analytic superlative') },
        { a: T('{altíssimo}'), b: T('synthetic superlative') },
        { a: T('{maior}'), b: T('synthetic comparative') },
        { a: T('{livrão}'), b: T('augmentative') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'quantidade',
      hint: T('{livro} is one, {livros} are many.'),
    },
  ],
};

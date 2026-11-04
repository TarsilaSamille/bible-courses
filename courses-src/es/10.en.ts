import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Adverbs'),
  subtitle: T('-mente, muy/mucho, bien/mal'),
  section: T('Adjectives and adverbs'),
  body: C(`## Adverbs in {-mente}

Many adverbs are built on the **feminine** of the adjective + {-mente}: {claro} → {claramente} · {rápido} → {rápidamente} · {triste} → {tristemente} · {fiel} → {fielmente}.

Pronunciation keeps **two stresses**: {CLARAmente} — the adjective's accent stays, and {mente} carries its own. So when the stressed syllable falls on the antepenultimate, the word shows two: {claramente}.

The short adverbs are **irregular**: {bien} "well" · {mal} "badly" · {mucho} · {poco} · {bastante} · {demasiado} — none of them takes {-mente}.

## {muy} vs {mucho}

• {muy} + adjective or adverb: {muy bueno} "very good" · {muy lejos} "very far".
• {mucho} alone (with {ser}/{estar}) or + noun: {mucho amor} "much love" · {muchas gracias} "thank you" · {Es mucho} "it is a lot".

{ mucho} with an action verb is wrong: say {Trabaja mucho}, never "*Trabaja muy".

## Essential adverbs

• {bien} vs {mal}: {Lo hizo bien} "he did it well".
• {así} "thus": {Así sea} "so be it".
• {siempre} "always" · {nunca} "never" · {jamás} "never" (stronger) · {a veces} "sometimes" · {a menudo} "often".
• {ya} "already" vs {todavía no} "not yet".
• {más} "more" (also a noun: {el más} "the most").
• {bastante} "enough" — adverb and adjective at once.

Ex.: {Orad sin cesar} "pray without ceasing" (1 Thess 5:17 — {sin} + infinitive!).`),
  vocab: [
    V('claramente', 'claro', 'clearly (-mente!)'),
    V('muy bueno', 'bueno', 'very good (muy!)'),
    V('mucho amor', 'amor', 'much love (mucho!)'),
    V('Así sea', 'así', 'so be it (amen!)'),
    V('siempre', 'siempre', 'always'),
    V('trabaja mucho', 'trabajar', 'works a lot (never muy!)'),
    V('sin cesar', 'cesar', 'without ceasing (1 Thess 5:17)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"muy" vs "mucho"?'),
    options: [
      T('Same'),
      T('muy + adjective ("muy bueno"); mucho alone/noun ("mucho amor")'),
      T('The opposite'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Build the adverb from "triste": ___ (sadly)'),
      answer: 'tristemente',
      hint: T('Feminine of the adjective + -mente.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [T('Trabaja muy'), T('Trabaja mucho'), T('Es mucho bueno'), T('Muy trabaja')],
      answer: 1,
      hint: T('Rule §2: much + action verb = mucho.'),
    },
    {
      kind: 'fill',
      prompt: T('Which irregular adverb means "very little"?'),
      answer: 'poco',
      hint: T('Irregular against -mente: poco, bien, mal, mucho.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Adverbs in -mente come from feminines and keep TWO spoken stresses: CLARAmente.'),
    },
    { n: '2', text: T('muy + adjectives (muy bueno); mucho alone or + nouns (mucho amor).') },
    { n: '3', text: T('mucho, poco, bien, mal, bastante, demasiado never take -mente.') },
  ],
  notes: [
    {
      label: T('The adverb is invariable'),
      text: T(
        'Adverbs vary in neither gender nor number: {mujeres felices} stays the same. Any inflection in {la feliz} belongs to the noun, never to the adverb.',
      ),
    },
  ],
  examples: [
    { text: '{claramente}', gloss: T('Clearly (two stressed syllables!).') },
    { text: '{mucho amor}', gloss: T('Much love.') },
    { text: '{Así sea}', gloss: T('So be it (amen!).') },
    { text: '{sin cesar}', gloss: T('Without ceasing (1 Thess 5:17).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Irregular adverbs'),
      head: [T('Adjective'), T('Regular adverb'), T('Irregular adverb')],
      rows: [
        ['{claro}', '{claramente}', '—'],
        ['{bueno}', '{buenamente}', '{bien}'],
        ['{malo}', '{malamente}', '{mal}'],
        ['{mucho}', '—', '{mucho}'],
        ['{poco}', '—', '{poco}'],
        ['{bastante}', '—', '{bastante}'],
      ],
    },
    {
      caption: T('Table 2 — muy vs mucho'),
      head: [T('Word'), T('Used with'), T('Example')],
      rows: [
        ['{muy}', 'adjetivo / advérbio', '{muy bueno}'],
        ['{muy}', 'substantivo (ERRO)', '{muy amor}'],
        ['{mucho}', 'sozinho (ser/estar)', '{Es mucho}'],
        ['{mucho}', 'substantivo', '{mucho amor}'],
        ['{mucho}', 'verbo de ação', '{Trabaja mucho}'],
      ],
    },
  ],
};

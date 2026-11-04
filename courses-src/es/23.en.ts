import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Prepositions and the personal "a"'),
  subtitle: T('I love God — people take "a"'),
  section: T('Prepositions'),
  body: C(`## Personal {a}

The direct object of a **person** takes the prepositional {a}, which Portuguese lacks:

{amo a Dios} "I love God" · {vio a Jesús} "he saw Jesus" · {no vi a nadie} "I saw nobody" · {ama a su prójimo} (Mark 12:30) · {sirve a Dios}.

But **things** do not take it: {veo la cruz} · {compré un libro} · {tengo un amigo} (here {amigo} is a noun, not a pronoun).

Two reasons: words beginning with a consonant are hard after {a}, and the person/thing distinction is inherited from Latin.

**Important exception**: {a} drops before {el} — {ama al prójimo}.

## The repertoire

• {a} — to · {en} — in, inside · {de} — of, from
• {con} — with · {sin} — without · {sobre} — on, about
• {entre} — between · {hacia} — toward · {hasta} — until
• {desde} — from (origin) · {tras} — behind, through (transparent!)
• {durante} — during · {hacia} — towards (time)

## Contractions

{a} + {el} = {al} · {de} + {el} = {del}. Nothing else contracts.

{al tercer día} (Gen 1:5) · {la palabra del Señor}.

## Prepositions with theological content

{en} with believing: {creo en Dios} (not {creo a Dios}!).
{sin} in strong statements: {sin fe} (Heb 11:6: {es imposible}).
{con} = company: {conmigo} · {con Dios} · {con Él}.
{por} = agent: {enviado por Dios}.

Ex.: {¿Por qué me has abandonado?} (Matt 27:46) — {por} of cause; {A Dios le debo} "I owe God" — {de} of origin.`),
  vocab: [
    V('a', 'a', 'to (personal!)'),
    V('al', 'al', 'to the (= a + el)'),
    V('del', 'del', 'of the (= de + el)'),
    V('en', 'en', 'in'),
    V('sin', 'sin', 'without'),
    V('hasta', 'hasta', 'until'),
    V('desde', 'desde', 'since'),
    V('a Dios', 'Dios', 'to God (person: takes a!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why "amo a Dios"?'),
    options: [
      T('PERSON direct objects take the personal "a"'),
      T('Because plural'),
      T('Because future'),
      T('By chance'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the preposition of belief: "Creo ___ Dios"'),
      answer: 'en',
      hint: T('Rule §5: to believe takes en.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [T('Veo la cruz'), T('Veo a cruz'), T('Veo a la cruz'), T('Veo el cruz')],
      answer: 0,
      hint: T('Rule §1: THINGS do not take a.'),
    },
    {
      kind: 'match',
      prompt: T('Match the preposition to its value'),
      pairs: [
        { a: T('{a}'), b: T('direction / person') },
        { a: T('{de}'), b: T('origin, possession') },
        { a: T('{con}'), b: T('company') },
        { a: T('{sin}'), b: T('privation') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Direct objects that are persons take a: amo a Dios, vi a Jesús, no vi a nadie.'),
    },
    { n: '2', text: T('Direct objects that are things do not: veo la cruz, tengo un libro.') },
    { n: '3', text: T('Before el, a + el = al; de + el = del. No other contraction.') },
    { n: '4', text: T('With an indirect pronoun (le, me, nos) the a disappears: le dio, me dio.') },
    { n: '5', text: T('To believe takes en (creo en Dios); to know takes de (sé de aquí).') },
  ],
  notes: [
    {
      label: T('The personal {a} is required'),
      text: T(
        'Before {lo}, {la}, {los}, {las} or {le}, the noun takes an {a} it did not have alone: {a} + {el} → {al}. The form elides before a vowel: {amigo}, not {al amigo}.',
      ),
    },
  ],
  examples: [
    { text: '{amo a Dios}', gloss: T('I love God (person → personal a).') },
    { text: '{veo la cruz}', gloss: T('I see the cross (thing → no a).') },
    { text: '{al tercer día}', gloss: T('On the third day (a + el = al).') },
    { text: '{creo en Dios}', gloss: T('I believe in God (en of belief!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Essential prepositions'),
      head: [T('Preposition'), T('Value'), T('Example')],
      rows: [
        ['{a}', 'direção, pessoa', '{amo a Dios}'],
        ['{en}', 'lugar, crer', '{creo en Dios}'],
        ['{de}', 'origem, posse', '{la palabra del Señor}'],
        ['{con}', 'companhia', '{con Él}'],
        ['{sin}', 'privação', '{sin fe}'],
        ['{sobre}', 'sobre, tema', '{sobre la fe}'],
        ['{entre}', 'entre', '{entre nosotros}'],
        ['{hasta}', 'até', '{hasta el fin}'],
        ['{desde}', 'desde (origem)', '{desde el principio}'],
        ['{por}', 'causa, agente', '{por Dios}'],
        ['{para}', 'finalidade', '{para salvar}'],
      ],
    },
    {
      caption: T('Table 2 — Personal a: when it appears'),
      head: [T('Case'), T('Example'), T('Takes a?')],
      rows: [
        [T('person'), '{amo a Dios}', T('yes')],
        [T('thing'), '{veo la cruz}', T('no')],
        [T('person + el'), '{ama al prójimo}', T('becomes al')],
        [T('pronoun le (indirect)'), '{Le doy el libro}', T('no (no a!)')],
        [T('motion verb'), '{Voy a la casa}', T('no (a = direction!)')],
      ],
    },
  ],
};

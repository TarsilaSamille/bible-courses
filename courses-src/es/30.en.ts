import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Indefinite pronouns'),
  subtitle: T('alguien, algo, todo — someone knocks!'),
  section: T('Pronouns'),
  body: C(`## The four with {n-}

Spanish has a systematically negative series:

{alguien} "someone" vs {nadie} "no one"
{algo} "something" vs {nada} "nothing"
{alguno} "some" vs {ninguno} "none"
{cualquiera} "any" — with a negative, "none"

In negative sentences, **double negation is obligatory**: {No vi a nadie} "I saw nobody" (never "*No vi alguien"). In questions the second {no} is optional: {¿No viste a alguien?} "did you see anyone?".

Biblical: {No hay quien} (Eccl 3:15) · {Nada hay nuevo} (Eccl 1:9).

## {todo}

{todo} agrees normally: {todo hombre} · {toda la ley} · {Todos los que oyen}.

But as an **adverb** it is invariable and means "entirely": {todo está destruido} "everything is destroyed".

## Apocopes

Several indefinites drop their final vowel before a masculine singular noun:

{alguno} → {algún} {algún día}
{ninguno} → {ningún} {ningún hombre}
{cualquiera} → {cualquier} {cualquier día}

## Invariable quantifiers

{cada} · {todo} (adverb) · {mucho}, {poco} · {bastante} · {demasiado} · {varios} "several" · {ciertos} "certain" — all invariable: {varios libros}.

## Absolute negatives

{nadie} and {nada} demand {no} on the verb and reject other pronouns: {Nadie dijo nada} "nobody said anything".

Ex.: {He aquí, yo estoy a la puerta; si alguien oye mi voz y abre la puerta, entraré} (Rev 3:20).`),
  vocab: [
    V('alguien', 'alguien', 'someone'),
    V('nadie', 'nadie', 'no one'),
    V('nada', 'nada', 'nothing'),
    V('todo', 'todo', 'all'),
    V('algún día', 'alguno', 'some day (apocope!)'),
    V('cada uno', 'uno', 'each one'),
    V('el mismo', 'mismo', 'the same'),
    V('nadie', 'nadie', 'no one (absolute negative!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does "no vi a nadie" have two "noes"?'),
    options: [
      T('Error'),
      T('MANDATORY double negation with negative indefinites!'),
      T('Optional emphasis'),
      T('Plural'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with apocope: "___ día" (any day)'),
      answer: 'cualquier',
      hint: T('Rule §3: cualquiera drops its ending before a masc. sg.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is CORRECT (negation)?'),
      options: [T('No dijo nada'), T('No dijo algo'), T('Dijo nada'), T('Nada no dijo')],
      answer: 0,
      hint: T('Rule §1: negative + no on the verb.'),
    },
    {
      kind: 'match',
      prompt: T('Match the indefinite to its negative pair'),
      pairs: [
        { a: T('{alguien}'), b: T('{nadie}') },
        { a: T('{algo}'), b: T('{nada}') },
        { a: T('{alguno}'), b: T('{ninguno}') },
        { a: T('{todo}'), b: T('{nadie} (nothing = zero!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Negation requires no + the negative indefinite: no vi a nadie, no dijo nada.'),
    },
    {
      n: '2',
      text: T(
        'Todo agrees with the noun (todo hombre), but as an adverb it is invariable (todo está bien).',
      ),
    },
    { n: '3', text: T('Apocope before a masculine singular: algún, ningún, cualquier.') },
    { n: '4', text: T('Cada, mucho, poco, bastante, demasiado and varios are invariable.') },
  ],
  notes: [
    {
      label: T('{todo} changes value'),
      text: T(
        'Inside a clause {todo} is a pronoun and agrees: {todo hombre}, {toda la ley}. Outside it, it is an adverb and invariable: {todo lo hizo}. Context decides the inflection.',
      ),
    },
  ],
  examples: [
    { text: '{Alguien llama a la puerta}', gloss: T('Someone knocks at the door (Rev 3:20).') },
    { text: '{no vi a nadie}', gloss: T('I saw nobody (double negation!).') },
    {
      text: '{nada hay nuevo bajo el sol}',
      gloss: T('There is nothing new under the sun (Eccl 1:9).'),
    },
    { text: '{todo está bien}', gloss: T('Everything is fine (todo as adverb, invariable).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Indefinites and their negatives'),
      head: [T('Positive'), T('Negative'), T('Positive example'), T('Negative example')],
      rows: [
        ['{alguien}', '{nadie}', '{Alguien llama}', '{Nadie llama}'],
        ['{algo}', '{nada}', '{Quiero algo}', '{No quiero nada}'],
        ['{alguno}', '{ninguno}', '{Algún día}', '{Ningún hombre}'],
        ['{alguien}', '{nadie}', '{Vi a alguien}', '{No vi a nadie}'],
        ['{cualquiera}', '{nadie}', '{Cualquier día}', '{No va nadie}'],
      ],
    },
    {
      caption: T('Table 2 — Apocopes of the indefinites'),
      head: [T('Full form'), T('Apocope'), T('Use')],
      rows: [
        ['{alguno}', '{algún}', '{algún día}'],
        ['{ninguno}', '{ningún}', '{ningún hombre}'],
        ['{cualquiera}', '{cualquier}', '{cualquier día}'],
        ['{bueno}', '{buen}', '{buen hombre}'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Alphabet and pronunciation'),
  subtitle: T('ñ, ll, rr, j — how it sounds'),
  section: T('Spanish basics'),
  body: C(`## The alphabet

Spanish uses the Latin alphabet with 27 letters of its own. The five vowels are {a, e, i, o, u}, and {i} forms a hiatus after another vowel ({país}, {día}) but a diphthong before consonants ({bien}). The consonants that trouble Portuguese speakers most:

{ñ} — "nh" in Brazil, a guttural jota: {niño} "boy", {mañana} "tomorrow", {año} "year".
{ll} — jota in Spain, "y" in America: {llamar} "to call" (ES) / "to dial" (MX), {caballo} "horse" (ES) / "horse" (MX).
{rr} — strong trill word-initially and after {n, l, s}: {perro} "dog", {Israel}, {honra}.
{j} — jota always: {Jesús}, {Juan}, {julio}, {joven}.

## Reading rules

{c} = {k} before {a, o, u} ({casa}); = {s} in America / {θ} (as in "think") in Spain before {e, i} ({cielo}, {cerveza}). The RAE also keeps {z} as {θ} in Spain: {cruz}, {luz}.
{g} = hard before {a, o, u} ({gato}) or soft before {e, i} ({gente}); to keep the hard sound write {gue} or {guí}: {guía}, {güero}.
{h} is always silent: {hombre} reads "ombre", {hoy} "today".
{v} sounds like {b}: {vida}, {vino} "wine".
{y} = {i} between vowels: {hoy} "today", {ley} "law"; = jota initially or after a consonant: {yo}, {muy}.

## European vs American

Four pairs summarize nearly the whole difference: {z} = θ / s; {c} + e/i = θ / s; {ll} = /ʝ/ in Spain ("ley" = "read") but /ʝ/ or /j/ in America ("ley" = "I read"); {ll} + i = /ʝ/ (lojeria) only in Spain. The Spanish Bible text (Reina-Valera 1960) follows the peninsular standard, while the text used in America follows the American standard.

Ex.: {Dios} "God" · {luz} "light" · {niño} "boy" — read aloud from now on!`),
  vocab: [
    V('niño', 'niño', 'boy (ñ!)'),
    V('perro', 'perro', 'dog (rr!)'),
    V('pero', 'pero', 'but (single r!)'),
    V('cielo', 'cielo', 'heaven'),
    V('hombre', 'hombre', 'man (silent h!)'),
    V('luz', 'luz', 'light'),
    V('vino', 'vino', 'wine (v = b!)'),
    V('hoy', 'hoy', 'today (y = i!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Difference "perro" vs "pero"?'),
    options: [
      T('Only spelling'),
      T('Trilled rr (dog) vs single r (but)!'),
      T('Plural × singular'),
      T('Same'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In "hombre", the letter h…'),
      options: [
        T('Sounds like /x/'),
        T('Is silent (read "ombre")'),
        T('Sounds like German /h/'),
        T('Only in the plural'),
      ],
      answer: 1,
      hint: T('Rule §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete with the missing letter: me__ino (boy)'),
      answer: 'ñ',
      hint: T('Sounds like "nh" in Portuguese.'),
    },
    {
      kind: 'match',
      prompt: T('Match the letter to its sound'),
      pairs: [
        { a: T('j'), b: T('always jota') },
        { a: T('v'), b: T('sounds like b') },
        { a: T('c + e/i'), b: T('s in America, th in Spain') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Ñ, ll and rr are letters in their own right: niño (boy), calle (street), perro (dog) vs pero (but).',
      ),
    },
    {
      n: '2',
      text: T(
        'C and G shift before e/i: cielo (heaven), gente (people). J is always jota: Jesús, Juan.',
      ),
    },
    { n: '3', text: T('H is silent (hombre reads "ombre") and V sounds like B (vida).') },
    {
      n: '4',
      text: T('Y is a vowel before another vowel (hoy) and a consonant before one (muy).'),
    },
  ],
  notes: [
    {
      label: T('Listen before you read'),
      text: T(
        'The {ñ} is the only sound with no Portuguese equivalent; Spanish {j} sounds like French {ʒ}, and {h} is always silent. {ll} now sounds like {y}, except across much of the Americas, where the palatal sound survives.',
      ),
    },
  ],
  examples: [
    { text: '{Dios}', gloss: T('God.') },
    { text: '{luz}', gloss: T('Light.') },
    { text: '{niño}', gloss: T('Boy (ñ!).') },
    { text: '{hombre}', gloss: T('Man (silent h!).') },
    { text: '{mañana}', gloss: T('Tomorrow (ñ!).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Problem letters'),
      head: [T('Letter'), T('Value'), T('Example')],
      rows: [
        [T('ñ'), T('"nh" (Brazil); deep jota'), T('{niño}')],
        [T('ll'), T('jota (Spain) / y (America)'), T('{caballo}')],
        [T('rr'), T('strong trill'), T('{perro}')],
        [T('h'), T('silent'), T('{hombre}')],
        [T('z'), T('s (America) / th (Spain)'), T('{luz}')],
      ],
    },
    {
      caption: T('Table 2 — Peninsular × American'),
      head: [T('Word'), T('Spain'), T('America')],
      rows: [
        ['{cerveza}', T('th sound'), T('s sound')],
        ['{ley}', T('"read"'), T('"law / read"')],
        ['{vaca}', T('b sound'), T('b sound (w!)')],
      ],
    },
  ],
};

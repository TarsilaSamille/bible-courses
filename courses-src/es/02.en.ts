import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Orthography and accents'),
  subtitle: T('agudas, graves, esdrújulas — stress rules'),
  section: T('Spanish basics'),
  body: C(`## Three word classes

Spanish needs only three classes, and the class decides whether the accent is written:

**Stressed-final**: {casa}, {libro}, {papel}, {Dios}, {Jesús}.
**Penultimate**: {cantar}, {luz}, {vivir}, {árbol} "tree".
**Proparoxytone**: {música}, {teléfono}, {página}, {rápido}.

## The golden rule

Words ending in a **vowel, {n} or {s}** are **penultimate** and take NO accent: {casa}, {libro}, {hablan}, {valientes}.
Words ending in **any other consonant** are **stressed-final** and take NO accent: {hablar}, {luz}, {papel}, {fiel}.

The written accent appears **only to break the rule**:
• {habló} "he spoke", {cantó} "he sang" — stressed-final in a vowel (breaks §1).
• {lápiz}, {útil} — penultimate in a consonant (breaks §2).
• {música}, {teléfono}, {rápido} — proparoxytones: **always** accented.

## Trap cases

• {Nicolás}, {Jesús}, {Papá} — proper nouns in -s, -n or a stressed vowel stay stressed-final and DO take an accent.
• {María}, {río}, {día} — adjacent vowels that do NOT form a diphthong: each counts, the word is proparoxytone, so the accent is obligatory.
• {tú}, {él}, {sí}, {más}, {mí} — **diacritic** accents: the accent marks meaning, not only sound.
• {solo} vs {sólo} — the RAE abolished the distinction; today always {solo}.

## Graphic accents: question and exclamation

Every question and exclamation takes an accent (the RAE also writes the mark with periods, except the full stop): {¿Dónde está Dios?} · {¡Santo sea!} · {¿Cuánto tiempo?}

Ex.: {¿Hablas español?} "Do you speak Spanish?" — biblical reading: {¿Qué es la verdad?} (John 18:38).`),
  vocab: [
    V('habló', 'hablar', 'he spoke (aguda!)'),
    V('lápiz', 'lápiz', 'pencil'),
    V('él', 'él', 'he (vs el article!)'),
    V('tú', 'tú', 'you (vs possessive!)'),
    V('Jesús', 'Jesús', 'Jesus (stressed s-ending!)'),
    V('música', 'música', 'music (proparoxytone!)'),
    V('árbol', 'árbol', 'tree (broken penultimate!)'),
    V('cuánto', 'cuánto', 'how much (interrogative!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why does "habló" take an accent?'),
    options: [
      T('Stressed-last vowel ending (breaks the rule!)'),
      T('Verbs always accented'),
      T('It is plural'),
      T('By chance'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Proparoxytone ("música"): does it take an accent? Write always or never.'),
      answer: 'siempre',
      hint: T('Rule §2, third item.'),
    },
    {
      kind: 'choose',
      prompt: T('Which pair changes MEANING only with the accent?'),
      options: [T('hablar / hablaré'), T('tú / tu'), T('casa / casas'), T('papel / papeles')],
      answer: 1,
      hint: T('Diacritic accent (§3).'),
    },
    {
      kind: 'fill',
      prompt: T('Which of the two is written without an accent today: solo or sólo?'),
      answer: 'solo',
      hint: T('The RAE abolished the distinction.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Vowel/N/S endings stress second-last with no accent (casa, hablan); other consonants stress last (hablar, luz).',
      ),
    },
    {
      n: '2',
      text: T(
        'Accents only on rule-breakers: habló (stressed vowel ending!), lápiz, música (proparoxytones always!).',
      ),
    },
    {
      n: '3',
      text: T(
        'Diacritic accents change meaning: el (article) vs él (he); tu vs tú; mi vs mí; si vs sí.',
      ),
    },
    {
      n: '4',
      text: T(
        'Questions and exclamations always take ¿...? and ¡...! (RAE also with the periods).',
      ),
    },
  ],
  notes: [
    {
      label: T('European × American:'),
      text: T(
        'Accentuation and spelling are practically identical across the two worlds. Real differences: {vosotros} (Spain only, {ustedes} in America), {vale} "OK", {ordenador} vs {computadora}, {coche} vs {carro}. The accentuation of the biblical text (Reina-Valera) follows the Castilian norm, shared by both Americas.',
      ),
    },
  ],
  examples: [
    { text: '{habló}', gloss: T('He spoke (stressed vowel!).') },
    { text: '{él}', gloss: T('He (vs el, article!).') },
    { text: '{Jesús}', gloss: T('Jesus (stressed S-ending!).') },
    { text: '{música}', gloss: T('Music (proparoxytone: accent obligatory!).') },
    {
      text: '¿Qué es la verdad?}',
      gloss: T('What is truth? (John 18:38 — question with a graphic accent!).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Class × accent'),
      head: [T('Ending'), T('Natural class'), T('Example (no accent)'), T('Rule-breaker')],
      rows: [
        [T('vowel'), T('penultimate'), T('{casa}, {libro}'), T('{habló}, {canción}')],
        [T('-n'), T('penultimate'), T('{cantan}, {pan}'), T('{cantón}, {Jesús}')],
        [T('-s'), T('penultimate'), T('{valientes}, {libros}'), T('{papás}, {días}')],
        [T('other consonant'), T('stressed-final'), T('{hablar}, {papel}'), T('{útil}, {lápiz}')],
        [T('3+ syllables, stress on 3rd'), T('proparoxytone'), T('—'), T('{música}, {teléfono}')],
      ],
    },
    {
      caption: T('Table 2 — Homophones the accent separates'),
      head: [T('Accented'), T('Meaning'), T('Unaccented'), T('Meaning')],
      rows: [
        ['{él}', T('he'), '{el}', T('the (article)')],
        ['{tú}', T('you'), '{tu}', T('your')],
        ['{sí}', T('yes'), '{si}', T('if')],
        ['{mí}', T('me'), '{mi}', T('my')],
        ['{este}', T('this'), '{este}', T('this (indef.)')],
      ],
    },
  ],
};

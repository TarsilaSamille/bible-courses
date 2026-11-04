import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Personal pronouns'),
  subtitle: T('yo, tú, él — me/te/lo, le/les'),
  section: T('Pronouns'),
  body: C(`## Three series, three functions

**Subject** (almost always droppable, since the verb says who): {yo}, {tú}, {él/ella/usted}, {nosotros}, {vosotros}, {ellos/ustedes}.

**Direct object**: {me}, {te}, {lo/la}, {nos}, {os}, {los/las} — {Dios te ama} · {lo veo} "I see him".

**Indirect object** (dative): {me}, {te}, {le}, {nos}, {os}, {les} — {le doy} "I give it to him" · {les hablo}.

## {le} → {se}

When the indirect object {le} or {les} appears **next to** a direct object {lo/la/los/las}, it becomes {se}: {se lo dio} "he gave it to him" · {se las dio} · {se lo dijo}.

This is the Spanish solution to what Portuguese does by placing {lhe} before the noun.

## Where the pronoun stands

• Before the conjugated verb: {te amo} · {lo veo}.
• After the infinitive, gerund and affirmative imperative: {amarte} · {hablándome} · {ámame}.
• Before the verb in the negative and the subjunctive: {No me digas}.

## {os} and the vowel marker

With the second-person plural pronoun {os} (Spain), verbs of the {-er}/{ir} group add a vowel before it: {decís} → {decíos} "say to us", {tenéis} → {teneos}, {oís} → {oíos}. Regular {-ar} verbs simply attach: {hablad} → {hablad} + {os} = {hablad} stays {hablad} in speech.`),
  vocab: [
    V('yo', 'yo', 'I'),
    V('tú', 'tú', 'you'),
    V('lo', 'lo', 'him/it (object!)'),
    V('le', 'le', 'to him (indirect!)'),
    V('les', 'les', 'to them'),
    V('se lo', 'se', 'it to him (le → se!)'),
    V('ámame', 'amar', 'love me (imperative + me)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why "se lo dio" and not "le lo dio"?'),
    options: [T('Error'), T('"le/les" becomes "se" before "lo/la"!'), T('Plural'), T('Past')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Dios ___ ama" (God loves you)'),
      answer: 'te',
      hint: T('Direct object, 2nd person: te.'),
    },
    {
      kind: 'choose',
      prompt: T('Where does the pronoun go with the infinitive?'),
      options: [T('{te amo}'), T('{amar te}'), T('{amarte}'), T('{amarme}')],
      answer: 2,
      hint: T('Rule §3: after the infinitive, attached.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to its function'),
      pairs: [
        { a: T('{yo}'), b: T('subject') },
        { a: T('{me}'), b: T('direct object') },
        { a: T('{le}'), b: T('indirect object') },
        { a: T('{se}'), b: T('le/les before lo/la') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subject pronoun is dropped when the verb identifies the subject: Hablo, Habla Dios.',
      ),
    },
    { n: '2', text: T('The indirect object uses le/les: le doy el libro, les hablo.') },
    { n: '3', text: T('le/les becomes se before lo/la/los/las: se lo dio, se las dijo.') },
    {
      n: '4',
      text: T(
        'Pronouns attach to the infinitive, gerund and affirmative imperative; in the negative they come before.',
      ),
    },
  ],
  notes: [
    {
      label: T('He comes back'),
      text: T(
        '{él} moves to the end of the clause when it attaches to another element: {Le doy el libro a él}. The final position is not a free choice: it stops the noun being repeated.',
      ),
    },
  ],
  examples: [
    { text: '{Dios te ama}', gloss: T('God loves you (direct object te).') },
    { text: '{se lo dio}', gloss: T('He gave it to him (le → se!).') },
    { text: '{ámame}', gloss: T('Love me (imperative + attached pronoun).') },
    { text: '{no me lo digas}', gloss: T("Don't tell me (negative: before the verb).") },
  ],
  tables: [
    {
      caption: T('Table 1 — The three series'),
      head: [T('Person'), T('Subject'), T('Direct object'), T('Indirect object')],
      rows: [
        ['1ª', '{yo}', '{me}', '{me}'],
        ['2ª', '{tú}', '{te}', '{te}'],
        ['3ª', '{él/ella/usted}', '{lo/la}', '{le}'],
        ['1ª pl.', '{nosotros}', '{nos}', '{nos}'],
        ['2ª pl.', '{vosotros}', '{os}', '{os}'],
        ['3ª pl.', '{ellos/ustedes}', '{los/las}', '{les}'],
      ],
    },
    {
      caption: T('Table 2 — Pronoun position'),
      head: [T('Context'), T('Position'), T('Example')],
      rows: [
        [T('conjugated verb'), 'antes', '{te amo}'],
        [T('infinitive'), 'depois, colado', '{amarte}'],
        [T('gerund'), 'depois, colado', '{diciéndoselo}'],
        [T('affirmative imperative'), 'depois, colado', '{ámame}'],
        [T('negative / subjunctive'), 'antes', '{no me lo digas}'],
      ],
    },
  ],
};

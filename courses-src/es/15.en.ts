import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Irregular verbs'),
  subtitle: T('tener, decir, ir — the giants'),
  section: T('Verbs'),
  body: C(`## Entirely new stems

The first person singular of certain verbs swaps its ending for {-go}: {tengo} · {digo} · {vengo} · {salgo} · {pongo} · {hago} · {oigo} · {pido}.

## Vowel shifts (present)

**-e → -ie** (stem-stressed verbs, only in the singular and 3rd person): {pienso}, {quiero}, {viene}, {miento}. But **we and you keep the vowel**: {pensamos}, {queremos} — that exception gives them away.

**-o → -ue**: {puedo}, {duermo}, {vuelvo}, {muero}, {recuerdo}.

**-e → -i** (only in {-ir} verbs): {pido}, {sirvo}, {sigo}.

## The three giants

• {ser}: {soy}, {eres}, {es}, {somos}, {sois}, {son}
• {ir}: {voy}, {vas}, {va}, {vamos}, {vais}, {van} — {vamos} is identical with {ser}!
• {haber} (auxiliary): {he}, {has}, {ha}, {hemos}, {habéis}, {han} — {he orado} "I have prayed" (perfect, ch. 15).

## Verbs vital for the New Testament

{tener} → {tengo} · {hacer} → {hago} · {decir} → {digo} · {poder} → {puedo} · {saber} → {se} · {querer} → {quiero} · {dar} → {doy} · {ver} → {veo} · {venir} → {vengo}.

Ex.: {Todo lo puedo en Cristo} "I can do all things in Christ" (Phil 4:13).`),
  vocab: [
    V('tengo', 'tener', 'I have (-go!)'),
    V('digo', 'decir', 'I say (-go!)'),
    V('quiero', 'querer', 'I want (e→ie!)'),
    V('puedo', 'poder', 'I can (o→ue!)'),
    V('pido', 'pedir', 'I ask (e→i!)'),
    V('voy', 'ir', 'I go'),
    V('he orado', 'orar', 'I have prayed'),
    V('hago', 'hacer', 'I do/make (-go!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Why doesn\'t "pensamos" become "piensamos"?'),
    options: [
      T('Error'),
      T('We/you KEEP the vowel (only singular + they shift!)'),
      T('It is regular'),
      T('Future'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "yo ___ (decir)" "I say"'),
      answer: 'digo',
      hint: T('Rule §1: the 1st person swaps to -go.'),
    },
    {
      kind: 'choose',
      prompt: T('Which verb shows o→ue in the present?'),
      options: [
        T('{pedir} → {pido}'),
        T('{dormir} → {duermo}'),
        T('{seguir} → {sigo}'),
        T('{tener} → {tengo}'),
      ],
      answer: 1,
      hint: T('Rule §2: stem -o becomes -ue.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its present irregular'),
      pairs: [
        { a: T('{ir}'), b: T('{voy}') },
        { a: T('{haber}'), b: T('{he}') },
        { a: T('{querer}'), b: T('{quiero}') },
        { a: T('{venir}'), b: T('{vengo}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('First person in -go: tengo, digo, vengo, salgo, pongo, hago, oigo.') },
    {
      n: '2',
      text: T(
        'The e→ie and o→ue shifts happen only in the singular and 3rd person: hablamos, not hablo.',
      ),
    },
    { n: '3', text: T('The e→i shift exists only in -ir verbs: pido, sirvo, sigo.') },
  ],
  notes: [
    {
      label: T('The i is the only spot'),
      text: T(
        'Irregular verbs change only in the stem, never in the endings: {tuve} + {tuviste}, {tuviste} + {tuve}. You do not need to memorise the whole verb, only the stem and the irregular present.',
      ),
    },
  ],
  examples: [
    { text: '{tengo}', gloss: T('I have (new stem: -go).') },
    { text: '{puedo}', gloss: T('I can (o→ue).') },
    { text: '{pido}', gloss: T('I ask (e→i).') },
    { text: '{he orado}', gloss: T('I have prayed (auxiliary haber).') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three shifts'),
      head: [T('Shift'), T('Examples'), T('Exception')],
      rows: [
        ['-e → -ie', '{pienso}, {quiero}, {viene}', '{pensamos}, {queremos}'],
        ['-o → -ue', '{puedo}, {duermo}, {vuelvo}', '{podemos}, {dormimos}'],
        ['-e → -i', '{pido}, {sirvo}, {sigo}', T('only in -ir')],
        ['-ir → -go', '{tengo}, {digo}, {vengo}', T('only the yo')],
      ],
    },
    {
      caption: T('Table 2 — The irregular giants'),
      head: [T('Verb'), T('Present'), T('Note')],
      rows: [
        ['{ser}', '{soy}, {eres}, {es}, {somos}, {sois}, {son}', T('to be')],
        ['{ir}', '{voy}, {vas}, {va}, {vamos}, {vais}, {van}', T('{vamos} = {somos}!')],
        ['{haber}', '{he}, {has}, {ha}, {hemos}, {habéis}, {han}', T('auxiliary and "to have"')],
        ['{estar}', '{estoy}, {estás}, {está}, {estamos}, {estáis}, {están}', T('verb of state')],
      ],
    },
  ],
};

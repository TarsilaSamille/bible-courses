import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Future and conditional'),
  subtitle: T('parlerò, parlerei'),
  section: T('The tenses of the verb'),
  body: C(`## One root, two endings

Future and conditional come out of the same root of the infinitive, **almost always without the final vowel**: {parlare} → {parler-}, {leggere} → {legger-}, {finire} → {finir-}. After that the ending does all the work, and it is the ending that separates the two tenses.

The future adds {-ò}, {-ai}, {-à}, {-emo}, {-ete}, {-anno}: {parlerò}, {parlerai}, {parlerà}, {parleremo}, {parlerete}, {parleranno}. The conditional adds {-ei}, {-esti}, {-ebbe}, {-emmo}, {-este}, {-ebbero}: {parlerei}, {parleresti}, {parlerebbe}, {parleremmo}, {parlereste}, {parlerebbero}. One vowel swapped, two tenses: {parlerò} and {parlerei} differ only in the last syllable.

## The conditional is not only hypothesis

The conditional **is the tense of hypothesis**, of possibility and of politeness: {Vorrei un caffè} ("I would like a coffee"), {Potresti aiutarmi?} ("could you help me?"), {Lo farei} ("I would do it, if I could"). {Vorrei} is more than a wish: it is a polite request, and the distance Italian builds is what makes the request work.

Translating {Lo farei} as "I shall do it" goes wrong. The context decides whether it is conditional (hypothesis) or future (foreseen fact), and often the difference is exactly what the narrator does not want to assert. In the gospels {Verrà il tuo regno} and {Avrà la gloria} use the future for what is certain; {sarebbe venuto} uses the conditional for what is merely possible.

## The irregulars are few and heavily used

{Essere} gives {sarò} and {sarei}, {avere} gives {avrò} and {avrei}, {fare} gives {farò} and {farei}, {andare} gives {andrò} and {andrei}, {venire} gives {verrò} and {verrei}, {vedere} gives {vedrò} and {vedrei}, {potere} gives {potrò} and {potrei}, {dovere} gives {dovrò} and {dovrei}, {sapere} gives {saprò} and {saprei}. The pattern is always the same: the verb **loses a syllable** and gains {-rò} or {-rei}.

It is the same road Latin took: {amāre} gave {amābō}, and Italian {verrò} descends from {venire} plus the Latin future. Italian invented nothing here; it kept the ending.

## Reading criterion

If you see a form in {-rò} or {-rei}, the root is the verb’s and the ending names the tense. And mind the irregulars: {andrò} is not {andare} + {-ò} with its {a} intact, and {verrò} has no {n} in it. When the form does not come out of the rule, it is because the verb is on the list.`),
  vocab: [
    V('parlerò', 'parlare', 'I shall speak'),
    V('parlerei', 'parlare', 'I would speak'),
    V('sarò', 'essere', 'I shall be'),
    V('avrò', 'avere', 'I shall have'),
    V('verrà', 'venire', 'he shall come'),
    V('vorrei', 'volere', 'I would like'),
    V('potresti', 'potere', 'you could'),
    V('farei', 'fare', 'I would do'),
    V('vedrà', 'vedere', 'he shall see'),
    V('andrò', 'andare', 'I shall go'),
    V('dovrò', 'dovere', 'I shall owe'),
    V('saprà', 'sapere', 'he shall know'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Rev 1:7: ogni occhio lo ___ (vedere, future)'),
    answer: 'vedrà',
    hint: T('Irregular future of vedere.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What is the future of essere?'),
      options: [T('serei'), T('sarò'), T('sia'), T('ero')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is a polite request?'),
      options: [
        T('Dammi il libro!'),
        T('Potresti darmi il libro?'),
        T('Mi dai il libro.'),
        T('Dare il libro.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: avrei ___ (dire, compound conditional)'),
      answer: 'detto',
      hint: T('Irregular participle of dire.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The future takes from the infinitive everything but the final vowel: {parlare} → {parlerò}, {leggere} → {leggerò}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The conditional uses {-ei}, {-esti}, {-ebbe}, {-emmo}, {-este}, {-ebbero}: {parlerei} and {parlerò} differ only in the last syllable.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Vorrei} and {potresti} are conditionals of politeness, not futures: "I would like", "you could".',
      ),
    },
    {
      n: '4',
      text: T(
        'The irregulars swap the ending: {essere} → {sarò} and {sarei}, {venire} → {verrò} and {verrei}, {avere} → {avrò} and {avrei}.',
      ),
    },
    {
      n: '5',
      text: T(
        'The compound conditional is the imperfetto of the auxiliary plus the participle: {avrei detto}, {sarei andato}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The conditional is not a future'),
      text: T(
        '{Parlerei} is not the future of {parlerò}: it is what is done in case of. One form covers wish, politeness and hypothesis, {vorrei un caffè}, {se venissi, ti chiamerei}. The form is one, and what changes is how much the speaker is willing to assert.',
      ),
    },
    {
      label: T('{Lo farei} has two values'),
      text: T(
        '{Lo farei} can be future ({lo farò domani}) or conditional ({se potessi, lo farei}). The context decides, and in {Se venissi, ti chiamerei} the condition sits in the previous clause; anyone who translates the verb alone loses it.',
      ),
    },
  ],
  examples: [
    { text: 'Parlerò con lui domani.', gloss: T('I shall speak with him tomorrow.') },
    { text: 'Vorrei un caffè.', gloss: T('I would like a coffee.') },
    { text: 'Potresti aiutarmi?', gloss: T('Could you help me?') },
    { text: 'Ogni occhio lo vedrà.', gloss: T('Every eye shall see him.') },
    { text: 'Sarà come un albero.', gloss: T('He shall be like a tree.') },
    { text: 'Se venissi, ti chiamerei.', gloss: T('If you came, I would call you.') },
    { text: 'Verrà il tuo regno.', gloss: T('Thy kingdom shall come.') },
    { text: 'Avrà la gloria.', gloss: T('He shall have glory.') },
  ],
  tables: [
    {
      caption: T('Futuro e condicional'),
      head: ['Persona', 'Futuro', 'Condicional'],
      rows: [
        ['io', 'parlerò', 'parlerei'],
        ['tu', 'parlerai', 'parleresti'],
        ['lui/lei', 'parlerà', 'parlerebbe'],
        ['noi', 'parleremo', 'parleremmo'],
        ['voi', 'parlerete', 'parlereste'],
        ['loro', 'parleranno', 'parlerebbero'],
      ],
    },
    {
      caption: T('Futuro e condicional irregolari'),
      head: ['Infinitivo', 'Futuro', 'Condicional'],
      rows: [
        ['essere', 'sarò', 'sarei'],
        ['avere', 'avrò', 'avrei'],
        ['fare', 'farò', 'farei'],
        ['andare', 'andrò', 'andrei'],
        ['venire', 'verrò', 'verrei'],
        ['vedere', 'vedrò', 'vedrei'],
        ['potere', 'potrò', 'potrei'],
        ['dovere', 'dovrò', 'dovrei'],
        ['sapere', 'saprò', 'saprei'],
      ],
    },
  ],
};

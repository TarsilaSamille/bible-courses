import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Future and conditional'),
  subtitle: T('hablaré, hablaría — whole infinitive!'),
  section: T('Verbs'),
  body: C(`## Twins built on the whole infinitive

Future and conditional are formed with the **complete infinitive** plus the endings {-é, -ás, -á, -emos, -éis, -án} and {-ía, -ías, -ía, -íamos, -íais, -ían}. Nothing changes in the middle — this is the most regular form in the language.

{hablar} → {hablaré}, {hablarás}, {hablará}, {hablaremos}, {hablaréis}, {hablarán}.
{hablar} → {hablaría}, {hablarías}, {hablaría}, {hablaríamos}, {hablaríais}, {hablarían}.

## The irregulars

Irregular verbs use the **same stem** in both tenses, which makes the pair inseparable: {tendré}/{tendría} · {podré}/{podría} · {diré}/{diría} · {haré}/{haría} · {vendré}/{vendría} · {sabré}/{sabría}.

Regular verbs stay regular: {comer} → {comeré}/{comería}, {vivir} → {viviré}/{viviría}.

## Future: what is written

The simple future is also used for:

• **Probable fact** (about 90% sure): {Serán las tres} "it will be three o'clock".
• **Present hypothesis**: {¿Dónde estará?} "where might he be?"
• **Periphrastic future**: {voy a venir} "I am coming" (present + {a} + infinitive).

## Conditional: wish and politeness

• {me gustaría} "I would like"
• {¿Podrías?} "could you?" (a polite request)
• {Deberías orar} "you should pray"
• Condition: {si tuviera tiempo, lo haría} "if I had time, I would do it".

Biblical: {vendrá} "he will come" (Matt 24:30) · {todo ojo le verá} "every eye shall see him" (Rev 1:7) · {será grande} "he shall be great" (Luke 1:32).`),
  vocab: [
    V('hablaré', 'hablar', 'I will speak'),
    V('hablaría', 'hablar', 'I would speak'),
    V('tendré', 'tener', 'I will have'),
    V('vendrá', 'venir', 'he will come'),
    V('gustaría', 'gustar', 'would like'),
    V('verá', 'ver', 'he will see'),
    V('será grande', 'ser', 'he shall be great (Luke 1:32)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Rev 1:7: "todo ojo le ___" (shall see)'),
    answer: 'verá',
    hint: T('Regular future of "ver".'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Conditional of "tener" (yo): ___ (I would have)'),
      answer: 'tendría',
      hint: T('Rule §2: same stem as the future (tendré).'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is a polite request?'),
      options: [
        T('Hablaré mañana'),
        T('¿Podrías ayudarme?'),
        T('Quiero que vengas'),
        T('Vendrá pronto'),
      ],
      answer: 1,
      hint: T('Rule §5: conditional = politeness.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its future/conditional pair'),
      pairs: [
        { a: T('{poder}'), b: T('{podré} / {podría}') },
        { a: T('{decir}'), b: T('{diré} / {diría}') },
        { a: T('{venir}'), b: T('{vendré} / {vendría}') },
        { a: T('{hablar}'), b: T('{hablaré} / {hablaría}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Future and conditional use the whole infinitive; nothing changes inside the word.'),
    },
    {
      n: '2',
      text: T('Irregulars share ONE stem in both: tendré/tendría, podré/podría, diré/diría.'),
    },
    {
      n: '3',
      text: T('The future also expresses probability and present hypothesis: Serán las tres.'),
    },
    { n: '4', text: T('The periphrastic future is present + a + infinitive: voy a venir.') },
    { n: '5', text: T('Conditional = wish and politeness: me gustaría, ¿Podrías?') },
  ],
  notes: [
    {
      label: T('The future is optional'),
      text: T(
        '{Hablar} and {hablaré} say the same thing. The future matters when you want to mark decision, prediction or distance: {veniré mañana} is more emphatic than {vendré}.',
      ),
    },
  ],
  examples: [
    { text: '{vendrá}', gloss: T('He will come (Matt 24:30).') },
    { text: '{todo ojo le verá}', gloss: T('Every eye shall see him (Rev 1:7).') },
    { text: '{me gustaría}', gloss: T('I would like (conditional of wish).') },
    { text: '{será grande}', gloss: T('He shall be great (Luke 1:32).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Future and conditional'),
      head: [T('Person'), T('Future (hablar)'), T('Conditional (hablar)')],
      rows: [
        ['yo', '{hablaré}', '{hablaría}'],
        ['tú', '{hablarás}', '{hablarías}'],
        ['él/ella/usted', '{hablará}', '{hablaría}'],
        ['nosotros', '{hablaremos}', '{hablaríamos}'],
        ['vosotros', '{hablaréis}', '{hablaríais}'],
        ['ellos/ustedes', '{hablarán}', '{hablarían}'],
      ],
    },
    {
      caption: T('Table 2 — Irregular pairs'),
      head: [T('Infinitive'), T('Future'), T('Conditional')],
      rows: [
        ['{tener}', '{tendré}', '{tendría}'],
        ['{poder}', '{podré}', '{podría}'],
        ['{decir}', '{diré}', '{diría}'],
        ['{hacer}', '{haré}', '{haría}'],
        ['{venir}', '{vendré}', '{vendría}'],
        ['{saber}', '{sabré}', '{sabría}'],
        ['{salir}', '{saldré}', '{saldría}'],
        ['{valer}', '{valdrá}', '{valdría}'],
        ['{comer}', '{comeré}', '{comería}'],
      ],
    },
  ],
};

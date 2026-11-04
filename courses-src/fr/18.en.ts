import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Future tenses'),
  subtitle: T(
    '{je parlerai} and {je vais parler} — the morphological future and the near future, side by side',
  ),
  section: T('The verbs'),
  body: C(`## The future that is built like a present

The simple future is the most predictable form in all of French grammar. You take the **infinitive**, cut off the ending {-er, -ir, -re}, and attach a personal ending from the **{-ai} set**:

| Infinitive | Cut | 1st sg. | 3rd pl. |
|---|---|---|---|
| parler | par{l}-er | je **parler-ai** | ils **parler-ont** |
| finir | fin{-ir} | je **finir-ai** | ils **finir-ont** |
| vendre | vend{-re} | je **vend-rai** | ils **vend-ront** |
| prendre | prend{-re} | je **prend-rai** | ils **prend-ront** |

The ending set never changes: **{-ai, -as, -a, -ons, -ez, -ont}**. What varies from verb to verb is what is left of the infinitive. That is why {finir} gives {finirai} and {vendre} gives {vendrai}: both end in {ai}, but the inherited stems are {finir-} and {vendr-}.

Compare with the present, which is the predictable confusion: {je parle} «I speak» against {je parlerai} «I will speak». The future has one extra syllable in almost every first-conjugation verb, and it is that {ai} that marks the future.

## The verbs that break the pattern

The irregular futures are very few, and almost all of them use the same stratagem: an old form of the verb is brought back. {je serai} comes from {je suis} (Latin {fuī}); {j’aurai} from {j’ai eu}; {je ferai} from {je fis}; {je verrai} from {je vis}; {je saurai} from {je sais}; {j’irai} from {je vins}; {je viendrai} from {je vins}; {j’enverrai} from {j’envoie}.

Two criteria clear the list:

1. the ending **{-rai}** in {voir, faire, pouvoir, vouloir, savoir} plus the {prendre} family ({prendre, apprendre, comprendre, reprendre, reprendre});
2. the ending **{-irai}** in {aller, venir, envoyer, rentrer, séjourner}.

And {avoir} and {être}, which are the two special cases: {j’aurai}, {je serai}.

One practical warning about {aller}: {il ira} «he will go» is the **correct** form, written without an accent and with a single {r}. There is no «il íra» in the standard, and {il írait} would be the conditional. If you see «il íra» in an old text, accented, that was a typographic convention, not the norm.

## The near future: the form you will use most

The **near future** is {aller} in the present plus an infinitive: {Je vais prier} «I am going to pray». It is shorter than the simple future, easier to conjugate, and in everyday speech more frequent. A few templates cover most uses:

- {aller} + infinitive — I am going to do, I want to do, I plan to do;
- {aller} + infinitive + {dans / quand / ce soir} — dated intention;
- {ne … pas} + {aller} + infinitive — {Je ne vais pas dire} «I am not going to say»;
- {aller} + infinitive + {y} — {J’y vais aller} «I am going there»;
- {ça va + infinitive} — {Ça va pleuvoir} «it is going to rain»;
- {on va + infinitive} — {On va manger} «we are going to eat».

The near future also shows up with {être}: {Je vais être appelé} «I am going to be called». Here is the useful detail: in pronominal verbs, the near future agrees with the subject when the pronoun is direct — {je vais me lever} «I am going to get up». In {il va se lever}, {se} is indirect, and the verb does not change. The same goes for {aller}: {je vais y aller}.

The relation between the two futures is one of register, not of time. The simple future sounds formal, distant or contractual: {Il viendra demain} «he will come tomorrow», in a railway timetable. The near future belongs to conversation: {Je vais venir demain} «I am going to come tomorrow». An agenda uses the first; a conversation the second.

## A window, not a wall

The French future is the only form you have for what English calls the future of a modal, and that is why {je veux que tu viennes} uses {viennes} «that you come» rather than {viendras}. In other words, the simple future serves for:

- **forecast and certainty** — {Il va pleuvoir}, {Le train arrivera à midi};
- **promise and threat** — {Je reviendrai}, {Il paiera};
- **hypothesis in the present** — {Si j’ai le temps, je reviendrai} «if I have time, I will come back»;
- **obligation** — {L’homme doit choisir sa destination};
- **conditional with {ne}** — never. Future and conditional do **not** form a hypothesis together: {si je aurai, je…} is wrong; use {si j’ai} only in fixed phrases, and for everything else the conditional is obligatory.

The sentence {Si j’ai de l’argent, j’acheterai ce livre} is the present hypothesis: the condition is possible now, so the condition itself goes to the future. Compare with the past hypothesis, which comes in the conditional lesson: {Si j’avais de l’argent, j’aurais acheté ce livre}.

## Application: the Bible text

The Segond text is almost entirely simple future, and that is no accident: the older Bible is a formal register, and the simple future belongs to it. Direct applications:

{Et quand je suis irai et vous préparerai un lieu} (John 14:3) — two futures in a row: {irai} and {préparerai}. It is the most typical construction of the chapter.

{Je vous enverrai le consolateur} (John 16:14) — note that {reviendrai} and {enverrai} are irregular futures: {reviendrai} from {revenir}, {enverrai} from {envoyer}. The verb {envoyer} gives {j’envoie} in the present and {j’enverrai} in the future — the same root with different vowels.

{Je ne vous laisserai point orphelins} (John 14:18) — {laisserai} is regular, a first-group verb: {laisser} plus {ai}. And note the construction {ne … point}, a double explicit negation: «I will not leave» = {ne … pas}, here with the biblical {point}.

{Ceux qui croient au Fils ont la vie éternelle} (John 3:36) — present {croient}, not future. But the next verse says {Le Fils de l’homme l’a renvoyé, et il est monté au ciel} (John 3:37): passé composé, with the irregular participle {renvoyé}.

{L’Esprit consolateur… demeure avec vous, et il sera avec vous} (John 14:16) — and the following verse repeats the future three times: {Je vous enverrai, il demeurera, il sera}. The verbs of {envoyer} and {demeurer} appear in the future, and the context is a **promise**: that is the form French uses to promise.

{Vous êtes mes amis, si vous faites ce que je vous commande} (John 15:14) — the conditional and the future share the sentence: hypothesis and fact.

{Je suis la porte; si quelqu’un entre par moi, il sera sauvé} (John 10:9) — {entrer} and {sera} in the future: hypothesis ({si quelqu’un entre}) and consequence ({il sera sauvé}).

{Je suis la résurrection et la vie} (John 11:25) — present, but the sentence that follows is the future par excellence in Christian vocabulary: {celui qui croit en moi, quoiqu’il soit mort, vivra} — {vivra} «will live» is a simple future, and it is that form all French theology uses when it speaks of eternal life.

{Ecce, je me tiens devant vous, et je sonne de la cloche} (Revelation 3:20) — the verb {sonner} «to ring» in the simple future, beside the present {je me tiens} «I stand». Present and future in one clause: what stands there now and what will ring shortly.

## What to take away

The simple future is the infinitive without its ending plus {-ai, -as, -a, -ons, -ez, -ont}; almost nothing is irregular, and the few cases follow {-rai} or {-irai}. The near future, {aller} plus infinitive, belongs to conversation and is the commonest. The simple future belongs to the formal register, which is why the Bible uses it so much. And never combine future with {si}: for a present hypothesis use {si + present}, which is already future in meaning; for everything else, the conditional.`),
  vocab: [
    V('parlerai', 'parler', 'I will speak'),
    V('parleras', 'parler', 'you will speak'),
    V('parlerons', 'parler', 'we will speak'),
    V('vendrai', 'vendre', 'I will sell'),
    V('prendrai', 'prendre', 'I will take'),
    V('serai', 'être', 'I will be'),
    V('aurai', 'avoir', 'I will have'),
    V('irai', 'aller', 'I will go (no accent, single r)'),
    V('ferai', 'faire', 'I will do (from {je fis})'),
    V('verrai', 'voir', 'I will see'),
    V('viendrai', 'venir', 'I will come'),
    V('enverrai', 'envoyer', 'I will send'),
    V('pourrai', 'pouvoir', 'I will be able'),
    V('saurai', 'savoir', 'I will know'),
    V('vais parler', 'parler', 'I am going to speak'),
    V('ça va', 'aller', 'it is going to'),
    V('ne … pas', 'pas', 'not (negating the near future)'),
    V('point', 'point', 'not (emphatic negation, biblical style)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the simple future of {finir} formed?'),
    options: [
      T('Drop the {-ir} ending and attach {-ai}: {finir-} + {ai} = {finirai}'),
      T('Drop the {-ir} ending and attach {-rai}, as in the irregulars'),
      T('Glue the whole present onto the infinitive: {fin} + {ir} + {ai}'),
      T('Use the {nous} present with {-ons} replaced by {-ons}: {finissons-ai}'),
    ],
    answer: 0,
    hint: T(
      'The same {-ai} serves {parler}, {finir} and {partir}: what changes is what is left of the infinitive.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Simple future of {aller}: «il ___» (he will go)'),
      answer: 'ira',
      hint: T('No accent and a single {r}; the accent belongs to the conditional.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the near future?'),
      options: [
        T('{Je vais vous aider} — I am going to help you'),
        T('{Je vous aiderai} — I will help you (simple future, formal)'),
        T('{Je vous aide} — I help you (present)'),
        T('{J’ai aidé} — I helped (passé composé)'),
      ],
      answer: 0,
      hint: T('Near future = {aller} in the present + infinitive.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its type of irregularity'),
      pairs: [
        { a: T('vendrai'), b: T('regular: {vendr-} + {ai}') },
        { a: T('prendrai'), b: T('irregular of the {prendre} family ({-rai})') },
        { a: T('viendrai'), b: T('irregular with the {-irai} ending') },
        { a: T('serai'), b: T('fully irregular: {je serai} from {je suis}') },
        { a: T('vais parler'), b: T('periphrastic: {aller} + infinitive') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Simple future = infinitive without its ending plus {-ai, -as, -a, -ons, -ez, -ont}. The set is fixed for every verb.',
      ),
    },
    {
      n: '2',
      text: T(
        'The irregulars follow two patterns: the {-rai} ending ({voir, faire, pouvoir, vouloir, savoir} and the {prendre} family) and the {-irai} ending ({aller, venir, envoyer}), plus {serai} and {aurai} on their own.',
      ),
    },
    {
      n: '3',
      text: T(
        'The near future is {aller} in the present plus an infinitive. In {il ira} the {r} is single and unaccented: the accent belongs to the conditional ({il irait}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Register: the simple future is formal, distant and contractual ({Il viendra demain}, a timetable); the near future is conversational ({Je vais venir demain}).',
      ),
    },
    {
      n: '5',
      text: T(
        'Future and conditional do **not** form a hypothesis together. After {si} comes the present ({Si j’ai le temps, je reviendrai}) or the imparfait plus conditional ({Si j’avais le temps, je serais revenu}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the Bible uses the future so much'),
      text: T(
        'In everyday French the future is deliberately rare: nobody announces what they already know. In biblical French the future is the **mark of register**, and it appears where a modern reader would use the present: {Je suis la résurrection et la vie} beside {vivra}; {Le Fils de l’homme l’a renvoyé} beside {il sera glorifié}. The effect is firmness: what God does is not under way, it is guaranteed. A translation that «improves» the future into a present loses that certainty.',
      ),
    },
    {
      label: T('Portuguese and French share one future'),
      text: T(
        'A Portuguese speaker recognises {falarei, falará, falam} as future forms, and the mapping onto {je parlerai, il parlera, ils parleront} is almost exact — the same Latin future. The exception is the near future: Portuguese {vou falar} and French {je vais parler} are the same words in a different order, which is why French speakers understand Brazilian Portuguese so easily. Spanish {voy a hablar}, by contrast, is a genuinely separate construction, and it is the one that leaks in if you read Spanish.',
      ),
    },
  ],
  examples: [
    { text: 'je parlerai', gloss: T('I will speak (simple future)') },
    { text: 'ils parleront', gloss: T('they will speak (3rd pl. {-ont})') },
    { text: 'je serai', gloss: T('I will be (irregular, from {je suis})') },
    { text: 'il ira', gloss: T('he will go (no accent, single {r})') },
    { text: 'viendrai', gloss: T('I will come (irregular {-irai})') },
    { text: 'je vais parler', gloss: T('I am going to speak (near future)') },
    { text: 'ça va pleuvoir', gloss: T('it is going to rain (forecast)') },
    { text: 'je ne vais pas dire', gloss: T('I am not going to say (negated near future)') },
    { text: 'je vais me lever', gloss: T('I am going to get up (direct pronominal: agrees)') },
    { text: 'il sera sauvé', gloss: T('he will be saved (consequence future)') },
  ],
  tables: [
    {
      caption: T('Table 1 — simple future by conjugation'),
      head: [T('Person'), T('{parler}'), T('{finir}'), T('vendre')],
      rows: [
        [T('je'), 'parlerai', 'finirai', 'vendrai'],
        [T('tu'), 'parleras', 'finiras', 'vendras'],
        [T('il / elle'), 'parlera', 'finira', 'vendra'],
        [T('nous'), 'parlerons', 'finirons', 'vendrons'],
        [T('you'), 'parlerez', 'finirez', 'vendrez'],
        [T('they'), 'parleront', 'finiront', 'vendront'],
      ],
    },
    {
      caption: T('Table 2 — irregular futures'),
      head: [T('Infinitive'), T('1st sg.'), T('Source')],
      rows: [
        ['être', 'serai', T('{je suis}')],
        ['avoir', 'aurai', T('{j’ai eu}')],
        ['faire', 'ferai', T('{je fis}')],
        ['voir', 'verrai', T('{je vis}')],
        ['savoir', 'saurai', T('{je sais}')],
        ['pouvoir', 'pourrai', T('{-rai} family')],
        ['aller', 'irai', T('{je vins}')],
        ['venir', 'viendrai', T('{je vins}')],
        ['envoyer', 'enverrai', T('stem {envoi-}')],
      ],
    },
  ],
};

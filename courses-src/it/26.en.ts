import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('The conjunctions'),
  subtitle: T('ma, perché, benché, nonostante, così…che'),
  section: T('Numerals, conjunctions and the gerund'),
  body: C(`## Coordination: {e}, {ma}, {eppure}

Coordinators join two clauses of equal weight and do not change the mood of the verb. {E} adds: "sono {andato} a Roma {e} ho visto {Marco}". {Ma}, {però} and {eppure} oppose: "sono andato a Roma, ma non ho visto Marco"; {però} is the spoken version of {ma}, and {eppure} is {ma} with a thread of surprise. {Ossia} substitutes an explanation: "{Marco}, ossia {il} mio {fratello}". And {né…né} excludes: "{né} questo {né} quello".

The verb stays in the indicative in all of them. Writing "{sono andato, ma non abbia visto}" gets two things wrong.

## Cause, purpose and consequence

Cause and purpose use the **same word** in Italian: **{perché}**. What separates them is the mood of the verb. With the indicative, {perché} is cause: "non uscì, {perché} pioveva". With the subjunctive, it is purpose: "esci presto, {perché} non ti bagni". Cause has also {poiché}, {dato che}, {siccome}, {giacché}; purpose has also {affinché}.

Consequence is symmetrical and takes no shortcut: it needs both sides. **{così}… {che}**, **{tanto}… {che}**, **{così tanto}… {che}**: "{così} forte {che} {non} si muove", "{tanto} amò {che} {diede} la {vita}". One side alone is not consequence; it is a sentence with no subordinate in it.

## Concession and condition, and {nonostante} turning into a noun

Concession admits three constructions, and one of them is the opposite of Portuguese. **{Biché}** and **{sebbene}** take the verb in the subjunctive and come **after** what they limit: "{benché} {piova}, {usciamo}", "{sebbene} {fosse} {tardi}, {venne}". **{Nonostante}**, on the contrary, precedes the **noun**, with its article: "**nonostante la pioggia**", "**nonostante il pericolo**". Where Portuguese says "apesar da chuva", Italian says literally "notwithstanding the rain". Writing "nonostante piove" is wrong: {nonostante} never governs a verb.

Condition follows Portuguese: **{se}**, **{qualora}**, **{purché}**, **{se anche}**, **{qualora se}**, **{nel caso in cui}** — all with the verb in the subjunctive, except when the condition is real, where Italian also accepts the indicative.

## In the Bible

John 3:16 holds four relations in one sentence: "Dio ha {tanto} amato il mondo {che} ha dato il suo Figlio unigenito, {perché} chiunque crede in lui non perisca, {ma} abbia la vita eterna". {Tanto…che} is the consequence; {perché} with {abbia} in the subjunctive is the purpose; {ma} coordinates; and {chiunque} is the indefinite that serves as subject.

Notice what a translation into Portuguese usually does: {ma} becomes "but", and the sentence goes on with a demand. In Italian the force is the same, and {ma abbia} is a subordinate clause in the subjunctive.

## What comes next

Classify each word by what follows it: if a noun comes, it is {nonostante}; if a verb in the subjunctive comes, it is subordination; if a verb in the indicative comes and the sense is addition or opposition, it is coordination. What follows is what tells you what the word is.`),
  vocab: [
    V('e', 'e', 'and'),
    V('ma', 'ma', 'but'),
    V('però', 'però', 'however'),
    V('eppure', 'eppure', 'and yet'),
    V('ossia', 'ossia', 'that is to say'),
    V('perché', 'perché', 'because / so that'),
    V('poiché', 'poiché', 'since'),
    V('affinché', 'affinché', 'so that'),
    V('così', 'così', 'so'),
    V('tanto', 'tanto', 'so much'),
    V('benché', 'benché', 'although'),
    V('sebbene', 'sebbene', 'even though'),
    V('nonostante', 'nonostante', 'in spite of'),
    V('se', 'se', 'if'),
    V('qualora', 'qualora', 'if'),
    V('purché', 'purché', 'provided that'),
    V('pioggia', 'pioggia', 'rain'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which construction is correct?'),
    options: [
      T('Nonostante piove, usciamo.'),
      T('Nonostante la pioggia, usciamo.'),
      T('Nonostante dalla pioggia, usciamo.'),
      T('Nonostante che piove, usciamo.'),
    ],
    answer: 1,
    hint: T('Nonostante precedes the noun with its article.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which sentence uses perché as purpose?'),
      options: [
        T('Non uscì perché pioveva.'),
        T('Esci perché non ti bagni.'),
        T('Poiché pioveva, restammo.'),
        T('È tardi, quindi partiamo.'),
      ],
      answer: 1,
      hint: T('In the subjunctive, perché is purpose.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the consequence: così forte ___ non si muove (that)'),
      answer: 'che',
      hint: T('A consequence needs both sides.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses benché correctly?'),
      options: [
        T('Benché la pioggia, usciamo.'),
        T('Benché piova, usciamo.'),
        T('Benché piove, usciamo.'),
        T('Benché di pioggia, usciamo.'),
      ],
      answer: 1,
      hint: T('Biché takes the verb in the subjunctive.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'E coordinates and the verb stays in the indicative: sono andato a Roma e ho visto Marco.',
      ),
    },
    {
      n: '2',
      text: T(
        'Perché is cause in the indicative and purpose in the subjunctive: perché pioveva / perché non ti bagni.',
      ),
    },
    {
      n: '3',
      text: T(
        'Nonostante precedes the noun with its article and never the verb: nonostante la pioggia.',
      ),
    },
    { n: '4', text: T('A consequence needs both sides: così…che, tanto…che, così tanto…che.') },
    {
      n: '5',
      text: T('Condition and purpose with their own verb demand the subjunctive in Italian.'),
    },
  ],
  notes: [
    {
      label: T('One word, two senses'),
      text: T(
        '{Perché} is cause and purpose at once, and what separates them is the mood of the verb. Portuguese solves the problem with separate words ({porque}, {para que}); Italian solved it with the subjunctive, which a reader coming from Portuguese only activates when the clause is negative or doubtful.',
      ),
    },
    {
      label: T('When the subordinate comes first'),
      text: T(
        'In "{benché piovesse}, {andammo}", the subordinate occupies the subject slot and the main verb is plural, agreeing with the subject that comes after. Writing "{benché piovesse}, {andò}" is a word-for-word translation of Portuguese and produces a sentence Italian does not have.',
      ),
    },
  ],
  examples: [
    { text: 'Sono andato a Roma e ho visto Marco.', gloss: T('I went to Rome and saw Mark.') },
    {
      text: 'Sono andato a Roma, ma non ho visto Marco.',
      gloss: T('I went to Rome, but I did not see Mark.'),
    },
    { text: 'Non uscì, perché pioveva.', gloss: T('He did not go out, because it was raining.') },
    { text: 'Esci presto, perché non ti bagni.', gloss: T('Go out soon, so you do not get wet.') },
    { text: 'Così forte che non si muove.', gloss: T('So strong that it does not move.') },
    { text: 'Benché piova, usciamo.', gloss: T('Although it rains, we go out.') },
    { text: 'Nonostante la pioggia, usciamo.', gloss: T('In spite of the rain, we go out.') },
    { text: 'Se vieni, avvisami.', gloss: T('If you come, warn me.') },
    {
      text: 'Dio ha tanto amato il mondo che ha dato il suo Figlio.',
      gloss: T('God loved the world so much that he gave his Son.'),
    },
  ],
  tables: [
    {
      caption: T('Coordinazione'),
      head: ['Congiunzione', 'Glossa', 'Esempio'],
      rows: [
        ['e', 'e', 'uno e uno'],
        ['ma', 'ma', 'ma non'],
        ['però', 'però', 'però non'],
        ['eppure', 'eppure', 'eppure non'],
        ['ossia', 'ossia', 'Marco, ossia mio fratello'],
        ['né…né', 'né…né', 'né questo né quello'],
      ],
    },
    {
      caption: T('Subordinazione'),
      head: ['Relazione', 'Congiunzioni', 'Modo del verbo'],
      rows: [
        ['causa', 'perché, poiché, dato che, siccome', 'indicativo'],
        ['finalità', 'affinché, perché', 'congiuntivo'],
        ['conseguenza', 'così…che, tanto…che', 'indicativo'],
        ['concessione', 'benché, sebbene, anche se', 'congiuntivo'],
        ['condizione', 'se, qualora, purché, se anche', 'congiuntivo'],
      ],
    },
    {
      caption: T('Cosa viene dopo la congiunzione'),
      head: ['Parola', 'Cosa viene dopo', 'Esempio'],
      rows: [
        ['nonostante', 'sostantivo con articolo', 'nonostante la pioggia'],
        ['benché', 'verbo al congiuntivo', 'benché piova'],
        ['sebbene', 'verbo al congiuntivo', 'sebbene fosse tardi'],
        ['se', 'verbo al congiuntivo', 'se vieni'],
        ['affinché', 'verbo al congiuntivo', 'affinché sappia'],
      ],
    },
  ],
};

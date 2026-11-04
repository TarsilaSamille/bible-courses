import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('The modal verbs'),
  subtitle: T('können, müssen, sollen, wollen, mögen, dürfen'),
  section: T('The verbs'),
  body: C(`## What a modal verb is

Modal verbs do not name actions: they name the speaker's **stance** towards the action. *können* is ability, *müssen* necessity, *sollen* obligation or recommendation, *wollen* will, *dürfen* permission, *mögen* desire or liking. Instead of saying what happened, they say how the speaker positions himself before it.

The visible trace of this is in the form: all six drop the **-en** ending in the first and third person singular. It is not *ich kann-e*, it is *ich kann*. First and third person plural return to the infinitive: *wir können*, *sie können*.

## Position and the second verb

The modal is always the **second** verb of the clause: *Ich muss jetzt gehen*, *Wir wollen das Buch lesen*. And it never stands alone: it needs an infinitive, which in a main clause goes last — *Er muss die Rechnung bezahlen*.

In the Perfekt and the past, the modal's participle is replaced by the infinitive: instead of *hat gekonnt* you say *hat können können*. That is why the Perfekt of the modals is entirely **irregular** and always carries a second infinitive: *Sie hat kommen können*.

## Passive replacement

Since a modal can take the passive voice, all you need is to pair it with any verb in the infinitive: *Die Rechnung muss bezahlt werden*, *Die Fenster müssen gestrichen werden*. The agent noun (der Passivsatz) becomes unnecessary and the sentence turns much shorter. Luther's Bible is full of constructions like that.

## What to take away

Modals neither conjugate like ordinary verbs nor take a participle in the past: they conjugate with the short ending and repair themselves with the infinitive. And because they do not describe an action, they hardly ever take a direct object by themselves — *Ich kann* needs *das* or an infinitive to say what it is that one can do.`),
  vocab: [
    V('können', 'können', 'to be able to, can'),
    V('kann', 'können', 'can (3rd person and ich)'),
    V('müssen', 'müssen', 'to have to, must'),
    V('sollen', 'sollen', 'to be supposed to, should'),
    V('wollen', 'wollen', 'to want'),
    V('dürfen', 'dürfen', 'to be allowed to, may'),
    V('mögen', 'mögen', 'to like, may (concessive)'),
    V('ich kann', 'können', 'I can'),
    V('Sie hat kommen können', 'können', 'she was able to come (Perfekt with double infinitive)'),
    V('muss bezahlt werden', 'werden', 'must be paid (passive replacement)'),
    V(
      'Du sollst deinen Vater und deine Mutter ehren',
      'sollen',
      'you shall honour your father and your mother',
    ),
    V('Wir müssen die Fenster streichen', 'streichen', 'we must paint the windows'),
    V('Er will nicht kommen', 'wollen', 'he does not want to come'),
    V('Das mag sein', 'mögen', 'that may be (concessive)'),
    V('Ich muss sofort gehen', 'gehen', 'I have to go at once'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct form of {können} in the third person singular?'),
    options: [T('kann'), T('kannen'), T('kannst'), T('könnt')],
    answer: 0,
    hint: T('Rule §1: in the singular there is no -en ending.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the Perfekt: Ich habe arbeiten ___ (I had to work).'),
      answer: 'müssen',
      hint: T('Rule §3: the participle of a modal is the infinitive itself.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence forms the passive voice with a modal?'),
      options: [
        T('The letter must be written.'),
        T('I must the letter write.'),
        T('Must I the letter write.'),
        T('The letter will must written.'),
      ],
      answer: 0,
      hint: T('Rule §4: modal + infinitive + werden.'),
    },
    {
      kind: 'fill',
      prompt: T('Translate: {Du sollst deinen Vater und deine Mutter ehren}'),
      answer: 'you shall honour your father and your mother',
      hint: T("It is the fourth commandment in Luther's translation."),
    },
    {
      kind: 'match',
      prompt: T('Match the modal to its value'),
      pairs: [
        { a: T('dürfen'), b: T('permission') },
        { a: T('müssen'), b: T('necessity') },
        { a: T('sollen'), b: T('obligation or advice') },
        { a: T('wollen'), b: T("the subject's own will") },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'First and third person singular drop the -en: ich kann, er muss, sie soll, du magst. First and third person plural are identical to the infinitive: wir können, sie mögen.',
      ),
    },
    {
      n: '2',
      text: T(
        'The modal stands in second position and the infinitive goes last: Du musst die Tür schließen.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the Perfekt there is no participle: the infinitive itself comes back, and the auxiliary goes last. Ich habe arbeiten müssen (not *gemusst).',
      ),
    },
    {
      n: '4',
      text: T(
        'Modal + infinitive + werden gives the passive replacement: Die Briefe müssen heute geschrieben werden.',
      ),
    },
    {
      n: '5',
      text: T(
        'The negation of müssen empties the value: Ich muss means ‘I must’, but Ich muss nicht means ‘I do not need to’.',
      ),
    },
  ],
  notes: [
    {
      label: T('mögen has two lives'),
      text: T(
        'With the meaning ‘to like’, *mögen* behaves like an ordinary verb and takes an object: *Ich mag Kaffee*. With the concessive meaning — ‘it may be that’ — the object drops and the sentence becomes a remark about what is admitted: *Das mag sein*, *Er mag krank sein*. In that second life the verb says nothing about the subject and comes close to a connector, alongside *vielleicht* and *wohl*.',
      ),
    },
    {
      label: T('Reading Luther'),
      text: T(
        "The fourth commandment — *Du sollst deinen Vater und deine Mutter ehren* — uses *sollen*, not *müssen*. The difference is not cosmetic: *müssen* would say that someone from outside compels, *sollen* says that the will itself is the ground. Likewise the Beatitudes all begin with *Selig sind*, and Luther's sermons alternate *sollen* and *dürfen* to move from the Law to the fullness of the Gospel.",
      ),
    },
  ],
  examples: [
    { text: 'Ich kann gut schwimmen.', gloss: T('I can swim well (ability).') },
    { text: 'Du musst die Tür schließen.', gloss: T('You have to close the door (necessity).') },
    {
      text: 'Du sollst deinen Vater und deine Mutter ehren.',
      gloss: T('You shall honour your father and mother (commandment).'),
    },
    {
      text: 'Hier darf man nicht rauchen.',
      gloss: T('Here one is not allowed to smoke (permission refused).'),
    },
    {
      text: 'Die Rechnung muss bezahlt werden.',
      gloss: T('The bill must be paid (passive with a modal).'),
    },
    {
      text: 'Sie hat kommen können.',
      gloss: T('She was able to come (double infinitive in the Perfekt).'),
    },
    { text: 'Wir haben nicht kommen dürfen.', gloss: T('We were not allowed to come.') },
    {
      text: 'Er will morgen nach Berlin fahren.',
      gloss: T('He wants to travel to Berlin tomorrow (will).'),
    },
    {
      text: 'Mag sein, er hat sich verspätet.',
      gloss: T('It may be that he was late (concessive).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Present tense of the six modals'),
      head: [T('Infinitive'), T('ich'), T('du'), T('er/sie/es'), T('wir'), T('ihr'), T('sie/Sie')],
      rows: [
        ['können', 'kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
        ['müssen', 'muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
        ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
        ['wollen', 'will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
        ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
        ['mögen', 'mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
      ],
    },
    {
      caption: T('Table 2 — What each modal conveys'),
      head: [T('Modal'), T('Value'), T('Sample sentence')],
      rows: [
        ['können', 'capacidade, possibilidade', 'Ich kann gut schwimmen.'],
        ['müssen', 'necessidade interna ou externa', 'Ich muss früh aufstehen.'],
        ['sollen', 'ordem, instrução, conselho', 'Du sollst nicht lügen.'],
        ['wollen', 'vontade própria do sujeito', 'Er will nach Berlin.'],
        ['dürfen', 'permissão, autorização', 'Hier darf man nicht rauchen.'],
        ['mögen', 'gosto, desejo, concessivo', 'Mag sein, er hat Angst.'],
      ],
    },
  ],
};

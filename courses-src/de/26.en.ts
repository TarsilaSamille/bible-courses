import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('The future'),
  subtitle: T('werden plus the infinitive, and the present with future sense'),
  section: T('The verbs'),
  body: C(`## The form

The German future is built on **werden** in the present plus the full infinitive of the verb, with no ending on it: *ich werde kommen*, *du wirst gehen*, *er wird sprechen*, *wir werden sehen*, *ihr werdet hören*, *sie werden kommen*. Notice that *werden* is an ordinary verb with its own ending; what takes no ending at all is the second verb.

The second verb form goes last: *Morgen werde ich dich anrufen*. Notice too that the future is the only tense that needs no time word: *Ich werde dich anrufen* already means ‘I will call you’.

## The present as future

In practice, the simple future is rare. German almost always expresses the future with the **present** plus a time indication: *Ich komme morgen*, *Wir fahren am Sonntag*, *Sie kommt um halb acht*. That is natural with verbs of motion, but the construction works with any verb: *Ich rufe dich an* (I will call you tomorrow). The only requirement is that the future sense be unmistakable from the context.

For the **hypothetical** future — what may perhaps happen — the language has two forms, and they get mixed up all the time. **Futur I** (*ich werde kommen*) is the old, almost literary shape: it survives in *Es wird nicht leicht sein*, ‘it will not be easy’. **Futur II** in its conjectural value, *ich werde gekommen sein*, is commoner today: ‘I will have arrived’, used above all in questions and hypotheses. And the **Konjunktiv I** of *werden* shows up in reports, for ‘they say that’: *Er wird in Berlin sein*.

## Ought and future

The future has a life of its own inside *werden* + infinitive + **zu**: *Ich habe etwas zu tun*, *Er hat nichts zu sagen*, *Wir haben viel zu lernen*. Here *werden* no longer announces a future: it means ‘there is’. And it is the *zu* part that carries the direction: *zu tun* ‘to be done’, *zu sagen* ‘to be said’. Compare *Ich werde kommen* (I will come) with *Ich habe etwas zu tun* (I have something to do).

## What to take away

The future has two doors: the present, when the talk is ordinary, and *werden* plus infinitive, when you want to mark projection, forecast or threat. Either way, it is the second form of the clause that carries the meaning.`),
  vocab: [
    V('werden', 'werden', 'future auxiliary and becoming'),
    V('ich werde kommen', 'werden', 'I will come (Futur I)'),
    V('wirst', 'werden', 'you will (second person of the future)'),
    V('wird', 'werden', 'will, is becoming, happens'),
    V('rufe', 'rufen', 'I call (present with future sense)'),
    V('komme morgen', 'kommen', 'I come tomorrow (future in the present)'),
    V('habe zu tun', 'tun', 'I have to do (zu plus infinitive)'),
    V('nichts zu sagen', 'sagen', 'nothing to say'),
    V('Es wird nicht leicht sein.', 'sein', 'It will not be easy.'),
    V('ich werde gekommen sein', 'werden', 'I will have arrived (conjectural Futur II)'),
    V('Er wird in Berlin sein.', 'sein', 'He is said to be in Berlin (Konjunktiv I of report).'),
    V(
      'Morgen werde ich dich anrufen',
      'anrufen',
      'I will call you tomorrow (infinitive at the end).',
    ),
    V('Wir haben viel zu lernen', 'lernen', 'We have a lot to learn.'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the future of {kommen} formed in the first person?'),
    options: [
      T('ich werde kommen'),
      T('ich werde gekommen'),
      T('ich werden kommen'),
      T('ich komme'),
    ],
    answer: 0,
    hint: T('Rule §1: werden in the present plus an endingless infinitive.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the expression of obligation: Ich habe etwas ___ tun.'),
      answer: 'zu',
      hint: T('Rule §4: zu marks purpose and makes the future unnecessary.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence sounds more natural in everyday speech?'),
      options: [
        T('I will call you tomorrow.'),
        T('I will call you tomorrow (Futur I).'),
        T('I will call you tomorrow (wrong participle).'),
        T('I will call you tomorrow (wrong auxiliary).'),
      ],
      answer: 0,
      hint: T('Rule §3: the future present has no werden.'),
    },
    {
      kind: 'fill',
      prompt: T('Translate {Es wird nicht leicht sein}.'),
      answer: 'it will not be easy',
      hint: T('Futur I, the old shape found in Mark 4:24.'),
    },
    {
      kind: 'match',
      prompt: T('Match the construction to its value'),
      pairs: [
        { a: T('ich werde kommen'), b: T('projection, plan') },
        { a: T('ich habe etwas zu tun'), b: T('present obligation') },
        { a: T('ich werde gekommen sein'), b: T('conjecture') },
        { a: T('Sie sagen, er sei krank'), b: T('indirect report') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The future is werden in the present plus an infinitive without ending: ich werde kommen. The infinitive goes last in the clause.',
      ),
    },
    {
      n: '2',
      text: T(
        'werden keeps its normal endings (wirst, wird, werdet); it is the infinitive that loses the ending. Ich werde, ihr werdet.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the present with future sense there is no werden: Ich komme morgen. A time word is obligatory to avoid ambiguity.',
      ),
    },
    {
      n: '4',
      text: T(
        'Zu plus infinitive expresses purpose or obligation and makes the future unnecessary: Ich habe nichts zu sagen (not *werde nichts zu sagen haben*).',
      ),
    },
    {
      n: '5',
      text: T(
        'The Konjunktiv I of werden serves for indirect report: it does not assert, it transmits: Sie sagen, er sei krank. In speech almost nobody conjugates it; werden plus infinitive is repeated instead.',
      ),
    },
  ],
  notes: [
    {
      label: T('A future without a shape of its own'),
      text: T(
        'German inherited the future from Proto-Indo-European, but only reluctantly. From then on, *ich werde kommen* is the one truly synthetic construction in the system, and it was always pushed aside. To project in the past one uses the Perfekt: *ich werde kommen* (I will come) and *ich habe arbeiten müssen* (I had to work) belong to very different registers, and the Perfekt is the one that spread. German is therefore a language with a single past and a single future in current use — and the future is the present plus one time word.',
      ),
    },
    {
      label: T('Reading Luther'),
      text: T(
        "The Old Testament prophecies bring the future often, and Luther's handling of it is remarkable. *Ich will, spricht der Herr, euch nicht lassen* (Jeremiah 1:12) uses the Konjunktiv I of *wollen* and keeps the threat in the present: ‘I will not let you go’. *Es wird nicht leicht sein, ins Himmelreich einzugehen* (Mark 4:24), by contrast, uses the Futur I, the old shape that sounds like a sentence. To tell which of the two is at stake is to tell whether the sentence announces or records.",
      ),
    },
  ],
  examples: [
    {
      text: 'Morgen werde ich dich anrufen.',
      gloss: T('I will call you tomorrow (infinitive at the end).'),
    },
    { text: 'Ich komme morgen.', gloss: T('I will come tomorrow (present with future sense).') },
    { text: 'Wir fahren am Sonntag.', gloss: T('We are driving on Sunday (time marked).') },
    {
      text: 'Es wird nicht leicht sein.',
      gloss: T('It will not be easy (Futur I, sententious tone).'),
    },
    { text: 'Ich werde gekommen sein.', gloss: T('I will have arrived (conjectural Futur II).') },
    {
      text: 'Sie sagen, er sei krank.',
      gloss: T('They say that he is ill (Konjunktiv I of report).'),
    },
    { text: 'Ich habe nichts zu sagen.', gloss: T('I have nothing to say (zu plus infinitive).') },
    { text: 'Wir haben viel zu lernen.', gloss: T('We have a lot to learn.') },
    {
      text: 'Ich will, spricht der Herr, euch nicht lassen.',
      gloss: T('I will not let you go, says the Lord (Jeremiah 1:12).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Future or present, side by side'),
      head: [T('Person'), T('Futur I (werden + infinitive)'), T('Present with future value')],
      rows: [
        ['ich', 'werde kommen', 'komme'],
        ['du', 'wirst kommen', 'kommst'],
        ['er / sie / es', 'wird kommen', 'kommt'],
        ['wir', 'werden kommen', 'kommen'],
        ['ihr', 'werdet kommen', 'kommt'],
        ['sie / Sie', 'werden kommen', 'kommen'],
      ],
    },
    {
      caption: T('Table 2 — {werden} with infinitive and with {zu}'),
      head: [T('Construction'), T('Example'), T('Value')],
      rows: [
        ['werden + Infinitivo', 'Ich werde kommen.', 'projeção: vou vir'],
        [
          'werden + Infinitivo + zu',
          'Ich werde etwas zu tun haben.',
          'necessidade: vou ter algo a fazer',
        ],
        [
          'haben + zu + Infinitivo',
          'Ich habe etwas zu tun.',
          'obrigação atual: tenho algo a fazer',
        ],
        ['werden + sein', 'Es wird gut.', 'mudança: vai ficar bom'],
        [
          'werden + Infinitivo + modal',
          'Das wird dich interessieren.',
          'hipótese: isso deve ser interessante',
        ],
        ['werden + Präsens (Konjunktiv I)', 'Er wird krank sein.', 'relato: dizem que está doente'],
      ],
    },
  ],
};

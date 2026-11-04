import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('The passive voice'),
  subtitle: T('werden plus the participle, the agent with von and the Passivsatz'),
  section: T('The verbs'),
  body: C(`## The form

The German passive is made of **werden** in the present plus the **participle** of the main verb. *werden* goes finite in second position and the participle closes the clause: *Der Brief wird geschrieben*, *Die Fenster wurden gestrichen*, *Die Rechnung ist bezahlt worden*. There is no auxiliary: *werden* itself carries the action, and the participle carries what is acted upon.

The doer enters with **von** plus dative: *Der Brief wird von meinem Bruder geschrieben*. In many cases, though, the agent matters as much as the action, and then the agent becomes a noun with the suffix **-ung** or **-er**: *die Übersetzung, die Lösung, der Verfasser, der Leser*. This is what is called the **Passivsatz**: the person who acts is treated as a thing.

The agent is optional. Without *von*, without a noun, the clause simply has no declared agent: *Das Haus wird gebaut*, *Es wurde viel gearbeitet*. That is not missing information: it is the information that the agent does not matter for what is being said. Luther uses the device constantly, because the biblical text is interested in the fact, not in who performs it.

And the great advantage is reordering: the object can take the slot the subject used to have, the participle goes last, and the action comes to the foreground. An active sentence like *Ich habe das Buch gelesen* becomes *Das Buch ist von mir gelesen worden*.

## The double passive

There is a third possibility, rarer and very German: **modal** + *werden* + participle. *Die Rechnung muss bezahlt werden*, *Die Fenster müssen gestrichen werden*, *Er soll entlassen werden*. Here the construction has neither agent nor object, and the sense is of necessity or of rule. This is the passive that school grammars teach first.

## What to take away

The German passive swaps the subject for the participle. What was the subject in the active becomes the thing referred to in the passive, and the agent, if it matters, becomes a preposition with *von* or a noun in *-er* or *-ung*.`),
  vocab: [
    V('werden', 'werden', 'passive auxiliary, without the sense of becoming'),
    V('wird geschrieben', 'schreiben', 'is written (present passive)'),
    V('wurde geöffnet', 'öffnen', 'was opened (passive in the Präteritum)'),
    V('ist bezahlt worden', 'bezahlen', 'has been paid (Perfekt passive with worden)'),
    V('von meinem Bruder', 'Bruder', 'by my brother (agent with von)'),
    V('die Übersetzung', 'Übersetzung', 'the translation (agent nominalised in -ung)'),
    V('der Verfasser', 'Verfasser', 'the author (agent in -er)'),
    V('muss bezahlt werden', 'bezahlen', 'must be paid (modal plus passive)'),
    V(
      'Der Brief wird von meinem Bruder geschrieben.',
      'schreiben',
      'The letter is written by my brother.',
    ),
    V('Die Tür wurde geöffnet.', 'öffnen', 'The door was opened.'),
    V('Die Rechnung ist bezahlt worden.', 'bezahlen', 'The bill has been paid (resulting state).'),
    V('Es wurde viel geredet.', 'reden', 'A lot was said (anonymous agent).'),
    V('Er soll entlassen werden.', 'entlassen', 'He is to be dismissed (rule).'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How is the passive Perfekt of {schreiben} formed?'),
    options: [
      T('ist geschrieben worden'),
      T('hat geschrieben worden'),
      T('wird geschrieben werden'),
      T('ist geschrieben sein'),
    ],
    answer: 0,
    hint: T('Rule §2: ist + participle + worden.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the passive of the Präteritum: Die Tür wurde ___.'),
      answer: 'geöffnet',
      hint: T('Präteritum of the passive: wurde + participle.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence keeps the information that someone acts?'),
      options: [
        T('The letter is written by my brother.'),
        T('The letter is written.'),
        T('Writing is done.'),
        T('The letter must be written.'),
      ],
      answer: 0,
      hint: T('Rule §3: only von plus dative declares the agent.'),
    },
    {
      kind: 'fill',
      prompt: T('Nominalised agent of {übersetzen}: die ___'),
      answer: 'Übersetzung',
      hint: T('Rule §4: nouns in -ung nominalise the agent.'),
    },
    {
      kind: 'match',
      prompt: T('Match the tense to the passive construction'),
      pairs: [
        { a: T('Present'), b: T('wird geschrieben') },
        { a: T('Präteritum'), b: T('wurde geschrieben') },
        { a: T('Perfekt'), b: T('ist geschrieben worden') },
        { a: T('Futur I'), b: T('wird geschrieben werden') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The passive is werden in the present plus the participle, and the participle closes the clause: Die Tür wird geöffnet.',
      ),
    },
    {
      n: '2',
      text: T(
        'In the Perfekt the participle must be followed by worden: ist geöffnet worden. And the auxiliary is always ist, never hat.',
      ),
    },
    {
      n: '3',
      text: T(
        'The agent enters with von plus dative, or disappears: Der Brief wird von meinem Bruder geschrieben.',
      ),
    },
    {
      n: '4',
      text: T(
        'If the active subject is a person, it does not become von but a noun in -er or -ung: der Verfasser, die Übersetzung.',
      ),
    },
    {
      n: '5',
      text: T(
        'In the imperative and in adjectival participles the passive loses werden completely: Öffne die Tür! / Sei gelobt, mein Gott!',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the New Testament is a passive book'),
      text: T(
        'The rendering of Greek changed what the text says. Greek brought the action to the front, with the verb at the beginning and the subject marked: *ἐλάβεν ὁ θεὸς τὸν Ἰσραήλ*. Luther renders it in German order — finite verb in second place, object third — and the result is a clause that is grammatically active and semantically passive: *Israel hat Gott genommen*. What Greek says of a people who receives, German says of a God who takes. The same happens with *ἐγένετο*: the whole rhythm of Luke — *und es begab sich* — is grammatically active and theologically passive.',
      ),
    },
    {
      label: T('The passive agent is human; the patient is not'),
      text: T(
        'When the agent is a person, the passive reaches for the **Agent Passiv** in *-er* or *-ung*: *der Verfasser, die Übersetzerin, die Schöpfung*. When the agent is a thing, a force, a process, it disappears. Hence the sentence *Es wurde viel gearbeitet*, in which nobody works, and the biblical rendering *alles, was ich euch geboten habe*, where the one acting is Jesus himself — and even so the Greek original uses a passive-sense aorist, *ἐνετειλάμην*, ‘I was sent out’. The passive is a way of speaking in which the subject is systematically excluded.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Brief wird geschrieben.',
      gloss: T('The letter is being written (present passive).'),
    },
    {
      text: 'Der Brief wird von meinem Bruder geschrieben.',
      gloss: T('The letter is written by my brother (agent with von).'),
    },
    {
      text: 'Die Tür wurde geöffnet.',
      gloss: T('The door was opened (passive of the Präteritum).'),
    },
    {
      text: 'Die Rechnung ist bezahlt worden.',
      gloss: T('The bill has been paid (Perfekt with worden).'),
    },
    {
      text: 'Die Fenster müssen gestrichen werden.',
      gloss: T('The windows must be painted (modal plus passive).'),
    },
    { text: 'Er soll entlassen werden.', gloss: T('He is to be dismissed (rule, not fact).') },
    { text: 'Es wurde viel geredet.', gloss: T('A lot was said (agent omitted).') },
    {
      text: 'Das Buch wurde vom Autor geschrieben.',
      gloss: T('The book was written by the author (nominalised agent).'),
    },
    {
      text: 'Sei gelobt, mein Gott.',
      gloss: T('Praise be to you, my God (imperative without werden).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The tenses of the passive'),
      head: [T('Tense'), T('Construction'), T('Example')],
      rows: [
        ['Presente', 'wird + Partizip II', 'Die Tür wird geöffnet.'],
        ['Präteritum', 'wurde + Partizip II', 'Die Tür wurde geöffnet.'],
        ['Perfekt', 'ist + Partizip II + worden', 'Die Tür ist geöffnet worden.'],
        ['Plusquamperfekt', 'war + Partizip II + gewesen', 'Die Tür war geöffnet gewesen.'],
        ['Futur I', 'wird + Partizip II + werden', 'Die Tür wird geöffnet werden.'],
        ['Imperativo', 'nur Partizip II', 'Öffne die Tür!'],
      ],
    },
    {
      caption: T('Table 2 — Active and passive side by side'),
      head: [T('Active'), T('Passive'), T('What changes')],
      rows: [
        ['Ich schreibe den Brief.', 'Der Brief wird geschrieben.', 'o objeto vira sujeito'],
        ['Sie öffnet die Tür.', 'Die Tür wird geöffnet.', 'o objeto vira sujeito'],
        [
          'Mein Bruder hat es gemacht.',
          'Es ist von meinem Bruder gemacht worden.',
          'o sujeito vira agente explícito',
        ],
        [
          'Der Autor schrieb das Buch.',
          'Das Buch wurde vom Autor geschrieben.',
          'o sujeito vira agente explícito',
        ],
        ['Jemand hat gelogen.', 'Es wurde gelogen.', 'o agente desaparece'],
        [
          'Man kann das nicht beweisen.',
          'Das kann nicht bewiesen werden.',
          'modal + werden + particípio',
        ],
      ],
    },
  ],
};

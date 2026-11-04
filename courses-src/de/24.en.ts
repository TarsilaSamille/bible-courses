import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('The Perfekt'),
  subtitle: T('haben and ist plus the participle, and word order'),
  section: T('The verbs'),
  body: C(`## The formula

The Perfekt is the only past tense German builds from the outside in: first the auxiliary (*haben* or *ist*) in second position, the participle at the end, everything else in between. *Ich habe den ganzen Tag gearbeitet*. Change the auxiliary and the whole sentence changes meaning without anything else moving.

The choice of auxiliary is semantic. **haben** marks a process the subject carries out and is answerable for: *Wir haben das Buch übersetzt*. **ist** marks displacement, change of state, or something that happens to someone: *Der Brief ist angekommen*. There is no purely grammatical criterion: what decides is whether the subject is agent or patient.

## The participle

The participle follows four formation patterns, and all of them are regular:

- **weak**, with the ending *-t* and the infinitive *-en*: *machen → gemacht*, *lernen → gelernt*, *suchen → gesucht*;
- **strong**, when the verb has a vowel change: *sprechen → gesprochen*, *lesen → gelesen*, *nehmen → genommen*;
- **mixed**, with the ending *-en* after a short adjective: *stark gemalt*, *hell gebrannt*;
- **no participle at all**, when the verb is inseparable or ends in *-ieren*: *verstehen → verstanden*, *studieren → studiert*, *passieren → passiert*.

Separable verbs recover their prefix: *anrufen → angerufen*, *aufstehen → aufgestanden*. The *ge-* slots in between stem and ending, and the prefix vowel is harmonised where possible: *sprechen → gesprochen*, *lesen → gelesen*.

## What position does

The Perfekt is a second-position form, like the present. The auxiliary inherits the slot of the finite verb and the participle goes last, after any non-finite element: *Ich habe es gestern nicht geschafft*. If a second clause is separated by a comma, the auxiliary returns to the end of that clause: *Er ist ins Haus gegangen, hat aber niemanden gesehen*.

And position reveals the time. Compare *Ich habe das Buch gelesen* (a closed action whose result is visible now) with *Ich lese das Buch* (an action in progress). Verbal tense is the tense of syntax.

## What to take away

The Perfekt is not a distant past: it is a **closed** past seen from the present. The auxiliary says whether the subject acted or was hit; the participle closes the clause; the result is still valid now.`),
  vocab: [
    V('haben', 'haben', 'Perfekt auxiliary with action'),
    V('ist', 'sein', 'Perfekt auxiliary with movement or state'),
    V('gelesen', 'lesen', 'read (strong participle)'),
    V('gesprochen', 'sprechen', 'spoken (strong participle)'),
    V('gemacht', 'machen', 'done (weak participle in -t)'),
    V('verstanden', 'verstehen', 'understood (inseparable, without ge-)'),
    V('angerufen', 'anrufen', 'called up (prefix recovered)'),
    V('aufgestanden', 'aufstehen', 'got up (separable with ist)'),
    V('stark gemalt', 'malen', 'strongly painted (mixed participle)'),
    V('übersetzt', 'übersetzen', 'translated (inseparare, no ge-)'),
    V('Ich habe den ganzen Tag gearbeitet.', 'arbeiten', 'I worked all day.'),
    V('Der Brief ist angekommen.', 'ankommen', 'The letter arrived (movement).'),
    V('Was ich euch geboten habe', 'bieten', 'what I have commanded you (Matthew 28:20)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Der Brief ___ angekommen}, which auxiliary goes in?'),
    options: [
      T('ist, because the subject is the patient of the action'),
      T('hat, because the participle ends in -en'),
      T('wird, because the verb is weak'),
      T('bleibt, because it is a short movement'),
    ],
    answer: 0,
    hint: T('Rule §2: whoever does not act takes ist.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Participle of {sprechen}: ___'),
      answer: 'gesprochen',
      hint: T('The strong participle harmonises the vowel: sp → gespro-.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is well formed?'),
      options: [
        T('I received the letter.'),
        T('I received the letter (spurious ge-).'),
        T('I the letter received.'),
        T('I the letter received (wrong auxiliary).'),
      ],
      answer: 0,
      hint: T('Rule §3: bekommen is inseparable, so no ge-.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the final slot: Ich habe das Buch gestern ___ (to read).'),
      answer: 'gelesen',
      hint: T('The participle closes the clause, after the complements.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its participle'),
      pairs: [
        { a: T('machen'), b: T('gemacht') },
        { a: T('verstehen'), b: T('verstanden') },
        { a: T('anrufen'), b: T('angerufen') },
        { a: T('studieren'), b: T('studiert') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Perfekt has two parts and one order: auxiliary in second position, participle at the end. Ich habe das Buch gestern nicht gelesen.',
      ),
    },
    {
      n: '2',
      text: T(
        'haben when the subject performs the action, ist when the action or the state happens to him: Wir haben gearbeitet against Er ist gestorben.',
      ),
    },
    {
      n: '3',
      text: T(
        'The participle of inseparable verbs takes no ge-: verstehen → verstanden, übersetzen → übersetzt, gefallen → gefallen.',
      ),
    },
    {
      n: '4',
      text: T(
        'The participle of the modals is the infinitive itself and takes the last slot: Ich habe kommen müssen, not *gekommen müssen*.',
      ),
    },
    {
      n: '5',
      text: T(
        'With another auxiliary at the end of the clause, the Perfekt splits the clause and repeats the auxiliary: Ich habe ihn gesehen, und er hat mich erkannt.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the Perfekt is the voice of writing'),
      text: T(
        'The history of the Perfekt is the history of a word that used to be weak. In Old High German, *haben* was still the only auxiliary; the Perfekt *ist* shows up around the ninth century. In the spoken German of southern Germany the Perfekt has practically vanished: there people say *ich habe gelesen* and *ich bin gelesen*, with the participle left loose. The written form that school fixed is the literary form — which is why a story written in modern German immediately sounds like a school text rather than conversation.',
      ),
    },
    {
      label: T('Reading Luther'),
      text: T(
        "In Luther's pages the Perfekt always appears when the narrator steps out of the story and back to the listener: *und lehret sie halten alles, was ich euch geboten habe* (Matthew 28:20), *und ich habe euch gesagt* (John 24:25). The Präteritum pushes the listener into the scene; the Perfekt, with its auxiliary in second position, pulls him back out to the *now* of the telling. It is a theologian's device, not a chronicler's.",
      ),
    },
  ],
  examples: [
    {
      text: 'Ich habe den ganzen Tag gearbeitet.',
      gloss: T('I worked all day (auxiliary in second position).'),
    },
    {
      text: 'Wir haben das Buch nicht übersetzt.',
      gloss: T('We did not translate the book (inseparable without ge-).'),
    },
    { text: 'Der Brief ist angekommen.', gloss: T('The letter arrived (ist: displacement).') },
    {
      text: 'Er ist ins Haus gegangen, hat aber niemanden gesehen.',
      gloss: T('He went into the house but saw nobody (auxiliary repeated).'),
    },
    {
      text: 'Ich habe es gestern nicht geschafft.',
      gloss: T('I did not manage yesterday (participle at the end).'),
    },
    {
      text: 'Hat sie das Buch schon gelesen?',
      gloss: T('Has she already read the book? (question with the auxiliary first).'),
    },
    { text: 'Ich habe kommen müssen.', gloss: T('I had to come (double infinitive).') },
    {
      text: 'Und lehret sie halten alles, was ich euch geboten habe.',
      gloss: T('And teach them to observe all that I have commanded you (Matthew 28:20).'),
    },
    {
      text: 'Wann hast du das Buch bekommen?',
      gloss: T('When did you receive the book? (inseparable without ge-).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Four participle formation patterns'),
      head: [T('Pattern'), T('Weak'), T('Strong'), T('Mixed'), T('No participle')],
      rows: [
        [
          'verbo simples',
          'machen → gemacht',
          'sprechen → gesprochen',
          'stark → stark gemalt',
          'verstehen → verstanden',
        ],
        ['verbo com -ieren', '—', '—', '—', 'studieren → studiert'],
        ['separável', 'suchen → gesucht', 'anrufen → angerufen', '—', 'passieren → passiert'],
        ['inseparável be-, ge-, ver-', 'besuchen → besucht', '—', '—', 'bekommen → bekommen'],
        ['regra', 'ge- + radical + -t', 'ge- + radical + -en', 'ge- + radical + -en', 'sem ge-'],
      ],
    },
    {
      caption: T('Table 2 — Word order in the Perfekt'),
      head: [T('Position'), T('What fills it'), T('Example')],
      rows: [
        ['1.ª', 'sujeito, elemento de tempo ou negação', 'Gestern habe ich lange geschlafen.'],
        ['2.ª', 'verbo conjugado (auxiliar do Perfekt)', 'Ich habe lange geschlafen.'],
        ['final', 'particípio + complementos', 'Ich habe lange geschlafen.'],
        ['meio', 'sujeito indireto, complementos', 'Ich habe das Buch nicht fertig gelesen.'],
        ['2.ª parte', 'novo auxiliar após a vírgula', 'Er ging fort, hat aber nichts gesagt.'],
      ],
    },
  ],
};

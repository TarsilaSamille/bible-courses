import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Gerund, participle and absolute'),
  subtitle: T('parlando; avendo detto; detto questo'),
  section: T('Numerals, conjunctions and the gerund'),
  body: C(`## The gerund: {-ando} and {-endo}

The gerund comes from the infinitive with the ending deleted: {-are} gives **-ando** ({parlare} → {parlando}, {camminare} → {camminando}), {-ere} gives **-endo** ({leggere} → {leggendo}), {-ire} also gives {-endo} ({finire} → {finendo}, {dormire} → {dormendo}). There is no rule for the irregulars, and there are few: {andare} → {andando}, {fare} → {facendo}, {dire} → {dicendo}, {bere} → {bevendo}.

It is the gerund that does what Portuguese does with the infinitive, and the match is almost exact: *stare + gerund* is the equivalent of "to be" + infinitive, and that is the construction that renders every Portuguese verb of the infinitive. What Italian does not have is the preposition: the infinitive goes bare.

## The participle has two forms: congiunto and assoluto

The regular past participle is {-ato}, {-uto} or {-ito} ({amato}, {avuto}, {finito}), plus a small unavoidable group: {scritto}, {letto}, {fatto}, {visto}, {detto}, {messo}, {aperto}, {tenuto}. It shows up in two forms.

**Congiunto** is the gerund of the auxiliary {avere}: {avendo} detto, {avendo} scritto, {avendo} mangiato. It marks an earlier action and requires the subjects to coincide: "{Avendo visto} i magi, {partirono}" — whoever saw is the one who left.

**Assoluto** is the participle alone, with no auxiliary: {detto}, {scritto}, {mangiato}. It has neither tense nor subject; it works as a short adverb summarising an earlier action.

## The absolute: when the subjects are not the same

Here is the part that breaks translation. The absolute participle may introduce a subject **different** from the main subject, and nothing in Italian signals that the swap happened: "{Detto questo}, {se ne andò}" — this was said, and he left. A translator who rendered {detto questo} as "saying this" made it a gerund and attributed the speech to the main subject, who may not even be the one who spoke.

The same goes for a congiunto with a swapped subject, which shows up in longer clauses: "{Avuta} la notte, {si misero} in cammino", "having spent the night, they set out on their way". Notice that the participle agrees with the subject of the absolute: {avuta} la notte, {partirono} i magi.

That is also why the commonest form in the Bible is impersonal: {si compì}, {si adempì}, {fu scritto}, {fu crocifisso}. Those are the constructions of {essere} plus participle, and the sentence ends up with no named subject.

## In the Bible

John 19:36 is a clean example: "«{Si compì} dunque questa parola, e {si adempì} la Scrittura, dicendo: «Non gli spezzarono le gambe»»". The first verb is impersonal: {compiersi}, "to be fulfilled". The {dunque} links the verse to what came before. And the {dicendo} is not a gerund of action: it is the formula that introduces a quotation, "saying", and what follows is someone else’s speech, not the speaker’s.

Note the contrast with Portuguese: "cumpriu-se esta palavra" carries a subject on its back, the verb itself. Italian does without it.

## Reading criterion

When you see a participle with no auxiliary, ask who its subject is: if it is the same as the main verb’s, translate it as an earlier action; if it is another, keep the two subjects apart. And when you see {sto per}, {ho finito di}, {devo} or {voglio} followed by an infinitive, remember there is no extra preposition to insert.`),
  vocab: [
    V('parlando', 'parlare', 'speaking'),
    V('leggendo', 'leggere', 'reading'),
    V('finendo', 'finire', 'ending'),
    V('facendo', 'fare', 'doing'),
    V('dicendo', 'dire', 'saying'),
    V('detto', 'dire', 'said'),
    V('scritto', 'scrivere', 'written'),
    V('fatto', 'fare', 'done'),
    V('visto', 'vedere', 'seen'),
    V('avendo', 'avere', 'having'),
    V('avendo detto', 'dire', 'having said'),
    V('sto per', 'stare', 'to be about to'),
    V('ho finito di', 'finire', 'to have just done'),
    V('devo', 'dovere', 'to have to'),
    V('voglio', 'volere', 'to want'),
    V('si compì', 'compiere', 'was fulfilled'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "having read the book"?'),
    options: [
      T('Avendo letto il libro'),
      T('Avendo leggendo il libro'),
      T('Leggendo il libro'),
      T('Avendo lett il libro'),
    ],
    answer: 0,
    hint: T('Congiunto = avere + gerund + participle.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In "detto questo, se ne andò", who said this?'),
      options: [
        T('Necessarily the person who left'),
        T('It may be someone else'),
        T('Nobody: the participle is impersonal'),
        T('The reader of the text'),
      ],
      answer: 1,
      hint: T('In the absolute the subjects may differ.'),
    },
    {
      kind: 'fill',
      prompt: T('Form the gerund: fare → ___'),
      answer: 'facendo',
      hint: T('Irregular.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: ho finito di ___ (to have just spoken)'),
      answer: 'parlare',
      hint: T('The preposition di stays: di + infinitive.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The gerund deletes the infinitive ending: -are becomes -ando, -ere and -ire become -endo.',
      ),
    },
    {
      n: '2',
      text: T(
        'The congiunto is avere + gerund + participle: avendo detto. The assoluto is the participle alone: detto.',
      ),
    },
    {
      n: '3',
      text: T(
        'In the absolute the subject of the participle may differ from the subject of the main verb: detto questo, se ne andò.',
      ),
    },
    {
      n: '4',
      text: T('The participle of the absolute agrees with its own subject: avuta la notte.'),
    },
    {
      n: '5',
      text: T(
        'Italian uses the infinitive without a preposition; one appears only when another verb governs it: ho finito di parlare.',
      ),
    },
  ],
  notes: [
    {
      label: T('The preposition Portuguese invents'),
      text: T(
        'Portuguese says "vou falar", "preciso falar", "começo a falar", with the infinitive glued to the conjugated verb. In Italian the infinitive goes bare: "parlo", "devo parlare". The preposition appears only when another verb governs it: "ho finito di parlare", "voglio mangiare", "non c’è niente che non farebbe".',
      ),
    },
    {
      label: T('Periphrasis in the imperative'),
      text: T(
        '"Voglio + infinitive" is the commonest way to ask for something in Italian: "voglio parlare con te", "voglio vedere il libro". In periphrasis such as "sto per partire" Italian makes it clear that the departure has not happened yet, unlike Portuguese "vou partir", which can be a decision already taken or a future.',
      ),
    },
  ],
  examples: [
    { text: 'Sto leggendo il libro.', gloss: T('I am reading the book.') },
    { text: 'Sto per partire.', gloss: T('I am about to leave.') },
    { text: 'Ho finito di mangiare.', gloss: T('I have just eaten.') },
    { text: 'Devo parlare con te.', gloss: T('I have to talk with you.') },
    { text: 'Voglio vedere il libro.', gloss: T('I want to see the book.') },
    { text: 'Avendo visto i magi, partirono.', gloss: T('Having seen the magi, they left.') },
    { text: 'Detto questo, se ne andò.', gloss: T('Having said this, he went away.') },
    { text: 'Entrati, i discepoli.', gloss: T('Having entered, the disciples.') },
    { text: 'Si compì dunque questa parola.', gloss: T('This word was therefore fulfilled.') },
    { text: 'Il Vangelo fu scritto da Giovanni.', gloss: T('The Gospel was written by John.') },
  ],
  tables: [
    {
      caption: T('Infinitivo e gerundio'),
      head: ['Infinitivo', 'Gerundio'],
      rows: [
        ['parlare', 'parlando'],
        ['camminare', 'camminando'],
        ['leggere', 'leggendo'],
        ['finire', 'finendo'],
        ['dormire', 'dormendo'],
        ['andare', 'andando'],
        ['fare', 'facendo'],
        ['dire', 'dicendo'],
        ['bere', 'bevendo'],
        ['potere', 'potendo'],
      ],
    },
    {
      caption: T('Participio: le due forme'),
      head: ['Tempo', 'Assoluto', 'Congiunto'],
      rows: [
        ['passato, masc. sing.', 'detto', 'avendo detto'],
        ['passato, fem. sing.', 'partita', 'avendo partita'],
        ['passato, masc. plur.', 'partiti', 'avendo partiti'],
        ['regolare, masc. sing.', 'mangiato', 'avendo mangiato'],
        ['irregolare, masc. sing.', 'scritto', 'avendo scritto'],
      ],
    },
    {
      caption: T('Perifrasi verbali'),
      head: ['Perifrasi', 'Glossa'],
      rows: [
        ['sto + gerundio', 'stare a'],
        ['sto per + infinito', 'stare per punto de'],
        ['ho finito di + infinito', 'acabar de'],
        ['devo + infinito', 'dover'],
        ['voglio + infinito', 'querer'],
        ['mi piacerebbe + infinito', 'gustaría de'],
        ['vado + gerundio', 'ir haciendo'],
      ],
    },
  ],
};

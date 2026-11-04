import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('The passato prossimo'),
  subtitle: T('ho parlato: completed action'),
  section: T('The past and the reading'),
  body: C(`## One single form for the whole past

Spoken Italian has one tense for the past, the *passato prossimo*, **built on a present-tense auxiliary plus a participle**: {ho parlato}, {abbiamo letto}, {Dio disse}, {Gesù è stato crocifisso}. That is not a defect, it is a system: Italian marks the past with the auxiliary {ho}, which is the first person of the present of {avere}. The result is that the whole past went on using the present as its auxiliary.

To a learner this looks confusing: {ho parlato} (I spoke) and {parlo} (I speak) share the auxiliary. The difference sits in the participle, which **carries the event**. Without the participle, {ho} is only "I have".

## {Avere} or {essere}: the choice that changes the translation

Transitive verbs take {avere}: {ho mangiato} (I ate), {ho scritto} (I wrote), {ho letto} (I read). Verbs of motion, of state and reflexive verbs take {essere}: {sono andato} (I went), {sono stato} (I was), {sono nato} (I was born), {mi sono lavato} (I washed myself).

With {essere} the participle agrees with the subject: {sono andato}, {sono andata}, {sono andati}, {sono andate}. It is the same agreement the adjective has, and that is why {le ragazze sono partite} has {partite} and not {partito}. With {avere} none of that happens: {abbiamo parlato} serves one person and a thousand.

## The irregular participles are a handful

**The regular ones are mechanical**: {-are} becomes {-ato} ({parlare} → {parlato}), {-ere} becomes {-uto} ({leggere} → {letto}, {prendere} → {preso}), {-ire} becomes {-ito} ({finire} → {finito}). The irregular ones are learnt, and there are few: {dire} → {detto}, {fare} → {fatto}, {leggere} → {letto}, {prendere} → {preso}, {scrivere} → {scritto}, {aprire} → {aperto}, {morire} → {morto}.

The risk sits in the commonest verbs, which is good news. And note that {stare} gives {stato} and {essere} gives {stato} as well: same form, different verbs.

## The bridge to the Bible

{Dio disse} and {la luce fu scritta} show the handover between two ways of saying the past. The speech is in the *passato prossimo*, {disse}, while {fu} expresses a consummated fact and uses {essere} in the past instead of {è stato}.

The practical distinction: {disse} reports what happened; {fu scritto} highlights the result, which stays valid after it has happened. In a gospel, alternating between the two is what gives the text its rhythm between narrative and statement.`),
  vocab: [
    V('ho parlato', 'parlare', 'I spoke'),
    V('ha letto', 'leggere', 'he read'),
    V('sono andato', 'andare', 'I went (masc.)'),
    V('sono andata', 'andare', 'I went (fem.)'),
    V('detto', 'dire', 'said'),
    V('fatto', 'fare', 'done'),
    V('letto', 'leggere', 'read'),
    V('scritto', 'scrivere', 'written'),
    V('disse', 'dire', 'he said'),
    V('fu', 'essere', 'he was'),
    V('dire', 'dire', 'to say'),
    V('fare', 'fare', 'to do'),
    V('prendere', 'prendere', 'to take'),
    V('stato', 'stare', 'state (participle)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "I spoke"?'),
    options: [T('io parlo'), T('ho parlato'), T('sono parlato'), T('avevo parlato')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which auxiliary goes with andare?'),
      options: [T('avere'), T('essere'), T('avere essere'), T('si')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Maria ha ___ il pane (mangiare)'),
      answer: 'mangiato',
      hint: T('Participle of -are in -ato.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: siamo arrivat_ al tempio'),
      answer: 'i',
      hint: T('Noi, masculine plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The *passato prossimo* is a present-tense auxiliary plus a participle: {ho parlato}, {abbiamo letto}, {sono andato}.',
      ),
    },
    {
      n: '2',
      text: T(
        'With {essere} the participle agrees with the subject: {sono andata}, {sono andati}, {le ragazze sono partite}.',
      ),
    },
    {
      n: '3',
      text: T(
        'With {avere} the participle does not agree: {abbiamo parlato} serves one person and a thousand.',
      ),
    },
    {
      n: '4',
      text: T(
        'Regular participles: {-are} → {-ato}, {-ere} → {-uto}, {-ire} → {-ito}; the irregular ones are {detto}, {fatto}, {letto}, {preso}, {scritto}.',
      ),
    },
    {
      n: '5',
      text: T('The auxiliary never stands alone: {ho mangiato}, and never {ho mangiato mangiato}.'),
    },
  ],
  notes: [
    {
      label: T('Auxiliary or verb?'),
      text: T(
        '{ho mangiato} can be "I ate" or "I have eaten": the choice comes from what the main verb requires, not from the speaker’s intention. Verbs of motion and of change of state take {essere} by convention, not by sense, which is why {sono partito} is correct and {ho partito} is not.',
      ),
    },
    {
      label: T('Disse and fu'),
      text: T(
        '{disse} is the *passato prossimo* and it reports; {fu} is the *passato remoto* of {essere} and it results. Where Portuguese has one verb, Italian has two, and moving between them is what separates narrative from statement in the biblical text.',
      ),
    },
  ],
  examples: [
    { text: 'Abbiamo letto la Scrittura.', gloss: T('We read the Scriptures.') },
    { text: 'Gesù è stato crocifisso.', gloss: T('Jesus was crucified.') },
    { text: 'Dio disse: «Sii luce».', gloss: T('God said: "Be light".') },
    { text: 'Le ragazze sono partite.', gloss: T('The girls left.') },
    { text: 'Ho scritto la lettera.', gloss: T('I wrote the letter.') },
    { text: 'Siamo arrivati al tempio.', gloss: T('We arrived at the temple.') },
    { text: 'Mi sono lavato le mani.', gloss: T('I washed my hands.') },
    { text: 'La legge fu scritta da Mosè.', gloss: T('The law was written by Moses.') },
  ],
  tables: [
    {
      caption: T('Auxiliaries in the passato prossimo'),
      head: ['Verbo', 'Auxiliar', 'Esempio'],
      rows: [
        ['transitivo', 'avere', 'ho mangiato il pane'],
        ['transitivo', 'avere', 'ha scritto la lettera'],
        ['movimento', 'essere', 'sono andato a Roma'],
        ['stato', 'essere', 'sono stato malato'],
        ['riflessivo', 'essere', 'mi sono lavato'],
      ],
    },
    {
      caption: T('Regular and irregular participle'),
      head: ['Infinitivo', 'Participio', 'Tipo'],
      rows: [
        ['parlare', 'parlato', 'regolare: -are → -ato'],
        ['finire', 'finito', 'regolare: -ire → -ito'],
        ['leggere', 'letto', 'irregolare'],
        ['prendere', 'preso', 'irregolare'],
        ['dire', 'detto', 'irregolare'],
        ['scrivere', 'scritto', 'irregolare'],
        ['morire', 'morto', 'irregolare'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Essere and avere'),
  subtitle: T('the two essential verbs'),
  section: T('The noun and the verb'),
  body: C(`## {Essere} covers two Portuguese verbs

Italian has one verb where Portuguese has two. {Essere} **means to be and to be in a state at once**, and the form is the same in both cases: {sono Marco} (I am Marco), {sono stanco} (I am tired), {sono medico} (I am a doctor), {la chiesa è in città} (the church is in the city). A word-for-word translator writes {io sono stanco}, which sounds wrong, because {sono} here is neither "to be" nor "to be in a state": it is one verb for the two things.

The commonest way of saying "he is" is {lui è}, and it is the one that turns up everywhere. But there is also {egli è}, which stresses: "egli è Dio" sounds stronger than "lui è Dio", exactly as "He is the Lord" does in Portuguese.

## Hunger, thirst, sleep: {avere} too

{avere} means to have, and **it is the other auxiliary**. It covers what Portuguese already expresses with "a ter": {ho vent’anni}, {ho fame}, {ho sonno}, {ho freddo}. In Italian hunger, thirst, sleep, cold and heat **have no verb of their own**; they all take {avere}. The Portuguese difference shows up at translation time: "estou com fome" becomes {ho fame}, not {sono fame}.

And there is a case where both verbs appear in one sentence: {essere} says who someone is and {avere} says what they have, {è medico e ha quarant’anni}. A translator has to know which Portuguese verb stands in each half.

## Why the two are essential

These two verbs build almost everything in Italian that is compound: the *passato prossimo* ({ho mangiato}, {sono andato}), the *futuro composto* ({avrò mangiato}, {sarò andato}) and the *condicional composto* ({avrei mangiato}, {sarei andato}). Anyone who does not know them cannot form any of those tenses, and they appear on nearly every page of biblical text.

That is why the first thing to look for in an Italian text is {essere} or {avere}, before the main verb. Most sentences are built on top of them, and that structure is what makes Italian look simpler than it is.

## {Stato}, noun and participle

{stato} is one word with two values: a noun, "state", and the participle of {essere}. {Sono stanco} uses the second; {lo stato della salute} uses the first. And because it is a participle it inflects: {stato}, {stata}, {stati}, {state}. The same {-ato} that makes the past of {essere} is also the noun.

## In the Bible

{Dio} usually appears without an article: {Dio è luce}, {Dio è amore}, {Dio è Dio}. Greek is the opposite and almost always takes one (ὁ θεός, ὁ ἄνθρωπος, ὁ λόγος). The proper name dropping its article is the difference a translator has to notice: where Greek says "the God", Italian often says only {Dio}.`),
  vocab: [
    V('sono', 'essere', 'I am'),
    V('sei', 'essere', 'you are'),
    V('è', 'essere', 'he/she is'),
    V('siamo', 'essere', 'we are'),
    V('ho', 'avere', 'I have'),
    V('hai', 'avere', 'you have'),
    V('ha', 'avere', 'he/she has'),
    V('abbiamo', 'avere', 'we have'),
    V('essere', 'essere', 'to be'),
    V('avere', 'avere', 'to have'),
    V('stato', 'stato', 'state; state of'),
    V('chiesa', 'chiesa', 'church'),
    V('città', 'città', 'city'),
    V('fame', 'fame', 'hunger'),
    V('medico', 'medico', 'doctor'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: Noi ___ dalla Spagna.'),
    options: [T('siamo'), T('abbiamo'), T('sono'), T('hanno')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which sentence names a profession?'),
      options: [
        T('La chiesa è vicina.'),
        T('Sono medico.'),
        T('Ho venticinque anni.'),
        T('Dio è amore.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: lui ___ un libro (to have)'),
      answer: 'ha',
      hint: T('The lui/lei form.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: noi ___ in casa (essere, present)'),
      answer: 'siamo',
      hint: T('Noi + siamo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Essere} covers identity, nature, profession and place: {sono Giovanni}, {è medico}, {la chiesa è in città}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Avere} joins the person to what they have: {ho vent’anni}, {ha fame}, {ha un libro}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Hunger, thirst, sleep, cold and heat take {avere}, not {essere}: {ho fame}, never {sono fame}.',
      ),
    },
    {
      n: '4',
      text: T(
        'In the compound tenses both become auxiliaries: {ho mangiato}, {sono andato}, {avrò mangiato}, {sarei andato}.',
      ),
    },
    { n: '5', text: T('{Dio} drops the article and Greek does not: {Dio è luce} beside ὁ θεός.') },
  ],
  notes: [
    {
      label: T('{Egli} against {lui}'),
      text: T(
        '{egli è} sounds stronger than {lui è}, and that is how Portuguese renders "He is". The force is in the choice of form, not in the verb: both say the same thing, and Italian uses the weaker one in running text and the stronger one in a statement.',
      ),
    },
    {
      label: T('{Stato} twice over'),
      text: T(
        '{stato} is a noun and a participle at once. In {sono stanco} it is the participle; in {lo stato della salute} it is the noun. And because it is the participle of {essere} it inflects: {stato}, {stata}, {stati}, {state}.',
      ),
    },
  ],
  examples: [
    { text: 'Dio è amore.', gloss: T('God is love.') },
    { text: 'Maria ha letto il Vangelo.', gloss: T('Mary has read the Gospel.') },
    { text: 'Sono stanco.', gloss: T('I am tired.') },
    { text: 'Ho venticinque anni.', gloss: T('I am twenty-five.') },
    { text: 'La chiesa è in città.', gloss: T('The church is in the city.') },
    { text: 'I discepoli hanno paura.', gloss: T('The disciples are afraid.') },
    { text: 'Egli è Dio.', gloss: T('He is God.') },
    { text: 'Ha fame e ha sonno.', gloss: T('He is hungry and sleepy.') },
  ],
  tables: [
    {
      caption: T('Presente di essere e avere'),
      head: ['Persona', 'essere', 'avere'],
      rows: [
        ['io', 'sono', 'ho'],
        ['tu', 'sei', 'hai'],
        ['lui/lei', 'è', 'ha'],
        ['noi', 'siamo', 'abbiamo'],
        ['voi', 'siete', 'avete'],
        ['loro', 'sono', 'hanno'],
      ],
    },
    {
      caption: T('Which verb says what'),
      head: ['Cosa dice', 'essere', 'avere'],
      rows: [
        ['identità', 'sono Marco', '—'],
        ['stato', 'sono stanco', '—'],
        ['professione', 'è medico', '—'],
        ['luogo', 'la chiesa è in città', '—'],
        ['possesso', '—', 'ho un libro'],
        ['età e fame', '—', 'ha vent’anni, ha fame'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('The whole sentence'),
  subtitle: T('È arrivata; darlo; al posto del quale'),
  section: T('Reading and syntax'),
  body: C(`## The standard order, and the subject that drops

Italian order is subject, verb, object: "{Maria} {leggerebbe} {il libro}". The adjective and the longer phrase come after, and almost never before. Inversion is possible and not wrong, but it is marked: it sounds literary, biblical or archaic rather than neutral.

Italian **drops the subject** easily, and that is why many sentences have no subject in view. First and second person can drop because the verb already identifies them: "{Vengo} domani", "{Parliamo} italiano". The third person only drops when the previous sentence has already named it, and that is the **prodropping** that shows up all the time: "{Maria} è partita. {È arrivata} alle tre". The verb {è arrivata} is third singular feminine and there is nobody in front of it.

## The pronoun that fuses with the verb

Some Italian verbs fuse the object pronoun to the infinitive: {dare} + {lo} = {darlo}, {fare} + {lo} = {farlo}, {avere} + {lo} = {averlo}, {potere} + {lo} = {poterlo}, {volere} + {lo} = {volerlo}, {andare} + {ci} = {andarci}. The same goes with {ne}: {darne}, {farcene}, {averne}.

The point is that this fusion is **impossible** in a group of verbs, and those are the ones a translator needs: {stare}, {restare}, {uscire}, {entrare} take no clitic. You cannot say *starlo* or *restarlo*. If the sentence needs the pronoun, Italian reaches for another verb: "sono {stato} {li} {tre giorni}".

And the fusion goes further in the imperative, where the pronoun sticks **after** the verb: "{dammi} {lo}" gives **{dammelo}**, "{dimmi} {lo}" gives {dimelo}, "{date} {ci} {lo}" gives {datelo}. Everywhere else the clitic comes before the conjugated verb, and {non} sits between the two: **{non} {lo} {so}**.

## Literary inversion: the verb before the subject

The commonest inversion is not decorative: it appears when the clause opens with an adjunct of time, place or condition. "{Quando dunque nacque} {Gesù} {a} {Betlem}", "{Entrati} {i discepoli}", "{Seduti} {gli ascoltava}". The verb can even go to the front of the sentence, as in the best-known line of Italian prose: "{Al posto del quale c’era} {un divano}".

Notice what happens to the pronoun in "{Entrati} {i discepoli}": the {i} is the definite article, not a pronoun. And notice that the single participant, which in Portuguese would become "tendo entrado os discípulos", is in Italian a bare noun at the head of the sentence, and who entered stays in the air until the second clause.

## In the Bible

John 20:19 has all three mechanisms in one sentence: "{Entrati} {i discepoli}", "Gesù {disse} {loro}", "{Entrati}" is a gerund in the sense of an absolute, with no subject named; "{disse loro}" has a verb, an indirect pronoun and no subject. A translator who writes "Jesus said to the disciples" in Portuguese adds a subject the Italian did not have, and the reader loses the opening.

The same goes for the subjunctive: "Gesù, sapendo che tutte le cose gli erano state affidate dal Padre…". With no named subject, the verb moves to the front.

## Reading criterion

When you read a sentence with no subject, do not hunt for the missing one: look for the subject of the previous sentence. When you see a verb with a pronoun stuck to it, undo the fusion and find out whether the verb accepts a clitic; if it does not, Italian reached for another verb. And when you see a bare noun at the head of a sentence before the verb, treat it as inversion, not as a mistake of order.`),
  vocab: [
    V('entrare', 'entrare', 'to enter'),
    V('arrivare', 'arrivare', 'to arrive'),
    V('partire', 'partire', 'to leave'),
    V('dire', 'dire', 'to say'),
    V('dare', 'dare', 'to give'),
    V('fare', 'fare', 'to do'),
    V('andare', 'andare', 'to go'),
    V('uscire', 'uscire', 'to go out'),
    V('libro', 'libro', 'book'),
    V('Maria', 'Maria', 'Mary'),
    V('discepolo', 'discepolo', 'disciple'),
    V('leggere', 'leggere', 'to read'),
    V('soggetto', 'soggetto', 'subject'),
    V('verbo', 'verbo', 'verb'),
    V('pronome', 'pronome', 'pronoun'),
    V('clitico', 'clitico', '(grammar) clitic'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Maria è partita. È arrivata alle tre.", who arrived?'),
    options: [
      T('Nobody identified'),
      T('Maria, because the verb is singular feminine'),
      T('Maria, because it is written'),
      T('The subject was dropped by mistake'),
    ],
    answer: 1,
    hint: T('The verb keeps the gender and number mark of the absent subject.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fuse the verb and the pronoun: dare + lo → ___'),
      answer: 'darlo',
      hint: T('The infinitive absorbs the object pronoun.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses a verb that takes no fused pronoun?'),
      options: [T('Glielo diedi.'), T('Starlo a casa.'), T('Farlo subito.'), T('Darne un pezzo.')],
      answer: 1,
      hint: T('Stare and restare take no clitic.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the fused imperative: dammi lo → ___'),
      answer: 'dammelo',
      hint: T('In the imperative the clitic goes after.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The standard order is subject, verb, object; inversion is possible and sounds literary.',
      ),
    },
    {
      n: '2',
      text: T(
        'The subject may be dropped; the verb keeps the mark of who acts: È arrivata alle tre.',
      ),
    },
    {
      n: '3',
      text: T('Some verbs fuse the object pronoun: darlo, farlo, averlo, poterlo, andarci.'),
    },
    { n: '4', text: T('Stare, restare, uscire and entrare take no fused pronoun.') },
    {
      n: '5',
      text: T('In the affirmative imperative the clitic sticks after: dammelo, dimelo, datelo.'),
    },
  ],
  notes: [
    {
      label: T('The Portuguese false friend'),
      text: T(
        'Portuguese needs two words to say what {glielo} says: "dar-lhe isso". Italian joins the indirect {gli} to the direct {lo} and glues the block to the verb, and what was a clause becomes a word. That is why {glielo} needs a footnote and "dar-lhe isso" does not.',
      ),
    },
    {
      label: T('When the subject may disappear'),
      text: T(
        'With {io} and {tu} the subject hardly ever appears, because the verb already identifies it. With the third person it disappears when the subject has just been named, and there the next sentence cannot be read on its own. A translator who writes "Maria è partita. Lei è arrivata" is not wrong: only slower than Italian.',
      ),
    },
  ],
  examples: [
    {
      text: 'Maria è partita. È arrivata alle tre.',
      gloss: T('Maria left. She arrived at three.'),
    },
    { text: 'Vengo domani.', gloss: T('I am coming tomorrow.') },
    { text: 'Glielo diedi.', gloss: T('I gave it to him.') },
    { text: 'Fallo subito.', gloss: T('Do it at once.') },
    { text: 'Dammelo, per favore.', gloss: T('Give it to me, please.') },
    { text: 'Non lo so.', gloss: T('I do not know.') },
    {
      text: 'Entrati i discepoli, disse loro.',
      gloss: T('The disciples having entered, he spoke to them.'),
    },
    {
      text: 'Al posto del quale c’era un divano.',
      gloss: T('In place of which there was a sofa.'),
    },
    { text: 'Seduti, gli ascoltava.', gloss: T('Seated, he listened to them.') },
  ],
  tables: [
    {
      caption: T('Ordine della frase'),
      head: ['Ordine', 'Struttura', 'Frase'],
      rows: [
        ['standard', 'soggetto + verbo + oggetto', 'Maria legge il libro'],
        ['con aggettivo', 'soggetto + verbo + oggetto + aggettivo', 'Maria legge il libro nuovo'],
        ['prodropping', 'verbo, con il soggetto omesso', 'Maria è partita. È arrivata.'],
        ['inversione temporale', 'tempo + verbo + soggetto', 'Quando dunque nacque Gesù'],
        [
          'inversione letteraria',
          'avverbio + verbo + soggetto',
          'Al posto del quale c’era un divano',
        ],
      ],
    },
    {
      caption: T('Verbo e pronome fusi'),
      head: ['Verbo', 'Pronome', 'Forma'],
      rows: [
        ['dare', 'lo', 'darlo'],
        ['fare', 'lo', 'farlo'],
        ['avere', 'lo', 'averlo'],
        ['potere', 'lo', 'poterlo'],
        ['volere', 'lo', 'volerlo'],
        ['andare', 'ci', 'andarci'],
        ['dare', 'ne', 'darne'],
        ['stare', '—', 'stare (non fonde)'],
      ],
    },
    {
      caption: T('Il blocco pronominale'),
      head: ['Forma', 'Significato'],
      rows: [
        ['me lo', 'a me quello'],
        ['glielo', 'a lui quello'],
        ['ce ne', 'a noi di questo'],
        ['te ne', 'a te di questo'],
        ['dammelo', 'dammi questo (imperativo)'],
        ['datelo', 'daci questo (imperativo)'],
      ],
    },
  ],
};

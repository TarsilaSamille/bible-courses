import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Negation: non, mai, più, ancora'),
  subtitle: T('non parlo mai; non parlo più'),
  section: T('The adverb'),
  body: C(`## {non} goes before the verb

In Portuguese the negation is a single word and opens the sentence: "não fala". In Italian there are two, and they occupy different slots. **{non}** precedes the conjugated verb: "non parlo", "non lo so", "non voglio andare". When there is an auxiliary, {non} enters before the auxiliary and the participle: "non ho mai visto", "non era venuto".

And {non} sticks to the pronoun: "non **{lo}** so", not "non so **{lo}**". If the pronoun is glued to the verb, it moves in front of {non}: "non **{lo}** so", "non **{li}** ho visti", "non **{ci}** vado".

## {mai}, {più} and {ancora} go after

This is the part a reader coming from Portuguese always gets wrong, because in Portuguese {nunca}, {mais} and {ainda} also come after the verb, and the temptation is to write *{mai non parlo}*. Italian accepts one order only:

**non** parlo **{mai}**, never speaks.
**non** parlo **{più}**, no longer speaks.
**non** parlo **{ancora}**, does not speak yet.

The two pairs that get swapped are {non più} "no more" and {non ancora} "not yet". The difference is about time, not intensity: *non parlo più* says the action is over for good; *non parlo ancora* says it is going to happen. The same holds with the auxiliary: *non ho parlato più* and *non ho parlato ancora*.

After the verb there are also {affatto} ("not at all"), {quasi} ("almost not") and {pienamente}, {volentieri}. The slot is the same for all of them: after.

## {neanche}, {nemmeno} and replies

There is a second group that negates nothing inside the sentence: it **opens the reply**. To someone who says "non parlo", you answer "**neanch’io**" or "**nemmeno io**", meaning "nor do I". The two words are nearly synonyms; {nemmeno} is a little drier, {neanche} a little warmer.

Then there is {piuttosto}, which is a conjunction disguised as an adverb: "non dico che è male, {piuttosto} dico che è inutile". And {troppo} and {assai}, which intensify without inflecting.

## In the Bible

Matt 7:21 puts the negation on an indefinite, which is the most delicate slot: "**{Non ogni uno}** che mi dice: Signore, Signore, entrerà nel regno dei cieli". The {non} comes before {ogni}, not before the verb {entrà}, because the target is the indefinite. A translator who writes "ogni uno non entrerà" has the right idea and the wrong grammar.

Notice also "non ho bisogno che tu parli", where {non} stays far from the verb it negates: the negation attaches to the noun, and the verb keeps what follows it.

## Reading criterion

Identify the target of the negation first: verb, noun or indefinite. Then fit {non} immediately in front of it, and only then put {mai}, {più} or {ancora} at the end of the same clause. If {mai} came out in front in your translation, the problem is not lexical: it is one of order.`),
  vocab: [
    V('non', 'non', 'not'),
    V('mai', 'mai', 'never'),
    V('più', 'più', 'more / any more'),
    V('ancora', 'ancora', 'still / yet'),
    V('affatto', 'affatto', 'at all'),
    V('neanche', 'neanche', 'nor'),
    V('nemmeno', 'nemmeno', 'not even'),
    V('piuttosto', 'piuttosto', 'rather'),
    V('quasi', 'quasi', 'almost'),
    V('sempre', 'sempre', 'always'),
    V('niente', 'niente', 'nothing'),
    V('ogni', 'ogni', 'every'),
    V('parlare', 'parlare', 'to speak'),
    V('sapere', 'sapere', 'to know'),
    V('volere', 'volere', 'to want'),
    V('bisogno', 'bisogno', 'need'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "I have not spoken yet"?'),
    options: [
      T('non parlo ancora'),
      T('non ancora parlo'),
      T('ancora non parlo'),
      T('non parlo già'),
    ],
    answer: 0,
    hint: T('Ancora goes after the verb.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: non parlo ___ (never)'),
      answer: 'mai',
      hint: T('After the conjugated verb.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is correct?'),
      options: [
        T('Mai non parlo con lui.'),
        T('Non parlo mai con lui.'),
        T('Non mai parlo con lui.'),
        T('Parlo non mai con lui.'),
      ],
      answer: 1,
      hint: T('Non before, mai after.'),
    },
    {
      kind: 'choose',
      prompt: T('Reply to "non parlo": nor do I'),
      options: [T('Neanch’io.'), T('Anch’io non.'), T('Io non anche.'), T('Nemmeno non io.')],
      answer: 0,
      hint: T('Neanche opens the reply and elides the i.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Non goes immediately in front of what it negates: the verb, the indefinite or the noun.',
      ),
    },
    {
      n: '2',
      text: T(
        'Mai, più and ancora go after the verb: non parlo mai, non parlo più, non parlo ancora.',
      ),
    },
    {
      n: '3',
      text: T(
        'Non più is "no more"; non ancora is "not yet". Swapping them changes the tense of the sentence.',
      ),
    },
    { n: '4', text: T('Neanche and nemmeno open a reply: "Non parlo". — "Neanch’io".') },
    {
      n: '5',
      text: T(
        'With an auxiliary, non enters before the auxiliary and the participle: non ho mai visto.',
      ),
    },
  ],
  notes: [
    {
      label: T('The clitic in front of non'),
      text: T(
        '{Non lo so} and {Lo non so} make the same negation, and the second sounds emphatic, as if the speaker were showing their own position. In {Non lo so} the pronoun is glued to non; in {Lo non so} it is glued to the verb, which comes right after.',
      ),
    },
    {
      label: T('Double negation'),
      text: T(
        'Italian accepts stacking: {non vedo nessuno}, {non c’è niente}, {non ho fatto mai nulla}. In all of them the slot rule still holds: {non} before, the rest after. And {nessuno}, {niente} and {mai} are the three words that can do this work.',
      ),
    },
  ],
  examples: [
    { text: 'Non parlo.', gloss: T('I do not speak.') },
    { text: 'Non parlo mai con lui.', gloss: T('I never speak with him.') },
    { text: 'Non parlo più.', gloss: T('I no longer speak.') },
    { text: 'Non ho parlato ancora.', gloss: T('I have not spoken yet.') },
    { text: 'Non lo so.', gloss: T('I do not know.') },
    { text: 'Non l’hanno vinto.', gloss: T('They did not overcome it.') },
    { text: 'Neanch’io non voglio.', gloss: T('Nor do I want to.') },
    { text: 'Non affatto.', gloss: T('Not at all.') },
    { text: 'Non ogni uno entrerà nel regno.', gloss: T('Not everyone will enter the kingdom.') },
  ],
  tables: [
    {
      caption: T('Posizione della negazione'),
      head: ['Parola', 'Dove va', 'Frase'],
      rows: [
        ['non', 'prima del verbo', 'non parlo'],
        ['mai', 'dopo il verbo', 'non parlo mai'],
        ['più', 'dopo il verbo', 'non parlo più'],
        ['ancora', 'dopo il verbo', 'non parlo ancora'],
        ['affatto', 'dopo il verbo', 'non parlo affatto'],
        ['quasi', 'prima del verbo', 'quasi non parlo'],
      ],
    },
    {
      caption: T('Le coppie che si scambiano'),
      head: ['Italiano', 'Portoghese', 'Idea'],
      rows: [
        ['non parlo più', 'não falo mais', 'l’azione è finita'],
        ['non parlo ancora', 'ainda não falo', 'l’azione verrà'],
        ['non parlo mai', 'nunca falo', 'in nessun momento'],
        ['non parlo affatto', 'não falo nada', 'in nessun modo'],
        ['non parlo neanche', 'nem falo', 'tampouco'],
      ],
    },
    {
      caption: T('Negazione con ausiliare'),
      head: ['Costruzione', 'Frase'],
      rows: [
        ['non + avere + participio', 'non ho visto'],
        ['non + essere + participio', 'non era venuto'],
        ['non + clitico + verbo', 'non lo so'],
        ['clitico + non + verbo', 'lo non so (enfatico)'],
        ['non + ausiliare + mai', 'non ho mai visto'],
      ],
    },
  ],
};

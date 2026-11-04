import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('The imperative'),
  subtitle: T('parla, parli, non parlare'),
  section: T('The tenses of the verb'),
  body: C(`## The imperative exists in three registers

Italian has three imperatives, and the choice is not about style: **it is about social register**. With {tu} the imperative matches the present in almost every verb: {parla}, {leggi}, {finisci}. With {lei} (you, formal) it uses the congiuntivo: {parli}, {legga}, {finisca}. And the plural almost always uses the {voi} form: {parlate}, {leggete}, {finite}.

See what that does to a translator: English uses "you" for both, Italian uses {lei} for one and {tu} for the other. A translation that takes {parla} for "you speak" is wrong, because {parla} is {tu}.

## Negation changes shape too

With {tu} **the negation is** {non} plus the infinitive: {non parlare}, "do not speak". With {lei} it is {non} plus the congiuntivo: {non parli}. Both mean the same, and the second sounds more polite. As in Portuguese, the pronoun can be left out: {Parla!}, {Non parlare!}, because {tu} and {lei} are already in the form of the verb.

The difference that strikes anyone who knows Greek: Greek has a single negation (μη) and Italian has two, because Italian has two forms of address. It is the same reason Italian has the congiuntivo: it is a language that cares about the level of the person addressed.

## In the affirmative the pronoun sticks

In the affirmative imperative **the pronouns come glued**: {parlati}, {perdonali}, {dammi}, {sedetevi}. In the negative they come loose: {non mi parlate}, {non li perdonare}, {non mi siedete}. The rule is mechanical and without exception: {non} breaks the fusion.

## Reading criterion

If you see an imperative ending in {-a}, {-i} or {-e} without {-ate}, it is {tu}. If it ends in {-i} or {-a} and is the {lei} form ({parli}), it is "you, formally". And in doubt, look at the negation: {non} plus infinitive is {tu}, {non} plus congiuntivo is {lei}. In both the pronoun is left out.`),
  vocab: [
    V('parla', 'parlare', 'speak!'),
    V('parli', 'parlare', 'speak! (formal)'),
    V('parlate', 'parlare', 'speak! (plural)'),
    V('parlati', 'parlare', 'speak (to yourself)'),
    V('legge', 'leggere', 'read!'),
    V('legga', 'leggere', 'read! (formal)'),
    V('finite', 'finire', 'finish! (plural)'),
    V('dammi', 'dare', 'give me!'),
    V('perdonali', 'perdonare', 'forgive them!'),
    V('non parlare', 'parlare', 'do not speak!'),
    V('non parli', 'parlare', 'do not speak! (formal)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you negate "speak!" to a friend?'),
    options: [T('non parla'), T('non parlare'), T('non parli'), T('non parlato')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('What is the formal imperative of leggere?'),
      options: [T('leggi'), T('legga'), T('legge'), T('leggete')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Padre, perdona___ (li)'),
      answer: 'li',
      hint: T('Third-person plural object pronoun.'),
    },
    {
      kind: 'fill',
      prompt: T('Form the tu imperative: dire → dimmi'),
      answer: 'dimmi',
      hint: T('The verb drops its final r and doubles the m.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('With {tu} the imperative matches the present: {parla}, {leggi}, {finisci}.'),
    },
    {
      n: '2',
      text: T(
        'With {lei} the congiuntivo is used: {parli}, {legga}, {finisca}; with {voi} the plural form: {parlate}, {leggete}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The negation of {tu} is {non} plus the infinitive, {non parlare}; that of {lei} is {non} plus the congiuntivo, {non parli}.',
      ),
    },
    {
      n: '4',
      text: T(
        'In the affirmative the pronouns glue on: {parlati}, {perdonali}, {dammi}, {sedetevi}.',
      ),
    },
    {
      n: '5',
      text: T(
        'In the negative the pronouns come loose: {non mi parlate}, {non li perdonare}. The negation {non} breaks the fusion.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Tu} and {Lei}'),
      text: T(
        'The imperative marks formality by shape: {parla} with someone you know, {parli} with someone you do not, {parlate} with a group. And the pronoun {mi} can come after the verb, as in {mi dica}, which changes the tone once more.',
      ),
    },
    {
      label: T('One negation or two'),
      text: T(
        'Greek has a single negation (μη) and Italian has two, because Italian has two forms of address. Anyone translating from Greek into Italian has to choose between {non parlare} and {non parli}, and the choice is not about sense: it is about the relation to the hearer.',
      ),
    },
  ],
  examples: [
    { text: 'Parla!', gloss: T('Speak!') },
    { text: 'Non parlare!', gloss: T('Do not speak!') },
    { text: 'Legga il Vangelo.', gloss: T('Read the Gospel.') },
    { text: 'Amatevi gli uni gli altri.', gloss: T('Love one another.') },
    { text: 'Padre, perdonali.', gloss: T('Father, forgive them.') },
    { text: 'Perdonate i nostri debiti.', gloss: T('Forgive our debts.') },
    { text: 'Non ci abbandonare.', gloss: T('Do not forsake us.') },
    { text: 'Andiamo!', gloss: T('Let us go!') },
  ],
  tables: [
    {
      caption: T('Imperativo por persona'),
      head: ['Persona', 'Imperativo', 'Negazione'],
      rows: [
        ['tu', 'parla', 'non parlare'],
        ['lei', 'parli', 'non parli'],
        ['noi', 'parliamo', 'non parliamo'],
        ['voi', 'parlate', 'non parlate'],
      ],
    },
    {
      caption: T('Imperativo irregolare'),
      head: ['Infinitivo', 'tu', 'lei'],
      rows: [
        ['dire', 'dì', 'dica'],
        ['fare', 'fa', 'faccia'],
        ['leggere', 'leggi', 'legga'],
        ['sapere', 'sai', 'sappia'],
        ['potere', 'puoi', 'possa'],
        ['venire', 'vieni', 'venga'],
      ],
    },
  ],
};

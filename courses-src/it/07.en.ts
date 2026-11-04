import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('The congiuntivo and the pronouns'),
  subtitle: T('che parli; Dio ti ama'),
  section: T('The past and the reading'),
  body: C(`## The congiuntivo is not only about desire

The Italian congiuntivo **does not mean only** "subjective" or "desire". It appears after emotion, {sono contento che tu vada}; after doubt, {non credo che sia qui}; after command and exhortation, {ti prego di venire}; and after connectives such as {affinché} ("so that"), {perché} ("because") and {sebbene} ("although").

The practical rule fits in one line: if the clause has a subject different from the main one, the congiuntivo is the normal thing. In {voglio che tu vada}, the one who wants is one person and the one who goes is another. When the subject is the same, spoken Italian moves between indicative and congiuntivo more freely than the rule prescribes, and the speaker does not feel the tension between the two.

## The formation is easier than it looks

The present congiuntivo **swaps the final ending** of the infinitive for the matching present ending: {parlare} → {parli}, {leggere} → {legga}, {finire} → {finisca}. Compared with the present indicative it is the same switch; the difference lies in the irregular verbs, which change too: {essere} → {sia}, {avere} → {abbia}, {fare} → {faccia}, {andare} → {vada}, {dare} → {dia}, {sapere} → {sappia}.

That is why {so che lui è qui} (indicative, certainty) differs from {so che lui sia qui} (congiuntivo, report). The noun is the same; what changes is how much the speaker takes as true.

## The pronouns are few and they stick

The simple pronouns are {mi}, {ti}, {si}, {lo}, {la}, {li}, {le}, {ci}, {vi}, {ne}. **All of them come before the verb**, and {lo}, {la}, {li}, {le} may come after. In {Dio ti ama}, {ti} means "to you" and comes before the verb.

Reflexive {si} deserves attention: {si} is reflexive only when the action falls on the subject. In {lui si lava}, "he washes himself"; in {Maria si è vestita}, it can be reflexive ("Maria dressed") or passive ("Maria was dressed"). The speaker knows which of the two happened, and the sentence alone does not say.

## In the Bible

{Sia santificato il tuo nome}, from the Lord’s Prayer, is a congiuntivo of desire. The form {è} there would be an error: {è santificato il tuo nome} would be news about a finished fact, and the verse would stop being a request. The same goes for {Venga il tuo regno} and {Sia fatta la tua volontà}: the three central petitions of the Lord’s Prayer are in the congiuntivo, and it is no accident, because a petition is by definition what one wants and does not yet have.

## Reading criterion

If the main clause has a verb of emotion, doubt or command, expect the congiuntivo. If you see {sia}, {abbia}, {faccia}, {vada}, it is congiuntivo; and if the sentence is a wish or a report, the translation needs it. If you see {so che} followed by an indicative, do not correct it: certainty is assertion, and asserting is the opposite of supposing.`),
  vocab: [
    V('parli', 'parlare', 'you speak (subj.)'),
    V('sia', 'essere', 'may be (subj.)'),
    V('abbia', 'avere', 'may have (subj.)'),
    V('vada', 'andare', 'may go (subj.)'),
    V('venga', 'venire', 'may come (subj.)'),
    V('ti', 'ti', 'to you'),
    V('ci', 'ci', 'to us'),
    V('ne', 'ne', 'of it/of them'),
    V('che', 'che', 'that (conjunction)'),
    V('affinché', 'affinché', 'so that'),
    V('perché', 'perché', 'because'),
    V('sebbene', 'sebbene', 'although'),
    V('voglio', 'volere', 'I want'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: Sia santificato ___ nome (your)'),
    answer: 'il tuo',
    hint: T('Article + possessive.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which sentence uses the congiuntivo correctly?'),
      options: [
        T('Spero che Dio ___ buono.'),
        T('Spero che Dio è buono.'),
        T('So che Dio ___ buono.'),
        T('Penso che Dio va buono.'),
      ],
      answer: 0,
      hint: T('Spero asks for the congiuntivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: Dio ___ ama (ti)'),
      answer: 'ti',
      hint: T('Object pronoun.'),
    },
    {
      kind: 'choose',
      prompt: T('Which form means "may have" in the congiuntivo?'),
      options: [T('ha'), T('abbia'), T('abbia avuto'), T('avrebbe')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'After emotion, doubt, command or purpose the verb goes in the congiuntivo: {sono contento che tu vada}, {non credo che sia qui}.',
      ),
    },
    {
      n: '2',
      text: T(
        'With a subject different from the main one the congiuntivo is the norm: {voglio che tu vada}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The formation swaps the final ending of the infinitive: {parlare} → {parli}, {leggere} → {legga}, {finire} → {finisca}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The irregular congiuntivo forms are {sia}, {abbia}, {faccia}, {vada}, {dia} and {sappia}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{So che} stays in the indicative and {penso che} goes in the congiuntivo: {so che è qui} against {penso che sia qui}.',
      ),
    },
  ],
  notes: [
    {
      label: T('What {che} changes'),
      text: T(
        'The difference between {so che lui è qui} and {so che lui sia qui} is how much the speaker takes as true. In the first, {è} is assertion; in the second, {sia} is what is thought. The structure is the same, and it is the verb that carries the value.',
      ),
    },
    {
      label: T('{Sia}, and not {è}'),
      text: T(
        '{Sia santificato il tuo nome} is a congiuntivo of desire. If {è santificato} had come instead, the sentence would be a statement about a finished fact, and the petition of the Lord’s Prayer would turn into news. The same argument covers {venga il tuo regno}.',
      ),
    },
  ],
  examples: [
    { text: 'Non credo che sia qui.', gloss: T('I do not believe he is here.') },
    { text: 'Spero che Dio sia buono.', gloss: T('I hope God is good.') },
    { text: 'Voglio che tu vada.', gloss: T('I want you to go.') },
    { text: 'Ti prego di venire.', gloss: T('I beg you to come.') },
    { text: 'So che lui è qui.', gloss: T('I know he is here.') },
    { text: 'So che lui sia qui.', gloss: T('I know he ought to be here.') },
    { text: 'Sia la tua volontà.', gloss: T('Thy will be done.') },
    { text: 'Dio ci ama.', gloss: T('God loves us.') },
  ],
  tables: [
    {
      caption: T('Presente del congiuntivo'),
      head: ['Persona', '-are (parlare)', '-ere (leggere)', '-ire (finire)', 'irregolari'],
      rows: [
        ['io', 'parli', 'legga', 'finisca', 'sia'],
        ['tu', 'parli', 'legga', 'finisci', 'abbia'],
        ['lui/lei', 'parli', 'legga', 'finisca', 'vada, dia'],
        ['noi', 'parliamo', 'leggiamo', 'finiamo', '—'],
        ['voi', 'parliate', 'leggiate', 'finiate', '—'],
        ['loro', 'parlino', 'leggano', 'finiscano', '—'],
      ],
    },
    {
      caption: T('What triggers the congiuntivo'),
      head: ['Frase', 'Verbo', 'Modo'],
      rows: [
        ['sono contento che tu vada', 'vada', 'congiuntivo'],
        ['non credo che sia qui', 'sia', 'congiuntivo'],
        ['affinché venga', 'venga', 'congiuntivo'],
        ['ti prego di venire', 'venire', 'infinitivo'],
        ['so che è qui', 'è', 'indicativo'],
      ],
    },
  ],
};

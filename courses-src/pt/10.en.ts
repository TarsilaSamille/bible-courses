import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Pronouns and placement'),
  subtitle: T('me, te, o, lhe'),
  section: T('Pronouns'),
  body: C(`## Clitic pronouns: the rule and the exception

The clitic pronouns mark object, direction or complement: me, te, o/a, nos, vos, lhe, se. In Brazilian Portuguese they normally come before the verb: {me dá}, {não me viu}, {me contou}. In European Portuguese they may come after: {dá-me}, {viu-me}.

The two positions are called **proclisis** (before) and **enclisis** (after), and the choice is not random: in a sentence with a negative, with a question, or in certain subordinate clauses, proclisis is practically obligatory. {Não me viu} and not {não viu-me}; {Quem me viu?} and not {Quem viu-me?}. In other words, in the contexts that matter most in a biblical text — question and negation — the position is already decided.

## What changes after -r, -s, -z

The system has one exception per verb form: after a verb ending in -r, -s, -z, the {o/a} becomes {lo/la} and may move to the end: {amá-lo}, {vê-lo}, {fazê-lo}. That is why {lo/la} is the typical Portuguese form with a direct transitive verb ending in -r.

The rule has exceptions worth memorising: the infinitive ending in -r keeps the {o} — {para amá-lo} — and so does the gerund. What does not change is the noun: {dar o livro} and {dar-lhe o livro} are different things, and the second carries both pronouns.

## lhe: indirect, and no substitute

lhe is the indirect pronoun: {Deus lhe deu} means "God gave to him". It does not replace the direct object, which is why {lhe dar o livro} is wrong — the correct form is {dar-lhe o livro}, with the direct object {o livro} explicit.

In older and biblical Portuguese, {lhe} can also carry the sense of to and from: {lhe peço}, {retira-lhe o coração}. Hebrew uses a dative suffix (-lô) and a genitive, and these forms correspond to that resource — like the person dative of Italian (lesson 11). The plural of {lhe} is lhes: {Deus lhes deu} "God gave to them".

## Mesoclysis exists, it is rare, and it is biblical

{dir-me-ás} is **mesoclysis**: the pronoun appears between two parts of the verb ({dir} + {me} + {ás}). It is the oldest and most literary form, and it shows up in the Bible in archaic Portuguese and in older translations. Nobody speaks that way; everybody understands it when they see it.

## Reading criterion

With any pronoun, ask three questions: is it clitic (me, te, se) or full (eu, tu, ele)? Is it direct ({o livro}) or indirect ({a ele})? And is it before (proclisis) or after (enclisis)? If you can answer all three, the pronoun is settled. The rest is stylistic convention, and context decides.`),
  vocab: [
    V('me', 'me', 'me'),
    V('te', 'te', 'you'),
    V('o', 'o', 'him; it'),
    V('lhe', 'lhe', 'to him/her'),
    V('nos', 'nos', 'to us'),
    V('amá-lo', 'amar', 'to love him'),
    V('fi-lo', 'fazer', 'to do it'),
    V('dizendo-lhe', 'dizer', 'telling him'),
    V('dir-me-ás', 'dizer', 'you will tell me'),
    V('vê-lo', 'ver', 'to see him'),
    V('dá-me', 'dar', 'give me (enclitic)'),
    V('lo', 'o', 'him, it (masculine object)'),
    V('consigo', 'consigo', 'with oneself (reflexive)'),
    V('Deus', 'Deus', 'God'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: “amar + o” = ____.'),
    answer: 'amá-lo',
    hint: T('O becomes lo after r.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('In “God gave him”, lhe is:'),
      options: [T('direct object'), T('indirect object'), T('subject'), T('adverb')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Which is the most common Brazilian form?'),
      options: [T('give me'), T('give me'), T('give me'), T('to give me')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match pronoun and function.'),
      pairs: [
        { a: T('me'), b: T('direct object') },
        { a: T('to him'), b: T('indirect') },
        { a: T('with oneself'), b: T('reflexive') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'The unstressed pronoun comes before the verb in Brazilian Portuguese ({me dá}) and may come after in European and literary Portuguese ({dá-me}). With negation or interrogation proclisis is obligatory: {não me viu}, {Quem me viu?}, and not {não viu-me}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'After a verb in {-r}, {-s} or {-z}, {o} becomes {lo} and {a} becomes {la}: {amá-lo}, {vê-lo}, {fazê-la}. The infinitive in {-r} is the exception, because it already ends in {o}: {para amá-lo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{lhe} is indirect and does not replace the direct object: {Deus lhe deu a lei} is right, and {lhe dar o livro} is not, because the object {o} disappears. The plural of {lhe} is {lhes}: {Deus lhes deu}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{consigo}, {contigo}, {conosco} and {convosco} never attach to the verb: {con} becomes {com} and the form is always separate. It is the exception in the system that no cliticization rule reaches.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{dar-lhe o livro} carries both pronouns: {dar} + {lhe} + {o}. {Dá-lho} fuses {lhe} and {o} into {lho} in a single word, and it is the form archaic biblical Portuguese uses.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dialect and style'),
      text: T(
        '{me dá} is not wrong: it is Brazilian standard. {Dá-me} is traditional in Portugal and in literary writing, and it is the form archaic Bible translation preserves.',
      ),
    },
    {
      label: T('The Greek dative'),
      text: T(
        '{lhe} corresponds to the Greek dative ({δίδω + ἡμῖν}) and to the Hebrew suffix {-לֹ}. Where biblical Portuguese writes {a nós} or {para nós}, it is the dative of the original that the translator is expressing with a preposition.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus lhe deu a lei.',
      gloss: T('{lhe} indirect, {a lei} the explicit direct object.'),
    },
    { text: 'Deus lhes deu a lei.', gloss: T('The plural of {lhe} is {lhes}.') },
    { text: 'Ele me contou tudo.', gloss: T('Proclisis: the pronoun before the verb.') },
    { text: 'Contou-me tudo.', gloss: T('Enclisis: same function, other order.') },
    { text: 'Não me viu chegar.', gloss: T('With negation, proclisis is obligatory.') },
    { text: 'Quem me viu?', gloss: T('With interrogation, proclisis too.') },
    { text: 'Vi-o na rua.', gloss: T('After {-r}, {o} becomes {lo}.') },
    { text: 'Queria vê-lo.', gloss: T('The infinitive in {-r} keeps the {o} of {vê-lo}.') },
    { text: 'Fale comigo.', gloss: T('{comigo} never attaches to the verb.') },
  ],
  tables: [
    {
      caption: T('Proclisis, enclisis and mesoclisis'),
      head: ['Contexto', 'Brasil', 'Portugal / literário'],
      rows: [
        ['afirmativo', 'me dá', 'dá-me'],
        ['negativo', 'não me viu', 'não me viu'],
        ['interrogativo', 'Quem me viu?', 'Quem me viu?'],
        ['antigo', 'me dirás', 'dir-me-ás'],
      ],
    },
    {
      caption: T('What changes after {-r}, {-s}, {-z}'),
      head: ['Verbo', 'Sem clítico', 'Com clítico'],
      rows: [
        ['amar', 'amar o livro', 'amá-lo'],
        ['ver', 'ver a casa', 'vê-la'],
        ['fazer', 'fazer o pão', 'fazê-lo'],
      ],
    },
    {
      caption: T('Pronouns that do not attach'),
      head: ['Forma', 'Vem de', 'Por que não gruda'],
      rows: [
        ['consigo', 'com + sigo', 'o {con} vira {com}'],
        ['conosco', 'com + nós', 'idem'],
        ['convosco', 'com + vós', 'idem'],
      ],
    },
  ],
};

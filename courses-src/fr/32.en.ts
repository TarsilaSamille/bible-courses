import { C, T, V } from '../shared.mts';

export default {
  id: 32,
  title: T('Indefinite pronouns'),
  subtitle: T('quelqu’un, personne, rien, tout — and the French hiding behind them'),
  section: T('Consolidation'),
  body: C(`## Who? Something? Nothing? Everything?

Indefinite pronouns stand in for a noun too vague to be named. The positive-negative pair is the backbone of this chapter: **{quelqu’un}** is «someone», **{quelque chose}** «something», and their opposites are **{personne}** «nobody» and **{rien}** «nothing». Notice the asymmetry: Portuguese and Spanish can say "nobody" in a single negative, but French insists on {Je ne vois personne} — the {ne} is part of the written form, and the verb is conjugated negatively as well.

In everyday speech the {ne} disappears: {je vois pas}, {y a rien}. Even so, in writing, use the full form.

## Tout: the indefinite that changes shape

{tout} means «everything» and works as an adverb in many expressions ({Tout est possible}, "everything is possible"). With an article it becomes an adjective and agrees: {tous}, {toutes}. In {tous priaient}, "all prayed", the noun is simply left out: the pronoun alone fills the subject slot. As an attribute, though, {tout} is **invariable**: {le monde tout entier} = "the whole world", with no *toute*.

There is also a common, non-indefinite {tout}: in {chacun son don} — {chacun} is "each" and {son} is a possessive, with a distributive sense: "each with their own gift". French has a single word for this, {chacun}, with no plural.

## On, l'autre, aucun

{on} means impersonal "one" / "people": {On parle français} — "French is spoken". In {On a construit ce pont}, the subject is a generic human being, almost always a passive "one". It is the spoken alternative to {il est construit}.

{l'autre} is "the other" and needs its noun: {l'autre homme}, {l'autre jour}. The noun is obligatory, except when {l'autre} means "the others" in general.

{aucun} is "no, not a single" and negates more strongly than {pas de}: {Je n'ai aucun courage} — "I have no courage at all". And in the fixed combination: {ne... aucun} never carries the affirmative sense of "any", unlike {ne... pas}, which admits it in sentences like {Je ne demande pas de prix}.

## What to carry into the reading chapters

Almost every clause you meet in the reading chapters contains an indefinite. {Père nostre qui êtes aux cieux} is a relative; {Donnez-nous aujourd'hui notre pain} carries the possessive {notre}; {Pardonne-nous nos offenses} carries the indirect object {nous}. None of them is indefinite — and that is precisely the point. The indefinite names the *content*: the one who receives, the thing, the quantity. When the speaker does not know who or what, French never invents: it writes {quelqu'un} or {personne}.`),
  vocab: [
    V('quelqu’un', 'quelqu’un', 'someone (indefinite pronoun)'),
    V('quelque chose', 'quelque chose', 'something'),
    V('personne', 'personne', 'nobody (also «person»)'),
    V('rien', 'rien', 'nothing'),
    V('tout', 'tout', 'all, everything (invariable as attribute)'),
    V('tous', 'tout', 'all (masculine plural)'),
    V('toutes', 'tout', 'all (feminine plural)'),
    V('chacun', 'chacun', 'each (no plural; distributive)'),
    V('aucun', 'aucun', 'no, not a single (stronger than pas de)'),
    V('plusieurs', 'plusieurs', 'several, many (always plural)'),
    V('quelques', 'quelque', 'some (plural of quelques)'),
    V('chose', 'chose', 'thing (feminine, almost always with quelque)'),
    V('on', 'on', 'one, people (impersonal; generic)'),
    V('l’autre', 'autre', 'the other, the others'),
    V('ni', 'ni', 'nor (in ni…ni)'),
    V('autre', 'autre', 'other (attributive); else (de autre(s))'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Je ne vois personne}, why does the written form require {ne}?'),
    options: [
      T('Because {personne} is already negative: {ne} merely marks negation formally'),
      T('Because {ne} turns the sense affirmative, as in {ne… pas}'),
      T('Because the verb needs {ne} in the plural'),
      T('Because {personne} requires the subjunctive'),
    ],
    answer: 0,
    hint: T('The {ne} is the family «not» in {ne… personne}, {ne… rien}, {ne… aucun}.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: {Le monde ___ entier} — attributive {tout} is invariable.'),
      answer: 'tout',
      hint: T('Only when {tout} takes an article does it agree: {tous}, {toutes}.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses {chacun} in the distributive sense of «each with their own»?'),
      options: [
        T('{Chacun son don}, each with their own gift'),
        T('{Chacun des enfants}, each of the children'),
        T('{Chacun a mangé une pomme}, each ate an apple'),
        T('{Chacun, enfin}, each one, finally'),
      ],
      answer: 0,
      hint: T('The distributive requires a singular possessive ({son}, {sa}, {ses}) right after.'),
    },
    {
      kind: 'match',
      prompt: T('Match the indefinite form to what it stands for'),
      pairs: [
        { a: T('on'), b: T('impersonal «one», generic agent') },
        { a: T('personne'), b: T('zero persons, with ne obligatory in writing') },
        { a: T('tout'), b: T('the whole, adverb or invariable attribute') },
        { a: T('chacun'), b: T('each one, distributive, without plural') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        'How many person-names are there in {Je ne vois personne et rien du tout}? Answer with a number: ___',
      ),
      answer: '1',
      hint: T('Count who is named, not how many clauses there are.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The negative indefinites {personne}, {rien} and {aucun} **are already negative**: a second negative never appears. {Je ne vois personne}, never *{ne… pas personne}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ne} is obligatory in writing with {personne}, {rien}, {aucun} and {jamais}, but {pas} is left out: {Je ne mange rien}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{tout} agrees ({tous}, {toutes}) when it replaces a noun, but is invariable when it qualifies one: {le monde tout entier}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{chacun} has no plural and distributes with a singular possessive: {chacun son choix}, «each with their own choice».',
      ),
    },
    {
      n: '5',
      text: T(
        '{aucun} always negates, even in negative sentences: {Il n’a aucun travail}, «he has no work at all». With {personne} and {rien} the negation is already inside the word.',
      ),
    },
  ],
  notes: [
    {
      label: T('French has no generic indefinite pronoun'),
      text: T(
        'English *someone* can be generic (*Someone should call the police*). French cannot: {quelqu’un} demands an actual person, and the generic is made with {on} or with a plural noun ({Des visiteurs attendent}, "visitors are waiting"). That is why {Quelqu’un a frappé} sounds like news: somebody did knock.',
      ),
    },
    {
      label: T('Before the reading: which pronouns you will meet'),
      text: T(
        'In the {Père Notre-Dame} and the {Symbole des Apôtres}, indefinites are rare and modest: {quelque chose}, {personne}, {tout le monde}. What dominates are the **relatives** ({qui}, {que}, {dont}) and the **possessives** ({notre}, {nos}). Keep that distinction in mind: a solemn French text repeats the same pronouns, and what varies is the verbs. So when you read, begin by mentally expanding the pronouns into the full phrase — and remember the verb, which is never a stray word, always stands right after its subject.',
      ),
    },
  ],
  examples: [
    { text: 'Je ne vois personne', gloss: T('I see nobody') },
    { text: 'Il ne dit rien', gloss: T('he says nothing') },
    { text: 'Tout est possible', gloss: T('everything is possible') },
    { text: 'Tous priaient', gloss: T('all prayed (the noun is left out)') },
    { text: 'le monde tout entier', gloss: T('the whole world (tout invariable)') },
    { text: 'chacun son don', gloss: T('each with their own gift') },
    { text: 'on parle français', gloss: T('French is spoken (on = impersonal one)') },
    { text: 'je n’ai aucun courage', gloss: T('I have no courage at all') },
    { text: 'ne… pas de prix', gloss: T('I ask for no reward (affirmative sense)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The negative indefinite pair'),
      head: [T('Form'), T('Person'), T('Things'), T('Example')],
      rows: [
        [T('positive'), T('quelqu’un'), T('quelque chose'), T('I saw someone')],
        [T('negative'), T('personne'), T('rien'), T('I saw nothing')],
        [T('with ne'), T('personne'), T('rien'), T('He speaks to nobody')],
        [T('generic'), T('chacun'), T('tout'), T('Each their own way')],
      ],
    },
    {
      caption: T('Table 2 — {tout} in four functions'),
      head: [T('Function'), T('Form'), T('Sentence'), T('Portuguese')],
      rows: [
        [T('adverb'), T('tout'), T('Everything is possible'), 'tudo é possível'],
        [T('pluralised subject'), T('tous / toutes'), T('All prayed'), 'todos rezavam'],
        [T('attribute'), T('tout (invariable)'), T('the whole world'), 'o mundo todo'],
        [T('fixed time'), T('tout'), T('at once'), 'logo, imediatamente'],
      ],
    },
  ],
};

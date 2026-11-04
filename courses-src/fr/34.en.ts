import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T("Reading: the Lord's Prayer"),
  subtitle: T('Verse by verse, with the grammar explained'),
  section: T('Reading'),
  body: C(`## The text (Mariepillar)

> **Notre Père qui êtes aux cieux,**
> **que votre nom soit sanctifié,**
> **que votre règne vienne,**
> **que votre volonté soit faite sur la terre comme au ciel.**
> **Donnez-nous aujourd'hui notre pain.**
> **Pardonne-nous nos offenses, comme nous les pardonnons aussi à ceux qui nous offensent.**
> **Et ne nous induisez pas en tentation, mais délivrez-nous du mal.**
> **Car c'est à vous qu'appartiennent le règne, la puissance et la gloire, maintenant et pour toujours. Amen.**

## The shape of the text

There are seven petitions, and French grammar distributes itself across them: three **subjunctives** (vv. 2-4), one **imperative** (vv. 5-7), one **attribution** (v. 8) and a doxology (v. 9). Reading this prayer is reviewing every verb chapter at once.

## {Notre Père qui êtes aux cieux}

Two things in a single phrase. **{Notre}** is a possessive doing the work of an article: it does not render "our father" but **"the father who is ours"**, "our Father". And **{qui êtes aux cieux}** is a **relative clause**: the antecedent is {Père} (masculine singular), the relative {qui} is the subject of {êtes}, and the verb has risen to the second person plural, with the Paris {vous} — the only spot in the text where the polite form meets the singular. The effect is lovely: "Father who is ours, up there".

{aux cieux} uses {à} + noun with no article: {à Rome}, {à la maison}, {aux enfants}. The absence of the article is obligatory after {à} in the prepositions of static place.

## {Que votre nom soit sanctifié}

The first **subjunctive**: {soit}, present of {être} in the third person. A French verb following a purposive {que} is always subjunctive — {Je veux que tu viennes}, {Il faut qu'elle parte}. Note that the {que} here is a **relative pronoun**: {votre nom} is the direct object of {sanctifié}, so the relative {que} stands in for that object. There is no preposition.

The same mechanism returns in {que votre règne vienne} (v. 3) and {que votre volonté soit faite} (v. 4).

## {Que votre volonté soit faite sur la terre comme au ciel}

Here the construction is subtler. {soit faite} is a **passive** — auxiliary {être} plus participle, exactly the system of chapter 21. The subject {votre volonté} comes **after** the verb, which is impossible in Portuguese but natural in French, where the indirect object precedes the conjugated verb: {Je donne ce livre **à mon frère**}.

**{comme}** introduces an equality comparison: "just as", "like". And the asymmetry is deliberate: on earth "as in" heaven — heaven is the measure, earth is the attempt.

## {Donnez-nous aujourd'hui notre pain}

Here the verb is **imperative**, second person plural: {donnez}, just like {parlez}, {regardez}. The {ne… pas} negation is compulsory in the imperative — {ne… induisez pas} (v. 7) — because the subject is the second person {vous}.

The two indirect pronouns sit to the left of the verb: **{nous}** (to whom) and **{notre}** (from whom) — {notre} is the possessive form, called for by the definite article. {aujourd'hui} with no article is an adverb of time: "today", carrying the sense of "today's bread", the manna of the wilderness.

## {Pardonne-nous nos offenses}

Watch the trinity of the clause: {Pardonne} (imperative) + **{nous}** (to whom we forgive) + **{nos}** (what we forgive: our trespasses) + **{offenses}** (complement of the noun). {nos} is the **positive partitive pronoun**, the same one as in {j'ai des livres} — here partitive in the sense of "what has wronged us".

The second half carries the longest comparison in the text: **{comme nous les pardonnons aussi à ceux qui nous offensent}**. Three points: {les} is an indirect pronoun picking up {nos offenses}; {ceux qui} is the demonstrative pronoun {ceux} plus a relative {qui}, meaning "those who"; {aussi} adds "also" with emphasis.

## {Et ne nous induisez pas en tentation}

The verb {induire} takes the preposition **{en}**: {induire en tentation}, "to lead into temptation", "to put to the test". The opening {Et} links the two halves of the verse. In literal translation the preposition vanishes: {Ne nous induisez pas en tentation} = "Let us not be led into temptation".

{ mais délivrez-nous du mal} — the second half is an **alternative proposition**, with the verb again in the imperative. {délivrez} comes from {délivrer}, with the preposition {de}.

## {Car c'est à vous qu'appartiennent le règne, la puissance et la gloire}

The last verse is a doxology, and it brings three constructions you have already met.

**{c'est à vous que…}** — the **broken corrective**: {c'est} opens the clause and {que} lifts the rest. Rendered as "it is to you that it belongs". Note the strong pronoun {vous} — the same one as the imperative.

**{appartiennent}** is third person plural: the subject is {le règne, la puissance et la gloire}, which comes **after**. Portuguese would say "belongs to you the kingdom"; French prefers to postpone the subject when it is long.

**{maintenant et pour toujours}** is an adverbial phrase: {maintenant} ("now") and {pour toujours} ("for ever"), with prepositional {pour} + a substantival infinitive. A phrase of the same shape is {de nos jours}, "of our days".

## What to take away

You read an entire solemn text and met: a relative ({qui êtes}), a subjunctive ({soit sanctifié}), a passive ({soit faite}), an imperative ({Donnez}), a double indirect pronoun ({nous… notre}), a partitive ({nos offenses}), demonstrative + relative ({ceux qui}), the broken corrective ({c'est à vous que}), and a postponed subject ({appartiennent le règne}). None of this is decorative grammar: it is exactly the apparatus of biblical text, and the {Père Notre-Dame} is, linguistically, one of the densest pages in the language.`),
  vocab: [
    V('Notre Père', 'père', 'our Father'),
    V('qui êtes', 'être', 'who are (relative + 2nd pl.)'),
    V('aux cieux', 'ciel', 'in heaven (à + the)'),
    V('sanctifié', 'sanctifier', 'hallowed (past participle)'),
    V('soit', 'être', 'may it be (pres. subj. 3rd sg.)'),
    V('veuillez', 'vouloir', 'may (polite present form)'),
    V('régne', 'règne', 'kingdom, reign (also the verb)'),
    V('volonté', 'volonté', 'will (feminine)'),
    V('terre', 'terre', 'earth'),
    V('comme', 'comme', 'as, just as'),
    V('Donnez', 'donner', 'give (2nd pl. imperative)'),
    V("aujourd'hui", "aujourd'hui", 'today (article-less adverb)'),
    V('Pardonne', 'pardonner', 'forgive (2nd sg. and 2nd pl. imperative)'),
    V('offenses', 'offense', 'trespasses (complement of the noun)'),
    V('ceux qui', 'ceux', 'those who (demonstrative + relative)'),
    V('délivrez', 'délivrer', 'set free, deliver (imperative of délivrer)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Notre Père qui êtes aux cieux}, what does {qui} do?'),
    options: [
      T('It is the subject of the verb {êtes}, which is second person plural'),
      T('It is the direct object of {Père}'),
      T('It stands for the noun {Père}'),
      T('It marks the vocative, that is, a request for attention'),
    ],
    answer: 0,
    hint: T('Rule §1: relative {qui} = subject; relative {que} = direct object.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the clause: {que votre nom ___ sanctifié} — the verb goes in the subjunctive.',
      ),
      answer: 'soit',
      hint: T('{être} in the present subjunctive, 3rd person: {soit}, {soient}, {soyons}.'),
    },
    {
      kind: 'choose',
      prompt: T(
        "In {Car c'est à vous qu'appartiennent le règne}, where is the subject of the verb?",
      ),
      options: [
        T('After the verb: {le règne, la puissance et la gloire}'),
        T('Before the verb, in {à vous}'),
        T("In {c'est}, the elided pronoun subject"),
        T('In {maintenant}'),
      ],
      answer: 0,
      hint: T('A long subject can be postponed in French: {Le reste du troupeau a primé}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verse to the construction it drills'),
      pairs: [
        { a: T("Donnez-nous aujourd'hui notre pain"), b: T('imperative + two indirect pronouns') },
        {
          a: T('que votre volonté soit faite'),
          b: T('subjunctive passive, with the subject delayed'),
        },
        { a: T('ceux qui nous offensent'), b: T('demonstrative + relative = "those who"') },
        {
          a: T('ne nous induisez pas en tentation'),
          b: T('negative imperative with ne… pas and a verb with a preposition'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        "How many times does the verb {être} appear in the Lord's Prayer text (forms {êtes}, {soit}, {soit})? Answer with a number: ___",
      ),
      answer: '3',
      hint: T('One in each clause: v. 1, v. 2 and v. 4.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Relative {qui} is the subject and {que} the direct object: {le Père qui êtes}, {le nom que sanctifiez}. If the object needs a preposition, the relative becomes {dont} (of), {à qui}, {pour qui}, {où}.',
      ),
    },
    {
      n: '2',
      text: T(
        "A purposive {que} requires the subjunctive: {Je veux que tu viennes}, {il faut qu'elle parte}, {que votre nom soit sanctifié}. With {parce que} (cause), the verb stays indicative.",
      ),
    },
    {
      n: '3',
      text: T(
        'In the imperative, negation is always {ne… pas}, never {pas} alone: {ne donnez pas}, {ne inducissons pas}.',
      ),
    },
    {
      n: '4',
      text: T(
        "The broken corrective {c'est… que} highlights one element: {c'est à vous qu'appartient le trône}. Without {que} it would be {c'est à vous appartient}, which is wrong.",
      ),
    },
    {
      n: '5',
      text: T(
        'The French subject may come **after** the verb when it is long: {appartiennent le règne, la puissance et la gloire}. With a short subject, the normal is fronting: {Dieu aime les hommes}.',
      ),
    },
  ],
  notes: [
    {
      label: T('A French aside: {ainsi soit-il}'),
      text: T(`The French liturgical version adds at the end of v. 4: **«ainsi soit-il»** — "let it be so". It is the mark of the fact that the purposive {que} can end the sentence: the verb {soit} reappears, now without an object. In Latin it was **«sic fiat»**, exactly the same idea: the closing formula is a declared wish.

The second curiosity is the missing article before {Père}: Portuguese would also say «pai nosso» without an article, and French does the same — but note that the {Notre} does the article's work. French has no implied «du» of the Portuguese kind.`),
    },
    {
      label: T('Why {à vous} and not {pour vous}'),
      text: T(`The final verse is an **attribution**: the kingdom "belongs" to God, and the French preposition expressing belonging is {à}. Hence *{c'est à vous qu'appartiennent}*. With {pour} the sense would shift to "for the sake of", and the text would say that the kingdom exists *for* God, which is different theology.

That same {à} recurs throughout the text with a recipient value: {à ceux qui nous offensent}, {Donnez-nous}, {Pardonne-nous}. It is the most constant mark of the prayer: almost every transitive verb carries a hidden {à}.`),
    },
  ],
  examples: [
    {
      text: 'Notre Père qui êtes aux cieux',
      gloss: T('Our Father, who art in heaven (relative {qui} = subject)'),
    },
    {
      text: 'que votre nom soit sanctifié',
      gloss: T('that your name may be hallowed (subjunctive)'),
    },
    { text: 'que votre règne vienne', gloss: T('that your kingdom may come') },
    {
      text: 'soit faite sur la terre comme au ciel',
      gloss: T('may it be done on earth as in heaven (passive + comparison)'),
    },
    {
      text: 'Donnez-nous aujourd’hui notre pain',
      gloss: T('give us today our bread (imperative + two indirect objects)'),
    },
    { text: 'Pardonne-nous nos offenses', gloss: T('forgive us our trespasses (partitive {nos})') },
    {
      text: 'comme nous les pardonnons',
      gloss: T('as we also forgive them (comparison + indirect pronoun {les})'),
    },
    { text: 'ceux qui nous offensent', gloss: T('those who offend us (demonstrative + relative)') },
    {
      text: 'ne nous induisez pas en tentation',
      gloss: T('lead us not into temptation (negative imperative)'),
    },
    {
      text: 'c’est à vous qu’appartiennent le règne',
      gloss: T('it is to you that the kingdom belongs (broken corrective, delayed subject)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The seven petitions and their grammar'),
      head: [T('Verse'), T('French clause'), T('Construction')],
      rows: [
        [T('1'), T('Notre Père qui êtes aux cieux'), T('relative {qui} + article-like possessive')],
        [T('2'), T('que votre nom soit sanctifié'), T('subjunctive + relative {que} as object')],
        [T('3'), T('que votre règne vienne'), T('subjunctive of motion ({venir})')],
        [
          T('4'),
          T('que votre volonté soit faite sur la terre'),
          T('passive + comparative {comme}'),
        ],
        [
          T('5'),
          T("Donnez-nous aujourd'hui notre pain"),
          T('imperative + {nous} and {notre} indirect objects'),
        ],
        [T('6'), T('Pardonne-nous nos offenses'), T('partitive {nos} + {ceux qui}')],
        [
          T('7'),
          T('Et ne nous induisez pas… mais délivrez-nous'),
          T('negative imperative + coordination with {mais}'),
        ],
        [
          T('9'),
          T("Car c'est à vous qu'appartiennent le règne"),
          T("{c'est… que} + postponed subject"),
        ],
      ],
    },
    {
      caption: T('Table 2 — The same verb in four functions'),
      head: [T('Occurrence'), T('Form'), T('Tense and mood'), T('Portuguese')],
      rows: [
        [T('v. 1, relative'), T('êtes'), T('present indicative, 2nd pl.'), T('are')],
        [T('v. 2, purposive {que}'), T('soit'), T('present subjunctive, 3rd sg.'), T('may be')],
        [T('v. 4, purposive {que}'), T('soit'), T('present subjunctive, 3rd sg.'), T('may be')],
        [T('v. 4, purposive {que}'), T('faite'), T('past participle, with {être}'), T('done')],
      ],
    },
  ],
};

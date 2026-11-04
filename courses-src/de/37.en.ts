import { C, T, V } from '../shared.mts';

export default {
  id: 37,
  title: T("Commented reading: the Lord's Prayer in Luther's translation"),
  subtitle: T('Subjunctive, imperative and the dative of request'),
  section: T('Reading'),
  body: C(`## The text

> **Unser Vater im Himmel, geheiligt werde dein Name.**
> **Dein Reich komme. Dein Wille geschehe auf Erden wie im Himmel.**
> **Unser tägliches Brot gib uns heute.**
> **Und vergib uns unsere Schuld, wie auch wir vergeben unsern Schuldigern.**
> **Und führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen.**
> **Denn dein ist das Reich und die Kraft und die Herrlichkeit in Ewigkeit. Amen.**

## {Unser Vater im Himmel}

The shortest sentence group of the chapter holds three nouns and a pronoun. {Unser} is a **possessive** and works like an article: that is why {Vater} takes no definite article, and neither of the two declines ({unser} stays the same in every case). {im Himmel} is {in} + {dem} + {Himmel}, with the dative governed by {in}: «in heaven».

Notice the **retreat of the parents**: {Unser Vater} is the subject of the clause, and {im Himmel} comes after it like an apposition. If the sentence had continued, the subject slot would already be spent: whatever follows is what takes the second position. That is why {geheiligt} opens a new clause, and that clause **inverts** everything.

## {geheiligt werde dein Name}

This is the most thoroughly Christian shape a sentence can take in German: the **passive imperative**. Instead of «sanctify your name», German says literally «your name be sanctified». The form is {werde} (the indicative of {werden}) plus {geheiligt} (the participle of {heiligen}), with the verb **inverted** into first position.

Note that the subject {dein Name} goes to the end: in an inverted clause the subject is mentioned only after the verb. The construction is identical in all three petitions ({Dein Reich komme}, {Dein Wille geschehe}), and that is why the prayer sounds liturgical in every language that translates it.

## {Dein Reich komme}

{komme} is the **subjunctive II** of {kommen}, built on the past stem ({komm-}) plus the ending -e. It does not express doubt: it expresses **request**. Portuguese and Spanish also use the subjunctive after «que», and German does the same with a verb form of its own, without any auxiliary word.

The noun {Reich} is nominative, without an article, with the possessive {Dein}: it is the thing being asked for, and the whole sentence is an example of a postponed direct object — {Dein Reich} is what is requested, so it comes after the verb.

## {Dein Wille geschehe auf Erden wie im Himmel}

The verb {geschehe} is the subjunctive II of {geschehen} (the same Latin -sc- that English «happen» keeps). After it come {auf Erden} ({auf} + dative, «on earth») and the comparison {wie im Himmel} — {wie} introduces a comparison between two **nominatives** and needs no verb at all.

{Erden} is capitalised because it was **substantivised**: an ordinary noun, «earth», used without an article, rises to the status of a proper name. The same happens in {im Himmel}, where {Himmel} is a common noun, but usage with a prepositional article has already frozen it as a name.

## {Unser tägliches Brot gib uns heute}

Here the clause is a **V2 inversion**: the phrase {Unser tägliches Brot} takes the first position and the verb {gib} stands second, in the place of the subject, which disappears because it is already inside the phrase. {gib} is the **imperative** of {geben}, with no particle and no {-st}.

The two pronouns differ in function: {uns} is **dative**, because it is the **recipient** (the one to whom something is given), and {heute} sits last as an adverb. German runs recipient, then thing given, then time; English runs the other way: «give us this day our bread». Translating in German order produces an unreadable sentence.

## {Und vergib uns unsere Schuld}

{vergib} is the imperative of {vergeben} and stands in the second position because {Und} counted as the first constituent. Notice that an initial {und}, in a clause without a subject, works as an ordering element: {Und führe uns nicht…} is a new clause added to the previous one.

{die Schuld} (the debt) is **accusative** — it is the thing that is forgiven — while {uns} is **dative**, the one who is forgiven. That pair of cases is the grammar of the request: **dative for the person, accusative for the thing**.

## {wie auch wir vergeben unsern Schuldigern}

The comparison has {auch} («also»), which stresses the reciprocity: just as we forgive, so you are forgiven. The verb {vergeben} governs the **dative**, so {unsern Schuldigern} is dative — the form {unsern} (not {unsere}) is the dative masculine plural, and {Schuldigern} is dative because of the noun {Schuldiger}.

Someone who translates only as «as we forgive our debtors» loses an important point: German makes it clear that forgiveness is **aimed at someone**, not simply «forgiven».

## {führe uns nicht in Versuchung, sondern erlöse uns von dem Bösen}

Two clauses joined by {sondern}, which **corrects** what was just said. The adverb {nicht} stands right after the verb ({führe uns **nicht**}), while the verb {erlöse} returns to the second position in the second clause: negation and correction keep the parallelism.

{von dem Bösen} is {von} + {dem} + {Bösen}, dative, and {Böse} is the noun {das Böse} substantivised from the adjective {böse} («the evil one»). It is one of the few words that Biblical German inherited intact from Latin: {bonus, malum}.

## {Denn dein ist das Reich}

The possessive dative formula is {dein ist}: literally «the kingdom is yours», with {dein} in the **dative** and the noun in the nominative. English and Portuguese lose that construction almost entirely, which is why the closing line of the prayer is precisely the hardest passage to translate without adjustment.

Three nouns — {das Reich}, {die Kraft}, {die Herrlichkeit} — form an enumeration without internal commas, and {in Ewigkeit} (dative) closes everything. The final {Amen}, a Hebrew word, ends without any verb at all: the prayer stops where the speech stops.

## What to take away

A prayer of seven petitions, and each petition uses a different structure: a possessive as article, the passive imperative, subjunctive II, the dative of recipient, the accusative of the thing forgiven, a comparison without a verb and the possessive dative. Whoever understands the text understands German — not just the cases, but the way each sentence **changes structure** in order to ask the same thing.`),
  vocab: [
    V('der Vater', 'Vater', 'the father (strong plural: Väter)'),
    V('der Himmel', 'Himmel', 'heaven'),
    V('heiligen', 'heiligen', 'to sanctify (strong: geheiligt)'),
    V('das Reich', 'Reich', 'the kingdom'),
    V('der Wille', 'Wille', 'the will (weak: Willen)'),
    V('geschehen', 'geschehen', 'to happen'),
    V('die Erde', 'Erde', 'the earth (plural: Erden)'),
    V('das Brot', 'Brot', 'the bread'),
    V('geben', 'geben', 'to give (imperative: gib)'),
    V('die Schuld', 'Schuld', 'the debt, the guilt'),
    V('vergeben', 'vergeben', 'to forgive (governs dative)'),
    V('der Schuldiger', 'Schuldiger', 'the debtor (weak: Schuldiger)'),
    V('in Versuchung', 'Versuchung', 'into temptation (in + accusative)'),
    V('erlösen', 'erlösen', 'to deliver, to redeem (strong: erlöst)'),
    V('das Böse', 'böse', 'the evil one (from {böse})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Unser tägliches Brot gib uns heute}, what is the function of {uns}?'),
    options: [
      T('Dative of recipient: the person to whom the bread is given.'),
      T('Accusative as direct object, because the bread is what is given.'),
      T('Implicit nominative, the subject of {gib}.'),
      T('Partitive genitive, as in {das Brot uns}.'),
    ],
    answer: 0,
    hint: T('Rule §3: in a request the person is dative and the thing is accusative.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the subjunctive II: Dein Reich ___ (to come).'),
      answer: 'komme',
      hint: T('Rule §2: past stem ({komm-}) plus -e.'),
    },
    {
      kind: 'choose',
      prompt: T('How is {führe uns nicht in Versuchung, sondern erlöse uns} rendered?'),
      options: [
        T('«lead us not into temptation, but deliver us» ({nicht} … {sondern}).'),
        T('«and lead us not into temptation» ({nicht} without correction).'),
        T('«lead us into temptation, but do not deliver us» (inverted {sondern}).'),
        T('«we do not lead into temptation, but to deliverance» (indicative).'),
      ],
      answer: 0,
      hint: T(
        'Rule §4: {sondern} corrects the negation and brings a positive clause with the verb in second position.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the verbal form to its function in the sentence'),
      pairs: [
        { a: T('werde + geheiligt'), b: T('passive imperative') },
        { a: T('komme'), b: T('subjunctive II of request') },
        { a: T('gib'), b: T('imperative without a particle') },
        { a: T('dein ist'), b: T('possessive in the dative') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The imperative of {sein} ({sei}) and of {haben} ({habe}) are **irregular**; the other verbs drop the -en of the infinitive: {geben} → {gib}, {vergeben} → {vergib}. No particle, no {-st} in the second person.',
      ),
    },
    {
      n: '2',
      text: T(
        'The subjunctive II is built on the past stem ({komm-}, {führ-}) plus -e, or on the past form plus -te: {wäre}, {hätte}, {käme}. It expresses request, wish and hypothesis, not doubt.',
      ),
    },
    {
      n: '3',
      text: T(
        'In a request, the person who receives is **dative** and the thing requested is **accusative**: {gib uns das Brot}, {vergib uns die Schuld}. Swapping the two cases swaps the meaning.',
      ),
    },
    {
      n: '4',
      text: T(
        '{nicht} stands between the verb and the rest of the clause ({führe uns **nicht** in Versuchung}); {sondern} corrects the negation and brings a new clause, also with the verb in second position.',
      ),
    },
    {
      n: '5',
      text: T(
        'A possessive can take the place of the noun in the **possessive dative**: {dein ist das Reich}, {mir ist Hilfe}. English has turned this into «is yours», but the rearranged original {dein} stands in the dative.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why the clauses invert the verb'),
      text: T(
        'After {Unser Vater im Himmel} the subject has already been named and the second verbal position stands empty. Instead of repeating {Unser Vater}, the text **inverts**: the verb goes to the front and the subject to the end. That inversion has a practical effect — the first three petitions keep the same rhythmic shape, which makes the prayer sound like a single block. Any translation that uses the direct order loses that music and, with it, part of what the text does to the person praying.',
      ),
    },
    {
      label: T('The 2017 form'),
      text: T(
        'Luther originally wrote {wie wir uns vergeben unsern Schuldigern}, with the reflexive {uns}; the 2017 revision uses {wie auch wir vergeben unsern Schuldigern}, without the pronoun and with {auch}. The change looks small, but it settles an ambiguity: with {uns vergeben} it is unclear whether the group is {uns (to us) + vergeben} or {uns (ourselves) + vergeben}. The new form makes it explicit that the ones who forgive are **we ourselves**, and not somebody on our behalf.',
      ),
    },
  ],
  examples: [
    {
      text: 'Unser Vater im Himmel',
      gloss: T('Our father in heaven (possessive as article, in + dative).'),
    },
    {
      text: 'geheiligt werde dein Name',
      gloss: T('your name be sanctified (inverted passive imperative).'),
    },
    { text: 'Dein Reich komme', gloss: T('your kingdom come (subjunctive II komme).') },
    {
      text: 'Dein Wille geschehe auf Erden wie im Himmel',
      gloss: T('your will be done on earth as in heaven.'),
    },
    {
      text: 'Unser tägliches Brot gib uns heute',
      gloss: T('give us this day our daily bread (V2 inversion, dative).'),
    },
    {
      text: 'Und vergib uns unsere Schuld',
      gloss: T('and forgive us our debts (dative + accusative).'),
    },
    {
      text: 'wie auch wir vergeben unsern Schuldigern',
      gloss: T('as we also forgive our debtors (vergeben + dative).'),
    },
    {
      text: 'Und führe uns nicht in Versuchung',
      gloss: T('and lead us not into temptation ({nicht} next to the verb).'),
    },
    {
      text: 'Denn dein ist das Reich',
      gloss: T('for the kingdom is yours (possessive in the dative).'),
    },
  ],
  tables: [
    {
      caption: T("Table 1 — The seven petitions of the Lord's Prayer"),
      head: [T('Petition'), T('Form'), T('Portuguese')],
      rows: [
        [
          'geheiligt werde dein Name',
          'imperativo passivo invertido',
          'seja santificado o teu nome',
        ],
        ['Dein Reich komme', 'subjuntivo II, objeto posposto', 'venha o teu reino'],
        ['Dein Wille geschehe', 'subjuntivo II + comparação', 'seja feita a tua vontade'],
        ['gib uns heute', 'imperativo, dativo de destinatário', 'dá-nos hoje'],
        [
          'vergib uns unsere Schuld',
          'imperativo, dativo + acusativo',
          'perdoa-nos as nossas dívidas',
        ],
        [
          'führe uns nicht in Versuchung',
          'imperativo negativo com nicht',
          'não nos leveis à tentação',
        ],
        ['erlöse uns von dem Bösen', 'imperativo com sondern', 'livrai-nos do mal'],
      ],
    },
    {
      caption: T('Table 2 — Imperative and subjunctive II forms'),
      head: [T('Infinitive'), T('Imperative'), T('Subjunctive II')],
      rows: [
        ['geben', 'gib', 'gäbe'],
        ['vergeben', 'vergib', 'vergebe'],
        ['führen', 'führe', 'führte'],
        ['erlösen', 'erlöse', 'erlöste'],
        ['kommen', 'komm', 'komme'],
        ['geschehen', 'gescheh', 'geschehe'],
        ['heiligen', 'heilige', 'heiligte'],
        ['sein', 'sei', 'wäre'],
      ],
    },
  ],
};

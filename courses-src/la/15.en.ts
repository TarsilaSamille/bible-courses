import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Demonstratives and the relative pronoun'),
  subtitle: T(
    '{hic, iste, ille, ipse}; {quī, quae, quod} — the pointing finger and the hinge of the sentence',
  ),
  section: T('Pronouns and sentence syntax'),
  body: C(`## The hand that points

Latin has three words for «this», and the choice between them is geographical and emotional. {hic} is what is **near the speaker**: {hic liber} «this book» shows a book in the speaker’s hand. {iste} is what is **near the listener**: {iste liber} «that book of yours» is the book in the interlocutor’s hands. {ille} is what is **far from both**: {ille liber} «that book over there» points to the back of the room.

{ipse} adds a layer: it means «the very», «the same». Placed on a pronoun it reinforces, and placed on a name it intensifies: {ipsa verba} «the very words», and {ipse Dominus} «the Lord himself», in a sentence of Polybius that became a proverb.

All three decline in {-ius} in the genitive and {-ī} in the dative:

| Pronoun | Value | Nom. sg. | Gen. sg. | Dat. sg. | Acc. sg. |
|---|---|---|---|---|---|
| hic, haec, hoc | this, near me | hic | huius | huic | hoc |
| iste, ista, istud | that, near you | iste | istius | istī | istud |
| ille, illa, illud | that, far off | ille | illius | illī | illud |
| ipse, ipsa, ipsum | the very | ipse | ipsius | ipsī | ipsum |

The regular plural continues in {-ī}: {hī}, {istae}, {illī}, {ipsī}. Notice an asymmetry only Latin has: the demonstratives absorbed the possessive into the genitive — {huius} «his», {istius} «your», {illius} «his». In Portuguese and Spanish that function belongs to the article; in Latin, to the genitive.

## The weak demonstrative: {eius, ea, eius}

{Is, ea, id} is the third-person demonstrative: {is puer} «that boy», {ea puella} «that girl», {id verbum} «that word». Used on its own, Latin renders it as «he»:

{Erus mihi, quod unum habeo} «my husband, who is the only thing I have» (Ecclesiastes 9:9) — the antecedent of {quod} is not visible, but the verb {habeō} shows it is masculine.

And the genitive {eius} is so common it has almost become a pronoun: {eius} means «his», «her», «its» with an implicit noun. {Amicus {eius}} «his friend» is literally translated «the friend of that man».

## The relative: {quī, quae, quod}

The relative pronoun does three things at once: it joins two clauses, it works as a pronoun inside its own clause, and it agrees with its antecedent in gender and number. It has first- and second-declension forms, plus a series of forms that repeat nothing:

| Case | Masculine | Feminine | Neuter | Plural (all genders) |
|---|---|---|---|---|
| Nom. | quī | quae | quod | quī |
| Gen. | cuiŭs | cuiŭs | cuiŭs | quōrum |
| Dat. | cuiī | cuiī | cuiī | quibus |
| Acc. | quem | quam | quod | quōs |
| Abl. | quō | quā | quō | quibus |

The genitive {cuiŭs} and the dative {cuiī} are the truly distinctive ones: there is no {quīus} and no {queī}, and the Vulgate repeats them exactly. The dative and ablative plural are {quibus} for every gender — {quibus hominibus} «to certain men», {quibus de rebus} «about certain things».

## Two rules, and they settle almost everything

**First rule: the relative agrees with its antecedent in gender and number; its case is its own.**

{Mulier quam {vīdī}} «the woman whom I saw» — the antecedent {mulier} is feminine, so the relative is {quam}; and since {quam} is accusative, the relative is the object of {vīdī}. Swapping object for subject swaps the case: {Mulier quae me {vīdit}} «the woman who saw me».

{Liber, quem amat, est bonus} «the book which he loves is good» — the antecedent {liber} is masculine, the relative repeats {quem} in the accusative because of {amat}, and the case coincides with nothing. That is the freedom that frightens beginners: the two need not agree in case.

**Second rule: the relative attaches to the nearest compatible noun, and the rest of the clause belongs to the relative.**

{Uxorem {cuius} patrem vīdī} «the woman whose father I saw» — the genitive {cuius} governs {patrem}, and the accusative {vīdī} stays with the verb. Note that the sentence has {vīdī} «I saw» and not {vīdit} «he saw»: the relative drags the first person along with it.

The genitive relative is so productive that the Vulgate uses it in fixed expressions: {cuius est} «whose it is», {cuius honor} «whose honour», {in cuius potestāte est} «is under whose power».

## Reading

{Ecce {agnus Dei} — or {Ecce {agnus Dei, qui {tollit} peccata mundi}} «Behold the Lamb of God, who takes away the sin of the world» (John 1:29) — the relative {qui} repeats the masculine gender of {agnus}, and its accusative {tollit} is the object of the verb. The whole second clause, {qui tollit peccata mundi}, is what can be deleted: John’s scene works without the relative.

{Unus {ex} vobis} «one of you» — {ex} plus the genitive {vobīs} «of you» is the formula of choice, and {ex} plus ablative is origin: {ex {Domīnō}} «from the Lord».

{Veni, vidi, vici} «I came, I saw, I conquered» — the root of Latin style, with the relation implicit in every clause: «I came [and saw that the enemy was there]».

{Ego sum via, veritas et vita} — {via}, {veritās}, {vita} are three nouns that can be read as three relatives with no antecedent: «the way that leads, the truth that frees, the life that gives».

## What to take away

The demonstratives organise space and distance: {hic} near me, {iste} near you, {ille} far off, {ipse} «the very». The relative {quī, quae, quod} joins clauses, and its one rule is a double one: it agrees in gender and number with the antecedent, but it keeps whatever case its own syntax demands. Gender and number come from the noun; the case comes from the verb.`),
  vocab: [
    V('hic', 'hic', 'this (near me)'),
    V('haec', 'hic', 'this (f.)'),
    V('hoc', 'hic', 'this, this (n.)'),
    V('iste', 'iste', 'that (near you)'),
    V('ille', 'ille', 'that, distant'),
    V('ipse', 'ipse', 'the very, himself'),
    V('ipsum', 'ipse', 'the very (n.)'),
    V('huius', 'hic', 'of this (gen. sg.)'),
    V('illius', 'ille', 'of that, his (gen. sg.)'),
    V('eius', 'is', 'his, her, its'),
    V('is', 'is', 'he (pronominal), that'),
    V('quī', 'qui', 'which, who (nom. sg. m.)'),
    V('cuius', 'qui', 'whose, of whom'),
    V('cuī', 'qui', 'to whom, for whom'),
    V('quem', 'qui', 'whom (acc. sg. m.)'),
    V('quibus', 'qui', 'to whom, by whom (dat./abl. pl.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Mulier quam vīdī}, what determines the case of {quam}?'),
    options: [
      T('Its function inside the relative clause: {quam} is the object of {vīdī}'),
      T('The case of the antecedent {mulier}, which is genitive'),
      T('The number: {quam} is plural'),
      T('An implied preposition {cum}'),
    ],
    answer: 0,
    hint: T('Rule §2: the relative agrees in gender and number, not in case.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Genitive singular of {quī}: cui_ _'),
      answer: 'us',
      hint: T('The form is {cuius}, for all genders.'),
    },
    {
      kind: 'choose',
      prompt: T(
        'In {Estote prudentes sicut serpentes et simplices sicut columbae}, {simplices} is:',
      ),
      options: [
        T('A substantivised adjective, with {prudentēs} in the same case and gender'),
        T('A relative pronoun with no antecedent'),
        T('A comparative of {simplus}'),
        T('A cardinal numeral'),
      ],
      answer: 0,
      hint: T('{simplicēs} is an adjective; neuter plural adjectives are used substantivally.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to its value'),
      pairs: [
        { a: T('hic liber'), b: T('this book (the one in my hand)') },
        { a: T('iste liber'), b: T('that book of yours (the one in your hand)') },
        { a: T('ille liber'), b: T('that book over there (far from both)') },
        { a: T('ipse Dominus'), b: T('the Lord himself, emphatic') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Genitive relative of {frūctus}: ___ meus'),
      answer: 'cuius',
      hint: T('The genitive relative is {cuius} for all genders.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{hic} stays near the speaker, {iste} near the listener, {ille} far from both; {ipse} adds «the very».',
      ),
    },
    {
      n: '2',
      text: T(
        'The relative agrees with its antecedent in gender and number, but the case is fixed by its own function in the clause.',
      ),
    },
    {
      n: '3',
      text: T(
        '{cuius} (genitive) and {cuī} (dative) are the most distinctive forms in Latin: they have no parallels in any other pronoun.',
      ),
    },
    {
      n: '4',
      text: T(
        'The dative and ablative plural of the relative are {quibus} for every gender: {quibus hominibus} «to certain men».',
      ),
    },
    {
      n: '5',
      text: T(
        'The clause introduced by {quod} never carries an expressed antecedent: it is the content of the main clause.',
      ),
    },
  ],
  notes: [
    {
      label: T('The genitive absorbed the possessive.'),
      text: T(
        'In Portuguese and Spanish the possessive is a word: «meu», «tuo», «seu». In Latin there is no word for it: to say «the father **of him**» you write {pater {eius}} or {pater {huius}}, with a genitive that can be any demonstrative at all. Hence the frequency of {eius} in the Vulgate: {dilectus meus} and {dilectus meus et {dilecta mea}} (Song 1:1) reveal the origin of the Romance form «dile-t-o» — Latin had a possessive genitive that became a pronoun.',
      ),
    },
    {
      label: T('The relative is the hinge of the sentence.'),
      text: T(
        'Egyptian and the semitic languages mark relations with particles: «I **who** go», «the house **in which** I live». Latin does the same with a pronoun that works as a noun. The practical consequence is that **you can delete any relative clause without breaking the essential sense**: {Ecce agnus Dei} and {Ecce agnus Dei qui tollit peccata mundi} say the same thing. That is why short biblical texts, proverbs and liturgical sentences alternate the two forms — and it is why the relative is so easy to spot when you read: you see {qui} or {quae} and you already know there is a clause hidden on the other side.',
      ),
    },
  ],
  examples: [
    { text: 'hic liber', gloss: T('this book (the one I hold)') },
    { text: 'iste liber', gloss: T('that book of yours (the one you hold)') },
    { text: 'ille liber', gloss: T('that book over there (distant)') },
    { text: 'ipse Dominus', gloss: T('the Lord himself (emphatic)') },
    { text: 'pater eius', gloss: T('his father (possessive genitive)') },
    { text: 'Mulier quam vīdī', gloss: T('the woman whom I saw (relative = object)') },
    { text: 'Mulier quae me vīdit', gloss: T('the woman who saw me (relative = subject)') },
    {
      text: 'Uxorem cuius patrem vīdī',
      gloss: T('the woman whose father I saw (genitive relative)'),
    },
    { text: 'Ecce agnus Dei', gloss: T('«Behold the Lamb of God» (John 1:29)') },
    { text: 'Unus ex vobis', gloss: T('one of you ({ex} + genitive)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The four demonstratives: {hic}, {iste}, {ille}, {ipse}'),
      head: [
        T('Case'),
        T('hic, haec, hoc'),
        T('iste, ista, istud'),
        T('ille, illa, illud'),
        T('ipse, ipsa, ipsum'),
      ],
      rows: [
        [
          'Nominativo sg.',
          'hic, haec, hoc',
          'iste, ista, istud',
          'ille, illa, illud',
          'ipse, ipsa, ipsum',
        ],
        ['Genitivo sg.', 'huius', 'istius', 'illius', 'ipsius'],
        ['Dativo sg.', 'huic', 'istī', 'illī', 'ipsī'],
        ['Acusativo sg.', 'hoc', 'istud', 'illud', 'ipsum'],
        ['Ablativo sg.', 'hōc', 'istō', 'illō', 'ipsō'],
        ['Nominativo pl.', 'hī', 'istae', 'illī', 'ipsī'],
        ['Genitivo pl.', 'hōrum', 'istōrum', 'illōrum', 'ipsōrum'],
        ['Dativo/Ablativo pl.', 'hīs', 'istīs', 'illīs', 'ipsīs'],
      ],
    },
    {
      caption: T('Table 2 — The relative {quī, quae, quod}'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter'), T('Plural (all)')],
      rows: [
        ['Nominativo', 'quī', 'quae', 'quod', 'quī'],
        ['Genitivo', 'cuius', 'cuius', 'cuius', 'quōrum'],
        ['Dativo', 'cuī', 'cuī', 'cuī', 'quibus'],
        ['Acusativo', 'quem', 'quam', 'quod', 'quōs'],
        ['Ablativo', 'quō', 'quā', 'quō', 'quibus'],
      ],
    },
  ],
};

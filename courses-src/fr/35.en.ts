import { C, T, V } from '../shared.mts';

export default {
  id: 35,
  title: T("Reading: the Apostles' Creed"),
  subtitle: T('Nicaea-Constantinople, in 20th-century French'),
  section: T('Reading'),
  body: C(`## The text

> **Je crois en Dieu, le Père tout-puissant, créateur du ciel et de la terre.**
> **Et en Jésus-Christ, son fils unique, né du Père, et né de la Vierge Marie, et souffert sous Ponce Pilate, et crucifié, et mort, et descendu aux enfers, et le troisième jour ressuscité des morts.**
> **Et monté au ciel, et assis à la droite de Dieu le Père tout-puissant, d'où il viendra juger les vivants et les morts.**
> **Et je crois en le Saint-Esprit, la sainte Église catholique, la communion des saints, la rémission des péchés, la résurrection de la chair, et la vie éternelle. Amen.**

## What is a "confession of faith"?

The Creed is neither a prayer nor a narrative: it is a **list of assertions** about what is believed. In French this shows up in the repeated construction {Je crois en…}, which occurs three times — and the repetition is not style but structure: Father, Son, Spirit. The verb {croire} always governs {en}, which here means "believe in", not "give credit to".

Note also the near absence of articles. Where Portuguese would say "in the Father", French has {le Père} — and the noun {Père} in fact already carries the definite article of tradition. A solemn French text economises on articles because the vocabulary here is short and fixed.

## {Je crois en Dieu, le Père tout-puissant}

First segment: {Je crois} + {en} + {Dieu}. The direct object of {croire} is {Dieu}, and {en} is its governing preposition. Note that {croire} is a first-group verb (*-ir* without {iss-}): {je crois, tu crois, il croit, nous croyons}.

**{le Père tout-puissant}** is an apposition: it says who {Dieu} is. And {tout-puissant} is the only prefixal adjective of the chapter: {le tout-puissant}, "the Almighty". The hyphen is compulsory.

## {créateur du ciel et de la terre}

The participle {créateur} is an **agent noun**: the ending {-eur} turns a verb into a noun, as in {laveur} from {laver}, {travailleur} from {travailler}. It agrees with {Dieu}: {créatrice} in the feminine.

**{du ciel et de la terre}** is the **de + article** construction: {du} = {de + le}, {de la}, {de l'}, {des}. The preposition {de} marks origin, and the nouns are {ciel} and {terre}, both masculine — hence {du} with both.

## {Et en Jésus-Christ, son fils unique}

The second occurrence of {croire} brings {en} again. **{-Christ}** with a hyphen: the suffix {Christ} is a Greek title, "the anointed", and stays attached to the name. The apposition {son fils unique} again explains: {fils} with {son} = "his only son".

## The chain of participles

Here is the heart of the Creed, and the syntax is that of an **enumeration of past actions**: {né du Père, et né de la Vierge Marie, et souffert sous Ponce Pilate, et crucifié, et mort, et descendu aux enfers, et le troisième jour ressuscité des morts}.

Each member is a **past participle**, and all of them agree with {il} (the implied subject, {Jésus-Christ}). None has an auxiliary verb: the whole list is one long noun phrase, governed by {ET en}, which functions as the main verb.

Two members carry a preposition: {né du Père} ({né} de + origin) and {souffert sous Ponce Pilate} ({sous} = under the authority of). The rest are plain participles.

Watch the parallelism: {né… né… et souffert… et crucifié… et mort…} — French enumeration likes to repeat the additive {et}, never the adversative one.

## {et le troisième jour ressuscité des morts}

Here the preposition changes function: **{des morts}** marks **origin with separation** — "raised *from among* the dead". It is the same construction as {sortir de}, {descendre de}, but in the reverse sense: {des} = "from among".

And {le troisième jour} is a noun used adverbially: the day, with the count spelled out.

## {et monté au ciel, et assis à la droite de Dieu}

Two place prepositions with opposite senses: {au ciel} ({à + le}) marks motion towards; {à la droite} marks fixed position. The distinction is the same as {à Rome} × {dans Rome}.

{de Dieu le Père tout-puissant} gives another chained apposition, with the same adjective {tout-puissant} as v. 1 — the repetition is on purpose: it links the Son to the Father.

## {d'où il viendra juger les vivants et les morts}

A **relative** clause with a remote antecedent: {d'où} = "from where". The relative {où} has a locative value, and {d'où} adds {de} because of the governing verb {venir} ({venir de} = to come from). The future verb {viendra} is **indicative**, not subjunctive: the Creed asserts a fact, it does not wish for one.

{juger les vivants et les morts} has the definite articles, and the absence of an article in {vivants} and {morts} shows that they are **adjectival** nouns, in the sense of "the living, the dead".

## {la sainte Église catholique}

Here the list changes nature: the objects of {croire} stop being persons and become **things** — the Church, the communion, the forgiveness, the resurrection, the life. And the preposition changes too: instead of {en} there is **{la}**, {la communion}, {la rémission} — the **definite article** used as a preposition.

Portuguese would say "I believe in the holy Church"; French has {je crois en le Saint-Esprit, la sainte Église…}, and the analysis is that the second {la} is a direct-object preposition. Either way the effect is the same: a solemn enumeration.

## {la rémission des péchés}

{la rémission} has a **grave** accent on the {é}: it is a noun in **-tion**, which in French drops the {n} of Latin. Its plural is {réconciliations}? No: that comes from {réconcilier}; the plural is {rémissions}, with a silent {s}.

## {la résurrection de la chair}

Another **-tion** noun: {résurrection}. Note that the matching adjective is {résurrectif}, little used; the noun is what carries the theological vocabulary.

## What to take away

The Creed demonstrates that French can carry theological weight without adjectives. It repeats {croire}, uses {en} and then {la} as prepositions twice over, strings participles without an auxiliary, and closes with {la vie éternelle}. Nothing there is unusually hard: it is the same grammatical apparatus as the Lord's Prayer, with a different vocabulary.`),
  vocab: [
    V('Je crois en', 'croire', 'I believe in (verb + en)'),
    V('tout-puissant', 'puissant', 'almighty (with hyphen)'),
    V('créateur', 'créateur', 'creator (agent noun in -eur)'),
    V('ciel', 'ciel', 'heaven (masculine)'),
    V('unique', 'unique', 'only, unique'),
    V('souffert', 'souffrir', 'suffered (past participle)'),
    V('sous', 'sous', 'under (authority, submission)'),
    V('crucifié', 'crucifier', 'crucified'),
    V('descendu', 'descendre', 'went down (to hell)'),
    V('ressuscité', 'ressusciter', 'raised (des morts = from among the dead)'),
    V('viendra', 'venir', 'will come (futur simple)'),
    V('vivants', 'vivant', 'the living (adjectival noun)'),
    V('Église', 'église', 'Church (capital E = the Church)'),
    V('réconciliation', 'réconcilier', 'reconciliation (noun in -tion)'),
    V('éternelle', 'éternel', 'eternal (feminine of éternel)'),
    V('Amen', 'amen', 'amen (from Hebrew)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Et en Jésus-Christ, son fils unique, né du Père}, how many participles appear?'),
    options: [
      T('One: {né}. The apposition {fils unique} is an ordinary noun, not a participle.'),
      T('Two: {né} and {fils}'),
      T('Three: {né}, {unique} and {Christ}'),
      T('None: the clause uses the present.'),
    ],
    answer: 0,
    hint: T('Past participles are recognised by their ending; {fils} is a noun.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: {créateur ___ ciel et de la terre} — {de + le} = ___'),
      answer: 'du',
      hint: T('Same rule: {de le} = {du}, {de les} = {des}.'),
    },
    {
      kind: 'choose',
      prompt: T(
        'In {Et monté au ciel, et assis à la droite de Dieu}, what distinguishes the two prepositions?',
      ),
      options: [
        T('{au} marks motion towards; {à la droite} marks fixed position'),
        T('{au} marks position; {à la droite} marks motion'),
        T('Both mark time: {au} = in the heaven of, {à la droite} = at the hour of'),
        T('Both mark possession: {au} = of heaven, {à la droite} = of the right'),
      ],
      answer: 0,
      hint: T('Compare {Il va à Rome} with {Il est à Rome}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the Creed construction to the function it performs'),
      pairs: [
        { a: T('Je crois en…'), b: T('opens the three great clauses of the confession') },
        { a: T('né, crucifié, ressuscité'), b: T('a chain of participles without an auxiliary') },
        { a: T('d’où il viendra'), b: T('relative with {de} governed by {venir de}') },
        {
          a: T('la sainte Église catholique'),
          b: T('definite article standing in for the preposition {en}'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T(
        'How many times does the verb {croire} appear with the preposition {en} in the Creed? Answer with a number: ___',
      ),
      answer: '3',
      hint: T('Father, Son and Holy Spirit.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Past participles form an auxiliary-less clause when they enumerate actions: {né, crucifié, ressuscité}. They agree among themselves and with the implied subject.',
      ),
    },
    {
      n: '2',
      text: T(
        '{de} + article fuses: {du, de la, de l’, des}. The fusion is written as one word: {le fils du roi}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{en} can be a relative particle ({l’homme en qui j’ai confiance}) or a preposition ({croire en Dieu}). Context decides.',
      ),
    },
    {
      n: '4',
      text: T(
        'Nouns in **-tion** pluralise with **-s**, not **-tions**: {rémission} → {rémissions}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Nouns derived from a verb by **-eur** are agent nouns and vary in gender: {créateur}, {créatrice}, {blanc}, {blanche}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The Creed in three languages'),
      text: T(`The Latin formula *{credo in unum Deum, Patrem omnipotentem, creatorem caeli et terrae}* set the pattern every Western language copies: **verb of belief + preposition + article + noun**. Portuguese says "creio em um só Deus"; Spanish "creo en un solo Dios"; French says {Je crois en Dieu} — and the preposition {en} comes, literally, from Latin *in*.

The standard French text of the Creed is Nicaea-Constantinople (381 AD), and it therefore keeps {descendu aux enfers} and {la rémission des péchés} — which the original Nicene Creed did not have, and which the Western Church added at the Council of Constance.`),
    },
    {
      label: T('A Creed without numbers'),
      text: T(`Notice what the Creed never does: it never says "the second day", nor "the three days". It enumerates **names** — {Père}, {Fils}, {Saint-Esprit} — and that is its strength. The Creed is a list of **who**, not of **how many**; that is why it needs no cardinal or ordinal numbers at all, and why the earlier numeral chapters go unused here.

The exception is {le troisième jour}: a single ordinal numeral, and precisely that one — because resurrection on the third day is the most specific doctrinal claim in the whole Creed.`),
    },
  ],
  examples: [
    { text: 'Je crois en Dieu', gloss: T('I believe in God (verb + en + object)') },
    {
      text: 'le Père tout-puissant',
      gloss: T('the Almighty Father (apposition, hyphen required)'),
    },
    {
      text: 'créateur du ciel et de la terre',
      gloss: T('creator of heaven and earth (de + le = du)'),
    },
    { text: 'son fils unique', gloss: T('his only Son (apposition with a possessive)') },
    {
      text: 'né du Père, et né de la Vierge Marie',
      gloss: T('born of the Father, and born of the Virgin Mary (participle + de)'),
    },
    {
      text: 'souffert sous Ponce Pilate',
      gloss: T('suffered under Pontius Pilate (participle + sous)'),
    },
    {
      text: 'le troisième jour ressuscité des morts',
      gloss: T('on the third day, raised from among the dead'),
    },
    {
      text: 'assis à la droite de Dieu',
      gloss: T('seated at the right hand of God (fixed position)'),
    },
    {
      text: 'd’où il viendra juger les vivants et les morts',
      gloss: T('from where he will come to judge the living and the dead'),
    },
    {
      text: 'la rémission des péchés, la vie éternelle',
      gloss: T('the forgiveness of sins, eternal life (nouns in -tion)'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The three clauses of the Creed'),
      head: [T('Person'), T('Object of {croire}'), T('Preposition'), T('Predicate')],
      rows: [
        [T('Father'), T('Dieu, the Almighty Father'), T('{en}'), T('creator of heaven and earth')],
        [
          T('Son'),
          T('Jesus Christ, his only Son'),
          T('{en}'),
          T('born, crucified, risen, ascended, seated'),
        ],
        [
          T('Holy Spirit'),
          T('the Holy Spirit, the Church, eternal life'),
          T('{la}'),
          T('communion, forgiveness, resurrection'),
        ],
      ],
    },
    {
      caption: T('Table 2 — {de} + article: the four forms'),
      head: [T('Article'), T('Form'), T('Example'), T('Portuguese')],
      rows: [
        [T('the (m. sg.)'), T('du'), T("the teacher's book"), 'o livro do professor'],
        [T('the (f. sg.)'), T('de la'), T('the door of the house'), 'a porta da casa'],
        [T('the (before a vowel)'), T('de l’'), T('the age of man'), 'a idade do homem'],
        [T('the (pl.)'), T('des'), T('the law of men'), 'a lei dos homens'],
      ],
    },
  ],
};

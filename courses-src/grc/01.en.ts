import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('The definite article'),
  subtitle: T('ὁ, ἡ, τό — the most frequent word in the New Testament'),
  section: T('The noun'),
  body: C(`## What the article does

In Koine Greek, the definite article {ὁ} (masculine), {ἡ} (feminine) and {τό} (neuter) accompanies the noun and agrees with it in gender, number and case. It is the most frequent word in the New Testament: nearly every major noun appears with the article — {ὁ θεός} "God", {ἡ βασιλεία} "the kingdom", {τὸ φῶς} "the light".

Unlike English, Greek uses the article with proper names ({ὁ Ἰησοῦς} "Jesus"), with abstract concepts ({ἡ ἀλήθεια} "truth", {ἡ ἁμαρτία} "sin") and with words cited as examples. So when you read the Greek text, the article works like a signpost: where there is an article, there is a noun (or substantivized adjective) the author meant as determinate.

## The full declension

The article declines in every gender, number and case. Memorize this paradigm before anything else — it reappears, with small variations, in adjectives, pronouns and a good share of nominal endings.

In the singular, notice that masculine and neuter differ only in the nominative and accusative ({ὁ} vs {τό}, {τόν} vs {τό}); genitive and dative are identical in both genders. In the feminine, each case has its own form. Note also that the neuter accusative is always identical to the nominative — a rule holding for every neuter in the language, in any declension.

## The four cases, and what each one answers

Greek does not mark subject, possession or recipient with a preposition: it marks them with the **ending**. There are four cases, and each one answers a different question.

**Nominative — who does the action?** It is the subject, and it matches the subject article: {ὁ λόγος} "the word" / *the Word* / *la Palabra*. In {ὁ λόγος ἦν}, what stands in the nominative is {ὁ λόγος}.

**Genitive — of whom?** Possession, origin, relation: {λόγος τοῦ θεοῦ} "the word **of** God" / *the word **of** God* / *la palabra **de** Dios*. English and Portuguese settle this with "of"; Greek does it with the ending {τοῦ}.

**Dative — to whom?** Recipient, interest, means: {λόγος τῷ θεῷ} "the word **to** God" / *the word **to** God* / *la palabra **a** Dios*. Mind this: the "to" usually disappears in translation — "the word God gave" is a dative rendered without any preposition.

**Accusative — what?** It is the direct object: {τὸν λόγον} "I see **the** word" / *I see **the** word* / *veo **la** palabra*. It is the only one of the four that Portuguese normally keeps without a preposition, with the article when the object is determinate.

The neuter catch: {τό} is nominative **and** accusative at the same time. The form tells you nothing — the function in the sentence does. Compare {θεὸς ἦν ὁ λόγος}, with {θεός} in the nominative (subject), and {ἐθεώρουν τὸν θεόν}, with {θεόν} in the accusative (object): same noun, different shapes purely because of the case.

## Attributive or predicate?

The position of the article decides the meaning of the adjective. When the adjective carries the article along, it qualifies the noun directly (attributive position): {ὁ λόγος ὁ ἀγαθός} or {ὁ ἀγαθὸς λόγος} "the good word". When the noun has the article but the adjective does not, the adjective becomes the predicate: {ὁ λόγος ἀγαθός} "the word is good".

This distinction is one of the most useful exegetical tools in Greek: in {θεὸς ἦν ὁ λόγος} (John 1:1), {θεός} stands without the article (predicate — "the Word was divine") while {ὁ λόγος} has it (the determinate subject). The article tells you who is who in the sentence.

## Four positions of the adjective, four senses

The same word changes meaning according to its position relative to the article — and this holds for any noun, not only for the article:

**A · Attributive** — {ὁ ἀγαθὸς λόγος} or {ὁ λόγος ὁ ἀγαθός} → "the good word"
**B · Predicative** — {ὁ λόγος ἀγαθός} → "the word is good"
**C · Genitive** — {ἡ ἀγαθὴ λέξις τοῦ θεοῦ} → "of the good word (of God)"
**D · Vocative** — {ὁ ἀγαθὲ θεέ} → "O good God"

**A · Attributive** is the common case: the adjective comes with its own article and qualifies the noun directly. It is the only one of the four with nothing to decide.

**B · Predicative** is when the noun has an article and the adjective does not. The adjective stops qualifying and starts **asserting** something about the noun — which is why the translation gains a verb that is not in the Greek: {ἀγαθός} becomes "is good". Miss this and you read "the good word" where the Greek says "the word is good".

**C · Genitive** happens between two nouns joined by the genitive: the second modifies the first. Note that {τοῦ θεοῦ} is genitive — the very ending of the genitive article in Table 1.

**D · Vocative** is address, and Greek is strict here: a noun has a true vocative only for {θέ} (masculine), {ή} (feminine) and {τό} (neuter). Every other "vocative" shape is in fact a nominative or an alternative nominative form — as with {ὁ θεός} in Heb 1.8, "O God".

## When English drops the article

Not every Greek article becomes an English article. With proper names we usually omit it: {ὁ Παῦλος} is "Paul", not "the Paul". With abstracts it depends on context: {ἡ ζωή} may be "the life" or simply "life". And there is a use with no direct equivalent: the article can substantivize any word — {τὸ πιστεύειν} is "the believing", the infinitive treated as a noun. The translator decides case by case; the student only needs to recognize the structure.`),
  vocab: [
    V('ὁ', 'ὁ', 'the (masc. sg. art.)'),
    V('ἡ', 'ὁ', 'the (fem. sg. art.)'),
    V('τό', 'ὁ', 'the (neut. sg. art.)'),
    V('τόν', 'ὁ', 'the (masc. acc. sg. art.)'),
    V('τήν', 'ὁ', 'the (fem. acc. sg. art.)'),
    V('οἱ', 'ὁ', 'the (masc. pl. art.)'),
    V('αἱ', 'ὁ', 'the (fem. pl. art.)'),
    V('τά', 'ὁ', 'the (neut. pl. art.)'),
    V('θεός', 'θεός', 'God, god'),
    V('λόγος', 'λόγος', 'word, speech'),
    V('βασιλεία', 'βασιλεία', 'kingdom'),
    V('ζωή', 'ζωή', 'life'),
    V('φῶς', 'φῶς', 'light'),
    V('υἱός', 'υἱός', 'son'),
    V('πνεῦμα', 'πνεῦμα', 'spirit, wind'),
    V('κόσμος', 'κόσμος', 'world'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the feminine nominative singular article?'),
    options: [T('ὁ'), T('ἡ'), T('τό'), T('τήν')],
    answer: 1,
    hint: T('It is the form accompanying feminine nouns as subject.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the masculine accusative singular article: ___ λόγον ("the word", as object).',
      ),
      answer: 'τόν',
      hint: T('Table 1: nominative {ὁ} → accusative with -ν.'),
    },
    {
      kind: 'choose',
      prompt: T('In "ὁ λόγος ἀγαθός", the construction is…'),
      options: [
        T('Attributive: "the good word"'),
        T('Predicate: "the word is good"'),
        T('Genitive: "of the good word"'),
        T('Vocative: "O good word"'),
      ],
      answer: 1,
      hint: T('The adjective did not repeat the article — rule §2.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its (singular) case.'),
      pairs: [
        { a: 'τοῦ', b: 'genitivo' },
        { a: 'τῷ', b: 'dativo' },
        { a: 'τῆς', b: 'genitivo fem.' },
        { a: 'τούς', b: 'acusativo pl. masc.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The article agrees with its noun in gender, number and case — never translate it alone, always with the noun it accompanies.',
      ),
    },
    {
      n: '2',
      text: T(
        'Adjective WITH repeated article = attributive ("the good word"); adjective WITHOUT article beside an articulated noun = predicate ("the word is good").',
      ),
    },
    {
      n: '3',
      text: T(
        'The genitive plural is τῶν in all three genders; the masculine and neuter dative plural is τοῖς. These forms recur in adjectives and pronouns.',
      ),
    },
    {
      n: '4',
      text: T(
        'Proper names and abstracts take the article in Greek ({ὁ Ἰησοῦς}, {ἡ ζωή}), even when the translation drops it.',
      ),
    },
    {
      n: '5',
      text: T(
        'The article substantivizes any word: adjectives ({οἱ ἀγαθοί} "the good"), adverbs, phrases, even whole clauses.',
      ),
    },
  ],
  notes: [
    {
      label: T('Caution:'),
      text: T(
        'The nominative with the article can function as a vocative, i.e. as direct address: {ὁ θεός} in Heb 1:8 addresses God ("O God"), it does not describe him. Context decides.',
      ),
    },
    {
      label: T('Note:'),
      text: T(
        '{ὁ αὐτός} means "the same" — the adjective {αὐτός} with the article changes meaning entirely compared to predicate use. Such pronouns return in ch. 14.',
      ),
    },
  ],
  examples: [
    { text: '{ὁ θεός}', gloss: T('God (John 1:1: {θεὸς ἦν ὁ λόγος})') },
    { text: '{ἡ βασιλεία}', gloss: T('the kingdom — {ἡ βασιλεία τοῦ θεοῦ} "the kingdom of God"') },
    { text: '{τὸ φῶς}', gloss: T('the light — {τὸ φῶς τοῦ κόσμου} "the light of the world"') },
    { text: '{ὁ υἱός}', gloss: T('the son — {ὁ υἱὸς τοῦ ἀνθρώπου} "the Son of Man"') },
    { text: '{ἡ ζωή}', gloss: T('life — {ἐγώ εἰμι ἡ ζωή} "I am the life" (John 14:6)') },
    { text: '{τὸ πνεῦμα}', gloss: T('the spirit — {τὸ πνεῦμα τὸ ἅγιον} "the Holy Spirit"') },
    { text: '{ὁ λόγος ὁ ἀγαθός}', gloss: T('the good word (attributive: repeated article)') },
    {
      text: '{ὁ λόγος ἀγαθός}',
      gloss: T('the word is good (predicate: no article on the adjective)'),
    },
    { text: '{οἱ μαθηταί}', gloss: T('the disciples (masculine nominative plural)') },
    { text: '{ταῖς ἐκκλησίαις}', gloss: T('to the churches (feminine dative plural)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The article, singular'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{ὁ}', '{ἡ}', '{τό}'],
        [T('Genitive'), 'τοῦ', 'τῆς', 'τοῦ'],
        [T('Dative'), 'τῷ', 'τῇ', 'τῷ'],
        [T('Accusative'), '{τόν}', '{τήν}', '{τό}'],
      ],
    },
    {
      caption: T('Table 2 — The article, plural'),
      head: [T('Case'), T('Masc.'), T('Fem.'), T('Neuter')],
      rows: [
        [T('Nominative'), '{οἱ}', '{αἱ}', '{τά}'],
        [T('Genitive'), 'τῶν', 'τῶν', 'τῶν'],
        [T('Dative'), 'τοῖς', 'ταῖς', 'τοῖς'],
        [T('Accusative'), 'τούς', 'τάς', '{τά}'],
      ],
    },
    {
      caption: T('Table 3 — The four cases and what each one is equivalent to'),
      head: [T('Case'), T('Question'), T('Equivalent to'), T('Greek example')],
      rows: [
        [
          T('Nominative'),
          T('who does the action?'),
          T('o/a de sujeito — the (subject) — el/la (sujeto)'),
          '{ὁ λόγος} «a palavra / the Word / la Palabra»',
        ],
        [
          T('Genitive'),
          T('of whom?'),
          T('de — of — de'),
          '{λόγος τοῦ θεοῦ} «a palavra de Deus / the word of God / la palabra de Dios»',
        ],
        [
          T('Dative'),
          T('to whom?'),
          T('a, para — to — a (omitido a veces)'),
          '{λόγος τῷ θεῷ} «a palavra a Deus / the word to God / la palabra a Dios»',
        ],
        [
          T('Accusative'),
          T('what? (direct object)'),
          T('o/a de objeto direto — the (object) — el/la (objeto)'),
          '{τὸν λόγον} «eu vejo a palavra / I see the word / veo la palabra»',
        ],
      ],
    },
  ],
};

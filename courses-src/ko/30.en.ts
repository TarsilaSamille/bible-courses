import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Reading'),
  title: T('1 Thessalonians 5, three verses and fourteen particles: one page to read slowly'),
  subtitle: T(
    'The passage is the densest in particles in the whole Korean New Testament, and it is dense for one reason: every verb is an imperative with no written subject, and every sentence adds a piece to the one before',
  ),
  body: C(`## The passage, and what the punctuation does to it

The passage is this: {hangsi gi-beo-ha-ra}, always rejoice. {Swi-ji mal-go gi-do-ha-ra}, and do not stop praying. {Beom-sa-e gam-sa-ha-ra}, in everything give thanks. {I-geo-si geu-ri-seu-do ye-su a-nae-seo neo-hi-reul hyang-ha-sin ha-na-nim-ui ttu-e-ui-ni-ra}, and this is the will of God in Christ Jesus, which is directed at you.

Four sentences on the page, and the last one is three times longer than the other three. The punctuation of the translation separates the four, and Korean does not: the first three form a block, and the fourth pulls all of them inside itself. A reader working from Portuguese translates the four lines and stops there; a reader of Korean sees that the fourth is the conclusion and that the first three are what it sums up.

## Three imperatives, the same ending

The first three sentences have the same ending, and the difference between them is entirely in the stem of the verb. {Gi-beo-ha-ra}, {gi-do-ha-ra}, {gam-sa-ha-ra}: all three end in {ha-ra}, which is the imperative. A Korean imperative has no written subject, because the subject is the second person and it is in the ending, exactly as in the other verb forms. "Always rejoice" means "you all rejoice", and the "you all" is not on the page.

The same ending {ha-ra} also goes into the verb {eop-da-ra}, not to have, and that is why the form {ha-ra} seems so often in Scripture: it is {ha}, to do, added to {ra}, the ending of command. A verb that already ends in {da} swaps the {d} for an {r} to take the ending. The same goes for {it-da}, to have, which becomes {i-ti-ra} in the imperative, and the swap is the same in both.

What links the second sentence to the first is a different thing. {Mal-go} is "and not", the connector that binds two negative things into a single clause, and it appears in the middle of {swi-ji mal-go gi-do-ha-ra}: the {swi-ji} is a negative form ending in {ji}, and the {mal-go} says it cannot be read on its own. **Everything that comes after {mal-go} is under the same negation, and so is everything that comes before it.**

## The fourth line, which is the hardest of the passage

The last sentence has six pieces and none of them is superfluous. Taking it apart one by one pays off, because it is where the four preceding lessons show up together.

{I-geo-si} is the subject in focus. It is not {i-geo-neun}, and the choice is not a matter of style: the verse is bringing into the letter the conclusion of everything that came before. A recapitulation like this is {i-geo-si} and not {i-geo-neun}, because what is being said was not yet established.

{Geu-ri-seu-do ye-su} has no particle at all. Two proper names set side by side, and it is the first thing in the verse to reach the end without a particle glued to it. Names do not take a particle in Korean when they sit in the middle of a sentence, and the detail is visible: they are two whole words, while the other six pieces of the verse each have theirs.

{A-nae-seo} is {eseo}, and here it is not the departure of a path: it is the sphere inside which the will holds. The same {eseo} that marks "from the house" marks "in Christ Jesus", and the difference is that the first sentence has a path and this one has a field.

{Neo-hi-reul} is the object, and it is the only piece of the sentence that points outward. Everything else stays inside what is in Christ Jesus; {hyang-ha-sin} says where the will is directed, and where it is directed is {you}. The pronoun "you" is the only thing the text places on the outside.

{Hyang-ha-sin} is a verb in the shape of a modifier, and that is where the information is. The verb is {hyang-ha-da}, to tend toward, and the sentence ends in {sin} because the verb is modified by {ha-na-nim-ui ttu}, the will of God. In Portuguese that information is invisible, because "of God" is a preposition and nothing more. In Korean it is a suffix, and the suffix says that the action is aimed at somebody.

{Ttu-e-ui-ni-ra} closes the sentence. The noun is {ttu-e}, sense, and not {ttu}, which is the noun on its own; what closes it is {ttu-e-ui}, with the linking {e} and the possessive {ui}. After it comes {ni-ra}, the sentence-final particle that declares: what precedes becomes the content of the whole letter.

## What reading the passage leaves behind

Two things that reading gives you and a list of particles does not.

The first is that {ni-ra} is the particle of the person who affirms, not of the person who reports. {I-geo-si} brings the focus and {ni-ra} declares it; together they make a sentence that admits no reply inside the text. A reading that renders the content and ignores the {ni-ra} hands the reader an opinion; with the {ni-ra} it hands over a declaration.

The second is the direction of attention. The verse puts {you} at the end of the sentence and {God} in the first thing you can see, and the verb that joins the two comes before both of them. **Whoever reaches the end of a Korean sentence has reached what the sentence does, not what it is about.** It is the inverted order showing up in a short verse, and the right-hand side of the sentence is always the side of the action.

And the whole reading is done in three steps, in this order: find the verb, which sits at the end of the second block; find the particles, which are all glued to a noun; and only then read the noun that was left without a particle, because it is almost always a proper name and almost always the most important noun in the sentence.
`),
  vocab: [
    V('hangsi', '항상', 'always'),
    V(
      'gibeohara',
      '기뻐하라',
      'rejoice always: the imperative, and the "you all" stays off the page',
    ),
    V('swi', '쉬', 'to rest, to stop'),
    V('malgo', '말고', 'and not: the connector that binds two negatives in the same clause'),
    V('gidohara', '기도하라', 'pray: the same imperative ending as the other two sentences'),
    V('beomsa', '범사', 'everything: the noun that {e} turns into an adverb'),
    V('gamsa', '감사', 'giving thanks'),
    V('igeosi', '이것이', 'this is: the subject in focus that opens the last sentence'),
    V('hananim', '하나님', 'God'),
    V('anseo', '안에서', 'inside: the {eseo} that marks a sphere and not a point of departure'),
    V('neo', '너희', 'you'),
    V(
      'hyanghacin',
      '향하신',
      'that is directed toward: the verb in the shape of a modifier, and that is where the information is',
    ),
    V('ttu', '뜻', 'sense, meaning, purpose'),
    V('nira', '니라', 'the sentence-final particle that declares, and admits no reply'),
    V('geuriseudo', '그리스도', 'Christ'),
    V('yesu', '예수', 'Jesus'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Korean imperative is {ha-ra} added to the stem, and the subject is in the ending. That is why "you all" is never written in an imperative.',
      ),
    },
    {
      n: '2',
      text: T(
        'Everything that comes after {mal-go} is under the same negation as everything before it. The connector binds the two halves and lets neither escape.',
      ),
    },
    {
      n: '3',
      text: T(
        'Proper names in the middle of a sentence take no particle. In {geuriseudo yesu} there is no particle at all, and it is the first thing in the verse to reach the end without one.',
      ),
    },
    {
      n: '4',
      text: T(
        'The last sentence uses {igeosi} and not {igeoneun}: what is being said was not yet established in the letter, and so it enters as focus.',
      ),
    },
    {
      n: '5',
      text: T(
        'Reading in three steps: find the verb, which is at the end; find the particles, which are all glued to a noun; and only then read the noun that was left without a particle, which is almost always a proper name.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why this passage and no other'),
      text: T(
        'The three verses have four sentences, fourteen particles and two verb shapes each worth a rule. Not one word of the vocabulary is hard, and the page still only becomes legible after the particles. It is the best proof that the difficulty of a biblical text in Korean is rarely a matter of vocabulary.',
      ),
    },
    {
      label: T('What {ni-ra} does and what {jae-seo} would do'),
      text: T(
        '{Ni-ra} is the ending that declares: what comes before becomes the affirmed content. {Jae-seo}, which means "as follows", does the same work with less weight and is the shape of reported speech. The translation that cuts {ni-ra} changes what the verse does to its reader, and not only its grammar.',
      ),
    },
  ],
  examples: [
    {
      text: '항상 기뻐하라',
      gloss: T(
        'hang-si gi-beo-ha-ra — always rejoice: the imperative with no subject, and the "you all" in the ending',
      ),
    },
    {
      text: '쉬지 말고 기도하라',
      gloss: T(
        'swi-ji mal-go gi-do-ha-ra — and do not cease praying: {mal-go} binds the two negatives into one clause',
      ),
    },
    {
      text: '범사에 감사하라',
      gloss: T(
        'beom-sa-e gam-sa-ha-ra — in everything give thanks: {beomsa} with {e} is an adverb, and not a place',
      ),
    },
    { text: '이것이', gloss: T('i-geo-si — this is: the subject in focus, and not {i-geo-neun}') },
    {
      text: '그리스도 예수 안에서',
      gloss: T(
        'geu-ri-seu-do ye-su a-nae-seo — in Christ Jesus: the two names with no particle, and the preposition of sphere',
      ),
    },
    {
      text: '너희를 향하신',
      gloss: T(
        'neo-hi-reul hyang-ha-sin — that is directed toward you: {neohireul} as object, and the verb already in the shape of a modifier',
      ),
    },
    {
      text: '하나님의 뜻이니라',
      gloss: T(
        'ha-na-nim-ui ttu-e-ui-ni-ra — is the will of God: the sentence closes with the particle that declares',
      ),
    },
    {
      text: '기도하되',
      gloss: T(
        'gi-do-ha-de — while praying: the verb in {-(으)되}, the shape that joins two clauses without a conjunction',
      ),
    },
  ],
  tables: [
    {
      caption: T('The four verbs of the passage, and what each one is doing'),
      head: [T('Verse'), T('Korean form'), T('What it is'), T('What the form carries')],
      rows: [
        [
          T('16'),
          T('gi-beo-ha-ra'),
          T('imperative'),
          T('the subject is in the ending and is not written'),
        ],
        [
          T('17'),
          T('swi-ji mal-go'),
          T('negative with connector'),
          T('{mal-go} binds what comes before and what comes after'),
        ],
        [
          T('17'),
          T('gi-do-ha-ra'),
          T('imperative'),
          T('the same ending as the other two sentences'),
        ],
        [
          T('18'),
          T('gam-sa-ha-ra'),
          T('imperative'),
          T('the same ending, and the object is {beom-sa-e}'),
        ],
        [
          T('18'),
          T('ttu-e-ui-ni-ra'),
          T('the verb to be with a declarative ending'),
          T('{ni-ra} declares, and does not report'),
        ],
      ],
    },
    {
      caption: T('The last sentence, piece by piece, in the order it appears'),
      head: [
        T('Piece'),
        T('Romanization'),
        T('What it is'),
        T('What the piece does in the sentence'),
      ],
      rows: [
        [
          T('{igeosi}'),
          T('i-geo-si'),
          T('subject in focus'),
          T('brings into the letter the conclusion of everything that came before'),
        ],
        [
          T('{geuriseudo yesu}'),
          T('geu-ri-seu-do ye-su'),
          T('two proper names'),
          T(
            'they take no particle mid-sentence, and they are the only part with no {ui} and no {i} {gwa}',
          ),
        ],
        [
          T('{anseo}'),
          T('a-nae-seo'),
          T('{eseo}'),
          T('marks the sphere in which the will holds, not a point of departure'),
        ],
        [
          T('{neo}'),
          T('neo-hi-reul'),
          T('object'),
          T('it is the only piece of the sentence that points outward'),
        ],
        [
          T('{hyanghacin}'),
          T('hyang-ha-sin'),
          T('verb in the shape of a modifier'),
          T('the information is in the suffix, not in the preposition Portuguese would use'),
        ],
        [
          T('{ttu-e-ui-ni-ra}'),
          T('ttu-e-ui-ni-ra'),
          T('verb to be with a declarative ending'),
          T('it closes the sentence and affirms what the three previous verses said'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In 1 Thessalonians 5:18, the verse opens with {igeosi} and not with {igeoneun}. What does the choice tell the reader?',
    ),
    options: [
      T(
        'that the conclusion was not yet established in the letter, and so it enters as focus and not as topic',
      ),
      T('that the translator did not know which of the two forms to use'),
      T('that {i-geo-neun} is the old form and {igeosi} is the modern one'),
      T('that the verse is copying the verse before it'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the sentence-final particle that declares and closes the verse: 이것이 하나님의 뜻이니____ (this is the will of God)',
      ),
      answer: '라',
    },
    {
      kind: 'match',
      prompt: T('Match each piece of the verse to the work it does'),
      pairs: [
        {
          a: T('{malgo}'),
          b: T('binds what comes before and what comes after under the same negation'),
        },
        { a: T('{nira}'), b: T('declares the content of the sentence, and does not report it') },
        { a: T('{anseo}'), b: T('marks the sphere in which the will holds') },
        {
          a: T('{hyanghacin}'),
          b: T('the verb in the shape of a modifier, where the information is'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Why does {geuriseudo yesu}, in the middle of the sentence, have no particle at all?',
      ),
      options: [
        T('because proper names in the middle of a Korean sentence do not take a particle'),
        T('because {geuriseudo} and {yesu} are two ideograms and ideograms do not take a particle'),
        T('because the subject particle was already used, in {igeosi}, and cannot be repeated'),
        T('because the verse is in poetic style'),
      ],
      answer: 0,
    },
  ],
};

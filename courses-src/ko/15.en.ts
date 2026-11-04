import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Particles'),
  title: T('The final particle: the last word before the full stop, and why the sentence needs it'),
  subtitle: T(
    'It declares no function at all — it declares tone, and it is what separates a spoken sentence from a scrap of text',
  ),
  body: C(`## The particle that declares no function

The particles that declare function say who performs the verb, what receives the action, from where, to whom. The final particle is the only one that declares none of that. It is the last thing before the full stop, and it does not say who does what: it says in what tone the sentence is spoken. That is why a beginner deletes it without noticing, and then is troubled by the result.

{yo} is the commonest of all of them, and it is the ending of the neutral statement: what is said without ceremony and without a specific audience. In {chaek}-eul {ilgeoyo} the final {yo} says nothing about the book or about the reading; it says that this is a sentence and not a scrap. Delete the {yo} and what is left is the verb without an ending, which is a dictionary entry, the same configuration the reader met with a long-list verb outside a sentence. The final particle is what turns an entry into speech.

The junction follows one rule, and it is a contraction. The plain ending {da} is the cleanest example, because it has exactly the same shape as the verb to be: Korean writes the same for the most neutral thing and the most common thing, and a learner has already seen those letters elsewhere without knowing it. In the polite endings the {da} becomes {nida}, and the ending {yo} is born the same way. After a vowel the {da} disappears entirely and only the vowel is left; that is why the verb of the example changes shape when the tone changes, instead of merely gaining a syllable at the end. A writer who glues the particle on without counting the last vowel produces an ending the listener hears as a different tone.

## One sentence in six tones

The politeness scale enters the particle, and that is where it closes. The same sentence, "I read a book", without a pronoun, because the ending already is the pronoun, appears in six tones, and the difference between them is not in the lexicon: it sits entirely in the last piece.

What the beginner needs is to hear this scale from a Korean speaker, because the six tones are indistinguishable to anyone who has never heard them: they are told apart only by the distance between two people. And it is that distance which the text records, not the subject matter. A whole book can come out at a single level, and that choice is one of the first things an attentive reader notices, long before noticing vocabulary.

The two extremes explain the middle. At the lowest level the particle is the familiar {da}, and the sentence is the shortest the language allows. At the highest the verb takes the formal command ending and the sentence becomes {ilgeusoseo}: the register of exhortation, of prayer, and of a text that presents itself as the definitive word. Between them lie the three tones of ordinary use, and the third of them is what a translator chooses when writing for strangers.

One reading trap: the common polite level and the deferential level are pronounced almost the same, and the difference between them is above all a difference in writing. It is worth the beginner knowing that, so as not to conclude that two ways of saying the same thing were found. They are two ways, and the second belongs to a register that has already left everyday use.

## A question is the other side of the sentence

{yo} after a question is odd, and it is one of the first signs that the final particle is tone and not function. A Korean question closes on the derived polite ending, or on nothing at all; never on {yo}. That is why {ilgeoyo} works as an answer and not as a question: the form that answers well is exactly the one that does not ask. And that is why the polite level is obligatory in questions and optional in answers, the same ending that is a choice in answers becomes a requirement in questions.

The particle of expectation is {nae}, and one example is enough because its behaviour is single. It says "I hope", and it works the same way for the yes and for the no: whoever uses it is not taking a side on the content of the answer, but expressing surprise at it. A Portuguese speaker understands the particle at once, because it is exactly our "tomara que", with the same indifference to the content. Korean does not pick a side either.

The particle of uncertainty is {ra}, and it is the one the reader will see most often in spoken text. After a stem ending in a vowel it means "I think" and it also means "they say", both at once. After a stem with a final consonant the uncertainty takes another shape, written with {dago}, and the ambiguity is the same: whoever says {dago} may be supposing that he will come or repeating what he heard from someone else, and the sentence does not say which of the two. It is the most honest particle in Korean: it assumes that the speaker sometimes knows and sometimes only passed it on.

And the last of the system, a surname and nickname particle: {ssi} after a name, "so-and-so", and with no neutral register of its own: the son of the king, the seventh Korean. It goes after a proper name and never after a common noun, and it is the particle the reader recognises the first time a Korean name turns up inside a text written in Portuguese.

## The switch the Bible makes, and what it lets you see

The 1961 Korean translation uses the narrative ending in the voice of the narrator and the polite ending in the mouth of Jesus, and it is not an inconsistency: it is a convention. In the first five verses of John 1 every sentence of the narrator closes on the narrative ending, and none of them uses the dialogue ending; the first words of Jesus in the same chapter, at 1:38, close on the ending derived from the polite one, with the honorific in the verb. A reader who notices the switch knows, inside a single verse, whether he is reading narration or direct speech, without a single word saying "Jesus said". It is a literary effect, verifiable line by line, and it is born entirely of the final particle.

And this is where the two halves close: the function particles say who does what, the ending of the verb said the register, and the final particle says the tone and, in a biblical text, who is speaking.
`),
  vocab: [
    V('yo', '요', 'the commonest final particle: a neutral statement, the speech of everyday life'),
    V('da', '다', 'the plain final particle; exactly the same shape as the verb to be'),
    V('nida', '니다', 'the written polite ending, what is heard in the verb ending'),
    V('seumnida', '습니다', 'the regular polite ending, the commonest in written text'),
    V('so', '소', 'the semiformal ending, the highest one after the common polite'),
    V('obnida', '옵니다', 'the deferential semiformal ending, today almost only literary'),
    V('soseo', '소서', 'the highest ending of all, the one of exhortation and prayer'),
    V('nae', '네', 'particle of expectation: I hope, for the yes and for the no'),
    V('ra', '라', 'particle of uncertainty and of report: I think; they say'),
    V('dago', '한다고', 'uncertainty after a stem with a final consonant: I think he will come'),
    V('ssi', '씨', 'surname and nickname particle after a name: so-and-so'),
    V('chaek', '책', 'book: the noun of the six forms of the example'),
    V('ilgeunda', '읽는다', 'I read a book: the plain form, with the ending {da}'),
    V('ilgeoyo', '읽어요', 'I read a book: the polite spoken form, with the ending {yo}'),
    V('ilgeumnida', '읽습니다', 'I read a book: the polite written form, with the ending {nida}'),
    V('ilgeoso', '읽소', 'I read a book: the semiformal form, with the ending {so}'),
    V(
      'ilgeumseumnida',
      '읽읍니다',
      'I read a book: the deferential form, spelled differently from the polite one',
    ),
    V('ilgeusoseo', '읽으소서', 'I read a book: the highest form of all'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The final particle is the last thing before the full stop and declares no function at all. The subject, object and origin particles say who does what; {yo} and {da} say the tone.',
      ),
    },
    {
      n: '2',
      text: T(
        'Without a final particle the sentence becomes a list. The same verb with no ending is a dictionary entry, not a sentence.',
      ),
    },
    {
      n: '3',
      text: T(
        'The final particle contracts with the last vowel of the sentence: after a vowel the {da} disappears and only the vowel is left. That is why the verb changes shape when the tone changes, and not merely gains a syllable.',
      ),
    },
    {
      n: '4',
      text: T(
        'After a question {yo} is not used. The question closes on the ending derived from the polite one or on nothing, and that is why {ilgeoyo} answers and does not ask.',
      ),
    },
    {
      n: '5',
      text: T(
        'The choice among the six tones is register, not lexicon. A whole text usually picks one, and keeping it is part of the translation.',
      ),
    },
  ],
  notes: [
    {
      label: T('The same letters as the most neutral verb'),
      text: T(
        'The plain ending {da} and the verb to be are one and the same written word. Anyone who learns {da} as a particle is learning, without noticing, the verb that appears in half the sentences of the course: the most dispensable particle of the system is the one that teaches the most indispensable verb.',
      ),
    },
    {
      label: T('The uncertainty that will not choose between two meanings'),
      text: T(
        'After a stem ending in a vowel, {ra} means "I think" and "they say" at the same time, and the sentence does not resolve the ambiguity. After a stem with a final consonant the same happens with {dago}. No other language in this project has a particle that confuses the speaker\'s opinion with the report he heard.',
      ),
    },
  ],
  examples: [
    {
      text: '책을 읽어요',
      gloss: T(
        'chaegeul ilgeoyo — I read a book: the final {yo} closes the sentence and says nothing about the book',
      ),
    },
    {
      text: '책을 읽습니다',
      gloss: T(
        'chaegeul ilgeumnida — I read a book: the same sentence in the written polite register, the register of a formal text',
      ),
    },
    {
      text: '날씨가 좋아라',
      gloss: T('nalssiga joara — the weather looks good; and also: they say the weather is good'),
    },
    {
      text: '비가 오면 좋겠네',
      gloss: T(
        'biga o-myeon jokkene — I hope it rains: the particle of expectation works the same for the yes and for the no',
      ),
    },
    {
      text: '무엇을 찾으십니까',
      gloss: T(
        'mujeoseul chajusimnigga — what are you looking for: a question, with the ending derived from the polite one and the honorific in the verb',
      ),
    },
  ],
  tables: [
    {
      caption: T('One sentence in six tones: the difference sits entirely in the last piece'),
      head: [
        T('Level'),
        T('Final particle'),
        T('The same sentence'),
        T('Who it is for'),
        T('Register'),
      ],
      rows: [
        [
          T('1'),
          T('{da}'),
          T('{chaek}-eul {ilgeunda}'),
          T('a friend spoken to as an equal'),
          T('plain spoken; the shortest form there is'),
        ],
        [
          T('2'),
          T('{yo}'),
          T('{chaek}-eul {ilgeoyo}'),
          T('the same friend, on almost every day'),
          T('neutral; the commonest ending in speech'),
        ],
        [
          T('3'),
          T('{nida}'),
          T('{chaek}-eul {ilgeumnida}'),
          T('anyone, and above all someone senior'),
          T('polite written; the standard of formal text'),
        ],
        [
          T('4'),
          T('{so}'),
          T('{chaek}-eul {ilgeoso}'),
          T('someone older or hierarchically above, in conversation'),
          T('semiformal; rare outside old conversation'),
        ],
        [
          T('5'),
          T('{obnida}'),
          T('{chaek}-eul {ilgeumseumnida}'),
          T('someone senior, with old-fashioned deference'),
          T('semiformal; sounds dated, almost literary'),
        ],
        [
          T('6'),
          T('{soseo}'),
          T('{chaek}-eul {ilgeusoseo}'),
          T('the highest: to pray, to exhort, to proclaim'),
          T('maximum; almost only in scripture'),
        ],
      ],
    },
    {
      caption: T('The particles that colour the tone instead of declaring function'),
      head: [
        T('Particle'),
        T('What it marks'),
        T('What the reader understands'),
        T('Where it shows up'),
      ],
      rows: [
        [
          T('{yo}'),
          T('neutral statement'),
          T('a spoken sentence, without ceremony'),
          T('conversation, speech, video caption'),
        ],
        [
          T('{da}'),
          T('plain statement'),
          T('a written sentence with no tone chosen'),
          T('narrative, ordinary prose'),
        ],
        [
          T('{seumnida}'),
          T('written politeness'),
          T('the distance between people is measured by the text'),
          T('office, news, questions'),
        ],
        [
          T('{nae}'),
          T('expectation'),
          T('I hope so, for the yes and for the no'),
          T('conversation, especially with what one wants to hear'),
        ],
        [
          T('{ra}'),
          T('uncertainty'),
          T('I think — or they say'),
          T('report, comment, everyday speech'),
        ],
        [
          T('{ssi}'),
          T('surname'),
          T('so-and-so, the proper name turned into an epithet'),
          T('mentions of people inside the text'),
        ],
      ],
    },
    {
      caption: T('What the reader knows once he notices the switch of final particle'),
      head: [
        T('Voice'),
        T('Ending (romanisation)'),
        T('Signal alongside it'),
        T('What the reader finds out'),
      ],
      rows: [
        [
          T('narrator, John 1:1 to 1:5'),
          T('gyesinira, anira, hanira'),
          T('no honorific in the verb'),
          T('it is narration, and the text need not say that anyone spoke'),
        ],
        [
          T('speech of Jesus, John 1:38'),
          T('chajusimnigga'),
          T('the honorific in the verb'),
          T('it is direct speech, and the switch alone marks the speaker'),
        ],
        [
          T("the reader's own question"),
          T('seumnigga, imnigga'),
          T('the subject particle on the noun'),
          T('the sentence expects an answer, and the tone is polite'),
        ],
        [
          T('conversation between friends'),
          T('{yo}'),
          T('no honorific'),
          T('a neutral tone, the most read and the most heard'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('A Korean sentence written with no final particle at all sounds like:'),
    options: [
      T('a scrap of text, a list of pieces'),
      T('a question addressed to the listener'),
      T('a polite sentence, in a formal register'),
      T('a spelling mistake that cannot be repaired'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the neutral final particle of "I eat", in everyday speech: 먹____'),
      answer: '어요',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it says'),
      pairs: [
        { a: T('{yo}'), b: T('neutral statement, the ending of everyday speech') },
        { a: T('{da}'), b: T('plain statement, the same letters as the verb to be') },
        { a: T('{nae}'), b: T('expectation: I hope so, for the yes and for the no') },
        { a: T('{ra}'), b: T('uncertainty and report: I think; they say') },
        { a: T('{ssi}'), b: T('surname and nickname after a name: so-and-so') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'In John 1 the narrator and the words of Jesus reach the end of the sentence in different ways. What can the reader know because of that?',
      ),
      options: [
        T(
          'whether he is reading narration or direct speech, with no word anywhere saying "Jesus said"',
        ),
        T('that the original text was written in Korean'),
        T('that narration is worth more than speech'),
        T('that Jesus spoke in an older register than the narrator'),
      ],
      answer: 0,
    },
  ],
};

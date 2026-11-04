import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Verb'),
  title: T('The particle at the end: asking is not reordering'),
  subtitle: T(
    'A question is the statement with one syllable glued to the end, and it is the answer — not the question — that picks the form',
  ),
  body: C(`
## The particle closes the sentence, and nothing moves

"You are going" is {anata wa iku}. "Are you going?" is {anata wa iku ka}. Between one sentence and the other a single syllable went in, and nothing else changed: the pronoun stayed in front, the verb stayed at the end, and the order of the syntax lesson, pronoun, indirect object, direct object, verb, was not touched. **There is no inversion.** In English and in Spanish a question becomes a construction of its own, with the verb moving up and an auxiliary moving up with it; Japanese has no question auxiliary at all. A question is the statement with {ka} glued to the end.

That is why {ka} is a particle and not a word: it names nothing, it carries no content, and it can only live in one place, after everything else. Tucked into the middle of a sentence it is not a question, it is noise.

And it is the same arrangement you have already seen in two other languages of this project. Lesson 21 of the Mandarin course does exactly this with a final particle, and lessons 2 and 5 of the Korean course show that the final particle exists there too, with one difference, which is the subject of the next section. Mandarin, Korean and Japanese belong to three different language families and arrive at the same point: asking is cheap, and it is cheap because **asking is not reordering the words, it is adding one sound at the end**.

## What changes is the answer, not the question

A question "are you going?" accepts more than one answer: "I am", "I am not", "when?", "I will, if it rains". The particle {ka} **does not force yes or no**; it says nothing about which shape the answer will take. The answer chooses, and the answer is what settles the rest of the sentence.

The contrast with Korean makes it plain. There the question is also a final particle, but it comes accompanied by a change of shape in the verb: the affirmative uses one ending, the negative uses another, and speech adds the pronoun that disappears in writing. Three things change at once. In Japanese one thing changes: the verb is literally the same in both sentences, {iku ka}, and what separates "are you going?" from "he goes?" is the rest of the sentence, not the tip of the verb.

That freedom of the answer is what lets one particle serve three purposes at once, and all three are in the table below. One of them matters most for reading Scripture: "they say he is going" is, in Japanese, report and not question. The same {ka}, with the same order and the same verb, announces that somebody told you something, and the reader has to know that it was not confirmed.

## Interrogatives are nouns, and nouns go before the verb

Six words do the questions the particle alone cannot do: {dare} who, {nani} what, {doko} where, {itsu} when, {dōshite} why, and {dō} plus yō for how. All of them are nouns: not adverbs, not pronouns, nouns that serve to ask. And a noun, in the syntax lesson, goes before the verb.

That is why "Who are you?" is {anata wa dare desu ka}: you, the topic, {dare} in noun position, the verb at the end, and {ka} at the end. The interrogative pronoun enters exactly where any noun would enter, and the particle stays glued to the end.

The beginner's mistake is always the same one: {anata ka dare}, the interrogative pronoun glued to the particle, as if the pronoun were the thing being asked about and the particle came right after it. That is not Japanese in any sentence, neither to ask nor to answer.

There is a second pattern, and it accounts for a good share of the questions you will meet in the Bible: the **direct interrogative clause**, where the interrogative pronoun closes the clause and the particle closes with it. "Who threw the stone?" is {dare ga ishi o nageta ka}, pronoun with {ga}, verb at the end, particle at the end. Without the subject particle, {dare ishi o nageta ka}, the sentence is colloquial and means the same thing. What the two patterns share is one thing only: the question particle never opens the sentence.

## Jesus asks all the time, and his questions are short

In the Gospel of John, Jesus asks a question on almost every page. Three of them are worth reading closely, because each one uses a piece of what came before.

John 1:38 is the cleanest: "where are you going?" is {anata wa doko e iku ka}, pronoun, topic, interrogative noun, direction particle, verb at the end, particle at the end. No new position, no new word. And Peter's answer is not a particle: it is a whole sentence, which is the pattern of the answers in this chapter.

John 4:7 shows the question in the verb: "will you give me a drink?" has the verb "give" in the negative, with the particle after it. A question needs no construction of its own; it needs a negative verb, and that is all.

John 8:7 is the most famous of the three and the best for study, because it holds the whole construction: "whoever is without sin, let him throw the first stone?" is {tsumi no nai hito ga daremo ishi o nagenai ka}. Interrogative pronoun, subject particle, verb at the end, particle at the end, everything stacked in the order of the syntax lesson, and nothing at the front. The scribes' answer is silence, and silence is one of the answers {ka} allows without any new particle.

And this question is also, for the hearer, a rhetorical one: it is asked in order to be obvious. Same construction, same particle; the hearer is the one who finds out whether it was a real question.
`),
  vocab: [
    V('ka', 'か', 'question particle: goes at the end of the sentence and inverts nothing (ka)'),
    V('dare', '誰', 'who (dare) — interrogative pronoun, used as a noun'),
    V('nani', '何', 'what (nani) — interrogative pronoun'),
    V('doko', 'どこ', 'where, to where (doko) — interrogative pronoun'),
    V('itsu', 'いつ', 'when (itsu) — interrogative pronoun'),
    V('dōshite', 'どうして', 'why (dōshite) — interrogative pronoun'),
    V('dō', 'どう', 'how (dō) — interrogative pronoun'),
    V('e', 'へ', 'direction: the "to where" of movement (e)'),
    V('mō', 'もう', 'already (mō) — particle that answers a question about the past'),
    V('yō', 'よう', 'necessity particle: "must", "have to" (yō)'),
    V('deshō', 'でしょう', 'hedged assertion: "presumably", "I suppose" (deshō)'),
    V('ne', 'ね', 'particle that asks the listener for confirmation (ne)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A question inverts nothing: it is the statement with {ka} at the end, and the order of lesson 9 stays exactly the same.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ka} does not force a yes-or-no answer. The answer is what picks the form of the reply.',
      ),
    },
    {
      n: '3',
      text: T(
        'Interrogatives are nouns: {dare}, {nani}, {doko}, {itsu}, {dōshite} and {dō} go before the verb, like any noun.',
      ),
    },
    {
      n: '4',
      text: T(
        'The question particle closes the sentence. It never opens one, and it never sticks to the pronoun — {anata ka dare} is not Japanese.',
      ),
    },
    {
      n: '5',
      text: T(
        'In Korean the question changes the verb ending and adds the register pronoun; in Japanese the verb does not change and only the particle announces it.',
      ),
    },
  ],
  notes: [
    {
      label: T('One particle, three jobs'),
      text: T(
        '{ka} serves the real question, the rhetorical question — which is an assertion made in the shape of a question — and the report of hearsay. The rhetorical one depends on intonation: "You know?" rising is a question, falling is a statement. And it is **context** that settles it when there is no intonation, which is to say in writing: a sentence with {ka} right after "they say that" is a report, and nobody is going to answer it.',
      ),
    },
    {
      label: T('The question sets the register of the answer'),
      text: T(
        'The answer carries a particle too, and it gives away how firmly the speaker stands on the formality of the question. {deshō} hedges ("you understand, then?"), {ne} asks for confirmation ("you understand, right?"), and desu with {ka} at the end is the neutral shape. One and the same "do you understand?" can get three answers — "yes, I do", "yes, a little", "not exactly" — and the difference between them is register more than information.',
      ),
    },
  ],
  examples: [
    {
      text: '行くか',
      gloss: T(
        'iku ka — are you going? the verb in its usual place, the particle glued to the end',
      ),
    },
    {
      text: 'どこへ行きますか',
      gloss: T(
        'doko e ikimasu ka — where are you going? the interrogative before the verb, the particle at the end',
      ),
    },
    {
      text: '行くそうですか',
      gloss: T('iku sō desu ka — they say he is going? the same particle, now as a report'),
    },
    { text: '知っていますか', gloss: T('shitte imasu ka — do you know? the verb changed nothing') },
    {
      text: '罪のない人がだれも石を投げない',
      gloss: T(
        'tsumi no nai hito ga daremo ishi o nagenai — "no one without sin throws a stone" (John 8:7)',
      ),
    },
  ],
  tables: [
    {
      caption: T('The six interrogatives, and where they sit'),
      head: [T('Interrogative'), T('Meaning'), T('The sentence it makes')],
      rows: [
        [T('{dare}'), T('who'), T('Who threw the stone?')],
        [T('{nani}'), T('what'), T('What did you say?')],
        [T('{doko}'), T('where, to where'), T('Where are you going?')],
        [T('{itsu}'), T('when'), T('When are you coming back?')],
        [T('{dōshite}'), T('why'), T('Why did you go?')],
        [T('{dō} plus yō'), T('how'), T('How do you know that?')],
      ],
    },
    {
      caption: T('Three functions of the same particle'),
      head: [T('Use'), T('What it is'), T('What the reader does with it')],
      rows: [
        [T('question'), T('{anata wa iku ka}'), T('answers yes, no, or with another question')],
        [
          T('rhetorical question'),
          T('{shiru ka}, falling intonation'),
          T('treats it as an assertion and answers as is fitting'),
        ],
        [T('"they say that"'), T('{iku sō desu ka}'), T('knows it is report, not confirmed fact')],
      ],
    },
    {
      caption: T('The answer carries a particle too'),
      head: [T('Particle'), T('What it adds'), T('How it sounds')],
      rows: [
        [T('desu + {ka}'), T('neutrality'), T('I understand — a dry answer, no extra confidence')],
        [
          T('{deshō}'),
          T('a hedged assertion'),
          T('you do understand, then? — the answerer agrees in spirit'),
        ],
        [
          T('{ne}'),
          T('a request for confirmation'),
          T('you understand, right? — the answer comes back with another {ne}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What changes from "you are going" to "are you going?" in Japanese?'),
    options: [
      T('the verb moves up to the beginning of the sentence'),
      T('a particle appears at the end, and the order does not change'),
      T('the pronoun becomes an interrogative pronoun'),
      T('a question auxiliary verb goes in'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "are you going?" — the verb and the question particle at the end: 行く____',
      ),
      answer: 'か',
    },
    {
      kind: 'match',
      prompt: T('Match the interrogative to the question it makes'),
      pairs: [
        { a: T('{dare}'), b: T('who') },
        { a: T('{doko}'), b: T('where, to where') },
        { a: T('{itsu}'), b: T('when') },
        { a: T('{dōshite}'), b: T('why') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In "they say he is going", the particle {ka} is being used as:'),
      options: [
        T('a real question'),
        T('a rhetorical question'),
        T('a report of hearsay'),
        T('the direct object'),
      ],
      answer: 2,
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Syntax'),
  title: T('Quoting: the particle that opens and the one that closes'),
  subtitle: T(
    'Japanese uses one single particle at both ends of a quotation, and what comes after it is what tells you whether you are reading speech or report',
  ),
  body: C(`
## One particle, both ends

Portuguese opens a quotation with a colon and closes it with a dash. Japanese has no two marks: it has **one**, and it is a particle. {to} comes after the verb of saying and comes again at the end of the speech, with the same form and the same sound: *kare wa 「watashi wa iku」 to iutta*, he said: "I will go". The first {to} says "the speech starts here"; the second says "it ends here". Japanese keeps that distinction nowhere: the same syllable does both jobs.

It is worth comparing the other two languages of this project, because the contrast is the point. In Mandarin the speech is surrounded by two characters, one that opens and one that closes, and the verb of saying stays outside both. In Korean there is no particle at all: the verb of saying itself does the delimiting, which is why choosing the verb already decides whether that is speech. In Japanese the delimiting is a particle and it is the same at both ends. The consequence is practical: in running text you do not have to guess what is coming, you only have to hear the particle twice and mark what lies between.

And punctuation follows. The Japanese quotation marks are the {kagi}, the corner brackets 「 and 」, and not the Latin quotation marks; when a quotation comes inside another quotation, the inner level changes shape, as in Mandarin. The dash, which in Portuguese marks speech, appears less, because the particle is already doing that job: in *kare wa — watashi wa iku — to iutta* the dash is redundant and nobody writes it. The Japanese Bible translation uses the corner brackets, not the Latin quotation marks.

## The name that comes after the particle

After {to} a name may come, and the name is who is speaking. "He said, Mr Tanaka, I will go" is *kare wa 「{tanaka} {san} wa iku」 to iutta*: what {tanaka} says is in the first person inside the brackets, and it is {tanaka} who says it, not the subject outside. That is the reporting construction, and it is worth noticing that the structure brings no new piece at all: it is {to} once more.

The same arrangement, with one piece swapped, gives indirect speech. "He said THAT I will go" is *kare wa watashi ga iku to iutta*: the particle is the same, but no name follows it; what follows is a **verb in the plain form**, with no inflection. And it is that plain verb, not a conjunction, that does the job of the English "that".

So the same particle does two different things once it has arrived: a name is the owner of the speech, a plain verb is a "that". The particle does not change; what it meets changes. That is why it is the most informative piece on the page for a reader in a hurry: one particle plus the verb after it is enough to tell whether that is a word or a report.

## The quotation is an island

Inside, the quotation obeys the order of the syntax lesson without exception: pronoun, indirect object, direct object, verb at the end. Outside, the sentence that surrounds it may turn however it likes. "Peter said: I will go" is still *kare wa 「watashi wa iku」 to iutta*, and the quotation does not turn over to accommodate the verb that rose in Portuguese. A word-for-word translator writes "Peter I will go said" and produces a sentence that does not exist in Japanese.

And the verb of saying is not neutral either. {iu} is the generic act of saying; {kataru} is to narrate and to converse, the verb of narratives and long conversations; {kaku} is what is written, and in the case of a gospel it is the pen. Swapping one for another does not break the sentence, but it changes the tone: "he said", "he told" and "he wrote" are three different things. And there is a fourth, {omou}, "to think, to believe", which never has direct speech, because someone who thinks is not speaking.

Here the lesson on registers comes in. What Jesus says appears in the register the translator chose, and the choice is visible in the grammar: the speech of God is usually given in the honorific that honours the other, the {osshharu}, which is precisely the honorific of "to say", and the register of human beings in the polite. Two translations produce two registers for the same sentence, and neither of them is a grammatical mistake. It is an editorial decision, and Japanese leaves it in plain sight because it lives in the verb and not in the footnote.

## Mark 1:15, the sentence that became a formula

The hook is Mark 1:15, the most repeated quotation in the New Testament: the time is fulfilled, the kingdom of God is at hand, repent and believe the gospel. Three imperatives are stacked, and each one closes its own segment, with the boundary of the lesson on clause inflection working inside the sentence of Jesus. In Japanese the time that is fulfilled is the {mitsu}, and the way of which the gospel speaks is the {michi}; the three imperatives come with no subject and no inflection, as every imperative does.

What holds the sentence together is the same thing that holds any quotation together: the particle, at both ends. And that is what makes Mark 1:15 so easy to quote and so hard to translate, because the sentence is one unit, and in Japanese that unit is marked by the same syllable on both sides, which no other language of this project does.

The other extreme is the opening of John 1. There most of the chapter is a **chain of indirect quotations**: John writes what he heard and what he saw, and what he saw comes back in the plain form, with the particle and the verb without inflection. The exact opposite of Mark 1:15, and that is why the two form the classic pair in any introduction to the New Testament: a chapter that is almost all report, and one verse that is all speech.
`),
  vocab: [
    V('to', 'と', 'the particle that opens and closes the quotation (to)'),
    V('iu', '言う', 'to say; to speak (iu) — the generic verb'),
    V('kataru', '語る', 'to narrate; to converse (kataru)'),
    V('kaku', '書く', 'to write (kaku)'),
    V('omou', '思う', 'to think; to suppose (omou)'),
    V(
      'osshharu',
      'おっしゃる',
      'honorific of "to say": the register in which the speech of Jesus usually appears',
    ),
    V('tanaka', '田中', 'Tanaka; a proper name (tanaka)'),
    V('san', 'さん', 'the polite suffix after a name (san)'),
    V('kagi', '鉤括弧', 'the corner brackets 「 」, the quotation marks of Japanese (kagi)'),
    V('mitsu', '満す', 'to fill; to be fulfilled, complete (mitsu)'),
    V('michi', '道', 'way, path (michi)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The same particle {to} opens and closes the quotation: Japanese has no two quotation characters, it has one particle that appears twice.',
      ),
    },
    {
      n: '2',
      text: T(
        '{to} followed by a proper name is the owner of the speech; {to} followed by a verb in the plain form is the "that" of indirect speech. The particle does not change, what comes after it changes.',
      ),
    },
    {
      n: '3',
      text: T(
        'Inside the quotation the order of lesson 9 holds without exception, and the syntax outside does not enter: the quotation is an island.',
      ),
    },
    {
      n: '4',
      text: T(
        'The test for reading is in the verb: inflected, you are reading speech; in the plain form, you are reading report. It is the only structural difference between the two.',
      ),
    },
    {
      n: '5',
      text: T(
        'The Japanese quotation marks are the corner brackets and the dash is what marks speech; the verb of saying ({iu}, {kataru}, {kaku}) chooses the register in which the quotation is told.',
      ),
    },
  ],
  notes: [
    {
      label: T('The particle is symmetric, and that changes reading'),
      text: T(
        'In languages where the quotation mark is asymmetric — one opens, one closes — or where the delimiting lives in the verb, the reader has to know the opening mark before knowing what comes after it. In Japanese the same particle opens and closes: hearing the syllable twice is enough to know where the quotation begins and ends, and reading a biblical paragraph becomes a matter of marking intervals.',
      ),
    },
    {
      label: T("The register of the speech is the translator's choice"),
      text: T(
        'In the Japanese translation the speech of God usually appears in the honorific that honours the other, the {osshharu}, and the register of human beings in the polite. A translator who chooses another register produces a translation that is equally correct in Japanese and sounds different. None of it is an error: it is the editorial decision showing in the grammar, which is why it is visible to anyone who studies the language instead of only using it.',
      ),
    },
  ],
  examples: [
    {
      text: '彼は「行きます」と言った',
      gloss: T(
        'kare wa「ikimasu」to iutta — he said: "I will go" (the same particle on both sides)',
      ),
    },
    {
      text: '彼は行くと言った',
      gloss: T(
        'kare wa iku to iutta — he said that I would go (same particle, verb in the plain form)',
      ),
    },
    {
      text: '彼は「田中さんが行きます」と言った',
      gloss: T(
        'kare wa「Tanaka-san ga ikimasu」to iutta — he said: "Mr Tanaka will go" (the name after the particle is who speaks)',
      ),
    },
    {
      text: '彼は神が愛されたと思っている',
      gloss: T('kare wa kami ga aisareta to omou — he thinks God was loved (report inside report)'),
    },
    {
      text: '時は満した、とイエスは言った',
      gloss: T('toki wa mitsu to, Yesu wa iutta — "the time is fulfilled", said Jesus (Mark 1:15)'),
    },
  ],
  tables: [
    {
      caption: T('Direct and indirect speech: the same particle, the test in the verb'),
      head: [T('What is compared'), T('Direct speech'), T('Indirect speech')],
      rows: [
        [T('the particle'), T('{to} appears twice'), T('{to} appears once')],
        [
          T('what follows it'),
          T('inflected verb: *watashi wa ikimasu*'),
          T('plain verb: *watashi ga iku*'),
        ],
        [
          T('who is speaking'),
          T('the first person, inside the brackets'),
          T('the outside subject: {kare} said that {watashi} would go'),
        ],
        [
          T('what the reader is'),
          T('hearing speech, word for word'),
          T('reading a report that nobody has confirmed'),
        ],
        [T('the counterpart in English'), T('"I will go"'), T('that I would go')],
      ],
    },
    {
      caption: T('Four verbs of saying, and the register of each'),
      head: [T('Verb'), T('Used when'), T('What changes')],
      rows: [
        [
          T('{iu}'),
          T('the generic act of saying'),
          T('the most neutral tone, and the most common'),
        ],
        [
          T('{kataru}'),
          T('narrating what happened, or conversing'),
          T('the tone of narrative and of long conversation'),
        ],
        [T('{kaku}'), T('what was put in writing'), T('the tone of a message, a record, a letter')],
        [
          T('{omou}'),
          T('thinking, believing, supposing'),
          T('never has direct speech: someone who thinks is not speaking'),
        ],
      ],
    },
    {
      caption: T('The punctuation of a quotation'),
      head: [T('Mark'), T('Name'), T('What it does')],
      rows: [
        [T('{to}'), T('the particle'), T('opens and closes, with the same form on both sides')],
        [T('「 」'), T('{kagi}'), T('delimits the written quotation, at the outer level')],
        [T('——'), T('dash'), T('marks speech, as the dash does in Portuguese')],
        [
          T('""'),
          T('Latin quotation marks'),
          T('foreign in a Japanese text; a sign of machine translation, not of a translator'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In {彼は行くと言った}, what shows that this is indirect speech and not direct speech?',
    ),
    options: [
      T('the particle {to} appears twice'),
      T('the verb that follows the particle is in the plain form, with no inflection'),
      T('the verb of saying is {kataru}'),
      T('the sentence ends in {ne}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the direct speech with the particle that closes the quotation: 彼は「行きます」____と言った',
      ),
      answer: 'と',
    },
    {
      kind: 'match',
      prompt: T('Match each piece to what it does'),
      pairs: [
        { a: T('{to}'), b: T('opens and closes the quotation, with the same particle') },
        { a: T('{iu}'), b: T('the generic act of saying') },
        { a: T('{kataru}'), b: T('narrating and conversing') },
        { a: T('{omou}'), b: T('thinking, and for that reason never direct speech') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('In Mandarin and in Korean, what opens and closes the quotation?'),
      options: [
        T('in Mandarin, two different characters; in Korean, the verb of saying itself'),
        T('in both, the same particle used at both ends'),
        T('in both, a colon'),
        T('in Mandarin, the particle; in Korean, the dash'),
      ],
      answer: 0,
    },
  ],
};

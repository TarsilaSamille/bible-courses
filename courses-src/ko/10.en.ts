import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Syntax'),
  title: T(
    'Connectives: the words that stitch sentences together and reveal the mind behind the text',
  ),
  subtitle: T(
    'In Korean the connective comes after the verb, at the end of the clause, and that position says more about the text than the word itself',
  ),
  body: C(`## The connective does not go where you expect

In Portuguese you write "I am going and I am eating": the "and" sits in the middle, between the two clauses, and it is what stitches one to the other. Korean does it the other way round. The connectives that **add**, {geureo} ("and, and then"), {hago} ("and, and also") and {hyeonchan} ("also, moreover"), enter **after the verb**, at the end of the clause they govern. *Neoneun bap-eul meok-go hak-gyo-e ga-neun-da* means "I eat and go to school": the {go} stuck to {meokgo} is the verb "eat", and the {go} of the second clause is the same sound as the {hago}, now doing the job of a connective.

That is why the translator has to build the sentence in Korean order rather than Portuguese order. In Portuguese the connective comes between the clauses; in Korean it **closes** the first one. "I am going to eat and" is already a complete, well-formed Korean sentence, and the clause that follows it is the second half of the thought. The connective ties the clauses together by sitting in the middle of the sentence, never between them.

And the same {go} sound turns up twice with two jobs, and only the position says which is which: stuck to a noun it is a verb, stuck to a clause that is already closed it is a connective. Anyone who learns by ear alone gets it wrong; anyone who learns by position gets it right.

## Contrast: one "but" and its degrees

{jiman} is the "but" of the cut: it arrives at the end of the first clause and denies what that clause has just said. {geureodo} does the same work with less weight, it is the "but, even so", the contrast that does not interrupt and merely bends the course. {geureona} is the more written, older form of the same {geureodo}, and {imyeon} is the "whereas", the contrast between two things that ran side by side without ever meeting.

All four come at the end of the clause, and that is the part that surprises. In Portuguese the "but" is a bridge: you cross it as you arrive at the second clause. In Korean the contrast is a closure; it only arrives once the second clause has already begun, already said its subject and already done its verb, and only then does it turn around and correct what came before. The Korean listener does not expect the contrast at the entrance of the clause, and that is why a text translated with {jiman} in the wrong place sounds wrong before any word has been noticed.

## Cause, consequence, and the fixed pair

{ttaeumane} is "because", {georeumeuro} is "therefore" and {deuraseo} is the everyday "so". {eoseo} is the most elementary of them all: it is the "because" glued to the end of the verb, and *bi-ga o-seo* means "because it rains", with not one word more. Notice that all four close the preceding clause instead of opening the following one: the cause is said after the effect, and the effect is said after the cause.

The pair {ttaeumane} ... {georeumeuro} is fixed, as automatic as "because... therefore" in Portuguese, and the pair {ttaeumane} ... {deuraseo} is the same pair in ordinary speech. {georeumeuro} is the written member, {deuraseo} is the popular one, and neither needs the other in order to work.

The comparison with the other two languages of this project shows the same thing. In Mandarin, *yīnwèi* ("because") and *suǒyǐ* ("therefore") open the clause: they come **before** the subject. In Japanese, *kara* and *node* also close the clause. In Korean, {ttaeumane} and {georeumeuro} close. There are two positions for the same idea, and it is the position, not the vocabulary, that separates the languages.

## Condition, concession, and what the position reveals

{myeon} is the "if": *bi-ga o-myeon an ga-yo*, "if it rains, I am not going". {neunimyeon} is the "if it were", the hypothetical mood, more careful. {geureodo} comes back here with another sense: as concession, "even though". {daui} is the "only, just", and it cuts the rest of the sentence off. The exception is {ttak}: {ttak} goes at the **beginning** of the clause and is rare, and a reader who runs into a {ttak} in a text knows they have found something outside the pattern.

And the conclusion is not literary analysis: it is order of speaking. A connective at the end of the clause means the speaker **organises the discourse by the verb**. He first says what happened and only then comments on what that means. A connective at the beginning, which is the case in Mandarin, means the speaker **organises by the context**: he first announces the intention, the cause or the contrast, and only then says what happened. The two languages say the same thing about the world; what changes is where the speaker starts, and that is automatic, not style.

The biblical hook closes the lesson. The 1917 Korean translation was literal and reflects the Greek, which also closes the clause with the connective, as every Indo-European language does, and that is why old Korean piles up "so... and... and" on nearly every line. The 1961 translation modernised the syntax and thinned out those connectives, and that is why it sounds different from the others. And the best-known example shows the rule at work: in John 3:16, "for God so loved the world", the "for" of Portuguese opens the verse, but the Korean {ttaeumane} closes the preceding clause, exactly as it did in Greek. In 1 Corinthians 13:4 to 13:8 the contrast is the fabric of the whole passage, and the list of *sarang-eun ora-e cho-go*, "love is patient", is cut in half in the following verse, with the {jiman} arriving only at the end of the clause.
`),
  vocab: [
    V('geureo', '그리고', 'and, and then: additive connective at the end of the clause'),
    V('hago', '하고', 'and, and also: same job, shorter form'),
    V('hyeonchan', '또한', 'also, moreover: a more formal addition'),
    V('jiman', '지만', 'but: strong contrast, at the end of the clause'),
    V('geureodo', '그래도', 'but, even so: soft contrast and concession'),
    V('geureona', '그러나', 'however: the written form of geureodo'),
    V('imyeon', '이면', 'whereas, while: contrast in parallel'),
    V('myeon', '면', 'if, in case: conditional at the end of the clause'),
    V('neunimyeon', '느니면', 'if, if it were: hypothetical conditional'),
    V('daui', '다만', 'only, just: cuts the rest of the sentence off'),
    V('ttak', '딱', 'still, exactly: goes at the beginning and is rare'),
    V('ttaeumane', '때문에', 'because, on account of: cause at the end of the clause'),
    V('eoseo', '어서', 'because: cause glued to the end of the verb'),
    V('deuraseo', '그래서', 'so: consequence in everyday use'),
    V('georeumeuro', '그러므로', 'therefore: the written member of the fixed pair'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Additive connectives ({geureo}, {hago}, {hyeonchan}) and contrastive ones ({jiman}, {geureodo}, {geureona}, {imyeon}) enter after the verb, at the end of the clause they govern.',
      ),
    },
    {
      n: '2',
      text: T(
        '{jiman} is the strong cut; {geureodo} is the soft deviation and doubles as concession. Both arrive once the second clause has already done its verb.',
      ),
    },
    {
      n: '3',
      text: T(
        '{ttaeumane} and {georeumeuro} form a fixed pair; {deuraseo} and {eoseo} are the everyday forms of cause and consequence, all of them at the end of the clause.',
      ),
    },
    {
      n: '4',
      text: T(
        'Condition and concession: {myeon}, {neunimyeon} and {geureodo}, at the end. The exception is {ttak}, which goes at the beginning and is rare.',
      ),
    },
    {
      n: '5',
      text: T(
        'In Korean the connective closes the clause; in Mandarin it opens it. Both paths are automatic, and that order is what the speaker has internalised.',
      ),
    },
  ],
  notes: [
    {
      label: T('One sound, two jobs'),
      text: T(
        'The sound {go} appears inside {meokgo}, which is the verb "eat", and inside {hago}, which is the connective "and". Nothing in the word tells them apart: it is the position that says which is which, and that is why position is what gets taught first.',
      ),
    },
    {
      label: T('Greek also closes the clause'),
      text: T(
        'The 1917 Korean translation was literal and reflects the Greek, where connectives come at the end of the clause as in every Indo-European language. Hence old Korean piling up "so... and... and". The 1961 translation thinned those connectives out, and that is why it sounds different.',
      ),
    },
  ],
  examples: [
    {
      text: '밥을 먹고 학교에 가요',
      gloss: T('ba-beul meok-go hak-gyo-e ga-yo — I eat and go to school'),
    },
    {
      text: '비가 오지만 우산은 안 가져왔어요',
      gloss: T(
        'bi-ga o-ji-man u-san-eun an ga-jeo-wa-sseo-yo — it rains, but I did not bring an umbrella',
      ),
    },
    {
      text: '배가 아파서 병원에 갔어요',
      gloss: T(
        'bae-ga a-pa-seo byeong-won-e ga-sseo-yo — I had a stomachache, so I went to the hospital',
      ),
    },
    { text: '비가 오면 안 가요', gloss: T('bi-ga o-myeon an ga-yo — if it rains, I am not going') },
    { text: '사랑은 오래 참고', gloss: T('sa-rang-eun o-ra-e cho-go — love is patient') },
  ],
  tables: [
    {
      caption: T('The contrastive connectives and the strength of the cut'),
      head: [T('Connective'), T('Gloss'), T('Position'), T('Tone')],
      rows: [
        [T('{jiman}'), T('but'), T('end of the 1st clause'), T('strong cut')],
        [
          T('{geureodo}'),
          T('but, even so'),
          T('end of the 1st clause'),
          T('soft deviation; also concession'),
        ],
        [T('{geureona}'), T('however'), T('end of the 1st clause'), T('written register')],
        [T('{imyeon}'), T('whereas'), T('end of the 1st clause'), T('contrast in parallel')],
      ],
    },
    {
      caption: T('Where the connective enters in each of the three languages'),
      head: [T('Function'), T('Mandarin'), T('Japanese'), T('Korean')],
      rows: [
        [
          T('and'),
          T('*ér*, at the start of the 2nd clause'),
          T('*to*, at the end'),
          T('{geureo}, at the end'),
        ],
        [T('but'), T('*dànshì*, at the start'), T('*ga*, at the start'), T('{jiman}, at the end')],
        [
          T('because'),
          T('*yīnwèi*, at the start'),
          T('*kara*, at the end'),
          T('{ttaeumane}, at the end'),
        ],
        [
          T('therefore'),
          T('*suǒyǐ*, at the start'),
          T('*node*, at the end'),
          T('{georeumeuro}, at the end'),
        ],
      ],
    },
    {
      caption: T('Condition, concession, and the exception that breaks the pattern'),
      head: [T('Connective'), T('Gloss'), T('Position'), T('Remark')],
      rows: [
        [T('{myeon}'), T('if, in case'), T('end of the 1st clause'), T('the common conditional')],
        [
          T('{neunimyeon}'),
          T('if, if it were'),
          T('end of the 1st clause'),
          T('hypothetical, more careful'),
        ],
        [
          T('{geureodo}'),
          T('even though'),
          T('end of the 1st clause'),
          T('the same {geureodo}, as concession'),
        ],
        [
          T('{daui}'),
          T('only, just'),
          T('end of the 1st clause'),
          T('cuts the rest of the sentence off'),
        ],
        [T('{ttak}'), T('still, exactly'), T('start of the clause'), T('rare; off-pattern')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In Korean, where does the connective {geureo}, the "and" that joins two clauses, go?',
    ),
    options: [
      T('after the verb, at the end of the clause'),
      T('before the subject, at the start of the clause'),
      T('between the two clauses'),
      T('wherever the speaker chooses'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the contrastive "but", at the end of the clause: 비가 오____ 우산이 없다',
      ),
      answer: '지만',
    },
    {
      kind: 'match',
      prompt: T('Match the connective to its function'),
      pairs: [
        { a: T('{geureo}'), b: T('and, and then (end of the clause)') },
        { a: T('{hago}'), b: T('and, and also (end of the clause)') },
        { a: T('{jiman}'), b: T('but, strong cut') },
        { a: T('{ttaeumane}'), b: T('because, cause') },
        { a: T('{myeon}'), b: T('if, condition') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements about the Korean connective is true?'),
      options: [
        T('additive and contrastive connectives come after the verb'),
        T('connectives come before the subject, as in Mandarin'),
        T('{ttak} is the commonest connective in Korean'),
        T('Korean has no connectives of cause'),
      ],
      answer: 0,
    },
  ],
};

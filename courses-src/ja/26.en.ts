import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Particle'),
  title: T('{wa} and {ga}: what is topic and what is subject'),
  subtitle: T(
    'Both go after the noun, in the same position, and neither inflects; what separates them is what the reader already knows when the sentence starts',
  ),
  body: C(`
## Two particles, the same spot

Portuguese treats topic and subject the same way. In "Pedro saw the cat" there is nothing that says whether Pedro is the topic of the conversation or whoever performed the verb, and the context settles it without leaving a trace. In Japanese the distinction exists, lives in a particle, and does not survive word-for-word translation. {wa} goes after the noun and marks topic, what the sentence is about. {ga} goes after the noun and marks subject, whoever performs the action of that clause.

The two take exactly the same position, and that is why the position does not tell you which is which. *kare wa iku* and *kare ga iku* have the same words in the same order and produce different sentences. Neither of them is an article, and neither inflects: they are the two marks a noun can take, and a noun takes one of them at a time.

## What {wa} does: topic, contrast, reference

Topic is what the reader already knows. In "he goes", the speaker has already settled who is being talked about, and what the sentence delivers is the verb; {wa} marks the part that was already won, and that is why it almost disappears in translation, because Portuguese has no word for "what I am treating here" either.

{wa} does three more things, and all three show up in an Gospel page after page. The first is contrast: the same particle on both sides of two clauses produces "not A, but B". John 1:5 is the cleanest example, *hikari wa yami no naka ni kagayaiteru. yami wa kore ni uchikatachanakatta.*: the {wa} in the second clause does not repeat a topic, it sets one topic against another, and the second clause is the one that carries the weight.

The second is reference. When the noun has already appeared and the sentence returns to it, {wa} is what calls the reader back, and a translation that writes "as for this" is inventing a sentence Japanese does not have. The third is the particle of "that is", "in other words": *kore wa ii koto da to iu koto da*, "this is what being a good thing means", where {wa} marks the topic of a clause that goes on to explain the topic of the one before.

## What {ga} does: the subject that is new information

{ga} marks the subject of a clause, and what it marks is usually exactly what the reader did not have: what the sentence delivers. In *fuku ga furu*, "it rains", Portuguese needs no subject because in Portuguese rain has nobody raining it; in Japanese the rain is a noun, and a noun needs a particle like any other.

The practical rule fits in one line: if the noun is what the conversation is already about, it takes {wa}; if the noun is what the clause is asserting right now, it takes {ga}. Both cases appear in the same paragraph, and what separates them is what was said before, not the sentence on the page. In John 3:19, *hikari ga yo ni kite iru no ni*, the {ga} sits on whoever performs the action precisely because the light is the new topic of the clause, and the second clause of the same line already goes on to speak of people with {wa}.

## When both enter the same clause

A clause can have topic and subject at once, and then there are two particles in two positions. *Mado wa soto ga kakoyō*, "the window is noisy outside": {wa} marks the window, which is the topic, and {ga} marks what is noisy, which is the information. *Sono hon wa dare ga yomimashita ka*, "who read that book", does the same with an interrogative in the {ga}.

The second situation inverts the pair and is the most useful one in a biblical text: in the passive, whoever suffers the action becomes topic with {wa} and whoever does it becomes subject with {ga}. *Kami ga hito o yobutta* is "God sent the man"; *hito wa kami ga yoborareta* is the same sentence with the roles swapped, and the noun that was subject has become topic. John 1:6 uses the second shape: *kami yobarusareta Yohane to iu hito ga arawareta*, and whoever translates has to decide, with no way out, which of the two nouns in the Japanese version is the topic of the clause.

The third is the verb of existence, {aru} and {iru}, which is the case where {wa} is simply wrong. "I have a friend" is *tomodachi ga imasu*, and the {ga} does not mark the subject of the conversation: it marks the thing that exists. The same goes for *kuruma ga arimasu*, the car is here. With a verb of existence, whatever exists takes {ga}, and writing {wa} produces a sentence a native reader reads as wrong even when the sense is fully intact.

And there is a fourth case, the shortest of them all: the verb to be. *Shu wa kami desu*, "the Lord is God", takes {wa} and does not take {ga}, because what the clause asserts is the identity of the topic itself. There are four situations, and all four give the same advice: the particle on a noun is not chosen by the meaning of the sentence, it is chosen by what that clause does with that noun.
`),
  vocab: [
    V(
      'wa',
      'は',
      'topic: what the reader already knows and the sentence is about; across clauses, contrast (wa)',
    ),
    V(
      'ga',
      'が',
      'subject: who performs the action of the clause, and the information the sentence delivers (ga)',
    ),
    V('fuku', '降る', 'to fall; the rain, as a noun: *fuku ga furu* (fuku)'),
    V('yami', '闇', 'darkness (yami)'),
    V('hikari', '光', 'light (hikari)'),
    V('kotoba', 'ことば', 'word; the noun of John 1:1 (kotoba)'),
    V('kami', '神', 'God; and, in compounds, the root of everything that is of God (kami)'),
    V('sono', 'その', 'that; the demonstrative that points at what was mentioned already (sono)'),
    V('dare', '誰', 'who; the interrogative that enters in {ga} (dare)'),
    V('mado', '窓', 'window (mado)'),
    V('soto', '外', 'outside; the outside, and "outside of" (soto)'),
    V('yobaru', '現われる', 'to appear, to be present; the verb of John 1:6 (yobaru)'),
    V('okuru', '送る', 'to send; the verb of the passive example (okuru)'),
    V('tomodachi', '友', 'friend, companion (tomodachi)'),
    V('aru', 'ある', 'to be, to exist: the verb that never accepts {wa} on the noun (aru)'),
    V('iru', 'いる', 'to be, to occupy a place; and to exist, when what exists is people (iru)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{wa} and {ga} go after the noun, in the same position, and neither is an article nor inflects. A noun takes one of them at a time.',
      ),
    },
    {
      n: '2',
      text: T(
        '{wa} marks the topic, which is what the reader already knows; {ga} marks the subject, which is the new information of the clause. What decides is what was said before, not the sentence in front of you.',
      ),
    },
    {
      n: '3',
      text: T(
        '{wa} in two clauses makes contrast, and that is how John 1:5 puts light and darkness side by side.',
      ),
    },
    {
      n: '4',
      text: T(
        'In the passive the patient takes {wa} and the agent takes {ga}: *sono hito wa kami ga okutta*. It is the inversion Portuguese does not have.',
      ),
    },
    {
      n: '5',
      text: T(
        'With {aru} and {iru} whatever exists takes {ga}: *tomodachi ga imasu*, *kuruma ga arimasen*. With the verb to be, the subject takes {wa}: *shu wa kami desu*.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why a beginner writes {ga} everywhere'),
      text: T(
        'Whoever translates from Portuguese looks for the subject of the clause, finds {ga}, and the sentence comes out right three quarters of the time, because in Portuguese almost every verb has an explicit subject. What gives away the excess is the word after it: if the noun has already appeared in the previous clause, what it takes is almost always {wa}, because the topic at stake is the same one. Reading rule: if the Japanese line repeats a noun the previous line already had, the particle is {wa}; if it brings a noun the reader was not expecting, it is {ga}.',
      ),
    },
    {
      label: T('A noun takes only one particle per clause'),
      text: T(
        'In *hon to notebook ga arimasu*, "I have a book and a notebook", both nouns are there and there is a single {ga}, at the end. The particle closes the list of nouns, and whoever writes *hon ga, notebook ga* is making two clauses Japanese did not have. It is the same economy as the particle {no}, which links without repeating: what repeats in Japanese is the structure, not the mark.',
      ),
    },
  ],
  examples: [
    {
      text: '光はやみの中に輝いている。やみはこれに打ち勝たなかった。',
      gloss: T(
        'hikari wa yami no naka ni kagayaiteru. yami wa kore ni uchikatachanakatta. — the light shines in the darkness, and the darkness did not overcome it (John 1:5): both {wa} mark topics that oppose each other',
      ),
    },
    {
      text: '初めに、ことばがあった。ことばは神とともにあった。',
      gloss: T(
        'hazime ni, kotoba ga atta. kotoba wa kami to tomoni atta. — in the beginning was the word; the word was with God (John 1:1-2): the same noun, two particles',
      ),
    },
    {
      text: '神から遣わされたヨハネという人が現われた',
      gloss: T(
        'kami yobarusareta Yohane to iu hito ga arawareta — there appeared a man called John, sent by God (John 1:6): {kami} is who sends, {hito} is who appears',
      ),
    },
    {
      text: 'その本は誰が読みましたか。',
      gloss: T(
        'sono hon wa dare ga yomimashita ka — who read that book (the book is the topic, and the interrogative is the subject)',
      ),
    },
    {
      text: '窓は外が騒がしい',
      gloss: T(
        'mado wa soto ga kakoyō — the window is noisy outside (topic and subject in one clause)',
      ),
    },
    {
      text: '友達がいます。',
      gloss: T('tomodachi ga imasu — I have a friend (with the verb of existence, {wa} is wrong)'),
    },
    {
      text: '主は神です。',
      gloss: T(
        'shu wa kami desu — the Lord is God (the verb to be takes the topic, not the subject)',
      ),
    },
    {
      text: 'その人は神が遣わした。',
      gloss: T(
        'sono hito wa kami ga okutta — that person was sent by God (passive: {wa} on the patient, {ga} on the agent)',
      ),
    },
  ],
  tables: [
    {
      caption: T(
        'The same noun with {wa} and with {ga}: what changes is what the reader already knows',
      ),
      head: [T('What you mean'), T('What gets written'), T('What the reader knows')],
      rows: [
        [T('as for him, he goes'), T('{kare wa iku}'), T('who is at stake: already the topic')],
        [T('he went'), T('{kare ga iku}'), T('who did it: it is the information of the sentence')],
        [
          T('not the father, but the son'),
          T('{chichi wa …, musuko wa …}'),
          T('two opposing topics, and the second clause wins'),
        ],
        [
          T('he has a book'),
          T('{kare ni hon ga aru}'),
          T('who has it is what is asserted: {ga} because of {aru}'),
        ],
        [
          T('when the one who came, who?'),
          T('{dare ga kita ka}'),
          T('the noun is new, and so it comes in {ga}'),
        ],
      ],
    },
    {
      caption: T('The four situations in which both enter the same clause'),
      head: [T('The sentence'), T('What takes {wa}'), T('What takes {ga}'), T('Why')],
      rows: [
        [
          T('{mado wa soto ga kakoyō}'),
          T('the window'),
          T('what is noisy'),
          T('topic, and the new information'),
        ],
        [
          T('{sono hon wa dare ga yomimashita ka}'),
          T('the book'),
          T('who, interrogative'),
          T('the focus of the question is the {ga}'),
        ],
        [
          T('{shu wa kami desu}'),
          T('the Lord'),
          T('nothing'),
          T('the verb to be has no subject of its own'),
        ],
        [
          T('{sono hito wa kami ga okutta}'),
          T('that person, who suffers'),
          T('God, who does'),
          T('the passive swaps the two roles'),
        ],
        [
          T('{tomodachi ga imasu}'),
          T('nothing'),
          T('the friend'),
          T('with {iru}, whatever exists is subject, not topic'),
        ],
      ],
    },
    {
      caption: T('The same information, the two particles, and what changes in Portuguese'),
      head: [T('Portuguese'), T('Japanese'), T('When the noun is the same, what changes')],
      rows: [
        [
          T('Pedro went to church'),
          T('{kare wa kyōkai e iki}, when who is at stake is already known'),
          T('the particle disappears: Portuguese does not mark topic'),
        ],
        [
          T('Pedro went to church'),
          T('{kare ga kyōkai e iki}, when it is new information'),
          T('the noun takes {ga} and becomes the subject'),
        ],
        [
          T('Pedro arrived late'),
          T('{kare wa osoi} or {kare ga osoi}'),
          T('both are possible; the previous clause decides'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {友達がいます}, why does the noun take {ga} and not {wa}?'),
    options: [
      T('because {iru} is the verb of existence, and what exists enters as subject, not as topic'),
      T('because the noun is at the end of the sentence and {wa} never appears at the end'),
      T('because {ga} is the particle of the object and {wa} is the particle of place'),
      T('because Portuguese says "I have a friend" and the translation forces the noun to change'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Fill in the subject particle of the verb of existence: 友達____います (I have a friend)',
      ),
      answer: 'が',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to what it marks'),
      pairs: [
        {
          a: T('{wa}'),
          b: T('the topic: what the reader already knows and the sentence is about'),
        },
        {
          a: T('{ga}'),
          b: T('the subject: who performs the action and what the sentence asserts'),
        },
        {
          a: T('{sono hito wa kami ga okutta}'),
          b: T('the passive: the patient in {wa}, the agent in {ga}'),
        },
        {
          a: T('{tomodachi ga imasu}'),
          b: T('the verb of existence: whatever exists enters in {ga}'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'You read two lines in a row and the same noun appears in both. In the second line, which particle is likelier?',
      ),
      options: [
        T('{wa}, because the noun was already the topic and the new line returns to it'),
        T('{ga}, because the second line starts a new clause and brings new information'),
        T('neither, because a noun cannot take a particle twice'),
        T('{ga}, because the Portuguese translation puts the subject back in every clause'),
      ],
      answer: 0,
    },
  ],
};

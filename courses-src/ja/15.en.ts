import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Verbo'),
  title: T('The three registers of the verb: plain, polite and honorific'),
  subtitle: T(
    'Japanese marks distance with an auxiliary stuck onto the root of the verb — which is why it resembles Korean without being the same thing',
  ),
  body: C(`
## The verb does not change: the auxiliary does

The verb lesson showed the first two registers, the plain one ({naru}, {taberu}) and the polite one (*narimasu*, *tabimasu*). The system closes with the third, and the closing reveals the sharpest difference between Japanese and Korean.

In Korean the honorific is the word: *meokda*, *meokneunda*, *meogeora*, three different verbs for the same action, picked according to the position of the other person. In Japanese it is the **auxiliary**: the root {taberu} "to eat" is the same in all three registers, and what changes is the piece stuck on its end. Same reasoning, same distance, two different engineering solutions to one idea.

The **plain** register is between equals, and it is also the register of written text: a notebook, an e-mail, a catalogue, a recipe. It is not rude, it is simply direct. It marks no position because it has no position to mark.

The **polite** register ({naru} plus {masu}) is the default of speech and of everyday documents. It is the form nearly everybody uses all day without thinking about it, and that is why a Japanese speaker sounds courteous without any formula of politeness at all. The ending {desu} closes the sentence.

The **honorific** register is for whoever stands above you: the client, the teacher, an elder, God.

## The two halves of the honorific

The honorific has two halves, and they do not mix. {keigo} honors the other: when you say "the client has already arrived" with {irassharu}, you are talking about the client and talking about him respectfully. {kenjōgo} lowers yourself: when you say "I bought it for you", you are talking about yourself and talking about yourself respectfully.

The construction is the same in both cases, and that is what trips the beginner: he sees one piece and concludes there is only one honorific. There are two, and using one in place of the other sounds wrong without his being able to say why.

## How it is formed

{keigo} works as an auxiliary glued to the root. For {taberu}, the respectful form is *tabete irassharu*, and the same piece serves the verb "to go" and the verb "to come", because all three pass through it.

{kenjōgo} uses verbs of its own. For {suru}, to say and to do, the humble form is *mōsu*, and its polite form is *mōshimasu*. For {taberu}, it is *itadaku*, the word every Japanese person says when sitting down to eat.

And there are two exceptions the reader needs to know, because they are the two cases in which the Japanese honorific is not an auxiliary. The first is {nasaru}, the honorific of {suru}: the root changes completely, and there is no piece at all to glue on. The second is {osshharu}, the honorific of "to say": the root changes there too, and the initial sound doubles. No other verb behaves this way.

There is a third case, on the side: {irassharu} is in itself a complete verb, meaning "to be, to be here". That is why it appears on its own, with no root in front of it, "the teacher is here". Every other honorific is a piece glued on; this one is a word.

## The mistake that is not a mistake

The most common error of a beginner is to use the humble form when talking about himself. "I went to church yesterday" is neutral register: narrating requires no lowering of oneself. {kenjōgo} is for when you act as the other's servant: you buy, he receives the goods; you prepare, he eats.

The difference between "I bought it" and "I bought it for you" is not in the verb but in the recipient. The formula is the same; what changes is whom the gesture is aimed at. And that is why *itasu*, the humble form of "to do", almost always comes with someone nearby: "I do it for you". It is never "I do" and nothing else.

None of this is decorative politeness. The honorific is how Japanese marks distance and position without ever saying that distance exists. A price catalogue uses no honorific, because nobody stands above the person reading the list. A business letter uses one, because the client stands above the person writing.

## The biblical hook

The Japanese Bible translation read aloud in church usually appears in the polite register, because that is what sounds good read out loud. In the written text the pattern is different: {keigo} for God, polite for human beings, plain in the narrative. The same contrast shows up in Korean, and it is what ties the two courses together.

And the most beautiful point here, which is theologically exact: **God is treated with the highest {keigo} and never with {kenjōgo}**. Nobody prays in the register that lowers itself in order to ask something of God. The grammar of distance already places God above without anyone needing to teach it, and that is why the theological point and the grammatical point land in the same place.
`),
  vocab: [
    V('naru', 'なる', "to be; to become (naru) — the root used in this lesson's examples"),
    V('taberu', '食べる', 'to eat (taberu) — the root that crosses all three registers'),
    V('masu', 'ます', 'the auxiliary of the polite register: same root, distance marked'),
    V('desu', 'です', 'sentence-final ending of the polite register: "is"'),
    V('keigo', '敬語', 'the honorific that honors the other (keigo)'),
    V(
      'irassharu',
      'いらっしゃる',
      'honorific of "to be, to come, to be here"; respectful auxiliary',
    ),
    V('nasaru', 'なさる', 'honorific of {suru}: the first exception, the root changes completely'),
    V(
      'osshharu',
      'おっしゃる',
      'honorific of "to say": the second exception, the root changes and the initial doubles',
    ),
    V('kenjōgo', '謙譲語', 'the honorific that lowers oneself (kenjōgo)'),
    V('mōsu', '申す', 'humble "to say": to speak of oneself to someone above'),
    V('itadaku', 'いただく', 'humble "to eat": to receive from someone (the word of the meal)'),
    V('itasu', 'いたす', 'humble "to do": to do for the addressed party, always with a recipient'),
    V('suru', 'する', 'to do, to say (suru) — the root whose honorific is a different verb'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The verb does not change between registers: what changes is the auxiliary glued to the root. In Korean the word changes; in Japanese the piece stuck to the end changes.',
      ),
    },
    {
      n: '2',
      text: T(
        'The plain register is between equals and is the register of written text; the polite register ({masu}) is the default of speech; the honorific is for whoever stands above you.',
      ),
    },
    {
      n: '3',
      text: T(
        '{keigo} honors the other and {kenjōgo} lowers yourself. The construction is the same in both halves, and the two do not mix.',
      ),
    },
    {
      n: '4',
      text: T(
        'Narrating what you yourself did requires no humility. {kenjōgo} is for when you act as the other\'s servant, and the difference between "I bought it" and "I bought it for you" lies in the recipient, not in the verb.',
      ),
    },
    {
      n: '5',
      text: T(
        'Two exceptions break the auxiliary pattern: {nasaru}, the honorific of {suru}, and {osshharu}, the honorific of "to say", replace the root entirely. And {irassharu} is not an auxiliary at all: it is a complete verb.',
      ),
    },
  ],
  notes: [
    {
      label: T('The honorific is information, not decoration'),
      text: T(
        'It exists to mark the distance and the position between the two people in the sentence, and nothing else. A price catalogue uses no honorific because nobody stands above the person reading the list; a business letter uses one because the client stands above the person writing. This is how Japanese says who is on top, without ever using the word "on top".',
      ),
    },
    {
      label: T('God gets keigo and never kenjōgo'),
      text: T(
        'In the Japanese translations of 1987 and of 2003 the treatment of God is the honorific that honors the other, and the polite register for human beings. Nobody prays in the register that lowers itself in order to ask something of God: the grammar of distance places God above any instruction, and the theological point and the grammatical point end up in the same place.',
      ),
    },
  ],
  examples: [
    {
      text: '先生いらっしゃいます',
      gloss: T(
        'sensei wa irasshaimasu — the teacher is here (honorific, and {irassharu} is a complete verb)',
      ),
    },
    {
      text: 'なさいます',
      gloss: T('nasaimasu — you do (honorific of {suru}; the first exception, the root changes)'),
    },
    {
      text: 'おっしゃいます',
      gloss: T(
        'osshahaimasu — you say (honorific of "to say"; the second exception, the initial doubles)',
      ),
    },
    {
      text: 'いただきます',
      gloss: T('itadakimasu — I eat (humble; the word said when sitting down to a meal)'),
    },
    {
      text: 'いたします',
      gloss: T('itashimasu — I do, for you (humble of {suru}; {itasu} always has a recipient)'),
    },
  ],
  tables: [
    {
      caption: T('The three registers and what each one says'),
      head: [T('Register'), T('Auxiliary'), T('For whom'), T('Where it appears')],
      rows: [
        [
          T('plain'),
          T('none'),
          T('an equal, and written text'),
          T('notebook, catalogue, recipe, biblical narrative'),
        ],
        [
          T('polite'),
          T('{masu}'),
          T('anyone, by default'),
          T('everyday speech; {desu} closes the sentence'),
        ],
        [
          T('honorific'),
          T('{irassharu} in {keigo}, {mōsu} in {kenjōgo}'),
          T('whoever stands above you'),
          T('business letter, addressing someone by name, prayer'),
        ],
      ],
    },
    {
      caption: T('The two halves of the honorific, with an identical construction'),
      head: [T('Half'), T('What it does'), T('About whom you speak'), T('Typical verb')],
      rows: [
        [
          T('{keigo}'),
          T('honors the other'),
          T('the client, the teacher, God'),
          T('{irassharu}, "to be, to come"'),
        ],
        [
          T('{kenjōgo}'),
          T('lowers yourself'),
          T('yourself, in the role of servant'),
          T('{mōsu}, "to say"'),
        ],
      ],
    },
    {
      caption: T('Where the auxiliary pattern fails'),
      head: [
        T('Source verb'),
        T('Respectful form'),
        T('What happens'),
        T('Why it is an exception'),
      ],
      rows: [
        [
          T('{suru}'),
          T('{nasaru}'),
          T('the root changes completely'),
          T('there is no piece to glue on the end'),
        ],
        [
          T('"to say"'),
          T('{osshharu}'),
          T('the root changes and the initial doubles'),
          T('the sound cannot be deduced from the rest of the verb'),
        ],
        [
          T('"to be"'),
          T('{irassharu}'),
          T('it is a complete verb, not an auxiliary'),
          T('it appears alone, with no root in front of it'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('When you say "I bought it for you", which half of the honorific is at work?'),
    options: [
      T('{keigo}, which honors the other'),
      T('{kenjōgo}, which lowers yourself'),
      T('neither: it is neutral register'),
      T('both at once'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete the honorific of {suru} "to do", whose root changes completely and uses no auxiliary: ______',
      ),
      answer: 'nasaru',
    },
    {
      kind: 'match',
      prompt: T('Match each form to what it does'),
      pairs: [
        { a: T('{irassharu}'), b: T('honors the other: "you are here"') },
        { a: T('{mōsu}'), b: T('lowers yourself: "I speak respectfully of myself"') },
        { a: T('{itasu}'), b: T('to do for the addressed party, with a recipient') },
        { a: T('{masu}'), b: T('the auxiliary of the polite register, which marks no distance') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which of these statements is correct?'),
      options: [
        T('narrating what you yourself did requires the humble register'),
        T('the Japanese honorific replaces the root of the verb, the way Korean replaces the word'),
        T('the two halves of the honorific have the same construction and cannot be mixed'),
        T('God is treated in the humble register in the translations of 1987 and of 2003'),
      ],
      answer: 2,
    },
  ],
};

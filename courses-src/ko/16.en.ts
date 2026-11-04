import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  section: T('Pronouns'),
  title: T(
    'The pronoun that does not fuse with the verb, and the omission that looks like carelessness',
  ),
  subtitle: T(
    'The ending is already the subject, the object has to be spelled out in full, and two entities with a subject particle fit in one clause',
  ),
  body: C(`## The subject fuses, the object has to be written

The ending of the verb is already the pronoun, and that ending has already been seen at work. The pair closes with an asymmetry: the subject pronoun fuses with the verb, and the object pronoun has no fused form at all.

The subject is already there at the end of the word. {meokneunda}, "to eat", needs no pronoun: the one eating is the first person, and that lives in the ending, not at the front of the sentence. The object has no such exit. "I eat" and "I eat him" are different sentences, and the second has to say "him" in full: {geo} with {reul}, I eat him. No ending carries the object, no position of the verb makes the mark disappear, no fusion is possible. That is why the Korean object pronoun is written every single time, without one exception in running text.

The consequence shows up in length. Japanese allows the object to be left implicit when the context already resolves who the target of the action is; Korean does not, and the Korean rendering of a Japanese sentence almost always comes out longer than the original. A reader of Portuguese translating word for word writes {nae} every time a pronoun appears and {geo} every time an "he" appears, producing a text that is more explicit and longer, and producing Korean, not Japanese. Each of the two languages solved the same problem in its own way, and Korean chose the way that writes.

## The swap that catches the beginner: object particle where the subject one belongs

The commonest mistake of a beginner is not one of vocabulary: it is one of function. The subject takes {i} {gwa}, the direct object takes {eul} {reul}, and the choice between the two members of each pair is still the same rule, count the last letter of the word. What catches people is the crossing: someone who memorises "the object particle" and applies it to any noun writes {geo} with {i}, that is, "he" marked as subject in the object slot. The listener does not understand something else: he understands that "he" is the subject, and the whole sentence changes meaning without anything having moved.

The same crossing works in the other direction, and it is harder to see: using {eul} {reul} on a subject. "The Word" as subject is {mal} with {i}, never with {eul}. And the clue is position: in Korean the subject comes after the verb, and the object particle always appears before it. An object particle glued to a noun that stands after the verb is an immediate sign that something is wrong.

The asymmetry that closes the pair is this: the subject pronoun is the only one that can vanish on its own, because the verb ending repeats it. The object pronoun practically never vanishes on its own, and when it is missing a whole phrase has taken its place and the context already resolves who the target is. Those are two different regimes of omission, and the difference between them is part of what separates Korean text from Japanese text.

## Omitting the subject is free; omitting the object is rare

In Korean both can disappear, as long as the context resolves it. The subject disappears all the time: {meokneunda} with nobody in front of it means "I eat" for any listener. The object can disappear too, but it is much rarer, and when the text is careful, a Bible translation, a book, the object comes back and gets written. The practical rule is this: when the context does the work, both subject and object are optional, but nobody is surprised by a missing subject and everybody notices a missing object.

The other side of the same coin is the dropped possessive. "My book" in Korean is a possessive particle glued to the noun, and the pronoun may go: the particle alone already says whose it is. In Portuguese the possessive pronoun is obligatory, and "the book" with nothing in front of it is a sentence the listener either completes on his own or does not understand. That is why Korean has a more active voice than Portuguese: the grammatical subject comes after the verb and may be missing, and what stays on the left of the sentence is the object and the reference, not the agent. In Japanese and in Mandarin the subject is optional too, and for the same reason: the verb already carries the person.

Anyone translating from Portuguese into Korean has to watch the habit in both directions. Writing a pronoun where the ending would do makes the text longer and more schoolbook; dropping the object pronoun where it was information makes the text ambiguous. Korean is clear when the translator respects the rule of omission, and it becomes badly digested Portuguese when he does not.

## Bound pronouns and the double subject

Korean has two forms of the plural, and they are not variants: they say who is left out. {uri} is "we" without the listener, my family, my team, my people. {we} is "we" with the listener, the team you are part of. Portuguese has the distinction and muddles it: "nós" leaves the listener out, "a gente" includes him, and "a gente" is also impersonal, which adds a piece of information Korean does not have. Korean separates the two things Portuguese joins: who stays out, and whether the pronoun is personal or impersonal.

And "he and she" has a single form. {geo} is he, {yeo} is she, but the two together do not make a gendered word: they become an ordinary plural, marked by {deul}, the pronoun that pluralises the noun before it. {deul} does not mean "a few more": it means "the others". It goes after the noun and turns "student" into "students", and it is the same thing that pluralises the action: the same verb ending with {deul} on the end means "they went".

Here the most interesting detail of the lesson appears, and it can be checked. Two coordinated people may take a subject particle only once: only the noun closest to the verb receives it, and the verb adjusts to the closest one. {abeoji} and {eomeoni}, "father and mother", arrive: only {eomeoni} takes a particle, and the verb of arriving comes out in the polite form, because it is the mother who stands closest to the verb. Change the order of the two names and the politeness of the verb changes with them. The Korean verb has a rule of agreement with the nearest subject, and anyone can check it in any text.

The double subject is something else, and it is what John 1:14 does. "The Word became flesh" in Korean is {mal} with {i} and {yugsin} with {i}: two entities with a subject particle in the same clause, no coordinating particle between them, and the verb {doeda}, "to become", at the end saying what the first turned into. It is the most faithful rendering of that sentence that exists, because the original Greek also has two entities in the subject case. A translator who writes a single particle is erasing the structure of the text.

## Where this lesson lands in Scripture

John 1:1-3 is the test. "In the beginning was the Word": the noun {mal} has no written subject, because the ending of the verb already says the person is the third. "And the Word was with God": here the subject appears again, {mal} with {i}, and it could have been omitted, because the particle of the noun is already there. "And the Word was God": the noun comes back, with the same particle, and the verb is the same as in the two clauses before. Korean writes the subject in the second and the third clause; Japanese and Mandarin would sometimes leave it out, because leaving it out is natural there. That is a choice of translation, and the choice is worth something: every subject written in Korean is an argument that a decision was made there, not that the text was hollowed out.

The final hook is {doeda}. The Korean double subject appears naturally in John 1:14, "the Word became flesh", and it is the construction in which two entities take a subject particle without either one coordinating the other. Anyone who learned the subject particle and the verb ending has, without knowing it, everything that clause requires.
`),
  vocab: [
    V('i', '이', 'subject after a word with a final consonant (i)'),
    V('gwa', '가', 'subject after a word ending in a vowel (gwa)'),
    V('eul', '을', 'direct object after a word with a final consonant (eul)'),
    V('reul', '를', 'direct object after a word ending in a vowel (reul)'),
    V('geo', '그', 'he; with the object particle it becomes {geo} with {reul}'),
    V('yeo', '여', 'she; she loses gender as soon as she enters the plural'),
    V('nae', '나', 'I: the pronoun the verb already carries in its ending (nae)'),
    V('uri', '우리', 'we: the plural that leaves the listener out (uri)'),
    V('we', '웨', 'we: the plural that includes the listener (we)'),
    V('deul', '들', 'and the others: the pronoun that pluralises what comes before it (deul)'),
    V('ireul', '이들을', 'them: the plural object form, always spelled out in full (ireul)'),
    V(
      'meokneunda',
      '먹는다',
      'to eat: the verb whose ending is already the subject pronoun (meokneunda)',
    ),
    V('abeoji', '아버지', 'father (abeoji)'),
    V('eomeoni', '어머니', 'mother (eomeoni)'),
    V('mal', '말', 'word; the Word in the prologue of John (mal)'),
    V('yugsin', '육신', 'flesh; the second entity of the double subject in John 1:14 (yugsin)'),
    V('doeda', '되다', 'to become: the verb that takes the double subject (doeda)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The ending of the verb is already the subject pronoun, and so the subject can vanish. The object pronoun has no fused form: it is spelled out in full, every time.',
      ),
    },
    {
      n: '2',
      text: T(
        'The direct object takes {eul} {reul} and the subject takes {i} {gwa}. Swapping one for the other moves nothing in the sentence and changes the meaning of the whole thing.',
      ),
    },
    {
      n: '3',
      text: T(
        'Both can be omitted if the context resolves them, but omitting the subject is common and omitting the object is rare: that is why Korean text has a more active voice.',
      ),
    },
    {
      n: '4',
      text: T(
        '{uri} is we without the listener and {we} is we with the listener; {deul} pluralises the noun before it and means and the others, not a few more.',
      ),
    },
    {
      n: '5',
      text: T(
        'In a coordination only the noun closest to the verb takes a subject particle, and the verb adjusts to it. In a double subject both entities take a particle, and the final verb says what the first turned into.',
      ),
    },
  ],
  notes: [
    {
      label: T('Korean writes more than Japanese does'),
      text: T(
        'The Korean subject is optional because the verb ending repeats it; the object is written because it has no fused form. That is why a Korean rendering comes out longer than the Japanese sentence it came from. The more explicit text is the more faithful one, not the shorter one.',
      ),
    },
    {
      label: T('A double subject is not a coordination'),
      text: T(
        'In a double subject both entities take a subject particle and neither coordinates the other; that is what John 1:14 does with {mal} and {yugsin}. In an ordinary coordination, like father and mother, only the noun closest to the verb takes a particle. Confusing the two constructions is the commonest mistake after swapping {eul} for {i}.',
      ),
    },
  ],
  examples: [
    {
      text: '먹는다',
      gloss: T(
        'meok-neun-da — I eat: no object, and the subject lives in the ending, in no pronoun at all',
      ),
    },
    {
      text: '그를 먹는다',
      gloss: T(
        'geo-reul meok-neun-da — I eat him: the object has to be spelled out, because no fusion is possible',
      ),
    },
    {
      text: '학생들이 왔다',
      gloss: T('haksang-deul-i wa-tta — the students came: {deul} pluralises the noun before it'),
    },
    {
      text: '아버지 어머니가 도착하셨다',
      gloss: T(
        'abeoji eomeoni-ga dochakhhasyeotda — father and mother arrived: only the nearest takes a particle, and the verb follows the nearest',
      ),
    },
    {
      text: '말씀이 육신이 되신이라',
      gloss: T(
        'mal-ssi yugsin-i doe-sin-i-ra — the Word became flesh: two entities with a subject particle, and the verb at the end',
      ),
    },
  ],
  tables: [
    {
      caption: T('The particle by function: the same pair, two different cases'),
      head: [
        T('Function in the sentence'),
        T('After a final consonant'),
        T('After a vowel'),
        T('What Portuguese does instead'),
      ],
      rows: [
        [
          T('subject: the one who performs the verb'),
          T('{i}'),
          T('{gwa}'),
          T('nothing: the subject takes no mark at all'),
        ],
        [
          T('direct object: the target of the action'),
          T('{eul}'),
          T('{reul}'),
          T('nothing: the object noun is not marked either'),
        ],
        [
          T('direct object, plural'),
          T('{ireul}'),
          T('{deul} plus {reul}'),
          T('the plural goes on the noun, never on a loose pronoun'),
        ],
        [
          T('third person pronoun as object'),
          T('{geo} plus {eul}'),
          T('{geo} plus {reul}'),
          T('two separate pronouns: he loves him'),
        ],
        [
          T('beginner mistake'),
          T('{geo} plus {i}'),
          T('{geo} plus {gwa}'),
          T('impossible in Portuguese: there the two are the same pronoun'),
        ],
      ],
    },
    {
      caption: T('Two forms for we, and the pronoun that pluralises'),
      head: [T('Word'), T('Gloss'), T('Is the listener included?'), T('Where it shows up')],
      rows: [
        [T('{uri}'), T('we'), T('no'), T('my family, my team, my people')],
        [T('{we}'), T('we'), T('yes'), T('the team the listener belongs to')],
        [
          T('{deul}'),
          T('and the others'),
          T('not applicable'),
          T('after the noun: turns student into students'),
        ],
        [
          T('{ireul}'),
          T('them, as object'),
          T('not applicable'),
          T('the written plural form when it is the object'),
        ],
      ],
    },
    {
      caption: T('Coordination and double subject: the two things the text does'),
      head: [
        T('What is said'),
        T('Subject particle'),
        T('How many entities'),
        T('What the verb does'),
      ],
      rows: [
        [
          T('father and mother arrived'),
          T('only {eomeoni}'),
          T('two people, one particle'),
          T('follows the nearest one, and comes out polite because of it'),
        ],
        [
          T('the Word became flesh'),
          T('{mal} and {yugsin}'),
          T('two entities, two particles'),
          T('{doeda} at the end: says what the first turned into'),
        ],
        [
          T('the Word was with God'),
          T('{mal} again'),
          T('one entity, one particle'),
          T('the subject may be written again, and leaving it out is valid too'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'In "I eat him", which particle comes after the pronoun "he", which ends in a vowel?',
    ),
    options: [T('{i}'), T('{gwa}'), T('{eul}'), T('{reul}')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "I eat him" after a word ending in a vowel: 그____'),
      answer: '를',
    },
    {
      kind: 'match',
      prompt: T('Match the particle or the pronoun to its function'),
      pairs: [
        { a: T('{eul} {reul}'), b: T('direct object') },
        { a: T('{i} {gwa}'), b: T('subject') },
        { a: T('{uri}'), b: T('we, with the listener left out') },
        { a: T('{we}'), b: T('we, with the listener included') },
        { a: T('{deul}'), b: T('pluralises the noun before it') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'In John 1:14, "the Word became flesh", Korean writes two entities with a subject particle. What is that construction called?',
      ),
      options: [
        T('a double subject'),
        T('the topic particle'),
        T('a conjugated verb in the polite style'),
        T('a negation placed after the verb'),
      ],
      answer: 0,
    },
  ],
};

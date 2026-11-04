import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Particles'),
  title: T('Particles: the same word with two forms, and why that exists'),
  subtitle: T(
    'One form after a final consonant, another after a vowel — and under that rule lies the reason Korean has no article and no plural',
  ),
  body: C(`## The rule that looks impossible and is not

Every Korean particle has two forms, and the choice between them is mechanical: count the last consonant of the noun. {haksang} ends in ng and therefore takes {i}; {cha} ends in a and therefore takes {gwa}. They are the same particle: the subject one. The same holds for {eul} {reul}, the direct object, for {eun} {neun}, the topic, and for {wa}, which makes the conjunction and.

What the beginner does not see is that {i} and {gwa} are not two words: they are one word with two forms. A reader of Portuguese hears two words and concludes that there are two words; they are the same particle, pronounced in two ways.

And the difference from Portuguese shows up in the choice itself. The Portuguese article changes with gender, which is a property of the thing. The Korean particle changes with the last written letter of the noun, which is a property of the sound. Korean has no gender and no number: one covers one and many. There is no article and no plural.

## Why this exists: the particle also announces whether the noun has a final consonant

Portuguese handles all of this with article, with number and with preposition, and none of it is written on the noun: the article goes glued, the preposition apart. Korean chose differently. There is no article and no plural, and that is exactly why the particle carries two pieces of information at once: what the noun's function is in the sentence, and whether the noun has a final consonant or not. The particle is what makes the sentence legible, more than word order does.

The beginner's typical mistake is to write the noun apart from the particle, as if they were two words of Portuguese. In Korean it is ONE written word, glued: {haksang}-i, the student, three letters. Noun and its particle form a single orthographic block, exactly as in Portuguese nobody writes the article separated by a space. Writing {haksang} {i} apart produces a sentence the listener does not recognise, and the cause is orthographic, not lexical: the gluing rule is missing.

The whole mechanism fits in a sentence: count the last consonant of the noun, choose the hard form or the soft one, glue it to the noun, write it all together. Four steps, no exception and no taste.

## Topic and subject: the deepest difference in Korean

{eun} {neun} marks the topic, the matter the sentence is about; {i} {gwa} points at the grammatical subject, whoever performs the verb. The same noun can take either in different sentences, and choosing one instead of the other changes the meaning, not the style. This is the deepest contrast in Korean, and Japanese has something very close to it in {wa} and {ga}.

The smallest example shows the difference without noise. In "I am a student" the pronoun {nan} with {eun} gives {nan-eun haksang-imnida}, as for me, I am a student: I am the matter being commented on, and the student is what is said about that matter. Switching to {na} with {gwa}, the same noun, I becomes the focus of the assertion: the implicit question changes to what I am, and not to what is being said about me. Nothing moved position in the text; the particle changed.

That is why "I am a student" in Korean is not the sentence Portuguese suggests. Portuguese has only one way to say it, and that way is ambiguous between topic and subject; Korean has to choose, and the choice is information.

## Object, indirect object, and the order of the sentence

{eul} {reul} marks the direct object. The indirect object has three particles that the beginner confuses constantly, because Portuguese solves it with three different prepositions: {eseo} is origin, where from, "from home"; {e} is destination, place or time, "to school"; {hante} is recipient, to someone, "to a friend". When both objects appear, the indirect one comes before the direct one.

And the stack closes. The order is indirect object, direct object, verb, subject, and the particles travel glued to the nouns, always before the verb. They are what declare the function of each piece even when the position lies: that is what allows a Korean sentence to be object, verb, subject and still be read without ambiguity.

Three smaller particles appear all the time: {hago} makes the written conjunction and, {cheoreom} is like, similar to, and {man} restricts, only, just. {man} combines with any other particle, because it replaces none: it adds.

The biblical hook sits in the first line of John 1:1, in the beginning was the Word. The noun Word, {mal}, is the subject of the verb to be, and in modern Korean every subject takes a particle: {mal}-i, the Word, for instance in {mal}-i-seo. The 1917 Korean translation, the first one in Korean, is written almost entirely in hanja, and the hanja Korean of the beginning did not write the particles out: the particle was recovered from the shape of the noun and from context, not from the characters. In other words, the 1917 translators had to DECIDE whether they would show the particles. Every particle that appears today in the Korean Bibles is an editorial decision taken more than a century ago, and it is a grammatical decision, not a stylistic one.
`),
  vocab: [
    V('eun', '은', 'topic after a word with a final consonant (eun)'),
    V('neun', '는', 'topic after a word ending in a vowel (neun)'),
    V('i', '이', 'subject after a word with a final consonant (i)'),
    V('gwa', '가', 'subject after a word ending in a vowel (gwa)'),
    V('eul', '을', 'direct object after a word with a final consonant (eul)'),
    V('reul', '를', 'direct object after a word ending in a vowel (reul)'),
    V('wa', '와', 'and; together with (wa)'),
    V('hago', '하고', 'and; together with (hago)'),
    V('e', '에', 'destination, place or time (e)'),
    V('eseo', '에서', 'origin; from; starting from (eseo)'),
    V('hante', '한테', 'to someone; recipient (hante)'),
    V('cheoreom', '처럼', 'like; similar to (cheoreom)'),
    V('man', '만', 'only; just (man)'),
    V('haksang', '학생', 'student; pupil (haksang)'),
    V('nan', '나', 'I; first person, topic form (nan)'),
    V('na', '나', 'I; first person, subject form (na)'),
    V('mal', '말', 'word (mal)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Every particle has two forms and the choice is mechanical: count the last consonant of the noun. A word with a final consonant takes the hard form, a word ending in a vowel takes the soft form. Never by taste.',
      ),
    },
    {
      n: '2',
      text: T(
        'The noun and the particle are written together: {haksang}-i is one word, the student. Writing them apart is a spelling mistake, not a vocabulary one.',
      ),
    },
    {
      n: '3',
      text: T(
        "Korean has no article and does not distinguish number. That is why the particle does two things at once: it declares the noun's function and says whether it has a final consonant.",
      ),
    },
    {
      n: '4',
      text: T(
        '{eun} {neun} is topic, the matter being commented on; {i} {gwa} is subject, whoever performs the verb. Swapping the two changes the meaning of the sentence, not the style.',
      ),
    },
    {
      n: '5',
      text: T(
        '{eul} {reul} is direct object; {eseo} is origin, {e} is destination, place or time and {hante} is recipient. The indirect object comes before the direct one, and every particle stays before the verb.',
      ),
    },
  ],
  notes: [
    {
      label: T('One particle, not two words'),
      text: T(
        'The beginner hears {i} and {gwa} as two words and does not understand the language. They are the same word with two forms, like the Portuguese article having two — but the choice in Korean is phonetic, made by the last letter of the noun, and not by gender.',
      ),
    },
    {
      label: T('The 1917 Korean Bible and the particles'),
      text: T(
        'The 1917 Korean translation is almost entirely hanja, and hanja Korean of the beginning did not write the particles: they were recovered from the shape of the noun and from context. The translators had to decide whether to show them, and every particle that appears today in the Korean Bibles is that decision, which is grammatical and not stylistic.',
      ),
    },
  ],
  examples: [
    { text: '학생이', gloss: T('haksang-i — the student (subject after consonant ng: i)') },
    { text: '말이', gloss: T('mal-i — the Word (subject after consonant l: i)') },
    { text: '말을', gloss: T('mal-eul — the Word (direct object after consonant l: eul)') },
    { text: '친구한테', gloss: T('chin-gu-han-te — to a friend (recipient: hante)') },
    { text: '집에서', gloss: T('jib-e-seo — from home (origin: eseo)') },
  ],
  tables: [
    {
      caption: T('The particle shifts with the last consonant of the noun'),
      head: [
        T('Noun (romanisation)'),
        T('Last letter'),
        T('Has a final consonant'),
        T('Topic'),
        T('Subject'),
        T('Direct object'),
        T('And'),
      ],
      rows: [
        [T('haksang'), T('ng'), T('yes'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('sarang'), T('ng'), T('yes'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('mul'), T('l'), T('yes'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('guk'), T('k'), T('yes'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('nan'), T('n'), T('yes'), T('{eun}'), T('{i}'), T('{eul}'), T('{wa}')],
        [T('cha'), T('a'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}'), T('{wa}')],
        [T('uri'), T('i'), T('no'), T('{neun}'), T('{gwa}'), T('{reul}'), T('{wa}')],
      ],
    },
    {
      caption: T('What each particle points at, and what Portuguese does in its place'),
      head: [
        T('Case'),
        T('Particle'),
        T('What it points at'),
        T('What Portuguese does in its place'),
      ],
      rows: [
        [
          T('Whoever performs the verb'),
          T('{i} {gwa}'),
          T('the grammatical subject'),
          T('nothing: Portuguese does not mark the subject'),
        ],
        [
          T('Matter already known'),
          T('{eun} {neun}'),
          T('what is being commented on'),
          T('nothing either: Portuguese does not tell topic from subject'),
        ],
        [
          T('Destination, place, time'),
          T('{e}'),
          T('where to, where, when'),
          T('the preposition to, at, in'),
        ],
        [T('Origin'), T('{eseo}'), T('from where, starting from'), T('the preposition from')],
        [T('Recipient'), T('{hante}'), T('whom the action goes to'), T('the preposition to')],
        [
          T('Direct target'),
          T('{eul} {reul}'),
          T('the direct object'),
          T('nothing: the object noun carries no mark'),
        ],
      ],
    },
    {
      caption: T('The fixed order that ties lesson 1 together'),
      head: [T('Step'), T('What appears'), T('Which particle marks it'), T('What the text does')],
      rows: [
        [
          T('1'),
          T('indirect object'),
          T('{eseo} {hante} {e}'),
          T('says from where, to whom, where to'),
        ],
        [T('2'), T('direct object'), T('{eul} {reul}'), T('says what the action reaches')],
        [T('3'), T('verb'), T('none'), T('says what happens')],
        [T('4'), T('subject'), T('{i} {gwa}'), T('says who performs the action')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('The word cha ends in a vowel. Which subject particle does it take?'),
    options: [T('{gwa}'), T('{i}'), T('{eul}'), T('{wa}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "the Word" as subject, after a final consonant (l): 말____'),
      answer: '이',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to the case it marks'),
      pairs: [
        { a: T('{i} {gwa}'), b: T('subject: whoever performs the verb') },
        { a: T('{eun} {neun}'), b: T('topic: the matter commented on') },
        { a: T('{eul} {reul}'), b: T('direct object: the target of the action') },
        { a: T('{eseo}'), b: T('origin: from where') },
        { a: T('{hante}'), b: T('recipient: to whom') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T(
        'In "as for me, I am a student", the pronoun I is the matter commented on, not the grammatical subject. Which particle does it take?',
      ),
      options: [T('{eun}'), T('{i}'), T('{eul}'), T('{eseo}')],
      answer: 0,
    },
  ],
};

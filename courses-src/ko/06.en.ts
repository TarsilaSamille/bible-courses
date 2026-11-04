import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  section: T('Verb'),
  title: T('The essential verbs'),
  subtitle: T(
    '{gada}, {oda}, {hada}, {itda}, {meokda}, {boda}: the verbs that hold almost every sentence up',
  ),
  body: C(`## The two lists of verbs

Every Korean verb belongs to one of two lists, and the difference is not of meaning or style: it is of inflection. Verbs whose stem ends in a vowel or in {-l} change shape with the register: {gada} "to go" makes {ga}, {gayo}, {gamnida}. Verbs whose stem ends in another consonant never change: {meokda} "to eat" is the same word in any sentence, and what changes is the ending that comes after it.

The long list is most of the language, and it is where the beginner gets stuck, because a verb that does not change looks wrong inside the sentence. The short list is short indeed: {gada} to go, {oda} to come, {hada} to do, {boda} to see, {juda} to give, {sseuda} to write, {masida} to drink, {gareuchida} to teach, {saranghada} to love account for almost everything that is said.

## {itda} and {eopda}: there to be and not to be

{itda} covers what Portuguese splits between "there to be", "to be somewhere" and "to have": {chaek-i itda} is "there is a book" and "I have a book", with the same verb. {eopda} is its negative, and not the negative of some other verb: {chaek-i eopda}, "there is no book". Whoever looks for a separate verb for "to have" does not find one, because there is none.

That changes the negation. Since {eopda} is already the negative of {itda}, the sentence "there is not" does not take the negator {an}: writing {an itda} is negating twice.

## The past and the two negations

The past is formed with {-at-} or {-eot-} between the stem and the ending: {meokda} makes {meogeotda}, "I ate", and {hada} makes {haetda}, "I did". It is the same suffix in both lists, and that is why the long list is not as immovable as it looks: the stem stays, the past goes in the middle.

Negation has two forms. {an} comes before the verb: {an meokda}, "I do not eat". And {-ji anta} comes after, with the auxiliary: {meokji anta}, "I do not eat". Both say the same, and the second is the one used when the verb is long or the sentence calls for a written register.

## In the Bible

John 1:1 opens with {gyesida}, the honorific of {itda}: {taechoe malsseum-i gyesyeotda}, "in the beginning was the Word". Korean does not use plain {itda} to speak of God: the verb of existence takes the mark of respect, and the past {gyesyeotda} carries both things at once.

John 3:16 has two essential verbs in a row: {saranghasa}, from {saranghada} "to love", and {jusyeotda}, the honorific past of {juda} "to give". God loved and gave, and both verbs are from the short list. Mark 4:39 closes with {jamjamhara! goyohara!}, "be silent! be still!", which is the imperative {-hara} on the stem: Korean commands with no subject and no person.`),
  vocab: [
    V('gada', '가다', 'to go'),
    V('ga', '가', 'I go (plain form)'),
    V('gayo', '가요', 'I go (polite spoken)'),
    V('gamnida', '갑니다', 'I go (polite written)'),
    V('oda', '오다', 'to come'),
    V('hada', '하다', 'to do'),
    V('haetda', '했다', 'I did'),
    V('itda', '있다', 'there to be, to be somewhere, to have'),
    V('eopda', '없다', 'there not to be'),
    V('gyesida', '계시다', 'there to be (honorific)'),
    V('meokda', '먹다', 'to eat'),
    V('meogeotda', '먹었다', 'I ate'),
    V('masida', '마시다', 'to drink'),
    V('boda', '보다', 'to see'),
    V('deutda', '듣다', 'to hear'),
    V('malhada', '말하다', 'to say'),
    V('alda', '알다', 'to know'),
    V('juda', '주다', 'to give'),
    V('jusida', '주시다', 'to give (honorific)'),
    V('saranghada', '사랑하다', 'to love'),
    V('an', '안', 'not (before the verb)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A stem ending in a vowel or in {-l} inflects: {gada}, {ga}, {gayo}, {gamnida}. A stem ending in a consonant does not change: {meokda}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{itda} is "there to be", "to be somewhere" and "to have" with the same verb: {chaek-i itda} is "there is a book" and "I have a book".',
      ),
    },
    {
      n: '§3',
      text: T(
        '{eopda} is the negative of {itda}, and does not take {an}: {chaek-i eopda}, never {an eopda}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'The past goes in with {-at-} or {-eot-} between the stem and the ending: {meokda} → {meogeotda}, {hada} → {haetda}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'The short negation {an} comes before the verb; the long {-ji anta} comes after: {an meokda} and {meokji anta}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The itda that is not "to be"'),
      text: T(
        '{itda} is not the copula. "He is a doctor" is {geu-neun uisa-ida}, with {ida}, not with {itda}. The {ida} identifies; the {itda} says that something exists or is somewhere.',
      ),
    },
    {
      label: T('The an that does not enter the past'),
      text: T(
        'The short negation {an} stands before the verb and does not move in the past: {an meogeotda}, "I did not eat", keeps the {an} in front and the past in the verb.',
      ),
    },
  ],
  examples: [
    {
      text: '처음에 말씀이 계셨다',
      gloss: T('Jo 1:1 — {계시다} is the honorific of {있다}: in the beginning was the Word.'),
    },
    {
      text: '하나님이 세상을 사랑하사',
      gloss: T('Jo 3:16 — {사랑하사}, from {사랑하다}: God loved the world.'),
    },
    {
      text: '독생자를 주셨다',
      gloss: T('Jo 3:16 — {주셨다}, honorific past of {주다}: gave the Son.'),
    },
    {
      text: '잠잠하라! 고요하라!',
      gloss: T('Mc 4:39 — imperative of {-하라}: be silent, be still.'),
    },
    { text: '책이 있다', gloss: T('{있다} with the subject particle: there is a book.') },
    { text: '책이 없다', gloss: T('{없다} negates without {안}: there is no book.') },
    { text: '먹었다', gloss: T('past of {먹다}: I ate.') },
    { text: '안 먹다', gloss: T('{안} before the verb: I do not eat.') },
    { text: '먹지 않다', gloss: T('{-지 않다} after the verb: I do not eat.') },
  ],
  tables: [
    {
      caption: T('The essentials: dictionary, polite and past'),
      head: [T('Dictionary'), T('Polite'), T('Past'), T('Meaning')],
      rows: [
        [T('{gada}'), '{gamnida}', '{gatda}', T('to go')],
        [T('{oda}'), '{omnida}', '{watda}', T('to come')],
        [T('{hada}'), '{hamnida}', '{haetda}', T('to do')],
        [T('{boda}'), '{bomnida}', '{boatda}', T('to see')],
        [T('{meokda}'), '{meokseumnida}', '{meogeotda}', T('to eat')],
        [T('{juda}'), '{jumida}', '{jwotda}', T('to give')],
        [T('{alda}'), '{amnida}', '{aratda}', T('to know')],
      ],
    },
    {
      caption: T('The two negations'),
      head: [T('Form'), T('Position'), T('Example')],
      rows: [
        [T('{an}'), T('before the verb'), '{an meokda}'],
        [T('{-ji anta}'), T('after the verb'), '{meokji anta}'],
        [T('{eopda}'), T('replaces {itda}'), '{chaek-i eopda}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {taechoe malsseum-i gyesyeotda}, which is the base verb?'),
    options: [T('{itda}'), T('{ida}'), T('{hada}'), T('{oda}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "{doksaengja-reul ___}" with the honorific past of {juda} (John 3:16).'),
      answer: 'jusyeotda',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its past.'),
      pairs: [
        { a: T('{meokda}'), b: T('{meogeotda}') },
        { a: T('{hada}'), b: T('{haetda}') },
        { a: T('{gada}'), b: T('{gatda}') },
        { a: T('{oda}'), b: T('{watda}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Which form negates {itda}?'),
      options: [T('{an itda}'), T('{eopda}'), T('{itji anta}'), T('{anida}')],
      answer: 1,
    },
  ],
};

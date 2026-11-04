import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Verb'),
  title: T(
    'Tense and aspect: how Korean says "yesterday" and "is going to" with particles after the verb',
  ),
  subtitle: T(
    'The verb does not inflect for tense; a particle after the verbal form tells you whether the act is now, was, or is going to happen',
  ),
  body: C(`## Time lives after the verb

The Korean verb inflects for person and for style, and tense is a different account. In Korean the verb does not inflect for tense: the verbal form stays exactly as it is, and what says whether the act is now, already happened, or is going to happen is a particle, or an adverb, glued after it. That is true of Mandarin and Japanese too, but in Korean it shows differently: the temporal particle is a separate piece, written as a square of its own, and not an ending stuck to the verb. You can count it.

The shortest example shows the consequence. The same form ga, "go", serves for present and for future without anything changing inside it. In "I am going now" the verb goes bare and the context says it is now. In "I am going to go" the verb takes the particle {geul}, the same -l that makes the "going to": the "go" that was a verb turns into a future noun, and the "go" standing next to it is the Portuguese infinitive. And for the "I will go, but" there is {jiman}. All these pieces live to the right of the verb, and the order is verb, particle, verb, the opposite of the "go" that opens the sentence in Portuguese.

One exception you need to know right away: a marked time adverb goes before. That is how Korean says "yesterday": {eoje}, an adverb, in front of the verb. The temporal particles that say "after", "before", "until" and "since" are pieces attached to the verb, and they go after it. Two different places, and not the same thing.

## The past: two series and one register

The Korean past is moulded on {asseoss} or {eoseoss}, two blocks, not one. The choice between them is mechanical and admits no taste: after the vowel a or o comes {asseoss}; after the other vowels comes {eoseoss}. The verb "go" gives gas-seos-seo and the verb "eat" gives meok-eo-seos-seo. The two series are the same tense with the other pair of vowels, and picking the wrong pair hands the listener a verb they do not know.

Register works exactly as in the previous lesson. The same mould takes a register ending: {asseoss} plus the plain ending is the bare form, {asseoss} plus the polite ending the polite one. Nothing new here: it is the same difference of style the verb already had, applied to a new mould. Past and polite, past and plain: the Korean past has two vowel series and two registers, and that is all.

## The future and the "going to"

Portuguese "going to do" becomes a particle plus a verb in Korean: {geul} and {eul}, a single -l, with the hard form after a word ending in a consonant and the soft one after a word ending in a vowel, exactly as in the particle pairs. The verb "go" gives gal geo-ye-yo and the verb "eat" gives meogeul geo-ye-yo. Someone coming from Portuguese recognises the whole construction, because "to go" plus an infinitive is a particle plus a verb: the same stack, with the same verb on both sides. Someone coming from Japanese sees the opposite, because in Japanese tense lives in the ending of the verb and not in a separate piece.

Probable future is the same piece with {jogeum}: -l jeok. It is not "going to do", it is "will have done", "it is bound to happen". And the same particle {jogeum} with {itda} says "have already done", experience: "I have been, I have tasted". With experience tense is settled: past perfect and past continuous, which Portuguese distinguishes and Korean barely does, get pushed out of the verb and only what the listener needs is kept.

## Time particles, progressive and conditional

The progressive is the most visible construction of the chapter: verb, {go}, {itda}. "I am doing" is literally "doing and being". The verb comes bare, {go} links and {itda} brings the "being". And there is a second way, the short {go} form in a chain, which the reader of John meets in sequence: "he heard and said" can become two {go}. Alongside them there is a construction with jikjeon meaning "on the point of doing", with the verb plus the -gi nominalisation: "about to say".

The conditional is not inflection either. {myeon} after the verb says "if", and the result follows in the sequence: verb plus {myeon}, verb plus result. For the hypothetical tone, "if it were", the form is {neunmyeon}, which joins the topic particle to the verb itself. And for the "if... then... but" there are the two: {myeon} in the first clause, {jiman} in the second. Follow the path of the three pieces: the conditional after the first verb, the adversative after the second. None of it goes inside the verbal form.

The biblical hook is John 19:30, "it is finished". The Korean sentence is da i-ru-eos-da, and it is worth taking apart. The first element is the adverb, "all, completely". The second is the verb, "to accomplish, to fulfil". And tense is at the end, in a {asseoss} mould followed by the plain ending: the plain form, the verb's own. None of that is inflection; it is a particle and it is register. The 1961 Korean translation adds an exclamation at that point, and the ritual tone of the liturgy appears precisely because the register choice is not decorative: the polite form sounds like the rite of the sacrifice, the plain form like the narrative.
`),
  vocab: [
    V('eoje', '어제', 'yesterday (a time adverb, before the verb)'),
    V('geul', 'ㄹ', 'going to; future tense (after a word ending in a vowel)'),
    V('eul', '을', 'going to; future tense (after a word with a final consonant)'),
    V('asseoss', '았', 'past: the a or o vowel series (plain and polite)'),
    V('eoseoss', '었', 'past: the other vowels series (plain and polite)'),
    V('go', '고', 'and; and then (with {itda}: be doing)'),
    V('itda', '있다', 'be; stay; exist'),
    V('jogeum', '적', 'probably will; with {itda}: have already done'),
    V('jiman', '지만', 'but; however'),
    V('myeon', '면', 'if; in case'),
    V('neunmyeon', '는면', 'if it were; in the case that'),
    V('hu', '후', 'after'),
    V('jeon', '전', 'before'),
    V('kkaji', '까지', 'until'),
    V('buteo', '부터', 'since; starting from'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Tense does not inflect the verb: the verbal form stays the same and tense is a particle after it. The particle is a countable piece, not an ending.',
      ),
    },
    {
      n: '2',
      text: T(
        'The past has two series, {asseoss} after the vowel a or o and {eoseoss} after the other vowels. They are the same tense with the other pair of vowels.',
      ),
    },
    {
      n: '3',
      text: T(
        'Register keeps working as in the previous lesson: the same mould takes the plain or the polite ending. The past adds no new register.',
      ),
    },
    {
      n: '4',
      text: T(
        'The future is -l, with {geul} after a vowel and {eul} after a consonant; the probable is -l {jogeum}. Portuguese "to go" plus an infinitive is a particle plus a verb, the opposite of Japanese.',
      ),
    },
    {
      n: '5',
      text: T(
        'The particles for "after", "before", "until" and "since", and the conditional {myeon} and {jiman}, all come after the verb. A marked adverb, like {eoje}, comes before: two places.',
      ),
    },
  ],
  notes: [
    {
      label: T('The past continuous and the perfect leave the stage'),
      text: T(
        'Korean barely distinguishes past continuous from past perfect: in both cases the form is the past plus the particle, and context does the work. What it does keep is experience, with {jogeum} plus {itda}: "have already done". Translating from Portuguese means deciding by hand what the original was distinguishing.',
      ),
    },
    {
      label: T('John 19:30 and the register choice'),
      text: T(
        'In "it is finished" tense sits in a past mould followed by the plain ending. The 1961 translation uses an exclamation there, and the liturgical tone comes from the register choice, not from the wording: the polite form sounds like the rite of the sacrifice, the plain form like the narrative.',
      ),
    },
  ],
  examples: [
    {
      text: '어제 갔어요',
      gloss: T('eoje gas-seos-seo-yo — I went yesterday (adverb before, polite past after)'),
    },
    {
      text: '갈 거예요',
      gloss: T('gal geo-ye-yo — I am going to go ("am going to" plus infinitive)'),
    },
    {
      text: '밥을 먹고 있어요',
      gloss: T('ba-beul meok-go is-seo-yo — I am eating (verb, go, itda)'),
    },
    { text: '비가 오면 안 가요', gloss: T('bi-ga o-myeon an ga-yo — if it rains, I do not go') },
    {
      text: '다 이루었다',
      gloss: T('da i-ru-eos-da — it is finished (adverb, verb, past mould, plain ending)'),
    },
  ],
  tables: [
    {
      caption: T('Where each tense lives: none of it inflects the verb'),
      head: [T('Moment'), T('What is said'), T('Where it sits'), T('Example of the structure')],
      rows: [
        [T('present'), T('the bare verb, no particle'), T('—'), T('ga-yo')],
        [T('past'), T('{asseoss} or {eoseoss}'), T('after the verb'), T('gas-seos-seo-yo')],
        [T('future'), T('{geul} or {eul}'), T('after the verb'), T('gal geo-ye-yo')],
        [
          T('probable future'),
          T('{jogeum} with {geul} or {eul}'),
          T('after the verb'),
          T('gal jeok'),
        ],
        [T('progressive'), T('{go} plus {itda}'), T('after the verb'), T('meok-go is-seo-yo')],
        [T('conditional'), T('{myeon}, or {neunmyeon}'), T('after the verb'), T('o-myeon')],
        [T('adversative'), T('{jiman}'), T('after the verb'), T('ga-ji-man')],
        [
          T('experience'),
          T('{jogeum} plus {itda}'),
          T('after the verb'),
          T('gan jeok-i is-seo-yo'),
        ],
      ],
    },
    {
      caption: T('The two series of the past, chosen by the vowel of the verb'),
      head: [T('Preceding vowel'), T('Mould'), T('Plain register'), T('Polite register')],
      rows: [
        [T('a, o'), T('{asseoss}'), T('gass-da'), T('gas-seos-seo-yo')],
        [T('the other vowels'), T('{eoseoss}'), T('meogeos-da'), T('meok-eo-seos-seo-yo')],
      ],
    },
    {
      caption: T('The time particles: all of them after the verb'),
      head: [T('Particle'), T('Gloss'), T('Attaches to'), T('What it says')],
      rows: [
        [T('{hu}'), T('after'), T('{asseoss} or {eoseoss}'), T('after having done')],
        [T('{jeon}'), T('before'), T('the -gi nominalisation'), T('before doing')],
        [T('{kkaji}'), T('until'), T('any tense'), T('up to a certain point')],
        [T('{buteo}'), T('since'), T('any tense'), T('from a certain point on')],
        [T('{myeon}'), T('if'), T('the verb form'), T('in the case that')],
        [T('{neunmyeon}'), T('if it were'), T('the verb form'), T('with a hypothesis')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "yesterday I went", where does the tense information sit?'),
    options: [
      T('in a particle after the verbal form'),
      T('in an ending of the verb'),
      T('in the vowel of the last block'),
      T('in the subject particle'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the polite past of "go", after the vowel a: 갔____'),
      answer: '어요',
    },
    {
      kind: 'match',
      prompt: T('Match the particle to its function'),
      pairs: [
        { a: T('{asseoss}'), b: T('past, the a or o vowel series') },
        { a: T('{geul}'), b: T('going to, after a word ending in a vowel') },
        { a: T('{go}'), b: T('and, and then; with {itda}, be doing') },
        { a: T('{jiman}'), b: T('but, however') },
        { a: T('{kkaji}'), b: T('up to a certain point') },
        { a: T('{buteo}'), b: T('from a certain point on') },
      ],
      answer: [0, 1, 2, 3, 4, 5],
    },
    {
      kind: 'choose',
      prompt: T('Which construction is "be doing" in Korean?'),
      options: [
        T('verb, {go} and {itda}'),
        T('verb, {geul} and {jogeum}'),
        T('{myeon} and verb'),
        T('verb, {asseoss} and {itda}'),
      ],
      answer: 0,
    },
  ],
};

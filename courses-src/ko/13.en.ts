import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  section: T('Numbers'),
  title: T('Two numeral systems that do not mix — and the hour of the clock'),
  subtitle: T(
    'The choice is not about register, it is about the type of thing: people take the native numeral, things take the Sino-Korean, and the hour of the clock is the proof',
  ),
  body: C(`## Two systems, and the choice is not about register

Korean has two complete sets of numerals, and the first thing to understand is that the choice between them is not about tone or elegance. Someone arriving from Mandarin expects a single system, Mandarin has one, and discovers that Korean has two. The criterion is not register: it is the TYPE OF THING being counted, and there is only one question. Is this countable or not?

The Sino-Korean counts things. They are {il}, {i}, {sam} and so on up to {sip}: minutes, clock hours in writing, months, days, coins, years, distances. It came from Chinese through the hanja, and it is exactly the same system as Mandarin's and Japanese's.

The native set counts what cannot be counted one by one, and it counts people. They are {hana}, {dul}, {se} and so on up to die. People in Korean take the native numerals, without exception: this is the one use in which the system is obligatory rather than optional.

And here is the trap that makes beginners give up. Four and five are the same word in both systems, sa and o; eight and nine are the same too, pal and gu; and the one sounds almost identical, {il} and {hana}. A learner who only learns the first ten concludes that there is a single system. There are two, and they part company exactly where the person appears.

## The practical rule: a person is native, a thing is Sino

If a numeral is counting people, it is native: {se} {myeong} sarang, three people, and the {myeong} is obligatory by the rule of the counters: numeral, counter, noun. If it is counting things, it is Sino-Korean: six pigs is yuk mari, six coins is yuk won.

Age is native, and it is the case almost nobody guesses, because an age is at once a person and a number of years. Thirty-five years begins with {se} and not with {sam}, even though it is a number of years, because what is being counted is somebody's lifetime. The dol of the tens, seoreundeoldol, is the same thing: it is the native set, with the "two" part changed in sound.

And the counter goes on obeying the usual rule: with a native numeral, short pronunciation; from ten onwards, long pronunciation, same spelling. Three people is {se} {myeong}; thirteen people is {sip} {myeong}. The spelling of the counter has not changed, which is why reading Korean silently pronounces almost everything wrong.

## The hour of the clock: Sino in writing, native in speech

The hour is the cleanest proof of the rule, because the same number appears in both shapes in the same sentence. Written, the clock uses the Sino-Korean: {sam} {si}, three o'clock. Spoken, it uses the native: {se} {si}, the very same three o'clock. In both cases the {si} comes right after the numeral and behaves as a counter, with no noun at all.

After the hour comes {jeongal}, "o'clock sharp", and it agrees with the hour: yeoseol jeongal, six sharp; ilgop jeongal, seven sharp. {jeongal} is the exact hour, the one that lands on the time; an approximate hour takes no particle at all. And the half of the hour also comes after the number: {ohaseo} {hana} {si} ban, half past one in the morning.

Morning and afternoon: {ohaseo} for morning, {gayo} for afternoon. What is said on the street is {se} {si} {jeongal}; what is written in a timetable is {sam} {si} {jeongal}. The same clock, two systems, and neither of them wrong.

## From eleven onwards: the ten comes first, and the first part changes

Two-digit numbers are built the way they are in every language this project compares: the ten first, the unit after. Sixteen is sim {nol}: ten before, six after. It is the same positional order as in Mandarin and Japanese, with the same apparent absurdity, ten and six is never ten and six.

The real irregularity is in the sound. From eleven to nineteen the "ten" is not {sip}: it is {nol} when the unit is six, as in sim {nol}, and hul when the unit is two, as in {sip} hul for twelve. In the other decades the ten goes back to plain {sip}, {i} {sip} twenty, {sam} {sip} thirty, gu {sip} ninety, and the "two" part becomes dol, as in {sam} dol, thirty-two. It is the very change that makes the counter switch pronunciation after ten: one rule, seen from two sides.

Whoever gets lost in the arithmetic gets lost by memorising too much. The summary fits in one sentence: up to ten, you learn it; from eleven to nineteen there are nine forms and no room to slip; from twenty to ninety-nine the scheme above already gives you all of them, and nobody needs to learn anything else.

The verse that ties the two halves together is John 18:18. Peter denies Jesus and the text marks the hour: {sam} {si}, around three, at the moment when the guards go back inside and the firelight lights his face. It is a Sino-Korean numeral in a clock hour, and the same number in the speech of whoever told the story is {se} {si}. The same night, the same hour, two systems: the written one follows the Sino-Korean because a clock hour is a measurement of time, and the spoken one follows the native set because it is people talking. Whoever asks which of the two is the real one does not know Korean: both are.
`),
  vocab: [
    V('il', '일', 'one; Sino-Korean numeral (il)'),
    V('i', '이', 'two; Sino-Korean numeral (i)'),
    V('sam', '삼', 'three; Sino-Korean numeral (sam)'),
    V('sip', '십', 'ten; Sino-Korean numeral (sip)'),
    V('hana', '하나', 'one; native numeral (hana)'),
    V('dul', '둘', 'two; native numeral (dul)'),
    V('se', '세', 'three; native numeral (se)'),
    V('nol', '놀', 'the "ten" part of sixteen: sim {nol}'),
    V('si', '시', 'hour; comes right after the numeral and behaves as a counter'),
    V('jeongal', '정각', "o'clock sharp; the exact hour, and it agrees with the hour (jeongal)"),
    V('ohaseo', '오전', 'morning; before noon (ohaseo)'),
    V('gayo', '오후', 'afternoon; after noon (gayo)'),
    V('myeong', '명', 'counter for people (myeong)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Korean has two numeral systems and the choice between them is about the TYPE OF THING, not about register: the question is whether what is counted is countable.',
      ),
    },
    {
      n: '2',
      text: T(
        'Sino-Korean for things, minutes, written hours, months, days, coins and years ({il} to {sip}); native for the uncountable, for people ({hana} to die) and for ages.',
      ),
    },
    {
      n: '3',
      text: T(
        'People always take the native numeral and the counter {myeong} is obligatory: {se} {myeong} sarang. From ten onwards the same counter changes pronunciation, {sip} {myeong}, without changing its spelling.',
      ),
    },
    {
      n: '4',
      text: T(
        'The clock hour is Sino-Korean in writing ({sam} {si}) and native in speech ({se} {si}); {jeongal} is "sharp" and agrees with the hour, and {ohaseo} and {gayo} separate morning from afternoon.',
      ),
    },
    {
      n: '5',
      text: T(
        'In two-digit numbers the ten always comes first: sim {nol} is sixteen. From 11 to 19 the "ten" changes sound ({nol}, hul) and in the other decades it becomes {sip}, with dol in place of the two.',
      ),
    },
  ],
  notes: [
    {
      label: T("The Sino-Korean is the same as Mandarin's"),
      text: T(
        'The two Korean systems are not the same age. The Sino-Korean came from Chinese through the hanja and is shared with Mandarin and Japanese; the native set is Korean and has no equivalent outside the language. That is why someone who already knows Mandarin recognises the series of days and months straight away, and learns the same thing twice over for people.',
      ),
    },
    {
      label: T('The same hour, two systems'),
      text: T(
        'There is no "correct" Korean for the hour of the clock: there is the Sino-Korean of written timetables and the native set of conversation, and both go around on the same day. A translator who does not know which to choose produces a sentence no speaker would say — or, worse, one in which the person in the text simply disappears.',
      ),
    },
  ],
  examples: [
    {
      text: '사람 세 명',
      gloss: T('sarang se myeong — three people: native numeral, counter, noun'),
    },
    {
      text: '삼 시쯤',
      gloss: T("sam sijjeum — around three o'clock: a written hour in the Sino-Korean"),
    },
    {
      text: '세 시',
      gloss: T("se si — three o'clock: the same hour, spoken with the native numeral"),
    },
    {
      text: '돼지 여섯 마리',
      gloss: T('dwaeji yeoseot mari — six pigs: a thing, so Sino-Korean, plus the counter'),
    },
  ],
  tables: [
    {
      caption: T('The two systems side by side, and where each one applies'),
      head: [T('Number'), T('Sino-Korean'), T('Native'), T('Where the native one wins')],
      rows: [
        [T('1'), T('{il}'), T('{hana}'), T('people and ages')],
        [T('2'), T('{i}'), T('{dul}'), T('people and ages')],
        [T('3'), T('{sam}'), T('{se}'), T('people')],
        [T('4'), T('sa'), T('sa'), T('same word in both')],
        [T('5'), T('o'), T('o'), T('same word in both')],
        [T('6'), T('yuk'), T('nul'), T('people')],
        [T('7'), T('chil'), T('yil'), T('people')],
        [T('8'), T('pal'), T('pal'), T('same word in both')],
        [T('9'), T('gu'), T('gu'), T('same word in both')],
        [T('10'), T('{sip}'), T('die'), T('months, days, coins, years')],
      ],
    },
    {
      caption: T('Eleven to nineteen, where the "ten" changes sound'),
      head: [T('Number'), T('Sino-Korean'), T('Native'), T('How it is built')],
      rows: [
        [T('11'), T('{sip} {il}'), T('yeol han'), T('ten and one, no swap')],
        [T('12'), T('{sip} hul'), T('yeol dul'), T('the two becomes hul')],
        [T('13'), T('{sip} {sam}'), T('yeol set'), T('ten and three')],
        [T('14'), T('{sip} sa'), T('yeol net'), T('ten and four')],
        [T('15'), T('{sip} o'), T('yeol daseot'), T('ten and five')],
        [T('16'), T('sim {nol}'), T('yeol yeoseot'), T('the ten becomes {nol}')],
        [T('17'), T('{sip} chil'), T('yeol ilgop'), T('ten and seven')],
        [T('18'), T('{sip} pal'), T('yeol yeodeol'), T('ten and eight')],
        [T('19'), T('{sip} gu'), T('yeol ahop'), T('ten and nine')],
      ],
    },
    {
      caption: T('From twenty to ninety-nine: the scheme is enough'),
      head: [T('Number'), T('Sino-Korean'), T('Native'), T('What changes')],
      rows: [
        [T('20'), T('{i} {sip}'), T('seoreun'), T('plain ten; in the tens, the two becomes dol')],
        [T('21'), T('{i} hul'), T('seoreun hana'), T('the two becomes hul')],
        [T('32'), T('{sam} {i}'), T('seoreundol'), T('the ten is {sam}, the unit is {i}')],
        [T('40'), T('sa {sip}'), T('saeseun'), T('from here on nothing changes')],
        [T('50'), T('o {sip}'), T('daseun'), T('standard pattern')],
        [T('60'), T('yuk {sip}'), T('yueseun'), T('standard pattern')],
        [T('70'), T('chil {sip}'), T('chilseun'), T('standard pattern')],
        [T('80'), T('pal {sip}'), T('palseun'), T('standard pattern')],
        [T('90'), T('gu {sip}'), T('auseun'), T('standard pattern')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('How do you say "three o\'clock" in SPEECH?'),
    options: [T('{se} {si}'), T('{sam} {si}'), T('{se} {myeong}'), T('{sam} {jeongal}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "sixteen" in the written Sino-Korean form: sim ____'),
      answer: '놀',
    },
    {
      kind: 'match',
      prompt: T('Match the numeral to what it means in the system named'),
      pairs: [
        { a: T('{sam}'), b: T('three in the Sino-Korean system') },
        { a: T('{se}'), b: T('three in the native system') },
        { a: T('{hana}'), b: T('one in the native system') },
        { a: T('{sip}'), b: T('ten in the Sino-Korean system') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How many people is it, in the correct form?'),
      options: [T('{se} {myeong}'), T('{sam} {myeong}'), T('{se}'), T('{sam} {myeong} sarang')],
      answer: 0,
    },
  ],
};

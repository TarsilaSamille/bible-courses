import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('The particle of possession and its neighbours'),
  subtitle: T('لِـ، وَ، بَيْنَ، ضِدّ، دُونَ، عِنْدَ، نَحْوَ'),
  section: T('Particles'),
  body: C(`## The particle that does three things

{لِـ} is the most flexible particle in the system, and it pays to split it into three uses before looking at the others. With a noun it is of possession: {لَهُ} means "of him" and also "he has". With a noun naming a person it is of destination: {لَكَ} is "for you".

The third use is the one that matters for reading. **{لِـ} plus a verbal noun marks purpose.** {لِشُكْرِكَ} is "in order to thank you", {لِقَوْلِهِ} is "in order to say". Portuguese handles this with "to" plus an infinitive, and Arabic handles it with a particle plus a noun, which is why these shapes are so common in biblical text.

The possessive use has a shortened form that is the origin of every attached pronoun. Where the noun is written, the clause says {كِتَابُ لَهُ}; where it is not, it says only {كِتَابُهُ}, and {لَهُ} has become a suffix. Anyone who sees {رَأْسُهُ} is seeing a noun with no noun in it.

## بَيْنَ, ضِدّ, دُونَ, عِنْدَ, نَحْوَ

The five neighbours do more specialised work, and each one has the complement that defines it.

{بَيْنَ} is "between", and the complement is a place or a group. Its best-known construction is {بَيْنَ يَدَيْهِ}, which literally means "between his two hands" and is rendered "before him": the hands are what is in front. {بَيْنَكُمْ} means "among you", and {مِنْ بَيْنِكُمْ} means "from among you".

{ضِدّ} is "against", and it wants a person or a force: {ضَدَّ الظَّالِمِينَ}. {دُونَ} sets a limit rather than a separation: {دُونَ أَبَاءٍ} is literally "below parents" and means "without parents". The difference between {مِنْ} and {دُونَ} is the difference between cutting and measuring.

{عِنْدَ} is "with" and, when the complement is a price, turns into "for": {عِنْدَ دِينَارِ} is "for a dinar". {نَحْوَ} is "towards" when the complement is a place and "about" when it is a number: {نَحْوَ سِتَّةِ}.

## {وَ} is not a particle

{وَ} is a conjunction, and the difference is not the name but the function. A particle governs the case of the noun that follows; a conjunction governs nothing. {وَ} joins words, joins clauses, and can still supply an element that was left out.

In {جَاءَ مُوسَى وَهَارُونُ} the {وَ} joins two subjects. In {كَانَ الرَّجُلُ فِي الْبَيْتِ وَالْمَرْأَةُ فِي الْبَيْتِ} it supplies the verb that was dropped in the second clause, and the dropped verb is {كَانَتْ}. In {وَالْمَلَكُ وَالْقَارِنُ} it takes up what was understood.

And next to it live three particles that look like it and have nothing to do with it: {بِـ}, {لِـ} and {كَـ}. All three link a verb to a noun, all three govern the genitive, and all three have a shape that only shows up in speech. {وَ} links no verb to any noun: it links noun to noun.

## Reading criterion

In {لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ} there is one particle, two prepositions and a conjunction, and the four do different jobs. {لَهُ} is possession or destination, and the ending {ـُ} shows that the noun after it is genitive because of the particle. {فِي} and {مَا} repeat, and the repetition is what produces the parallelism. {وَ} joins the two halves and translates into nothing in Portuguese beyond the "and" that already sits inside the second half.

What a reader gains here is a habit of separating. {وَ} joins, {لِـ} owns, {فِي} locates, {بِـ} instruments. Each one has an ending that betrays it, and a clause where all four appear is a clause where four relations are written down.`),
  vocab: [
    V('لِـ', 'إلى', 'particle of possession and destination'),
    V('لَهُ', 'له', 'of him; he has'),
    V('لَكَ', 'لك', 'for you'),
    V('لِشُكْرِكَ', 'شكر', 'in order to thank you'),
    V('وَ', 'و', 'and; and also'),
    V('بَيْنَ', 'بين', 'between; among'),
    V('يَدَيْهِ', 'يد', 'his two hands'),
    V('ضِدّ', 'ضد', 'against'),
    V('دُونَ', 'دون', 'without; below'),
    V('عِنْدَ', 'عند', 'with; in the presence of'),
    V('نَحْوَ', 'نحو', 'towards; about'),
    V('بِـ', 'في', 'by; instrument'),
    V('مَعَنَا', 'نحن', 'with us'),
    V('السَّمَاوَات', 'سماوات', 'the heavens'),
    V('مِلَكُوت', 'ملكوت', 'kingdom'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {لِشُكْرِكَ}, what does {لِـ} mark?'),
    options: [T('Possession'), T('Destination'), T('Purpose'), T('Origin')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete {بَيْنَ ___}: "before him" is {بَيْنَ يَدَيْهِ}, and "among" is {بَيْنَ ___}.'),
      answer: 'يَدَيْهِ',
      hint: T('They are his two hands.'),
    },
    {
      kind: 'choose',
      prompt: T('{بَيْنَ يَدَيْهِ} means...'),
      options: [T('Between his two hands'), T('Above him'), T('Against him'), T('From him')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match particle and sense.'),
      pairs: [
        { a: T('ضِدّ'), b: T('against') },
        { a: T('دُونَ'), b: T('without; below') },
        { a: T('عِنْدَ'), b: T('with; for a price') },
        { a: T('نَحْوَ'), b: T('towards; about') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('What is the difference between {وَ} and {لِـ}?'),
      options: [
        T('None'),
        T('{وَ} is a conjunction and {لِـ} is a particle'),
        T('{وَ} is a particle and {لِـ} is a conjunction'),
        T('{لِـ} never links a verb to a noun'),
      ],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('**{لِـ} does three things: possession, destination and purpose.**') },
    { n: '2', text: T('Purpose is {لِـ} plus a verbal noun: {لِقَوْلِهِ}, "in order to say".') },
    { n: '3', text: T('{عِنْدَ} with a price means "for": {عِنْدَ دِينَارِ}, "for a dinar".') },
    { n: '4', text: T('{بَيْنَ} with {يَدَ} means "before": {بَيْنَ يَدَيْهِ}.') },
    {
      n: '5',
      text: T(
        '{وَ} is a conjunction and governs no case; the particles {بِـ}, {لِـ} and {كَـ} link a verb to a noun.',
      ),
    },
  ],
  notes: [
    {
      label: T('The particle that became a suffix'),
      text: T(
        'The genitive {لِـ} is the mark of possession: {كِتَابُ لَهُ} is the full form, and {كِتَابُهُ} is the short one. Where the noun appears, the particle appears; where the noun disappears, only the suffix is left.',
      ),
    },
    {
      label: T('Why {دُونَ} is not like {مِنْ}'),
      text: T(
        '{مِنْ} separates and {دُونَ} measures. {دُونَ أَبَاءٍ} is literally "below parents", and the limit is what gives the sense of "without". Swapping the two gives a clause that is still comprehensible and is not what the text said.',
      ),
    },
  ],
  examples: [
    { text: 'لَهُ', gloss: T('of him; he has') },
    { text: 'لَكَ', gloss: T('for you') },
    { text: 'لِشُكْرِكَ', gloss: T('in order to thank you') },
    { text: 'بَيْنَ يَدَيْهِ', gloss: T('between his two hands; before him') },
    { text: 'ضَدَّ الظَّالِمِينَ', gloss: T('against the oppressors') },
    { text: 'دُونَ أَبَاءٍ', gloss: T('without parents; below parents') },
    { text: 'عِنْدَ اللهِ', gloss: T('with God; in his presence') },
    { text: 'نَحْوَ سِتَّةِ', gloss: T('about six') },
    { text: 'مَعَنَا', gloss: T('with us') },
  ],
  tables: [
    {
      caption: T('{لِـ} and its three uses'),
      head: [T('Use'), T('Complement'), T('Example'), T('Gloss')],
      rows: [
        [T('possession'), T('a noun'), 'لَهُ', T('of him; he has')],
        [T('destination'), T('a noun or a person'), 'لَكَ', T('for you')],
        [T('purpose'), T('a verbal noun'), 'لِشُكْرِكَ', T('in order to thank you')],
        [T('comparison'), T('a noun'), 'مَثْلِي', T('like me')],
      ],
    },
    {
      caption: T('The five neighbours'),
      head: [T('Particle'), T('Gloss'), T('Usual complement'), T('Example')],
      rows: [
        ['بَيْنَ', T('between; among'), T('a place or a group'), 'بَيْنَ يَدَيْهِ'],
        ['ضِدّ', T('against'), T('a person or a force'), 'ضَدَّ الظَّالِمِينَ'],
        ['دُونَ', T('without; below'), T('a limit'), 'دُونَ أَبَاءٍ'],
        ['عِنْدَ', T('with'), T('a person, a place or a price'), 'عِنْدَ دِينَارِ'],
        ['نَحْوَ', T('towards; about'), T('a place or a number'), 'نَحْوَ سِتَّةِ'],
      ],
    },
    {
      caption: T('Linking and governing'),
      head: [T('Form'), T('Function'), T('What it links'), T('Example')],
      rows: [
        [
          'وَ',
          T('conjunction; governs nothing'),
          T('noun to noun, clause to clause'),
          'مُوسَى وَهَارُونُ',
        ],
        ['بـ', T('particle; governs the genitive'), T('verb to noun'), 'بِالْقُوَّةِ'],
        ['لـ', T('particle; governs the genitive'), T('verb to noun'), 'لِشُكْرِكَ'],
        ['كـ', T('particle; governs the genitive'), T('verb to noun'), 'كَمَثْلِهِ'],
      ],
    },
  ],
};

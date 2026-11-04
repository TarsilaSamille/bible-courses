import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('The alphabet and pronunciation'),
  subtitle: T('The 26 letters, the nasal vowels and the {r} nobody pronounces the way we do'),
  section: T('Foundations'),
  body: C(`## The 26 letters, and why their names are a problem

The French alphabet has the same 26 letters as Portuguese does. What differs is the **name** of some of them when you have to say them in sequence: {b} is {bé}, {c} is {cé}, {g} is {gé}, {q} is {cu}, {v} is {vé}, {w} is {double vé}, {y} is {i grec}, {z} is {zède}. That is why a number like {vingt-deux} [vɛ̃t dø] sounds nothing like it looks, and {leçon} is written with {c} but has an {s} sound.

Three letter pairs are especially treacherous, because their names sound alike while the sound inside the word is quite different: {c} and {ç} before {a, o, u} are [k], in every other position they are [s]; {g} and {j} — {g} is always [ɡ], {j} is always [ʒ]; {e} and {ë} — {e} is the schwa [ə], {ë} is [ɛ]. Learn the rule by pair, not by letter.

## The seven vowels, and why final {e} is not pronounced

French has 14 vowel sounds spread over 7 series. The starting point is simple: the plain vowels *a e i o u* give the closed {a}, {e}, {i}, {o}, {u}, and *y* acts as a vowel in {il}, {style}.

| Series | Spelling | Sound | Example |
|---|---|---|---|
| closed a | a | [a] | {chat} "cat" |
| open a | a | [ɑ] | {pate} "paw" |
| closed e | é, è, ê | [e] | {été} "summer" |
| open e | e, ai, è | [ɛ] | {père} "father" |
| closed o | o | [o] | {mot} "word" |
| open o | o | [ɔ] | {homme} "man" |
| closed i | i, y, u | [i] | {ami} "friend" |
| closed u | ou | [u] | {tout} "everything" |
| open u | u | [y] | {tu} "you" |

The {o}/{ou} and {e}/{è} contrast is the one Portuguese already has with its own open and closed *e*, which makes Portuguese ears a good starting point. The {i}/{y}/{u} [i] and {u} [y] pair, though, is a real difficulty: in {il}, {hiver}, {dieu}, *u* and *i* produce exactly the same sound.

The schwa [ə] is the commonest French vowel and the one least like Portuguese: a short, central, neutral vowel, a sort of half-glide between {a} and {e}. It appears in thousands of words ({le, de, ne, que, une}) and is almost never written.

## Nasal vowels: the air comes out through the nose

When a nasal vowel is followed by a consonant, the resonance moves: air escapes through the nose. {en}, {an} are [ã] ({enfant} "child"), {on} is [õ] ({bon} "good"), {in}, {ain}, {ein} are [ẽ] ({bien} "well"), {un} is [œ̃] ({un} "one"). **If a vowel follows, the nasalisation disappears**: {enfant} [ã] against {enfantin} [ɑ̃tɛ̃], {bon} [bõ] against {bonne} [bɔn] — because the final schwa is a vowel, not a consonant.

That detail is what makes the nose a reading problem: you cannot nasalise out of habit, you have to wait and see what comes next.

## {r}, {h}, and the two-letter consonants

French {r} is **uvular**: it vibrates at the back of the throat, like a faint rasp, and it is heard even word-initially — {rouge} [ʁuʒ], {rêve} [ʁɛv]. In {arbre} [aʁbʁ] it barely sounds, merely colouring the preceding vowel, while in {arriver} [aʁive] the double {r} makes the vowel sound open. That is why {arbre} does not sound like {rompre} or {cote}.

{h} has three behaviours: silent in {homme}, {hôtel}, aspirated in {héros}, {hiver}, and even word-final in {rouge}, {niche}. A silent **h blocks elision**: you write {le héros} and never {l’héros}, because {héros} begins with an aspirated {h}.

Among the clusters that stand for a single sound, learn these: {ch} = [ʃ] as in {cheval} "horse", {gn} = [ɲ] as in {agneau} "lamb", {ph} = [f] as in {philosophe} "philosopher", {qu} = [k] as in {qui} "who", {oi} = [wa] as in {oui} "yes", {au}/{eau} = [o] as in {eau} "water", {ail}/{euil} = [œj] as in {soleil} "sun", {ill} = [j] as in {famille} "family", {ç} = [s] as in {français} "French".

Final {s} is silent: {gris} [ɡʁi] sounds like the {i} of {ci}, and {temps} [tɑ̃] loses the {s} and gains a nasal {t}. But {s} between vowels is [z]: {rose} [ʁoz] "rose".

## Applied reading

Read aloud, first slowly, then against the clock. The text below is **Louis Segond** from {Psalms 23:1}:

> {L’Éternel est mon berger : je ne manquerai de rien.}

Now check sound by sound: {L’Éternel} has closed {é} twice plus the uvular {r}; {berg} has uvular {r} and a final {g} that barely sounds, leaving the word as [bɛʁ]; {je ne manquerai} has open {ai} [ɛ] in {manquerai}; {rien} has closed {i} and nasal {en}. Compare with {Genesis 1:1}: {Au commencement, Dieu créa les cieux et la terre} — {Au} [o], {commencement} with three silent {e}s, {créa} with closed {é}, {les} with a mute {e}, {cieux} with a mute {ie}, {terre} with the mute final {e}. If you read {les} as *lez*, you are still listening with Portuguese ears.

## The takeaway

French spelling is only a hint: nasal vowels depend on what follows, the final {e} usually vanishes, and {r} is never yours. Follow the sound rules, not the letter rules.`),
  vocab: [
    V('enfant', 'enfant', 'child; nasal {en} [ã]'),
    V('bonne', 'bon', 'good; {on} with no nasalization before {-e}'),
    V('bien', 'bien', 'well; nasal {in} [ẽ]'),
    V('cheval', 'cheval', 'horse; {ch} = [ʃ]'),
    V('agneau', 'agneau', 'lamb; {gn} = [ɲ]'),
    V('famille', 'famille', 'family; {ill} = [j]'),
    V('rouge', 'rouge', 'red; uvular {r} and {ge} = [ʒ]'),
    V('homme', 'homme', 'man; silent {h} and open {o} [ɔ]'),
    V('héros', 'héros', 'hero; aspirated {h}, blocks elision'),
    V('œuvre', 'œuvre', 'work of art; {œu} = [ø]'),
    V('soeur', 'sœur', 'sister; {œu} = [ø] and uvular {r}'),
    V('oui', 'oui', 'yes; {oi} = [wa]'),
    V('eau', 'eau', 'water; {eau} = [o]'),
    V('soleil', 'soleil', 'sun; {euil} = [œj]'),
    V('tu', 'tu', 'you; {u} = [y], tongue forward'),
    V('tout', 'tout', 'all, everything; {ou} = [u] with rounded lips'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {bonne}, why is the {on} not nasal?'),
    options: [
      T('Because the final {-e} is a vowel, and nasalization only happens before a consonant'),
      T('Because the initial {b} blocks nasalization'),
      T('Because the open {o} [ɔ] can never be nasal'),
      T('Because nasalization was lost over a century ago'),
    ],
    answer: 0,
    hint: T('Rule §1: the test is the letter that follows, not the word itself.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with {on} or {oi}: j____ marry (wife, with oi)'),
      answer: 'epouse',
      hint: T('Write the whole word; the {oi} = [wa] pair appears inside it.'),
    },
    {
      kind: 'choose',
      prompt: T('Which French {r} is articulated in the throat, even word-initially?'),
      options: [
        T('{rouge} and {rêve}'),
        T('{merci} and {service}'),
        T('{leçon} and {place}'),
        T('{fille} and {pays}'),
      ],
      answer: 0,
      hint: T('Rule §2: in the other three the {j} is [ʒ], and it does not vibrate in the throat.'),
    },
    {
      kind: 'match',
      prompt: T('Match the sound to its example'),
      pairs: [
        { a: T('[ʃ]'), b: T('{cheval} "horse"') },
        { a: T('[ɲ]'), b: T('{agneau} "lamb"') },
        { a: T('[wa]'), b: T('{oui} "yes"') },
        { a: T('[y]'), b: T('{tu} "you"') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('In {L’Éternel est mon berger}, how many nasal vowels appear?'),
      answer: 'zero',
      hint: T('No word in the phrase has {an}, {en}, {on}, {in} or {un} followed by a consonant.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nasal vowels exist only before a consonant: {enfant} [ã] "child", {enfants} [ã] "children", {bonne} [bɔn] "good".',
      ),
    },
    {
      n: '2',
      text: T(
        'French {r} is uvular [ʁ] and is heard even word-initially ({rouge}, {rêve}); in {arbre} and {arriver} it only colours the preceding vowel.',
      ),
    },
    {
      n: '3',
      text: T(
        'Final {e} is almost always mute: {père} [pɛʁ] "father" has no final vowel, unlike {premier} [pʁəmje] "first".',
      ),
    },
    {
      n: '4',
      text: T(
        'The {h} of {homme} and {hôtel} is silent; that of {héros} and {hiver} is aspirated and blocks elision: {le héros}, never {l’héros}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Final {s} is silent and medial {s} is [z]: {gris} [ɡʁi] "grey" against {rose} [ʁoz] "rose".',
      ),
    },
  ],
  notes: [
    {
      label: T('Do not give it a Portuguese schwa'),
      text: T(
        'The commonest habit of a Portuguese speaker in French is a final {-e} sounding like the {e} of Portuguese {este}. In {il}, {le}, {je} the French schwa is shorter and more central. Stretch it and you stop sounding French without knowing why.',
      ),
    },
    {
      label: T('Phonetic spelling drill'),
      text: T(
        'Copy five words from your dictionary containing {en}, {on}, {in} and {un}, and underline in each whether the vowel is nasal. In {travail}, {nuit} and {juin} it is; in {gens}, {mon} and {main} it is not. The same spelling, two sounds: {bien} [bjɛ̃] "well" but {plein} [plɛ̃] "full", and {pleure} [plœʁ] "cries" opens the vowel back to [ø].',
      ),
    },
  ],
  examples: [
    { text: 'un enfant', gloss: T('a child — nasal {en} [ã]') },
    { text: 'un bon père', gloss: T('a good father — [õ] and uvular {r}') },
    { text: 'il est bien', gloss: T('he is well — closed [ẽ]') },
    { text: 'tout le monde', gloss: T('everybody — {ou} [u], not {u} [y]') },
    { text: 'la rue rouge', gloss: T('the red street — two uvular {r}s') },
    { text: 'un cheval jeune', gloss: T('a young horse — {ch} [ʃ] and {j} [ʒ]') },
    { text: 'un agneau gras', gloss: T('a fat lamb — {gn} [ɲ] and mute final {s}') },
    { text: 'le travail', gloss: T('the work — {ill} = [j], a glide like English {y}') },
    { text: 'oui, c’est vrai', gloss: T('yes, that is true — {oi} [wa] and {c’} = [s]') },
    {
      text: 'l’Éternel est mon berger',
      gloss: T('the Lord is my shepherd (Ps 23:1) — closed {é}, uvular {r}'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Nasal vowels and their realization'),
      head: [T('Spelling'), T('Sound'), T('Example'), T('Gloss')],
      rows: [
        ['-an / -en', '[ã]', '{enfant}', T('child')],
        ['-on', '[õ]', '{mon}', T('my')],
        ['-in / -ain / -ein', '[ẽ]', '{bien}', T('well')],
        ['-un', '[œ̃]', '{un}', T('one')],
        ['+ vogal seguinte', '[a] / [e] / [o]', '{enfants}', T('children')],
      ],
    },
    {
      caption: T('Table 2 — Letter groups that stand for a single sound'),
      head: [T('Group'), T('Sound'), T('Word'), T('Gloss')],
      rows: [
        ['Ch', '[ʃ]', '{cheval}', T('horse')],
        ['G', '[ɲ]', '{agneau}', T('lamb')],
        ['J', '[ʒ]', '{jeune}', T('young')],
        ['Ç', '[s]', '{français}', T('French')],
        ['Qu', '[k]', '{qui}', T('who')],
        ['Oi', '[wa]', '{oui}', T('yes')],
        ['Au / eau', '[o]', '{eau}', T('water')],
        ['Euil', '[œj]', '{soleil}', T('sun')],
        ['Ill', '[j]', '{famille}', T('family')],
        ['Ph', '[f]', '{philosophe}', T('philosopher')],
      ],
    },
  ],
};

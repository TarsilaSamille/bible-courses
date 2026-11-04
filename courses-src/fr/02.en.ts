import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Spelling and accents'),
  subtitle: T(
    '{é è ê à ù ç œ} — five marks a Frenchman of Portuguese never uses, plus an {i} that almost never appears',
  ),
  section: T('Foundations'),
  body: C(`## The French accent sits at the end of the word, not the beginning

In Portuguese the accent marks stress and can appear in many positions. In French this almost never happens: what the accent marks is **the last pronounced vowel of the word**, and that position is stable. An acute word is acute; a grave word is grave. The result is one of the most regular structures in the language.

The accent has two jobs, and they never mix. The **grave accent** {è} appears only in grave words, to say which vowel is the last sound: {père, mère, frère, après, règlement, niveau, ève, Noël}. The **circumflex** {â, ê, î, ô, û} appears in acute words, with the same job: {hôtel, forêt, crêpe, goût, sûr, dû, tôt, Saône}.

See what this solves. In {père} and {mère} the last vowel is the mute {e}, so the accent has to point back to the {è} before it. In {hôtel} and {forêt} the last vowel really is the {ê}/{ô}, and the accent confirms it. In no case does the accent mark emphasis: French has **no stress-accented oxytone**.

There is one case where the circumflex stops being functional: in many words inherited from Latin it now marks only the former length of a vowel that has since shortened. {fête} (Latin *fēsta*), {hôtel} (*hostel*), {tête}, {bête}, {intègre}, {système}. There its job is etymological, not phonetic — remove it and hardly anyone notices.

## The circular {â}

In {château}, {forêt}, {côte}, {hôpital}, {tête}, {fête}, {mâle} and {bâiller}, the {â} stands for [ɑ], the open {a}. It is the only vowel whose accent changes the sound, which is what makes those accents indispensable: {château} [ʃɑto] "castle" and {châtau} do not exist.

## The cedilla {ç}: a comma that changes the sound

The {ç} is the only other mark Portuguese also uses, and it follows exactly the same rule: before {a, o, u} the {c} would be [k], and the {ç} turns it into [s]. {ça} [sa], {cédez} [sede], {garçon} [ɡaʁsɔ̃], {reçu} [ʁəsy], {douce} [dus], {façon} [fasɔ̃] — the {c} of {façon} and {garçon} is the same sound, and the difference in spelling is only for legibility.

## The ligature {œ} and the diaeresis {ë}

{œ} is the ligatured {oe}: it sounds [ø] as in {œuvre} [œvʁ] "work", {cœur} [kœʁ] "heart", {sœur} [sœʁ] "sister", {œuf} [œf] "egg", {fœre} [fœʁ] "fire". And note: plain {oe}, as in {soeur} and {oeuf}, sounds [œ] **just the same**. The ligature is a pronunciation sign, not an etymology sign.

{ë} is rarer but follows the same logic: {ë} = open [ɛ], like {è}, and it says that a plain {e} would be mute. {Noël} [nɔɛl], {canoë}, {mael}, {reëlect}, {Haïti}. The best-known one is a proper name, not a common word.

## The accent that is not an accent: tretted {i}

Do not expect to find {í} marking stress. When {i} appears in a stressed syllable after a vowel, French writes {y}: {exil} [ɛɡzil], {pays} [pei] "country", {Guyane} [ɡɥijɛn]. The rule is **vowel + stressed {i} = {y}**. That is why you have {vrai} [vʁɛ], {essai} [ɛsɛ], {travail} [tʁavaj], {détail} [deta(j)], {soleil} [sɔlɛj] — and hence, by a well-worn path, *il* → *ill*.

This is the mute-and-liquid rule, and it reaches beyond {i}: in {travail} the {ai} works as a unit, in {vraiment} likewise, and in {faut} the {au} does too. When two sounds fuse into one syllable, their separate contour disappears and a new sound is born.

## Applied reading

The **Louis Segond** text of {John 1:1} is, without meaning to be, a manifesto of French spelling: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}. Notice that there is **not a single stress accent** in the 24 syllables. What holds the sentence up are the endings: {commencement} ends in schwa, {était} in a mute {t}, {avec} in a mute {v}, {Parole} in a mute {l}, {Dieu} in a mute {œ}. The sentence looks accent-free because French does not need accents.

Now look at the details of {John 1:5}: {La lumière brille dans les ténèbres, et les ténèbres ne l’ont point reçue}. Here {brille} has a stressed {i} after {e}, which gives [ij]: [bʁij] — the {y} you already met in {soleil}, written {i}. And {reçue} takes a cedilla, because {ç} before {u}.

Compare {Psalms 1:1}: {Heureux l’homme qui n’a pas walké dans le conseil des pécheurs}. Note {l’homme} — the initial {h} of {homme} is silent and therefore **does not** elide, so we write {l’homme} and not {l’homme}, which would be wrong for the same reason {l’héros} is.

## The takeaway

The French accent points at the last sounded vowel, never at stress. And the marks that matter for the sound are few: {â} = [ɑ], {ç} = [s], {œ} = [ø], {ë} = [ɛ], and the {y} disguised as {i}.`),
  vocab: [
    V('père', 'père', 'father; grave: the last vowel is {è}, not the mute {e}'),
    V('mère', 'mère', 'mother; the accent is required to reveal the sound'),
    V('hôtel', 'hôtel', 'hotel; open {ô} [o] and mute final {el}'),
    V('forêt', 'forêt', 'forest; {ê} = [ɛ] and mute final {t}'),
    V('château', 'château', 'castle; {â} = open [ɑ]'),
    V('garçon', 'garçon', 'boy; {ç} = [s] before {o}'),
    V('reçu', 'recevoir', 'received; {ç} = [s] before {u}'),
    V('façon', 'façon', 'way, manner; {ç} = [s] before {a}'),
    V('sœur', 'sœur', 'sister; {œ} = [ø] and final uvular {r}'),
    V('cœur', 'cœur', 'heart; {œ} = [ø]'),
    V('œuf', 'œuf', 'egg; ligatured {œ} = [ø]'),
    V('Noël', 'Noël', 'Christmas; {ë} = open [ɛ]'),
    V('travail', 'travail', 'work; stressed {ai} after a vowel'),
    V('pays', 'pays', 'country; {y} = vowel + stressed {i}'),
    V('soleil', 'soleil', 'sun; {euil} = [œj] with a glide {i}'),
    V('fête', 'fête', 'feast; Latin-derived {ê}, pronounced [fɛt]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {père}, what is the grave accent {è} actually marking?'),
    options: [
      T('The last sounded vowel of the word, because the final {e} is mute'),
      T('The stress of the syllable {père}'),
      T('A long Latin vowel, and nothing more'),
      T('A diphthong, a sound mark with no fixed position'),
    ],
    answer: 0,
    hint: T('Rule §1: the accent is positional — always before the last vowel.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Write the word with a circumflex: foret (forest)'),
      answer: 'forêt',
      hint: T('The last vowel is the {e} itself, so the accent goes on it.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence respects the {y} rule of vowel + stressed {i}?'),
      options: [
        T('{Il a guéri} — the {i} of {guéri} is stressed and becomes [i]'),
        T('{Le petit chien} — the {i} of {petit} follows a {t}'),
        T('{Une vie calme} — the {i} of {vie} is followed by another vowel'),
        T('{Il habite ici} — both {i}s are unstressed'),
      ],
      answer: 0,
      hint: T('Rule §2: the test is vowel + {i}, not {t} + {i} nor vowel + {i} + vowel.'),
    },
    {
      kind: 'match',
      prompt: T('Match each mark to its function'),
      pairs: [
        { a: T('{â}'), b: T('open vowel [ɑ] in {château}') },
        { a: T('{ç}'), b: T('sound [s] before {a, o, u}') },
        { a: T('{œ}'), b: T('vowel [ø] in {sœur}') },
        { a: T('{ë}'), b: T('open vowel [ɛ] in {Noël}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('In {il est mon berger}, how many stress accents are there?'),
      answer: 'zero',
      hint: T(
        'A clue: the French name of God is {Dieu} [djø] — the last vowel is mute, and still nothing is accented.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The accent marks the last sounded vowel, and its position is always penultimate: {père, mère, frère, après, hôtel, forêt, goût, sûr}.',
      ),
    },
    {
      n: '2',
      text: T(
        'The grave {è} appears only in grave words and the circumflex {â ê î ô û} only in acute words; neither marks stress.',
      ),
    },
    {
      n: '3',
      text: T(
        'The {â} is the only vowel whose accent changes the sound: [a] becomes [ɑ] in {château}, {forêt}, {côte}, {tête}, {fête}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The {ç} gives [s] before {a, o, u} where {c} would give [k]: {ça, façon, garçon, reçu, douce, leçon}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Vowel + stressed {i} is written {y}: {travail, pays, exil,}~ability; and {œ} = [ø] both ligatured ({cœur}) and plain ({soeur}).',
      ),
    },
  ],
  notes: [
    {
      label: T('The acute word nobody accents'),
      text: T(
        'A Portuguese speaker spends years accenting {cafe} and a Spanish speaker {café} and {casa}; in French both would be errors. An acute word like {café}, {idée}, {papier} already shows it is acute in its mute ending, and a grave word like {maison}, {chaise} in the final {n} or {s}. There is nothing to do.',
      ),
    },
    {
      label: T('When the accent lies'),
      text: T(
        'In {fête}, {hôtel}, {tête}, {bête}, {système}, {intègre} the circumflex is a fossil: it marks the long Latin vowel, now pronounced short. A careful student who tries to lengthen it will sound archaic, not French. The accent is not always phonetic — sometimes it is a map.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole',
      gloss: T('In the beginning was the Word (Jn 1:1) — not one stress accent'),
    },
    {
      text: 'il était dans le monde',
      gloss: T('he was in the world — acute {était}, closed {o} [o]'),
    },
    { text: 'un bon père', gloss: T('a good father — grave {père}, accent obligatorily on {è}') },
    {
      text: 'la lumière brille',
      gloss: T('the light shines — {ill} = [j] plus glide {i}, as in {soleil}'),
    },
    { text: 'une tête de blé', gloss: T('a head of wheat — {ê} = open [ɛ]') },
    { text: 'le château de Paris', gloss: T('the castle of Paris — {â} = open [ɑ]') },
    { text: 'un cœur pur', gloss: T('a pure heart — {œ} = [ø] and final uvular {r}') },
    {
      text: 'le garçon et sa sœur',
      gloss: T('the boy and his sister — {ç} and {œ} in one phrase'),
    },
    {
      text: 'le travail est court',
      gloss: T('the work is short — the stressed {ai} works as one unit'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — The accents and what they mark'),
      head: [T('Mark'), T('Word type'), T('Sound'), T('Example')],
      rows: [
        ['{è}', 'grave', '[ɛ]', '{père}'],
        ['{ê}', 'aigue', '[ɛ]', '{forêt}'],
        ['{ô}', 'aigue', '[o]', '{hôtel}'],
        ['{û}', 'aigue', '[y]', '{sûr}'],
        ['{â}', 'circunflexo histórico', '[ɑ]', '{château}'],
        ['{ë}', 'trema', '[ɛ]', '{Noël}'],
      ],
    },
    {
      caption: T('Table 2 — Marks that change the sound'),
      head: [T('Pair'), T('With the mark'), T('Without it'), T('Example')],
      rows: [
        ['c / ç', '[s]', '[k]', '{façon} / {capot}'],
        ['e / è', '[ɛ]', '[ə]', '{père} / {pere}'],
        ['o / ô', '[ɔ]', '[o]', '{côte} / {cote}'],
        ['a / â', '[ɑ]', '[a]', '{château} / {chaton}'],
        ['i / y', '[i]', '[i]', '{travail} / {travaux}'],
      ],
    },
  ],
};

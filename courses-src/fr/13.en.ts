import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('The present indicative'),
  subtitle: T('The three groups, {être}, {avoir} and the reading of John 1'),
  section: T('The verbs'),
  body: C(`## One present, three groups

Nearly all French morphology falls into three families, and the ending of the infinitive is enough to tell you which. The criterion is not the number of syllables — it is the ending.

**Group 1, -er** (by far the largest in the language): {parler}, {chanter}, {chercher}, {continuer}. The present is {je -e, tu -es, il -e, nous -ons, vous -ez, ils -ent}, and the final -e drops, since it is no longer heard: {je parle}, {tu parles}, {il parle}, {nous parlons}, {vous parlez}, {ils parlent}.

**Group 2, -ir**: {finir}, {choisir}, {obéir}, {grandir}. The present is {je -is, tu -is, il -it, nous -issons, vous -issez, ils -issent}: {je finis}, {tu finis}, {il finit}, {nous finissons}, {vous finissez}, {ils finissent}. This group is tiny; most -ir verbs belong to group 3.

**Group 3, all the rest**: -re and -ir verbs that are not group 2. The present is always regular: {vendre → je vends, nous vendons, ils vendent}, {partir → je pars, nous partons, ils partent}, {sentir → je sens, nous sentons, ils sentent}.

This is a seventeenth-century systematisation, the work of Besenval and the Academy grammarians. It simplified the presentation, but it did not invent the rule — each of the six persons we use today already existed in speech before any grammar was written.

## The present does three jobs

1. **Present now**: {je travaille en ce moment} "I am working at this moment".
2. **Habit and general truth**: {le soleil se lève à l'est} "the sun rises in the east", {les Français parlent français} "the French speak French".
3. **Near future**: {je vais partir} "I am going to leave" — aller in the present plus the infinitive.

And there is a fourth use, distinctly French with no direct equivalent: the **historical present**, which tells the past as though it were happening now. {Ce jour-là, Jésus entre à Jérusalem} "on that day, Jesus entered Jerusalem" — present, not past. It is the construction that makes the Gospel sound like living narration.

## {être} and {avoir}, by heart

These are the two verbs you need before any other, because they build every conjugated phrase.

| | {je} | {tu} | {il / elle / on} | {nous} | {vous} | {ils / elles} |
|---|---|---|---|---|---|---|
| {être} | {suis} | {es} | {est} | {sommes} | {êtes} | {sont} |
| {avoir} | {ai} | {as} | {a} | {avons} | {avez} | {ont} |

Notice three things. Je suis and tu es drop the Latin -t. Ils ont has no -v at all. And vous êtes / vous avez serve for tu and for vous alike — that is where polite vous comes from.

## Spelling lies about sound

This is the point that most surprises anyone coming from Portuguese or Spanish. Group 3 has identical written forms for different persons, yet they **do not sound alike**:

- {nous disons} sounds [nw di.zɔ̃] — the -s speaks
- {vous dites} sounds [vu dit] — the -s falls silent
- {ils ont} sounds [il ɔ̃] — the -t falls silent
- {vous avez} sounds [vu a.ve] — the -v falls silent

The rule is **liaison**: a final consonant changes and glues itself to the following initial vowel. The letter stays written, the sound changes. That is why one written form has two pronunciations.

## Verbs that ignore the group

Some verbs have a present of their own, and it has to be learnt as a block rather than derived:

| Infinitive | {je} | {tu} | {il} | {nous} | {vous} | {ils} |
|---|---|---|---|---|---|---|
| {prendre} | {prends} | {prends} | {prend} | {prenons} | {prenez} | {prennent} |
| {dire} | {dis} | {dis} | {dit} | {disons} | {dites} | {disent} |
| {faire} | {fais} | {fais} | {fait} | {faisons} | {faites} | {font} |
| {voir} | {vois} | {vois} | {voit} | {voyons} | {vez} | {voient} |
| {pouvoir} | {peux} | {peux} | {peut} | {pouvons} | {pouvez} | {peuvent} |
| {savoir} | {sais} | {sais} | {sait} | {savons} | {savez} | {savent} |
| {vouloir} | {veux} | {veux} | {veut} | {voulons} | {voulez} | {veulent} |

## Negation, all at once

The {ne} goes before the verb and the {pas} after it, wrapping the whole verb, while the adverb stays outside: {je ne comprends pas}, {je ne parle pas bien français}, {je n'ai pas compris}, {il ne voit pas}.

When the verb ends in -s or -x, that -s is swallowed by the {ne}: {tu ne sais pas} sounds [ty ne se pas]. Outside the negation the form is {tu sais}, sounding [tu se]. The sound is the same; what changes is who is speaking.

## Reading — Louis Segond

A paradigmatic reading: **Au commencement, le Verbe était, et le Verbe était avec Dieu, et le Verbe était Dieu** (John 1:1). Three verbs in a row, all present — {était} — and the noun {le Verbe} with the definite article {le} three times. French has no present form of "to exist": Portuguese has {existir}, Spanish {ser}, French has to fall back on {être}.

**Toutes les choses ont été faites par lui** (John 1:3) brings {été} and {faites}, both participles, already detached from the present — which shows how rich Bible reading is in non-finite forms. **Il y avait** (John 1:5), the imperfect, supplies the past that the present does not have.

**En lui était la vie, et la vie était la lumière des hommes** (John 1:4) repeats {était} with the subject changing. And **La lumière brille dans les ténèbres, et les ténèbres ne l'ont point reçue** (John 1:5) gives {ne … point} — the archaic negation of the King James line, still alive in Bible text, with {point} in the place of {pas}.

## What to take away

Three groups, six persons, one rule: take the infinitive, look at the ending, apply it. Then learn {être} and {avoir} as words, because everything else leans on them. And remember that in French present and past are different things, and Bible reading is the best place to see it.`),
  vocab: [
    V('parler', 'parler', 'to speak; group 1, -er'),
    V('finir', 'finir', 'to finish; group 2, -ir'),
    V('vendre', 'vendre', 'to sell; group 3, -re'),
    V('partir', 'partir', 'to leave; group 3, -ir'),
    V('je suis', 'être', 'I am; highly irregular'),
    V('nous sommes', 'être', 'we are; sommes is unique'),
    V('ils sont', 'être', 'they are; no -t'),
    V("j'ai", 'avoir', 'I have; ai with no -v'),
    V('vous avez', 'avoir', 'you have; same as tu as'),
    V('ils ont', 'avoir', 'they have; no -v'),
    V('nous disons', 'dire', 'we say; the -s is heard'),
    V('vous dites', 'dire', 'you say; the -s is silent'),
    V('prendre', 'prendre', 'to take; irregular present'),
    V('faire', 'faire', 'to do; ils font'),
    V('voir', 'voir', 'to see; nous voyons'),
    V('je ne comprends pas', 'comprendre', 'I do not understand; ne … pas'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which group does {finir} belong to, and what is its {vous} form?'),
    options: [
      T('Group 1 (-er); {vous finissez}'),
      T('Group 2 (-ir); {vous finissez}'),
      T('Group 2 (-ir); {vous finison}'),
      T('Group 3 (-ir); {vous finissent}'),
    ],
    answer: 1,
    hint: T(
      'Rule §1: a regular -ir present is a tiny group — {is, is, it, issons, issez, issent}.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the present of {être}: nous ___'),
      answer: 'sommes',
      hint: T('One of the few forms of the verb that follows no pattern at all.'),
    },
    {
      kind: 'choose',
      prompt: T('In «{vous dites}», what happens to the final -s?'),
      options: [
        T('It is heard normally, as in {nous disons}'),
        T('It falls silent, because of liaison before a consonant'),
        T('It turns into -z'),
        T('It doubles: {vous diteses}'),
      ],
      answer: 1,
      hint: T('Rule §4: the letter stays written, but the sound changes with the next vowel.'),
    },
    {
      kind: 'match',
      prompt: T('Match each person to the form of {avoir}'),
      pairs: [
        { a: T('je'), b: T('{ai} — no -v') },
        { a: T('nous'), b: T('{avons} — same shape in avoir and être') },
        { a: T('vous'), b: T('{avez} — same as tu as') },
        { a: T('ils'), b: T('{ont} — no -v') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('How many verbs in the irregular table have the **same** form for {je} and {tu}?'),
      options: [T('None'), T('One'), T('Two'), T('Three')],
      answer: 3,
      hint: T(
        'Count in the table: prendre, dire, faire and voir repeat; pouvoir, savoir and vouloir do not.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The group is memorised with the infinitive: -er gives group 1 ({-e, -es, -e, -ons, -ez, -ent}), a regular -ir gives group 2 ({-is, -is, -it, -issons, -issez, -issent}), and everything else is group 3, also regular: -re and the remaining -ir verbs.',
      ),
    },
    {
      n: '2',
      text: T(
        "The present covers the present moment, habit or general truth ({le soleil se lève à l'est}) and the near future ({je vais partir}) — aller in the present plus an infinitive.",
      ),
    },
    {
      n: '3',
      text: T(
        "Être and avoir are entirely irregular: {je suis, tu es, il est, nous sommes, vous êtes, ils sont} and {j'ai, tu as, il a, nous avons, vous avez, ils ont}. No other French verb is used as much as these two, and none is easier to memorise.",
      ),
    },
    {
      n: '4',
      text: T(
        'One written form can sound two ways because of liaison: {nous disons} [di.zɔ̃] speaks the -s, {vous dites} [dit] keeps it silent; {ils ont} [ɔ̃] keeps the -t silent, {vous avez} [a.ve] keeps the -v silent. The letter stays, the sound moves.',
      ),
    },
    {
      n: '5',
      text: T(
        'Negation wraps the verb: ne before, pas after, the adverb outside ({je ne parle pas bien français}). And a final -s or -x on the verb disappears before ne: {tu ne sais pas} [ty ne se pas] sounds like {tu sais} [tu se].',
      ),
    },
  ],
  notes: [
    {
      label: T("The historical present: the Gospel's tense"),
      text: T(
        'Telling the past in the present is a technique of living narration, and the French Bible uses it constantly. {Au commencement, le Verbe était} (John 1:1) is present, not past: the Gospel is not describing a distant fact, it is setting the fact in front of you. Compare {Il y avait} (John 1:5), which is imperfect and belongs to a secondary narration. In Portuguese and Spanish the phenomenon is rarer, which is why the literal translation sounds livelier than you would expect.',
      ),
    },
    {
      label: T('Three groups is a seventeenth-century device'),
      text: T(
        'The three-group classification is the work of Besenval and the Academy grammarians in the seventeenth century, two hundred years after Latin had lost most of its forms. It created no rule: it merely named regularities that were already in the speech. The side effect was good — the student stops memorising an endless list — but the cost is that group 2 verbs are so few that hardly anyone recognises them: {finir} is group 2, {partir} is not.',
      ),
    },
  ],
  examples: [
    { text: 'je parle', gloss: T('I speak — group 1, the -e drops') },
    { text: 'nous finissons', gloss: T('we finish — the only group 2') },
    { text: 'je vends', gloss: T('I sell — regular group 3, silent -s') },
    { text: 'nous partons', gloss: T('we leave — -ir, but group 3') },
    { text: 'je suis', gloss: T('I am — no -t, just like il est') },
    { text: 'ils ont', gloss: T('they have — no -v; silent t') },
    { text: 'vous dites', gloss: T('you say — silent -s, /s/') },
    { text: 'je ne comprends pas', gloss: T('I do not understand — negation wraps the verb') },
    { text: 'ils font', gloss: T('they do — from faire') },
    { text: 'le Verbe était', gloss: T('the Word was — historical present (John 1:1)') },
  ],
  tables: [
    {
      caption: T('Table 1 — The three regular groups'),
      head: [
        T('Group'),
        T('Ending'),
        T('{je}'),
        T('{tu}'),
        T('{il}'),
        T('{nous}'),
        T('{vous}'),
        T('{ils}'),
      ],
      rows: [
        ['1', '{-er}', 'parle', 'parles', 'parle', 'parlons', 'parlez', 'parlent'],
        ['2', '{-ir}', 'finis', 'finis', 'finit', 'finissons', 'finissez', 'finissent'],
        ['3', '{-re}, {-ir}', 'vends', 'vends', 'vend', 'vendons', 'vendez', 'vendent'],
        ['3', 'partir', 'pars', 'pars', 'part', 'partons', 'partez', 'partent'],
      ],
    },
    {
      caption: T('Table 2 — {être} and {avoir} against the irregulars'),
      head: [T('Verb'), T('{je}'), T('{il}'), T('{nous}'), T('{vous}'), T('{ils}')],
      rows: [
        ['{être}', '{suis}', '{est}', '{sommes}', '{êtes}', '{sont}'],
        ['{avoir}', '{ai}', '{a}', '{avons}', '{avez}', '{ont}'],
        ['{faire}', '{fais}', '{fait}', '{faisons}', '{faites}', '{font}'],
        ['{voir}', '{vois}', '{voit}', '{voyons}', '{vez}', '{voient}'],
        ['{pouvoir}', '{peux}', '{peut}', '{pouvons}', '{pouvez}', '{peuvent}'],
        ['{savoir}', '{sais}', '{sait}', '{savons}', '{savez}', '{savent}'],
      ],
    },
  ],
};

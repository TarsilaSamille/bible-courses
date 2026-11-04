import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Possessive pronouns'),
  subtitle: T('{mon, ma, mes} and the stressed {le mien, la sienne, les leurs}'),
  section: T('Pronouns'),
  body: C(`## Two systems, one set of roots

The French possessive comes in two families, and they split a single pair of roots: {mon, ma, mes} for the possessor, {le mien, la mienne, les miens} for the thing that is his.

The **unstressed** form comes before the noun and never appears alone: {mon père} "my father", {ta mère} "your mother", {mes enfants} "my children", {notre Père} "Our Father", {votre maison} "your house", {leur pays} "their country".

The **stressed** form carries the definite article and works as a noun, alone or after a preposition: {le mien} "mine", {la tienne} "yours", {les leurs} "theirs". It is the only one that survives without a noun: {C'est mon livre, pas le tien} "This is my book, not yours".

## Unstressed: agreement is with the thing

The point that trips up Portuguese speakers is that {mon}, {ta}, {mes} agree with the **thing possessed**, not with the possessor.

- {mon} before a masculine noun: {mon livre}, {mon père}, {mon Dieu}.
- {ma} before a feminine noun: {ma maison}, {ma sœur}, {ma vie}.
- {mes} for any plural: {mes livres}, {mes sœurs}, {mes enfants}.

And there is **euphony**: {mon} turns into {ma} before {ma} — {ma maison} "my house" — and before {mon} — {mon père} "my father".

## Euphony: {mon} and {cet}

{mon} swallows its final *-n* before a vowel or a silent *h*, becoming {ma}, {mo}, {mes}:

- {mon âme} "my soul" — a feminine noun, but euphony wins.
- {mon histoire} "my story" — the same, a silent *h*.
- {mon école} "my school".
- {mon homme} "my husband" — silent *h*; compare {mon héros} "my hero", with an aspirated *h*, which **does not** change.

The same rule governs {ton}, {son}, {notre}, {votre}: {ton âme}, {son école}, {votre histoire}. The final *-s* of {mes}, {tes}, {ses} never changes: {mes amis}, {tes idées}, {ses frères}.

## Stressed: with an article, always

The stressed form repeats the article of the noun it replaces:

| | Singular | Plural |
|---|---|---|
| Masculine | {le mien}, {le tien}, {le sien} | {les miens}, {les tiens}, {les siens} |
| Feminine | {la mienne}, {la tienne}, {la sienne} | {les miennes}, {les tiennes}, {les siennes} |

Plus {le nôtre}, {la nôtre}, {les nôtres}, {le vôtre}, {le leur}, {les leurs}. They behave as nouns: {Je préfère le sien} "I prefer his". After a preposition it is the stressed form that shows up, never the unstressed: {le livre de mon frère} — but {le sien}, not ~~{le de lui}~~, when the possessor is the pronoun itself.

## The blind spot: {son, sa, ses} and {leur}

{sur}, {sa}, {ses} can mean "his" or "her". Context decides: {sa mère} "his mother" or "her mother"? The nearby verb usually settles it — {il parle à sa mère} "he is speaking to his mother". In the plural, {ses} "his" or "her" is ambiguous too.

{leur} and {leurs} are almost always "their", because the plural possessive exists in that shape only: {leurs enfants} "their children". But {leur} without the *-s*, before a noun, is an indirect object: {je leur parle} "I speak to them".

## Reading — Louis Segond

The French Bible text uses the unstressed form throughout, because it almost never needs to say "whose". **{Notre Père, qui es aux cieux}** "Our Father, who art in heaven" — {notre} in the second person, inflecting exactly like {ton}: {notre Père} and {ton Père} can sit in the same sentence, one in address, one in narration.

**{Ton nom soit sanctifié}** and, right after, **{Ton règne vienne}** "thy kingdom come": noun repeated, possessive repeated, and that is the rhythm of the Our Father — the prayer moves in pairs, noun and possessive.

The stressed form appears where the French translation has to mark a contrast: **{l'un l'autre}** "one another" comes from Latin, and **{ceux de Jean}** "John's" uses the contracted stressed form: {celui de}, {ceux de}, {celles de} — as in **{les enfants de Dieu}** "God's children".

The prettiest case is **{les frères de Jésus}** (Mark 3:5): {de} links the noun to a proper name, and {son} is **dropped** because the absolute possessive would be unclear.

## What to take away

{mon, ta, mes} agree with the thing and live before the noun; {le mien, la tienne, les leurs} take an article and live as a noun. Euphony turns {mon} into {ma}, {mo}, {mes} before a vowel or a silent *h*. And {son} is the only ambiguous member of the system.`),
  vocab: [
    V('mon', 'mon', 'my (masculine singular)'),
    V('ma', 'ma', 'my (feminine singular)'),
    V('mes', 'mes', 'my (plural, any gender)'),
    V('ton', 'ton', 'your (masculine singular)'),
    V('son', 'son', 'his or her (ambiguous)'),
    V('notre', 'notre', 'our ({notre Père})'),
    V('votre', 'votre', 'your ({votre maison})'),
    V('leur', 'leur', 'their (before a noun) / to them (indirect object)'),
    V('le mien', 'mien', 'mine (stressed masculine)'),
    V('la sienne', 'sien', 'his or hers (stressed feminine)'),
    V('les leurs', 'leur', 'theirs (stressed plural)'),
    V('le nôtre', 'nôtre', 'ours (stressed)'),
    V('mon âme', 'âme', 'my soul (euphony: {ma} impossible)'),
    V('mon héros', 'héros', 'my hero (aspirated h: no euphony)'),
    V('mon homme', 'homme', 'my husband (silent h: {mon} kept)'),
    V('leurs enfants', 'enfant', 'their children ({leurs} with -s)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Il parle à ___ mère", whose mother is it?'),
    options: [
      T(
        'His, almost always: the masculine subject {il} is the likelier owner, and euphony allows only {sa}',
      ),
      T('It cannot be known: {sa} is ambiguous and the context given does not resolve it'),
      T('Hers: the verb {parle} is feminine and determines the possessor'),
      T('Of both: {sa} never refers to {il}'),
    ],
    answer: 0,
    hint: T(
      'The ambiguity exists in theory; in practice the adjacent subject {il} is the strongest tie-breaker.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Euphony: "___ école" (my school).'),
      answer: 'mon',
      hint: T('The noun is feminine, but {ma} + {école} is impossible, so the -n comes back.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence uses the stressed possessive correctly?'),
      options: [
        T('This book is mine, the ___ is in your room.'),
        T('This book is à mon, the ___ is in your room.'),
        T('This book is mine, the mon is in your room.'),
        T('This book is mine, the miens is in your room.'),
      ],
      answer: 0,
      hint: T(
        'The stressed form needs an article and agrees: {le mien}, {la mienne}, {les miens}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its function'),
      pairs: [
        { a: T('{ma sœur}'), b: T('unstressed feminine: agrees with the thing') },
        { a: T('{mon}'), b: T('the euphonic form, without -n') },
        { a: T('{la sienne}'), b: T('stressed feminine: article plus agreement') },
        { a: T('{les leurs}'), b: T('stressed plural: "theirs"') },
        { a: T('{je leur parle}'), b: T('{leur} without -s = indirect object') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The unstressed form agrees with the thing possessed, never with the possessor: {son livre} "his book" even when the owner is female.',
      ),
    },
    {
      n: '2',
      text: T(
        'Euphony removes the -n of {mon, ton, son} before a vowel or a silent h: {mon âme}, {ton école}, {son histoire}. The -s of {mes, tes, ses} never drops.',
      ),
    },
    {
      n: '3',
      text: T(
        'An aspirated h blocks euphony: {mon héros}, {la haga}, {le hibou} — all with -n and -s intact.',
      ),
    },
    {
      n: '4',
      text: T(
        'The stressed form always takes an article and agrees in gender and number: {le mien}, {la mienne}, {les miens}, {les miennes}. Without the article it is wrong.',
      ),
    },
    {
      n: '5',
      text: T(
        '{leur} without -s before a noun is an indirect object; {leurs} with -s is the possessive. The difference is purely orthographic, but it changes the meaning.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why {leur} does not inflect'),
      text: T(
        'Every alternative possessive is wrapped in an article and therefore agrees: {le mien}, {la mienne}. But {leur} began as an **indirect object** form and never became a possessive by inflection — the possessive is {leurs}, drawn from the plural {le leur}. That is why {leur} is one of the few French words that serves two functions for the price of one letter, and why French orthography, which is phonetic, becomes misleading exactly here.',
      ),
    },
    {
      label: T('Euphony against grammar'),
      text: T(
        'In {mon âme} grammar would ask for {ma}: {âme} is feminine. But {ma âme} is unpronounceable — two nasal vowels in a row — and speech wins. The same happened with {bel} "beautiful", which lost its final -e because of {belle}: a masculine noun inflects like a feminine one, and nobody calls that an error. Euphony is the oldest layer of French, and it is what preserves traces of popular Latin.',
      ),
    },
  ],
  examples: [
    { text: 'mon père', gloss: T('my father (masculine, no euphony)') },
    { text: 'ma maison', gloss: T('my house (feminine, {ma} regular)') },
    { text: 'mon âme', gloss: T('my soul (euphony beats agreement)') },
    { text: 'mon héros', gloss: T('my hero (aspirated h, no euphony)') },
    {
      text: 'C’est mon livre, pas le tien',
      gloss: T('this is my book, not yours ({le} + {tien})'),
    },
    { text: 'je préfère le sien', gloss: T('I prefer his (stressed masculine)') },
    { text: 'je leur parle', gloss: T('I speak to them ({leur} = indirect object)') },
    { text: 'leurs enfants', gloss: T('their children (plural possessive)') },
    { text: 'Notre Père, qui es aux cieux', gloss: T('Our Father, who art in heaven') },
    { text: 'les enfants de Dieu', gloss: T('the children of God ({de} + proper name)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Unstressed possessives (1st and 2nd person)'),
      head: [T('Person'), T('Singular'), T('Plural')],
      rows: [
        ['1.ª', T('{mon} / {ma}'), T('{mes}')],
        ['2.ª {tu}', T('{ton} / {ta}'), T('{tes}')],
        ['2.ª {vous}', T('{votre}'), T('{vos}')],
        ['3.ª', T('{son} / {sa}'), T('{ses}')],
      ],
    },
    {
      caption: T('Table 2 — Stressed possessives'),
      head: [T('Gender'), T('Singular'), T('Plural')],
      rows: [
        [
          T('Masculine'),
          T('{le mien}, {le tien}, {le sien}, {le nôtre}, {le vôtre}'),
          T('{les miens}, {les tiens}, {les siens}, {les nôtres}, {les vôtres}'),
        ],
        [
          T('Feminine'),
          T('{la mienne}, {la tienne}, {la sienne}, {la nôtre}'),
          T('{les miennes}, {les tiennes}, {les siennes}, {les nôtres}'),
        ],
      ],
    },
  ],
};

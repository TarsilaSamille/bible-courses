import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('{tu} and {vous}'),
  subtitle: T('register, number and the treatment between people'),
  section: T('Pronouns'),
  body: C(`## Two words, three jobs

{tu} is singular and familiar. {vous} is plural, or singular and formal. French has no neutral pronoun for "you": the opposition is settled by relationship, not by number.

The choice is never literal. You do not render {you} as {tu} merely because the person is singular. It depends on four things: **age**, **position**, **degree of intimacy** and the **gender of the addressee** — because one {vous} covers both a man and a woman, which {tu} does not.

- {Tu es mon ami.} "You are my friend." — equals, same age, doors open.
- {Vous êtes mon professeur.} "You are my teacher." — a pupil to the teacher, anyone to a stranger.

## The verb gives the form away

When {vous} is plural, the verb is third person plural: {vous priez} "you pray", {vous êtes} "you are", {ils prient} "they pray". Note that {vous priez} and {vous prie} are different sentences — the first is the second person of politeness, the second is the third person singular.

The imperative of {vous} ends in *-ez*: {parlez} "speak", {écrivez} "write", {priez} "pray". The same holds for the conditional: {vous parleriez} "you would speak".

## Switching registers

French has ready-made formulas for changing register:

- {On se tutoie ?} "Shall we use tu?" — the question at the table, answered collectively.
- {Je peux vous tutoyer ?} "May I call you tu?" — the more natural of the two.
- {Pouvez-vous me tutoyer ?} "Will you call me tu?" — demands an explicit answer.

And the vocabulary: **{tutoiement}** is treatment by {tu}, **{vouvoiement}** is treatment by {vous}. The first is the default in the street, at home, among friends; the second, at work, in the bank, at the doctor's, in court.

## Reading — Louis Segond

The French Lord's Prayer does not use {vous} with God. The Our Father opens with **{Notre Père, qui es aux cieux}** "Our Father, who art in heaven" — {tu} with the present {es}. **{Que ton nom soit sanctifié}** "Hallowed be thy name" keeps {ton}, of {ta}, {tes}, all second person singular.

This is not arbitrary. The French Bible translates the Hebrew of address to God, which is categorical: the slot for the addressee is always second person. A **{vous}** in prayer would sound strange, and that is why French readers do not do it.

The interesting part happens in **narration**, in the third person: **{il leur a parlé}** "he spoke to them", **{il les a vus}** "he saw them". There {les} and {leur} are direct and indirect object, and confusing them with {leurs}, the possessive, is the commonest mistake a learner makes.

## What to take away

{tu} is always singular and always familiar. {vous} is always formal or plural, and the verb tells you which: {vous êtes} is ambiguous, {vous priez} is plural, {vous prie} is politeness. Get the register wrong and nothing fails to be understood — you just sound distant, rude, or strange.`),
  vocab: [
    V('tu', 'tu', 'you (singular, familiar)'),
    V('vous', 'vous', 'you: formal singular or plural'),
    V('tu es', 'être', 'you are (familiar)'),
    V('vous êtes', 'être', 'you are (ambiguous)'),
    V('vous priez', 'prier', 'you pray (plural and polite)'),
    V('parlez', 'parler', 'speak! ({vous} imperative)'),
    V('tutoiement', 'tutoiement', 'treatment by {tu}'),
    V('vouvoiement', 'vouvoiement', 'treatment by {vous}'),
    V('se tutoyer', 'tutoyer', 'to treat each other by {tu}'),
    V('on se tutoie ?', 'tutoyer', 'shall we use {tu}?'),
    V('votre professeur', 'professeur', 'your teacher'),
    V('mon ami', 'ami', 'my friend (masculine)'),
    V('Notre Père', 'Père', 'Our Father (prayer)'),
    V('qui es aux cieux', 'ciel', 'who art in heaven ({tu})'),
    V('ton nom', 'nom', 'your name ({ton})'),
    V('il leur a parlé', 'parler', 'he spoke to them ({leur} = indirect object)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'At a bank, a stranger says "Bonjour, ___ avez le reçu du mois?". Which filling is right?',
    ),
    options: [
      T('{vous} — the stranger and the clerk do not know each other'),
      T("{tu} — the cashier is the clerk's close friend"),
      T('{vous as} — a form that does not exist in French'),
      T('{vous} — but the verb should be {as}'),
    ],
    answer: 0,
    hint: T(
      'Institution plus stranger asks for {vous} formal singular, and the verb takes the {vous} form too.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperative of {parler} in the second person plural, without -s: vous ___ parler.'),
      answer: 'parlez',
      hint: T('In group 1 the {vous} form swaps the final -r for -z.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence can only be {vous} by politeness, never plural?'),
      options: [
        T('{Vous êtes mon professeur.} — the noun is singular'),
        T('{Vous êtes mes professeurs.} — {mes} already marks the plural'),
        T('{vous êtes ready.} — the English adjective gives the plural away'),
        T('{vous suis.} — a non-existent form that proves the ambiguity'),
      ],
      answer: 0,
      hint: T('Look for a singular noun with {votre} and a verb in -ez.'),
    },
    {
      kind: 'match',
      prompt: T('Match the situation to the right treatment'),
      pairs: [
        { a: T('a colleague of the same age'), b: T('{tu} — equality and trust') },
        { a: T('the notary in an official act'), b: T('{vous} — institution and distance') },
        { a: T('a grandmother, at home'), b: T('{vous} — respect, not intimacy') },
        { a: T('God, in prayer'), b: T('{tu} — biblical address is second person') },
        { a: T('a group of ten friends'), b: T('{vous} — plural, with a group tone') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{tu} is never plural and never formal. With two or more people it is {vous}, even if they are all ten years old.',
      ),
    },
    {
      n: '2',
      text: T(
        '{vous} is ambiguous in number; the verb disambiguates: {vous êtes} can be one or two people, {vous priez} can only be two or one by politeness.',
      ),
    },
    {
      n: '3',
      text: T(
        'The {vous} imperative always ends in -ez ({parlez}, {finissez}) or in -s ({sois}, {prends}): it is the one point where the {vous} form looks like the {il/elle} one.',
      ),
    },
    {
      n: '4',
      text: T(
        'Prayer and Bible text use {tu} with God, because address is always second person. Outside prayer the choice is free, and today {vous} is increasingly common in services.',
      ),
    },
    {
      n: '5',
      text: T(
        'In the third person {les} is the direct object, {leur} the indirect object and the possessive is {leurs}, with -s. Confusing the three is the commonest mistake of the chapter.',
      ),
    },
  ],
  notes: [
    {
      label: T('A pronoun without gender'),
      text: T(
        '{vous} does not inflect. The same pronoun covers a man and a woman, and gender comes back on the noun, which has to agree: {vous êtes un professeur} or {vous êtes une professeure}. The verb carries the mark too: {vous êtes fatigué} "you are tired" and {vous êtes fatiguée} "you are tired" — the ending of the participle is the only clue. Compare Portuguese, where the gender of the addressee also disappears.',
      ),
    },
    {
      label: T('When {vous} is regional'),
      text: T(
        'In Quebec, in Belgium and in French-speaking Switzerland, {vous} is plural even among friends and family: **{on s\'est tutoyés dès l\'enfance}** "we used tu from childhood". In Marseille the same episode would already be {tu}. French is not the same across Europe: the dialect decides, which is why the same form may demand {vous} in Zurich and {tu} in Lyon.',
      ),
    },
  ],
  examples: [
    { text: 'Tu es mon ami.', gloss: T('you are my friend (equal, informal)') },
    { text: 'Vous êtes mon professeur.', gloss: T('you are my teacher (formal)') },
    { text: 'Vous êtes à l’heure.', gloss: T('you are on time (one or several people)') },
    { text: 'Vous priez pour lui.', gloss: T('you pray for him / please pray for him (polite)') },
    {
      text: 'Parlez plus lentement, s’il vous plaît.',
      gloss: T('speak more slowly, please (imperative)'),
    },
    { text: 'Pouvez-vous me tutoyer ?', gloss: T('will you call me tu?') },
    { text: 'On se tutoie, entre nous.', gloss: T('among ourselves we use tu') },
    {
      text: 'Notre Père, qui es aux cieux',
      gloss: T('Our Father, who art in heaven ({tu} in prayer)'),
    },
    { text: 'Que ton nom soit sanctifié', gloss: T('Hallowed be thy name ({ton})') },
    { text: 'il leur a parlé', gloss: T('he spoke to them ({leur} = indirect object)') },
  ],
  tables: [
    {
      caption: T('Table 1 — {tu} and {vous} in the present'),
      head: [T('Person'), T('Singular familiar'), T('Formal or plural')],
      rows: [
        ['1.ª', T('{je suis}'), T('{vous êtes} — formal')],
        ['2.ª', T('{tu es} — you'), T('{vous êtes} — ambiguous')],
        ['3.ª', T('{il est}'), T('{vous êtes} — plural')],
        ['Imperativo', T('{sois} ({sois sage})'), T('{soyez} ({soyez sages})')],
      ],
    },
    {
      caption: T('Table 2 — {être} and {avoir} with {tu} and {vous}'),
      head: [T('Verb'), T('{tu}'), T('{vous}')],
      rows: [
        ['{être}', T('{es}'), T('{êtes} — formal or plural')],
        ['{avoir}', T('{as}'), T('{avez} — formal or plural')],
        ['{pouvoir}', T('{peux}'), T('{pouvez}')],
        ['{devoir}', T('{dois}'), T('{devez}')],
      ],
    },
  ],
};

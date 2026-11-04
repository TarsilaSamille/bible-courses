import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Reflexive pronouns'),
  subtitle: T('{me, te, se, nous, vous, se} and the verb that returns to its subject'),
  section: T('Pronouns'),
  body: C(`## Six pronouns for one person

The French reflexive pronoun is {me}, {te}, {se}, {nous}, {vous}, {se} — the final -e marks the third person. It points back at the subject of the sentence itself:

- {Je me lave} "I wash myself" — {je} and {me} are the same person.
- {Tu te lèves} "you get up".
- {Il s'habille} "he gets dressed".
- {Nous nous retrouvons} "we meet each other".
- {Vous vous asseyez} "you sit down".

The pronoun comes **before** the conjugated verb, and the verb loses its object: {Je lave moi} does not exist.

## Reflexive, reciprocal, pronominal: three readings

French {se} does not distinguish these cases by form, only by meaning:

- **Reflexive**: {Elle s'habille} "she gets dressed" — one person, she and she.
- **Reciprocal**: {Ils s'aiment} "they love each other" — each one loves the other; the plural only makes sense reciprocally, because {s'aimer} has no other possible object.
- **Pronominal**: {Je m'en souviens} "I remember it" — the pronoun replaces an object that is not the subject itself: the memory is of something else.

The ambiguity is real: {Nous nous lavons} "we wash" can be reflexive (each washes himself) or reciprocal (one washes the other). Only context decides.

## {s'en} and the particle {en}

Many pronominal verbs absorb {en} ("of"): {s'en aller} "to go away", {s'en souvenir} "to remember", {s'en tenir}. The {en} stays glued: {elle s'en va}, {il s'en souviens}.

In the imperative, the -s of {se} disappears and only the hyphen is left: **{Va-t'en !}** "go away!", **{Va-t'en, dis-lui}**. With {y} the same happens: **{Vas-y}** "go there".

## The participle agrees with {être}

The rule splits by auxiliary:

- {elle s'est levée} "she got up" — {se lever}, motion, {être}, **agrees**: the -e appears.
- {elle s'est blessée} "she hurt herself" — {se blesser}, {être}, agrees.
- {elle s'est sentie} "she felt" — {se sentir}, {être}, agrees.
- {elle s'est lavé les mains} "she washed her hands" — {se} + direct object, **no** agreement, because the object follows.

So the rule is short: {se} plus verb with a *direct object* keeps the object and forbids agreement; {se} plus intransitive verb with {être} agrees with the subject.

## Verbs that change meaning with {se}

{se} is not decoration. It changes the verb:

- {dormir} "to sleep" → {s'endormir} "to fall asleep".
- {passer} "to pass" → {se passer} "to happen" ({Que se passe-t-il ?} "what is happening?").
- {revenir} "to come back" → {s'en revenir} "to change one's mind" (idiomatic, "to come back from it").
- {servir} "to serve" → {se servir de} "to make use of".
- {venir} "to come" → {il vient} "he happens to come"; {s'en venir} is a different verb.

And some verbs **only** exist in the pronominal form: {se repentir} "to repent", {se plaindre} "to complain", {se méfier de} "to be wary of", {se servir de} "to make use of".

## Reading — Louis Segond

The French Bible text is full of pronominal verbs, and they appear often where the hand is involved: **{Il leur lava les pieds}** "he washed their feet" is reflexive **and** indirect at the same time, because {les} and {eux} designate the same group.

**{Se lever}** appears in every resurrection account: **{Il s'est levé, et il s'en est allé}** is the formula of Luke 24:34 in the Louis Segond Bible for "he has risen and gone away". The particle {en} accompanies because the Latin {recessit} carries the value of "from there".

The most telling case is **{se glorifier}** "to boast": **{Qu'il ne se glorifie pas}** "let him not boast" (1 Corinthians 4:19). The pronominal form carries the sense of pride that the Latin {gloriari} already has — French is not adding anything, it is translating what is there.

And there is the shortest of all: **{Comment cela se peut-il ?}** "how can that be?" — the pronominal verb becomes an impersonal subject, and the whole sentence has no nominal subject at all.

## What to take away

The reflexive points back at the subject, comes before the verb, and uses {me, te, se, nous, vous, se}. {se} can be reflexive, reciprocal or pronominal — the difference is meaning, not form. And when the underlying verb takes {être}, the participle agrees with the subject: {elle s'est levée}.`),
  vocab: [
    V('me', 'me', 'myself (1st person singular)'),
    V('te', 'te', 'yourself (2nd person singular)'),
    V('se', 'se', 'himself/herself (3rd person)'),
    V('nous', 'nous', 'ourselves (reciprocal or reflexive plural)'),
    V('vous', 'vous', 'yourselves (plural or polite)'),
    V('je me lave', 'laver', 'I wash myself ({se} + {laver})'),
    V('il s’habille', 'habiller', 'he gets dressed'),
    V('elle s’est levée', 'lever', 'she got up (participle agrees)'),
    V('ils s’aiment', 'aimer', 'they love each other (reciprocal)'),
    V('s’en aller', 'aller', 'to go away ({en} glued on)'),
    V('va-t’en', 'aller', 'go away! (imperative, no -s)'),
    V('je m’en souviens', 'souvenir', 'I remember it'),
    V('se repentir', 'repentir', 'to repent (pronominal only)'),
    V('se passer', 'passer', 'to happen ({Que se passe-t-il ?})'),
    V('s’endormir', 'dormir', 'to fall asleep (≠ {dormir})'),
    V('il leur lava les pieds', 'laver', 'he washed their feet (John 13)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "{Nous nous lavons}", why is the sentence ambiguous?'),
    options: [
      T(
        'Because {nous} can be reflexive (each washes himself) or reciprocal (one washes the other): the form is identical',
      ),
      T('Because {nous} can only be reciprocal, and context would settle it'),
      T('Because the verb {laver} takes three different pronouns'),
      T('Because {nous} needs {se} in its place'),
    ],
    answer: 0,
    hint: T('French {se} does not distinguish the cases by form: meaning does, not form.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('"Elle s\'est ___" (she got up, from {se lever}, with {être}).'),
      answer: 'levée',
      hint: T('With {être}, the participle agrees with the feminine subject: final -e.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence does NOT have a reciprocal value?'),
      options: [
        T("{Elle s'habille.} — one person, one action"),
        T("{Ils s'aiment.} — each one loves the other"),
        T('{Nous nous retrouvons.} — each one meets the other'),
        T('{Elles se parlent.} — each one talks to the other'),
      ],
      answer: 0,
      hint: T('Plural {se} plus a transitive verb is almost always reciprocal; singular never is.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to the subject it points to'),
      pairs: [
        { a: T('{Je me}'), b: T('{je} — 1st person singular') },
        { a: T('{Tu te}'), b: T('{tu} — 2nd person singular') },
        { a: T('{Il se}'), b: T('{il/elle} — 3rd person, with -e') },
        { a: T('{Nous nous}'), b: T('{nous} — 1st person plural') },
        { a: T('{Vous vous}'), b: T('{vous} — 2nd person, plural or polite') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The reflexive pronoun comes before the conjugated verb and the verb loses its object: {Je me lave}, never {Je lave moi}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{se} has the same shape in all three uses: reflexive, reciprocal and pronominal. Plural plus a transitive verb is almost always reciprocal; singular never is.',
      ),
    },
    {
      n: '3',
      text: T(
        'Third person singular and third person plural share one form, {se}. The verb disambiguates, not the pronoun: {il se lève} against {ils se lèvent}.',
      ),
    },
    {
      n: '4',
      text: T(
        "In the imperative {se} becomes {toi} and drops the -s with a hyphen: {lave-toi}, {levez-toi}. With {en} or {y} attached, the form is {t'en} and {y}: {va-t'en}, {vas-y}.",
      ),
    },
    {
      n: '5',
      text: T(
        "The pronominal participle agrees with the subject only when there is no direct object: {elle s'est levée} yes, {elle s'est lavé les mains} no.",
      ),
    },
  ],
  notes: [
    {
      label: T('Reflexive is not a synonym for "intransitive"'),
      text: T(
        'In other languages a verb like {laver} "to wash" is transitive and {se laver} is its reflexive form — the short form. In French {se laver} is a **different verb**, with its own meaning: {se laver} "to wash oneself" and {laver qqch} "to wash something" can sit in the same sentence, {Je me lave les mains}, and that is impossible in Portuguese, where the pronominal form is merely an alternative. Hence the practical rule: when the verb already has an object, {se} is optional; when it has none, {se} is obligatory.',
      ),
    },
    {
      label: T('Agreement is a Latin inheritance'),
      text: T(
        "In Latin, a verb of motion with the auxiliary {esse} — {levantasse}, {abeunt} — never took a participle. Portuguese inherited that and cancelled it: {levantou-se}, without -e. French restored the rule, which is why {elle s'est levée} sounds more \"correct\" than {elle s'est levé} to a French ear. The Louis Segond Bible reeks of this: the forms with -e dominate, because the nineteenth-century translator felt the loss without them. Anyone who reads French and writes {elle s'est levé} without the -e is not wrong in Portuguese — is wrong in France.",
      ),
    },
  ],
  examples: [
    { text: 'je me lave', gloss: T('I wash myself (reflexive, 1st person)') },
    { text: 'tu te lèves', gloss: T('you get up ({te} = {tu})') },
    { text: 'il s’habille', gloss: T('he gets dressed ({se} = 3rd person)') },
    { text: 'nous nous retrouvons', gloss: T('we meet each other (reciprocal)') },
    { text: 'elle s’est levée', gloss: T('she got up (participle agrees)') },
    { text: 'elle s’est lavé les mains', gloss: T('she washed her hands (no agreement)') },
    { text: 'ils s’aiment', gloss: T('they love each other (obligatorily reciprocal)') },
    { text: 'va-t’en', gloss: T("go away! (imperative with {t'en})") },
    { text: 'je m’en souviens', gloss: T('I remember it ({en} glued on)') },
    { text: 'il leur lava les pieds', gloss: T('he washed their feet (John 13:1-17)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Reflexive pronouns'),
      head: [T('Subject'), T('Reflexive'), T('Imperative')],
      rows: [
        ['{je}', T('{me}'), T('—')],
        ['{tu}', T('{te}'), T('{toi} (-s drops)')],
        ['{il / elle}', T('{se}'), T('{toi} — no equivalent')],
        ['{nous}', T('{nous}'), T('{—}')],
        ['{vous}', T('{vous}'), T('{—}')],
      ],
    },
    {
      caption: T('Table 2 — Agreement of the pronominal participle'),
      head: [T('Case'), T('Example'), T('Agrees?')],
      rows: [
        [T('{se} + intransitive verb + {être}'), T("{elle s'est levée}"), T('yes')],
        [T('{se} + verb with direct object + {avoir}'), T("{elle s'est lavé les mains}"), T('no')],
        [T('{se} + infinitive + {être}'), T("{elle s'est sentie}"), T('yes')],
        [T("{s'en} + verb of motion + {être}"), T("{il s'en est allé}"), T('yes')],
      ],
    },
  ],
};

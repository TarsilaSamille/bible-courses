import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Personal pronouns'),
  subtitle: T('{je, tu, il, nous, vous, ils} and the split between {le, la, les} and {lui, leur}'),
  section: T('Pronouns'),
  body: C(`## Subject: six forms, three numbers

Subject pronouns are few and almost always present. French does not drop the subject the way Portuguese does in {chove} or in {fala-se}: in {il parle} the {il} is obligatory, and in {parle-t-il} the {t} glues itself to the verb to make the question.

| Person | Singular | Plural |
|---|---|---|
| 1st | {je} | {nous} |
| 2nd | {tu} | {vous} |
| 3rd | {il} / {elle} | {ils} / {elles} |

The ending of the verb already gives the person: {parle} can only be {je} or {il/elle}. But the subject **stays anyway**, and that is where French separates from Portuguese and Spanish. You say {je parle}, never just {parle}.

One caveat: with impersonal verbs and verbs of change of state, the subject becomes {on} or {il}: {il pleut}, {on dit}, {il fait chaud}. And in {Voici}, {Voilà}, the subject vanishes without replacement.

## Objects: {le, la, les} against {lui, leur}

Here is the big trap of the chapter. Portuguese has {o, a, os, as} and {lhe, lhes}; French keeps the two groups **apart**. Confusing them is the commonest mistake a learner makes.

- **{le, la, les, me, te, nous, vous, se}** — **direct** objects. They replace the thing.
- **{lui, leur, y, en}** — **indirect** objects. They replace the person or the noun of a preposition.

The test is the same as in Latin and Portuguese: if the pronoun replaces a noun that is the direct object of the verb, it is {le/la/les}; if it replaces a noun governed by a preposition ({à}, {de}), it is {lui/leur}.

| Sentence | {le, la, les} | {lui, leur} |
|---|---|---|
| I see **the** man | {Je **le** vois} | — |
| I speak **to him** | — | {Je **lui** parle} |
| I see **the** men | {Je **les** vois} | — |
| I speak **to them** | — | {Je **leur** parle} |

Notice that {lui} and {leur} never change form: there is no {elle} for {lui} and no {elles} for {leur}. And gender is recovered from the sentence: {Je lui ai parlé} — someone speaking to a woman also takes {lui}.

## The elision of {le} and {la}

Before a vowel or a mute {h}, {le} and {la} lose the {e} and become {l’}:

- {je l’aime} — I love him
- {je l’adore} — I adore her
- {il l’a fait} — he did it
- {la maison} — the house (no elision here: it is a noun)

Elision is **obligatory** and applies to {le}, {la}, {me}, {te}, {se} and to {je}, {ne}, {que} before a vowel. It does not happen with {les}, nor with {lui}/{leur}, which already end in a consonant or a vowel: {je les vois}, {je leur parle}.

## Agreement: {le} and {la} follow the referent

{le} and {la} have no gender of their own: they copy the gender of the noun they replace, not that of the person.

- {C’est la femme ; je **la** vois} — it is the woman; I see her
- {C’est l’homme ; je **le** vois} — it is the man; I see him
- {Ce sont les filles ; je **les** vois} — they are the girls; I see them

And watch {le} as a definite article: {Le livre est sur la table} «the book is on the table» — here {le} is the definite masculine article, not a pronoun. Context settles it: if there is a verb, it may be a pronoun; if there is no verb, it is the article.

## Application: the biblical text

John 3:16 is the most quoted verse in the language, and it is made almost entirely of pronouns: {Car Dieu a tant aimé le monde qu’il a donné son Fils unique} — {qu’il} = that he, {son} = his. And in {Je suis le chemin, la vérité et la vie} (John 14:6), the three {le/la} form a symmetrical series, each in its own gender.

In the text, indirect pronouns appear all the time: {Pour vous} (Matthew 26:13) — {vous} is the indirect object of {pour}, which is why Portuguese renders it «por vós». And {Ceux qui credront en lui} (Mark 9:35) carries the pronoun {lui} — indirect object of {en} — which in Portuguese became «nele», and which the government of {croire en} explains better than any syntax can.`),
  vocab: [
    V('je', 'je', 'I (1st sing., subject)'),
    V('nous', 'nous', 'we (1st pl., subject)'),
    V('tu', 'tu', 'you (2nd sing., familiar)'),
    V('vous', 'vous', 'you (2nd pl. or polite singular)'),
    V('il / elle', 'il', 'he / she (3rd sing., subject)'),
    V('ils / elles', 'ils', 'they (3rd pl., subject)'),
    V('le', 'le', 'him / it (direct object)'),
    V('la', 'la', 'her / it (direct object)'),
    V('les', 'les', 'them (direct object, plural)'),
    V('lui', 'lui', 'to him / to her (indirect, unchanging)'),
    V('leur', 'leur', 'to them (indirect, plural)'),
    V('je l’aime', 'aimer', 'I love him (obligatory elision)'),
    V('parle-t-il', 'parler', 'does he speak? (question hyphen)'),
    V('il pleut', 'pleuvoir', 'it rains (impersonal {il})'),
    V('qu’il a donné', 'donner', 'that he gave (relative pronoun)'),
    V('ceux qui credront en lui', 'croire', 'those who will believe in him ({lui} is indirect)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In «{Je lui parle}», why is the pronoun {lui} and not {le}?'),
    options: [
      T(
        'Because {lui} is the indirect object: it replaces the noun governed by {à}, the preposition of {parler à}',
      ),
      T('Because {lui} is the plural of {le} and {le} was already used'),
      T('Because {parler} always demands a plural object'),
      T('Because {le} can only replace people, never things'),
    ],
    answer: 0,
    hint: T(
      'Rule §2: {le, la, les} replace the direct object; {lui, leur} replace the noun of a preposition.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Elision: «Je ___ aime beaucoup» (he)'),
      answer: 'l’',
      hint: T('Before a vowel {le} becomes {l’}: the {e} drops and the pronoun glues to the verb.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to its function'),
      pairs: [
        { a: T('je'), b: T('first person subject: {je parle}') },
        { a: T('les'), b: T('plural direct object: {je les vois}') },
        { a: T('leur'), b: T('plural indirect object: {je leur parle}') },
        { a: T('lui'), b: T('singular indirect object, unchanging: {je lui parle}') },
        { a: T('on'), b: T('impersonal subject: {on dit que}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('In «{C’est la femme ; je la vois}», what is the gender of {la}, and why?'),
      options: [
        T(
          'Feminine, because the pronoun copies the gender of the referent ({la femme}), not that of the seer',
        ),
        T('Masculine, because {la} is the feminine form and the verb {vois} is masculine'),
        T(
          'Neuter, because the sentence already has a feminine noun and the pronoun is neutralised',
        ),
        T('Feminine, because {la} never refers to people'),
      ],
      answer: 0,
      hint: T(
        'Rule §4: {le}, {la} and {les} follow the gender of the noun they replace, not that of the person.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subject **never** drops in French: {je parle}, {il parle}, {nous parlons}. The ending of the verb already marks the person, but the pronoun stays anyway.',
      ),
    },
    {
      n: '2',
      text: T(
        '{le, la, les, me, te, se} are **direct objects**; {lui, leur, y, en} are **indirect objects**. The test is the Latin one: {le} replaces the accusative, {lui} replaces the noun governed by a preposition.',
      ),
    },
    {
      n: '3',
      text: T(
        'Elision is obligatory: {le} and {la} lose the {e} before a vowel or mute {h} and become {l’}. The same goes for {me}, {te}, {se} and, before a vowel, for {je}, {ne} and {que}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{le} and {la} copy the gender of the **noun** they replace, not that of the person: {C’est la femme ; je la vois} has a feminine {la} because {femme} is feminine. {lui} and {leur}, by contrast, have neither gender nor number.',
      ),
    },
    {
      n: '5',
      text: T(
        '{vous} covers both the plural and the formal singular. Talking to anyone is the default form: {vous êtes français?} sounds natural, {tu es français?} only among equals or with children.',
      ),
    },
  ],
  notes: [
    {
      label: T('The system inherited from Latin'),
      text: T(
        'The two sets of pronouns come from distinct Latin words, and that is why they never mix. {me}, {te}, {se} come from {mihi}, {tibi}, {sibi}; {lui} and {leur} are reduced forms of {illui} and {illorum}. What happened is that Latin had a single accusative pronoun ({eum}, {eam}, {eos}) and a single ablative ({eo}, {ea}, {eis}), and French kept the two apart — unlike Portuguese, which fused {o} and {lhe} into a zone of shadow, and unlike Spanish, which all but wiped them out when it lost its cases. Practical consequence: in French, if you are in doubt, ask who the **agent of the preposition** is, not who the **object of the verb** is.',
      ),
    },
    {
      label: T('The hyphen in questions'),
      text: T(
        'When the verb is conjugated and has no pronoun in front, the question is made by gluing the pronoun to the verb: {parle-t-il}, {vient-elle}, {sont-ils}. The pronoun picks up a {t} that is the leftover of the old question {te} — the same {te} of {te veux-tu?}. With {est-ce que} there is no hyphen: {est-ce que tu viens?}. And with a topical noun the inversion is different: {Quand viens-tu?}, {Où vas-tu?}. Either way the subject stays: French has no null subject in the question, nor in the statement.',
      ),
    },
  ],
  examples: [
    { text: 'Je parle.', gloss: T('I speak (subject obligatory)') },
    { text: 'Nous parlons français.', gloss: T('we speak French ({nous} plus present)') },
    { text: 'Je le vois.', gloss: T('I see him ({le} is the direct object)') },
    { text: 'Je lui parle.', gloss: T('I speak to him ({lui} is the indirect object)') },
    { text: 'Je leur donne le livre.', gloss: T('I give them the book (two objects at once)') },
    { text: 'Je l’aime.', gloss: T('I love him (obligatory elision)') },
    {
      text: 'C’est la femme ; je la vois.',
      gloss: T('it is the woman; I see her (gender of the referent)'),
    },
    { text: 'Parle-t-il ?', gloss: T('does he speak? (question hyphen)') },
    { text: 'Il pleut.', gloss: T('it rains (impersonal {il})') },
    {
      text: 'Ceux qui credront en lui.',
      gloss: T('those who will believe in him ({lui} is the indirect object of {en})'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — the personal pronouns'),
      head: [T('Person'), T('Singular'), T('Plural'), T('Use')],
      rows: [
        [T('1st'), T('je'), T('nous'), T('subject')],
        [T('2nd'), T('tu'), T('vous'), T('subject')],
        [T('3rd'), T('il / elle'), T('ils / elles'), T('subject')],
        [T('direct object'), T('me, te, le/la, se'), T('nous, vous, les'), T('replaces the thing')],
        [
          T('indirect object'),
          T('me, te, lui, se, y, en'),
          T('nous, vous, leur'),
          T('replaces the person'),
        ],
      ],
    },
    {
      caption: T('Table 2 — direct and indirect side by side'),
      head: [T('Sentence with a noun'), T('Direct object'), T('Indirect object'), T('Gloss')],
      rows: [
        [T('je vois **le** garçon'), 'le', T('—'), T('I see the boy')],
        [T('je parle **à** Paul'), T('—'), 'lui', T('I speak to him')],
        [T('je vois **les** filles'), 'les', T('—'), T('I see the girls')],
        [T('je parle **aux** filles'), T('—'), 'leur', T('I speak to them')],
        [T('je pense **à** lui'), T('—'), 'lui', T('I think of him')],
        [
          T('je parle **à** Marie'),
          T('—'),
          T('{à elle} → {lui}'),
          T('I speak to her ({lui} again)'),
        ],
      ],
    },
  ],
};

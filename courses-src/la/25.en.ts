import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Capstone: 1 Corinthians 13 in the Vulgate'),
  subtitle: T('The most complex period in Latin — read verse by verse'),
  section: T('Reading'),
  body: C(`## The text

> **Si linguis hominum loquar et angelorum, caritatem autem non habeam, factus sum velut aes sonans.**
> **Caritas patiens est, benigna est; caritas non aemulatur, non agit perperam, non inflatur.**
> **Nunc autem manent fidēs, spēs, caritās, tria haec: maior autem horum est caritās.**

## The shape of the chapter

It moves in two parts: what love does and does not do (vv. 1-3, 4-7), then what it is (vv. 8-13). The sentence you will dissect here is the hardest in the Latin New Testament, and precisely for that reason it is the best review exercise: it gathers a **conditional**, an **AcI clause**, a **deponent**, a **comparison** and three **ablatives**.

## {Si linguis hominum loquar et angelorum}

The **conditional uses the subjunctive**: {Si} + {loquar} (present subjunctive) opens the clause; the main verb {factus sum} is a perfect indicative, so the period states a condition contrary to fact. Grammatically the clause is **comparative**, not merely temporal: {factus sum} «I have become» gives the result.

**{linguis hominum}**: {linguis} is **dative plural**, governed by {loquar} — the dative of what one speaks, «in the tongues of men».

**{et angelorum}**: the noun is dropped, as Greek often does, and {angelorum} is genitive plural, dependent on {linguis}: «and of angels».

**{caritatem autem non habeam}**: {autem} marks a contrast, «but»; {caritatem} is accusative, object of {habeam} (perfect subjunctive of {habeō}).

**{factus sum velut aes sonans}**: {factus sum} is the **passive periphrastic** of {faciō} with active meaning, «I have become»; {velut} introduces the comparison and {aes} (nominative plural of {aes, aeris}) is the subject of {sonans}, a present participle with final *-ns*. The picture is a cymbal ringing with nobody listening.

## {Caritas patiens est, benigna est}

Two passive periphrastics in a row: {patiens} (from {patior}, «I suffer») and {benigna} (a first-declension adjective) are both nominative feminine singular, describing {caritas}.

The series that follows is a parade of negations: {non aemulatur} «is not jealous» ({aemulor}, deponent), {non agit perperam} «does nothing wrong» ({perperam}, adverb, «badly»), {non inflatur} «is not puffed up» ({inflō}, transitive, «to inflate»). Latin marks the negative once with {non} and lets meaning carry the rest.

## {Nunc autem manent fidēs, spēs, caritās}

**{manent}** is present indicative, third plural, «remain» — formally identical to the imperfect, so only the context separates them.

**{trīa haec}**: {trīa} is the nominative neuter plural of the numeral {trīs}, and because {haec} is a neuter plural demonstrative it agrees: «these three things». Greek does exactly the same in τρία ταῦτα.

**{maior autem horum est caritās}**: {maior} is the comparative of {magnus}, used **without {quam}** — the standard Latin comparison. {horum} is genitive plural, «of these», and {caritās} closes the period as the subject.

## What to take away

You read a whole period: conditional, AcI, comparative, deponent, implied ablative absolute and numeral. Every construction appeared in earlier chapters; together they show why Latin is read **backwards**, identifying the main clause first and only then its members.`),
  vocab: [
    V('loquar', 'loquor', 'that I speak (pres. subj. 1st sg.)'),
    V('habeam', 'habeo', 'that I have (perf. subj. 1st sg.)'),
    V('caritas', 'caritas', 'love (1st decl.)'),
    V('autem', 'autem', 'but, however (conjunction)'),
    V('aes', 'aes', 'bronze, metal (nom. pl.)'),
    V('sonans', 'sono', 'sounding (pres. part.)'),
    V('factus', 'facio', 'made, become (perf. part.)'),
    V('velut', 'velut', 'like, as (conjunction)'),
    V('patiens', 'patior', 'suffering (pres. part.)'),
    V('benignus', 'benignus', 'kind, gracious'),
    V('aemulor', 'aemulor', 'to envy (deponent)'),
    V('perperam', 'perperam', 'badly, wrongly (adv.)'),
    V('maneo', 'maneo', 'to remain'),
    V('trīs', 'tres', 'three (numeral)'),
    V('maior', 'magnus', 'greater (comparative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {Si linguis hominum loquar}, what is the mood of the subordinate verb?'),
    options: [
      T('Present subjunctive, the regular mood of conditionals'),
      T('Perfect indicative, because of {factus sum}'),
      T('Infinitive, because of {Si}'),
      T('Future, because it speaks of love'),
    ],
    answer: 0,
    hint: T('Rule §1: {Si} with conditional sense takes the subjunctive.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete: {Caritas non aemulatur} — the verb {aemulor} is deponent, so the form is ___',
      ),
      answer: 'aemulatur',
      hint: T('Same form in active and passive; the sense is active.'),
    },
    {
      kind: 'choose',
      prompt: T('In {maior autem horum est caritas}, how is the comparative rendered?'),
      options: [
        T('Without {quam}: «love is greater»'),
        T('With mandatory {quam}: «maior quam caritas»'),
        T('As a superlative: «the greatest love»'),
        T('As a verb: «loves more»'),
      ],
      answer: 0,
      hint: T('Rule §4: the Latin comparative omits {quam}.'),
    },
    {
      kind: 'fill',
      prompt: T('What is the case of {linguis} in {Si linguis hominum loquar}?'),
      answer: 'dative plural',
      hint: T('It is the dative of what is spoken, governed by {loquar}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the construction to its function'),
      pairs: [
        { a: T('factus sum'), b: T('passive periphrastic with active sense') },
        { a: T('aemulatur'), b: T('deponent verb') },
        { a: T('patiens est'), b: T('present participle used adjectivally') },
        { a: T('trīa haec'), b: T('neuter numeral + agreeing demonstrative') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Si} with conditional sense takes the subjunctive; the main clause stays indicative ({si ... velim, errō} «if I want, I will make a mistake»).',
      ),
    },
    {
      n: '2',
      text: T(
        'The dative of content: {loquor} + dative tells you **in what** one speaks: {linguis hominum loquar} «to speak in the tongues of men».',
      ),
    },
    {
      n: '3',
      text: T(
        'Deponents have a passive form and an active sense: {aemulatur} «he envies», {patitur} «he suffers», {loquitur} «he speaks».',
      ),
    },
    {
      n: '4',
      text: T(
        'The Latin comparative omits {quam}: {maior} «greater»; {maior quam} appears only for archaic emphasis.',
      ),
    },
    {
      n: '5',
      text: T(
        'A genitive plural noun may be dropped when its dependent is the only noun in the clause: {et angelorum} «and of angels».',
      ),
    },
  ],
  notes: [
    {
      label: T('Read Latin backwards'),
      text: T(
        'The first job in a Latin period is not word-by-word translation: it is finding the **main clause**. In 1Cor 13:1 it is {factus sum velut aes sonans}. Once the main clause is fixed, the rest falls into place: conditional first, then the AcI, ablatives last. Translating in Latin order produces an unreadable sentence.',
      ),
    },
    {
      label: T('The end of the chapter'),
      text: T(
        'The Vulgate reads {tria haec: maior autem horum est caritās}, with {horum} as a partitive genitive — «of these three, the greatest is love». Modern translations follow the Greek with {ex ipsis} «from among them», but the difference is small: what shapes the reading is the superlative, not the genitive.',
      ),
    },
  ],
  examples: [
    { text: 'Si linguis hominum loquar', gloss: T('if I speak in the tongues of men') },
    { text: 'caritatem autem non habeam', gloss: T('but I do not have love') },
    { text: 'factus sum velut aes sonans', gloss: T('I have become like a sounding bronze') },
    { text: 'caritas patiens est', gloss: T('love is patient (passive periphrastic)') },
    { text: 'non agit perperam', gloss: T('it does not do wrong') },
    { text: 'non inflatur', gloss: T('it is not puffed up (verbal passive)') },
    { text: 'trīa haec', gloss: T('these three things') },
    { text: 'maior horum est caritas', gloss: T('the greatest of these is love') },
  ],
  tables: [
    {
      caption: T('Table 1 — The period of 1Cor 13:1'),
      head: [T('Word'), T('Analysis'), T('Portuguese')],
      rows: [
        ['{Si}', 'conector de condição', 'se'],
        ['{loquar}', 'subj. presente 1.ª sg.', 'eu fale'],
        ['{linguis}', 'dativo plural', 'nas línguas'],
        ['{angelorum}', 'genitivo plural', 'dos anjos'],
        ['{habeam}', 'subj. perfeito 1.ª sg.', 'eu tenha'],
        ['{factus sum}', 'passivo perifrástico', 'me tornei'],
        ['{aes sonans}', 'comparação com {velut}', 'bronze que soa'],
      ],
    },
    {
      caption: T('Table 2 — Verbs of 1Cor 13:4-7'),
      head: [T('Latin'), T('Category'), T('Portuguese')],
      rows: [
        ['{patiens est}', 'passivo perifrástico', 'sofre'],
        ['{aemulatur}', 'deponente, 3.ª sg.', 'inveja'],
        ['{agit perperam}', 'ativo, {perperam} adverbial', 'faz mal'],
        ['{inflatur}', 'passivo de {inflō}', 'é inflado'],
        ['{manent}', 'indicativo presente 3.ª pl.', 'permanecem'],
      ],
    },
  ],
};

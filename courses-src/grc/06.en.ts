import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Present active indicative'),
  subtitle: T('λύω: the paradigm that opens the Greek verb'),
  section: T('The verb'),
  body: C(`## Four questions in every verb form

Every Greek verb form answers four questions: person and number (who?), tense and aspect (when and how?), voice (who acts?) and mood (fact, wish or command?). {λύουσιν} answers at once: 3rd person plural, present tense, active voice, indicative mood — "they loose". This chapter builds the first of these forms, the simplest and most frequent: the present active indicative.

The model verb is {λύω} "to loose, untie", a regular {-ω} verb with no phonetic surprises. With it you learn the six personal endings, which repeat — adapted — in every tense of the active indicative.

## The six endings

The present is built as stem + thematic vowel + personal ending. The stem of {λύω} is {λυ-}; the thematic vowel alternates between {ο} (before {μ} and {ν}: {λύομεν}, {λύουσι}) and {ε} (elsewhere: {λύεις}, {λύει}, {λύετε}). Fused with the endings, they produce the six paradigm forms.

Note the 2nd singular {-εις} and 3rd {-ει}: the final diphthong marks the person, not the tense. And the 3rd plural ends in {-ουσι}, often with movable nu — {λύουσι(ν)} — as in ch. 3.

## The present is not just "now"

The Greek present expresses imperfective aspect — action seen as ongoing or repeated — more than clock time. So it covers several English senses: action in progress ({βλέπω} "I am seeing"), habit ({προσεύχεται} "he customarily prays"), attempt ({πείθουσιν} "they are trying to persuade", the so-called conative present), even near future ({ἔρχομαι} "I am coming").

There is also the historical present, dear to narrators: mid-story in the past, the author suddenly switches to the present — {καὶ λέγει αὐτῷ} "and he says to him" (Mark 1:40). Mark does this over 150 times. The effect is cinematic: the scene starts running before the reader's eyes.

## How to study a verb

The dictionary lists the verb by the 1st singular present ({λύω}, {πιστεύω}, {ἔχω}) — the base form from which the whole present derives. But a complete verb also requires the future, aorist and perfect (the so-called principal parts), coming in later chapters. For now, memorize the paradigm below until you can say it without hesitation: it is the skeleton of everything ahead.`),
  vocab: [
    V('λύω', 'λύω', 'to loose, untie'),
    V('λύεις', 'λύω', 'you loose'),
    V('λύει', 'λύω', 'he looses'),
    V('λύομεν', 'λύω', 'we loose'),
    V('λύετε', 'λύω', 'you (pl.) loose'),
    V('λύουσι', 'λύω', 'they loose'),
    V('λέγω', 'λέγω', 'to say'),
    V('βλέπω', 'βλέπω', 'to see'),
    V('πιστεύω', 'πιστεύω', 'to believe'),
    V('ἔχω', 'ἔχω', 'to have'),
    V('γινώσκω', 'γινώσκω', 'to know'),
    V('λαμβάνω', 'λαμβάνω', 'to take, receive'),
    V('πέμπω', 'πέμπω', 'to send'),
    V('γράφω', 'γράφω', 'to write'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What is the 3rd person plural of "λύω" in the present?'),
    options: [T('λύει'), T('λύετε'), T('λύουσι(ν)'), T('λύομεν')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the 1st plural: ___ ("we loose", from λύω).'),
      answer: 'λύομεν',
      hint: T('Thematic vowel ο before μ: λυ-ο-μεν.'),
    },
    {
      kind: 'choose',
      prompt: T('In "καὶ λέγει αὐτῷ" (Mark 1:40), the present signals…'),
      options: [
        T('Habitual action'),
        T('Historical present (narrative vividness)'),
        T('Direct command'),
        T('Certain future'),
      ],
      answer: 1,
      hint: T('The story is past and the verb came in the present — rule §4.'),
    },
    {
      kind: 'match',
      prompt: T('Match each form to its person.'),
      pairs: [
        { a: 'λύεις', b: '2ª sg.' },
        { a: 'λύετε', b: '2ª pl.' },
        { a: 'λύομεν', b: '1ª pl.' },
        { a: 'λύει', b: '3ª sg.' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Present = stem + thematic vowel (ο before μ/ν, ε elsewhere) + personal ending.'),
    },
    {
      n: '2',
      text: T(
        'The dictionary lists the verb by the 1st sg. present ({γράφω}, {πέμπω}); from it comes the whole regular present.',
      ),
    },
    {
      n: '3',
      text: T(
        'Imperfective aspect: the present shows ongoing or habitual action, not merely "now".',
      ),
    },
    {
      n: '4',
      text: T(
        'Historical present: narrators (Mark above all) use the present mid past-narrative for vividness.',
      ),
    },
    {
      n: '5',
      text: T(
        'The 3rd pl. often takes movable ν ({λέγουσιν}); ignore it in analysis, as in ch. 3.',
      ),
    },
  ],
  notes: [
    {
      label: T('How to memorize:'),
      text: T(
        'Say the paradigm aloud, beating the 1-2-3 / 1-2-3 rhythm: λύω, λύεις, λύει — λύομεν, λύετε, λύουσι. The ear fixes endings faster than the eye.',
      ),
    },
    {
      label: T('In the text:'),
      text: T(
        '{λέγω} is the most frequent verb in the New Testament after {εἰμί} — and nearly always appears as the historical present ({λέγει}) in narratives. Every {λέγει} you recognize is a reading victory.',
      ),
    },
  ],
  examples: [
    { text: '{βλέπω τὸ φῶς}', gloss: T('I see the light (1st sg.)') },
    {
      text: '{πιστεύεις εἰς τὸν υἱόν}',
      gloss: T('do you believe in the Son? (2nd sg.; John 9:35)'),
    },
    { text: '{ὁ κύριος γινώσκει}', gloss: T('the Lord knows (3rd sg.)') },
    { text: '{ἔχομεν εἰρήνην}', gloss: T('we have peace (1st pl.; Rom 5:1)') },
    { text: '{τί ζητεῖτε}', gloss: T('what are you seeking? (2nd pl.; John 1:38)') },
    { text: '{λέγουσιν αὐτῷ}', gloss: T('they say to him (3rd pl. with movable ν)') },
    { text: '{καὶ λέγει αὐτῷ}', gloss: T('and he says to him (historical present; Mark 1:40)') },
    { text: '{ἔρχομαι πρὸς ὑμᾶς}', gloss: T('I am coming to you (present with future force)') },
    {
      text: '{ὁ πατὴρ ἀγαπᾷ τὸν υἱόν}',
      gloss: T('the Father loves the Son (habit/state; John 3:35)'),
    },
    { text: '{τί ποιεῖτε}', gloss: T('what are you doing? (2nd pl.)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active of λύω'),
      head: [T('Person'), T('Form'), T('Translation')],
      rows: [
        ['1ª sg.', '{λύω}', 'eu liberto'],
        ['2ª sg.', '{λύεις}', 'tu libertas'],
        ['3ª sg.', '{λύει}', 'ele liberta'],
        ['1ª pl.', '{λύομεν}', 'nós libertamos'],
        ['2ª pl.', '{λύετε}', 'vós libertais'],
        ['3ª pl.', '{λύουσι(ν)}', 'eles libertam'],
      ],
    },
    {
      caption: T('Table 2 — Present personal endings'),
      head: [T('Person'), T('Singular'), T('Plural')],
      rows: [
        ['1ª pessoa', '{-ω}', '{-ομεν}'],
        ['2ª pessoa', '{-εις}', '{-ετε}'],
        ['3ª pessoa', '{-ει}', '{-ουσι(ν)}'],
      ],
    },
  ],
};

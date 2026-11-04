import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone: Mark 4,35-41'),
  subtitle: T('Taci, calmati!'),
  section: T('Reading and syntax'),
  body: C(`## The text

«La sera di quel giorno, quando si faceva buio, Gesù disse ai discepoli: "{Passiamo} all’altra parte del mare". E salì sulla barca con loro. E cominciò a salire la tempesta. Il vento soffiava violentemente e le onde battevano contro la barca. Ma Gesù dormiva sul cuscino a poppa. E si svegliò e disse a Pietro: "{Pietro}, che cos’è con te?". E Pietro gli rispose: "{Signore}, non ti curi che periamo?". E disse: "{Perché} avete paura?". E si alzò, e sgridò il vento e disse al mare: "{Taci}, {calmati}!". E il vento tacque e vi fu grande calma. E disse loro: "{Perché} non avevate fiducia?"»

The Italian editions differ in two words: where the CEI has {non ti preoccupi}, the NUFI has {non ti curi}; and in some the verb for waking is {destò} instead of {si svegliò}. The scene is the same in all of them.

## Articles, elisions and fusions

Count the articles in the first sentence: {la sera}, {il giorno}, {il mare}. In Jesus’ speech, {all’altra} is the fusion of {a} + {l’altra}, exactly like {dal} and {nel}; that is why the articulated preposition comes back in the most important line of the passage. {L’altra} on its own is {l’} plus {altra}, the elision before a vowel.

Two nouns appear without an article, and neither is a mistake. In {a poppa}, {poppa} is a technical term of navigation and the article is not dropped by accident: in technical Italian the words of the ship come in raw. In {vi fu grande calma}, what does without an article is {grande}, which is indefinite: the sentence points at no specific calm, and could not.

## Verbs, dropped subjects and subordinates

The verbs alternate on purpose: {salì}, {si svegliò}, {tacque}, {vi fu} are perfect, one event; {soffiava}, {battevano}, {dormiva}, {si faceva buio} are imperfect, the duration. The alternation is the argument: the narrator tells what happened in order.

The subject drops twice. In «{Passiamo} all’altra parte», {Passiamo} is first plural and the subject, Jesus and the disciples, is in the previous sentence. In «{Perché} avete paura?», the subject of {avete} is the disciples, and Italian leaves that implicit because the whole situation is theirs.

There are four subordinates, and each does a job: **{quando si faceva buio}** is temporal, it says when Jesus spoke; **«che cos’è con te?»** is interrogative, and the {che} is the pronoun of the question, not a conjunction; **«che periamo?»** brings {che} back, but here as the conjunction that introduces the complement of {curare}; **{perché avete paura}** and **{perché non avevate fiducia}** are direct questions, and the {perché} is the same word.

## Where the gerund is

Nowhere. Where Portuguese would say "estava dormindo" and a reader expects a gerund, Italian wrote {dormiva}: the narrator chose the imperfect because he meant that Jesus was asleep, full stop. Looking for a gerund out of habit makes you see one that is not in the text.

What does exist are the periphrasis: {cominciò a} {salire} is the equivalent of "começou a subir", and {sgridò} the wind and {disse} to the sea are two coordinated verbs, which makes the clause faster than a subordinate would have.

## Reading criterion

Always identify the four layers: where the article is, which verb is perfect and which imperfect, what subject was dropped, and what word introduces the subordinate. Then read it again without translating anything and see whether it still makes sense. A reading that still makes sense after that pass is a reading.`),
  vocab: [
    V('sera', 'sera', 'evening'),
    V('buio', 'buio', 'darkness'),
    V('discepolo', 'discepolo', 'disciple'),
    V('barca', 'barca', 'boat'),
    V('tempesta', 'tempesta', 'storm'),
    V('vento', 'vento', 'wind'),
    V('onda', 'onda', 'wave'),
    V('cuscino', 'cuscino', 'cushion'),
    V('poppa', 'poppa', 'stern'),
    V('Pietro', 'Pietro', 'Peter'),
    V('paura', 'paura', 'fear'),
    V('sgridare', 'sgridare', 'to shout'),
    V('Taci', 'tacere', 'be silent'),
    V('calmati', 'calmarsi', 'calm down'),
    V('fiducia', 'fiducia', 'trust'),
    V('mare', 'mare', 'sea'),
    V('perire', 'perire', 'to perish'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In "Passiamo all’altra parte del mare", who is speaking?'),
    options: [
      T('A new subject who appears only here'),
      T('Jesus, with the disciples, already named'),
      T('Peter, who speaks in the next verse'),
      T('The narrator, in the third person'),
    ],
    answer: 1,
    hint: T('The verb is first plural and the subject comes from the previous sentence.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Which verb is imperfect in the first half of the text?'),
      options: [T('salì'), T('dormiva'), T('tacque'), T('si svegliò')],
      answer: 1,
      hint: T('The imperfect marks what went on.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the fusion: a + l’altra → ___'),
      answer: 'all’altra',
      hint: T('The preposition joins the elided article.'),
    },
    {
      kind: 'choose',
      prompt: T('In "che cos’è con te?", what is che?'),
      options: [
        T('A conjunction that introduces the question'),
        T('The interrogative pronoun, what is being asked'),
        T('A relative referring to Jesus'),
        T('A numeral'),
      ],
      answer: 1,
      hint: T('No verb comes before it to ask for a clause.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The subject may be omitted when the previous sentence named it: Gesù disse... Passiamo all’altra parte.',
      ),
    },
    {
      n: '2',
      text: T('The articulated preposition shows up in Jesus’ speech: all’altra = a + l’altra.'),
    },
    {
      n: '3',
      text: T(
        'In "che cos’è con te?" the che is an interrogative pronoun; in "che periamo?" it is a conjunction.',
      ),
    },
    {
      n: '4',
      text: T(
        'The verb that points at something defined does without the article: vi fu grande calma.',
      ),
    },
    {
      n: '5',
      text: T('The perfect marks the event, the imperfect the duration: salì, but dormiva.'),
    },
  ],
  notes: [
    {
      label: T('Eleven verses, four subordinates'),
      text: T(
        'The count matters because it is what separates this passage from any other stretch of text. Mark 4,35-41 has two direct questions, one temporal and one indirect, and not one of them is marked by a conjunction Portuguese uses. Italian {che} does the work of both {que} and {como}.',
      ),
    },
    {
      label: T('What changes between editions'),
      text: T(
        '{non ti curi} and {non ti preoccupi} say the same thing, and the choice is about register, not about meaning. The same goes for {destò} and {si svegliò}. If your text differs from the one printed above at one of those two points, it is as correct as the NUFI.',
      ),
    },
  ],
  examples: [
    { text: 'Gesù disse ai discepoli.', gloss: T('Jesus said to the disciples.') },
    {
      text: 'Passiamo all’altra parte del mare.',
      gloss: T('Let us go to the other side of the sea.'),
    },
    { text: 'Salì sulla barca con loro.', gloss: T('He got into the boat with them.') },
    { text: 'Il vento soffiava violentemente.', gloss: T('The wind blew violently.') },
    {
      text: 'Ma Gesù dormiva sul cuscino a poppa.',
      gloss: T('But Jesus was asleep on the cushion at the stern.'),
    },
    { text: 'Che cos’è con te?', gloss: T('What is the matter with you?') },
    { text: 'Non ti curi che periamo?', gloss: T('Do you not care that we are perishing?') },
    { text: 'Perché avete paura?', gloss: T('Why are you afraid?') },
    { text: 'Taci, calmati!', gloss: T('Be silent, be calm!') },
    {
      text: 'E il vento tacque e vi fu grande calma.',
      gloss: T('And the wind fell silent and there was great calm.'),
    },
  ],
  tables: [
    {
      caption: T('Identificazione nel testo'),
      head: ['Parola', 'Che cos’è'],
      rows: [
        ['{la sera}', 'articolo + sostantivo femminile'],
        ['{all’altra}', 'fusione di a + l’altra'],
        ['{il vento}', 'articolo + sostantivo maschile'],
        ['{Passiamo}', 'verbo con soggetto omesso'],
        ['{quando si faceva buio}', 'subordinata temporale'],
        ['{che cos’è con te}', 'subordinata interrogativa'],
        ['{gli}', 'pronome indiretto (a Pietro)'],
        ['{non ti curi}', 'verbo con clitico e negazione'],
      ],
    },
    {
      caption: T('Perfetto e imperfetto'),
      head: ['Imperfetto (durava)', 'Perfetto (accadde)'],
      rows: [
        ['{si faceva buio}', '{disse}'],
        ['{salì}', '{cominciò a salire}'],
        ['{soffiava}', '{si svegliò}'],
        ['{battevano}', '{tacque}'],
        ['{dormiva}', '{vi fu grande calma}'],
      ],
    },
    {
      caption: T('Imperativi di Gesù'),
      head: ['Forma', 'Glossa', 'Persona'],
      rows: [
        ['{Passiamo}', 'vamos nosotros', '1ª plural, soggetto omesso'],
        ['{Taci}', 'cállate', '2ª singular'],
        ['{calmati}', 'calmaos', '2ª singular'],
      ],
    },
  ],
};

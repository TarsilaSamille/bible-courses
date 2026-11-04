import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('The Präteritum'),
  subtitle: T('the narrative past, the strong verbs with Ablaut and the würde'),
  section: T('The verbs'),
  body: C(`## The form

The Präteritum is built without an auxiliary: a single finite verb, the main verb itself, standing in second position and followed by its direct object. *Ich kaufte ein Brot*, *Wir gingen nach Hause*, *Die Alten kamen zuerst*. Everything else keeps the normal order, and the clause has no final element to close it.

Weak verbs add **-te** to the present stem: *sagen – sagte*, *kaufen – kaufte*, *fragen – fragte*, *warten – wartete*. The ending follows the person, but the stem vowel stays the same: *ich kaufte, du kauftest, er kaufte, wir kauften*. That regularity is what let *-te* become the commonest ending — and later the rarest — in speech.

The strong verbs, on the other hand, repeat the vowel change you already know: *sprechen – sprach*, *nehmen – nahm*, *essen – aß*, *trinken – trank*, *gehen – ging*, *sehen – sah*, *lesen – las*. The participle stays apart, with the ending *-en*: *gesprochen*, *genommen*, *gegangen*. No *-te*, no auxiliary.

## When to use the Präteritum

The Perfekt is the tense of speech about something that has just happened; the Präteritum is the tense of **narrative**. In a cooking recipe, in an account of a journey, in the summary of a book, everything stands in the Präteritum. That is why *ich ging* and *ich bin gegangen* are not synonyms: the first tells, the second informs.

Beside the Präteritum sits a form that looks like it and is not: the **Konjunktiv II** with *würde*. *Ich würde kommen* is a supposition about the future, not a narration. The difference is in the attitude: the Präteritum asserts, *würde* supposes. *Wenn ich Zeit hätte, würde ich kommen* — if I had time, I would come.

## Reading

Luther's Bible is, for the most part, a book of Präteritum. The narratives of Mark run almost entirely in *war, ging, kam, sprach, sah*, and that uniformity is exactly what makes reading it aloud so rhythmic. *Es begab sich aber zu der Zeit, daß Jesus ging und seinen Jüngern Befahl gab* (Mark 3:13). Notice that *Befahl gab* is positional, not *hat Befehl gegeben*: the narrator stands inside the scene, not commenting on it.

## What to take away

The Präteritum puts one word where two would go. Whoever writes in the Präteritum steps back from the scene and looks at it from outside; whoever writes in the Perfekt steps out of the scene and talks to someone.`),
  vocab: [
    V('sagte', 'sagen', 'said (weak Präteritum in -te)'),
    V('kaufte', 'kaufen', 'bought (weak Präteritum)'),
    V('sprach', 'sprechen', 'spoke (strong Präteritum)'),
    V('ging', 'gehen', 'went (strong Präteritum)'),
    V('sah', 'sehen', 'sah (strong Präteritum)'),
    V('war', 'sein', 'was (Präteritum of sein)'),
    V('wußte', 'wissen', 'knew (strong without -te)'),
    V('hätte', 'haben', 'would have (Konjunktiv II)'),
    V('würde kommen', 'werden', 'would come (Konjunktiv II)'),
    V('Befahl gab', 'geben', 'gave orders (positional verb)'),
    V('Ich kaufte ein Brot.', 'kaufen', 'I bought a loaf of bread.'),
    V('Die Alten kamen zuerst.', 'kommen', 'The old people came first.'),
    V('Wir sind nach Hause gegangen.', 'gehen', 'We went home (Perfekt, not Präteritum).'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Which is the correct Präteritum of {sagen} in the first person?'),
    options: [T('sagte'), T('sagteest'), T('gesagt'), T('sagt')],
    answer: 0,
    hint: T('Rule §2: weak = present stem + -te.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Präteritum of {gehen} in the third person: er ___'),
      answer: 'ging',
      hint: T('Strong: e → i, and the final -en drops.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is in the narrative past?'),
      options: [
        T("The train left at nine o'clock."),
        T("The train has left at nine o'clock."),
        T("The train will leave at nine o'clock."),
        T("The train is leaving at nine o'clock."),
      ],
      answer: 0,
      hint: T('Table 2: written narrative asks for the Präteritum.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete the supposition: Wenn ich Zeit ___, würde ich kommen.'),
      answer: 'hätte',
      hint: T('It is the Konjunktiv II of haben: hätte.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its Präteritum'),
      pairs: [
        { a: T('nehmen'), b: T('nahm') },
        { a: T('fragen'), b: T('fragte') },
        { a: T('trinken'), b: T('trank') },
        { a: T('warten'), b: T('wartete') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The Präteritum has no auxiliary: the main verb goes finite in second position and nothing closes the clause. Ich kaufte ein Brot.',
      ),
    },
    {
      n: '2',
      text: T(
        'Weak verbs add -te to the stem: kaufte, fragte, wartete. The ending changes, the stem vowel does not.',
      ),
    },
    {
      n: '3',
      text: T(
        'Strong verbs swap the vowel and change nothing else: sprach, nahm, aß, trank, ging, sah, las. Look for -te in a strong verb: it is wrong.',
      ),
    },
    {
      n: '4',
      text: T(
        'The Präteritum asserts; würde and the Konjunktiv II suppose. Ich kam is fact, ich würde kommen is hypothesis.',
      ),
    },
    {
      n: '5',
      text: T(
        'The first person singular barely appears in the Präteritum, except in verbs of wanting and with an optative value: ich dachte, ich wünschte, ich wüsste gern.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why speech has almost lost the Präteritum'),
      text: T(
        'In the older Germanic languages the Präteritum was the normal tense, and what we now call the Perfekt was a rare one, used above all with verbs of movement. The Romance languages went the other way: in Portuguese and Spanish the perfect preterite takes over the narrative role and the preterite survives as a literary relic. German followed its own path: it kept the Präteritum in writing and the Perfekt in speech. And the difference between *ich sagte* and *ich habe gesagt* is still, today, the difference between telling and informing.',
      ),
    },
    {
      label: T('The Gospel of Mark in Luther'),
      text: T(
        "Luther's translation rewrote the Greek text of Mark with an economy of short clauses and strong verbs: hardly any *hatte gekonnt*, hardly any *würde*, only *war, trat, rief, legte, sprach*. The resulting rhythm is why the narratives of Mark are the ones most often read aloud in Lutheran churches. The same shows in Matthew's Beatitudes, where the evangelist writes in the same register: *Selig sind die Armen im Geist*, and Luther keeps the brevity of the original.",
      ),
    },
  ],
  examples: [
    { text: 'Ich kaufte ein Brot.', gloss: T('I bought a loaf of bread (weak in -te).') },
    {
      text: 'Die Alten kamen zuerst.',
      gloss: T('The old people came first (strong without -te).'),
    },
    { text: 'Ich sah ihn am Fluss.', gloss: T('I sah him at the river (strong: sah).') },
    {
      text: 'Es war ein Mensch, der von Gott gesandt ist.',
      gloss: T('There was a man sent from God (John 1:6).'),
    },
    {
      text: 'Jesus ging und seinen Jüngern Befahl gab.',
      gloss: T('Jesus went and gave orders to his disciples (Mark 3:13).'),
    },
    {
      text: 'Wenn ich Zeit hätte, würde ich kommen.',
      gloss: T('If I had time, I would come (Konjunktiv II).'),
    },
    { text: 'Er ist nach Hause gegangen.', gloss: T('He went home (Perfekt, not Präteritum).') },
    {
      text: 'Ich wüsste gern, wie es weitergeht.',
      gloss: T('I would like to know how it goes on (first person with an optative value).'),
    },
    {
      text: 'Die Bahn hat sich um zwei Stunden verspätet.',
      gloss: T('The train was two hours late (recent event: Perfekt).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Präteritum of a weak and of a strong verb'),
      head: [T('Person'), T('sagen (weak)'), T('sprechen (strong)')],
      rows: [
        ['ich', 'sagte', 'sprach'],
        ['du', 'sagtest', 'sprachst'],
        ['er / sie / es', 'sagte', 'sprach'],
        ['wir', 'sagten', 'sprachen'],
        ['ihr', 'sagtet', 'sprecht'],
        ['sie / Sie', 'sagten', 'sprachen'],
      ],
    },
    {
      caption: T('Table 2 — Präteritum or Perfekt?'),
      head: [T('Context'), T('Tense'), T('Example')],
      rows: [
        ['narrativa escrita', 'Präteritum', 'Er ging nach Hause und schlief.'],
        ['relato oral', 'Perfekt', 'Er ist nach Hause gegangen und hat geschlafen.'],
        ['notícia de algo recente', 'Perfekt', 'Die Bahn hat sich verspätet.'],
        ['receita, instrução', 'Präteritum', 'Man nahm zwei Eier und rührte den Teig.'],
        ['condição irreal', 'Konjunktiv II', 'Wenn ich Zeit hätte, würde ich kommen.'],
        ['estado permanente', 'Präsens', 'Ich wohne seit zehn Jahren in Berlin.'],
      ],
    },
  ],
};

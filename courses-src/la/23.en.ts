import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Reading: the Hail Mary and the Magnificat'),
  subtitle: T('{Ave Maria, grātiā plēna} — two Latin prayers to read and dissect'),
  section: T('Reading'),
  body: C(`## The texts

> **Ave Maria, grātiā plēna, Dominus tecum. Benedicta tu in mūlieribus.**

> **Magnificat anima mea Dominum. Et exsultāvit spīritus meus in Deō salūtārī meō.**

The first is the opening of Luke 1:28; the second is the song of Luke 1:46-55. Neither began as a prayer: both are narrative sentences that tradition turned into a devotion. That makes them excellent reading material, because the syntax is ordinary biblical narrative, not liturgical formula.

## Ave Maria, grātiā plēna

| Form | Analysis | Value |
|---|---|---|
| {ave} | interjection, from {āvē | hail |
| {grātiā plēna} | ablative of quality, no preposition | «full of grace» |
| {Dominus} | nominative, subject of an implied {adest} | «the Lord» |
| {tecum} | pronoun + {cum} | «with you» |
| {benedicta} | perfect participle, feminine ablative | «blessed» |
| {in mūlieribus} | {in} + ablative | «among women» |

Two constructions deserve attention. **The prepositionless ablative**: {grātiā plēna} states the quality of the person described, exactly like {virō doctus} «a learned man». And {tecum} is {cum tecum}: the preposition follows the pronoun, as in {mecum}, {secum}, {nobiscum}, {vobiscum} — a rule for pronouns only, never for nouns ({cum rēgē} «with the king»).

## Magnificat anima mea Dominum

{Magnificat} is the third person perfect of {magnificō}: «the soul magnifies». {anima} is the subject, {mea} the possessive, {Dominum} the accusative object. That is all: the sentence has subject, verb and object in the simplest possible Latin order.

The next verse changes the picture: {Et exsultāvit spīritus meus in Deō salūtārī meō}. {Exsultāvit} is the same perfect form but **intransitive**, with {in} + ablative ({in Deō} «in God»). The verb takes a different case because it means something different: transitives govern the accusative, intransitives the ablative, the dative, or whatever preposition the dictionary lists.

## Comparative reading

Compare Mary’s sentence in Luke 1:28 with the angel’s in Luke 1:19: {Erat mihi — et nunc erit}. The construction is identical, so memorising the Magnificat fixes a pattern you meet all through the Vulgate.

## What to take away

You read four words with four different grammars: {grātiā} (ablative of quality), {tecum} (postposed {cum}), {Dominum} (accusative) and {in Deō} (ablative of direction). Once you see the function, the translation follows.`),
  vocab: [
    V('ave', 'ave', 'hail! (interjection)'),
    V('grātiā', 'gratia', 'grace (abl. of quality)'),
    V('plēna', 'plenus', 'full (abl. f. sg.)'),
    V('tecum', 'cum', 'with you ({cum} + pronoun)'),
    V('benedicta', 'benedico', 'blessed (perf. part. abl. f.)'),
    V('mūlieribus', 'mulier', 'women (dat./abl. pl.)'),
    V('magnificāt', 'magnifico', 'magnifies (3rd sg. perf.)'),
    V('anima', 'anima', 'soul (nom. sg.)'),
    V('dominum', 'dominus', 'the Lord (acc. sg.)'),
    V('exsultāvit', 'exsulto', 'rejoiced (3rd sg. perf., intr.)'),
    V('spīritus', 'spiritus', 'spirit (nom. sg.)'),
    V('salūtāri', 'salutaris', 'saving (abl. sg.)'),
    V('humilitātem', 'humilitas', 'humility (acc. sg.)'),
    V('ancillae', 'ancilla', 'handmaid (gen. sg.)'),
    V('recordātor', 'recordator', 'remembering (gen. sg.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {grātiā plēna}, what is the function of the ablative?'),
    options: [
      T('Ablative of quality, without a preposition'),
      T('Ablative of means, with {ā}'),
      T('Ablative of agent, with {ā} or {ab}'),
      T('Ablative of place, with {in}'),
    ],
    answer: 0,
    hint: T('Rule §1: quality is expressed without a preposition.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with {cum}: ___ vobiscum = «with you»'),
      answer: 'nobiscum',
      hint: T('{nos} + {bis} + {cum}.'),
    },
    {
      kind: 'choose',
      prompt: T('In {exsultāvit spīritus meus in Deō}, why is {in Deō} ablative?'),
      options: [
        T('Because {exsultāvit} is intransitive: there is no direct object'),
        T('Because {in} always governs the accusative'),
        T('Because {spīritus} is feminine'),
        T('Because {Deus} is a dative of purpose'),
      ],
      answer: 0,
      hint: T('Rule §2: the case follows the function, not the noun.'),
    },
    {
      kind: 'fill',
      prompt: T('What is the accusative of {Dominus} in the Magnificat?'),
      answer: 'Dominum',
      hint: T('It is the direct object of {magnificat}.'),
    },
    {
      kind: 'match',
      prompt: T('Match the form to its function'),
      pairs: [
        { a: T('grātiā plēna'), b: T('ablative of quality') },
        { a: T('tecum'), b: T('{cum} postposed to the pronoun') },
        { a: T('Dominum'), b: T('accusative object') },
        { a: T('in mūlieribus'), b: T('{in} + ablative of place') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('The ablative of quality takes no preposition: {virō doctus} «a learned man».'),
    },
    {
      n: '2',
      text: T(
        'The case follows the verb’s function: transitives take the accusative, intransitives the ablative or the dative.',
      ),
    },
    {
      n: '3',
      text: T(
        'With an oblique pronoun {cum} follows and fuses: {mecum}, {secum}, {nobiscum}, {vobiscum}.',
      ),
    },
    {
      n: '4',
      text: T(
        'The perfect is the commonest form in the Vulgate; in narrative, nearly everything is perfect.',
      ),
    },
    {
      n: '5',
      text: T(
        '{in} + accusative marks direction, {in} + ablative marks static location: {in cāsam} «into the house», {in cāsā} «at home».',
      ),
    },
  ],
  notes: [
    {
      label: T('A prayer that was not a prayer'),
      text: T(
        'The {Hail Mary} is Gabriel’s blessing in Luke 1:28, and the {Magnificat} is Mary’s song in 1:46. Both are indicative perfect narrative sentences. Translate them as prayers and you will misread {Dominum}: the text says «the Lord is with her» (subject {Dominus}, implied verb {adest}), not «Lord» as a vocative.',
      ),
    },
    {
      label: T('Liturgical texts diverge'),
      text: T(
        'The Latin liturgy cut the second half of the Magnificat and replaced {tecum} with {tēcum adiuvāre} «to be with you». Translations vary over «among women» (a partitive genitive in older Portuguese) and over the verb of {benedicta}. The biblical text is always the better reference.',
      ),
    },
  ],
  examples: [
    { text: 'grātiā plēna', gloss: T('full of grace (abl. of quality)') },
    { text: 'Dominus tecum', gloss: T('the Lord is with you (subject + enclitic {cum})') },
    { text: 'benedicta tu in mūlieribus', gloss: T('blessed among women') },
    { text: 'magnificat anima mea Dominum', gloss: T('my soul magnifies the Lord') },
    {
      text: 'respexit humilitātem ancillae suae',
      gloss: T('he looked on the humility of his handmaid'),
    },
    { text: 'recordātor fideī suae', gloss: T('remembering his faithfulness') },
    { text: 'mecum', gloss: T('with me ({cum} + {mē})') },
    { text: 'in cāsā', gloss: T('at home (place)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Forms in the Magnificat'),
      head: [T('Latin'), T('Function'), T('Portuguese')],
      rows: [
        ['magnificāt', 'verbo, 3.ª sg. perf. de {magnificō}', 'magnifica'],
        ['anima mea', 'sujeito + possessivo', 'a minha alma'],
        ['Dominum', 'objeto direto', 'o Senhor'],
        ['exsultāvit', 'verbo intransitivo, perf.', 'exultou'],
        ['in Deō', '{in} + ablativo', 'em Deus'],
        ['salūtārī meō', 'ablativo adjective + possessivo', 'meu salvador'],
      ],
    },
    {
      caption: T('Table 2 — {cum} with a pronoun and with a noun'),
      head: [T('Type'), T('Latin'), T('Portuguese')],
      rows: [
        ['Pronome oblíquo', 'mecum', 'contigo'],
        ['Pronome oblíquo', 'secum', 'consigo'],
        ['Pronome oblíquo', 'nobiscum', 'conosco'],
        ['Pronome oblíquo', 'vobiscum', 'convosco'],
        ['Substantivo', '{cum rēgē}', 'com o rei'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('Reading'),
  title: T('Reading: Psalm 23 in literal translation'),
  subtitle: T('apacentará, pastorear-me-á, and what each inflection carries'),
  body: C(`## The whole psalm

Psalm 23 in Almeida has six verses and twenty-one verbs. It is very little text, and it is enough to see biblical Portuguese at work: {O SENHOR é o meu pastor; nada me faltará. Descansará em lugares de delícias; pastorear-me-á. Ainda que andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; o teu cajado e o teu bastão me-console. Tu preparas diante de mim uma mesa na presença dos meus adversários; ungiste com óleo a minha cabeça; o meu cálice transborda. Certamente que o bem e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do SENHOR por longos dias.}

Anyone reading that in present-day Portuguese recognises half the verbs. The reason is not that the language is hard: it is that the biblical inflection is older.

## The tense of every verb

The verbs of the psalm fall into four series, and each series says something. The **present** appears in {é}, {estás} and {preparas}: that is the scene, and the present is the tense of certainty. The **future** appears in {Descansará}, {pastorear-me-á} and {seguirão}: three facts the text gives as certain. The **subjunctive** appears in {andasse} and {temeria}: two actions that do not happen. And the **perfect** appears in {ungiste}: an action done and counted.

The verb that opens the second part, {Descansará}, is the most interesting of all: it is future in form and present in sense, because the psalm is speaking of a whole life as if it were one now.

## What literalness preserves

Literal translation preserves three things that smooth translation loses. The first is the generic negation: {nada me faltará} is not “will not lack”, it is “in no circumstance will I lack”, and Greek uses a negation that holds for a whole life. The second is the subjunctive of hypothesis: {Ainda que andasse} is the imperfect subjunctive, the form that says “even though I were walking”, not “even though I walked yesterday”.

The third is mesoclasis: {pastorear-me-á}. The pronoun {me} sits between the root and the ending, and anyone who does not know the form reads three words where there was one verb. A translator who renders it as {me vai pastorear} has made the text clearer and lost the signal that the whole clause is a single verb.

## Reading criterion

With any verb of a biblical text, ask: is it present, future, perfect or subjunctive? And is the inflection marking time, or only shape? And is the form one that present-day Portuguese still uses?

Psalm 23 is the cleanest example there is of what inflection carries. {É} and {Descansará} stand in the same verse six words apart, and neither is the tense a present-day Portuguese would choose. Literalness is not an antique: it is the map of the inflection the text uses.`),
  vocab: [
    V('o pastor', 'pastor', 'o pastor'),
    V('o SENHOR', 'SENHOR', 'the LORD'),
    V('Descansará', 'descansar', 'Descansará'),
    V('apacentará', 'apacentar', 'apacentará'),
    V('pastorear-me-á', 'pastorear', 'pastorear-me-á'),
    V('andasse', 'andar', 'andasse'),
    V('temeria', 'temer', 'temeria'),
    V('estás', 'estar', 'estás'),
    V('preparas', 'preparar', 'preparas'),
    V('ungiste', 'ungir', 'ungiste'),
    V('transborda', 'transbordar', 'transborda'),
    V('seguirão', 'seguir', 'seguirão'),
    V('habitarei', 'habitar', 'habitarei'),
    V('o bem', 'bem', 'o bem'),
    V('a misericórdia', 'misericórdia', 'a misericórdia'),
    V('a casa do SENHOR', 'casa', 'a casa do SENHOR'),
  ],
  rules: [
    { n: '§1', text: T('The present marks certainty: {é}, {estás}, {preparas}.') },
    {
      n: '§2',
      text: T(
        'The future in the psalm marks an expected fact: {Descansará}, {pastorear-me-á}, {seguirão}.',
      ),
    },
    { n: '§3', text: T('The past subjunctive marks hypothesis: {andasse}, {temeria}.') },
    { n: '§4', text: T('The perfect marks a done and counted action: {ungiste}.') },
    {
      n: '§5',
      text: T(
        'Biblical inflection is older than that of present-day Portuguese, and that is why old text has to be read with care.',
      ),
    },
  ],
  notes: [
    {
      label: T('Biblical × everyday'),
      text: T(
        '{Apacentará} and {pastorear-me-á} are forms present-day Portuguese does not use. A translation that modernises them looks more faithful to the reader and is less faithful to the Greek.',
      ),
    },
    {
      label: T('Keep the inflection'),
      text: T(
        'The old inflection is not overkill: in Greek, each of those forms is information. Turning {Descansará} into {descansa} changes the tense of the verb and loses the speech.',
      ),
    },
  ],
  examples: [
    { text: 'O SENHOR é o meu pastor.', gloss: T('Present: the tense of certainty.') },
    {
      text: 'Descansará em lugares de delícias.',
      gloss: T('Future: the text gives the fact as certain.'),
    },
    { text: 'Ainda que andasse pelo vale.', gloss: T('Imperfect subjunctive: hypothesis.') },
    { text: 'Não temeria mal algum.', gloss: T('Imperfect conditional: hypothesis denied.') },
    { text: 'Tu preparas diante de mim uma mesa.', gloss: T('Present: the scene of the verse.') },
    { text: 'Ungiste com óleo a minha cabeça.', gloss: T('Perfect past: action done.') },
    {
      text: 'O meu cálice transborda.',
      gloss: T('Present: the verb describes instead of narrating.'),
    },
    { text: 'Habitarei na casa do SENHOR.', gloss: T('Future: the verb closes the psalm.') },
  ],
  tables: [
    {
      caption: T('The verbs of the psalm, by tense'),
      head: ['Tempo', 'Verbos', 'O que marca'],
      rows: [
        ['presente', 'é, estás, preparas', 'certeza da cena'],
        ['futuro', 'Descansará, pastorear-me-á, seguirão', 'fato esperado como certo'],
        ['subjuntivo', 'andasse, temeria', 'hipótese'],
        ['perfeito', 'ungiste', 'ação feita e contada'],
        ['futuro', 'habitarei', 'o salmo fecha no futuro'],
      ],
    },
    {
      caption: T('Archaic forms'),
      head: ['Forma', 'Significado', 'Uso atual'],
      rows: [
        ['Descansará', 'descansará', 'em uso'],
        ['apacentará', 'pastoreará', 'arcaico'],
        ['pastorear-me-á', 'me pastoreará', 'arcaico'],
        ['ungiste', 'ungiste', 'em uso'],
      ],
    },
    {
      caption: T('What the inflection carries'),
      head: ['Série', 'O que diz', 'Exemplo'],
      rows: [
        ['negação genérica', 'nunca, em nenhum caso', 'nada me faltará'],
        ['hipótese', 'caso contrário, mesmo que', 'Ainda que andasse'],
        ['certeza', 'é assim, não pode ser diferente', 'é o meu pastor'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In “Ainda que andasse”, {andasse} is in the:'),
    options: [T('past subjunctive'), T('future'), T('perfect'), T('present indicative')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{Descansará} is a verb in the ______, with a sense of certainty.'),
      answer: 'futuro',
      hint: T('The text gives the fact as certain.'),
    },
    {
      kind: 'choose',
      prompt: T('In “nada me faltará”, the negation is:'),
      options: [T('generic'), T('punctual'), T('interrogative'), T('concessive')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its tense.'),
      pairs: [
        { a: T('é'), b: T('presente') },
        { a: T('Descansará'), b: T('futuro') },
        { a: T('andasse'), b: T('subjuntivo') },
        { a: T('ungiste'), b: T('perfeito') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};

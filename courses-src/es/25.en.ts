import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Forms of address ({usted}, {vosotros})'),
  subtitle: T('tú × usted — 3rd person that is 2nd!'),
  section: T('Pronouns'),
  body: C(`## Two address systems

Spanish distinguishes an **informal** relation ({tú} and {vosotros}) from a **formal** one ({usted} and {ustedes}).

{tú} → friend, child, God (in intimate address): {¿Cómo estás?} · {Dios te ama} "God loves you".
{usted} → boss, client, teacher, God (reverent context): {¿Cómo está usted?} · {Dios le ama} "God loves him".

## {usted} is third person

{usted} conjugates in the **third person** and takes third-person pronouns: {usted habla} "you speak" (exactly like {él habla}) · {le} (never {te}!) · {lo} for the accusative.

In the imperative, {usted} takes the **subjunctive**: {hable} · {dígame}.

## The plural: {vosotros} vs {ustedes}

In **Spain**, the informal plural is {vosotros} and the formal one is {ustedes}: {vosotros habláis} vs {ustedes hablan}.

In **America**, almost nobody uses {vosotros}: {ustedes} covers **every** plural: {ustedes hablan} "you all speak", whether talking to friends or strangers. That is why the impersonal {se habla español} sounds so natural there.

## {vos}: voseo

In the Río de la Plata {tú} becomes {vos} in the second singular, with the verb in the second plural: {vos hablás} · {vos tenés}. {vos} never combines with {usted}: they are separate systems.

Ex.: {Dios le bendiga} "God bless you" (formal) vs {Dios te bendiga} (intimate).`),
  vocab: [
    V('usted habla', 'hablar', 'you speak (3rd!)'),
    V('estás', 'estar', 'you are (intimate!)'),
    V('ustedes hablan', 'hablar', 'you speak (pl., America = all!)'),
    V('vos hablás', 'hablar', 'you speak (voseo!)'),
    V('le bendiga', 'bendecir', 'bless you (formal!)'),
    V('vosotros habláis', 'hablar', 'you speak (Spain only!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"usted habla" — what person?'),
    options: [
      T('2nd person'),
      T('3rd person with 2nd value (formal!)'),
      T('1st person'),
      T('Impersonal'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Formal: "Dios ___ ama" (God loves him)'),
      answer: 'le',
      hint: T('Rule §2: with usted the indirect object is le.'),
    },
    {
      kind: 'choose',
      prompt: T('Which sentence is CORRECT in America?'),
      options: [
        T('Vosotros habláis español'),
        T('Ustedes hablan español'),
        T('Vos hablan español'),
        T('Hablan español'),
      ],
      answer: 1,
      hint: T('Rule §3: outside Spain, ustedes covers everything.'),
    },
    {
      kind: 'match',
      prompt: T('Match the pronoun to its register'),
      pairs: [
        { a: T('{tú}'), b: T('informal') },
        { a: T('{usted}'), b: T('formal') },
        { a: T('{vosotros}'), b: T('informal plural (Spain)') },
        { a: T('{vos}'), b: T('voseo (Argentina)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('tú = informal; usted = formal. The choice is social, not grammatical.') },
    {
      n: '2',
      text: T(
        'Usted conjugates in the 3rd person and uses le/lo/los: usted habla, le doy el libro.',
      ),
    },
    { n: '3', text: T('Outside Spain, ustedes is the only plural; vosotros is very rare.') },
    {
      n: '4',
      text: T('Voseo (vos) replaces tú in the Río de la Plata and never mixes with usted.'),
    },
  ],
  notes: [
    {
      label: T('The plural changes value'),
      text: T(
        '{vosotros} is the second person plural in Spain and {ustedes} in the Americas. It is not register, it is geography: both forms coexist and mean different things by region.',
      ),
    },
  ],
  examples: [
    { text: '¿Cómo estás?}', gloss: T('How are you? (informal, with friends).') },
    { text: '¿Cómo está usted?}', gloss: T('How are you? (formal).') },
    { text: '{Dios le bendiga}', gloss: T('God bless you (formal — le).') },
    { text: '{vos hablás}', gloss: T('You speak (Rioplatense voseo).') },
  ],
  tables: [
    {
      caption: T('Table 1 — The four registers'),
      head: [T('Person'), T('Singular'), T('Plural'), T('Use')],
      rows: [
        ['informal', '{tú}', '{vosotros}', T('family, friends (Spain)')],
        ['formal', '{usted}', '{ustedes}', T('education, work')],
        ['informal', '{vos}', '—', T('Río de la Plata (voseo)')],
        ['formal', '{usted}', '{ustedes}', T('America: all plurals')],
      ],
    },
    {
      caption: T('Table 2 — What changes with the register'),
      head: [T('Element'), T('tú'), T('usted')],
      rows: [
        [T('verb'), '{hablas}', '{habla}'],
        [T('indirect object'), '{me}', '{le}'],
        [T('imperative'), '{habla}', '{hable}'],
        [T('negative'), '{no hables}', '{no hable}'],
        [T('possessive'), '{mi libro}', '{su libro}'],
      ],
    },
  ],
};

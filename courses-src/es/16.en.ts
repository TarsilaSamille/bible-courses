import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('The preterite'),
  subtitle: T('hablé, comí — punctual fact'),
  section: T('Verbs'),
  body: C(`## The completed fact

The preterite marks a **pointed and finished action**, as in Portuguese. Formation is mechanical: cut the infinitive and add the endings {"-é, -aste, -ó, -amos, -asteis, -aron"} for {-ar} and {"-í, -iste, -ió, -imos, -isteis, -ieron"} for {-er} and {-ir}.

{hablar} → {hablé}, {hablaste}, {habló}, {hablamos}, {hablasteis}, {hablaron}.
{comer} → {comí}, {comiste}, {comió}, {comimos}, {comisteis}, {comieron}.

Note: {comisteis} (not {comistes}), {hablasteis} (not {hablais}!).

## Stress tells the story

{hablo} "I speak" vs {habló} "he spoke" · {amo} "I love" vs {amó} "he loved". The preterite of {-er} and {-ir} ends in {-ió} with a compulsory accent: {comió}, {vivió}, {leyó}.

## Irregulars

The stem changes completely, but the endings stay:

{ser} and {ir} → {fui}, {fuiste}, {fue}, {fuimos}, {fuisteis}, {fueron} (identical for both verbs!).
{tener} → {tuve} · {estar} → {estuve} · {poder} → {pude} · {hacer} → {hice} · {decir} → {dije} · {poner} → {puse} · {saber} → {supe} · {querer} → {quise} · {venir} → {vine} · {conocer} → {conocí}.

## The auxiliary {haber} in the perfect

Portuguese {tenho} corresponds to {he} + participle in Spanish: {he hablado} "I have spoken" · {hemos comido} "we have eaten". {haber} is conjugated {he}, {has}, {ha}, {hemos}, {habéis}, {han} and never stands alone.

Ex.: {Dijo Dios: Sea luz} "God said: Let there be light" (Gen 1:3) · {Vino a los suyos} "he came unto his own" (John 1:11).`),
  vocab: [
    V('hablé', 'hablar', 'I spoke'),
    V('habló', 'hablar', 'he spoke (vs hablo!)'),
    V('comió', 'comer', 'he ate'),
    V('fui', 'ser', 'I was/went (ser/ir!)'),
    V('dijo', 'decir', 'he said'),
    V('vine', 'venir', 'I came'),
    V('he hablado', 'hablar', 'I have spoken'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Gen 1:3: "___ Dios" (God said)'),
    answer: 'Dijo',
    hint: T('Preterite of "decir" (capital at start!).'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Preterite of "comer", 3rd person: ___ (he ate)'),
      answer: 'comió',
      hint: T('Rule §2: -er/-ir form -ió with an accent.'),
    },
    {
      kind: 'choose',
      prompt: T('How is the preterite of "comer" formed for "vosotros"?'),
      options: [T('{comisteis}'), T('{comistes}'), T('{comieron}'), T('{comimos}')],
      answer: 0,
      hint: T('The 2nd plural adds -d to the stem.'),
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its irregular preterite'),
      pairs: [
        { a: T('{tener}'), b: T('{tuve}') },
        { a: T('{hacer}'), b: T('{hice}') },
        { a: T('{decir}'), b: T('{dije}') },
        { a: T('{venir}'), b: T('{vine}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Stress decides all: hablo (I speak) vs habló (he spoke).') },
    {
      n: '2',
      text: T('-er and -ir form -ió, -iste, -ieron (never -isteis without the -d: comisteis!).'),
    },
    { n: '3', text: T('Ser and ir share the preterite: only context decides.') },
    { n: '4', text: T('Portuguese "tenho" is he + participle: he hablado, hemos comido.') },
  ],
  notes: [
    {
      label: T('The two shapes of the preterite'),
      text: T(
        'Spanish has the {-é} preterite for {yo} and the {tuve} shape for everyone else. The split is a Latin residue: an isolated form and an associated one. Context does not choose — person does.',
      ),
    },
  ],
  examples: [
    { text: '{Dijo Dios}', gloss: T('God said (Gen 1:3).') },
    { text: '{Vino a los suyos}', gloss: T('He came unto his own (John 1:11).') },
    { text: '{comió}', gloss: T('He ate (-ió with compulsory accent!).') },
    { text: '{he hablado}', gloss: T('I have spoken (auxiliary haber).') },
  ],
  tables: [
    {
      caption: T('Table 1 — Regular preterite'),
      head: [T('Person'), T('hablar (-ar)'), T('comer (-er)'), T('vivir (-ir)')],
      rows: [
        ['yo', '{hablé}', '{comí}', '{viví}'],
        ['tú', '{hablaste}', '{comiste}', '{viviste}'],
        ['él/ella/usted', '{habló}', '{comió}', '{vivió}'],
        ['nosotros', '{hablamos}', '{comimos}', '{vivimos}'],
        ['vosotros', '{hablasteis}', '{comisteis}', '{vivisteis}'],
        ['ellos/ustedes', '{hablaron}', '{comieron}', '{vivieron}'],
      ],
    },
    {
      caption: T('Table 2 — Most frequent irregular preterites'),
      head: [T('Infinitive'), T('yo'), T('he/she'), T('they')],
      rows: [
        ['{ser} / {ir}', '{fui}', '{fue}', '{fueron}'],
        ['{tener}', '{tuve}', '{tuvo}', '{tuvieron}'],
        ['{estar}', '{estuve}', '{estuvo}', '{estuvieron}'],
        ['{poder}', '{pude}', '{pudo}', '{pudieron}'],
        ['{hacer}', '{hice}', '{hizo}', '{hicieron}'],
        ['{decir}', '{dije}', '{dijo}', '{dijeron}'],
        ['{venir}', '{vine}', '{vino}', '{vinieron}'],
        ['{poner}', '{puse}', '{puso}', '{pusieron}'],
      ],
    },
  ],
};

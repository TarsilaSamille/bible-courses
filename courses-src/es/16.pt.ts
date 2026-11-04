import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('O pretérito'),
  subtitle: T('hablé, comí — fato pontual'),
  section: T('Os verbos'),
  body: C(`## O fato concluído

O pretérito (ou pretérito perfeito) marca a ação **pontual e concluída**, como em português. A formação é mecânica: corta-se o infinitivo e acrescentam-se as desinências {"-é, -aste, -ó, -amos, -asteis, -aron"} para {-ar} e {"-í, -iste, -ió, -imos, -isteis, -ieron"} para {-er} e {-ir}.

{hablar} → {hablé}, {hablaste}, {habló}, {hablamos}, {hablasteis}, {hablaron}.
{comer} → {comí}, {comiste}, {comió}, {comimos}, {comisteis}, {comieron}.

Atenção: {comisteis} (não {comistes}), {hablasteis} (não {hablais}!).

## O acento conta a história

{hablo} «falo» × {habló} «falou» · {amo} «amo» × {amó} «amou» · {pueblo} «povo» × {pobló} «povoou». O pretérito de {-er} e {-ir} cai em {-ió}, com acento obrigatório: {comió}, {vivió}, {leyó}.

## Irregulares

O radical muda por completo, mas as desinências continuam:

{ser} e {ir} → {fui}, {fuiste}, {fue}, {fuimos}, {fuisteis}, {fueron} (idênticos nos dois verbos!).
{tener} → {tuve} · {estar} → {estuve} · {poder} → {pude} · {hacer} → {hice} · {decir} → {dije} · {poner} → {puse} · {saber} → {supe} · {querer} → {quise} · {venir} → {vine} · {conocer} → {conocí} · {vivir} é regular ({viví}, {viviste}, {vivió}) enquanto {morir} é irregular no 3.º ({murió}).

## O auxiliar {haber} no perfeito

{tengo} no português corresponde a {he} + particípio em espanhol: {he hablado} «tenho falado» · {hemos comido} «temos comido». O {haber} conjugado é {he}, {has}, {ha}, {hemos}, {habéis}, {han} e nunca aparece sozinho.

Ex.: {Dijo Dios: Sea luz} «disse Deus: haja luz» (Gn 1:3) · {Vino a los suyos} «veio aos seus» (Jo 1:11).`),
  vocab: [
    V('hablé', 'hablar', 'falei'),
    V('habló', 'hablar', 'falou (× hablo!)'),
    V('comió', 'comer', 'comeu'),
    V('fui', 'ser', 'fui (ser/ir!)'),
    V('dijo', 'decir', 'disse'),
    V('vine', 'venir', 'vim'),
    V('he hablado', 'hablar', 'tenho falado'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Gn 1:3: "___ Dios" (disse Deus)'),
    answer: 'Dijo',
    hint: T('Pretérito de "decir" (maiúscula no início!).'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Pretérito de "comer", 3ª pessoa: ___ (comeu)'),
      answer: 'comió',
      hint: T('Regra §2: -er/-ir formam -ió com acento.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se forma o pretérito de "comer" em "vosotros"?'),
      options: [T('{comisteis}'), T('{comistes}'), T('{comieron}'), T('{comimos}')],
      answer: 0,
      hint: T('A 2ª pessoa do plural acrescenta o -d ao radical.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao pretérito irregular'),
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
    { n: '1', text: T('O acento decide tudo: hablo (falo) × habló (falou).') },
    {
      n: '2',
      text: T(
        '-er e -ir formam -ió, -iste, -ieron; na 2.ª pessoa do plural entra o -d: comisteis, vivisteis.',
      ),
    },
    {
      n: '3',
      text: T(
        'Ser e ir partilham o pretérito: fui pode ser «fui» (ser) ou «fui» (ir): só o contexto decide.',
      ),
    },
    { n: '4', text: T('O «tenho» português é {he} + particípio: he hablado, hemos comido.') },
  ],
  notes: [
    {
      label: T('As duas formas do pretérito'),
      text: T(
        'O Spanish tem pretérito {-é} para {yo} e {tuve} para os demais. A troca é um resíduo do latim: se forma isolada e forma asociada. O contexto não escolhe — a pessoa escolhe.',
      ),
    },
  ],
  examples: [
    { text: '{Dijo Dios}', gloss: T('Disse Deus (Gn 1:3).') },
    { text: '{Vino a los suyos}', gloss: T('Veio aos seus (Jo 1:11).') },
    { text: '{comió}', gloss: T('Comeu ({-ió} com acento obrigatório!).') },
    { text: '{he hablado}', gloss: T('Tenho falado (auxiliar {haber}).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Pretérito regular'),
      head: [T('Pessoa'), T('hablar (-ar)'), T('comer (-er)'), T('vivir (-ir)')],
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
      caption: T('Tabela 2 — Pretéritos irregulares mais frequentes'),
      head: [T('Infinitivo'), T('yo'), T('él/ella'), T('ellos')],
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

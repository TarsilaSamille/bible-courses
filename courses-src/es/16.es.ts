import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('El pretérito'),
  subtitle: T('hablé, comí — hecho puntual'),
  section: T('Los verbos'),
  body: C(`## El hecho completado

El pretérito (o pretérito perfecto) marca la acción **puntual y concluida**, igual que el português. La formación es mecánica: se corta el infinitivo y se añaden las terminaciones {"-é, -aste, -ó, -amos, -asteis, -aron"} para {-ar} y {"-í, -iste, -ió, -imos, -isteis, -ieron"} para {-er} e {-ir}.

{hablar} → {hablé}, {hablaste}, {habló}, {hablamos}, {hablasteis}, {hablaron}.
{comer} → {comí}, {comiste}, {comió}, {comimos}, {comisteis}, {comieron}.

Atención: {comisteis} (no {comistes}), {hablasteis} (no {hablais}!).

## El acento cuenta la historia

{hablo} «hablo» frente a {habló} «habló» · {amo} «amo» frente a {amó} «amó». El pretérito de {-er} e {-ir} acaba en {-ió} y ese acento es obligatorio: {comió}, {vivió}, {leyó}.

## Irregulares

El radical cambia por completo, pero las terminaciones se conservan:

{ser} e {ir} → {fui}, {fuiste}, {fue}, {fuimos}, {fuisteis}, {fueron} (¡idénticos en los dos verbos!).
{tener} → {tuve} · {estar} → {estuve} · {poder} → {pude} · {hacer} → {hice} · {decir} → {dije} · {poner} → {puse} · {saber} → {supe} · {querer} → {quise} · {venir} → {vine} · {conocer} → {conocí} · {morir} → {murió}.

## El auxiliar {haber} en el perfecto

El {tengo} portugués corresponde a {he} + participio en español: {he hablado} «he hablado» · {hemos comido} «hemos comido». {haber} se conjuga {he}, {has}, {ha}, {hemos}, {habéis}, {han} y nunca aparece solo.

Ej.: {Dijo Dios: Sea luz} «dijo Dios: Sea luz» (Gn 1.3) · {Vino a los suyos} «vino a los suyos» (Jn 1.11).

## Europa × América

El pretérito es igual en ambos mundos. La diferencia está en el **perfecto**: en América se usa más {he hablado} que {había hablado}; en España el pluscuamperfecto {había hablado} domina en la narración del pasado.`),
  vocab: [
    V('hablé', 'hablar', 'hablé'),
    V('habló', 'hablar', 'habló (¡frente a hablo!)'),
    V('comió', 'comer', 'comió'),
    V('fui', 'ser', 'fui (¡ser/ir!)'),
    V('dijo', 'decir', 'dijo'),
    V('vine', 'venir', 'vine'),
    V('he hablado', 'hablar', 'he hablado'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa Gn 1.3: «___ Dios» (dijo Dios)'),
    answer: 'Dijo',
    hint: T('Pretérito de «decir» (¡mayúscula al inicio!).'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Pretérito de «comer», 3.ª persona: ___ (comió)'),
      answer: 'comió',
      hint: T('Regla §2: -er/-ir forman -ió con acento.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se forma el pretérito de «comer» en «vosotros»?'),
      options: [T('{comisteis}'), T('{comistes}'), T('{comieron}'), T('{comimos}')],
      answer: 0,
      hint: T('La 2.ª persona del plural añade -d al radical.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su pretérito irregular'),
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
    { n: '1', text: T('El acento lo decide todo: hablo (hablo) frente a habló (habló).') },
    { n: '2', text: T('-er e -ir forman -ió, -iste, -ieron (¡nunca comistes: comisteis!).') },
    { n: '3', text: T('Ser e ir comparten pretérito: solo el contexto lo decide.') },
    { n: '4', text: T('El «tengo» portugués es he + participio: he hablado, hemos comido.') },
  ],
  notes: [
    {
      label: T('Las dos formas del pretérito'),
      text: T(
        'El español tiene pretérito {-é} para {yo} y forma de {tuve} para los demás. La rampantía es un resto del latín: forma aislada y forma asociada. No decide el contexto — decide la persona.',
      ),
    },
  ],
  examples: [
    { text: '{Dijo Dios}', gloss: T('Dijo Dios (Gn 1.3).') },
    { text: '{Vino a los suyos}', gloss: T('Vino a los suyos (Jn 1.11).') },
    { text: '{comió}', gloss: T('Comió (¡-ió con acento obligatorio!).') },
    { text: '{he hablado}', gloss: T('He hablado (auxiliar haber).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Pretérito regular'),
      head: [T('Persona'), T('hablar (-ar)'), T('comer (-er)'), T('vivir (-ir)')],
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
      caption: T('Tabla 2 — Pretéritos irregulares más frecuentes'),
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

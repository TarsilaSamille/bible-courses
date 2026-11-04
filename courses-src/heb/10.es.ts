import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Los binyanim'),
  subtitle: T('קָדַשׁ, קִדַּשׁ, הִקְדִּישׁ — una raíz, siete moldes'),
  section: T('Verbo y numeral'),
  body: C(`## Siete maneras de decir la misma raíz

Una raíz hebrea no es un verbo listo: es un esqueleto de consonantes que necesita un **molde** (binyan, «construcción») para convertirse en verbo (Gesenius §39-53). Hay siete moldes principales, y cada uno añade un matiz de sentido. Toma {קדשׁ} «santo»:

{קָדַשׁ} **qal** — {קָדַשׁ} «era/es santo»
{נִקְדַּשׁ} **nifal** — {נִקְדַּשׁ} «fue santificado»
{קִדַּשׁ} **piel** — {קִדַּשׁ} «santificó»
{קֻדַּשׁ} **pu'al** — {קֻדַּשׁ} «fue hecho santo»
{הִקְדִּישׁ} **hifil** — {הִקְדִּישׁ} «hizo santificar»
{הָקְדַּשׁ} **hofal** — {הָקְדַּשׁ} «fue hecho santo»
{הִתְקַדֵּשׁ} **hitpael** — {הִתְקַדֵּשׁ} «se santificó»

Un solo esqueleto de tres consonantes produce siete verbos completos, cada uno con su prefijo, su dageš y sus vocales.

## Cómo se forma cada molde

El qal es el molde base: las consonantes de la raíz más una vocal, con la primera letra fuerte. Todos los demás modifican el esqueleto de forma previsible:

**Nifal** añade el prefijo {נִ} y un dageš en la segunda letra: {קדשׁ} → {נִקְדַּשׁ}
**Piel** duplica la segunda letra: {קדשׁ} → {קִדַּשׁ}
**Hifil** añade el prefijo {הִ} y desplaza la vocal: {קָדַשׁ} → {הִקְדִּישׁ}
**Hitpael** suma {הִ} + {ת} y alarga la vocal: {הִתְקַדֵּשׁ}

Cuando el molde empieza por {ה}, la vocal puede ser {ָ} (qamats) en vez de {ַ} (pataj): es el mismo mecanismo del artículo {הָ} (cap. 1).

## Qué significa cada molde

El qal es el valor neutro: «hacer» y nada más. El nifal añade pasividad, reflexividad o reciprocidad: {נִשְׁמַר} «se guardó», {נִקְדַּשׁ} «fue santificado». El piel es el intensive-factivo: «hacer santo», «bendecir» ({בֵּרַךְ} de {ברך}). El pu'al es el pasivo del qal. El hifil es el causativo por excelencia: «hacer que alguien haga» ({הִקְדִּישׁ}). El hofal es el pasivo del hifil. El hitpael es el piel reflexivo.

Con otras raíces el sistema brilla aún más: {שׁמַר} «guardar» → {נִשְׁמַר} «guardarse», {הִשְׁמַר} «hacer guardar», {הִשְׁמֹר} «ser guardado». {נָתַן} «dar» → {נִתַּן} «ser dado», {הִנָּתֵן} «dar a alguien».

## Participios: donde se ve el molde

El participio muestra el molde con claridad, porque repite el prefijo:

{קֹדֶשׁ} (qal) «santo» · {נִקְדֵּשׁ} (nifal) «santificado» · {מַקְדֵּשׁ} (hifil) «santificador» · {קָדוּשׁ} (pu'al) «santo [pasivo]»

La frase de Is 6.3 — {קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה} «Santo, santo, santo es el SEÑOR» — usa el participio {קָדוֹשׁ}, de la misma raíz {קדשׁ}. La raíz que gobierna el libro entero aparece tres veces en una sola cláusula: una raíz, tres participios, un solo Dios.

## No toda raíz tiene los siete

Las raíces trilitéricas completas aceptan los siete; las defectivas ({אמר} «decir», {הלך} «ir») y las guturales ({שׁמַר}) a veces pierden uno. Y hay verbos que pierden el dageš en formas concretas. Así que aprende el patrón, pero confirma siempre la forma en la palabra que estás leyendo.

## Resumen visual

Si recuerdas solo la raíz y lo que hace cada molde, puedes leer cualquier verbo. Este es el mayor salto de razonamiento del curso: la raíz es el lexema, el molde es la flexión.`),
  vocab: [
    V('קָדַשׁ', 'קדשׁ', 'era santo (qal)'),
    V('נִקְדַּשׁ', 'קדשׁ', 'fue santificado (nifal)'),
    V('קִדַּשׁ', 'קדשׁ', 'santificó (piel)'),
    V('קֻדַּשׁ', 'קדשׁ', "fue hecho santo (pu'al)"),
    V('הִקְדִּישׁ', 'קדשׁ', 'hizo santificar (hifil)'),
    V('הָקְדַּשׁ', 'קדשׁ', 'fue hecho santo (hofal)'),
    V('הִתְקַדֵּשׁ', 'קדשׁ', 'se santificó (hitpael)'),
    V('בֵּרַךְ', 'ברך', 'bendijo (piel)'),
    V('נִשְׁמַר', 'שׁמר', 'se guardó (nifal)'),
    V('הִשְׁמֹר', 'שׁמר', 'ser guardado (hofal)'),
    V('קָדוֹשׁ', 'קָדוֹשׁ', 'santo'),
    V('מַקְדֵּשׁ', 'קדשׁ', 'santificador (part. hifil)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué binyan es «הִקְדִּישׁ»?'),
    options: [
      T('Qal (simple)'),
      T('Nifal (pasivo)'),
      T('Piel (intensivo)'),
      T('Hifil (causativo, prefijo הִ)'),
    ],
    answer: 3,
    hint: T('Mira el prefijo {הִ} y la vocal {ִ} antes del sufijo {־י}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué significa {הִשְׁמֹר}, dado que {שׁמַר} es «guardar»?'),
      options: [
        T('guarda (qal)'),
        T('se guarda (nifal)'),
        T('ser guardado (hofal)'),
        T('hacer que alguien guarde (hifil)'),
      ],
      answer: 2,
      hint: T('{הִ} + {שֹׁ} indica hofal: el pasivo del causativo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma de {קדשׁ} con su molde.'),
      pairs: [
        { a: '{קָדַשׁ}', b: T('qal') },
        { a: '{נִקְדַּשׁ}', b: T('nifal') },
        { a: '{קִדַּשׁ}', b: T('piel') },
        { a: '{הִתְקַדֵּשׁ}', b: T('hitpael') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('Escribe el qatal hifil de {קדשׁ} («hizo santificar»).'),
      answer: 'הִקְדִּישׁ',
      hint: T('{קָדַשׁ} → prefijo {הִ}, vocal {ִ} y el {־י} del perfectivo.'),
    },
    {
      kind: 'choose',
      prompt: T('En «קָדוֹשׁ קָדוֹשׁ קָדוֹשׁ יְהוָה» (Is 6.3), {קָדוֹשׁ} es:'),
      options: [
        T('un participio de la raíz {קדשׁ}'),
        T('el futuro de {קדשׁ}'),
        T('un numeral («tres»)'),
        T('un sustantivo independiente'),
      ],
      answer: 0,
      hint: T('La forma termina en {וֹשׁ} y va sin artículo: es un participio (cap. 14).'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo hebreo = raíz + molde (binyan). El molde es la flexión; la raíz es el lexema.',
      ),
    },
    {
      n: '2',
      text: T(
        "El qal es el valor neutro; el nifal, pasivo/reflexivo; el piel, intensive-factivo; el hifil, causativo; el pu'al y el hofal son los pasivos.",
      ),
    },
    {
      n: '3',
      text: T(
        'El piel duplica la segunda letra de la raíz; el nifal y el hifil añaden un prefijo ({נִ} y {הִ}) con dageš en la segunda letra.',
      ),
    },
    {
      n: '4',
      text: T(
        'El participio repite el prefijo del molde: {מַקְדֵּשׁ} es hifil («santificador»), {קֹדֶשׁ} es qal («santo»).',
      ),
    },
    {
      n: '5',
      text: T(
        'No toda raíz tiene los siete moldes: las raíces defectivas y guturales pierden formas. Comprueba siempre la palabra real.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exégesis:'),
      text: T(
        "Los binyanim son la principal herramienta de lectura del hebreo bíblico. Dos oraciones con el mismo sustantivo pueden tener sentidos opuestos si el verbo cambia de molde: {פּוֹרְשִׁים} (hifil, «separando») y {פּוֹרְשִׁים} (pu'al, «separados») describen acciones y estados distintos. El verbo no es solo tiempo: es una actitud ante quién actúa.",
      ),
    },
    {
      label: T('Dato curioso:'),
      text: T(
        'Los siete moldes no son invención de los gramáticos: ya estaban en hebreo antiguo, cuando el pueblo aún lo hablaba. Los documentos de Ugarit y los papiros de Ketef Hinom del templo de Jerusalén revelan el mismo sistema, lo que significa que los escribas del Antiguo Testamento escribían como lo hacían sus bisabuelos.',
      ),
    },
  ],
  examples: [
    { text: '{קָדַשׁ}', gloss: T('era santo — qal') },
    { text: '{נִקְדַּשׁ}', gloss: T('fue santificado — nifal (pasivo)') },
    { text: '{קִדַּשׁ}', gloss: T('santificó — piel (duplica la {ד})') },
    { text: '{קֻדַּשׁ}', gloss: T("fue hecho santo — pu'al (qal pasivo)") },
    { text: '{הִקְדִּישׁ}', gloss: T('hizo santificar — hifil (causativo)') },
    { text: '{הָקְדַּשׁ}', gloss: T('fue hecho santo — hofal (hifil pasivo)') },
    { text: '{הִתְקַדֵּשׁ}', gloss: T('se santificó — hitpael (piel reflexivo)') },
    { text: '{בֵּרַךְ}', gloss: T('bendijo — piel de {ברך} «bendecir»') },
    { text: '{נִשְׁמַר}', gloss: T('se guardó — nifal de {שׁמַר}') },
    { text: '{הִשְׁמֹר}', gloss: T('ser guardado — hofal de {שׁמַר}') },
    { text: '{מַקְדֵּשׁ}', gloss: T('santificador — participio hifil') },
    { text: '{קָדוֹשׁ}', gloss: T('santo — participio de {קדשׁ} (Is 6.3)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Cómo nace cada molde a partir de {קדשׁ}'),
      head: [T('Molde'), T('3.º m. qatal'), T('Participio'), T('Glosa')],
      rows: [
        ['qal', '{קָדַשׁ}', '{קֹדֶשׁ}', T('era/es santo')],
        ['niphal', '{נִקְדַּשׁ}', '{נִקְדֵּשׁ}', T('fue santificado')],
        ['piel', '{קִדַּשׁ}', '{מְקַדֵּשׁ}', T('santificó')],
        ["pu'al", '{קֻדַּשׁ}', '{קָדוּשׁ}', T('fue hecho santo')],
        ['hiphil', '{הִקְדִּישׁ}', '{מַקְדֵּשׁ}', T('hizo santificar')],
        ['hopal', '{הָקְדַּשׁ}', '{מְקֻדָּשׁ}', T('fue hecho santo')],
        ['hitpael', '{הִתְקַדֵּשׁ}', '{מִתְקַדֵּשׁ}', T('se santificó')],
      ],
    },
    {
      caption: T('Tabla 2 — Cómo se forma el molde'),
      head: [T('Operación'), T('Prefijo'), T('Dageš'), T('Vocal')],
      rows: [
        [T('qal (base)'), T('—'), T('en la 2.ª letra'), '{ַ} (pataj)'],
        [T('nifal'), '{נִ}', T('en la 2.ª letra'), T('{ַ} → {ְ} en la 1.ª letra')],
        [T('piel'), T('—'), T('duplica la 2.ª letra'), '{ַ}'],
        [T('hifil'), '{הִ}', T('en la 2.ª letra'), '{ַ} → {ִ}'],
        [T('hitpael'), '{הִת}', T('en la 2.ª letra'), '{ַ} → {ֵ}'],
      ],
    },
    {
      caption: T('Tabla 3 — Dos raíces en seis moldes'),
      head: [T('Molde'), T('Raíz {שׁמַר} «guardar»'), T('Raíz {נתן} «dar»')],
      rows: [
        ['qal', '{שָׁמַר}', '{נָתַן}'],
        ['niphal', '{נִשְׁמַר}', '{נִתַּן}'],
        ['piel', '{שָׁמֵר}', '{נְתַן}'],
        ['hiphil', '{הִשְׁמַר}', '{הִנָּתֵן}'],
        ['hopal', '{הִשְׁמֹר}', '{הֻנְתַּן}'],
        ['hitpael', '{הִתְשַׁמֵּר}', '{הִתְנַתֵּן}'],
      ],
    },
  ],
};

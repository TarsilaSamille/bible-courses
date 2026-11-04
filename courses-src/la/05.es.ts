import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Declinaciones y el verbo sum'),
  title: T('Los verbos esenciales'),
  subtitle: T('eo, venio, sum, habeo, facio, dico: los verbos que sostienen casi toda oración'),
  body: C(`## Doce verbos, y dos sin regla

Un verbo latino regular quita la terminación y devuelve una nueva: en {amo}, {amas}, {amat}, el tema {ama-} no se mueve. Los esenciales no tienen tema fijo: {eo}, {venio}, {sum}, {habeo}, {facio}, {dico}, {video}, {audio}, {edo}, {bibo}, {dormio}, {morior}, {nascor}, {lego}, {scribo}, {loquor}, {vestio}, {possum}, {volo}, {scio}, {fero}, {pono} son formas que ninguna regla produce, y son lo que se lee en cada página.

Son pocos y pesan mucho. {eo} ir, {venio} venir, {sum} ser, {habeo} tener, {facio} hacer, {dico} decir, {video} ver, {audio} oír, {edo} comer, {bibo} beber, {dormio} dormir, {morior} morir, {nascor} nacer, {lego} leer, {scribo} escribir, {loquor} hablar, {vestio} vestir, {possum} poder, {volo} querer, {scio} saber, {fero} llevar, {pono} poner cubren casi todo lo que se dice en un capítulo de Evangelio.

## sum: el verbo sin presente regular

{sum} es el verbo más irregular del latín: {sum}, {es}, {est}, {sumus}, {estis}, {sunt}. El imperfecto es {eram}, {eras}, {erat}, {eramus}, {eratis}, {erant}, y el futuro {ero}, {eris}, {erit}, {erimus}, {eritis}, {erunt}. No hay tema común entre el presente y el imperfecto: es memorizar, no deducir.

{sum} también es el auxiliar del perfecto pasivo: {amatus sum}, {amatus es}, {amatus est}. El participio concuerda con el sujeto, y {sum} cierra la cláusula. El portugués traduce por «fue amado», pero el latín dice «amado es»: el verbo ser carga el tiempo.

## eo y venio: ir y venir

{eo} «ir» es irregular en presente: {eo}, {is}, {it}, {imus}, {itis}, {eunt}. El imperfecto es {ibam}, {ibas}, {ibat}, {ibamus}, {ibatis}, {ibant}, y el futuro {ibo}, {ibis}, {ibit}, {ibimus}, {ibitis}, {ibunt}. El tema cambia de {i-} a {ib-}: es la marca del verbo.

{venio} «venir» es regular en la 4.ª conjugación: {venio}, {venis}, {venit}, {venimus}, {venitis}, {veniunt}. El imperfecto es {veniebam}, {veniebas}, {veniebat}, {veniebamus}, {veniebatis}, {veniebant}, y el futuro {veniam}, {venies}, {veniet}, {veniemus}, {venietis}, {venient}. La diferencia de sentido es la del portugués: {eo} indica movimiento hacia fuera, {venio} hacia dentro.

## En la Biblia

Juan 1:1 comienza con {erat}: {In principio erat Verbum}, en el principio era el Verbo. {erat} es el imperfecto de {sum}, 3.ª persona del singular. Y Juan 1:3 cierra con {factum est}, el perfecto pasivo de {facio}: todas las cosas fueron hechas. El latín que comienza con {erat} termina con {factum est}: el Verbo ya era, y todo lo demás fue hecho.

Marcos 4:39 trae {tacere}, «callar»: es el infinitivo de {taceo}, «estar callado». El versículo entero muestra el método: el latín coloca la orden de Jesús en infinitivo para decir que el mar no responde a la orden, sino a Cristo.`),
  vocab: [
    V('eo', 'eo', 'yo voy'),
    V('venio', 'venio', 'venir'),
    V('veni', 'venio', 'ven'),
    V('sum', 'sum', 'ser'),
    V('eram', 'sum', 'era'),
    V('habeo', 'habeo', 'tener'),
    V('habebam', 'habeo', 'tenía'),
    V('facio', 'facio', 'hacer'),
    V('feci', 'facio', 'hice'),
    V('dico', 'dico', 'decir'),
    V('dixi', 'dico', 'dije'),
    V('video', 'video', 'ver'),
    V('vidi', 'video', 'vi'),
    V('audio', 'audio', 'oír'),
    V('audivi', 'audio', 'oí'),
    V('edo', 'edo', 'comer'),
    V('bibo', 'bibo', 'beber'),
    V('dormio', 'dormio', 'dormir'),
    V('morior', 'morior', 'morir'),
    V('nascor', 'nascor', 'nacer'),
    V('lego', 'lego', 'leer'),
    V('scribo', 'scribo', 'escribir'),
    V('loquor', 'loquor', 'hablar'),
    V('vestio', 'vestio', 'vestir'),
    V('possum', 'possum', 'poder'),
    V('volo', 'volo', 'querer'),
    V('scio', 'scio', 'saber'),
    V('fero', 'fero', 'llevar'),
    V('pono', 'pono', 'poner'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{sum} es el verbo más irregular: {sum}, {es}, {est}, {sumus}, {estis}, {sunt}. Imperfecto {eram}, {eras}, {erat}. Futuro {ero}, {eris}, {erit}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{sum} es el auxiliar del perfecto pasivo: {amatus sum}, {amatus es}, {amatus est}. El participio concuerda con el sujeto.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{eo} es irregular en presente: {eo}, {is}, {it}, {imus}, {itis}, {eunt}. Imperfecto {ibam}, {ibas}, {ibat}. Futuro {ibo}, {ibis}, {ibit}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{venio} es regular en la 4.ª conjugación: {venio}, {venis}, {venit}, {venimus}, {venitis}, {veniunt}. Imperfecto {veniebam}, {veniebas}, {veniebat}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Juan 1:1 usa {erat} (imperfecto de {sum}) y Juan 1:3 usa {factum est} (perfecto pasivo de {facio}): el Verbo ya era, y todo lo demás fue hecho.',
      ),
    },
  ],
  notes: [
    {
      label: T('El eo que no es «ir»'),
      text: T(
        '{eo} indica movimiento hacia fuera, {venio} hacia dentro. Quien traduce los dos por «ir» pierde la dirección. El imperfecto de {eo} es {ibam}, no {eobam}: el tema cambia.',
      ),
    },
    {
      label: T('El sum que no es «ser»'),
      text: T(
        '{sum} es el verbo «ser», pero también el auxiliar del perfecto pasivo. En {amatus sum}, {sum} carga el tiempo y el participio carga el estado.',
      ),
    },
  ],
  examples: [
    {
      text: 'In principio erat Verbum',
      gloss: T('Jn 1:1 — {erat} es imperfecto de {sum}: el Verbo ya era.'),
    },
    {
      text: 'et Verbum erat apud Deum',
      gloss: T('Jn 1:1 — {erat} con {apud}: el Verbo estaba junto de Dios.'),
    },
    {
      text: 'omnia per ipsum facta sunt',
      gloss: T(
        'Jn 1:3 — {facta sunt} es perfecto pasivo de {facio}: todas las cosas fueron hechas.',
      ),
    },
    { text: 'eo ad te', gloss: T('{eo} con {ad}: voy a ti.') },
    { text: 'venio ad te', gloss: T('{venio} con {ad}: vengo a ti.') },
    { text: 'habeo unum filium', gloss: T('{habeo} con objeto directo: tengo un hijo.') },
    { text: 'dico vobis', gloss: T('{dico} con dativo: os digo.') },
    { text: 'video caelum', gloss: T('{video} con objeto directo: veo el cielo.') },
    { text: 'audio vocem', gloss: T('{audio} con objeto directo: oigo la voz.') },
    { text: 'tacere', gloss: T('Mc 4:39 — infinitivo de {taceo}: callar.') },
  ],
  tables: [
    {
      caption: T('Presente e imperfecto de sum'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'sum', 'eram', 'ero'],
        [T('2.ª sing.'), 'es', 'eras', 'eris'],
        [T('3.ª sing.'), 'est', 'erat', 'erit'],
        [T('1.ª pl.'), 'sumus', 'eramus', 'erimus'],
        [T('2.ª pl.'), 'estis', 'eratis', 'eritis'],
        [T('3.ª pl.'), 'sunt', 'erant', 'erunt'],
      ],
    },
    {
      caption: T('Presente e imperfecto de eo'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'eo', 'ibam', 'ibo'],
        [T('2.ª sing.'), 'is', 'ibas', 'ibis'],
        [T('3.ª sing.'), 'it', 'ibat', 'ibit'],
        [T('1.ª pl.'), 'imus', 'ibamus', 'ibimus'],
        [T('2.ª pl.'), 'itis', 'ibatis', 'ibitis'],
        [T('3.ª pl.'), 'eunt', 'ibant', 'ibunt'],
      ],
    },
    {
      caption: T('Presente e imperfecto de venio'),
      head: [T('Persona'), T('Presente'), T('Imperfecto'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'venio', 'veniebam', 'veniam'],
        [T('2.ª sing.'), 'venis', 'veniebas', 'venies'],
        [T('3.ª sing.'), 'venit', 'veniebat', 'veniet'],
        [T('1.ª pl.'), 'venimus', 'veniebamus', 'veniemus'],
        [T('2.ª pl.'), 'venitis', 'veniebatis', 'venietis'],
        [T('3.ª pl.'), 'veniunt', 'veniebant', 'venient'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {In principio erat Verbum}, ¿cuál es el tiempo de {erat}?'),
    options: [T('Presente'), T('Imperfecto'), T('Futuro'), T('Perfecto')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Completa "omnia per ipsum ___" con el perfecto pasivo de {facio} para "fue hecho".',
      ),
      answer: 'facta sunt',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su imperfecto.'),
      pairs: [
        { a: T('{eo}'), b: T('{ibam}') },
        { a: T('{venio}'), b: T('{veniebam}') },
        { a: T('{sum}'), b: T('{eram}') },
        { a: T('{habeo}'), b: T('{habebam}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el futuro de {sum} en 1.ª persona?'),
      options: [T('{ero}'), T('{sum}'), T('{eram}'), T('{erit}')],
      answer: 0,
    },
  ],
};

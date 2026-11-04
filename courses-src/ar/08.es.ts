import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperfecto, futuro y modos'),
  subtitle: T('El valor temporal depende del contexto'),
  section: T('El verbo'),
  body: C(`## El imperfecto no es «ahora»

El imperfecto árabe no tiene valor de presente obligatorio. Puede ser habitual — {كَانَ يُضِيءُ النُّورُ} puede describir lo que la luz hacía continuamente — o histórico, cuando un suceso pasado toma forma de imperfecto para narrar. Lo que decide es el contexto, no la vocalización: la terminación {ـُ} marca modo, no tiempo.

## Los modos

El yusivo pierde la vocal final: {يَكْتُبْ} es «que escriba». El subjuntivo suele mantener la fatha: {يَكْتُبَ} es «que escriba» en contexto de deseo u orden. En {لِيَكُنْ نُورٌ} aparece el yusivo tras {لِ} — la partícula de orden.

## Negación y futuro

{لَمْ} niega el pasado, {لَنْ} el futuro y {لا} el presente. Para el futuro está {سَ}-, como en {سَيَكْتُبُ} «escribirá», y {سَوْفَ}, que acentúa el futurity: {سَوْفَ} añade distancia o énfasis. La elección entre ambos cambia el tono, no el hecho.

## Contrae

Cuando {لَمْ} se encuentra con el yusivo o el subjuntivo, ambos se fusionan: {لَمْ يَكْتُبْ} es «no escribió» con un único foco en la negación. Lo mismo ocurre con {لَمَّا}. El verbo queda entonces con la terminación de un solo tiempo, que es lo que suele confundir a quien traduce literalmente.

## Criterio de lectura

Identifica primero la negación ({لَمْ}, {لَنْ}, {لا}), luego el tiempo del verbo que la sigue y solo entonces traduce. En el original, la posición de la negación es lo que fija el tiempo.`),
  vocab: [
    V('يَكْتُبُ', 'كتب', 'escribe'),
    V('تَكْتُبُ', 'كتب', 'escribes'),
    V('أَكْتُبُ', 'كتب', 'escribo'),
    V('نَكْتُبُ', 'كتب', 'escribimos'),
    V('يَكْتُبُونَ', 'كتب', 'escriben'),
    V('سَيَكْتُبُ', 'كتب', 'escribirá'),
    V('سَوْفَ', 'سوف', 'sin duda; luego'),
    V('لَمْ', 'لم', 'no + pasado'),
    V('لَنْ', 'لن', 'nunca; no + futuro'),
    V('لِيَكُنْ', 'كان', 'sea'),
    V('يَعْمَلُ', 'عمل', 'hace'),
    V('يَعْلَمُ', 'علم', 'sabe'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué valor expresa {لَمْ يَكْتُبْ}?'),
    options: [T('Futuro'), T('Pasado negativo'), T('Presente negativo'), T('Duda')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el jussivo: يَكْتُبُ → ___'),
      answer: 'يَكْتُبْ',
      hint: T('Retira la última vocal breve.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma marca futuro próximo?'),
      options: [T('lanyakuta'), T('sayakutub'), T('lamyaktub'), T('escribía')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona marcador y tiempo.'),
      pairs: [
        { a: T('lam'), b: T('no escribió') },
        { a: T('lan'), b: T('no escribirá') },
        { a: T('sa'), b: T('escribirá') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('El jussivo pierde la vocal breve final: {يَكْتُبُ} → {يَكْتُبْ}.') },
    { n: '2', text: T('{لَمْ} + jussivo produce pasado negativo: {لَمْ يَكْتُبْ}.') },
    { n: '3', text: T('{لَنْ} + subjuntivo produce futuro negativo enfático: {لَنْ يَكْتُبَ}.') },
  ],
  notes: [
    {
      label: T('Tiempo'),
      text: T(
        'El tiempo gramatical y el de referencia son distintos: {كَانَ يَقْرَأُ} puede significar «solía leer».',
      ),
    },
  ],
  examples: [
    { text: 'كَانَ يُضِيءُ النُّورُ', gloss: T('la luz brillaba') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('haya luz') },
    { text: 'لَنْ تَمُوتُوا', gloss: T('no moriréis') },
  ],
  tables: [
    {
      caption: T('Formas de كتب'),
      head: [T('Tipo'), T('Forma'), T('Valor típico')],
      rows: [
        ['imperfecto', 'يَكْتُبُ', 'presente; habitual; passado'],
        ['jussivo', 'لِيَكْتُبْ', 'desejo; finalidade; exhortação'],
        ['subjuntivo', 'لَنْ يَكْتُبَ', 'fato futuro; resultado'],
        ['futuro', 'سَيَكْتُبُ', 'ação futura'],
      ],
    },
  ],
};

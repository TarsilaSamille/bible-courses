import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('El alfabeto y la pronunciación del latín'),
  subtitle: T('v = la «u» de {vicus}, c y g, h muda — cómo suena'),
  section: T('El alfabeto y la pronunciación'),
  body: C(`## El rostro del alfabeto

El latín usa las 23 letras del alfabeto latino, sin {j}, sin {u} consonante escrita y sin {w}. No lleva tildes: lo que distingue {a} de {ă}, o {e} de {ĕ}, es únicamente la posición en la sílaba. Para quien empieza basta saber que las vocales breves y largas cambian el *peso* de la sílaba:

- {ă} seguida de una sola consonante: {ă-maf};
- {ā} seguida de dos o más: {ā-mā-ter};
- {ē} (larga) es casi siempre cerrada: {rēg-num}; {ĕ} (breve) es abierta: {rĕ-gĕ-na};
- {ŏ} en pausa, {ō} dentro de palabra: {ĕ-gŏ}, {clŏ-rum}.

Quien habla portugués o español se equivoca en seis puntos:

{c} = {k} ante {a, o, u}; = {g} ante {e, i, y}: {Cĭ-vĭtas}, Cēsar;
{g} = {g} ante {a, o, u}; = {y} ante {e, i, y}: {genus}, {Gĕnĕ-sis};
{h} es siempre muda: {homo} se lee «omo», habet «abet»;
{v} suena como la {u} inglesa de *but*: {vĕ-nĕ-rĕ}, {vŏ-cābŭlum};
{i} y {u} son consonantes ante vocal: {iam}, {uă-tĕr};
{x} equivale a {cs}: {dix-it}, axis.

## Vocales y semivocales

Las cinco vocales {a, e, i, o, u} forman diptongos y hiatos. {ae} y {oe} no son diptongos: son grafías alternativas de {a} y {e} largas, y {ei} nunca es diptongo — es {e̱i}, e breve más i. En {deus} la {e} es breve: es el rasgo más célebre del latín y la prueba de que el griego *theos* no sobrevivió intacto.

## Qué leer en voz alta

Di sin dudar:

{Deus} — viam — {Deus verbum} — {Deus verbum caro} — {In principio erat Verbum}.

Cada palabra ya viene marcada: lo que aparece como pulsable en el texto te deja consultar la glosa al pasar el ratón.`),
  vocab: [
    V('Deus', 'Deus', 'Dios'),
    V('Dominus', 'Dominus', 'Señor'),
    V('verbum', 'verbum', 'palabra'),
    V('homo', 'homo', 'hombre (h muda)'),
    V('via', 'via', 'camino, vía'),
    V('lux', 'lux', 'luz'),
    V('terra', 'terra', 'tierra'),
    V('aqua', 'aqua', 'agua'),
    V('mater', 'mater', 'madre'),
    V('pater', 'pater', 'padre'),
    V('filius', 'filius', 'hijo'),
    V('vita', 'vita', 'vida'),
    V('mundus', 'mundus', 'mundo'),
    V('cor', 'cor', 'corazón'),
    V('genus', 'genus', 'linaje, raza (g = y)'),
    V('vicus', 'vicus', 'aldea (v = u)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo suena la {v} de {vicus}?'),
    options: [
      T('Como la «v» de «viva» en portugués'),
      T('Como la «u» de «usted»'),
      T('Muda'),
      T('Como la «b» de «bueno»'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {genus} «linaje, raza», la {g} inicial suena como…'),
      options: [
        T('{g} dura, como en {gallus}'),
        T('Semivocal, como la «y» de «gente»'),
        T('{k} dura'),
        T('{h} brasileira'),
      ],
      answer: 1,
      hint: T('Regla §1: {g} ante {e, i}.'),
    },
    {
      kind: 'fill',
      prompt: T('Escribe con letras latinas el sonido «omo» de {homo}: h_ _ _o'),
      answer: 'omo',
      hint: T('La {h} latina nunca suena.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la palabra con su valor'),
      pairs: [
        { a: T('Civitas'), b: T('«ki» — c = k ante i') },
        { a: T('Dixit'), b: T('«dicsit» — x = cs') },
        { a: T('Habet'), b: T('«abet» — h muda') },
        { a: T('Genus'), b: T('«yenus» — g = y ante e') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    { n: '1', text: T('{c} y {g} cambian de valor ante {e, i, y}: {genus} suena «yenus».') },
    { n: '2', text: T('{h} nunca suena y {v} siempre suena como {u}: habet, {vicus}.') },
    {
      n: '3',
      text: T('Vocal breve seguida de una sola consonante; vocal larga seguida de dos o más.'),
    },
    {
      n: '4',
      text: T('{ae} y {oe} son vocales largas, nunca diptongos; {ei} es {e} breve más {i}.'),
    },
    {
      n: '5',
      text: T('{i} y {u} se vuelven consonantes [j] y [w] ante vocal: {iam} «ya», {uăter}.'),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'La ortografía latina no usa mayúsculas para los nombres propios. La Vulgata escribe con inicial mayúscula {Dominus} y {Deus} porque es un libro, no porque la palabra lo exija. Sigue la convención donde te resulte cómodo, sin creer que hay santidad en una letra.',
      ),
    },
    {
      label: T('Origen:'),
      text: T(
        '{Deus} viene del griego θεός y su pronunciación ya estaba abreviada, por eso la {e} es breve. Las palabras de origen griego conservan una peculiaridad: Cēsar, {poēta}, {nēmō}.',
      ),
    },
  ],
  examples: [
    { text: 'Deus', gloss: T('Dios.') },
    { text: 'Dominus', gloss: T('El Señor.') },
    { text: 'verbum', gloss: T('palabra (latín neutro, 2.ª decl.)') },
    { text: 'homo', gloss: T('hombre — «omo»') },
    { text: 'via', gloss: T('camino, vía') },
    { text: 'lux', gloss: T('luz') },
    { text: 'terra', gloss: T('tierra, país') },
    { text: 'mater', gloss: T('madre — «máter»') },
    { text: 'filius', gloss: T('hijo') },
    { text: 'cor', gloss: T('corazón') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Consonantes de valor engañoso'),
      head: [T('Letra'), T('Valor'), T('Ejemplo')],
      rows: [
        ['c', T('k ante a, o, u; «g» ante e, i, y'), 'Civĭtas, Cēsar'],
        ['g', T('«g» ante a, o, u; «y» ante e, i, y'), 'Galla, genus'],
        ['h', T('muda'), 'homo, habet'],
        ['v', T('suena como «u» (labial)'), 'vicus, vōx'],
        ['x', T('vale «cs»'), 'dixit, axis'],
      ],
    },
    {
      caption: T('Tabla 2 — Vocales: breve y larga'),
      head: [T('Vocal'), T('Breve'), T('Larga')],
      rows: [
        ['a', 'ăgrĭ', 'māter'],
        ['e', 'rĕgĕna', 'rēgnum'],
        ['i', 'fĭlĭus', 'vīnum'],
        ['o', 'mŏdŭs', 'nōvus'],
        ['u', 'pŭer', 'cūr'],
      ],
    },
  ],
};

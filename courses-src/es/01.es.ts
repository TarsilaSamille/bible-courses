import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('El alfabeto y la pronunciación'),
  subtitle: T('ñ, ll, rr, j — cómo suena'),
  section: T('El español'),
  body: C(`## El alfabeto

El español usa el alfabeto latino con 27 letras propias. Las cinco vocales son {a, e, i, o, u}: la {i} forma hiato tras otra vocal ({país}, {día}) pero diptongo ante consonante ({bien}). Las consonantes que más traicionan al que habla portugués:

{ñ} — «nh» en Brasil, jota gutural: {niño} «menino», {mañana} «mañana», {año} «año».
{ll} — jota en España, «y» en América: {llamar} «llamar» (ES) / «marcar» (MX), {caballo} «caballo» (ES) / «caballo» (MX).
{rr} — vibrante fuerte inicial y tras {n, l, s}: {perro} «perro», {Israel}, {honra}.
{j} — jota siempre: {Jesús}, {Juan}, {julio}, {joven}.

## Reglas de lectura

{c} = {k} ante {a, o, u} ({casa}); = {s} en América / {θ} (como «think») en España ante {e, i} ({cielo}, {cerveza}). La RAE mantiene también {z} como {θ} en España: {cruz}, {luz}.
{g} = dura ante {a, o, u} ({gato}) o suave ante {e, i} ({gente}); para conservar el sonido duro se escribe {gue} o {guí}: {guía}, {güero}.
{h} es siempre muda: {hombre} se lee «ombre», {hoy} «hoy».
{v} suena como {b}: {vida}, {vino} «vino».
{y} = {i} entre vocales: {hoy} «hoy», {ley} «ley»; = jota al inicio o tras consonante: {yo}, {muy}.

## Europeo × americano

Cuatro pares resumen casi toda la diferencia: {z} = θ / s; {c} + e/i = θ / s; {ll} = /ʝ/ en España («ley» = «lee») pero /ʝ/ o /j/ en América («ley» = «leyó»); {ll} + i = /ʝ/ (lojeria) solo en España. El texto bíblico castellano (Reina-Valera 1960) sigue el patrón peninsular; el texto que se usa en América sigue el patrón americano.

Ej.: {Dios} «Dios» · {luz} «luz» · {niño} «niño» — ¡lee en voz alta desde ya!`),
  vocab: [
    V('niño', 'niño', 'niño (¡ñ!)'),
    V('perro', 'perro', 'perro (¡rr!)'),
    V('pero', 'pero', 'pero (¡r simple!)'),
    V('cielo', 'cielo', 'cielo'),
    V('hombre', 'hombre', 'hombre (¡h muda!)'),
    V('luz', 'luz', 'luz'),
    V('vino', 'vino', 'vino (¡v = b!)'),
    V('hoy', 'hoy', 'hoy (¡y = i!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Diferencia entre «perro» y «pero»?'),
    options: [
      T('Solo ortografía'),
      T('¡rr vibrante (perro) frente a r simple (pero)!'),
      T('Plural frente a singular'),
      T('Iguales'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En «hombre», la letra h…'),
      options: [
        T('Suena como /x/'),
        T('Es muda (se lee «ombre»)'),
        T('Suena como la /h/ alemana'),
        T('Solo en el plural'),
      ],
      answer: 1,
      hint: T('Regla §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa con la letra que falta: me__ino (niño)'),
      answer: 'ñ',
      hint: T('Suena como «nh» en portugués.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la letra con su sonido'),
      pairs: [
        { a: T('j'), b: T('jota, siempre') },
        { a: T('v'), b: T('suena como b') },
        { a: T('c + e/i'), b: T('s en América, th en España') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Ñ, ll y rr son letras propias: niño (niño), calle (calle), perro (perro) frente a pero (pero).',
      ),
    },
    {
      n: '2',
      text: T(
        'C y G cambian ante e/i: cielo (cielo), gente (gente). J es siempre jota: Jesús, Juan.',
      ),
    },
    { n: '3', text: T('H es muda (hombre se lee «ombre») y V suena como B (vida).') },
    { n: '4', text: T('Y es vocal ante otra vocal (hoy) y consonante ante consonante (muy).') },
  ],
  notes: [
    {
      label: T('Escucha antes de leer'),
      text: T(
        'La {ñ} es el único sonido que no existe en portugués; la {j} española suena como la {ʒ} francesa, y la {h} es siempre muda. La {ll} hoy suena como {y}, salvo en gran parte de América, donde sobrevive el sonido palatal.',
      ),
    },
  ],
  examples: [
    { text: '{Dios}', gloss: T('Dios.') },
    { text: '{luz}', gloss: T('Luz.') },
    { text: '{niño}', gloss: T('Niño (¡ñ!).') },
    { text: '{hombre}', gloss: T('Hombre (¡h muda!).') },
    { text: '{mañana}', gloss: T('Mañana (¡ñ!).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Letras problemáticas'),
      head: [T('Letra'), T('Valor'), T('Ejemplo')],
      rows: [
        [T('ñ'), T('«nh» (Brasil); jota grave'), T('{niño}')],
        [T('ll'), T('jota (España) / y (América)'), T('{caballo}')],
        [T('rr'), T('vibrante fuerte'), T('{perro}')],
        [T('h'), T('muda'), T('{hombre}')],
        [T('z'), T('s (América) / th (España)'), T('{luz}')],
      ],
    },
    {
      caption: T('Tabla 2 — Peninsular × americano'),
      head: [T('Palabra'), T('España'), T('América')],
      rows: [
        ['{cerveza}', T('sonido th'), T('sonido s')],
        ['{ley}', T('«lei» (leer)'), T('«lei» (ley, leí)')],
        ['{vaca}', T('sonido b'), T('sonido b (¡uai!)')],
      ],
    },
  ],
};

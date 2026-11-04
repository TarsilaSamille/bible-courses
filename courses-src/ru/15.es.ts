import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('El verbo: presente y aspecto'),
  title: T('Los verbos esenciales'),
  subtitle: T('{быть}, {идти}, {хотеть}, {мочь}, {есть} y los verbos que el aspecto divide en dos'),
  body: C(`## Diez verbos, y dos que engañan al oído

Un verbo ruso regular forma sus terminaciones según el tiempo: en {читаю}, {читаешь}, {читают}, la raíz {чита-} no se mueve. Los esenciales no tienen raíz fija: {есть}, {хотел}, {может}, {шёл}, {был}, {будем} son formas que ninguna regla produce, y son las que aparecen en cada página.

Son pocos y pesan mucho. {быть}, {идти}, {ходить}, {приходить}, {есть} (comer), {пить}, {спать}, {видеть}, {слышать}, {знать}, {думать}, {говорить}, {сказать}, {любить}, {хотеть}, {мочь}, {дать}, {взять}, {делать}, {читать}, {писать} cubren casi todo lo que se dice en un capítulo de Evangelio.

## {Быть}: el verbo sin presente

El ruso no conjuga {быть} en presente. Donde el portugués dice "eu sou", "él es", "nosotros somos", el ruso pone forma cero: {я студент}, {он доктор}, {мы здесь}. El presente de {быть} es un espacio vacío, y ese vacío entre sujeto y predicado es lo que mueve la frase rusa.

El pasado salió como {был}, {была}, {было}, {были}; el futuro, como {буду}, {будешь}, {будет}, {будем}, {будете}, {будут}. La 3.ª persona del singular tiene otra cara: {есть} también dice "hay, es" en afirmaciones ontológicas, como {в начале было Слово}, donde {было} es neutro porque {Слово} es neutro.

Quien aprende ruso traduce al portugués como si el espacio vacío fuera un verbo y dice "soy yo aquí"; quien habla ruso pone vacío donde el portugués espera forma. Los dos idiomas dicen lo mismo, uno con signo y uno sin.

## {Хотеть}: el infinitivo sin partícula

{Хотеть}, "querer", tiene una 1.ª persona en {-у} y el resto de la conjugación como siempre: {хочу}, {хочешь}, {хочет}, {хотим}, {хотите}, {хотят}. Mezcla dos conjugaciones, y por eso el oído ruso lo conoce aunque no haya visto la palabra.

Cuando alguien quiere hacer algo, el ruso pone el infinitivo directo: {я хочу читать}, {он хочет уйти}. No tiene equivalente de la partícula {чтобы} que exigen el español y el portugués cuando cambia el sujeto: {я хочу, чтобы ты пришёл} debe mostrar el sujeto nuevo con {чтобы}.

## El aspecto: el par que hace un solo verbo

Cada verbo ruso viene en pareja de aspectos. El imperfectivo habla del acto en curso, incompleto, iterativo: {читать}. El perfectivo habla del acto concluido, cerrado con resultado: {прочитать}. El perfectivo no tiene presente real — {прочитаю} es un futuro simple, y solo dice "voy a leerlo y terminarlo". El imperfectivo sí tiene presente: {читаю} es lo que pasa ahora.

La elección no se traduce por el tiempo verbal. "Leí el libro" puede ser {я читал} (lo leí, sin término) o {я прочитал} (lo terminé, el libro está leído). El ruso marca con el prefijo {про-} lo que el portugués marca con contexto.

## En la Biblia

Juan 1:1 trae {В начале было Слово}, en el principio era el Verbo. {было} es el neutro del pasado de {быть}, y {Слово} es neutro porque en el Evangelio la identidad del Verbo se dice sin artículo. Juan 3:16 trae {возлюбил Бог мир}, el pasado perfectivo de {возлюбить}, porque lo que Dios hizo es un hecho concluido.

Marcos 4:39 trae {Замолчи и перестань бушевать}, dos imperativos perfectivos: {замолчи} es el imperativo de {замолчать}, y {перестань} es de {перестать}, dejar de hacer. El griego es un imperativo aoristo, y el ruso lo traduce por perfectivo porque significa exactamente "para de una vez".

El lector cuidadoso nota que el verbo ruso elige el aspecto antes que el tiempo. {Был} o {читал} no deciden si la oración es pasada; {был} habla de lo que era, {читал} habla de lo que se hacía sin término. {Прочитал} y {увидел} dicen que algo pasó y acabó. El tiempo vive en las desinencias; el aspecto vive en el prefijo o en la raíz.`),
  vocab: [
    V('быть', 'быть', 'ser, existir'),
    V('был', 'быть', 'él era/fue'),
    V('было', 'быть', 'era/fue (neutro)'),
    V('буду', 'быть', 'yo seré'),
    V('есть', 'есть', 'comer; ser (cópula)'),
    V('идти', 'идти', 'ir a pie'),
    V('пойти', 'пойти', 'ir (perf.)'),
    V('хотеть', 'хотеть', 'querer'),
    V('хочу', 'хотеть', 'yo quiero'),
    V('мочь', 'мочь', 'poder'),
    V('могу', 'мочь', 'yo puedo'),
    V('дать', 'дать', 'dar (perf.)'),
    V('взять', 'взять', 'tomar (perf.)'),
    V('читать', 'читать', 'leer (imperf.)'),
    V('прочитать', 'прочитать', 'leer (perf.)'),
    V('видеть', 'видеть', 'ver (imperf.)'),
    V('сказать', 'сказать', 'decir (perf.)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El ruso no conjuga {быть} en presente: {я студент}, {он доктор}, {мы здесь}. El presente es cero.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Cada verbo ruso viene en pareja: imperfectivo ({читать}, {писать}, {делать}) y perfectivo ({прочитать}, {написать}, {сделать}). El perfectivo no tiene presente real.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{хочу} es la 1.ª persona de {хотеть}, forma irregular en {-у}; su objeto es infinitivo directo: {я хочу читать}. Con cambio de sujeto entra {чтобы}: {я хочу, чтобы он пришёл}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{прочитаю}, {напишу}, {сделаю} son futuros simples porque el perfectivo no conjuga presente: lo que parece presente perfectivo es el futuro.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El imperativo sale de la 2.ª persona menos la desinencia: {читай}, {пиши}, {иди}. El perfectivo da la orden de lo que se cumple una vez: {прочитай}, {напиши}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Есть} hace dos verbos en una palabra'),
      text: T(
        '{есть} dice "comer" (imperfectivo, con pasado {ел}), y en {это есть истина} aparece como cópula de identidad ontológica — la misma palabra con dos lecturas de oración.',
      ),
    },
    {
      label: T('{Мочь} y el futuro perfectivo'),
      text: T(
        '{мочь} tiene un futuro perfectivo raro; el ruso prefiere {смогу}, el presente del perfectivo {смочь}. Así, lo que parece presente de {смочь} es el futuro, y {мог} es el único pasado que {мочь} tiene.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово.', gloss: T('{было}: neutro del pasado de {быть} (Jn 1:1).') },
    { text: 'Я студент.', gloss: T('Cópula cero: el presente de {быть} no se escribe.') },
    { text: 'Он был дома.', gloss: T('{был}: pasado de {быть}, 3.ª masc.') },
    { text: 'Я буду дома.', gloss: T('{буду}: futuro de {быть}, 1.ª sing.') },
    { text: 'Я хочу читать.', gloss: T('{хочу} + infinitivo: el infinitivo no lleva partícula.') },
    {
      text: 'Она хочет прийти.',
      gloss: T('{хочет}: 3.ª sing. de {хотеть}; {прийти} es perfectivo.'),
    },
    { text: 'Я читаю.', gloss: T('{читаю}: presente imperfectivo, ahora.') },
    {
      text: 'Я прочитаю.',
      gloss: T('{прочитаю}: perfectivo, forma de futuro — no hay presente perfectivo.'),
    },
    {
      text: 'Замолчи и перестань.',
      gloss: T('Imperativos perfectivos: {замолчи} y {перестань} (Mc 4:39).'),
    },
    { text: 'Он взял хлеб.', gloss: T('{взял}: pasado del perfectivo {взять}, tomar.') },
  ],
  tables: [
    {
      caption: T('Presente de los esenciales'),
      head: ['Лицо', 'идти', 'хотеть', 'мочь', 'дать (perf)', 'читать'],
      rows: [
        ['я', 'иду', 'хочу', 'могу', 'дам', 'читаю'],
        ['ты', 'идёшь', 'хочешь', 'можешь', 'дашь', 'читаешь'],
        ['он/она', 'идёт', 'хочет', 'может', 'даст', 'читает'],
        ['мы', 'идём', 'хотим', 'можем', 'дадим', 'читаем'],
        ['вы', 'идёте', 'хотите', 'можете', 'дадите', 'читаете'],
        ['они', 'идут', 'хотят', 'могут', 'дадут', 'читают'],
      ],
    },
    {
      caption: T('La pareja de aspecto de los esenciales'),
      head: [T('imperfectivo'), T('perfectivo'), T('glosa')],
      rows: [
        ['читать', 'прочитать', T('leer')],
        ['писать', 'написать', T('escribir')],
        ['делать', 'сделать', T('hacer')],
        ['говорить', 'сказать', T('decir')],
        ['видеть', 'увидеть', T('ver')],
        ['брать', 'взять', T('tomar')],
        ['давать', 'дать', T('dar')],
        ['идти', 'пойти', T('ir a pie')],
      ],
    },
    {
      caption: T('Pasado de los esenciales'),
      head: ['инфинитив', 'я', 'она', 'они'],
      rows: [
        ['быть', 'был', 'была', 'были'],
        [T('есть (comer)'), 'ел', 'ела', 'ели'],
        ['хотеть', 'хотел', 'хотела', 'хотели'],
        ['мочь', 'мог', 'могла', 'могли'],
        ['дать', 'дал', 'дала', 'дали'],
        ['взять', 'взял', 'взяла', 'взяли'],
        ['идти', 'шёл', 'шла', 'шли'],
        ['прийти', 'пришёл', 'пришла', 'пришли'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma de 1.ª persona de {хотеть}?'),
    options: [T('{хочу}'), T('{хочешь}'), T('{хотю}'), T('{хочю}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa "В начале было ___" con el sujeto de Juan 1:1.'),
      answer: 'Слово',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo imperfectivo con su pareja perfectiva.'),
      pairs: [
        { a: T('{читать}'), b: T('{прочитать}') },
        { a: T('{писать}'), b: T('{написать}') },
        { a: T('{делать}'), b: T('{сделать}') },
        { a: T('{говорить}'), b: T('{сказать}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En "Я прочитаю", la forma es:'),
      options: [
        T('presente perfectivo'),
        T('futuro simple con aspecto perfectivo'),
        T('imperativo'),
        T('pasado imperfectivo'),
      ],
      answer: 1,
    },
  ],
};

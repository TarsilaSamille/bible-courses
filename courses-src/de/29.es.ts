import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('El imperativo'),
  subtitle: T('du, ihr, Sie y la forma de usted'),
  section: T('Los verbos'),
  body: C(`El imperativo alemán tiene dos familias, y se distinguen por el tratamiento, no por el número. Frente a du, ihr y Sie solo existe el singular: komm!, kommt!, kommen Sie!. La forma de cortesía es casi igual al presente de indicativo, con la terminación -en en lugar de la -t: Sie kommen = ustedes vienen, kommen Sie! = ¡vengan! Frente a du e ihr existen las dos formas, más una forma con Sie que es siempre igual a la de ustedes.

El singular de du sale del presente de indicativo sin terminación: du kommst → komm!, du fährst → fahr!, du heißt → heiß! No hay una segunda persona del plural que derive de la primera: ihr kommt viene de *kommet, arcaico hoy. Con los verbos fuertes lesen, sehen, geben, essen, treffen la vocal alterna en la forma de du (du gibst) y por eso también alterna en el imperativo (gib!, sieh!, iss!, lies!). Es el único caso en que el imperativo no coincide con el indicativo sin terminación.

La terminación -e del plural ante -t merece atención: ihr sagt → sagt!, ihr macht → macht!, pero ihr fahrt → fahrt! y ihr geht → geht!. La regla es que la -e es obligatoria cuando la forma termina en -t o -d y opcional en los demás casos. Es la misma razón que produce la -e opcional del Konjunktiv I, con el ejemplo clásico del segundo auxiliar.

Con Sie el verbo es siempre el presente con -e: Setzen Sie sich!, Haben Sie Geduld!, Sagen Sie mir die Wahrheit!. Y hay un punto de cortesía que los manuales alemanes casi siempre silencian: el imperativo negativo es se Verb nicht, y con Sie la negación va después del pronombre: Setzen Sie sich nicht!.

Un último rasgo: el alemán tiene pocas formas de subjuntivo, y el imperativo es la única que sobrevivió intacta de la lengua antigua. Es también la única forma que el alemán no necesita suavizar: komm! es a la vez neutro y enfático.`),
  vocab: [
    V('komm!', 'kommen', '¡ven! (du, singular)'),
    V('kommt!', 'kommen', '¡vengan! (ihr, plural)'),
    V('kommen Sie!', 'kommen', '¡vengan! (cortesía)'),
    V('du', 'du', 'tú (tratamiento familiar)'),
    V('ihr', 'ihr', 'vosotros (tratamiento familiar)'),
    V('Sie', 'Sie', 'usted (cortesía)'),
    V('gib!', 'geben', '¡da! (alternancia vocálica)'),
    V('iss!', 'essen', '¡come! (verbo fuerte)'),
    V('lies!', 'lesen', '¡lee! (verbo fuerte)'),
    V('fahr!', 'fahren', '¡ve! (sin -e en singular)'),
    V('setzt euch!', 'setzen', '¡siéntense! (reflexivo plural)'),
    V('nicht', 'nicht', 'no (negación del imperativo)'),
    V('haben Sie Geduld', 'haben', 'tenga paciencia (cortesía)'),
    V('warten Sie', 'warten', 'espere (cortesía)'),
    V('Vergiss nicht', 'vergessen', 'no olvide (imperativo negativo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el imperativo correcto de «du fährst»?'),
    options: [T('¡fährst!'), T('¡fahr!'), T('¡fahre!'), T('¡gefahr!')],
    answer: 1,
    hint: T('Regla §1: el singular de du es el presente sin terminación.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el imperativo de cortesía: ___ Sie sich! (sentarse)'),
      answer: 'Setzen',
      hint: T('Con Sie el verbo lleva -en en lugar de -t.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué imperativo es correcto según la regla de la -e?'),
      options: [T('¡Fahrt!'), T('¡Fahre!'), T('¡Fahrt zu!'), T('¡Fahret!')],
      answer: 0,
      hint: T('La forma termina en -t: la -e es obligatoria.'),
    },
    {
      kind: 'fill',
      prompt: T('Forma el imperativo negativo: Komm nicht zu spät! → Warte __ nicht!'),
      answer: 'mir',
      hint: T('El pronombre ocupa la posición media de la frase.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la persona con la forma del imperativo.'),
      pairs: [
        { a: T('du'), b: T('¡komm!') },
        { a: T('ihr'), b: T('¡kommt!') },
        { a: T('Sie'), b: T('¡kommen Sie!') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El singular de du pierde la terminación del presente: du fährst → fahr!, du heißt → heiß!',
      ),
    },
    {
      n: '2',
      text: T(
        'Los verbos fuertes con alternancia vocálica cambian la vocal en el imperativo: du gibst → gib!, du isst → iss!, du liest → lies!',
      ),
    },
    {
      n: '3',
      text: T(
        'En el plural la -e es obligatoria tras -t y -d y opcional en los demás casos: geht! y fahrt!, pero wartet! y macht!',
      ),
    },
    {
      n: '4',
      text: T(
        'Con Sie el imperativo es el presente con -e y el pronombre va antes: Setzen Sie sich!',
      ),
    },
    {
      n: '5',
      text: T(
        'El imperativo negativo se forma con nicht tras el verbo: Komm nicht zu spät!; con Sie la negación sigue al pronombre: Kommen Sie nicht!',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué no hay segunda persona del plural'),
      text: T(
        'El indicativo de primera persona del plural Ich komme no es la fuente del plural del imperativo. La forma viene de *kommet, con la terminación -et, que sobrevive solo en unos pocos contextos fijos y es hoy completamente arcaica fuera del imperativo. La lección 31 muestra que el pronombre ihr nació de la forma verbal, y no al revés: era el verbo que cargaba la marca de segunda persona, y el pronombre fue llenando despacio el espacio que dejaba.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'Los mandamientos son el mayor depósito de imperativos del alemán. Du sollst deinen Vater und deine Mutter ehren (Éxodo 20:12) da la segunda persona del singular, y Du sollst nicht töten da la misma estructura con la negación detrás. En Gálatas 5:1, Die Freiheit des Gesetzes steht uns Christen zu, la traducción de Lutero usa el subjuntivo; la forma en -st del imperativo es la clave para leer el texto como un conjunto de órdenes y no de descripciones.',
      ),
    },
  ],
  examples: [
    { text: 'Komm sofort!', gloss: T('¡Ven ahora mismo! (du, sin terminación).') },
    { text: 'Gib mir das Buch!', gloss: T('¡Dame el libro! (alternancia vocálica).') },
    { text: 'Vergiss das nicht!', gloss: T('¡No olvides eso! (negación tras el verbo).') },
    { text: 'Setzt euch!', gloss: T('¡Siéntense! (reflexivo plural).') },
    { text: 'Wartet auf mich!', gloss: T('¡Esperadme! (-e obligatoria tras -t).') },
    { text: 'Macht das Fenster auf!', gloss: T('¡Abrid la ventana! (-e opcional).') },
    { text: 'Kommen Sie herein!', gloss: T('¡Pase usted! (Sie + verbo con -en).') },
    { text: 'Seien Sie ruhig!', gloss: T('¡Cálmese! (siempre la forma de Sie).') },
    {
      text: 'Halte die Tür offen!',
      gloss: T('¡Mantenga la puerta abierta (subjuntivo del imperativo, raro).'),
    },
  ],
  tables: [
    {
      caption: T('Formas del imperativo por persona'),
      head: ['Pessoa', 'Indicativo', 'Imperativo'],
      rows: [
        ['du (singular)', 'du kommst', 'komm!'],
        ['ihr (plural)', 'ihr kommt', 'kommt!'],
        ['Sie (polidez)', 'Sie kommen', 'kommen Sie!'],
        ['du + sein', 'du bist', 'sei!'],
        ['ihr + sein', 'ihr seid', 'seid!'],
        ['Sie + sein', 'Sie sind', 'seien Sie!'],
      ],
    },
    {
      caption: T('La terminación -e del plural'),
      head: ['Verbo', 'Sem -e', 'Com -e'],
      rows: [
        ['sagen', 'sagt!', '—'],
        ['machen', 'macht!', '—'],
        ['gehen', 'geht!', '—'],
        ['fahren', 'fahrt!', '—'],
        ['warten', 'wart!', 'wartet!'],
        ['arbeiten', 'arbeit!', 'arbeitet!'],
      ],
    },
  ],
};

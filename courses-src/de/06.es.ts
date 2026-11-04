import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Los sustantivos'),
  subtitle: T('clase, flexión y compuestos'),
  section: T('Los sustantivos'),
  body: C(`El sustantivo alemán es la única clase gramatical que empieza obligatoriamente por mayúscula, y es la clase que lleva género, número y caso. Todo lo demás puede convertirse en sustantivo por nominalización: un infinitivo (das Essen, el comer), un adjetivo (der Arme, el pobre), un numeral (die Zweite, la segunda) e incluso un pronombre (das Ich, el yo). Cuando eso ocurre, el sustantivo recibe un género propio, que no siempre coincide con el de la base.

Los compuestos son el rasgo más visible del sustantivo alemán. La regla de formación es sencilla: los elementos van de mayor a menor, y el último es el núcleo: Krankenhaus = Krank + en + Haus (enfermo + casa). El elemento de enlace suele llevar una -s, llamado Fugen-s, aunque no siempre aparece (Krankenhaus, Arbeitnehmer, pero Haustür, Schiffahrt, Rucksack).

La declinación del sustantivo sigue siempre el mismo plan: la terminación del artículo sigue al género, y la del sustantivo varía solo en el genitivo singular y en el plural. Un sustantivo masculino tiene en genitivo o -s, o -es (des Mannes, des Hauses), o una -n (des Vaters, des Jungen). El femenino y el neutro forman el genitivo con -s o -es (der Frau, des Kindes).

Una precaución práctica: el género del compuesto es el del núcleo, no el del primer elemento. Der Arbeitgeber es masculino porque el núcleo es Arbeitgeber (una persona), aunque Arbeit sea femenino. Un recurso que funciona mejor que la pura costumbre es aprender cada sustantivo con su artículo y en plural, porque es la forma que aparece al hablar.`),
  vocab: [
    V('das Essen', 'Essen', 'la comida; el comer (nominalizado)'),
    V('frühstücken', 'frühstücken', 'desayunar'),
    V('das Frühstück', 'Frühstück', 'el desayuno'),
    V('der Arme', 'Arme', 'el pobre (adjetivo sustantivado)'),
    V('das Lesen', 'Lesen', 'la lectura (nominalizada)'),
    V('die Zweite', 'zweite', 'la segunda (numeral sustantivado)'),
    V('das Krankenhaus', 'Krankenhaus', 'el hospital (compuesto)'),
    V('der Arbeitgeber', 'Arbeitgeber', 'el empleador (compuesto)'),
    V('die Haustür', 'Haustür', 'la puerta de casa (compuesto sin s de enlace)'),
    V('die Forschung', 'Forschung', 'la investigación (compuesto en -ung)'),
    V('die Rede', 'Rede', 'el discurso; la red'),
    V('reden', 'reden', 'hablar'),
    V('der Handschlag', 'Handschlag', 'el apretón de manos'),
    V('das Verstehen', 'Verstehen', 'la comprensión'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el núcleo y el género de «der Arbeitgeber»?'),
    options: [
      T('Arbeit, femenino'),
      T('Arbeitgeber, masculino'),
      T('Geber, neutro'),
      T('der Arbeitgeber, neutro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Desmonta el compuesto: Krankenhaus = Haus für ___'),
      answer: 'Kranke',
      hint: T('El primer elemento indica la persona afectada.'),
    },
    {
      kind: 'fill',
      prompt: T('Forma el sustantivo de «verstehen» (comprender): das ___'),
      answer: 'Verstehen',
      hint: T('Un infinitivo nominalizado es neutro.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué compuesto NO tiene s de enlace?'),
      options: [T('das Krankenhaus'), T('die Haustür'), T('das Arbeithaus'), T('der Kirchturm')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la base con la nominalización.'),
      pairs: [
        { a: T('essen'), b: T('das Essen') },
        { a: T('arm'), b: T('der Arme') },
        { a: T('frühstücken'), b: T('das Frühstück') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda nominalización es masculina, femenina o neutra según la regla del núcleo nominal, y esa regla no es la de la palabra base.',
      ),
    },
    {
      n: '2',
      text: T(
        'El núcleo de un compuesto es su último elemento, y ese elemento determina el género: die Blume + der Topf → die Blumenvase.',
      ),
    },
    {
      n: '3',
      text: T(
        'En genitivo singular el masculino usa -s, -es o -n según el peso de la palabra; el femenino y el neutro usan -s o -es.',
      ),
    },
    {
      n: '4',
      text: T(
        'La s de enlace es un morfema vacío: nunca lleva acento, nunca cuenta para el plural y puede desaparecer al acortar el compuesto (Krankenhaus → krank).',
      ),
    },
  ],
  notes: [
    {
      label: T('Da un paso atrás'),
      text: T(
        'La construcción de compuestos es, en su origen, una receta de instrucción. Donde el alemán dice Wenn Sie die Tür schließen, hay una manera de hablar sorteando el artículo ausente. Quien aprende a desmontar el compuesto recupera la gramática sin memorizar nada: Krankenhaus = Haus für Kranke.',
      ),
    },
    {
      label: T('Poco a poco'),
      text: T(
        'Una estrategia de alto rendimiento es el emparejamiento: Karte ↔ die Karte, die Karte ↔ mapas, y el plural die Karten. Con tres datos — artículo, singular y plural — el sustantivo sigue siendo recuperable incluso cuando falla la memoria.',
      ),
    },
  ],
  examples: [
    {
      text: 'Das Essen ist fertig.',
      gloss: T('La comida está lista (das = neutro, Essen = comer).'),
    },
    {
      text: 'Die Armen essen später.',
      gloss: T('Los pobres comen más tarde (Arme = adjetivo sustantivado).'),
    },
    {
      text: 'Er arbeitet in einem Krankenhaus.',
      gloss: T('Trabaja en un hospital (compuesto con s de enlace).'),
    },
    {
      text: 'Die Haustür war offen.',
      gloss: T('La puerta de casa estaba abierta (compuesto sin s de enlace).'),
    },
    {
      text: 'Sie hält die Zweite im Kreuz.',
      gloss: T('Sujeta la segunda (numeral sustantivado).'),
    },
    {
      text: 'Das Verstehen kam langsam.',
      gloss: T('La comprensión llegó despacio (verbo sustantivado).'),
    },
    {
      text: 'Zum Frühstück gab es Brot.',
      gloss: T('Hubo pan en el desayuno (z um = zu dem, genitivo).'),
    },
  ],
  tables: [
    {
      caption: T('Formas nominalizadas'),
      head: ['Base', 'Nominalização', 'Gênero', 'Leitura'],
      rows: [
        ['infinitivo (essen)', 'das Essen', 'neutro', 'a comida, o ato de comer'],
        ['infinitivo (frühstücken)', 'das Frühstück', 'neutro', 'o café da manhã'],
        ['adjetivo (arm)', 'der Arme', 'masculino', 'o pobre'],
        ['adjetivo (schön)', 'das Schönste', 'neutro', 'o mais belo, o melhor'],
        ['numeral (die zweite)', 'die Zweite', 'feminino', 'a segunda, a outra pessoa'],
        ['pronome (ich)', 'das Ich', 'neutro', 'o eu, o ego'],
        ['verbo (verstehen)', 'das Verstehen', 'neutro', 'a compreensão'],
      ],
    },
    {
      caption: T('La s de enlace en el compuesto'),
      head: ['Composto', 'Análise', 'Fugen-s'],
      rows: [
        ['das Krankenhaus', 'Krank + en + Haus', 'presente'],
        ['der Arbeitgeber', 'Arbeit + Geber', 'ausente'],
        ['die Haustür', 'Haus + Tür', 'ausente'],
        ['die Rucksackreise', 'Rucksack + Reise', 'ausente'],
        ['die Schiffahrt', 'Schiff + Fahrt', 'fricativo /f/'],
        ['der Arbeitnehmer', 'Arbeit + Nehmer', 'ausente'],
        ['die Blumentopferdecke', 'Blume + Topf + Decke', 'presente, truncado'],
        ['der Dreikäsehoch', 'drei + Käse + Hoch', 'presente, truncado'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('El genitivo'),
  subtitle: T('posesión, origen y medida'),
  section: T('Los casos'),
  body: C(`El genitivo es el caso que menos ha sobrevivido en el habla cotidiana y más importa en la escrita. Liga dos sustantivos: el segundo, que va después, es lo poseído, y el primero, entre paréntesis, es el poseedor. Die Eltern des Mannes muestra el orden: poseedor primero, poseído después.

La terminación del artículo es des o der; la del sustantivo es -s o -es, con la excepción del masculino, que puede tomar una -n: des Mannes, der Frau, des Kindes, des Vaters. En los nombres propios regidos por artículo la forma más común es des + nombre sin terminación adicional: des Herrn, des Johannes, des Petrus.

Además de posesión, el genitivo indica origen material (ein Gefühl der Dankbarkeit), medida (ein Glas Wasser) y contenido (der Inhalt des Buches). En expresiones de tiempo el genitivo aparece sin artículo: heute Morgen, letzten Monat, Anfang des Jahres, während des Krieges.

Las preposiciones de genitivo son pocas y casi todas abstractas: wegen (a causa de), trotz (a pesar de), während (durante), statt y anstatt (en lugar de), außerhalb, innerhalb, hinsichtlich, betreffs, mittels, namens. En la lengua bíblica son frecuentes: um des Römers, wegen der Sünde.

Los verbos que rigen genitivo son pocos: entbehren (privarse de), bedürfen (necesitar de), gedenken (recordar), spotten (burlarse de), hohnen (escarnir de), ermangeln (faltar). En todos ellos la preposición puede sustituirse por von + dativo, y así es como el hablante moderno evita el caso: wegen der Sünde / von der Sünde.`),
  vocab: [
    V('der Genitiv', 'Genitiv', 'el caso genitivo'),
    V('wegen', 'wegen', 'a causa de (prep. gen.)'),
    V('trotz', 'trotz', 'a pesar de (prep. gen.)'),
    V('während', 'während', 'durante (prep. gen.)'),
    V('statt', 'statt', 'en lugar de (prep. gen.)'),
    V('entbehren', 'entbehren', 'privarse de (gen.)'),
    V('bedürfen', 'bedürfen', 'necesitar de (gen.)'),
    V('gedenken', 'gedenken', 'recordar (gen.)'),
    V('der Herr', 'Herr', 'el señor (des Herrn en gen.)'),
    V('das Jahr', 'Jahr', 'el año (des Jahres en gen.)'),
    V('die Eltern', 'Eltern', 'los padres'),
    V('der Krieg', 'Krieg', 'la guerra (des Krieges en gen.)'),
    V('ein Glas Wasser', 'Glas', 'un vaso de agua (medida en gen.)'),
    V('heute Morgen', 'Morgen', 'esta mañana (tiempo en gen.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Die Liebe des Kindes», ¿qué caso tiene des?'),
    options: [T('nominativo'), T('acusativo'), T('dativo'), T('genitivo')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el genitivo: das Jahr → ___'),
      answer: 'des Jahres',
      hint: T('Neutro en -es en el genitivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la preposición: ___ des Regens (a causa de la lluvia)'),
      answer: 'Wegen',
      hint: T('Preposición de genitivo de causa.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el genitivo correcto de «der Vater»?'),
      options: [T('des Vaters'), T('der Vater'), T('den Vater'), T('dem Vater')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la preposición con su sentido.'),
      pairs: [
        { a: T('trotz'), b: T('a pesar de') },
        { a: T('während'), b: T('durante') },
        { a: T('statt'), b: T('en lugar de') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El genitivo precede al sustantivo que posee: die Eltern des Mannes (los padres del hombre), nunca des Mannes die Eltern en el habla corriente.',
      ),
    },
    {
      n: '2',
      text: T(
        'El masculino fuerte forma el genitivo con -es, el masculino débil con -n y el neutro y femenino con -es o -s: des Hauses, des Vaters, des Kindes, der Frau.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los nombres propios con artículo forman el genitivo sin terminación: des Herrn, des Petrus, des Johannes; sin artículo reciben -s: Petri, Johanns.',
      ),
    },
    {
      n: '4',
      text: T(
        'En casi todos los casos von + dativo puede sustituir al genitivo, y esa es la solución estándar del hablante contemporáneo: wegen des Mangels / von dem Mangel.',
      ),
    },
  ],
  notes: [
    {
      label: T('El genitivo en des'),
      text: T(
        'Cuando no hay poseedor humano, el alemán prefiere el dativo con von: Die Farbe des Himmels puede ser Die Farbe vom Himmel, y la segunda suena más natural. Eso muestra que el genitivo no ha desaparecido: ha cambiado de compañeros.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 1:14, die Herrlichkeit Gottes eingeweht. El genitivo de origen es una de las marcas del estilo bíblico: la gloria de Dios, la Palabra de Dios, el Hijo del Hombre. En portugués el genitivo es raro; en alemán bíblico es constante, porque traduce el genitivo griego sin pérdida.',
      ),
    },
  ],
  examples: [
    {
      text: 'Die Eltern des Mannes kommen.',
      gloss: T('Los padres del hombre vienen (poseedor primero).'),
    },
    { text: 'Des Kindes Stimme ist laut.', gloss: T('La voz del niño es alta (neutro en -es).') },
    {
      text: 'Der Name der Lehrerin fehlt.',
      gloss: T('Falta el nombre de la profesora (femenino sin terminación).'),
    },
    {
      text: 'Wegen des Regens bleiben wir zu Hause.',
      gloss: T('A causa de la lluvia nos quedamos en casa (wegen + gen.)'),
    },
    {
      text: 'Trotz des Mangels ist er zufrieden.',
      gloss: T('A pesar de la falta está satisfecho (trotz + gen.)'),
    },
    {
      text: 'Während des Krieges lebte er in Wien.',
      gloss: T('Durante la guerra vivió en Viena.'),
    },
    {
      text: 'Ein Glas Wasser bitte.',
      gloss: T('Un vaso de agua, por favor (medida en genitivo).'),
    },
    {
      text: 'Heute Morgen trank ich Kaffee.',
      gloss: T('Esta mañana tomé café (tiempo en genitivo).'),
    },
  ],
  tables: [
    {
      caption: T('El genitivo en todos los casos'),
      head: ['Gênero', 'Artigo', 'Substantivo', T('Ejemplo'), T('Otro ejemplo')],
      rows: [
        [
          'masc.',
          'des',
          '+ s / es / n',
          'des Mannes, des Hauses, des Vaters',
          'die Liebe des Kindes',
        ],
        ['fem.', 'der', '+ (s / es)', 'der Frau, der Königin', 'der Name der Lehrerin'],
        ['neut.', 'des', '+ (s / es)', 'des Kindes, des Buches', 'der Inhalt des Buches'],
        ['plural', 'der', '+ (s / es)', 'der Eltern, der Menschen', 'der Anfang des Jahres'],
      ],
    },
    {
      caption: T('Usos del genitivo'),
      head: ['Uso', 'Exemplo', 'Tradução'],
      rows: [
        ['posse', 'das Hauses meiner Eltern', 'da casa dos meus pais'],
        ['origem material', 'ein Bild des Malers', 'um quadro do pintor'],
        ['medida', 'ein Glas Wasser, zwei Meter Höhe', 'um copo de água, dois metros de altura'],
        ['conteúdo', 'der Inhalt des Buches', 'o conteúdo do livro'],
        ['tempo', 'heute Morgen, letzten Monat', 'hoje de manhã, mês passado'],
        ['duração', 'während des Krieges', 'durante a guerra'],
        ['com preposição', 'wegen der Sünde', 'por causa do pecado'],
      ],
    },
  ],
};

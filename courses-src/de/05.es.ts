import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Cuándo no se usa artículo'),
  subtitle: T('Materias, estaciones, idiomas, profesiones'),
  section: T('Los artículos'),
  body: C(`El alemán usa el artículo definido mucho más que el español o el portugués, pero también lo omite en un número previsible de casos. La regla práctica es esta: si el sustantivo nombra una sustancia, un período, un idioma o una función y no una cosa contable e individual, el artículo desaparece.

Entran en ese grupo las materias y materiales: Wasser, Gold, Holz, Brot, Wein. Se dice Ich trinke Wasser, y no Ich trinke das Wasser, cuando se habla de la sustancia en general. Las estaciones y los meses tampoco lo llevan: im Sommer, im Januar, letzten Monat. Los días de la semana igual: am Montag, heute, gestern, letzten Sonntag.

Los idiomas y las asignaturas no llevan artículo: Sie spricht Deutsch, Er ist gut in Mathematik, Ich lerne Englisch. Los países tampoco, cuando no se trata de un país determinado: Er reist nach Deutschland, pero Er reist in die Schweiz (aquí hay artículo, porque se nombra una unidad política).

Las profesiones y funciones, cuando describen lo que alguien es, llevan artículo cero: Er ist Lehrer. Sie ist Ärztin. Voy a die Schule, a die Kirche, zur Arbeit: el sustantivo es una institución tomada por su uso.

Por último, observa la construcción muy frecuente Ich habe Hunger, Ich habe Durst, Ich habe Angst, Ich habe Zeit: el sustantivo abstracto entra sin artículo, y solo se diría «ich habe eine Angst» cuando el miedo es un suceso concreto y delimitado.`),
  vocab: [
    V('das Wasser', 'Wasser', 'el agua (materia, sin artículo)'),
    V('das Gold', 'Gold', 'el oro'),
    V('der Sommer', 'Sommer', 'el verano (estación)'),
    V('der Januar', 'Januar', 'enero (mes)'),
    V('am Montag', 'Montag', 'el lunes'),
    V('Deutsch', 'Deutsch', 'alemán (el idioma)'),
    V('Mathematik', 'Mathematik', 'la matemática (asignatura)'),
    V('der Lehrer', 'Lehrer', 'el profesor'),
    V('die Ärztin', 'Ärztin', 'la médica (femenino de Arzt)'),
    V('in die Schule', 'Schule', 'al colegio (institución)'),
    V('Hunger haben', 'Hunger', 'tener hambre'),
    V('Durst haben', 'Durst', 'tener sed'),
    V('Angst haben', 'Angst', 'tener miedo'),
    V('ein Stück Brot', 'Brot', 'un trozo de pan'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué frase es correcta?'),
    options: [
      T('Ich trinke das Wasser.'),
      T('Ich trinke Wasser.'),
      T('Ich trinke ein Wasser.'),
      T('Ich trinke die Wassers.'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa sin artículo: Er ist ___ (profesor).'),
      answer: 'Lehrer',
      hint: T('Profesión como predicado.'),
    },
    {
      kind: 'fill',
      prompt: T('Completa la institución: Die Kinder gehen in ___ Schule.'),
      answer: 'die',
      hint: T('La institución como unidad determinada lleva artículo.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué sustantivo exige artículo definido?'),
      options: [T('Wasser'), T('Deutsch'), T('Wein'), T('das Brot')],
      answer: 3,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con su sentido.'),
      pairs: [
        { a: T('Angst haben'), b: T('tener miedo (estado)') },
        { a: T('ein Stück Brot'), b: T('un trozo de pan (medida)') },
        { a: T('in die Kirche'), b: T('a la iglesia (institución)') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los sustantivos de sustancia en sentido general no llevan artículo; la medida es la que lo introduce: ein Glas Wasser, zwei Tassen Kaffee.',
      ),
    },
    {
      n: '2',
      text: T(
        'Las fechas y estaciones aparecen sin artículo cuando indican el período en general, y con artículo cuando indican un período determinado: im Januar / im Januar 2024.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los idiomas, las asignaturas y los países nunca llevan artículo definido: ich spreche Englisch, er studiert Medizin, wir fahren nach Österreich.',
      ),
    },
    {
      n: '4',
      text: T(
        'Una profesión como predicado omite el artículo (Er ist Arzt), pero como aposición definida lo exige (Als Arzt half er; Der Arzt half).',
      ),
    },
  ],
  notes: [
    {
      label: T('Artículo cero ≠ falta de información'),
      text: T(
        'Leer la ausencia de artículo como «falta de información» lleva a errores. En Er ist Lehrer el sustantivo no es menos determinado: significa precisamente que la persona ejerce esa función. El artículo cero es un morfema con valor propio, no una omisión.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 6:35, Ich bin das Brot des Lebens. El contraste entre das Brot (la masa determinada) y el abstracto Leben muestra que el artículo marca el sustantivo determinado, no el concepto.',
      ),
    },
  ],
  examples: [
    { text: 'Ich trinke gern Wasser.', gloss: T('Me gusta beber agua (sustancia sin artículo).') },
    {
      text: 'Er trinkt ein Glas Wasser.',
      gloss: T('Bebe un vaso de agua (la medida introduce el artículo).'),
    },
    { text: 'Im Sommer ist es hier heiß.', gloss: T('En verano hace calor aquí.') },
    {
      text: 'Gestern war ich im Garten.',
      gloss: T('Ayer estaba en el jardín (gestern sin artículo).'),
    },
    { text: 'Sie spricht gut Deutsch.', gloss: T('Habla bien alemán (idioma sin artículo).') },
    {
      text: 'Die Kinder gehen in die Schule.',
      gloss: T('Los niños van al colegio (institución con artículo).'),
    },
    { text: 'Ich habe Hunger.', gloss: T('Tengo hambre (abstracción sin artículo).') },
    {
      text: 'Er fährt morgen nach Berlin.',
      gloss: T('Mañana va a Berlín (destino sin artículo).'),
    },
  ],
  tables: [
    {
      caption: T('Con artículo y sin artículo'),
      head: ['Categoria', 'Com artigo', 'Sem artigo'],
      rows: [
        ['matérias', 'das Wasser trinken (a água do copo)', 'Wasser trinken (beber água)'],
        ['estações', 'im Sommer 2000', 'der Sommer war heiß (o verão de 2000)'],
        ['meses e dias', 'im Januar, am Montag', 'heute, gestern, morgen'],
        ['idiomas', 'das Deutsch lernen', 'Deutsch sprechen'],
        ['disciplinas', 'in der Mathematik gut sein', 'gut in Mathematik sein'],
        ['países', 'in die Schweiz reisen', 'nach Deutschland reisen'],
        ['profissões', 'der Lehrer Meier', 'Er ist Lehrer (função)'],
        ['instituições', 'in die Schule gehen', 'zur Schule gehen (ir lá)'],
        ['estados', 'die Angst im Gesicht sehen', 'Angst haben (disposição)'],
        ['quantidade', 'ein Stück Brot, zwei Gläser', 'viel Brot, wenig Zeit'],
      ],
    },
    {
      caption: T('Sustantivos muy a menudo sin artículo'),
      head: ['Construção', 'Exemplo', 'Tradução'],
      rows: [
        ['haber + abstração', 'Ich habe Hunger.', 'estou com fome'],
        ['haber + abstração', 'Wir haben Zeit.', 'temos tempo'],
        ['verbo + abstração', 'Er macht sich Sorgen.', 'preocupa-se'],
        ['in + função', 'in die Schule / in die Kirche', 'à escola / à igreja'],
        ['nach + direção', 'nach Hause, nach Deutschland', 'para casa, para a Alemanha'],
        ['Zu + Institution', 'zur Arbeit, zum Arzt', 'ao trabalho, ao médico'],
      ],
    },
  ],
};

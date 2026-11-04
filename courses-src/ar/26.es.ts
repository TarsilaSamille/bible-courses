import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('أن، إن، أنَّ y la partícula de negación'),
  subtitle: T('أَنْ، إِنْ، إِنَّ، لا، لَمْ، لَنْ'),
  section: T('Partículas'),
  body: C(`## Dos partículas que se confunden a primera vista

{أَنْ} y {إِنْ} son las dos partículas que están en la frontera del verbo, y se confunden a primera vista porque se parecen, ocupan el mismo sitio y piden lo mismo: un verbo en subjuntivo.

La diferencia está en el sentido. {أَنْ} presenta un hecho como contenido de otro hecho: {أَنْ يَأْتِيَ الرَّجُلُ} es "que venga el hombre", y el hecho principal está en otra parte. {إِنْ} presenta una condición: {إِنْ جَاءَ الرَّجُلُ} es "si viene el hombre". Una es subordinación y la otra es hipótesis.

Ahora la shadda, que resuelve el resto. **Una shadda sobre la {ن} convierte las dos en partículas de énfasis**: {إِنَّ} es "ciertamente", y {أَنَّ} es "ciertamente que". {إِنَّ اللَّهَ مَعَ الصَّابِرِينَ} no es una condición, es una afirmación reforzada. Y {أَنَّهُ صَدِيقٌ} no es una hipótesis, es una certeza sobre lo que se sabe del sujeto.

## {لا} hace dos trabajos

La partícula negadora es una, y lo que cambia es el modo del verbo que viene detrás. **La prohibición es {لا} más verbo en jussivo; la negación del presente es {لا} más verbo en indicativo.** {لا تَقْتَلُوا} es "no matéis", y la vocal final del verbo ha caído: es el jussivo. {لا يَقْتُلُ} es "no mata", y la vocal está: es el indicativo.

El pasado negativo tiene formas propias, y son tres. {لَمْ} más verbo es la más común: {لَمْ يَكُنْ} es "no estaba". {لَمَّا} más verbo es el mismo sentido con el foco en el momento: {لَمَّا جَاءَ}. {مَا} más verbo es la negación sin referencia de tiempo: {مَا كَانَ}, "no era".

El futuro negativo es {لَنْ}: {لَنْ يَهْلِكَ} es "no perecerá". Y {لَنْ} con verbo en jussivo es "no quiero que": {لَنْ أَسْمَحَ} abre una cláusula de rechazo.

## Las que abren y cierran la cláusula

Después de esas vienen las que conectan, y forman un conjunto pequeño y fijo, lo que las convierte en lo más fácil de memorizar del curso.

{إِذْ} es "cuando" y también "si", y en el segundo sentido lleva jussivo: {إِذَا جَاءَ} es "si viene", con {إِذَا} en lugar de {إِنْ}. {لَمَّا} es "cuando" con sentido de comienzo. {فَ} es "entonces" o "pues", y es la partícula más frecuente del texto bíblico después de {وَ}. {أَمْ} es la alternativa: {أَمْ حُمْرٌ أَمْ بَيْضَ}. {لَكِنْ} es "pero". {إِنَّمَا} es "solamente", y niega lo que sigue al verbo: {إِنَّمَا بِالْحَقِّ}.

Y hay dos partículas para las que el español no tiene una sola palabra. {يَا} es el vocativo, y precede a un nombre propio o a un sustantivo para llamar a alguien: {يَا دَاوُدُ}. {مَا} con sustantivo es la partícula restrictiva, y significa "aquello que", al contrario de {مَا} con verbo: {مَا فَوْقَكُمْ}.

## Criterio de lectura

El síntoma más corto es la shadda. Una {إِنّ} con {ّ} nunca es condición, es énfasis, y "ciertamente" o "en verdad" siempre cabe donde aparece. En {إِنَّ اللَّهَ مَعَ الصَّابِرِينَ} la partícula ya entrega el sentido de toda la cláusula, y quien lee {إِنْ} sin shadda traduce "si Dios está con los pacientes", que es lo contrario de lo que escribió el autor.

El segundo síntoma es la terminación del verbo. Cuando la negación es {لَمْ}, el verbo está en jussivo, y la caída de la vocal final es lo que separa {لَمْ يَكُنْ} de {لَمْ يَكُونَ}. Cuando la negación es {لَنْ}, el verbo está en subjuntivo, y es la terminación del pronombre la que dice sobre quién cae la negación.`),
  vocab: [
    V('أَنْ', 'أن', 'que; conjunción subordinante'),
    V('إِنْ', 'إن', 'si'),
    V('إِنَّ', 'إن', 'ciertamente; con la shadda'),
    V('أَنَّ', 'أن', 'que; con la shadda'),
    V('كَأَنَّ', 'أن', 'como si'),
    V('لا', 'لا', 'no; nunca'),
    V('لَمْ', 'لم', 'no; pasado negativo'),
    V('لَنْ', 'لن', 'no; futuro negativo'),
    V('مَا', 'ما', 'no; partícula restrictiva'),
    V('إِذَا', 'إذا', 'si; cuando'),
    V('إِذْ', 'إذ', 'cuando'),
    V('فَ', 'ف', 'entonces; pues'),
    V('أَمْ', 'أم', 'o'),
    V('لَكِنْ', 'لكن', 'pero'),
    V('ثُمَّ', 'ثم', 'entonces; después'),
    V('الصَّابِرُونَ', 'صبر', 'los pacientes'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la diferencia entre {إِنْ} y {إِنَّ}?'),
    options: [
      T('Ninguna'),
      T('La shadda: {إِنَّ} es énfasis'),
      T('La shadda: {إِنْ} es énfasis'),
      T('La vocal del verbo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la prohibición: "no matéis" es {لا ___}.'),
      answer: 'تَقْتَلُوا',
      hint: T('El verbo va en jussivo, sin vocal final.'),
    },
    {
      kind: 'match',
      prompt: T('Associe partícula y uso.'),
      pairs: [
        { a: T('لَمْ'), b: T('negación del pasado') },
        { a: T('لَنْ'), b: T('negación del futuro') },
        { a: T('مَا'), b: T('negación sin tiempo') },
        { a: T('إِنَّمَا'), b: T('solamente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En {لا يَقْتُلُ}, el verbo está en...'),
      options: [
        T('Jussivo, con prohibición'),
        T('Indicativo, con negación'),
        T('Subjuntivo, con hipótesis'),
        T('Imperfecto, sin negación'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Qué partícula es el vocativo?'),
      options: [T('أَمْ'), T('لَكِنْ'), T('يَا'), T('ثُمَّ')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**{أَنْ} e {إِنْ} piden ambos el subjuntivo, y la shadda los convierte en énfasis: {إِنَّ} e {أَنَّ}.**',
      ),
    },
    {
      n: '2',
      text: T('{إِنْ} es condición y {إِنَّ} es afirmación reforzada; decide el texto, no el lector.'),
    },
    { n: '3', text: T('{لا} más el jussivo prohíbe; {لا} más el indicativo niega el presente.') },
    {
      n: '4',
      text: T(
        'El pasado negativo tiene tres formas, {لَمْ}, {لَمَّا} y {مَا}, y {لَنْ} es el futuro negativo.',
      ),
    },
    {
      n: '5',
      text: T(
        '{لَـ} inicial es prohibición, y {لَا} inicial tras una pregunta significa "¿por qué no?".',
      ),
    },
  ],
  notes: [
    {
      label: T('El jussivo que solo aparece por su ausencia'),
      text: T(
        'La diferencia entre {لا تَقْتَلُوا} y {لا يَقْتُلُ} está en la terminación: en el jussivo cae la vocal final. Un texto antiguo no siempre escribe esa caída, y por eso {لا تَقْتُلُ} aparece escrito sin ella.',
      ),
    },
    {
      label: T('Por qué el subjuntivo es obligatorio'),
      text: T(
        'Después de {إِنْ} y {أَنْ} el verbo no puede estar en indicativo, porque la cláusula no afirma que el evento ocurra: lo presenta como posible. El español hace lo mismo con el subjuntivo, pero sin partícula.',
      ),
    },
  ],
  examples: [
    { text: 'أَنْ يَأْتِيَ الرَّجُلُ', gloss: T('que venga el hombre') },
    { text: 'إِنْ جَاءَ الرَّجُلُ', gloss: T('si viene el hombre') },
    { text: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', gloss: T('ciertamente Dios está con los pacientes') },
    { text: 'أَنَّهُ صَدِيقٌ', gloss: T('que él es fiel') },
    { text: 'لا تَقْتَلُوا', gloss: T('no matéis; prohibición') },
    { text: 'لا يَقْتُلُ', gloss: T('no mata; negación del presente') },
    { text: 'لَمْ يَكُنْ', gloss: T('no estaba') },
    { text: 'لَنْ يَهْلِكَ', gloss: T('no perecerá') },
    { text: 'مَا كَانَ', gloss: T('no era') },
  ],
  tables: [
    {
      caption: T('{أَنْ}, {إِنْ} y sus formas enfáticas'),
      head: [T('Partícula'), T('Función'), T('Modo del verbo'), T('Ejemplo')],
      rows: [
        [T('أَنْ'), T('cláusula subordinada; "que"'), T('subjuntivo'), 'أَنْ يَأْتِيَ'],
        [T('إِنْ'), T('condición; "si"'), T('subjuntivo'), 'إِنْ جَاءَ'],
        [T('إِنَّ'), T('énfasis; "ciertamente"'), T('indicativo'), 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ'],
        [T('أَنَّ'), T('énfasis; "que"'), T('indicativo'), 'أَنَّهُ صَدِيقٌ'],
        [T('كَأَنَّ'), T('comparación; "como si"'), T('indicativo'), 'كَأَنَّهُ مَاءٌ'],
      ],
    },
    {
      caption: T('{لا} y sus vecinas'),
      head: [T('Forma'), T('Uso'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('{لا} más jussivo'), T('prohibición'), 'لا تَقْتَلُوا', T('no matéis')],
        [T('{لا} más indicativo'), T('negación del presente'), 'لا يَقْتُلُ', T('no mata')],
        [T('{لَمْ} más verbo'), T('negación del pasado'), 'لَمْ يَكُنْ', T('no estaba')],
        [T('{لَنْ} más verbo'), T('negación del futuro'), 'لَنْ يَهْلِكَ', T('no perecerá')],
        [T('{مَا} más verbo'), T('negación sin tiempo'), 'مَا كَانَ', T('no era')],
      ],
    },
    {
      caption: T('Conectores de cláusula'),
      head: [T('Palabra'), T('Valor'), T('Ejemplo')],
      rows: [
        [T('إِذْ'), T('cuando; si'), 'إِذْ جَاءَ'],
        [T('لَمَّا'), T('cuando, con comienzo'), 'لَمَّا بَلَغَ'],
        [T('فَ'), T('entonces; pues'), 'فَفَهِمَ'],
        [T('أَمْ'), T('o'), 'أَمْ حُمْرٌ'],
        [T('لَكِنْ'), T('pero'), 'لَكِنَّهُ'],
        [T('إِنَّمَا'), T('solamente'), 'إِنَّمَا بِالْحَقِّ'],
        [T('ثُمَّ'), T('entonces; después'), 'ثُمَّ قَامَ'],
      ],
    },
  ],
};

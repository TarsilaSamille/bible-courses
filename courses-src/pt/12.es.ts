import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Por, para y crasis'),
  subtitle: T('causa, finalidad y a + a = à'),
  section: T('Los conectivos'),
  body: C(`## Por y para: una preposición, cinco sentidos

**Por** introduce causa, agente, medio, cambio y duración: {por amor} (causa), {por Deus} (agente), {por meio de} (medio), {por dois dias} (duración), {por mil reais} (cambio). **Para** introduce destino, finalidad, dirección y plazo: {para Deus} (destino), {para orar} (finalidad), {para amanhã} (plazo).

Lo que decide es el contexto, y la misma construcción cambia de sentido: {por mim} puede ser «por mi causa» o «en mi opinión», mientras {para mim} es «para mi bien» o «en mi opinión». Son dos caras de una misma idea —**opinión**— con la preposición cambiada.

El punto para quien traduce es que el griego y el hebreo marcan esas relaciones con casos (genitivo, dativo, acusativo) y el portugués con preposiciones. Traducir caso por caso sin entender la función es donde se pierde la traducción bíblica: πορεύεσθε εἰς πᾶσαν τὴν γῆν tiene un genitivo (τὴν γῆν, «de toda la tierra») y un acusativo (πᾶσαν, «toda»), y el portugués lo resuelve con una «a» y una «en».

## La crasis es la fusión de a + a

La crasis es la fusión del artículo {a} con la preposición {a}: {vou à igreja}, {às três horas}, {à noite}. No ocurre en tres casos que quien aprende memoriza mal:

No ocurre delante de verbo: {vou orar}, no {vou à orar}. No ocurre delante de palabra masculina determinada: {dei a uma cruz}, porque {a + o} daría {ao}, y {um} es indeterminado, así que queda {a}. No ocurre delante de pronombre personal: {falou a ela}, no {falou à ela}.

Y está el caso del nombre propio: ¿{vou a Roma} o {vou à Roma}? La crasis con nombre propio femenino se acepta en la escritura, pero el uso varía y el portugués europeo prefiere {a Roma}. El punto práctico: la crasis nunca es obligatoria, y nadie yerra por no usarla.

## La trampa del italiano

El portugués toma preposiciones de todas partes —{ir a}, {vir de}—, y el italiano también ({andare a}, {venire da}). Eso crea una tentación concreta: producir crasis por imitación del italiano, viendo {a} + {la} y escribiendo {à}. Pero el italiano no tiene crasis: {a la} no es una fusión, y la correspondencia entre italiano y portugués está en el valor de la preposición, no en su forma.

Quien produce crasis por analogía con el italiano escribe mal el portugués y además añade un problema que el original no tenía.

## Criterio de lectura

Con cualquier preposición, pregúntate: ¿cuál es la función en el griego (qué caso)? ¿Es {por} causa, agente, medio, cambio o duración? ¿Es {para} destino, finalidad, dirección o plazo? ¿Y hay {a + a} fundido, o solo {a}? La tercera respuesta decide la crasis y las dos primeras deciden la preposición. Juntas resuelven la frase.`),
  vocab: [
    V('por', 'por', 'por'),
    V('para', 'para', 'para'),
    V('por amor', 'amor', 'por amor'),
    V('por Deus', 'Deus', 'por Dios'),
    V('para orar', 'orar', 'para orar'),
    V('para amanhã', 'amanhã', 'para mañana'),
    V('vou à igreja', 'ir', 'voy a la iglesia'),
    V('a uma cruz', 'cruz', 'a una cruz'),
    V('por nós', 'nós', 'por nosotros'),
    V('daria a vida', 'dar', 'daría la vida'),
    V('a', 'a', 'a (preposición)'),
    V('à', 'a', 'a la (a + a, crasis)'),
    V('igreja', 'igreja', 'iglesia'),
    V('orar', 'orar', 'orar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración usa {por} como causa?'),
    options: [
      T('Cristo murió por nosotros.'),
      T('Voy para la ciudad.'),
      T('Salí para orar.'),
      T('Se quedó por tres días.'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «voy ___ iglesia».'),
      answer: 'à',
      hint: T('a + a forma una sola palabra.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde no hay crasis?'),
      options: [
        T('voy a la iglesia'),
        T('voy a una mujer'),
        T('entrego a María'),
        T('llegó a las cinco'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona preposición y sentido.'),
      pairs: [
        { a: T('por (agente)'), b: T('agente') },
        { a: T('para'), b: T('finalidad') },
        { a: T('por (causa)'), b: T('causa') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La crasis es la fusión de {a} (preposición) con {a} (artículo): {a + o = ao}, {a + as = às}, {a + a = à}. Donde falta la segunda {a} no hay crasis: {a uma cruz}, {a minha casa}, {a Deus}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'No hay crasis ante verbo ({vou à orar} no existe), ante pronombre personal ({falou à ela} no existe) y ante numeral cardinal ({a três dias}, no {às três dias} cuando {três} es numeral).',
      ),
    },
    {
      n: '§3',
      text: T(
        'La crasis exige el artículo definido, no cualquier {a}: {a uma cruz} se queda sin crasis porque {um} es indeterminado, y {a minha casa} se queda sin crasis porque {meu} es determinante. Con {a} determinado viene la crasis: {ao homem}, {à cidade}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{por} cubre causa, agente, medio, cambio y duración: {por amor}, {por Deus}, {por meio de}, {por dois dias}, {por mil reais}. {para} cubre destino, finalidad, dirección y plazo: {para Deus}, {para orar}, {para amanhã}. El par {por mim} y {para mim} cambia de sentido: el primero es opinión, el segundo beneficio.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego y el hebreo marcan esas relaciones con casos ({πορεύεσθε εἰς πᾶσαν τὴν γῆν}: {πᾶσαν} acusativo, {τὴν γῆν} genitivo), y el portugués resuelve con preposición y artículo: {por todo o mundo}. Decide la función, no la forma que sugiere el caso.',
      ),
    },
  ],
  notes: [
    {
      label: T('No fuerces'),
      text: T(
        'Muchas traducciones bíblicas usan «a Deus» sin crasis, y está bien: ahí {a} es preposición, no artículo. Nadie yerra por no usar crasis, porque la crasis es facultativa en todos los casos en que el uso corriente la admite.',
      ),
    },
    {
      label: T('La trampa del italiano'),
      text: T(
        'El italiano tiene {a la}, que no es ninguna fusión, y ver esa forma lleva a escribir {à}. La correspondencia entre italiano y portugués está en el valor de la preposición, nunca en la forma: quien traduce por analogía con el italiano escribe mal en portugués.',
      ),
    },
  ],
  examples: [
    { text: 'Cristo morreu por nós.', gloss: T('{por} como causa, con {nós} como beneficiario.') },
    { text: 'Entregou a vida por o povo.', gloss: T('{por} como causa beneficente inmediata.') },
    { text: 'Foi criado por Deus.', gloss: T('{por} como agente de la pasiva.') },
    { text: 'Ficou por três dias.', gloss: T('{por} como duración.') },
    { text: 'Vou para a cidade.', gloss: T('{para} como destino.') },
    { text: 'Saí para orar.', gloss: T('{para} como finalidad.') },
    { text: 'Vou à igreja.', gloss: T('{a} más {a}: la crasis.') },
    { text: 'Dei a uma cruz.', gloss: T('Sin crasis, porque {um} es indeterminado.') },
    { text: 'Falou a ela.', gloss: T('Sin crasis, porque {ela} es pronombre.') },
  ],
  tables: [
    {
      caption: T('Los cinco valores de {por}'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['causa', 'por amor', '—'],
        ['agente', 'por Deus', 'passiva de ser'],
        ['meio', 'por meio de', '—'],
        ['troca', 'por mil reais', '—'],
        ['duração', 'por três dias', '—'],
      ],
    },
    {
      caption: T('Los cuatro valores de {para}'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['destino', 'para Deus', '—'],
        ['finalidade', 'para orar', '—'],
        ['direção', 'para o norte', '—'],
        ['prazo', 'para amanhã', '—'],
      ],
    },
    {
      caption: T('Dónde hay crasis y dónde no'),
      head: ['Caso', 'Forma', 'Exemplo'],
      rows: [
        ['artigo determinado', 'há crase', 'ao homem, à cidade'],
        ['verbo', 'não há crase', 'vou orar'],
        ['pronome pessoal', 'não há crase', 'falou a ela'],
        ['indefinido', 'não há crase', 'a uma cruz'],
      ],
    },
  ],
};

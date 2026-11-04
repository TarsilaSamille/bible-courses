import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('Los casos'),
  title: T('Animado e inanimado'),
  subtitle: T('Бога y стол: dos palabras, una diferencia de flexión que el verbo delata'),
  body: C(`
## Animado es vivo, y eso cambia la forma

Animado es lo que está vivo: una persona, un animal, y por extensión una figura que la costumbre trata como persona. Inanimado es el resto: mesa, libro, luz, una idea. La distinción parece semántica y es morfológica, y aparece en dos lugares del paradigma: el acusativo del masculino singular y el plural.

El caso más visible es el acusativo del masculino singular. En un sustantivo masculino inanimado el acusativo y el nominativo tienen la misma forma: вижу стол es lo que yo veo, y вижу стола es del dueño de la mesa. Las dos frases tienen la misma palabra y verbos distintos. En un masculino animado el acusativo toma la forma del genitivo: **вижу Бога**. Las letras son las mismas en el primer par y distintas en el segundo, y la animacidad es lo que las separa.

En los otros géneros nada de eso ocurre. El femenino tiene forma propia de acusativo en -у y en -а, sea animal o no: собака, вода, душа. El neutro tiene siempre nominativo y acusativo iguales: слово, окно. La única categoría en que la animacidad cambia algo es el masculino singular, y por eso se aprende como si fuera un caso.

## El plural invierte la regla

En el plural el patrón es limpio: **el acusativo del plural animado es igual al genitivo plural**, y **el acusativo del plural inanimado es igual al nominativo plural**.

вижу собак es acusativo plural, y tiene la forma del genitivo. вижу людей es lo mismo con gente. вижу столы es acusativo plural inanimado y tiene la forma del nominativo. вижу окна es lo mismo con ventanas, y es también la forma del genitivo, que es otra coincidencia que no molesta a nadie.

El resumen cabe en una frase: en el plural, el caso del sustantivo masculino animado es invisible, porque el acusativo copió el genitivo. Quien traduce gana o pierde aquí, y lo que se pierde es la distinción entre un verbo que tiene dos objetos y uno que tiene uno.

## Las excepciones que nadie adivina

La primera es человек, y es la más importante. Hombre es masculino animado, y en el singular se comporta como usted espera: Я вижу человека, con acusativo igual al genitivo. Pero en el plural el acusativo de человек es **человек**, no людей. Eso aparece dentro de una cuenta: Я вижу пять человек, y el sustantivo queda en el nominativo porque el acusativo plural de ser humano no se marca. Es el único sustantivo del ruso que se comporta así, y después de день es el más común.

La segunda es кукла. Una muñeca tiene cara y manos, y es inanimada: Я вижу куклу, con la -у de acusativo del femenino. Lo mismo con робот. El criterio es lo que la lengua cuenta como vivo, y una cosa que se parece a una persona no es una persona.

La tercera es мертвец. Un cadáver está muerto y es animado: Я вижу мертвеца. La palabra fija el género y la animacidad a la vez, y por eso aparece en los ejercicios.

Y está el caso contrario, más raro y más productivo: посол, embajador, y судья, juez, son masculino animado y llevan la señal -л o -ья precisamente por eso. NOMINATIVO посол, ACUSATIVO посла. Son las dos palabras-flexbox más largas del ruso en -л que no son participios.

## El gancho: quién es el sujeto en Juan 1:29

**На другой день видит Иоанн идущего к нему Иисуса и говорит: вот Агнец Божий, Который берёт на Себя грех мира.** Quien busca el objeto de берёт se encuentra con Который. Si Который fuera el objeto sería Которого: un masculino animado en acusativo es genitivo. El texto trae Который, que es nominativo, y por lo tanto Который es el sujeto.

El objeto está en грех, que es masculino inanimado, y por eso su acusativo es el nominativo: el verbo cae sobre грех sin marca ninguna. Un versículo, dos sustantivos, y la animacidad de cada uno es lo que reparte el sujeto y el objeto. Quien no sepa la regla lee Который como objeto y llega al sentido invertido sin notar dónde se equivocó.
`),
  vocab: [
    V('собака', 'собака', 'perro; femenino'),
    V('стол', 'стол', 'mesa; masculino inanimado'),
    V('Бога', 'бог', 'a Dios; acusativo de un masculino animado'),
    V('людей', 'человек', 'gente; genitivo y acusativo plural'),
    V('человек', 'человек', 'ser humano; la única excepción en el plural'),
    V('пять человек', 'человек', 'cinco personas; sustantivo en el nominativo'),
    V('кукла', 'кукла', 'muñeca; femenino pese a tener forma de persona'),
    V('робот', 'робот', 'robot; inanimado'),
    V('мертвец', 'мертвец', 'cadáver; masculino animado'),
    V('посол', 'посол', 'embajador; masculino animado en -л'),
    V('судья', 'судья', 'juez; masculino animado en -ья'),
    V('Агнец', 'агнец', 'el Cordero; masculino'),
    V('Который', 'который', 'el cual; nominativo masculino'),
    V('грех', 'грех', 'pecado; masculino inanimado'),
    V('вижу собак', 'собака', 'veo perros; acusativo igual al genitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En вижу Бога, ¿qué caso es Бога?'),
    options: [T('Acusativo, porque es masculino'), T('Genitivo, no acusativo'), T('Nominativo')],
    answer: 1,
    hint: T(
      'Un masculino animado tiene acusativo igual al genitivo. Бога es la forma del genitivo de бог.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Я вижу ___ (el perro)'), answer: 'собаку' },
    {
      kind: 'choose',
      prompt: T('En Я вижу пять ___, el sustantivo está en...'),
      options: [T('genitivo plural'), T('nominativo'), T('acusativo plural')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Я вижу ___ (el embajador)'), answer: 'посла' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'En el masculino singular el acusativo del animado es el genitivo: {вижу Бога}. En el inanimado es el nominativo: {вижу стол}.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el plural el acusativo del animado es el genitivo plural ({вижу собак}) y el del inanimado es el nominativo plural ({вижу столы}).',
      ),
    },
    {
      n: '3',
      text: T(
        'En los otros géneros la animacidad no cambia nada: el femenino tiene acusativo -{у} y el neutro tiene acusativo igual al nominativo.',
      ),
    },
    {
      n: '4',
      text: T(
        '{человек} es la excepción: en el plural su acusativo es {человеку} igual al nominativo, y aparece en cuentas ({пять} {человек}).',
      ),
    },
    {
      n: '5',
      text: T(
        '{Кукла} y {робот} son inanimados; {мертвец}, {посол} y {судья} son animados. El criterio es lo que la lengua cuenta como vivo, no el aspecto.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por qué sólo el masculino singular'),
      text: T(
        'La regla parece arbitraria porque es el resultado de dos decisiones independientes. El femenino ya tenía una señal de acusativo propia, la -у, y el neutro ya tenía la misma forma en nominativo y en acusativo. Sólo el masculino no tenía nada, y ahí entró la animacidad para dar una señal. Por eso aparece sólo allí.',
      ),
    },
    {
      label: T('La excepción que atasca una traducción'),
      text: T(
        'Пять человек es un contador de personas: el sustantivo va al nominativo plural y el numeral marca el caso por posición. Una traducción a una lengua con artículo tiene que decidir entre cinco personas y cinco persona, y esa decisión es del traductor, no del texto. Quien lea junto al griego encuentra el mismo phenomenon en el genitivo griego, y el mismo impasse.',
      ),
    },
  ],
  examples: [
    {
      text: 'вижу стол',
      gloss: T('veo la mesa; masculino inanimado, acusativo igual al nominativo'),
    },
    { text: 'вижу Бога', gloss: T('veo a Dios; masculino animado, acusativo igual al genitivo') },
    { text: 'вижу собаку', gloss: T('veo el perro; femenino, la -у es el acusativo') },
    { text: 'вижу слово', gloss: T('veo la palabra; neutro, acusativo igual al nominativo') },
    { text: 'вижу собак', gloss: T('veo perros; acusativo plural animado, igual al genitivo') },
    { text: 'вижу столы', gloss: T('veo mesas; acusativo plural inanimado, igual al nominativo') },
    {
      text: 'Я вижу пять человек',
      gloss: T('veo cinco personas; el sustantivo queda en el nominativo'),
    },
    { text: 'Я вижу посла', gloss: T('veo al embajador; masculino animado en -л') },
    { text: 'Я вижу куклу', gloss: T('veo la muñeca; inanimada pese al aspecto') },
    {
      text: 'вот Агнец Божий, Который берёт на Себя грех мира',
      gloss: T('he aquí el Cordero de Dios, que quita el pecado del mundo (Jn 1:29)'),
    },
  ],
  tables: [
    {
      caption: T('Los tres casos que se confunden en el masculino singular'),
      head: [
        T('Sustantivo'),
        T('Género y animacidad'),
        T('Nominativo'),
        T('Genitivo'),
        T('Acusativo'),
      ],
      rows: [
        [T('стол, mesa'), T('masculino inanimado'), T('стол'), T('стола'), T('стол')],
        [T('Бог, Dios'), T('masculino animado'), T('Бог'), T('Бога'), T('Бога')],
        [T('посол, embajador'), T('masculino animado en -л'), T('посол'), T('посола'), T('посла')],
        [T('собака, perro'), T('femenino'), T('собака'), T('собаки'), T('собаку')],
        [T('вода, agua'), T('femenino'), T('вода'), T('воды'), T('воду')],
        [T('слово, palabra'), T('neutro'), T('слово'), T('слова'), T('слово')],
        [T('окно, ventana'), T('neutro'), T('окно'), T('окна'), T('окно')],
      ],
    },
    {
      caption: T('El plural, que invierte la regla'),
      head: [
        T('Sustantivo'),
        T('Nominativo plural'),
        T('Genitivo plural'),
        T('Acusativo plural'),
        T('¿Cuál de los dos?'),
      ],
      rows: [
        [T('стол'), T('столы'), T('столов'), T('столы'), T('el nominativo, porque es inanimado')],
        [T('собака'), T('собаки'), T('собак'), T('собак'), T('el genitivo, porque es animada')],
        [
          T('окно'),
          T('окна'),
          T('окон'),
          T('окна'),
          T('el nominativo, y el genitivo no se distingue'),
        ],
        [T('слово'), T('слова'), T('слов'), T('слова'), T('el nominativo')],
        [T('человек'), T('люди'), T('людей'), T('человек'), T('la excepción: el nominativo')],
      ],
    },
    {
      caption: T('Quién es animado y quién no'),
      head: [T('Animado'), T('Inanimado')],
      rows: [
        [T('Бог, человек, собака, лошадь, Иисус'), T('стол, книга, слово, свет, дом')],
        [T('посол, судья, мертвец, старец'), T('кукла, робот, идол, манекен')],
        [T('рыба, птица, бабочка'), T('камень, дерево, река, звезда')],
      ],
    },
  ],
};

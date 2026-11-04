import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('El verbo: presente y aspecto'),
  title: T('Cómo se forma el par de aspecto'),
  subtitle: T('prefijo, sufijo y supletividad, y los verbos que no tienen par'),
  body: C(`
## Tres caminos hacia el perfectivo

No todo perfectivo tiene prefijo, y no todo verbo con prefijo es perfectivo. El par se forma por tres caminos, y conviene saber cuál es cuál, porque el tercero no tiene nada que ver con los otros dos.

El camino del prefijo es el más común y el más productivo: написать viene de писать, сделать de делать, прочитать de читать. El prefijo pone una frontera en la acción y nace el perfectivo. El camino del sufijo cambia la terminación del infinitivo sin cambiar la raíz: отвечать y ответить, решать y решить, замечать y заметить. El camino supletivo cambia la raíz por completo, y ahí no hay nada derivable: говорить y сказать, брать y взять, давать y дать.

Y hay un cuarto caso, que deshace la idea de que el perfectivo nazca siempre de un imperfectivo: нести es imperfectivo y нёс es perfectivo, sin prefijo ninguno. El perfectivo no sale del imperfectivo por derivación; a veces los dos son verbos distintos que el uso junta en un par.

## Qué hace cada prefijo

Un prefijo no es adorno. Dice en qué dirección o en qué límite ocurre la acción, y por eso dos verbos con prefijos distintos son verbos distintos.

По- pone un límite de duración: почитать es leer un poco, por un tiempo, y no es lo mismo que leer entero. Вы- saca de un espacio cerrado: выйти es salir hacia fuera, y la preposición que lo rige es из, genitivo. У- marca alejamiento y, en algunos verbos, el llegar al fin de una búsqueda: уйти, узнать, услышать. Под- es acercamiento parcial: подойти, подъехать, sin llegar. Пере- repite o cambia de lugar: переписать, переехать. За- marca el comienzo de algo que dura, y es el prefijo más usado del ruso.

El prefijo está en el perfectivo, y casi sólo allí. Si un verbo tiene prefijo y está en pasado, es perfectivo, y el contexto va a pedir una lectura de resultado.

## Los verbos que no tienen par

Hay verbos que no tienen par, y hay verbos que tienen sólo un lado. **Быть, мочь y хотеть no tienen aspecto**: no hay un perfectivo de быть, ni un imperfectivo de мочь, y el contexto es lo que resuelve. Son los tres verbos más frecuentes de la lengua después del ser, y eso hace del problema el más visible.

También hay verbos que existen sólo en imperfectivo, y son muchos: ждать, спать, стоять, лежать, сидеть, жить, идти, ехать, бежать, нести. Para ellos el perfectivo viene por fuera, a veces con prefijo (поспать, подождать) y a veces por supletividad (лежать y лечь, сидеть y сесть, стоять y стать).

Cuando no hay par, el recurso es el verbo мочь más el infinitivo. Я могу прийти dice que venir es posible, y así es como una frase rusa resuelve lo que en portugués se resuelve con el subjuntivo o con el futuro.

## El gancho: una palabra que cambia de versículo a versículo

**И Слово стало плотию, и обитало с нами, полное благодати и истины.** Tres verbos, tres decisiones de aspecto, y las dos primeras están entre las más interesantes de la lengua.

Стало es perfectivo, y es el perfectivo de быть, que no tiene aspecto. Es el caso límite: un verbo sin aspecto engendra su perfectivo, y el resultado es una palabra que significa volverse, pasar de un estado a otro. Quien traduzca стало por "era" borra exactamente eso: el versículo de Juan 1:1 usa было, y el de 1:14 usa стало, y la diferencia entre los dos es la diferencia entre ser y volverse.

Обитало es imperfectivo, y no por casualidad. Describe la permanencia, no un acto: la Palabra quedó, y quedarse no tiene comienzo ni fin que se pueda marcar. El perfectivo de ese campo semántico no cabe en la misma frase, y el texto no lo usa.

Полное es un participio corto, y no un verbo. Concuerda en género y número con Слово, y por eso es neutro. Si el texto hubiera dicho исполненное, la forma sería larga y el caso quedaría marcado; con la forma corta el caso viene del contexto y no de la terminación. Son dos cosas que sólo enseña la lectura de un texto real.
`),
  vocab: [
    V('отвечать', 'отвечать', 'responder; imperfectivo'),
    V('ответить', 'ответить', 'responder; perfectivo'),
    V('нести', 'нести', 'llevar; imperfectivo'),
    V('нёс', 'нести', 'llevó; perfectivo, sin prefijo'),
    V('принёс', 'принести', 'trajo; perfectivo con prefijo'),
    V('почитать', 'почитать', 'leer un rato; perfectivo con по-'),
    V('выйти', 'выйти', 'salir; perfectivo con вы-'),
    V('подойти', 'подойти', 'acercarse; perfectivo con под-'),
    V('быть', 'быть', 'ser, estar; sin aspecto'),
    V('мочь', 'мочь', 'poder; sin aspecto'),
    V('хотеть', 'хотеть', 'querer; sin aspecto'),
    V('ждать', 'ждать', 'esperar; sólo imperfectivo'),
    V('лежать', 'лежать', 'estar tumbado; sólo imperfectivo'),
    V('лечь', 'лечь', 'tumbarse; perfectivo supletivo'),
    V('обитало', 'обитать', 'habitó, permaneció; imperfectivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En И Слово стало плотию, ¿qué muestra стать?'),
    options: [T('Un estado que continúa'), T('Un cambio de estado'), T('Un hábito')],
    answer: 1,
    hint: T(
      'Стать es el perfectivo de ser. Marca el paso de un estado a otro, y por eso Juan 1:1 tiene было y 1:14 tiene стало.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete el perfectivo de лежать'), answer: 'лечь' },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo no tiene aspecto?'),
      options: [T('ждать'), T('мочь'), T('написать')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он ___ с нами (permaneció)'), answer: 'обитал' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El par de aspecto se forma por tres caminos: prefijo ({написать}), sufijo ({ответить}) y supletividad ({сказать}).',
      ),
    },
    {
      n: '2',
      text: T(
        'No todo perfectivo sale de un imperfectivo: {нести} y {нёс} son verbos distintos, sin derivación.',
      ),
    },
    {
      n: '3',
      text: T(
        'El prefijo dice dirección o límite: {по}- limita la duración, {вы}- saca de dentro, {под}- se acerca sin llegar, {пере}- repite.',
      ),
    },
    { n: '4', text: T('{Быть}, {мочь} y {хотеть} no tienen aspecto.') },
    {
      n: '5',
      text: T(
        'Los verbos que sólo existen en imperfectivo reciben el perfectivo por prefijo ({поспать}) o por supletividad ({лечь}).',
      ),
    },
  ],
  notes: [
    {
      label: T('El caso límite: стать y ser'),
      text: T(
        'Стало es perfectivo y ser, a forma que não tem aspecto es la forma que no tiene aspecto. Es la única situación en que un perfectivo nace de un verbo sin par, y es frecuente precisamente porque el par más usado de la lengua es ese. El resultado es una oposición real: Juan 1:1 dice было, que es estado, y Juan 1:14 dice стало, que es cambio. Traducir los dos con una sola palabra borra la diferencia entre el Verbo que es y el Verbo que se hace.',
      ),
    },
    {
      label: T('Cuando no hay par, мочь resuelve'),
      text: T(
        'Un verbo sin perfectivo necesita otro camino, y el camino estándar es мочь más el infinitivo. Я могу прийти no dice que yo vine, dice que venir está a mi alcance, y en un contexto de posibilidad es exactamente lo que resuelve el subjuntivo en portugués. Quien traduce y encuentre un perfectivo donde el ruso no tiene forma debe buscar este recurso antes de buscar un sinónimo.',
      ),
    },
  ],
  examples: [
    { text: 'отвечать на письмо', gloss: T('responder a una carta; imperfectivo') },
    { text: 'ответил на письмо', gloss: T('respondió a la carta; perfectivo') },
    { text: 'нёс сумку', gloss: T('llevaba la maleta; imperfectivo') },
    { text: 'принёс сумку', gloss: T('trajo la maleta; perfectivo con prefijo') },
    { text: 'почитать книгу', gloss: T('leer un libro un rato; perfectivo con по-') },
    { text: 'ждать', gloss: T('esperar; sólo imperfectivo') },
    { text: 'лежать', gloss: T('estar tumbado; sólo imperfectivo') },
    { text: 'лечь', gloss: T('tumbarse; perfectivo supletivo') },
    { text: 'Я могу прийти', gloss: T('puedo venir; recurso para lo que no tiene perfectivo') },
    {
      text: 'И Слово стало плотию, и обитало с нами',
      gloss: T('y el Verbo se hizo carne y habitó entre nosotros (Jn 1:14)'),
    },
  ],
  tables: [
    {
      caption: T('Los tres caminos del par de aspecto'),
      head: [T('Imperfectivo'), T('Perfectivo'), T('Camino'), T('Qué cambia')],
      rows: [
        [T('писать'), T('написать'), T('prefijo'), T('la acción gana una frontera')],
        [T('отвечать'), T('ответить'), T('sufijo'), T('cambia la terminación del infinitivo')],
        [T('говорить'), T('сказать'), T('supletividad'), T('cambia la raíz entera')],
        [T('брать'), T('взять'), T('supletividad'), T('cambia la raíz entera')],
        [T('нести'), T('нёс'), T('par sin prefijo'), T('no hay derivación ninguna')],
        [T('лежать'), T('лечь'), T('supletividad'), T('cambia la raíz entera')],
      ],
    },
    {
      caption: T('Qué añade cada prefijo'),
      head: [T('Prefijo'), T('Añade'), T('Verbo'), T('Glosa')],
      rows: [
        [T('по-'), T('un límite de duración'), T('почитать'), T('leer un rato')],
        [T('вы-'), T('salida de un espacio'), T('выйти'), T('salir')],
        [T('у-'), T('alejamiento o fin de la búsqueda'), T('уйти, узнать'), T('irse, averiguar')],
        [T('под-'), T('acercamiento sin llegada'), T('подойти'), T('acercarse')],
        [T('пере-'), T('repetición o cambio de lugar'), T('переписать'), T('reescribir')],
        [T('за-'), T('el comienzo de lo que dura'), T('запеть'), T('empezar a cantar')],
      ],
    },
    {
      caption: T('Los verbos sin par'),
      head: [T('Verbo'), T('¿Tiene perfectivo?'), T('Cómo se resuelve'), T('Ejemplo')],
      rows: [
        [T('быть'), T('no'), T('se opone a стать'), T('было y стало')],
        [T('мочь'), T('no'), T('no lo necesita'), T('могу говорить')],
        [T('хотеть'), T('no'), T('no lo necesita'), T('хочу сказать')],
        [T('ждать'), T('sí, por prefijo'), T('подождать'), T('ждал y подождал')],
        [T('спать'), T('sí, por prefijo'), T('поспать'), T('спал y поспал')],
        [T('лежать'), T('sí, por supletividad'), T('лечь'), T('лежал y лёг')],
      ],
    },
  ],
};

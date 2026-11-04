import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('El verbo: phrasal verbs y la partícula separable'),
  subtitle: T('turn off the light, turn the light off — qué se separa'),
  section: T('El verbo'),
  body: C(`## La partícula se puede mover

Un phrasal verb es verbo más partícula, y la partícula puede ocupar tres posiciones. Con objeto nombrado, la forma más común deja la partícula pegada al verbo: {turn off the light}. La segunda pone la partícula al final: {turn the light off}. Con pronombre solo hay una posición posible: {turn it off}, porque el pronombre tiene que ir justo detrás del verbo.

Con gerundio la partícula vuelve detrás del verbo: {turning the light off} y no {turning off the light}. Escribir {turning off the light} produce una frase ambigua, en la que el gerundio puede estar modificando la luz.

La regla práctica cabe en una línea: **verbo, partícula, objeto**. Cuando el objeto es un pronombre va en el medio.

## La lista corta de los que no se separan

Hay phrasal verbs cuya partícula **nunca** se mueve, y {look after} es el caso más conocido. {I look after the dog} está bien y {I look the dog after} está mal.

La razón es que esas partículas funcionan como preposición, y una preposición no se separa de su verbo. Por eso la lista es corta: {look after}, {look into}, {get on with}, {put up with}, {cope with}, {run out of}, {stand by}, {take after}.

La prueba para saber si una unidad se separa es sencilla: forma la frase con un pronombre detrás del verbo. {Turn it off} funciona y demuestra que {turn off} se separa; {look it after} no funciona y demuestra que {look after} no se separa.

## La partícula y lo que añade

La partícula casi nunca significa solo "a algún sitio". {On} es apoyo y contacto, {off} es retirada, {out} es hacia fuera o conclusión, {up} es hacia arriba o aumento, {down} es hacia abajo o disminución, {away} es alejamiento, {back} es retorno.

El valor cambia con el verbo, y por eso la unidad se aprende entera. {Give up} es desistir, {give in} es ceder, {give out} es distribuir o agotar, {give away} es regalar o denunciar: cuatro partículas y cuatro verbos.

## Qué hace la KJV con la partícula

La KJV usa phrasal verbs con frecuencia y sin pedir permiso: {he shall take up serpents}, {put on the armour of righteousness}, {put off anger}, {let not your hands be slack}.

Marcos 16:18 trae {take up} en el sentido de recoger hacia arriba, que es el sentido original y casi el único de {take up}: levantar algo del suelo. El sentido moderno de "comprender" ({I take up your offer}) es muy posterior y no aparece en el texto bíblico.

Lo mismo vale para {put on}: en Romanos 13:14 es vestir, metafóricamente vestir la armadura, y no poner una cosa sobre otra.`),
  vocab: [
    V('turn off', 'turn', 'apagar, desconectar'),
    V('turn the light off', 'turn', 'apagar la luz'),
    V('turn it off', 'turn', 'apagarlo'),
    V('look after', 'look', 'cuidar de'),
    V('look into', 'look', 'investigar'),
    V('get on with', 'get', 'llevarse bien con'),
    V('put up with', 'put', 'aguantar'),
    V('cope with', 'cope', 'lidiar con'),
    V('run out of', 'run', 'quedarse sin'),
    V('stand by', 'stand', 'apoyar, estar cerca'),
    V('give up', 'give', 'desistir'),
    V('give in', 'give', 'ceder'),
    V('give away', 'give', 'regalar, denunciar'),
    V('take up', 'take', 'recoger, levantar'),
    V('put on', 'put', 'vestir'),
    V('put off', 'put', 'despojarse de'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Con objeto nombrado la partícula puede quedar pegada al verbo o ir al final; con pronombre tiene que ir en el medio.',
      ),
    },
    {
      n: '2',
      text: T('Con gerundio la partícula vuelve detrás del verbo: turning the light off.'),
    },
    {
      n: '3',
      text: T(
        'Look after, look into, get on with, put up with, cope with, run out of y stand by no se separan, porque la partícula funciona como preposición.',
      ),
    },
    {
      n: '4',
      text: T(
        'La prueba de separabilidad es la frase con pronombre: turn it off funciona, look it after no.',
      ),
    },
    {
      n: '5',
      text: T(
        'La partícula añade un sentido al verbo, y el sentido cambia de verbo a verbo: give up, give in, give away.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Marcos 16:18 trae take up en el sentido físico de levantar del suelo. El sentido moderno de comprender es muy posterior y no aparece en la KJV.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Si alguien escribe I look the dog after, el problema no es la posición de la partícula: es que look after no se separa, y la lista de los que no se separan es corta.',
      ),
    },
  ],
  examples: [
    { text: '{turn off the light}', gloss: T('apaga la luz') },
    { text: '{turn the light off}', gloss: T('apaga la luz — partícula al final') },
    { text: '{turn it off}', gloss: T('apágalo — pronombre en el medio') },
    { text: '{turning the light off}', gloss: T('apagando la luz — gerundio') },
    { text: '{I look after the dog}', gloss: T('yo cuido del perro') },
    { text: '{I look the dog after}', gloss: T('mal: look after no se separa') },
    { text: '{I cannot put up with it}', gloss: T('no puedo aguantar eso') },
    { text: '{we ran out of bread}', gloss: T('nos quedamos sin pan') },
    { text: '{he shall take up serpents}', gloss: T('levantará serpientes — KJV') },
    { text: '{put on the armour of righteousness}', gloss: T('vestir la armadura de la justicia') },
  ],
  tables: [
    {
      caption: T('Dónde puede quedar la partícula'),
      head: [T('Tipo de objeto'), T('Partícula pegada'), T('Partícula al final')],
      rows: [
        [T('nombre'), '{turn off the light}', '{turn the light off}'],
        [T('pronombre'), T('—'), '{turn it off}'],
        [T('gerundio'), T('—'), '{turning the light off}'],
        [T('cláusula relativa'), T('—'), '{the light he turned off}'],
      ],
    },
    {
      caption: T('Los que no se separan'),
      head: [T('Unidad'), T('Por qué no se separa'), T('Frase de prueba')],
      rows: [
        ['{look after}', T('la partícula es preposición'), '{I look after him}'],
        ['{get on with}', T('la partícula es preposición'), '{I get on with him}'],
        ['{put up with}', T('la partícula es preposición'), '{I put up with it}'],
        ['{run out of}', T('la partícula es preposición'), '{I ran out of it}'],
        ['{stand by}', T('la partícula es preposición'), '{I stand by him}'],
      ],
    },
    {
      caption: T('Lo que añade la partícula'),
      head: [T('Partícula'), T('Sentido nuclear'), T('Con give')],
      rows: [
        ['{on}', T('apoyo, contacto'), T('—')],
        ['{off}', T('retirada, separación'), T('—')],
        ['{up}', T('aumento, conclusión'), '{give up}'],
        ['{out}', T('extinción, distribución'), '{give out}'],
        ['{away}', T('alejamiento, donación'), '{give away}'],
        ['{in}', T('rendición'), '{give in}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál frase es correcta?'),
    options: [T('Turn off it'), T('Turn it off'), T('Turn off the it'), T('Turn the it off')],
    answer: 1,
    hint: T('Con pronombre la partícula va al final: verbo, pronombre, partícula.'),
  },
  exercises: [
    { kind: 'fill', prompt: T("Completa: 'Please switch ___ the light.'"), answer: 'off' },
    { kind: 'fill', prompt: T("No se separa: 'I look ___ my little sister.'"), answer: 'after' },
    {
      kind: 'match',
      prompt: T('Relaciona la unidad con su sentido.'),
      pairs: [
        { a: 'give up', b: T('desistir') },
        { a: 'give away', b: T('denunciar') },
        { a: 'put up with', b: T('aguantar') },
        { a: 'run out of', b: T('quedarse sin') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál frase es correcta?'),
      options: [
        T('I look the dog after'),
        T('I look after the dog'),
        T('I look the after dog'),
        T('I look after dog the'),
      ],
      answer: 1,
    },
  ],
};

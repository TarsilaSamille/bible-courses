import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Nombre'),
  title: T('El sustantivo y sus tres géneros'),
  subtitle: T('το παιδί — η γυναίκα — ο άνθρωπος'),
  body: C(`## El neutro que el español no tiene

El griego moderno tiene tres géneros y el español tiene dos. El tercero es el neutro, y aparece justo en la palabra que el español flexiona sin darse cuenta: {το παιδί} es neutro en griego, y el niño es "el niño" en español. No existe forma española para ese neutro, y por eso el artículo griego necesita tres series en vez de dos.

Un síntoma rápido: cuando la cosa es pequeña, joven o está hecha para usarse, casi siempre es neutra. {το σπίτι}, {το παιδί}, {το φεγγάρι}. No es una regla, es estadística, y la estadística basta para adivinar.

## El género es la etimología a la vista

El género griego no es sorteo. Es la terminación antigua de la palabra, y la flexión lo perdió casi todo pero dejó esa marca. El griego antiguo pluralizaba λόγος en λόγοι y παιδίον en παιδία; el moderno congeló la {-ος} en el masculino y la {-ο} en el neutro. Quien reconoce la terminación reconoce el género sin memorizar nada.

Eso cambia la manera de memorizar. {ο άνθρωπος} no es "un sustantivo masculino": es "un sustantivo en -ος", y las dos frases dicen lo mismo.

## Lo que da la terminación y lo que no

Las terminaciones regulares son fuertes. En {-μα} cae casi solo neutro: {το πρόβλημα}, {το σύμπτωμα}, {το νόμισμα}. Son nombres de resultado o de acción, y los resultados son neutros. En {-ση} cae solo femenino: {η τιμή}, {η οικογένεια}. En {-τής} cae solo masculino, y casi siempre es un agente: {ο καθηγητής}, {ο στρατιώτης}.

Lo que no da es la etimología léxica. {ο ήλιος} es masculino y {το φεγγάρι} es neutro, y ninguna terminación dice por qué. {ο λέων} es masculino sin rastro de regla. Son dos o tres palabras que hay que aprender, no dos o tres reglas que haya que encontrar.

## Dónde aparece esto en la Biblia

> Καὶ ἐκ τοῦ πληρώματος αὐτοῦ ἐπληρώθημεν πάντες, καὶ χάριν ἀντὶ χάριτος ἔλαβον.

En esa frase, {πλήρωμα} es neutro y {λόγος}, en la frase anterior, es masculino. El griego los distingue sin esfuerzo, porque lleva el género en cada palabra. Quien traduce al español tiene que elegir una palabra española para cada uno y pierde el contraste: πλήρωμα se vuelve "plenitud", un sustantivo abstracto que en español ya no tiene género.`),
  vocab: [
    V('το παιδί', 'το παιδί', 'el niño'),
    V('η γυναίκα', 'η γυναίκα', 'la mujer'),
    V('ο άνθρωπος', 'ο άνθρωπος', 'el hombre, la persona'),
    V('λόγος', 'λόγος', 'la palabra'),
    V('το σπίτι', 'το σπίτι', 'la casa'),
    V('το πρόβλημα', 'το πρόβλημα', 'el problema'),
    V('το σύμπτωμα', 'το σύμπτωμα', 'el síntoma'),
    V('το νόμισμα', 'το νόμισμα', 'la moneda'),
    V('η τιμή', 'η τιμή', 'el honor'),
    V('η οικογένεια', 'η οικογένεια', 'la familia'),
    V('πλήρωμα', 'πλήρωμα', 'la plenitud'),
    V('ο καθηγητής', 'ο καθηγητής', 'el profesor'),
    V('ο στρατιώτης', 'ο στρατιώτης', 'el soldado'),
    V('ο λέων', 'ο λέων', 'el león'),
    V('ο ήλιος', 'ο ήλιος', 'el sol'),
    V('το φεγγάρι', 'το φεγγάρι', 'la luna'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El artículo delata el género: το παιδί es neutro, y el español obliga a decir "el niño".',
      ),
    },
    {
      n: '§2',
      text: T('La terminación da el género: -ος masculino, -η/-α femenino, -ι/-ο neutro.'),
    },
    { n: '§3', text: T('En -μα cae solo neutro; en -ση solo femenino; en -τής solo masculino.') },
    {
      n: '§4',
      text: T(
        'Aprende el sustantivo con su artículo, nunca solo: el artículo es lo que carga el género.',
      ),
    },
  ],
  notes: [
    {
      label: T('Fuente'),
      text: T(
        'El griego de las citas bíblicas aparece con acentos polifónicos, como en la edición crítica; el resto de la lección usa griego moderno con un solo acento.',
      ),
    },
    {
      label: T('Cuidado'),
      text: T(
        'ο ήλιος y το φεγγάρι no obedecen a ninguna regla de terminación. Ninguna palabra lo hace, y saber cuáles son las excepciones vale más que buscar una regla que no existe.',
      ),
    },
  ],
  examples: [
    { text: 'το παιδί κοιμάται', gloss: T('el niño duerme') },
    { text: 'η γυναίκα μιλάει', gloss: T('la mujer habla') },
    { text: 'ο άνθρωπος δουλεύει', gloss: T('el hombre trabaja') },
    { text: 'το σπίτι είναι μικρό', gloss: T('la casa es pequeña') },
    { text: 'το πρόβλημα είναι μεγάλο', gloss: T('el problema es grande') },
    { text: 'η οικογένεια είναι εδώ', gloss: T('la familia está aquí') },
    { text: 'ο καθηγητής έρχεται', gloss: T('el profesor viene') },
    { text: 'το φεγγάρι είναι πιο καλή', gloss: T('la luna está más bonita') },
  ],
  tables: [
    {
      caption: T('Los tres géneros con el artículo'),
      head: ['Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['ο λέων', 'η τιμή', 'το πρόβλημα'],
        ['ο ήλιος', 'η οικογένεια', 'το φεγγάρι'],
      ],
    },
    {
      caption: T('La terminación que delata el género'),
      head: ['Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['-τής', '-ση', '-μα'],
        ['ο καθηγητής', 'η τιμή', 'το πρόβλημα'],
        ['ο στρατιώτης', 'η δουλειά', 'το σύμπτωμα'],
      ],
    },
    {
      caption: T('Género por número'),
      head: ['Αριθμός', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['ένα', 'ο άνθρωπος', 'η γυναίκα', 'το παιδί'],
        ['πολλοί', 'οι άνθρωποι', 'οι γυναίκες', 'τα παιδιά'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de estos es neutro?'),
    options: [T('το παιδί'), T('ο άνθρωπος'), T('η γυναίκα'), T('ο ήλιος')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('___ παιδί κοιμάται'), answer: 'το', hint: T('Artículo neutro') },
    {
      kind: 'choose',
      prompt: T('¿Qué terminación aparece solo en el femenino?'),
      options: [T('-τής'), T('-ση'), T('-μα'), T('-ος')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Género de cada sustantivo'),
      pairs: [
        { a: 'ο καθηγητής', b: T('masculino') },
        { a: 'η οικογένεια', b: T('femenino') },
        { a: 'το πρόβλημα', b: T('neutro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'choose',
      prompt: T('En "το πρόβλημα", ¿qué revela el artículo?'),
      options: [
        T('que es masculino'),
        T('que es femenino'),
        T('que es neutro'),
        T('que es indefinido'),
      ],
      answer: 2,
    },
  ],
};

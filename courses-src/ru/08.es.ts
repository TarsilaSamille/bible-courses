import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Los seis casos'),
  subtitle: T('genitivo — dativo — instrumental — preposicional'),
  section: T('Los casos'),
  body: C(
    'La declinación rusa marca relaciones sintácticas. El genitivo expresa posesión u origen: слово Бога, «la palabra de Dios»; tras нет, «no hay»: нет хлеба. El dativo marca destinatario o interés: Богу, «a Dios»; Бога благослови, «bendice a Dios». El instrumental expresa medio, compañía, lugar en algunos usos fijos y tiempo: с Богом, «con Dios»; утром, «por la mañana». El preposicional aparece con preposición: в начале, «al comienzo»; о Боге, «acerca de Dios». Cuando el sustantivo termina en -о o -е, el preposicional puede añadir -м: о Боге, pero о слове. El instrumental plural de los sustantivos en -а/-я es -ами/-ями: делами. El genitivo y el acusativo singular coinciden en los sustantivos masculinos animados. Los sentidos entre paréntesis son pistas, no traducciones universales.',
  ),
  vocab: [
    V('Богу', 'бог', 'a Dios; dativo'),
    V('Богом', 'бог', 'con Dios; instrumental'),
    V('о Боге', 'бог', 'sobre Dios; prepositivo'),
    V('мне', 'я', 'a mí; dativo de я'),
    V('тебе', 'ты', 'a ti; dativo de ты'),
    V('Отче', 'отец', 'Oh Padre; vocativo'),
    V('нет хлеба', 'нет', 'no hay pan; el negador pide genitivo'),
    V('хлеба', 'хлеб', 'pan; genitivo singular'),
    V('утром', 'утро', 'por la mañana; instrumental'),
    V('врачом', 'врач', 'médico; instrumental'),
    V('о слове', 'слово', 'sobre la palabra; prepositivo'),
    V('словами', 'слово', 'con palabras; instrumental plural'),
    V('к Богу', 'бог', 'a Dios; к rige el dativo'),
    V('с неба', 'небо', 'del cielo; aquí с rige el genitivo'),
    V('у Бога', 'бог', 'junto a Dios; у rige el genitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué caso aparece en с Богом?'),
    options: [T('Dativo'), T('Instrumental'), T('Genitivo')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa el instrumental: кн…'), answer: 'ы' },
    { kind: 'fill', prompt: T('Completa: о Б… (preposicional de бог)'), answer: 'оге' },
    {
      kind: 'choose',
      prompt: T('¿Qué caso sigue a нет?'),
      options: [T('Nominativo'), T('Genitivo'), T('Instrumental')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('El genitivo marca posesión y ausencia: {слово Бога} y {нет хлеба}.') },
    {
      n: '2',
      text: T(
        'El dativo marca destinatario: en {Бога благослови} es el bendecido el que va en dativo, no quien bendice.',
      ),
    },
    {
      n: '3',
      text: T('El instrumental marca medio, compañía y tiempo: {с Богом}, {утром}, {быть врачом}.'),
    },
    {
      n: '4',
      text: T(
        'El preposicional nunca aparece solo: {о Боге} y {о слове} necesitan la preposición que los rige.',
      ),
    },
    {
      n: '5',
      text: T(
        'El par que se confunde es {Бога} genitivo frente a {Бога} acusativo, y solo el verbo los separa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Una forma, dos casos'),
      text: T(
        'Genitivo y acusativo coinciden en los masculinos animados singulares, y por eso {Бога} puede ser «de Dios» o «Dios» como objeto. Decide el contexto, y la terminación sola no lo dice.',
      ),
    },
    {
      label: T('El instrumental que parece preposición'),
      text: T(
        '{с} antes de {Богом} significa «con», y antes de {неба} significa «de». La diferencia no está en {с} ni en el sustantivo, sino en lo que la palabra nombra: persona pide compañía, origen pide procedencia.',
      ),
    },
  ],
  examples: [
    { text: 'слово Бога', gloss: T('la palabra de Dios; genitivo de posesión') },
    { text: 'нет хлеба', gloss: T('no hay pan; el negador {нет} exige genitivo') },
    { text: 'Бога благослови', gloss: T('bendice a Dios; el bendido va en dativo') },
    { text: 'с Богом', gloss: T('con Dios; instrumental de compañía') },
    { text: 'говорим о Боге', gloss: T('hablamos de Dios; prepositivo') },
    { text: 'о слове', gloss: T('sobre la palabra; el prepositivo nunca va solo') },
    {
      text: 'Я даю книгу другу',
      gloss: T('doy el libro al amigo; el libro es acusativo y el amigo es dativo'),
    },
    { text: 'Он был врачом', gloss: T('él fue médico; profesión en el instrumental') },
    { text: 'утром', gloss: T('por la mañana; tiempo en el instrumental') },
    { text: 'к Богу', gloss: T('a Dios; {к} rige el dativo') },
  ],
  tables: [
    {
      caption: T('Los seis casos y la pregunta que responde cada uno'),
      head: [T('Caso'), T('Pregunta'), T('Señal típica'), T('Ejemplo')],
      rows: [
        [T('nominativo'), T('¿quién lo hace?'), T('ninguna'), T('Бог')],
        [T('genitivo'), T('¿de quién, de qué?'), T('нет, у, от, до'), T('слово Бога')],
        [T('dativo'), T('¿a quién?'), T('к, помогать'), T('Бога благослови')],
        [T('acusativo'), T('¿qué?'), T('verbo transitivo'), T('вижу Бога')],
        [T('instrumental'), T('¿con qué, por qué medio?'), T('с, быть, заниматься'), T('с Богом')],
        [T('prepositivo'), T('¿dónde, sobre qué?'), T('в, на, о'), T('о Боге')],
      ],
    },
    {
      caption: T('La misma preposición, casos distintos'),
      head: [T('Preposición'), T('Sentido'), T('Caso'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('в'), T('lugar estático'), T('prepositivo'), T('вначале'), T('en el principio')],
        [T('в'), T('entrada'), T('acusativo'), T('в храм'), T('hacia el interior del templo')],
        [T('на'), T('lugar o dominio'), T('prepositivo'), T('на небе'), T('en el cielo')],
        [T('на'), T('superficie, dirección'), T('acusativo'), T('на стену'), T('sobre la pared')],
        [T('с'), T('compañía'), T('instrumental'), T('с Богом'), T('con Dios')],
        [T('с'), T('origen'), T('genitivo'), T('с неба'), T('del cielo')],
      ],
    },
    {
      caption: T('Los pares que se confunden'),
      head: [T('Forma'), T('Puede ser'), T('Decide'), T('Qué los distingue')],
      rows: [
        [
          T('Бога'),
          T('genitivo y acusativo'),
          T('el verbo'),
          T('слово Бога es posesión; вижу Бога es objeto'),
        ],
        [T('о слове'), T('prepositivo, y nada solo'), T('la preposición'), T('sin {о} es error')],
        [
          T('с неба'),
          T('genitivo, nunca instrumental'),
          T('el sentido'),
          T('с русским es instrumental'),
        ],
        [
          T('два слова'),
          T('plural y genitivo singular'),
          T('el numeral'),
          T('пять слов es plural'),
        ],
      ],
    },
  ],
};

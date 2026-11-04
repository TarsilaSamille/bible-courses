import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Ortografía'),
  subtitle: T('Mayúsculas, guion y coma'),
  section: T('Fundamentos'),
  body: C(`En la escritura alemana la mayúscula tiene función gramatical y no decorativa. Llevan mayúscula: todos los sustantivos (der Mann, die Stadt), los pronombres personales y posesivos (ich, du, mein, dein), los demostrativos que funcionan como artículo (dieser, jede, welcher), el pronombre de tratamiento Sie y el artículo definido cuando sustituye al sustantivo (der Mann → Der ist mein Freund). También llevan mayúscula los nombres propios, las nacionalidades (der Deutsche, ein Österreicher) y los sustantivos derivados de adjetivos (das Gute, das Schönste).

El guion une los componentes de un compuesto cuando se quiere conservar la lectura de los elementos: heute-morgen, blau-weiß, Sowohl-als-auch. Fuera de ese uso, el compuesto se escribe unido: Krankenhaus, Arbeitgeber.

La coma tiene una función precisa: separa el verbo conjugado del sujeto cuando ambos abren la oración, separa elementos coordinados, aísla aposiciones y marca el inicio de una oración subordinada. Aquí la oración principal es Die Liebe ist lang, y la subordinada va al final: Die Liebe ist lang, weil sie ewig bleibt. El orden de los dos verbos ya muestra por sí solo dónde empieza la subordinada.

Por último, hay un signo que los alemanes casi nunca omiten: los dos puntos antes de una cita o enumeración. El signo de interrogación y el de exclamación son obligatorios, sin punto final en ninguno de los dos casos.`),
  vocab: [
    V('der Mann', 'Mann', 'el hombre'),
    V('die Stadt', 'Stadt', 'la ciudad'),
    V('das Kind', 'Kind', 'el niño'),
    V('mein', 'mein', 'mi, mío'),
    V('Sie', 'Sie', 'usted (formal); ella (pronombre)'),
    V('das Gute', 'gut', 'el bien, lo bueno'),
    V('ein Österreicher', 'Österreicher', 'un austriaco'),
    V('der Punkt', 'Punkt', 'el punto'),
    V('das Komma', 'Komma', 'la coma'),
    V('der Doppelpunkt', 'Doppelpunkt', 'los dos puntos'),
    V('das Ausrufezeichen', 'Ausrufezeichen', 'el signo de exclamación'),
    V('das Fragezeichen', 'Fragezeichen', 'el signo de interrogación'),
    V('der Bindestrich', 'Bindestrich', 'el guion'),
    V('heute-morgen', 'heute', 'esta mañana'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué palabra está escrita correctamente?'),
    options: [T('das gute'), T('das Gute'), T('der gute'), T('die gute')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('¿Qué pronombre lleva mayúscula en todo el texto: sie o ___?'),
      answer: 'Sie',
      hint: T('Es la forma de trato cortés.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde es obligatoria la coma?'),
      options: [
        T('Wir kommen heute.'),
        T('Heute, wir kommen nicht.'),
        T('Weil wir kommen, freuen wir uns.'),
        T('Dass er kommt, ist gut.'),
      ],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sustantivo con su forma escrita.'),
      pairs: [
        { a: T('persona que ama'), b: T('die Liebe') },
        { a: T('signo de puntuación'), b: T('das Ausrufezeichen') },
        { a: T('una confelación suiza'), b: T('die Schweiz') },
      ],
      answer: ['a', 'a', 'a'],
    },
    {
      kind: 'fill',
      prompt: T('Pon los dos puntos antes de la cita: Er sagte ___ Ich komme.'),
      answer: ':',
      hint: T('Signo de dos puntos en alemán.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo sustantivo lleva mayúscula, incluidos los nombres de los días, meses, idiomas y países: der Montag, der Januar, der Deutsch.',
      ),
    },
    {
      n: '2',
      text: T(
        'El pronombre Sie es la única forma que se escribe con mayúscula en todo el texto; sie en minúscula es el pronombre femenino «ella».',
      ),
    },
    {
      n: '3',
      text: T(
        'La coma separa el sujeto del verbo cuando el sujeto va antepuesto: Die Liebe ist blind, no Liebe ist blind. No se escribe coma cuando el sujeto va pospuesto.',
      ),
    },
    {
      n: '4',
      text: T('El punto y coma es raro en alemán; prefiere la coma, el punto o una nueva oración.'),
    },
  ],
  notes: [
    {
      label: T('La mayúscula del sustantivo'),
      text: T(
        'En las lenguas germánicas antiguas la regla era la contraria: el acento caía en la última palabra, no en el sustantivo. Fueron los impresores del siglo XV quienes fijaron la mayúscula en el sustantivo, y el uso posterior solo mantuvo la costumbre.',
      ),
    },
    {
      label: T('Coma ante el sustantivo'),
      text: T(
        'La sintaxis alemana evita la aposición sin marca. Donde el portugués escribiría João, el hermano de María, el alemán prefiere una oración de relativo: Johann, der Bruder Mariens. La pausa ante el sustantivo es la marca de esa subordinada.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Mann liest die Zeitung.',
      gloss: T('El hombre lee el periódico (tres sustantivos con mayúscula).'),
    },
    { text: 'Sie kommt heute nicht.', gloss: T('Ella no viene hoy (Sie = ella).') },
    {
      text: 'Sie kommen bitte herein.',
      gloss: T('Por favor, entren (Sie = usted, trato formal).'),
    },
    {
      text: 'Das Gute ist noch nicht geschehen.',
      gloss: T('El bien todavía no ha ocurrido (adjetivo sustantivado).'),
    },
    {
      text: 'Ich bleibe, weil es regnet.',
      gloss: T('Me quedo, porque está lloviendo (coma antes de weil).'),
    },
    {
      text: 'Johann, der Bruder Mariens, kam.',
      gloss: T('Juan, el hermano de María, vino (aposición aislada por dos comas).'),
    },
  ],
  tables: [
    {
      caption: T('Lo que lleva mayúscula'),
      head: ['Categoria', 'Exemplos', 'Motivo'],
      rows: [
        ['Substantivos', 'der Baum, die Liebe, das Glück', 'regra geral: todo substantivo'],
        ['Pronomes', 'Ich, du, er, Sie', 'pronomes pessoais'],
        ['Pronomes possessivos', 'mein, dein, sein, ihr', 'sempre maiúsculos'],
        ['Pronome de tratamento', 'Sie kommen bitte herein', 'forma polida de você'],
        ['Artigo no lugar do substantivo', 'Der ist mein Lehrer.', 'substitui der Mann'],
        ['Substantivo de adjetivo', 'das Gute, das Bessere, das Schönste', 'substantivado'],
        [
          'Nomes próprios e nacionalidades',
          'Österreich, der Deutsche, die Schweiz',
          'nomes geográficos e de povos',
        ],
        ['Início de frase', 'Heute ist schönes Wetter.', 'posição inicial'],
      ],
    },
    {
      caption: T('La coma en sus dos papeles'),
      head: ['Função', 'Exemplo', 'Porquê'],
      rows: [
        ['separa sujeito e verbo', 'Heute, 12. März, fährt der Zug ab.', 'sujeito abre a oração'],
        ['marca a subordinada', 'Ich bleibe, weil es regnet.', 'weil + verbo no fim'],
        ['separa coordenadas', 'Er kam, er sah, er Sieg.', 'três verbos paralelos'],
        ['isola o aposto', 'Herr Müller, der Chef, kommt.', 'substantivo explicativo'],
        ['não se usa', 'Er sieht, dass wir kommen.', 'dentro da subordinada'],
        ['não se usa', 'Ich habe, glaube ich, recht.', 'nunca antes do verbo que fecha a oração'],
      ],
    },
  ],
};

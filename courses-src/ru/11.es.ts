import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Pronombres y posesivos'),
  subtitle: T('я — его — свой: ¿quién posee?'),
  section: T('Los pronombres y los numerales'),
  body: C(
    'Los pronombres personales se declinan en seis casos. Formas comunes: я: меня, мне, мной, обо мне; ты: тебя, тебе, тобой, о тебе; он/она/оно: его/её, ему/ей, им/ею/им, о нём/ней/нём. Los pronombres que designan personas son animados, por lo que el acusativo de он es его, no он. Tras preposición, los pronombres masculino y neutro reciben н inicial: у него, с ним, о нём. Los adjetivos posesivos concuerdan con la cosa poseída: мой, моя, моё, мои; твой; наш; ваш; его y её. El reflexivo свой significa «propio» y remite al sujeto: Я люблю свою жену, «amo a mi propia esposa». En Отче наш, наш concuerda con el vocativo Отче.',
  ),
  vocab: [
    V('меня', 'я', 'me'),
    V('его', 'он', 'él; suyo'),
    V('о нём', 'он', 'acerca de él'),
    V('мой', 'мой', 'mío'),
    V('наш', 'наш', 'nuestro'),
    V('свою', 'свой', 'propia'),
    V('себя', 'себя', 'a sí mismo'),
    V('у него', 'он', 'junto a él'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «у него», ¿qué forma aparece?'),
    options: [T('он'), T('него'), T('им')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: Отче ___'), answer: 'наш' },
    { kind: 'fill', prompt: T('Completa: о ___ (acerca de él)'), answer: 'нём' },
    {
      kind: 'choose',
      prompt: T('¿Qué significa свой?'),
      options: [T('de otra persona'), T('propio del sujeto'), T('imposible')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Tras preposición, los pronombres masculino y neutro reciben {н} inicial.') },
  ],
  notes: [
    {
      label: T('El posesivo sigue la referencia'),
      text: T(
        'En {Отче наш}, {наш} concuerda con el vocativo {Отче}, no con un sustantivo en nominativo. El posesivo sigue a la palabra a la que se refiere, no su posición en la frase.',
      ),
    },
  ],
  examples: [
    { text: 'Я люблю свою жену', gloss: T('Amo a mi propia esposa') },
    { text: 'Он любит её жену', gloss: T('Él ama a la esposa de ella') },
  ],
  tables: [
    {
      caption: T('Pronombres personales'),
      head: ['Caso', 'я', 'ты', 'он/она/оно'],
      rows: [
        ['Nominativo', 'я', 'ты', 'он/она/оно'],
        ['Genitivo', 'меня', 'тебя', 'его/её'],
        ['Dativo', 'мне', 'тебе', 'ему/ей'],
        ['Acusativo', 'меня', 'тебя', 'его/её'],
        ['Instrumental', 'мной', 'тобой', 'им/ею'],
        ['Preposicional', 'обо мне', 'о тебе', 'о нём/ней/нём'],
      ],
    },
  ],
};

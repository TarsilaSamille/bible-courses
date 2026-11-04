import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Pronomes e possessivos'),
  subtitle: T('я — его — свой: quem possui?'),
  section: T('Os pronomes e os numerais'),
  body: C(
    'Os pronomes pessoais declinam por seis casos. As formas comuns são я: меня, мне, мной, обо мне; ты: тебя, тебе, тобой, о тебе; он/она/оно: его/её, ему/ей, им/ею/им, о нём/ней/нём. Pronomes que se referem a pessoas são animados, e por isso o acusativo de он é его, e não он. Depois de uma preposição, os pronomes masculino e neutro recebem н inicial: у него, с ним, о нём. Na locução prepositiva о нём, o нём átono é realizado com sinal mole. Os adjetivos possessivos concordam com o substantivo possuído: мой, моя, моё, мои; твой; наш; ваш; его e её concordam por gênero. O reflexivo свой significa "de si mesmo" e remete ao sujeito: Я люблю свою жену, "amo a minha própria mulher". A distinção não é absoluta quando se soma его, mas o uso padrão é claro: Он любит её жену, "Ele ama a mulher dele". A forma átona de мой continua мой, e o neutro é моё quando a vogal final recebe a tonicidade. Na linguagem bíblica, Отче наш faz наш concordar com o vocativo Отче, e não diretamente com um substantivo no nominativo.',
  ),
  vocab: [
    V('меня', 'я', 'me'),
    V('его', 'он', 'dele; dele (possessivo)'),
    V('о нём', 'он', 'sobre ele'),
    V('мой', 'мой', 'meu'),
    V('наш', 'наш', 'nosso'),
    V('свою', 'свой', 'própria'),
    V('себя', 'себя', 'a si mesmo'),
    V('у него', 'он', 'junto a ele'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «у него», qual forma aparece?'),
    options: [T('он'), T('него'), T('им')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: Отче ___'), answer: 'наш' },
    { kind: 'fill', prompt: T('Complete: о ___ (sobre ele)'), answer: 'нём' },
    {
      kind: 'choose',
      prompt: T('Que significa свой?'),
      options: [T('de outra pessoa'), T('próprio do sujeito'), T('impossessive')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{После} preposição, os pronomes masculino e neutro recebem {н} inicial.') },
  ],
  notes: [
    {
      label: T('O possessivo segue a referência'),
      text: T(
        'No {Отче наш}, o {наш} concorda com o vocativo {Отче}, e não com um substantivo no nominativo. O possessivo acompanha a palavra a que se refere, não a posição na frase.',
      ),
    },
  ],
  examples: [
    { text: 'Я люблю свою жену', gloss: T('Amo a minha própria esposa') },
    { text: 'Он любит её жену', gloss: T('Ele ama a esposa dela') },
  ],
  tables: [
    {
      caption: T('Pronomes pessoais'),
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

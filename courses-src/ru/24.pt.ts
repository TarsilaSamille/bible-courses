import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Participios e gerúndios'),
  subtitle: T('говорящий, сказанный — говоря'),
  section: T('O verbo: prefixos e formas derivadas'),
  body: C(
    'O particípio russo, причастие, combina traços verbais e adjetivais. O particípio presente ativo termina em -ый/-ий: говорящий, "falando"; верующий, "crendo". O particípio passado ativo termina em -вший/-ший: сказавший, "que disse". Os particípios passivos formam-se normalmente a partir de verbos transitivos: presente -емый/-имый, como em любимый, "amado", e passado -мый/-нный/-тый, como em сказанный, "dito" e написанный, "escrito". A etiqueta "passivo presente" refere-se a uma relação com o presente, não necessariamente ao tempo atual. Os particípios declinam quando são adjetivais, e a forma curta é comum no estilo bíblico predicativo: Благословен грядущий, "Bem-aventurado o que vem", em Mateus 21:9. Nessa oração Благословен é um particípio passado passivo curto usado predicativamente, e грядущий é um particípio presente ativo. O деепричастие, muitas vezes chamado gerúndio, é formalmente um advérbio e é normalmente invariável: читая, "enquanto lê"; говоря, "enquanto fala". Seu sujeito é normalmente o sujeito da oração principal. Ele não é a contrapartida aspectual do infinitivo perfeito: não deve ser chamado de gerúndio perfeito. Em Приходите ко Мне, труждающиеся é um particípio, não um gerúndio.',
  ),
  vocab: [
    V('говорящий', 'говорить', 'que fala'),
    V('верующий', 'верить', 'crente'),
    V('сказанный', 'сказать', 'dito'),
    V('благословен', 'благословить', 'bendito'),
    V('говоря', 'говорить', 'falando'),
    V('читая', 'читать', 'lendo'),
    V('написанный', 'написать', 'escrito'),
    V('грядущий', 'идти', 'que vem'),
  ],
  exercise: { kind: 'fill', prompt: T('Complete Mt 21:9: Благословен ___'), answer: 'грядущий' },
  exercises: [
    { kind: 'fill', prompt: T('Complete o gerúndio: говор…'), answer: 'я' },
    {
      kind: 'choose',
      prompt: T('Qual é um participio presente ativo?'),
      options: [T('говорящий'), T('сказанный'), T('написанный')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('Qual flexão de сказанный é curta?'),
      options: [T('сказан'), T('сказанный')],
      answer: 0,
    },
  ],
  rules: [{ n: '1', text: T('{Деепричастие} mantém sujeito da oração principal.') }],
  notes: [
    {
      label: T('Particípio flexiona, gerúndio não'),
      text: T(
        'O particípio é um adjetivo que herdou marcas verbais: ele se flexiona e concorda. O деепричастие é o oposto — advérbio, invariável e sem flexão. Confundir os dois é o erro mais comum da lição.',
      ),
    },
  ],
  examples: [
    { text: 'Благословен грядущий', gloss: T('Bendito o que vem') },
    { text: 'Он говорил, читая текст', gloss: T('Ele falava lendo o texto') },
  ],
  tables: [
    {
      caption: T('Formação dos participios'),
      head: ['Tipo', 'Terminação típica', 'Exemplo'],
      rows: [
        ['Presente ativo', '-ый/-ий', 'говорящий'],
        ['Passado ativo', '-вший/-ший', 'сказавший'],
        ['Presente passivo', '-емый/-имый', 'любимый'],
        ['Passado passivo', '-мый/-нный/-тый', 'написанный'],
      ],
    },
  ],
};

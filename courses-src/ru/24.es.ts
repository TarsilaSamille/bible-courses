import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Participios y gerundios'),
  subtitle: T('говорящий, сказанный — говоря'),
  section: T('El verbo: prefijos y formas derivadas'),
  body: C(
    'El participio ruso, причастие, combina rasgos verbales y adjetivales. El participio presente activo termina en -ый/-ий: говорящий, «que habla»; верующий, «que cree». El participio pasado activo termina en -вший/-ший: сказавший. Los participios pasivos se forman normalmente de verbos transitivos: presente -емый/-имый, como любимый, «amado», y pasado -мый/-нный/-тый, como сказанный, «dicho», y написанный, «escrito». «Pasivo presente» expresa relación con el presente, no necesariamente tiempo actual. Los participios se declinan cuando funcionan como adjetivos, y la forma corta es frecuente en el estilo bíblico predicativo: Благословен грядущий, «bendito el que viene». En esta cláusula Благословен es un participio pasivo pasado corto y грядущий un participio presente activo. El деепричастие, llamado a menudo gerundio, suele ser invariable: читая, «mientras lee». Su sujeto suele ser el de la proposición principal. No es una contraparte perfectiva del infinitivo: no debe llamarse «gerundio perfectivo». En Приходите ко Мне, труждающиеся es un participio, no un gerundio.',
  ),
  vocab: [
    V('говорящий', 'говорить', 'que habla'),
    V('верующий', 'верить', 'creyente'),
    V('сказанный', 'сказать', 'dicho'),
    V('благословен', 'благословить', 'bendito'),
    V('говоря', 'говорить', 'mientras habla'),
    V('читая', 'читать', 'mientras lee'),
    V('написанный', 'написать', 'escrito'),
    V('грядущий', 'идти', 'que viene'),
  ],
  exercise: { kind: 'fill', prompt: T('Completa Mt 21:9: Благословен ___'), answer: 'грядущий' },
  exercises: [
    { kind: 'fill', prompt: T('Completa el gerundio: говор…'), answer: 'я' },
    {
      kind: 'choose',
      prompt: T('¿Cuál es un participio presente activo?'),
      options: [T('говорящий'), T('сказанный'), T('написанный')],
      answer: 0,
    },
    {
      kind: 'choose',
      prompt: T('¿Qué forma de сказанный es corta?'),
      options: [T('сказан'), T('сказанный')],
      answer: 0,
    },
  ],
  rules: [
    { n: '1', text: T('El {деепричастие} suele compartir el sujeto de la proposición principal.') },
  ],
  notes: [
    {
      label: T('El participio se flexiona, el gerundio no'),
      text: T(
        'El participio es un adjetivo que heredó marcas verbales: se flexiona y concuerda. El деепричастие es lo contrario — adverbio, invariable y sin flexión. Confundirlos es el error más común de la lección.',
      ),
    },
  ],
  examples: [
    { text: 'Благословен грядущий', gloss: T('Bendito el que viene') },
    { text: 'Он говорил, читая текст', gloss: T('Él hablaba mientras leía el texto') },
  ],
  tables: [
    {
      caption: T('Formación de participios'),
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

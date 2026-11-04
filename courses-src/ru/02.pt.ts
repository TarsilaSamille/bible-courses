import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('A escrita'),
  title: T('As 33 letras e o que seis delas fazem'),
  subtitle: T('ъ ь э ю я ё: sinais e vogais que o latim não tem'),
  body: C(`
## As seis letras que o latim não tem

O alfabeto russo tem 33 posições: 10 vogais, 21 consoantes e dois sinais, ъ e ь. As seis letras deste título não são acréscimos decorativos. Cada uma resolve um problema de pronúncia que o latim resolveu de outro jeito, e quem começa a ler cada uma como letra, com nome e com som, deixa de tropeçar nas cinco primeiras linhas.

Э, ю e я são vogais. A diferença delas em relação a е, и e у não é de timbre, é de lábio: diante delas a boca se fecha. Ъ e ь não têm som próprio. Ь é um sinal de palatização, e diz que a consoante anterior se pronuncia com a língua alta contra o palato. Ъ marca uma fronteira de pronúncia dentro da palavra, num ponto em que hoje não se pronuncia nada. As duas sobreviveram em pouquíssimas palavras do uso comum, e são essas que valem a pena ler.

## ъ: a fronteira que sobrou

Em подъём, съезд, въезд, отъезд e объект o ъ aparece no meio da palavra, sem nenhuma vogal ao lado e sem razão fonética visível. Ele marca o limite de um prefixo. A regra antiga era simples de enunciar e difícil de aplicar, porque dependia do que vinha antes: escrevia-se ъ depois de uma vogal breve e antes de uma consoante. Com o tempo a vogal breve saiu da palavra, a palavra passou a ter três ou quatro sílabas em vez de duas, e o sinal ficou marcando um lugar vazio.

Quem folheia um texto do século XIX encontra ъ em toda parte, porque era regra. Quem folheia um texto de hoje encontra ъ em подъём e não sabe o que fazer com ele. A palavra guarda a cicatriz da regra que a gerou.

## ь: a consoante que fica mole

O ь faz o trabalho inverso: não marca uma fronteira, marca uma consoante palatalizada que sem ele seria dura. день sem ь seria ден, e o ден se fala com a língua baixa. O mesmo vale para любовь, жизнь, мать e письмо. Retire o ь e a palavra continua legível, mas muda de som, e o erro de leitura é exatamente esse.

O teste mais limpo é um par que só existe por causa da letra. **мел é giz, e мель é um moinho de pedra.** Uma letra, dois substantivos, e nenhuma pista na grafia além do ь. É o que se quer dizer quando se afirma que a letra é carga, e não enfeite.

## э, ю, я: as vogais que fecham a boca

A regra cabe numa linha: **toda consoante diante de э, ю ou я é mole.** Não há exceção. Э produz um [e] fechado; ю e я produzem [ju] e [ja], também fechados. E é por isso que a escrita latina não ajuda: em latim trocar um i por e não muda a consoante anterior, e em russo escolher entre е, и, у, ю e я decide o som da consoante que vem antes. Compare нога, em que o г é duro, com тяга, em que o т continua duro mesmo diante de я, e com няня, em que o н é mole.

O gancho biblical está em Salmo 118:105, e é curto. **Слово Твое — светильник ноге моей и свет стезе моей.** Duas palavras da mesma raiz, свет e светильник, e o que as separa não é uma letra nova: é o acento, que em светильник caiu na segunda sílaba e em свет ficou na primeira. A letra й do seu é outra coisa. Твое tem duas sílabas e ё, que marca o acento; твой tem uma sílaba e й, que marca o i breve. Se a ё fosse omitida, como acontece com frequência, o versículo continuaria legível e a ambiguidade apareceria antes: Твое e твое soam idênticos, e só uma das duas grafias é a deste salmo.`),
  vocab: [
    V('ъ', 'ъ', 'sinal de fronteira de pronúncia, mudo hoje'),
    V('ь', 'ь', 'sinal de palatização, sem som próprio'),
    V('э', 'э', 'vogal de boca fechada [e]'),
    V('ю', 'ю', 'vogal de boca fechada [ju]'),
    V('я', 'я', 'vogal de boca fechada [ja]'),
    V('ё', 'ё', 'vogal acentuada; a única que sempre marca o acento'),
    V('подъём', 'подъём', 'subida, elevador'),
    V('съезд', 'съезд', 'congresso, reunião'),
    V('отъезд', 'отъезд', 'partida'),
    V('день', 'день', 'dia'),
    V('любовь', 'любовь', 'amor'),
    V('мать', 'мать', 'mãe'),
    V('мел', 'мел', 'giz'),
    V('мель', 'мель', 'moinho de pedra'),
    V('свет', 'свет', 'luz'),
    V('Твое', 'твой', 'teu (neutro)'),
    V('светильник', 'светильник', 'candeeiro'),
  ],
  rules: [
    { n: '1', text: T('O alfabeto tem 33 posições: 10 vogais, 21 consoantes, {ъ} e {ь}.') },
    { n: '2', text: T('Toda consoante diante de {э}, {ю} ou {я} é mole. Não há exceção.') },
    {
      n: '3',
      text: T(
        '{Ъ} marca uma fronteira dentro da palavra, herança de uma regra que dependia da vogal breve anterior: {подъём}, {съезд}, {отъезд}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ь} palataliza a consoante anterior: {день}, {любовь}, {мать}. Sem ele a palavra muda de som.',
      ),
    },
    {
      n: '5',
      text: T('A {ё} sempre marca o acento. Onde ela aparece escrita, o acento está decidido.'),
    },
  ],
  notes: [
    {
      label: T('O ъ é uma cicatriz'),
      text: T(
        'O ъ não tem som e hoje não tem função. Aparece em подъём, съезд, въезд, отъезд, объект. A regra antiga era mais honesta do que a lista: escrevia-se ъ depois de uma vogal breve e antes de uma consoante. Quando a vogal breve saiu da palavra, o sinal ficou. Quem lê um texto antigo vê a regra; quem lê um texto de hoje vê a cicatriz.',
      ),
    },
    {
      label: T('A ё é o acento visível'),
      text: T(
        'A ё é a única letra russa que sempre traz o acento. Твое e твой têm a mesma base: o primeiro tem duas sílabas e ё, o segundo tem uma sílaba e й. Se a ё for omitida, as duas passam a soar idênticas e o leitor perde a informação de que sílaba está acentuada.',
      ),
    },
  ],
  examples: [
    { text: 'подъём', gloss: T('subida; o ъ marca o limite do prefixo') },
    { text: 'съезд', gloss: T('congresso; ъ dentro da palavra, sem som') },
    { text: 'отъезд', gloss: T('partida, ao contrário de приезд') },
    { text: 'день', gloss: T('dia; o ь palataliza o n') },
    { text: 'любовь', gloss: T('amor; o ь palataliza o v') },
    { text: 'мел', gloss: T('giz; consoante dura') },
    { text: 'мель', gloss: T('moinho de pedra; o mesmo n, agora mole') },
    { text: 'тяга', gloss: T('puxão; o t continua dura diante de я') },
    { text: 'всё', gloss: T('tudo; a ё fecha o o e marca o acento') },
    {
      text: 'Слово Твое — светильник ноге моей',
      gloss: T('a tua palavra é um candeeiro para o meu pé (Sl 118:105)'),
    },
  ],
  tables: [
    {
      caption: T('As 33 posições do alfabeto russo'),
      head: [T('Grupo'), T('Letras'), T('Contagem')],
      rows: [
        [T('vogais'), T('а е ё и о у ю я ы э'), T('10')],
        [T('consoantes'), T('б в г д ж з й к л м н п р с т ф х ц ч ш щ'), T('21')],
        [T('sinais'), T('ъ ь'), T('2')],
      ],
    },
    {
      caption: T('O que ъ e ь fazem'),
      head: [T('Letra'), T('Função'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('ъ'), T('fronteira de pronúncia dentro da palavra'), T('подъём'), T('subida')],
        [T('ъ'), T('mesma função, outro prefixo'), T('отъезд'), T('partida')],
        [T('ь'), T('palataliza a consoante anterior'), T('день'), T('dia')],
        [T('ь'), T('mesma função'), T('любовь'), T('amor')],
        [T('ь'), T('par real que só o ь distingue'), T('мел / мель'), T('giz / moinho')],
      ],
    },
    {
      caption: T('Boca fechada e consoante anterior'),
      head: [T('Vogal'), T('Som'), T('Consoante que vem antes'), T('Exemplo')],
      rows: [
        [T('э'), T('[e] fechado'), T('sempre mole'), T('это, эта')],
        [T('ю'), T('[ju]'), T('sempre mole'), T('любовь')],
        [T('я'), T('[ja]'), T('sempre mole'), T('няня')],
        [T('я'), T('[ja]'), T('sempre mole, mesmo depois de t dura'), T('тяга')],
        [
          T('е'),
          T('[e] aberto'),
          T('pode ser dura ou mole'),
          T('свете tem t dura, поле tem l mole'),
        ],
        [T('о'), T('[o] aberto'), T('pode ser dura'), T('нога tem g dura')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em подъём, o que o ъ faz?'),
    options: [
      T('Palataliza a consoante anterior'),
      T('Marca uma fronteira de pronúncia dentro da palavra'),
      T('Indica o acento'),
    ],
    answer: 1,
    hint: T(
      'O ъ não palataliza e não marca acento. O que ele marca é o limite de um prefixo que o tempo esvaziou.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: съ___зд (congresso)'), answer: 'е' },
    { kind: 'fill', prompt: T('Complete: день — a letra que palataliza é o ___'), answer: 'ь' },
    {
      kind: 'choose',
      prompt: T('Qual palavra tem consoante dura diante de я?'),
      options: [T('тяга'), T('няня'), T('любовь')],
      answer: 0,
    },
  ],
};

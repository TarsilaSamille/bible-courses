import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  section: T('Sintaxe'),
  title: T('{是} e a frase que só tem substantivo'),
  subtitle: T('Nem toda frase tem verbo, e em chinês isso é normal'),
  body: C(`## Uma frase sem verbo

Depois de {wǒ} e {nǐ}, o Mandarin pode dizer {tā shì shīfu}, "ele é professor". O {shì} é o verbo "ser", e traduz-se normalmente por "ser". Mas há um segundo uso, mais interessante e muito frequente: {shì} **introduz um substantivo como descrição**, sem qualquer verbo no resto da frase.

{wǒ shì shīfu} é "eu sou professor". {wǒ shì Zhāng} é "sou Zhang". No segundo, {Zhāng} não é verbo nem algo de que se predica: é o que se diz de alguém sem precisar da palavra "ser".

## O Salmo 23 e a frase sem verbo

O Salmo 23 diz, na {和合本}, {yēhéhuá shì wǒ de yáng}, "Jeová é meu pastor". Traduzido ao pé da letra, o verbo "ser" parece fraco. Mas em Mandarin o {shì} de identificação é omitido o tempo todo, e a frase {shì wǒ de yáng} é "pastor meu", sem verbo nenhum. Todo o peso está no {de}: {wǒ de} é um genitivo curto, "meu", colado sem espaço.

Quem traduz palavra a palavra produz um disparate. Quem reconhece a frase nominal produz "O Senhor é o meu pastor" sem esforço.

## Três frases que só diferem no verbo

{shì} acrescenta um substantivo como descrição. Compare: {tā shì shīfu}, ele é professor; {tā zài nàlǐ}, ele está lá; e {tā lái le}, ele veio. A primeira identifica, a segunda diz onde, a terceira narra o que aconteceu. Todas têm verbo, mas só a primeira usa {shì}.`),
  vocab: [
    V('shì', '是', 'ser; identificar (shì)'),
    V('de', '的', 'genitivo curto: de (de)'),
    V('羊', '羊', 'ovelha; pastor (yáng)'),
    V('zài', '在', 'estar em (zài)'),
    V('那里', '那里', 'lá, aquele lugar (nàlǐ)'),
    V('lái', '来', 'vir (lái)'),
    V('耶和华', '耶和华', 'Jeová (Yēhéhuá)'),
    V('牧者', '牧者', 'pastor (mùzhě)'),
  ],
  rules: [
    {
      n: '1',
      text: T('{shì} traduz "ser" no português, mas em Mandarin é também verbo de descrição.'),
    },
    { n: '2', text: T('{de} liga posse sem verbo: {wǒ de shū} = "meu livro".') },
    { n: '3', text: T('{shì} identifica, {zài} localiza, {lái} narra — não são sinônimos.') },
  ],
  notes: [
    {
      label: T('Por que o Salmo 23 engana em tradução literal'),
      text: T(
        '{yēhéhuá shì wǒ de yáng} tem quatro palavras. A versão portuguesa acrescenta "é o meu", três palavras que o chinês não tem. A habilidade aqui é reconhecer o sintagma nominal, não decorar caracteres.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: T('tā shì lǎoshī — ele é professor') },
    { text: '我在那里', gloss: T('wǒ zài nàlǐ — eu estou lá') },
    { text: '耶和华是我的牧者', gloss: T('Yēhéhuá shì wǒ de mùzhě — o Senhor é o meu pastor') },
  ],
  tables: [
    {
      caption: T('Três verbos que não se substituem'),
      head: [T('Verbo'), T('Pergunta a que responde'), T('Exemplo')],
      rows: [
        [T('{shì}'), T('O que ele é?'), T('{tā shì shīfu} ele é professor')],
        [T('{zài}'), T('Onde ele está?'), T('{tā zài nàlǐ} ele está lá')],
        [T('{lái}'), T('O que ele fez?'), T('{tā lái le} ele veio')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {我在那里}, qual é a função do {在}?'),
    options: [
      T('Identifica o que ele é'),
      T('Indica onde ele está'),
      T('Marca tempo passado'),
      T('Liga posse'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "Jeová é meu pastor" (耶和华____我的牧者): ____'),
      answer: '是',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à pergunta'),
      pairs: [
        { a: T('{shì}'), b: T('O que ele é?') },
        { a: T('{zài}'), b: T('Onde ele está?') },
        { a: T('{lái}'), b: T('O que ele fez?') },
        { a: T('{的}'), b: T('De quem é?') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};

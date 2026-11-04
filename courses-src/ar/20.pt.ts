import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Substantivo: a estrutura da definitude'),
  subtitle: T('كِتَابٌ، الْكِتَابُ، كِتَابُ الْمُعَلِّمِ'),
  section: T('O nome'),
  body: C(`## A pergunta que o nome faz

Quem olha {كِتَاب} em português quer saber duas coisas: se é masculino ou feminino, e se é singular ou plural. Quem olha {كِتَاب} em árabe quer saber uma: **se o interlocutor já sabe de que livro estamos falando**.

A definitude é a oposición central do nome árabe, e o gênero é um acidente dentro dela. Um manual de português invertido a ordem dos capítulos, e o resultado não é uma língua parecida com a nossa: é uma língua que organiza o nome por outra pergunta. Quem traduz diretamente recebe uma frase com nome definido e nota que faltou informação: em {كِتَابٌ} não se diz de qual livro se trata, e em {كِتَابُ الْمُعَلِّمِ} já se diz.

## As três maneiras de tornar um nome definido

O artigo é a mais conhecida e a mais fácil de reconhecer. {الْكِتَابُ} é definido porque leva {ال}, e essa é a marca visível.

A iḍāafa é a segunda, e é a que o português não tem. Quando dois substantivos se ligam, o segundo fica definido sem receber artigo: {كِتَابُ الْمُعَلِّمِ}, {بَيْتُ اللهِ}, {رَأْسُ الْجِسَدِ}. O segundo elemento é definido por posição, não por marca.

O relativo é a terceira. {الطَّرِيقُ الَّذِي ضَيَّقٌ} é definido porque {الَّذِي} traz uma oração que identifica qual caminho é este, e o relativo se genders como o nome que ele substitui.

E há os nomes definidos por natureza, que não precisam de nada disso: {مَكَّة} é uma cidade e {هُوَ} é um pronome, ambos definidos só por serem eles mesmos.

## A iḍāafa define sem dizer

Uma iḍāafa é um conjunto, e o conjunto se comporta como um nome definido único. Isso produz uma regra prática de verificação: **um conjunto definido não recebe artigo duas vezes**. {كِتَابُ الْمُعَلِّمِ} é correto e {كِتَابُ الْمُعَلِّمُ} não é, porque o segundo {ال} diria que o mestre é um mestre qualquer, e é a própria forma do conjunto que o torna determinado.

Os dois elementos têm casos diferentes, e a construção é rígida justamente aí. O primeiro recebe o caso que a frase pede: em {كِتَابُ الْمُعَلِّمِ} está no nominativo porque é sujeito. O segundo é sempre genitivo, sem exceção que valha para o resto da frase. Uma terminação de nominativo na segunda peça significa que não é iḍāafa, e o texto está dizendo outra coisa.

A forma mais comum é a iḍāafa com pronome, em que o segundo elemento não aparece escrito: {رَاعِيَّ}, {كِتَابِي}, {نَفْسِي}. O pronome ligado está no genitivo e ocupa o lugar do nome ausente.

## Critério de leitura

O primeiro versículo do Salmo 23 é uma iḍāafa com pronome e nada mais: {الرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ}. {رَاعِيَّ} está no genitivo e {رَاعِيَّ} com {يَّ} final é o pastor de alguém, sem o "de" e sem o "meu" escritos: quem lê {رَاعِيَّ} como "o meu pastor" está lendo certo por não ver que {رَاعِيَّ} é um genitivo, e não um nominativo. {شَيْءٌ}, ao lado, é a única coisa indefinida na frase, e é por isso que a tradução diz "não me faltará coisa alguma": o indefinido é o que a frase nega.`),
  vocab: [
    V('كِتَابٌ', 'كتاب', 'um livro; indefinido'),
    V('الْكِتَابُ', 'كتاب', 'o livro'),
    V('كِتَابُ الْمُعَلِّمِ', 'كتاب', 'o livro do mestre; iḍāafa'),
    V('بَيْتُ اللهِ', 'بيت', 'a casa de Deus'),
    V('الْمُعَلِّم', 'معلم', 'o mestre'),
    V('رَاعِيَّ', 'راع', 'o meu pastor; iḍāafa com pronome'),
    V('شَيْءٌ', 'شيء', 'coisa'),
    V('الَّذِي', 'الذي', 'que; o qual'),
    V('مَكَّةَ', 'مكة', 'Mecca; definido por natureza'),
    V('هُوَ', 'هو', 'ele; definido por natureza'),
    V('رَأْسُ', 'رأس', 'cabeça; primeiro elemento da iḍāafa'),
    V('الْجِسَد', 'جسد', 'o corpo'),
    V('الطَّرِيقُ', 'طريق', 'o caminho'),
    V('إِيمَانٌ', 'إيمان', 'uma fé; abstrato e indefinido'),
    V('الْإِيمَانُ', 'إيمان', 'a fé'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {كِتَابُ الْمُعَلِّمِ}, como é definido o segundo elemento?'),
    options: [
      T('Pelo artigo'),
      T('Pela posição na iḍāafa'),
      T('Pelo relativo'),
      T('Não é definido'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a iḍāafa: “o livro do mestre” é ___ الْمُعَلِّمِ.'),
      answer: 'كِتَابُ',
      hint: T('O primeiro elemento fica no caso pedido pela frase.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [T('كِتَابُ الْمُعَلِّمُ'), T('كِتَابُ الْمُعَلِّمِ'), T('كِتَابِ الْمُعَلِّمِ'), T('الْكِتَابُ الْمُعَلِّمُ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe nome e estado.'),
      pairs: [
        { a: T('كِتَابٌ'), b: T('indefinido') },
        { a: T('الْكِتَابُ'), b: T('definido pelo artigo') },
        { a: T('بَيْتُ اللهِ'), b: T('definido pela iḍāafa') },
        { a: T('هُوَ'), b: T('definido por natureza') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é o caso de {الْمُعَلِّمِ} em {كِتَابُ الْمُعَلِّمِ}?'),
      options: [T('Nominativo'), T('Genitivo'), T('Acusativo'), T('Vocal')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A pergunta central sobre um nome é se ele é conhecido, não se é masculino ou feminino.',
      ),
    },
    {
      n: '2',
      text: T('**São três as maneiras de definir um nome: o artigo, a iḍāafa e o relativo.**'),
    },
    {
      n: '3',
      text: T('Na iḍāafa o segundo elemento é definido sem artigo e recebe sempre o genitivo.'),
    },
    { n: '4', text: T('Nomes próprios e pronomes são definidos por natureza, sem marca visível.') },
    {
      n: '5',
      text: T(
        'Um conjunto definido não recebe artigo duas vezes: {كِتَابُ الْمُعَلِّمِ}, nunca {كِتَابُ الْمُعَلِّمُ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Onde o português diz "de"'),
      text: T(
        'O português resolve toda relação de posse com uma palavra só. O árabe resolve com a iḍāafa, que é uma construção: primeiro elemento com o caso da frase, segundo no genitivo. Um "de" em português pode ter sido duas preposições, uma iḍāafa ou nada.',
      ),
    },
    {
      label: T('A iḍāafa com pronome'),
      text: T(
        'A forma mais comum de iḍāafa no texto bíblico é a que traz pronome: {رَاعِيَّ}, {كِتَابِي}, {نَفْسِي}. O segundo elemento não aparece escrito, e mesmo assim está lá, e é por isso que a terminação do pronome é o sinal mais confiável de que há iḍāafa.',
      ),
    },
  ],
  examples: [
    { text: 'كِتَابٌ', gloss: T('um livro; indefinido') },
    { text: 'الْكِتَابُ', gloss: T('o livro; definido pelo artigo') },
    { text: 'كِتَابُ الْمُعَلِّمِ', gloss: T('o livro do mestre; a iḍāafa define o segundo elemento') },
    { text: 'بَيْتُ اللهِ', gloss: T('a casa de Deus; iḍāafa com nome próprio') },
    { text: 'رَأْسُ الْجِسَدِ', gloss: T('a cabeça do corpo') },
    { text: 'الطَّرِيقُ الَّذِي ضَيَّقٌ', gloss: T('o caminho que é estreito') },
    { text: 'مَكَّةَ', gloss: T('Mecca; definido sem marca alguma') },
    { text: 'هُوَ', gloss: T('ele; pronome definido por natureza') },
    { text: 'إِيمَانٌ', gloss: T('uma fé; o abstrato também pode ser indefinido') },
  ],
  tables: [
    {
      caption: T('Os quatro estados do nome'),
      head: [T('Estado'), T('Como se marca'), T('Exemplo'), T('Definido?')],
      rows: [
        [T('indefinido'), T('sem artigo e sem iḍāafa'), 'كِتَابٌ', T('não')],
        [T('definido pelo artigo'), T('الـ'), 'الْكِتَابُ', T('sim')],
        [T('definido pela iḍāafa'), T('é o segundo elemento'), 'بَيْتُ اللهِ', T('sim, como conjunto')],
        [
          T('definido por natureza'),
          T('nome próprio, pronome, relativo'),
          'مَكَّةَ، هُوَ، الَّذِي',
          T('sim'),
        ],
      ],
    },
    {
      caption: T('Os casos dentro da iḍāafa'),
      head: [T('Posição'), T('Caso'), T('Terminação'), T('Exemplo')],
      rows: [
        [T('primeiro elemento'), T('o que a frase pedir'), T('variável'), 'كِتَابُ'],
        [T('segundo elemento'), T('genitivo'), T('ـِ'), 'الْمُعَلِّمِ'],
        [T('pronome ligado'), T('genitivo'), T('ـي، ـك، ـه'), 'رَاعِيَّ'],
      ],
    },
    {
      caption: T('Onde a definitude aparece'),
      head: [T('Sinal'), T('O que mostra'), T('Exemplo')],
      rows: [
        ['ال', T('definitude direta'), 'الْكِتَابُ'],
        [T('genitivo depois de substantivo'), T('a segunda peça já é definida'), 'بَيْتُ اللهِ'],
        ['الَّذِي', T('definitude por relativo'), 'الطَّرِيقُ الَّذِي'],
        [T('nome próprio'), T('definitude sem marca'), 'مَكَّةَ'],
      ],
    },
  ],
};

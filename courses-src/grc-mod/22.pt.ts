import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('Advérbio'),
  title: T('A negação que veio do nada'),
  subtitle: T('δεν λέω — μη λέγεις — οὐ λέγω'),
  body: C(`## δεν é o nada

A palavra que nega no grego moderno não é uma palavra negativa: é {οὐδέν}, «nada», com a parte da frente caída. {δεν} é o que sobrou de {οὐδέν} depois que a segunda sílaba virou {ν} de ligação.

A consequência é prática, e é grande: **no grego moderno não existe advérbio negativo**. Quem diz «não» está dizendo «nada» e jogando fora o resto da frase. {Δεν έρχεται} é literalmente «nada vem», e quem traduz por palavra por palabra escreve «não vem» porque é o que a frase quer dizer.

A posição é fixa: {δεν} vem antes do verbo, sempre. Não depois, como em inglês. Não grudado nele, como em espanhol. Antes.

## δεν, μην, μη

O grego escreve a mesma palavra de três maneiras, e a escolha é regra de pronúncia, não de sentido. {δεν} é a forma geral e a mais falada. {μην} é a forma escrita, usada antes de verbo forte ou consoante. {μη} é a forma escrita antes de vogal ou de verbo fraco.

{δεν θα έρθει}, {δεν μπορεί}, {δεν ήρθε}: as três são a mesma frase. Nenhuma delas tem mais ou menos negação que as outras duas. O que muda é o som, e o som se deduz da primeira letra do verbo que vem depois.

## οὐ e μη: o par que a Bíblia usa

O grego antigo, e com ele a Bíblia, tem duas negativas com regra. {οὐ} nega o indicativo: {οὐ λέγω}, «não digo». {μη} nega o imperativo e o infinitivo: {μη λέγε}, «não digas». {οὐκ} é {οὐ} quando o verbo começa com vogal: {οὐκ ἔρχεται}.

A regra se escreve na escolha da partícula: **a negativa que vem com verbo conjugado é {οὐ}; a que vem com verbo imperative ou infinitivo é {μη}**. Não há terceira possibilidade em todo o grego antigo.

## A proibitiva é uma só

No grego moderno há uma única construção proibitiva: {μη} mais o imperativo de segunda pessoa do singular. {Μη μιλήσεις}, «não fale». {Μη φύγεις}, «não fugas». Não há {μη} mais o subjuntivo, não há {μη} mais o futuro, e e não há dupla proibitiva.

Nas outras pessoas a proibitiva se faz com {μην} mais o imperativo, e essa construção é muito mais tardia: {Μην πεις}, {Μην πάτε}, {Μην τρέξετε}. Quem escreve {μη μην} está juntando duas línguas.


> Ὁ δὲ λέγων αὐτῷ, Μὴ σπεύσῃς, κύριε.

No texto de Marcos 7, a mulher siro-fenícia responde e a frase inteira cabe numa regra. {λέγων} é um particípio presente, o verbo principal está no indicativo, e mesmo assim a negativa é {μὴ}. A construção não é a proibitiva: é um pedido.

Em português traduzimos «não tenhas pressa» e parece um conselho. Em grego é {μή} mais um verbo no subjuntivo ({σπεύσῃς}), que é a construção do pedido e do desejo. Quem traduz ao pé da letra escreve «não te apresses» e perde que a mulher está pedindo, não proibindo. `),
  vocab: [
    V('δεν', 'δεν', 'não'),
    V('δέν', 'δεν', 'não (coloquial, com acento)'),
    V('μην', 'μην', 'não (escrito)'),
    V('μη', 'μη', 'não (antes de vogal)'),
    V('οὐ', 'οὐ', 'não (indicativo, grego antigo)'),
    V('οὐκ', 'οὐκ', 'não (antes de vogal)'),
    V('οὐδέν', 'οὐδέν', 'nada'),
    V('λέω', 'λέω', 'digo'),
    V('λέγω', 'λέγω', 'digo'),
    V('μη λέγεις', 'λέγω', 'não digas'),
    V('μη φύγεις', 'φεύγω', 'não fugas'),
    V('μη σπεύσῃς', 'σπεύδω', 'não te apresses'),
    V('έρχεται', 'έρχομαι', 'vem'),
    V('ήρθε', 'έρχομαι', 'veio'),
    V('θα έρθει', 'έρχομαι', 'virá'),
    V('λέγων', 'λέγω', 'que diz (particípio)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'No grego moderno não há advérbio negativo: δεν vem de οὐδέν, «nada», e vem antes do verbo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'δεν, μην e μη são a mesma palavra em três grafias; a escolha segue a primeira letra do verbo.',
      ),
    },
    {
      n: '§3',
      text: T('No grego antigo οὐ nega o indicativo e μη nega o imperativo e o infinitivo.'),
    },
    {
      n: '§4',
      text: T('Há uma única proibitiva: μη mais o imperativo de segunda pessoa do singular.'),
    },
  ],
  notes: [
    {
      label: T('Ordem'),
      text: T(
        'A negação em grego é pré-verbal e fixa. Em espanhol o «no» também precede o verbo, mas em inglês vem depois, e é por isso que a tradução automática errar as duas línguas.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'μὴ σπεύσῃς não é um imperativo: σπεύσῃς está no subjuntivo aoristo. A Escritura usa μὴ fora da proibitiva, com o subjuntivo, para pedir e para desejar, e é esse uso que o português não distingue de uma ordem.',
      ),
    },
  ],
  examples: [
    { text: 'δεν λέω', gloss: T('não digo') },
    { text: 'δεν έρχεται', gloss: T('não vem') },
    { text: 'δεν θα έρθει', gloss: T('não virá') },
    { text: 'δεν ήρθε', gloss: T('não veio') },
    { text: 'μη λέγεις', gloss: T('não digas') },
    { text: 'μη φύγεις', gloss: T('não fugas') },
    { text: 'δεν μπορεί', gloss: T('não pode') },
    { text: 'οὐ λέγω', gloss: T('não digo (grego antigo)') },
  ],
  tables: [
    {
      caption: T('As três grafias'),
      head: ['Γραφή', 'Πότε', 'Παράδειγμα'],
      rows: [
        ['δεν', 'γενική μορφή', 'δεν έρχεται'],
        ['μην', 'γραπτή, σύμφωνο', 'δεν μπορεί'],
        ['μη', 'γραπτή, φωνήεν', 'δεν ήρθε'],
      ],
    },
    {
      caption: T('O par do grego antigo'),
      head: ['Άρνηση', 'Ρήμα', 'Παράδειγμα'],
      rows: [
        ['οὐ', 'οριστική', 'οὐ λέγω'],
        ['οὐκ', 'οριστική, φωνήεν', 'οὐκ ἔρχεται'],
        ['μή', 'προστακτική, άπειρος', 'μή λέγε'],
      ],
    },
    {
      caption: T('Onde a negação fica'),
      head: ['Χρόνος', 'Μορφή'],
      rows: [
        ['ενεστώτας', 'δεν μιλάει'],
        ['αόριστος', 'δεν μίλησε'],
        ['μέλλοντας', 'δεν θα μιλήσει'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma escrita da negativa antes de vogal?'),
    options: [T('δεν'), T('μην'), T('μη'), T('οὐδέν')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ έρχεται (negativa antes de vogal)'),
      answer: 'δεν',
      hint: T('A forma geral'),
    },
    {
      kind: 'choose',
      prompt: T('No grego antigo, qual negativa vem com o imperativo?'),
      options: [T('οὐ'), T('μή'), T('οὐκ'), T('οὐδέν')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Negativa e função'),
      pairs: [
        { a: 'δεν', b: T('indicativo moderno') },
        { a: 'οὐ', b: T('indicativo antigo') },
        { a: 'μη', b: T('proibição') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('___ μιλήσεις (proibitiva)'),
      answer: 'Μη',
      hint: T('Primeira letra maiúscula'),
    },
  ],
};

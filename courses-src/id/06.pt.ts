import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Sufixos -kan, -i e redupicação'),
  subtitle: T('membacakan, mendengarkan, anak-anak'),
  section: T('O nome'),
  body: C(`Os verbos formados por prefixo podem receber sufixos que alteram o participante, a direção ou a intensidade.

{-kan} frequentemente faz o executar em benefício de alguém: {membaca} «ler» → {membacakan} «ler para alguém». {memberikan} significa «dar»; {menjadikan} «tornar algo algo» ou «considerar algo como»; {melepaskan} «liberar». O sentido exato depende da raiz, portanto memorize a forma lexical completa.

{-i} ocorre sobretudo com meN- e geralmente indica ação repetida, intencional ou realizada de certo modo. {mendengar} «ouvir» → {mendengarkan} «escutar atentamente»; {membaca} → {membaci} «ler de certo modo»; Exemplos seguros são {menaiki} «subir em», {memakai} «usar», {memenuhi} «cumprir/preencher».

Redupicação da raiz indica plural ou distributividade: {buku-buku} «livros», {anak-anak} «crianças». Em {berjalan-jalan} «passear» e {berbicara-bicara} «conversar», o efeito é distributivo. Para número diverso, há formas completas: {berbagai-bagi} «variados» e {mana-mana} «todos/todos os tipos».

Comparação: {lebih + adjetivo + daripada} = «mais … que» ({lebih besar daripada» = «maior que»); {paling + adjetivo} = «o mais»; {terbaik} é lexical ou superlativo elícito.`),
  vocab: [
    V('membacakan', 'baca', 'ler para alguém'),
    V('memberikan', 'beri', 'dar'),
    V('menjadikan', 'jadi', 'tornar, considerar como'),
    V('mendengarkan', 'dengar', 'escutar atentamente'),
    V('melepaskan', 'lepas', 'liberar, soltar'),
    V('menaiki', 'naik', 'subir em, montar'),
    V('memakai', 'pakai', 'usar'),
    V('memenuhi', 'penuh', 'cumprir, preencher'),
    V('buku-buku', 'buku', 'livros'),
    V('anak-anak', 'anak', 'crianças'),
    V('berjalan-jalan', 'jalan', 'passear'),
    V('berbagai-bagi', 'berbagai', 'variados'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual diferença é mais precisa?'),
    options: [
      T('{mendengar} = ouvir; {mendengarkan} = escutar com atenção intencional'),
      T('A primeira é passada e a segunda futura'),
      T('A primeira é formal e a segunda informal'),
      T('São exatamente sinônimas neste contexto'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «tiga anak-___» = «três crianças».'),
      answer: 'anak',
      hint: T('Repita a raiz inteira.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é a estrutura natural de «mais amoroso que»?'),
      options: [T('lebih baik daripada'), T('pada kasih lebih'), T('kasih daripada lebih')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nem toda raiz aceita livremente -kan e -i. O dicionário e o uso SINCRÔNICO revelam a estrutura; não invente combinações.',
      ),
    },
    {
      n: '2',
      text: T(
        'A redupicação parcial repete a sílaba inicial; a total repete toda a raiz: {buku-buku} e {anak-anak}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Em {berjalan-jalan} e {berbicara-bicara}, {ber-} também se reduplica, reforçando o valor distributivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Aprendizagem'),
      text: T(
        'Aprenda cada verbo completo com um exemplo: {memberikan}, não apenas {beri}; os afixos alteram o significado.',
      ),
    },
  ],
  examples: [
    { text: 'Ibu membacakan cerita kepada anak.', gloss: T('A mãe lê uma história para o filho.') },
    { text: 'Saudara mendengarkan Firman.', gloss: T('O irmão escuta atentamente a Palavra.') },
    { text: 'Allah memberi kasih karunia kepada kita.', gloss: T('Deus nos dá graça.') },
  ],
  tables: [
    {
      caption: T('Pares com mudança de valor'),
      head: ['Base', 'Derivado', 'ES'],
      rows: [
        ['mendengar', 'mendengarkan', T('ouvir × escutar atentamente')],
        ['memberi', 'memberikan', T('dar algo a alguém')],
        ['naik', 'menaiki', T('subir × subir em algo')],
      ],
    },
  ],
};

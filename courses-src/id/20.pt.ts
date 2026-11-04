import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Numeral'),
  title: T('O numeral'),
  subtitle: T('satu, sepuluh, seratus, seribu: a forma clássica e a forma curta'),
  body: C(`## De um a vinte

{satu}, {dua}, {tiga}, {empat}, {lima}, {enam}, {tujuh}, {delapan}, {sembilan}, {sepuluh}, {sebelas}, {dua belas}. A partir de dez a construção é-regular: a dezena vem antes, a unidade vem depois, e a unidade pode ser omitida. {Dua puluh} são vinte; {dua puluh satu} são vinte e um.

Um detalhe que parece ruído e é sistema: os numerais {tujuh}, {delapan}, {sembilan}, {sebelas}, {seratus}, {seribu} e {sejuta} levam o {se} à frente. A regra é que o {se} aparece quando a palavra do numeral é fechada em duas ou mais sílabas, e some quando ela é aberta: {tujuh}, mas {enam} e {dua}. Quem decora os números sem entender o {se} decora dezessete palavras e não sabe por que a próxima não entra no padrão.

E {satu} tem dois usos: numeral, em {satu buku} «um livro», e o {se} que se funde com o classificador, em {seorang} «uma pessoa», {seekor} «um animal», {sebuah} «um objeto». São a mesma origem, e o que decide é o que vem depois do substantivo.

## Dezenas, centenas, milhares

Acima de dez a língua é por composição, e as peças são cinco: {-puluh} dezena, {-ratus} centena, {-ribu} milhar, {-juta} milhão, {-miliar} bilhão.

{2} × {10} = {dua puluh}; {3} × {10} = {tiga puluh}; {10} × {10} = {seratus}. O numeral vai na frente do nome da casa decimal, e a casa decimal também pode virar substantivo sozinha: {puluh} «dezena», {ratus} «centena», {ribu} «milhar», {juta} «milhão». {Ribuan orang} são milhares de pessoas; {sepuluh orang} são dez pessoas.

Depois de dez vem {ribu}, e aí aparece a primeira irregularidade séria: {seribu} (um milhar) e não {satu ribu}. A regra é que {ribu} é {seribu} sozinho, mas em {dua ribu} o {se} volta a ser o {se} de {satu}, e em {dua ribu}, {tiga ribu} não há nada. O mesmo vale para {juta}: {sejuta} é um milhão, {dua juta} são dois milhões.

E há um terceiro caminho, o mais curto de todos, que é a forma que o português chama de artigo indefinido mas que aqui funciona como numeral colado: {doanya} «os dois», {tiganya} «os três», {seribunya} «os mil», {jutaannya} «os milhões». É o numeral com {-nya}, e significa ao mesmo tempo «quantos» e «todos eles». Quem lê {doanya} como «o segundo» leu mal: {yang kedua} é o que significa o segundo.

## Onde o numeral fica

O numeral vem antes do substantivo, sempre, sem artigo e sem preposição: {tiga buku}, {sepuluh rumah}, {seratus orang}. Não há forma de dizer «o três» nem «de três».

Depois de {ada}, o numeral funciona como sujeito e vem logo depois: {ada dua orang di pintu} «há duas pessoas na porta», {ada tiga buku} «há três livros». E é o numeral que identifica o sujeito, já que {ada} não identifica nada.

Depois de um substantivo, o numeral só aparece com {yang}: {yang kedua}, {yang ketiga}, {yang terakhir}. Não existe {buku kedua}; existe {buku yang kedua}. Em português o ordinal é uma palavra só, e em indonésio são duas, uma delas sempre igual.

E há um uso de numeral que não conta nada: {berdua} «os dois juntos», {bertiga} «em grupos de três», {berlima} «em grupos de cinco», com {ber-} mais o numeral. {Dua orang itu berdua} é «aquelas duas pessoas, as duas juntas», e {ber-} diz que contam como grupo.

Para frações a língua usa outra base: {setengah} «metade», {seperempat} «um quarto», {sepertiga} «um terço», {seperenam} «um sexto». O padrão é {se-} mais {per-} mais o numeral. É a mesma informação do que o grego expressa com {tó de}.

## Lima roti dan dua ikan

{O texto da multiplicação} em {Yohanes 6:9} traz o par de numerais mais famoso da TB: {lima roti dan dua ikan}. Cinco e dois, sem nenhuma preposição, sem artigo, e com o substantivo logo depois do número.

Quem vem do português espera {os cinco pães e os dois peixes}, com artigo em ambos, e procura em {lima} e {dua} algo que não está lá. Não está porque o numeral não flexiona em português e não flexiona em indonésio: nos dois idiomas ele é {lima} e {dua} diante de qualquer substantivo, definido ou não. A diferença é que o português põe artigo e o indonésio não, e o leitor precisa decidir sozinho se o {dua} que se segue é «os dois» ou «dois».

A passagem da multiplicação em {Matius 14:19} acrescenta o que faltava: o verbo {berkahi} sobre {lima} e {dua}. É o texto que mostra o numeral como sujeito, e é por isso que a aritmética do Novo Testamento, que o grego marcava com o caso, aparece em indonésio sem marca nenhuma.`),
  vocab: [
    V('satu', 'satu', 'um'),
    V('dua', 'dua', 'dois'),
    V('tiga', 'tiga', 'três'),
    V('empat', 'empat', 'quatro'),
    V('lima', 'lima', 'cinco'),
    V('enam', 'enam', 'seis'),
    V('tujuh', 'tujuh', 'sete'),
    V('delapan', 'delapan', 'oito'),
    V('sembilan', 'sembilan', 'nove'),
    V('sepuluh', 'sepuluh', 'dez'),
    V('sebelas', 'sebelas', 'onze'),
    V('puluh', 'puluh', 'dezena; dez'),
    V('ratus', 'ratus', 'centena; cem'),
    V('seratus', 'seratus', 'cem'),
    V('ribu', 'ribu', 'mil; milhar'),
    V('seribu', 'seribu', 'mil'),
    V('juta', 'juta', 'milhão'),
    V('sejuta', 'sejuta', 'um milhão'),
    V('doanya', 'dua', 'os dois'),
    V('setengah', 'setengah', 'metade'),
    V('berdua', 'dua', 'em dupla'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Os numerais levam {se} quando a palavra é fechada: {tujuh}, {delapan}, {sembilan}, {sebelas}, {seratus}, {seribu}, {sejuta}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Acima de dez, a dezena vem antes: {dua puluh}, {tiga puluh}; a unidade pode ser omitida.',
      ),
    },
    {
      n: '3',
      text: T(
        'O numeral vem antes do substantivo, sem artigo e sem preposição: {tiga buku}, {seratus orang}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O ordinal exige {yang} depois do substantivo: {buku yang kedua}, nunca {buku kedua}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Frações usam {se-} mais {per-} mais o numeral: {setengah}, {seperempat}, {sepertiga}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Numeral nominalizado'),
      text: T(
        'Com {-nya} o numeral deixa de contar e passa a retomar o conjunto: {doanya} «os dois», {seribunya» «os mil». É a forma mais curta que existe para dizer «quantos» e ao mesmo tempo «todos eles».',
      ),
    },
    {
      label: T('Formas do texto bíblico'),
      text: T(
        'O indonésio bíblico escrito prefere a forma por composição, {dua ribu}, e não a forma curta {doanya}. As formas com {-nya} são do registro falado e aparecem pouco num texto solene.',
      ),
    },
  ],
  examples: [
    { text: 'Ada dua orang di pintu.', gloss: T('Há duas pessoas na porta.') },
    { text: 'Saya punya tiga buku.', gloss: T('Eu tenho três livros.') },
    { text: 'Dua puluh satu murid hadir.', gloss: T('Vinte e um disciples were present.') },
    { text: 'Yang kedua lebih mahal.', gloss: T('The second is more expensive.') },
    { text: 'Buku yang terakhir ini bagus.', gloss: T('This last book is good.') },
    { text: 'Doanya pergi bersama.', gloss: T('Os dois foram embora.') },
    { text: 'Ribuan orang datang.', gloss: T('Milhares de pessoas vieram.') },
    { text: 'Separuh dari mereka sudah pergi.', gloss: T('Metade deles já se foi.') },
    { text: 'Dua orang itu berdua.', gloss: T('Aquelas duas pessoas, as duas juntas.') },
    { text: 'Dia membawa lima roti.', gloss: T('Ele traz cinco pães.') },
  ],
  tables: [
    {
      caption: T('De um a doze'),
      head: ['Número', 'Indonésio', 'Número', 'Indonésio'],
      rows: [
        ['1', 'satu', '7', 'tujuh'],
        ['2', 'dua', '8', 'delapan'],
        ['3', 'tiga', '9', 'sembilan'],
        ['4', 'empat', '10', 'sepuluh'],
        ['5', 'lima', '11', 'sebelas'],
        ['6', 'enam', '12', 'dua belas'],
      ],
    },
    {
      caption: T('As casas decimais'),
      head: ['Casa', 'Uma unidade', 'Com numeral', 'Leia como'],
      rows: [
        ['dezena', 'sepuluh', 'dua puluh', 'vinte'],
        ['dezena + unidade', 'sebelas', 'dua puluh satu', 'vinte e um'],
        ['centena', 'seratus', 'tiga ratus', 'trezentos'],
        ['milhar', 'seribu', 'dua ribu', 'dois mil'],
        ['milhão', 'sejuta', 'dua juta', 'dois milhões'],
        ['fração', 'setengah', 'seperempat', 'um quarto'],
      ],
    },
    {
      caption: T('Onde o numeral pode aparecer'),
      head: ['Posição', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        ['antes do substantivo', 'N + nome', 'tiga buku', 'três livros'],
        ['depois de ada', 'ada + N', 'ada dua orang', 'há duas pessoas'],
        ['depois do substantivo', 'nome + yang + N', 'buku yang kedua', 'o segundo livro'],
        ['coletivo', 'ber- + N', 'berdua', 'em dupla'],
        ['nominalizado', 'N + nya', 'doanya', 'os dois'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «o segundo livro»?'),
    options: [T('buku yang kedua'), T('buku kedua'), T('kedua buku'), T('buku yang dua')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «vinte e um» = dua puluh ___.'),
      answer: 'satu',
      hint: T('A unidade depois da dezena.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é a forma correta de «dois mil»?'),
      options: [T('dua ribu'), T('satu ribu'), T('dua seribu'), T('ribu dua')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o número ao valor'),
      pairs: [
        { a: T('{seratus}'), b: T('100') },
        { a: T('{seribu}'), b: T('1000') },
        { a: T('{sejuta}'), b: T('um milhão') },
        { a: T('{setengah}'), b: T('metade') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('Numeral'),
  title: T('Numeral'),
  subtitle: T('satu, sepuluh, seratus, seribu: the classical form and the short form'),
  body: C(`## From one to twenty

{satu}, {dua}, {tiga}, {empat}, {lima}, {enam}, {tujuh}, {delapan}, {sembilan}, {sepuluh}, {sebelas}, {dua belas}. From ten on the construction is regular: the ten comes first, the unit comes after, and the unit may be left out. {Dua puluh} is twenty; {dua puluh satu} is twenty-one.

One detail that sounds like noise and is actually system: the numerals {tujuh}, {delapan}, {sembilan}, {sebelas}, {seratus}, {seribu} and {sejuta} take {se} in front. The rule is that {se} turns up when the numeral word is closed in two or more syllables and disappears when it is open: {tujuh}, but {enam} and {dua}. Anyone who memorises the numbers without understanding the {se} memorises seventeen words and cannot predict the next one.

And {satu} has two lives: numeral, in {satu buku} "one book", and the {se} that fuses with the classifier, in {seorang} "one person", {seekor} "one animal", {sebuah} "one object". Same origin, and what decides is what follows the noun.

## Tens, hundreds, thousands

Above ten the language is compositional, and the pieces are five: {-puluh} ten, {-ratus} hundred, {-ribu} thousand, {-juta} million, {-miliar} billion.

{2} × {10} = {dua puluh}; {3} × {10} = {tiga puluh}; {10} × {10} = {seratus}. The numeral comes before the name of the decimal place, and the name of the place can also stand alone as a noun: {puluh} "ten", {ratus} "hundred", {ribu} "thousand", {juta} "million". {Ribuan orang} is thousands of people; {sepuluh orang} is ten people.

After ten comes {ribu}, and there the first real irregularity appears: {seribu} "a thousand", not {satu ribu}. The rule is that {ribu} is {seribu} on its own, but in {dua ribu} the {se} is back as the {se} of {satu}, and in {dua ribu} and {tiga ribu} there is nothing at all. The same goes for {juta}: {sejuta} is one million, {dua juta} is two million.

And there is a third route, the shortest of all, which is the form Portuguese handles with an indefinite article but which here works as a noun stuck to the numeral: {doanya} "the two of them", {tiganya} "the three", {seribunya} "the thousand", {jutaannya} "the millions". It is the numeral with {-nya}, and it means "how many" and "all of them" at once. Anyone who reads {doanya} as "the second" has read it wrong: {yang kedua} is what the second is.

## Where the numeral can stand

The numeral comes before the noun, always, with no article and no preposition: {tiga buku}, {sepuluh rumah}, {seratus orang}. There is no way to say "of three" or "the three".

After {ada}, the numeral works as a subject and comes straight after: {ada dua orang di pintu} "there are two people at the door", {ada tiga buku} "there are three books". And it is the numeral that identifies the subject, since {ada} identifies nothing.

After a noun, the numeral only appears with {yang}: {yang kedua}, {yang ketiga}, {yang terakhir}. {Buku kedua} does not exist; {buku yang kedua} does. Portuguese has a single word for the ordinal and Indonesian has two, one of them always the same.

And there is a use of the numeral that counts nothing: {berdua} "the two together", {bertiga} "in threes", {berlima} "in fives", with {ber-} plus the numeral. {Dua orang itu berdua} is "those two people, both together", and {ber-} says they count as a group.

Fractions use another base: {setengah} "half", {seperempat} "a quarter", {sepertiga} "a third", {seperenam} "a sixth". The pattern is {se-} plus {per-} plus the numeral. It is the same information Greek expresses with {to de}.

## Lima roti dan dua ikan

{the account of the feeding} in {John 6:9} has the most famous pair of numerals in the text: {lima roti dan dua ikan}. Five and two, with no preposition, no article, and the noun right after the number.

A reader coming from Portuguese expects "the five loaves and the two fish", with an article on both, and looks in {lima} and {dua} for something that is not there. It is not there because the numeral does not inflect in Portuguese and does not inflect in Indonesian: in both languages it is {lima} and {dua} in front of any noun, definite or not. The difference is that Portuguese puts an article and Indonesian does not, and the reader has to decide alone whether the {dua} that follows is "the two" or "two".

The feeding account in {Matthew 14:19} adds what was missing: the verb {berkahi} over {lima} and {dua}. It is the text that shows the numeral as a subject, and it is why the arithmetic of the New Testament, which Greek marked with case, shows up in Indonesian with no marking at all.`),
  vocab: [
    V('satu', 'satu', 'one'),
    V('dua', 'dua', 'two'),
    V('tiga', 'tiga', 'three'),
    V('empat', 'empat', 'four'),
    V('lima', 'lima', 'five'),
    V('enam', 'enam', 'six'),
    V('tujuh', 'tujuh', 'seven'),
    V('delapan', 'delapan', 'eight'),
    V('sembilan', 'sembilan', 'nine'),
    V('sepuluh', 'sepuluh', 'ten'),
    V('sebelas', 'sebelas', 'eleven'),
    V('puluh', 'puluh', 'ten; the ten'),
    V('ratus', 'ratus', 'hundred; the hundred'),
    V('seratus', 'seratus', 'one hundred'),
    V('ribu', 'ribu', 'thousand'),
    V('seribu', 'seribu', 'one thousand'),
    V('juta', 'juta', 'million'),
    V('sejuta', 'sejuta', 'one million'),
    V('doanya', 'dua', 'the two of them'),
    V('setengah', 'setengah', 'half'),
    V('berdua', 'dua', 'the two together'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Numerals take {se} when the word is closed: {tujuh}, {delapan}, {sembilan}, {sebelas}, {seratus}, {seribu}, {sejuta}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Above ten the ten comes first: {dua puluh}, {tiga puluh}; the unit may be left out.',
      ),
    },
    {
      n: '3',
      text: T(
        'The numeral comes before the noun, with no article and no preposition: {tiga buku}, {seratus orang}.',
      ),
    },
    {
      n: '4',
      text: T('An ordinal needs {yang} after the noun: {buku yang kedua}, never {buku kedua}.'),
    },
    {
      n: '5',
      text: T(
        'Fractions use {se-} plus {per-} plus the numeral: {setengah}, {seperempat}, {sepertiga}.',
      ),
    },
  ],
  notes: [
    {
      label: T('The nominalised numeral'),
      text: T(
        'With {-nya} the numeral stops counting and starts picking the set back up: {doanya} "the two", {seribunya} "the thousand". It is the shortest form there is for saying "how many" and "all of them" at the same time.',
      ),
    },
    {
      label: T('Forms in Biblical text'),
      text: T(
        'Written Biblical Indonesian prefers the compositional form, {dua ribu}, and not the short {doanya}. The {-nya} forms belong to speech and turn up rarely in solemn prose.',
      ),
    },
  ],
  examples: [
    { text: 'Ada dua orang di pintu.', gloss: T('There are two people at the door.') },
    { text: 'Saya punya tiga buku.', gloss: T('I have three books.') },
    { text: 'Dua puluh satu murid hadir.', gloss: T('Twenty-one disciples were present.') },
    { text: 'Yang kedua lebih mahal.', gloss: T('The second is more expensive.') },
    { text: 'Buku yang terakhir ini bagus.', gloss: T('This last book is good.') },
    { text: 'Doanya pergi bersama.', gloss: T('The two of them left together.') },
    { text: 'Ribuan orang datang.', gloss: T('Thousands of people came.') },
    { text: 'Separuh dari mereka sudah pergi.', gloss: T('Half of them have already left.') },
    { text: 'Dua orang itu berdua.', gloss: T('Those two people, both together.') },
    { text: 'Dia membawa lima roti.', gloss: T('He brings five loaves.') },
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
    prompt: T('How do you say "the second book"?'),
    options: [T('buku yang kedua'), T('buku kedua'), T('kedua buku'), T('buku yang dua')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Fill in: twenty-one = dua puluh ___.'),
      answer: 'satu',
      hint: T('The unit after the ten.'),
    },
    {
      kind: 'choose',
      prompt: T('Which is the correct form of "two thousand"?'),
      options: [T('dua ribu'), T('satu ribu'), T('dua seribu'), T('ribu dua')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Match the number to its value'),
      pairs: [
        { a: T('{seratus}'), b: T('100') },
        { a: T('{seribu}'), b: T('1000') },
        { a: T('{sejuta}'), b: T('one million') },
        { a: T('{setengah}'), b: T('half') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};

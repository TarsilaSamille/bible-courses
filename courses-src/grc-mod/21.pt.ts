import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  section: T('Advérbio'),
  title: T('O advérbio que sai do adjetivo'),
  subtitle: T('νοερός — νοερώς — γλυκύς — γλυκέως'),
  body: C(`## O grego fabrica advérbio por regra

O latim não flexiona o advérbio: {bene} de {bonus}, {male} de {malus}, e a relação é deposição. O grego moderno é o contrário: o advérbio é o adjetivo com o final trocado, e a troca é mecânica depois da primeira declinação.

A regra principal cabe numa linha: **adjetivo em {-ος} dá advérbio em {-ώς}**. {νοερός} dá {νοερώς}, {σοφός} dá {σοφώς}, {χαρίσιος} dá {χαρισίως}, {ωραίος} dá {ωραία}, {γλυκύς} dá {γλυκέως}. Não há exceção na série; o que muda é o final do substantivo de origem, não o do advérbio.

O advérbio é uma palavra só — e não flexiona: {νοερώς} é igual para o masculino, para o feminino e para o plural. O português tem três, «rápido», «rápida», «rápidos», e o grego tem um.

## Quatro finais, quatro advérbios

O {-ώς} não é o único. Cada família de adjetivos tem o seu, e o padrão se stabiliza depois da primeira declinação:

- adjetivo em {-ικός} dá {-ικά}: {πραγματικός} dá {πραγματικά}
- adjetivo em {-ύς} dá {-έως}: {γλυκύς} dá {γλυκέως}, {πικρύς} dá {πικρέως}
- adjetivo em {-ος} dá {-ώς}: {καλός} dá {καλά}, {ωραίος} dá {ωραία}
- adjetivo curto dá {-α}: {πολύς} dá {πολύ}, {λίγος} dá {λίγο}

Quem descobre qual é o final de um adjetivo já sabe o advérbio, sem nunca o ter visto. É a diferença entre decorar e deduzir.

## Onde o advérbio entra na frase

Enquanto o substantivo vai quase sempre atrás do verbo, o advérbio pode vir antes, no meio ou depois. {Μιλάει σοφώς}, {σοφώς μιλάει}, {μιλάει σοφώς}. As três são a mesma frase e a tradução só muda quando o advérbio cai em posição inicial, porque aí vira foco.

O advérbio de lugar é ainda mais solto: {εδώ}, {εκεί}, {αλλού}, {πάνω}, {κάτω}, {μέσα}, {έξω}. Nenhum deles tem sintaxe própria, e é por isso que a posição deles é o único dado que a frase traz.
A distinção que o grego antigo tratava como algo menor é o que separa {ο σοφός λέει} de {σοφώς λέει}. O primeiro diz que o homem é sábio, e o conteúdo disso é sobre ele. O segundo diz que ele fala bem, e o conteúdo é sobre o ato de falar. São afirmações diferentes sobre coisas diferentes, e a escolha do advérbio é a escolha do que se quer afirmar.

Em {μιλούσε σοφώς} o advérbio tem um {-ώς} que vem do adjetivo {σοφός}, e o verbo está no imperfeito. Quem traduz lê «ele falava sabiamente» e acerta as duas coisas de uma vez.

## O advérbio na Escritura

> Ὁ δὲ πιστεύων εἰς ἐμὲ καθὼς εἶπεν ἡ γραφή, ποταμοὶ ἐκπορεύσονται ἐκ τῆς κοιλίας αὐτοῦ ὕδατος ζῶντος.

{Tῆς} é um substantivo que não flexiona, {ζῶντος} é um genitivo que concorda com {ὕδατος}, e {ποταμοὶ} é um nominativo plural sem artigo. Tudo isso é sintaxe de nome. O advérbio está em {ἐκπορεύσονται}, que é a terceira pessoa do plural do futuro de {ἐκπορεύομαι}, e a frase inteira diz «correrão para fora». Quem lê o versículo procurando advérbio encontra substantivo, porque o grego antigo tinha poucos e a Escritura quase não os usa. `),
  vocab: [
    V('νοερός', 'νοερός', 'mental'),
    V('νοερώς', 'νοερώς', 'mentalmente'),
    V('σοφός', 'σοφός', 'sábio'),
    V('σοφώς', 'σοφώς', 'sabiamente'),
    V('γλυκύς', 'γλυκύς', 'doce'),
    V('γλυκέως', 'γλυκέως', 'docemente'),
    V('καλός', 'καλός', 'bom'),
    V('καλά', 'καλά', 'bem'),
    V('χαρίσιος', 'χαρίσιος', 'agradável'),
    V('χαρισίως', 'χαρισίως', 'agradavelmente'),
    V('πραγματικός', 'πραγματικός', 'prático'),
    V('πραγματικά', 'πραγματικά', 'praticamente'),
    V('πολύ', 'πολύ', 'muito'),
    V('λίγο', 'λίγο', 'pouco'),
    V('εδώ', 'εδώ', 'aqui'),
    V('πάνω', 'πάνω', 'em cima'),
    V('μιλάει', 'μιλάω', 'fala'),
  ],
  rules: [
    { n: '§1', text: T('Adjetivo em -ος dá advérbio em -ώς: νοερός → νοερώς, σοφός → σοφώς.') },
    { n: '§2', text: T('Adjetivo em -ικός dá -ικά, em -ύς dá -έως, e o curto dá -α.') },
    {
      n: '§3',
      text: T('O advérbio não flexiona: é o mesmo para todos os gêneros e todos os números.'),
    },
    {
      n: '§4',
      text: T(
        'O advérbio pode vir antes, no meio ou depois do verbo; só em posição inicial vira foco.',
      ),
    },
  ],
  notes: [
    {
      label: T('Latim'),
      text: T(
        ' bene, male e male volo são fixes por convenção, não por regra. O grego faz a mesma coisa por morfologia, e é por isso que a lista de advérbios é infinita em vez de memorizada.',
      ),
    },
    {
      label: T('Koiné'),
      text: T(
        'Na Escritura o advérbio aparece quase sempre em -ως, e quase sempre em posição inicial: καθὼς, ὡσαύτως, ὁμοίως. É a posição que marca a comparação, e é por isso que o grego antigo colocava o advérbio de comparação onde o moderno não coloca.',
      ),
    },
  ],
  examples: [
    { text: 'μιλάει σοφώς', gloss: T('fala sabiamente') },
    { text: 'μιλάει καλά', gloss: T('fala bem') },
    { text: 'ζει ασφαλώς', gloss: T('vive com segurança') },
    { text: 'περπατάει άσχημα', gloss: T('anda mal') },
    { text: 'πίνει λίγο', gloss: T('bebe pouco') },
    { text: 'δουλεύει πολύ', gloss: T('trabalha muito') },
    { text: 'εδώ μιλάει ήσυχα', gloss: T('aqui fala baixinho') },
    { text: 'ο σοφός λέει σοφώς', gloss: T('o sábio fala sabiamente') },
  ],
  tables: [
    {
      caption: T('Adjetivo e advérbio'),
      head: ['Επίθετο', 'Επίρρημα'],
      rows: [
        ['νοερός', 'νοερώς'],
        ['σοφός', 'σοφώς'],
        ['χαρίσιος', 'χαρισίως'],
        ['γλυκύς', 'γλυκέως'],
        ['πικρύς', 'πικρέως'],
      ],
    },
    {
      caption: T('O final que decide'),
      head: ['Τελευταίο επιθέτου', 'Τελευταίο επιρρήματος', 'Ζεύγος'],
      rows: [
        ['-ος', '-ώς', 'σοφός → σοφώς'],
        ['-ικός', '-ικά', 'πραγματικός → πραγματικά'],
        ['-ύς', '-έως', 'γλυκύς → γλυκέως'],
        ['βραχύ', '-α', 'πολύς → πολύ'],
      ],
    },
    {
      caption: T('Advérbios de lugar'),
      head: ['Είδος', 'Επίρρημα'],
      rows: [
        ['σταθερός τόπος', 'εδώ, εκεί, αλλού'],
        ['θέση', 'πάνω, κάτω'],
        ['χώρος', 'μέσα, έξω'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o advérbio de «σοφός»?'),
    options: [T('σοφία'), T('σοφώς'), T('σοφά'), T('σοφικά')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('ο άνθρωπος είναι ___ (mental)'),
      answer: 'νοερός',
      hint: T('Adjetivo, não advérbio'),
    },
    {
      kind: 'choose',
      prompt: T('Como se forma o advérbio de «γλυκύς»?'),
      options: [T('γλυκέως'), T('γλυκά'), T('γλυκώς'), T('γλυκιά')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Par adjetivo-advérbio'),
      pairs: [
        { a: 'σοφός', b: T('σοφώς') },
        { a: 'καλός', b: T('καλά') },
        { a: 'πραγματικός', b: T('πραγματικά') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
    {
      kind: 'fill',
      prompt: T('μιλάει ___ (bem, advérbio)'),
      answer: 'καλά',
      hint: T('Advérbio de καλός'),
    },
  ],
};

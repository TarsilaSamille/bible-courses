import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('Os plurais irregulares'),
  subtitle: T('uomini, uova, braccia, bar'),
  section: T('A sintaxe e o substantivo'),
  body: C(`## Cinco plurais que jogam fora a regra

O plural regular já foi visto: {-o} vira {-i}, {-a} vira {-e}, {-e} vira {-i}. O que quebra é um grupo de palavras que trocam a vogal final em vez de acrescentar uma: {uomo} → **uomini**, {donna} → **donne**, {bambino} → **bambini**, {piede} → **piedi**. O mais bonito é {uovo} → **uova** e {braccio} → **braccia**, em que o masculino {-o} vira {-a} e o plural parece feminino sem ser.

Depois há o outro grupo, o dos que parecem irregulares e não são: {cameriere} → {camerieri}, {cantante} → {cantanti}, {libro} → {libri}. Aqui nada de exceção; é a grade comum, e a surpresa é só nossa.

## Onde o plural não muda absolutamente nada

Há substantivos que não aceitam plural nenhum, e a forma fica igual para sempre: {la città} → {le città}, {la specie} → {le specie}, {la serie} → {le serie}, {il bar} → {i bar}, {il cor} → **i cor}, que também admite a forma mais culto {i cuori}. Nenhum deles denuncia o gênero na terminação, porque não há terminação nova: quem vê {le città} sabe que é feminino pelo artigo, e quem vê {i bar} sabe que é masculino pelo mesmo motivo.

## Na Bíblia

Mt 21:9 tem um plural que o leitor de português decora sem perceber: «Osanna al Figlio di Davide», precedido de {i figli di Gerusalemme}, de {le Palme}, de {cantanti} e de {i bambini}. Quatro substantivos e três plurais irregulares numa frase só.

O mais instrutivo é {i figli}: em italiano moderno é {figli}, sem o {-o} do latim. Quem escreve {i figlios} está traduzindo uma forma litúrgica e arcaica, não errando; mas num texto corrido, {i figli} é o que se espera.

## O que ler

Quando o substantivo for {uomo}, {donna}, {bambino} ou {piede}, procure o plural irregular antes de montar a frase: é o mais curto de todos e o que mais aparece. Quando o plural é idêntico ao singular, não traduza duas vezes nem suprima um artigo: a forma se repete, o artigo muda.`),
  vocab: [
    V('uomo', 'uomo', 'homem'),
    V('uomini', 'uomo', 'homens'),
    V('donna', 'donna', 'mulher'),
    V('donne', 'donna', 'mulheres'),
    V('bambino', 'bambino', 'criança'),
    V('bambini', 'bambino', 'crianças'),
    V('piede', 'piede', 'pé'),
    V('piedi', 'piede', 'pés'),
    V('uovo', 'uovo', 'ovo'),
    V('uova', 'uovo', 'ovos'),
    V('manica', 'manica', 'manga'),
    V('maniche', 'manica', 'mangas'),
    V('cameriere', 'cameriere', 'garçom'),
    V('cantante', 'cantante', 'cantante'),
    V('cantanti', 'cantante', 'cantantes'),
    V('braccio', 'braccio', 'braço'),
    V('braccia', 'braccio', 'braços'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural de uovo?'),
    options: [T('uovi'), T('uova'), T('uove'), T('uoi')],
    answer: 1,
    hint: T('Plural irregular masculino em -a.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o plural: l’uomo → ___'),
      answer: 'uomini',
      hint: T('O -o final some e entra -i.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o singular ao plural.'),
      pairs: [
        { a: 'donna', b: 'donne' },
        { a: 'braccio', b: 'braccia' },
        { a: 'manica', b: 'maniche' },
        { a: 'cantante', b: 'cantanti' },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [T('Due la città'), T('Due città'), T('Due la cittàs'), T('Dui città')],
      answer: 1,
      hint: T('Città é invariável: o artigo vai para o plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cinco plurais trocam a vogal final: uomo/uomini, donna/donne, bambino/bambini, piede/piedi, uovo/uova, braccio/braccia.',
      ),
    },
    {
      n: '2',
      text: T(
        'Substantivos em -e fazem -i como todo mundo: cameriere/camerieri, cantante/cantanti.',
      ),
    },
    { n: '3', text: T('Substantivos invariáveis mantêm a forma: città, specie, serie, bar, cor.') },
    { n: '4', text: T('No plural invariável só o artigo revela o gênero: le città contra i bar.') },
    {
      n: '5',
      text: T(
        'A letra do plural não é o gênero: braccia (masculino) e maniche (feminino) coexistem.',
      ),
    },
  ],
  notes: [
    {
      label: T('Nem todo irregular tem a mesma chave'),
      text: T(
        '{uovo} e {braccio} são masculino e viram -a; {manica} é feminino e vira -e. O que decide não é o gênero, é a palavra: não há regra que produza o grupo, é preciso decorar a lista inteira.',
      ),
    },
    {
      label: T('Quando o plural é o mesmo'),
      text: T(
        'Em {i cor} o italiano pode estar falando de corações ou de corais, porque as duas palavras são {il cor}; o contexto resolve, não a terminação. E {i figlios}, {i liberos} e {i mondi} são plurais arcaicos em -o que o português não tem: são formas litúrgicas e poéticas.',
      ),
    },
  ],
  examples: [
    { text: 'I figli di Gerusalemme acclamano.', gloss: T('Os filhos de Jerusalém julgam.') },
    { text: 'Due uomini e due donne.', gloss: T('Dois homens e duas mulheres.') },
    { text: 'Cantanti e camerieri nella sala.', gloss: T('Cantores e garçons na sala.') },
    { text: 'Cinque braccia e due uova.', gloss: T('Cinco braços e dois ovos.') },
    { text: 'Le mani e i piedi del lebbroso.', gloss: T('As mãos e os pés do leproso.') },
    { text: 'Cento bambini nella strada.', gloss: T('Cem crianças na rua.') },
    { text: 'Le città sono grandi.', gloss: T('As cidades são grandes.') },
    { text: 'I bar chiudono tardi.', gloss: T('Os bares fecham tarde.') },
  ],
  tables: [
    {
      caption: T('Plurais que exigem memória'),
      head: ['Singolare', 'Plurale', 'Cosa succede'],
      rows: [
        ['uomo', 'uomini', '-o scompare, entra -i'],
        ['donna', 'donne', '-a scompare, entra -e'],
        ['bambino', 'bambini', 'come un -o normale'],
        ['piede', 'piedi', '-e scompare'],
        ['uovo', 'uova', '-o diventa -a'],
        ['manica', 'maniche', '-a diventa -e'],
        ['cameriere', 'camerieri', '-e diventa -i'],
        ['cantante', 'cantanti', '-e diventa -i'],
        ['libro', 'libri', '-o diventa -i'],
        ['braccio', 'braccia', '-o diventa -a'],
      ],
    },
    {
      caption: T('Plurais invariáveis'),
      head: ['Singolare', 'Genere', 'Plurale'],
      rows: [
        ['la città', 'femminile', 'le città'],
        ['la specie', 'femminile', 'le specie'],
        ['la serie', 'femminile', 'le serie'],
        ['il bar', 'maschile', 'i bar'],
        ['il cor', 'maschile', 'i cor'],
        ['il paese', 'maschile', 'i paesi'],
      ],
    },
  ],
};

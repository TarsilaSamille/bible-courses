import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('O artigo: onde ele é obrigatório'),
  subtitle: T('a, an, the — a regra que o português não deixa ver'),
  section: T('Nome'),
  body: C(`## A regra, que é mais curta do que parece

O artigo {a} ou {an} acompanha o **contável singular**, e só isso: {a book}, {an idea}, {a city}, {the Word}. Quando o substantivo sai do singular, ou quando ele nunca foi contável, o artigo sai junto. Não há exceção a isso na gramática do inglês: {books} sem artigo, {information} sem artigo, {water} sem artigo.

O que muda é o motivo de cada ausência, e são dois. No plural contável o artigo simplesmente não é usado, porque a definitude já está no plural. Na massa em geral o artigo também não é usado, porque a frase fala de tudo o que cabe na palavra e não de uma parte: {Life is short} não recebe {a} nem {the}.

## Por que o erro aparece

O português alterna sem regra que o aluno consiga ver: "o pão" em geral, mas "um pão" quando se conta, "o amor", "a vida", "o Evangelho". Quem generaliza pega esse desenho e aplica ao inglês, e produz duas formas erradas ao mesmo tempo: {informations} e {the informations}.

João 1:1 na KJV traz {the Word}, {the Word was with God} e {the Word was God}. O artigo acompanha um substantivo próprio e singular, e a frase inteira se sustenta no mesmo artigo. Marcos 4:41 traz {a great calm}: {calm} é contável e {a great calm} nomeia um episódio, não uma categoria.

## O par a e an

{A} vai antes de som consonantal e {an} vai antes de som vocal. O teste é o som que sai, não a letra que está escrita: {an hour}, porque o {h} é mudo; {a university}, porque o {y} já traz o som de /ju/.

Quem decide pela grafia escreve {a hour} e {a university}, e as duas se leem errado. Com {hour} o {h} não soa; com {university} o {u} inicial soa como consoante.

## Onde a KJV omite o artigo

1 João 4:24 diz que {they that worship him must worship him in spirit and in truth}. A palavra {worship} aparece duas vezes sem artigo, porque a frase não fala de um culto específico e sim de tudo o que se entende por culto.

Hebreus 11:1 abre com {Now faith is the substance of things hoped for}, e {faith} está sem artigo pela mesma razão. {Charity} em 1 Coríntios 13:4 abre a lista do mesmo jeito, com {Charity suffereth long}.

São três substantivos massivos em geral, e nenhum deles pode receber {a} nem {the} na primeira menção.`),
  vocab: [
    V('a book', 'book', 'um livro'),
    V('an idea', 'idea', 'uma ideia'),
    V('a city', 'city', 'uma cidade'),
    V('the Word', 'word', 'a Palavra'),
    V('an hour', 'hour', 'uma hora'),
    V('a university', 'university', 'uma universidade'),
    V('an honest man', 'honest', 'um homem honesto'),
    V('a great calm', 'calm', 'uma grande calmaria'),
    V('in general', 'general', 'em geral'),
    V('article', 'article', 'artigo'),
    V('the', 'the', 'o, a (determinado)'),
    V('a', 'a', 'um, uma (indefinite)'),
    V('an', 'an', 'um, uma (indefinite)'),
    V('calm', 'calm', 'calmaria'),
    V('worship', 'worship', 'adoração'),
    V('faith', 'faith', 'fé'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O artigo indefinido (a, an) entra somente antes de substantivo contável no singular.',
      ),
    },
    {
      n: '2',
      text: T(
        'Substantivo no plural não recebe artigo nem definido nem indefinido: books, not the books and not a books.',
      ),
    },
    {
      n: '3',
      text: T(
        'Massa em geral também não recebe artigo: life is short, music is a gift, water is life.',
      ),
    },
    {
      n: '4',
      text: T('A escolha entre a e an é feita pelo som: an hour, a university, an honest man.'),
    },
    {
      n: '5',
      text: T(
        'O definido the entra antes de qualquer singular contável, de qualquer plural quando o referente já está determinado, e antes de massa quando a massa está determinada.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        '1 João 4:24 omite o artigo em worship duas vezes, Hebreus 11:1 omite em faith, e 1 Coríntios 13:4 omite em charity. A KJV faz isso porque são massas em geral.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Um artigo faltando onde o substantivo é contável singular é erro; um artigo sobrando onde o substantivo é plural ou massa em geral também é. O excesso e a omissão têm a mesma causa.',
      ),
    },
  ],
  examples: [
    { text: '{the Word}', gloss: T('a Palavra — contável singular, definido') },
    { text: '{a great calm}', gloss: T('uma grande calmaria') },
    { text: '{an hour}', gloss: T('uma hora — h mudo') },
    { text: '{a university}', gloss: T('uma universidade — u soa /ju/') },
    {
      text: '{Faith is the substance of things hoped for}',
      gloss: T('A fé é a substância das coisas esperadas'),
    },
    { text: '{Charity suffereth long}', gloss: T('O amor sofre longamente') },
    {
      text: '{books are on the shelf}',
      gloss: T('os livros estão na prateleira — plural sem artigo'),
    },
    { text: '{water is life}', gloss: T('água é vida — massa em geral') },
    { text: '{the water in the glass}', gloss: T('a água do copo — massa determinada, com the') },
    { text: '{an honest man}', gloss: T('um homem honesto') },
  ],
  tables: [
    {
      caption: T('Onde o artigo aparece'),
      head: [T('Substantivo'), T('Singular contável'), T('Plural'), T('Massa em geral')],
      rows: [
        ['book', '{a book}', '{books}', T('—')],
        ['city', '{a city}', '{cities}', T('—')],
        ['idea', '{an idea}', '{ideas}', T('—')],
        ['information', T('—'), T('—'), '{information}'],
        ['water', T('—'), T('—'), '{water}'],
        ['life', T('—'), T('—'), '{life}'],
      ],
    },
    {
      caption: T('a e an pela sonoridade'),
      head: [T('Som inicial'), T('Artigo'), T('Exemplo')],
      rows: [
        [T('consoante'), '{a}', '{a book}'],
        [T('vogal'), '{an}', '{an idea}'],
        [T('h mudo'), '{an}', '{an hour}'],
        [T('u lido /ju/'), '{a}', '{a university}'],
        [T('vogal isolada'), '{an}', '{an idea}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase está correta?'),
    options: [
      T('He gave me an useful advice'),
      T('He gave me a useful piece of advice'),
      T('He gave me many advices'),
      T('He gave me an advice'),
    ],
    answer: 1,
    hint: T('Advice é massa; para contar uma unidade, use a piece of.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Escolha o artigo: 'It took ___ hour.'"),
      answer: 'an',
      hint: T('O h de hour é mudo: o som começa por vogal.'),
    },
    {
      kind: 'fill',
      prompt: T("Complete com artigo definido: '___ water in the glass is cold.'"),
      answer: 'The',
    },
    {
      kind: 'match',
      prompt: T('Ligue o substantivo ao artigo correto.'),
      pairs: [
        { a: 'a university', b: 'a' },
        { a: 'an honest man', b: 'an' },
        { a: 'a European', b: 'a' },
        { a: 'an idea', b: 'an' },
      ],
      answer: ['0-0', '1-1', '2-0', '3-1'],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa o artigo corretamente?'),
      options: [
        T('She drinks the water every day'),
        T('She drinks water every day'),
        T('She drinks waters every day'),
        T('She drinks the waters every day'),
      ],
      answer: 1,
    },
  ],
};

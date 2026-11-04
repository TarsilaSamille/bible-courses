import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('O plural dos substantivos'),
  subtitle: T('cinco padrões principais'),
  section: T('Os substantivos'),
  body: C(`O plural alemão tem cinco patrones de terminação, e o gênero do singular decide quase tudo. O plural -e é o mais frequente e pertence sobretudo ao feminino: die Frau → die Frauen, die Stadt → die Städte, die Straße → die Straßen. Também alcança alguns masculinais: der Bote → die Boten, der Junge → die Jungen, der Hund → die Hunde.

O plural -n/-en é o dos masculinais ditos fracos e dos diminutivos: der Mensch → die Menschen, der Kunde → die Kunden, der Student → die Studenten, das Mädchen → die Mädchen. Uma regra prática: todo masculino que termina em -e, -el, -er ou -en e é de duas sílabas faz -n ou -en.

O plural -er é quase exclusivo de masculinais em -ling, -ig e -ich, e quase sempre com diéresis no plural: der Frühling → die Frühlinge, der König → die Könige, der Fuchs → die Füchse. O plural sem terminação pertence a masculinais graves: der Vater → die Väter, der Lehrer → die Lehrer, der Sohn → die Söhne. O plural -s, por fim, é reservado aos masculinais estrangeiros: der Bus → die Busse, das Auto → die Autos, der Computer → die Computer.

O diéresis do plural segue um padrão: entra em muitos monossílabos e em dissílabos terminados em -er, -el, -en (Mann → Männer, Buch → Bücher, Baum → Bäume, Vater → Väter, Mutter → Mütter), mas não entra quando o plural já tem -e ou -s (Garten → Gärten, Tag → Tage, Hund → Hunde) nem nos diminutivos (das Mädchen → die Mädchen). Assim, o plural com diéresis é um sinal bastante confiável: se apareceu o trema, o substantivo é quase sempre masculino ou neutro.`),
  vocab: [
    V('die Frauen', 'Frau', 'as mulheres (plural -e)'),
    V('die Städte', 'Stadt', 'as cidades (plural -e com diéresis)'),
    V('die Straßen', 'Straße', 'as ruas (plural -e, sem diéresis)'),
    V('die Jungen', 'Junge', 'os rapazes (plural -n)'),
    V('die Hunde', 'Hund', 'os cães (plural -e)'),
    V('die Menschen', 'Mensch', 'os seres humanos (plural -en)'),
    V('die Kunden', 'Kunde', 'os clientes (plural -en)'),
    V('die Mädchen', 'Mädchen', 'as meninas (plural sem terminação)'),
    V('die Füchse', 'Fuchs', 'as raposas (plural -e com diéresis)'),
    V('die Könige', 'König', 'os reis (plural -e)'),
    V('die Väter', 'Vater', 'os pais (plural sem terminação com diéresis)'),
    V('die Mütter', 'Mutter', 'as mães (plural -ü)'),
    V('die Bücher', 'Buch', 'os livros (plural -ü)'),
    V('die Busse', 'Bus', 'os ônibus (plural -e de palavra estrangeira)'),
    V('die Autos', 'Auto', 'os carros (plural -s)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o plural correto de "das Mädchen"?'),
    options: [T('die Mädchen'), T('die Mädchens'), T('die Mägdchen'), T('der Mädchen')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forme o plural: der König → ___'),
      answer: 'die Könige',
      hint: T('Masculino em -ig faz -e com diéresis.'),
    },
    {
      kind: 'fill',
      prompt: T('Forme o plural: die Lehrerin → ___'),
      answer: 'die Lehrerinnen',
      hint: T('Femininos fazem quase sempre -e ou -n.'),
    },
    {
      kind: 'choose',
      prompt: T('Em qual destes plurales NÃO há diéresis?'),
      options: [T('die Bücher'), T('die Männer'), T('die Hunde'), T('die Bäume')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relacione o singular ao plural.'),
      pairs: [
        { a: T('der Bus'), b: T('die Busse') },
        { a: T('das Buch'), b: T('die Bücher') },
        { a: T('der Lehrer'), b: T('die Lehrer') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Femininos quase nunca fazem plural em -er nem sem terminação: die Lehrerin → die Lehrerinnen.',
      ),
    },
    {
      n: '2',
      text: T(
        'O plural -n é obrigatório nos masculinais em -e, -el, -en e nos diminutivos, mesmo quando o singular já termina em -e: der Junge → die Jungen.',
      ),
    },
    {
      n: '3',
      text: T(
        'O diéresis do plural entra em monossílabos (Buch, Baum) e em dissílabos em -er, -el, -en (Vater, Glück), mas sai antes de -e, -en, -er e -s do plural.',
      ),
    },
    {
      n: '4',
      text: T(
        'Os diminutivos em -chen e -lein nunca recebem diéresis nem terminação nova: das Bäumchen → die Bäumchen.',
      ),
    },
  ],
  notes: [
    {
      label: T('O plural sempre leva o artigo die'),
      text: T(
        'No plural, todos os gêneros coalescem em die, e é essa fusão que torna o plural del alemán tão fácil de reconhecer. Quando a frase traz um plural com terminação visível (die Hunde), a falta de artigo não atrapalha; quando traz um plural sem terminação (die Väter), é a terminação que denuncia o gênero do singular.',
      ),
    },
    {
      label: T('Plurais aparentemente redundantes'),
      text: T(
        'Alguns plurais parecem redundantes e não são: die Kirschen é a ameixa, e Kirsch- é a parte da palavra que indica a fruta; Kirschbaum é a cerejeira. Da mesma forma, das Ei é o ovo, mas der Eisberg é o iceberg, porque -ei forma um composto diferente. Um plural com -n serve às vezes de manter o singular vivo dentro dele.',
      ),
    },
  ],
  examples: [
    { text: 'Die Frauen arbeiten viel.', gloss: T('As mulheres trabalham muito (feminino → -e).') },
    { text: 'Die Städte sind alt.', gloss: T('As cidades são antigas (diéresis com plural -e).') },
    {
      text: 'Die Jungen spielen draußen.',
      gloss: T('Os meninos jogam lá fora (masculino fraco → -n).'),
    },
    {
      text: 'Die Mädchen gehen zur Schule.',
      gloss: T('As meninas vão à escola (diminutivo sem terminação).'),
    },
    {
      text: 'Die Füchse jagen nachts.',
      gloss: T('As raposas caçam à noite (masculino em -ch → -e com diéresis).'),
    },
    {
      text: 'Unsere Lehrer sind freundlich.',
      gloss: T('Nossos professores são simpáticos (plural sem terminação).'),
    },
    {
      text: 'Die Väter kommen später.',
      gloss: T('Os pais vêm mais tarde (plural zero com diéresis).'),
    },
    {
      text: 'Die Busse fahren hier.',
      gloss: T('Os ônibus passam aqui (masculino estrangeiro → -e).'),
    },
  ],
  tables: [
    {
      caption: T('Os cinco padrões de plural'),
      head: ['Padrão', 'Terminação', 'Gênero típico', 'Exemplos'],
      rows: [
        ['1', '-e', 'feminino (e alguns masculinos)', 'die Frauen, die Straßen, die Hunde'],
        [
          '2',
          '-n / -en',
          'masculinos fracos e diminutivos',
          'die Menschen, die Kunden, die Mädchen',
        ],
        ['3', '-er', 'masculinos em -ling, -ig, -ich', 'die Füchse, die Könige, die Frühlinge'],
        [
          '4',
          '∅ (nenhuma)',
          'masculinos graves em -er, -el, -en',
          'die Väter, die Lehrer, die Söhne',
        ],
        ['5', '-s', 'masculinos estrangeiros', 'die Busse, die Autos, die Computers'],
      ],
    },
    {
      caption: T('Quando aparece o diéresis no plural'),
      head: ['Singular', 'Plural', 'Diéresis'],
      rows: [
        ['der Mann', 'die Männer', 'sim'],
        ['das Buch', 'die Bücher', 'sim'],
        ['der Baum', 'die Bäume', 'sim'],
        ['die Stadt', 'die Städte', 'sim'],
        ['der Vater', 'die Väter', 'sim'],
        ['die Straße', 'die Straßen', 'não (plural em -e)'],
        ['der Tag', 'die Tage', 'não (plural em -e)'],
        ['der Bus', 'die Busse', 'não (plural em -s)'],
        ['das Mädchen', 'die Mädchen', 'não (diminutivo)'],
        ['der Hund', 'die Hunde', 'não (plural em -e)'],
      ],
    },
  ],
};

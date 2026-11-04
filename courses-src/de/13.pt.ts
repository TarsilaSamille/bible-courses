import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('O genitivo'),
  subtitle: T('posse, origem e medida'),
  section: T('Os casos'),
  body: C(`O genitivo é o caso que menos sobreviveu na fala cotidiana e mais importa na escrita. Ele liga dois substantivos: o segundo, que vem depois, é o possuído, e o primeiro, entre parênteses, é o possuidor. Die Eltern des Mannes (os pais do homem) mostra a ordem: possessor primeiro, possuído depois.

A terminação do artigo é des ou der; a do substantivo é -s ou -es, com a exceção do masculino, que pode tomar -n: des Mannes, der Frau, des Kindes, des Vaters. Nos nomes próprios governados por artigo, a forma mais comum é des + nome sem terminação adicional: des Herrn, des Johannes, des Petrus.

Alemão de posse, o genitivo indica origem material (ein Gefühl der Dankbarkeit), medida (ein Glas Wasser) e conteúdo (der Inhalt des Buches). Em expressões de tempo, o genitivo aparece sem artigo: heute Morgen, letzten Monat, Anfang des Jahres, während des Krieges.

As preposições de genitivo são poucas e quase todas abstratas: wegen (por causa de), trotz (apesar de), während (durante), statt e anstatt (em vez de), während, außerhalb, innerhalb, hinsichtlich, betreffs, mittels, namens. Em linguagem bíblica elas são frequentes: um des Römers, wegen der Sünde.

Os verbos que regem genitivo são poucos: entbehren (privar-se de), bedürfen (necessitar de), gedenken (lembrar-se de), spotten (zombar de), hohnen (escarnir de), ermangeln (faltar). Em todos eles, a preposição pode ser substituída por von + dativo, e é assim que o falante moderno evita o caso: wegen der Sünde / von der Sünde.`),
  vocab: [
    V('der Genitiv', 'Genitiv', 'o caso genitivo'),
    V('wegen', 'wegen', 'por causa de (prep. gen.)'),
    V('trotz', 'trotz', 'apesar de (prep. gen.)'),
    V('während', 'während', 'durante (prep. gen.)'),
    V('statt', 'statt', 'em vez de (prep. gen.)'),
    V('entbehren', 'entbehren', 'privar-se de (gen.)'),
    V('bedürfen', 'bedürfen', 'necessitar de (gen.)'),
    V('gedenken', 'gedenken', 'lembrar-se de (gen.)'),
    V('der Herr', 'Herr', 'o senhor (des Herrn no genitivo)'),
    V('das Jahr', 'Jahr', 'o ano (des Jahres no genitivo)'),
    V('die Eltern', 'Eltern', 'os pais'),
    V('der Krieg', 'Krieg', 'a guerra (des Krieges no genitivo)'),
    V('ein Glas Wasser', 'Glas', 'um copo de água (medida em genitivo)'),
    V('heute Morgen', 'Morgen', 'hoje de manhã (tempo em genitivo)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "Die Liebe des Kindes", que caso tem des?'),
    options: [T('nominativo'), T('acusativo'), T('dativo'), T('genitivo')],
    answer: 3,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forme o genitivo: das Jahr → ___'),
      answer: 'des Jahres',
      hint: T('Neutro em -es no genitivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a preposição: ___ des Regens (por causa da chuva)'),
      answer: 'Wegen',
      hint: T('Preposição de genitivo de causa.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o genitivo correto de "der Vater"?'),
      options: [T('des Vaters'), T('der Vater'), T('den Vater'), T('dem Vater')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relacione a preposição ao seu sentido.'),
      pairs: [
        { a: T('trotz'), b: T('apesar de') },
        { a: T('während'), b: T('durante') },
        { a: T('statt'), b: T('em vez de') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O genitivo vem antes do substantivo que possui: die Eltern des Mannes (os pais do homem), nunca des Mannes die Eltern na fala corrente.',
      ),
    },
    {
      n: '2',
      text: T(
        'O masculino forte faz o genitivo com -es, o masculino fraco com -n e o neutro/feminino com -es ou -s: des Hauses, des Vaters, des Kindes, der Frau.',
      ),
    },
    {
      n: '3',
      text: T(
        'Nomes próprios com artigo formam o genitivo sem terminação: des Herrn, des Petrus, des Johannes; sem artigo, recebem -s: Petri, Johanns.',
      ),
    },
    {
      n: '4',
      text: T(
        'Em quase todos os casos, von + dativo pode substituir o genitivo, e é essa a solução padrão do falante contemporâneo: wegen des Mangels / von dem Mangel.',
      ),
    },
  ],
  notes: [
    {
      label: T('O genitivo em des'),
      text: T(
        'Quando não há possuidor humano, o alemão prefere o dativo com von: Die Farbe des Himmels pode ser Die Farbe vom Himmel, e a segunda soa mais natural. Isso mostra que o genitivo não desapareceu: mudou de funções.',
      ),
    },
    {
      label: T('Ligação bíblica'),
      text: T(
        'Em João 1:14, die Herrlichkeit Gottes eingeweht. O genitivo de origem é uma das marcas do estilo bíblico: a glória de Deus, a Palavra de Deus, o Filho do Homem. Em português o genitivo é raro; em alemão bíblico ele é constante, porque traduz o genitivo grego sem perder nada.',
      ),
    },
  ],
  examples: [
    {
      text: 'Die Eltern des Mannes kommen.',
      gloss: T('Os pais do homem vêm (possuidor primeiro).'),
    },
    { text: 'Des Kindes Stimme ist laut.', gloss: T('A voz da criança é alta (neutro em -es).') },
    {
      text: 'Der Name der Lehrerin fehlt.',
      gloss: T('Falta o nome da professora (feminino sem terminação).'),
    },
    {
      text: 'Wegen des Regens bleiben wir zu Hause.',
      gloss: T('Por causa da chuva ficamos em casa (wegen + gen.).'),
    },
    {
      text: 'Trotz des Mangels ist er zufrieden.',
      gloss: T('Apesar da falta ele está satisfeito (trotz + gen.).'),
    },
    {
      text: 'Während des Krieges lebte er in Wien.',
      gloss: T('Durante a guerra ele morou em Viena.'),
    },
    {
      text: 'Ein Glas Wasser bitte.',
      gloss: T('Um copo de água, por favor (medida em genitivo).'),
    },
    {
      text: 'Heute Morgen trank ich Kaffee.',
      gloss: T('Hoje de manhã tomei café (tempo em genitivo).'),
    },
  ],
  tables: [
    {
      caption: T('O genitivo em todos os casos'),
      head: ['Gênero', 'Artigo', 'Substantivo', T('Exemplo'), T('Outro exemplo')],
      rows: [
        [
          'masc.',
          'des',
          '+ s / es / n',
          'des Mannes, des Hauses, des Vaters',
          'die Liebe des Kindes',
        ],
        ['fem.', 'der', '+ (s / es)', 'der Frau, der Königin', 'der Name der Lehrerin'],
        ['neut.', 'des', '+ (s / es)', 'des Kindes, des Buches', 'der Inhalt des Buches'],
        ['plural', 'der', '+ (s / es)', 'der Eltern, der Menschen', 'der Anfang des Jahres'],
      ],
    },
    {
      caption: T('Usos do genitivo'),
      head: ['Uso', 'Exemplo', 'Tradução'],
      rows: [
        ['posse', 'das Hauses meiner Eltern', 'da casa dos meus pais'],
        ['origem material', 'ein Bild des Malers', 'um quadro do pintor'],
        ['medida', 'ein Glas Wasser, zwei Meter Höhe', 'um copo de água, dois metros de altura'],
        ['conteúdo', 'der Inhalt des Buches', 'o conteúdo do livro'],
        ['tempo', 'heute Morgen, letzten Monat', 'hoje de manhã, mês passado'],
        ['duração', 'während des Krieges', 'durante a guerra'],
        ['com preposição', 'wegen der Sünde', 'por causa do pecado'],
      ],
    },
  ],
};

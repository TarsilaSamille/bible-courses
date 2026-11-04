import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  section: T('A sintaxe'),
  title: T('Regência: os verbos que travam'),
  subtitle: T('confiar em, concordar com, lembrar-se de, e os que mudam'),
  body: C(`## O verbo que vem sem preposição e o que a exige

Regência é a preposição que um verbo exige antes do complemento. Alguns verbos dispensam a preposição: {confio nele} dá {confio} e {confio em você}; {concordo com ele} dá {concordo} e {concordo com você}. A preposição não é enfeite: sem ela o verbo fica sem objeto, e o leitor percebe que falta alguma coisa.

O que trava o leitor de texto é o contrário: verbos que **exigem** preposição e que a gramática não avisa. {depender de}, {proceder de}, {necessitar de}, {participar de}, {visar a}, {ater-se a}, {lembrar-se de}, {esquecer-se de}, {reportar-se a}. Todos esses verbos nascem com uma preposição colada, e a preposição é parte da palavra tanto quanto a raiz.

## O grupo do com e o grupo do de

Os verbos de concordância pedem {com}: {concordar com}, {lidiar com}, {conformar-se com}, {coincidir com}. Os verbos de necessidade e de participação pedem {de}: {necessitar de}, {participar de}, {tratar de}, {fazer-se de}, {dar-se de}. Os verbos de direção pedem {a}: {visar a}, {assistir a}, {proteger a}.

A preposição não é decorativa: ela diz que o verbo é relacional ou não. {concordar} sem {com} parece incompleto porque o verbo é relacional; {participar} sem {de} o mesmo. E o grego resolve isso com caso, não com preposição: quem traduz caso por caso sem saber qual é a preposição escreve errado em português e ainda elimina a informação.

## Os que mudam de preposição

Há verbos que mudam de preposição conforme o sentido, e são eles que produzem as traduções erradas. {Assistir} a uma IEnumerator é estar presente; {assistir} de doente é ter a doença. {Informar} alguém é avisar alguém; {informar} sobre algo é relatar. {Visar} a um alvo é apontar para ele; {visar} a um fim é ter por objetivo.

A regra prática: quando o verbo tem duas construções, o que decide é o complemento. Se o complemento é pessoa, a preposição costuma ser direta ou {a}; se é coisa ou assunto, costuma ser {sobre}, {em} ou {de}.

## O que ler

Em qualquer verbo transitivo, pergunte: qual é a preposição que ele exige? E o verbo tem mais de uma regência? E o complemento que vem depois é pessoa, coisa ou assunto?

Em Atos 2.38 o verbo é {sede bautizados}, e não há preposição nenhuma: o participio serve de verbo e o substantivo {todos} é o sujeito. A frase é curta porque o grego também não tinha preposição, e quem traduz acrescentando uma produz uma palavra que o original não tem.`),
  vocab: [
    V('a regência', 'regência', 'government (of verbs)'),
    V('confiar em', 'confiar', 'confiar em'),
    V('concordar com', 'concordar', 'concordar com'),
    V('depender de', 'depender', 'depender de'),
    V('lembrar-se de', 'lembrar-se', 'lembrar-se de'),
    V('esquecer-se de', 'esquecer-se', 'esquecer-se de'),
    V('necessitar de', 'necessitar', 'necessitar de'),
    V('participar de', 'participar', 'participar de'),
    V('proceder de', 'proceder', 'proceder de'),
    V('visar a', 'visar', 'visar a'),
    V('assistir a', 'assistir', 'assistir a'),
    V('implicar em', 'implicar', 'implicar em'),
    V('ater-se a', 'ater-se', 'ater-se a'),
    V('reportar-se a', 'reportar-se', 'reportar-se a'),
    V('informar sobre', 'informar', 'informar sobre'),
    V('o complemento', 'complemento', 'the complement'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Regência é a preposição que o verbo exige: {confiar em}, {concordar com}, {depender de}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbos de concordância pedem {com}; de necessidade e participação pedem {de}; de direção pedem {a}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Alguns verbos mudam de preposição conforme o sentido: {assistir a} e {assistir de}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Quando o verbo tem duas regências, o complemento decide: pessoa pede {a}, assunto pede {sobre} ou {em}.',
      ),
    },
    { n: '§5', text: T('Nem todo verbo transitivo pede preposição: {sede bautizados} dispensa.') },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'O grego e o hebraico marcam a relação por caso e por partícula, e o português por preposição. Traduzir caso por caso sem saber qual é a preposição produz frase que parece correcta e não significa o mesmo.',
      ),
    },
    {
      label: T('Cuidado com assistir'),
      text: T(
        '{Assistir} a uma reunião é estar presente; {assistir} doente é ter a doença. A mesma palavra com duas regências opostas é o que faz a leitura bíblica tropeçar em que {assistir} significa estar doente.',
      ),
    },
  ],
  examples: [
    { text: 'Confio em Deus.', gloss: T('Verbo com preposição obrigatória.') },
    { text: 'Concordo com a tua leitura.', gloss: T('Verbo relacional: pede {com}.') },
    { text: 'Depende da vontade dele.', gloss: T('Regência fixa: {de}.') },
    { text: 'Lembrei-me da promessa.', gloss: T('{Lembrar-se} exige {de}.') },
    { text: 'Esqueceu-se de tudo.', gloss: T('O mesmo grupo de {esquecer-se de}.') },
    { text: 'Necessitava de descanso.', gloss: T('{De} na regência, não {para}.') },
    { text: 'Assistiu à reunião.', gloss: T('Um dos sentidos de {assistir}.') },
    { text: 'Assistiu de febre.', gloss: T('O outro sentido: estar doente.') },
  ],
  tables: [
    {
      caption: T('Regência por grupo'),
      head: ['Grupo', 'Preposição', 'Verbos'],
      rows: [
        ['concordância', 'com', 'concordar com, coincidir com, conformar-se com'],
        ['necessidade', 'de', 'necessitar de, tratar de, fazer-se de'],
        ['participação', 'de', 'participar de, assistir de'],
        ['direção', 'a', 'visar a, assister a, proteger a'],
        ['origem', 'de', 'proceder de, resultar de, advir de'],
        ['confiança', 'em', 'confiar em, crer em, insistir em'],
      ],
    },
    {
      caption: T('Verbos com duas regências'),
      head: ['Verbo', 'Primeira regência', 'Segunda regência'],
      rows: [
        ['assistir', 'assistir a (estar presente)', 'assistir de (ter a doença)'],
        ['informar', 'informar alguém', 'informar sobre algo'],
        ['visar', 'visar a um alvo', 'visar a um fim'],
        ['implicar', 'implicar em algo', 'implicar algo'],
        ['proceder', 'proceder de algo', 'proceder bem'],
      ],
    },
    {
      caption: T('O que decide a preposição'),
      head: ['Complemento', 'Preposição típica', 'Exemplo'],
      rows: [
        ['pessoa', 'a ou direta', 'assistir ao pai'],
        ['assunto', 'sobre, em, de', 'informar sobre o caso'],
        ['origem', 'de', 'proceder de Deus'],
        ['finalidade', 'a', 'visar ao bem'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual construção está correta?'),
    options: [T('confio em Deus'), T('confio de Deus'), T('confio com Deus'), T('confio a Deus')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{concordar} exige a preposição ______.'),
      answer: 'com',
      hint: T('É um verbo relacional.'),
    },
    {
      kind: 'choose',
      prompt: T('Em “assistiu de febre”, {assistir} significa:'),
      options: [T('ter a doença'), T('estar presente'), T('olhar para'), T('pedir ajuda')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à preposição.'),
      pairs: [
        { a: T('concordar com'), b: T('com') },
        { a: T('necessitar de'), b: T('de') },
        { a: T('visar a'), b: T('a') },
        { a: T('confiar em'), b: T('em') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};

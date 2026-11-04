import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('Pares de sons e a shadda'),
  subtitle: T('ت، ط، د، ض: consoantes simples e enfáticas'),
  section: T('Alfabeto e escrita'),
  body: C(`## Cada consoante enfática tem uma parceira

Várias letras do alfabeto vêm aos pares, e em cada par uma é simples e a outra é **enfática**: {ت} contra {ط}, {س} contra {ص}, {د} contra {ض}, {ذ} contra {ظ}, {ح} contra {خ}, {ع} contra {غ}, {ه} contra {ء}. A diferença não é de grau, é de lugar: na enfática a língua sobe mais, a faringe fecha um pouco e a voz sai abafada. São duas consoantes distintas, não duas versões da mesma letra.

Nem todo par funciona assim. {ق} e {ك} não são par de enfaticidade: as duas são velares, e {ق} é feita bem atrás da boca, ao passo que {ك} é feita mais à frente. A confusão entre elas é de leitura, não de som.

## A shadda é a consoante repetida

{شَدَّة} é o sinal em forma de w que se põe em cima da consoante, e significa que ela é pronunciada duas vezes seguidas. Nunca vem sozinha: uma shadda sem vogal é ilegível, e a fatha é o padrão, como em {شَدَّة}.

A geminação aparece em três lugares, e são os três que quem lê texto antigo precisa reconhecer: o artigo diante de uma letra da classe do sol, como {الشَّمْس}; a segunda peça de uma iḍāafa, quando o substantivo perde o artigo; e a preposição {بِـ}, como em {بِالْبَيْتِ}. Nos três casos a repetição é obrigatória e a shadda é o aviso.

## Três casos em que a shadda falta

A exceção custa mais que a regra, e são três.

O imperativo da segunda forma não gemina: o de {رَدَّ} é {رُدَّ}, sem shadda, embora o passado {رَدَّ} e o presente {يَرِدُّ} a tragam. Quem escreve a shadda no imperativo escreve uma palavra que ninguém pronuncia.

Depois, raízes que parecem dobradas e não são. {رَأَى}, {دَعَا} e {وَرَى} trazem {أ} ou {و} como radical fraco, e a letra que parece a segunda do par é um apoio, não uma geminação. O contexto decide e o dicionário resolve.

Por fim, num texto não vocalizado a shadda muitas vezes não está escrita, nem a da letra solar, nem a da iḍāafa. O manuscrito entrega {الشمس} e deixa ao leitor a decisão de qual das duas consoantes soa.

## Critério de leitura

Em {فِي بَدْءِ خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ} a shadda sobre o {ش} não pertence à raiz: ela é o resto do artigo. A raiz de {سَمَاوَات} continua sendo {س م و}, e o que o manuscrito marca ali é a fusão do {ل} com a letra seguinte. Quem traduz {السَّمَاوَات} como "os céus" está certo por acidente; quem sabe de onde veio a shadda sabe por que o substantivo é plural e por que não pode receber outro artigo.`),
  vocab: [
    V('ت', 'ت', 't simples'),
    V('ط', 'ط', 't enfática; a língua sobe até a raiz da boca'),
    V('س', 'س', 's simples'),
    V('ص', 'ص', 's enfática'),
    V('د', 'د', 'd simples'),
    V('ض', 'ض', 'd enfática'),
    V('ذ', 'ذ', 'dh simples'),
    V('ظ', 'ظ', 'dh enfática'),
    V('ح', 'ح', 'h forte, sopro raspado'),
    V('خ', 'خ', 'kh'),
    V('ع', 'ع', 'ayn'),
    V('غ', 'غ', 'gh, uvular'),
    V('ه', 'ه', 'h'),
    V('ء', 'ء', 'hamza'),
    V('ق', 'ق', 'q; uvular'),
    V('ك', 'ك', 'k; velar'),
    V('شَدَّة', 'شدة', 'shadda; consoante pronunciada duas vezes'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a diferença entre {ت} e {ط}?'),
    options: [
      T('Nenhuma: são a mesma letra'),
      T('A segunda é enfática'),
      T('A primeira é enfática'),
      T('A segunda é geminada'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o nome do sinal que indica consoante dobrada: ___َدَّة'),
      answer: 'شَ',
      hint: T('É o sinal em forma de w, acima da consoante.'),
    },
    {
      kind: 'choose',
      prompt: T('Em {الشَّمْس}, a shadda indica...'),
      options: [T('raiz dobrada'), T('assimilação do artigo'), T('feminino'), T('plural')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe forma e valor.'),
      pairs: [
        { a: T('رَدَّ'), b: T('passado com geminação') },
        { a: T('يُرِدُّ'), b: T('presente com geminação') },
        { a: T('رُدَّ'), b: T('imperativo sem geminação') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Em {بِالْبَيْتِ}, qual letra é geminada?'),
      options: [T('A {ب}'), T('A {ل}'), T('A {ت}'), T('Nenhuma')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Cada par tem uma forma simples e uma enfática, e a diferença é de lugar de articulação, não de intensidade.',
      ),
    },
    {
      n: '2',
      text: T(
        '**A shadda significa que a consoante é pronunciada duas vezes**, e nunca aparece sem vogal.',
      ),
    },
    {
      n: '3',
      text: T(
        'A geminação obrigatória aparece no artigo solar, na segunda peça da iḍāafa e na preposição {بِـ}.',
      ),
    },
    { n: '4', text: T('O imperativo da segunda forma não gemina: o de {رَدَّ} é {رُدَّ}, sem shadda.') },
    {
      n: '5',
      text: T(
        'No texto não vocalizado a shadda pode faltar, e é o leitor que decide qual consoante soa.',
      ),
    },
  ],
  notes: [
    {
      label: T('Sol e lua'),
      text: T(
        'As letras que seguem o artigo e o absorvem chamam-se da classe do sol, e é aí que a shadda aparece. Todas as outras formam a classe da lua, em que o artigo se pronuncia inteiro.',
      ),
    },
    {
      label: T('O {ل} de {الله}'),
      text: T(
        'Aqui a shadda é uma geminação comum: o nome se pronuncia al-lāh, com os dois lām repetidos. O sinal pequeno que vem logo em cima é o alif sobreposto, que marca a vogal longa sem ocupar lugar na linha.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('o sol; a shadda sobre o shin é o artigo') },
    { text: 'سَلَام', gloss: T('paz; a primeira letra é simples') },
    { text: 'صَلَاة', gloss: T('oração; a primeira letra é enfática') },
    { text: 'رَدَّ', gloss: T('respondeu; o dal é dobrado') },
    { text: 'يُرِدُّ', gloss: T('ele responde; a geminação volta no presente') },
    { text: 'رُدَّ', gloss: T('responde!; o imperativo não gemina') },
    { text: 'دَرْس', gloss: T('lição; dal simples') },
    { text: 'ظِلّ', gloss: T('sombra; zh enfático') },
    { text: 'غَفَرَ', gloss: T('perdoou; gh enfático') },
  ],
  tables: [
    {
      caption: T('Os pares de consoante'),
      head: [T('N'), T('Simples'), T('Enfática'), T('Onde a diferença aparece')],
      rows: [
        ['1', 'ت', 'ط', T('a língua sobe até a raiz da boca')],
        ['2', 'س', 'ص', T('a ponta recua e o sopro muda de lado')],
        ['3', 'د', 'ض', T('a língua encosta no palato')],
        ['4', 'ذ', 'ظ', T('a ponta sai entre os dentes e a língua sobe')],
        ['5', 'ه', 'ء', T('a vogal não vibra as cordas')],
        ['6', 'ح', 'خ', T('o sopro sai raspando pela garganta')],
        ['7', 'ع', 'غ', T('oclusão na garganta com som sonorizado')],
      ],
    },
    {
      caption: T('Onde a shadda aparece'),
      head: [T('Contexto'), T('Exemplo'), T('Explicação')],
      rows: [
        [T('artigo + letra do sol'), 'الشَّمْس', T('o lām absorve a letra seguinte')],
        [
          T('segunda peça da iḍāafa'),
          'كِتَابُ الْمُعَلِّمِ',
          T('o substantivo perde o artigo e a inicial fica dobrada'),
        ],
        [T('preposição com b'), 'بِالْبَيْتِ', T('o b se gemina')],
        [T('raiz de letra dobrada'), 'رَدَّ', T('a segunda letra da raiz é repetida')],
      ],
    },
    {
      caption: T('Onde a shadda falta'),
      head: [T('Caso'), T('Exemplo'), T('Explicação')],
      rows: [
        [T('imperativo da II forma'), 'رُدَّ', T('a geminação não sobrevive à forma curta')],
        [T('radical fraco'), 'رَأَى', T('o ya e o alif não são geminação')],
        [T('texto não vocalizado'), 'الشمس', T('a shadda de fusão pode não estar escrita')],
      ],
    },
  ],
};

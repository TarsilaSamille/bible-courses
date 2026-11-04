import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('O artigo definido e as três formas'),
  subtitle: T('الشَّمْس، الْقَمَر، ٱلْعَالَمِينَ'),
  section: T('Alfabeto e escrita'),
  body: C(`## O que o artigo faz

{ال} é um morfema de definitude: transforma um nome qualquer em um nome determinado. {قَمَر} é uma lua entre outras, e {الْقَمَر} é a lua que o interlocutor já tem em mente, ou que o texto tornou única. Não há equivalente em português, onde o artigo é marca de classe e não de identidade.

Essa é a ideia. O resto da lição é sobre as três formas que esse morfema assume na página, e são três porque o som do artigo se adapta à letra que vem depois.

## Perante uma letra do sol, o lām é escrito e mudo

As vinte e oito consoantes se dividem em duas classes de catorze. As catorze letras do sol são {ت ث د ذ ر ز س ش ص ض ط ظ ن ه}; as catorze da lua são {ا ب ج ح خ ع غ ف ق ك ل م و ي}. Diante da lua, o artigo se pronuncia inteiro. Diante do sol, o lām é absorvido: **o {ل} continua escrito e mudo, e a letra do sol aparece geminada**.

Quem está aprendendo a ler disto tem a pista mais confiável da língua. {الشَّمْس} é o único nome do texto em que o artigo não soa como artigo, e a shadda avisa exatamente onde o som foi engolido.

## A terceira forma, e as suas duas aparições

O alif do artigo tem duas gravações. Na forma comum ele é um {ا} comum e sem nada em cima, como em {الْقَمَر}. Na forma que a tradição textual do Corão usa, ele é o {ٱ}, um alif com um sinal em cima que o distingue de uma palavra que começa por alif hamza. Aparece em dois lugares, e só neles: quando o artigo inicia a frase e quando a palavra está em iḍāafa com um nome próprio ou com o nome de Deus.

{ٱلْعَالَمِينَ} é o exemplo que mostra os dois de uma vez. A palavra tem iḍāafa, {ٱلْعَامِ: عَالَمِينَ}, a segunda peça é um nome próprio, e ainda assim o plural recebeu o artigo de volta. Quem traduz {وَمَنْ يُؤْمِنْ بِٱللَّهِ} como "e quem crê em Deus" entende o que se passa na palavra, mesmo sem saber a regra.

## Quando o artigo desaparece

E a exceção é maior do que parece, e merece o espaço que tem.

Na iḍāafa a segunda peça perde o artigo: {كِتَابُ الْمُعَلِّمِ}, "o livro do mestre", e não {كِتَابُ الْمُعَلِّمُ}. Quem escreve o artigo nos dois lados não está fazendo iḍāafa, está fazendo duas construções sem ligação.

Depois há os casos em que o artigo é omitido por regra e não por construção. Nomes próprios não o recebem em geral: {مَكَّة} e {مَدْيَنَ} são lugares, e {مُحَمَّد} e {عِيسَى} são pessoas. Um substantivo indefinido regido por uma preposição também não o recebe: {فِي بَيْتِ} e {فِي الْبَيْتِ} são duas frases diferentes, e a segunda acrescenta o que o texto sabe e a primeira não.

Por fim, o nome de Deus é uma mistura de regras: {الله} se escreve com {ا} em vez de {ٱ}, porque é nome próprio, e {أَسْمَاءُهُ} leva o substantivo sem artigo porque é iḍāafa. Cada palavra tem a sua regra, e é por isso que o sistema resiste a ser ensinado como regra única.

## Critério de leitura

Em {أَنْتُمْ نُورُ الْعَالَمِ} há as duas coisas ao mesmo tempo. {نُورُ} está sem artigo porque é a primeira peça de uma iḍāafa, {الْعَالَمِ} está no genitivo porque é a segunda, e o {ع} do artigo é uma letra da lua, então o artigo se pronuncia inteiro. Uma frase de sete palavras traz duas construções e um caso, e quem só lê o substantivo perde as três informações.`),
  vocab: [
    V('ال', 'ال', 'o artigo definido'),
    V('ٱل', 'ٱل', 'o artigo com alif de wasla'),
    V('الشَّمْس', 'شمس', 'o sol; o artigo aqui é mudo'),
    V('الْقَمَر', 'قمر', 'a lua; o artigo soa inteiro'),
    V('ٱلْعَالَمِينَ', 'عالم', 'do mundo; artigo no plural de iḍāafa'),
    V('السَّمَاوَات', 'سماوات', 'os céus'),
    V('نُور', 'نور', 'luz'),
    V('الْعَالَم', 'عالم', 'o mundo; em iḍāafa'),
    V('كِتَاب', 'كتاب', 'livro'),
    V('الْمُعَلِّم', 'معلم', 'o mestre'),
    V('كِتَابُهُ', 'كتاب', 'o livro dele'),
    V('فِي بَيْتِ', 'بيت', 'em uma casa'),
    V('مَكَّة', 'مكة', 'Mecca'),
    V('الْمَلَكُوت', 'ملكوت', 'o Reino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {الشَّمْس}, o que acontece com o lām do artigo?'),
    options: [T('É dobrado'), T('É escrito e mudo'), T('Vira shadda'), T('É omitido')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete com a letra da lua: {ال___رَ}, “a terra”.'),
      answer: 'أَ',
      hint: T('O alif faz parte do próprio nome da terra.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra mantém o artigo dentro de uma iḍāafa?'),
      options: [T('كِتَابُ الْمُعَلِّمِ'), T('الْمَلَكُوتِ'), T('نُورُ الْعَالَمِ'), T('فِي بَيْتِ')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associe classe e comportamento.'),
      pairs: [
        { a: T('الشَّمْس'), b: T('letra do sol') },
        { a: T('الْقَمَر'), b: T('letra da lua') },
        { a: T('ٱلْعَالَمِينَ'), b: T('artigo com wasla') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Quantas letras tem cada classe do artigo?'),
      options: [T('12'), T('13'), T('14'), T('15')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('{ال} marca definitude: sem ele o nome é indefinido, com ele é determinado.'),
    },
    {
      n: '2',
      text: T('**Perante uma letra do sol o {ل} é escrito e mudo, e a letra solar é geminada.**'),
    },
    {
      n: '3',
      text: T(
        'São catorze letras do sol e catorze da lua, e juntas dão as vinte e oito do alfabeto.',
      ),
    },
    {
      n: '4',
      text: T(
        'Na iḍāafa a segunda peça perde o artigo, mas um plural ou um nome próprio pode recuperá-lo, como em {ٱلْعَالَمِينَ}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Nomes próprios e substantivos indefinidos regidos por preposição não recebem artigo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que a shadda'),
      text: T(
        'A shadda da letra do sol é o rastro do som que o {ل} perdeu. Ela não pertence à raiz, e por isso uma pessoa que confunde a shadda com geminação de raiz vai procurar um radical dobrado que não existe.',
      ),
    },
    {
      label: T('O {ال} de {الله}'),
      text: T(
        'O nome de Deus é a forma mais citada do artigo e a mais irregular: escreve-se com {ا} simples, com o segundo {ل} sobreposto por um alif curto, e o nome recebe uma flexão de caso que nenhuma outra palavra recebe, a {اللهِ} do genitivo.',
      ),
    },
  ],
  examples: [
    { text: 'الشَّمْس', gloss: T('o sol; a shadda ocupa o lugar do som do lām') },
    { text: 'الْقَمَر', gloss: T('a lua; o artigo inteiro') },
    { text: 'ٱلْعَالَمِينَ', gloss: T('do mundo; o artigo volta no plural de iḍāafa') },
    { text: 'أَنْتُمْ نُورُ الْعَالَمِ', gloss: T('vós sois a luz do mundo') },
    { text: 'كِتَابُ الْمُعَلِّمِ', gloss: T('o livro do mestre') },
    { text: 'كِتَابُهُ', gloss: T('o livro dele') },
    { text: 'فِي بَيْتِ', gloss: T('em uma casa; sem artigo') },
    { text: 'مَكَّةَ', gloss: T('Mecca; nome próprio sem artigo') },
    { text: 'الْمَلَكُوت', gloss: T('o Reino; artigo diante de letra da lua') },
  ],
  tables: [
    {
      caption: T('As três formas do artigo na escrita'),
      head: [T('Contexto'), T('Escrita'), T('O que soa'), T('Exemplo')],
      rows: [
        [T('letra da lua'), 'الـ', T('o lām e o alif soam'), 'الْقَمَر'],
        [
          T('letra do sol'),
          T('الـ com o lām escrito e mudo'),
          T('só o som da letra do sol, dobrado'),
          'الشَّمْس',
        ],
        [T('forma uthmani'), 'ٱلـ', T('o alif de wasla, sem som próprio'), 'ٱلْعَالَمِينَ'],
        [
          T('segunda peça de iḍāafa'),
          T('sem artigo'),
          T('as duas peças soam inteiras'),
          'كِتَابُ الْمُعَلِّمِ',
        ],
      ],
    },
    {
      caption: T('As duas classes de letra'),
      head: [T('Classe'), T('Letras'), T('Comportamento'), T('Exemplo')],
      rows: [
        [
          T('do sol'),
          'ت ث د ذ ر ز س ش ص ض ط ظ ن ه',
          T('o lām é absorvido e a letra do sol gemina'),
          'الشَّمْس',
        ],
        [T('da lua'), 'ا ب ج ح خ ع غ ف ق ك ل م و ي', T('o artigo é pronunciado inteiro'), 'الْقَمَر'],
      ],
    },
    {
      caption: T('Onde o artigo some'),
      head: [T('Situação'), T('O que acontece'), T('Exemplo')],
      rows: [
        [T('iḍāafa'), T('a segunda peça perde o artigo'), 'كِتَابُ الْمُعَلِّمِ'],
        [T('substantivo regido'), T('sem artigo quando é indefinido'), 'فِي بَيْتِ'],
        [T('nome próprio'), T('não recebe artigo'), 'مَكَّة'],
        [T('iḍāafa com nome próprio'), T('o plural recupera o artigo'), 'ٱلْعَالَمِينَ'],
      ],
    },
  ],
};

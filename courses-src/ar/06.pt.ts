import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Formas derivadas II–X'),
  subtitle: T('Raízes que formam ação, intensidade e reflexão'),
  section: T('O verbo'),
  body: C(`## Uma raiz, muitos verbos

A mesma raiz triconsonantal pode gerar verbos de sentidos diferentes, e o padrão de vogais é o que organiza essa família. Com a raiz {علم}, a forma I é neutra; a II {عَلَّمَ} intensify: {عَلَّمَ} é "ensinou" em vez de "soube". A II costuma ter prefixo {ف} para o factitivo, como {فَعَّلَ}.

## As formas e o que significam

A III {فَاعَلَ} sugere oposição ou participação: {شَارَكَ} é "participou". A IV {أَفْعَلَ} e a X {اِسْتَفْعَلَ} indicam resultado ou ação dirigida — {أَرْسَلَ} "enviou", {أَنْزَلَ} "fez descer" — e a X sugere pedido ou tentativa: {اِسْتَغْفَرَ} "pediu perdão". A V {تَفَعَّلَ} sugere intensidade ou resultado: {تَعَلَّمَ} "aprendeu", {اِجْتَمَعَ} "reuniu-se".

## O que não é tradução literal

Nenhuma dessas formas se traduz por cálculo. Uma raiz pode gerar verbos cujo sentido exato é preciso memorizar, e a vogalização {َ} {ِ} {ُ} {ْ} faz parte do padrão, não é ornamento. Por isso o contexto e a lista de formas são mais seguros que a tentativa de adivinhar pelo sentido da raiz.

## Critério de leitura

Ao reconhecer uma raiz conhecida, pergunte primeiro qual forma derivada aparece — a II, a V ou a X — e só depois procure o sentido. A forma carrega informação que o dicionário em português não transmite.`),
  vocab: [
    V('عَلَّمَ', 'علم', 'ensinou'),
    V('قَدَّسَ', 'قدس', 'santificou'),
    V('قَاتَلَ', 'قاتل', 'lutou'),
    V('شَارَكَ', 'شارك', 'participou'),
    V('أَرْسَلَ', 'أرسل', 'enviou'),
    V('أَنْزَلَ', 'أنزل', 'fez descer'),
    V('تَعَلَّمَ', 'تعلم', 'aprendeu'),
    V('اِجْتَمَعَ', 'اجتمع', 'reuniu-se'),
    V('اِسْتَغْفَرَ', 'استغفر', 'pediu perdão'),
    V('بَارَكَ', 'بارك', 'abençoou'),
    V('بَرَكَ', 'بارك', 'bendisse'),
    V('كَتَبَ', 'كتب', 'escreveu'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('A que forma pertence {عَلَّمَ}?'),
    options: [T('I'), T('II'), T('IV'), T('X')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual exemplo é forma IV?'),
      options: [T('كَتَبَ'), T('بَارَكَ'), T('أَرْسَلَ'), T('اِسْتَغْفَرَ')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Associe raiz e derivado.'),
      pairs: [
        { a: T('ر-س-ل'), b: T('أَرْسَلَ') },
        { a: T('ج-م-ع'), b: T('اِجْتَمَعَ') },
        { a: T('غ-ف-ر'), b: T('اِسْتَغْفَرَ') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Complete o nome verbal de escrever: ___ابة.'),
      answer: 'كِتَابَة',
      hint: T('Começa pela raiz ك-ت-ب.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Identifique a raiz antes de memorizar o verbo; raízes fracas podem mudar o molde.'),
    },
    {
      n: '2',
      text: T('O valor do molde se ajusta ao contexto; não traduza apenas os afixos em português.'),
    },
    {
      n: '3',
      text: T(
        'Formas derivadas permanecem verbos: conservam pessoa, tempo eAbility para reger objetos.',
      ),
    },
  ],
  notes: [
    {
      label: T('Raízes de três letras'),
      text: T(
        'A análise histórica ajuda, mas a função da raiz deve ser aprendida pelo uso em vários derivados.',
      ),
    },
  ],
  examples: [
    { text: 'عَلَّمَ', gloss: T('II de علم: conhecimento; “ensinou”') },
    { text: 'تَعَلَّمَ', gloss: T('V de علم: forma reflexiva; “aprendeu”') },
    { text: 'بَارَكَ اللهُ إِبْرَاهِيمَ', gloss: T('Deus abençoou Abraão') },
  ],
  tables: [
    {
      caption: T('Formas verbais essenciais'),
      head: [T('Forma'), T('Molde'), T('Exemplos')],
      rows: [
        ['I', 'فَعَلَ', 'كَتَبَ: escrever'],
        ['II', 'فَعَّلَ', 'عَلَّمَ: ensinar; قَدَّسَ: santificar'],
        ['III', 'فَاعَلَ', 'بَارَكَ: abençoar; شَارَكَ: participar'],
        ['IV', 'أَفْعَلَ', 'أَرْسَلَ: enviar; أَنْزَلَ: fazer descer'],
        ['V', 'تَفَعَّلَ', 'تَعَلَّمَ: aprender'],
        ['VIII', 'اِفْتَعَلَ', 'اِجْتَمَعَ: reunir-se'],
        ['X', 'اِسْتَفْعَلَ', 'اِسْتَغْفَرَ: pedir perdão'],
      ],
    },
  ],
};

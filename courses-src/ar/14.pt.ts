import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Perguntas e condicionais'),
  subtitle: T('Interrogação, relação e consequência'),
  section: T('O verbo'),
  body: C(`## Perguntas

{هَلْ} abre perguntas de sim ou não e não admite resposta invertida. As interrogativas usam {مَنْ} para "quem?", {مَا} para "o quê?", {أَيْنَ} para "onde?", {مَتَى} para "quando?" e {لِمَاذَا} para "por quê?". Em {مَنْ ذَا الَّذِي} a estrutura é invertida: o pronome vem antes do relativo.

## O relativo

{الَّذِي} concorda com o antecedente em gênero e número: masculino {الَّذِي}, feminino {الَّتِي}, plural {الَّذِينَ}. Ele entra depois do substantivo e recebe o caso pedido pelo resto da oração, como qualquer substantivo.

## O condicional

{إِنْ} introduz a condição e pode vir com presente ou com passado. Em {إِنْ تُؤْمِنُ} a condição é apresentada como presente e habitual; em {إِنْ آمَنْتَ} ela aparece como evento já realizado. O verbo da consequência vem no imperfeito, como em {لَنْ يَهْلِكَ} — a consequência é negativa e futura.

## Critério de leitura

Ao encontrar {إِنْ} num versículo, pergunte primeiro se a condição está sendo descrita como hábito ou como fato, e depois quem é o sujeito da consequência — quase sempre o mesmo da condição, em forma derivada.`),
  vocab: [
    V('هَلْ', 'هل', 'acaso; pergunta'),
    V('مَنْ', 'من', 'quem'),
    V('مَا', 'ما', 'o quê'),
    V('مَاذَا', 'ماذا', 'o que; por quê'),
    V('أَيْنَ', 'أين', 'onde'),
    V('مَتَى', 'متى', 'quando'),
    V('كَيْفَ', 'كيف', 'como'),
    V('لِمَاذَا', 'لماذا', 'por quê'),
    V('الَّذِي', 'الذي', 'que; o qual'),
    V('الَّتِي', 'التي', 'que (f.)'),
    V('إِنْ', 'إن', 'se'),
    V('فَ', 'ف', 'então; pois'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que {إِنْ آمَنْتَ} pode significar?'),
    options: [T('Se creíste'), T('Se creres'), T('Não creio'), T('Creu!')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete “___ تُؤْمِنُ؟” (crês?).'),
      answer: 'هَلْ',
      hint: T('É a partícula de pergunta sim/não.'),
    },
    {
      kind: 'match',
      prompt: T('Associe pergunta e resposta esperada.'),
      pairs: [
        { a: T('مَنْ؟'), b: T('quem?') },
        { a: T('أَيْنَ؟'), b: T('lugar') },
        { a: T('مَتَى؟'), b: T('tempo') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Qual partícula introduz a consequência?'),
      options: [T('إِنْ'), T('فَ'), T('هَلْ'), T('بَيْنَ')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('{هَلْ} + verbo espera resposta sim/não.') },
    { n: '2', text: T('{إِنْ} introduz a condição; {فَ} introduz a consequência ou um novo fato.') },
    {
      n: '3',
      text: T(
        'O relativo deve concordar com o antecedente, mas sua função sintática pode ser diverse.',
      ),
    },
  ],
  notes: [
    {
      label: T('Tradução'),
      text: T(
        'A tradução literal de {لَنْ تَمُوتُوا} é “vós não.have-morredes”; o verbo recebe o sentido futuro negativo.',
      ),
    },
  ],
  examples: [
    { text: 'هَلْ تُؤْمِنُ؟', gloss: T('tu crês?') },
    { text: 'مَنْ يَعْمَلْ؟', gloss: T('quem fará?') },
    { text: 'إِنْ تُؤْمِنُ فَسَتَخْلُصُ', gloss: T('se creres, serás salvo') },
  ],
  tables: [
    {
      caption: T('Pronomes interrogativos'),
      head: [T('Palavra'), T('Pergunta')],
      rows: [
        ['مَنْ', 'quem?'],
        ['مَا / مَاذَا', 'o quê?'],
        ['أَيْنَ', 'onde?'],
        ['مَتَى', 'quando?'],
        ['كَيْفَ', 'como?'],
        ['لِمَاذَا', 'por quê?'],
      ],
    },
  ],
};

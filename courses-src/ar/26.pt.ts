import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('أن، إن، أنَّ e a partícula da negação'),
  subtitle: T('أَنْ، إِنْ، إِنَّ، لا، لَمْ، لَنْ'),
  section: T('Partículas'),
  body: C(`## Duas partículas que se confundem à primeira vista

{أَنْ} e {إِنْ} são as duas partículas que vivem na fronteira do verbo, e elas se confundem à primeira vista porque se parecem, ocupam a mesma posição e pedem a mesma coisa: um verbo no subjuntivo.

A diferença é o sentido. {أَنْ} apresenta um fato como conteúdo de outro fato: {أَنْ يَأْتِيَ الرَّجُلُ} é "que o homem venha", e o fato principal está em outra parte. {إِنْ} apresenta uma condição: {إِنْ جَاءَ الرَّجُلُ} é "se o homem vier". Uma é subordinada, a outra é hipótese.

Agora a shadda, que resolve o resto. **Uma shadda sobre a {ن} transforma as duas em partículas de ênfase**: {إِنَّ} é "certamente", e {أَنَّ} é "certamente que". {إِنَّ اللَّهَ مَعَ الصَّابِرِينَ} não é uma condição, é uma afirmação reforçada. E {أَنَّهُ صَدِيقٌ} não é uma hipótese, é uma certeza sobre o que se sabe do sujeito.

## {لا} faz dois trabalhos

A partícula negadora é uma só, e o que muda é o modo do verbo que vem depois. **Proibição é {لا} mais verbo no jussivo; negação do presente é {لا} mais verbo no indicativo.** {لا تَقْتَلُوا} é "não mateis", e a vogal final do verbo caiu: é o jussivo. {لا يَقْتُلُ} é "ele não mata", e a vogal está lá: é o indicativo.

O passado negativo tem formas próprias, e são três. {لَمْ} mais verbo é o mais comum: {لَمْ يَكُنْ} é "não estava". {لَمَا} mais verbo é o mesmo sentido com foco no momento: {لَمَّا جَاءَ}. {مَا} mais verbo é a negação sem referência de tempo: {مَا كَانَ}, "não era".

O futuro negativo é {لَنْ}: {لَنْ يَهْلِكَ} é "não perecerá". E {لَنْ} com verbo no jussivo é "não quero que": {لَنْ أَسْمَحَ} é o começo de uma oração de reproducção.

## As que abrem e fecham a oração

Depois dessas vêm as que ligam, e elas formam um conjunto pequeno e fixo, o que faz delas as mais fáceis de decorar do curso inteiro.

{إِذْ} é "quando" e também "se", e no segundo sentido vem seguido de jussivo: {إِذَا جَاءَ} é "se ele vier", com {إِذَا} em vez de {إِنْ}. {لَمَّا} é "quando" com sentido de início. {فَ} é "então" ou "pois", e é a partícula mais frequente do texto bíblico depois de {وَ}. {أَمْ} é a alternativa: {أَمْ حُمْرٌ أَمْ بَيْضَ}. {لَكِنْ} é "mas". {إِنَّمَا} é "somente" e nega o que vem depois do verbo: {إِنَّمَا بِالْحَقِّ}.

E há as duas partículas que não têm nome em português. {يَا} é o vocativo, e precede um nome próprio ou um substantivo para chamar alguém: {يَا دَاوُدُ}. {مَا} com substantivo é a partícula restritiva, e significa "aquilo que", oposta a {مَا} com verbo: {مَا فَوْقَكُمْ}.

## Critério de leitura

O sintoma mais curto é a shadda. Um {إِنّ} com {ّ} nunca é condição, é ênfase, e a tradução de "certamente" ou "de fato" sempre cabe onde aparece. Em {إِنَّ اللَّهَ مَعَ الصَّابِرِينَ} a partícula já entrega o sentido da oração inteira, e quem lê {إِنْ} sem shadda traduz "se Deus está com os pacientes", que é o oposto do que o autor escreveu.

O segundo sintoma é a terminação do verbo. Quando a negação é {لَمْ}, o verbo está no jussivo, e a queda da vogal final é o que separa {لَمْ يَكُنْ} de {لَمْ يَكُونَ}. Quando a negação é {لَنْ}, o verbo está no subjuntivo, e é a terminação do pronome que diz quem é o alvo da negação.`),
  vocab: [
    V('أَنْ', 'أن', 'que; conjunction of a subordinate clause'),
    V('إِنْ', 'إن', 'if'),
    V('إِنَّ', 'إن', 'indeed; with the shadda'),
    V('أَنَّ', 'أن', 'that; with the shadda'),
    V('كَأَنَّ', 'أن', 'as if'),
    V('لا', 'لا', 'not; never'),
    V('لَمْ', 'لم', 'not; the negative perfect'),
    V('لَنْ', 'لن', 'not; the negative future'),
    V('مَا', 'ما', 'not; restrictive particle'),
    V('إِذَا', 'إذا', 'if; when'),
    V('إِذْ', 'إذ', 'when'),
    V('فَ', 'ف', 'then; so'),
    V('أَمْ', 'أم', 'or'),
    V('لَكِنْ', 'لكن', 'but'),
    V('ثُمَّ', 'ثم', 'then; afterwards'),
    V('الصَّابِرُونَ', 'صبر', 'the patient ones'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a diferença entre {إِنْ} e {إِنَّ}?'),
    options: [
      T('Nenhuma'),
      T('A shadda: {إِنَّ} é ênfase'),
      T('A shadda: {إِنْ} é ênfase'),
      T('A vogal do verbo'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a proibição: “não mateis” é {لا ___}.'),
      answer: 'تَقْتَلُوا',
      hint: T('O verbo aparece no jussivo, sem vogal final.'),
    },
    {
      kind: 'match',
      prompt: T('Associe partícula e uso.'),
      pairs: [
        { a: T('لَمْ'), b: T('negação do passado') },
        { a: T('لَنْ'), b: T('negação do futuro') },
        { a: T('مَا'), b: T('negação sem tempo') },
        { a: T('إِنَّمَا'), b: T('somente') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em {لا يَقْتُلُ}, o verbo está no...'),
      options: [
        T('Jussivo, com proibição'),
        T('Indicativo, com negação'),
        T('Subjuntivo, com hipótese'),
        T('Imperfeito, sem negação'),
      ],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Qual partícula é o vocativo?'),
      options: [T('أَمْ'), T('لَكِنْ'), T('يَا'), T('ثُمَّ')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**{أَنْ} e {إِنْ} pedem o subjuntivo, e a shadda as transforma em ênfase: {إِنَّ} e {أَنَّ}.**',
      ),
    },
    {
      n: '2',
      text: T('{إِنْ} é condição e {إِنَّ} é afirmação reforçada; quem decide é o texto, não o leitor.'),
    },
    { n: '3', text: T('{لا} mais o jussivo proíbe; {لا} mais o indicativo nega o presente.') },
    {
      n: '4',
      text: T(
        'O passado negativo tem três formas, {لَمْ}, {لَمَّا} e {مَا}, e {لَنْ} é o futuro negativo.',
      ),
    },
    {
      n: '5',
      text: T(
        '{لَـ} inicial é proibição, e {لَا} inicial depois de pergunta significa "por que não?".',
      ),
    },
  ],
  notes: [
    {
      label: T('O jussivo que só aparece na ausência'),
      text: T(
        'A diferença entre {لا تَقْتَلُوا} e {لا يَقْتُلُ} está na terminação: no jussivo a vogal final cai. Um texto antigo nem sempre escreve essa queda, e é por isso que {لا تَقْتُلُ} aparece escrito sem ela.',
      ),
    },
    {
      label: T('Por que o subjuntivo é obrigatório'),
      text: T(
        'Depois de {إِنْ} e {أَنْ} o verbo não pode estar no indicativo, porque a oração não afirma que o evento acontece: ela o apresenta como possível. O português faz o mesmo com o subjuntivo, mas sem partícula.',
      ),
    },
  ],
  examples: [
    { text: 'أَنْ يَأْتِيَ الرَّجُلُ', gloss: T('que o homem venha') },
    { text: 'إِنْ جَاءَ الرَّجُلُ', gloss: T('se o homem vier') },
    { text: 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', gloss: T('certamente Deus está com os pacientes') },
    { text: 'أَنَّهُ صَدِيقٌ', gloss: T('que ele é fiel') },
    { text: 'لا تَقْتَلُوا', gloss: T('não mateis; proibição') },
    { text: 'لا يَقْتُلُ', gloss: T('ele não mata; negação do presente') },
    { text: 'لَمْ يَكُنْ', gloss: T('não estava') },
    { text: 'لَنْ يَهْلِكَ', gloss: T('não perecerá') },
    { text: 'مَا كَانَ', gloss: T('não era') },
  ],
  tables: [
    {
      caption: T('{أَنْ} e {إِنْ} e suas formas enfáticas'),
      head: [T('Partícula'), T('Função'), T('Modo do verbo'), T('Exemplo')],
      rows: [
        [T('أَنْ'), T('oração subordinada; "que"'), T('subjuntivo'), 'أَنْ يَأْتِيَ'],
        [T('إِنْ'), T('condição; "se"'), T('subjuntivo'), 'إِنْ جَاءَ'],
        [T('إِنَّ'), T('ênfase; "certamente"'), T('indicativo'), 'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ'],
        [T('أَنَّ'), T('ênfase; "que"'), T('indicativo'), 'أَنَّهُ صَدِيقٌ'],
        [T('كَأَنَّ'), T('comparação; "como se"'), T('indicativo'), 'كَأَنَّهُ مَاءٌ'],
      ],
    },
    {
      caption: T('{لا} e as suas vizinhas'),
      head: [T('Forma'), T('Uso'), T('Exemplo'), T('Glosa')],
      rows: [
        [T('{لا} mais jussivo'), T('proibição'), 'لا تَقْتَلُوا', T('não mateis')],
        [T('{لا} mais indicativo'), T('negação do presente'), 'لا يَقْتُلُ', T('não mata')],
        [T('{لَمْ} mais verbo'), T('negação do passado'), 'لَمْ يَكُنْ', T('não estava')],
        [T('{لَنْ} mais verbo'), T('negação do futuro'), 'لَنْ يَهْلِكَ', T('não perecerá')],
        [T('{مَا} mais verbo'), T('negação sem tempo'), 'مَا كَانَ', T('não era')],
      ],
    },
    {
      caption: T('Conectores de oração'),
      head: [T('Palavra'), T('Valor'), T('Exemplo')],
      rows: [
        [T('إِذْ'), T('quando; se'), 'إِذْ جَاءَ'],
        [T('لَمَّا'), T('quando, com início'), 'لَمَّا بَلَغَ'],
        [T('فَ'), T('então; pois'), 'فَفَهِمَ'],
        [T('أَمْ'), T('ou'), 'أَمْ حُمْرٌ'],
        [T('لَكِنْ'), T('mas'), 'لَكِنَّهُ'],
        [T('إِنَّمَا'), T('somente'), 'إِنَّمَا بِالْحَقِّ'],
        [T('ثُمَّ'), T('então; depois'), 'ثُمَّ قَامَ'],
      ],
    },
  ],
};

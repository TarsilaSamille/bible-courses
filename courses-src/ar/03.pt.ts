import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('O verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T('ذَهَبَ go, جَاءَ come, كَانَ be: os verbos que sustentam os verbos do texto bíblico'),
  body: C(`## Dez verbos, e dois que não têm sujeito

Um verbo árabe regular flexiona pelo modelo: em {كَتَبَ}, {كَتَبْتَ}, {كَتَبُوا}, o molde {كَتَبَ} é constante, só muda o final. Os essenciais fogem do modelo: {كَانَ}, {جَاءَ}, {ذَهَبَ}, {أَكَلَ}, {شَرِبَ}, {لَبِسَ}, {رَأَى}, {سَمِعَ}, {قَالَ}, {قَرَأَ}, {أَعْطَى}, {أَخَذَ} são formas que nenhuma regra repete, e são o que se lê em toda página.

São poucos e pesam muito. {ذَهَبَ} ir, {جَاءَ} vir, {كَانَ} ser/estar, {أَكَلَ} comer, {شَرِبَ} beber, {لَبِسَ} vestir, {رَأَى} ver, {سَمِعَ} ouvir, {قَالَ} dizer, {كَتَبَ} escrever, {قَرَأَ} ler, {أَعْطَى} dar, {أَخَذَ} tomar, {عَلِمَ} saber, {فَهِمَ} entender, {عَمِلَ} fazer.

## {كَانَ}: o passado, e o sujeito não dito

{كَانَ} é o verbo "ser" mais o pretérito. {كَانَ الله}, Deus foi; {وَكَانَ الْكَلِمَة}, e o Verbo era. O árabe não tem "era" nem "sou" como o português os tem; resolve com {كَانَ} no passado e com o presente implícito quando o sujeito é nome.

{يُحِبُّ} no presente não precisa de {هُوَ} à frente: {يُحِبُّ أَبُوهُ}, "ama o pai dele". O pronome {هُوَ}, {هِيَ} etc. só entra quando o sujeito é destacado ou quando não há outro sinal, como em {وَهُوَ هُنَا}, "e é aqui que ele está".

## {ذَهَبَ}, {جَاءَ} e {لَبِسَ}: o verbo faz a pessoa

O árabe não precisa do "eu", "tu" ou "ele" diante do verbo: a forma já traz a pessoa. {ذَهَبَ}, ele foi; {ذَهَبْتُ}, eu fui; {ذَهَبْتَ}, tu foste; {ذَهَبُوا}, eles foram; {ذَهَبْنَا}, nós fomos. O sufixo é o pronome.

Por isso os dez verbos essenciais se aprendem como sufixos e não como palavras soltas. {جَاءَ} vir, {جِئْتُ}, eu vim; {لَبِسَ} vestir, {لَبِسْتُ}, eu vesti; {أَكَلَ} comer, {أَكَلْتُ}, eu comi. A forma carrega a pessoa como o português a carrega no próprio substantivo {eu}, que o árabe deixa para o sufixo.

## {أَكَلَ}, {شَرِبَ}, {لَبِسَ}: o que o verbo nomeia já é a cena

No texto bíblico, {أَكَلَ} comer e {شَرِبَ} beber aparecem juntos quase sempre: {الْخُبْزَ وَالْمَاءَ}, o pão e a água. {لَبِسَ} vestir pede o objeto direto: {لَبِسَ ثِيَابًا جَدِيدَةً}, ele vestiu roupas novas. Em Marcos 1:6 o grego diz {ἔνδυμα δὲ αὐτοῦ}, e o árabe traduz com {وَكَانَ لِبَاسُهُ}, "e a sua roupa era...".

## Na Bíblia

João 1:1 abre com {كَانَ}: {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, no começo era o Verbo. {كان} está no passado, e o grego {ἦν} também. O árabe traduz a identidade do Verbo por um verbo que é o passado o tempo todo, sem que {كان} deixe de significar ser.

Mateus 6:11 traz {خُبْزَنَا كَفَافَ يَوْمِنَا}, o nosso pão para o dia de hoje, e o verbo que falta é {أَعْطِ}, "dai-nos": o imperativo de {أَعْطَى}. O pai-nosso começa a pedir sem {أَعْطِ} ao lado do pão, e o árabe deixa o verbo no vazio, como o grego.`),
  vocab: [
    V('ذَهَبَ', 'ذَهَبَ', 'ele foi / ir'),
    V('جَاءَ', 'جَاءَ', 'ele veio / vir'),
    V('كَانَ', 'كَانَ', 'ele foi / ser'),
    V('أَكَلَ', 'أَكَلَ', 'ele comeu / comer'),
    V('شَرِبَ', 'شَرِبَ', 'ele bebeu / beber'),
    V('لَبِسَ', 'لَبِسَ', 'ele vestiu / vestir'),
    V('رَأَى', 'رَأَى', 'ele viu / ver'),
    V('سَمِعَ', 'سَمِعَ', 'ele ouviu / ouvir'),
    V('قَالَ', 'قَالَ', 'ele disse / dizer'),
    V('كَتَبَ', 'كَتَبَ', 'ele escreveu / escrever'),
    V('قَرَأَ', 'قَرَأَ', 'ele leu / ler'),
    V('أَعْطَى', 'أَعْطَى', 'ele deu / dar'),
    V('أَخَذَ', 'أَخَذَ', 'ele tomou / tomar'),
    V('عَلِمَ', 'عَلِمَ', 'ele soube / saber'),
    V('فَهِمَ', 'فَهِمَ', 'ele entendeu / entender'),
    V('عَمِلَ', 'عَمِلَ', 'ele fez / fazer'),
    V('هُوَ', 'هُوَ', 'ele (pronome)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{كَانَ} faz o passado: {كَانَ الله} "Deus foi", e sem presente próprio no lugar de "é". O silêncio é a forma.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A pessoa já está no verbo: {ذَهَبَ} ele foi / {ذَهَبْتُ} eu fui / {ذَهَبُوا} eles foram. O pronome {أنا}, {أنتَ} só serve de destaque.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Os verbos essenciais não seguem molde: {ذَهَبَ}, {جَاءَ}, {كَانَ}, {أَكَلَ}, {شَرِبَ}, {لَبِسَ}, {رَأَى}, {سَمِعَ}, {قَالَ}, {كَتَبَ}, {قَرَأَ}, {أَعْطَى} precisam ser guardados um a um.',
      ),
    },
    {
      n: '§4',
      text: T('{أَكَلَ} e {شَرِبَ} aparecem juntos nos textos do pão e da água: {أَكَلَ خُبْزًا وَشَرِبَ مَاءً}.'),
    },
    {
      n: '§5',
      text: T(
        'João 1:1 precisa de {كَانَ} para dizer "era o Verbo", e {كان} em árabe não é um verbo de passado que apaga o presente: é a forma de ser.',
      ),
    },
  ],
  notes: [
    {
      label: T('{هُوَ} e {هي} são pronomes do sujeito, não do verbo'),
      text: T(
        'O verbo árabe carrega a pessoa no sufixo, e o pronome {هُوَ} entra só para mudar de pessoa ou destacar. {ذَهَبَ} já diz "ele foi"; {هُوَ ذَهَبَ} diz "foi ele que foi".',
      ),
    },
    {
      label: T('Verbos fracos ≥ j e wast'),
      text: T(
        '{جَاءَ} é verbo frágil: o {و}/{ي} no meio quebrou, e o pretérito ficou {جِئْتُ}, {جِئْتَ}. E {قَالَ} vira {قُلْتُ}. O sufixo de pessoa muda, e o radical muda com ele; são os verbos que a gramática junta num grupo só.',
      ),
    },
  ],
  examples: [
    { text: 'في البدء كان الكلمة.', gloss: T('{كَانَ}: passado de ser, Jao 1:1.') },
    { text: 'ذهبتُ إلى البيت.', gloss: T('1.ª pessoa: {ذَهَبْتُ}, o sufixo diz "eu".') },
    { text: 'جاؤوا إلى يسوع.', gloss: T('{جَاءَ} com sufixo plural: {جَاؤُوا}.') },
    { text: 'أكل يسوعُ الخبزَ.', gloss: T('{أَكَلَ} com objeto direto: o pão.') },
    { text: 'شربَ الماءَ.', gloss: T('{شَرِبَ}, beber, com objeto direto.') },
    { text: 'لبسنَ ثوبًا أبيض.', gloss: T('{لَبِسْنَ}: elas vestiram, com sufixo feminino plural.') },
    { text: 'رأى النورَ.', gloss: T('{رَأَى}, ver, com objeto.') },
    { text: 'سمعَ الصوتَ.', gloss: T('{سَمِعَ}, ouvir, com objeto.') },
    { text: 'قالَ لهُمْ.', gloss: T('{قَالَ} dizer; {لَهُمْ} a eles.') },
    {
      text: 'أعطانا خُبْزَنا.',
      gloss: T('{أَعْطَانَا}: deram-nos, {أَعْطَى} mais o sufixo enclítico {ـنَا}.'),
    },
  ],
  tables: [
    {
      caption: T('O passado dos essenciais, pessoa a pessoa'),
      head: [T('Verbo'), T('هو'), T('أنا'), T('نحن'), T('هم')],
      rows: [
        ['ذهب', 'ذَهَبَ', 'ذَهَبْتُ', 'ذَهَبْنَا', 'ذَهَبُوا'],
        ['جاء', 'جَاءَ', 'جِئْتُ', 'جِئْنَا', 'جَاؤُوا'],
        ['كان', 'كَانَ', 'كُنْتُ', 'كُنَّا', 'كَانُوا'],
        ['أكل', 'أَكَلَ', 'أَكَلْتُ', 'أَكَلْنَا', 'أَكَلُوا'],
        ['شرب', 'شَرِبَ', 'شَرِبْتُ', 'شَرِبْنَا', 'شَرِبُوا'],
        ['لباس', 'لَبِسَ', 'لَبِسْتُ', 'لَبِسْنَا', 'لَبِسُوا'],
        ['رأى', 'رَأَى', 'رَأَيْتُ', 'رَأَيْنَا', 'رَأَوْا'],
        ['سمع', 'سَمِعَ', 'سَمِعْتُ', 'سَمِعْنَا', 'سَمِعُوا'],
        ['قال', 'قَالَ', 'قُلْتُ', 'قُلْنَا', 'قَالُوا'],
        ['كتب', 'كَتَبَ', 'كَتَبْتُ', 'كَتَبْنَا', 'كَتَبُوا'],
      ],
    },
    {
      caption: T('Os sufixos da pessoa'),
      head: [T('Pessoa'), T('Sufixo'), T('Exemplo com {كتب}'), T('Glossa')],
      rows: [
        ['هو', '-a', 'كتبَ', 'ele escreveu'],
        ['أنا', '-تُ', 'كتبْتُ', 'eu escrevi'],
        ['نحن', '-نَا', 'كتبْنَا', 'nós escrevemos'],
        ['هم', '-وا', 'كتبُوا', 'eles escreveram'],
        ['هي', '-تْ', 'كتبْتْ', 'ela escreveu'],
        ['أنتما', '-تُما', 'كتبْتُما', 'vós dois escrevestes'],
      ],
    },
    {
      caption: T('Imperativo dos essenciais'),
      head: [T('Verbo'), T('أنتَ'), T('أنتِ'), T('أنتم'), T('أنتن')],
      rows: [
        ['ذهب', 'اِذْهَبْ', 'اِذْهَبِي', 'اِذْهَبُوا', T('اِذْهَبْنَ')],
        ['جاء', 'تعالَ', 'تعالي', 'تعالوا', T('تعالنَ')],
        ['أكل', 'كُلْ', 'كُلِي', 'كُلُوا', T('كُلْنَ')],
        ['شرب', 'اِشْرَبْ', 'اِشْرَبِي', 'اِشْرَبُوا', T('اِشْرَبْنَ')],
        ['قرأ', 'اِقْرَأْ', 'اِقْرَئِي', 'اِقْرَؤُوا', T('اِقْرَأْنَ')],
        ['عطي', 'أَعْطِ', 'أَعْطِي', 'أَعْطُوا', T('أَعْطِينَ')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {فِي الْبَدْءِ كَانَ الْكَلِمَةُ}, o que é {كَانَ}?'),
    options: [
      T('O verbo "ir" no pretérito'),
      T('O verbo "ser" no pretérito'),
      T('O verbo "comer" no presente'),
      T('Um pronome'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "أنا ___ إلى البيت" com a 1.ª pessoa de {ذهب}.'),
      answer: 'ذَهَبْتُ',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à tradução.'),
      pairs: [
        { a: T('{ذَهَبَ}'), b: T('ir') },
        { a: T('{جَاءَ}'), b: T('vir') },
        { a: T('{أَكَلَ}'), b: T('comer') },
        { a: T('{لَبِسَ}'), b: T('vestir') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual forma diz "eles foram"?'),
      options: [T('ذَهَبَ'), T('ذَهَبْتُ'), T('ذَهَبُوا'), T('ذَهَبْنَا')],
      answer: 2,
    },
  ],
};

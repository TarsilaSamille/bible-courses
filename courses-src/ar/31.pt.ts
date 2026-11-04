import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Leitura: Salmo 23'),
  subtitle: T('الرَّبُّ رَاعِيَّ: a frase e o que ela esconde'),
  section: T('Leituras'),
  body: C(`## A passagem em blocos

O Salmo 23 tem seis versículos e nenhuma frase é difícil isolada. O que dá valor à passagem é que ela junta, em pouco texto, tudo o que o curso inteiro confirmou.

O primeiro versículo é uma iḍāafa com pronome e uma negação: {اَلرَّبُّ رَاعِيَّ فَلاَ يُعْوِزُنِي شَيْءٌ}. {رَاعِيَّ} está no genitivo porque é a segunda peça de um conjunto cujo primeiro elemento é {اَلرَّبُّ}, e a {يَّ} final é o pronome {ـي} mais a terminação do genitivo. {شَيْءٌ} é a única palavra indefinida do versículo, e é exatamente a única que a frase nega.

O terceiro é uma iḍāafa dupla: {إِلَى مِيَاهِ الرَّحْمَةِ يُورِدُنِي}. {إِلَى} manda para genitivo, {مِيَاهِ} é a primeira peça e {الرَّحْمَةِ} a segunda, e as duas estão no genitivo. Quem traduz "para as águas" esqueceu que o destino não tem artigo em {مِيَاهِ}, e quem traduz "para as águas da misericórdia" acertou.

## O que a análise mostra

Ao longo dos seis versículos, quase toda palavra nominal está no genitivo: {مَكَانٍ، خُضْرٍ، مِيَاهِ، الرَّحْمَةِ، مَشَاوِئِ، الْبِرِّ، اسْمِهِ، ظِلِّ، الْمَوْتِ، خَيْرٍ، حَيَاتِي، الرَّبِّ، أَيَّامِ}. Só cinco palavras estão no acusativo, e quatro delas são pronomes de pessoa: {نَفْسِي، قُدَّامِي، رَأْسِي، عَصَاكَ، وَعُكَّازُكَ}. O resto está no nominativo, e são quase sempre os sujeitos.

Os verbos são poucos e estão bem distribuídos. O imperfeito predomina: {يُرْبِضُنِي، يُورِدُنِي، يُعَزِّيَانِنِي، تُرَتِّبُ، يُدَاهِمُنِي، يَتْبَعَانِنِي، أَسْكُنُ}. O perfeito aparece duas vezes, e sempre narrando o que o psalmista fez: {سِرْتُ} e {مَسَحْتَ}. O verbo da primeira pessoa que fecha o salmo, {أَسْكُنُ}, é imperfeito, e a diferença entre {سِرْتُ} e {أَسْكُنُ} é a diferença entre o que aconteceu e o que vai acontecer, e é a única informação de tempo que o salmo traz.

## O primeiro versículo e o último

O versículo 1 tem uma frase, com um sujeito, um complemento e uma negação. O versículo 6 tem seis frases, e a densidade de construções cresce sem que o texto fique mais difícil.

A progressão é essa: o versículo 1 nomeia quem é Deus, o 3 nomeia para onde ele leva, o 4 nomeia por que nome ele guia, o 5 nomeia com quem ele está, e o 6 volta a {مَائِدَةٌ}, uma mesa, e fecha no {بَيْتِ الرَّبِّ}. Uma passagem que começa por quem e termina por onde, e que no meio mostra o caminho inteiro.

O que o tradutor não pode fazer é tratar {شَيْءٌ} como definido. O indefinido é a única coisa que o versículo nega, e a tradução que escreve "nada me faltará" está certa por ter lido o indefinido e não a palavra.

## Como ler um salmo

O método cabe em cinco passos, e vale para qualquer salmo, qualquer, qualquer livro poético.

Primeiro, ache os verbos e diga a voz de cada um: perfeito, imperfeito, futuro. Segundo, procure a definitude: onde há {ال}, onde há nome próprio, onde há iḍāafa. Terceiro, siga as cadeias de genitivo e marque cada peça, porque é aí que a propriedade está. Quarto, liste as preposições e diga qual relationship cada uma estabelece. Quinto, só então traduza, palavra por palavra, e deixe a sintaxe aparecer em português na mesma ordem.

O Salmo 23 tem vinte e seis substantivos e quinze verbos. Quinze verbos é pouco: quem os leu sabe quem fala, quando, e em que voz. É por isso que a passagem inteira cabe na memória de quem estuda.`),
  vocab: [
    V('الرَّبُّ', 'رب', 'o Senhor'),
    V('رَاعِيَّ', 'راع', 'o meu pastor; iḍāafa com pronome'),
    V('شَيْءٌ', 'شيء', 'coisa; a única indefinida do versículo 1'),
    V('مَكَانٍ', 'مكان', 'lugar; genitivo'),
    V('خُضْرٍ', 'خضر', 'verde; genitivo'),
    V('يُرْبِضُنِي', 'رعى', 'pastoreia'),
    V('مِيَاهِ', 'ماء', 'águas; genitivo sem artigo'),
    V('الرَّحْمَةِ', 'رحمة', 'misericórdia; genitivo'),
    V('يُورِدُنِي', 'ورد', 'conduz'),
    V('نَفْسِي', 'نفس', 'a minha alma'),
    V('مَشَاوِئِ', 'ماشاء', 'pastos; plural quebrado'),
    V('الْبِرِّ', 'بر', 'a justiça'),
    V('وَادِي', 'واد', 'vale'),
    V('ظِلِّ', 'ظل', 'sombra; genitivo'),
    V('الْمَوْتِ', 'موت', 'a morte; genitivo'),
    V('عَصَاكَ', 'عص', 'o teu cajado; acusativo'),
    V('بَيْتِ', 'بيت', 'casa; genitivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {اَلرَّبُّ رَاعِيَّ}, qual é o caso de {رَاعِيَّ}?'),
    options: [T('Nominativo'), T('Acusativo'), T('Genitivo'), T('Vocal')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a iḍāafa: “o vale da sombra da morte” é {وَادِي ___ الْمَوْتِ}.'),
      answer: 'ظِلِّ',
      hint: T('A segunda peça de uma iḍāafa sempre vai ao genitivo.'),
    },
    {
      kind: 'match',
      prompt: T('Associe palavra e função.'),
      pairs: [
        { a: T('شَيْءٌ'), b: T('indefinido') },
        { a: T('رَاعِيَّ'), b: T('genitivo com pronome') },
        { a: T('نَفْسِي'), b: T('acusativo') },
        { a: T('بَيْتِ'), b: T('genitivo por iḍāafa') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a voz de {أَسْكُنُ}?'),
      options: [T('Perfeito'), T('Imperfeito'), T('Futuro'), T('Comando')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Quantos substantivos tem o Salmo 23, nesta contagem?'),
      options: [T('Cinco'), T('Dezesseis'), T('Vinte e seis'), T('Cinquenta')],
      answer: 2,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '**Toda iḍāafa do salmo tem a segunda peça no genitivo, e a terminação {ـِ} está lá para dizer isso.**',
      ),
    },
    {
      n: '2',
      text: T('{رَاعِيَّ} e {نَفْسِي} são iḍāafas com pronome: o segundo elemento não aparece escrito.'),
    },
    {
      n: '3',
      text: T(
        'Os verbos do psalmista se dividem em {سِرْتُ} e {مَسَحْتَ} no perfeito e {أَسْكُنُ} no imperfeito, e essa é a única informação de tempo que o salmo traz.',
      ),
    },
    {
      n: '4',
      text: T(
        'O versículo 1 tem uma frase e o versículo 6 tem seis, e a densidade de casos cresce sem o texto ficar mais difícil.',
      ),
    },
    {
      n: '5',
      text: T(
        'O verbo vem antes do sujeito quando o sujeito é um pronome: {يَتْبَعَانِنِي} vem antes de {خَيْرٌ وَرَحْمَةٌ}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que o tradutor não pode fazer'),
      text: T(
        'Uma tradução que escreve "o Senhor é o meu pastor e nada me faltará" acertou. O que ela não pode fazer é tratar {شَيْءٌ} como definido: o indefinido é a única coisa que a frase nega, e é por isso que a negação faz sentido.',
      ),
    },
    {
      label: T('O estilo do versículo seis'),
      text: T(
        'O versículo seis é uma enumeração, e enumeração em árabe traz {وَ} antes de cada item: {عَصَاكَ وَعُكَّازُكَ}, {خَيْرٌ وَرَحْمَةٌ}. O {وَ} não traduz nada em português além da vírgula, e perdê-lo faz a frase parecer mais pobre do que é.',
      ),
    },
  ],
  examples: [
    { text: 'اَلرَّبُّ رَاعِيَّ', gloss: T('o Senhor é o meu pastor; iḍāafa com pronome') },
    { text: 'فَلاَ يُعْوِزُنِي شَيْءٌ', gloss: T('e nada me faltará; o indefinido é o negado') },
    { text: 'فِي مَكَانٍ خُضْرٍ', gloss: T('em lugar de verdes pastos; dois genitivos') },
    { text: 'إِلَى مِيَاهِ الرَّحْمَةِ', gloss: T('às águas da misericórdia; iḍāafa dupla') },
    { text: 'يُرِدُّ نَفْسِي', gloss: T('restaura a minha alma; pronome no acusativo') },
    { text: 'فِي وَادِي ظِلِّ الْمَوْتِ', gloss: T('num vale de sombra de morte; três iḍāafas') },
    { text: 'لَأَنَّكَ أَنْتَ مَعِي', gloss: T('porque tu estás comigo') },
    { text: 'عَصَاكَ وَعُكَّازُكَ', gloss: T('o teu cajado e o teu apoio; dois acusativos') },
    { text: 'إِلَى مَدَى الأَيَّامِ', gloss: T('pelos dias de sempre') },
  ],
  tables: [
    {
      caption: T('O versículo 1 palavra por palavra'),
      head: [T('Palavra'), T('Papel'), T('Caso ou voz'), T('O que é')],
      rows: [
        ['اَلرَّبُّ', T('sujeito'), T('nominativo'), T('nome próprio')],
        ['رَاعِيَّ', T('complemento do sujeito'), T('genitivo'), T('iḍāafa com pronome')],
        ['فَلاَ', T('conector'), T('partícula'), T('e logo não')],
        ['يُعْوِزُنِي', T('verbo'), T('imperfeito'), T('fazer falta')],
        ['شَيْءٌ', T('objeto'), T('nominativo'), T('a única indefinida')],
      ],
    },
    {
      caption: T('As cadeias de iḍāafa'),
      head: [T('Cadeia'), T('Glosa'), T('Casos'), T('Observação')],
      rows: [
        ['رَاعِيَّ', T('o meu pastor'), T('genitivo com pronome'), T('sem nome escrito')],
        [
          'إِلَى مِيَاهِ الرَّحْمَةِ',
          T('às águas da misericórdia'),
          T('preposição e dois genitivos'),
          T('o destino não leva artigo'),
        ],
        ['مَشَاوِئِ الْبِرِّ', T('os pastos da justiça'), T('dois genitivos'), T('plural quebrado')],
        ['وَادِي ظِلِّ الْمَوْتِ', T('vale da sombra da morte'), T('três genitivos'), T('cadeia completa')],
        ['بَيْتِ الرَّبِّ', T('a casa do Senhor'), T('dois genitivos'), T('iḍāafa com nome próprio')],
      ],
    },
    {
      caption: T('Os verbos do salmo'),
      head: [T('Forma'), T('Voz'), T('Pessoa'), T('Glosa')],
      rows: [
        ['يُعْوِزُنِي', T('imperfeito'), T('terceira'), T('não me faltará')],
        ['يُرْبِضُنِي', T('imperfeito'), T('terceira'), T('repousa')],
        ['يُورِدُنِي', T('imperfeito'), T('terceira'), T('conduz')],
        ['يُعَزِّيَانِنِي', T('imperfeito'), T('segunda do dual'), T('me confortam')],
        ['سِرْتُ', T('perfeito'), T('primeira'), T('caminhei')],
        ['مَسَحْتَ', T('perfeito'), T('segunda'), T('ungiste')],
        ['أَسْكُنُ', T('imperfeito'), T('primeira'), T('habitarei')],
      ],
    },
  ],
};

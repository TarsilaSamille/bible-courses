import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Leitura: João 1:1–5'),
  subtitle: T('فِي الْبَدْءِ كَانَ الْكَلِمَةُ'),
  section: T('Leituras'),
  body: C(`## A passagem em blocos

João 1:1-5 tem quatro orações curtas. Em {فِي الْبَدْءِ} a preposição {فِي} governa o genitivo, visível na terminação {الْبَدْءِ}; o substantivo está assim no caso regido, não no nominativo. Em {كَانَ الْكَلِمَةُ} o verbo {كَانَ} expressa estado, e {الْكَلِمَةُ} é o sujeito no nominativo.

## Predicativo e aposição

Em {وَالْكَلِمَةُ كَانَتْ عِنْدَ اللهِ} o sujeito é {الْكَلِمَةُ}. No versículo 1, quando o texto diz que a Palavra *era* Deus, {اللهَ} não é sujeito: está em acusativo, como predicativo. É a marca de que o versículo não cabe numa leitura gramatical simples. Em {نُورَ النَّاسِ} acontece o mesmo: {نُورَ} é predicativo e {النَّاسِ} está em genitivo por aposição.

## Tempo e aspecto

{كَانَ يُضِيءُ النُّورُ} traz o imperfeito {يُضِيءُ} para descrever algo contínuo. O versículo 5,{النُّورُ يُضِيءُ فِي الظُّلْمَةِ}, mantém a luz como agente de uma ação que continua, e {الظُّلْمَة} não a recebe. Note a diferença: quem recebe a luz seria objeto direto, o que exigiria uma preposição ou marcação de caso correta.

## Critério de leitura

Marque cada oração e identifique primeiro o verbo, depois o sujeito, e só então os demais termos. Quase todo erro de leitura de João 1 nasce de trocar sujeito por predicativo.`),
  vocab: [
    V('الْبَدْء', 'بدء', 'princípio'),
    V('كَانَ', 'كان', 'era; esteve'),
    V('الْكَلِمَة', 'كلمة', 'a Palavra'),
    V('عِنْدَ', 'عند', 'junto a'),
    V('الله', 'الله', 'Deus'),
    V('فِيهِ', 'في', 'nele; nele mesmo'),
    V('الْحَيَاة', 'حياة', 'a vida'),
    V('النَّاس', 'ناس', 'os seres humanos'),
    V('النُّور', 'نور', 'a luz'),
    V('يُضِيءُ', 'أضاء', 'ilumina'),
    V('الظُّلْمَة', 'ظلام', 'as trevas'),
    V('وَ', 'و', 'e; e também'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que {اللهَ} tem fatha final?'),
    options: [
      T('Porque é sujeito'),
      T('Porque é predicativo de كَانَ'),
      T('Porque é plural'),
      T('Por convenção'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('O substantivo após {فِي} está em caso genitivo: complete “فِي ___”.'),
      answer: 'الْبَدْءِ',
      hint: T('A terminação muda para -i.'),
    },
    {
      kind: 'match',
      prompt: T('Associe palavra e sentido.'),
      pairs: [
        { a: T('نُور'), b: T('luz') },
        { a: T('حَيَاة'), b: T('vida') },
        { a: T('ظُلْمَة'), b: T('trevas') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'choose',
      prompt: T('Em {الْكَلِمَةُ كَانَ اللهَ}, qual word é o sujeito?'),
      options: [T('اللهَ'), T('الْكَلِمَةُ'), T('كَانَ'), T('و')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('O nome de {كَانَ} ocupa o nominativo; o predicado pode levar o acusativo.') },
    {
      n: '2',
      text: T(
        'A terminação {اللهَ} com fatha final marca acusativo neste contexto, não uma forma alternativa do nome.',
      ),
    },
    {
      n: '3',
      text: T('A {و} inicial liga orações e pode repetir um elemento semântico já conocido.'),
    },
  ],
  notes: [
    {
      label: T('Transcrição'),
      text: T(
        'As vogais longas podem não ser escritas no texto ONG; elas normalmente persistem na pronúncia bíblica fully vocalized.',
      ),
    },
  ],
  examples: [
    { text: 'وَالْكَلِمَةُ كَانَ عِنْدَ اللهِ', gloss: T('e a Palavra estava com Deus') },
    { text: 'وَالْحَيَاةُ كَانَتْ نُورَ النَّاسِ', gloss: T('e a vida era a luz dos seres humanos') },
    { text: 'وَالنُّورُ يُضِيءُ فِي الظُّلْمَةِ', gloss: T('e a luz brilha nas trevas') },
  ],
  tables: [
    {
      caption: T('Análise sintática'),
      head: [T('Segmento'), T('Função'), T('Português')],
      rows: [
        ['فِي الْبَدْءِ', 'prep. + gen.', 'no princípio'],
        ['كَانَ الْكَلِمَةُ', 'verbo + sujeito', 'a Palavra era'],
        ['عِنْدَ اللهِ', 'prep. + gen.', 'junto a Deus'],
        ['اللهَ', 'predicativo acusativo', 'era Deus'],
      ],
    },
  ],
};

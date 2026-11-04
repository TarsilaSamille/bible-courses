import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Imperfeito, futuro e modos'),
  subtitle: T('O valor do tempo depende do contexto'),
  section: T('O verbo'),
  body: C(`## O imperfeito não é "agora"

O imperfeito arábigo não tem valor de presente obrigatório. Ele pode ser habitual — {كَانَ يُضِيءُ النُّورُ} pode descrever o que a luz fazia continuamente — ou histórico, quando o passado recebe forma de imperfeito para narrar. O que decide é o contexto, não a vogalização: {ـُ} no final é a marca do modo.

## Os modos

O jussivo perde a vogal final: {يَكْتُبْ} é "que escreva". O subjuntivo costuma manter fatha: {يَكْتُبَ} é "que escreva" em contexto de desejo ou ordem. Em {لِيَكُنْ نُورٌ} o jussivo aparece depois de {لِ} — é a partícula de ordem.

## Negação e futuro

{لَمْ} nega o passado, {لَنْ} nega o futuro e {لا} nega o presente. Para o futuro há {سَ}-, como em {سَيَكْتُبُ} "ele escreverá", e {سَوْفَ}, que acentua o futuro: {سَوْفَ} acrescenta distância ou ênfase. A escolha entre os dois muda o tom, não o fato.

## Negação concatenada

Quando {لَمْ} encontra o jussivo ou o subjuntivo, os dois se fundem: {لَمْ يَكْتُبْ} é "não escreveu" com um único foco na negação. O mesmo vale para {لَمَّا}. O verbo fica assim com o final de um único tempo, o que costuma confundir quem traduz palavra por palavra.

## Critério de leitura

Identifique primeiro a negação ({لَمْ}, {لَنْ}, {لا}), depois o tempo do verbo que a segue, e só então traduza. No texto original a posição da negação é o que fixa o tempo.`),
  vocab: [
    V('يَكْتُبُ', 'كتب', 'ele escreve'),
    V('تَكْتُبُ', 'كتب', 'tu escreves; ela escreve'),
    V('أَكْتُبُ', 'كتب', 'eu escrevo'),
    V('نَكْتُبُ', 'كتب', 'nós escrevemos'),
    V('يَكْتُبُونَ', 'كتب', 'eles escrevem'),
    V('سَيَكْتُبُ', 'كتب', 'ele escreverá'),
    V('سَوْفَ', 'سوف', 'certamente; futuramente'),
    V('لَمْ', 'لم', 'não + passado'),
    V('لَنْ', 'لن', 'não + futuro'),
    V('لِيَكُنْ', 'كان', 'seja'),
    V('يَعْمَلُ', 'عمل', 'ele faz'),
    V('يَعْلَمُ', 'علم', 'ele sabe'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Que valor expressa {لَمْ يَكْتُبْ}?'),
    options: [T('Futuro'), T('Passado negativo'), T('Presente negativo'), T('Dúvida')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transforme o jussivo: يَكْتُبُ → ___'),
      answer: 'يَكْتُبْ',
      hint: T('Retire a última vogal breve.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual forma tem valor futuro próximo?'),
      options: [T('لَنْ يَكْتُبَ'), T('سَيَكْتُبُ'), T('لَمْ يَكْتُبْ'), T('كَانَ يَكْتُبُ')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associe marcador e tempo.'),
      pairs: [
        { a: T('لَمْ'), b: T('não escreveu') },
        { a: T('لَنْ'), b: T('não escreverá') },
        { a: T('سَ'), b: T('escreverá') },
      ],
      answer: [0, 1, 2],
    },
  ],
  rules: [
    { n: '1', text: T('O jussivo perde a última vogal breve: {يَكْتُبُ} → {يَكْتُبْ}.') },
    { n: '2', text: T('{لَمْ} + jussivo produz passado negativo: {لَمْ يَكْتُبْ}.') },
    { n: '3', text: T('{لَنْ} + subjuntivo produz futuro negativo enfático: {لَنْ يَكْتُبَ}.') },
  ],
  notes: [
    {
      label: T('Tempo'),
      text: T(
        'O tempo gramatical e o tempo de referência são diferentes: {كَانَ يَقْرَأُ} pode ser “costumava ler”.',
      ),
    },
  ],
  examples: [
    { text: 'كَانَ يُضِيءُ النُّورُ', gloss: T('a luz vinha iluminando') },
    { text: 'لِيَكُنْ نُورٌ', gloss: T('haja luz') },
    { text: 'لَنْ تَمُوتُوا', gloss: T('não.have-vos-morte; “não.have-morredes”') },
  ],
  tables: [
    {
      caption: T('Formas de كتب'),
      head: [T('Tipo'), T('Forma'), T('Valor típico')],
      rows: [
        ['imperfecto', 'يَكْتُبُ', 'presente; habitual; passado'],
        ['jussivo', 'لِيَكْتُبْ', 'desejo; finalidade; exhortação'],
        ['subjuntivo', 'لَنْ يَكْتُبَ', 'fato futuro; resultado'],
        ['futuro', 'سَيَكْتُبُ', 'ação futura'],
      ],
    },
  ],
};

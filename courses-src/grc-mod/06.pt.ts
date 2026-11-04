import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Passado: aoristo'),
  subtitle: T('μίλησα, έφαγα, πήγα'),
  section: T('O verbo'),
  body: C(`## O aoristo é o tempo padrão do passado

Se uma frase grega antiga está no passado e você não sabe em que tempo, quase certamente é aoristo. Ele é o tempo "neutro": sem valor de aspecto, cobre o que aconteceu uma vez, o que aconteceu muitas vezes e o que começou. Só o contexto diz qual.

O aoristo ativo segue o tema do presente: μιλώ → **μίλησα**, μίλησες, μίλησε, μιλήσαμε, μιλήσατε, μίλησαν. Note o acréscimo de -σα no singular. O acento pode recuar (λέω → είπα, de άλφω), mas a forma é reconhecida pelo tema e pelas terminações.

## Os irregulares são um conjunto fixo

Um punhado de verbos troca o tema inteiro: τρώω → **έφαγα**, πάω → **πήγα**, βλέπω → **είδα**, λέω → **είπα**, παίρνω → **πήρα**, βρίσκω → **βρήκα**. São os verbos que você aprende de cor porque a forma não sai do presente. λέω é o caso curioso: continua irregular no presente (λέω, λες, λέει) e irregular no aoristo (είπα), e a forma mais comum de toda a Bíblia.

## Aoristo, imperfeito e as texturas que faltam

O **imperfeto** (lesson 9) é o outro lado: ação em curso, costume, ou ação passada com ideia de duração. **ἐλάλουν** «falava» ao lado de **εἶπα** «disse» é a diferença mais útil da língua. Um versículo com os dois te dá oNarrador em ação: o que foi dito (aoristo) e o que se dizia em volta (imperfeto).

## θα e o futuro

θα + forma verbal forma o futuro, e não se combina com να: θα μιλήσω «falarei», não θα να μιλήσω. Mas na fala, θα μιλήσω pode significar «falarei» ou «posso falar», dependendo do contexto — a mesma ambiguidade que o português tem em "vai fazer" ou "vai chover".

## O que ler

Sempre que um verbo estiver no aoristo, pergunte: o texto está contando um fato, um hábito, ou um começo? A forma não diz; a situação diz. E se λέω aparecer, quase sempre é είπα — o irregular mais presente na Bíblia.`),
  vocab: [
    V('μίλησα', 'μιλώ', 'falei'),
    V('μίλησε', 'μιλώ', 'falou'),
    V('μιλήσαμε', 'μιλώ', 'falamos'),
    V('μίλησαν', 'μιλώ', 'falaram'),
    V('έφαγα', 'τρώω', 'comi'),
    V('πήγα', 'πάω', 'fui'),
    V('είδα', 'βλέπω', 'vi'),
    V('είπα', 'λέω', 'disse'),
    V('θα', 'θα', 'partícula de futuro'),
    V('μίλησες', 'μιλώ', 'falaste'),
    V('μιλήσατε', 'μιλώ', 'falastes'),
    V('πάω', 'πάω', 'vou'),
    V('λέω', 'λέω', 'digo'),
    V('να', 'να', 'que (subjuntivo)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('βλέπω → eu vi'),
    answer: 'είδα',
    hint: T('Aoristo irregular'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('«Nós falamos ontem»'),
      options: [T('μιλήσαμε'), T('μιλάμε'), T('μιλάτε'), T('μίλησαν')],
      answer: 0,
    },
    { kind: 'fill', prompt: T('εγώ ___ τον φίλο μου'), answer: 'είδα', hint: T('βλέπω → aoristo') },
    {
      kind: 'match',
      prompt: T('Associar presente e aoristo'),
      pairs: [
        { a: 'τρώω', b: 'έφαγα' },
        { a: 'πάω', b: 'πήγα' },
        { a: 'λέω', b: 'είπα' },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [
    { n: '§1', text: T('O aoristo não exige ideia de duração.') },
    { n: '§2', text: T('A negação mantém δεν: δεν μίλησα.') },
  ],
  notes: [
    {
      label: T('Demótico × koiné'),
      text: T(
        'είπα, έφαγα e πήγα pertenece al pasado demótico; εἶπεν, ἔφαγεν y ἐπῆλθεν são formas do sistema koiné.',
      ),
    },
  ],
  examples: [
    { text: 'χθες μίλησα μαζί σου', gloss: T('ontem falei contigo') },
    { text: 'δεν είπα τίποτα', gloss: T('não disse nada') },
  ],
  tables: [
    {
      caption: T('Aoristo regular'),
      head: ['Pronome', 'Singular', 'Plural'],
      rows: [
        ['1ª', 'μίλησα', 'μιλήσαμε'],
        ['2ª', 'μίλησες', 'μιλήσατε'],
        ['3ª', 'μίλησε', 'μίλησαν'],
      ],
    },
  ],
};

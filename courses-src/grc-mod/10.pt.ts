import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Passado contínuo'),
  subtitle: T('μίλαγα — eu falava'),
  section: T('O verbo'),
  body: C(`## O que o imperfeito pinta

O imperfeito não marca tempo: ele pinta. Serve para três coisas — uma ação que ainda não terminou enquanto falamos, um hábito, ou o cenário de fundo. Compare: «μιλούσα» (eu falava) e «μιλάγα» (a forma popular) são o mesmo tempo com duas tradições; a culta descende de -ουσα, a popular troca por -αγα.

Repare no que muda e no que não muda: a pessoa continua -ω, -εις, -ει, -ουμε, -ετε, -ουν nos dois sistemas. O que muda é o meio da raiz.

## Habito x Cena

Κάθε μέρα έπινα νερό — «todo dia bebia água» — o hábito vem do verbo principal. Από τότε έπινα νερό — «bebia água de lá» — a cena vem do verbo principal, e επινα pode significar algo totalmente diferente em outro contexto. É por isso que a tradução de um tempo quase nunca é palavra por palavra: você traduz a relação no tempo, não o tempo.

## Os irregulares

ἤμουν, εἶχα, ἔτρωγα e ἕπινα não seguem nenhum padrão. São os mais frequentes da língua, e por isso os mais irregulares. Aprenda os quatro como um bloco.

## Critério de leitura

Ao traduzir um imperfeito, faça a pergunta: «o que estava acontecendo» ou «o que acontecia sempre»? Se o verbo da oração seguinte é um aoristo, quase sempre é cena. Se se repete, é hábito.`),
  vocab: [
    V('μίλαγα', 'μιλώ', 'falava'),
    V('μιλάγαμε', 'μιλώ', 'falávamos'),
    V('μίλαγαν', 'μιλώ', 'falavam'),
    V('ήμουν', 'είμαι', 'era/estava'),
    V('είχα', 'έχω', 'tinha'),
    V('έτρωγα', 'τρώω', 'comia'),
    V('ήπινα', 'πίνω', 'bebia'),
    V('προσευχόταν', 'προσεύχομαι', 'orava'),
    V('μιλούσα', 'μιλώ', 'falava (forma culta)'),
    V('μίλησα', 'μιλώ', 'falei (evento)'),
    V('κάθε', 'κάθε', 'cada'),
    V('μέρα', 'μέρα', 'dia'),
    V('νερό', 'νερό', 'água'),
    V('φίλος', 'φίλος', 'amigo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual forma é imperfeito popular?'),
    options: [T('μίλαγα'), T('μίλησα'), T('θα μιλήσω'), T('μιλώ')],
    answer: 0,
  },
  exercises: [
    { kind: 'fill', prompt: T('εγώ ___ μικρός'), answer: 'ήμουν', hint: T('Imperfecto de είμαι') },
    {
      kind: 'choose',
      prompt: T('Qual verbo completa o fundo?'),
      options: [T('μίλησα'), T('μιλούσα'), T('θα πω'), T('πω')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Associar sentido'),
      pairs: [
        { a: 'μιλούσα', b: T('fundo') },
        { a: 'μίλησα', b: T('evento') },
        { a: 'θα πω', b: T('futuro') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('Imperfecto para fundo; aoristo para evento.') }],
  notes: [
    { label: T('Registro'), text: T('μιλαγα es coloquial; μιλούσα pertenece al registro culto.') },
  ],
  examples: [{ text: 'ενώ μιλούσα, ήρθε ο φίλος', gloss: T('enquanto falava, veio o amigo') }],
  tables: [
    {
      caption: T('Fundido narrativo'),
      head: ['Tiempo', 'Verbo'],
      rows: [
        ['fondo', 'μιλούσα'],
        ['evento', 'μίλησα'],
      ],
    },
  ],
};

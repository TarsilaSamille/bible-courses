import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('Discurso indireto'),
  subtitle: T('disse che sarebbe venuto'),
  section: T('A sintaxe e o substantivo'),
  body: C(`## Quem relata anda para trás no tempo

Quando alguém reproduz uma fala que aconteceu antes, **os verbos avançam no tempo**: o presente vira imperfeito, o futuro vira condicional, e o *passato prossimo* vira *trapassato prossimo*. É **a regra do discurso indireto**, e em italiano ela não tem exceção.

{Dice che viene} («diz que vem») vira {disse che veniva}. {Dice che verrà} («diz que virá») vira {disse che sarebbe venuto}. {Dice che è venuto} («diz que veio») vira {disse che era venuto}. O condicional {sarebbe venuto} é o que mais intriga: é o futuro do ponto de vista do narrador, e ao ser relatado passa a condicional. Quem escreve «disse que virá» errou o tempo.

## Quando o congiuntivo sobrevive

Se a oração original já está no congiuntivo, por dúvida, finalidade ou hipótese, o discurso indireto costuma manter o congiuntivo. E às vezes há marca de aspecto: {disse che sarebbe venuto} pode ser «disse que talvez viesse», porque {sarebbe} carrega a dúvida que o narrador não confirma.

O italiano tem futuro composto ({vedrà}, {avrà visto}) e *trapassato*, e no discurso indireto os dois às vezes convergem: {disse che sarebbe venuto} e {disse che era venuto} podem coexistir na mesma frase, com nuance de tempo diferente.

## Perguntas e ordens no discurso indireto

As perguntas indiretas **mantêm a ordem da pergunta direta**, sem inversão: {Dove abiti?} vira {domandò dove abitasse}. Repare no {abitasse}, que substitui o presente {abiti}. E as ordens podem usar {di} mais infinitivo: {ordinò di uscire}, «ordenou que saísse».

Em ambos os casos, o que era pergunta ou ordem na frase original vira uma oração declarativa: não há mais ponto de interrogação nem verbo principal no imperativo. Traduzir {Dove abiti?} seguido de {domandò} como «Onde você mora? Ele perguntou» erra a estrutura.

## O que ler

Sempre que vir {disse che} seguido de um verbo que não está no passado, vá ao passado. E se o verbo estiver no condicional, {sarebbe}, {avrebbe}, {potrebbe}, quase sempre é discurso indireto: futuro relatado, ou dúvida que o narrador deixa aberta.`),
  vocab: [
    V('disse', 'dire', 'disse'),
    V('veniva', 'venire', 'vinha'),
    V('sarebbe venuto', 'venire', 'teria vindo'),
    V('era venuto', 'venire', 'tinha vindo'),
    V('domandò', 'domandare', 'perguntou'),
    V('di uscire', 'uscire', 'para sair'),
    V('abitasse', 'abitare', 'morasses'),
    V('ordinò', 'ordinare', 'ordenou'),
    V('dica', 'dire', 'diga'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Dice che verrà, no discurso indireto, vira…'),
    options: [
      T('Disse che verrà'),
      T('Disse che sarebbe venuto'),
      T('Disse che viene'),
      T('Disse che venga'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transforme: dice che è venuto → disse che ___ venuto'),
      answer: 'era',
      hint: T('Presente → trapassato prossimo.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se torna Dove abiti? no discurso indireto?'),
      options: [T('Dove abiti?'), T('dove abitasse'), T('dove abiterai'), T('che abiti')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: Il maestro ordinò ___ uscire'),
      answer: 'di',
      hint: T('Ordem + di + infinitivo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No discurso indireto o presente vira imperfeito, o futuro vira condicional e o *passato prossimo* vira *trapassato prossimo*: {dice che viene} → {disse che veniva}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Disse che sarebbe venuto} é o futuro do ponto de vista do narrador; escrever «disse che virà» erra o tempo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Se a oração original já está no congiuntivo, o discurso indireto o mantém: {disse che sarebbe venuto} pode ser «disse que talvez viesse».',
      ),
    },
    {
      n: '4',
      text: T(
        'A pergunta indireta mantém a ordem direta e usa o congiuntivo: {Dove abiti?} → {domandò dove abitasse}.',
      ),
    },
    {
      n: '5',
      text: T(
        'A ordem indireta usa {di} mais infinitivo: {ordinò di uscire}, e o imperativo vira declarativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Che cosa} ou {se}'),
      text: T(
        'Uma pergunta direta vira indireta com dois recursos: {che} para o sujeito, {so che viene}, e {se} para os demais, {non so se viene}. O pronome também sobe: {lo} vira {che lo}, em {so che lo vedo}.',
      ),
    },
    {
      label: T('{Sarebbe} pode ser dúvida'),
      text: T(
        'No congiuntivo, {sarebbe} carrega a dúvida que o narrador não confirma, e é por isso que muitas traduções italianas escrevem «disse che forse sarebbe venuto». O futuro relatado e o condicional de dubiedade são a mesma forma em italiano.',
      ),
    },
  ],
  examples: [
    { text: 'Gesù disse: «Verrò».', gloss: T('Jesus disse: «Virei».') },
    { text: 'Disse che veniva.', gloss: T('Disse que vinha.') },
    { text: 'Disse che sarebbe venuto.', gloss: T('Disse que viria.') },
    { text: 'Disse che era venuto.', gloss: T('Disse que tinha vindo.') },
    {
      text: 'Gli uomini dissero che sarebbe venuto.',
      gloss: T('Os homens disseram que ele viria.'),
    },
    { text: 'Domandò dove abitasse.', gloss: T('Perguntou onde morava.') },
    { text: 'Ordinò di uscire.', gloss: T('Ordenou que saísse.') },
    { text: 'Non so se viene.', gloss: T('Não sei se ele vem.') },
  ],
  tables: [
    {
      caption: T('Discurso direto e indireto'),
      head: ['Frase diretta', 'Frase indiretta'],
      rows: [
        ['dice che viene', 'disse che veniva'],
        ['dice che verrà', 'disse che sarebbe venuto'],
        ['dice che è venuto', 'disse che era venuto'],
        ['Dove abiti?', 'domandò dove abitasse'],
        ['Esci di qui', 'ordinò di uscire'],
      ],
    },
    {
      caption: T('Conector da pergunta indireta'),
      head: ['Domanda', 'Nella indiretta'],
      rows: [
        ['so che viene', 'che (sujeito)'],
        ['so se viene', 'se (todo o resto)'],
        ['so chi viene', 'chi'],
        ['so dove abita', 'dove'],
        ['so quando arriva', 'quando'],
      ],
    },
  ],
};

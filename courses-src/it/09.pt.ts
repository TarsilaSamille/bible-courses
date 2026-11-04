import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Imperfeto e passato prossimo'),
  subtitle: T('parlava × ha parlato'),
  section: T('O tempo do verbo'),
  body: C(`## Dois passados, dois trabalhos

O italiano fala do passado com dois verbos que fazem trabalhos diferentes: o *imperfeto* **monta o cenário**, e o *passato prossimo* relata o fato. O imperfeito é idade, estado, hábito e ação em curso: {aveva venticinque anni}, {vivevano a Roma}, {parlava}. O *passato prossimo* é o evento delimitado: {venne l’angelo}, {ha parlato}, {abbiamo mangiato}.

A imagem que funciona é a de um palco: o imperfeito é o cenário, e o *passato prossimo* é o que acontece nele. Numa frase, os dois juntos formam a narração; sem os dois, o texto fica plano.

## A formação do imperfeito

No grupo {-are}, o imperfeito **conserva o tema do presente**: {parlare} → {parlavo}, {parlavi}, {parlava}, {parlavamo}, {parlavate}, {parlavano}. O mesmo em {credere} → {credevo} e {finire} → {finivo}. {Essere} e {avere} são irregulares: {ero}, {eri}, {era}, {eravamo}, {eravate}, {erano}, e {avevo}, {avevi}, {aveva}, {avevamo}, {avevate}, {avevano}.

Repare que o imperfeito não tem forma separada para o {io}: o {-o} é igual ao do presente, e é a terminação que faz o trabalho. Por isso {parlavo} pode ser «eu falava» ou, em registro raro, «eu falarei», e a leitura temporal vem do contexto.

## O par que define a cena

{Mentra pregava, venne l’angelo} **é o exemplo que separa os dois tempos**. O verbo de cenário fica no imperfeito, o fato no *passato prossimo*. {Pioveva quando siamo usciti} mostra a mesma estrutura com {quando}: a circunstância no imperfeito, o fato no *passato prossimo*.

É aqui que a tradução perde. O grego distingue o que acontecia de vez em quando do que acontecia sempre; o italiano usa o imperfeito para os dois, e quem traduz tem de decidir pela gramática do contexto e não pela intuição.

## Na Bíblia

{La luce era} expressa existência contínua: a luz estava lá, sem começo marcado. {La luce fu}, no paralelo de Gênesis, apresenta o resultado pontual do mandamento: a luz passou a existir. É a mesma diferença entre {disse} e {fu scritto}, agora entre dois passados.

Se a tradução usa «era» nos dois lugares, perdeu a distinção que o italiano faz. E se usa «existia» num e «foi» no outro, acertou: é a diferença de que a narrativa depende.

## O que ler

Sempre que ver {mentra}, {quando} ou {finché} perto de um verbo no passado, pergunte qual dos dois é cenário e qual é fato. O que estiver no *passato prossimo* é o que aconteceu; o que estiver no imperfeito é o pano de fundo.`),
  vocab: [
    V('parlava', 'parlare', 'falava'),
    V('credevo', 'credere', 'criá'),
    V('finivo', 'finire', 'terminava'),
    V('ero', 'essere', 'era'),
    V('avevo', 'avere', 'tinha'),
    V('pioveva', 'piovere', 'chovia'),
    V('mentra', 'mentra', 'enquanto'),
    V('quando', 'quando', 'quando'),
    V('pregava', 'pregare', 'orava'),
    V('venne', 'venire', 'veio'),
    V('usciti', 'uscire', 'saído'),
    V('vivevano', 'vivere', 'viviam'),
    V('luce', 'luce', 'luz'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Quais são os imperfeitos de essere e avere?'),
    options: [T('era / aveva'), T('ero / avevo'), T('sarei / avrei'), T('sia / abbia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: quando ___ (piovere, io, imperf.)'),
      answer: 'pioveva',
      hint: T('3.ª pessoa do imperfeito.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase relata uma cena em curso?'),
      options: [
        T('Mentre pregava, venne l’angelo.'),
        T('Ho pregato e l’angelo è venuto.'),
        T('Prego e l’angelo viene.'),
        T('Pregherò quando verrà.'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Complete: sono arrivat_ ieri'),
      answer: 'i',
      hint: T('Noi: sono + participio plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O imperfeto monta o cenário e o *passato prossimo* relata o fato: {parlava} e {venne}.',
      ),
    },
    {
      n: '2',
      text: T(
        'No grupo {-are} o imperfeito conserva o tema do presente: {parlare} → {parlavo}, {parlavi}, {parlava}, {parlavamo}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Essere} e {avere} são irregulares: {ero}, {era}, {eravamo}, {erano} e {avevo}, {aveva}, {avevamo}, {avevano}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O imperfeito não tem forma própria de {io}, e por isso {parlavo} também pode ser «eu falarei» em registro raro.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com {mentra} e {quando} a circunstância vai no imperfeito e o fato no *passato prossimo*: {mentra pregava, venne l’angelo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O imperfeito recua'),
      text: T(
        '{Da tre anni studio} é o que continua; {ho studiato tre anni} é o que já terminou. A diferença é de ponto de vista e não de tempo: a mesma pessoa que estuda faz as duas frases verdadeiras ao mesmo tempo.',
      ),
    },
    {
      label: T('O par que se traduz junto'),
      text: T(
        '{Mentre pregava, venne l’angelo} só é frase em italiano. Traduzir os dois verbos pelo mesmo tempo em português esconde a distinção que o italiano faz com convicção, e o leitor perde a noção de que algo interrompeu a cena.',
      ),
    },
  ],
  examples: [
    { text: 'Mentra pregava, venne l’angelo.', gloss: T('Enquanto orava, veio o anjo.') },
    { text: 'Pioveva quando siamo usciti.', gloss: T('Chovia quando saímos.') },
    { text: 'Gesù camminava sul mare.', gloss: T('Jesus andava sobre o mar.') },
    { text: 'I discepoli ebbero paura.', gloss: T('Os discípulos tiveram medo.') },
    { text: 'Maria leggeva la Scrittura.', gloss: T('Maria lia as Escrituras.') },
    { text: 'Le donne erano in giardino.', gloss: T('As mulheres estavam no jardim.') },
    { text: 'Aveva venticinque anni.', gloss: T('Tinha vinte e cinco anos.') },
    { text: 'Era la luce nel mondo.', gloss: T('A luz estava no mundo.') },
  ],
  tables: [
    {
      caption: T('Imperfetto di parlare'),
      head: ['Persona', '-are', '-ere', '-ire', 'irregolari'],
      rows: [
        ['io', 'parlavo', 'credevo', 'finivo', 'ero, avevo'],
        ['tu', 'parlavi', 'credevi', 'finivi', 'eri, avevi'],
        ['lui/lei', 'parlava', 'credeva', 'finiva', 'era, aveva'],
        ['noi', 'parlavamo', 'credevamo', 'finivamo', 'eravamo, avevamo'],
        ['voi', 'parlavate', 'credevate', 'finivate', 'eravate, avevate'],
        ['loro', 'parlavano', 'credevano', 'finivano', 'erano, avevano'],
      ],
    },
    {
      caption: T('Cena e fato'),
      head: ['Frase', 'Imperfetto', 'Passato prossimo'],
      rows: [
        ['mentra pregava, venne l’angelo', 'pregava', 'venne'],
        ['pioveva quando siamo usciti', 'pioveva', 'siamo usciti'],
        ['la luce era nel mondo', 'era', '—'],
        ['la luce fu creata', '—', 'fu'],
      ],
    },
  ],
};

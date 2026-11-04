import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Voz passiva'),
  subtitle: T('fu scritto; si vendono case'),
  section: T('Os pronomes e a passiva'),
  body: C(`## Duas passivas, e só uma é a que você conhece

A passiva clássica, literária e bíblica, usa {essere} mais participio: {Il Vangelo fu scritto}, «o Evangelho foi escrito». **O participio concorda com o sujeito**, {Cristo fu crocifisso}, {le parole furono scritte}, e o agente, se vier, vem com {da}: {fu scritto da Giovanni}.

Repare que a passiva clássica conjugou {essere} no passado: {fu}, {furono}. É a mesma construção do *passato prossimo*, {fu scritto} vale como {è stato scritto}, com a diferença de que aqui o foco é o resultado: a escritura está feita, e o efeito permanece.

## {Si} mais verbo pronominal: a do dia a dia

No italiano cotidiano, a passiva é {si} mais verbo pronominal: {Si vendono case}, «se vendem casas», {Si parla italiano}. **O verbo agora concorda com o sujeito da frase**: {le case si vendono}, {i libri si leggono}, {le donne si incontrano}.

É aqui que muita tradução tropeça. {Si vendono case} não quer dizer que as casas se vendem umas às outras: o {si} **aqui é partícula passiva**, e a frase significa que o mundo vende casas. Traduzir {si} por «se» cria uma ambiguidade que o italiano nativo não sente.

## Nem todo {si} é passiva

Em {si lava} «ele lava a si mesmo», o {si} é pronome reflexivo. A diferença: se {si} vem antes de verbo transitivo direto e o sujeito faz a ação em si mesmo, é reflexivo, {si lava le mani}, «lava as próprias mãos»; se o sentido é passivo, é partícula, {si vendono case}.

O contexto decide. Em {Maria si è vestita} pode ser «Maria se vestiu» ou «Maria foi vestida» por outra pessoa. A ambiguidade é real, e os falantes a resolvem pela informação que têm: quem fala sabe se foi ela quem vestiu.

## Na Bíblia

Nos textos bíblicos, {fu scritto} focaliza o resultado: a escritura aconteceu e o efeito permanece. {Scrisse} ou {aveva scritto} relatam a ação do escriba, quem escreveu, quando e com que esforço. Num evangelho, escolher entre {fu scritto} e {scrisse} muda o ponto de vista: o primeiro fala do texto, o segundo fala do escriba.

## O que ler

Se a frase tiver {essere} mais participio, é a passiva clássica: procure o {da} para achar o agente. Se tiver {si} mais verbo, pergunte se o {si} é reflexivo ou partícula passiva, e a resposta está em quem faz a ação.`),
  vocab: [
    V('fu scritto', 'scrivere', 'foi escrito'),
    V('sarà salvato', 'salvare', 'será salvo'),
    V('fu crocifisso', 'crocifiggere', 'foi crucificado'),
    V('si vendono', 'vendere', 'vendem-se'),
    V('si dice', 'dire', 'diz-se'),
    V('si lava', 'lavarsi', 'lava-se'),
    V('si parla', 'parlare', 'fala-se'),
    V('essere', 'essere', 'ser'),
    V('partecipio', 'partecipio', 'participio'),
    V('Vangelo', 'Vangelo', 'Evangelho'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em si vendono case, com quem o verbo concorda?'),
    options: [T('Com case'), T('Sempre no singular'), T('Com o agente'), T('Com si')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: Il Vangelo fu ___ (scrivere)'),
      answer: 'scritto',
      hint: T('Participio irregular.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase tem uso reflexivo?'),
      options: [
        T('Si parla italiano.'),
        T('Maria si lava.'),
        T('Si vendono case.'),
        T('Si dice la verità.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Concorde o participio: le parole fu___ scritte'),
      answer: 'rono',
      hint: T('Essere + participio plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A passiva clássica é {essere} mais participio, e o participio concorda com o sujeito: {fu scritto}, {le parole furono scritte}.',
      ),
    },
    { n: '2', text: T('O agente entra com {da}: {fu scritto da Giovanni}, {fu dato da Mosè}.') },
    {
      n: '3',
      text: T(
        'A passiva de {si} faz o verbo concordar com o sujeito: {si vendono case}, {le case si vendono}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Si} é reflexivo quando a ação recai sobre o sujeito ({si lava}) e partícula quando o sentido é passivo ({si vendono case}).',
      ),
    },
    {
      n: '5',
      text: T(
        '{Maria si è vestita} admite as duas leituras: reflexo, «se vestiu», ou passivo, «foi vestida».',
      ),
    },
  ],
  notes: [
    {
      label: T('La passiva con essere'),
      text: T(
        'A passiva italiana troca de auxiliar conforme o movimento: {è amato} e {è andato} usam {essere}, {è stato scritto} usa {avere}. O que conta é se o sujeito faz a ação ou apenas a sofre.',
      ),
    },
    {
      label: T('O resultado, e não a ação'),
      text: T(
        '{fu scritto} focaliza o resultado: a escritura aconteceu e o efeito permanece. {Scrisse} e {aveva scritto} relatam a ação do escriba, quem escreveu, quando e com que esforço. Num evangelho, a escolha entre os dois muda o ponto de vista.',
      ),
    },
  ],
  examples: [
    { text: 'Il Vangelo fu scritto.', gloss: T('O Evangelho foi escrito.') },
    { text: 'La legge fu scritta da Mosè.', gloss: T('A lei foi escrita por Moisés.') },
    { text: 'Cristo fu crocifisso.', gloss: T('Cristo foi crucificado.') },
    { text: 'Si vendono case.', gloss: T('Vendem-se casas.') },
    { text: 'Le case si vendono.', gloss: T('As casas se vendem.') },
    { text: 'Si parla italiano.', gloss: T('Fala-se italiano.') },
    { text: 'Maria si è vestita.', gloss: T('Maria se vestiu.') },
    { text: 'Lui si lava le mani.', gloss: T('Ele lava as próprias mãos.') },
  ],
  tables: [
    {
      caption: T('Duas construções'),
      head: ['Struttura', 'Esempio', 'Evidenza'],
      rows: [
        ['essere + participio', 'fu scritto', 'il risultato'],
        ['si + verbo', 'si vendono case', 'l’azione'],
      ],
    },
    {
      caption: T('O participio concorda com o sujeito'),
      head: ['Frase', 'Participio', 'Soggetto'],
      rows: [
        ['Il Vangelo fu scritto', 'scritto', 'maschile singolare'],
        ['Le parole furono scritte', 'scritte', 'femminile plurale'],
        ['I libri furono scritti', 'scritti', 'maschile plurale'],
        ['Le ragazze sono partite', 'partite', 'femminile plurale'],
      ],
    },
  ],
};

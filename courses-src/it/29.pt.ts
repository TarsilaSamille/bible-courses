import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('A gramática do italiano: um mapa'),
  subtitle: T('articolo, nome, aggettivo; verbo, complemento'),
  section: T('Leitura e sintaxe'),
  body: C(`## A frase nominal e a frase verbal

Toda frase nominal italiana tem artigo e **nome**, nessa ordem, e o artigo é o que determina. Vem depois o **aggettivo**, que concorda em gênero e número: «{il} {libro} {nuovo}», «{i} {libri} {nuovi}», «{la} {casa} {grande}», «{le} {case} {grandi}». E pode vir um genitivo, que é {di} mais um nome sem artigo: «{il} {libro} {di Paolo}», «{la} {luce} {della} {lampada}».

Toda frase verbal tem **verbo** e pode ter complemento, e o complemento vem depois: {verbo} + {complemento}, «{leggere} {il libro}», «{andare} {a} {Roma}». O que muda a frase é o **modo** do verbo: o indicativo diz o que acontece, o congiuntivo diz o que se supõe, e é o modo do verbo que decide o resto.

## {a} e {in} para lugar, {di} e {da} para origem

São quatro preposições que dividem dois pares, e a distinção é sempre a mesma: **direção** contra permanência, origem contra procedência.

{a} é direção, {in} é permanência: «vado {a} {casa}» (vou para casa), «sono {in} {casa}» (estou em casa). Em italiano, com lugar geográfico, {a} continua valendo: «vado {a} {Roma}», «vado {a} {lavoro}».

**{di}** é origem sem ponto marcado; {da} é origem *a partir de* um ponto ou de um agente: «vengo {da} {Italia}» (venho da Itália), «vengo {di} {Milano}» (venho de Milão, ou sou milanês). E «fu scritto {da} {Giovanni}» só existe com {da}: o agente é uma pessoa que age *de* algum lugar.

## As mesmas palavras em funções diferentes

O que trava mais no italiano não é o vocabulário: é {la}, {il}, {che}, {a} e {di} aparecendo em papéis diferentes sem mudar de forma.

{La} é artigo em «{la} {casa}» e pronome enfático em «{la} {vedo}». {Il} é artigo em «{il} {libro}» e artigo de volta em relativa: «{il} {cui nome}», «{il} {quale}». {Che} é relativo em «{il} {libro} {che leggo}» e interrogativo em «{Che} {dice?}». {Di} é preposição em «{di} {Paolo}» e nome de ação em «{il} {cantare}», «{il} {leggere}». {Da} é preposição em «{da} {Roma}» e perifrase em «{da} {leggere}», que significa “para ser lido”, não “de um ler”.

## Na Bíblia

Gv 1:1 é uma frase nominal e uma frase verbal sobrepostas: «{In} {principio} {era} {la} {Parola}». {In} é preposição, {principio} é substantivo sem artigo porque é abstrato, {era} é verbo, {la} é artigo e {Parola} é o núcleo. Quem traduz {in} por «dentro» e {principio} por «um começo» desmonta a frase.

Gv 1:3 acrescenta o que o mapa precisa mostrar: «{Tutto} per lui è stato fatto, e senza di lui non è stato fatto nulla di ciò che esiste». {Tutto} é pronome sem artigo, {nulla} é indefinido, e {ciò che esiste} é uma relativa em que o relativo {che} faz de sujeito: {esiste} é o verbo e {ciò} é o que existe.

## O que ler

Marque no texto o artigo de cada substantivo e o modo de cada verbo. Onde houver nome sem artigo, pergunte se é nome próprio, numeral ou indireto; onde houver verbo no congiuntivo, pergunte se há {che}, {se} ou {non} por perto, porque são esses que puxam o congiuntivo.`),
  vocab: [
    V('articolo', 'articolo', 'artigo'),
    V('nome', 'nome', 'substantivo'),
    V('aggettivo', 'aggettivo', 'adjetivo'),
    V('genitivo', 'genitivo', 'genitivo'),
    V('verbo', 'verbo', 'verbo'),
    V('soggetto', 'soggetto', 'sujeito'),
    V('complemento', 'complemento', 'complemento'),
    V('preposizione', 'preposizione', 'preposição'),
    V('a', 'a', 'a (direção)'),
    V('in', 'in', 'em (permanência)'),
    V('di', 'di', 'de'),
    V('da', 'da', 'de (origem, agente)'),
    V('principio', 'principio', 'princípio'),
    V('Parola', 'parola', 'Palavra'),
    V('tutto', 'tutto', 'tudo'),
    V('nulla', 'nulla', 'nada'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual frase indica permanência, e não direção?'),
    options: [T('Vado a casa.'), T('Sono in casa.'), T('Vado a Roma.'), T('Vado al lavoro.')],
    answer: 1,
    hint: T('In marca lugar onde se fica.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Como se diz «o livro de Paulo»?'),
      options: [
        T('il libro di Paolo'),
        T('il libro da Paolo'),
        T('il libro a Paolo'),
        T('il libro in Paolo'),
      ],
      answer: 0,
      hint: T('Posse é di; da fica com origem e agente.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «da leggere», o que significa?'),
      options: [T('de um ler'), T('para ser lido'), T('lendo'), T('de quem lê')],
      answer: 1,
      hint: T('Da mais o participio é a passiva.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o genitivo: la luce ___ lampada (da)'),
      answer: 'della',
      hint: T('Di + la funde-se.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Toda frase nominal tem artigo e nome; o nome sem artigo é nome próprio, numeral ou indireto.',
      ),
    },
    {
      n: '2',
      text: T('O genitivo é di mais um nome, e esse nome nunca leva artigo: il libro di Paolo.'),
    },
    { n: '3', text: T('A marca direção, in marca permanência: vado a casa / sono in casa.') },
    {
      n: '4',
      text: T(
        'Da marca origem a partir de um ponto e agente: vengo dall’Italia, fu scritto da Giovanni.',
      ),
    },
    {
      n: '5',
      text: T('La, il, che, di e da mudam de função sem mudar de forma; é a posição que decide.'),
    },
  ],
  notes: [
    {
      label: T('Nome sem artigo'),
      text: T(
        'O artigo cai em quatro casos: nome próprio ({Dio}, {Milano}), numeral ({tre libri}), indireto que já faz o papel dele ({ogni uomo}, {qualche libro}) e substantivo abstrato em contexto-poético ({principio}, {verità}). Fora desses, a omissão soa como erro.',
      ),
    },
    {
      label: T('Nome que vem de verbo'),
      text: T(
        'Um verbo pode virar substantivo: {il} {movimento}, {la} {costruzione}, {il} {pagamento}, {la} {lettura}, {il} {camminare}. Nesse caso o {di} da preposição vira nome de ação: «il modo di pensare», «le braccia della croce». O contexto diz se o substantivo é a coisa ou o ato.',
      ),
    },
  ],
  examples: [
    { text: 'Il libro nuovo di Paolo.', gloss: T('O livro novo de Paulo.') },
    { text: 'I libri nuovi della classe.', gloss: T('Os livros novos da turma.') },
    { text: 'La luce della lampada.', gloss: T('A luz da lâmpada.') },
    { text: 'Vado a casa.', gloss: T('Vou para casa.') },
    { text: 'Sono in casa.', gloss: T('Estou em casa.') },
    { text: 'Vengo da Italia.', gloss: T('Venho da Itália.') },
    { text: 'Il Vangelo fu scritto da Giovanni.', gloss: T('O Evangelho foi escrito por João.') },
    { text: 'Un libro da leggere.', gloss: T('Um livro para ler.') },
    { text: 'Il cantare è la preghiera.', gloss: T('O cantar é a oração.') },
    { text: 'Ciò che esiste.', gloss: T('O que existe.') },
  ],
  tables: [
    {
      caption: T('A frase nominal'),
      head: ['Pieza', 'Función', 'Esempio'],
      rows: [
        ['articolo', 'determina', 'il libro'],
        ['nome', 'nucleo', 'libro'],
        ['aggettivo', 'qualifica', 'libro nuovo'],
        ['genitivo', 'especifica', 'libro di Paolo'],
        ['numeral', 'conta', 'tre libri'],
      ],
    },
    {
      caption: T('A frase verbal'),
      head: ['Pieza', 'Función', 'Esempio'],
      rows: [
        ['verbo', 'núcleo', 'leggere'],
        ['soggetto', 'quién actúa', 'Maria'],
        ['complemento directo', 'lo que se alcanza', 'il libro'],
        ['complemento indirecto', 'a quién', 'a Paolo'],
        ['complemento avverbiale', 'dónde, cuándo, cómo', 'a casa'],
        ['predicativo', 'identifica', 'è medico'],
      ],
    },
    {
      caption: T('A mesma palavra em funções diferentes'),
      head: ['Parola', 'Función 1', 'Función 2'],
      rows: [
        ['la', 'artículo (la casa)', 'pronombre (la vedo)'],
        ['il', 'artículo (il libro)', 'artículo en relativa (il cui nome)'],
        ['che', 'relativo (che leggo)', 'interrogativo (Che dice?)'],
        ['a', 'preposición (a casa)', 'verbo avere (a = tiene)'],
        ['di', 'preposición (di Paolo)', 'nombre de acción (il cantare)'],
        ['da', 'preposición (da Roma)', 'pasiva (da leggere)'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  section: T('O verbo: o presente e o aspecto'),
  title: T('Como o par de aspecto é formado'),
  subtitle: T('prefixo, sufixo e supletividade, e os verbos que não têm par'),
  body: C(`
## Três caminhos para o perfectivo

Nem todo perfectivo tem prefixo, e nem todo verbo com prefixo é perfectivo. O par se forma por três caminhos, e é bom saber qual é qual porque o terceiro não tem nada a ver com os outros dois.

O caminho do prefixo é o mais comum e o mais produtivo: написать vem de писать, сделать de делать, прочитать de читать. O prefixo põe uma fronteira na ação e o perfectivo nasce. O caminho do sufixo troca a terminação do infinitivo sem mudar a raiz: отвечать e ответить, решать e решить, замечать e заметить. O caminho supletivo troca a raiz por completo, e aí nada é derivável: говорить e сказать, брать e взять, давать и дать.

E há um quarto caso, que desmente a ideia de que o perfectivo nasce sempre de um imperfectivo: нести é imperfectivo e нёс é perfectivo, sem prefixo nenhum. O perfectivo não vem do imperfectivo por derivação; às vezes os dois são verbos diferentes que o uso junta num par.

## O que cada prefixo faz

O prefixo não é um adorno. Ele diz em que direção ou em que limite a ação acontece, e é por isso que dois verbos com prefixos diferentes são verbos diferentes.

По- põe um limite de duração: почитать é ler um pouco, por um tempo, e não é o mesmo que ler tudo. Вы- tira de um espaço fechado: выйти é sair para fora, e a preposição que o rege é из, genitivo. У- marca afastamento e, em alguns verbos, o chegar ao fim de umaInquiry: уйти, узнать, услышать. Под- é aproximação parcial: подойти, подъехать, sem chegar. Пере- repete ou muda de lugar: переписать, переехать. За- marca o começo de algo que dura, e é o mais usado dos prefixos russos.

O prefixo está no perfectivo, e quase só lá. Se um verbo tem prefixo e está no passado, é perfectivo, e o contexto vai pedir uma leitura de resultado.

## Os verbos que não têm par

Existem verbos que não têm par nenhum, e existem verbos que têm só um lado. **Быть, мочь e хотеть não têm aspecto**: não existe um perfectivo de быть, nem um imperfectivo de мочь, e o contexto é que resolve. São os três verbos mais frequentes da língua depois de ser, o que faz do problema mais visível.

Há também os verbos que só existem no imperfectivo, e são muitos: ждать, спать, стоять, лежать, сидеть, жить, идти, ехать, бежать, нести. Para eles, o perfectivo vem por fora, às vezes com prefixo (поспать, подождать) e às vezes por supletividade (лежать e лечь, сидеть e сесть, стоять e стать).

Quando não há par, o recurso é o verbo мочь mais o infinitivo. Я могу прийти diz que vir é possível, e é assim que uma frase русsa resolves o que em português se resolve com o subjuntivo ou com o futuro.

## O gancho: uma palavra que muda de verso para verso

**И Слово стало плотию, и обитало с нами, полное благодати и истины.** Três verbos, três decisões de aspecto, e as duas primeiras são as mais interessantes da língua.

Стало é perfectivo, e é o perfectivo de быть, que não tem aspecto. É o caso-limite: um verbo sem aspecto gera o seu perfectivo, e o resultado é uma palavra que significa tornar-se, passar de um estado a outro. Quem traduz стало por "era" apaga exatamente isso: o versículo de João 1:1 usa было, e o de 1:14 usa стало, e a diferença entre os dois é a diferença entre estar e tornar-se.

Обитало é imperfectivo, e não por acaso. Ele descreve aPermanência, e não um ato: a Palavra ficou, e ficar não tem começo nem fim que se possa marcar. O perfectivo desse campo semântico não cabe na mesma frase, e o texto não o usa.

Полное é um particípio curto, e não um verbo. Ele concorda em gênero e número com Слово, e por isso é neutro. Se o texto tivesse dito исполненное, a forma seria longa e o caso seria marcado; com a forma curta, o caso vem do contexto e não da terminação. São duas coisas que só a leitura de um texto real ensina.
`),
  vocab: [
    V('отвечать', 'отвечать', 'responder; imperfectivo'),
    V('ответить', 'ответить', 'responder; perfectivo'),
    V('нести', 'нести', 'levar; imperfectivo'),
    V('нёс', 'нести', 'levou; perfectivo, sem prefixo'),
    V('принёс', 'принести', 'trouxe; perfectivo com prefixo'),
    V('почитать', 'почитать', 'ler por um tempo; perfectivo com по-'),
    V('выйти', 'выйти', 'sair para fora; perfectivo com вы-'),
    V('подойти', 'подойти', 'aproximar-se; perfectivo com под-'),
    V('быть', 'быть', 'ser, estar; sem aspecto'),
    V('мочь', 'мочь', 'poder; sem aspecto'),
    V('хотеть', 'хотеть', 'querer; sem aspecto'),
    V('ждать', 'ждать', 'esperar; só imperfectivo'),
    V('лежать', 'лежать', 'estar deitado; só imperfectivo'),
    V('лечь', 'лечь', 'deitar-se; perfectivo supletivo'),
    V('обитало', 'обитать', 'morou, permaneceu; imperfectivo'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em И Слово стало плотию, o que стало indica?'),
    options: [T('Um estado que continua'), T('Uma mudança de estado'), T('Um hábito')],
    answer: 1,
    hint: T(
      'Стать é o perfectivo de ser. Ele marca a passagem de um estado a outro, e é por isso que João 1:1 usa было e 1:14 usa стало.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete o perfectivo de лежать'), answer: 'лечь' },
    {
      kind: 'choose',
      prompt: T('Qual verbo não tem aspecto?'),
      options: [T('ждать'), T('мочь'), T('написать')],
      answer: 1,
    },
    { kind: 'fill', prompt: T('Complete: Он ___ с нами (permaneceu)'), answer: 'обитал' },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O par de aspecto se forma por três caminhos: prefixo ({написать}), sufixo ({ответить}) e supletividade ({сказать}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Nem todo perfectivo vem de um imperfectivo: {нести} e {нёс} são verbos diferentes, e não há derivação.',
      ),
    },
    {
      n: '3',
      text: T(
        '{О} prefixo diz direção ou limite: {по}- limita a duração, {вы}- tira de dentro, {под}- aproxima sem chegar, {пере}- repete.',
      ),
    },
    { n: '4', text: T('{Быть}, {мочь} e {хотеть} não têm aspecto.') },
    {
      n: '5',
      text: T(
        'Verbos que só existem no imperfectivo recebem o perfectivo por prefixo ({поспать}) ou por supletividade ({лечь}).',
      ),
    },
  ],
  notes: [
    {
      label: T('O caso-limite: стать e ser'),
      text: T(
        'Стало é perfectivo e ser, a forma que não tem aspecto é a forma que não tem aspecto. É a única situação em que um perfectivo nasce de um verbo sem par, e ela é frequente justamente porque o par mais usado da língua é esse. O resultado é uma opposition real: João 1:1 diz было, que é estado, e João 1:14 diz стало, que é mudança. Traduzir os dois por uma palavra só apaga a diferença entre o Verbo que é e o Verbo que se faz.',
      ),
    },
    {
      label: T('Quando não há par, мочь resolve'),
      text: T(
        'Um verbo sem par perfecto precisa de outro caminho, e o caminho padrão é мочь mais o infinitivo. Я могу прийти não diz que eu vim, diz que vir está ao meu alcance, e num contexto de possibilidade é exatamente o que o português resolve com o modo subjuntivo. Quem traduz e encontra um perfeito onde o russo não tem forma procura esse recurso antes de procurar um sinônimo.',
      ),
    },
  ],
  examples: [
    { text: 'отвечать на письмо', gloss: T('responder a uma carta; imperfectivo') },
    { text: 'ответил на письмо', gloss: T('respondeu à carta; perfectivo') },
    { text: 'нёс сумку', gloss: T('carregava a mala; imperfectivo') },
    { text: 'принёс сумку', gloss: T('trouxe a mala; perfectivo com prefixo') },
    { text: 'почитать книгу', gloss: T('ler um pouco um livro; perfectivo com по-') },
    { text: 'ждать', gloss: T('esperar; só imperfectivo') },
    { text: 'лежать', gloss: T('estar deitado; só imperfectivo') },
    { text: 'лечь', gloss: T('deitar-se; perfectivo supletivo') },
    { text: 'Я могу прийти', gloss: T('posso vir; recurso para o que não tem perfectivo') },
    {
      text: 'И Слово стало плотию, и обитало с нами',
      gloss: T('e o Verbo se fez carne e habitou entre nós (Jo 1:14)'),
    },
  ],
  tables: [
    {
      caption: T('Os três caminhos do par de aspecto'),
      head: [T('Imperfectivo'), T('Perfectivo'), T('Caminho'), T('O que muda')],
      rows: [
        [T('писать'), T('написать'), T('prefixo'), T('a ação ganha uma fronteira')],
        [T('отвечать'), T('ответить'), T('sufixo'), T('a terminação do infinitivo troca')],
        [T('говорить'), T('сказать'), T('supletividade'), T('a raiz inteira troca')],
        [T('брать'), T('взять'), T('supletividade'), T('a raiz inteira troca')],
        [T('нести'), T('нёс'), T('par sem prefixo'), T('não há derivação nenhuma')],
        [T('лежать'), T('лечь'), T('supletividade'), T('a raiz inteira troca')],
      ],
    },
    {
      caption: T('O que cada prefixo acrescenta'),
      head: [T('Prefixo'), T('Acrescenta'), T('Verbo'), T('Glosa')],
      rows: [
        [T('по-'), T('limite de duração'), T('почитать'), T('ler por um tempo')],
        [T('вы-'), T('saída de um espaço'), T('выйти'), T('sair para fora')],
        [T('у-'), T('afastamento ou fim da inquiry'), T('уйти, узнать'), T('ir-se, descobrir')],
        [T('под-'), T('aproximação sem chegada'), T('подойти'), T('aproximar-se')],
        [T('пере-'), T('repetição ou mudança de lugar'), T('переписать'), T('reescrever')],
        [T('за-'), T('começo do que dura'), T('запеть'), T('começar a cantar')],
      ],
    },
    {
      caption: T('Os verbos sem par'),
      head: [T('Verbo'), T('Tem perfectivo?'), T('Como se resolve'), T('Exemplo')],
      rows: [
        [T('быть'), T('não'), T('opõe-se a стать'), T('было e стало')],
        [T('мочь'), T('não'), T('não precisa'), T('могу говорить')],
        [T('хотеть'), T('não'), T('não precisa'), T('хочу сказать')],
        [T('ждать'), T('sim, por prefixo'), T('подождать'), T('ждал e подождал')],
        [T('спать'), T('sim, por prefixo'), T('поспать'), T('спал и поспал')],
        [T('лежать'), T('sim, por supletividade'), T('лечь'), T('лежал и лёг')],
      ],
    },
  ],
};

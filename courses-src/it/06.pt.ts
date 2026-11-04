import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Leitura guiada: João 1:1'),
  subtitle: T('Dal principio era la Parola'),
  section: T('O passado e a leitura'),
  body: C(`## Quatro orações, uma gramática

Leia o versículo em quatro tempos, e não palavra por palavra. Primeiro a estrutura: {In principio era la Parola}. Depois as três orações que ampliam: {e la Parola era presso Dio}, {e la Parola era Dio}, {e Dio era la Parola}. **O verbo é o mesmo nas quatro**, {era}, e o que muda é o complemento.

{A Parola} leva artigo em quase todas elas, e isso não é decoração: é o que marca {la Parola} como sujeito gramatical. Na segunda oração o sujeito é {la Parola} e {Dio} aparece em {presso Dio}, que vale por «junto de» e por «perto de». Na terceira, {Dio} perde o artigo e vira predicativo, e é aí que a frase deixa de falar de proximidade e passa a falar de identidade.

## {Era} contra {fu}

A distinção que o versículo exige é entre {era} e {fu}. {Era} **é o imperfeito de** {essere} e descreve existência contínua: a luz estava lá, sem começo marcado. {Fu} é o passado remoto e marca um resultado que passou a existir: a luz passou a ser.

O grego de Jo 1:1 usa {ἦν} (ἐν ἀρχῇ ἦν ὁ λόγος), que é o mesmo imperfeito. Onde o italiano escreve {fu}, em Gn 1:3, o grego escreve {γένοιτο} e o efeito é o mesmo. Traduzir {era} por «existia» e {fu} por «foi» acerta a diferença; traduzir os dois por «era» perde o que o texto faz.

## {In} sem artigo, {la} com

{In principio} **não leva artigo**, e o motivo é mecânico: {in} absorve o {-o} de {principio}. O mesmo vale para {con Dio}, {con Gesù}, {fra i giudei}. Em troca, {la Parola} e {il Verbo} levam artigo, porque nada foi absorvido.

{In principio} ainda pode significar «no princípio» ou «em princípio», conforme o contexto. O versículo seguinte, {Era nel principio presso Dio}, confirma a leitura temporal, e a preposição {in} aqui é lugar, não origem.

## O que ler

Ao traduzir {la Parola era Dio}, não troque por «a Palavra estava junto de Deus»: o italiano usa {era presso} para a segunda oração e {era} a sós para a terceira, e a diferença é proposital. O grego (πρὸς τὸν θεόν na segunda, θεός na terceira) marca o mesmo contraste, e a preposição grega πρὸς pode indicar relação e não só posição. Quem traduz a forma perde esse segundo sentido.`),
  vocab: [
    V('principio', 'principio', 'princípio'),
    V('era', 'essere', 'era (imperfeto)'),
    V('Parola', 'parola', 'Palavra'),
    V('presso', 'presso', 'junto de'),
    V('Dio', 'Dio', 'Deus'),
    V('vita', 'vita', 'vida'),
    V('luce', 'luce', 'luz'),
    V('tenebre', 'tenebra', 'trevas'),
    V('Verbo', 'verbo', 'Verbo (Logos)'),
    V('fu', 'essere', 'foi (resultado)'),
    V('cose', 'cosa', 'coisas'),
    V('creazione', 'creazione', 'criação'),
    V('mondo', 'mondo', 'mundo'),
    V('conosciuto', 'conoscere', 'conhecido'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a diferença entre era e fu em João 1?'),
    options: [
      T('São sinônimos intercambiáveis'),
      T('era é existência contínua; fu é resultado pontual'),
      T('era é futuro; fu é passado'),
      T('era é plural; fu é singular'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: la Parola ___ presso Dio'),
      answer: 'era',
      hint: T('Imperfeito de essere.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual palavra significa «junto de»?'),
      options: [T('con'), T('presso'), T('dove'), T('tra')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete a continuação: e la Parola ___ Dio'),
      answer: 'era',
      hint: T('Repita o verbo do versículo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Era} é o imperfeito de {essere} e descreve existência contínua; {fu} é o passado remoto e marca resultado.',
      ),
    },
    {
      n: '2',
      text: T(
        '{In} absorve o {-o} do nome e por isso não há artigo: {in principio}, {con Dio}, {fra i giudei}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{La Parola} leva artigo porque é sujeito: {la Parola era} e {era la Parola} têm a mesma estrutura.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Dio} sem artigo em {era Dio} é predicativo: a ausência de artigo é o que marca a identidade.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Presso} significa «junto de» e traduz πρὸς, que em grego pode indicar relação e não só posição.',
      ),
    },
  ],
  notes: [
    {
      label: T('O verbo em primeiro plano'),
      text: T(
        'O versículo repete o mesmo verbo quatro vezes, {era}, e quem traduz apressada entrega uma frase e não um argumento. O paralelismo {X era Y} com {Y era X} no fim do versículo é o argumento: o que era com Deus é o que é Deus.',
      ),
    },
    {
      label: T('Onde as traduções divergem'),
      text: T(
        'As duas traduções italianas do versículo divergem no terceiro período: uma escreve {la Parola era Dio} e a outra {il Verbo era Dio}. A diferença está em {Parola} e {Verbo}, e o grego λόγος sustenta as duas escolhas, porque a mesma palavra grega cabe num substantivo abstrato e num substantivo concreto.',
      ),
    },
  ],
  examples: [
    { text: 'In principio era la Parola.', gloss: T('No princípio era a Palavra.') },
    { text: 'La Parola era presso Dio.', gloss: T('A Palavra estava junto de Deus.') },
    { text: 'E la Parola era Dio.', gloss: T('E a Palavra era Deus.') },
    { text: 'E Dio era la Parola.', gloss: T('E Deus era a Palavra.') },
    { text: 'In lui era la vita.', gloss: T('Nele estava a vida.') },
    { text: 'Era la luce nel mondo.', gloss: T('A luz estava no mundo.') },
    { text: 'La vita era la luce degli uomini.', gloss: T('A vida era a luz dos homens.') },
    { text: 'Il mondo non lo ha conosciuto.', gloss: T('O mundo não o conheceu.') },
  ],
  tables: [
    {
      caption: T('Mapa de João 1:1'),
      head: ['Frase', 'Verbo', 'Funzione'],
      rows: [
        ['In principio', '—', 'tempo'],
        ['era la Parola', 'era', 'esistenza'],
        ['la Parola era presso Dio', 'era', 'relazione'],
        ['la Parola era Dio', 'era', 'identità'],
      ],
    },
    {
      caption: T('Era, fu, è stato'),
      head: ['Forma', 'Tempo', 'Valore'],
      rows: [
        ['era', 'imperfetto', 'esistenza continua'],
        ['fu', 'passato remoto', 'risultato puntuale'],
        ['è stato', 'passato prossimo', 'passato con effetto'],
        ['è', 'presente', 'stato attuale'],
      ],
    },
  ],
};

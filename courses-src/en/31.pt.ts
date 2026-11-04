import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone de leitura: Marcos 4,35-41 (KJV)'),
  subtitle: T('a great calm — o artigo, o auxiliar, o advérbio e a preposição'),
  section: T('Leitura'),
  body: C(`## O trecho

Marcos 4:35-41 na KJV é um texto curto e é feito para este trabalho. Ele traz, em sete versículos, tudo o que as dezoito lições atravessaram: artigo obrigatório, verbo com auxiliar, advérbio de posição e preposição.

> "And when the even was come, he let them go."
> "And when they were get him into the ship, there was a great calm: but the wind blew, and the waves came into the ship, and the ship began to be filled with water."
> "And Jesus himself was in the ship: and he slept."
> "And they awaked him, and said unto him, Teacher, carest thou not that we perish?"
> "And he arose, and rebuked the wind, and said unto the sea, Peace, be still! and the wind ceased, and there was a great calm."
> "And he said unto them, Why are ye afraid? how is it that ye have no faith?"
> "And when he was come into the ship again, the wind blew: and they were again filled with water."

A leitura correta é frase por frase, e cada frase revela uma peça. {He let them go} mostra o auxiliar {let} com objeto indireto. {There was a great calm} mostra {there} como sujeito e artigo antes de substantivo contável.

## Onde está o artigo

O artigo aparece nove vezes, e todas as nove são substantivos contáveis singulares: {the even}, {the ship}, {a great calm}, {the wind}, {the waves}, {the water}, {the sea}, {the ship again}, {the water}. Nenhuma delas é um plural, e nenhuma é uma massa em geral.

Quando o substantivo volta sem artigo, é porque já está determinado ou porque o contexto é genérico: {they awaked him}, {he let them go}, {the wind blew}. O {the wind} da primeira ocorrência e o {the wind} da segunda são o mesmo substantivo com o mesmo artigo, e o leitor que escreve vento nas duas ocorrências está certo nas duas.

## Onde está o verbo com auxiliar

São seis construções com auxiliar, e elas mostram as doze combinações em uso. {Let them go} é {let} mais base. {Were get him into the ship} é {were} mais base, e o {get} é a chave do contorno. {Began to be filled} tem {began} mais infinitivo e {to be} mais particípio. {Was in the ship} e {he slept} traz o verbo sem auxiliar, e a diferença entre eles é tempo.

O contraste que a lição inteira prepara está em {was come into the ship again}. O {was come} é {be} mais particípio, e o sentido é de retorno depois de uma ausência. O par {has gone} e {has been} é o que muda de sentido.

## O advérbio e a preposição

O advérbio do trecho é {again}, e ele aparece duas vezes: {into the ship again} e {were again filled}. Nas duas o advérbio vem logo depois do verbo ou do auxiliar, que é a posição do advérbio de tempo.

As preposições do trecho são {into} duas vezes, {with}, {unto} três vezes e {from}. {Into} marca passagem para dentro, {with} marca o instrumento ou o conteúdo, e {unto} é a preposição arcaica da KJV, equivalente ao {to} contemporâneo.

{Teacher} no meio da frase de Marcos 4:38 é vocativo: não tem artigo porque não é um substantivo contável no sentido usual, e a vírgula o separa da fala. **Quem traduz por o Mestre acrescenta um artigo que o texto não tem.**`),
  vocab: [
    V('the even was come', 'come', 'chegou a tarde'),
    V('he let them go', 'let', 'ele os deixou ir'),
    V('were get him into the ship', 'get', 'o levaram para dentro do barco'),
    V('there was a great calm', 'be', 'houve uma grande calmaria'),
    V('the wind blew', 'blow', 'o vento soprou'),
    V('began to be filled', 'begin', 'começou a encher'),
    V('was in the ship', 'be', 'estava no barco'),
    V('they awaked him', 'awake', 'o acordaram'),
    V('carest thou not', 'care', 'não te importas'),
    V('he arose', 'arise', 'ele se levantou'),
    V('rebuked the wind', 'rebuke', 'repreendeu o vento'),
    V('Peace, be still', 'be', 'cala-te, fica quieto'),
    V('the wind ceased', 'cease', 'o vento cessou'),
    V('was come into the ship again', 'come', 'tinha voltado para o barco'),
    V('were again filled', 'fill', 'foram de novo enchidos'),
    V('no faith', 'faith', 'sem fé'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'No trecho, o artigo aparece só antes de substantivo contável singular: the ship, a great calm, the wind, the sea.',
      ),
    },
    {
      n: '2',
      text: T(
        'There is e there was usam there como sujeito aparente e o verbo concorda com o que vem depois: there was a great calm.',
      ),
    },
    {
      n: '3',
      text: T(
        'Let, were get, began to be, was come e were filled são construções com auxiliar, e o verbo principal fica na base ou no particípio.',
      ),
    },
    {
      n: '4',
      text: T(
        'Again, advérbio de tempo, vem depois do verbo ou do auxiliar: into the ship again, were again filled.',
      ),
    },
    {
      n: '5',
      text: T(
        'Unto é a preposição arcaica da KJV e equivale ao to contemporâneo;_into_ e with mantêm o sentido atual.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico:'),
      text: T(
        'Marcos 4:39 traz duas vezes a great calm, uma na entrada da tempestade e outra depois da repreensão. A palavra é a mesma e o artigo é o mesmo, e é a segunda ocorrência que prova que a primeira era determinada.',
      ),
    },
    {
      label: T('Diagnóstico:'),
      text: T(
        'Quem traduz o trecho e escreve o barco duas vezes com substantivos diferentes está trocando o artigo por haver. Em inglês o artigo não muda dentro do mesmo sintagma.',
      ),
    },
  ],
  examples: [
    { text: '{he let them go}', gloss: T('ele os deixou ir') },
    { text: '{there was a great calm}', gloss: T('houve uma grande calmaria') },
    {
      text: '{the wind blew, and the waves came into the ship}',
      gloss: T('o vento soprou, e as ondas entraram no barco'),
    },
    {
      text: '{the ship began to be filled with water}',
      gloss: T('o barco começou a se encher de água'),
    },
    {
      text: '{Teacher, carest thou not that we perish}',
      gloss: T('Mestre, não te importas que pereçamos?'),
    },
    {
      text: '{And he arose, and rebuked the wind}',
      gloss: T('e ele se levantou, e repreendeu o vento'),
    },
    { text: '{Peace, be still}', gloss: T('Silêncio, fica quieto') },
    {
      text: '{the wind ceased, and there was a great calm}',
      gloss: T('o vento cessou, e houve uma grande calmaria'),
    },
    {
      text: '{Why are ye afraid? how is it that ye have no faith}',
      gloss: T('Por que havei medo? como é que não haveis fé?'),
    },
    { text: '{they were again filled with water}', gloss: T('foram de novo enchidos de água') },
    { text: '{And when the even was come}', gloss: T('E, quando a tarde chegou') },
  ],
  tables: [
    {
      caption: T('O trecho, versículo por versículo'),
      head: [T('Versículo'), T('Estrutura visível'), T('O que há para ver')],
      rows: [
        [
          T('35'),
          T('{And when the even was come, he let them go}'),
          T('condicional temporal + auxiliar + base'),
        ],
        [T('36'), T('{there was a great calm}'), T('{there} como sujeito + artigo')],
        [T('36'), T('{the ship began to be filled with water}'), T('dois auxiliares encadeados')],
        [T('37'), T('{Jesus himself was in the ship: and he slept}'), T('verbo sem auxiliar')],
        [T('38'), T('{carest thou not that we perish}'), T('negação depois do auxiliar')],
        [T('39'), T('{And he arose, and rebuked the wind}'), T('irregular {arose} + {unto}')],
        [T('41'), T('{they were again filled with water}'), T('{again} depois do auxiliar')],
      ],
    },
    {
      caption: T('Onde está cada coisa'),
      head: [T('Categoria'), T('No trecho')],
      rows: [
        [T('artigo'), '{the ship, a great calm, the wind, the sea}'],
        [T('verbo com auxiliar'), '{let them go, were get, began to be, was come, were filled}'],
        [T('advérbio'), T('{again}, duas vezes')],
        [T('preposição'), '{into, with, unto, from}'],
        [T('negação'), '{carest thou not, have no faith}'],
      ],
    },
    {
      caption: T('Os verbos do trecho'),
      head: [T('Forma'), T('Análise')],
      rows: [
        ['{let them go}', T('auxiliar + objeto indireto + base')],
        ['{were get him into the ship}', T('{were} + {get} + base + objeto')],
        ['{began to be filled}', T('dois auxiliares encadeados')],
        ['{was in the ship}', T('verbo principal sem auxiliar')],
        ['{he arose}', T('passado irregular')],
        ['{was come into the ship again}', T('{be} + particípio + preposição + advérbio')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T("Em 'there was a great calm', o que ocupa a posição do sujeito?"),
    options: [T('a great calm'), T('there'), T('was'), T('calm')],
    answer: 1,
    hint: T('There é sujeito aparente: o sujeito de verdade vem depois do verbo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T("Complete o verbo do versículo 36: 'the ship began ___ be filled.'"),
      answer: 'to',
    },
    {
      kind: 'fill',
      prompt: T("Identifique a preposição de passagem: 'the waves came ___ the ship'"),
      answer: 'into',
    },
    {
      kind: 'match',
      prompt: T('Ligue a construção à análise.'),
      pairs: [
        { a: '{he let them go}', b: T('auxiliar + base') },
        { a: '{there was a great calm}', b: T('{there} como sujeito') },
        { a: '{they were again filled}', b: T('advérbio depois do auxiliar') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('Quantas vezes o advérbio again aparece no versículo 41?'),
      options: [T('uma vez'), T('duas vezes'), T('três vezes'), T('nenhuma vez')],
      answer: 1,
    },
  ],
};

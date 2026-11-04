import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Negação: non, mai, più, ancora'),
  subtitle: T('non parlo mai; non parlo più'),
  section: T('O advérbio'),
  body: C(`## {non} vai antes do verbo

Em português a negação é uma palavra só e abre a frase: «não fala». Em italiano são duas, e elas têm lugares diferentes. **{non}** precede o verbo conjugado: «non parlo», «non lo so», «non voglio andare». Quando há auxiliar, o {non} entra antes do auxiliar e do participio: «non ho mai visto», «non era venuto».

E o {non} se cola ao pronome: «non **{lo}** so». Se o pronome vai grudado no verbo, ele passa para a frente do {non}: «non {lo} so», «non {li} ho visti», «non {ci} vado».

## {mai}, {più} e {ancora} vão depois

Esta é a parte que o leitor de português erra sempre, porque em português {nunca}, {mais} e {ainda} também vêm depois do verbo, e a tentação é escrever *{mai non parlo}*. O italiano só aceita uma ordem:

{non} parlo {mai}, nunca falo.
{non} parlo {più}, não falo mais.
{non} parlo {ancora}, ainda não falo.

Os dois pares que se trocam são {non più} «não mais» e {non ancora} «não ainda». A diferença é de tempo, não de intensidade: *non parlo più* diz que a ação acabou para sempre; *non parlo ancora* diz que ela vai acontecer. O mesmo vale com o auxiliar: *non ho parlato più* e *non ho parlato ancora*.

Depois do verbo há ainda {affatto} («não falo de jeito nenhum»), {quasi} («quase não falo») e {pienamente}, {volentieri}. A regra do lugar é a mesma para todos: depois.

## {neanche}, {nemmeno} e as respostas

Há um segundo grupo, que não nega nada dentro da frase: **abre a resposta**. A alguém que diz «non parlo», você responde «{neanch’io}» ou «{nemmeno io}», querendo dizer «eu também não». As duas palavras são quase sinônimas; {nemmeno} é um pouco mais seco, {neanche} um pouco mais hospitário.

Depois há **{piuttosto}**, que é conjunção disfarçada de advérbio: «non dico che è male, {piuttosto} dico che è inutile». E {troppo} e {assai}, que intensificam sem flexionar.

## Na Bíblia

Mt 7:21 põe a negação sobre um indefinido, que é o lugar mais delicado: «**{Non ogni uno}** che mi dice: Signore, Signore, entrerà nel regno dei cieli». O {non} vem antes de {ogni}, e não antes do verbo {entrà}, porque o alvo é o indefinido. Um tradutor que escreve {ogni uno non entrerà} traduziu a ideia certa e a gramática errada.

Repare também em «non ho bisogno che tu parli», onde o {non} fica longe do verbo que ele nega: a negação se prende ao substantivo, e o verbo fica com o que vem depois.

## O que ler

Identifique primeiro o alvo da negação: verbo, substantivo ou indefinido. Depois encaixe o {non} imediatamente antes dele, e só então coloque {mai}, {più} ou {ancora} no fim da mesma oração. Se na sua tradução o {mai} ficou na frente, o problema não é de léxico: é de ordem.`),
  vocab: [
    V('non', 'non', 'não'),
    V('mai', 'mai', 'nunca'),
    V('più', 'più', 'mais'),
    V('ancora', 'ancora', 'ainda'),
    V('affatto', 'affatto', 'de jeito nenhum'),
    V('neanche', 'neanche', 'também não'),
    V('nemmeno', 'nemmeno', 'nem menos'),
    V('piuttosto', 'piuttosto', 'antes isso / mais ou menos'),
    V('quasi', 'quasi', 'quase'),
    V('sempre', 'sempre', 'sempre'),
    V('niente', 'niente', 'nada'),
    V('ogni', 'ogni', 'cada'),
    V('parlare', 'parlare', 'falar'),
    V('sapere', 'sapere', 'saber'),
    V('volere', 'volere', 'querer'),
    V('bisogno', 'bisogno', 'necessidade'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «ainda não falei»?'),
    options: [
      T('non parlo ancora'),
      T('non ancora parlo'),
      T('ancora non parlo'),
      T('non parlo già'),
    ],
    answer: 0,
    hint: T('Ancora vai depois do verbo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: non parlo ___ (nunca)'),
      answer: 'mai',
      hint: T('Depois do verbo conjugado.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [
        T('Mai non parlo con lui.'),
        T('Non parlo mai con lui.'),
        T('Non mai parlo con lui.'),
        T('Parlo non mai con lui.'),
      ],
      answer: 1,
      hint: T('Non antes, mai depois.'),
    },
    {
      kind: 'choose',
      prompt: T('Resposta a «non parlo»: eu também não'),
      options: [T('Neanch’io.'), T('Anch’io non.'), T('Io non anche.'), T('Nemmeno non io.')],
      answer: 0,
      hint: T('Neanche abre a resposta e elide o i.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Non precede imediatamente o elemento que nega: o verbo, o indefinido ou o substantivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'Mai, più e ancora vêm depois do verbo: non parlo mai, non parlo più, non parlo ancora.',
      ),
    },
    {
      n: '3',
      text: T('Non più é «não mais»; non ancora é «não ainda». Trocá-los muda o tempo da frase.'),
    },
    { n: '4', text: T('Neanche e nemmeno abrem uma resposta: «Non parlo». — «Neanch’io».') },
    {
      n: '5',
      text: T('Com auxiliar, o non entra antes do auxiliar e do participio: non ho mai visto.'),
    },
  ],
  notes: [
    {
      label: T('O clítico na frente do non'),
      text: T(
        '{Non lo so} e {Lo non so} fazem a mesma negação, e a segunda soa enfática, como se quem fala estivesse mostrando a própria posição. Em {Non lo so} o pronome está colado ao non; em {Lo non so} está colado ao verbo, que vem logo depois.',
      ),
    },
    {
      label: T('Negação dupla'),
      text: T(
        'O italiano aceita empilhar: {non vedo nessuno}, {non c’è niente}, {non ho fatto mai nulla}. Em todas elas a regra do lugar continua valendo: {non} antes, o resto depois. E {nessuno}, {niente} e {mai} são as três palavras que podem fazer esse trabalho.',
      ),
    },
  ],
  examples: [
    { text: 'Non parlo.', gloss: T('Não falo.') },
    { text: 'Non parlo mai con lui.', gloss: T('Nunca falo com ele.') },
    { text: 'Non parlo più.', gloss: T('Não falo mais.') },
    { text: 'Non ho parlato ancora.', gloss: T('Ainda não falei.') },
    { text: 'Non lo so.', gloss: T('Não sei.') },
    { text: 'Non l’hanno vinto.', gloss: T('Não a venceram.') },
    { text: 'Neanch’io non voglio.', gloss: T('Eu também não quero.') },
    { text: 'Non affatto.', gloss: T('De jeito nenhum.') },
    { text: 'Non ogni uno entrerà nel regno.', gloss: T('Não todo mundo entrará no reino.') },
  ],
  tables: [
    {
      caption: T('Posição da negação'),
      head: ['Parola', 'Dove va', 'Frase'],
      rows: [
        ['non', 'prima del verbo', 'non parlo'],
        ['mai', 'dopo il verbo', 'non parlo mai'],
        ['più', 'dopo il verbo', 'non parlo più'],
        ['ancora', 'dopo il verbo', 'non parlo ancora'],
        ['affatto', 'dopo il verbo', 'non parlo affatto'],
        ['quasi', 'prima del verbo', 'quasi non parlo'],
      ],
    },
    {
      caption: T('Os pares que se trocam'),
      head: ['Italiano', 'Portoghese', 'Idea'],
      rows: [
        ['non parlo più', 'não falo mais', 'l’azione è finita'],
        ['non parlo ancora', 'ainda não falo', 'l’azione verrà'],
        ['non parlo mai', 'nunca falo', 'in nessun momento'],
        ['non parlo affatto', 'não falo nada', 'in nessun modo'],
        ['non parlo neanche', 'nem falo', 'tampouco'],
      ],
    },
    {
      caption: T('Negação com auxiliar'),
      head: ['Costruzione', 'Frase'],
      rows: [
        ['non + avere + participio', 'non ho visto'],
        ['non + essere + participio', 'non era venuto'],
        ['non + clitico + verbo', 'non lo so'],
        ['clitico + non + verbo', 'lo non so (enfatico)'],
        ['non + ausiliare + mai', 'non ho mai visto'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Os pronomes'),
  subtitle: T('lo so; il mio libro; qualche, nessuno'),
  section: T('O artigo e os pronomes'),
  body: C(`## O pronome enfático: {lo}, {la}, {li}, {le}

Quando um pronome aparece sozinho, sem verbo, ele vira **enfático** e ganha a forma da pessoa que substitui: {lo}, {la}, {li}, {le}, mais {me}, {ti}, {ci}, {vi}, {si}. *Lo so.* *La vedo.* *Li conosco.* *Le ho detto tutto.*

O ponto que engana é a concordância. O enfático concorda com **aquilo que substitui**, não com quem ouve nem com quem fala: em «le tenebre non l’hanno vinto», {le tenebre} é plural e {l’hanno} é plural, mas o pronome é {la}, singular, porque substitui {la luce}. Se o pronome fosse plural, a frase seria «le tenebre le hanno vinto», e o sentido mudaria.

## Possessivos e demonstrativos

O possessivo concorda com a coisa possuída: {il mio libro}, {i miei libri}, {la mia casa}, {le mie case}, {il suo padre}, {i suoi padri}. Sem artigo, na forma invariável, é o que aparece em orações como «Dio è nostro padre» e «Maria è sua sorella». E há uma forma que substitui {di + il quale} inteiro: **{di cui}**, como em «il libro di cui parlo».

O demonstrativo tem duas fileiras: {questo} e {quello}, com {questa}, {questi}, {queste} e {quella}, {quegli}, {quelle}. O par em {quegli} é o mesmo de {lo}/{gli}: diante de s + consoante, z, gn e ps, ou de nome próprio masculino, o distante vira {quegli} («quegli studenti», «quegli americani»), e diante de vogal vira {quell’} («quell’uomo»). {Codesto} é o distante com distância e distância afetiva: {codesta} è {una} cosa ben diversa.

## Indefinidos e interrogativos, e o par que trava

{Indefinidos}: {ogni} e {qualche} são **sempre singulares** e já fazem o trabalho do artigo («ogni uomo», «qualche libro»), {alcuni} é plural, {nessuno} é «ninguém», {ciascuno} é «cada um», {tutti} é «todos».

{Interrogativos}: {chi} pergunta pessoa, {che} ou {cosa} pergunta coisa, {come}, {dove}, {quando}, {quanto}, {quale}. E aqui está o par que mais trava: o {che} relativo e o {che} interrogativo são **a mesma palavra**. Em «So {che} viene» o {che} é conjunção e introduz uma subordinada; em «{Che} viene?» o {che} é pronome e é a própria pergunta. O que decide é a posição: depois de um verbo que já tem sujeito, é relativo; no começo da frase interrogativa, é o que se pergunta.

## Na Bíblia

Gv 1:5 resolve as duas coisas de uma vez: «La luce splende nelle tenebre, e {le tenebre non l’hanno} vinto». {La luce} está determinado, e por isso o pronome volta como {la}. {Le tenebre} também está determinado e plural, e mesmo assim o pronome é {la}: o verbo {hanno} está na terceira plural porque concorda com {le tenebre}, o sujeito. Quem traduz {l’hanno} por «as venceram» perde a informação de que a luz é uma só.

## O que ler

Toda vez que ver {lo}, {la}, {li} ou {le} fora de um grupo pronominal, pergunte o que eles substituem: a resposta está na frase e na concordância do verbo. E quando o mesmo {che} aparecer duas vezes no mesmo versículo, compare as posições: uma delas é relativa, a outra é pergunta.`),
  vocab: [
    V('lo', 'lo', 'o (enfático, masc.)'),
    V('la', 'la', 'a (enfático, fem.)'),
    V('li', 'li', 'os (enfático)'),
    V('le', 'le', 'as (enfático)'),
    V('me', 'me', 'a mim'),
    V('mio', 'mio', 'meu'),
    V('suo', 'suo', 'seu'),
    V('di cui', 'di cui', 'de quem, do qual'),
    V('questo', 'questo', 'este'),
    V('quello', 'quello', 'aquele'),
    V('quegli', 'quegli', 'aqueles'),
    V('qualche', 'qualche', 'algum (singular)'),
    V('alcuni', 'alcuno', 'alguns'),
    V('nessuno', 'nessuno', 'ninguém'),
    V('ciascuno', 'ciascuno', 'cada um'),
    V('ogni', 'ogni', 'cada (singular)'),
    V('chi', 'chi', 'quem'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «le tenebre non l’hanno vinto», o que pronome é l’?'),
    options: [
      T('Plural, porque o sujeito é plural'),
      T('Singular, porque substitui la luce'),
      T('Neutro, porque indica posse'),
      T('Feminino plural, porque o verbo é plural'),
    ],
    answer: 1,
    hint: T('O enfático concorda com o que substitui, não com o sujeito.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual pronome substitui «il libro di cui parlo» na forma mais curta?'),
      options: [T('di cui'), T('il quale'), T('che'), T('lo')],
      answer: 0,
      hint: T('É a fusão de di + il quale.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa o che interrogativo?'),
      options: [
        T('So che viene.'),
        T('Che viene?'),
        T('Il libro che leggo.'),
        T('Ecco che cosa dice.'),
      ],
      answer: 1,
      hint: T('O che relativo vem depois do verbo; o interrogativo abre a pergunta.'),
    },
    {
      kind: 'fill',
      prompt: T('Qual demonstrativo vai antes de «studenti»? ___ studenti'),
      answer: 'quegli',
      hint: T('s + consoante pede gli.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O enfático lo, la, li e le concorda com aquilo que substitui, não com o sujeito da frase.',
      ),
    },
    {
      n: '2',
      text: T(
        'O possessivo concorda com a coisa possuída: il mio libro, i miei libri, la mia casa.',
      ),
    },
    { n: '3', text: T('Di cui substitui di + il quale: il libro di cui parlo.') },
    { n: '4', text: T('Ogni e qualche nunca aparecem no plural: ogni uomo, qualche libro.') },
    {
      n: '5',
      text: T(
        'O che relativo e o che interrogativo são a mesma palavra; a posição decide qual é qual.',
      ),
    },
  ],
  notes: [
    {
      label: T('A distância do demonstrativo'),
      text: T(
        '{Questo} é o que está perto de quem fala ou de quem escuta, incluindo o ouvinte ({questo libro è suo}); {quello} é o resto. {Codesto} acrescenta distância e um juízo: {codesto} è {un} prezzo {ingiusto}. Nenhum dos três flexiona para o neutro, e o italiano não tem forma neutra para pronomes.',
      ),
    },
    {
      label: T('O par che, outra vez'),
      text: T(
        'Em «So che viene», {che} é conjunção e a subordinada tem sujeito próprio ({lui}). Em «Che viene?», {che} é pronome e faz as vezes do sujeito. Se a frase puder ser lida das duas maneiras, Italian prefere a interrogativa.',
      ),
    },
  ],
  examples: [
    { text: 'Lo so.', gloss: T('Eu sei.') },
    { text: 'La vedo ogni giorno.', gloss: T('Eu a vejo todo dia.') },
    { text: 'Li conosco già.', gloss: T('Já os conhecemos.') },
    { text: 'Il mio libro e la tua casa.', gloss: T('O meu livro e a tua casa.') },
    { text: 'Il libro di cui parlo.', gloss: T('O livro de que falo.') },
    { text: 'Questi sono i miei amici.', gloss: T('Estes são os meus amigos.') },
    { text: 'Quegli studenti sono stranieri.', gloss: T('Aqueles estudantes são estrangeiros.') },
    { text: 'Non c’è nessuno.', gloss: T('Não há ninguém.') },
    { text: 'Ogni uomo cerca Dio.', gloss: T('Cada homem busca Deus.') },
    { text: 'Che dice il libro?', gloss: T('O que diz o livro?') },
  ],
  tables: [
    {
      caption: T('Pronomes enfáticos'),
      head: ['Persona', 'Singolare', 'Plurale'],
      rows: [
        ['1ª', 'io', 'noi'],
        ['2ª', 'tu', 'voi'],
        ['3ª masc.', 'lui, lo', 'loro, li'],
        ['3ª fem.', 'lei, la', 'loro, le'],
      ],
    },
    {
      caption: T('Possessivos'),
      head: ['Persona', 'Singolare', 'Plurale'],
      rows: [
        ['1ª', 'mio, mia', 'miei, mie'],
        ['2ª', 'tuo, tua', 'tuoi, tue'],
        ['3ª', 'suo, sua', 'suoi, sue'],
        ['1ª plurale', 'nostro', 'nostri, nostre'],
        ['relativo', 'di cui', 'di cui'],
      ],
    },
    {
      caption: T('Demonstrativos'),
      head: ['Punto di vista', 'Singolare', 'Plurale'],
      rows: [
        ['vicino (maschile)', 'questo', 'questi'],
        ['vicino (femminile)', 'questa', 'queste'],
        ['lontano (maschile)', 'quello', 'quegli'],
        ['lontano (femminile)', 'quella', 'quelle'],
      ],
    },
  ],
};

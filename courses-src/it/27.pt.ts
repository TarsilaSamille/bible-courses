import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('Gerúndio, participio e absoluto'),
  subtitle: T('parlando; avendo detto; detto questo'),
  section: T('Numerais, conjunções e gerúndio'),
  body: C(`## O gerúncio: {-ando} e {-endo}

O gerúncio sai do infinitivo apagando a terminação: {-are} dá **-ando** ({parlare} → {parlando}, {camminare} → {camminando}), {-ere} dá **-endo** ({leggere} → {leggendo}), {-ire} também dá {-endo} ({finire} → {finendo}, {dormire} → {dormendo}). Não há regra para os irregulares, e são poucos: {andare} → {andando}, {fare} → {facendo}, {dire} → {dicendo}, {bere} → {bevendo}.

É o gerúncio que faz o que o português faz com o infinitivo, e a correspondência é quase exata: *stare + gerúndio* é o equivalente de «estar a», e é essa construção que traduz cada verbo português do infinitivo. O que o italiano não tem é a preposição: o infinitivo vai nu.

## O participio tem duas formas: congiunto e assoluto

O participio passado regular é {-ato}, {-uto} ou {-ito} ({amato}, {avuto}, {finito}), mais um grupo pequeno e inevitável: {scritto}, {letto}, {fatto}, {visto}, {detto}, {messo}, {aperto}, {tenuto}. Ele aparece em duas formas.

**Congiunto** é o gerúncio do auxiliar {avere}: {avendo} detto, {avendo} scritto, {avendo} mangiato. Marca uma ação anterior e obriga a que os sujeitos coincidam: {Avendo visto i magi, partirono} — quem viu foi quem partiu.

**Assoluto** é o participio sozinho, sem auxiliar: {detto}, {scritto}, {mangiato}. Não tem tempo nem sujeito; funciona como um advérbio curto que resume uma ação anterior.

## O absoluto: quando os sujeitos não são o mesmo

Aqui está a parte que quebra a tradução. O participio absoluto pode introduzir um sujeito **diferente** do sujeito principal, e nada no italiano avisa que houve troca: {Detto questo, se ne andò} — *isto foi dito, e ele saiu*. Quem traduziu {detto questo} por «dizendo isto» fez o gerúndio e atribuiu a fala ao sujeito principal, que pode nem ser quem falou.

O mesmo vale para o congiunto com sujeito trocado, que aparece em orações mais longas: {Avuta la notte, si misero in cammino}, «tendo passado a noite, puseram-se a caminho». Repare que o participio concorda com o sujeito do absolto: {avuta} la notte, {partirono} i magi.

E é por isso que a forma mais comum na Bíblia é quase sempre impersonal: {si compì}, {si adempì}, {fu scritto}, {fu crocifisso}. São as perifrasi dos verbos {essere} mais o participio, e a frase fica sem sujeito nomeado.

## Na Bíblia

Gv 19:36 é um exemplo limpo: «{Si compì} dunque questa parola, e {si adempì} la Scrittura, dicendo: «Non gli spezzarono le gambe»». O primeiro verbo é impersonal: {compiersi}, «ser cumprido». O {dunque} liga o versículo ao que vem antes. E o {dicendo} não é um gerúncio de ação: é a fórmula que introduz uma citação, «dizendo», e o que se segue é fala de outro, não de quem fala.

Repare no contraste com o português: «cumpriu-se esta palavra» traz um sujeito nas costas, o próprio verbo. O italiano lo dispensa.

## O que ler

Ao ver um participio sem auxiliar, pergunte quem é o sujeito do participio: se for o mesmo do verbo principal, traduza como uma ação anterior; se for outro, mantenha os dois sujeitos separados. se for outro, mantenha os dois sujeitos separados. E ao ver {sto per}, {ho finito di}, {devo} ou {voglio} seguido de infinitivo, lembre que não há preposição a mais para colocar.`),
  vocab: [
    V('parlando', 'parlare', 'falando'),
    V('leggendo', 'leggere', 'lendo'),
    V('finendo', 'finire', 'terminando'),
    V('facendo', 'fare', 'fazendo'),
    V('dicendo', 'dire', 'dizendo'),
    V('detto', 'dire', 'dito'),
    V('scritto', 'scrivere', 'escrito'),
    V('fatto', 'fare', 'feito'),
    V('visto', 'vedere', 'visto'),
    V('avendo', 'avere', 'tendo'),
    V('avendo detto', 'dire', 'tendo dito'),
    V('sto per', 'stare', 'estar a ponto de'),
    V('ho finito di', 'finire', 'acabar de'),
    V('devo', 'dovere', 'dever'),
    V('voglio', 'volere', 'querer'),
    V('si compì', 'compiere', 'cumpre-se'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se diz «tendo lido o livro»?'),
    options: [
      T('Avendo letto il libro'),
      T('Avendo leggendo il libro'),
      T('Leggendo il libro'),
      T('Avendo lett il libro'),
    ],
    answer: 0,
    hint: T('Congiunto = avere + gerúndio + participio.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em «detto questo, se ne andò», quem disse isto?'),
      options: [
        T('Necessariamente quem saiu'),
        T('Pode ser outra pessoa'),
        T('Ninguém: o participio é impersonal'),
        T('O leitor do texto'),
      ],
      answer: 1,
      hint: T('No absoluto os sujeitos podem ser diferentes.'),
    },
    {
      kind: 'fill',
      prompt: T('Forme o gerúndio: fare → ___'),
      answer: 'facendo',
      hint: T('Irregular.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: ho finito di ___ (acabar de falar)'),
      answer: 'parlare',
      hint: T('A preposição di fica: di + infinitivo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O gerúncio apaga a terminação do infinitivo: -are vira -ando, -ere e -ire viram -endo.',
      ),
    },
    {
      n: '2',
      text: T(
        'O congiunto é avere + gerúndio + participio: avendo detto. O absoluto é o participio sozinho: detto.',
      ),
    },
    {
      n: '3',
      text: T(
        'No absoluto o sujeito do participio pode ser diferente do sujeito do verbo principal: detto questo, se ne andò.',
      ),
    },
    {
      n: '4',
      text: T('O participio do absoluto concorda com o seu próprio sujeito: avuta la notte.'),
    },
    {
      n: '5',
      text: T(
        'O italiano faz o infinitivo sem preposição; a preposição só aparece quando outro verbo o governa: ho finito di parlare.',
      ),
    },
  ],
  notes: [
    {
      label: T('A preposição que o português inventa'),
      text: T(
        'Em português se diz «vou falar», «preciso falar», «começo a falar», e o verbo conjugado traz o infinitivo junto. Em italiano o infinitivo vai nu: «parlo», «devo parlare». A preposição aparece apenas quando outro verbo o governa: «ho finito di parlare», «voglio mangiare», «non c’è niente che non farebbe».',
      ),
    },
    {
      label: T('Imperativo com perifrase'),
      text: T(
        '«Voglio + infinitivo» é a forma mais comum de pedir em italiano: «voglio parlare con te», «voglio vedere il libro». Nas perífrases do tipo «sto per partire» o italiano deixa claro que ainda não partiu, ao contrário do português «vou partir», que pode ser decisão tomada ou futuro.',
      ),
    },
  ],
  examples: [
    { text: 'Sto leggendo il libro.', gloss: T('Estou a ler o livro.') },
    { text: 'Sto per partire.', gloss: T('Estou a ponto de partir.') },
    { text: 'Ho finito di mangiare.', gloss: T('Acabei de comer.') },
    { text: 'Devo parlare con te.', gloss: T('Tenho de falar contigo.') },
    { text: 'Voglio vedere il libro.', gloss: T('Quero ver o livro.') },
    { text: 'Avendo visto i magi, partirono.', gloss: T('Tendo visto os magos, partiram.') },
    { text: 'Detto questo, se ne andò.', gloss: T('Dito isto, saiu dali.') },
    { text: 'Entrati, i discepoli.', gloss: T('Tendo entrado, os discípulos.') },
    { text: 'Si compì dunque questa parola.', gloss: T('Cumpreu-se pois esta palavra.') },
    { text: 'Il Vangelo fu scritto da Giovanni.', gloss: T('O Evangelho foi escrito por João.') },
  ],
  tables: [
    {
      caption: T('Infinitivo e gerúncio'),
      head: ['Infinitivo', 'Gerundio'],
      rows: [
        ['parlare', 'parlando'],
        ['camminare', 'camminando'],
        ['leggere', 'leggendo'],
        ['finire', 'finendo'],
        ['dormire', 'dormendo'],
        ['andare', 'andando'],
        ['fare', 'facendo'],
        ['dire', 'dicendo'],
        ['bere', 'bevendo'],
        ['potere', 'potendo'],
      ],
    },
    {
      caption: T('Participio: as duas formas'),
      head: ['Tempo', 'Assoluto', 'Congiunto'],
      rows: [
        ['passato, masc. sing.', 'detto', 'avendo detto'],
        ['passato, fem. sing.', 'partita', 'avendo partita'],
        ['passato, masc. plur.', 'partiti', 'avendo partiti'],
        ['regolare, masc. sing.', 'mangiato', 'avendo mangiato'],
        ['irregolare, masc. sing.', 'scritto', 'avendo scritto'],
      ],
    },
    {
      caption: T('Perífrases verbais'),
      head: ['Perifrasi', 'Glossa'],
      rows: [
        ['sto + gerundio', 'stare a'],
        ['sto per + infinito', 'stare per punto de'],
        ['ho finito di + infinito', 'acabar de'],
        ['devo + infinito', 'dover'],
        ['voglio + infinito', 'querer'],
        ['mi piacerebbe + infinito', 'gustaría de'],
        ['vado + gerundio', 'ir haciendo'],
      ],
    },
  ],
};

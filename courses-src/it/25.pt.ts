import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('O numeral'),
  subtitle: T('uno, undici, ventuno, quarantesimo'),
  section: T('Numerais, conjunções e gerúndio'),
  body: C(`## Cardinais: a contagem e a queda do {-ce}

Depois de {dieci} o italiano troca a terminação em vez de acrescentar: {undici}, {dodici}, {tredici}, {quattordici}, {quindici}, {sedici}, {diciassette}. O latim tinha {-ce} e {-ic}; o italiano guardou a vogal em {tredici} e {quindici} e **suprimiu o {-ce}** nos outros, e é por isso que {undici} não é {undece}.

Depois de {venti} acontece o mesmo movimento: o final **-i** cai diante de {tre}, {otto} e dos demais ({ventitré}, {ventotto}, {ventisei}), e reaparece no numeral fechado {ventuno}, que é também a forma de {venti} + {uno}. O mesmo vale para {trentuno}, {quarantuno}, {ottantuno}.

## {uno} e {ventuno} mudam de forma

**{uno}** é o numeral **1** e o artigo indefinido masculino, e por isso se comporta como substantivo: {uno} studente, {uno} zaino, {uno} gnomo, {uno} psicologo, {uno} yacht. Diante de vogal continua {un}: {un} ragazzo, {un} amico. Com nome próprio masculino: {uno} Jones, {uno} strangio.

**{ventuno}** faz a mesma coisa: {ventun’} anni, {ventuno} anni, {ventuno} studenti. E há a forma de queda, obrigatória quando o numeral fica grudado no substantivo: {ventun’}.

## Ordinais, e o que não segue a regra

O ordinal se forma trocando o final do cardinal: {primo}, {secondo}, {terzo}, {quarto}, {quinto}, {sesto}, {settimo}, {ottavo}, {nono}, {decimo}; e depois {undicesimo}, {dodicesimo}, {tredicesimo}, {quindicesimo}, {ventesimo}, {trentesimo}, {centesimo}, {millesimo}. O sufixo **-esimo** é a marca, e o que vem antes é o cardinal sem a vogal final.

A exceção é dupla. {Primo} e {secondo} não seguem nada: são formas próprias. E {quarantesimo} não se parece com {quarantunesimo} porque o cardinal é {quaranta}, e {cinquantesimo}, {sessantesimo} e {settantesimo} já avisam do mesmo jeito.

A **síntese** entra a partir de {ventuno} e some antes de {cento}: {ventidue}, {trenta e tre}, {quarantotto}, {centottanta}, {milleottocento}. {Trenta e tre} é uma palavra só depois de {trenta}; {cento e trenta} é uma só depois de {cento}.

## Na Bíblia

Gv 6:9 põe o numeral em dois substantivos de massa contados por unidade: «Non abbiamo qui se non {cinque} pani e {due} pesci». {Cinque pani} não é «cinco pães» nem «cinco tipos de pão»: é cinco unidades de uma substância, e o numeral vai antes do nome, como em português, mas sem artigo.

O numeral italiano também é substantivo quando se usa sozinho, e nesse caso costuma levar {ne}: «{cinque} pani, non {di più}». E nas medidas, {cinque} chilometri «cinco quilômetros» fica invariável.

## O que ler

Quando vir um número fechado de duas partes ({ventuno}, {centottanta}), não procure nenhuma palavra «e»: ela já está dentro da forma. Quando vir {trenta e tre}, a palavra «e» é obrigatória e faz parte do número. E quando um numeral tocar o substantivo ({ventun’} anni, {cent’} anni), procure a forma de queda.`),
  vocab: [
    V('uno', 'uno', 'um'),
    V('due', 'due', 'dois'),
    V('tre', 'tre', 'três'),
    V('dieci', 'dieci', 'dez'),
    V('undici', 'undici', 'onze'),
    V('venti', 'venti', 'vinte'),
    V('ventuno', 'ventuno', 'vinte e um'),
    V('trenta', 'trenta', 'trinta'),
    V('cento', 'cento', 'cem'),
    V('primo', 'primo', 'primeiro'),
    V('secondo', 'secondo', 'segundo'),
    V('terzo', 'terzo', 'terceiro'),
    V('decimo', 'decimo', 'décimo'),
    V('ventunesimo', 'ventunesimo', 'vinte e primeiro'),
    V('quarantesimo', 'quarantesimo', 'quadragésimo'),
    V('pane', 'pane', 'pão'),
    V('pesce', 'pesce', 'peixe'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se escreve «quinze» em italiano?'),
    options: [T('quindice'), T('quindicci'), T('quinque'), T('quindicì')],
    answer: 0,
    hint: T('O -ce final cai depois de dez.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: ___ zaino (uma mochila)'),
      answer: 'uno',
      hint: T('s + consoante pede uno.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual é o ordinal de quaranta?'),
      options: [T('quarantuno'), T('quarantesimo'), T('quarentesimo'), T('quarantésimo')],
      answer: 1,
      hint: T('Cardinal em -anta vira -antesimo.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva trinta e três: trenta e ___'),
      answer: 'tre',
      hint: T('A síntese aparece a partir de trinta.'),
    },
  ],
  rules: [
    { n: '1', text: T('De onze a dezessete o -ce final some: undici, dodici, quindici, sedici.') },
    {
      n: '2',
      text: T(
        'De vinte em diante o -i final cai antes de tre, otto e seis: ventitré, ventotto, ventisei.',
      ),
    },
    { n: '3', text: T('Uno e ventuno viram uno, ventun’ diante de s + consoante, z, gn e ps.') },
    {
      n: '4',
      text: T(
        'Ordinal: cardinal sem a vogal final mais -esimo. Primo, secondo e quarantesimo fogem da conta.',
      ),
    },
    {
      n: '5',
      text: T(
        'A síntese aparece de trinta em diante e desaparece depois de cento: trenta e tre, centottanta.',
      ),
    },
  ],
  notes: [
    {
      label: T('O e que só existe uma vez'),
      text: T(
        '{Venti e uno} não se escreve assim em italiano: ou {ventuno}, que é uma palavra, ou {venti} più {uno}, que é uma frase. O mesmo vale para {cento e trenta}, que vira {centotrenta}. O português tem a palavra «e» como cola; o italiano cola os números.',
      ),
    },
    {
      label: T('O numeral com nome próprio'),
      text: T(
        '{Uno} é o numeral e também o artigo indefinido masculino, e por isso flexiona: {uno} studente, {uno} zaino. {Un} não flexiona e nunca aparece diante de s + consoante. Decidir entre {un} e {uno} é decidir se o substantivo é conhecido.',
      ),
    },
  ],
  examples: [
    { text: 'Uno studente con uno zaino.', gloss: T('Um estudante com uma mochila.') },
    { text: 'Un amico e una studentessa.', gloss: T('Um amigo e uma estudante.') },
    { text: 'Ventun anni e undici mesi.', gloss: T('Vinte e um anos e onze meses.') },
    { text: 'Trenta e tre libri.', gloss: T('Trinta e três livros.') },
    { text: 'Quarantotto ore.', gloss: T('Quarenta e oito horas.') },
    { text: 'Il ventesimo secolo.', gloss: T('O século vinte.') },
    { text: 'Il quarantesimo anniversario.', gloss: T('O aniversário de quarenta anos.') },
    { text: 'Centottanta pagine.', gloss: T('Cento e oitenta páginas.') },
    { text: 'Cinque pani e due pesci.', gloss: T('Cinco pães e dois peixes.') },
  ],
  tables: [
    {
      caption: T('Cardinais'),
      head: ['Numero', 'Italiano', 'Numero', 'Italiano'],
      rows: [
        ['0', 'zero', '16', 'sedici'],
        ['1', 'uno', '17', 'diciassette'],
        ['2', 'due', '20', 'venti'],
        ['3', 'tre', '21', 'ventuno'],
        ['4', 'quattro', '22', 'ventidue'],
        ['5', 'cinque', '23', 'ventitré'],
        ['6', 'sei', '30', 'trenta'],
        ['7', 'sette', '40', 'quaranta'],
        ['8', 'otto', '100', 'cento'],
        ['9', 'nove', '1000', 'mille'],
        ['10', 'dieci', '2000', 'duemila'],
        ['11', 'undici', '200', 'duecento'],
      ],
    },
    {
      caption: T('Ordinais'),
      head: ['Cardinale', 'Ordinale', 'Cardinale', 'Ordinale'],
      rows: [
        ['1', 'primo', '11', 'undicesimo'],
        ['2', 'secondo', '12', 'dodicesimo'],
        ['3', 'terzo', '13', 'tredicesimo'],
        ['4', 'quarto', '20', 'ventesimo'],
        ['5', 'quinto', '21', 'ventunesimo'],
        ['6', 'sesto', '30', 'trentesimo'],
        ['7', 'settimo', '40', 'quarantesimo'],
        ['8', 'ottavo', '50', 'cinquantesimo'],
        ['9', 'nono', '100', 'centesimo'],
        ['10', 'decimo', '1000', 'millesimo'],
      ],
    },
    {
      caption: T('Síntese'),
      head: ['Numero', 'Italiano', 'Numero', 'Italiano'],
      rows: [
        ['21', 'ventuno', '48', 'quarantotto'],
        ['22', 'ventidue', '53', 'cinquantatré'],
        ['30', 'trenta', '80', 'ottanta'],
        ['33', 'trenta e tre', '100', 'cento'],
        ['40', 'quaranta', '120', 'centoventi'],
        ['46', 'quarantasei', '180', 'centottanta'],
      ],
    },
  ],
};

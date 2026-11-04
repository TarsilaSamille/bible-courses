import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('A frase toda'),
  subtitle: T('È arrivata; darlo; al posto del quale'),
  section: T('Leitura e sintaxe'),
  body: C(`## A ordem padrão, e o sujeito que some

A ordem do italiano é sujeito, verbo, objeto: «{Maria} {leggerebbe} {il libro}». O adjetivo e a expressão mais longa vêm depois, e quase nunca antes. A inversão é possível e não é errada, mas é marcada: soa literária, bíblica ou arcaica, não neutra.

O italiano omite o sujeito com facilidade, e é por isso que muitas frases não têm sujeito visível. O primeiro e o segundo pessoa podem sumir porque o verbo já os identifica: «{Vengo} domani», «{Parliamo} italiano». O terceira pessoa só some quando a frase anterior já o nomeou, e é o propdropping que aparece o tempo todo: «{Maria} è partita. {È arrivata} alle tre». O verbo {è arrivata} é da terceira singular feminino e não há ninguém à frente dele.

## O pronome que gruda no verbo

Alguns verbosItalian fundem o pronome objeto ao infinitivo: {dare} + {lo} = {darlo}, {fare} + {lo} = {farlo}, {avere} + {lo} = {averlo}, {potere} + {lo} = {poterlo}, {volere} + {lo} = {volerlo}, {andare} + {ci} = {andarci}. O mesmo vale com {ne}: {darne}, {farcene}, {averne}.

O ponto é que essa fusão é impossível num grupo de verbos, e são eles que interessam a quem traduz: {stare}, {restare}, {uscire}, {entrare} não recebem clítico. Não se diz *starlo* nem *restarlo*. Se a frase precisa do pronome, o italiano passa a um outro verbo: «sono {stato} {li} {tre giorni}».

E a fusão vai mais longe no imperativo, onde o pronome se gruda depois do verbo: «{dammi} {lo}» dá **{dammelo}**, «{dimmi} {lo}» dá {dimelo}, «{date} {ci} {lo}» dá {datelo}. No resto da frase o clítico vem antes do verbo conjugado, e {non} fica entre os dois: **{non} {lo} {so}**.

## Inversão literária: o verbo antes do sujeito

A inversão mais comum não é decorativa: aparece quando a oração começa por um adjuncto de tempo, lugar ou condição. «{Quando dunque nacque} {Gesù} {a} {Betlem}», «{Entrati} {i discepoli}», «{Seduti} {gli ascoltava}». O verbo pode até ir para o começo da frase, como no exemplo mais conhecido da prosa italiana: «{Al posto del quale c’era} {un divano}».

Repare no que acontece com o pronome em {Entrati i discepoli}: o {i} é artigo definido, não pronome. E repare que o participante único, que em português viraria «tendo entrado os discípulos», em italiano é um substantivo solto no começo da frase, e quem entrou fica no ar até a segunda oração.

## Na Bíblia

Gv 20:19 tem os três mecanismos numa frase: «{Entrati} {i discepoli}», «Gesù {disse} {loro}», «{Entrati}» é gerúncio no sentido de absoluto, sem sujeito nomeado; «{disse loro}» tem verbo, pronome indireto e nenhum sujeito. Um tradutor que escreve «Jesus disse aos discípulos» em português acrescenta um sujeito que o italiano não tinha, e o leitor perde a abertura.

O mesmo vale para o subjuntivo: «Gesù, sapendo che tutte le cose gli erano state affidate dal Padre…». Sem nome de sujeito, o verbo vai para o primeiro plano.

## O que ler

Ao ler uma frase sem sujeito, não procure o sujeito perdido: procure o sujeito da frase anterior. Ao ver um verbo com pronome grudado, desfaça a fusão e descubra se o verbo aceita clítico; se não aceita, o italiano escolheu outro verbo. E ao ver um substantivo solto no começo da frase antes do verbo, trate-o como inversão, não como erro de ordem.`),
  vocab: [
    V('entrare', 'entrare', 'entrar'),
    V('arrivare', 'arrivare', 'chegar'),
    V('partire', 'partire', 'partir'),
    V('dire', 'dire', 'dizer'),
    V('dare', 'dare', 'dar'),
    V('fare', 'fare', 'fazer'),
    V('andare', 'andare', 'ir'),
    V('uscire', 'uscire', 'sair'),
    V('libro', 'libro', 'livro'),
    V('Maria', 'Maria', 'Maria'),
    V('discepolo', 'discepolo', 'discípulo'),
    V('leggere', 'leggere', 'ler'),
    V('soggetto', 'soggetto', 'sujeito'),
    V('verbo', 'verbo', 'verbo'),
    V('pronome', 'pronome', 'pronome'),
    V('clitico', 'clitico', 'clítico (gram.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «Maria è partita. È arrivata alle tre.», quem chegou?'),
    options: [
      T('Alguém não identificado'),
      T('Maria, porque o verbo é singular feminino'),
      T('Maria, porque está escrito'),
      T('O sujeito foi apagado por erro'),
    ],
    answer: 1,
    hint: T('O verbo conserva a marca de gênero e número do sujeito ausente.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Funda o verbo e o pronome: dare + lo → ___'),
      answer: 'darlo',
      hint: T('O infinitivo absorve o pronome objeto.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa um verbo que não admite pronome grudado?'),
      options: [T('Glielo diedi.'), T('Starlo a casa.'), T('Farlo subito.'), T('Darne un pezzo.')],
      answer: 1,
      hint: T('Stare e restare não recebem clítico.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o imperativo fused: dammi lo → ___'),
      answer: 'dammelo',
      hint: T('No imperativo o clítico vai depois.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('A ordem padrão é sujeito, verbo, objeto; a inversão é possível e soa literária.'),
    },
    {
      n: '2',
      text: T(
        'O sujeito pode ser omitido; o verbo conserva a marca de quem o pratica: È arrivata alle tre.',
      ),
    },
    {
      n: '3',
      text: T('Alguns verbos fundem o pronome objeto: darlo, farlo, averlo, poterlo, andarci.'),
    },
    { n: '4', text: T('Stare, restare, uscire e entrare não recebem pronome grudado.') },
    {
      n: '5',
      text: T('No imperativo afirmativo o clítico se gruda depois: dammelo, dimelo, datelo.'),
    },
  ],
  notes: [
    {
      label: T('O falso cognato do português'),
      text: T(
        'O português precisa de duas palavras para dizer o que {glielo} diz: «dar-lhe isso». O italiano junta o indireto {gli} ao direto {lo} e cola o bloco ao verbo, e o que era frase vira palavra. É por isso que {glielo} precisa de uma nota de rodapé e «dar-lhe isso» não.',
      ),
    },
    {
      label: T('Quando o sujeito pode sumir'),
      text: T(
        'Com {io} e {tu} o sujeito raramente aparece, porque o verbo já o identifica. Com terceira pessoa, some quando o sujeito acabou de ser nomeado, e nesse caso a frase seguinte não tem como ser lida. Tradutor que escreve «Maria è partita. Lei è arrivata» não está errado: está apenas mais devagar do que o italiano.',
      ),
    },
  ],
  examples: [
    { text: 'Maria è partita. È arrivata alle tre.', gloss: T('Maria partiu. Chegou às três.') },
    { text: 'Vengo domani.', gloss: T('Vou amanhã.') },
    { text: 'Glielo diedi.', gloss: T('Dei-lho a ele.') },
    { text: 'Fallo subito.', gloss: T('Faz isso já.') },
    { text: 'Dammelo, per favore.', gloss: T('Dá-m isso, por favor.') },
    { text: 'Non lo so.', gloss: T('Não sei.') },
    {
      text: 'Entrati i discepoli, disse loro.',
      gloss: T('Tendo entrado, os discípulos, disse-lhes.'),
    },
    { text: 'Al posto del quale c’era un divano.', gloss: T('No lugar do qual havia um sofá.') },
    { text: 'Seduti, gli ascoltava.', gloss: T('Sentado, ouvia-os.') },
  ],
  tables: [
    {
      caption: T('Ordem da frase'),
      head: ['Ordine', 'Struttura', 'Frase'],
      rows: [
        ['standard', 'soggetto + verbo + oggetto', 'Maria legge il libro'],
        ['con aggettivo', 'soggetto + verbo + oggetto + aggettivo', 'Maria legge il libro nuovo'],
        ['prodropping', 'verbo, con il soggetto omesso', 'Maria è partita. È arrivata.'],
        ['inversione temporale', 'tempo + verbo + soggetto', 'Quando dunque nacque Gesù'],
        [
          'inversione letteraria',
          'avverbio + verbo + soggetto',
          'Al posto del quale c’era un divano',
        ],
      ],
    },
    {
      caption: T('Verbo e pronome fundidos'),
      head: ['Verbo', 'Pronome', 'Forma'],
      rows: [
        ['dare', 'lo', 'darlo'],
        ['fare', 'lo', 'farlo'],
        ['avere', 'lo', 'averlo'],
        ['potere', 'lo', 'poterlo'],
        ['volere', 'lo', 'volerlo'],
        ['andare', 'ci', 'andarci'],
        ['dare', 'ne', 'darne'],
        ['stare', '—', 'stare (non fonde)'],
      ],
    },
    {
      caption: T('O bloco pronominal'),
      head: ['Forma', 'Significato'],
      rows: [
        ['me lo', 'a me quello'],
        ['glielo', 'a lui quello'],
        ['ce ne', 'a noi di questo'],
        ['te ne', 'a te di questo'],
        ['dammelo', 'dammi questo (imperativo)'],
        ['datelo', 'daci questo (imperativo)'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Condicionais'),
  subtitle: T('εἰ, ἐάν, ἄν: três graus de «se»'),
  section: T('Sintaxe'),
  body: C(`## Três mundos possíveis

O grego distingue três graus de condição, cada um com partícula e modo próprios. A condição real ({εἰ} + indicativo) trata o caso como fato ou hipótese aberta: {εἰ πιστεύεις} «se crês (e é fato que…)». A eventual ({ἐάν} + subjuntivo) projeta futuro incerto: {ἐὰν ἀγαπᾶτέ με} «se me amardes (quando amardes)» (Jo 14.15). A irreal ({εἰ} + passado + {ἄν}) lamenta o contrário do fato: {εἰ ἤδειτε} «se soubésseis (mas não sabeis)».

O português ajuda: a eventual grega corresponde ao nosso futuro do subjuntivo («se confessarmos», 1Jo 1.9, {ἐὰν ὁμολογῶμεν}) — o grego conserva viva a forma que o português mantém. E a irreal usa o imperfeito/aoristo como o nosso «se soubesse…».

## Real, eventual, irreal

Real: {εἰ} + qualquer tempo do indicativo, na prótase e na apódose conforme o sentido. {εἰ θεὸς ὑπὲρ ἡμῶν} «se Deus é por nós…» (Rm 8.31) — o apóstolo assume o fato e extrai a consequência ({τίς καθ᾽ ἡμῶν;} «quem contra nós?»). Jo 11.40 mistura os mundos de propósito: {οὐκ εἶπόν σοι ὅτι ἐὰν πιστεύσῃς;} «não te disse que, se creres…?».

Eventual: {ἐάν} (= {εἰ} + {ἄν}) + subjuntivo; apódose em futuro ou imperativo. É a condição do discipulado: {ἐὰν περιπατῶμεν ἐν τῷ φωτί} «se andarmos na luz…» (1Jo 1.7), {ἐὰν ἀγαπᾶτέ με, τὰς ἐντολάς μου τηρήσετε} «se me amardes, guardareis os meus mandamentos» (Jo 14.15).

Irreal: {εἰ} + imperfeito/aoristo + {ἄν} nos dois lados. Presente irreal ({εἰ ἦτε} «se fôsseis…», Jo 8.39) e passado irreal ({εἰ ᾔδειτε} «se tivésseis sabido…»). O {ἄν} marca o irrealizável — sem ele, a frase volta ao mundo real.

## A quarta classe e os desejos

Resta a condição potencial remota ({εἰ} + optativo … {ἄν} + optativo: «se por acaso…»), raríssima no Novo Testamento — basta reconhecer o optativo (cap. 8). E os comandos condicionais disfarçados: {ὃς ἐὰν θέλῃ} «quem quiser» (Mc 8.34, relativo + {ἐάν} = eventual genérica), {ὅστις} + subjuntivo nas bem-aventuranças invertidas.`),
  vocab: [
    V('ἐάν', 'ἐάν', 'se (eventual)'),
    V('εἰ', 'εἰ', 'se (real)'),
    V('ἄν', 'ἄν', 'partícula potencial'),
    V('ὁμολογῶμεν', 'ὁμολογέω', 'confessemos'),
    V('περιπατῶμεν', 'περιπατέω', 'andemos'),
    V('ἀγαπᾶτε', 'ἀγαπάω', 'ameis'),
    V('θέλῃς', 'θέλω', 'quiseres'),
    V('εἴπῃς', 'λέγω', 'disseres'),
    V('νίψω', 'νίπτω', 'lavar'),
    V('ᾔδειτε', 'οἶδα', 'tivésseis sabido'),
    V('ὑπέρ', 'ὑπέρ', 'por, em favor de'),
    V('φῶς', 'φῶς', 'luz'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἐὰν ὁμολογῶμεν» (1Jo 1.9) é condição…'),
    options: [
      T('Eventual (ἐάν + subjuntivo)'),
      T('Real (εἰ + indicativo)'),
      T('Irreal passada'),
      T('Potencial remota'),
    ],
    answer: 0,
    hint: T('ἐάν + subjuntivo = eventual — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete a partícula da condição real: ___ θεὸς ὑπὲρ ἡμῶν («se Deus é por nós», Rm 8.31).',
      ),
      answer: 'εἰ',
      hint: T('Real = εἰ + indicativo.'),
    },
    {
      kind: 'choose',
      prompt: T('«εἰ ἤδειτε» (sem ἄν) seria…'),
      options: [
        T('Fato passado, não lamento («se sabíeis»)'),
        T('Irreal do mesmo jeito'),
        T('Eventual futura'),
        T('Ordem direta'),
      ],
      answer: 0,
      hint: T('Sem ἄν não há irreal — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada frase à sua classe.'),
      pairs: [
        { a: 'εἰ πιστεύεις', b: 'real' },
        { a: 'ἐὰν πιστεύσῃς', b: 'eventual' },
        { a: 'εἰ ᾔδεις ἄν', b: 'irreal' },
        { a: 'ὃς ἐὰν θέλῃ', b: 'eventual genérica' },
      ],
      answer: [
        { 0: '0', 1: '-', 2: '0' },
        { 0: '1', 1: '-', 2: '1' },
        { 0: '2', 1: '-', 2: '2' },
        { 0: '3', 1: '-', 2: '3' },
      ],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Real = εἰ + indicativo (fato ou hipótese aberta). Eventual = ἐάν + subjuntivo (futuro incerto). Irreal = εἰ + passado + ἄν.',
      ),
    },
    {
      n: '2',
      text: T(
        '{ἐάν} = εἰ + ἄν fundidos. Diante de ἐάν, espere subjuntivo; diante de εἰ + indicativo, fato.',
      ),
    },
    {
      n: '3',
      text: T(
        'A eventual equivale ao futuro do subjuntivo português («se andarmos»). O português conserva o que o grego usa.',
      ),
    },
    {
      n: '4',
      text: T('Sem ἄν não há irreal: εἰ + passado sem ἄν descreve fato passado, não lamento.'),
    },
  ],
  notes: [
    {
      label: T('ἐὰν × ἄν:'),
      text: T(
        '{ἐάν} (com ε) abre a condição; {ἄν} sozinho marca potencialidade e irrealidade dentro da frase. {ἐὰν θέλῃς δύνασαί με} «se quiseres, podes curar-me» (Mc 1.40): condição eventual com apódose potencial.',
      ),
    },
    {
      label: T('João e o eventual:'),
      text: T(
        '1 João é a carta do {ἐάν}: 1.7, 1.9, 2.1, 3.21 — testes de comunhão em condição eventual («se andarmos…», «se confessarmos…»). Ler 1Jo depois deste capítulo é colher o plantado.',
      ),
    },
  ],
  examples: [
    { text: '{ἐὰν ὁμολογῶμεν}', gloss: T('se confessarmos (1Jo 1.9)') },
    { text: '{ἐὰν περιπατῶμεν}', gloss: T('se andarmos na luz (1Jo 1.7)') },
    { text: '{ἐὰν ἀγαπᾶτέ με}', gloss: T('se me amardes (Jo 14.15)') },
    { text: '{εἰ θεὸς ὑπὲρ ἡμῶν}', gloss: T('se Deus é por nós (Rm 8.31)') },
    { text: '{εἰ ἦτε}', gloss: T('se fôsseis (irreal; Jo 8.39)') },
    { text: '{εἰ ᾔδειτε}', gloss: T('se tivésseis sabido (irreal passado)') },
    { text: '{ὃς ἐὰν θέλῃ}', gloss: T('quem quiser (eventual genérica; Mc 8.34)') },
    { text: '{ἐὰν εἴπῃς}', gloss: T('se disseres (futuro incerto)') },
    { text: '{εἰ πιστεύεις}', gloss: T('se crês (hipótese aberta)') },
    { text: '{ἐὰν μὴ νίψω}', gloss: T('se eu não lavar (Jo 13.8; eventual negativa)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As três condicionais'),
      head: [T('Classe'), T('Prótase (se…)'), T('Apódose (…então)')],
      rows: [
        ['Real', '{εἰ} + indicativo', 'qualquer modo'],
        ['Eventual', '{ἐάν} + subjuntivo', 'futuro / imperativo'],
        ['Irreal', '{εἰ} + passado + {ἄν}', 'passado + {ἄν}'],
      ],
    },
    {
      caption: T('Tabela 2 — Exemplos por classe'),
      head: [T('Classe'), T('Exemplo'), T('Tradução')],
      rows: [
        ['Real', '{εἰ θεὸς ὑπὲρ ἡμῶν}', 'se Deus é por nós (Rm 8.31)'],
        ['Eventual', '{ἐὰν ὁμολογῶμεν}', 'se confessarmos (1Jo 1.9)'],
        ['Irreal pres.', '{εἰ ἦτε}', 'se fôsseis (Jo 8.39)'],
        ['Irreal pass.', '{εἰ ᾔδειτε}', 'se tivésseis sabido'],
      ],
    },
  ],
};

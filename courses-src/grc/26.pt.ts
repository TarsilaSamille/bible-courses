import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Discurso indireto e perguntas'),
  subtitle: T('ὅτι… — τίς; ποῦ; πῶς; e o que cada pergunta espera'),
  section: T('Sintaxe'),
  body: C(`## Contar o que foi dito

O grego reporta falas de dois jeitos. O direto cita ipsis litteris. O indireto usa {ὅτι} «que» + o MESMO tempo e modo do direto — sem a dança de tempos do português («disse que viera»): {λέγει ὅτι πιστεύει} «diz que crê»; {εἶπεν ὅτι ἦλθεν} «disse que viera/vinha» (o imperfeito se mantém!). Essa manutenção simplifica: copie o verbo do direto para o indireto.

O segundo caminho é o infinitivo: {ἔφη λῦσαι} «disse ter libertado», {νομίζουσιν εἶναι} «pensam ser». Com sujeito próprio, o infinitivo o põe em acusativo: {λέγουσιν αὐτὸν εἶναι} «dizem ser ele…». O cap. 10 deu a base; aqui o uso reportativo.

## Perguntar em grego

As interrogativas cobrem o essencial: {τίς;} «quem?» (pessoa), {τί;} «que?» (coisa), {ποῦ;} «onde?», {πότε;} «quando?», {πῶς;} «como?», {διὰ τί;} e {τί;} + genitivo «por quê?» ({τί ποιήσω;} «que farei?», Lc 18.18; {ποῦ μένεις;} «onde moras?», Jo 1.38 — a primeira pergunta dos discípulos).

Não confunda interrogativo com relativo (cap. 26): {τίς} pergunta («quem?»), {ὅς} liga («o qual»). O acento ajuda: interrogativos são oxítonos persistentes ({τίς, τί}); o relativo {ὅς} é proclítico na prática dos editores.

## Perguntas que já trazem a resposta

O grego marca a expectativa da resposta. {ἆρα} (ou {οὐχί} na prática) + indicativo espera «sim»: {οὐχὶ καὶ ὑμεῖς;} «acaso não vós também?…» esperando confirmação. {μήτι} + indicativo espera «não»: {μήτι ἐγώ εἰμι, κύριε;} «acaso sou eu, Senhor?» (Mt 26.22) — cada discípulo perguntou esperando ouvir «não és tu».

Essa nuance ilumina a Última Ceia: onze perguntas {μήτι} em sequência, cada uma um suspiro de alívio antecipado — até o {σὺ εἶπας} «tu o disseste» (Mt 26.25) responder a Judas. Gramática e drama na mesma partícula.`),
  vocab: [
    V('ὅτι', 'ὅτι', 'que, porque'),
    V('τίς', 'τίς', 'quem?'),
    V('τί', 'τίς', 'que?'),
    V('ποῦ', 'ποῦ', 'onde?'),
    V('πότε', 'πότε', 'quando?'),
    V('πῶς', 'πῶς', 'como?'),
    V('διὰ τί', 'διά', 'por quê?'),
    V('ἆρα', 'ἆρα', 'acaso (espera sim)'),
    V('μήτι', 'μήτι', 'acaso (espera não)'),
    V('ἔφη', 'φημί', 'disse'),
    V('νομίζω', 'νομίζω', 'pensar, supor'),
    V('οὖν', 'οὖν', 'pois, então'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«εἶπεν ὅτι ἦλθεν» mantém o imperfeito porque…'),
    options: [
      T('O grego não retrocede tempos no indireto'),
      T('ἦλθεν é presente'),
      T('ὅτι exige imperfeito'),
      T('É discurso direto'),
    ],
    answer: 0,
    hint: T('Mesmo tempo e modo do direto — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a partícula que espera «não»: ___ ἐγώ εἰμι; (Mt 26.22).'),
      answer: 'μήτι',
      hint: T('μήτι espera «não» — regra §4.'),
    },
    {
      kind: 'choose',
      prompt: T('«χαίρω ὅτι ἦλθες» — aqui ὅτι é…'),
      options: [
        T('Causal («porque»): o verbo é sentir'),
        T('Reportativo («que»)'),
        T('Final («para que»)'),
        T('Condicional («se»)'),
      ],
      answer: 0,
      hint: T('Verbo de sentimento → ὅτι causal.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada palavra à sua função.'),
      pairs: [
        { a: 'τίς', b: 'interrogativo' },
        { a: 'ὅς', b: 'relativo' },
        { a: 'μήτι', b: 'espera «não»' },
        { a: 'ἆρα', b: 'espera «sim»' },
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
      text: T('ὅτι + mesmo tempo e modo do direto. Sem retrocesso de tempos como em português.'),
    },
    {
      n: '2',
      text: T('Infinitivo reportativo com sujeito próprio em acusativo: {λέγουσιν αὐτὸν εἶναι}.'),
    },
    {
      n: '3',
      text: T('Interrogativo ({τίς}) pergunta; relativo ({ὅς}) liga. Cap. 26 completa o relativo.'),
    },
    {
      n: '4',
      text: T(
        '{μήτι} espera «não»; {ἆρα}/οὐχί espera «sim». A partícula revela o medo ou a certeza de quem pergunta.',
      ),
    },
  ],
  notes: [
    {
      label: T('ὅτι ambíguo:'),
      text: T(
        '{ὅτι} também significa «porque» (causal). {λέγω ὅτι} + verbo = «digo que»; {χαίρω ὅτι} = «alegro-me porque». O verbo anterior decide: dizer/crer → «que»; sentir/agir → «porque».',
      ),
    },
    {
      label: T('Pergunta retórica:'),
      text: T(
        'Paulo usa perguntas sem resposta como argumento: {τί οὖν;} «que, pois?» (Rm 6.1), {μὴ γένοιτο} como resposta implícita. Reconhecer o jogo {τί οὖν; + μὴ γένοιτο} é ler Romanos no ritmo certo.',
      ),
    },
  ],
  examples: [
    { text: '{λέγει ὅτι πιστεύει}', gloss: T('diz que crê (tempo mantido)') },
    { text: '{εἶπεν ὅτι ἦλθεν}', gloss: T('disse que viera (imperfeito mantido)') },
    { text: '{τί ποιήσω;}', gloss: T('que farei? (Lc 18.18)') },
    { text: '{ποῦ μένεις;}', gloss: T('onde moras? (Jo 1.38)') },
    { text: '{μήτι ἐγώ εἰμι;}', gloss: T('acaso sou eu? (espera «não»; Mt 26.22)') },
    { text: '{τίς ἐστιν οὗτος;}', gloss: T('quem é este? (Mc 4.41)') },
    { text: '{πῶς δύναται;}', gloss: T('como pode? (Jo 3.9)') },
    { text: '{διὰ τί φοβεῖσθε;}', gloss: T('por que temeis? (Mt 8.26)') },
    { text: '{πότε ταῦτα ἔσται;}', gloss: T('quando serão estas coisas? (Mc 13.4)') },
    { text: '{σὺ εἶπας}', gloss: T('tu o disseste (resposta a Judas; Mt 26.25)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Interrogativos essenciais'),
      head: [T('Forma'), T('Sentido'), T('Exemplo')],
      rows: [
        ['{τίς;}', 'quem?', '{τίς ἐστιν οὗτος;}'],
        ['{τί;}', 'que?', '{τί ποιήσω;}'],
        ['{ποῦ;}', 'onde?', '{ποῦ μένεις;}'],
        ['{πότε;}', 'quando?', '{πότε ταῦτα ἔσται;}'],
        ['{πῶς;}', 'como?', '{πῶς δύναται;}'],
        ['{διὰ τί;}', 'por quê?', '{διὰ τί φοβεῖσθε;}'],
      ],
    },
    {
      caption: T('Tabela 2 — Discurso indireto'),
      head: [T('Direto'), T('Indireto com ὅτι'), T('Indireto com infinitivo')],
      rows: [
        ['{πιστεύω}', '{λέγει ὅτι πιστεύει}', '—'],
        ['{ἦλθον}', '{εἶπεν ὅτι ἦλθεν}', '{ἔφη ἐλθεῖν}'],
        ['{λύσω}', '{λέγει ὅτι λύσει}', '{ἔφη λύσειν}'],
      ],
    },
  ],
};

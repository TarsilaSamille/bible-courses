import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Presente do indicativo ativo'),
  subtitle: T('λύω: o paradigma que abre o verbo grego'),
  section: T('O verbo'),
  body: C(`## Quatro perguntas em cada forma verbal

Toda forma verbal grega responde a quatro perguntas: pessoa e número (quem?), tempo e aspecto (quando e como?), voz (quem age?) e modo (fato, desejo ou ordem?). {λύουσιν} responde de uma vez: 3ª pessoa do plural, tempo presente, voz ativa, modo indicativo — «eles libertam». Este capítulo monta a primeira dessas formas, a mais simples e a mais frequente: o presente do indicativo ativo.

O verbo modelo é {λύω} «libertar, desatar», verbo regular em {-ω} sem surpresas fonéticas. Com ele você aprende as seis terminações pessoais, que se repetem — com adaptações — em todos os tempos do indicativo ativo.

## As seis terminações

O presente se forma com tema + vogal temática + desinência pessoal. O tema de {λύω} é {λυ-}; a vogal temática alterna entre {ο} (diante de {μ} e {ν}: {λύομεν}, {λύουσι}) e {ε} (nas demais: {λύεις}, {λύει}, {λύετε}). Fundidas às desinências, elas produzem as seis formas do paradigma.

Repare na 2ª pessoa do singular {-εις} e na 3ª {-ει}: o ditongo final é a marca da pessoa, não do tempo. E a 3ª do plural termina em {-ουσι}, frequentemente com ni eufônico — {λύουσι(ν)} — como no cap. 3.

## O presente não é só «agora»

O presente grego exprime aspecto imperfectivo — ação vista em curso ou repetida — mais do que tempo cronológico. Por isso ele cobre vários sentidos em português: ação em progresso ({βλέπω} «estou vendo»), hábito ({προσεύχεται} «ele costuma orar»), tentativa ({πείθουσιν} «tentam persuadir», o chamado presente conativo) e até futuro próximo ({ἔρχομαι} «estou chegando»).

Há ainda o presente histórico, queridinho dos narradores: no meio de uma história no passado, o autor troca para o presente de repente — {καὶ λέγει αὐτῷ} «e diz-lhe» (Mc 1.40). Marcos faz isso mais de 150 vezes. O efeito é cinematográfico: a cena passa a correr diante dos olhos do leitor.

## Como estudar um verbo

O dicionário registra o verbo pela 1ª pessoa do singular do presente ({λύω}, {πιστεύω}, {ἔχω}) — é a forma-base de onde se deriva todo o presente. Mas um verbo completo exige, além dela, o futuro, o aoristo e o perfeito (os chamados tempos principais), que virão nos próximos capítulos. Por enquanto, memorize o paradigma abaixo até dizê-lo sem hesitar: ele é o esqueleto de tudo o que vem depois.`),
  vocab: [
    V('λύω', 'λύω', 'libertar, desatar'),
    V('λύεις', 'λύω', 'tu libertas'),
    V('λύει', 'λύω', 'ele liberta'),
    V('λύομεν', 'λύω', 'nós libertamos'),
    V('λύετε', 'λύω', 'vós libertais'),
    V('λύουσι', 'λύω', 'eles libertam'),
    V('λέγω', 'λέγω', 'dizer'),
    V('βλέπω', 'βλέπω', 'ver'),
    V('πιστεύω', 'πιστεύω', 'crer'),
    V('ἔχω', 'ἔχω', 'ter'),
    V('γινώσκω', 'γινώσκω', 'conhecer'),
    V('λαμβάνω', 'λαμβάνω', 'tomar, receber'),
    V('πέμπω', 'πέμπω', 'enviar'),
    V('γράφω', 'γράφω', 'escrever'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a 3ª pessoa do plural de «λύω» no presente?'),
    options: [T('λύει'), T('λύετε'), T('λύουσι(ν)'), T('λύομεν')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 1ª pessoa do plural: ___ («nós libertamos», de λύω).'),
      answer: 'λύομεν',
      hint: T('Vogal temática ο diante de μ: λυ-ο-μεν.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «καὶ λέγει αὐτῷ» (Mc 1.40), o presente indica…'),
      options: [
        T('Ação habitual'),
        T('Presente histórico (vivacidade narrativa)'),
        T('Ordem direta'),
        T('Futuro certo'),
      ],
      answer: 1,
      hint: T('A história está no passado e o verbo veio no presente — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua pessoa.'),
      pairs: [
        { a: 'λύεις', b: '2ª sg.' },
        { a: 'λύετε', b: '2ª pl.' },
        { a: 'λύομεν', b: '1ª pl.' },
        { a: 'λύει', b: '3ª sg.' },
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
        'Presente = tema + vogal temática (ο diante de μ/ν, ε nas demais) + desinência pessoal.',
      ),
    },
    {
      n: '2',
      text: T(
        'O dicionário registra o verbo pela 1ª sg. do presente ({γράφω}, {πέμπω}); dela sai todo o presente regular.',
      ),
    },
    {
      n: '3',
      text: T(
        'Aspecto imperfectivo: o presente mostra ação em curso ou habitual, não apenas «agora».',
      ),
    },
    {
      n: '4',
      text: T(
        'Presente histórico: narradores (sobretudo Marcos) usam o presente no meio de relato passado para dar vivacidade.',
      ),
    },
    {
      n: '5',
      text: T(
        'A 3ª pl. leva ν móvel com frequência ({λέγουσιν}); ignore-o na análise, como no cap. 3.',
      ),
    },
  ],
  notes: [
    {
      label: T('Como memorizar:'),
      text: T(
        'Diga o paradigma em voz alta, marcando o ritmo 1-2-3 / 1-2-3: λύω, λύεις, λύει — λύομεν, λύετε, λύουσι. O ouvido fixa as terminações mais rápido que o olho.',
      ),
    },
    {
      label: T('No texto:'),
      text: T(
        '{λέγω} é o verbo mais frequente do Novo Testamento depois de {εἰμί} — e quase sempre aparece no presente histórico ({λέγει}) nas narrativas. Cada {λέγει} que você reconhecer é uma vitória de leitura.',
      ),
    },
  ],
  examples: [
    { text: '{βλέπω τὸ φῶς}', gloss: T('vejo a luz (1ª sg.)') },
    { text: '{πιστεύεις εἰς τὸν υἱόν}', gloss: T('crês no Filho? (2ª sg.; Jo 9.35)') },
    { text: '{ὁ κύριος γινώσκει}', gloss: T('o Senhor conhece (3ª sg.)') },
    { text: '{ἔχομεν εἰρήνην}', gloss: T('temos paz (1ª pl.; Rm 5.1)') },
    { text: '{τί ζητεῖτε}', gloss: T('que procurais? (2ª pl.; Jo 1.38)') },
    { text: '{λέγουσιν αὐτῷ}', gloss: T('dizem-lhe (3ª pl. com ν móvel)') },
    { text: '{καὶ λέγει αὐτῷ}', gloss: T('e diz-lhe (presente histórico; Mc 1.40)') },
    { text: '{ἔρχομαι πρὸς ὑμᾶς}', gloss: T('vou ter convosco (presente com valor de futuro)') },
    { text: '{ὁ πατὴρ ἀγαπᾷ τὸν υἱόν}', gloss: T('o Pai ama o Filho (hábito/estado; Jo 3.35)') },
    { text: '{τί ποιεῖτε}', gloss: T('que fazeis? (2ª pl.)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{λύω}', 'eu liberto'],
        ['2ª sg.', '{λύεις}', 'tu libertas'],
        ['3ª sg.', '{λύει}', 'ele liberta'],
        ['1ª pl.', '{λύομεν}', 'nós libertamos'],
        ['2ª pl.', '{λύετε}', 'vós libertais'],
        ['3ª pl.', '{λύουσι(ν)}', 'eles libertam'],
      ],
    },
    {
      caption: T('Tabela 2 — As terminações pessoais do presente'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        ['1ª pessoa', '{-ω}', '{-ομεν}'],
        ['2ª pessoa', '{-εις}', '{-ετε}'],
        ['3ª pessoa', '{-ει}', '{-ουσι(ν)}'],
      ],
    },
  ],
};

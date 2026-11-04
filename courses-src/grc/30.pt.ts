import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Leitura: bem-aventuranças (Mt 5:3-10)'),
  subtitle: T('Μακάριοι… ὅτι — proclamação e promessa'),
  section: T('Leituras'),
  body: C(`## A arquitetura do macarismo

Cada bem-aventurança tem duas metades unidas por {ὅτι} «porque»: a proclamação no presente ({Μακάριοι οἱ πτωχοί} «felizes os pobres») e a promessa no futuro ({αὐτῶν ἐστιν ἡ βασιλεία} «deles é o reino» / {αὐτοὶ παρακληθήσονται} «eles serão consolados»). Oito vezes a mesma estrutura, oito grupos, oito futuros — e a moldura se fecha: a 1ª e a 8ª terminam no presente ({ἐστιν}), o reino já é deles.

{Μακάριοι} não é «felizes» no sentido de sentimento — é declaração de status diante de Deus, como nos salmos da Septuaginta ({μακάριος ἀνήρ} «feliz o homem», Sl 1.1). O verbo {ἐστιν} some com frequência (predicado nominal, cap. 11): {Μακάριοι οἱ πτωχοί} = «[são] felizes os pobres».

## Os sujeitos: particípios substantivados

Os bem-aventurados vêm em particípios: {οἱ πενθοῦντες} «os que choram», {οἱ πεινῶντες καὶ διψῶντες} «os que têm fome e sede», {οἱ δεδιωγμένοι} «os perseguidos» — este último particípio PERFEITO passivo: estado de quem já foi perseguido e carrega a marca. {οἱ πραεῖς} «os mansos» e {οἱ καθαροὶ} «os puros» usam adjetivos; {οἱ εἰρηνοποιοί} «os pacificadores» usa substantivo composto ({εἰρήνη} + {ποιέω}).

Os dativos limitam e especificam: {τῷ πνεύματι} «em espírito» (pobres não de bolso, mas de espírito), {τῇ καρδίᾳ} «de coração» (pureza localizada). Dativo de respeito — «quanto a…».

## As promessas: futuros do Reino

As apódoses falam futuro — quase todo passivo divino (cap. 20): {παρακληθήσονται} «serão consolados», {χορτασθήσονται} «serão saciados», {ἐλεηθήσονται} «alcançarão misericórdia», {κληθήσονται} «serão chamados». O agente implícito é Deus: Ele consola, sacia, chama.

Duas exceções ensinam: {αὐτῶν ἐστιν} (presente — o reino já pertence) e {ὄψονται} «verão» (futuro ATIVO de {ὁράω}: ver a Deus é ação dos puros, não recepção). E {κληρονομήσουσιν τὴν γῆν} «herdarão a terra» (v. 5) cita o Sl 37.11 da Septuaginta quase palavra por palavra — Mateus ancora a promessa na Escritura.`),
  vocab: [
    V('μακάριοι', 'μακάριος', 'felizes, bem-aventurados'),
    V('πτωχοί', 'πτωχός', 'pobres'),
    V('πενθοῦντες', 'πενθέω', 'os que choram'),
    V('πραεῖς', 'πραΰς', 'mansos'),
    V('πεινῶντες', 'πεινάω', 'os que têm fome'),
    V('διψῶντες', 'διψάω', 'os que têm sede'),
    V('ἐλεήμονες', 'ἐλεήμων', 'misericordiosos'),
    V('καθαροί', 'καθαρός', 'puros, limpos'),
    V('εἰρηνοποιοί', 'εἰρηνοποιός', 'pacificadores'),
    V('δεδιωγμένοι', 'διώκω', 'perseguidos'),
    V('παρακληθήσονται', 'παρακαλέω', 'serão consolados'),
    V('χορτασθήσονται', 'χορτάζω', 'serão saciados'),
    V('ὄψονται', 'ὁράω', 'verão'),
    V('κληρονομήσουσιν', 'κληρονομέω', 'herdarão'),
    V('οὐρανῶν', 'οὐρανός', 'dos céus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«παρακληθήσονται» é futuro passivo (e não presente) porque…'),
    options: [
      T('Tem -θη- (passivo) + -σ- (futuro) antes da desinência'),
      T('Termina em -ονται'),
      T('Vem depois de ὅτι'),
      T('É particípio'),
    ],
    answer: 0,
    hint: T('θη + σ = futuro passivo — caps. 19–20.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dativo: τῷ ___ («em espírito», de πνεῦμα).'),
      answer: 'πνεύματι',
      hint: T('Neutro em -μα: dativo em -ματι.'),
    },
    {
      kind: 'choose',
      prompt: T('«οἱ δεδιωγμένοι» usa particípio perfeito porque…'),
      options: [
        T('Marca estado resultante (perseguidos com marca permanente)'),
        T('É mais curto que o presente'),
        T('Presente não existe para esse verbo'),
        T('É exigido por μακάριοι'),
      ],
      answer: 0,
      hint: T('Perfeito = estado resultante — cap. 15.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua análise.'),
      pairs: [
        { a: 'πενθοῦντες', b: 'part. presente' },
        { a: 'δεδιωγμένοι', b: 'part. perfeito' },
        { a: 'ὄψονται', b: 'futuro ativo' },
        { a: 'ἐστιν', b: 'presente (moldura)' },
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
        'Macarismo = proclamação (presente) + ὅτι + promessa (futuro). A moldura 1ª/8ª fecha no presente.',
      ),
    },
    {
      n: '2',
      text: T(
        'Sujeitos em particípio substantivado; o perfeito ({δεδιωγμένοι}) marca estado resultante.',
      ),
    },
    {
      n: '3',
      text: T(
        'Futuros passivos = passivo divino (Deus consola, sacia, chama). Futuros ativos ({ὄψονται}) = ação dos bem-aventurados.',
      ),
    },
    {
      n: '4',
      text: T('Dativo de respeito limita o adjetivo: {τῷ πνεύματι}, {τῇ καρδίᾳ} — «quanto a…».'),
    },
  ],
  notes: [
    {
      label: T('Lucas × Mateus:'),
      text: T(
        'Lucas traz quatro bem-aventuranças sem dativos limitadores ({Μακάριοι οἱ πτωχοί} «os pobres», Lc 6.20) + quatro ais ({οὐαὶ ὑμῖν} «ai de vós»). Comparar as versões é exercício clássico: Mateus espiritualiza, Lucas socializa — a gramática mostra onde cada um mexeu.',
      ),
    },
    {
      label: T('Som:'),
      text: T(
        'Leia as oito em voz alta marcando o ritmo Μακάριοι… ὅτι / Μακάριοι… ὅτι. O paralelismo é mnemônico: comunidades antigas decoravam o Sermão cantando essa cadência.',
      ),
    },
  ],
  examples: [
    { text: '{Μακάριοι οἱ πτωχοί}', gloss: T('felizes os pobres (sem verbo: predicado nominal)') },
    { text: '{αὐτῶν ἐστιν}', gloss: T('deles é (genitivo possessivo anteposto)') },
    { text: '{οἱ πενθοῦντες}', gloss: T('os que choram (particípio presente)') },
    { text: '{παρακληθήσονται}', gloss: T('serão consolados (futuro passivo)') },
    { text: '{κληρονομήσουσιν}', gloss: T('herdarão (futuro ativo; Sl 37.11)') },
    { text: '{χορτασθήσονται}', gloss: T('serão saciados (fartura escatológica)') },
    { text: '{τῇ καρδίᾳ}', gloss: T('de coração (dativo de respeito)') },
    { text: '{ὄψονται}', gloss: T('verão (futuro de ὁράω; teofania prometida)') },
    { text: '{κληθήσονται}', gloss: T('serão chamados (filiação declarada)') },
    { text: '{οἱ δεδιωγμένοι}', gloss: T('os perseguidos (perfeito: marca permanente)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As oito bem-aventuranças'),
      head: [T('Sujeito'), T('Promessa'), T('Tempo')],
      rows: [
        ['{οἱ πτωχοὶ τῷ πνεύματι}', '{αὐτῶν ἐστιν}', 'presente'],
        ['{οἱ πενθοῦντες}', '{παρακληθήσονται}', 'fut. passivo'],
        ['{οἱ πραεῖς}', '{κληρονομήσουσιν}', 'futuro ativo'],
        ['{οἱ πεινῶντες}', '{χορτασθήσονται}', 'fut. passivo'],
        ['{οἱ ἐλεήμονες}', '{ἐλεηθήσονται}', 'fut. passivo'],
        ['{οἱ καθαροὶ τῇ καρδίᾳ}', '{ὄψονται}', 'futuro ativo'],
        ['{οἱ εἰρηνοποιοί}', '{κληθήσονται}', 'fut. passivo'],
        ['{οἱ δεδιωγμένοι}', '{αὐτῶν ἐστιν}', 'presente'],
      ],
    },
  ],
};

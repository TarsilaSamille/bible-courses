import { C, T, V } from '../shared.mts';

export default {
  id: 31,
  title: T('Capstone: Pai-Nosso (Mt 6:9-13)'),
  subtitle: T('Πάτερ ἡμῶν — toda a gramática numa oração'),
  section: T('Leituras'),
  body: C(`## A invocação

{Πάτερ ἡμῶν ὁ ἐν τοῖς οὐρανοῖς} — «Pai nosso que estás nos céus»: vocativo {Πάτερ} (cap. 13), possessivo {ἡμῶν} (cap. 14) e o artigo com preposição funcionando como relativo — {ὁ ἐν τοῖς οὐρανοῖς} «o [que está] nos céus» (cap. 26, artigo substantivando frase preposicional). Três capítulos na primeira linha: o curso inteiro mora nesta oração.

## Seja, venha, faça-se: os três «que»

{ἁγιασθήτω τὸ ὄνομά σου} — «santificado seja o teu nome»: imperativo aoristo passivo, 3ª sg. (caps. 9 + 19). {ἐλθέτω ἡ βασιλεία σου} — «venha o teu reino»: imperativo do aoristo 2º de {ἔρχομαι} ({ἐλθ-}, cap. 18). {γενηθήτω τὸ θέλημά σου, ὡς ἐν οὐρανῷ καὶ ἐπὶ γῆς} — «seja feita a tua vontade, como no céu e na terra»: imperativo aoristo passivo de {γίνομαι} + comparação com {ὡς}.

As três petições pedem a mesma coisa em espiral (o estilo de João, cap. 28): nome santificado, reino vindo, vontade feita — Deus agindo, nós recebendo. Todas na 3ª pessoa: nem se ordena a Deus na 2ª («santifica!»), pede-se na 3ª («seja santificado»). A gramática ensina a reverência.

## Dá, perdoa, não induzas, livra

{τὸν ἄρτον ἡμῶν τὸν ἐπιούσιον δὸς ἡμῖν σήμερον} — «o pão nosso de cada dia dá-nos hoje»: objeto + {δὸς}, imperativo aoristo 2º de {δίδωμι} (cap. 12), dativo {ἡμῖν}, advérbio {σήμερον}. {ἐπιούσιος} «de cada dia / necessário» é hapax — palavra que só existe aqui (e em Lc 11.3): os lexicógrafos debatem se vem de {ἐπί + οὐσία} («para a subsistência») ou {ἐπι-ιέναι} («para o [dia] seguinte»). A dúvida erudita não muda a prece.

{καὶ ἄφες ἡμῖν τὰ ὀφειλήματα ἡμῶν, ὡς καὶ ἡμεῖς ἀφήκαμεν τοῖς ὀφειλέταις ἡμῶν} — «e perdoa-nos as dívidas, como também nós perdoamos»: imperativo {ἄφες} (aoristo 2º de {ἀφίημι}, «deixa ir») + perfeito {ἀφήκαμεν} («temos perdoado» — estado resultante, cap. 15). Mateus diz «dívidas» ({ὀφειλήματα}); Lucas diz «pecados» ({ἁμαρτίας}, Lc 11.4) — a comparação das versões ilumina as duas.

{καὶ μὴ εἰσενέγκῃς ἡμᾶς εἰς πειρασμόν, ἀλλὰ ῥῦσαι ἡμᾶς ἀπὸ τοῦ πονηροῦ} — «e não nos induzas em tentação, mas livra-nos do Maligno»: {μή} + subjuntivo aoristo (proibição, cap. 8) + imperativo médio {ῥῦσαι} («livra para nós», médio de interesse). {τοῦ πονηροῦ} — masculino («do Maligno») ou neutro («do mal»)? A gramática admite os dois; a tradição reza os dois.`),
  vocab: [
    V('Πάτερ', 'πατήρ', 'Pai! (voc.)'),
    V('ἁγιασθήτω', 'ἁγιάζω', 'santificado seja'),
    V('ἐλθέτω', 'ἔρχομαι', 'venha'),
    V('γενηθήτω', 'γίνομαι', 'seja feita'),
    V('θέλημα', 'θέλημα', 'vontade'),
    V('ἐπιούσιος', 'ἐπιούσιος', 'de cada dia (hapax)'),
    V('δὸς', 'δίδωμι', 'dá!'),
    V('σήμερον', 'σήμερον', 'hoje'),
    V('ἄφες', 'ἀφίημι', 'perdoa! deixa!'),
    V('ὀφειλήματα', 'ὀφείλημα', 'dívidas'),
    V('ἀφήκαμεν', 'ἀφίημι', 'temos perdoado'),
    V('ὀφειλέταις', 'ὀφειλέτης', 'aos devedores'),
    V('εἰσενέγκῃς', 'ἐσφέρω', 'induzas'),
    V('πειρασμόν', 'πειρασμός', 'tentação'),
    V('ῥῦσαι', 'ῥύομαι', 'livra!'),
    V('πονηροῦ', 'πονηρός', 'do Maligno / do mal'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἁγιασθήτω» está na 3ª pessoa (e não na 2ª) porque…'),
    options: [
      T('A Deus pede-se («seja santificado»), não se ordena'),
      T('A 2ª pessoa não existe no imperativo'),
      T('É proibição com μή'),
      T('O sujeito é plural'),
    ],
    answer: 0,
    hint: T('Modo e reverência — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o imperativo de δίδωμι: ___ ἡμῖν («dá-nos», Mt 6.11).'),
      answer: 'δὸς',
      hint: T('Aoristo 2º de δίδωμι: forma curtíssima.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἀφήκαμεν» (perfeito) funda o pedido «ἄφες» porque…'),
      options: [
        T('Estado anterior («tendo perdoado») autoriza o presente'),
        T('É futuro disfarçado'),
        T('Rima com ἄφες'),
        T('É exigência métrica'),
      ],
      answer: 0,
      hint: T('Perfeito fundante — regra §3.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua análise.'),
      pairs: [
        { a: 'Πάτερ', b: 'vocativo' },
        { a: 'γενηθήτω', b: 'imperativo passivo' },
        { a: 'ἀφήκαμεν', b: 'perfeito' },
        { a: 'ῥῦσαι', b: 'imperativo médio' },
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
        'A Deus pede-se na 3ª pessoa («seja santificado»), não se ordena na 2ª. O modo carrega a reverência.',
      ),
    },
    {
      n: '2',
      text: T(
        'Artigo + frase preposicional = relativo implícito: {ὁ ἐν τοῖς οὐρανοῖς} «o que está nos céus».',
      ),
    },
    {
      n: '3',
      text: T(
        'Perfeito {ἀφήκαμεν} funda o pedido: «tendo nós perdoado, perdoa-nos». Estado anterior autoriza o presente.',
      ),
    },
    {
      n: '4',
      text: T(
        'Hapax ({ἐπιούσιος}) e ambiguidade ({τοῦ πονηροῦ}) são normais no texto real: a gramática circunscreve, a tradição decide.',
      ),
    },
  ],
  notes: [
    {
      label: T('ΤΕΤΕΛΕΣΤΑΙ:'),
      text: T(
        '«Está consumado» (Jo 19.30, perfeito passivo) — a última palavra da cruz no tempo do estado resultante. Você leu trinta capítulos para chegar aqui: toda forma desta oração passou pelas suas mãos.',
      ),
    },
    {
      label: T('Lucas 11:'),
      text: T(
        'Lucas traz a versão curta (11.2-4): sem «seja feita», com «pecados» em vez de «dívidas», e {ἁμαρτίας} em vez de {ὀφειλήματα}. Compare as duas de ponta a ponta — é a prova final de leitura comparada.',
      ),
    },
  ],
  examples: [
    { text: '{Πάτερ ἡμῶν}', gloss: T('Pai nosso (vocativo + possessivo)') },
    { text: '{ὁ ἐν τοῖς οὐρανοῖς}', gloss: T('o que está nos céus (artigo-relativo)') },
    { text: '{ἁγιασθήτω}', gloss: T('santificado seja (3ª sg. passiva)') },
    { text: '{ἐλθέτω}', gloss: T('venha (aoristo 2º de ἔρχομαι)') },
    { text: '{γενηθήτω}', gloss: T('seja feita (passiva de γίνομαι)') },
    { text: '{δὸς ἡμῖν}', gloss: T('dá-nos (imperativo de δίδωμι + dativo)') },
    { text: '{ἄφες ἡμῖν}', gloss: T('perdoa-nos (aoristo 2º)') },
    { text: '{ἀφήκαμεν}', gloss: T('temos perdoado (perfeito fundante)') },
    { text: '{μὴ εἰσενέγκῃς}', gloss: T('não induzas (proibição)') },
    { text: '{ῥῦσαι ἡμᾶς}', gloss: T('livra-nos (imperativo médio)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As petições e sua gramática'),
      head: [T('Petição'), T('Forma-chave'), T('Capítulos')],
      rows: [
        ['{ἁγιασθήτω}', 'imperativo aor. pass. 3ª', '9 + 19'],
        ['{ἐλθέτω}', 'imperativo aor. 2º', '9 + 18'],
        ['{γενηθήτω}', 'imperativo aor. pass. 3ª', '9 + 19'],
        ['{δὸς}', 'imperativo aor. 2º de δίδωμι', '9 + 12'],
        ['{ἄφες}', 'imperativo aor. 2º de ἀφίημι', '9 + 18'],
        ['{ἀφήκαμεν}', 'perfeito', '15'],
        ['{μὴ εἰσενέγκῃς}', 'proibição (μή + subj.)', '8'],
        ['{ῥῦσαι}', 'imperativo médio', '9 + 17'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 29,
  title: T('Leitura: 1 João 1:1-4'),
  subtitle: T('ὃ ἦν ἀπ᾽ ἀρχῆς — o prólogo em espiral'),
  section: T('Leituras'),
  body: C(`## Um período de quatro versículos

O prólogo de 1 João é um único fôlego sintático: o verbo principal ({ἀπαγγέλλομεν} «anunciamos») só chega no v. 3, depois de uma cascata de relativos. João escreve em espiral — repete, retoma, aprofunda. Acompanhar a espiral é o exercício deste capítulo.

{Ὃ ἦν ἀπ᾽ ἀρχῆς, ὃ ἀκηκόαμεν, ὃ ἑωράκαμεν τοῖς ὀφθαλμοῖς ἡμῶν, ὃ ἐθεασάμεθα καὶ αἱ χεῖρες ἡμῶν ἐψηλάφησαν} — quatro relativos neutros ({ὃ} «o que») empilhando testemunho: era (imperfeito {ἦν}), temos ouvido (perfeito {ἀκηκόαμεν}), temos visto (perfeito {ἑωράκαμεν}), contemplamos (aoristo {ἐθεασάμεθα}), apalparam (aoristo {ἐψηλάφησαν}). Do geral ao tátil: ser, ouvir, ver, contemplar, tocar.

{περὶ τοῦ λόγου τῆς ζωῆς} — «acerca da Palavra da vida»: genitivo duplo regido por {περί} + genitivo. O {λόγος} de Jo 1.1 retorna, agora «da vida».

## Manifestação e anúncio

{καὶ ἡ ζωὴ ἐφανερώθη} — «e a vida manifestou-se»: aoristo passivo (cap. 19), o evento da encarnação em verbo único. Segue a tríade do testemunho apostólico: {ἑωράκαμεν καὶ μαρτυροῦμεν καὶ ἀπαγγέλλομεν} «vimos, testemunhamos e anunciamos» — perfeito (experiência acumulada), presente (testemunho contínuo), presente (anúncio contínuo).

{τὴν ζωὴν τὴν αἰώνιον ἥτις ἦν πρὸς τὸν πατέρα} — «a vida eterna, a qual estava junto ao Pai»: relativo composto {ἥτις} («a qual», enfático) + imperfeito + {πρός} + acusativo («junto a», relação face a face — o mesmo {πρός} de Jo 1.1, {πρὸς τὸν θεόν}).

## Para que tenhais comunhão

{ἵνα καὶ ὑμεῖς κοινωνίαν ἔχητε μεθ᾽ ἡμῶν} — «para que tenhais comunhão conosco»: {ἵνα} + subjuntivo presente (processo contínuo, cap. 8), {κοινωνίαν} «comunhão, partilha» como objeto, {μεθ᾽ ἡμῶν} «conosco». A finalidade do anúncio é comunhão — e a comunhão se desdobra: {μετὰ τοῦ πατρὸς καὶ μετὰ τοῦ υἱοῦ αὐτοῦ} «com o Pai e com o seu Filho».

{καὶ ταῦτα γράφομεν ἡμεῖς ἵνα ἡ χαρὰ ἡμῶν ᾖ πεπληρωμένη} — «e isto vos escrevemos para que a nossa alegria seja completa»: {ᾖ} (subjuntivo de {εἰμί}!) + particípio perfeito {πεπληρωμένη} formando perífrase («seja [tendo sido] completada»). O prólogo fecha com alegria em estado resultante — perfeito até no sentimento.`),
  vocab: [
    V('ἀκηκόαμεν', 'ἀκούω', 'temos ouvido'),
    V('ἑωράκαμεν', 'ὁράω', 'temos visto'),
    V('ἐθεασάμεθα', 'θεάομαι', 'contemplamos'),
    V('ἐψηλάφησαν', 'ψηλαφάω', 'apalparam'),
    V('ἐφανερώθη', 'φανερόω', 'manifestou-se'),
    V('μαρτυροῦμεν', 'μαρτυρέω', 'testemunhamos'),
    V('ἀπαγγέλλομεν', 'ἀπαγγέλλω', 'anunciamos'),
    V('κοινωνία', 'κοινωνία', 'comunhão'),
    V('ἔχητε', 'ἔχω', 'tenhais'),
    V('ᾖ', 'εἰμί', 'seja (subj.)'),
    V('πεπληρωμένη', 'πληρόω', 'completada'),
    V('ὀφθαλμός', 'ὀφθαλμός', 'olho'),
    V('ἀρχή', 'ἀρχή', 'princípio'),
    V('αἰώνιος', 'αἰώνιος', 'eterno'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἀκηκόαμεν» é perfeito (e não presente) porque…'),
    options: [
      T('Tem reduplicação (ἀκ-ηκο-) com sentido de experiência acumulada'),
      T('Termina em -μεν'),
      T('Vem depois de ὅ'),
      T('É verbo contrato'),
    ],
    answer: 0,
    hint: T('Reduplicação + experiência = perfeito — regra §2.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o verbo principal do prólogo: ἀπαγγέλλο___ («anunciamos», 1ª pl.).'),
      answer: 'μεν',
      hint: T('Presente 1ª plural: -μεν.'),
    },
    {
      kind: 'choose',
      prompt: T('«ᾖ πεπληρωμένη» é…'),
      options: [
        T('Perífrase: subjuntivo de εἰμί + particípio perfeito'),
        T('Aoristo passivo simples'),
        T('Imperativo presente'),
        T('Infinitivo com artigo'),
      ],
      answer: 0,
      hint: T('Dois verbos, um sentido de estado desejado — regra §3.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu tempo.'),
      pairs: [
        { a: 'ἦν', b: 'imperfeito' },
        { a: 'ἑωράκαμεν', b: 'perfeito' },
        { a: 'ἐθεασάμεθα', b: 'aoristo' },
        { a: 'ἔχητε', b: 'subjuntivo' },
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
        'Leitura corrida: ache o verbo principal primeiro ({ἀπαγγέλλομεν}, v. 3); todo o resto orbita ele.',
      ),
    },
    {
      n: '2',
      text: T(
        'Perfeitos de percepção ({ἀκηκόαμεν}, {ἑωράκαμεν}) = experiência acumulada que autoriza o testemunho.',
      ),
    },
    {
      n: '3',
      text: T('{ᾖ} + particípio perfeito forma perífrase de estado desejado («seja completada»).'),
    },
    {
      n: '4',
      text: T(
        '{πρός} + acusativo entre pessoas = relação face a face ({πρὸς τὸν πατέρα}, {πρὸς τὸν θεόν}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Atração do relativo:'),
      text: T(
        '{ἥτις} é feminino por atração a {ζωήν} («a vida, a qual…»), embora o antecedente lógico seja neutro. João prefere a concordância de sentido à mecânica — cap. 26, nota da atração.',
      ),
    },
    {
      label: T('ἀπ᾽ ἀρχῆς:'),
      text: T(
        '{ἀπ᾽ ἀρχῆς} «desde o princípio» ecoa {ἐν ἀρχῇ} de Jo 1.1 com preposição diferente: João liga a carta ao evangelho na primeira frase. {ἀπό} + genitivo marca origem no tempo.',
      ),
    },
  ],
  examples: [
    { text: '{ὃ ἦν ἀπ᾽ ἀρχῆς}', gloss: T('o que era desde o princípio') },
    { text: '{ὃ ἀκηκόαμεν}', gloss: T('o que temos ouvido (perfeito)') },
    { text: '{περὶ τοῦ λόγου}', gloss: T('acerca da Palavra (genitivo duplo)') },
    { text: '{ἡ ζωὴ ἐφανερώθη}', gloss: T('a vida manifestou-se (aoristo passivo)') },
    { text: '{μαρτυροῦμεν καὶ ἀπαγγέλλομεν}', gloss: T('testemunhamos e anunciamos (presentes)') },
    { text: '{ἥτις ἦν πρὸς τὸν πατέρα}', gloss: T('a qual estava junto ao Pai') },
    { text: '{κοινωνίαν ἔχητε}', gloss: T('tenhais comunhão (subjuntivo)') },
    { text: '{μεθ᾽ ἡμῶν}', gloss: T('conosco (elisão: μετὰ → μεθ᾽)') },
    { text: '{ᾖ πεπληρωμένη}', gloss: T('seja completada (perífrase)') },
    { text: '{τοῖς ὀφθαλμοῖς ἡμῶν}', gloss: T('com nossos olhos (dativo instrumental)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os tempos do testemunho (1Jo 1.1)'),
      head: [T('Forma'), T('Tempo'), T('Nuance')],
      rows: [
        ['{ἦν}', 'imperfeito', 'era (existência contínua)'],
        ['{ἀκηκόαμεν}', 'perfeito', 'temos ouvido (experiência)'],
        ['{ἑωράκαμεν}', 'perfeito', 'temos visto (experiência)'],
        ['{ἐθεασάμεθα}', 'aoristo', 'contemplamos (ato)'],
        ['{ἐψηλάφησαν}', 'aoristo', 'apalparam (ato)'],
      ],
    },
    {
      caption: T('Tabela 2 — Relativos do prólogo'),
      head: [T('Forma'), T('Análise'), T('Função')],
      rows: [
        ['{ὃ ἦν}', 'neutro sg.', 'o que era'],
        ['{ὃ ἀκηκόαμεν}', 'neutro sg.', 'o que ouvimos'],
        ['{ἥτις ἦν}', 'fem. (atração à ζωή)', 'a qual estava'],
        ['{ἵνα … ἔχητε}', 'subjuntivo', 'para que tenhais'],
      ],
    },
  ],
};

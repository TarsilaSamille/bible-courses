import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Genitivo absoluto e infinitivo'),
  subtitle: T('λαλοῦντος αὐτοῦ — e o infinitivo com artigo'),
  section: T('Sintaxe'),
  body: C(`## Quando o particípio tem dono próprio

O particípio normal concorda com uma palavra da oração (caps. 21–22). Mas quando o dono da ação do particípio NÃO participa da oração principal — sujeito diferente — o grego o isola em genitivo: substantivo + particípio, ambos no genitivo, desligados da sintaxe. É o genitivo absoluto, primo do ablativo absoluto latino.

{λαλοῦντος αὐτοῦ} «enquanto ele falava» (Mt 17.5, na Transfiguração: {ἔτι αὐτοῦ λαλοῦντος} «estando ele ainda a falar»); {ὀψίας γενομένης} «tendo chegado a tarde» (Mc 1.32 — repare: sem substantivo explícito, só o particípio no genitivo feminino: «[hora] tardia tendo-se feito»); {ἀνατείλαντος τοῦ ἡλίου} «tendo nascido o sol» (Mc 16.2, {λίαν πρωῒ} «de manhã bem cedo»).

## Como traduzir

O genitivo absoluto comprime uma oração temporal, causal ou concessiva — o contexto decide: temporal («quando/enquanto», o mais comum), causal («porque»), concessivo («embora»). {ταῦτα αὐτοῦ λαλοῦντος} «dizendo ele estas coisas» (Mt 26.47, {ἔτι αὐτοῦ λαλοῦντος ἰδοὺ} «estando ele ainda a falar, eis que…»: Judas chega DURANTE a fala — temporal simultâneo com particípio presente).

Regra de reconhecimento: genitivo + particípio em genitivo no início da frase, sem ligação com o verbo principal. {γενομένης} sozinho no feminino = «tendo chegado [a hora]»; {ὄντος} masculino = «sendo ele / estando ele».

## O infinitivo com artigo

O infinitivo articulado funciona como substantivo declinável: {τὸ πιστεύειν} «o crer» (nominativo/acusativo), {τοῦ πιστεύειν} «do crer» (genitivo), {τῷ πιστεύειν}? raro — o dativo usa preposição ({ἐν τῷ} + infinitivo = «ao/quando»: {ἐν τῷ σπείρειν} «ao semear», Mt 13.4).

O genitivo {τοῦ} + infinitivo expressa finalidade, concorrendo com {ἵνα}: {ἦλθεν τοῦ βαπτισθῆναι} «veio para ser batizado» (Mt 3.13). E {πρὸς τό} + infinitivo também dá fim: {πρὸς τὸ μνημονευθῆναι} «para serem lembradas» (At 10.4). Três construções de finalidade ({ἵνα} + subj., {τοῦ} + inf., {πρὸς τό} + inf.) — o autor escolhe pelo ritmo da frase.`),
  vocab: [
    V('λαλοῦντος', 'λαλέω', 'de falando'),
    V('λαλοῦντος αὐτοῦ', 'λαλέω', 'enquanto ele falava'),
    V('γενομένης', 'γίνομαι', 'tendo chegado (fem.)'),
    V('ὀψίας', 'ὀψία', 'tardia, da tarde'),
    V('τοῦ λῦσαι', 'λύω', 'para libertar'),
    V('τοῦ πιστεῦσαι', 'πιστεύω', 'para crer'),
    V('βαπτισθῆναι', 'βαπτίζω', 'ser batizado'),
    V('σπείρειν', 'σπείρω', 'semear'),
    V('ἀνατείλαντος', 'ἀνατέλλω', 'de tendo nascido'),
    V('ἥλιος', 'ἥλιος', 'sol'),
    V('πρωῒ', 'πρωῒ', 'cedo, de manhã'),
    V('ἔτι', 'ἔτι', 'ainda'),
    V('ὅτε', 'ὅτε', 'quando'),
    V('μετά', 'μετά', 'depois, com'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ὀψίας γενομένης» (Mc 1.32) é genitivo absoluto porque…'),
    options: [
      T('Particípio em genitivo com sujeito próprio, desligado da oração'),
      T('É objeto direto do verbo'),
      T('Concorda com o sujeito da oração'),
      T('É infinitivo com artigo'),
    ],
    answer: 0,
    hint: T('Dono próprio + genitivo + desligado — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a finalidade: ἦλθεν τοῦ ___ («veio para ser batizado», de βαπτίζω).'),
      answer: 'βαπτισθῆναι',
      hint: T('τοῦ + infinitivo aoristo passivo.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἐν τῷ σπείρειν» (Mt 13.4) significa…'),
      options: [
        T('Ao semear / quando semeava'),
        T('Para nunca semear'),
        T('Depois de ter semeado'),
        T('Sem semear'),
      ],
      answer: 0,
      hint: T('ἐν τῷ + infinitivo = «ao/quando» — regra §3.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada construção ao seu valor.'),
      pairs: [
        { a: 'λαλοῦντος αὐτοῦ', b: 'gen. absoluto' },
        { a: 'τοῦ λῦσαι', b: 'finalidade' },
        { a: 'ἐν τῷ σπείρειν', b: 'temporal' },
        { a: 'λέγων', b: 'circunstancial simples' },
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
        'Genitivo absoluto = sujeito próprio + particípio em genitivo, desligado da oração. Traduza por oração temporal/causal.',
      ),
    },
    {
      n: '2',
      text: T(
        'Particípio presente no absoluto = simultâneo; aoristo = anterior. O tempo relativo vale aqui também.',
      ),
    },
    {
      n: '3',
      text: T(
        '{τοῦ} + infinitivo = finalidade. {ἐν τῷ} + infinitivo = «ao/quando». {πρὸς τό} + infinitivo = finalidade.',
      ),
    },
    {
      n: '4',
      text: T(
        'Particípio solo em genitivo ({γενομένης}, {ὄντος}) = absoluto com sujeito oculto («a hora», «ele»).',
      ),
    },
  ],
  notes: [
    {
      label: T('Acusativo com infinitivo:'),
      text: T(
        'Com preposições como {διά} e {μετά}, o infinitivo leva sujeito próprio em acusativo: {διὰ τὸ αὐτὸν ἀκούειν} «por ele ouvir». É a exceção que confirma a lógica dono-da-ação.',
      ),
    },
    {
      label: T('Versículo inteiro:'),
      text: T(
        'Mc 1.32 combina tudo: {ὀψίας δὲ γενομένης, ὅτε ἔδυ ὁ ἥλιος} «tendo chegado a tarde, quando o sol se pôs» — absoluto + temporal com {ὅτε} na mesma frase. Leia em voz alta.',
      ),
    },
  ],
  examples: [
    { text: '{ἔτι αὐτοῦ λαλοῦντος}', gloss: T('estando ele ainda a falar (Mt 26.47)') },
    { text: '{ὀψίας γενομένης}', gloss: T('tendo chegado a tarde (Mc 1.32)') },
    { text: '{ἀνατείλαντος τοῦ ἡλίου}', gloss: T('tendo nascido o sol (Mc 16.2)') },
    { text: '{ἦλθεν τοῦ βαπτισθῆναι}', gloss: T('veio para ser batizado (Mt 3.13)') },
    { text: '{ἐν τῷ σπείρειν}', gloss: T('ao semear (Mt 13.4)') },
    { text: '{πρὸς τὸ μνημονευθῆναι}', gloss: T('para serem lembradas (At 10.4)') },
    { text: '{ὄντος Σαούλ}', gloss: T('estando Saulo… (absoluto com nome próprio)') },
    { text: '{τοῦ περιπατεῖν}', gloss: T('para andar / do andar (genitivo)') },
    { text: '{διὰ τὸ αὐτὸν ἀκούειν}', gloss: T('por ele ouvir (acusativo com sujeito próprio!)') },
    { text: '{μετὰ τὸ ἐγερθῆναι}', gloss: T('depois de ressuscitar (Mt 26.32)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Genitivos absolutos modelo'),
      head: [T('Construção'), T('Análise'), T('Tradução')],
      rows: [
        ['{λαλοῦντος αὐτοῦ}', 'part. pres. + pron.', 'enquanto ele falava'],
        ['{ὀψίας γενομένης}', 'part. aor. solo', 'tendo chegado a tarde'],
        ['{ἀνατείλαντος ἡλίου}', 'part. aor. + subst.', 'tendo nascido o sol'],
        ['{ἔτι ὄντος}', 'part. pres. de εἰμί', 'estando ele ainda'],
      ],
    },
    {
      caption: T('Tabela 2 — Infinitivo articulado'),
      head: [T('Forma'), T('Caso'), T('Sentido')],
      rows: [
        ['{τὸ πιστεύειν}', 'nom./ac.', 'o crer'],
        ['{τοῦ πιστεύειν}', 'genitivo', 'para crer (fim)'],
        ['{ἐν τῷ σπείρειν}', 'dat. c/ preposição', 'ao semear'],
        ['{πρὸς τὸ μνημονευθῆναι}', 'ac. c/ preposição', 'para ser lembrado'],
      ],
    },
  ],
};

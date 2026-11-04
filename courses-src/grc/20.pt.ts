import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('Líquidos e aoristo passivo'),
  subtitle: T('ἤγγειλα, ἔμεινα — e o -θη- que vira tudo em passivo'),
  section: T('O verbo'),
  body: C(`## Os líquidos: futuro e aoristo sem sigma

Verbos de tema em líquida ({λ, μ, ν, ρ}) recusam o {σ} do futuro e do aoristo: em vez dele, alongam a vogal do tema. {ἀγγέλλω} → futuro {ἀγγελῶ}, aoristo {ἤγγειλα}; {μένω} → {μενῶ}, {ἔμεινα}; {σπείρω} → {σπερῶ}, {ἔσπειρα}; {κρίνω} → {κρινῶ}, {ἔκρινα}; {ἀποστέλλω} → {ἀποστελῶ}, {ἀπέστειλα}.

O alongamento segue receita: {ε} vira {ει} ({στέλλω} → {ἔστειλα}), {α} vira {η} ({φαίνω} → {ἔφηνα}). O futuro, sem σ para sustentá-lo, contrai como no cap. 17 ({μενῶ}). Na leitura, futuro com circunflexo + aoristo com vogal longa e sem σ = verbo líquido.

## O aoristo passivo em -θη-

A voz passiva do aoristo usa o sufixo {-θη-} + terminações ativas secundárias: {ἐλύθην, ἐλύθης, ἐλύθη, ἐλύθημεν, ἐλύθητε, ἐλύθησαν} «fui libertado…». A 3ª sg. {-θη} sem aumento interno? Com aumento: {ἐ-λύ-θη}. Sem sigma, sem kappa — o {θ} é a assinatura.

O aoristo passivo cobre os eventos teológicos centrais: {ἐγεννήθη} «foi gerado» (toda a genealogia de Mt 1: {Ἀβραὰμ ἐγέννησεν}… no passivo, {ἐγεννήθη}), {ἐγράφη} «foi escrito» (Jo 20.31), {ἠγέρθη} «foi ressuscitado» (Mt 28.6), {ἐσώθη} «foi salvo», {ἐβαπτίσθη} «foi batizado» (Mc 1.9).

O agente da passiva vem com {ὑπό} + genitivo: {ἐβαπτίσθη ὑπὸ Ἰωάννου} «foi batizado por João». Sem agente expresso, o grego prefere a passiva onde o português usaria «se»: {ἠγέρθη} = «ressuscitou / foi ressuscitado».

## O aoristo passivo 2º (em -η-)

Alguns verbos fazem o aoristo passivo sem o {θ}, só com {-η-}: {γράφω} → {ἐγράφην} «fui escrito», {στέλλω} → {ἐστάλην} «fui enviado», {χαίρω} → {ἐχάρην} «alegrei-me», {σπείρω} → {ἐσπάρην} «fui semeado». As terminações são as mesmas do -θη-.

Na prática, decore as formas conforme aparecem: {ἐγράφη} (Jo 20.31), {ἀπεστάλην} «fui enviado» (Jo 5.36), {ἐφάνη} «apareceu» (de {φαίνω}, Mc 16.12). São poucas e cobrem quase todas as ocorrências.`),
  vocab: [
    V('ἐλύθην', 'λύω', 'fui libertado'),
    V('ἐλύθη', 'λύω', 'foi libertado'),
    V('ἐλύθησαν', 'λύω', 'foram libertados'),
    V('ἤγγειλα', 'ἀγγέλλω', 'anunciei'),
    V('ἔμεινα', 'μένω', 'permaneci'),
    V('ἔσπειρα', 'σπείρω', 'semeei'),
    V('ἔκρινα', 'κρίνω', 'julguei'),
    V('ἐγεννήθη', 'γεννάω', 'foi gerado, nasceu'),
    V('ἐγράφη', 'γράφω', 'foi escrito'),
    V('ἠγέρθη', 'ἐγείρω', 'ressuscitou'),
    V('ἐσώθη', 'σῴζω', 'foi salvo'),
    V('ἐβαπτίσθη', 'βαπτίζω', 'foi batizado'),
    V('ἀπεκρίθη', 'ἀποκρίνομαι', 'respondeu'),
    V('ἐφάνη', 'φαίνω', 'apareceu'),
    V('ὑπό', 'ὑπό', 'por (agente)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἐλύθησαν» é…'),
    options: [
      T('Aoristo passivo, 3ª pl.'),
      T('Aoristo ativo, 3ª pl.'),
      T('Imperfeito médio'),
      T('Perfeito ativo'),
    ],
    answer: 0,
    hint: T('θ + terminações ativas = passivo — regra §2.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 3ª pessoa do singular: ἐλύ___ («foi libertado»).'),
      answer: 'θη',
      hint: T('Sufixo do aoristo passivo: -θη-.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἤγγειλα» não tem σ porque…'),
      options: [
        T('É verbo líquido: alonga em vez de sigmatizar'),
        T('É aoristo 2º'),
        T('É presente histórico'),
        T('Perdeu o σ por erro'),
      ],
      answer: 0,
      hint: T('Tema em λ: líquidos alongam — regra §1.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua voz/tempo.'),
      pairs: [
        { a: 'ἔλυσα', b: 'aoristo ativo' },
        { a: 'ἐλύθην', b: 'aoristo passivo' },
        { a: 'ἐγράφη', b: 'passivo 2º' },
        { a: 'ἤγγειλα', b: 'aoristo líquido' },
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
        'Líquidos (λ, μ, ν, ρ): sem σ; alongam a vogal (ε→ει, α→η); futuro contraído com circunflexo.',
      ),
    },
    {
      n: '2',
      text: T('Aoristo passivo = tema + θη + terminações ativas secundárias. O θ denuncia a voz.'),
    },
    {
      n: '3',
      text: T(
        'Agente da passiva: ὑπό + genitivo ({ὑπὸ Ἰωάννου}). Sem agente, traduza pelo contexto (muitas vezes reflexo em português).',
      ),
    },
    {
      n: '4',
      text: T(
        'Aoristo passivo 2º: só -η-, sem θ ({ἐγράφην}, {ἐστάλην}). Poucas formas, decore em bloco.',
      ),
    },
    {
      n: '5',
      text: T(
        '{ἠγέρθη} cobre «ressuscitou» e «foi ressuscitado»: a ambiguidade é teológica, não gramatical — guarde as duas.',
      ),
    },
  ],
  notes: [
    {
      label: T('Deponência:'),
      text: T(
        'Verbos depoentes usam formas passivas com sentido ativo: {ἀπεκρίθη} «respondeu», {ἐφοβήθη} «temeu», {ἠρνήσατο} «negou». O aoristo passivo é a porta de entrada da deponência — cap. 20 aprofunda.',
      ),
    },
    {
      label: T('θ vs σ:'),
      text: T(
        '{ἐλύθην} (passivo, com θ) × {ἔλυσα} (ativo, com σ): as duas consoantes dividem as vozes do aoristo. Diante de forma com θ + terminações ativas, leia passivo sem hesitar.',
      ),
    },
  ],
  examples: [
    { text: '{ἠγέρθη ἀπὸ τῶν νεκρῶν}', gloss: T('ressuscitou dentre os mortos (Mt 28.6)') },
    { text: '{ἐγεννήθη ἐν Βηθλεέμ}', gloss: T('nasceu em Belém (Mt 2.1)') },
    { text: '{ἐγράφη εἰς μαρτυρίαν}', gloss: T('foi escrito para testemunho (Jo 20.31)') },
    { text: '{ἐβαπτίσθη ὑπὸ Ἰωάννου}', gloss: T('foi batizado por João (Mc 1.9; agente com ὑπό)') },
    { text: '{ἐσώθη ἀπὸ τῶν ἐχθρῶν}', gloss: T('foi salvo dos inimigos') },
    { text: '{ἤγγειλαν αὐτοῖς}', gloss: T('anunciaram-lhes (aoristo líquido)') },
    { text: '{ἔμεινεν μετ᾽ αὐτῶν}', gloss: T('permaneceu com eles (Jo 1.39)') },
    { text: '{ἀπεστάλην}', gloss: T('fui enviado (passivo 2º; Jo 5.36)') },
    { text: '{ἐφάνη αὐτοῖς}', gloss: T('apareceu-lhes (Mc 16.12)') },
    { text: '{ἐσπάρη εἰς τὰς ἀκάνθας}', gloss: T('foi semeado entre espinhos (Mt 13.7)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Aoristo passivo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{ἐλύθην}', 'fui libertado'],
        ['2ª sg.', '{ἐλύθης}', 'foste libertado'],
        ['3ª sg.', '{ἐλύθη}', 'foi libertado'],
        ['1ª pl.', '{ἐλύθημεν}', 'fomos libertados'],
        ['2ª pl.', '{ἐλύθητε}', 'fostes libertados'],
        ['3ª pl.', '{ἐλύθησαν}', 'foram libertados'],
      ],
    },
    {
      caption: T('Tabela 2 — Líquidos: alongamento no futuro e no aoristo'),
      head: [T('Presente'), T('Futuro'), T('Aoristo')],
      rows: [
        ['{ἀγγέλλω}', '{ἀγγελῶ}', '{ἤγγειλα}'],
        ['{μένω}', '{μενῶ}', '{ἔμεινα}'],
        ['{σπείρω}', '{σπερῶ}', '{ἔσπειρα}'],
        ['{κρίνω}', '{κρινῶ}', '{ἔκρινα}'],
        ['{ἀποστέλλω}', '{ἀποστελῶ}', '{ἀπέστειλα}'],
      ],
    },
    {
      caption: T('Tabela 3 — Aoristo passivo 2º (sem θ)'),
      head: [T('Verbo'), T('Forma'), T('Sentido')],
      rows: [
        ['{γράφω}', '{ἐγράφην}', 'fui escrito'],
        ['{στέλλω}', '{ἐστάλην}', 'fui enviado'],
        ['{φαίνω}', '{ἐφάνη}', 'apareci'],
        ['{σπείρω}', '{ἐσπάρην}', 'fui semeado'],
        ['{χαίρω}', '{ἐχάρην}', 'alegrei-me'],
      ],
    },
  ],
};

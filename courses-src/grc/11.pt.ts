import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Infinitivo e Particípio'),
  subtitle: T('λύειν e λύων: o verbo que vira nome'),
  section: T('O verbo'),
  body: C(`## Panorama das formas nominais

Infinitivo e particípio são as formas nominais do verbo: têm o sentido verbal (tempo e voz), mas funcionam como nome. O infinitivo funciona como substantivo ({λύειν} «libertar», como em «quero libertar»); o particípio funciona como adjetivo ({λύων} «o que liberta», como em «o homem que liberta»). Este capítulo dá o panorama; os particípios ganham dois capítulos próprios (21–22), de tanta importância que têm.

## O infinitivo e seus usos

A morfologia é simples: presente ativo {λύειν}, presente médio {λύεσθαι}, aoristo ativo {λῦσαι}, aoristo passivo {λυθῆναι}, perfeito {λελυκέναι}. Sem pessoa, sem número — só tempo (aspecto) e voz.

Os usos: complemento de verbos como {θέλω} «querer», {δύναμαι} «poder», {μέλλω} «estar para» ({θέλω λύειν} «quero libertar»); infinitivo com artigo como substantivo pleno ({τὸ πιστεύειν} «o crer», {τὸ ζῆν} «o viver»); resultado com {ὥστε} + infinitivo ({ὥστε πιστεῦσαι} «de modo que cressem»); e discurso indireto ({ἔφη λῦσαι} «disse ter libertado» — cap. 25).

## O particípio: o camaleão

O particípio declina como adjetivo (gênero, número, caso) e significa como verbo (tempo, voz). As formas de {λύω}: presente ativo {λύων, λύουσα, λῦον}; aoristo ativo {λύσας, λύσασα, λύσαν}; perfeito {λελυκώς, λελυκυῖα, λελυκός}; médio {λυόμενος, λυσάμενος}; passivo {λυθείς, λυθεῖσα, λυθέν}.

Três empregos: adjetival («o homem {ὁ λύων}»), substantivado ({οἱ πιστεύοντες} «os que creem», {ὁ κλέπτων} «o ladrão») e adverbial — o mais frequente e o mais rico. O particípio adverbial (circunstancial) dispensa conjunção e comprime orações inteiras: {ἀκούσας} «tendo ouvido / quando ouviu / porque ouviu». Tempo relativo: aoristo = anterior à ação principal; presente = simultâneo.

## Como ler um particípio adverbial

Diante de {λέγων}, {ἀκούσας}, {ἐλθών}, pergunte: quem pratica a ação do particípio? Se for o sujeito da oração principal, é circunstancial simples — traduza pelo contexto: temporal («quando…»), causal («porque…»), concessivo («embora…»), condicional («se…»), modal («…-ndo»), final («para…») ou de circunstância concomitante. {ἀποκριθεὶς εἶπεν} «respondendo, disse» é tão comum que virou fórmula narrativa.

Se o sujeito do particípio for diferente do da oração principal, ele vem em genitivo absoluto — construção do cap. 23. Por enquanto, fixe a regra de ouro: particípio concorda com o substantivo a que se refere, e o caso dele aponta o dono da ação.`),
  vocab: [
    V('λύειν', 'λύω', 'libertar (inf.)'),
    V('λύεσθαι', 'λύω', 'libertar-se (inf.)'),
    V('λῦσαι', 'λύω', 'ter libertado (inf. aor.)'),
    V('λυθῆναι', 'λύω', 'ter sido libertado'),
    V('λελυκέναι', 'λύω', 'haver libertado (perf.)'),
    V('λύων', 'λύω', 'o que liberta'),
    V('λύσας', 'λύω', 'tendo libertado'),
    V('λυθείς', 'λύω', 'tendo sido libertado'),
    V('πιστεύων', 'πιστεύω', 'o que crê'),
    V('λέγων', 'λέγω', 'dizendo'),
    V('ἀκούσας', 'ἀκούω', 'tendo ouvido'),
    V('ἐλθών', 'ἔρχομαι', 'tendo vindo'),
    V('θέλω', 'θέλω', 'querer'),
    V('δύναμαι', 'δύναμαι', 'poder'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em «ὁ πιστεύων» (Jo 3.16), o particípio é…'),
    options: [
      T('Substantivado: «o que crê»'),
      T('Circunstancial temporal'),
      T('Genitivo absoluto'),
      T('Complemento de θέλω'),
    ],
    answer: 0,
    hint: T('Artigo + particípio sem substantivo = substantivo — regra §5.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o infinitivo aoristo ativo: λῦ___ («ter libertado»).'),
      answer: 'σαι',
      hint: T('Aoristo 1º: tema + σα + ι.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἀκούσας ἐθαύμασεν» (Mt 8.10): o particípio aoristo indica ação…'),
      options: [
        T('Anterior à principal («tendo ouvido»)'),
        T('Simultânea («ouvindo»)'),
        T('Posterior («para ouvir»)'),
        T('Habitual («costumava ouvir»)'),
      ],
      answer: 0,
      hint: T('Tempo relativo: aoristo = anterior — regra §3.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua classe.'),
      pairs: [
        { a: 'λύειν', b: 'infinitivo' },
        { a: 'λύων', b: 'particípio' },
        { a: 'λύεις', b: 'indicativo' },
        { a: 'λῦε', b: 'imperativo' },
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
        'Infinitivo = verbo-substantivo (sem pessoa/número). Particípio = verbo-adjetivo (com gênero/número/caso).',
      ),
    },
    {
      n: '2',
      text: T(
        'Infinitivo com artigo é substantivo pleno: {τὸ θέλειν} «o querer», {τοῦ πιστεύειν} «do crer».',
      ),
    },
    {
      n: '3',
      text: T(
        'Tempo relativo do particípio: aoristo = anterior à ação principal; presente = simultâneo; perfeito = estado resultante.',
      ),
    },
    {
      n: '4',
      text: T(
        'O particípio concorda com o dono da ação. Se o dono não é o sujeito da oração, vem o genitivo absoluto (cap. 23).',
      ),
    },
    {
      n: '5',
      text: T(
        'Particípio substantivado com artigo = «o que… / os que…»: {ὁ πιστεύων} «o que crê» (Jo 3.16).',
      ),
    },
  ],
  notes: [
    {
      label: T('Antecipação:'),
      text: T(
        'Os caps. 21–22 destrincham cada particípio com paradigmas completos e os oito usos circunstanciais. Aqui basta reconhecer as formas e a lógica dono-da-ação.',
      ),
    },
    {
      label: T('No texto:'),
      text: T(
        '{λέγων} ocorre mais de 300 vezes no Novo Testamento — é a palavra de transição narrativa por excelência. Nunca traduza mecanicamente por «dizendo»: o contexto pede «quando disse», «porque dizia», «ao dizer».',
      ),
    },
  ],
  examples: [
    { text: '{θέλω λύειν}', gloss: T('quero libertar (complemento)') },
    { text: '{τὸ πιστεύειν}', gloss: T('o crer (infinitivo substantivado)') },
    { text: '{ὥστε πιστεῦσαι}', gloss: T('de modo que cressem (resultado)') },
    { text: '{ὁ πιστεύων}', gloss: T('o que crê (Jo 3.16)') },
    { text: '{οἱ πιστεύοντες}', gloss: T('os que creem (plural substantivado)') },
    { text: '{λέγων αὐτοῖς}', gloss: T('dizendo-lhes (circunstancial modal)') },
    { text: '{ἀκούσας ἐθαύμασεν}', gloss: T('tendo ouvido, admirou-se (anterior; Mt 8.10)') },
    { text: '{ἀποκριθεὶς εἶπεν}', gloss: T('respondendo, disse (fórmula narrativa)') },
    { text: '{ἐλθὼν προσκύνησεν}', gloss: T('vindo, prostrou-se (Mt 8.2)') },
    { text: '{ὁ κλέπτων}', gloss: T('o ladrão, lit. «o que furta» (Ef 4.28)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Infinitivos de λύω'),
      head: [T('Tempo/Voz'), T('Forma'), T('Sentido')],
      rows: [
        ['Presente ativo', '{λύειν}', 'libertar'],
        ['Presente médio', '{λύεσθαι}', 'libertar-se'],
        ['Aoristo ativo', '{λῦσαι}', 'ter libertado'],
        ['Aoristo médio', 'λύσασθαι', 'ter-se libertado'],
        ['Aoristo passivo', '{λυθῆναι}', 'ter sido libertado'],
        ['Perfeito ativo', '{λελυκέναι}', 'haver libertado'],
      ],
    },
    {
      caption: T('Tabela 2 — Particípios de λύω (nominativo)'),
      head: [T('Tempo'), T('Ativo'), T('Médio'), T('Passivo')],
      rows: [
        ['Presente', '{λύων, λύουσα, λῦον}', 'λυόμενος, -η, -ον', '—'],
        ['Aoristo', '{λύσας, λύσασα, λύσαν}', 'λυσάμενος, -η, -ον', '{λυθείς, λυθεῖσα, λυθέν}'],
        ['Perfeito', '{λελυκώς, λελυκυῖα, λελυκός}', 'λελυμένος, -η, -ον', '—'],
      ],
    },
  ],
};

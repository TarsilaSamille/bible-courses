import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Verbos irregulares'),
  subtitle: T('εἰμί, οἶδα, φημί: os três que você verá todo dia'),
  section: T('O verbo'),
  body: C(`## Por que os mais usados são os mais estranhos

Nas línguas, os verbos mais frequentes são os mais irregulares — de tanto uso, eles resistem às regularizações («ser», «estar», «ir» em português; to be em inglês). No grego não é diferente: {εἰμί} «ser/estar», {οἶδα} «saber» e {φημί} «dizer» fogem aos paradigmas, e justamente por isso aparecem em quase cada página do Novo Testamento. Decorar os três é o investimento com maior retorno do curso.

## εἰμί: ser e estar

{εἰμί} é atemático: liga o tema diretamente às desinências, sem vogal temática. Presente: {εἰμί, εἶ, ἐστί(ν), ἐσμέν, ἐστέ, εἰσί(ν)}. O enclítico? Não — mas repare que {ἐστί} perde o acento em certas posições (vira enclítica), detalhe de pronúncia que os manuscritos registram com inconsistência.

O imperfeito usa aumento temporal sobre o tema {ἐσ-}: {ἤμην, ἦς, ἦν, ἦμεν, ἦτε, ἦσαν}. {ἦν} («era/estava») abre o prólogo de João ({ἐν ἀρχῇ ἦν ὁ λόγος}) e inúmeras narrativas. O futuro é {ἔσομαι} — forma média com sentido ativo, prenúncio da voz média do cap. 17.

Faltam ainda, para consulta: imperativo {ἔστω} «seja!» (3ª sg.; Mt 5.37), infinitivo {εἶναι}, particípio {ὤν, οὖσα, ὄν} («sendo» — importantíssimo na leitura, cap. 21).

## οἶδα: o perfeito com sentido de presente

{οἶδα} «sei» é, na forma, um perfeito (reduplicação apagada — raiz {ἰδ-} com alongamento {οι}): mas significa presente, porque «ter visto» equivale a «saber». Paradigma: {οἶδα, οἶδας, οἶδε(ν), οἴδαμεν, οἴδατε, οἴδασι(ν)}. O mais-que-perfeito {ᾔδη} «sabia» e o futuro {εἰδήσω} «saberei» completam o quadro.

A lógica «perfeito = estado presente resultante» volta no cap. 15 com todos os verbos. {οἶδα} é o caso-limite: tão lexicalizado como presente que ganhou futuro próprio ({εἰδήσω}). Guarde a fórmula: ver (aoristo {εἶδον}) → ter visto = saber ({οἶδα}).

## φημί: dizer em discurso direto

{φημί} «digo, afirmo» é atemático no presente: {φημί, φῄς, φησί(ν), φαμέν, φατέ, φασί(ν)}. O imperfeito {ἔφην} «dizia» introduz falas em narrativa solene. No Novo Testamento ele é menos frequente que {λέγω}, mas aparece em fórmulas de citação e em Atos.

Na prática, {φημί} importa menos pela frequência e mais pelo padrão: ele ensina a reconhecer verbos atemáticos — tema colado na desinência, sem vogal temática — preparando o terreno para os verbos em {-μι} do cap. 12.`),
  vocab: [
    V('εἰμί', 'εἰμί', 'sou'),
    V('εἶ', 'εἰμί', 'és'),
    V('ἐστίν', 'εἰμί', 'é'),
    V('ἐσμέν', 'εἰμί', 'somos'),
    V('εἰσίν', 'εἰμί', 'são'),
    V('ἤμην', 'εἰμί', 'eu era'),
    V('ἦν', 'εἰμί', 'era'),
    V('ἦσαν', 'εἰμί', 'eram'),
    V('ἔσομαι', 'εἰμί', 'serei'),
    V('εἶναι', 'εἰμί', 'ser (inf.)'),
    V('ὤν', 'εἰμί', 'sendo (part.)'),
    V('οἶδα', 'οἶδα', 'sei'),
    V('οἶδε', 'οἶδα', 'sabe'),
    V('ᾔδη', 'οἶδα', 'sabia'),
    V('φημί', 'φημί', 'digo'),
    V('φησίν', 'φημί', 'diz'),
    V('ἔφη', 'φημί', 'disse'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἦν» (Jo 1.1) é que forma de «εἰμί»?'),
    options: [
      T('3ª sg. do imperfeito'),
      T('3ª sg. do presente'),
      T('1ª sg. do futuro'),
      T('Infinitivo'),
    ],
    answer: 0,
    hint: T('Aumento temporal (ἐ→ἠ) + tema ἐσ- contraído.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 3ª pessoa do plural do presente: εἰ___ («eles são»).'),
      answer: 'σίν',
      hint: T('Tabela 1: a forma cheia é εἰσίν.'),
    },
    {
      kind: 'choose',
      prompt: T('«οἶδα» significa presente («sei») embora seja perfeito na forma, porque…'),
      options: [
        T('«Ter visto» equivale a «saber» (estado resultante)'),
        T('É erro dos copistas'),
        T('O perfeito grego é sempre presente'),
        T('Falta o aumento'),
      ],
      answer: 0,
      hint: T('Lógica do perfeito: estado presente resultante — regra §2.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu verbo.'),
      pairs: [
        { a: 'ἦσαν', b: 'εἰμί (impf.)' },
        { a: 'ᾔδη', b: 'οἶδα (mqp.)' },
        { a: 'φησίν', b: 'φημί (pres.)' },
        { a: 'ἔσομαι', b: 'εἰμί (fut.)' },
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
        'Verbos atemáticos ({εἰμί}, {φημί}) dispensam a vogal temática: tema + desinência diretamente.',
      ),
    },
    {
      n: '2',
      text: T(
        '{οἶδα} é perfeito na forma e presente no sentido («ter visto» = «saber»). O mais-que-perfeito {ᾔδειν/ᾔδη} significa passado.',
      ),
    },
    {
      n: '3',
      text: T(
        'O futuro de {εἰμί} é {ἔσομαι} (forma média, sentido ativo). Guarde-o: reaparece em promessas e profecias.',
      ),
    },
    {
      n: '4',
      text: T(
        'Particípio de {εἰμί} — {ὤν, οὖσα, ὄν} «sendo» — é palavra de leitura diária e volta no cap. 21.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com predicado nominal, o grego dispensa {ἐστί} no presente: {μακάριοι οἱ πτωχοί} «bem-aventurados [são] os pobres».',
      ),
    },
  ],
  notes: [
    {
      label: T('Pronúncia:'),
      text: T(
        '{ἐστί} no fim da frase mantém o acento ({θεός ἐστιν}); no meio, costuma perdê-lo ({ὁ θεός μου ἐστὶν σύ}? na prática os editores variam). Não deixe a acentuação decidir a análise: a forma é a mesma.',
      ),
    },
    {
      label: T('Economia:'),
      text: T(
        '{εἰμί} sozinho responde por cerca de 7% de todas as palavras do Novo Testamento. Cada forma deste capítulo que você fixar será lida centenas de vezes.',
      ),
    },
  ],
  examples: [
    { text: '{ἐν ἀρχῇ ἦν ὁ λόγος}', gloss: T('no princípio era a Palavra (Jo 1.1)') },
    { text: '{ἐγώ εἰμι ἡ ζωή}', gloss: T('eu sou a vida (Jo 14.6; ênfase no ἐγώ)') },
    { text: '{ἔσονται δύο}', gloss: T('serão dois (futuro; Mt 19.5)') },
    { text: '{οἴδατε τὴν ὥραν}', gloss: T('sabeis a hora (2ª pl.; Mt 24.42)') },
    { text: '{ᾔδει τί ἔμελλεν}', gloss: T('sabia o que ia acontecer (mais-que-perfeito; Jo 6.6)') },
    { text: '{φησὶν αὐτοῖς}', gloss: T('diz-lhes (presente histórico de φημί)') },
    { text: '{ἔφη αὐτῷ}', gloss: T('disse-lhe (imperfeito; Mc 1.41)') },
    { text: '{ἔστω ναὶ ναί}', gloss: T('seja sim, sim (imperativo 3ª sg.; Mt 5.37)') },
    { text: '{ὢν υἱός}', gloss: T('sendo Filho (particípio; Hb 5.8)') },
    { text: '{εἰσὶν οἱ λέγοντες}', gloss: T('são os que dizem (perífrase com particípio)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente de εἰμί'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{εἰμί}', 'eu sou'],
        ['2ª sg.', '{εἶ}', 'tu és'],
        ['3ª sg.', '{ἐστί(ν)}', 'ele é'],
        ['1ª pl.', '{ἐσμέν}', 'nós somos'],
        ['2ª pl.', '{ἐστέ}', 'vós sois'],
        ['3ª pl.', '{εἰσί(ν)}', 'eles são'],
      ],
    },
    {
      caption: T('Tabela 2 — Imperfeito de εἰμί'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{ἤμην}', 'eu era'],
        ['2ª sg.', '{ἦς}', 'tu eras'],
        ['3ª sg.', '{ἦν}', 'ele era'],
        ['1ª pl.', 'ἦμεν', 'nós éramos'],
        ['2ª pl.', 'ἦτε', 'vós éreis'],
        ['3ª pl.', 'ἦσαν', 'eles eram'],
      ],
    },
    {
      caption: T('Tabela 3 — οἶδα e φημί (presente)'),
      head: [
        T('Pessoa'),
        { 0: 'ο', 1: 'ἶ', 2: 'δ', 3: 'α', 4: ' ', 5: '«', 6: 's', 7: 'e', 8: 'i', 9: '»' },
        { 0: 'φ', 1: 'η', 2: 'μ', 3: 'ί', 4: ' ', 5: '«', 6: 'd', 7: 'i', 8: 'g', 9: 'o', 10: '»' },
      ],
      rows: [
        ['1ª sg.', '{οἶδα}', '{φημί}'],
        ['2ª sg.', '{οἶδας}', '{φῄς}'],
        ['3ª sg.', '{οἶδε(ν)}', '{φησί(ν)}'],
        ['1ª pl.', '{οἴδαμεν}', 'φαμέν'],
        ['2ª pl.', '{οἴδατε}', 'φατέ'],
        ['3ª pl.', '{οἴδασι(ν)}', 'φασί(ν)'],
      ],
    },
  ],
};

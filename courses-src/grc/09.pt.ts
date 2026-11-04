import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Subjuntivo e Optativo'),
  subtitle: T('ἵνα λύῃ: o modo do projeto e do desejo'),
  section: T('O verbo'),
  body: C(`## O indicativo não basta

O indicativo declara fatos ({λύει} «ele liberta»). Mas a vida — e o Novo Testamento — falam também de projetos, ordens, temores e desejos: «para que liberte», «não toques», «queira Deus». Para isso o grego tem dois modos oblíquos: o subjuntivo (possibilidade, finalidade, exortação) e o optativo (desejo, potencialidade remota). Ambos usam o tema verbal sem aumento — o aumento, lembra o cap. 7, é privilégio do indicativo.

## O subjuntivo: vogais longas

O subjuntivo do presente se forma alongando a vogal temática: {ο} vira {ω} e {ε} vira {η}. Paradigma ativo: {λύω, λύῃς, λύῃ, λύωμεν, λύητε, λύωσι(ν)}. Repare que a 1ª sg. ({λύω}) é idêntica à do indicativo — a ambiguidade se desfaz pelo contexto (conjunção {ἵνα}, {ὅπως}, {ἐάν}, {μή}).

O subjuntivo aoristo usa o tema do aoristo com as mesmas vogais longas: {λύσω, λύσῃς, λύσῃ, λύσωμεν, λύσητε, λύσωσι(ν)}. A diferença entre presente e aoristo no subjuntivo é só de aspecto (processo × ato), nunca de tempo: {ἵνα λύῃ} «para que vá libertando» × {ἵνα λύσῃ} «para que liberte (de uma vez)».

## Onde o subjuntivo aparece

Quatro construções cobrem quase tudo: finalidade com {ἵνα} ou {ὅπως} ({ἵνα σωθῇ} «para que seja salvo»); condição futura com {ἐάν} + subjuntivo ({ἐὰν εἴπῃς} «se disseres»); proibição com {μή} + aoristo subjuntivo ({μὴ φοβηθῇς} «não temas»); exortação na 1ª pessoa do plural ({ἄγωμεν} «vamos!», {διέλθωμεν} «passemos para a outra margem», Mc 4.35). Some-se a isso o deliberativo («que faremos?» — {τί ποιήσωμεν}, At 2.37).

## O optativo: o modo do desejo

O optativo é raro no Novo Testamento — cerca de 70 ocorrências — mas inconfundível: leva o ditongo {οι} nas terminações ({λύοιμι, λύοις, λύοι, λύοιμεν, λύοιτε, λύοιεν}). Ele exprime desejo ({γένοιτο} «que assim seja!», a fórmula paulina de horror: {μὴ γένοιτο} «de jeito nenhum!», Rm 6.2) e possibilidade remota em condições («se alguém viesse…»).

Na leitura, basta reconhecer: {εἴη} (optativo de {εἰμί}), {γένοιτο}, {δῴη} («queira dar», 2Tm 1.16), {ποιήσειεν}. São sempre momentos de solenidade ou emoção — o autor trocou o indicativo pelo modo do desejo de propósito.`),
  vocab: [
    V('ἵνα', 'ἵνα', 'para que'),
    V('ὅπως', 'ὅπως', 'para que, como'),
    V('ἐάν', 'ἐάν', 'se (condição)'),
    V('μή', 'μή', 'não (proibição)'),
    V('λύῃς', 'λύω', 'que tu libertes'),
    V('λύῃ', 'λύω', 'que ele liberte'),
    V('λύσω', 'λύω', 'que eu liberte (aor.)'),
    V('λύσῃ', 'λύω', 'que ele liberte (aor.)'),
    V('λύοιμι', 'λύω', 'pudesse eu libertar'),
    V('γένοιτο', 'γίνομαι', 'que assim seja!'),
    V('εἴη', 'εἰμί', 'seja (opt.)'),
    V('σωθῇ', 'σῴζω', 'seja salvo'),
    V('φοβηθῇς', 'φοβέομαι', 'temas (subj.)'),
    V('ἄγωμεν', 'ἄγω', 'vamos! (exort.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἵνα λύσῃ» está em que modo e tempo?'),
    options: [
      T('Indicativo presente'),
      T('Subjuntivo aoristo'),
      T('Optativo presente'),
      T('Imperativo aoristo'),
    ],
    answer: 1,
    hint: T('{ἵνα} + vogal longa + sigma de aoristo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete a 2ª pessoa do singular do subjuntivo presente: λύ___ («que tu libertes»).',
      ),
      answer: 'ῃς',
      hint: T('Vogal temática alongada ε→η + ς.'),
    },
    {
      kind: 'choose',
      prompt: T('«μὴ γένοιτο» (Rm 6.2) exprime…'),
      options: [
        T('Ordem direta'),
        T('Desejo de horror («que isso nunca aconteça»)'),
        T('Condição futura'),
        T('Narração passada'),
      ],
      answer: 1,
      hint: T('Optativo + μή: o modo do desejo — regra §5.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu modo.'),
      pairs: [
        { a: 'λύῃ', b: 'subjuntivo' },
        { a: 'λύοι', b: 'optativo' },
        { a: 'λύει', b: 'indicativo' },
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
        'Subjuntivo = vogais longas (ω/η) sem aumento. Diante de η/ω + conjunção de projeto ({ἵνα}, {ἐάν}, {μή}), leia subjuntivo.',
      ),
    },
    {
      n: '2',
      text: T(
        'No subjuntivo, presente × aoristo = aspecto (processo × ato), nunca tempo cronológico.',
      ),
    },
    {
      n: '3',
      text: T(
        'Proibição: {μή} + subjuntivo aoristo ({μὴ φοβηθῇς}). É a negação padrão de ordens no NT.',
      ),
    },
    { n: '4', text: T('Exortação: 1ª pl. do subjuntivo sem partícula ({ἄγωμεν} «vamos!»).') },
    {
      n: '5',
      text: T(
        'Optativo = ditongo οι nas terminações. No NT, quase só desejos ({γένοιτο}, {εἴη}) e potenciais remotos.',
      ),
    },
  ],
  notes: [
    {
      label: T('Armadilha:'),
      text: T(
        '{λύω} (1ª sg.) pode ser indicativo («liberto») ou subjuntivo («que eu liberte»). Sem {ἵνα}, {ἐάν} ou {μή} por perto, assuma indicativo; com elas, subjuntivo.',
      ),
    },
    {
      label: T('Economia:'),
      text: T(
        'Não decore o optativo inteiro: decore {γένοιτο}, {εἴη} e o ditongo οι. Com isso você resolve 90% das ocorrências do Novo Testamento.',
      ),
    },
  ],
  examples: [
    { text: '{ἵνα σωθῇ}', gloss: T('para que seja salvo (finalidade; Mt 18.11)') },
    { text: '{ἐὰν εἴπῃς}', gloss: T('se disseres (condição futura)') },
    { text: '{μὴ φοβηθῇς}', gloss: T('não temas (proibição; Mt 1.20)') },
    { text: '{διέλθωμεν}', gloss: T('passemos para a outra margem! (exortação; Mc 4.35)') },
    { text: '{τί ποιήσωμεν}', gloss: T('que faremos? (deliberativo; At 2.37)') },
    { text: '{μὴ γένοιτο}', gloss: T('de jeito nenhum! (optativo de horror; Rm 6.2)') },
    { text: '{εἴη τὸ ὄνομά σου}', gloss: T('seja o teu nome… (desejo; cf. Mt 6.9)') },
    { text: '{δῴη ἔλεος}', gloss: T('conceda ele misericórdia (2Tm 1.16)') },
    { text: '{ἵνα λύσῃ}', gloss: T('para que liberte de uma vez (aoristo: ato)') },
    { text: '{ἵνα μένῃ}', gloss: T('para que permaneça (presente: processo; Jo 15.16)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Subjuntivo presente ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Pista')],
      rows: [
        ['1ª sg.', '{λύω}', '= indicativo; contexto decide'],
        ['2ª sg.', '{λύῃς}', 'η longo'],
        ['3ª sg.', '{λύῃ}', 'η longo'],
        ['1ª pl.', '{λύωμεν}', 'ω longo'],
        ['2ª pl.', '{λύητε}', 'η longo'],
        ['3ª pl.', '{λύωσι(ν)}', 'ω longo'],
      ],
    },
    {
      caption: T('Tabela 2 — Subjuntivo aoristo ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Sentido')],
      rows: [
        ['1ª sg.', '{λύσω}', 'que eu liberte'],
        ['2ª sg.', '{λύσῃς}', 'que tu libertes'],
        ['3ª sg.', '{λύσῃ}', 'que ele liberte'],
        ['1ª pl.', '{λύσωμεν}', 'libertemos!'],
        ['2ª pl.', '{λύσητε}', 'que vós liberteis'],
        ['3ª pl.', '{λύσωσι(ν)}', 'que eles libertem'],
      ],
    },
    {
      caption: T('Tabela 3 — Optativo presente ativo de λύω'),
      head: [T('Pessoa'), T('Forma'), T('Sentido')],
      rows: [
        ['1ª sg.', '{λύοιμι}', 'pudesse eu libertar'],
        ['2ª sg.', '{λύοις}', 'pudesses libertar'],
        ['3ª sg.', '{λύοι}', 'pudesse ele libertar'],
        ['1ª pl.', '{λύοιμεν}', 'pudéssemos libertar'],
        ['2ª pl.', '{λύοιτε}', 'pudésseis libertar'],
        ['3ª pl.', '{λύοιεν}', 'pudessem libertar'],
      ],
    },
  ],
};

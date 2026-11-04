import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('3ª declinação'),
  subtitle: T('σάρξ, πνεῦμα, πατήρ: o genitivo entrega o tema'),
  section: T('O substantivo'),
  body: C(`## A regra de ouro

A 3ª declinação reúne todos os temas em consoante — e com ela chegam algumas das palavras mais importantes do Novo Testamento: {σάρξ} «carne», {πνεῦμα} «espírito», {πατήρ} «pai», {μήτηρ} «mãe», {ἀνήρ} «homem, marido», {γυνή} «mulher», {χείρ} «mão», {σῶμα} «corpo», {ὄνομα} «nome», {αἷμα} «sangue».

A regra de ouro (Machen): tire o {-ος} do GENITIVO e ache o tema. {σαρκός} menos {-ος} = {σαρκ-} — e desse tema saem todas as formas: {σαρκί} (dat.), {σάρκα} (ac.), {σάρκες} (nom. pl.), {σαρκῶν} (gen. pl.). O nominativo sozinho engana ({σάρξ} esconde o {κ}; {πνεῦμα} esconde o {τ}); o genitivo nunca mente. Por isso o dicionário sempre registra o par: {σάρξ, σαρκός}.

## Temas em oclusiva: σάρξ como modelo

Nos temas em consoante oclusiva ({κ}, {γ}, {χ}, {π}, {β}, {φ}, {τ}, {δ}, {θ}), o nominativo singular termina em {-ς} e o encontro consoante + {ς} produz a forma que vemos: {σαρκ-ς} → {σάρξ} (κ+ς=ξ), {ἐλπιδ-ς} → {ἐλπίς} (δ+ς=ς, com o δ caindo). No dativo plural, a terminação universal da 3ª é {-σι(ν)}: {σαρκ-σί} → {σαρξί(ν)}, {ἐλπίσι(ν)}, {πᾶσι(ν)} (de {πᾶς}).

O acusativo singular troca o {-ς} por {-α}: {σάρκα}, {ἐλπίδα}, {χάριτα} ({χάρις, -ιτος}). O acusativo plural termina em {-ας}: {σάρκας}. E o genitivo plural {-ῶν} com circunflexo, velho conhecido dos caps. 2–3, fecha o paradigma.

## Os neutros em -μα

Os neutros em {-μα} ({πνεῦμα}, {σῶμα}, {ὄνομα}, {αἷμα}, {ῥῆμα} «palavra dita») formam o grupo mais dócil da 3ª: tema em {-ματ-} ({πνεύματος} → {πνευματ-}), nominativo e acusativo iguais, plural em {-α} — a regra de ouro dos neutros, mais uma vez. Paradigma: {πνεῦμα, πνεύματος, πνεύματι, πνεῦμα / πνεύματα, πνευμάτων, πνεύμασι(ν), πνεύματα}.

Na leitura, {ἐν πνεύματι} «em espírito» (dativo de esfera) e {τὸ πνεῦμά μου} «o meu espírito» (Lc 1.47) aparecem dezenas de vezes. Reconhecer o {-ματι} de cor acelera a leitura dos evangelhos e de Paulo.

## Parentesco e os irregulares famosos

{πατήρ, πατρός} «pai», {μήτηρ, μητρός} «mãe», {θυγάτηρ, θυγατρός} «filha», {ἀνήρ, ἀνδρός} «homem» e {γυνή, γυναικός} «mulher» têm temas com alternância ({πατερ-/πατρ-}, {ἀνερ-/ἀνδρ-}, {γυναικ-}): nominativo com vogal plena, demais casos com tema reduzido. O acusativo revela: {πατέρα}, {μητέρα}, {ἄνδρα}, {γυναῖκα}.

Dois vocativos merecem altar próprio: {Πάτερ} «Pai!» (Mt 6.9, {Πάτερ ἡμῶν}) e {ἄνδρες} «senhores!» (plural de {ἀνήρ}, fórmula de discurso em Atos: {ἄνδρες ἀδελφοί} «irmãos!»). O vocativo singular troca a terminação: {Πάτερ}, com ε breve.`),
  vocab: [
    V('σάρξ', 'σάρξ', 'carne'),
    V('σαρκός', 'σάρξ', 'da carne'),
    V('σαρκί', 'σάρξ', 'em carne'),
    V('σάρκες', 'σάρξ', 'carnes (pl.)'),
    V('πνεῦμα', 'πνεῦμα', 'espírito'),
    V('πνεύματος', 'πνεῦμα', 'do espírito'),
    V('πνεύματι', 'πνεῦμα', 'em espírito'),
    V('σῶμα', 'σῶμα', 'corpo'),
    V('ὄνομα', 'ὄνομα', 'nome'),
    V('αἷμα', 'αἷμα', 'sangue'),
    V('πατήρ', 'πατήρ', 'pai'),
    V('πατρός', 'πατήρ', 'do pai'),
    V('Πάτερ', 'πατήρ', 'Pai! (voc.)'),
    V('μήτηρ', 'μήτηρ', 'mãe'),
    V('γυνή', 'γυνή', 'mulher'),
    V('ἀνήρ', 'ἀνήρ', 'homem, marido'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o tema de «σάρξ» e como se obtém?'),
    options: [
      T('σαρκ-, tirando -ος do genitivo σαρκός'),
      T('σαρ-, tirando -ξ do nominativo'),
      T('σαρκς-, somando nominativo e genitivo'),
      T('σα-, primeira sílaba'),
    ],
    answer: 0,
    hint: T('Regra de ouro: o tema sai do genitivo — regra §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o dativo plural: σαρξ___ («em carnes»).'),
      answer: 'ίν',
      hint: T('Dativo plural universal da 3ª: -σι(ν).'),
    },
    {
      kind: 'choose',
      prompt: T('«πνεύματα» só pode ser…'),
      options: [
        T('Nominativo ou acusativo plural (neutro em -α)'),
        T('Genitivo singular'),
        T('Dativo plural'),
        T('Vocativo singular'),
      ],
      answer: 0,
      hint: T('Neutro plural termina em -α — regra de ouro dos neutros.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma ao seu caso.'),
      pairs: [
        { a: 'πατρί', b: 'dativo' },
        { a: 'πατέρα', b: 'acusativo' },
        { a: 'Πάτερ', b: 'vocativo' },
        { a: 'πνεύμασι', b: 'dativo plural' },
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
        'Regra de ouro: o tema sai do genitivo (tire -ος). Decore pares ({νύξ, νυκτός}; {χάρις, χάριτος}).',
      ),
    },
    {
      n: '2',
      text: T(
        'Dativo plural universal: -σι(ν) ({σάρξ} → {σαρξίν}, {πατήρ} → {πατράσιν}, {πᾶς} → {πᾶσιν}).',
      ),
    },
    {
      n: '3',
      text: T('Acusativo singular em -α ({σάρκα}, {ἐλπίδα}); acusativo plural em -ας ({σάρκας}).'),
    },
    {
      n: '4',
      text: T('Neutros em -μα: tema -ματ-, nom. = ac., plural em -α. O grupo mais regular da 3ª.'),
    },
    {
      n: '5',
      text: T(
        'Parentesco alterna o tema (πατερ-/πατρ-); o acusativo ({πατέρα}, {ἄνδρα}) e o vocativo ({Πάτερ}) denunciam a forma.',
      ),
    },
  ],
  notes: [
    {
      label: T('Como analisar:'),
      text: T(
        'Diante de forma desconhecida, remova a terminação candidata (-ος, -ι, -α, -ες, -ῶν, -σι) e teste o resto como tema: {νυκτ-} + {-ός} = {νυκτός} → {νύξ} «noite». Três segundos de teste evitam três minutos de dicionário.',
      ),
    },
    {
      label: T('γυνή × γύναι:'),
      text: T(
        'O vocativo de {γυνή} é {γύναι} — Jesus o usa com Maria (Jo 2.4; 19.26). Não é rispidez: é o vocativo normal da palavra, equivalente ao nosso «minha senhora».',
      ),
    },
  ],
  examples: [
    { text: '{ἐν σαρκὶ ἐληλυθότα}', gloss: T('vindo em carne (dativo; 1Jo 4.2)') },
    { text: '{τὸ πνεῦμά μου}', gloss: T('o meu espírito (Lc 1.47)') },
    { text: '{Πάτερ ἡμῶν}', gloss: T('Pai nosso (vocativo; Mt 6.9)') },
    { text: '{ἐν πνεύματι}', gloss: T('em espírito (dativo de esfera)') },
    { text: '{τὰ ῥήματα}', gloss: T('as palavras ditas (neutro plural)') },
    { text: '{διὰ τοῦ αἵματος}', gloss: T('por meio do sangue (genitivo; Hb 9.12)') },
    { text: '{ἄνδρες ἀδελφοί}', gloss: T('irmãos! (vocativo plural; At 2.29)') },
    { text: '{τῇ γυναικί}', gloss: T('à mulher (dativo; Jo 4.27)') },
    { text: '{ἐπὶ χεῖρας}', gloss: T('sobre mãos (acusativo plural de χείρ)') },
    { text: '{πᾶσιν ἀνθρώποις}', gloss: T('a todos os homens (dativo plural; 1Tm 2.4)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Tema em oclusiva: ἡ σάρξ'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{σάρξ}', '{σάρκες}'],
        [T('Genitivo'), '{σαρκός}', '{σαρκῶν}'],
        [T('Dativo'), '{σαρκί}', '{σαρξί(ν)}'],
        [T('Acusativo'), '{σάρκα}', 'σάρκας'],
      ],
    },
    {
      caption: T('Tabela 2 — Neutro em -μα: τὸ πνεῦμα'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        [T('Nominativo'), '{πνεῦμα}', '{πνεύματα}'],
        [T('Genitivo'), '{πνεύματος}', 'πνευμάτων'],
        [T('Dativo'), '{πνεύματι}', 'πνεύμασι(ν)'],
        [T('Acusativo'), '{πνεῦμα}', '{πνεύματα}'],
      ],
    },
    {
      caption: T('Tabela 3 — Parentesco: ὁ πατήρ e ἡ γυνή'),
      head: [
        T('Caso'),
        { 0: 'π', 1: 'α', 2: 'τ', 3: 'ή', 4: 'ρ' },
        { 0: 'γ', 1: 'υ', 2: 'ν', 3: 'ή' },
      ],
      rows: [
        [T('Nominativo'), '{πατήρ}', '{γυνή}'],
        [T('Genitivo'), '{πατρός}', 'γυναικός'],
        [T('Dativo'), '{πατρί}', 'γυναικί'],
        [T('Acusativo'), '{πατέρα}', 'γυναῖκα'],
        [T('Vocativo'), '{Πάτερ}', 'γύναι'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Verbos em -μι'),
  subtitle: T('δίδωμι, τίθημι, ἵστημι: a classe arcaica'),
  section: T('O verbo'),
  body: C(`## A classe mais antiga do verbo grego

Os verbos em {-μι} são o estrato mais arcaico do verbo grego — e incluem alguns dos mais frequentes do Novo Testamento: {δίδωμι} «dar», {τίθημι} «pôr», {ἵστημι} «pôr de pé / estar de pé», {ἵημι} «enviar, lançar». Eles são atemáticos (como {εἰμί} e {φημί} do cap. 11): o tema se liga direto à desinência, sem vogal temática.

Duas marcas os denunciam: a reduplicação do presente (a sílaba inicial se repete com {ι}: {δι-δω-μι}, {τι-θη-μι}, {ἱ-στη-μι}) e as desinências próprias {-μι, -ς, -σι, -μεν, -τε, -ασι}. A 3ª sg. {-σι} com iota (δίδωσι) contra a 3ª sg. temática {-ει} (λύει) é o teste mais rápido.

## δίδωμι e τίθημι

Presente de {δίδωμι}: {δίδωμι, δίδως, δίδωσι(ν), δίδομεν, δίδοτε, διδόασι(ν)}. Repare a alternância vocálica: vogal longa no singular ({διδω-}), breve no plural ({διδο-}) — herança indo-europeia conservada. O imperfeito {ἐδίδουν} contrai {ε + ο} em {ου}.

O aoristo abandona a reduplicação e usa o tema puro + {κα}: {ἔδωκα, ἔδωκας, ἔδωκε(ν), ἐδώκαμεν, ἐδώκατε, ἔδωκαν}. Esse aoristo em {-κα} sem sigma é a terceira assinatura da classe. {τίθημι} segue o mesmo roteiro: {τίθημι, τίθης, τίθησι(ν)} → imperfeito {ἐτίθην} (plural {ἐτίθεμεν}) → aoristo {ἔθηκα}.

## ἵστημι: um verbo, dois sentidos

{ἵστημι} é o caso mais instrutivo. O presente e o aoristo 1º são transitivos («pôr de pé»): {ἵστημι}, {ἔστησα} ({ἔστησεν αὐτόν} «pô-lo de pé»). Mas o aoristo 2º {ἔστην} e o perfeito {ἕστηκα} são intransitivos («estar de pé, manter-se»): {ἔστη} «pôs-se de pé / ficou», {ἕστηκα} «estou de pé».

A mesma raiz muda de voz conforme o tempo — fenômeno que os gramáticos chamam de transitividade variável. Em João 8.3 ({ἔστησαν αὐτὴν} «puseram-na de pé») × Atos 7.55 ({ἑστῶτα} «de pé»), o contraste decide a tradução.

## Os verbos em -νυμι

Um subgrupo menor usa o sufixo {-νυ-} no presente: {δείκνυμι} «mostrar» ({δείκνυς, δείκνυσι}), {ἀπόλλυμι} «destruir, perder», {ζεύγνυμι} «jungir». Fora do presente, eles se comportam como verbos regulares: aoristo {ἔδειξα}, futuro {δείξω}. Reconheça o {-νυ-} e trate o resto como tema comum.`),
  vocab: [
    V('δίδωμι', 'δίδωμι', 'dou'),
    V('δίδως', 'δίδωμι', 'dás'),
    V('δίδωσι', 'δίδωμι', 'dá'),
    V('ἔδωκα', 'δίδωμι', 'dei'),
    V('ἔδωκεν', 'δίδωμι', 'deu'),
    V('τίθημι', 'τίθημι', 'ponho'),
    V('τίθησι', 'τίθημι', 'põe'),
    V('ἔθηκα', 'τίθημι', 'pus'),
    V('ἵστημι', 'ἵστημι', 'ponho de pé'),
    V('ἔστησα', 'ἵστημι', 'pus de pé'),
    V('ἔστη', 'ἵστημι', 'pôs-se de pé'),
    V('ἕστηκα', 'ἵστημι', 'estou de pé'),
    V('δείκνυμι', 'δείκνυμι', 'mostro'),
    V('ἔδειξα', 'δείκνυμι', 'mostrei'),
    V('ἀπόλλυμι', 'ἀπόλλυμι', 'destruo, perco'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ἔδωκαν» é aoristo de qual verbo?'),
    options: [T('δίδωμι (aoristo em -κα)'), T('λύω (aoristo sigmático)'), T('τίθημι'), T('ἵστημι')],
    answer: 0,
    hint: T('Tema δο- sem sigma + κα: assinatura -μι.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a 3ª pessoa do singular do presente: διδώ___ («ele dá»).'),
      answer: 'σι',
      hint: T('Desinência própria dos -μι: -σι.'),
    },
    {
      kind: 'choose',
      prompt: T('«ἔστη» (Lc 1.11) é transitivo ou intransitivo?'),
      options: [
        T('Intransitivo: «pôs-se de pé» (aoristo 2º)'),
        T('Transitivo: «pô-lo de pé»'),
        T('Passivo: «foi posto»'),
        T('Imperativo: «põe-te!»'),
      ],
      answer: 0,
      hint: T('Aoristo 2º de ἵστημι = intransitivo — regra §4.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue cada forma à sua classe.'),
      pairs: [
        { a: 'διδόασι', b: 'presente -μι' },
        { a: 'ἔθηκα', b: 'aoristo -κα' },
        { a: 'ἔδειξα', b: 'aoristo regular' },
        { a: 'λύουσι', b: 'presente temático' },
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
        'Três assinaturas dos -μι: reduplicação com ι no presente, desinências próprias (-μι, -ς, -σι), aoristo em -κα sem sigma.',
      ),
    },
    {
      n: '2',
      text: T(
        'Alternância vocálica: vogal longa no singular ({δίδω-}), breve no plural ({δίδο-}). A 3ª pl. {-ασι} denuncia a classe.',
      ),
    },
    {
      n: '3',
      text: T(
        'O aoristo abandona a reduplicação: tema puro + κα ({ἔδωκα}, {ἔθηκα}). Sem reduplicação e com κα, é -μι.',
      ),
    },
    {
      n: '4',
      text: T(
        '{ἵστημι}: presente/aoristo 1º transitivos; aoristo 2º/perfeito intransitivos. O tempo decide a voz.',
      ),
    },
    {
      n: '5',
      text: T(
        'Verbos em -νυμι ({δείκνυμι}) só são -μι no presente; fora dele, conjugam-se como regulares ({ἔδειξα}, {δείξω}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Limpeza:'),
      text: T(
        '{ἀπόλλυμι} «destruir» aparece no presente médio {ἀπόλλυται} «perece» (Jo 3.16: {ἵνα μὴ ἀπόληται}) e no aoristo regular {ἀπώλεσα}. É o -νυμι mais frequente do Novo Testamento.',
      ),
    },
    {
      label: T('Frequência:'),
      text: T(
        '{δίδωμι} e {τίθημι} estão entre os 20 verbos mais frequentes do Novo Testamento. O esforço deste capítulo se paga em toda página.',
      ),
    },
  ],
  examples: [
    { text: '{δίδωσιν αὐτοῖς}', gloss: T('dá-lhes (3ª sg.; Mc 6.41)') },
    { text: '{ἔδωκεν αὐτοῖς ἐξουσίαν}', gloss: T('deu-lhes autoridade (aoristo; Mc 6.7)') },
    { text: '{τίθησιν τὴν ψυχήν}', gloss: T('dá a vida (Jo 10.11; lit. «põe a alma»)') },
    { text: '{ἔθηκεν αὐτὸν}', gloss: T('pô-lo (aoristo; Mc 15.46)') },
    { text: '{ἔστησεν αὐτὸν}', gloss: T('pô-lo de pé (transitivo)') },
    { text: '{ἔστη ἐνώπιον}', gloss: T('pôs-se diante (intransitivo; Lc 1.11)') },
    { text: '{ἕστηκα ἐνώπιον}', gloss: T('estou de pé diante (perfeito; At 26.16)') },
    { text: '{δεῖξον ἡμῖν}', gloss: T('mostra-nos (aoristo de δείκνυμι; Jo 14.8)') },
    { text: '{διδόασιν δόματα}', gloss: T('dão dons (3ª pl.; Mt 7.11)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente ativo de δίδωμι'),
      head: [T('Pessoa'), T('Forma'), T('Tradução')],
      rows: [
        ['1ª sg.', '{δίδωμι}', 'eu dou'],
        ['2ª sg.', '{δίδως}', 'tu dás'],
        ['3ª sg.', '{δίδωσι(ν)}', 'ele dá'],
        ['1ª pl.', '{δίδομεν}', 'nós damos'],
        ['2ª pl.', '{δίδοτε}', 'vós dais'],
        ['3ª pl.', '{διδόασι(ν)}', 'eles dão'],
      ],
    },
    {
      caption: T('Tabela 2 — Aoristo ativo de δίδωμι e τίθημι'),
      head: [
        T('Pessoa'),
        { 0: 'δ', 1: 'ί', 2: 'δ', 3: 'ω', 4: 'μ', 5: 'ι' },
        { 0: 'τ', 1: 'ί', 2: 'θ', 3: 'η', 4: 'μ', 5: 'ι' },
      ],
      rows: [
        ['1ª sg.', '{ἔδωκα}', '{ἔθηκα}'],
        ['2ª sg.', '{ἔδωκας}', '{ἔθηκας}'],
        ['3ª sg.', '{ἔδωκε(ν)}', '{ἔθηκε(ν)}'],
        ['1ª pl.', '{ἐδώκαμεν}', '{ἐθήκαμεν}'],
        ['2ª pl.', '{ἐδώκατε}', '{ἐθήκατε}'],
        ['3ª pl.', '{ἔδωκαν}', '{ἔθηκαν}'],
      ],
    },
    {
      caption: T('Tabela 3 — ἵστημι: transitivo × intransitivo'),
      head: [T('Tempo'), T('Forma'), T('Sentido')],
      rows: [
        ['Presente', '{ἵστημι}', 'ponho de pé (trans.)'],
        ['Aoristo 1º', '{ἔστησα}', 'pus de pé (trans.)'],
        ['Aoristo 2º', '{ἔστην}', 'pus-me / fiquei (intrans.)'],
        ['Perfeito', '{ἕστηκα}', 'estou de pé (intrans.)'],
      ],
    },
  ],
};

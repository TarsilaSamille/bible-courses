import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('-μι verbos'),
  subtitle: T('δίδωμι, τίθημι, ἵστημι: la clase arcaica'),
  section: T('El verbo'),
  body: C(`## La capa más antigua del verbo griego.

Los verbos {-μι} son la capa más arcaica del verbo griego e incluyen algunos de los más frecuentes del Nuevo Testamento: {δίδωμι} "dar", {τίθημι} "poner", {ἵστημι} "preparar/ponerse de pie", {ἵημι} "enviar, tirar".Son atemáticos (como {εἰμί} y {φημί} en el capítulo 11): la raíz se une directamente a la terminación, sin vocal temática.

Dos marcas los delatan: la reduplicación del presente (la sílaba inicial se repite con {ι}: {δι-δω-μι}, {τι-θη-μι}, {ἱ-στη-μι}) y sus propias terminaciones {-μι, -ς, -σι, -μεν, -τε, -ασι}.El tercer sargento.{-σι} con iota (δίδωσι) contra el 3er sg temático.{-ει} (λύει) es la prueba más rápida.

## δίδωμι y τίθημι

Presente de {δίδωμι}: {δίδωμι, δίδως, δίδωσι(ν), δίδομεν, δίδοτε, διδόασι(ν)}.Tenga en cuenta la gradación de las vocales: vocal larga en singular ({διδω-}), corta en plural ({διδο-}): una herencia indoeuropea conservada.El imperfecto {ἐδίδουν} contrae {ε + ο} en {ου}.

El aoristo elimina la reduplicación y usa la raíz desnuda + {κα}: {ἔδωκα, ἔδωκας, ἔδωκε(ν), ἐδώκαμεν, ἐδώκατε, ἔδωκαν}.Este aoristo sin sigma {-κα} es la tercera firma de la clase.{τίθημι} sigue la misma escritura: {τίθημι, τίθης, τίθησι(ν)} → imperfecto {ἐτίθην} (plural {ἐτίθεμεν}) → aoristo {ἔθηκα}.

## ἵστημι: un verbo, dos sentidos

{ἵστημι} es el caso más instructivo.El presente y el primer aoristo son transitivos ("preparar"): {ἵστημι}, {ἔστησα} ({ἔστησεν αὐτόν} "él lo preparó").Pero el segundo aoristo {ἔστην} y el perfecto {ἕστηκα} son intransitivos ("estar de pie"): {ἔστη} "él estuvo de pie", {ἕστηκα} "yo estoy de pie".

La misma raíz cambia la voz entre tiempos, lo que los gramáticos llaman transitividad variable.En Juan 8:3 ({ἔστησαν αὐτὴν} "la levantaron") versus Hechos 7:55 ({ἑστῶτα} "de pie"), el contraste decide la traducción.

## Los verbos -νυμι

Un subgrupo más pequeño usa el sufijo {-νυ-} en presente: {δείκνυμι} "mostrar" ({δείκνυς, δείκνυσι}), {ἀπόλλυμι} "destruir, perder",{ζεύγνυμι} "unir".Fuera del presente se comportan como verbos regulares: aoristo {ἔδειξα}, futuro {δείξω}.Reconoce el {-νυ-} y trata el resto como una raíz ordinaria.`),
  vocab: [
    V('δίδωμι', 'δίδωμι', 'I give'),
    V('δίδως', 'δίδωμι', 'you give'),
    V('δίδωσι', 'δίδωμι', 'he gives'),
    V('ἔδωκα', 'δίδωμι', 'I gave'),
    V('ἔδωκεν', 'δίδωμι', 'he gave'),
    V('τίθημι', 'τίθημι', 'I put'),
    V('τίθησι', 'τίθημι', 'he puts'),
    V('ἔθηκα', 'τίθημι', 'I put (aor.)'),
    V('ἵστημι', 'ἵστημι', 'I set up'),
    V('ἔστησα', 'ἵστημι', 'I set up (aor.)'),
    V('ἔστη', 'ἵστημι', 'he stood (aor.)'),
    V('ἕστηκα', 'ἵστημι', 'I stand (perf.)'),
    V('δείκνυμι', 'δείκνυμι', 'I show'),
    V('ἔδειξα', 'δείκνυμι', 'I showed'),
    V('ἀπόλλυμι', 'ἀπόλλυμι', 'I destroy, lose'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿"ἔδωκαν" es el aoristo de qué verbo?'),
    options: [T('δίδωμι (-κα aorist)'), T('λύω (sigmatic aorist)'), T('τίθημι'), T('ἵστημι')],
    answer: 0,
    hint: T('δο- raíz sigmaless + κα: -μι firma.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el 3er presente singular: διδώ___ ("él da").'),
      answer: 'σι',
      hint: T('-Finación propia de μι: -σι.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἔστη" (Luke 1:11) is transitive or intransitive?'),
      options: [
        T('Intransitive: "he stood" (2nd aorist)'),
        T('Transitive: "he set him up"'),
        T('Passive: "he was set"'),
        T('Imperative: "stand!"'),
      ],
      answer: 0,
      hint: T('Segundo aoristo de ἵστημι = intransitivo — regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su clase.'),
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
        'Tres firmas -μι: ι-reduplicación en presente, sus propias terminaciones (-μι, -ς, -σι), aoristo -κα sin sigma.',
      ),
    },
    {
      n: '2',
      text: T(
        'Graduación vocal: vocal larga en singular ({δίδω-}), corta en plural ({δίδο-}).El 3er pl.{-ασι} traiciona a la clase.',
      ),
    },
    {
      n: '3',
      text: T(
        'El aoristo elimina la reduplicación: raíz desnuda + κα ({ἔδωκα}, {ἔθηκα}).Sin reduplicación más κα significa -μι.',
      ),
    },
    {
      n: '4',
      text: T(
        '{ἵστημι}: presente/1er aoristo transitivo;2do aoristo/perfecto intransitivo.El tiempo decide la voz.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los verbos -νυμι ({δείκνυμι}) son -μι sólo en presente;en otros lugares se conjugan regularmente ({ἔδειξα}, {δείξω}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Cleanup:'),
      text: T(
        '{ἀπόλλυμι} "destruir" aparece en el presente medio {ἀπόλλυται} "perece" (Juan 3:16: {ἵνα μὴ ἀπόληται}) y el aoristo regular {ἀπώλεσα}.Es el verbo -νυμι más frecuente en el Nuevo Testamento.',
      ),
    },
    {
      label: T('Frequency:'),
      text: T(
        '{δίδωμι} y {τίθημι} se encuentran entre los 20 verbos más frecuentes del Nuevo Testamento.El esfuerzo de este capítulo da sus frutos en cada página.',
      ),
    },
  ],
  examples: [
    { text: '{δίδωσιν αὐτοῖς}', gloss: T('he gives to them (3rd sg.; Mark 6:41)') },
    { text: '{ἔδωκεν αὐτοῖς ἐξουσίαν}', gloss: T('he gave them authority (aorist; Mark 6:7)') },
    {
      text: '{τίθησιν τὴν ψυχήν}',
      gloss: T('he lays down his life (John 10:11; lit. "puts the soul")'),
    },
    { text: '{ἔθηκεν αὐτὸν}', gloss: T('he laid him (aorist; Mark 15:46)') },
    { text: '{ἔστησεν αὐτὸν}', gloss: T('he set him up (transitive)') },
    { text: '{ἔστη ἐνώπιον}', gloss: T('he stood before (intransitive; Luke 1:11)') },
    { text: '{ἕστηκα ἐνώπιον}', gloss: T('I stand before (perfect; Acts 26:16)') },
    { text: '{δεῖξον ἡμῖν}', gloss: T('show us (aorist of δείκνυμι; John 14:8)') },
    { text: '{διδόασιν δόματα}', gloss: T('they give gifts (3rd pl.; Matt 7:11)') },
  ],
  tables: [
    {
      caption: T('Table 1 — Present active of δίδωμι'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
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
      caption: T('Tabla 2 — Aoristo activo de δίδωμι y τίθημι'),
      head: [
        T('Persona'),
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
      caption: T('Table 3 — ἵστημι: transitive vs intransitive'),
      head: [T('Tiempo'), T('Forma'), T('Sentido')],
      rows: [
        ['Presente', '{ἵστημι}', 'ponho de pé (trans.)'],
        ['Aoristo 1º', '{ἔστησα}', 'pus de pé (trans.)'],
        ['Aoristo 2º', '{ἔστην}', 'pus-me / fiquei (intrans.)'],
        ['Perfeito', '{ἕστηκα}', 'estou de pé (intrans.)'],
      ],
    },
  ],
};

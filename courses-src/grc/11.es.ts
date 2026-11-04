import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Infinitivo y Participio'),
  subtitle: T('λύειν y λύων: el verbo convertido en sustantivo'),
  section: T('El verbo'),
  body: C(`## Descripción general de las formas nominales

El infinitivo y el participio son las formas nominales del verbo: tienen significado verbal (tiempo y voz) pero funcionan como nominales.El infinitivo funciona como sustantivo ({λύειν} "perder", como en "Quiero perder");el participio funciona como adjetivo ({λύων} "el que pierde", como en "el hombre que suelta").Este capítulo ofrece una descripción general;los participios ganan dos capítulos propios (21-22), tal es su importancia.

## El infinitivo y sus usos

La morfología es simple: presente activo {λύειν}, presente medio {λύεσθαι}, aoristo activo {λῦσαι}, aoristo pasivo {λυθῆναι}, perfecto {λελυκέναι}.Ninguna persona, ningún número, sólo tiempo (aspecto) y voz.

Los usos: complemento de verbos como {θέλω} "desear", {δύναμαι} "poder", {μέλλω} "estar a punto de" ({θέλω λύειν} "deseo perder");infinitivo articular como sustantivo completo ({τὸ πιστεύειν} "creyendo", {τὸ ζῆν} "viviendo");resultado con {ὥστε} + infinitivo ({ὥστε πιστεῦσαι} "para que creyeran");y discurso indirecto ({ἔφη λῦσαι} "dijo que había desatado" - cap. 25).

## El participio: el camaleón

El participio declina como un adjetivo (género, número, caso) y significa como un verbo (tiempo, voz).Las formas de {λύω}: presente activo {λύων, λύουσα, λῦον};aoristo activo {λύσας, λύσασα, λύσαν};perfecto {λελυκώς, λελυκυῖα, λελυκός};medio {λυόμενος, λυσάμενος};pasivo {λυθείς, λυθεῖσα, λυθέν}.

Tres empleos: adjetivo ("el {ὁ λύων} hombre"), sustantivizado ({οἱ πιστεύοντες} "los que creen", {ὁ κλέπτων} "el ladrón") y adverbial, los más frecuentes y ricos.El participio adverbial (circunstancial) no necesita conjunción y comprime cláusulas enteras: {ἀκούσας} "habiendo oído / cuando escuchó / porque escuchó".Tiempo relativo: aoristo = antes de la acción principal;presente = simultáneo.

## Cómo leer un participio adverbial

Frente a {λέγων}, {ἀκούσας}, {ἐλθών}, pregunte: ¿quién realiza la acción del participio?Si es el sujeto de la cláusula principal, es una circunstancia circunstancial simple, traducida por contexto: temporal ("cuando..."), causal ("porque..."), concesiva ("aunque..."), condicional ("si..."), modal ("...-ing"), final ("para...") o circunstancia concomitante.{ἀποκριθεὶς εἶπεν} "respondiendo, dijo" es tan común que se convirtió en una fórmula narrativa.

Si el sujeto del participio difiere del de la cláusula principal, viene en genitivo absoluto: la construcción del cap.23. Por ahora, fija la regla de oro: el participio concuerda con el sustantivo al que se refiere y su caso señala al dueño de la acción.`),
  vocab: [
    V('λύειν', 'λύω', 'perder (inf.)'),
    V('λύεσθαι', 'λύω', 'perderse (en.)'),
    V('λῦσαι', 'λύω', 'haber desatado (aor. inf.)'),
    V('λυθῆναι', 'λύω', 'haber sido soltado'),
    V('λελυκέναι', 'λύω', 'haber soltado (perf.)'),
    V('λύων', 'λύω', 'the one loosing'),
    V('λύσας', 'λύω', 'habiendo soltado'),
    V('λυθείς', 'λύω', 'haber sido liberado'),
    V('πιστεύων', 'πιστεύω', 'quien crea'),
    V('λέγων', 'λέγω', 'dicho'),
    V('ἀκούσας', 'ἀκούω', 'haber escuchado'),
    V('ἐλθών', 'ἔρχομαι', 'habiendo venido'),
    V('θέλω', 'θέλω', 'desear'),
    V('δύναμαι', 'δύναμαι', 'poder'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "ὁ πιστεύων" (Juan 3:16), el participio es…'),
    options: [
      T('Sustantivizado: "el que cree"'),
      T('circunstancial temporal'),
      T('Genitive absolute'),
      T('Complemento de θέλω'),
    ],
    answer: 0,
    hint: T('Artículo + participio sin sustantivo = sustantivo - regla §5.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el infinitivo aoristo activo: λῦ___ ("haber desatado").'),
      answer: 'σαι',
      hint: T('1er aoristo: raíz + σα + ι.'),
    },
    {
      kind: 'choose',
      prompt: T('"ἀκούσας ἐθαύμασεν" (Mateo 8:10): el participio aoristo señala acción…'),
      options: [
        T('Prior to the main one ("having heard")'),
        T('Simultaneous ("hearing")'),
        T('Más tarde ("escuchar")'),
        T('Habitual ("solía escuchar")'),
      ],
      answer: 0,
      hint: T('Tiempo relativo: aoristo = previo – regla §3.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su clase.'),
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
        'Infinitive = verb-noun (no person/number). Participle = verb-adjective (with gender/number/case).',
      ),
    },
    {
      n: '2',
      text: T(
        'El infinitivo articular es un sustantivo completo: {τὸ θέλειν} "dispuesto", {τοῦ πιστεύειν} "de creer".',
      ),
    },
    {
      n: '3',
      text: T(
        'Tiempo relativo de los participios: aoristo = antes de la acción principal;presente = simultáneo;perfecto = estado resultante.',
      ),
    },
    {
      n: '4',
      text: T(
        'El participio concuerda con el dueño de la acción.Si el propietario no es el sujeto de la cláusula, sigue el genitivo absoluto (cap. 23).',
      ),
    },
    {
      n: '5',
      text: T(
        'Participio sustantivo con artículo = "el que...": {ὁ πιστεύων} "el que cree" (Juan 3:16).',
      ),
    },
  ],
  notes: [
    {
      label: T('Avance:'),
      text: T(
        'Chapters 21–22 dissect each participle with full paradigms and the eight circumstantial uses. Here, recognizing the forms and the action-owner logic suffices.',
      ),
    },
    {
      label: T('En el texto:'),
      text: T(
        '{λέγων} aparece más de 300 veces en el Nuevo Testamento: la palabra de transición narrativa por excelencia.Nunca lo traduzcas mecánicamente como "decir": el contexto exige "cuando dijo", "porque dijo", "al decir".',
      ),
    },
  ],
  examples: [
    { text: '{θέλω λύειν}', gloss: T('Deseo perder (complementar)') },
    { text: '{τὸ πιστεύειν}', gloss: T('creyendo (infinitivo sustantivizado)') },
    { text: '{ὥστε πιστεῦσαι}', gloss: T('so that they believed (result)') },
    { text: '{ὁ πιστεύων}', gloss: T('el que cree (Juan 3:16)') },
    { text: '{οἱ πιστεύοντες}', gloss: T('those who believe (substantivized plural)') },
    { text: '{λέγων αὐτοῖς}', gloss: T('diciéndoles (modal circunstancial)') },
    { text: '{ἀκούσας ἐθαύμασεν}', gloss: T('Al oírlo, se maravilló (antes; Mateo 8:10)') },
    { text: '{ἀποκριθεὶς εἶπεν}', gloss: T('respondiendo, dijo (fórmula narrativa)') },
    { text: '{ἐλθὼν προσκύνησεν}', gloss: T('habiendo venido, adoró (Mateo 8:2)') },
    { text: '{ὁ κλέπτων}', gloss: T('el ladrón, encendido."el que roba" (Efesios 4:28)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Infinitivos de λύω'),
      head: [T('Tiempo/Voz'), T('Forma'), T('Sentido')],
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
      caption: T('Tabla 2 — Participios de λύω (nominativo)'),
      head: [T('Tiempo'), T('Activo'), T('Medio'), T('Pasivo')],
      rows: [
        ['Presente', '{λύων, λύουσα, λῦον}', 'λυόμενος, -η, -ον', '—'],
        ['Aoristo', '{λύσας, λύσασα, λύσαν}', 'λυσάμενος, -η, -ον', '{λυθείς, λυθεῖσα, λυθέν}'],
        ['Perfeito', '{λελυκώς, λελυκυῖα, λελυκός}', 'λελυμένος, -η, -ον', '—'],
      ],
    },
  ],
};

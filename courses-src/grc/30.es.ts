import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  title: T('Lectura: las bienaventuranzas (Mt 5:3-10)'),
  subtitle: T('Μακάριοι… ὅτι — proclamación y promesa'),
  section: T('Lecturas'),
  body: C(`## La arquitectura del macarismo

Cada bienaventuranza tiene dos mitades unidas por {ὅτι} «porque»: la proclamación en presente ({Μακάριοι οἱ πτωχοί} «bienaventurados los pobres») y la promesa en futuro ({αὐτῶν ἐστιν ἡ βασιλεία} «de ellos es el reino» / {αὐτοὶ παρακληθήσονται} «serán consolados»). Ocho veces la misma estructura, ocho grupos, ocho futuros — y el marco se cierra: la 1ª y la 8ª terminan en presente ({ἐστιν}); el reino ya es de ellos.

{Μακάριοι} no es «feliz» en el sentido de sentimiento — declara una condición ante Dios, como en los salmos de la Septuaginta ({μακάριος ἀνήρ} «feliz el varón», Sal 1.1). {ἐστιν} a menudo se omite (predicado nominal, cap. 11): {Μακάριοι οἱ πτωχοί} = «[son] bienaventurados los pobres».

## Los sujetos: participios sustantivados

Los bienaventurados vienen en participios: {οἱ πενθοῦντες} «los que lloran», {οἱ πεινῶντες καὶ διψῶντες} «los que tienen hambre y sed», {οἱ δεδιωγμένοι} «los que han sido perseguidos» — este último, participio PASIVO PERFECTO: el estado de quien ya fue perseguido y lleva la marca. {οἱ πραεῖς} «los mansos» y {οἱ καθαροὶ} «los puros» usan adjetivos; {οἱ εἰρηνοποιοί} «los pacificadores» usa un sustantivo compuesto ({εἰρήνη} + {ποιέω}).

Los dativos limitan y especifican: {τῷ πνεύματι} «en espíritu» (pobres no de bolsillo sino de espíritu), {τῇ καρδίᾳ} «de corazón» (una pureza localizada). Dativo de respeto — «en cuanto a…».

## Las promesas: futuros del Reino

Las apódosis hablan en futuro — casi todas pasivas divinas (cap. 20): {παρακληθήσονται} «serán consolados», {χορτασθήσονται} «serán saciados», {ἐλεηθήσονται} «obtendrán misericordia», {κληθήσονται} «serán llamados». El agente implícito es Dios: Él consuela, sacia, llama.

Dos excepciones enseñan: {αὐτῶν ἐστιν} (presente — el reino ya les pertenece) y {ὄψονται} «verán» (futuro ACTIVO de {ὁράω}: ver a Dios es acto de los puros, no recepción). Y {κληρονομήσουσιν τὴν γῆν} «heredarán la tierra» (v. 5) cita el Sal 37.11 de la Septuaginta casi palabra por palabra — Mateo ancla la promesa en la Escritura.`),
  vocab: [
    V('μακάριοι', 'μακάριος', 'bienaventurados, felices'),
    V('πτωχοί', 'πτωχός', 'pobres'),
    V('πενθοῦντες', 'πενθέω', 'los que lloran'),
    V('πραεῖς', 'πραΰς', 'mansos'),
    V('πεινῶντες', 'πεινάω', 'los que tienen hambre'),
    V('διψῶντες', 'διψάω', 'los que tienen sed'),
    V('ἐλεήμονες', 'ἐλεήμων', 'misericordiosos'),
    V('καθαροί', 'καθαρός', 'puros, limpios'),
    V('εἰρηνοποιοί', 'εἰρηνοποιός', 'pacificadores'),
    V('δεδιωγμένοι', 'διώκω', 'perseguidos'),
    V('παρακληθήσονται', 'παρακαλέω', 'serán consolados'),
    V('χορτασθήσονται', 'χορτάζω', 'serán saciados'),
    V('ὄψονται', 'ὁράω', 'verán'),
    V('κληρονομήσουσιν', 'κληρονομέω', 'heredarán'),
    V('οὐρανῶν', 'οὐρανός', 'de los cielos'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«παρακληθήσονται» es futuro pasivo (y no presente) porque…'),
    options: [
      T('Tiene -θη- (pasivo) + -σ- (futuro) antes de la terminación'),
      T('Termina en -ονται'),
      T('Viene después de ὅτι'),
      T('Es participio'),
    ],
    answer: 0,
    hint: T('θη + σ = futuro pasivo — caps. 19–20.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el dativo: τῷ ___ («en espíritu», de πνεῦμα).'),
      answer: 'πνεύματι',
      hint: T('Neutro en -μα: dativo en -ματι.'),
    },
    {
      kind: 'choose',
      prompt: T('«οἱ δεδιωγμένοι» usa participio perfecto porque…'),
      options: [
        T('Marca estado resultante (perseguidos con marca permanente)'),
        T('Es más corto que el presente'),
        T('No existe presente para ese verbo'),
        T('μακάριοι lo exige'),
      ],
      answer: 0,
      hint: T('Perfecto = estado resultante — cap. 15.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione cada forma con su análisis.'),
      pairs: [
        { a: 'πενθοῦντες', b: 'part. presente' },
        { a: 'δεδιωγμένοι', b: 'part. perfeito' },
        { a: 'ὄψονται', b: 'futuro ativo' },
        { a: 'ἐστιν', b: 'presente (moldura)' },
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
        'Macarismo = proclamación (presente) + ὅτι + promesa (futuro). El marco 1ª/8ª cierra en presente.',
      ),
    },
    {
      n: '2',
      text: T(
        'Sujetos en participio sustantivado; el perfecto ({δεδιωγμένοι}) marca estado resultante.',
      ),
    },
    {
      n: '3',
      text: T(
        'Futuros pasivos = pasivo divino (Dios consuela, sacia, llama). Futuros activos ({ὄψονται}) = acción de los bienaventurados.',
      ),
    },
    {
      n: '4',
      text: T(
        'El dativo de respeto limita el adjetivo: {τῷ πνεύματι}, {τῇ καρδίᾳ} — «en cuanto a…».',
      ),
    },
  ],
  notes: [
    {
      label: T('Lucas × Mateo:'),
      text: T(
        'Lucas trae cuatro bienaventuranzas sin dativos limitantes ({Μακάριοι οἱ πτωχοί} «los pobres», Lc 6.20) + cuatro ayes ({οὐαὶ ὑμῖν} «¡ay de vosotros!»). Comparar las versiones es un ejercicio clásico: Mateo espiritualiza, Lucas socializa — la gramática muestra dónde editó cada uno.',
      ),
    },
    {
      label: T('Sonido:'),
      text: T(
        'Las ocho en voz alta, marcando el ritmo Μακάριοι… ὅτι / Μακάριοι… ὅτι. El paralelismo es mnemotécnico: las comunidades antiguas memorizaban el Sermón cantando esa cadencia.',
      ),
    },
  ],
  examples: [
    {
      text: '{Μακάριοι οἱ πτωχοί}',
      gloss: T('bienaventurados los pobres (sin verbo: predicado nominal)'),
    },
    { text: '{αὐτῶν ἐστιν}', gloss: T('de ellos es (genitivo posesivo antecipado)') },
    { text: '{οἱ πενθοῦντες}', gloss: T('los que lloran (participio presente)') },
    { text: '{παρακληθήσονται}', gloss: T('serán consolados (futuro pasivo)') },
    { text: '{κληρονομήσουσιν}', gloss: T('heredarán (futuro activo; Sal 37.11)') },
    { text: '{χορτασθήσονται}', gloss: T('serán saciados (saci escatológico)') },
    { text: '{τῇ καρδίᾳ}', gloss: T('de corazón (dativo de respeto)') },
    { text: '{ὄψονται}', gloss: T('verán (futuro de ὁράω; teofanía prometida)') },
    { text: '{κληθήσονται}', gloss: T('serán llamados (filiación declarada)') },
    { text: '{οἱ δεδιωγμένοι}', gloss: T('los perseguidos (perfecto: marca permanente)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las ocho bienaventuranzas'),
      head: [T('Sujeto'), T('Promesa'), T('Tiempo')],
      rows: [
        ['{οἱ πτωχοὶ τῷ πνεύματι}', '{αὐτῶν ἐστιν}', 'presente'],
        ['{οἱ πενθοῦντες}', '{παρακληθήσονται}', 'fut. passivo'],
        ['{οἱ πραεῖς}', '{κληρονομήσουσιν}', 'futuro ativo'],
        ['{οἱ πεινῶντες}', '{χορτασθήσονται}', 'fut. passivo'],
        ['{οἱ ἐλεήμονες}', '{ἐλεηθήσονται}', 'fut. passivo'],
        ['{οἱ καθαροὶ τῇ καρδίᾳ}', '{ὄψονται}', 'futuro ativo'],
        ['{οἱ εἰρηνοποιοί}', '{κληθήσονται}', 'fut. passivo'],
        ['{οἱ δεδιωγμένοι}', '{αὐτῶν ἐστιν}', 'presente'],
      ],
    },
  ],
};

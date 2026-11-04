import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Numerales y tiempo'),
  subtitle: T('εἷς, δύο, τρεῖς — y cómo mide el griego el tiempo'),
  section: T('Sintaxis'),
  body: C(`## Contar hasta cuatro (los que se declinan)

Solo los cardinales del 1 al 4 se declinan; del 5 en adelante son invariables. {εἷς, μία, ἕν} «uno» se declina como adjetivo pronominal (genitivo {ἑνός, μιᾶς, ἑνός}); {δύο} «dos» es indeclinable en el koiné (reliquia del dual antiguo); {τρεῖς, τρία} «tres» y {τέσσαρες, τέσσαρα} «cuatro» siguen la 3ª declinación (genitivo {τριῶν}, {τεσσάρων} — con el {-ῶν} ya conocido).

La serie invariable se memoriza como un bloque rítmico: {πέντε, ἕξ, ἑπτά, ὀκτώ, ἐννέα, δέκα} (5–10), {ἕνδεκα, δώδεκα} (11–12, este último con su propia forma declinable en Hechos), {εἴκοσι} (20), {ἑκατόν} (100), {χίλιοι} (1000, declinable como adjetivo: {χίλια} neutro plural en Ap 20.2).

## Ordinales y fracciones de tiempo

Los ordinales llevan artículo y se declinan en 2-1-2: {πρῶτος} «primero», {δεύτερος}, {τρίτος} — {τῇ ἡμέρᾳ τῇ τρίτῃ} «al tercer día» (Jo 2.1, Caná; fíjese en el artículo repetido: posición atributiva, cap. 4). {ἔσχατος} «último» y {μέσος} «medio» completan la escala ({ἔσονται οἱ ἔσχατοι πρῶτοι} «los últimos serán primeros», Mt 19.30).

{πρῶτος} con genitivo partitivo cuenta posiciones: {πρῶτός μου} «primero [antes] que yo» (Jo 1.15, {πρῶτός μου ἦν} «estaba antes que yo» — precedencia, no cronología). Y {μία} + genitivo plural fecha la semana: {μιᾷ τῶν σαββάτων} «el primer [día] de la semana» (Jo 20.1, la resurrección; {σάββατον} = «sábado/semana»).

## Las horas y los días

El día judío empieza con la puesta del sol; las horas se cuentan desde el amanecer: {ὥρα ἦν ὡς δεκάτη} «eran más o menos las diez» (Jo 1.39 — décima hora ≈ 16 h). {νύξ} «noche» frente a {ἡμέρα} «día»; {ὀψία} «tarde» ({ὀψίας γενομένης}, cap. 23); {πρωῒ} «temprano» ({λίαν πρωῒ} «muy temprano», Mc 16.2).

Dos medidas famosas: {τεσσεράκοντα ἡμέρας} «cuarenta días» (el ayuno, Mt 4.2; el diluvio, la tentación — el número de la prueba) y {ἑβδομήκοντα} «setenta» (Lc 10.1, los setenta enviados). Los números en el texto bíblico rara vez son solo números: cuarenta prueba, siete completa, doce gobierna, mil amplifica.`),
  vocab: [
    V('εἷς', 'εἷς', 'uno'),
    V('μία', 'εἷς', 'una (fem.)'),
    V('δύο', 'δύο', 'dos'),
    V('τρεῖς', 'τρεῖς', 'tres'),
    V('τέσσαρες', 'τέσσαρες', 'cuatro'),
    V('ἑπτά', 'ἑπτά', 'siete'),
    V('δέκα', 'δέκα', 'diez'),
    V('δώδεκα', 'δώδεκα', 'doce'),
    V('ἑκατόν', 'ἑκατόν', 'cien'),
    V('χίλιοι', 'χίλιοι', 'mil'),
    V('πρῶτος', 'πρῶτος', 'primero'),
    V('τρίτος', 'τρίτος', 'tercero'),
    V('ὥρα', 'ὥρα', 'hora'),
    V('σάββατον', 'σάββατον', 'sábado, semana'),
    V('νύξ', 'νύξ', 'noche'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«ὥρα ἦν ὡς δεκάτη» (Jo 1.39) equivale a…'),
    options: [
      T('Sobre las 16 h (10ª hora desde el amanecer)'),
      T('Las 10 h en punto de la mañana'),
      T('Medianoche'),
      T('Hora indeterminada'),
    ],
    answer: 0,
    hint: T('Sume 6 a las horas dadas — regla §3.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete el genitivo: τρι___ («de tres»).'),
      answer: 'ῶν',
      hint: T('τρεῖς sigue la 3ª: genitivo en -ῶν.'),
    },
    {
      kind: 'choose',
      prompt: T('«μιᾷ τῶν σαββάτων» (Jo 20.1) significa…'),
      options: [
        T('El primer día de la semana'),
        T('Uno de los sábados del año'),
        T('Durante el sábado'),
        T('Mil sábados'),
      ],
      answer: 0,
      hint: T('σάββατον = sábado y semana — regla §4.'),
    },
    {
      kind: 'match',
      prompt: T('Relacione cada numeral con su valor.'),
      pairs: [
        { a: 'ἑπτά', b: '7' },
        { a: 'τεσσεράκοντα', b: '40' },
        { a: 'ἑκατόν', b: '100' },
        { a: 'δώδεκα', b: '12' },
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
        'Solo se declinan del 1 al 4 ({εἷς}, {δύο} invariable en el koiné, {τρεῖς}, {τέσσαρες}). Del 5 en adelante, una sola forma.',
      ),
    },
    {
      n: '2',
      text: T(
        'Ordinales con artículo, 2-1-2 ({πρῶτος}, {τρίτος}). Artículo repetido = atributivo, como en los adjetivos.',
      ),
    },
    {
      n: '3',
      text: T(
        'Las horas se cuentan desde el amanecer: 1ª ≈ 6 h, 6ª ≈ mediodía, 10ª ≈ 16 h. Sume 6 a las horas dadas.',
      ),
    },
    {
      n: '4',
      text: T('{σάββατον} = sábado y semana: {μιᾷ τῶν σαββάτων} «el primer día de la semana».'),
    },
  ],
  notes: [
    {
      label: T('Hora sexta:'),
      text: T(
        '{ὥρα ἦν ὡς ἕκτη} «eran más o menos las seis» (Jo 4.6; 19.14) = mediodía, el calor máximo — detalle narrativo, no un reloj de punto. Juan marca las horas en encuentros decisivos (Nicodemo de noche, la samaritana al mediodía).',
      ),
    },
    {
      label: T('Restos vigesimales:'),
      text: T(
        'Apocalipsis cuenta las multitudes en miríadas ({δὶς μυριάδες μυριάδων} «dos miríadas de miríadas», Ap 9.16). {μυριάς} «diez mil» se declina como sustantivo — el griego cuenta los números grandes en paquetes de diez mil.',
      ),
    },
  ],
  examples: [
    { text: '{εἷς κύριος}', gloss: T('un Señor (Ef 4.5)') },
    { text: '{δύο ψάρια}', gloss: T('dos peces (Mc 6.38)') },
    { text: '{τρεῖς ἡμέρας}', gloss: T('tres días (acusativo de duración)') },
    { text: '{τῇ ἡμέρᾳ τῇ τρίτῃ}', gloss: T('al tercer día (Jo 2.1)') },
    { text: '{ὥρα ἦν ὡς δεκάτη}', gloss: T('eran más o menos las diez (Jo 1.39)') },
    { text: '{μιᾷ τῶν σαββάτων}', gloss: T('el primer día de la semana (Jo 20.1)') },
    { text: '{τεσσεράκοντα ἡμέρας}', gloss: T('cuarenta días (Mt 4.2)') },
    { text: '{ἑβδομήκοντα}', gloss: T('setenta (Lc 10.1)') },
    { text: '{πρῶτός μου ἦν}', gloss: T('estaba antes que yo (Jo 1.15)') },
    { text: '{χίλια ἔτη}', gloss: T('mil años (Ap 20.2)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — εἷς, τρεῖς, τέσσαρες'),
      head: [
        T('Caso'),
        {
          0: 'ε',
          1: 'ἷ',
          2: 'ς',
          3: ' ',
          4: '(',
          5: 'm',
          6: '.',
          7: '/',
          8: 'f',
          9: '.',
          10: '/',
          11: 'n',
          12: '.',
          13: ')',
        },
        { 0: 'τ', 1: 'ρ', 2: 'ε', 3: 'ῖ', 4: 'ς' },
        { 0: 'τ', 1: 'έ', 2: 'σ', 3: 'σ', 4: 'α', 5: 'ρ', 6: 'ε', 7: 'ς' },
      ],
      rows: [
        [T('Nominativo'), '{εἷς} / {μία} / {ἕν}', '{τρεῖς} / {τρία}', 'τέσσαρες / τέσσαρα'],
        [T('Genitivo'), 'ἑνός / μιᾶς / ἑνός', '{τριῶν}', 'τεσσάρων'],
        [T('Dativo'), 'ἑνί / μιᾷ / ἑνί', 'τρισί', 'τέσσαρσι'],
        [T('Acusativo'), 'ἕνα / μίαν / ἕν', 'τρεῖς / τρία', 'τέσσαρας / τέσσαρα'],
      ],
    },
    {
      caption: T('Tabla 2 — Invariables del 5 al 12 y grandes'),
      head: [
        T('Número'),
        T('Forma'),
        {
          0: 'E',
          1: 'x',
          2: 'e',
          3: 'm',
          4: 'p',
          5: 'l',
          6: 'o',
          7: ' ',
          8: 'n',
          9: 'o',
          10: ' ',
          11: 't',
          12: 'e',
          13: 'x',
          14: 't',
          15: 'o',
        },
      ],
      rows: [
        ['5–10', '{πέντε, ἕξ, ἑπτά, ὀκτώ, ἐννέα, δέκα}', '{δέκα παρθένοι} (Mt 25.1)'],
        ['11–12', '{ἕνδεκα, δώδεκα}', '{δώδεκα μαθηταί}'],
        ['20 / 100', '{εἴκοσι / ἑκατόν}', '{ἑκατὸν πρόβατα} (Mt 18.12)'],
        ['40 / 70', '{τεσσεράκοντα / ἑβδομήκοντα}', '{τεσσεράκοντα ἡμέρας}'],
        ['1000', '{χίλιοι} (declinável!)', '{χίλια ἔτη} (Ap 20.2)'],
      ],
    },
  ],
};

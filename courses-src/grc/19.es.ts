import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  title: T('Segundo aoristo'),
  subtitle: T('ἔλιπον, εἶδον, ἔγνων: el aoristo sin sigma'),
  section: T('El verbo'),
  body: C(`## El otro aoristo

No todos los aoristo usan {σ}.Una familia de verbos, precisamente la más frecuente, forma el pasado perfectivo con una raíz diferente, sin sigma, pero con las terminaciones secundarias del imperfecto: {ἔλιπον, ἔλιπες, ἔλιπε, ἐλίπομεν, ἐλίπετε,ἔλιπον}.Este es el segundo aoristo (fuerte), contra el primer aoristo (sigmático) del cap.7.

Sin sigma que delate el tiempo, el diccionario debe proporcionar la raíz: las partes principales de un verbo crecen hasta formar seis partes (presente, futuro, aoristo, perfecto…).{λέγω} → {ἐρῶ}, {εἶπον}, {εἴρηκα};{ὁράω} → {ὄψομαι}, {εἶδον}, {ἑώρακα}.Sin las partes principales, el segundo aoristo es impredecible: memorízalas.

## Los seis gigantes (y amigos)

Seis verbos representan la mayoría de los aoristos segundos del Nuevo Testamento: {λείπω} → {ἔλιπον} "Me fui";{ὁράω} → {εἶδον} "Vi" (aumento en la raíz {ἰδ-}: {ἐ-ἰδ-ον});{γινώσκω} → {ἔγνων} "Lo sabía";{ἔχω} → {ἔσχον} "Tuve";{λαμβάνω} → {ἔλαβον} "Tomé";{πάσχω} → {ἔπαθον} "Sufrí".

Uniéndolos: {φέρω} → {ἤνεγκον} "Traje" (el más irregular de todos, tres raíces: {φερ-}, {ἐνεγκ-}, {ἐνεχθ-});{ἐσθίω} → {ἔφαγον} "comí";{πίνω} → {ἔπιον} "bebí";{πίπτω} → {ἔπεσον} "Me caí";{φεύγω} → {ἔφυγον} "Huí";{εὑρίσκω} → {εὗρον} "Encontré".

##Reconocer sin memorizarlo todo

Tres pistas traicionan al segundo aoristo.Primero: aumento + raíz diferente del presente + terminaciones imperfectas ({ἔ-λαβ-ον} contra {λαμβάν-ω}).Segundo: el infinitivo {-εῖν} ({λιπεῖν}, {ἰδεῖν}, {λαβεῖν}, {παθεῖν}) — sólo el segundo aoristo se ve así.Tercero: el participio {-ών, -οῦσα, -όν} ({λιπών}, {ἰδών}, {λαβών}) — inconfundible.

En la lectura, {εἶδον} y {ἔλαβεν} aparecen cientos de veces (Cena: {λαβὼν ἄρτον} "habiendo tomado pan", Mateo 26:26; resurrección: {εἶδον τὸν κύριον} "He visto al Señor",Juan 20:25).Cada reparación gigante desbloquea páginas enteras.`),
  vocab: [
    V('ἔλιπον', 'λείπω', 'I left'),
    V('εἶδον', 'ὁράω', 'I saw'),
    V('ἔγνων', 'γινώσκω', 'I knew'),
    V('ἔσχον', 'ἔχω', 'I had'),
    V('ἔλαβον', 'λαμβάνω', 'I took'),
    V('ἔπαθον', 'πάσχω', 'I suffered'),
    V('εἶπον', 'λέγω', 'I said'),
    V('ἤνεγκον', 'φέρω', 'I brought'),
    V('ἔφαγον', 'ἐσθίω', 'I ate'),
    V('ἔπιον', 'πίνω', 'I drank'),
    V('ἔπεσον', 'πίπτω', 'I fell'),
    V('εὗρον', 'εὑρίσκω', 'I found'),
    V('λαβών', 'λαμβάνω', 'having taken'),
    V('ἰδών', 'ὁράω', 'having seen'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"ἔλαβον" es 2do aoristo (no imperfecto) porque…'),
    options: [
      T('It uses another stem (λαβ-) than the present (λαμβαν-)'),
      T('It has sigma'),
      T('It lacks augment'),
      T('It ends in -ον'),
    ],
    answer: 0,
    hint: T('Mismas terminaciones que la raíz imperfecta, diferente — regla §1.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el infinitivo segundo aoristo: λαβ___ ("haber tomado").'),
      answer: 'εῖν',
      hint: T('El infinitivo segundo aoristo termina en -εῖν — regla §2.'),
    },
    {
      kind: 'choose',
      prompt: T('"εἶδον τὸν κύριον" (Juan 20:25): el verbo ver se encuentra en…'),
      options: [
        T('2nd aorist of ὁράω'),
        T('Imperfect of βλέπω'),
        T('1st aorist of ὁράω'),
        T('Perfect of βλέπω'),
      ],
      answer: 0,
      hint: T('Supleción ὁράω/βλέπω: aoristo = εἶδον.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada aoristo con su presente.'),
      pairs: [
        { a: 'ἔσχον', b: 'ἔχω' },
        { a: 'ἔπαθον', b: 'πάσχω' },
        { a: 'εἶπον', b: 'λέγω' },
        { a: 'ἤνεγκον', b: 'φέρω' },
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
        '2do aoristo = aumento + su propia raíz (sin σ) + terminaciones imperfectas.La raíz no se puede deducir: memorizar las partes principales.',
      ),
    },
    {
      n: '2',
      text: T(
        '-εῖν infinitivo ({λαβεῖν}) y -ών participio ({λαβών}) pertenecen exclusivamente al segundo aoristo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los seis gigantes ({ἔλιπον}, {εἶδον}, {ἔγνων}, {ἔσχον}, {ἔλαβον}, {ἔπαθον}) cubren la mayoría de los sucesos.',
      ),
    },
    {
      n: '4',
      text: T(
        'Sentido idéntico al 1er aoristo (acto completado).La diferencia es puramente morfológica, nunca semántica.',
      ),
    },
  ],
  notes: [
    {
      label: T('Triple λέγω:'),
      text: T(
        '{λέγω} tiene tres pasados ​​en uso: imperfecto {ἔλεγεν} ("seguía diciendo"), segundo aoristo {εἶπον} ("dijo") y perfecto {εἴρηκα} ("he dicho").Tres raíces ({λεγ-}, {ἐπ-}, {ἐρ-}) para un verbo: suplementación en estado puro.',
      ),
    },
    {
      label: T('ὁράω vs βλέπω:'),
      text: T(
        'En presente, "ver" es {βλέπω};en el aoristo, {εἶδον} (de {ὁράω}).Los dos verbos comparten un paradigma como si fuera uno: otro complemento para memorizar como un bloque.',
      ),
    },
  ],
  examples: [
    { text: '{εἶδον τὸν κύριον}', gloss: T('I have seen the Lord (John 20:25)') },
    { text: '{λαβὼν ἄρτον}', gloss: T('having taken bread (Matt 26:26)') },
    { text: '{ἔπαθεν ὑπὲρ ὑμῶν}', gloss: T('he suffered for you (1 Pet 2:21)') },
    { text: '{ἔσχον χαρὰν}', gloss: T('I had joy (3 John 4)') },
    { text: '{ἔγνω αὐτόν}', gloss: T('he knew him (John 1:10)') },
    { text: '{ἤνεγκαν αὐτῷ}', gloss: T('they brought to him (from φέρω; Mark 1:32)') },
    { text: '{ἔφαγον καὶ ἐχορτάσθησαν}', gloss: T('they ate and were filled (Mark 6:42)') },
    { text: '{ἔπεσεν ἐπὶ πρόσωπον}', gloss: T('he fell on his face (Matt 26:39)') },
    { text: '{εὗρον τὸ παιδίον}', gloss: T('they found the child (Matt 2:11)') },
    { text: '{ἰδὲ ὁ ἀμνός}', gloss: T('behold the Lamb! (imperative; John 1:29)') },
  ],
  tables: [
    {
      caption: T('Tabla 1 - 2do aoristo de λείπω'),
      head: [T('Persona'), T('Forma'), T('Traducción')],
      rows: [
        ['1ª sg.', '{ἔλιπον}', 'deixei'],
        ['2ª sg.', '{ἔλιπες}', 'deixaste'],
        ['3ª sg.', '{ἔλιπε(ν)}', 'deixou'],
        ['1ª pl.', '{ἐλίπομεν}', 'deixamos'],
        ['2ª pl.', '{ἐλίπετε}', 'deixastes'],
        ['3ª pl.', '{ἔλιπον}', 'deixaram'],
      ],
    },
    {
      caption: T('Table 2 — The giants and their stems'),
      head: [
        T('Presente'),
        { 0: 'A', 1: 'o', 2: 'r', 3: 'i', 4: 's', 5: 't', 6: 'o', 7: ' ', 8: '2', 9: 'º' },
        T('Sentido'),
      ],
      rows: [
        ['{λείπω}', '{ἔλιπον}', 'deixei'],
        ['{ὁράω}', '{εἶδον}', 'vi'],
        ['{γινώσκω}', '{ἔγνων}', 'conheci'],
        ['{ἔχω}', '{ἔσχον}', 'tive'],
        ['{λαμβάνω}', '{ἔλαβον}', 'tomei'],
        ['{πάσχω}', '{ἔπαθον}', 'sofri'],
      ],
    },
    {
      caption: T('Tabla 3 — Formas nominales del segundo aoristo'),
      head: [T('Forma'), T('Ejemplo'), T('Pista')],
      rows: [
        ['Infinitivo', '{λιπεῖν}, {ἰδεῖν}', 'terminação -εῖν'],
        ['Particípio masc.', '{λιπών}, {ἰδών}', '-ών, -οῦσα, -όν'],
        ['Imperativo 2ª sg.', '{λάβε}, {ἰδέ}', 'forma curta, sem σ'],
      ],
    },
  ],
};

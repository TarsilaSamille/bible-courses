import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('Preposiciones y casos'),
  subtitle: T('в, на, с, к, о, у, от, до, про'),
  section: T('La sintaxis y la traducción'),
  body: C(
    'Una preposición rige un caso, pero una misma preposición puede regir varios. в + preposicional expresa ubicación: в начале; в + acusativo, dirección hacia el interior: в храм. на + preposicional expresa ubicación: на небе, на столе; на + acusativo, dirección: на стену. с + instrumental expresa compañía: с Богом; с + genitivo, origen: с неба. к + dativo significa a o hacia: к Богу. от + genitivo significa desde: от Бога. до + genitivo significa hasta: до конца. у + genitivo significa junto a: у Бога. о + preposicional significa acerca de: о Боге. про + preposicional significa acerca de o concerniente: говорить про. El preposicional nunca tiene terminación cero: о Боге, pero о слове. Ante grupos de consonantes, в y на toman о o и: во храм, на небе. El Credo tradicional dice Верую, no Верую во: la forma corta верю tiene terminación cero.',
  ),
  vocab: [
    V('в храм', 'храм', 'hacia el interior del templo'),
    V('на небо', 'небо', 'hacia el cielo'),
    V('с неба', 'небо', 'desde el cielo'),
    V('к Богу', 'бог', 'a Dios'),
    V('от Бога', 'бог', 'de Dios'),
    V('до конца', 'конец', 'hasta el final'),
    V('о Боге', 'бог', 'acerca de Dios'),
    V('о слове', 'слово', 'acerca de la palabra'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué caso aparece en в храм?'),
    options: [T('Preposicional'), T('Acusativo'), T('Genitivo')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: к Бог…'), answer: 'у' },
    { kind: 'fill', prompt: T('Completa: с неб… (desde el cielo)'), answer: 'а' },
    {
      kind: 'choose',
      prompt: T('¿Qué preposición rige instrumental para «con»?'),
      options: [T('от'), T('с'), T('у')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Identifica primero ubicación o dirección; después elige el caso regido.') },
  ],
  notes: [
    {
      label: T('La preposición no fija el caso'),
      text: T(
        'Una preposición puede regir más de un caso, y el sentido elige. {в} con lugar es prepositivo, {в} con dirección es acusativo: una palabra, casos opuestos.',
      ),
    },
  ],
  examples: [
    { text: 'в начале', gloss: T('al comienzo') },
    { text: 'в храм', gloss: T('hacia el interior del templo') },
  ],
  tables: [
    {
      caption: T('Preposiciones y régimen'),
      head: ['Preposição', 'Caso', 'Exemplo'],
      rows: [
        ['в', 'prepositivo / acusativo', 'в начале / в храм'],
        ['на', 'prepositivo / acusativo', 'на небе / на небо'],
        ['с', 'instrumental / genitivo', 'с Богом / с неба'],
        ['к', 'dativo', 'к Богу'],
        ['о, про', 'preposicional', 'о Боге / про Бога'],
        ['у, от, до', 'genitivo', 'у Бога / от Бога / до конца'],
      ],
    },
  ],
};

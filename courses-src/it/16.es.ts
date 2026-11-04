import { C, T, V } from '../shared.mts';

export default {
  id: 16,
  title: T('Preposiciones articuladas'),
  subtitle: T('del, alla, dal, nel, sul'),
  section: T('La sintaxis y el sustantivo'),
  body: C(`## Cinco fusiones, seis formas cada una

Cinco preposiciones simples **se fusionan obligatoriamente con el artículo**: {di}, {a}, {da}, {in}, {su}. No es opcional; es regla, y la rejilla es mecánica. {Di} más {il} da {del}, más {lo} da {dello}, más {la} da {della}, más {i} da {dei}, más {gli} da {degli}, más {le} da {delle}.

{A} repite exactamente el mismo patrón: {al}, {allo}, {alla}, {ai}, {agli}, {alle}. {Da} da {dal}, {dallo}, {dalla}, {dai}, {dagli}, {dalle}. {In} genera {nel}, {nello}, {nella}, {nei}, {negli}, {nelle}. {Su} genera {sul}, {sullo}, {sulla}, {sui}, {sugli}, {sulle}. Son veinticuatro formas, y una vez que la rejilla está en la página, es rellenar.

## Qué dice cada fusión

La fusión **dice la relación sin preposición a la vista**. {Nel} es {in} más {il} y marca lugar, «en el». {Dal} es {da} más {il} y marca origen, «del». {Della} es {di} más {la} y es un genitivo femenino. {Sui} es {su} más {i} y significa «en las montañas», posesión o lugar. Cada fusión lleva información que el sustantivo solo no da, y por eso el mismo sustantivo aparece con {del}, {dal} y {nel} en un mismo párrafo y ninguna de las tres se puede cambiar por otra.

La rejilla no tiene holgura: {di} más {gli} da {degli}, y esa es la única vía para llegar ahí. {Di} más {i} da {dei}, y ninguna otra combinación produce {dei}.

## El orden de los elementos

Lee el versículo por bloques: {nel principio}, {presso Dio}, {la luce degli uomini}. «En el principio», «junto a Dios», «la luz de los hombres». Romper la frase en palabras sueltas pierde la fusión y pierde el sentido.

Después, amplía: {dalla creazione} (desde la creación), {al mondo} (al mundo), {sui monti} (en los montes). La fusión **da el punto de vista**, origen ({da}), dirección ({a}), lugar ({in}) y posesión ({su}), y eso es lo que la preposición simple por sí sola no hace.

## Criterio de lectura

Siempre que veas {del}, {nel}, {dal} o {sul}, reconoce la preposición y el artículo fundidos. Si la frase es {dal}, la relación es de origen y no de lugar, y quien traduce todo por «de» pierde la distinción. Y fíjate en que {nel} y {dal} nunca llevan artículo aparte: uno solo, la fusión.`),
  vocab: [
    V('del', 'di', 'del'),
    V('alla', 'a', 'a la'),
    V('dal', 'da', 'del'),
    V('della', 'di', 'de la'),
    V('nel', 'in', 'en el'),
    V('sul', 'su', 'en el'),
    V('sui', 'su', 'en los'),
    V('dei', 'di', 'de los'),
    V('degli', 'di', 'de los'),
    V('dalla', 'da', 'de la'),
    V('preposizione', 'preposizione', 'preposición'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa Mt 5:1: salì ___ monte'),
    answer: 'sul',
    hint: T('su + il'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Forma: di + la → ___'), answer: 'della', hint: T('di + la') },
    {
      kind: 'choose',
      prompt: T('¿Qué fusión indica «en el (+ plural)»?'),
      options: [T('sul'), T('sulla'), T('sui'), T('sugli')],
      answer: 2,
    },
    { kind: 'fill', prompt: T('Forma: da + gli → ___'), answer: 'dagli', hint: T('da + gli') },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La fusión es obligatoria cuando la preposición está delante del artículo: {di il} → {del}, {a il} → {al}, {in il} → {nel}, {su il} → {sul}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{Di + i} da {dei} y {di + gli} da {degli}; ninguna otra combinación produce esas dos formas.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Con} y {per} casi nunca se fusionan: {con il}, {per il}, nunca {con lo} ni {coglio}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Nel} marca lugar, {dal} marca origen y {sui} marca posesión: {nel monte}, {dal cielo}, {sui monti}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{Nel} y {dal} nunca llevan artículo aparte: uno solo, la fusión, como en {nel principio}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Qué lleva la fusión'),
      text: T(
        '{nel} es {in} más {il} y marca lugar; {dal} es {da} más {il} y marca origen; {della} es {di} más {la} y es genitivo. Por eso el mismo sustantivo aparece con {del}, {dal} y {nel} en un mismo párrafo y ninguna de las tres se cambia por otra.',
      ),
    },
    {
      label: T('Dónde engaña la fusión'),
      text: T(
        '{Sui monti} es {su} más {i} y significa «en los montes»; {sui} nunca es {su} más {il}, que daría {sul}. Y {sul} más {i} da {sui}. La rejilla de la tabla no tiene holgura, y por eso se aprende de una vez.',
      ),
    },
  ],
  examples: [
    { text: 'Nel principio era la Parola.', gloss: T('En el principio era la Palabra.') },
    { text: 'La luce degli uomini.', gloss: T('La luz de los hombres.') },
    { text: 'Sali sul monte.', gloss: T('Subió al monte.') },
    { text: 'Vengo dall’Italia.', gloss: T('Vengo de Italia.') },
    { text: 'La parola della verità.', gloss: T('La palabra de la verdad.') },
    { text: 'Il libro di Paolo.', gloss: T('El libro de Pablo.') },
    { text: 'Uno strato di nebbia.', gloss: T('Una capa de niebla.') },
    { text: 'Con Dio e per Dio.', gloss: T('Con Dios y por Dios.') },
  ],
  tables: [
    {
      caption: T('Fusiones de preposición y artículo'),
      head: ['Preposizione', 'il', 'lo', 'la', 'i', 'gli', 'le'],
      rows: [
        ['di', 'del', 'dello', 'della', 'dei', 'degli', 'delle'],
        ['a', 'al', 'allo', 'alla', 'ai', 'agli', 'alle'],
        ['da', 'dal', 'dallo', 'dalla', 'dai', 'dagli', 'dalle'],
        ['in', 'nel', 'nello', 'nella', 'nei', 'negli', 'nelle'],
        ['su', 'sul', 'sullo', 'sulla', 'sui', 'sugli', 'sulle'],
      ],
    },
    {
      caption: T('Qué dice cada fusión'),
      head: ['Fusão', 'Função'],
      rows: [
        ['del', 'di + il'],
        ['dal', 'da + il'],
        ['nel', 'in + il'],
        ['sul', 'su + il'],
        ['dei', 'di + i'],
        ['degli', 'di + gli'],
        ['dalla', 'da + la'],
        ['sui', 'su + i'],
      ],
    },
  ],
};

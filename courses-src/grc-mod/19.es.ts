import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Caso'),
  title: T('Los cuatro casos que quedaron'),
  subtitle: T('του πατρός — τον πατέρα — Πατέρα'),
  body: C(`## Cuatro, no seis

El griego antiguo tenía seis casos. El griego moderno tiene cuatro, y la pérdida no fue arbitraria: se fueron el dativo y el vocativo como posiciones libres, y quedó lo que una frase no puede hacer sin.

El **nominativo** es el sujeto y lo que se ofrece al verbo: {ο φίλος μιλάει}. El **genitivo** es la posesión y la relación: {του φίλου το σπίτι}, "la casa del amigo". El **acusativo** es el objeto directo y el complemento de las preposiciones: {βλέπω τον φίλο}, {μιλάω με τον φίλο}. El **vocativo** es solo la dirección, sin verbo: {φίλε}, "amigo".

El nominativo y el acusativo son idénticos en casi todo sustantivo: {ο φίλος} y {τον φίλο} son la misma palabra con el artículo cambiado. Quien traduce no necesita saber cuál es cuál en el sustantivo; lo dice el verbo.

## El genitivo se prende al sustantivo, no a la preposición

El genitivo es el único caso que se ata a una palabra y no a otra. {του φίλου} es una sola pieza: preposición más genitivo, y el par no se separa. Lo que viene después de {του} puede ser un sustantivo, un pronombre o un adjetivo, y lo que viene después de eso ya no pertenece al genitivo.

Por eso {το σπίτι του φίλου} es "la casa del amigo" y {το σπίτι φίλου} es lo que se puede decir en registro elevado, sin preposición. El griego antiguo lo hacía todo el tiempo, y la Biblia lo hace. Quien traduce y quita el {του} sin darse cuenta borra la posesión.

## El genitivo también cuenta

El mismo genitivo marca la parte de un todo, y por eso va detrás del numeral: {δύο ανθρώπων}, "de dos personas". El español no tiene esa construcción: dice "dos personas", y el griego dice "dos, de personas". El sustantivo va al genitivo porque está siendo contado, y el numeral se queda solo, sin flexionar.

El genitivo marca también origen y separación, y eso es lo que hace que {από της Αθήνας} signifique "de Atenas" y {μακριά από την Αθήνα} signifique "lejos de Atenas". El mismo caso, con el sentido que da la preposición.

## El acento delata el cambio

En los dos casos donde la flexión sobrevivió, el acento se mueve, y es la única señal. {ο φίλος} en el nominativo, {του φίλου} en el genitivo: el acento baja una sílaba porque el sustantivo se alargó. {ο πατέρας} en el nominativo, {του πατέρα} en el genitivo: la bajada es la misma, y la terminación {-ας} del nominativo desaparece.

En el vocativo el movimiento es el mismo, y a veces el doble: {Σοφοκλῆς} da {Σοφοκλεῖς}, tres sílabas se vuelven dos y el acento sube a la última. Quien aprendió a prestar atención al acento está leyendo el caso sin hacer cuentas.

## Dónde la flexión sigue entera

> Πατέρα μου, ἦλθεν ὁ ἄγγελος· καὶ εἶπεν αὐτῷ· Ἀββᾶ ὁ Πατήρ.

El vocativo de {πατέρας} es {πατέρα} en el griego moderno, sin cambio ninguno, y así se habla a Dios en español. El griego antiguo tiene {Πατήρ} en el nominativo y {Πάτερ} en el vocativo, con {Πατέρα} en medio. Las dos formas viven una al lado de la otra: la moderna es indeclinable, la antigua sigue en la liturgia.`),
  vocab: [
    V('ο φίλος', 'ο φίλος', 'el amigo'),
    V('του φίλου', 'ο φίλος', 'del amigo (genitivo)'),
    V('τον φίλο', 'ο φίλος', 'al amigo (acusativo)'),
    V('το σπίτι', 'το σπίτι', 'la casa'),
    V('μιλάω', 'μιλάω', 'hablo'),
    V('βλέπω', 'βλέπω', 'veo'),
    V('ο πατέρας', 'πατέρας', 'el padre'),
    V('του πατέρα', 'πατέρας', 'del padre (genitivo)'),
    V('φίλε', 'φίλος', 'amigo (vocativo)'),
    V('Σοφοκλής', 'Σοφοκλής', 'Sófocles'),
    V('Σοφοκλείς', 'Σοφοκλής', 'Sófocles (vocativo)'),
    V('Πατέρα', 'πατέρας', 'Padre (vocativo moderno)'),
    V('δύο ανθρώπων', 'δύο', 'de dos personas'),
    V('από', 'από', 'de; por'),
    V('η Αθήνα', 'η Αθήνα', 'Atenas'),
    V('μακριά από', 'μακριά', 'lejos de'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Son cuatro casos: nominativo (sujeto), genitivo (posesión), acusativo (objeto y preposición) y vocativo (dirección).',
      ),
    },
    {
      n: '§2',
      text: T(
        'El genitivo se prende a la palabra que viene después de του, de της: es una sola pieza y no se separa.',
      ),
    },
    {
      n: '§3',
      text: T('Después del numeral el sustantivo va al genitivo: δύο ανθρώπων, "de dos personas".'),
    },
    {
      n: '§4',
      text: T(
        'El genitivo y el vocativo mueven el acento: esa es la señal de que la palabra cambió de caso.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dativo'),
      text: T(
        'El dativo no tiene caso propio en el griego moderno: fue absorbido por el acusativo. Quedaron cuatro palabras suyas, que son clíticas: μου, σου, μας, σας. Y el του viene de εἰς τοῦ, que era una preposición con genitivo.',
      ),
    },
    {
      label: T('Lectura'),
      text: T(
        'Cuando una frase griega tiene dos nombres seguidos y solo un artículo, el segundo nombre es casi siempre genitivo: φίλου ἀνθρώπου es "de un hombre amigo". Es el aparato más antiguo de la lengua, y sigue vivo en expresiones fijas.',
      ),
    },
  ],
  examples: [
    { text: 'ο φίλος μιλάει', gloss: T('el amigo habla') },
    { text: 'βλέπω τον φίλο', gloss: T('veo al amigo') },
    { text: 'το σπίτι του φίλου', gloss: T('la casa del amigo') },
    { text: 'μιλάω με τον φίλο', gloss: T('hablo con el amigo') },
    { text: 'φίλε, έλα εδώ', gloss: T('amigo, ven aquí') },
    { text: 'του πατέρα το σπίτι', gloss: T('la casa del padre') },
    { text: 'δύο ανθρώπων παρέστησαν', gloss: T('comparecieron dos personas') },
    { text: 'μακριά από την Αθήνα', gloss: T('lejos de Atenas') },
  ],
  tables: [
    {
      caption: T('Los cuatro casos'),
      head: ['Κλίση', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['οριστική', 'ο φίλος', 'η γυναίκα', 'το παιδί'],
        ['γενική', 'του φίλου', 'της γυναίκας', 'του παιδιού'],
        ['αἰτιατική', 'τον φίλο', 'την γυναίκα', 'το παιδί'],
        ['κλητική', 'φίλε', 'γυναίκα', 'παιδί'],
      ],
    },
    {
      caption: T('El genitivo con su artículo'),
      head: ['Μορφή', 'Αρσενικόν', 'Θηλυκόν', 'Ουδέτερον'],
      rows: [
        ['γενική άρθρου', 'τού', 'της', 'τού'],
        ['γενική ουσιαστικού', 'φίλου', 'γυναίκας', 'παιδιού'],
        ['αἰτιατική άρθρου', 'τον', 'την', 'το'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "το σπίτι του φίλου", ¿qué caso es "του φίλου"?'),
    options: [T('nominativo'), T('genitivo'), T('acusativo'), T('vocativo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('___ φίλου το σπίτι (artículo masculino genitivo)'),
      answer: 'του',
      hint: T('Artículo en genitivo'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice "de dos personas"?'),
      options: [T('δύο άνθρωποι'), T('δύο ανθρώπων'), T('δύο του ανθρώπων'), T('δύο ανθρώπων')],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Caso de cada forma'),
      pairs: [
        { a: 'ο φίλος', b: T('nominativo') },
        { a: 'του φίλου', b: T('genitivo') },
        { a: 'τον φίλο', b: T('acusativo') },
        { a: 'φίλε', b: T('vocativo') },
      ],
      answer: ['a1', 'a2', 'a3', 'a4'],
    },
    {
      kind: 'fill',
      prompt: T('Πατέρα ___ (vocativo de πατέρας en griego moderno)'),
      answer: 'μου',
      hint: T('La forma no cambia: escribe el posesivo enclítico'),
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('La escritura'),
  title: T('Las 33 letras y qué hacen seis de ellas'),
  subtitle: T('ъ ь э ю я ё: signos y vocales que el latín no tiene'),
  body: C(`
## Las seis letras que el latín no tiene

El alfabeto ruso tiene 33 posiciones: 10 vocales, 21 consonantes y dos signos, ъ y ь. Las seis letras de este título no son adornos decorativos. Cada una resuelve un problema de pronunciación que el latín resolvió de otro modo, y quien empieza a leerlas una por una, como letras con nombre y con sonido, deja de tropezar en las cinco primeras líneas.

Э, ю y я son vocales. Lo que las separa de е, и y у no es el timbre sino los labios: delante de ellas la boca se cierra. Ъ y ь no tienen sonido propio. Ь es un signo de palatalización, y dice que la consonante anterior se pronuncia con la lengua contra el paladar. Ъ marca una frontera de pronunciación dentro de la palabra, en un punto donde hoy no se pronuncia nada. Las dos han sobrevivido en muy pocas palabras de uso corriente, y ésas son las que vale la pena leer.

## ъ: la frontera que quedó

En подъём, съезд, въезд, отъезд y объект el ъ aparece en medio de la palabra, sin ninguna vocal al lado y sin razón fonética visible. Marca el límite de un prefijo. La regla antigua era fácil de enunciar y difícil de aplicar, porque dependía de lo que venía antes: se escribía ъ después de una vocal breve y antes de una consonante. Con el tiempo la vocal breve salió de la palabra, la palabra pasó a tener tres o cuatro sílabas en vez de dos, y el signo se quedó marcando un sitio vacío.

Quien hojea un texto del siglo XIX encuentra ъ por todas partes, porque era regla. Quien hojea un texto de hoy lo encuentra en подъём y no sabe qué hacer con él. La palabra guarda la cicatriz de la regla que la produjo.

## ь: la consonante que se vuelve blanda

Ь hace el trabajo contrario: no marca una frontera, marca una consonante palatalizada que sin ella sería dura. день sin ь sería ден, y ден se pronuncia con la lengua baja. Lo mismo vale para любовь, жизнь, мать y письмо. Quítele el ь a la palabra y sigue siendo legible, pero cambia de sonido, y ese es exactamente el error de lectura.

La prueba más limpia es un par que existe sólo por causa de la letra. **мел es tiza, y мель es un molino de piedra.** Una letra, dos sustantivos, y ninguna pista en la grafía más allá del ь. Eso es lo que se quiere decir cuando se afirma que la letra es carga, y no adorno.

## э, ю, я: las vocales que cierran la boca

La regla cabe en una línea: **toda consonante delante de э, ю o я es blanda.** No hay excepción. Э da una [e] cerrada; ю y я dan [ju] y [ja], también cerradas. Y por eso el alfabeto latino no ayuda: en latín cambiar una i por una e no cambia la consonante anterior, y en ruso elegir entre е, и, у, ю y я decide el sonido de la consonante que precede. Compare нога, donde la г es dura, con тяга, donde la t sigue dura aun delante de я, y con няня, donde la н es blanda.

El gancho bíblico es corto y es el Salmo 118:105. **Слово Твое — светильник ноге моей и свет стезе моей.** Dos palabras de la misma raíz, свет y светильник, y lo que las separa no es una letra nueva: es el acento, que en светильник cayó en la segunda sílaba y en свет quedó en la primera. La й de Твое es otra cosa. Твое tiene dos sílabas y ё, que marca el acento; твой tiene una sílaba y й, que marca la i breve. Si la ё se omitiera, como ocurre a menudo, el versículo seguiría siendo legible y la ambigüedad aparecería antes: Твое y твое suenan idénticos, y sólo una de las dos grafías es la de este salmo.`),
  vocab: [
    V('ъ', 'ъ', 'signo de frontera de pronunciación, mudo hoy'),
    V('ь', 'ь', 'signo de palatalización, sin sonido propio'),
    V('э', 'э', 'vocal de boca cerrada [e]'),
    V('ю', 'ю', 'vocal de boca cerrada [ju]'),
    V('я', 'я', 'vocal de boca cerrada [ja]'),
    V('ё', 'ё', 'vocal acentuada; la única que siempre marca el acento'),
    V('подъём', 'подъём', 'subida, ascensor'),
    V('съезд', 'съезд', 'congreso, reunión'),
    V('отъезд', 'отъезд', 'partida'),
    V('день', 'день', 'día'),
    V('любовь', 'любовь', 'amor'),
    V('мать', 'мать', 'madre'),
    V('мел', 'мел', 'tiza'),
    V('мель', 'мель', 'molino de piedra'),
    V('свет', 'свет', 'luz'),
    V('Твое', 'твой', 'tuyo (neutro)'),
    V('светильник', 'светильник', 'candil'),
  ],
  rules: [
    { n: '1', text: T('El alfabeto tiene 33 posiciones: 10 vocales, 21 consonantes, {ъ} y {ь}.') },
    { n: '2', text: T('Toda consonante delante de {э}, {ю} o {я} es blanda. No hay excepción.') },
    {
      n: '3',
      text: T(
        '{Ъ} marca una frontera dentro de la palabra, heredada de una regla que dependía de la vocal breve anterior: {подъём}, {съезд}, {отъезд}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ь} palataliza la consonante anterior: {день}, {любовь}, {мать}. Sin ella la palabra cambia de sonido.',
      ),
    },
    {
      n: '5',
      text: T('La {ё} siempre marca el acento. Donde aparece escrita, el acento está decidido.'),
    },
  ],
  notes: [
    {
      label: T('Ъ es una cicatriz'),
      text: T(
        'Ъ no tiene sonido y hoy no tiene función. Aparece en подъём, съезд, въезд, отъезд, объект. La regla antigua era más honesta que la lista: se escribía ъ después de una vocal breve y antes de una consonante. Cuando la vocal breve salió de la palabra, el signo se quedó. Quien lee un texto antiguo ve la regla; quien lee un texto de hoy ve la cicatriz.',
      ),
    },
    {
      label: T('La ё es el acento visible'),
      text: T(
        'La ё es la única letra rusa que siempre trae el acento. Твое y твой tienen la misma base: el primero tiene dos sílabas y ё, el segundo tiene una sílaba y й. Si se omite la ё, las dos suenan igual y el lector pierde la información de qué sílaba está acentuada.',
      ),
    },
  ],
  examples: [
    { text: 'подъём', gloss: T('subida; el ъ marca el límite del prefijo') },
    { text: 'съезд', gloss: T('congreso; ъ dentro de la palabra, sin sonido') },
    { text: 'отъезд', gloss: T('partida, lo contrario de приезд') },
    { text: 'день', gloss: T('día; el ь palataliza la n') },
    { text: 'любовь', gloss: T('amor; el ь palataliza la v') },
    { text: 'мел', gloss: T('tiza; consonante dura') },
    { text: 'мель', gloss: T('molino de piedra; la misma consonante, ahora blanda') },
    { text: 'тяга', gloss: T('tirón; la t sigue dura delante de я') },
    { text: 'всё', gloss: T('todo; la ё cierra la o y marca el acento') },
    {
      text: 'Слово Твое — светильник ноге моей',
      gloss: T('tu palabra es un candil para mi pie (Sl 118:105)'),
    },
  ],
  tables: [
    {
      caption: T('Las 33 posiciones del alfabeto ruso'),
      head: [T('Grupo'), T('Letras'), T('Cuenta')],
      rows: [
        [T('vocales'), T('а е ё и о у ю я ы э'), T('10')],
        [T('consonantes'), T('б в г д ж з й к л м н п р с т ф х ц ч ш щ'), T('21')],
        [T('signos'), T('ъ ь'), T('2')],
      ],
    },
    {
      caption: T('Qué hacen ъ y ь'),
      head: [T('Letra'), T('Función'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('ъ'), T('frontera de pronunciación dentro de la palabra'), T('подъём'), T('subida')],
        [T('ъ'), T('misma función, otro prefijo'), T('отъезд'), T('partida')],
        [T('ь'), T('palataliza la consonante anterior'), T('день'), T('día')],
        [T('ь'), T('misma función'), T('любовь'), T('amor')],
        [T('ь'), T('par real que sólo el ь distingue'), T('мел / мель'), T('tiza / molino')],
      ],
    },
    {
      caption: T('Boca cerrada y consonante anterior'),
      head: [T('Vocal'), T('Sonido'), T('Consonante que la precede'), T('Ejemplo')],
      rows: [
        [T('э'), T('[e] cerrada'), T('siempre blanda'), T('это, эта')],
        [T('ю'), T('[ju]'), T('siempre blanda'), T('любовь')],
        [T('я'), T('[ja]'), T('siempre blanda'), T('няня')],
        [T('я'), T('[ja]'), T('siempre blanda, aun tras una t dura'), T('тяга')],
        [T('е'), T('[e] abierta'), T('dura o blanda'), T('свете tiene t dura, поле l blanda')],
        [T('о'), T('[o] abierta'), T('dura o blanda'), T('нога tiene г dura')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En подъём, ¿qué hace el ъ?'),
    options: [
      T('Palataliza la consonante anterior'),
      T('Marca una frontera de pronunciación dentro de la palabra'),
      T('Indica el acento'),
    ],
    answer: 1,
    hint: T(
      'El ъ no palataliza ni marca acento. Lo que marca es el límite de un prefijo que el tiempo vació.',
    ),
  },
  exercises: [
    { kind: 'fill', prompt: T('Complete: съ___зд (congreso)'), answer: 'е' },
    { kind: 'fill', prompt: T('Complete: день — la letra que palataliza es ___'), answer: 'ь' },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra tiene una consonante dura delante de я?'),
      options: [T('тяга'), T('няня'), T('любовь')],
      answer: 0,
    },
  ],
};

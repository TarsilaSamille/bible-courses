import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('Escritura'),
  title: T('Pinyin: leer sin saber hablar'),
  subtitle: T('La romanización que hace escribibles los caracteres'),
  body: C(`## Para qué sirve el pinyin

El pinyin es la romanización oficial del chino, aprobada en 1958. No es una lengua: es el mapa entre la tecla que pulsas y el carácter que ves. Quien está en el teclado del móvil lo necesita; quien lee caracteres, no.

Dos propiedades lo hacen útil para quien aprende. Primera: es **fonético y regular**, cada letra representa siempre el mismo sonido, y las iniciales y los finales salen de una lista cerrada. Con una salvedad que los cursos de chino omiten: cada letra tiene un sonido, pero el mismo sonido puede tener dos letras. {sh} y {x} suenan casi igual, {n} y {l} también, y solo el contexto los distingue. La regla corre en un solo sentido. Segunda: **un mismo carácter puede tener varias lecturas**, pero casi siempre una sola. {行} es {xíng}, "andar", o {háng}, "fila", y decide el contexto.

## Iniciales y finales

Las iniciales, el sonido previo, son veintiuna: {b p m f d t n l g k h j q x zh ch sh r z c s}. Cuatro se escriben con dos letras, {zh}, {ch}, {sh} y {r}, y por eso la cuenta confunde: veintiún sonidos, pero diecisiete símbolos si cada par cuenta como uno. {r} no es la "r" de otras lenguas: es retroflexa, se pronuncia con la punta de la lengua curvada, y es la razón de que {zh ch sh r} existan como grupo. Los finales, el sonido posterior, son más numerosos, y ahí el mandarín te obliga a pensar: {i}, {u} y {ü} se escriben así tras {j q x y}, y {yu} ocupa el lugar de {ü}.

El {ü} es el sonido de "tú" en mandarín. Tras {j q x y} se escribe {u}: {jū} vale por {jü}, {yuè} por {yüe}. Fuera de ese grupo, el mandarín no tiene ese sonido.

## Qué resuelve el pinyin al leer la Biblia

El pinyin hace que el chino se pueda buscar por sonido: quien oyó {Yēsū} en un sermón puede escribir {耶稣} en el teclado. También permite comprobar la lectura de un nombre propio suelto, algo que el contexto no siempre revela.`),
  vocab: [
    V('xíng', '行', 'andar (xíng); fila (háng)'),
    V('和合', '和合', 'unión; combinar (héhé)'),
    V('字', '字', 'carácter (zì)'),
    V('拼音', '拼音', 'romanización (pīnyīn)'),
    V('声母', '声母', 'sonido inicial (shēngmǔ)'),
    V('韵母', '韵母', 'sonido final (yùnmǔ)'),
    V('耶稣', '耶稣', 'Jesús (Yēsū)'),
    V('北', '北', 'norte (běi)'),
    V('白', '白', 'blanco; decir (bái)'),
  ],
  rules: [
    { n: '1', text: T('El pinyin es fonético: cada letra tiene siempre el mismo sonido.') },
    {
      n: '2',
      text: T('Hay diecisiete iniciales; {zh}, {ch}, {sh} y {r} son los casos especiales.'),
    },
    { n: '3', text: T('Tras {j q x y}, el {ü} se escribe {u}: {jū} = {jü}, {yuè} = {yüe}.') },
    { n: '4', text: T('Un mismo carácter puede tener más de una lectura; el contexto decide.') },
  ],
  notes: [
    {
      label: T('El pinyin no es pronunciación de diccionario'),
      text: T(
        'El pinyin escribe el sonido pero no marca el tono. Así {ma} puede ser {mā} (madre), {má} (caballo) o {mǎ} (ficha) — la lección 3 lo trata.',
      ),
    },
  ],
  examples: [
    { text: '北', gloss: T('běi — norte') },
    { text: '白', gloss: T('bái — blanco') },
    { text: '行', gloss: T('xíng — andar; háng — fila') },
  ],
  tables: [
    {
      caption: T('Iniciales del pinyin'),
      head: [T('Grupo'), T('Letras'), T('Sonido')],
      rows: [
        [T('Bilabial'), T('{b} {p} {m}'), T('labios')],
        [T('Dental'), T('{d} {t} {n} {l}'), T('lengua en los dientes')],
        [T('Velar'), T('{g} {k} {h}'), T('fondo de la boca')],
        [T('Palatal'), T('{j} {q} {x}'), T('paladar')],
        [T('Retroflejo'), T('{zh} {ch} {sh} {r}'), T('punta de la lengua curvada')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Después de {j}, ¿cómo se escribe el {ü}?'),
    options: [T('{v}'), T('{u}'), T('{ü}'), T('{yu}')],
    answer: 1,
    hint: T('Igual tras {j q x y}. Tras otras letras el {ü} se mantiene.'),
  },
  exercises: [
    { kind: 'fill', prompt: T('Escribe el carácter del norte, leído {běi}: ____'), answer: '北' },
    {
      kind: 'match',
      prompt: T('Une la inicial con su grupo'),
      pairs: [
        { a: T('{b} {p} {m}'), b: T('bilabial (labios)') },
        { a: T('{g} {k} {h}'), b: T('velar (fondo de la boca)') },
        { a: T('{zh} {ch} {sh}'), b: T('retroflejo') },
        { a: T('{j} {q} {x}'), b: T('palatal (paladar)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};

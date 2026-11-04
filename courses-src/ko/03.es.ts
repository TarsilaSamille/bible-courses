import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  section: T('Escritura'),
  title: T('La anatomía del bloque: la vocal obligatoria y la superfinal'),
  subtitle: T(
    'El coreano es fácil de escribir una vez que se tiene la fórmula: inicial opcional, vocal obligatoria, final opcional — un sistema finito y diminuto que cabe en la cabeza',
  ),
  body: C(`## La fórmula: inicial opcional, vocal obligatoria, final opcional

Todo cuadrado de hangul se escribe en el mismo orden: inicial, opcional; vocal, obligatoria; final, opcional. Ningún cuadrado tiene una cuarta posición y ningún cuadrado puede prescindir de la segunda. Escribir coreano es aplicar la fórmula tantas veces como sílabas tenga la frase.

El inventario entero cabe en una página. Hay 19 consonantes iniciales, 10 de ellas simples y 11 escritas con dos consonantes juntas. Hay 7 vocales. Hay 7 consonantes finales. La multiplicación de esas piezas da un número grande, más de diez mil bloques posibles, y ese es justamente el asunto: el número es grande, la regla es minúscula. Quien aprende coreano no memoriza miles de sílabas, memoriza una fórmula y la aplica pieza por pieza. Quien aprende mandarín memoriza miles de pares, porque allí cada sílaba es un ítem de una lista. La diferencia no es de talento, es de diseño. El coreano se dibujó para que la contabilidad del alfabeto se hiciera una vez, en la lección de diseño, y todo lo demás fuera repetición.

Y el detalle sin excepción es el del medio: no existe sílaba coreana sin vocal en el medio. Nunca. Una sílaba es consonante inicial, vocal y, a veces, consonante final; la vocal es lo que queda, la parte que no puede faltar bajo ninguna circunstancia y el único elemento del bloque que carga con la pronunciación.

El contraste con el mandarín es lo que lo vuelve visible. En mandarín hay sílabas terminadas solo en consonante: ba, bei, un sonido que se corta de golpe, sin vocal alguna que lo sostenga. En coreano eso es imposible, y la imposibilidad es lo que hace la escritura regular. Una sílaba sin vocal tendría dos consonantes pegadas y ninguna indicación de dónde está la frontera de la sílaba; en coreano la vocal es siempre el corte, siempre el centro del bloque, y por eso cualquier lector encuentra la frontera sin esfuerzo. Un texto coreano se segmenta solo: es la vocal la que dice dónde termina cada sílaba.

## Simples y compuestas

Las vocales del coreano se dividen en dos grupos, y la división es sobre cuántos sonidos caben en un solo símbolo. Las simples tienen un solo sonido: a, eo, ya, yeo, o, yo, u. Las compuestas contraen dos sonidos en una vocal única, y por eso una sílaba coreana puede tener dos vocales en el mismo cuadrado sin dejar de tener una sola vocal.

Las compuestas más comunes son {ye}, {wa}, {we}, {wi}, {wo} y {yu}, y lo que el alumno tiene que guardar no es la lista, es el mecanismo: {ye} se escribe con el signo de la y seguido del signo de la e, y funciona como una vocal, no como dos. Un ejemplo basta para fijar: en {yeong} la {ye} del principio es la vocal del bloque, y el bloque entero vale una sílaba. Quien leyó el símbolo como dos vocales leyó dos sílabas, y la palabra salió el doble de larga. El error habitual del principiante no es errar el sonido, es contar mal la sílaba.

## La final cambia el sonido de la vocal

La superfinal de abajo es la parte que asusta y es la más informativa. Hay siete consonantes finales, k, l, m, p, t, n, ng, y no es un eco de la inicial ni un ruido cualquiera: va después de la vocal y cambia cómo suena la vocal. Compare {ga} y {gak}: es la misma g, es la misma vocal a, y aun así uno suena "ga" y el otro "gak". La diferencia es una letra abajo.

El ejemplo más instructivo es {i} frente a {in}. Solo, el bloque {i} suena "i". Con la final n abajo, el mismo bloque se vuelve {in} y suena "in". La vocal ya no es la misma: quien oye "in" no está oyendo una i con una letra más, está oyendo otra sílaba. Lo mismo vale con {u}: {u} suena "u" y {un} suena "un". Y vale en general: la final es la posición que cambia la pronunciación de la vocal.

Y aquí está el principio que ata el coreano al japonés: la consonante que queda DENTRO del bloque, la inicial, no altera el sonido de la vocal; la que queda abajo, la final, sí. Por eso el coreano distingue "in" de "i" como dos sonidos diferentes, y el japonés, cuya sílaba no tiene ninguna posición después de la vocal, no distingue nada después de ella. En una palabra como {guk} las tres posiciones están ocupadas: inicial, vocal, final, tres sonidos. En una palabra como {ga} solo hay dos posiciones ocupadas y la tercera está en blanco. La posición en blanco se permite; la vocal nunca.

## El nombre del sistema, y el texto que puso en la calle

El nombre coreano del sistema ya entrega el sistema entero. {hangul} es literalmente "letra coreana": el primer bloque significa coreano y el segundo significa letra, y letra en coreano es el carácter escrito, no el sonido. De ahí que la palabra estándar para "escrito en coreano" sea justamente {hangul}, el sustantivo coreano para el coreano escrito. El nombre de la lengua sigue la misma cuenta: {hangugeo} es "la lengua del país coreano", con {guk}, el país, en medio, el mismo {guk} que significa Estado y que hoy es la mitad del nombre del país. {hanja} es "carácter coreano", el mismo esquema con el carácter chino en lugar de la letra.

Y es aquí donde la elección de escritura se vuelve hecho histórico. La Biblia coreana, la traducción de 1917, se imprimió en hanja, con pronunciación coreana: legible para quien lee caracteres chinos e inútil para quien no lee. Los misioneros que la prepararon tuvieron que decidir si el texto, de principio a fin, se escribiría en hanja o en hangul, y eligieron hangul. La elección no fue estética: fue de acceso. Un texto bíblico escrito en un alfabeto puro lo lee quien habla coreano, sin años de caracteres chinos por delante, y eso fue la primera vez que un texto bíblico se imprimió en un sistema alfabético en una lengua de Asia. El mundo de hoy muestra dónde acertó la decisión: el hanja sobrevive en nombres propios y en palabras sabidas, y la Biblia coreana es hangul, con el hanja solo donde hace falta.

La segmentación del mandarín es exactamente el problema que el coreano no tiene. Allí la frontera de la sílaba hay que buscarla; aquí la entrega la vocal.
`),
  vocab: [
    V('guk', '국', 'país; Estado (guk) — es también la vocal u con final k'),
    V('ga', '가', 'inicial + vocal a, sin final: "ga"'),
    V('gak', '각', 'la misma g y la misma a con consonante final: "gak"'),
    V('i', '이', 'la vocal i sola: "i"'),
    V('in', '인', 'la misma vocal i con final n: suena "in", no "i"'),
    V('u', '우', 'la vocal u sola: "u"'),
    V('un', '운', 'la misma vocal u con final n: suena "un"'),
    V('bang', '방', 'final ng: la consonante final suena "ng" (bang)'),
    V('yeong', '영', 'vocal compuesta ye con final ng: "yeong"'),
    V('hangul', '한글', 'el alfabeto coreano; literalmente "letra coreana" (hangul)'),
    V(
      'hanja',
      '한자',
      'coreano escrito con caracteres chinos; literalmente "carácter coreano" (hanja)',
    ),
    V('hangugeo', '한국어', 'coreano; literalmente "la lengua del país coreano" (hangugeo)'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo bloque se escribe en el mismo orden: inicial opcional, vocal obligatoria, final opcional. No hay cuarta posición.',
      ),
    },
    {
      n: '2',
      text: T(
        'No existe sílaba coreana sin vocal. El mandarín sí las tiene — y por eso el mandarín necesita reglas de segmentación y el coreano no.',
      ),
    },
    {
      n: '3',
      text: T(
        'Las vocales compuestas {ye} {wa} {we} {wi} {wo} {yu} — {예} {와} {왜} {위} {워} {유} — contraen dos sonidos en una sola vocal: cuentan como una posición del bloque, no como dos.',
      ),
    },
    {
      n: '4',
      text: T(
        'La consonante final cambia el sonido de la vocal: {in} {인} no es {i} {이} con una letra más, es otra sílaba.',
      ),
    },
    {
      n: '5',
      text: T(
        'La inicial no altera el sonido de la vocal; la final sí. Por eso el coreano distingue "in" de "i" y el japonés no distingue nada después de la vocal.',
      ),
    },
  ],
  notes: [
    {
      label: T('El nombre del sistema es el sistema'),
      text: T(
        '{hangul} es literalmente "letra coreana" y {hanja} es "carácter coreano"; el nombre de la lengua, {hangugeo}, es "la lengua del país coreano", con {guk}, el país, en medio. La nomenclatura entrega el diseño: letra, carácter, país.',
      ),
    },
    {
      label: T('El texto bíblico se eligió en hangul'),
      text: T(
        'La traducción coreana de 1917 salió en hanja con pronunciación coreana, legible solo por quien lee caracteres chinos. Los misionarios decidieron escribir en hangul por acceso, no por estética: fue la primera vez que un texto bíblico se imprimió en un sistema alfabético en una lengua de Asia. Hoy el hanja aparece casi solo en nombres propios y palabras sabias.',
      ),
    },
  ],
  examples: [
    { text: '국', gloss: T('guk — "país": inicial, vocal y final, tres posiciones ocupadas') },
    { text: '가', gloss: T('ga — inicial y vocal: la posición de abajo está vacía') },
    {
      text: '각',
      gloss: T('gak — la misma g y la misma vocal que ga, con consonante final abajo'),
    },
    { text: '인', gloss: T('in — la vocal i de {i} con final n: suena "in", no "i"') },
    { text: '한글', gloss: T('han-gul — literalmente "letra coreana", el nombre del alfabeto') },
  ],
  tables: [
    {
      caption: T('La anatomía del bloque, leída de arriba abajo'),
      head: [
        T('Posición en el cuadrado'),
        T('Elemento'),
        T('Obligatorio'),
        T('Cuántas'),
        T('Sonidos típicos'),
        T('Símbolos'),
      ],
      rows: [
        [
          T('arriba a la izquierda'),
          T('consonante inicial'),
          T('no'),
          T('19 (10 simples, 11 compuestas)'),
          T('g, k, n, s, j'),
          T(
            '{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅅ} {ㅇ} {ㅈ} {ㅊ} {ㅋ} {ㅌ} {ㅍ} {ㅎ} {ㄲ} {ㄸ} {ㅃ} {ㅆ} {ㅉ}',
          ),
        ],
        [
          T('centro y derecha'),
          T('vocal'),
          T('sí, siempre'),
          T('7'),
          T('a, eo, ya, yeo, o, yo, u'),
          T('{ㅏ} {ㅑ} {ㅓ} {ㅕ} {ㅗ} {ㅛ} {ㅜ} {ㅠ} {ㅡ} {ㅣ}'),
        ],
        [
          T('abajo'),
          T('consonante final'),
          T('no'),
          T('7'),
          T('k, l, m, p, t, n, ng'),
          T('{ㄱ} {ㄴ} {ㄷ} {ㄹ} {ㅁ} {ㅂ} {ㅇ}'),
        ],
        [
          T('el cuadrado entero'),
          T('una sílaba'),
          T('es la unidad de lectura'),
          T('más de 10 mil combinaciones'),
          T('nunca dos sílabas'),
          T('{가} {국} {한}'),
        ],
      ],
    },
    {
      caption: T('La misma vocal, con y sin consonante final'),
      head: [T('Vocal'), T('Sin final'), T('Con final'), T('Qué cambia')],
      rows: [
        [T('a'), T('{ga} — "ga"'), T('{gak} — "gak"'), T('la vocal pasa a sonar "ak"')],
        [T('i'), T('{i} — "i"'), T('{in} — "in"'), T('la vocal pasa a sonar "in"')],
        [T('u'), T('{u} — "u"'), T('{un} — "un"'), T('la vocal pasa a sonar "un"')],
        [
          T('a, final ng'),
          T('{ga} — "ga"'),
          T('{bang} — "bang"'),
          T('la final ng cierra el sonido con "ng"'),
        ],
      ],
    },
    {
      caption: T('Vocales simples y vocales compuestas'),
      head: [T('Grupo'), T('Cuántas'), T('Sonidos por símbolo'), T('Ejemplos')],
      rows: [
        [T('simples'), T('7'), T('uno'), T('a, eo, ya, yeo, o, yo, u')],
        [
          T('compuestas'),
          T('varias, nombradas una a una'),
          T('dos contraídos en una sola vocal'),
          T('ye, wa, we, wi, wo, yu'),
        ],
        [
          T('consecuencia'),
          T('—'),
          T('una vocal compuesta sigue siendo una posición del bloque'),
          T('{yeong} vale una sílaba, no dos'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('{ga} suena "ga" y {gak} suena "gak". ¿Qué cambió exactamente de una a otra?'),
    options: [
      T('la consonante final de abajo cambió el sonido de la vocal'),
      T('la consonante inicial cambió de g a otra cosa'),
      T('la vocal desapareció y solo quedó la final'),
      T('la palabra pasó a tener dos sílabas'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe el bloque coreano que es la vocal i con la consonante final n: ____'),
      answer: '인',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el bloque con el sonido'),
      pairs: [
        { a: T('{ga}'), b: T('"ga": inicial y vocal, sin final') },
        { a: T('{gak}'), b: T('"gak": la misma g con consonante final') },
        { a: T('{i}'), b: T('"i": la vocal sola') },
        { a: T('{in}'), b: T('"in": la vocal i con final n') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas afirmaciones sobre el bloque coreano es verdadera?'),
      options: [
        T('la vocal es la única posición que nunca puede faltar'),
        T('hay sílabas terminadas solo en consonante'),
        T('la consonante final no altera el sonido de la vocal'),
        T('un cuadrado puede contener dos sílabas'),
      ],
      answer: 0,
    },
  ],
};

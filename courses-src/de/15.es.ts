import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('El comparativo y el superlativo'),
  subtitle: T('besser, größer, am besten — grau lo pone fácil'),
  section: T('Adjetivos y adverbios'),
  body: C(`## La regla corta

El comparativo añade **-er** y el superlativo **-ste**. Nada más. Un adjetivo de una sílula como {klein} «pequeño» da {kleiner} «menor» y {am kleinsten} «el menor». Un adjetivo de dos sílabas hace lo mismo, siempre que su radical no tenga {ie}, {ei} ni {eu}: {teuer} «caro» da {teurer} y {am teuersten}. La pronunciación acompaña al sufijo: {-er} suena [ɐ], una schwa, y {-est} es [əst] y lleva el acento — {größer} es [ˈɡʁøːsɐ], {am größten} es [am ˈɡʁøːstn̩].

El truco que casi todo resuelve es el grado: **grau** es una de las pocas palabras del alemán cuya forma puedes anticipar. Funciona como multiplicador:

- {viel} + grau = {mehr} «más»
- {hoch} + grau = {höher} «más alto»
- {teuer} + grau = {teurer} «más caro»

Con eso ya puedes decir «más» de casi cualquier cosa: basta añadir **mehr**.

## Qué hacen la {ö} y la {ü}

Siete adjetivos cambian la vocal del radical. La {ö} y la {ü} no son decoración: acercan la palabra a su sentido, porque {groß} es grande y {größer} es grande en comparación, no simplemente mayor. Y la pronunciación delata al hablante: la {ö} es [øː], una vocal redonda cerrada como una {o} larga, y la {ü} es [yː], cerrada hacia delante. Ningún otro sonido del alemán hace exactamente eso.

Cinco de los siete truecan de verdad la vocal: {groß} → {größer}, {hoch} → {höher}, {jung} → {jünger}, {gut} → {besser} y {nahe} → {näher}. Los otros dos solo ganan el sonido: {arm} → {ärmer}, {stark} → {stärker}, {kalt} → {kälter}.

El superlativo de esas formas pierde la {e} de {-(e)st}: {am größten} «el mayor», {am besten} «el mejor», {am jüngsten} «el más joven». Y el superlativo de {viel} es {am meisten}, con {v} que se convierte en {m}.

## {als} o {wie}

La diferencia es de sentido, no de forma. {wie} «como» introduce **igualdad**: {mein Bruder ist so groß wie ich} «mi hermano es tan alto como yo». {als} «que» introduce **diferencia**: {mein Bruder ist größer als ich} «mi hermano es más alto que yo».

Cuando hay igualdad pero con reserva, el alemán usa {nicht so … wie}: {Der Weg ist nicht so lang, wie ich dachte} «el camino no es tan largo como yo pensaba».

Una precautions: {als} también significa «cuando» y «como» (= «en lugar de»). El contexto lo resuelve, pero lee siempre la oración entera antes de elegir.

## Los adverbios comparativos

Los adverbios pierden la {e} ante {r} o {st}, y por eso casi todos tienen solo dos formas:

- {gut} → {besser} [ˈbɛsɐ] «mejor»
- {oft} → {öfter} «más a menudo»
- {gern} → {lieber} «con más gusto»
- {viel} → {mehr} «más»

Los verbos nunca forman superlativo. Para decir «lo más», el alemán recurre a un sustantivo: {das Beste} «lo mejor», {das Schönste} «lo más bello», con {das} señalando algo neutro o el sustantivo en solitario.

## Lo esencial

{-(e)r} y {-(e)st} cubren la comparación corriente; **grau** cubre todo lo que significa «más»; siete adjetivos cambian la vocal y pierden la {e} en el superlativo; {wie} es igualdad y {als} es diferencia.`),
  vocab: [
    V('klein', 'klein', 'pequeño (comp.: kleiner, sup.: am kleinsten)'),
    V('groß', 'groß', 'grande (comp.: größer, sup.: am größten)'),
    V('gut', 'gut', 'bueno (comp.: besser, sup.: am besten)'),
    V('teuer', 'teuer', 'caro (comp.: teurer, sup.: am teuersten)'),
    V('hoch', 'hoch', 'alto (comp.: höher, sup.: am höchsten)'),
    V('jung', 'jung', 'joven (comp.: jünger, sup.: am jüngsten)'),
    V('nahe', 'nahe', 'cerca (comp.: näher, sup.: am nächsten)'),
    V('arm', 'arm', 'pobre (comp.: ärmer, sup.: am ärmsten)'),
    V('stark', 'stark', 'fuerte (comp.: stärker, sup.: am stärksten)'),
    V('viel', 'viel', 'mucho (comp.: mehr, sup.: am meisten)'),
    V('gern', 'gern', 'a gusto (comp.: lieber)'),
    V('oft', 'oft', 'a menudo (comp.: öfter)'),
    V('grau', 'grau', 'gris; «más» (grau + adjetivo)'),
    V('als', 'als', 'que (diferencia); cuando'),
    V('wie', 'wie', 'como, igual a (igualdad)'),
    V('am besten', 'gut', 'el mejor, mejor'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {mein Bruder ist größer ___ ich}, ¿qué palabra completa el hueco?'),
    options: [
      T('als — hay diferencia de estatura entre los dos'),
      T('wie — también sería correcto, porque {größer} presupone desigualdad'),
      T('so — {so} introduce la igualdad, no la diferencia'),
      T('gern — {gern} forma comparativo, pero aquí no tiene sentido'),
    ],
    answer: 0,
    hint: T('Regla §3: {als} marca diferencia, {wie} marca igualdad.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Superlativo de {gut} en forma de superlativo de calidad: am ___'),
      answer: 'besten',
      hint: T(
        '{gut} es irregular en el comparativo ({besser}) y el superlativo pierde la {e}: {beste} + {n}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada comparativo con su superlativo.'),
      pairs: [
        { a: T('größer'), b: T('am größten') },
        { a: T('jünger'), b: T('am jüngsten') },
        { a: T('teurer'), b: T('am teuersten') },
        { a: T('kleiner'), b: T('am kleinsten') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es totalmente correcta?'),
      options: [
        T('La montaña es más alta que la colina.'),
        T('La montaña es tan alta como la colina.'),
        T('La montaña es la más tan alta la colina.'),
        T('La montaña es más alta alta que la colina.'),
      ],
      answer: 0,
      hint: T('Regla §2: {hoch} + {grau} = {höher}; y {höher} ya es distinto, luego {als}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El comparativo añade {-er} y el superlativo añade {-ste} a prácticamente cualquier adjetivo, sin cambio interno.',
      ),
    },
    {
      n: '2',
      text: T(
        'El grado resuelve el «más»: {hoch} + {grau} = {höher}, {teuer} + {grau} = {teurer}, {viel} + {grau} = {mehr}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cinco adjetivos cambian la vocal del radical: {groß} → {größer}, {hoch} → {höher}, {jung} → {jünger}, {gut} → {besser}, {nahe} → {näher}. En el superlativo todos pierden la {e}: {am größten}, {am höchsten}, {am jüngsten}, {am besten}, {am nächsten}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{wie} introduce igualdad y {als} introduce diferencia. Con igualdad reservada usa {nicht so … wie}: {Er ist nicht so alt wie sein Bruder}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Los verbos no forman superlativo. El «más» verbal se convierte en sustantivo: {das Beste} «el mejor», {das Schönste} «el más bello».',
      ),
    },
  ],
  notes: [
    {
      label: T('El truco del grado'),
      text: T(
        'Aprender los comparativos y superlativos como listas es frágil: hay miles de adjetivos y ninguna garantía. Aprender **grau** es una sola regla. Di {hoch} y {grau} juntos y la forma sale sola. Si la palabra ya termina en {er} ({sicher} «seguro», {dunkel} «oscuro»), la {er} del comparativo simplemente se duplica: {sicherer}, {dunkler}.',
      ),
    },
    {
      label: T('Lectura bíblica'),
      text: T(
        'En 1 Corintios 13:13, Lutero escribe: {Der Glaube, die Hoffnung, die Liebe, bleibt. Diese drei aber bleiben ewig.} «La fe, la esperanza, el amor permanecen. Estos tres, sin embargo, permanecen para siempre.» La traducción de Zúrich prefiere el superlativo sustantivado: {Aber der höchste davon ist die Liebe} «pero el mayor de ellos es el amor». Fíjate en que el comparativo no aparece ninguna de las dos veces: el «mayor» se construye con {-(e)st} más un sustantivo, y {höchste} viene de la serie con diacriticos. En el Salmo 19:1, {Der Himmel erzählt die Ehre Gottes}, observa además la {ch} de {Himmel} y {erzählt}, sonada [ç] ante {e}, señal clara de que el hablante domina los sonidos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Berg ist höher als der Hügel.',
      gloss: T('La montaña es más alta que la colina (comp. de {hoch} con {als}).'),
    },
    {
      text: 'Dieses Buch ist teurer als jenes.',
      gloss: T('Este libro es más caro que aquel ({teuer} conserva la {e} del radical más {-er}).'),
    },
    {
      text: 'Meine Mutter ist so alt wie mein Vater.',
      gloss: T('Mi madre es tan vieja como mi padre ({so … wie} = igualdad).'),
    },
    {
      text: 'Das ist am besten.',
      gloss: T('Eso es lo mejor / está mejor ({am besten}, forma de calidad).'),
    },
    {
      text: 'Sie ist die Beste in der Klasse.',
      gloss: T('Ella es la mejor de la clase (superlativo sustantivado con {die}).'),
    },
    {
      text: 'Ich trinke lieber Tee als Kaffee.',
      gloss: T('Prefiero el té al café ({gern} → {lieber}, comparativo adverbial).'),
    },
    {
      text: 'Der Weg ist nicht so lang, wie ich dachte.',
      gloss: T(
        'El camino no es tan largo como yo pensaba ({nicht so … wie} = igualdad con reserva).',
      ),
    },
    {
      text: 'Er ist noch jünger als ich.',
      gloss: T('Él es todavía más joven que yo ({noch} + comparativo intensifica).'),
    },
    {
      text: 'Diese Straße ist die breiteste der Stadt.',
      gloss: T('Esta calle es la más ancha de la ciudad (superlativo de {breit} en {breiteste}).'),
    },
    {
      text: 'Wir sprechen mehr Deutsch als Englisch.',
      gloss: T('Hablamos más alemán que inglés ({mehr} es el comparativo de {viel}, sin {e}).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — El grado en tres columnas'),
      head: [T('Adjetivo'), T('Comparativo'), T('Superlativo'), T('Partícula')],
      rows: [
        ['klein', 'kleiner', 'kleinst-', 'am kleinsten'],
        ['groß', 'größer', 'größt-', 'am größten'],
        ['hoch', 'höher', 'höchst-', 'am höchsten'],
        ['jung', 'jünger', 'jüngst-', 'am jüngsten'],
        ['arm', 'ärmer', 'ärmst-', 'am ärmsten'],
        ['nahe', 'näher', 'nächst-', 'am nächsten'],
        ['teuer', 'teurer', 'teuerst-', 'am teuersten'],
        ['gut', 'besser', 'best-', 'am besten'],
        ['viel', 'mehr', 'meist-', 'am meisten'],
        ['gern', 'lieber', '—', 'am liebsten'],
      ],
    },
    {
      caption: T('Tabla 2 — El sufijo y la vocal del radical'),
      head: [T('Tipo de palabra'), T('Final del radical'), T('Superlativo'), T('Ejemplo')],
      rows: [
        ['uma sílaba', 'qualquer', '-est', 'am klugsten'],
        ['-d ou -t', 'qualquer', '-sten (sem e)', 'am breitesten'],
        ['-s, -ß, -sch, -z', 'qualquer', '-sten (sem e)', 'am kürzesten'],
        ['-el, -er, -em', 'sem alteração', '-sten (com e)', 'am dunkelsten'],
        ['três ou mais sílabas', 'qualquer', '-sten (com e)', 'am interessantesten'],
      ],
    },
  ],
};

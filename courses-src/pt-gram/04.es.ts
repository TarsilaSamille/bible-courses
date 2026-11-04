import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  section: T('Las palabras y sus clases'),
  title: T('Pronombre, numeral y verbo'),
  subtitle: T('Sustitución, conteo y acción'),
  body: C(`**Visión general.** El {pronombre} sustituye al nombre y ocupa su función: en {todos viram}, {todos} vale por {todos los discípulos}, y el sujeto es {todos}, no {viram}.

**Regla 1.** El {numeral cardinal} indica cantidad ({três}) y el {ordinal} orden ({terceiro}): {três testemunhas} cuenta, {a terceira testemunha} ubica.

**Regla 2.** El {verbo} es el núcleo de la oración y flexiona en persona, número, tiempo y modo: en {Jesus chorou}, el verbo {chorou} está en tercera persona del singular.

**Regla 3.** Un {verbo transitivo} exige complemento ({amou os seus amigos}) y el {intransitivo} no ({Jesus chorou}); el {auxiliar} marca tiempo o voz, no sentido propio.

**Regla 4.** El griego prescinde del pronombre sujeto porque {la forma del verbo} ya dice quién actúa: en {ἐλθόντες} la persona está en la terminación, y el portugués a veces repite {eles}.

**Aplicación.** En {Jesus chorou, e todos viram}, el verbo {chorou} es {intransitivo} en el griego original (κλαίω no lleva objeto), y {viram} es {transitivo} implícito: solo el contexto dice qué vieron. Fíjate en el par {todos}/{viram}: el pronombre {todos} es sujeto de {viram}, y la forma verbal {viram} es la que lo marca plural. En griego, {πάντες} εἶδαν y {εἶδον} dicen lo mismo con formas distintas, y la elección depende de quién sea el sujeto.

**Verificación.** Cuatro preguntas resuelven la clase gramatical: ¿la palabra **concorda** con algo? Si concuerda, ¿nombra o caracteriza, y es sustantivo o adjetivo? Si no, ¿**modifica**, **sustituye**, **cuenta**, **liga** o **actúa**? Y el verbo, ¿es {transitivo}, {intransitivo}, {auxiliar} o de {enlace}? La pregunta de la concordancia elimina la mitad de las diez clases de una vez.`),
  vocab: [
    V('pronome', 'pronome', 'pronombre'),
    V('numeral cardinal', 'numeral cardinal', 'numeral cardinal'),
    V('numeral ordinal', 'numeral ordinal', 'numeral ordinal'),
    V('verbo', 'verbo', 'verbo'),
    V('pessoal', 'pessoal', 'pronombre personal'),
    V('possessivo', 'possessivo', 'pronombre posesivo'),
    V('demonstrativo', 'demonstrativo', 'pronombre demostrativo'),
    V('relativo', 'relativo', 'pronombre relativo'),
    V('todos', 'todos', 'pronombre que sustituye al nombre'),
    V('chorou', 'chorou', 'verbo intransitivo en griego'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {pronombre} sustituye al nombre y ocupa su función: en {todos viram}, {todos} vale por {todos los discípulos}, y el sujeto es {todos}, no {viram}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {numeral cardinal} indica cantidad ({três}) y el {ordinal} orden ({terceiro}): {três testemunhas} cuenta, {a terceira testemunha} ubica.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {verbo} es el núcleo de la oración y flexiona en persona, número, tiempo y modo: en {Jesus chorou}, el verbo {chorou} está en tercera persona del singular.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Un {verbo transitivo} exige complemento ({amou os seus amigos}) y el {intransitivo} no ({Jesus chorou}); el {auxiliar} marca tiempo o voz, no sentido propio.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego prescinde del pronombre sujeto porque {la forma del verbo} ya dice quién actúa: en {ἐλθόντες} la persona está en la terminación, y el portugués a veces repite {eles}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El pronombre que el griego no escribe'),
      text: T(
        'El griego antiguo casi nunca escribe pronombre sujeto: {ἐλθόντες} significa {ellos vinieron} porque la terminación {-οντες} ya trae la persona. El portugués suele necesitar el pronombre explícito, y por eso las traducciones bíblicas del griego traen pronombres que el griego no tiene. Traducir lo que el griego marca en la forma sería borrar la información.',
      ),
    },
    {
      label: T('Contar y ubicar'),
      text: T(
        '{um}, {dois}, {três} cuentan y {primeiro}, {segundo}, {terceiro} ubican. Un ordinal lleva casi siempre artículo, porque necesita un nombre en que apoyarse: {o terceiro dia}. Un cardinal puede ir solo, como en {três contra ele}, donde el sustantivo queda en singular y el numeral hace sus veces.',
      ),
    },
  ],
  examples: [
    {
      text: 'Jesus chorou, e todos viram.',
      gloss: T(
        '{chorou} es intransitivo y {viram} transitivo implícito; {todos} es sujeto elíptico de {viram}.',
      ),
    },
    {
      text: 'três testemunhas',
      gloss: T(
        'Numeral cardinal {três} con sustantivo en plural: el numeral concuerda con el nombre.',
      ),
    },
    {
      text: 'a terceira testemunha',
      gloss: T(
        'Numeral ordinal {terceiro} con artículo {a}: el ordinal necesita el nombre en que apoyarse.',
      ),
    },
    {
      text: 'Deus amou o mundo',
      gloss: T(
        'Verbo {amou} transitivo directo, con objeto {o mundo}; el sujeto {Deus} va pospuesto.',
      ),
    },
    {
      text: 'ele mesmo',
      gloss: T('Pronombre {ele} en forma enfática, con {mesmo} funcionando como predicativo.'),
    },
    {
      text: 'os seus amigos',
      gloss: T('Pronombre {seus} posesivo concordando con {amigos} en género y número.'),
    },
    {
      text: 'este é o meu Filho',
      gloss: T('Dos apariciones de {ser} y dos pronombres: {este} demostrativo, {meu} posesivo.'),
    },
    {
      text: 'havia muitos',
      gloss: T(
        '{havia} es verbo auxiliar y {muitos} cuantifica el sujeto elíptico, que es {gente}.',
      ),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('{Verbo} sustantivo propio en mayúscula; {se} pronombre reflexivo de {fez}.'),
    },
  ],
  tables: [
    {
      caption: T('Pronombres personales'),
      head: [T('Pessoa'), T('Reto'), T('Oblíquo'), T('Reflexivo')],
      rows: [
        [T('1.ª'), T('{eu}'), T('{me}'), T('{me}')],
        [T('2.ª'), T('{tu}'), T('{te}'), T('{te}')],
        [T('3.ª'), T('{ele}'), T('{o}, {lhe}'), T('{se}')],
        [T('1.ª plural'), T('{nós}'), T('{nos}'), T('{nos}')],
        [T('2.ª plural'), T('{vós}'), T('{vos}'), T('{vos}')],
        [T('3.ª plural'), T('{eles}'), T('{os}, {lhes}'), T('{se}')],
      ],
    },
    {
      caption: T('Numeral cardinal y ordinal'),
      head: [T('Número'), T('Cardinal'), T('Ordinal')],
      rows: [
        [T('1'), T('{um}'), T('{primeiro}')],
        [T('2'), T('{dois}'), T('{segundo}')],
        [T('3'), T('{três}'), T('{terceiro}')],
        [T('4'), T('{quatro}'), T('{quarto}')],
        [T('10'), T('{dez}'), T('{décimo}')],
      ],
    },
    {
      caption: T('El verbo por su flexión'),
      head: [T('Tempo'), T('Forma'), T('Pessoa e número')],
      rows: [
        [T('presente'), T('{ama}'), T('3.ª do singular')],
        [T('pretérito'), T('{amou}'), T('3.ª do singular')],
        [T('futuro'), T('{amará}'), T('3.ª do singular')],
        [T('presente'), T('{amamos}'), T('1.ª do plural')],
        [T('pretérito'), T('{amastes}'), T('2.ª do plural')],
        [T('infinitivo'), T('{amar}'), T('não flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {três testemunhas}, el numeral {três} es:'),
    options: [
      T('cardinal, porque indica cantidad'),
      T('ordinal, porque va antes del nombre'),
      T('pronombre, porque sustituye al nombre'),
      T('adjetivo, porque caracteriza al nombre'),
    ],
    answer: 0,
    hint: T('Si dice cuántos son, es cardinal; si dice qué posición, es ordinal.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué verbo es {intransitivo}?'),
      options: [T('{chorou}'), T('{amou}'), T('{viu}'), T('{ouviu}')],
      answer: 0,
      hint: T('Pregunta qué completa el verbo: si nada, es intransitivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada pronombre con la función que ejerce.'),
      pairs: [
        { a: T('{todos}'), b: T('sujeto elíptico') },
        { a: T('{me}'), b: T('objeto indirecto') },
        { a: T('{se}'), b: T('pronombre reflexivo') },
        { a: T('{os}'), b: T('artículo definido') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('En {Jesus chorou}, el verbo {chorou} está en la ______ persona del singular.'),
      answer: 'terceira',
      hint: T('La forma {chorou} termina en {-ou}, la terminación de la tercera persona.'),
    },
  ],
};

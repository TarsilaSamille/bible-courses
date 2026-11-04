import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('La ortografía y los acentos'),
  subtitle: T('agudas, graves, esdrújulas — dónde cae el acento'),
  section: T('El español'),
  body: C(`## Tres clases de palabras

El español solo necesita tres clases, y la clase decide si el acento se escribe:

**Agudas** (última sílaba tónica): {casa}, {libro}, {papel}, {Dios}, {Jesús}.
**Graves** (penúltima sílaba tónica): {cantar}, {luz}, {vivir}, {árbol} «árbol».
**Esdrújulas** (antepenúltima sílaba tónica): {música}, {teléfono}, {página}, {rápido}.

## La regla de oro

Palabra terminada en **vocal, {n} o {s}** es **grave** y NO lleva acento: {casa}, {libro}, {hablan}, {valientes}.
Palabra terminada en **cualquier otra consonante** es **aguda** y NO lleva acento: {hablar}, {luz}, {papel}, {fiel}.

El acento escrito aparece **solo para romper la regla**:
• {habló} «habló», {cantó} «cantó» — agudas terminadas en vocal (rompen §1).
• {lápiz}, {útil} — graves terminadas en consonante (rompen §2).
• {música}, {teléfono}, {rápido} — esdrújulas: **siempre** con acento.

## Casos que engañan

• {Nicolás}, {Jesús}, {Papá} — los nombres propios terminados en -s, -n o vocal acentuada siguen siendo agudos y **sí** llevan acento, aunque la regla general no lo pida.
• {María}, {río}, {día} — vocales adyacentes que **no** forman diptongo: cuenta cada una, la palabra es esdrújula y el acento es obligatorio.
• {tú}, {él}, {sí}, {más}, {mí} — acentos **diacríticos**: el acento no marca solo el sonido, marca el **significado**.
• {solo} frente a {sólo} — la RAE abolió la distinción; hoy siempre {solo}, sin acento.

## Acento gráfico: interrogación y exclamación

Toda pregunta y exclamación lleva acento (la RAE escribe también el trazo con los puntos, salvo el punto final): {¿Dónde está Dios?} · {¡Santo sea!} · {¿Cuánto tiempo?}

Ej.: {¿Hablas español?} «¿Hablas español?» — lectura bíblica: {¿Qué es la verdad?} (Jn 18.38).`),
  vocab: [
    V('habló', 'hablar', 'habló (¡aguda!)'),
    V('lápiz', 'lápiz', 'lápiz'),
    V('él', 'él', 'él (¡frente a el, artículo!)'),
    V('tú', 'tú', 'tú (¡frente a tu, posesivo!)'),
    V('Jesús', 'Jesús', 'Jesús (¡aguda en s!)'),
    V('música', 'música', 'música (¡esdrújula!)'),
    V('árbol', 'árbol', 'árbol (¡grave rota!)'),
    V('cuánto', 'cuánto', 'cuánto (¡interrogativo!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «habló» lleva acento?'),
    options: [
      T('Porque es aguda terminada en vocal (¡rompe la regla!)'),
      T('Siempre se acentúan los verbos'),
      T('Es plural'),
      T('Por casualidad'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Palabra esdrújula («música»): ¿lleva acento? Escribe siempre o nunca.'),
      answer: 'siempre',
      hint: T('Regla §2, tercer apartado.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué par cambia solo de SIGNIFICADO con el acento?'),
      options: [T('hablar / hablaré'), T('tú / tu'), T('casa / casas'), T('papel / papeles')],
      answer: 1,
      hint: T('Acento diacrítico (§3).'),
    },
    {
      kind: 'fill',
      prompt: T('¿Cuál de las dos se escribe hoy sin acento: solo o sólo?'),
      answer: 'solo',
      hint: T('La RAE abolió la distinción.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Final en vocal/N/S = grave sin acento (casa, hablan); otra consonante = aguda sin acento (hablar, luz).',
      ),
    },
    {
      n: '2',
      text: T(
        'Acento solo al romper la regla: habló (¡aguda en vocal!), lápiz, música (¡esdrújulas siempre!).',
      ),
    },
    {
      n: '3',
      text: T(
        'El acento diacrítico cambia el sentido: el (artículo) frente a él; tu frente a tú; mi frente a mí; si frente a sí.',
      ),
    },
    {
      n: '4',
      text: T(
        'Preguntas y exclamaciones siempre con ¿...? e ¡...! (la RAE también con los puntos).',
      ),
    },
  ],
  notes: [
    {
      label: T('Europeo × americano:'),
      text: T(
        'La acentuación y la ortografía son prácticamente iguales en ambos mundos. Diferencias reales: {vosotros} (solo en España, {ustedes} en América), {vale} «ok», {ordenador} frente a {computadora}, {coche} frente a {carro}. La acentuación del texto bíblico (Reina-Valera) sigue la norma castellana, compartida por ambas Américas.',
      ),
    },
  ],
  examples: [
    { text: '{habló}', gloss: T('Habló (¡aguda en vocal!).') },
    { text: '{él}', gloss: T('Él (¡frente a el, artículo!).') },
    { text: '{Jesús}', gloss: T('Jesús (¡aguda en -s!).') },
    { text: '{música}', gloss: T('Música (esdrújula: ¡acento obligatorio!).') },
    {
      text: '¿Qué es la verdad?}',
      gloss: T('¿Qué es la verdad? (Jn 18.38 — ¡interrogativa con acento gráfico!)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Clase × acento'),
      head: [T('Terminación'), T('Clase natural'), T('Ejemplo (sin acento)'), T('Rompe la regla')],
      rows: [
        [T('vocal'), T('grave'), T('{casa}, {libro}'), T('{habló}, {canción}')],
        [T('-n'), T('grave'), T('{cantan}, {pan}'), T('{cantón}, {Jesús}')],
        [T('-s'), T('grave'), T('{valientes}, {libros}'), T('{papás}, {días}')],
        [T('otra consonante'), T('aguda'), T('{hablar}, {papel}'), T('{útil}, {lápiz}')],
        [T('3+ sílabas, tónica en la 3.ª'), T('esdrújula'), T('—'), T('{música}, {teléfono}')],
      ],
    },
    {
      caption: T('Tabla 2 — Homófonos que el acento separa'),
      head: [T('Con acento'), T('Sentido'), T('Sin acento'), T('Sentido')],
      rows: [
        ['{él}', T('él'), '{el}', T('el (artículo)')],
        ['{tú}', T('tú'), '{tu}', T('tu (posesivo)')],
        ['{sí}', T('sí'), '{si}', T('si')],
        ['{mí}', T('mí'), '{mi}', T('mi')],
        ['{este}', T('este (dem.)'), '{este}', T('este (indef.)')],
      ],
    },
  ],
};

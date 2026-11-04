import { C, T, V } from '../shared.mts';

export default {
  id: 17,
  title: T('El imperfecto'),
  subtitle: T('hablaba — escenario, hábito, descripción'),
  section: T('Los verbos'),
  body: C(`## El escenario

El imperfecto describe el **fondo**: estado, hábito, descripción, acción en curso que sirve de telón para un evento. Solo hay tres terminaciones: {-aba} para {-ar}, {-ía} para {-er} e {-ir}.

{hablaba}, {hablabas}, {hablaba}, {hablábamos}, {hablabais}, {hablaban} · {comía} · {vivía}.

## Solo tres irregulares

{ser} → {era} · {ir} → {iba} · {ver} → {veía}. Todo lo demás es regular.

## Cuatro usos

1. **Descripción**: {Era ciego} «era ciego» (Jn 9.25) — el estado previo.
2. **Hábito**: {Orábamos juntos} «orábamos juntos» — acción repetida en el pasado.
3. **Acción en curso (fondo)**: {Mientras oraba, vino} «mientras oraba, vino» — el pretérito {vino} es el evento que corta la escena.
4. **Atmósfera**: {era de noche} «era de noche» (Jn 13.30).

## El par que revela el sentido

{Mientras oraba, vino} — el imperfecto pone a Adán orando en el centro, y el pretérito anuncia la llegada. El mismo contraste explica {Leyó mientras escribía} «leyó mientras escribía»: los dos verbos occuren en la misma escena, pero el foco lo lleva {vino}.

## Progresiva pasada

{estar} en imperfecto + gerundio: {estaba orando} «estaba orando» · {estaban durmiendo} «estaban durmiendo».

## Europa × América

El imperfecto es idéntico en ambos mundos. Lo que cambia es la **prosodia**: el español de América suele bajar el volumen en las enumeraciones, mientras España mantiene un ritmo más uniforme en la lectura bíblica pública.`),
  vocab: [
    V('hablaba', 'hablar', 'hablaba'),
    V('era', 'ser', 'era (¡irregular!)'),
    V('iba', 'ir', 'iba (¡irregular!)'),
    V('veía', 'ver', 'veía (¡irregular!)'),
    V('mientras', 'mientras', 'mientras'),
    V('estaba orando', 'orar', 'estaba orando'),
    V('era de noche', 'noche', 'era de noche (Jn 13.30)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuáles son los 3 irregulares del imperfecto?'),
    options: [
      T('ser, ir, ver (era, iba, veía)'),
      T('ser, estar, haber'),
      T('dar, ver, saber'),
      T('Ninguno (todo regular)'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperfecto de «ir» (3.ª persona): ___ (iba)'),
      answer: 'iba',
      hint: T('Regla §2: solo tres irregulares.'),
    },
    {
      kind: 'choose',
      prompt: T('En «Mientras oraba, vino», ¿qué verbo es el EVENTO?'),
      options: [T('{oraba} (imperfecto)'), T('{vino} (pretérito)'), T('{mientras}'), T('Los dos')],
      answer: 1,
      hint: T('Regla §3: el pretérito corta la escena.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el uso con el ejemplo'),
      pairs: [
        { a: T('descripción'), b: T('{Era ciego}') },
        { a: T('hábito'), b: T('{Orábamos juntos}') },
        { a: T('progresiva'), b: T('{estaba orando}') },
        { a: T('atmósfera'), b: T('{era de noche}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Solo tres terminaciones: -aba, -ía.') },
    { n: '2', text: T('Solo tres irregulares: ser→era, ir→iba, ver→veía.') },
    { n: '3', text: T('Imperfecto = fondo, pretérito = evento: Mientras oraba, vino.') },
    { n: '4', text: T('Estar en imperfecto + gerundio = progresiva pasada: estaba orando.') },
  ],
  notes: [
    {
      label: T('El imperfecto en tres funciones'),
      text: T(
        'El mismo tiempo pinta escenario, hábito y estado. {Llovía} puede ser «llovía» (lluvia en curso) o «llovía» (costumbraba llover): lo que cambia es el entorno, no la forma.',
      ),
    },
  ],
  examples: [
    {
      text: '{Mientras oraba, vino}',
      gloss: T('Mientras oraba, vino (Gn 3.9 — fondo frente a evento).'),
    },
    { text: '{era de noche}', gloss: T('Era de noche (Jn 13.30 — atmósfera).') },
    { text: '{estaba orando}', gloss: T('Estaba orando (progresiva pasada).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Imperfecto × pretérito'),
      head: [T('Pretérito (evento)'), T('Imperfecto (fondo)'), T('Significado')],
      rows: [
        ['{Vino}', '{oraba}', T('vino mientras oraba')],
        ['{Leyó}', '{escribía}', T('leyó mientras escribía')],
        ['{Habló}', '{era niño}', T('habló (era niño)')],
        ['{Murió}', '{vivía en Galilea}', T('murió (vivía en Galilea)')],
      ],
    },
    {
      caption: T('Tabla 2 — Imperfecto: usos y ejemplos'),
      head: [T('Uso'), T('Ejemplo'), T('Referencia')],
      rows: [
        ['descrição', '{Era ciego}', 'Jo 9.25'],
        ['hábito', '{Orábamos juntos}', '1 Ts 5.17'],
        ['fundo em curso', '{Mientras oraba, vino}', 'Gn 3.9'],
        ['atmosfera', '{era de noche}', 'Jn 13.30'],
        ['idade', '{Jesús tenía treinta años}', 'Lc 3.23'],
      ],
    },
  ],
};

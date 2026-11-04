import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Los adverbios'),
  subtitle: T('-mente, muy/mucho, bien/mal'),
  section: T('Adjetivos y adverbios'),
  body: C(`## Adverbios en {-mente}

Muchos adverbios se forman sobre el **femenino** del adjetivo + {-mente}: {claro} → {claramente} · {rápido} → {rápidamente} · {triste} → {tristemente} · {fiel} → {fielmente} «fielmente».

La pronunciación conserva **dos acentos**: {CLARAmente} — el acento del adjetivo se mantiene, y {mente} carga con el suyo. Por eso, cuando la sílaba tónica cae en la antepenúltima, la palabra muestra dos: {claramente}.

Los adverbios cortos son **irregulares**: {bien} «bien» · {mal} «mal» · {mucho} · {poco} · {bastante} · {demasiado} — ninguno admite {-mente}.

## {muy} frente a {mucho}

• {muy} + adjetivo o adverbio: {muy bueno} «muy bueno» · {muy lejos} «muy lejos».
• {mucho} solo (con {ser}/{estar}) o + sustantivo: {mucho amor} «mucho amor» · {muchas gracias} «muchas gracias» · {Es mucho} «es mucho».

{mucho} con verbo de acción es incorrecto: di {Trabaja mucho}, nunca «*Trabaja muy».

## Adverbios esenciales

• {bien} frente a {mal}: {Lo hizo bien} «lo hizo bien».
• {así} «así»: {Así sea} «así sea».
• {siempre} «siempre» · {nunca} «nunca» · {jamás} «jamás» (más fuerte) · {a veces} «a veces» · {a menudo} «a menudo».
• {ya} «ya» frente a {todavía no} «todavía no».
• {más} «más» (también sustantivo: {el más} «el más»).
• {bastante} «bastante» — adverbio y adjetivo a la vez.

Ej.: {Orad sin cesar} «orad sin cesar» (1 Ts 5.17 — ¡{sin} + infinitivo!).`),
  vocab: [
    V('claramente', 'claro', 'claramente (¡-mente!)'),
    V('muy bueno', 'bueno', 'muy bueno (¡muy!)'),
    V('mucho amor', 'amor', 'mucho amor (¡mucho!)'),
    V('Así sea', 'así', 'así sea (¡amén!)'),
    V('siempre', 'siempre', 'siempre'),
    V('trabaja mucho', 'trabajar', 'trabaja mucho (¡nunca muy!)'),
    V('sin cesar', 'cesar', 'sin cesar (1 Ts 5.17)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('«muy» frente a «mucho»?'),
    options: [
      T('Iguales'),
      T('muy + adjetivo («muy bueno»); mucho solo/sustantivo («mucho amor»)'),
      T('Lo contrario'),
      T('Error'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el adverbio de «triste»: ___ (tristemente)'),
      answer: 'tristemente',
      hint: T('Femenino del adjetivo + -mente.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es correcta?'),
      options: [T('Trabaja muy'), T('Trabaja mucho'), T('Es mucho bueno'), T('Muy trabaja')],
      answer: 1,
      hint: T('Regla §2: mucho + verbo de acción = mucho.'),
    },
    {
      kind: 'fill',
      prompt: T('¿Qué adverbio irregular significa «muy poco»?'),
      answer: 'poco',
      hint: T('Irregular frente a -mente: poco, bien, mal, mucho.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Los adverbios en -mente vienen del femenino y conservan DOS acentos: CLARAmente.'),
    },
    { n: '2', text: T('muy + adjetivo (muy bueno); mucho solo o + sustantivo (mucho amor).') },
    { n: '3', text: T('mucho, poco, bien, mal, bastante, demasiado nunca reciben -mente.') },
  ],
  notes: [
    {
      label: T('El adverbio es invariable'),
      text: T(
        'Los adverbios no varían en género ni número: {mujeres felices} sigue igual. La flexión que ves en {la feliz} es del sustantivo, nunca del adverbio.',
      ),
    },
  ],
  examples: [
    { text: '{claramente}', gloss: T('Claramente (¡dos sílabas tónicas!).') },
    { text: '{mucho amor}', gloss: T('Mucho amor.') },
    { text: '{Así sea}', gloss: T('Así sea (¡amén!).') },
    { text: '{sin cesar}', gloss: T('Sin cesar (1 Ts 5.17).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Adverbios irregulares'),
      head: [T('Adjetivo'), T('Adverbio regular'), T('Adverbio irregular')],
      rows: [
        ['{claro}', '{claramente}', '—'],
        ['{bueno}', '{buenamente}', '{bien}'],
        ['{malo}', '{malamente}', '{mal}'],
        ['{mucho}', '—', '{mucho}'],
        ['{poco}', '—', '{poco}'],
        ['{bastante}', '—', '{bastante}'],
      ],
    },
    {
      caption: T('Tabla 2 — muy frente a mucho'),
      head: [T('Palabra'), T('Se usa con'), T('Ejemplo')],
      rows: [
        ['{muy}', 'adjetivo / advérbio', '{muy bueno}'],
        ['{muy}', 'substantivo (ERRO)', '{muy amor}'],
        ['{mucho}', 'sozinho (ser/estar)', '{Es mucho}'],
        ['{mucho}', 'substantivo', '{mucho amor}'],
        ['{mucho}', 'verbo de ação', '{Trabaja mucho}'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('El futuro y el condicional'),
  subtitle: T('hablaré, hablaría — ¡el infinitivo entero!'),
  section: T('Los verbos'),
  body: C(`## Gemelos formados con el infinitivo entero

Futuro y condicional se construyen con el **infinitivo completo** más las terminaciones {-é, -ás, -á, -emos, -éis, -án} y {-ía, -ías, -ía, -íamos, -íais, -ían}. No cambia nada en medio: es la forma más regular de la lengua.

{hablar} → {hablaré}, {hablarás}, {hablará}, {hablaremos}, {hablaréis}, {hablarán}.
{hablar} → {hablaría}, {hablarías}, {hablaría}, {hablaríamos}, {hablaríais}, {hablarían}.

## Los irregulares

Los irregulares usan el **mismo radical** en los dos tiempos, y eso hace el par inseparable: {tendré}/{tendría} · {podré}/{podría} · {diré}/{diría} · {haré}/{haría} · {vendré}/{vendría} · {sabré}/{sabría} · {saldré}/{saldría} · {valdrá}/{valdría}.

Los verbos regulares siguen regulares: {comer} → {comeré}/{comería}, {vivir} → {viviré}/{viviría}.

## Futuro: lo que está escrito

El futuro simple se usa también para:

• **Hecho probable** (≈ 90% de certeza): {Serán las tres} «serán las tres».
• **Hipótesis de presente**: {¿Dónde estará?} «¿dónde estará?»
• **Futuro próximo**: {voy a venir} «voy a venir» (presente + {a} + infinitivo).

## Condicional: deseo y cortesía

• {me gustaría} «me gustaría»
• {¿Podrías?} «¿podrías?» (petición educada)
• {Deberías orar} «deberías orar»
• **Condición**: {si tuviera tiempo, lo haría} «si tuviera tiempo, lo haría» (imperfecto + condicional).

Bíblico: {vendrá} «vendrá» (Mt 24.30) · {todo ojo le verá} «todo ojo le verá» (Ap 1.7) · {será grande} «será grande» (Lc 1.32).

## Europa × América

No hay diferencia: el futuro y el condicional se forman igual en ambos mundos. Donde sí se diferencian es en el condicional de cortesía: en América se usa más {¿Podrías?}, mientras en España es igualmente común {¿Podrías?} o {¿Te importaría?}.`),
  vocab: [
    V('hablaré', 'hablar', 'hablaré'),
    V('hablaría', 'hablar', 'hablaría'),
    V('tendré', 'tener', 'tendré'),
    V('vendrá', 'venir', 'vendrá'),
    V('gustaría', 'gustar', 'me gustaría'),
    V('verá', 'ver', 'verá'),
    V('será grande', 'ser', 'será grande (Lc 1.32)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa Ap 1.7: «todo ojo le ___» (verá)'),
    answer: 'verá',
    hint: T('Futuro regular de «ver».'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Condicional de «tener» (yo): ___ (tendría)'),
      answer: 'tendría',
      hint: T('Regla §2: el mismo radical del futuro (tendré).'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es una petición educada?'),
      options: [
        T('Hablaré mañana'),
        T('¿Podrías ayudarme?'),
        T('Quiero que vengas'),
        T('Vendrá pronto'),
      ],
      answer: 1,
      hint: T('Regla §5: condicional = cortesía.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su par futuro/condicional'),
      pairs: [
        { a: T('{poder}'), b: T('{podré} / {podría}') },
        { a: T('{decir}'), b: T('{diré} / {diría}') },
        { a: T('{venir}'), b: T('{vendré} / {vendría}') },
        { a: T('{hablar}'), b: T('{hablaré} / {hablaría}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Futuro y condicional usan el infinitivo entero; nada cambia dentro de la palabra.'),
    },
    {
      n: '2',
      text: T('Los irregulares comparten radical: tendré/tendría, podré/podría, diré/diría.'),
    },
    {
      n: '3',
      text: T('El futuro también expresa probabilidad e hipótesis presente: Serán las tres.'),
    },
    { n: '4', text: T('El futuro próximo es presente + a + infinitivo: voy a venir.') },
    { n: '5', text: T('Condicional = deseo y cortesía: me gustaría, ¿Podrías?') },
  ],
  notes: [
    {
      label: T('El futuro es opcional'),
      text: T(
        '{Hablar} y {hablaré} dicen lo mismo. El futuro importa cuando quieres marcar decisión, predicción o distancia: {veniré mañana} es más enfático que {vendré}.',
      ),
    },
  ],
  examples: [
    { text: '{vendrá}', gloss: T('Vendrá (Mt 24.30).') },
    { text: '{todo ojo le verá}', gloss: T('Todo ojo le verá (Ap 1.7).') },
    { text: '{me gustaría}', gloss: T('Me gustaría (condicional de deseo).') },
    { text: '{será grande}', gloss: T('Será grande (Lc 1.32).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Futuro y condicional'),
      head: [T('Persona'), T('Futuro (hablar)'), T('Condicional (hablar)')],
      rows: [
        ['yo', '{hablaré}', '{hablaría}'],
        ['tú', '{hablarás}', '{hablarías}'],
        ['él/ella/usted', '{hablará}', '{hablaría}'],
        ['nosotros', '{hablaremos}', '{hablaríamos}'],
        ['vosotros', '{hablaréis}', '{hablaríais}'],
        ['ellos/ustedes', '{hablarán}', '{hablarían}'],
      ],
    },
    {
      caption: T('Tabla 2 — Pares irregulares'),
      head: [T('Infinitivo'), T('Futuro'), T('Condicional')],
      rows: [
        ['{tener}', '{tendré}', '{tendría}'],
        ['{poder}', '{podré}', '{podría}'],
        ['{decir}', '{diré}', '{diría}'],
        ['{hacer}', '{haré}', '{haría}'],
        ['{venir}', '{vendré}', '{vendría}'],
        ['{saber}', '{sabré}', '{sabría}'],
        ['{salir}', '{saldré}', '{saldría}'],
        ['{valer}', '{valdrá}', '{valdría}'],
        ['{comer}', '{comeré}', '{comería}'],
      ],
    },
  ],
};

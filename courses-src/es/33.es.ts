import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Los numerales ordinales'),
  subtitle: T('primero–décimo — reyes, días y capítulos'),
  section: T('Los numerales'),
  body: C(`## Solo hasta {décimo}

El español tiene ordinales propios solo hasta el **10**: {primero} · {segundo} · {tercero} · {cuarto} · {quinto} · {sexto} · {séptimo} · {octavo} · {noveno} · {décimo} «décimo». Después se usa el cardinal: {el capítulo once} «el capítulo once» · {el siglo veinte} «el siglo veinte».

Excepción histórica: {el siglo XIII} «el siglo XIII» (los ordinales en cifras romanas sobrevivieron para los siglos y los reyes).

## Concordancia y apocopla

Los ordinales concuerdan en género y número: {primera} «primera» · {segundas} · {terceros} · {cuartas}.

Solo {primero} y {tercero} hacen apocopla ante masculino singular: {primer día} «el primer día» (Gn 1.5) · {tercer día} «el tercer día» (1 Co 15.4) · {el primer apóstol} · {el tercer mandamiento}.

## Fórmulas fijas

• {en primer lugar} «en primer lugar» (apocopla obligatoria).
• {por primera vez} «por primera vez» (sin apocopla, porque {vez} es femenino).
• {Felipe II} = {Felipe segundo} «Felipe segundo» — reyes y papas usan ordinales en minúscula; el número romano va en mayúscula y abreviado.

## Ordinal frente a cardinal en la práctica

No uses un ordinal donde el portugués usa un cardinal:

• {el primero de enero} «el primero de enero».
• Página: {página doce} «página doce» (no «duodécima»).

Sí usa ordinales para: días de la semana ({el tercer día}), siglos ({el siglo primero}), posiciones ({llegó segundo}).

Ej.: {En el primer día de la semana} «en el primer día de la semana» (Jn 1.1, en su contexto pascual).`),
  vocab: [
    V('primero', 'primero', 'primero'),
    V('primer día', 'primero', 'primer día (¡apocopla!)'),
    V('tercer día', 'tercero', 'tercer día (¡apocopla!)'),
    V('décimo', 'décimo', 'décimo (¡después, cardinales!)'),
    V('primera vez', 'primero', 'primera vez (¡sin apocopla!)'),
    V('en primer lugar', 'primero', 'en primer lugar'),
    V('el tercer mandamiento', 'tercero', 'el tercer mandamiento'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «el ___ día» (el primer día)'),
    answer: 'primer',
    hint: T('Apocopla de «primero» ante masculino.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «al ___ día» (al tercer día, 1 Co 15.4)'),
      answer: 'tercer',
      hint: T('Apocopla de «tercero» ante masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cómo se dice «el capítulo 15»?'),
      options: [
        T('{el capítulo quince}'),
        T('{el capítulo XV}'),
        T('{el capítulo décimoquinto}'),
        T('{el quince capítulo}'),
      ],
      answer: 0,
      hint: T('Regla §1: después del 10.º, se usa el cardinal.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la forma plena con la apocopada'),
      pairs: [
        { a: T('{primero}'), b: T('{primer}') },
        { a: T('{tercero}'), b: T('{tercer}') },
        { a: T('{cuarto}'), b: T('{cuarto} (¡sin apocopla!)') },
        { a: T('{décimo}'), b: T('{décimo} (¡sin apocopla!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Ordinales propios solo hasta el 10; por encima, cardinal: el capítulo once.'),
    },
    {
      n: '2',
      text: T(
        'Solo primero y tercero hacen apocopla ante masculino singular: primer día, tercer día.',
      ),
    },
    { n: '3', text: T('Los ordinales concuerdan: primera, segundas, terceros, cuartas.') },
    {
      n: '4',
      text: T('Para fechas, capítulos, versículos y páginas se usa el cardinal, no el ordinal.'),
    },
  ],
  notes: [
    {
      label: T('Cardinal para el número'),
      text: T(
        'Desde «el primero» la regla se invierte: el ordinal es {artículo + ordinal} y el cardinal pasa a número. {el capítulo once} es el único sitio donde el cambio parece invertido, porque el ordinal antiguo sobrevivió en {el siglo XIII}.',
      ),
    },
  ],
  examples: [
    { text: '{el primer día}', gloss: T('El primer día (Gn 1.5 — apocopla de «primero»).') },
    { text: '{al tercer día}', gloss: T('Al tercer día (1 Co 15.4 — apocopla de «tercero»).') },
    { text: '{el capítulo once}', gloss: T('El capítulo once (¡cardinal a partir del 10!).') },
    { text: '{en primer lugar}', gloss: T('En primer lugar (apocopla fija).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Ordinales propios'),
      head: [T('Cardinal'), T('Ordinal (m. sg.)'), T('Apocopla'), T('f. sg.')],
      rows: [
        ['1', '{primero}', '{primer}', '{primera}'],
        ['2', '{segundo}', '—', '{segunda}'],
        ['3', '{tercero}', '{tercer}', '{tercera}'],
        ['4', '{cuarto}', '—', '{cuarta}'],
        ['5', '{quinto}', '—', '{quinta}'],
        ['6', '{sexto}', '—', '{sexta}'],
        ['7', '{séptimo}', '—', '{séptima}'],
        ['8', '{octavo}', '—', '{octava}'],
        ['9', '{noveno}', '—', '{novena}'],
        ['10', '{décimo}', '—', '{décima}'],
        ['11', '{once}', '—', '—'],
        ['20', '{veinte}', '—', '—'],
      ],
    },
    {
      caption: T('Tabla 2 — Dónde usar ordinal y dónde no'),
      head: [T('Contexto'), T('Forma'), T('Ejemplo')],
      rows: [
        [T('días de la semana'), 'ordinal', '{el tercer día}'],
        [T('siglos'), 'ordinal', '{el siglo primero}'],
        [T('capítulos, versículos'), 'cardinal', '{el capítulo once}'],
        [T('páginas'), 'cardinal', '{página doce}'],
        [T('fechas'), 'cardinal', '{el primero de enero}'],
        [T('posiciones'), 'ordinal', '{llegó segundo}'],
        [T('reyes, papas'), 'ordinal', '{Felipe segundo}'],
      ],
    },
  ],
};

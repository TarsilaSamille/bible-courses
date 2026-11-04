import { C, T, V } from '../shared.mts';

export default {
  id: 33,
  title: T('Os numerais ordinais'),
  subtitle: T('primero–décimo — reis, dias e capítulos'),
  section: T('Os numerais'),
  body: C(`## Só até {décimo}

O espanhol só tem ordinais próprios até **10**: {primero} · {segundo} · {tercero} · {cuarto} · {quinto} · {sexto} · {séptimo} · {octavo} · {noveno} · {décimo} «décimo». Depois disso usa o cardinal: {el capítulo once} «o capítulo onze» · {el siglo veinte} «o século vinte».

Exceção histórica: {el siglo XIII} «o século XIII» (o ordinal em algarismos romanos sobreviveu para séculos e reis).

## Concordância e apócope

Os ordinais concordam em gênero e número: {primera} «primeira» · {segundas} · {terceros} · {cuartas}.

Apenas {primero} e {tercero} fazem apócope antes de masculino singular: {primer día} «o primeiro dia» (Gn 1:5) · {tercer día} «o terceiro dia» (1Co 15:4) · {el primer apóstol} · {el tercer mandamiento}.

## Fórmulas fixas

• {en primer lugar} «em primeiro lugar» (apócope obrigatório).
• {por primera vez} «pela primeira vez» (sem apócope, pois {vez} é feminino).
• {Felipe II} = {Felipe segundo} «Filipe Segundo» — reis e papas usam ordinais em minúscula; o número romano é maiúsculo e abreviado.
• {a la tercera} «na terceira vez» (Mt 26:44) — apócope, porque el sustantivo es femenino.

## Ordinal × cardinal na prática

Não use ordinal onde o português usa cardinal:

• {el primero de enero} «o primeiro de janeiro» (data).
• {el segundo de mayo} «o segundo de maio».
• Página: {página doce} «página doze» (não «duodécima»).

Mas use ordinal para: dias da semana ({el tercer día}), séculos ({el siglo primero}), posições ({llegó segundo}).

Ex.: {En el primer día de la semana} «no primeiro dia da semana» (Jo 1:1 no contexto da Páscoa) · {El segundo día} de João (o dia após o sábado).`),
  vocab: [
    V('primero', 'primero', 'primeiro'),
    V('primer día', 'primero', 'primeiro dia (apócope!)'),
    V('tercer día', 'tercero', 'terceiro dia (apócope!)'),
    V('décimo', 'décimo', 'décimo (depois, cardinais!)'),
    V('primera vez', 'primero', 'primeira vez (sem apócope!)'),
    V('en primer lugar', 'primero', 'em primeiro lugar'),
    V('el tercer mandamiento', 'tercero', 'o terceiro mandamento'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "el ___ día" (o primeiro dia)'),
    answer: 'primer',
    hint: T('Apócope de "primero" antes de masculino.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "al ___ día" (ao terceiro dia, 1Co 15:4)'),
      answer: 'tercer',
      hint: T('Apócope de "tercero" antes de masculino.'),
    },
    {
      kind: 'choose',
      prompt: T('Como se diz "o capítulo 15"?'),
      options: [
        T('{el capítulo quince}'),
        T('{el capítulo XV}'),
        T('{el capítulodécimoquinto}'),
        T('{el quince capítulo}'),
      ],
      answer: 0,
      hint: T('Regra §1: depois do 10°, usa-se o cardinal.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma plena à forma apocopada'),
      pairs: [
        { a: T('{primero}'), b: T('{primer}') },
        { a: T('{tercero}'), b: T('{tercer}') },
        { a: T('{cuarto}'), b: T('{cuarto} (sem apócope!)') },
        { a: T('{décimo}'), b: T('{décimo} (sem apócope!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    { n: '1', text: T('Ordinais próprios só até 10; acima disso, cardinal: el capítulo once.') },
    {
      n: '2',
      text: T(
        'Só primero e tercero fazem apócope antes de masculino singular: primer día, tercer día.',
      ),
    },
    { n: '3', text: T('Os ordinais concordam: primera, segundas, terceros, cuartas.') },
    { n: '4', text: T('Em data, capítulo, verso e página usa-se o cardinal, não o ordinal.') },
  ],
  notes: [
    {
      label: T('O cardinal para o número'),
      text: T(
        'A partir de "o primeiro" a regra vira: o ordinal é {artigo + ordinal}, e o cardinal passa a "número". {el capítulo once} é o único lugar onde a troca parece invertida, porque o ordinal antigo sobreviveu em {el siglo XIII}.',
      ),
    },
  ],
  examples: [
    { text: '{el primer día}', gloss: T('O primeiro dia (Gn 1:5 — apócope de «primero»).') },
    { text: '{al tercer día}', gloss: T('Ao terceiro dia (1Co 15:4 — apócope de «tercero»).') },
    { text: '{el capítulo once}', gloss: T('O capítulo onze (cardinal a partir de 10!).') },
    { text: '{en primer lugar}', gloss: T('Em primeiro lugar (apócope fixo).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Ordinais próprios'),
      head: [T('Cardinal'), T('Ordinal (m. sg.)'), T('Apócope'), T('f. sg.')],
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
      caption: T('Tabela 2 — Onde usar ordinal e onde não'),
      head: [T('Contexto'), T('Forma'), T('Exemplo')],
      rows: [
        [T('dias da semana'), 'ordinal', '{el tercer día}'],
        [T('séculos'), 'ordinal', '{el siglo primero}'],
        [T('capítulos, versículos'), 'cardinal', '{el capítulo once}'],
        [T('páginas'), 'cardinal', '{página doce}'],
        [T('datas'), 'cardinal', '{el primero de enero}'],
        [T('posições em competições'), 'ordinal', '{llegó segundo}'],
        [T('reis, papas'), 'ordinal', '{Felipe segundo}'],
      ],
    },
  ],
};

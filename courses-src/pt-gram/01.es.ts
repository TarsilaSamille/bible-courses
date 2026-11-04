import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  section: T('Las palabras y sus clases'),
  title: T('Morfología: estructura de las palabras'),
  subtitle: T('Raíz, afijos y terminaciones'),
  body: C(`**Visión general.** La palabra tiene tres capas: la {raíz}, que carga el sentido, y los {afijos}, que rodean ese núcleo.

**Regla 1.** La raíz es lo que queda tras quitar prefijo, sufijo y terminación: {palavr-} en {palavra}, {salv-} en {salvação}, {cans-} en {cansado}.

**Regla 2.** El prefijo entra antes de la raíz y el sufijo después: {des-} + {leal} da {desleal}, y {leal} + {-dade} da {lealdade}.

**Regla 3.** La terminación es la parte que flexiona: {casa} y {casas} cambian, {falou} y {falamos} también, pero {cansado} es siempre {cansado}.

**Regla 4.** La prueba es el cambio de frase: si la forma cambia al cambiar el sujeto, es terminación; si sigue igual, es sufijo.

**Aplicación.** En {la palabra de Dios permanece}, el análisis empieza por el final de la palabra: {palavra} pierde la terminación {-a} y deja {palavr-}. {Deus} es nombre propio y no lleva terminación visible, como {θεός} en el griego de Juan 1, 1. {permanece} se parte en {permanec-} + {-e}, y la misma raíz aparece en el infinitivo {permanecer}: lo que cambia es la terminación, no el sentido.

**Verificación.** Haz tres preguntas antes de clasificar: ¿cuál es la **raíz**, hay **prefijo** delante, y qué **flexiona** cuando cambia la frase? Si flexiona, es terminación; si no, es sufijo. Equivocarse ahí lleva a tratar {cans-ado} como forma flexiva, y esa forma no existe: {cansado} es {cans-} + {-ado}, y el {-ado} es fijo.`),
  vocab: [
    V('radical', 'radical', 'raíz'),
    V('prefixo', 'prefixo', 'prefijo'),
    V('sufixo', 'sufixo', 'sufijo'),
    V('desinência', 'desinência', 'terminación'),
    V('vogalia', 'vogalia', 'núcleo vocálico'),
    V('derivação', 'derivação', 'derivación'),
    V('deslealdade', 'deslealdade', 'deslealtad'),
    V('inumerável', 'inumerável', 'innumerable'),
    V('palavr-', 'palavr-', 'raíz de {palavra}'),
    V('cans-', 'cans-', 'raíz de {cansado}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La palabra tiene tres capas: la {raíz}, que carga el sentido, y los {afijos}, que rodean ese núcleo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La raíz es lo que queda tras quitar prefijo, sufijo y terminación: {palavr-} en {palavra}, {salv-} en {salvação}, {cans-} en {cansado}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El prefijo entra antes de la raíz y el sufijo después: {des-} + {leal} da {desleal}, y {leal} + {-dade} da {lealdade}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La terminación es la parte que flexiona: {casa} y {casas} cambian, {falou} y {falamos} también, pero {cansado} es siempre {cansado}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La prueba es el cambio de frase: si la forma cambia al cambiar el sujeto, es terminación; si sigue igual, es sufijo.',
      ),
    },
  ],
  notes: [
    {
      label: T('El guion no es afijo'),
      text: T(
        '{guarda-chuva} es una sola palabra, formada por {guarda} y {chuva}: son dos radicales enteros, y ninguno es afijo de {guardar}. {antisocial} sí lleva {anti-}, que es prefijo, y el guion aparece solo porque la vocal final del prefijo chocaría con la inicial de la raíz.',
      ),
    },
    {
      label: T('La raíz no siempre aparece desnuda'),
      text: T(
        'En {permanece} la {e} final es terminación verbal y desaparece en {permanecer}; en {cansado} la {o} pertenece al sufijo {-ado} y nunca desaparece. La misma raíz, dos destinos: es la flexión la que dice cuál es.',
      ),
    },
  ],
  examples: [
    {
      text: 'salvação',
      gloss: T(
        'Raíz {salv-} con el sufijo {-ção}: el sentido de {salvar} convertido en nombre de acción.',
      ),
    },
    {
      text: 'deslealdade',
      gloss: T('{des-} niega y {-dade} nombra la cualidad; la raíz {leal} sigue visible en medio.'),
    },
    { text: 'permanecer', gloss: T('Raíz {permanec-} con la terminación {-er} del infinitivo.') },
    {
      text: 'permanece',
      gloss: T('La misma raíz {permanec-}, ahora con la terminación verbal {-e}.'),
    },
    {
      text: 'palavra',
      gloss: T(
        'Sin terminación visible en el singular: la {a} final es terminación, y el plural {palavras} lo confirma.',
      ),
    },
    {
      text: 'cansado',
      gloss: T(
        '{cans-} con el sufijo {-ado}; la forma no flexiona, y por eso la {o} no es terminación.',
      ),
    },
    {
      text: 'inumerável',
      gloss: T(
        '{in-} niega y {-ável} forma el adjetivo; el plural {inumeráveis} añade {-s} a la terminación.',
      ),
    },
    {
      text: 'antisocial',
      gloss: T(
        'Prefijo {anti-} con guion: sin él, la {i} del prefijo y la {s} de la raíz chocarían.',
      ),
    },
    {
      text: 'Deus',
      gloss: T(
        'Nombre propio sin terminación visible, como {θεός} en griego: aquí el sentido no necesita marca de número.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Las tres capas de la palabra'),
      head: [T('Camada'), T('Pergunta que a identifica'), T('Exemplo')],
      rows: [
        [T('radical'), T('Qual é o sentido nuclear?'), T('{salv-} em {salvação}')],
        [T('prefixo'), T('O que vem antes do radical?'), T('{des-} em {deslealdade}')],
        [T('sufixo'), T('O que vem depois do radical?'), T('{-dade} em {lealdade}')],
        [T('desinência'), T('O que flexiona na frase?'), T('{-ão} em {salvação}')],
      ],
    },
    {
      caption: T('Flexión nominal y flexión verbal'),
      head: [T('Forma'), T('O que marca'), T('Decomposição')],
      rows: [
        [T('{casa}'), T('substantivo singular'), T('radical {cas-} + {-a}')],
        [T('{casas}'), T('substantivo plural regular'), T('{casa} + {-s}')],
        [T('{salvação}'), T('substantivo singular'), T('radical {salv-} + {-ção}')],
        [T('{salvações}'), T('substantivo plural irregular'), T('{salvação} + {-ões}')],
        [T('{falou}'), T('verbo, 3.ª pessoa do singular'), T('radical {fal-} + {-ou}')],
        [T('{falamos}'), T('verbo, 1.ª pessoa do plural'), T('radical {fal-} + {-amos}')],
      ],
    },
    {
      caption: T('Cuando la palabra no flexiona'),
      head: [T('Palavra'), T('Camada visível'), T('Teste')],
      rows: [
        [T('{Deus}'), T('radical {deus} sem terminação'), T('não recebe plural de uso corrente')],
        [T('{Jesus}'), T('radical {jesus} sem terminação'), T('nome próprio de pessoa')],
        [T('{hoje}'), T('radical {hoj-} de advérbio'), T('não varia com o resto da frase')],
        [T('{ontem}'), T('radical {ontem} invariável'), T('não se flexiona')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {cansado}, ¿qué es la {o} final?'),
    options: [
      T('un sufijo, junto con {-ado}'),
      T('una terminación, porque la palabra flexiona'),
      T('un prefijo, porque va antes de la raíz'),
      T('el núcleo vocálico de la palabra'),
    ],
    answer: 0,
    hint: T('Cambia {cansado} por {cansar} y mira si la {o} sobrevive.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos pares comparte la misma raíz?'),
      options: [
        T('{permanece} y {permanecer}'),
        T('{casa} y {causa}'),
        T('{leal} y {lealdade}'),
        T('{cansado} y {cansar}'),
      ],
      answer: 0,
      hint: T('Compara lo que sobra tras quitar los afijos.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada palabra con la capa que ilustra.'),
      pairs: [
        { a: T('{salvação}'), b: T('raíz más sufijo') },
        { a: T('{desleal}'), b: T('raíz más prefijo') },
        { a: T('{casas}'), b: T('terminación de número') },
        { a: T('{guarda-chuva}'), b: T('dos raíces, sin afijo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El prefijo entra ______ de la raíz, y el sufijo después.'),
      answer: 'antes',
      hint: T('{des-} va antes de {leal}, y {-dade} después.'),
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  section: T('Los conectivos'),
  title: T('Conjunciones: coordinadas'),
  subtitle: T('e, mas, pois, y la coma que decide la lectura'),
  body: C(`## La e que hace tres cosas

La conjunción {e} es la más usada del portugués y hace tres trabajos distintos. **Suma**: {Deus amou o mundo e deu o seu Filho}. **Alterna**: {Não é branco nem preto}. Y **abre** la frase, posición en la que no hay suma ninguna: {E viu Deus tudo o que tinha feito, e eis que era muito bom}.

El tercer uso es el que más usa el texto bíblico, y es el que suele perder el traductor. En Gn 1.31 la {e} del principio de la oración no tiene nada que sumar: la frase entera es un solo acto.

## Oposición y conclusión

Las adversativas ponen una oración contra otra: {mas}, {porém}, {contudo}, {todavia}, {entretanto}. Entre ellas hay diferencia de registro, no de sentido: {mas} es la más fuerte y la más común en narrativa; {porém} y {contudo} son más formales; {todavia} es la más literaria.

Las conclusivas cierran un raciocinio: {logo}, {portanto}, {por isso}, {de sorte que}. Y está la confusión clásica del portugués: {pois} es la adversativa antigua, y por eso significa {mas}, no {porque}. En el texto de 1611, {pois} después de una coma es {pero}: {Não foi possível levá-lo, pois estava morto}.

## La coma que decide

La coma antes de {e} no es obligatoria, y lo que hace es cambiar el sentido. En {vou à loja e comprei pão} son dos acciones de la misma persona: fue y compró. En {vou à loja, e comprei pão} la primera oración es un plan y la segunda es una decisión contraria, y la coma separa a dos personas.

Lo mismo pasa con {mas}. {Era pobre, mas honesto} pone dos cualidades en la misma persona. {Era pobre, mas não era honesto} dice otra cosa, y la coma es lo que separa la negación.

## Criterio de lectura

Con cualquier conjunción, pregúntate: ¿suma, opone o concluye? ¿Hay coma antes? ¿Y la frase la necesita para tener sentido o solo para respirar?

Jn 1.14 empieza con {E o Verbo se fez carne}: la {e} no suma nada, marca el principio de la oración, y es la misma función que la {e} de {eis que era muito bom} en el primer capítulo. Quien traduce poniendo {e} en mitad de una frase ha introducido una suma que el texto no tiene.`),
  vocab: [
    V('e', 'e', 'y (conjunción)'),
    V('mas', 'mas', 'pero'),
    V('porém', 'porém', 'sin embargo'),
    V('contudo', 'contudo', 'sin embargo'),
    V('todavia', 'todavia', 'todavía'),
    V('logo', 'logo', 'logo'),
    V('portanto', 'portanto', 'por tanto'),
    V('por isso', 'isso', 'por eso'),
    V('pois', 'pois', 'pues (adversativa antigua)'),
    V('porque', 'porque', 'porque'),
    V('nem', 'nem', 'ni'),
    V('ou', 'ou', 'o'),
    V('então', 'então', 'entonces'),
    V('mas sim', 'mas', 'sino'),
    V('a soma', 'soma', 'la suma'),
    V('a oposição', 'oposição', 'la oposición'),
  ],
  rules: [
    { n: '§1', text: T('{E} suma ({e}), alterna ({nem}, {ou}) e abre la frase ({E viu Deus}).') },
    { n: '§2', text: T('Las adversativas oponen: {mas}, {porém}, {contudo}, {todavia}.') },
    {
      n: '§3',
      text: T('Las conclusivas cierran: {logo}, {portanto}, {por isso}, {de sorte que}.'),
    },
    { n: '§4', text: T('{Pois} es la adversativa antigua y significa {mas}, no {porque}.') },
    {
      n: '§5',
      text: T(
        'La coma antes de {e} cambia el sentido: separa dos acciones de una persona de dos acciones contrarias.',
      ),
    },
  ],
  notes: [
    {
      label: T('Bíblico × cotidiano'),
      text: T(
        'El griego coordena el período con partículas: {δέ} suma, {ἀλλά} opone, {γάρ} explica, {οὖν} concluye. El portugués traduce cada una con una palabra, y la elección entre {mas} y {porém} es del traductor.',
      ),
    },
    {
      label: T('La e inicial'),
      text: T(
        'La {e} que empieza la frase no es suma: es una partícula de ritmo. En portugués popular aparece donde el griego tendría {δέ}.',
      ),
    },
  ],
  examples: [
    {
      text: 'E viu Deus tudo o que tinha feito.',
      gloss: T('{E} al principio de la oración, sin sumar nada.'),
    },
    { text: 'Amou e deu a vida.', gloss: T('Dos acciones del mismo sujeto.') },
    { text: 'Não é prata nem ouro.', gloss: T('{Nem} alterna y niega.') },
    { text: 'Era pobre, mas honesto.', gloss: T('Dos cualidades de la misma persona.') },
    { text: 'Era pobre, mas não era honesto.', gloss: T('La coma cambia el sentido.') },
    { text: 'Choveu; logo, fomos para dentro.', gloss: T('Conclusión explícita.') },
    {
      text: 'Não foi possível levá-lo, pois estava morto.',
      gloss: T('{Pois} con el sentido de {mas}.'),
    },
    { text: 'Ou vens, ou ficas.', gloss: T('{Ou} refuerza la alternativa.') },
  ],
  tables: [
    {
      caption: T('Adversativas'),
      head: ['Conjunção', 'Registro', 'Exemplo'],
      rows: [
        ['mas', 'todos', 'era pobre, mas honesto'],
        ['porém', 'formal', 'era pobre, porém honesto'],
        ['contudo', 'formal', 'era pobre, contudo honesto'],
        ['todavia', 'literário', 'era pobre, todavia honesto'],
      ],
    },
    {
      caption: T('Conclusivas'),
      head: ['Conjunção', 'O que faz', 'Exemplo'],
      rows: [
        ['logo', 'fecha o raciocínio', 'logo, viu Deus'],
        ['portanto', 'formal', 'portanto, viu Deus'],
        ['por isso', 'marca a causa no fundo', 'por isso viu Deus'],
        ['pois', 'explica, com valor de porque', 'pois viu Deus'],
      ],
    },
    {
      caption: T('A coma com e'),
      head: ['Com vírgula', 'Sem vírgula', 'Diferença'],
      rows: [
        [
          'vou à loja, e comprei pão.',
          'vou à loja e comprei pão.',
          'atitude contrária contra ação única',
        ],
        [
          'era pobre, mas não era honesto.',
          'era pobre, mas honesto.',
          'negação contra característica',
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «não foi possível levá-lo, pois estava morto», {pois} significa:'),
    options: [T('pero'), T('porque'), T('por tanto'), T('entonces')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('{e} al principio de la oración no es ______, es partícula de ritmo.'),
      answer: 'soma',
      hint: T('La frase no suma dos acciones.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué conjunción es conclusiva?'),
      options: [T('portanto'), T('mas'), T('pois'), T('contudo')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Relaciona la conjunción con su valor.'),
      pairs: [
        { a: T('mas'), b: T('oposição') },
        { a: T('logo'), b: T('conclusão') },
        { a: T('pois'), b: T('oposição antiga') },
        { a: T('nem'), b: T('alternativa negativa') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
  ],
};

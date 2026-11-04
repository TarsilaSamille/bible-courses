import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Las palabras y sus clases'),
  title: T('Adverbio, preposición, conjunción e interjección'),
  subtitle: T('Circunstancia, relación, coordinación y emoción'),
  body: C(`**Visión general.** El {adverbio} es invariable: en {correu rapidamente}, {rapidamente} no concuerda con nada, y esa prueba lo separa del adjetivo {rápido}.

**Regla 1.** La {preposición} liga dos términos y no flexiona: en {com Deus}, {com} liga el verbo al término que hace de objeto indirecto.

**Regla 2.** La {conjunción} liga palabras u oraciones: en {Vinde e segui-me}, {e} liga dos oraciones independientes, y ninguna depende de la otra.

**Regla 3.** La {interjección} no se liga a nada: en {Aleluia}, la palabra va suelta, y es la pausa en lugar de la coma lo que la marca.

**Regla 4.** La prueba de las cuatro: ¿la palabra concuerda con algo? Si no, ¿**modifica**, **liga**, **coordena** o **expresa**? Y si liga oraciones, ¿son **independientes** o la segunda **depende** de la primera?

**Aplicación.** En {Deus amou o mundo}, la oración tiene {Deus}, {amou} y {mundo}, y nada liga los términos: es la oración más neutra que existe. En {Deus amou este mundo}, el {este} es determinante, y la oración ganó artículo sin verbo. Compárese {muito} en {amou muito}, que modifica al verbo {amou}, y {muito bom}, donde {bom} es adjetivo: la misma forma, la función decidida por lo que tiene al lado.

**Verificación.** Dos preguntas deciden la clase. Primera: ¿la palabra **concorda** con algún nombre? Si es así, es sustantivo o adjetivo, y has terminado. Si no, ¿**modifica**, **liga**, **coordena** o **expresa**? Y la segunda pregunta, la de las oraciones: si liga oraciones, ¿son **independientes** o la segunda **depende** de la primera? La primera elimina la mitad de las clases y la segunda decide las cuatro de este capítulo.`),
  vocab: [
    V('advérbio', 'advérbio', 'adverbio'),
    V('preposição', 'preposição', 'preposición'),
    V('conjunção', 'conjunção', 'conjunción'),
    V('interjeição', 'interjeição', 'interjección'),
    V('circunstância', 'circunstância', 'circunstancia'),
    V('coordenativa', 'coordenativa', 'conjunción coordinante'),
    V('subordinativa', 'subordinativa', 'conjunción subordinante'),
    V('aleluia', 'aleluia', 'interjección de alabanza'),
    V('com', 'com', 'preposición que liga verbo y objeto indirecto'),
    V('rapidamente', 'rapidamente', 'adverbio formado con {-mente}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {adverbio} es invariable: en {correu rapidamente}, {rapidamente} no concuerda con nada, y esa prueba lo separa del adjetivo {rápido}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La {preposición} liga dos términos y no flexiona: en {com Deus}, {com} liga el verbo al término que hace de objeto indirecto.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {conjunción} liga palabras u oraciones: en {Vinde e segui-me}, {e} liga dos oraciones independientes, y ninguna depende de la otra.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La {interjección} no se liga a nada: en {Aleluia}, la palabra va suelta, y es la pausa en lugar de la coma lo que la marca.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La prueba de las cuatro: ¿la palabra concuerda con algo? Si no, ¿**modifica**, **liga**, **coordena** o **expresa**? Y si liga oraciones, ¿son **independientes** o la segunda **depende** de la primera?',
      ),
    },
  ],
  notes: [
    {
      label: T('El adverbio que flexiona'),
      text: T(
        'La regla de que el adverbio no flexiona vale para casi todo el portugués. Las excepciones son {hoje} y {amanhã}, que son adverbios y también flexionan: {hoje} frente a {hojes}. Son adverbios de tiempo, y por eso la regla los exceptúa por su nombre.',
      ),
    },
    {
      label: T('La palabra que liga y la que solo liga'),
      text: T(
        'No toda preposición liga igual: en {caminhou com Deus}, {com} liga el verbo con un nombre; en {caminhou durante a noite}, {durante} liga el verbo con otro adverbio. Y la conjunción liga siempre dos unidades del mismo tipo: dos oraciones, dos sustantivos, dos adjetivos.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo',
      gloss: T(
        'Oración mínima: sujeto, verbo y objeto, sin ninguna de las cuatro palabras de este capítulo.',
      ),
    },
    {
      text: 'correu rapidamente',
      gloss: T('{rapidamente} es adverbio: no concuerda con {correu}, y por eso es invariable.'),
    },
    {
      text: 'um homem rápido',
      gloss: T('{rápido} es adjetivo: concuerda en género y número con el sustantivo {homem}.'),
    },
    {
      text: 'com Deus',
      gloss: T('Preposición {com} ligando el verbo con el objeto indirecto {Deus}.'),
    },
    {
      text: 'durante a noite',
      gloss: T('Preposición {durante} ligando el verbo con un adverbio de tiempo.'),
    },
    {
      text: 'Vinde e segui-me',
      gloss: T('Conjunción {e} entre dos oraciones independientes: {Vinde} y {segui-me}.'),
    },
    {
      text: 'não sei porque Ele me ama',
      gloss: T(
        'Conjunción {porque} abriendo subordinada y mostrando dependencia: solo la segunda oración obedece.',
      ),
    },
    {
      text: 'Aleluia',
      gloss: T('Interjección: va suelta, entre el signo de exclamación y lo que sigue.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T('Verbo {fez} transitivo directo, con objeto {carne}; {se} pronombre reflexivo.'),
    },
  ],
  tables: [
    {
      caption: T('Las cuatro clases que no flexionan'),
      head: [T('Classe'), T('O que faz'), T('Concorda?'), T('Exemplo')],
      rows: [
        [T('{advérbio}'), T('modifica verbo, adjetivo ou advérbio'), T('não'), T('{muito}')],
        [T('{preposição}'), T('liga termo a termo'), T('não'), T('{com}')],
        [T('{conjunção}'), T('liga palavras ou orações'), T('não'), T('{e}, {porque}')],
        [T('{interjeição}'), T('exprime emoção'), T('não'), T('{ai}, {aleluia}')],
      ],
    },
    {
      caption: T('Conectivos y el valor que abren'),
      head: [T('Valor'), T('Conectivos'), T('Exemplo')],
      rows: [
        [T('{aditivo}'), T('{e}, {nem}'), T('{veio e viu}')],
        [T('{adversativo}'), T('{mas}, {porém}'), T('{veio, mas não viu}')],
        [T('{alternativo}'), T('{ou}'), T('{ficou ou saiu}')],
        [T('{conclusivo}'), T('{logo}, {portanto}'), T('{choveu, logo ficou}')],
        [T('{explicativo}'), T('{porque}'), T('{ficou, porque era tarde}')],
        [T('{causal}'), T('{porque}, {já que}'), T('{não fui, porque era tarde}')],
        [T('{final}'), T('{para que}'), T('{vim para que vês}')],
      ],
    },
    {
      caption: T('Adverbios por la circunstancia'),
      head: [T('Circunstância'), T('Advérbio'), T('Frase')],
      rows: [
        [T('tempo'), T('{ontem}'), T('{Ontem cheguei.}')],
        [T('lugar'), T('{aqui}'), T('{Aqui estou.}')],
        [T('modo'), T('{rapidamente}'), T('{Cheguei rapidamente.}')],
        [T('intensidade'), T('{muito}'), T('{É muito bom.}')],
        [T('negação'), T('{não}'), T('{Não vim.}')],
        [T('afirmação'), T('{sim}'), T('{Sim, eu sei.}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {correu rapidamente}, {rapidamente} es adverbio porque:'),
    options: [
      T('no concuerda con {correu}, y su forma es única'),
      T('concurda en género con el sujeto'),
      T('es el núcleo de la oración, junto a {correu}'),
      T('exige una preposición que lo enlace con {correu}'),
    ],
    answer: 0,
    hint: T('Compara {rapidamente} con {rápido}, que flexiona.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué palabra es {interjección}?'),
      options: [T('{aleluia}'), T('{mas}'), T('{ontem}'), T('{contra}')],
      answer: 0,
      hint: T('No se liga a ninguna palabra de la oración.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada conectivo con el valor que abre.'),
      pairs: [
        { a: T('{e}'), b: T('adición') },
        { a: T('{mas}'), b: T('oposición') },
        { a: T('{logo}'), b: T('conclusión') },
        { a: T('{porque}'), b: T('causa o explicación') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La palabra que liga dos oraciones independientes es una ______.'),
      answer: 'conjunção',
      hint: T('Si liga y no flexiona, es conjunción.'),
    },
  ],
};

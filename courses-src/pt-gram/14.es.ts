import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Flexión nominal'),
  subtitle: T('Género, número y grado'),
  body: C(`**Visión general.** El {género} de los nombres lo da la terminación, y por eso {amigo} es masculino y {amiga} es femenino: la {o} y la {a} son la marca.

**Regla 1.** El {plural regular} añade {-s} o {-es}: {libro} da {libros}, {lápis} da {lápis}, {pan} da {panes}, y {Dios} da {Dioses}.

**Regla 2.** El {número} tiene plurales irregulares: {hombre} da {hombres}, {pan} da {panes}, y {mano} da {manos}, donde el plural no añade nada visible.

**Regla 3.** El {comparativo} sintético usa {-or} u {-ior}: {alto} da {más alto} y {altísimo}; el {superlativo absoluto} no lleva expresión de comparación.

**Regla 4.** {Aumentativo} y {diminutivo} cambian de escala, no de sentido: {libro} da {librón} y {librito}, y el sentido sigue siendo el mismo.

**Aplicación.** En {Deus amou o mundo}, el artículo {o} es masculino singular y {mundo} es sustantivo masculino singular, y el plural {mundos} confirma la flexión. En {as maiores profetas}, {as} es artículo femenino plural, {maiores} es comparativo de {grande}, y {profetas} es sustantivo femenino plural. Fíjate en que el adjetivo {maiores} concuerda con el sustantivo {profetas} y **no** con el artículo {as}: los dos son femeninos, pero la concordancia es con el nombre, siempre.

**Verificación.** Cuatro preguntas resuelven la flexión nominal entera: ¿cuál es el **género**, cuál el **número**, el comparativo es **sintético** ({-or, -ior}) o **analítico** ({más}), y el superlativo necesita expresión de comparación? Y una quinta, la más importante de todas: el adjetivo concuerda con el **sustantivo**, y por eso {os maiores} y {as maiores} comparten el mismo {maiores}.`),
  vocab: [
    V('gênero', 'gênero', 'marcação de sexo o categoría'),
    V('número', 'número', 'marcação de cantidad'),
    V('grau', 'grau', 'comparación y escala'),
    V('comparativo', 'comparativo', 'compara dos términos'),
    V('superlativo', 'superlativo', 'compara tres o más'),
    V('diminutivo', 'diminutivo', 'reduce la escala'),
    V('aumentativo', 'aumentativo', 'aumenta la escala'),
    V('coletivo', 'coletivo', 'nombre que designa un grupo'),
    V('maiores', 'maiores', 'comparativo irregular de {grande}'),
    V('altíssimo', 'altíssimo', 'superlativo sintético de {alto}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El {género} de los nombres lo da la terminación, y por eso {amigo} es masculino y {amiga} es femenino: la {o} y la {a} son la marca.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {plural regular} añade {-s} o {-es}: {libro} da {libros}, {lápis} da {lápis}, {pan} da {panes}, y {Dios} da {Dioses}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {número} tiene plurales irregulares: {hombre} da {hombres}, {pan} da {panes}, y {mano} da {manos}, donde el plural no añade nada visible.',
      ),
    },
    {
      n: '§4',
      text: T(
        'El {comparativo} sintético usa {-or} u {-ior}: {alto} da {más alto} y {altísimo}; el {superlativo absoluto} no lleva expresión de comparación.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{Aumentativo} y {diminutivo} cambian de escala, no de sentido: {libro} da {librón} y {librito}, y el sentido sigue siendo el mismo.',
      ),
    },
  ],
  notes: [
    {
      label: T('El superlativo que el griego acentuaba más'),
      text: T(
        'El griego antiguo tenía un superlativo propio, con terminación {-τος}: {μέγιστος} es {muy grande}, y {πιστότατος} es {muy fiel}. El portugués perdió la terminación y guardó el sentido en {muy} o en el acento: {fidelísimo}. Donde el griego decía la escala en la terminación, el portugués la dice en la forma de la palabra, y la traducción pierde el contraste entre {μέγιστος} y {μέγας}.',
      ),
    },
    {
      label: T('El aumentativo que cambia el tono, no el sentido'),
      text: T(
        'En {librón}, la {ón} agranda el objeto y a menudo añade desprecio; en {casa-grande}, el {grande} agranda sin cambiar nada. Lo que hace el aumentativo es cambiar la escala del nombre, y la lectura bíblica depende de ello: {caballo} y {caballo grande} no son lo mismo, y uno puede ser elogio y el otro insulto.',
      ),
    },
  ],
  examples: [
    {
      text: 'o mundo',
      gloss: T('Sustantivo masculino singular: el artículo {o} y el nombre {mundo} concuerdan.'),
    },
    { text: 'os mundos', gloss: T('Plural regular de {mundo}: añade {-s} y mantiene el género.') },
    {
      text: 'as maiores profetas',
      gloss: T('Comparativo {maiores} en femenino plural, porque concuerda con {profetas}.'),
    },
    {
      text: 'o maior dos mandamentos',
      gloss: T('Superlativo relativo: el término {dos mandamientos} delimita la comparación.'),
    },
    {
      text: 'altíssimo',
      gloss: T('Superlativo sintético de {alto}, con {-ísimo}: no lleva {el más}.'),
    },
    {
      text: 'o mais alto',
      gloss: T('Superlativo analítico: {más} más el adjetivo, y aquí no hay terminación especial.'),
    },
    { text: 'um livrinho', gloss: T('Diminutivo con {-inho}: reduce la escala y añade cariño.') },
    {
      text: 'oIsrael',
      gloss: T('Nombre propio masculino singular: {Israel} no flexiona en el uso corriente.'),
    },
    {
      text: 'o povo',
      gloss: T(
        'Sustantivo colectivo: en singular designa a muchos, y el verbo puede ir al plural.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Género por terminación'),
      head: [T('Gênero'), T('Terminações comuns'), T('Exceção'), T('Exemplo')],
      rows: [
        [T('masculino'), T('{-o}'), T('{mão}, {leão}'), T('{o dia}')],
        [T('feminino'), T('{-a}'), T('{dia}, {pó}, {mão}'), T('{a mão}')],
        [T('masculino'), T('{-ão}'), T('{irmã}, {viúva}'), T('{o irmão}')],
        [T('feminino'), T('{-ade}, {-esa}'), T('{poeta}, {princesa}'), T('{a poetisa}')],
        [T('feminino'), T('{-triz}'), T('{atriz}, {mistriz}'), T('{a matriz}')],
        [T('comum aos dois'), T('{-e}'), T('{jovem}, {feliz}'), T('{o jovem}, {a feliz}')],
      ],
    },
    {
      caption: T('Plurales irregulares'),
      head: [T('Singular'), T('Plural'), T('O que muda'), T('Origem')],
      rows: [
        [T('{homem}'), T('{homens}'), T('acréscimo de {-ens}'), T('radical {hom-}')],
        [T('{pão}'), T('{pães}'), T('acréscimo de {-ões}'), T('radical {pã-}')],
        [T('{mão}'), T('{mãos}'), T('apenas {s}'), T('radical {mã-}')],
        [T('{lápis}'), T('{lápis}'), T('apenas {s}'), T('radical {láp-}')],
        [T('{Deus}'), T('{deuses}'), T('acréscimo de {-es}'), T('radical {deus-}')],
        [T('{rei}'), T('{reis}'), T('perda do {u}'), T('radical {re-}')],
        [T('{obra}'), T('{obras}'), T('apenas {-s}'), T('radical {obr-}')],
      ],
    },
    {
      caption: T('Comparativo y superlativo'),
      head: [T('Tipo'), T('Como se forma'), T('Exemplo'), T('Frase')],
      rows: [
        [
          T('comparativo analítico'),
          T('{mais} + adjetivo'),
          T('{mais alto}'),
          T('{Ele é mais alto.}'),
        ],
        [T('comparativo sintético'), T('{-or} ou {-ior}'), T('{maior}'), T('{Ele é maior.}')],
        [
          T('superlativo analítico'),
          T('{o mais} + adjetivo'),
          T('{o mais alto}'),
          T('{Ele é o mais alto.}'),
        ],
        [T('superlativo sintético'), T('{-íssimo}'), T('{altíssimo}'), T('{Ele é altíssimo.}')],
        [
          T('superlativo relativo'),
          T('superlativo + {de}'),
          T('{o maior dos}'),
          T('{o maior dos sete}'),
        ],
        [T('aumentativo'), T('{-ão}, {-aço}'), T('{livrão}'), T('{um livrão}')],
        [T('diminutivo'), T('{-inho}, {-zinho}'), T('{livrinho}'), T('{um livrinho}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {as maiores profetas}, ¿con qué concuerda {maiores}?'),
    options: [
      T('con el sustantivo {profetas}'),
      T('con el artículo {las}'),
      T('con el verbo de la oración principal'),
      T('con el numeral que viene después'),
    ],
    answer: 0,
    hint: T('La concordancia nominal es con el nombre, nunca con el determinante.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es el plural de {homem}?'),
      options: [
        T('{hombres}, con la adición de {-ens}'),
        T('{homes}, sin marca de número'),
        T('{hombres}, con cambio de {o} por {e}'),
        T('{homena}, por analogía con {pan}'),
      ],
      answer: 0,
      hint: T('El plural de {hombre} añade {-ens} a la raíz {hom-}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con lo que indica.'),
      pairs: [
        { a: T('{el más alto}'), b: T('superlativo analítico') },
        { a: T('{altísimo}'), b: T('superlativo sintético') },
        { a: T('{mayor}'), b: T('comparativo sintético') },
        { a: T('{librón}'), b: T('aumentativo') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'quantidade',
      hint: T('{libro} es uno, {libros} son muchos.'),
    },
  ],
};

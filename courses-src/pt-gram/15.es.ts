import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Flexión verbal'),
  subtitle: T('Tiempos, modos, voces y conjugación'),
  body: C(`**Visión general.** El verbo flexiona en persona, número, tiempo y modo: en {Deus amou}, la forma {amou} es tercera del singular del pretérito.

**Regla 1.** El {indicativo} presenta certeza, el {subjuntivo} presenta duda o finalidad, y el {imperativo} formula un mandato: en {Sé que él sabe} frente a {Sé que él sepa}.

**Regla 2.** La {voz activa} presenta el agente y la {pasiva} el paciente: en {Deus criou} el agente es {Deus}; en {o mundo foi criado} el paciente es {o mundo}.

**Regla 3.** Los {tiempos compuestos} se forman con auxiliar más participio: en {había creado}, {había} es auxiliar y {creado} el participio, no otro verbo.

**Regla 4.** El {infinitivo} y el {gerundio} no flexionan persona ni número: en {Para que me amar} el primero es {amar} y el segundo {amando}, idénticos en ambos.

**Aplicación.** En {El Verbo se hizo carne}, el verbo {se hizo} es **pasiva** ({ser} + {hecho}), y el paciente es {el Verbo}. El griego original (ἐγένετο σάρξ) usa **aoristo** y **voz media**, en la que el verbo es activo en la forma y pasivo en el sentido: algo **hizo** algo, pero quien sufre es el Verbo. Traducirlo por {el Verbo fue hecho carne} es correcto en portugués, y oculta que el griego no tenía pasiva aquí.

**Verificación.** Para clasificar un verbo, pregunta: ¿**qué tiempo** ({habló}, {hablaba}, {hablará})? ¿**qué modo** ({habla}, {hable}, {habla!})? ¿**qué voz** ({Dios creó}, {el mundo fue creado}, {él se mató})? Y el **auxiliar**, ¿es {tener} o {ser}? Con las cuatro, la flexión verbal entera está descrita. Y el participio es lo que delata la pasiva: un participio sin auxiliar no es pasiva, es adjetivo.`),
  vocab: [
    V('tempo verbal', 'tempo verbal', 'momento de la acción'),
    V('modo verbal', 'modo verbal', 'actitud del hablante'),
    V('voz verbal', 'voz verbal', 'relación entre sujeto y acción'),
    V('indicativo', 'indicativo', 'modo de la certeza'),
    V('subjuntivo', 'subjuntivo', 'modo de la duda y la finalidad'),
    V('imperativo', 'imperativo', 'modo del mandato'),
    V('infinitivo', 'infinitivo', 'forma que no flexiona'),
    V('particípio', 'particípio', 'forma que forma la pasiva'),
    V('se fez', 'se fez', 'participio irregular de {hacer}'),
    V('ἐγένετο σάρξ', 'ἐγένετο σάρξ', 'aoristo y voz media en griego'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El verbo flexiona en persona, número, tiempo y modo: en {Deus amou}, la forma {amou} es tercera del singular del pretérito.',
      ),
    },
    {
      n: '§2',
      text: T(
        'El {indicativo} presenta certeza, el {subjuntivo} presenta duda o finalidad, y el {imperativo} formula un mandato: en {Sé que él sabe} frente a {Sé que él sepa}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {voz activa} presenta el agente y la {pasiva} el paciente: en {Deus criou} el agente es {Deus}; en {o mundo foi criado} el paciente es {o mundo}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Los {tiempos compuestos} se forman con auxiliar más participio: en {había creado}, {había} es auxiliar y {creado} el participio, no otro verbo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El {infinitivo} y el {gerundio} no flexionan persona ni número: en {Para que me amar} el primero es {amar} y el segundo {amando}, idénticos en ambos.',
      ),
    },
  ],
  notes: [
    {
      label: T('La voz media griega que el portugués no tiene'),
      text: T(
        'El griego antiguo tiene tres voces y el portugués tiene dos. La {voz media} griega aparece en verbos como {λύω}, donde el sujeto es a la vez quien hace y quien sufre; en {ἐγένετο} el verbo está en aoristo medio, y el sujeto {Verbo} hace algo que sufre. Traducirlo por la pasiva portuguesa invierte la posición del sujeto y hace que el lector crea que {el Verbo} es el paciente pasivo, cuando en griego es el agente que sufre.',
      ),
    },
    {
      label: T('El subjuntivo que el griego usaba más'),
      text: T(
        'El griego antiguo usaba el subjuntivo en contextos donde el portugués actual usa el indicativo o el futuro: la incertidumbre de {ἴδω} aparece donde el portugués dice {sé}. Cada traducción de esos casos es una decisión: mantener el subjuntivo griego suena arcaico en portugués, y sustituirlo por {se} más indicativo esconde la fuerza lógica del original.',
      ),
    },
  ],
  examples: [
    {
      text: 'Deus amou o mundo.',
      gloss: T('{amou} es pretérito perfecto, tercera del singular, voz activa.'),
    },
    {
      text: 'O mundo foi criado.',
      gloss: T('Voz pasiva analítica: {fue} es auxiliar y {creado} el participio.'),
    },
    {
      text: 'O Verbo se fez carne.',
      gloss: T('{se hizo} es locución pasiva con {ser} y el participio irregular {hecho}.'),
    },
    {
      text: 'Sei que ele sabe.',
      gloss: T('Verbo de juicio {sé}: lo que sigue va en indicativo, porque se afirma el hecho.'),
    },
    {
      text: 'Sei que ele saiba.',
      gloss: T(
        'Con {es necesario} el mismo {que} lleva al subjuntivo, porque no se afirma el hecho.',
      ),
    },
    {
      text: 'Vinde e segui-me.',
      gloss: T('{Venid} y {seguidme} son imperativos: la orden viene sin sujeto.'),
    },
    {
      text: 'havia criado',
      gloss: T(
        'Pretérito más que perfecto compuesto: {había} es auxiliar y {creado} el participio.',
      ),
    },
    {
      text: 'Amar é obedecer.',
      gloss: T('Dos infinitivos como sujetos paralelos, sin persona ni número.'),
    },
    {
      text: 'para que me amares',
      gloss: T('{amar} en subjuntivo lo exige el {para que}: la finalidad no es hecho.'),
    },
  ],
  tables: [
    {
      caption: T('Tiempos del indicativo'),
      head: [T('Tempo'), T('Singular'), T('Plural'), T('Uso típico')],
      rows: [
        [T('presente'), T('{ama}'), T('{amam}'), T('fato atual')],
        [T('pretérito perfeito'), T('{amou}'), T('{amaram}'), T('fato concluído')],
        [T('pretérito imperfeito'), T('{amava}'), T('{amavam}'), T('estado em curso')],
        [T('futuro'), T('{amará}'), T('{amarão}'), T('projeção')],
        [T('mais-que-perfeito'), T('{amara}'), T('{amaram}'), T('anterior a outro passado')],
      ],
    },
    {
      caption: T('Modos y lo que dice cada uno'),
      head: [T('Modo'), T('O que exprime'), T('Exemplo'), T('Sinal típico')],
      rows: [
        [T('{indicativo}'), T('certeza, fato'), T('{Ele sabe}'), T('{que} + indicativo')],
        [
          T('{subjuntivo}'),
          T('dúvida, finalidade, desejo'),
          T('{Ele saia}'),
          T('{para que} + subjuntivo'),
        ],
        [T('{imperativo}'), T('comando, pedido'), T('{Sai}'), T('forma sem {-r}')],
        [T('{infinitivo}'), T('ação sem sujeito'), T('{amar}'), T('{-r}')],
        [T('{gerúndio}'), T('ação em curso'), T('{amando}'), T('{-ndo}')],
      ],
    },
    {
      caption: T('Voces: activa, pasiva y la media griega'),
      head: [T('Voz'), T('Quem aparece'), T('Como se marca'), T('Frase')],
      rows: [
        [T('{ativa}'), T('o agente'), T('verbo sem auxiliar'), T('{Deus criou}')],
        [
          T('{passiva analítica}'),
          T('o paciente'),
          T('{ser} ou {ter} + particípio'),
          T('{o mundo foi criado}'),
        ],
        [T('{passiva sintética}'), T('o paciente'), T('{se} + verbo'), T('{se fez carne}')],
        [T('{reflexiva}'), T('o mesmo agente'), T('{se} + verbo transitivo'), T('{ele se matou}')],
        [
          T('{média grega}'),
          T('agente que sofre'),
          T('não existe em português'),
          T('{ἐγένετο σάρξ}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {El mundo fue creado}, ¿qué es {creado}?'),
    options: [
      T('participio, que con {fue} forma la pasiva'),
      T('un verbo en pretérito, con sentido propio'),
      T('un adjetivo que caracteriza {el mundo}'),
      T('un adverbio de modo aplicado al sustantivo'),
    ],
    answer: 0,
    hint: T('Sin el {fue}, {creado} sería solo un adjetivo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {para que me amares}, el verbo está en subjuntivo porque:'),
      options: [
        T('{para que} expresa finalidad, y la finalidad no es un hecho'),
        T('{me} es pronombre oblíquo y exige subjuntivo'),
        T('el sujeto {tú} es de segunda persona'),
        T('{amar} es infinitivo y todo infinitivo va en subjuntivo'),
      ],
      answer: 0,
      hint: T('El indicativo afirma; el subjuntivo espera.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma verbal con lo que es.'),
      pairs: [
        { a: T('{amó}'), b: T('pretérito del indicativo') },
        { a: T('{amaba}'), b: T('pretérito imperfecto') },
        { a: T('{amará}'), b: T('futuro del indicativo') },
        { a: T('{amando}'), b: T('gerundio') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'infinitivo',
      hint: T('En {amar es obedecer}, los dos son infinitivos.'),
    },
  ],
};

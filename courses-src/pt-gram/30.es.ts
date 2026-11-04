import { C, T, V } from '../shared.mts';

export default {
  id: 30,
  section: T('El sentido y la subordinación'),
  title: T('Las ocho oraciones subordinadas'),
  subtitle: T('El valor que abre el conectivo'),
  body: C(`**Visión general.** Toda subordinada abre con un conectivo, y es él quien da el valor: el {que} de {Creo que esto es verdad} es {sustantiva}, y el {que} de {El barco que veía} es {adjetiva}.

**Regla 1.** Sustantiva, adjetiva y adverbial dicen el nombre de la función que ejercen; las adverbiales se dividen en ocho: causal, consecutiva, condicional, final, concessiva, comparativa, conformativa y proporcional.

**Regla 2.** El {se} es condicional con verbo conjugado y partícula apassivadora con verbo intransitivo: en {Si yo viera} hay verbo; en {sé que él sabe} el {se} es el verbo {sé}.

**Regla 3.** La prueba de la {sustantiva} es la sustitución por {esto}: en {Creo que esto es verdad}, {Creo esto} sigue siendo correcto; en {Sé que esto}, también, y por eso es sustantiva.

**Regla 4.** La prueba de la {adverbial} es la sustitución por {ayer por la mañana}, y no por {esto}: en {Salió ayer por la mañana}, la oración puede cambiarse por un adverbio, y por eso no es sustantiva.

**Aplicación.** En {Si yo viera el barco, navegaría}, {Si yo viera el barco} es adverbial condicional de primer grado, y {navegaría} es el verbo de la principal. En {Sé que él sabe}, el mismo {se} acompaña a un verbo intransitivo, no deja nada como sujeto ni como objeto, y la subordinada {que él sabe} ocupa el lugar del sujeto: es {sustantiva subjetiva}. Romanos 8, 31 trae el primer tipo en forma de pregunta retórica: «Si Dios está con nosotros, ¿quién contra nosotros?>

**Verificación.** Tres preguntas, siempre en este orden. Primera: ¿cuál es el conectivo? Segunda: ¿se puede cambiar la subordinada por un sintagma, y por cuál? Por {esto} o {aquello}, es {sustantiva}; por {el barco que veía}, es {adjetiva}; por {ayer por la mañana}, es {adverbial}. Tercera, y solo cuando sea adverbial: ¿cuál de las ocho? La segunda es la que más engaña, porque una adverbial también se puede cambiar por un sintagma en {esto}.`),
  vocab: [
    V('substantiva', 'substantiva', 'desempeña función de sustantivo'),
    V('adjetiva', 'adjetiva', 'desempeña función de adjetivo'),
    V('adverbial', 'adverbial', 'indica circunstancia'),
    V('conectivo', 'conectivo', 'palabra que abre la subordinada'),
    V('relativa', 'relativa', 'sinónimo de adjetiva restrictiva'),
    V('restritiva', 'restritiva', 'la que viene sin coma y limita el nombre'),
    V('explicativa', 'explicativa', 'la que viene entre comas y añade'),
    V('causal', 'causal', 'la que indica causa'),
    V('consecutiva', 'consecutiva', 'la que indica consecuencia'),
    V('condicional', 'condicional', 'la que indica condición'),
    V('final', 'final', 'la que indica finalidad'),
    V('concessiva', 'concessiva', 'la que admite un hecho a pesar del cual ocurre otro'),
    V('comparativa', 'comparativa', 'la que establece comparación'),
    V('conformativa', 'conformativa', 'la que indica conformidad'),
    V('proporcional', 'proporcional', 'la que indica proporción'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Toda subordinada abre con un conectivo, y es él quien da el valor: el {que} de {Creo que esto es verdad} es {sustantiva}, y el {que} de {El barco que veía} es {adjetiva}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Sustantiva, adjetiva y adverbial dicen el nombre de la función que ejercen; las adverbiales se dividen en ocho: causal, consecutiva, condicional, final, concessiva, comparativa, conformativa y proporcional.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {se} es condicional con verbo conjugado y partícula apassivadora con verbo intransitivo: en {Si yo viera} hay verbo; en {sé que él sabe} el {se} es el verbo {sé}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La prueba de la {sustantiva} es la sustitución por {esto}: en {Creo que esto es verdad}, {Creo esto} sigue siendo correcto; en {Sé que esto}, también, y por eso es sustantiva.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La prueba de la {adverbial} es la sustitución por {ayer por la mañana}, y no por {esto}: en {Salió ayer por la mañana}, la oración puede cambiarse por un adverbio, y por eso no es sustantiva.',
      ),
    },
  ],
  notes: [
    {
      label: T('El {se} que el griego resuelve de otro modo'),
      text: T(
        'El griego antiguo no tiene partícula apassivadora: lo que el portugués marca con {se}, el griego lo marca por el caso o por la voz media. En {εἶπεν}, el aoristo activo se traduce por {dijo} sin {se} alguno; en {ἐγένετο}, el medio pasa a {se hizo}. El traductor decide si lleva el {se} del portugués o la forma griega, y la decisión cambia el modo de la oración.',
      ),
    },
    {
      label: T('El {como} con tres valores'),
      text: T(
        'El mismo {como} abre tres subordinadas de valores distintos: en {Corrió como el caballo}, es {comparativa}; en {Haz como te mandaron}, {conformativa}; en {Caminó como un ángel}, {causal}, porque la consecuencia viene después. El conectivo no decide solo: quien clasifique sin mirar la principal clasifica mal.',
      ),
    },
  ],
  examples: [
    {
      text: 'Creio que isto é verdade.',
      gloss: T('{Sustantiva directa}: cambia por {esto} y la oración sigue siendo correcta.'),
    },
    {
      text: 'É necessário que venhas.',
      gloss: T('{Sustantiva subjetiva}: la subordinada ocupa el lugar del sujeto de {es}.'),
    },
    {
      text: 'O barco que vias era o dele.',
      gloss: T('{Adjetiva restrictiva}: el {que} limita {barco} a un solo barco.'),
    },
    {
      text: 'O barco, que era velho, adormeceu.',
      gloss: T('{Adjetiva explicativa}: entre comas, añade sin limitar.'),
    },
    {
      text: 'Não navegou porque não tinha fé.',
      gloss: T('{Adverbial causal}: la causa está dentro de la subordinada.'),
    },
    {
      text: 'A tempestade foi tão forte que o barco se encheu.',
      gloss: T('{Adverbial consecutiva}: la subordinada trae el resultado de lo que se afirma.'),
    },
    {
      text: 'Se o vento cessar, embarcaremos.',
      gloss: T('{Adverbial condicional}: el verbo principal está en futuro.'),
    },
    {
      text: 'Vai a Nazaré para que se cumpram as Escrituras.',
      gloss: T('{Adverbial final}: el {para que} indica finalidad, y la finalidad no es un hecho.'),
    },
    {
      text: 'Embora chovesse, saiu.',
      gloss: T('{Adverbial concessiva}: el hecho principal ocurre pese a la subordinada.'),
    },
  ],
  tables: [
    {
      caption: T('El conectivo y el valor que abre'),
      head: [T('Tipo'), T('Conectivos'), T('Exemplo')],
      rows: [
        [T('{substantiva}'), T('{que}, {se}, {qual}'), T('{Creio que isto é verdade}')],
        [T('{substantiva objetiva direta}'), T('{que}, {o qual}'), T('{Disse que viria}')],
        [T('{substantiva subjetiva}'), T('{que}, {se}'), T('{Sei que ele sabe}')],
        [T('{substantiva predicativa}'), T('{que}'), T('{É necessário que venhas}')],
        [T('{adjetiva restritiva}'), T('{que}, {o qual}, {quem}'), T('{o barco que vias}')],
        [T('{adjetiva explicativa}'), T('{que}, {o qual}, {quem}'), T('{o barco, que era velho}')],
        [T('{adverbial causal}'), T('{porque}, {já que}'), T('{não fui, porque era tarde}')],
        [
          T('{adverbial consecutiva}'),
          T('{logo que}, {de modo que}'),
          T('{tão forte foi que se encheu}'),
        ],
        [T('{adverbial condicional}'), T('{se}, {caso}, {contanto que}'), T('{Se o vento cessar}')],
        [T('{adverbial final}'), T('{para que}, {a fim de que}'), T('{para que se cumpram}')],
        [T('{adverbial concessiva}'), T('{embora}, {ainda que}'), T('{Embora chovesse, saiu}')],
        [T('{adverbial comparativa}'), T('{como}, {quanto a}'), T('{Correu como o cavalo}')],
        [
          T('{adverbial conformativa}'),
          T('{conforme}, {segundo}'),
          T('{Caminhou conforme a palavra}'),
        ],
        [
          T('{adverbial proporcional}'),
          T('{à medida que}, {quanto mais}'),
          T('{À medida que crescia}'),
        ],
      ],
    },
    {
      caption: T('El mismo conectivo con dos valores'),
      head: [T('Trecho'), T('Conectivo'), T('Valor'), T('Porquê')],
      rows: [
        [
          T('{Disse que viria}'),
          T('{que}'),
          T('{substantiva direta}'),
          T('completa o verbo {disse}'),
        ],
        [
          T('{O homem que vi era judeu}'),
          T('{que}'),
          T('{adjetiva restritiva}'),
          T('caracteriza o nome {homem}'),
        ],
        [
          T('{Se ele vier, sairei}'),
          T('{se}'),
          T('{condicional}'),
          T('o verbo traz sujeito expresso'),
        ],
        [
          T('{Sei que ele sabe}'),
          T('{se}'),
          T('{substantiva subjetiva}'),
          T('o verbo {sei} é intransitivo'),
        ],
        [
          T('{Correu como o cavalo}'),
          T('{como}'),
          T('{comparativa}'),
          T('os dois termos postulam a mesma qualidade'),
        ],
        [
          T('{Faz como lhe mandaram}'),
          T('{como}'),
          T('{conformativa}'),
          T('indica conformidade com uma ordem'),
        ],
      ],
    },
    {
      caption: T('La prueba de sustitución'),
      head: [
        T('O que se coloca no lugar'),
        T('O que a substituição revela'),
        T('Tipo'),
        T('Cuidado'),
      ],
      rows: [
        [
          T('{isto}, {aquilo}'),
          T('função de substantivo'),
          T('{substantiva}'),
          T('serve para todas'),
        ],
        [
          T('{que}, {o qual}'),
          T('função de adjetivo'),
          T('{adjetiva}'),
          T('só para as que têm relativo'),
        ],
        [
          T('{ontem de manhã}'),
          T('função de advérbio'),
          T('{adverbial}'),
          T('a causal também aceita {isso}'),
        ],
        [
          T('{nessa hora}'),
          T('função de tempo'),
          T('{adverbial temporal}'),
          T('algumas substantivas também'),
        ],
        [
          T('{muito}'),
          T('função de intensidade'),
          T('{comparativa}'),
          T('pouco usada em biblical'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Sé que él sabe}, la subordinada {que él sabe} es:'),
    options: [
      T('sustantiva subjetiva, porque ocupa el lugar del sujeto de {sé}'),
      T('adverbial condicional, porque empieza por {se}'),
      T('adjetiva explicativa, porque viene entre comas'),
      T('sustantiva directa, porque viene después del verbo'),
    ],
    answer: 0,
    hint: T('Sustituye la subordinada por {esto}: {Sé esto} sigue siendo correcto.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Y les dijo: «¿Por qué decís que es foro?»}, la oración entre comillas es:'),
      options: [
        T('sustantiva directa de primer grado, objeto de {les dijo}'),
        T('oración coordinada asindética, por no tener conectivo'),
        T('oración principal, porque tiene sujeto propio'),
        T('adverbial final, porque viene al final del período'),
      ],
      answer: 0,
      hint: T('Un habla reproducida suele completar el verbo que la introduce.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la subordinada con su valor.'),
      pairs: [
        { a: T('{Aunque llovía, salió}'), b: T('concesiva') },
        { a: T('{Caminó conforme a la palabra}'), b: T('conformativa') },
        { a: T('{para que se cumplan las Escrituras}'), b: T('final') },
        { a: T('{A medida que avanzaba, crecía}'), b: T('proporcional') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'oração',
      hint: T('En {Sé que él sabe}, el {que} abre y la principal decide.'),
    },
  ],
};

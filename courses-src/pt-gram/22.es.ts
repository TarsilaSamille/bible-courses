import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  section: T('La estructura del período'),
  title: T('Puntuación'),
  subtitle: T('Pausa, relación y delimitación'),
  body: C(`**Visión general.** La {coma} separa términos de la misma función o marca una pausa menor: en {Y, luego, dijo el SEÑOR}, separa el adjunto {luego} del resto.

**Regla 1.** Los {dos puntos} anuncian lo que viene: en {Dijo Jesús: «Venid a mí»}, introducen el habla, y el habla es el objeto de {dijo}.

**Regla 2.** El {punto y coma} separa períodos extensos, no términos: en {El alma es paciente; el amor, no}, el punto y coma separa dos oraciones enteras.

**Regla 3.** Las {comillas} delimitan el discurso directo, y los {guiones} y {paréntesis} añaden una explicación al margen: en {Jesús, el Hijo de Dios, salió}, los guiones marcan la explicación.

**Regla 4.** La coma no puede separar el verbo de su sujeto ni dos términos unidos por {y}: en {Dios, que creó el mundo, ama}, las comas marcan la oración adjetiva, no el sujeto.

**Aplicación.** En {Dijo Jesús, mirándolos: «¿Quiénes son estos?»}, los dos puntos anuncian el habla y la coma separa el adjunto {mirándolos} del núcleo. En griego, el habla va entre comillas griegas o itálicas y se anuncia con **ἐγένετο δέ** sin puntuación de dos puntos: las dos lenguas hacen el mismo trabajo con señales distintas, y por eso la puntuación de un texto antiguo es siempre una **interpretación** del traductor.

**Verificación.** Antes de puntuar, pregunta: ¿dónde se detiene la oración? ¿Qué términos están **unidos** de tal modo que no se pueden separar? Y la coma que quiero poner, ¿separa **núcleo de núcleo**? Si separa, está mal. Tres preguntas resuelven la puntuación de una oración entera, y la segunda es la que impide la coma indebida entre sujeto y verbo.`),
  vocab: [
    V('ponto final', 'ponto final', 'marca el final del período'),
    V('vírgula', 'vírgula', 'pausa menor'),
    V('ponto e vírgula', 'ponto e vírgula', 'pausa entre períodos'),
    V('dois-pontos', 'dois-pontos', 'anuncia lo que viene'),
    V('travessão', 'travessão', 'añade una explicación al margen'),
    V('aspas', 'aspas', 'delimitan el habla'),
    V('parênteses', 'parênteses', 'añaden sin interrumpir'),
    V('reticências', 'reticências', 'suspensión del sentido'),
    V('olhando para eles', 'olhando para eles', 'adjunto que separa la coma'),
    V('ἐγένετο δέ', 'ἐγένετο δέ', 'anuncia el habla en griego, sin dos puntos'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La {coma} separa términos de la misma función o marca una pausa menor: en {Y, luego, dijo el SEÑOR}, separa el adjunto {luego} del resto.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Los {dos puntos} anuncian lo que viene: en {Dijo Jesús: «Venid a mí»}, introducen el habla, y el habla es el objeto de {dijo}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {punto y coma} separa períodos extensos, no términos: en {El alma es paciente; el amor, no}, el punto y coma separa dos oraciones enteras.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Las {comillas} delimitan el discurso directo, y los {guiones} y {paréntesis} añaden una explicación al margen: en {Jesús, el Hijo de Dios, salió}, los guiones marcan la explicación.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La coma no puede separar el verbo de su sujeto ni dos términos unidos por {y}: en {Dios, que creó el mundo, ama}, las comas marcan la oración adjetiva, no el sujeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('La puntuación que el griego no tenía'),
      text: T(
        'El griego antiguo tenía punto y coma, y ningún signo para el habla: el discurso directo va entre comillas, y es el verbo introductor el que marca el paso. El português tuvo que inventar los dos puntos, y por eso la puntuación griega traducida es siempre una lectura moderna: quien lee {Dijo Jesús: «Venid a mí»} en griego está leyendo {εἶπεν ὁ Ἰησοῦς}, que no tiene nada de dos puntos.',
      ),
    },
    {
      label: T('El guion que se confundió con la coma'),
      text: T(
        'El guion marca una relación que el lector tiene que reconstruir: una explicación al margen, un par que solo tiene sentido junto. En {Jesús, el Hijo de Dios, salió}, el guion dice que {el Hijo de Dios} explica a {Jesús}. Cuando el mismo par se puede leer sin pausa, es coma, y por eso las dos señales no son intercambiables.',
      ),
    },
  ],
  examples: [
    {
      text: 'Disse Jesus, olhando para eles: «Quem são estes?»',
      gloss: T('La coma separa el adjunto {mirándolos}; los dos puntos anuncian el habla.'),
    },
    {
      text: 'No princípio, disse Deus.',
      gloss: T('La coma separa el adjunto adverbial {No princípio} del sujeto {Dios}.'),
    },
    {
      text: 'Deus, que criou o mundo, ama o homem.',
      gloss: T('Las comas marcan la oración adjetiva {que creó el mundo}, no el sujeto.'),
    },
    {
      text: 'A alma é paciente; o amor, não.',
      gloss: T('El punto y coma separa dos oraciones enteras, y la coma marca la omisión de {es}.'),
    },
    {
      text: 'Jesus, o Filho de Deus, saiu.',
      gloss: T('Los guiones marcan una explicación al margen, no una pausa simple.'),
    },
    {
      text: 'O Verbo (aquele que estava com Deus) se fez carne.',
      gloss: T('Los paréntesis añaden una explicación sin interrumpir la lectura.'),
    },
    {
      text: 'E Jesus chorou...',
      gloss: T('Los puntos suspensivos marcan suspensión, y el punto cierra el período.'),
    },
    {
      text: '«Quem são estes?» perguntou Jesus.',
      gloss: T('El habla va entre comillas y antes del verbo, y el orden invertido es el griego.'),
    },
    {
      text: 'O Verbo se fez carne e habitou entre nós.',
      gloss: T('Sin coma entre {carne} y {y}: la conjunción ya une los verbos.'),
    },
  ],
  tables: [
    {
      caption: T('Las señales y lo que marca cada una'),
      head: [T('Sinal'), T('O que marca'), T('Onde aparece'), T('Exemplo')],
      rows: [
        [T('.'), T('fim do período'), T('no fim da frase'), T('{saiu.}')],
        [T(','), T('pausa menor, enumeração'), T('dentro do período'), T('{E, logo, disse}')],
        [
          T(';'),
          T('pausa entre orações extensas'),
          T('entre coordenadas'),
          T('{paciente; o amor, não}'),
        ],
        [
          T(':'),
          T('anúncio do que vem'),
          T('antes da fala ou da explicação'),
          T('{Disse: «Vinde»}'),
        ],
        [
          T('-'),
          T('explicação à parte'),
          T('em pares explicativos'),
          T('{Jesus, o Filho de Deus, saiu}'),
        ],
        [T('«»'), T('discurso direto'), T('em volta da fala'), T('{«Quem são estes?»}')],
        [
          T('()'),
          T('acréscimo sem interromper'),
          T('em volta do parêntese'),
          T('{(aquele que estava com Deus)}'),
        ],
        [T('...'), T('suspensão'), T('antes do ponto final'), T('{chorou...}')],
      ],
    },
    {
      caption: T('Dónde entra la coma y dónde no'),
      head: [T('Situação'), T('Vírgula?'), T('Exemplo'), T('Porquê')],
      rows: [
        [
          T('entre sujeito e verbo'),
          T('não'),
          T('{Deus ama}'),
          T('separaria o que é um só sintagma'),
        ],
        [
          T('entre os termos de uma enumeração'),
          T('sim'),
          T('{a, b e c}'),
          T('cada item é um sintagma'),
        ],
        [
          T('antes de {e} em enumeração simples'),
          T('não'),
          T('{Jesus foi, viu e falou}'),
          T('a conjunção já separa'),
        ],
        [
          T('entre duas coordenadas'),
          T('sim'),
          T('{veio, mas não viu}'),
          T('cada oração é um período'),
        ],
        [
          T('ao redor de oração adjetiva explicativa'),
          T('sim'),
          T('{Deus, que criou, ama}'),
          T('a oração é acessória'),
        ],
        [
          T('depois de adjunct no início'),
          T('sim'),
          T('{No princípio, disse Deus}'),
          T('a pausa marca o fim do adjunct'),
        ],
        [
          T('entre dois sujeito coordenados'),
          T('não'),
          T('{Deus e sua palavra amaram}'),
          T('o sujeito é um só sintagma'),
        ],
      ],
    },
    {
      caption: T('Puntuación del habla y del discurso indirecto'),
      head: [T('Tipo'), T('Sinal'), T('Exemplo'), T('Observação')],
      rows: [
        [
          T('fala direta'),
          T('«aspas» e dois-pontos antes'),
          T('{Disse: «Vinde»}'),
          T('o verbo fica fora'),
        ],
        [
          T('fala direta depois do verbo'),
          T('«aspas» sem dois-pontos'),
          T('{Disse «Vinde»}'),
          T('a pausa é menor'),
        ],
        [
          T('fala indireta'),
          T('sem aspas, com {que}'),
          T('{Disse que viria}'),
          T('não há discurso transcrito'),
        ],
        [
          T('fala no fim'),
          T('«aspas» e ponto final'),
          T('{«Quem são?» perguntou}'),
          T('a posição é grega'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Dios, que creó el mundo, ama al hombre}, la coma marca:'),
    options: [
      T('la oración adjetiva {que creó el mundo}'),
      T('la separación entre el sujeto {Dios} y el verbo {ama}'),
      T('la separación entre dos objetos directos'),
      T('la enumeración de tres acciones distintas'),
    ],
    answer: 0,
    hint: T('La coma separa el accesorio del núcleo, nunca el sujeto del verbo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Qué señal anuncia el habla que viene después?'),
      options: [
        T('los dos puntos, en {Dijo Jesús: «Venid a mí»}'),
        T('el guion, en {Dijo Jesús — «Venid a mí»}'),
        T('el punto y coma, en {Dijo Jesús; «Venid a mí»}'),
        T('el punto final, en {Dijo Jesús. «Venid a mí»}'),
      ],
      answer: 0,
      hint: T('Los dos puntos dicen {aquí viene lo que sigue}.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada señal con el uso correcto.'),
      pairs: [
        { a: T('{,}'), b: T('pausa menor dentro del período') },
        { a: T('{:}'), b: T('anuncio del habla') },
        { a: T('{;}'), b: T('separación de oraciones extensas') },
        { a: T('{-}'), b: T('explicación al margen') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'ponto',
      hint: T('En {salió.}, el punto cierra la oración.'),
    },
  ],
};

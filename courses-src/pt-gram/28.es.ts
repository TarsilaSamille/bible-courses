import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  section: T('La oración y sus términos'),
  title: T('Análisis de los términos accesorios'),
  subtitle: T('Adjuntos, aposición y vocativo'),
  body: C(`**Visión general.** Un {adjunto adnominal} caracteriza un nombre y el {adjunto adverbial} indica circunstancia: en {el amor de Dios}, {de Dios} completa un nombre; en {salió de noche}, {de noche} indica tiempo.

**Regla 1.** Una {aposición} explica, restringe o resume un término anterior: en {Jesús, el Hijo del carpintero, salió}, {el Hijo del carpintero} explica a {Jesús}.

**Regla 2.** El {vocativo} se dirige al interlocutor y va entre comas: en {Jesús, Señor nuestro, entró}, {Señor nuestro} llama, y lo que está entre las comas es lo vocativo.

**Regla 3.** La prueba que decide entre {aposición} y {vocativo} es el referente del {nuestro}: en {Señor nuestro, aquí estamos}, {nuestro} ya se refiere a {nosotros}, y el término es vocativo.

**Regla 4.** Todo término accesorio se puede quitar sin romper la oración: en {Y, al anochecer, dijo}, {al anochecer} sale y el período queda entero, al contrario de {los cielos} en {creó los cielos}.

**Aplicación.** En {Jesús, Señor nuestro, respondió}, los dos términos entre comas son **vocativo** y **aposición** a la vez, y lo que los distingue es la función: el vocativo **llama** a alguien y la aposición **explica** un nombre. En griego, el vocativo es la **forma de vocativo** ({κύριε}) y la aposición es la misma forma en **nominativo** ({ὁ κύριος}), y el griego distingue lo que el portugués distingue por puntuación.

**Verificación.** La pregunta que lo decide: si **quito** este término, ¿la oración sigue teniendo sentido? Si es así, es accesorio. Si no, es integrante. Luego: ¿concorda con un nombre (adnominal) o es invariable (adverbial)? Y ¿es **aposición** (explica) o **vocativo** (llama)? Tres preguntas, y el análisis cierra sin ambigüedad.`),
  vocab: [
    V('adjunto adnominal', 'adjunto adnominal', 'caracteriza un nombre'),
    V('adjunto adverbial', 'adjunto adverbial', 'indica circunstancia'),
    V('caracterização', 'caracterização', 'función del adjunto adnominal'),
    V('circunstância', 'circunstância', 'función del adjunto adverbial'),
    V('aposto', 'aposto', 'explica un término anterior'),
    V('explicação', 'explicação', 'lo que hace la aposición'),
    V('vocativo', 'vocativo', 'se dirige al interlocutor'),
    V('interpelação', 'interpelação', 'lo que hace el vocativo'),
    V('Senhor nosso', 'Senhor nosso', 'vocativo en griego, {κύριε}'),
    V('o Filho do carpinteiro', 'o Filho do carpinteiro', 'aposición de {Jesús}'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Un {adjunto adnominal} caracteriza un nombre y el {adjunto adverbial} indica circunstancia: en {el amor de Dios}, {de Dios} completa un nombre; en {salió de noche}, {de noche} indica tiempo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Una {aposición} explica, restringe o resume un término anterior: en {Jesús, el Hijo del carpintero, salió}, {el Hijo del carpintero} explica a {Jesús}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'El {vocativo} se dirige al interlocutor y va entre comas: en {Jesús, Señor nuestro, entró}, {Señor nuestro} llama, y lo que está entre las comas es lo vocativo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La prueba que decide entre {aposición} y {vocativo} es el referente del {nuestro}: en {Señor nuestro, aquí estamos}, {nuestro} ya se refiere a {nosotros}, y el término es vocativo.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Todo término accesorio se puede quitar sin romper la oración: en {Y, al anochecer, dijo}, {al anochecer} sale y el período queda entero, al contrario de {los cielos} en {creó los cielos}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Lo que el griego marca es lo que el portugués puntúa'),
      text: T(
        'En griego, el vocativo {κύριε} y el nominativo {ὁ κύριος} son formas distintas, y la diferencia está en la terminación, no en la puntuación. El portugués perdió la terminación y ganó la coma, de modo que {Señor nuestro} y {el Señor} solo se distinguen por el contexto. Por eso el mismo pasaje puede tener dos lecturas sin que el griego lo permita.',
      ),
    },
    {
      label: T('El adjunto que cambia la lectura cuando se mueve'),
      text: T(
        'En {Ayer vio Jesús}, el adjunto es {ayer} y no se concluye nada más. En {Jesús vio ayer}, aparece el mismo {ayer} y la lectura tampoco cambia mucho. Pero en {Solo ayer vio Jesús}, {solo} deja de ser adjunto adverbial y pasa a intensificar {ayer}: la posición decide la función, y por eso un adjunto no es sinónimo de un adverbio.',
      ),
    },
  ],
  examples: [
    {
      text: 'Jesus, Senhor nosso, respondeu',
      gloss: T('{Señor nuestro} es vocativo: el {nuestro} ya se refiere al interlocutor.'),
    },
    {
      text: 'Jesus, o Filho do carpinteiro, saiu',
      gloss: T('{el Hijo del carpintero} es aposición: explica y restringe a {Jesús}.'),
    },
    {
      text: 'E, ao anoitecer, disse aos seus discípulos',
      gloss: T('Dos comas y tres adjuntos: {al anochecer}, {a sus discípulos} y la {Y} de enlace.'),
    },
    {
      text: 'o amor verdadeiro',
      gloss: T('{verdadero} es adjunto adnominal: caracteriza a {amor} y concuerda con él.'),
    },
    {
      text: 'o Verbo se fez carne',
      gloss: T(
        '{se hizo} es locución verbal y {carne} el predicativo, con {se hizo} como verbo de enlace.',
      ),
    },
    {
      text: 'o velho Davi',
      gloss: T('{David} es nombre propio y aposición restrictiva: dice qué {rey} nombra el texto.'),
    },
    {
      text: 'Saiu de noite.',
      gloss: T('{de noche} es adjunto adverbial de tiempo; puede ir al final de la oración.'),
    },
    {
      text: 'Aleluia! Coração que não sente',
      gloss: T('La exclamación va suelta: el {Aleluia} es interjección y el resto, período.'),
    },
    {
      text: 'Amigo, servidor do Senhor',
      gloss: T('Dos comas seguidas: el primero abre vocativo y el segundo aposición.'),
    },
  ],
  tables: [
    {
      caption: T('Accesorios: lo que hace cada uno'),
      head: [T('Tipo'), T('Função'), T('Concorda?'), T('Pode sair?'), T('Exemplo')],
      rows: [
        [
          T('{adjunto adnominal}'),
          T('caracteriza um nome'),
          T('sim'),
          T('sim'),
          T('{o amor verdadeiro}'),
        ],
        [
          T('{adjunto adverbial}'),
          T('indica circunstância'),
          T('não'),
          T('sim'),
          T('{ao anoitecer}'),
        ],
        [
          T('{aposto explicativo}'),
          T('explica um termo'),
          T('sim'),
          T('sim'),
          T('{o Filho do carpinteiro}'),
        ],
        [
          T('{aposto restritivo}'),
          T('restringe um termo'),
          T('sim'),
          T('não'),
          T('{o velho Davi}'),
        ],
        [
          T('{vocativo}'),
          T('interpela o interlocutor'),
          T('sim'),
          T('não, muda o tom'),
          T('{Senhor nosso}'),
        ],
      ],
    },
    {
      caption: T('Aposición y vocativo en paralelo'),
      head: [T('Critério'), T('Aposto'), T('Vocativo'), T('Exemplo')],
      rows: [
        [
          T('quem explica'),
          T('um termo já dito'),
          T('o interlocutor'),
          T('{o Filho de Deus} contra {Senhor}'),
        ],
        [
          T('posição'),
          T('vem depois do nome'),
          T('vem no início ou meio'),
          T('{Jesus, o Filho, saiu}'),
        ],
        [
          T('forma grega'),
          T('{ὁ κύριος}, nominativo'),
          T('{κύριε}, vocativo'),
          T('as duas formas'),
        ],
        [
          T('o que o nome explica'),
          T('quem o nome é'),
          T('a quem se fala'),
          T('{o Filho} contra {Senhor}'),
        ],
        [
          T('retirar o termo'),
          T('altera o sentido'),
          T('altera o tom'),
          T('a explicação se perde'),
        ],
      ],
    },
    {
      caption: T('Adjunto adverbial por circunstancia'),
      head: [T('Circunstância'), T('Pergunta'), T('Exemplo'), T('Pode sair?')],
      rows: [
        [T('tempo'), T('{quando?}'), T('{ao anoitecer}'), T('sim')],
        [T('lugar'), T('{onde?}'), T('{em Jerusalém}'), T('sim')],
        [T('modo'), T('{como?}'), T('{com cautela}'), T('sim')],
        [T('causa'), T('{por quê?}'), T('{por amor}'), T('raramente')],
        [T('finalidade'), T('{para quê?}'), T('{para que o veja}'), T('não')],
        [T('concessão'), T('{embora?}'), T('{embora tardasse}'), T('não')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {Jesús, Señor nuestro, entró en Jerusalén}, {Señor nuestro} es vocativo porque:'),
    options: [
      T('llama al interlocutor, y el {nuestro} ya se refiere a él'),
      T('explica quién es {Jesús}'),
      T('concurda con {Jesús} en género y número'),
      T('va entre comas, como todo vocativo'),
    ],
    answer: 0,
    hint: T('Una aposición explica el nombre anterior; un vocativo llama a quien escucha.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Y, al anochecer, dijo a sus discípulos}, {al anochecer} es:'),
      options: [
        T('adjunto adverbial de tiempo, y puede salir de la oración'),
        T('sujeto, porque va justo después del verbo {dijo}'),
        T('objeto indirecto de {dijo}'),
        T('aposición de {Y}'),
      ],
      answer: 0,
      hint: T('Quita {al anochecer} y la oración sigue entera.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada término con el papel que ejerce.'),
      pairs: [
        { a: T('{el Hijo del carpintero}'), b: T('aposición') },
        { a: T('{Señor nuestro}'), b: T('vocativo') },
        { a: T('{verdadero} en {el amor verdadero}'), b: T('adjunto adnominal') },
        { a: T('{en Jerusalén}'), b: T('adjunto adverbial de lugar') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('undefined'),
      answer: 'aposto',
      hint: T('En {Jesús, el Hijo del carpintero, salió}.'),
    },
  ],
};

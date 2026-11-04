import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('Verbo'),
  title: T('Los tres registros del verbo: plano, educado y honorífico'),
  subtitle: T(
    'El japonés marca la distancia con un auxiliar pegado a la raíz del verbo — y por eso se parece al coreano sin ser lo mismo',
  ),
  body: C(`
## El verbo no cambia: cambia el auxiliar

La lección del verbo mostró los dos primeros registros, el plano ({naru}, {taberu}) y el educado (*narimasu*, *tabimasu*). El sistema se cierra con el tercero, y el cierre muestra la diferencia más nítida entre el japonés y el coreano.

En coreano el honorífico es la palabra: *meokda*, *meokneunda*, *meogeora*, tres verbos distintos para la misma acción, escogidos según la posición del otro. En japonés es el **auxiliar**: la raíz {taberu} "comer" es la misma en los tres registros, y lo que cambia es la pieza pegada al final. Mismo razonamiento, misma distancia, dos ingenierías distintas para la misma idea.

El registro **plano** es entre iguales, y es también el registro del texto escrito: un cuaderno, un correo, un catálogo, una receta. No es grosero, es simplemente directo. No marca posición porque no tiene posición que marcar.

El registro **educado** ({naru} más {masu}) es el patrón del habla y de los documentos comunes. Es la forma que casi todo el mundo usa todo el día sin pensar, y por eso un hablante japonés suena cortés sin ninguna fórmula de cortesía. El final {desu} cierra la frase.

El registro **honorífico** es para quien está por encima de usted: el cliente, el profesor, un anciano, Dios.

## Las dos mitades del honorífico

El honorífico tiene dos mitades, y no se mezclan. El {keigo} honra al otro: cuando usted dice "el cliente ya ha llegado" con {irassharu}, está hablando del cliente y hablando de él con respeto. El {kenjōgo} rebaja a sí mismo: cuando usted dice "lo he comprado para usted", está hablando de sí y hablando de sí con respeto.

La construcción es la misma en los dos casos, y eso es lo que paraliza al principiante: ve una sola pieza y concluye que hay un solo honorífico. Hay dos, y usar uno en lugar del otro suena mal sin que él pueda decir por qué.

## Cómo se forma

El {keigo} funciona como auxiliar pegado a la raíz. Para {taberu}, la forma de respeto es *tabete irassharu*, y la misma pieza sirve al verbo "ir" y al verbo "venir", porque los tres pasan por ahí.

El {kenjōgo} usa verbos propios. Para {suru}, decir y hacer, la forma humilde es *mōsu*, y su forma educada es *mōshimasu*. Para {taberu}, es *itadaku*, que es la palabra que todo japonés dice al sentarse a comer.

Y hay dos excepciones que el lector necesita conocer, porque son los dos casos en que el honorífico japonés no es un auxiliar. La primera es {nasaru}, el honorífico de {suru}: la raíz cambia por completo, y no hay ninguna pieza que pegar. La segunda es {osshharu}, el honorífico de "decir": la raíz también cambia, y el sonido inicial se duplica. Ningún otro verbo se comporta así.

Hay además un tercer caso, aparte: {irassharu} es él mismo un verbo completo, que significa "estar, estar aquí". Por eso aparece solo, sin ninguna raíz delante, "el profesor está aquí". Todos los demás honoríficos son una pieza pegada; este es una palabra.

## El error que no es error

El error más común de quien empieza es usar la forma humilde hablando de sí mismo. "Ayer fui a la iglesia" es registro neutro: narrar no exige rebajarse. El {kenjōgo} es para cuando usted actúa como servidor del otro: usted compra y él recibe, usted prepara y él come.

La diferencia entre "yo he comprado" y "lo he comprado para usted" no está en el verbo, sino en el destinatario. La fórmula es la misma; lo que cambia es a quién va dirigido el gesto. Y por eso *itasu*, la forma humilde de "hacer", casi siempre aparece con alguien al lado: "lo hago para usted". Nunca es "yo hago" y nada más.

Nada de esto es cortesía decorativa. El honorífico es el modo en que el japonés marca distancia y posición sin decir nunca que existe distancia. Un catálogo de precios no usa honorífico, porque nadie está por encima de quien lee la lista. Una carta de negocios sí lo usa, porque el cliente está por encima de quien escribe.

## El gancho bíblico

La traducción japonesa de la Biblia leída en la iglesia suele aparecer en registro educado, porque es lo que suena bien leído en voz alta. En el texto escrito el patrón es otro: {keigo} para Dios, educado para los seres humanos, plano en la narrativa. El mismo contraste aparece en coreano, y es lo que ata los dos cursos.

Y el punto más hermoso de aquí, que es teológicamente exacto: **Dios es tratado con el {keigo} más alto y nunca con el {kenjōgo}**. Nadie ora en el registro que se rebaja a sí mismo para pedirle algo a Dios. La gramática de la distancia ya coloca a Dios por encima sin que nadie tenga que enseñarlo, y por eso el punto teológico y el punto gramatical terminan en el mismo sitio.
`),
  vocab: [
    V('naru', 'なる', 'ser; volverse (naru) — la raíz de los ejemplos de la lección'),
    V('taberu', '食べる', 'comer (taberu) — la raíz que atraviesa los tres registros'),
    V('masu', 'ます', 'auxiliar del registro educado: misma raíz, distancia marcada'),
    V('desu', 'です', 'final de frase del registro educado: "es"'),
    V('keigo', '敬語', 'el honorífico que honra al otro (keigo)'),
    V('irassharu', 'いらっしゃる', 'honorífico de "estar, venir, estar aquí"; auxiliar de respeto'),
    V(
      'nasaru',
      'なさる',
      'honorífico de {suru}: la primera excepción, la raíz cambia por completo',
    ),
    V(
      'osshharu',
      'おっしゃる',
      'honorífico de "decir": la segunda excepción, la raíz cambia y el sonido inicial se duplica',
    ),
    V('kenjōgo', '謙譲語', 'el honorífico que se rebate a sí mismo (kenjōgo)'),
    V('mōsu', '申す', 'humilde de "decir": hablar de sí a quien está por encima'),
    V('itadaku', 'いただく', 'humilde de "comer": recibir de alguien (la palabra de la comida)'),
    V('itasu', 'いたす', 'humilde de "hacer": hacer para el señor, siempre con destinatario'),
    V('suru', 'する', 'hacer, decir (suru) — la raíz cuyo honorífico es otro verbo'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El verbo no cambia entre registros: lo que cambia es el auxiliar pegado a la raíz. En coreano cambia la palabra; en japonés cambia la pieza pegada al final.',
      ),
    },
    {
      n: '2',
      text: T(
        'El plano es entre iguales y es el registro del texto escrito; el educado ({masu}) es el padrão del habla; el honorífico es para quien está por encima de usted.',
      ),
    },
    {
      n: '3',
      text: T(
        '{keigo} honra al otro y {kenjōgo} se rebate a sí mismo. La construcción es la misma en las dos mitades, y las dos no se mezclan.',
      ),
    },
    {
      n: '4',
      text: T(
        'Narrar lo que usted mismo hizo no exige humildad. El {kenjōgo} es para cuando usted actúa como servidor del otro, y la diferencia entre "yo he comprado" y "lo he comprado para usted" está en el destinatario, no en el verbo.',
      ),
    },
    {
      n: '5',
      text: T(
        'Dos excepciones rompen el patrón del auxiliar: {nasaru}, el honorífico de {suru}, y {osshharu}, el honorífico de "decir", cambian la raíz entera. Y {irassharu} no es auxiliar: es un verbo completo.',
      ),
    },
  ],
  notes: [
    {
      label: T('El honorífico es información, no decoración'),
      text: T(
        'Existe para marcar la distancia y la posición entre las dos personas de la frase, y nada más. Un catálogo de precios no usa honorífico porque nadie está por encima de quien lee la lista; una carta de negocios sí lo usa porque el cliente está por encima de quien escribe. Así dice el japonés quién está arriba, sin usar nunca la palabra "arriba".',
      ),
    },
    {
      label: T('Dios recibe keigo y nunca kenjōgo'),
      text: T(
        'En las traducciones japonesas de 1987 y de 2003 el tratamiento de Dios es el honorífico que honra al otro, y el registro educado para los seres humanos. Nadie ora en el registro que se rebate a sí mismo para pedirle algo a Dios: la gramática de la distancia coloca a Dios por encima de cualquier instrucción, y el punto teológico y el punto gramatical terminan en el mismo lugar.',
      ),
    },
  ],
  examples: [
    {
      text: '先生いらっしゃいます',
      gloss: T(
        'sensei wa irasshaimasu — el profesor está aquí (honorífico, y {irassharu} es verbo completo)',
      ),
    },
    {
      text: 'なさいます',
      gloss: T(
        'nasaimasu — usted hace (honorífico de {suru}; la primera excepción, la raíz cambia)',
      ),
    },
    {
      text: 'おっしゃいます',
      gloss: T(
        'osshahaimasu — usted dice (honorífico de "decir"; la segunda excepción, el sonido inicial se duplica)',
      ),
    },
    {
      text: 'いただきます',
      gloss: T('itadakimasu — yo como (humilde; es la palabra que se dice al sentarse a comer)'),
    },
    {
      text: 'いたします',
      gloss: T(
        'itashimasu — yo hago, para usted (humilde de {suru}; {itasu} siempre tiene destinatario)',
      ),
    },
  ],
  tables: [
    {
      caption: T('Los tres registros y lo que dice cada uno'),
      head: [T('Registro'), T('Auxiliar'), T('Para quién'), T('Dónde aparece')],
      rows: [
        [
          T('plano'),
          T('ninguno'),
          T('un igual, y el texto escrito'),
          T('cuaderno, catálogo, receta, narrativa bíblica'),
        ],
        [
          T('educado'),
          T('{masu}'),
          T('cualquier persona, por omisión'),
          T('el habla común; {desu} cierra la frase'),
        ],
        [
          T('honorífico'),
          T('{irassharu} en el {keigo}, {mōsu} en el {kenjōgo}'),
          T('quien está por encima de usted'),
          T('carta de negocios, trato por nombre, oración'),
        ],
      ],
    },
    {
      caption: T('Las dos mitades del honorífico, con construcción idéntica'),
      head: [T('Mitad'), T('Qué hace'), T('Sobre quién se habla'), T('Verbo típico')],
      rows: [
        [
          T('{keigo}'),
          T('honra al otro'),
          T('el cliente, el profesor, Dios'),
          T('{irassharu}, "estar, venir"'),
        ],
        [
          T('{kenjōgo}'),
          T('se rebate a sí mismo'),
          T('usted mismo, en el papel de servidor'),
          T('{mōsu}, "decir"'),
        ],
      ],
    },
    {
      caption: T('Dónde falla el patrón del auxiliar'),
      head: [T('Verbo de origen'), T('Forma de respeto'), T('Qué pasa'), T('Por qué es excepción')],
      rows: [
        [
          T('{suru}'),
          T('{nasaru}'),
          T('la raíz cambia por completo'),
          T('no hay ninguna pieza que pegar al final'),
        ],
        [
          T('"decir"'),
          T('{osshharu}'),
          T('la raíz cambia y el sonido inicial se duplica'),
          T('el sonido no se deduce del resto del verbo'),
        ],
        [
          T('"estar"'),
          T('{irassharu}'),
          T('es un verbo completo, no un auxiliar'),
          T('aparece solo, sin ninguna raíz delante'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Cuando usted dice "lo he comprado para usted", ¿qué mitad del honorífico está en uso?',
    ),
    options: [
      T('{keigo}, que honra al otro'),
      T('{kenjōgo}, que se rebate a sí mismo'),
      T('ninguna: es registro neutro'),
      T('las dos a la vez'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete el honorífico de {suru} "hacer", cuya raíz cambia por completo y no usa auxiliar: ______',
      ),
      answer: 'nasaru',
    },
    {
      kind: 'match',
      prompt: T('Une cada forma con lo que hace'),
      pairs: [
        { a: T('{irassharu}'), b: T('honra al otro: "usted está aquí"') },
        { a: T('{mōsu}'), b: T('se rebate a sí mismo: "yo lo digo con reverencia"') },
        { a: T('{itasu}'), b: T('hacer para el señor, con destinatario') },
        { a: T('{masu}'), b: T('el auxiliar del registro educado, que no marca distancia') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estas afirmaciones es correcta?'),
      options: [
        T('narrar lo que usted mismo hizo exige el registro humilde'),
        T('el honorífico japonés cambia la raíz del verbo, como el coreano cambia la palabra'),
        T('las dos mitades del honorífico tienen la misma construcción y no pueden mezclarse'),
        T('Dios es tratado en el registro humilde en las traducciones de 1987 y de 2003'),
      ],
      answer: 2,
    },
  ],
};

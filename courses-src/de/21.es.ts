import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('Los verbos inseparables'),
  subtitle: T('besuchen, verstehen, erklären — el prefijo que nunca se suelta'),
  section: T('Los verbos'),
  body: C(`## No todo prefijo es separable

La lección anterior mostró verbos cuyo prefijo viaja al final de la oración. Este capítulo es la cara de la moneda: hay verbos en los que el prefijo **nunca se mueve de su sitio**, en ningún tiempo verbal, por larga que sea la oración.

{besuchen} «visitar» es inseparable. Nunca un {be-} acentuado en medio de la frase, nunca una sílaba final por su cuenta. El {be-} forma parte de la raíz. Y de ahí se sigue una advertencia: **un verbo inseparable nunca admite el {zu} de dirección**.

Esa es la prueba práctica. En {Ich sehe dich} «yo te veo», el {zu} es imposible: sería {Ich sehe zu dich}, que suena mal. {Ich gehe zu dir} «yo voy hasta ti» es imposible por la razón contraria: {gehen} es separable y exige {zu}.

## Tres familias

Los inseparables se organizan en tres grupos, cada uno con su sufijo característico:

**1. Prefijo + verbo sin {te}.** {besuchen} {be-} + {suchen}, {erklären} {er-} + {klären}, {erzählen} {er-} + {zählen}, {betrachten} {be-} + {trachten}. Aquí el prefijo se solda al verbo base, que pierde o cambia su propia terminación.

**2. Prefijo + verbo con {t} o {d} intercalado.** {entstehen} {ent-} + {stehen}, {verstehen} {ver-} + {stehen}, {enthalten} {ent-} + {halten}, {erhalten} {er-} + {halten}. La {t} o la {d} se mete entre el prefijo y el radical — {ent-ste-hen} — y la palabra sigue siendo inseparable como un todo.

**3. Prefijo + {ieren}.** {studieren}, {probieren}, {telefonieren}, {notieren}. Aquí la terminación {ieren} hace que el verbo sea fácil de reconocer, y la primera {i} es siempre larga, [iː].

La única manera de reconocer un inseparable es **conocer el verbo**. Ninguna regla de ortografía o pronunciación los separa de los separables. Por eso esta lección es, en la práctica, una lista, y una lista bien escogida, con los verbos que de verdad vas a encontrar.

## Los prefijos que importan

Los prefijos de los inseparables llevan sentido, y el mismo prefijo reaparece en toda una familia:

- {be-} «por, hacia dentro»: {bekommen} «recibir», {beginnen} «empezar», {besuchen} «visitar», {bezahlen} «pagar», {betrachten} «considerar»
- {ver-} «mal, fuera de»: {verstehen} «entender», {verlieren} «perder», {verkaufen} «vender», {verbringen} «pasar», {vergessen} «olvidar»
- {ent-} «separación, origen»: {entstehen} «surgir», {entscheiden} «decidir», {entwickeln} «desarrollar», {enthalten} «contener»
- {er-} «alcanzar un resultado»: {erzählen} «contar», {erklären} «explicar», {erfahren} «enterarse», {erinnern} «recordar»
- {zer-} «destrucción total»: {zerbrechen} «romper», {zerstören} «destruir», {zerfallen} «desmoronarse»
- {miss-} «error, frustración»: {missverstehen} «entender mal», {missbilligen} «desaprobar»

Mira el {er-}: significa «llevar algo a término». {Er erklärt die Regel} «él explica la regla» — ha alcanzado claridad. {Er zählt} «él cuenta»: sin {er-} no hay resultado, solo la acción desnuda.

## El acento forma parte de la regla

La pronunciación es el criterio final. Un verbo separable acentúa su **radical** ({ˈaʊ̯fˌʃteːən}) y el prefijo es una sílula débil, casi tragada. Un inseparable acentúa el **prefijo** ([bəˈzuːxən] en {besuchen}, [vɛɐ̯ˈʃteːən] en {verstehen}). Esa es la impresión sonora que el oído registra antes de cualquier análisis.

Una prueba rápida: di la palabra muy despacio. Si la primera sílaba es débil y la segunda fuerte, probablemente es separable. Si la primera es la más fuerte, probablemente es inseparable.

## Dónde aparecen

Los inseparables dominan el alemán escrito y el vocabulario técnico, justo donde la composición es compleja: {erklären}, {beschreiben}, {verstehen}, {verbinden}. En el habla cotidiana hay menos, y por eso un principiante reconoce {besuchen} y {verstehen} antes que {aufstehen}: los dos primeros nunca se separan, y el tercero es la imagen misma de la separabilidad.

## Lo esencial

Un verbo es inseparable cuando el prefijo forma parte de la raíz; la prueba práctica es que **rechaza el {zu}** de dirección; {er-} significa «alcanzar un resultado»; y el acento de un inseparable cae sobre el prefijo, no sobre el radical.`),
  vocab: [
    V('besuchen', 'besuchen', 'visitar (inseparable: ich besuche dich)'),
    V('verstehen', 'verstehen', 'entender, comprender (er versteht mich)'),
    V('erklären', 'erklären', 'explicar (er erklärt la regla)'),
    V('erzählen', 'erzählen', 'contar, narrar (er erzählt eine Geschichte)'),
    V('bekommen', 'bekommen', 'recibir, obtener (ich bekomme ein Geschenk)'),
    V('beginnen', 'beginnen', 'empezar (wir beginnen jetzt)'),
    V('verlieren', 'verlieren', 'perder (er verliert den Schlüssel)'),
    V('verkaufen', 'verkaufen', 'vender (sie verkauft das Haus)'),
    V('vergessen', 'vergessen', 'olvidar (ich habe es vergessen)'),
    V('entscheiden', 'entscheiden', 'decidir (er entscheidet sich)'),
    V('entstehen', 'entstehen', 'surgir, originate (das Gerücht ist entstanden)'),
    V('erfahren', 'erfahren', 'enterarse (ich habe davon erfahren)'),
    V('erinnern', 'erinnern', 'recordar (ich erinnere mich an dich)'),
    V('bezahlen', 'bezahlen', 'pagar (er bezahlt la factura)'),
    V('zerbrechen', 'zerbrechen', 'romper (die Glasscherbe zerbricht)'),
    V('missverstehen', 'missverstehen', 'entender mal (er hat mich missverstanden)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué oración es correcta?'),
    options: [
      T('{Ich verstehe ihn.} — {verstehen} es inseparable y rechaza el {zu}'),
      T('{Ich verstehe zu ihn.} — el {zu} marca la dirección'),
      T('{Ich stehe zu ihn auf.} — el prefijo {auf} no se mueve'),
      T('{Ich zu verstehe ihn.} — el {zu} va antes del verbo conjugado'),
    ],
    answer: 0,
    hint: T('Regla §1: el {zu} de dirección solo existe con verbos separables.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Prefijo de {erklären} que significa «alcanzar un resultado»: ___'),
      answer: 'er-',
      hint: T('{erklären} = {er-} + {klären} «aclarar».'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada verbo con su prefijo.'),
      pairs: [
        { a: T('bekommen'), b: T('be- «por, hacia dentro»') },
        { a: T('vergessen'), b: T('ver- «fuera de lo debido»') },
        { a: T('entstehen'), b: T('ent- «origen, separación»') },
        { a: T('zerbrechen'), b: T('zer- «destrucción»') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué verbo es inseparable?'),
      options: [
        T('erzählen — el {er-} nunca se suelta de {zählen}'),
        T('anrufen — el {an-} va al final de la oración'),
        T('mitbringen — el {mit-} se separa en {Ich bringe es mit}'),
        T('aufstehen — el {auf-} suena [ˈaʊ̯f] al final'),
      ],
      answer: 0,
      hint: T('Regla §3: el acento del inseparable cae sobre el prefijo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Un verbo es inseparable cuando el prefijo forma parte de la raíz. La prueba práctica: **rechaza el {zu}** de dirección. {Ich sehe zu ihm} es imposible, {Ich sehe ihn} es correcto.',
      ),
    },
    {
      n: '2',
      text: T(
        'Separar un verbo inseparable destruye la palabra: {besuchen} escrito con {be-} al final no es una forma, es un error. Ninguna flexión lo permite.',
      ),
    },
    {
      n: '3',
      text: T(
        'El acento distingue los dos tipos sin análisis morfológico: el separable estresa el radical ({ˈaʊ̯fˌʃteːən}) y el inseparable el prefijo ([bəˈzuːxən] en {besuchen}).',
      ),
    },
    {
      n: '4',
      text: T(
        'El prefijo {er-} significa «alcanzar un resultado»: {erklären} «explicar», {erzählen} «contar», {erfahren} «enterarse», {erinnern} «recordar», {erreichen} «alcanzar». Sin {er-}, {zählen} es solo contar.',
      ),
    },
    {
      n: '5',
      text: T(
        'El participio de un separable es inseparable: {aufgestanden}, {angekommen}. El participio de un inseparable también: {verstanden}, {erklärt}, {besucht}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Cómo saber sin memorizar'),
      text: T(
        'Un estudiante que no conoce {empfehlen} no puede deducir que es inseparable, y es mejor no intentarlo, porque el intento falla. El camino seguro es el {diccionario}: si la forma del participio ({empfohlen}) contiene {ge-} en medio, con el prefijo delante, el verbo es inseparable. Esa es la única regla morfológica fiable, y funciona incluso con verbos que nunca has visto. La segunda es fonética: di la palabra despacio y escucha qué sílaba suena más fuerte. En {empfehlen} [ɛmˈpfeːlən] y en {aufstehen} [ˈaʊ̯fˌʃteːən] la respuesta llega antes del análisis.',
      ),
    },
    {
      label: T('Lectura bíblica'),
      text: T(
        'La Biblia de Lutero es, en buena parte, un catálogo de verbos inseparables, y no es casualidad. La teología cristiana necesita verbos que expresen **actos completos**, no movimientos: {erschaffen} «crear», {erlösen} «redimir», {erwählen} «elegir», {verheißen} «prometer», {vollenden} «consumar». En Génesis 1:1, {Am Anfang schuf Gott Himmel und Erde} «En el principio creó Dios los cielos y la tierra»: {schuf} es {erschaffen} en pasado, y el {er-} marca justo eso, la mano de Dios llega a un resultado. En Juan 3:16, {so hat Gott die Welt geliebt} «Dios amó tanto al mundo»: {geliebt} es el participio de {lieben}, que no tiene prefijo, y {hat} es el auxiliar del presente con sentido perfectivo. Reconocer los inseparables es reconocer acciones vistas como enteras.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich verstehe diese Regel nicht.',
      gloss: T('No entiendo esta regla ({nicht} al final, negando el verbo).'),
    },
    {
      text: 'Er besucht uns im Sommer.',
      gloss: T('Nos visita en verano ({besuchen} nunca se separa).'),
    },
    {
      text: 'Sie erklärt den Text gut.',
      gloss: T('Explica bien el texto ({er-} = alcanzar un resultado).'),
    },
    {
      text: 'Wir haben ein Geschenk bekommen.',
      gloss: T('Recibimos un regalo ({bekommen} al final de la oración, indecomponible).'),
    },
    {
      text: 'Ich sehe ihn, nicht zu ihm.',
      gloss: T('Lo veo, no voy hacia él (el {zu} rechaza el inseparable {sehen}).'),
    },
    { text: 'Ich gehe zu ihm.', gloss: T('Voy hacia él ({gehen} es separable y exige el {zu}).') },
    {
      text: 'Er hat den Schlüssel verloren.',
      gloss: T('Perdió la llave ({ver-} = fuera de lo debido).'),
    },
    {
      text: 'Die Sache ist schnell entstanden.',
      gloss: T('La cosa surgió rápidamente ({ent-} indica origen).'),
    },
    { text: 'Du hast mich missverstanden.', gloss: T('Me has entendido mal ({miss-} = error).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Separable frente a inseparable'),
      head: [T('Criterio'), T('Separable'), T('Inseparable')],
      rows: [
        ['posição do prefixo', 'no fim da oração', 'sempre colado'],
        ['acento', 'no radical', 'no prefixo'],
        ['aceita {zu} de direção', 'sim', 'não'],
        ['particípio', 'inseparável', 'inseparável'],
        ['exemplo', 'aufstehen / ich stehe auf', 'verstehen / ich verstehe'],
        ['significado do prefixo', 'direção ou finalidade', 'ação pontuada'],
      ],
    },
    {
      caption: T('Tabla 2 — Las tres familias de inseparables'),
      head: [T('Familia'), T('Forma'), T('Ejemplos')],
      rows: [
        ['prefijo + verbo', 'be- + suchen', 'besuchen, bezahlen, betrachten'],
        ['prefijo + t/d', 'ent- + stehen', 'entstehen, enthalten, verstehen'],
        ['prefijo + ieren', 'stud- + ieren', 'studieren, probieren, notieren'],
        ['prefijo de resultado', 'er- + klären', 'erklären, erzählen, erfahren'],
        ['prefijo de negação', 'ver- + lieren', 'verlieren, verhindern, verachten'],
      ],
    },
  ],
};

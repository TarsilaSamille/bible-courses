import { C, T, V } from '../shared.mts';

export default {
  id: 26,
  title: T('El futuro'),
  subtitle: T('werden más el infinitivo, y el presente con sentido futuro'),
  section: T('Los verbos'),
  body: C(`## La forma

El futuro alemán se construye con **werden** en presente más el infinitivo entero del verbo, sin terminación: *ich werde kommen*, *du wirst gehen*, *er wird sprechen*, *wir werden sehen*, *ihr werdet hören*, *sie werden kommen*. Fíjate en que *werden* es un verbo normal con su propia terminación; lo que no lleva terminación alguna es el segundo verbo.

La segunda forma verbal va al final: *Morgen werde ich dich anrufen*. Observa también que el futuro es el único tiempo que no exige una palabra de tiempo: *Ich werde dich anrufen* ya significa «te llamaré».

## El presente como futuro

En la práctica, el futuro simple es raro. El alemán dice casi siempre el futuro con el **presente** más una indicación de tiempo: *Ich komme morgen*, *Wir fahren am Sonntag*, *Sie kommt um halb acht*. Eso es natural con verbos de movimiento, pero la construcción sirve para cualquier verbo: *Ich rufe dich an* (te llamaré mañana). El único requisito es que el sentido futuro sea inequívoco por el contexto.

Para el futuro **hipotético** — lo que quizá ocurra — la lengua tiene dos formas, y se confunden a menudo. El **Futur I** (*ich werde kommen*) es la forma vieja, casi literaria: sobrevive en *Es wird nicht leicht sein*, «no será fácil». El **Futur II** de valor conjetural, *ich werde gekommen sein*, es hoy más común: «habré llegado», usado sobre todo en preguntas e hipótesis. Y el **Konjunktiv I** del *werden* aparece en la noticia, para «dicen que»: *Er wird in Berlin sein*.

## Deber y futuro

El futuro tiene vida propia dentro de *werden* + infinitivo + **zu**: *Ich habe etwas zu tun*, *Er hat nichts zu sagen*, *Wir haben viel zu lernen*. Aquí *werden* ya no anuncia un futuro: significa «haber». Y es la parte con *zu* la que lleva la dirección: *zu tun* «que hacer», *zu sagen* «que decir». Compara *Ich werde kommen* (voy a venir) con *Ich habe etwas zu tun* (tengo algo que hacer).

## Lo esencial

El futuro tiene dos puertas: el presente, cuando se habla de forma corriente, y *werden* más infinitivo, cuando se quiere marcar la proyección, la previsión o la amenaza. En cualquier caso, es la segunda forma de la proposición la que guarda el sentido.`),
  vocab: [
    V('werden', 'werden', 'auxiliar del futuro y de volverse'),
    V('ich werde kommen', 'werden', 'vendré (Futur I)'),
    V('wirst', 'werden', 'vas (segunda persona del futuro)'),
    V('wird', 'werden', 'va, se vuelve, ocurre'),
    V('rufe', 'rufen', 'llamo (presente con sentido futuro)'),
    V('komme morgen', 'kommen', 'vengo mañana (futuro en el presente)'),
    V('habe zu tun', 'tun', 'tengo que hacer (zu más infinitivo)'),
    V('nichts zu sagen', 'sagen', 'nada que decir'),
    V('Es wird nicht leicht sein.', 'sein', 'No será fácil.'),
    V('ich werde gekommen sein', 'werden', 'habré llegado (Futur II conjetural)'),
    V('Er wird in Berlin sein.', 'sein', 'Se dice que estará en Berlín (Konjunktiv I de noticia).'),
    V('Morgen werde ich dich anrufen', 'anrufen', 'Mañana te llamaré (infinitivo al final).'),
    V('Wir haben viel zu lernen', 'lernen', 'Tenemos mucho que aprender.'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma el futuro de {kommen} en la primera persona?'),
    options: [
      T('ich werde kommen'),
      T('ich werde gekommen'),
      T('ich werden kommen'),
      T('ich komme'),
    ],
    answer: 0,
    hint: T('Regla §1: werden en presente más infinitivo sin terminación.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la expresión de obligación: Ich habe etwas ___ tun.'),
      answer: 'zu',
      hint: T('Regla §4: zu marca finalidad y hace innecesario el futuro.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración suena más natural en el habla cotidiana?'),
      options: [
        T('Te llamaré mañana.'),
        T('Te llamaré mañana (Futur I).'),
        T('Te llamaré mañana (participio erróneo).'),
        T('Te llamaré mañana (auxiliar erróneo).'),
      ],
      answer: 0,
      hint: T('Regla §3: el presente futuro no lleva werden.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduce {Es wird nicht leicht sein}.'),
      answer: 'it will not be easy',
      hint: T('Futur I, la forma antigua que aparece en Mc 4:24.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la construcción con su valor'),
      pairs: [
        { a: T('ich werde kommen'), b: T('proyección, plan') },
        { a: T('ich habe etwas zu tun'), b: T('obligación presente') },
        { a: T('ich werde gekommen sein'), b: T('conjetura') },
        { a: T('Sie sagen, er sei krank'), b: T('relato indirecto') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El futuro es werden en presente más infinitivo sin terminación: ich werde kommen. El infinitivo va al final de la proposición.',
      ),
    },
    {
      n: '2',
      text: T(
        'werden conserva sus terminaciones normales (wirst, wird, werdet); es el infinitivo el que pierde la terminación. Ich werde, ihr werdet.',
      ),
    },
    {
      n: '3',
      text: T(
        'En el presente con sentido futuro no hay werden: Ich komme morgen. La palabra de tiempo es obligatoria para evitar la ambigüedad.',
      ),
    },
    {
      n: '4',
      text: T(
        'Zu más infinitivo expresa finalidad u obligación y hace innecesario el futuro: Ich habe nichts zu sagen (no *werde nichts zu sagen haben*).',
      ),
    },
    {
      n: '5',
      text: T(
        'El Konjunktiv I de werden sirve para el relato indirecto: no afirma, transmite: Sie sagen, er sei krank. En el habla casi nadie lo conjuga; se repite werden más infinitivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Un futuro sin forma propia'),
      text: T(
        'El alemán heredó el futuro del protoindoeuropeo, pero a regañadientes. Desde entonces, *ich werde kommen* es la única construcción realmente sintética del sistema, y siempre se la dejó de lado. Para proyectar en el pasado se usa el Perfekt: *ich werde kommen* (voy a venir) e *ich habe arbeiten müssen* (tuve que trabajar) pertenecen a registros muy distintos, y el Perfekt es el que se extendió. El alemán es, por tanto, una lengua con un solo pasado y un solo futuro de uso corriente, y el futuro es el presente más una palabra de tiempo.',
      ),
    },
    {
      label: T('Lectura en Lutero'),
      text: T(
        'Las profecías del Antiguo Testamento traen el futuro con frecuencia, y el tratamiento de Lutero es llamativo. *Ich will, spricht der Herr, euch nicht lassen* (Jr 1:12) usa el Konjunktiv I de *wollen* y mantiene la amenaza en el presente: «no os dejaré». *Es wird nicht leicht sein, ins Himmelreich einzugehen* (Mc 4:24), en cambio, usa el Futur I, la forma vieja que suena a sentencia. Saber cuál de las dos está en juego es saber si la frase anuncia o constata.',
      ),
    },
  ],
  examples: [
    {
      text: 'Morgen werde ich dich anrufen.',
      gloss: T('Mañana te llamaré (infinitivo al final).'),
    },
    { text: 'Ich komme morgen.', gloss: T('Vengo mañana (presente con sentido futuro).') },
    { text: 'Wir fahren am Sonntag.', gloss: T('Iremos en coche el domingo (tiempo marcado).') },
    { text: 'Es wird nicht leicht sein.', gloss: T('No será fácil (Futur I, tono sentencioso).') },
    { text: 'Ich werde gekommen sein.', gloss: T('Habré llegado (Futur II conjetural).') },
    {
      text: 'Sie sagen, er sei krank.',
      gloss: T('Dicen que está enfermo (Konjunktiv I de relato).'),
    },
    { text: 'Ich habe nichts zu sagen.', gloss: T('No tengo nada que decir (zu más infinitivo).') },
    { text: 'Wir haben viel zu lernen.', gloss: T('Tenemos mucho que aprender.') },
    {
      text: 'Ich will, spricht der Herr, euch nicht lassen.',
      gloss: T('No os dejaré, dice el Señor (Jr 1:12).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Futuro o presente, uno al lado del otro'),
      head: [T('Persona'), T('Futur I (werden + infinitivo)'), T('Presente con valor futuro')],
      rows: [
        ['ich', 'werde kommen', 'komme'],
        ['du', 'wirst kommen', 'kommst'],
        ['er / sie / es', 'wird kommen', 'kommt'],
        ['wir', 'werden kommen', 'kommen'],
        ['ihr', 'werdet kommen', 'kommt'],
        ['sie / Sie', 'werden kommen', 'kommen'],
      ],
    },
    {
      caption: T('Tabla 2 — {werden} con infinitivo y con {zu}'),
      head: [T('Construcción'), T('Ejemplo'), T('Valor')],
      rows: [
        ['werden + Infinitivo', 'Ich werde kommen.', 'projeção: vou vir'],
        [
          'werden + Infinitivo + zu',
          'Ich werde etwas zu tun haben.',
          'necessidade: vou ter algo a fazer',
        ],
        [
          'haben + zu + Infinitivo',
          'Ich habe etwas zu tun.',
          'obrigação atual: tenho algo a fazer',
        ],
        ['werden + sein', 'Es wird gut.', 'mudança: vai ficar bom'],
        [
          'werden + Infinitivo + modal',
          'Das wird dich interessieren.',
          'hipótese: isso deve ser interessante',
        ],
        ['werden + Präsens (Konjunktiv I)', 'Er wird krank sein.', 'relato: dizem que está doente'],
      ],
    },
  ],
};

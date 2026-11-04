import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('El subjuntivo'),
  subtitle: T('{que je parle, que tu parles} — necesidad, deseo, finalidad y contraste'),
  section: T('Los verbos'),
  body: C(`## El presente es el presente menos {-s}

Para la mayoría de los verbos, el presente de subjuntivo es la forma más barata que existe: tomas el **indicativo** y borras la {s} de la 3.ª del plural. Nada más. {Ils parlent} da {que je parle}, {que nous parlions}, {qu’ils parlent}.

| Infinitivo | je | tu | il / elle | nous | vous | ils / elles |
|---|---|---|---|---|---|---|
| parler | parle | parles | parle | parlions | parliez | parlent |
| finir | finisse | finisses | finisse | finissons | finissez | finissent |
| prendre | prenne | prennes | prenne | prenions | preniez | prennent |
| vendre | vende | vendes | vende | vendions | vendiez | vendent |

Solo cambia la terminación: {-e, -es, -e, -ions, -iez, -ent}. Fíjate en que la 3.ª del singular es igual a la 1.ª, y en que {je} no gana nada en {je parle}, {je vends} o {je prenne}. La forma más famosa del subjuntivo regular es {parle}, idéntica al imperativo.

## Irregulares: otro fósil

Los mismos verbos que dan el condicional irregular aparecen aquí, y por una razón compartida: el latín construía el subjuntivo con el presente de {essere} y de {habere} ({sim, sīs, sit, sīmus, sītis, sint}). De ahí salen exactamente las formas que ya has visto:

| Infinitivo | je | tu | il | nous | vous | ils |
|---|---|---|---|---|---|---|
| être | sois | sois | soit | soyons | soyez | soient |
| avoir | aie | aies | ait | ayons | ayez | aient |
| aller | aille | ailles | aille | allions | alliez | aillent |
| faire | fasse | fasses | fasse | fassions | fussiez | fassent |
| pouvoir | puisse | puisses | puisse | puissions | puissiez | puissent |
| savoir | sache | saches | sache | sachions | sachiez | sachent |
| vouloir | veuille | veuilles | veuille | veuillions | veuilliez | veuillent |
| venir | vienne | viennes | vienne | venions | veniez | viennent |

Aprende los tres primeros enteros ({être}, {avoir}, {pouvoir}) y los demás los adivinas por el contexto.

## Qué dispara el subjuntivo

El subjuntivo no aparece por gusto: aparece después de unos pocos **disparadores**, y el más productivo es {que} unido a un verbo principal. El mapa vale más que cualquier regla suelta:

| Disparador | Ejemplo | Glosa |
|---|---|---|
| necesidad | {Il faut que je prie} | es preciso que yo ore |
| deseo | {Je veux qu’il vienne} | quiero que venga |
| finalidad | {Parlez pour qu’ils comprennent} | hablad para que entiendan |
| sentimiento | {Je sens qu’il a raison} | siento que tiene razón |
| miedo | {J’ai peur qu’il vienne} | temo que venga |
| concesión | {Bien qu’il soit fatigué} | aunque esté cansado |
| absurdo | {Il est important qu’il soit prêt} | es importante que esté listo |

Dos grupos merecen atención aparte. El primero es el par {avant que} / {après que} y {pendant que}: con {avant que} el verbo es subjuntivo ({avant qu’il vienne}); en los demás es indicativo ({après qu’il est venu}, {pendant qu’il parle}). El segundo es {il ne faut pas que} más subjuntivo, que es justamente el negativo de {il faut que}.

## Los tiempos del subjuntivo

El perfecto de subjuntivo es el auxiliar en presente más el participio: {qu’il ait prié} «que haya orado», {qu’il soit venu} «que haya venido». Sirve como pasado reciente y como futuro desde el punto de vista del sujeto — {Je crois qu’il est déjà arrivé} puede ser «creo que ya llegó» o «creo que llegará».

El más-que-perfecto completo {qu’il eût prié} aparece en la escritura literaria antigua y es raro fuera de ella.

Y hay un truco que te salvará en los textos antiguos: cuando el verbo principal está en pasado, lo que era presente de subjuntivo pasa a **imperfecto** y el perfecto a **más-que-perfecto**. Una frase de Segond como {Je ne savais pas qu’il eût dit cela} apila dos capas de pasado.

## La negación en dos posiciones

Hay una diferencia que debaten los gramáticos y que la lectura bíblica muestra con claridad: {avant que} puede llevar la negación restrictiva {ne … point}, más rara y más fuerte, escrita como un bloque único — {avant qu’il ne vienne} —, o ningún {ne}, y esa es la forma estándar desde el siglo XVIII.

Lo mismo vale para {sans que}, {à moins que}, {en sorte que} con lectura de consecuencia. El portugués lo traduce todo con el subjuntivo; el francés hace visible la elección en la superficie.`),
  vocab: [
    V('que je parle', 'parler', 'que yo hable (subjuntivo regular)'),
    V('il faut que', 'falloir', 'es necesario que (disparador de necesidad)'),
    V('pour que', 'pour', 'para que (finalidad)'),
    V('bien que', 'bien', 'aunque que (concesión)'),
    V('avant que', 'avant', 'antes de que (exige subjuntivo)'),
    V('après que', 'après', 'después de que (indicativo)'),
    V('soit', 'être', 'sea (3.ª sing., irregular)'),
    V('soyons', 'être', 'seamos (1.ª pl., irregular)'),
    V('aient', 'avoir', 'tengan (3.ª pl., irregular)'),
    V('puisse', 'pouvoir', 'pueda (irregular)'),
    V('fasse', 'faire', 'haga (irregular)'),
    V('vienne', 'venir', 'venga (irregular)'),
    V('qu’il ait prié', 'prier', 'que haya orado (perfecto de subjuntivo)'),
    V('qu’il soit venu', 'venir', 'que haya venido'),
    V('il est important que', 'important', 'es importante que (valoración)'),
    V('j’ai peur qu’il vienne', 'avoir', 'temo que venga'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Attendez qu’il vienne» la forma {vienne} es subjuntivo. ¿Por qué?'),
    options: [
      T('Porque {avant que} está en la lista de disparadores que exigen subjuntivo'),
      T('Porque el futuro de {venir} lleva {vien-} en la raíz'),
      T('Porque la frase es negativa y el negativo exige el subjuntivo'),
      T('Porque tras {que} nunca puede aparecer el indicativo'),
    ],
    answer: 0,
    hint: T('Regla §3: {avant que} es disparador; {après que} y {pendant que} no lo son.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Subjuntivo de {être} en «{Il faut qu’il ___ là}» (il / elle), s___t'),
      answer: 'soit',
      hint: T('Es la forma irregular de 3.ª del singular, sin acento circunflejo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el disparador con el ejemplo que lo confirma'),
      pairs: [
        { a: T('necesidad'), b: T('{Il faut que je prie}') },
        { a: T('deseo'), b: T('{Je veux qu’il vienne}') },
        { a: T('finalidad'), b: T('{pour qu’ils comprennent}') },
        { a: T('concesión'), b: T('{Bien qu’il soit fatigué}') },
        { a: T('miedo'), b: T('{J’ai peur qu’il vienne}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase usa el indicativo donde el francés usaría el subjuntivo?'),
      options: [
        T('{Après qu’il est venu}, nous avons parlé'),
        T('{Après qu’il soit venu}, nous avons parlé'),
        T('{Bien qu’il est fatigué}, il continue'),
        T('{Il faut qu’il est prêt}'),
      ],
      answer: 0,
      hint: T('Tras {après que} y {pendant que} el verbo se queda en indicativo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El presente de subjuntivo regular es el presente de indicativo sin la {s} de la 3.ª del plural: {ils parlent} → {qu’ils parlent}, {que je parle}, {que nous parlions}. Solo cambian las terminaciones: {-e, -es, -e, -ions, -iez, -ent}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los irregulares son pocos y vienen del presente latín de {essere} y {habere}: {soit, soyons, soient}, {aie, ayons, aient}, {aille}, {fasse}, {puisse}, {sache}, {veuille}, {vienne}. Son los mismos verbos que el condicional irregular.',
      ),
    },
    {
      n: '3',
      text: T(
        'El subjuntivo es obligatorio tras {il faut que}, {vouloir que}, {pour que}, {bien que}, {avant que}, {de peur que}, y en {il est important que}, {il vaut mieux que}. En cambio, tras {après que}, {pendant que}, {si}, {quand}, {dès que} el indicativo es obligatorio.',
      ),
    },
    {
      n: '4',
      text: T(
        'El perfecto de subjuntivo es el auxiliar en presente de subjuntivo más el participio: {qu’il ait prié}, {qu’elle soit venue}. Cubre el pasado reciente y el futuro desde el punto de vista del sujeto.',
      ),
    },
    {
      n: '5',
      text: T(
        'Si el verbo principal está en pasado, el presente de subjuntivo pasa a **imperfecto** y el perfecto a **más-que-perfecto**: {qu’il eût dit}. Por eso {Je ne savais pas qu’il eût dit cela} apila dos capas de pasado.',
      ),
    },
  ],
  notes: [
    {
      label: T('El latín bajo el subjuntivo'),
      text: T(
        'El latín construía el presente de subjuntivo con el presente de {essere} y de {habere}: {sim, sīs, sit, sīmus, sītis, sint} y {habeam, habeās, habeat, habeāmus, habeātis, habeant}. De esas doce conjugaciones salieron {sois, sois, soit, soyons, soyez, soient} y {aie, aies, ait, ayons, ayez, aient} — literalmente las mismas sílabas que aprendiste en el capítulo del condicional ({serais}, {aurais}). La regularización limpia ({parle}, {finisse}, {prenne}) llegó después, y es una invención medieval. Dicho al revés: lo que parece «irregular» es el resto del sistema antiguo, y lo que parece «regular» es el recién llegado que tomó el relevo.',
      ),
    },
    {
      label: T('Un disparador que se volvió terminación'),
      text: T(
        'En muchos casos ni siquiera se puede decir si manda el disparador o el verbo. En {Il est important qu’il soit prêt}, tanto {il est important que} como {soit} son fijos: si cambias uno de los dos, la frase se rompe. Esa es la marca de una estructura fosilizada. Compáralo con el portugués, que flexiona el verbo y prescinde del disparador: «É importante que ele esteja pronto» es el mismo {soit}, visto desde otro ángulo. Por eso, al leer un texto antiguo en francés, busca siempre el par — disparador más verbo — y no el verbo solo.',
      ),
    },
  ],
  examples: [
    { text: 'Il faut que je prie.', gloss: T('es preciso que yo ore (necesidad)') },
    { text: 'Je veux qu’il vienne.', gloss: T('quiero que venga (deseo)') },
    { text: 'Parlez pour qu’ils comprennent.', gloss: T('hablad para que entiendan (finalidad)') },
    { text: 'Bien qu’il soit fatigué.', gloss: T('aunque esté cansado (concesión)') },
    { text: 'Attendez qu’il vienne.', gloss: T('esperad que venga ({avant que} más subjuntivo)') },
    {
      text: 'Après qu’il est venu.',
      gloss: T('después de que llegó ({après que} más indicativo)'),
    },
    { text: 'Il ne faut pas qu’il vienne.', gloss: T('no debe venir (disparador negativo)') },
    { text: 'Je crois qu’il est déjà arrivé.', gloss: T('creo que ya llegó (o llegará)') },
    {
      text: 'Je ne savais pas qu’il eût dit cela.',
      gloss: T('no sabía que lo había dicho (más-que-perfecto)'),
    },
    {
      text: 'C’est une occasion qu’il ne faut pas manquer.',
      gloss: T('es una ocasión que no hay que perder ({faut} más subjuntivo más relativo)'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — presente de subjuntivo regular'),
      head: [T('Infinitivo'), T('je'), T('il / ella'), T('nous'), T('ellos')],
      rows: [
        ['parler', 'parle', 'parle', 'parlions', 'parlent'],
        ['finir', 'finisse', 'finisse', 'finissions', 'finissent'],
        ['vendre', 'vende', 'vende', 'vendions', 'vendent'],
        ['prendre', 'prenne', 'prenne', 'prenions', 'prennent'],
        ['attendre', 'attende', 'attende', 'attendions', 'attendent'],
        ['partir', 'parte', 'part', 'partions', 'partent'],
      ],
    },
    {
      caption: T('Tabla 2 — los disparadores del subjuntivo'),
      head: [T('Categoría'), T('Marca'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('necesidad'), 'il faut', T('{Il faut que je prie}'), T('es preciso que yo ore')],
        [T('deseo'), 'vouloir que, demander', T('{Je veux qu’il vienne}'), T('quiero que venga')],
        [
          T('finalidad'),
          'pour que',
          T('{Parlad para que entiendan}'),
          T('hablad para que entiendan'),
        ],
        [T('tiempo'), 'avant que', T('{Esperad que venga}'), T('esperad que venga')],
        [T('tiempo'), T('après que, pendant que'), T('{Después de que llegó}'), T('{indicativo}')],
        [T('concesión'), 'bien que, quoique', T('{Aunque esté cansado}'), T('aunque esté cansado')],
      ],
    },
  ],
};

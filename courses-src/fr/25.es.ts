import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('Los pronombres personales'),
  subtitle: T('{je, tu, il, nous, vous, ils} y la separación entre {le, la, les} y {lui, leur}'),
  section: T('Los pronombres'),
  body: C(`## Sujeto: seis formas, tres números

Los pronombres de sujeto son pocos y casi siempre aparecen. El francés no suprime el sujeto como hace el portugués en {chove} o en {fala-se}: en {il parle} el {il} es obligatorio, y en {parle-t-il} la {t} se pega al verbo para crear la pregunta.

| Persona | Singular | Plural |
|---|---|---|
| 1.ª | {je} | {nous} |
| 2.ª | {tu} | {vous} |
| 3.ª | {il} / {elle} | {ils} / {elles} |

La terminación del verbo ya dice la persona: {parle} solo puede ser {je} o {il/elle}. Pero el sujeto **se mantiene igualmente**, y ahí es donde el francés se separa del portugués y del español. Dices {je parle}, nunca solo {parle}.

Una salvedad: con verbos impersonales y de cambio de estado, el sujeto se vuelve {on} o {il}: {il pleut}, {on dit}, {il fait chaud}. Y en {Voici}, {Voilà}, el sujeto desaparece sin sustituto.

## Objetos: {le, la, les} frente a {lui, leur}

Aquí está la gran trampa del capítulo. El portugués tiene {o, a, os, as} y {lhe, lhes}; el francés mantiene los dos grupos **separados**. Confundirlos es el error más común de quien aprende.

- **{le, la, les, me, te, nous, vous, se}** — objetos **directos**. Sustituyen la cosa.
- **{lui, leur, y, en}** — objetos **indirectos**. Sustituyen la persona o el nombre de una preposición.

La prueba es la misma que en latín y en portugués: si el pronombre sustituye a un sustantivo que es objeto directo del verbo, es {le/la/les}; si sustituye a un sustantivo regido por preposición ({à}, {de}), es {lui/leur}.

| Frase | {le, la, les} | {lui, leur} |
|---|---|---|
| veo **al** hombre | {Je **le** vois} | — |
| hablo **con él** | — | {Je **lui** parle} |
| veo **a los** hombres | {Je **les** vois} | — |
| hablo **con ellos** | — | {Je **leur** parle} |

Fíjate en que {lui} y {leur} nunca cambian de forma: no hay {elle} para {lui} ni {elles} para {leur}. Y el género se recupera en la frase: {Je lui ai parlé} — quien habla con una mujer también recibe {lui}.

## La elisión de {le} y {la}

Ante vocal o {h} muda, {le} y {la} pierden la {e} y se vuelven {l’}:

- {je l’aime} — lo amo
- {je l’adore} — la adoro
- {il l’a fait} — lo hizo
- {la maison} — la casa (aquí no hay elisión: es sustantivo)

La elisión es **obligatoria** y vale para {le}, {la}, {me}, {te}, {se} y para {je}, {ne}, {que} ante vocal. No ocurre con {les} ni con {lui}/{leur}, que ya terminan en consonante o vocal: {je les vois}, {je leur parle}.

## Concordancia: {le} y {la} siguen al referente

{le} y {la} no tienen género propio: copian el género del sustantivo al que sustituyen, no el de la persona.

- {C’est la femme ; je **la** vois} — es la mujer; la veo
- {C’est l’homme ; je **le** vois} — es el hombre; lo veo
- {Ce sont les filles ; je **les** vois} — son las niñas; las veo

Y atención al {le} como artículo determinado: {Le livre est sur la table} «el libro está sobre la mesa» — aquí el {le} es artículo masculino definido, no pronombre. El contexto lo resuelve: si hay verbo, puede ser pronombre; si no hay verbo, es artículo.

## Aplicación: el texto bíblico

Juan 3:16 es el versículo más citado de la lengua, y está hecho casi solo de pronombres: {Car Dieu a tant aimé le monde qu’il a donné son Fils unique} — {qu’il} = que él, {son} = su. Y en {Je suis le chemin, la vérité et la vie} (Jn 14:6), los tres {le/la} forman una enumeración simétrica, cada uno en su género.

En el texto, los pronombres indirectos aparecen constantemente: {Pour vous} (Mt 26:13) — {vous} es objeto indirecto de {pour}, y por eso el portugués lo traduce «por vosotros». Y {Ceux qui credront en lui} (Mc 9:35) trae el pronombre {lui} — objeto indirecto de {en} —, que en portugués pasó a «en él», y que la regencia de {croire en} explica mejor que cualquier sintaxis.`),
  vocab: [
    V('je', 'je', 'yo (1.ª sing., sujeto)'),
    V('nous', 'nous', 'nosotros (1.ª pl., sujeto)'),
    V('tu', 'tu', 'tú (2.ª sing., familiar)'),
    V('vous', 'vous', 'vosotros / usted (2.ª pl. o cortesía)'),
    V('il / elle', 'il', 'él / ella (3.ª sing., sujeto)'),
    V('ils / elles', 'ils', 'ellos / ellas (3.ª pl., sujeto)'),
    V('le', 'le', 'lo (objeto directo)'),
    V('la', 'la', 'la (objeto directo)'),
    V('les', 'les', 'los/las (objeto directo plural)'),
    V('lui', 'lui', 'le (objeto indirecto, sin cambio)'),
    V('leur', 'leur', 'les (objeto indirecto plural)'),
    V('je l’aime', 'aimer', 'lo amo (elisión obligatoria)'),
    V('parle-t-il', 'parler', '¿habla él? (guion de interrogación)'),
    V('il pleut', 'pleuvoir', 'llueve (sujeto {il} impersonal)'),
    V('qu’il a donné', 'donner', 'que él dio (pronombre relativo)'),
    V('ceux qui credront en lui', 'croire', 'los que creerán en él ({lui} es objeto indirecto)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «{Je lui parle}», ¿por qué el pronombre es {lui} y no {le}?'),
    options: [
      T(
        'Porque {lui} es objeto indirecto: sustituye al nombre regido por {à}, la preposición de {parler à}',
      ),
      T('Porque {lui} es el plural de {le} y {le} ya se usó en la frase'),
      T('Porque {parler} exige siempre el plural en el objeto'),
      T('Porque {le} solo puede sustituir personas, nunca cosas'),
    ],
    answer: 0,
    hint: T(
      'Regla §2: {le, la, les} sustituyen el objeto directo; {lui, leur} sustituyen el nombre de una preposición.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Elisión: «Je ___ aime beaucoup» (él)'),
      answer: 'l’',
      hint: T('Ante vocal, {le} se vuelve {l’}: cae la {e} y el pronombre se pega al verbo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con su función'),
      pairs: [
        { a: T('je'), b: T('sujeto de 1.ª persona: {je parle}') },
        { a: T('les'), b: T('objeto directo plural: {je les vois}') },
        { a: T('leur'), b: T('objeto indirecto plural: {je leur parle}') },
        { a: T('lui'), b: T('objeto indirecto singular, inmutable: {je lui parle}') },
        { a: T('on'), b: T('sujeto impersonal: {on dit que}') },
      ],
      answer: [0, 1, 2, 3, 4],
    },
    {
      kind: 'choose',
      prompt: T('En «{C’est la femme ; je la vois}», ¿cuál es el género de {la}, y por qué?'),
      options: [
        T(
          'Femenino, porque el pronombre copia el género del referente ({la femme}), no el de quien ve',
        ),
        T('Masculino, porque {la} es la forma femenina y el verbo {vois} es masculino'),
        T('Neutro, porque la frase ya tiene un sustantivo femenino y el pronombre se neutraliza'),
        T('Femenino, porque {la} nunca se refiere a personas'),
      ],
      answer: 0,
      hint: T(
        'Regla §4: {le}, {la} y {les} siguen el género del sustantivo sustituido, no el de la persona.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sujeto **nunca** se omite en francés: {je parle}, {il parle}, {nous parlons}. La terminación del verbo ya marca la persona, pero el pronombre se mantiene igual.',
      ),
    },
    {
      n: '2',
      text: T(
        '{le, la, les, me, te, se} son **objetos directos**; {lui, leur, y, en} son **objetos indirectos**. La prueba es la latina: {le} sustituye al acusativo, {lui} al nombre regido por preposición.',
      ),
    },
    {
      n: '3',
      text: T(
        'La elisión es obligatoria: {le} y {la} pierden la {e} ante vocal o {h} muda y se vuelven {l’}. Lo mismo vale para {me}, {te}, {se} y, ante vocal, para {je}, {ne} y {que}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{le} y {la} copian el género del **sustantivo** al que sustituyen, no el de la persona: {C’est la femme ; je la vois} lleva {la} femenino porque {femme} es femenino. {lui} y {leur}, en cambio, no tienen género ni número.',
      ),
    },
    {
      n: '5',
      text: T(
        '{vous} cubre el plural y el singular formal. Hablar con cualquier persona es la forma por defecto: {vous êtes français?} suena natural, {tu es français?} solo entre iguales o con niños.',
      ),
    },
  ],
  notes: [
    {
      label: T('x del latín'),
      text: T(
        'Los dos conjuntos de pronombres vienen de palabras latinas distintas, y por eso no se mezclan. {me}, {te}, {se} vienen de {mihi}, {tibi}, {sibi}; {lui} y {leur} son formas reducidas de {illui} e {illorum}. Lo que ocurrió es que el latín tenía un solo pronombre acusativo ({eum}, {eam}, {eos}) y un solo ablativo ({eo}, {ea}, {eis}), y el francés conservó los dos separados, al contrario del portugués, que fusionó {o} y {lhe} en una zona de sombra, y del español, que los borró casi por completo al perder los casos. Consecuencia práctica: en francés, si dudas, pregunta quién es el **agente de la preposición**, no quién es el **objeto del verbo**.',
      ),
    },
    {
      label: T('El guion en las preguntas'),
      text: T(
        'Cuando el verbo está conjugado y no lleva pronombre delante, la pregunta se forma pegando el pronombre al verbo: {parle-t-il}, {vient-elle}, {sont-ils}. El pronombre recoge una {t} que es el resto de la antigua {te} de interrogación, la misma {te} de {te veux-tu?}. Con {est-ce que} no hay guion: {est-ce que tu viens?}. Y con un sustantivo topical la inversión es otra: {Quand viens-tu?}, {Où vas-tu?}. En cualquier caso, el sujeto sigue presente: el francés no tiene sujeto nulo ni en la pregunta ni en la afirmación.',
      ),
    },
  ],
  examples: [
    { text: 'Je parle.', gloss: T('hablo (sujeto obligatorio)') },
    { text: 'Nous parlons français.', gloss: T('hablamos francés ({nous} más presente)') },
    { text: 'Je le vois.', gloss: T('lo veo ({le} es objeto directo)') },
    { text: 'Je lui parle.', gloss: T('hablo con él ({lui} es objeto indirecto)') },
    { text: 'Je leur donne le livre.', gloss: T('les doy el libro (dos objetos a la vez)') },
    { text: 'Je l’aime.', gloss: T('lo amo (elisión obligatoria)') },
    {
      text: 'C’est la femme ; je la vois.',
      gloss: T('es la mujer; la veo (género del referente)'),
    },
    { text: 'Parle-t-il ?', gloss: T('¿habla él? (guion de interrogación)') },
    { text: 'Il pleut.', gloss: T('llueve ({il} impersonal)') },
    {
      text: 'Ceux qui credront en lui.',
      gloss: T('los que creerán en él ({lui} es objeto indirecto de {en})'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — los pronombres personales'),
      head: [T('Persona'), T('Singular'), T('Plural'), T('Uso')],
      rows: [
        [T('1.ª'), T('je'), T('nous'), T('sujeto')],
        [T('2.ª'), T('tu'), T('vous'), T('sujeto')],
        [T('3.ª'), T('il / ella'), T('ellos / ellas'), T('sujeto')],
        [
          T('objeto directo'),
          T('me, te, le/la, se'),
          T('nos, os, los/las'),
          T('sustituye la cosa'),
        ],
        [
          T('objeto indirecto'),
          T('me, te, lui, se, y, en'),
          T('nos, os, les'),
          T('sustituye la persona'),
        ],
      ],
    },
    {
      caption: T('Tabla 2 — directo e indirecto en paralelo'),
      head: [T('Frase con nombre'), T('Objeto directo'), T('Objeto indirecto'), T('Glosa')],
      rows: [
        [T('je vois **le** garçon'), 'le', T('—'), T('veo al niño')],
        [T('je parle **à** Paul'), T('—'), 'lui', T('hablo con él')],
        [T('je vois **les** filles'), 'les', T('—'), T('veo a las niñas')],
        [T('je parle **aux** filles'), T('—'), 'leur', T('hablo con ellas')],
        [T('je pense **à** lui'), T('—'), 'lui', T('pienso en él')],
        [
          T('je parle **à** Marie'),
          T('—'),
          T('{à elle} → {lui}'),
          T('hablo con ella (también {lui})'),
        ],
      ],
    },
  ],
};

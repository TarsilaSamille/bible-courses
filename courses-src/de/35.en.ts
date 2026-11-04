import { C, T, V } from '../shared.mts';

export default {
  id: 35,
  title: T("Commented reading: Psalm 23 in Luther's translation"),
  subtitle: T('Six verses, one sentence at a time'),
  section: T('Reading'),
  body: C(`## The text

> **Der HERR ist mein Hirte, mir wird nichts mangeln.**
> **Er weidet mich auf grünen Weiden und führet mich zur Ruhe an Wasserbächen.**
> **Er erquickt mein Seele. Er führet mich durch des Todes Schatten, aber ich fürchte mich nicht, denn du bist bei mir; dein Stock und dein Steben stützen mich.**
> **Du deckest mich mit Speisen vor meinen Feinden. Du salbst mein Haupt mit Öl; mein Becher ist übervoll.**
> **Gutes und Barmherzigkeit werden mich folgen mein Leben lang, und ich werde bleiben im Hause des HERRN bis in die ewigen Zeiten.**

## {Der HERR ist mein Hirte}

The most quoted sentence of the Old Testament fits into three words: {ist}, {mein}, {Hirte}. The verb {ist} holds the second position and the subject {Der HERR} occupies the first: the cleanest case of V2 you have met so far. What follows are the possessive {mein} and the noun {Hirte}, both in the predicative case, because {Hirte} is the object of nothing — it is what the subject **is**. The pair {mein Hirte} is delimited by {Hirte}; a {mein Lehrer} would be a different comparison, but the image chosen is the shepherd's, the one who leads, seeks and feeds.

## {mir wird nichts mangeln}

Here the hardest construction of the psalm begins. {wird} is the auxiliary of the **passive**, and what completes it stands in the **dative**: {mir} (to me) {nichts} (nothing) {mangeln} (to lack). To say something in the dative shifts the point of view to the one who receives: literally «something is lacking to me», and the grammatical subject {nichts} is the thing that is missing. The whole sentence is a **nominal expression with no main verb**; {wird} merely joins it together.

The tense of {wird} without {geworden} is **present**: something lacks now and will lack always. Compare {mir ist nichts mangeln}, which sounds archaic, and {mir hat nichts gefehlt}, which moves into the past.

## {Er weidet mich auf grünen Weiden}

The preposition {auf} with the **dative** marks a static location — position — and {Weiden} is plural, which confirms it: {auf grünen Weiden} is «on green meadows», not «over». Verbs of movement require {auf} with the **accusative**: {Er weidet mich auf eine Wiese}. A generic plural noun with no article is common in this register ({grüne Weiden}, {Wasserbächen}) and makes the scene look immense.

Look at the form {weidet}: {weiden} is a strong verb, and the -t ending of the second and third person singular marks the **present**. The verb repeats three times in the verse, and that repetition is what gives the text its solemn cadence.

## {Er erquickt mein Seele}

An **accusative** noun ({mein Seele}) without a definite article: this is the biblical way of expressing possession — something like «my soul», with the article left implicit. The verb {erquickt} is a strong verb whose **participle** is {erquickt}, which allows the construction {mein erquickter Seele} («my refreshed soul»), found in the Psalms and in Luke 1:80. The accusative here marks the **effect**: what receives the action.

## {durch des Todes Schatten}

A qualitative **genitive** with no article: {des Todes Schatten} is literally «the shadow of death». English would say «the shadow of death» too, but the structure is possessive: the shadow *belongs* to death. The preposition {durch} with the accusative marks passage ({durch} + A), producing the idea of a way crossed rather than a place inhabited.

Note the pair {Schatten} in the **accusative** after {durch} and {HERRN} in the **dative** of {im Hause} — the article-less noun {Haus} with a preposition is the German pattern of possession: {bei meinem Bruder}, {in der Stadt}, {im Hause des HERRN}.

## {dein Stock und dein Steben stützen mich}

{Stock} is the shepherd's staff and {Steben} its support — in the 2017 revision, {Steben}; in the older editions, {Steb}. The verb {stützen} means literally «to support, to prop up». The two nouns form a **coordinated** pair with no conjunction, held together by the comma alone; {und} would be redundant, because the comma already does the work. The pronoun {mich} in the accusative closes the sentence: the direct object is always the last strong constituent.

## {Du deckest mich mit Speisen}

The verb {decken} in the present has the value of a **second person singular imperative**, with no particle: {Du deckst mich} = «cover me». The dative {mit Speisen} indicates the means, and {vor meinen Feinden} (dative, «before my enemies») marks the opposition: the enemies exist, but they do not reach. The verb {salbst} means to anoint, in the same imperative form, followed by {mein Haupt} in the accusative — the anointed head is the mark of a king, and the Old Testament rarely used that image without reason for a king.

## {Gutes und Barmherzigkeit werden mich folgen}

Two coordinated **nominative** neuter nouns function as the plural subject of {werden}. {werden} + infinitive is the **future** ({werden} + inf = ich werde kommen), which gives {werden mich folgen} the value «they will follow». The verb {folgen} governs the **dative** ({mir}), and the direct object {mich} appears because the construction is absolute: literally «goodness and mercy will follow me». The central biblical idea sits in {mein Leben lang} — all through life, without a break.

## What to take away

Each verse introduced a new structure: V2, the dative of lack, the accusative of effect, the qualitative genitive, {werden} + infinitive and the genitive of duration. None of them appears twice, and that is exactly why the psalm flows: the syntax follows the landscape, from the open field to the dark room and back again.`),
  vocab: [
    V('Hirte', 'Hirt', 'shepherd'),
    V('es mangeln', 'mangeln', 'to lack (governs dative)'),
    V('weiden', 'weiden', 'to graze, to shepherd (strong)'),
    V('erquicken', 'erquicken', 'to refresh, to restore (strong)'),
    V('führen', 'führen', 'to lead, to guide (strong)'),
    V('der Schatten', 'Schatten', 'the shadow (weak masc.)'),
    V('der Stock', 'Stock', 'the staff'),
    V('stützen', 'stützen', 'to support, to prop up'),
    V('decken', 'decken', 'to cover'),
    V('salben', 'salben', 'to anoint'),
    V('der Feind', 'Feind', 'the enemy (strong plural: Feinde)'),
    V('die Barmherzigkeit', 'Barmherzigkeit', 'mercy'),
    V('folgen', 'folgen', 'to follow (governs dative)'),
    V('in die ewigen Zeiten', 'ewig', 'forever (eternal duration)'),
    V('an Wasserbächen', 'an', 'by the brooks (dative)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('In {mir wird nichts mangeln}, what is the case of {mir}?'),
    options: [
      T('Dative, because the verb of lack governs the person who lacks.'),
      T('Accusative, because it is the direct object of {werden}.'),
      T('Nominative, because {nichts} comes right after.'),
      T('Genitive, because nothing is of the kind of {Hirte}.'),
    ],
    answer: 0,
    hint: T(
      'Rule §1: the sentence is written from the point of view of the receiver, and the receiver stands in the dative.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete with the right preposition and case: Er weidet mich ___ grünen Weiden.'),
      answer: 'auf',
      hint: T(
        'Rule §2: a static location takes {auf} with the dative; the form {Weiden} confirms the plural.',
      ),
    },
    {
      kind: 'choose',
      prompt: T('Which analysis describes {des Todes Schatten} correctly?'),
      options: [
        T('Qualitative genitive: «the shadow of death».'),
        T('Object accusative: «the shadow is sought».'),
        T('Dative of purpose: «for the shadow».'),
        T('Comparative: «darker than death».'),
      ],
      answer: 0,
      hint: T(
        'Rule §3: an abstract noun without an article in the genitive qualifies the following noun.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Match the segment of the psalm to the structure it teaches'),
      pairs: [
        { a: T('Der HERR ist mein Hirte'), b: T('verb in second position (V2)') },
        { a: T('mir wird nichts mangeln'), b: T('passive with dative') },
        { a: T('durch des Todes Schatten'), b: T('passage with accusative') },
        { a: T('werden mich folgen'), b: T('future with {werden} + infinitive') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Verbs of lack govern the dative and form a sentence with a null subject: {mir mangelt etwas}, {mir fehlt etwas}, {es fehlt mir an etwas}. The subject is always the thing that is missing.',
      ),
    },
    {
      n: '2',
      text: T(
        '{auf} with the dative says where something is and with the accusative where it goes: {Ich bin auf dem Feld} / {Ich gehe auf das Feld}.',
      ),
    },
    {
      n: '3',
      text: T(
        'The article-less noun in the genitive ({des Todes Schatten}) marks the qualitative genitive: the more distant noun is reserved for abstract nouns.',
      ),
    },
    {
      n: '4',
      text: T(
        '{werden} + infinitive is the future; {worden} + participle is the perfect passive: {Er wird mich führen} / {Er ist geführt worden}. They are never interchangeable.',
      ),
    },
    {
      n: '5',
      text: T(
        'In {dein Stock und dein Steben} coordination takes no {und} when both members share the same determiner: {mein Brot und mein Wein} is more parallel than {mein Brot und der Wein}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Why this psalm is read slowly'),
      text: T(
        'Notice that each verse introduces **one** new structure and never repeats it. That is compositional technique, not accident: the author varies the grammar the way the landscape varies. The open field comes with the dative ({auf grünen Weiden}), the passage through with the accusative ({durch des Todes Schatten}), the table with the means ({mit Speisen}). Someone reading Psalm 23 only in English loses that correspondence; someone reading the German hears the scenery change case.',
      ),
    },
    {
      label: T('The 2017 revision'),
      text: T(
        "Luther's texts are not immutable. The official 2017 revision updated words nobody says any more — {Steb} to {Steben}, for instance — without touching the structure. That confirms something useful for study: **grammar is more stable than vocabulary**. You can learn the cases from a text five hundred years old and keep reading fluently because the grammar has not changed.",
      ),
    },
  ],
  examples: [
    {
      text: 'Der HERR ist mein Hirte.',
      gloss: T('The LORD is my shepherd (V2 with the subject first).'),
    },
    {
      text: 'mir wird nichts mangeln',
      gloss: T('I shall not want (dative of the person who lacks).'),
    },
    {
      text: 'Er weidet mich auf grünen Weiden.',
      gloss: T('He shepherds me on green meadows (auf + dative).'),
    },
    {
      text: 'Er führet mich zur Ruhe an Wasserbächen.',
      gloss: T('He leads me to rest beside the brooks.'),
    },
    { text: 'Er erquickt mein Seele.', gloss: T('He restores my soul (article-less accusative).') },
    {
      text: 'Er führet mich durch des Todes Schatten.',
      gloss: T('He leads me through the shadow of death (durch + accusative).'),
    },
    { text: 'denn du bist bei mir', gloss: T('for you are with me (bei + dative).') },
    {
      text: 'Du deckest mich mit Speisen vor meinen Feinden.',
      gloss: T('You cover me with food in the presence of my enemies (particle-less imperative).'),
    },
    {
      text: 'Gutes und Barmherzigkeit werden mich folgen mein Leben lang.',
      gloss: T('Goodness and mercy will follow me all my life (werden + infinitive).'),
    },
  ],
  tables: [
    {
      caption: T('Table 1 — Psalm 23 verse by verse'),
      head: [T('Segment'), T('Structure'), T('Portuguese')],
      rows: [
        ['Der HERR ist mein Hirte', 'V2, caso predicativo', 'O SENHOR é o meu pastor'],
        ['mir wird nichts mangeln', 'passivo com dativo', 'nada me faltará'],
        ['auf grünen Weiden', 'auf + dativo, plural genérico', 'em prados verdes'],
        ['Er erquickt mein Seele', 'acusativo sem artigo', 'ele re vigoriza a minha alma'],
        ['des Todes Schatten', 'genitivo de qualidade', 'a sombra da morte'],
        ['dein Stock und dein Steben', 'coordenação sem conjunção', 'o teu cajado e o teu apoio'],
        ['Du deckest mich mit Speisen', 'imperativo sem partícula', 'cobre-me com comida'],
        [
          'Gutes und Barmherzigkeit werden mich folgen',
          'werden + infinitivo, dat. de {folgen}',
          'o bem e a misericórdia me seguirão',
        ],
      ],
    },
    {
      caption: T('Table 2 — Prepositions that decide the case'),
      head: [T('Preposition'), T('Case'), T('Example')],
      rows: [
        ['auf', 'dativo (lugar) / acusativo (direção)', 'auf grünen Weiden / auf eine Wiese'],
        ['durch', 'acusativo (travessia)', 'durch des Todes Schatten'],
        ['an', 'dativo (lugar estático)', 'an Wasserbächen'],
        ['vor', 'dativo (oposição) / acusativo (medo)', 'vor meinen Feinden / fürchten vor'],
        ['mit', 'dativo (meio, companhia)', 'mit Speisen / mit seinem Bruder'],
        ['im', 'dativo (dentro de)', 'im Hause des HERRN'],
        ['zu', 'dativo (direção)', 'zur Ruhe'],
        ['in', 'dativo (lugar) / acusativo (tempo)', 'in der Stadt / in zwei Tagen'],
      ],
    },
  ],
};

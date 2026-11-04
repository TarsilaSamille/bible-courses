import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Los adjetivos'),
  subtitle: T('Concordancia, posición y las formas reducidas'),
  section: T('Los adjetivos y los adverbios'),
  body: C(`## El adjetivo es un sustantivo disfrazado

En francés el adjetivo ocupa el lugar del sustantivo y concuerda con él en **género y número**. El masculino es la forma de referencia; el femenino añade *-e*; el plural añade *-s*; el femenino plural añade *-es*. Así, a partir de {grand} salen cuatro formas:

| | Masculino | Femenino |
|---|---|---|
| Singular | {grand} | {grande} |
| Plural | {grands} | {grandes} |

El truco es este: **el femenino añade siempre una letra, y el plural otra**. Por eso casi todos los adjetivos tienen exactamente cuatro formas, y una se deduce de las otras tres.

Hay, sin embargo, dos familias que se escapan. Los adjetivos en *-eux* pasan a *-euse*: {heureux → heureuse}, {jaloux → jalouse}, {fâcheux → fâcheuse}. Y los que terminan en *-f* hacen *-ve* en una docena de casos: {neuf → neuve}, {serpentin → serpentine}. En los demás *-f*, el camino es sencillo: {actif → active}, {passif → passive}.

Los irregulares son pocos, pero hay que memorizarlos: {beau → belle}, {vieux → vieille}, {blanc → blanche}, {doux → douce}, {faux → fausse}, {sec → sèche}, {public → publique}. Son justamente las palabras que aparecen todos los días.

## La posición: después por principio, antes por costumbre

La posición normal del adjetivo es **después del sustantivo**: {une maison grande}, {un homme heureux}, {une question difficile}. Ahí, detrás del sustantivo, no puede confundirse con nada.

Un grupo pequeño y muy frecuente de adjetivos cortos va **antes**: {grand}, {petit}, {jeune}, {vieux}, {bon}, {mauvais}, {beau}, {joli}, {nouveau}, {premier}, {dernier}, {long}, {haut}, {large}, {gros}, {vaste}, {faux}, {vrai}. Esa lista se aprende de una tirada.

La tradición la comprimió en cinco palabras: **beauté, âge, nombre, bonté, taille** — belleza, edad, número, bondad y tamaño. La frase sirve de memoria, no de ley; el uso real desmiente la mitad.

## Cuando la posición cambia el sentido

Aquí está lo más interesante del capítulo. Compara:

- {un homme pauvre} — un hombre sin recursos
- {un pauvre homme} — un pobre hombre (con lástima)
- {un homme grand} — un hombre alto
- {un grand homme} — un gran hombre (generoso, excelente)
- {une femme fiévreuse} ≠ {une fiévreuse femme} — descripción literal frente al tono afectadas

Cuando el adjetivo va delante, adquiere un matiz **afectivo o valorativo**: {le grand Dieu}, {un petit malheur}. Cuando va detrás, es mera descripción: un Dios alto es simplemente {un Dieu grand}.

Hay además usos casi fijos: los títulos van delante ({la Sainte Bible}), los colores casi siempre detrás ({une robe bleue}, {un ciel clair}), y la mayoría de los participios de pasado también.

## Las formas reducidas ante vocal

Cuando el adjetivo tiene que ir delante de una vocal o de una *h* muda, algunas formas pierden la terminación:

| Forma completa | Forma reducida | Ejemplo |
|---|---|---|
| {beau} | {bel} | {un bel ami} |
| {nouveau} | {nouvel} | {un nouvel arbre} |
| {vieux} | {vieil} | {un vieil homme} |
| {fou} | {fol} | {un fol amusement} |
| {mou} | {mol} | {un mol oreiller} |

Fíjate en que {beau} y {vieux} también cambian en plural ante sustantivo: {les beaux enfants}, {les vieux livres}. Ninguna otra flexión sufre esta reducción.

## Lectura — Louis Segond

{Dieu a fait de l'homme une âme vivante} usa {vivante}, adjetivo pospuesto: en el francés bíblico, la posición pegada al sustantivo es la norma. {Il est votre Dieu, et vous êtes son peuple} convierte {son} en adjetivo sustantivado, sin palabra para Dios. {Voici, je mets devant toi une vie} (Éx 33:19) usa la construcción absoluta {devant toi}, y {C'est une bonne nouvelle, et un grand sujet de joie} (Lc 2:10) pone {bonne} y {grand} delante del sustantivo: la posición afectiva que acabamos de describir. {L'amour est patient, il est bienfaisant; l'amour n'envie point} (1Co 13:4) acumula adjetivos invariables y una construcción verbal ya elíptica, fuera del alcance de este capítulo.

## Lo esencial

La concordancia de género y número lo resuelve casi todo; la posición explica el resto. La forma base es la del masculino singular, el femenino gana *-e*, el plural gana *-s*, y tu única libertad es decidir si el adjetivo sube delante del sustantivo — y ahí el sentido cambia.`),
  vocab: [
    V('grand', 'grand', 'grande; ant. elipsis: de grandes'),
    V('petit', 'petit', 'pequeño; fem. petite'),
    V('jeune', 'jeune', 'joven; también «de edad»'),
    V('beau', 'beau', 'hermoso; belle, beaux, bel'),
    V('vieux', 'vieux', 'viejo; vieille, vieux, vieil'),
    V('nouveau', 'nouveau', 'nuevo; nouvel ante vocal'),
    V('heureux', 'heureux', 'feliz; -eux → -euse'),
    V('blanc', 'blanc', 'blanco; blanche, blancs'),
    V('doux', 'doux', 'dulce; douce (extra -d)'),
    V('faux', 'faux', 'falso; fausse; ante vocal: fol'),
    V('pauvre', 'pauvre', 'pobre; la posición cambia el sentido'),
    V('premier', 'premier', 'primero; posición fija'),
    V('même', 'même', 'mismo; -e solo ante sustantivo'),
    V('joli', 'joli', 'bonito, elegante; casi siempre antes'),
    V('lourd', 'lourd', 'pesado; ant. de lourds'),
    V('fidèle', 'fidèle', 'fiel; forma regular, sobria'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el femenino plural de {vieux}?'),
    options: [T('{vieilles}'), T('{vieux}'), T('{vieuxes}'), T('{vieille}')],
    answer: 0,
    hint: T('Es irregular: el femenino es {vieille} y solo entonces se añade la -s del plural.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Femenino de {heureux} (solo singular): heureu_'),
      answer: 'se',
      hint: T('Regla §2: la familia del -eux hace -euse.'),
    },
    {
      kind: 'choose',
      prompt: T('En «{un homme grand}», ¿qué significa la frase?'),
      options: [
        T('Un hombre generoso o excelente, no un hombre alto'),
        T('Un hombre alto: {grand} es neutro en posición inicial'),
        T('Un hombre viejo, por confusión con {vieux}'),
        T('La frase es agramatical'),
      ],
      answer: 0,
      hint: T('Regla §5: un adjetivo ante el sustantivo acquires un matiz afectivo.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada forma con su función'),
      pairs: [
        { a: T('bel'), b: T('forma reducida de {beau} ante vocal') },
        { a: T('beaux'), b: T('plural masculino de {beau}') },
        { a: T('blanche'), b: T('femenino irregular de {blanc}') },
        { a: T('nouvel'), b: T('forma reducida de {nouveau} ante vocal') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuántos de los adjetivos siguientes van **antes** del sustantivo?'),
      options: [T('Ninguno'), T('Uno'), T('Dos'), T('Tres')],
      answer: 1,
      hint: T(
        'En {une robe bleue}, {une maison grande} y {un petit enfant}, solo el tercero pone el adjetivo delante.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El adjetivo concuerda en género y número: femenino *-e*, plural *-s*, femenino plural *-es* — salvo que la forma ya termine en *-e*, *-s* o *-x*, como en {heureux → heureuse → heureux → heureuses}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Dos familias cambian de forma especial: *-eux* pasa a *-euse* ({heureux → heureuse}, {jaloux → jalouse}) y *-f* pasa a *-ve* en pocos casos ({neuf → neuve}, {serpentin → serpentine}), *-e* en los demás ({actif → active}).',
      ),
    },
    {
      n: '3',
      text: T(
        'Los irregulares son pocos y merecen el repaso: {beau → belle}, {vieux → vieille}, {blanc → blanche}, {doux → douce}, {faux → fausse}, {sec → sèche}, {public → publique}. En plural ante sustantivo, {beau} y {vieux} cambian: {beaux}, {vieux}.',
      ),
    },
    {
      n: '4',
      text: T(
        'La posición normal es tras el sustantivo. Delante quedan los cortos y frecuentes: {beau, joli, jeune, nouveau, bon, vieux, grand, petit, gros, long, haut, large, premier, dernier, vrai, faux}.',
      ),
    },
    {
      n: '5',
      text: T(
        'La posición puede invertir el sentido: {un homme pauvre} es «un hombre sin recursos», {un pauvre homme} es «un pobre hombre»; {un homme grand} es alto, {un grand homme} es notable. Los títulos van delante ({la Sainte Bible}), los colores casi siempre detrás ({une robe bleue}).',
      ),
    },
  ],
  notes: [
    {
      label: T('Formas reducidas: la lista es corta'),
      text: T(
        'Ante vocal o *h* muda hay formas sin la vocal final: {beau → bel} ({un bel ami}), {nouveau → nouvel} ({un nouvel homme}), {vieux → vieil} ({un vieil arbre}), {fou → fol} ({un fol amusement}), {mou → mol} ({un mol oreiller}). Son exactamente esas cinco; el resto de la lengua queda intacto.',
      ),
    },
    {
      label: T('Colores y algunos participios'),
      text: T(
        'Los colores siguen casi siempre al sustantivo — {une robe bleue}, {une maison blanche} —, pero cuando {bleu} funciona como sustantivo va detrás: {un garment bleu}. Los colores compuestos llevan una segunda palabra, casi siempre **antes**: {bleu clair}, {bleu foncé}, {vert clair}, {marron clair}. Los participios de verbo transitivo, en cambio, van detrás: {une maison abandonnée}, {une porte fermée}.',
      ),
    },
  ],
  examples: [
    { text: 'une maison grande', gloss: T('una casa grande — tras el sustantivo') },
    { text: 'un homme heureux', gloss: T('un hombre feliz — -eux → -euse') },
    { text: 'des filles heureuses', gloss: T('chicas felices — femenino plural en -es') },
    { text: 'une belle maison', gloss: T('una bella casa — irregular: {belle}') },
    { text: 'un bel ami', gloss: T('un belo amigo — forma reducida de {beau}') },
    { text: 'un nouvel arbre', gloss: T('un árbol nuevo — {nouvel} ante vocal') },
    { text: 'un vieil homme', gloss: T('un anciano — {vieil} ante vocal') },
    { text: 'la Sainte Bible', gloss: T('la Santa Biblia — título, siempre antes') },
    { text: 'un homme pauvre', gloss: T('un hombre sin recursos — sentido literal') },
    { text: 'un grand homme', gloss: T('un gran hombre — sentido elogioso') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Flexión de los adjetivos'),
      head: [T('Modelo'), T('Masc. sing.'), T('Fem. sing.'), T('Masc. pl.'), T('Fem. pl.')],
      rows: [
        ['regra geral', '{grand}', '{grande}', '{grands}', '{grandes}'],
        ['-eux → -euse', '{heureux}', '{heureuse}', '{heureux}', '{heureuses}'],
        ['-f → -ve', '{neuf}', '{neuve}', '{neufs}', '{neuves}'],
        ['-f → -e', '{actif}', '{active}', '{actifs}', '{actives}'],
        ['irregular', '{beau}', '{belle}', '{beaux}', '{belles}'],
        ['irregular', '{vieux}', '{vieille}', '{vieux}', '{vieilles}'],
        ['irregular', '{blanc}', '{blanche}', '{blancs}', '{blanches}'],
        ['irregular', '{doux}', '{douce}', '{doux}', '{douces}'],
      ],
    },
    {
      caption: T('Tabla 2 — Dónde queda el adjetivo'),
      head: [T('Posición'), T('Tipo'), T('Efecto'), T('Ejemplos')],
      rows: [
        [
          'depois',
          'after (the rule)',
          'literal, descritivo',
          '{une maison grande}, {un homme heureux}',
        ],
        [
          'antes (lista curta)',
          'before (short list)',
          'ênfase, hábito',
          '{un petit enfant}, {une belle maison}',
        ],
        [
          'antes (sentido)',
          'before (sense)',
          'avaliação, tom afetivo',
          '{un homme pauvre} × {un pauvre homme}',
        ],
        [
          'depois (cores)',
          'after (colours)',
          'uso quase fixo',
          '{une robe bleue}, {un ciel clair}',
        ],
        [
          'antes (títulos)',
          'before (titles)',
          'convenção fixa',
          '{la Sainte Bible}, {le grand Dieu}',
        ],
      ],
    },
  ],
};

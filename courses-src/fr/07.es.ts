import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('El plural de los sustantivos'),
  subtitle: T('{-s}, {-x} y los plurales en {-aux}'),
  section: T('Sustantivos'),
  body: C(`## La regla que no se oye

El plural francés es, en la immense mayoría de los casos, una *-s* muda. {livre} «libro» da {livres}; {ami} «amigo» da {amis}; {maison} «casa» da {maisons}. La letra aparece, el sonido no. Un francés pronuncia igual {livre} y {livres}: una sola forma sonora para las dos. Por eso el plural solo se recupera por el contexto, por los determinantes o por el verbo.

Quien usa la palabra equivocada se delata al instante, incluso sin hablar: es el mismo efecto que escribir «los libro».

## Cuando la -s ya está

Si el sustantivo ya termina en *-s*, *-x* o *-z*, el plural no añade nada, ni letra ni sonido:

- {le fils} → {les fils} «el hijo → los hijos»
- {le prix} → {les prix} «el precio → los precios»
- {la voix} → {les voix} «la voz → las voces»
- {le nez} → {les nez} «la nariz → las narices»

Son los **plurales invariables**, y en francés son más frecuentes de lo que uno supone: {le temps}, {le mois}, {l'angle}, {le corps}, {le sourcil}, {le pelvis}. La lista merece memorizarse, porque aquí el error sale caro.

## Los dos grandes grupos: -eau y -al

El patrón más productivo del plural francés es el intercambio de una terminación por otra, siempre con la misma *x* final: *-eau → -eaux* y *-al → -aux*.

| Singular | Plural | Glosario |
|---|---|---|
| {château} | {châteaux} | castillo / castillos |
| {oiseau} | {oiseaux} | pájaro / pájaros |
| {bateau} | {bateaux} | barco / barcos |
| {cheval} | {chevaux} | caballo / caballos |
| {animal} | {animaux} | animal / animales |
| {journal} | {journaux} | periódico / periódicos |
| {hôpital} | {hôpitaux} | hospital / hospitales |

Quien estudia francés aprende pronto que **el plural es regular en la terminación**; la irregularidad está siempre en el caso, nunca en el número. No existe «dual» ni «plural doble»: hay una sola forma para muchos.

## Dónde falla el patrón

La regla *-al → -aux* es fuerte, pero no universal. Un puñado de palabras se resiste:

- {festival} → {festivals}, {carnaval} → {carnavals}, {bal} → {bals}
- {oral} → {oraux}, {hospital} → {hôpitaux}, {global} → {globaux}

Lo mismo vale para *-eau*: {le nouveau} → {les nouveaux}, {le peau} → {les peaux}, pero {le château} → {les châteaux} y {le bateau} → {les bateaux}. Lo que decide es el número de sílabas, no la letra.

## El grupo de los -ou

La terminación *-ou* solo hace *-oux* en una lista corta y cerrada: {genou} → {genoux} «rodilla/rodillas», {caillou} → {cailloux} «guijarro/guijarros», {chou} → {choux} «col/coles», {hibou} → {hiboux} «búho/búhos», {joujou} → {joujoux} «juguete/juguetes». Todo lo demás solo añade -s: {clou → clous}, {trou → trous}, {cou → cous}, {bijou → bijoux}.

## Lectura — Louis Segond

{Au commencement, Dieu créa les cieux et la terre} (Gn 1:1) — {les cieux} con la *-x* invariable. {Il fit ensuite le soleil, la lune et les étoiles} (Gn 1:16) — tres sustantivos, el segundo con *-x*. {Vous serez donc parfaits comme votre Père qui est aux cieux est parfait} (Mt 5:48) — el plural de {les enfants de Dieu} es lo que sostiene la promesa. {Les animaux de la terre}, {les oiseaux du ciel} y {les poissons des eaux} de Génesis 1 emplean exactamente la misma maquinaria.

## Lo esencial

Una letra cambia y no cambia nada en el sonido: esa es la idea central del plural francés. Solo cuando la terminación se intercambia (*-al → -aux*, *-ou → -oux*, *-iel → -ieux*) recibe el oído una señal.`),
  vocab: [
    V('livre', 'livre', 'libro (→ livres)'),
    V('les fils', 'fils', 'los hijos; plural invariable'),
    V('les prix', 'prix', 'los precios; invariable (x)'),
    V('la voix', 'voix', 'la voz; invariable en plural'),
    V('le nez', 'nez', 'la nariz; invariable (z)'),
    V('le château', 'château', 'el castillo; -eau → -eaux'),
    V('le cheval', 'cheval', 'el caballo; -al → -aux'),
    V('le journal', 'journal', 'el periódico; periódicos en -aux'),
    V("l'animal", 'animal', 'el animal; animaux'),
    V("l'hôpital", 'hôpital', 'el hospital; hôpitaux'),
    V('le genou', 'genou', 'la rodilla; -ou → -oux'),
    V('le chou', 'chou', 'la col; -ou → -oux'),
    V('le clou', 'clou', 'el clavo; solo añade -s'),
    V('le ciel', 'ciel', 'el cielo; cieux'),
    V("l'œil", 'œil', 'el ojo; yeux (único plural)'),
    V('le travail', 'travail', 'el trabajo; travaux'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cómo se forma normalmente el plural de {journal}?'),
    options: [
      T('{journaux} — cambio de terminación, como en {cheval}'),
      T('{journals} — solo -s muda'),
      T('{journaux} — porque termina en -al'),
      T('{journaus} — inserción de -u'),
    ],
    answer: 0,
    hint: T(
      'La opción 2 nombra la regla; la opción 4 da su razón. Ambas son ciertas: elige la que describe el mecanismo.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Plural de {cheval}: cheva_'),
      answer: 'ux',
      hint: T('Regla §3: {-al} → {-aux}.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál de estos plurales es irregular, es decir, no sigue el patrón de su grupo?'),
      options: [T('{les voix}'), T('{los châteaux}'), T('{los carnavals}'), T('{las rodillas}')],
      answer: 2,
      hint: T('Tres siguen su grupo; {carnaval} rechaza el -aux.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el singular con su plural'),
      pairs: [
        { a: T('el periódico'), b: T('los periódicos') },
        { a: T('el precio'), b: T('los precios') },
        { a: T('el botón'), b: T('los botones') },
        { a: T('la col'), b: T('las coles') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'En «{les yeux, les oreilles et les bouches}», ¿cuántos plurales invariables aparecen?',
      ),
      options: [T('Ninguno'), T('Uno'), T('Dos'), T('Tres')],
      answer: 1,
      hint: T('Ojos y bocas no son invariables: {yeux} es irregular y {bouches} es regular.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'La regla general añade una -s muda al singular: {livre → livres}, {ami → amis}, {maison → maisons}, {enfant → enfants}. El sonido no cambia, y el plural solo se reconoce por el contexto.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los sustantivos terminados en -s, -x o -z son invariables en plural: {le fils → les fils}, {le prix → les prix}, {la voix → les voix}, {le nez → les nez}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los cambios productivos son *-eau → -eaux* y *-al → -aux*: {château → châteaux}, {oiseau → oiseaux}, {cheval → chevaux}, {animal → animaux}, {journal → journaux}, {hôpital → hôpitaux}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El -al → -aux* es una regla, no una ley: {festival → festivals}, {carnaval → carnavals}, {bal → bals} quedan fuera. El número de sílabas explica la resistencia, no la letra final.',
      ),
    },
    {
      n: '5',
      text: T(
        'El -ou → -oux* solo vale para una lista cerrada — {genou → genoux}, {caillou → cailloux}, {chou → choux}, {hibou → hiboux} —; en los demás basta la -s: {clou → clous}, {trou → trous}.',
      ),
    },
  ],
  notes: [
    {
      label: T('Plurales conceptuales'),
      text: T(
        'Algunos plurales no son mecánica: son formas auténticas, con raíces propias. {œil → yeux}, {ciel → cieux}, {vitrail → vitraux}, {dieu → dieux}, {eau → eaux}. Ninguno se deduce por regla: apréndelos como palabras.',
      ),
    },
    {
      label: T('Números, siglas y nombres'),
      text: T(
        'Años, siglas y apellidos no toman plural: {les années 1990}, {les États-Unis}, {les Dupont}, {les Martin}. El plural entra solo cuando la persona se vuelve colectiva: {les Duponts} «los varios Dupont».',
      ),
    },
  ],
  examples: [
    { text: 'livre → livres', gloss: T('libro → libros: -s muda') },
    { text: 'le fils → les fils', gloss: T('el hijo → los hijos: invariable') },
    { text: 'le prix → les prix', gloss: T('el precio → los precios: invariable (x)') },
    { text: 'la voix → les voix', gloss: T('la voz → las voces: invariable') },
    { text: 'le château → les châteaux', gloss: T('castillo → castillos: -eau → -eaux') },
    { text: 'le cheval → les chevaux', gloss: T('caballo → caballos: -al → -aux') },
    { text: "l'animal → les animaux", gloss: T('animal → animales: -al → -aux') },
    { text: 'le genou → les genoux', gloss: T('rodilla → rodillas: -ou → -oux') },
    { text: 'le clou → les clous', gloss: T('clavo → clavos: solo -s') },
    { text: "l'œil → les yeux", gloss: T('ojo → ojos: único plural e irregular') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — La regla general y los plurales invariables'),
      head: [T('Caso'), T('Terminación del singular'), T('Plural'), T('Sonido'), T('Ejemplos')],
      rows: [
        [
          'regra geral',
          '{-e}, {-a}, consoante',
          '{-s}',
          'inalterado',
          '{livre → livres}, {ami → amis}',
        ],
        ['já em -s', '{-s}', '{-s}', 'inalterado', '{le fils → les fils}'],
        ['já em -x', '{-x}', '{-x}', 'inalterado', '{le prix → les prix}, {le voix → les voix}'],
        ['já em -z', '{-z}', '{-z}', 'inalterado', '{le nez → les nez}'],
        ['estados, meses', '{le temps}, {le mois}', 'iguais', 'inalterado', '{le mois → les mois}'],
      ],
    },
    {
      caption: T('Tabla 2 — Terminaciones que cambian de forma'),
      head: [T('Grupo'), T('Cambio'), T('Ejemplos'), T('Límite o excepción')],
      rows: [
        [
          '-eau',
          '-eaux',
          '{château → châteaux}, {bateau → bateaux}',
          '{le nouveau → les nouveaux}, {le peau → les peaux}',
        ],
        [
          '-al',
          '-aux',
          '{cheval → chevaux}, {animal → animaux}',
          '{festival → festivals}, {bal → bals}, {hospital → hôpitaux}',
        ],
        ['-ou (lista)', '-oux', '{genou → genoux}, {chou → choux}', '{clou → clous}, {cou → cous}'],
        ['-iel', '-ieux', '{ciel → cieux}', '{le miel → les miels}'],
        [
          '-eau / -eil',
          '-eaux / -eux',
          '{œil → yeux}, {vitrail → vitraux}',
          'plurais irreprodutíveis por regra',
        ],
      ],
    },
  ],
};

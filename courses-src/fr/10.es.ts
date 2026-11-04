import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Los adverbios'),
  subtitle: T('{-ment}, {très}, {beaucoup} y el lugar de cada uno'),
  section: T('Los adjetivos y los adverbios'),
  body: C(`## El adverbio nunca concuerda

El adverbio es la palabra que no mira al sustantivo. Es invariable, no tiene género ni número, y puede modificar un verbo, un adjetivo, otro adverbio o una oración entera: {il parle clairement}, {une maison très grande}, {il travaille vraiment trop}, {elle est partie rapidement}.

La inmensa mayoría se forma del **femenino del adjetivo más -ment**: {claire → clairement}, {rapide → rapidement}, {heureuse → heureusement}, {douce → doucement}, {vraie → vraiment}, {folle → follement}. Fíjate en que se parte de la forma femenina, no de la masculina: {heureuse}, no {heureux}.

Dos familias transforman el final: los adjetivos en *-ant* dan *-amment* ({constant → constamment}, {habitant → habituellement}) y los de *-ent* dan *-emment* ({patient → patiemment}, {sage → sagement}).

Y hay un puñado que no viene de ningún adjetivo: {bien}, {mal}, {vite}, {tôt}, {tard}, {ensemble}, {debout}, {souvent}, {peut-être}, {ici}, {nulle part}. Esos son los más frecuentes, y por eso mismo los que usarás primero.

## Intensificar: {très} sí, con verbos no

La regla corta: **{très} nunca intensifica un verbo**. Va delante de un adjetivo ({très grand}) y de un adverbio ({très vite}), y nada más.

| Intensificador | Con adjetivo | Con verbo | Con sustantivo |
|---|---|---|---|
| {très} | {très grand} | — (imposible) | — (imposible) |
| {trop} | {trop grand} | {trop travailler} | {trop de travail} |
| {assez} | {assez grand} | {assez travailler} | {assez de temps} |
| {beaucoup} | — | {beaucoup travailler} | {beaucoup de livres} |
| {peu} | — | {peu travailler} | {peu de temps} |

Mira la columna del medio: {beaucoup}, {trop}, {assez} y {peu} van justo antes del verbo, sin {de}. Y {trop} tiene un truco especial: con {pas} pierde su fuerza negativa y significa «no demasiado»: {Ce n'est pas trop tard} = «No es demasiado tarde», literalmente «no es muy tarde».

Junto a {beaucoup}, las cuantidades llevan la preposición {de}: {beaucoup de gens}, {bien des gens}, {trop de monde}.

## Dónde se coloca el adverbio

En la frase simple, el adverbio corto va **después del verbo conjugado y antes del complemento**: {il parle bien français}, {elle travaille beaucoup}, {nous sommes arrivés tard}. Con verbo auxiliar, el adverbio separa el auxiliar del principal: {il a beaucoup travaillé}, {nous avons déjà mangé}, {elle est déjà partie}.

El adverbio largo, en cambio, tiende a ir al final: {il a parlé très clairement à ses élèves}, {elle habite maintenant à Genève}.

Y cuidado con la negación: en francés envuelve al verbo, y el adverbio queda fuera. {Je ne comprends pas} — nunca {Je ne pas comprends}. Con auxiliar: {je n'ai pas compris}, {il ne parle pas bien français}.

## Adverbios que también son adjetivos

Algunas palabras visten el mismo traje en los dos papeles:

- {bien} — adverbio ({il parle bien}) y adjetivo ({c'est bien})
- {mal} — adverbio ({il dort mal}) y adjetivo ({c'est mal})
- {grand} — adverbio ({il parle grand}) y adjetivo ({un grand homme})
- {direct} — {parlez-moi direct} y {un train direct}
- {tout} — adverbio invariable ({il mange tout}) y adjetivo concordante ({toute la ville})

En {tout}, la regla es que la concordancia aparece **solo** cuando hay un sustantivo determinado detrás: {tout le monde}, {tous les jours}, {toute la ville}. Sin sustantivo es invariable: {Tout est bon} «todo es bueno».

## Lectura — Louis Segond

{Vous serez mes disciples, si vous faites toutes les choses que je vous ai enseignées} (Mt 23:28) muestra {toutes} con determinantes y por tanto concordado. {Le Père vous aime et vous salue} (1Co 16:23) muestra {vous} como pronombre, tratado en su propio capítulo. {Je vous donne le repos, et je vous rafraîchirai} se apoya en una frase verbal; {Gardez donc vos yeux tournés} (Lc 12:20) coloca el adverbio corto {donc} entre verbo y objeto, el lugar fijo de los adverbios cortos. El lado negativo de la cuestión pertenece al capítulo del presente: {Ce n'est pas trop tard} muestra {trop} dentro de la negación.

## Lo esencial

El adverbio es invariable y se forma casi siempre del femenino del adjetivo más *-ment*. {Très} intensifica adjetivos y adverbios, nunca verbos; ante sustantivo, {beaucoup}, {trop}, {peu} y {assez} exigen {de}.`),
  vocab: [
    V('clairement', 'clair', 'claramente; de claire + -ment'),
    V('rapidement', 'rapide', 'rápidamente; de rapide'),
    V('doucement', 'doux', 'suavemente; de douce + -ment'),
    V('patiemment', 'patient', 'pacientemente; -ent → -emment'),
    V('constamment', 'constant', 'constantemente; -ant → -amment'),
    V('vraiment', 'vrai', 'realmente; forma propia'),
    V('très', 'très', 'muy; solo con adjetivo/adverbio'),
    V('beaucoup', 'beaucoup', 'mucho; + verbo, o + de + sustantivo'),
    V('trop', 'trop', 'demasiado; con pas = no demasiado'),
    V('assez', 'assez', 'bastante; + de + sustantivo'),
    V('peu', 'peu', 'poco; un peu = un poco'),
    V('bien', 'bien', 'bien; adverbio y adjetivo'),
    V('vite', 'vite', 'rápidamente; sin derivada'),
    V('tout', 'tout', 'todo; invariable sin sustantivo'),
    V('debout', 'debout', 'de pie; invariable'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta en «il travaille ___»?'),
    options: [T('{beaucoup}'), T('{beaucoup de}'), T('{très}'), T('{peu de}')],
    answer: 0,
    hint: T('Regla §4: ante verbo el intensificador va solo; el de solo aparece con sustantivo.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Adverbio derivado de {rapide}: ___ment'),
      answer: 'rapid e',
      hint: T('Deriva del femenino {rapide}, no de la forma final.'),
    },
    {
      kind: 'choose',
      prompt: T('En «{Je ne parle pas bien français}», ¿dónde queda el adverbio {bien}?'),
      options: [
        T('Fuera de la negación, entre el verbo y el complemento'),
        T('Dentro de la negación, entre {ne} y {pas}'),
        T('Al final de la frase, tras el complemento'),
        T('Al principio, antes del pronombre {je}'),
      ],
      answer: 0,
      hint: T('Regla §5: la negación envuelve al verbo; el adverbio queda fuera.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el adverbio con el adjetivo de origen'),
      pairs: [
        { a: T('clairement'), b: T('{clair}') },
        { a: T('patiemment'), b: T('{patient}') },
        { a: T('vraiment'), b: T('{vrai}') },
        { a: T('vite'), b: T('{?} — sin adjetivo de origen') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En «{Il trabaja mucho, y come poco}», ¿cuántos adverbios de cantidad aparecen?'),
      options: [T('Ninguno'), T('Uno'), T('Dos'), T('Tres')],
      answer: 1,
      hint: T('{beaucoup} y {peu} forman una pareja; cada uno cuenta una vez.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los adverbios de modo derivan del femenino del adjetivo más -ment: {claire → clairement}, {rapide → rapidement}, {heureuse → heureusement}. Son invariables: nunca concuerdan en género ni número.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los adjetivos en -ant y -ent pasan a -amment y -emment: {constant → constamment}, {patient → patiemment}. Y hay formas propias: {vrai → vraiment}, {seul → seulement}, {facile → facilement}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Varios adverbios no derivan de ningún adjetivo: {bien}, {mal}, {vite}, {tôt}, {tard}, {ensemble}, {debout}, {souvent}, {peut-être}. Son los más frecuentes de la lengua: apréndelos como unidades.',
      ),
    },
    {
      n: '4',
      text: T(
        'Très intensifica adjetivos y adverbios, nunca verbos: {très bon}, {très vite}. Ante verbo use beaucoup, trop, assez o peu ({il travaille trop}); ante sustantivo todos exigen de: {beaucoup de livres}, {trop de travail}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El adverbio corto va tras el verbo conjugado: {il parle bien français}. Con auxiliar separa el auxiliar del principal: {il a beaucoup travaillé}, {elle est déjà partie}. La negación envuelve al verbo: {je ne comprends pas} — nunca {je ne pas comprends}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El truco de {trop} con {pas}'),
      text: T(
        "Dentro de una negación, {trop} cambia de sentido: {ce n'est pas trop tard} significa «no es demasiado tarde», y no «no es muy tarde». Es el mismo mecanismo de {ne … pas} que se estudiará en el capítulo del presente, aplicado a un adverbio de grado.",
      ),
    },
    {
      label: T('Cuándo concuerda el adverbio'),
      text: T(
        'La regla es estrecha y vale la pena memorizarla: tout concuerda solo cuando tiene detrás un sustantivo determinado — {tous les jours}, {toute la ville}, {tout le monde}. Sin sustantivo es invariable: {Tout est bon} «todo es bueno», {elle a tout vendu} «lo vendió todo». Bien y mal pasan una prueba parecida: si aceptan bon y mauvais en el mismo sitio, son adjetivos.',
      ),
    },
  ],
  examples: [
    { text: 'elle parle clairement', gloss: T('habla claramente — de {claire}') },
    { text: 'il marche rapidement', gloss: T('camina rápidamente — -ment invariable') },
    { text: 'il est patient', gloss: T('es paciente — de donde sale {patiemment}') },
    { text: 'il est constamment absent', gloss: T('está constantemente ausente — -ant → -amment') },
    { text: "c'est vraiment vrai", gloss: T('es realmente verdad — forma autónoma') },
    { text: 'un très beau livre', gloss: T('un libro muy bonito — très + adjetivo') },
    { text: 'il travaille beaucoup', gloss: T('trabaja mucho — beaucoup + verbo') },
    { text: 'beaucoup de livres', gloss: T('muchos libros — beaucoup + de + sustantivo') },
    { text: 'trop de travail', gloss: T('demasiado trabajo — trop + de') },
    { text: 'toute la ville', gloss: T('toda la ciudad — tout concuerda con el sustantivo') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Formación de los adverbios en -ment'),
      head: [T('Origen'), T('Regla'), T('Resultado')],
      rows: [
        ['adjetivo comum', 'feminino + {-ment}', '{claire → clairement}'],
        ['adjetivo em -eux', 'feminino *-euse* + {-ment}', '{heureuse → heureusement}'],
        ['adjetivo em -ant', '{-ant} → {-amment}', '{constant → constamment}'],
        ['adjetivo em -ent', '{-ent} → {-emment}', '{patient → patiemment}'],
        ['forma própria', 'sem regra geral', '{vrai → vraiment}'],
        ['advérbios sem derivada', 'aprende-se como unidade', '{vite, tôt, tard, bien, mal}'],
      ],
    },
    {
      caption: T('Tabla 2 — Intensidad y cantidad'),
      head: [T('Palabra'), T('Con verbo'), T('Con sustantivo'), T('Observación')],
      rows: [
        [
          '{très}',
          '— (não intensifica verbo)',
          '— (não usa com subst.)',
          '{très grand}, {très vite}',
        ],
        ['{trop}', '{trop travailler}', '{trop de travail}', 'com {pas}: «nem»'],
        ['{assez}', '{assez travailler}', '{assez de temps}', 'também {assez de} = alguns'],
        ['{beaucoup}', '{beaucoup travailler}', '{beaucoup de livres}', '{bien des gens}'],
        ['{peu}', '{peu travailler}', '{peu de temps}', '{un peu de sel}'],
        [
          '{tout}',
          '{tout manger}',
          'concorda se houver subst.',
          '{toute la ville} × {Tout est bon}',
        ],
      ],
    },
  ],
};

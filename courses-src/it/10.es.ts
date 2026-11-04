import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Futuro y condicional'),
  subtitle: T('parlerò, parlerei'),
  section: T('Los tiempos del verbo'),
  body: C(`## Una raíz, dos terminaciones

El futuro y el condicional salen de la misma raíz del infinitivo, **casi siempre sin la vocal final**: {parlare} → {parler-}, {leggere} → {legger-}, {finire} → {finir-}. Después la terminación hace todo el trabajo, y es ella la que separa los dos tiempos.

El futuro añade {-ò}, {-ai}, {-à}, {-emo}, {-ete}, {-anno}: {parlerò}, {parlerai}, {parlerà}, {parleremo}, {parlerete}, {parleranno}. El condicional añade {-ei}, {-esti}, {-ebbe}, {-emmo}, {-este}, {-ebbero}: {parlerei}, {parleresti}, {parlerebbe}, {parleremmo}, {parlereste}, {parlerebbero}. Una vocal cambiada, dos tiempos: {parlerò} y {parlerei} se diferencian solo en la última sílaba.

## El condicional no es solo hipótesis

El condicional **es el tiempo de la hipótesis**, de la posibilidad y de la cortesía: {Vorrei un caffè} («me gustaría un café»), {Potresti aiutarmi?} («¿podrías ayudarme?»), {Lo farei} («lo haría, si pudiera»). {Vorrei} es más que un deseo: es una petición educada, y la distancia que construye el italiano es lo que hace que la petición funcione.

Traducir {Lo farei} por «lo haré» falla. El contexto decide si es condicional (hipótesis) o futuro (hecho previsto), y muchas veces la diferencia es justamente lo que el narrador no quiere afirmar. En los evangelios, {Verrà il tuo regno} y {Avrà la gloria} usan el futuro para lo que es cierto; {sarebbe venuto} usa el condicional para lo que solo es posible.

## Los irregulares son pocos y muy usados

{Essere} da {sarò} y {sarei}, {avere} da {avrò} y {avrei}, {fare} da {farò} y {farei}, {andare} da {andrò} y {andrei}, {venire} da {verrò} y {verrei}, {vedere} da {vedrò} y {vedrei}, {potere} da {potrò} y {potrei}, {dovere} da {dovrò} y {dovrei}, {sapere} da {saprò} y {saprei}. El patrón es siempre el mismo: el verbo **pierde sílaba** y gana {-rò} o {-rei}.

Es el mismo camino del latín: {amāre} daba {amābō}, y el italiano {verrò} desciende de {venire} más el futuro del latín. El italiano no inventó nada aquí; guardó el final.

## Criterio de lectura

Si ves una forma en {-rò} o {-rei}, la raíz es la del verbo y la terminación dice el tiempo. Y cuidado con los irregulares: {andrò} no es {andare} + {-ò} con la {a} intacta, y {verrò} no tiene {n}. Cuando la forma no sale de la regla, es porque el verbo está en la lista.`),
  vocab: [
    V('parlerò', 'parlare', 'hablaré'),
    V('parlerei', 'parlare', 'hablaría'),
    V('sarò', 'essere', 'seré'),
    V('avrò', 'avere', 'tendré'),
    V('verrà', 'venire', 'vendrá'),
    V('vorrei', 'volere', 'me gustaría'),
    V('potresti', 'potere', 'podrías'),
    V('farei', 'fare', 'haría'),
    V('vedrà', 'vedere', 'verá'),
    V('andrò', 'andare', 'iré'),
    V('dovrò', 'dovere', 'deberé'),
    V('saprà', 'sapere', 'sabrá'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa Ap 1:7: ogni occhio lo ___ (vedere, futuro)'),
    answer: 'vedrà',
    hint: T('Futuro irregular de vedere.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('¿Cuál es el futuro de essere?'),
      options: [T('serei'), T('sarò'), T('sia'), T('ero')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es una petición cortés?'),
      options: [
        T('Dammi il libro!'),
        T('Potresti darmi il libro?'),
        T('Mi dai il libro.'),
        T('Dare il libro.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa: avrei ___ (dire, condicional composto)'),
      answer: 'detto',
      hint: T('Participio irregular de dire.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El futuro toma del infinitivo todo menos la vocal final: {parlare} → {parlerò}, {leggere} → {leggerò}.',
      ),
    },
    {
      n: '2',
      text: T(
        'El condicional usa {-ei}, {-esti}, {-ebbe}, {-emmo}, {-este}, {-ebbero}: {parlerei} y {parlerò} se diferencian solo en la última sílaba.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Vorrei} y {potresti} son condicionales de cortesía y no futuros: «me gustaría», «podrías».',
      ),
    },
    {
      n: '4',
      text: T(
        'Los irregulares cambian el final: {essere} → {sarò} y {sarei}, {venire} → {verrò} y {verrei}, {avere} → {avrò} y {avrei}.',
      ),
    },
    {
      n: '5',
      text: T(
        'El condicional compuesto es el imperfecto del auxiliar más el participio: {avrei detto}, {sarei andato}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El condicional no es un futuro'),
      text: T(
        '{Parlerei} no es el futuro de {parlerò}: es lo que se hace en caso de. Una misma forma cubre deseo, cortesía e hipótesis, {vorrei un caffè}, {se venissi, ti chiamerei}. La forma es una, y lo que cambia es cuánto está dispuesto a afirmar el hablante.',
      ),
    },
    {
      label: T('{Lo farei} tiene dos valores'),
      text: T(
        '{Lo farei} puede ser futuro ({lo farò domani}) o condicional ({se potessi, lo farei}). Decide el contexto, y en {Se venissi, ti chiamerei} la condición está en la oración anterior; quien traduce solo el verbo pierde la condición.',
      ),
    },
  ],
  examples: [
    { text: 'Parlerò con lui domani.', gloss: T('Hablaré con él mañana.') },
    { text: 'Vorrei un caffè.', gloss: T('Me gustaría un café.') },
    { text: 'Potresti aiutarmi?', gloss: T('¿Podrías ayudarme?') },
    { text: 'Ogni occhio lo vedrà.', gloss: T('Todo ojo lo verá.') },
    { text: 'Sarà come un albero.', gloss: T('Será como un árbol.') },
    { text: 'Se venissi, ti chiamerei.', gloss: T('Si vinieras, te llamaría.') },
    { text: 'Verrà il tuo regno.', gloss: T('Vendrá tu reino.') },
    { text: 'Avrà la gloria.', gloss: T('Tendrá la gloria.') },
  ],
  tables: [
    {
      caption: T('Futuro e condicional'),
      head: ['Persona', 'Futuro', 'Condicional'],
      rows: [
        ['io', 'parlerò', 'parlerei'],
        ['tu', 'parlerai', 'parleresti'],
        ['lui/lei', 'parlerà', 'parlerebbe'],
        ['noi', 'parleremo', 'parleremmo'],
        ['voi', 'parlerete', 'parlereste'],
        ['loro', 'parleranno', 'parlerebbero'],
      ],
    },
    {
      caption: T('Futuro e condicional irregolari'),
      head: ['Infinitivo', 'Futuro', 'Condicional'],
      rows: [
        ['essere', 'sarò', 'sarei'],
        ['avere', 'avrò', 'avrei'],
        ['fare', 'farò', 'farei'],
        ['andare', 'andrò', 'andrei'],
        ['venire', 'verrò', 'verrei'],
        ['vedere', 'vedrò', 'vedrei'],
        ['potere', 'potrò', 'potrei'],
        ['dovere', 'dovrò', 'dovrei'],
        ['sapere', 'saprò', 'saprei'],
      ],
    },
  ],
};

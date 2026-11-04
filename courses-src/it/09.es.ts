import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Imperfetto y passato prossimo'),
  subtitle: T('parlava × ha parlato'),
  section: T('Los tiempos del verbo'),
  body: C(`## Dos pasados, dos trabajos

El italiano habla del pasado con dos verbos que hacen trabajos distintos: el *imperfetto* **monta el escenario** y el *passato prossimo* relata el hecho. El imperfecto es edad, estado, costumbre y acción en curso: {aveva venticinque anni}, {vivevano a Roma}, {parlava}. El *passato prossimo* es el hecho delimitado: {venne l’angelo}, {ha parlato}, {abbiamo mangiato}.

La imagen que funciona es la del escenario: el imperfecto es el decorado, y el *passato prossimo* es lo que ocurre en él. En una frase, los dos juntos forman la narración; sin los dos, el texto queda plano.

## Cómo se forma el imperfecto

En el grupo {-are}, el imperfecto **conserva el tema del presente**: {parlare} → {parlavo}, {parlavi}, {parlava}, {parlavamo}, {parlavate}, {parlavano}. Lo mismo en {credere} → {credevo} y {finire} → {finivo}. {Essere} y {avere} son irregulares: {ero}, {eri}, {era}, {eravamo}, {eravate}, {erano}, y {avevo}, {avevi}, {aveva}, {avevamo}, {avevate}, {avevano}.

Fíjate en que el imperfecto no tiene forma propia para {io}: la {-o} es igual que la del presente, y es la terminación la que hace el trabajo. Por eso {parlavo} puede ser «yo hablaba» o, en un registro raro, «yo hablaré», y la lectura temporal viene del contexto.

## El par que define la escena

{Mentra pregava, venne l’angelo} **es el ejemplo que separa los dos tiempos**. El verbo de escenario se queda en imperfecto, el hecho en *passato prossimo*. {Pioveva quando siamo usciti} muestra la misma estructura con {quando}: la circunstancia en imperfecto, el hecho en *passato prossimo*.

Aquí es donde se pierde la traducción. El griego distingue lo que pasaba de vez en cuando de lo que pasaba siempre; el italiano usa el imperfecto para los dos, y quien traduce tiene que decidir por la gramática del contexto y no por la intuición.

## En la Biblia

{La luce era} expresa existencia continua: la luz estaba ahí, sin comienzo marcado. {La luce fu}, en el paralelo del Génesis, presenta el resultado puntual del mandato: la luz llegó a existir. Es la misma diferencia entre {disse} y {fu scritto}, ahora entre dos pasados.

Si tu traducción usa «era» en los dos sitios, perdió la distinción que hace el italiano. Y si usa «existía» en uno y «fue» en el otro, acertó: es la diferencia de la que depende la narración.

## Criterio de lectura

Siempre que veas {mentra}, {quando} o {finché} junto a un verbo en pasado, pregunta cuál de los dos es decorado y cuál es hecho. Lo que está en *passato prossimo* es lo que ocurrió; lo que está en imperfecto es el fondo.`),
  vocab: [
    V('parlava', 'parlare', 'hablaba'),
    V('credevo', 'credere', 'creía'),
    V('finivo', 'finire', 'terminaba'),
    V('ero', 'essere', 'era'),
    V('avevo', 'avere', 'tenía'),
    V('pioveva', 'piovere', 'llovía'),
    V('mentra', 'mentra', 'mientras'),
    V('quando', 'quando', 'cuando'),
    V('pregava', 'pregare', 'oraba'),
    V('venne', 'venire', 'vino'),
    V('usciti', 'uscire', 'salido'),
    V('vivevano', 'vivere', 'vivían'),
    V('luce', 'luce', 'luz'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuáles son los imperfectos de essere y avere?'),
    options: [T('era / aveva'), T('ero / avevo'), T('sarei / avrei'), T('sia / abbia')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: quando ___ (piovere, io, imperf.)'),
      answer: 'pioveva',
      hint: T('3.ª persona del imperfecto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase relata una escena en curso?'),
      options: [
        T('Mentre pregava, venne l’angelo.'),
        T('Ho pregato e l’angelo è venuto.'),
        T('Prego e l’angelo viene.'),
        T('Pregherò quando verrà.'),
      ],
      answer: 0,
    },
    {
      kind: 'fill',
      prompt: T('Completa: sono arrivat_ ieri'),
      answer: 'i',
      hint: T('Noi: sono + participio plural.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El imperfecto monta el escenario y el *passato prossimo* relata el hecho: {parlava} y {venne}.',
      ),
    },
    {
      n: '2',
      text: T(
        'En el grupo {-are} el imperfecto conserva el tema del presente: {parlare} → {parlavo}, {parlavi}, {parlava}, {parlavamo}.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Essere} y {avere} son irregulares: {ero}, {era}, {eravamo}, {erano} y {avevo}, {aveva}, {avevamo}, {avevano}.',
      ),
    },
    {
      n: '4',
      text: T(
        'El imperfecto no tiene forma propia de {io}, y por eso {parlavo} también puede ser «yo hablaré» en un registro raro.',
      ),
    },
    {
      n: '5',
      text: T(
        'Con {mentra} y {quando} la circunstancia va en imperfecto y el hecho en *passato prossimo*: {mentra pregava, venne l’angelo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('El imperfecto se retira'),
      text: T(
        '{Da tre anni studio} es lo que sigue; {ho studiato tre anni} es lo que ya terminó. La diferencia es de punto de vista y no de tiempo: la misma persona que estudia hace ciertas las dos frases a la vez.',
      ),
    },
    {
      label: T('El par se traduce junto'),
      text: T(
        '{Mentre pregava, venne l’angelo} solo es frase en italiano. Traducir los dos verbos por el mismo tiempo en español esconde la distinción que el italiano hace con convicción, y el lector pierde la noción de que algo interrumpió la escena.',
      ),
    },
  ],
  examples: [
    { text: 'Mentra pregava, venne l’angelo.', gloss: T('Mientras oraba, vino el ángel.') },
    { text: 'Pioveva quando siamo usciti.', gloss: T('Llovía cuando salimos.') },
    { text: 'Gesù camminava sul mare.', gloss: T('Jesús andaba sobre el mar.') },
    { text: 'I discepoli ebbero paura.', gloss: T('Los discípulos tuvieron miedo.') },
    { text: 'Maria leggeva la Scrittura.', gloss: T('María leía las Escrituras.') },
    { text: 'Le donne erano in giardino.', gloss: T('Las mujeres estaban en el jardín.') },
    { text: 'Aveva venticinque anni.', gloss: T('Tenía veinticinco años.') },
    { text: 'Era la luce nel mondo.', gloss: T('La luz estaba en el mundo.') },
  ],
  tables: [
    {
      caption: T('Imperfetto di parlare'),
      head: ['Persona', '-are', '-ere', '-ire', 'irregolari'],
      rows: [
        ['io', 'parlavo', 'credevo', 'finivo', 'ero, avevo'],
        ['tu', 'parlavi', 'credevi', 'finivi', 'eri, avevi'],
        ['lui/lei', 'parlava', 'credeva', 'finiva', 'era, aveva'],
        ['noi', 'parlavamo', 'credevamo', 'finivamo', 'eravamo, avevamo'],
        ['voi', 'parlavate', 'credevate', 'finivate', 'eravate, avevate'],
        ['loro', 'parlavano', 'credevano', 'finivano', 'erano, avevano'],
      ],
    },
    {
      caption: T('Escena y hecho'),
      head: ['Frase', 'Imperfetto', 'Passato prossimo'],
      rows: [
        ['mentra pregava, venne l’angelo', 'pregava', 'venne'],
        ['pioveva quando siamo usciti', 'pioveva', 'siamo usciti'],
        ['la luce era nel mondo', 'era', '—'],
        ['la luce fu creata', '—', 'fu'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Los verbos: presente'),
  subtitle: T('-ar, -er, -ir — tres conjugaciones'),
  section: T('Los verbos'),
  body: C(`## Tres conjugaciones

El infinitivo español termina en {-ar}, {-er} o {-ir}, y de ahí sale todo el paradigma:

{-AR}: {hablar} «hablar» — {hablo}, {hablas}, {habla}, {hablamos}, {habláis}, {hablan}.
{-ER}: {comer} «comer» — {como}, {comes}, {come}, {comemos}, {coméis}, {comen}.
{-IR}: {vivir} «vivir» — {vivo}, {vives}, {vive}, {vivimos}, {vivís}, {viven}.

Solo el presente y el subjuntivo (y el gerundio) cambian la vocal temática; los demás tiempos toman el infinitivo como base.

## El verbo {ser} en presente

{ser} es irregular: {soy}, {eres}, {es}, {somos}, {seáis}, {son}. {soy} es una forma propia, sin nada regular en ella.

## El verbo lleva la persona

Como el verbo ya lleva la persona, el pronombre sujeto se **omite**: {Hablo} «(yo) hablo» · {Habla Dios} «Dios habla» · {Hablan los discípulos} «los discípulos hablan».

## Voseo (solo en el Río de la Plata)

En Argentina y Uruguay el {tú} pasa a {vos}, con el verbo en la segunda persona del plural: {vos hablás}, {vos tenés}, {vos podés}. El acento final es la marca escrita.

## Europeo × americano

En América casi nadie usa {vosotros}: el plural pasa a {ustedes} — «ustedes hablan». La forma {vosotros habláis} sigue existiendo, pero solo en España.

## Nota de leitura

En el texto bíblico el presente expresa también acción habitual ({ama a su prójimo}, Mc 12.30) y acción en curso, no solo «ahora».`),
  vocab: [
    V('hablo', 'hablar', 'hablo'),
    V('hablamos', 'hablar', 'hablamos (¡vocal -á-!)'),
    V('como', 'comer', 'como'),
    V('vivo', 'vivir', 'vivo'),
    V('habláis', 'hablar', 'habláis (¡solo en España!)'),
    V('soy', 'ser', 'soy (¡irregular!)'),
    V('aman', 'amar', 'aman (Mc 12.30)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Completa: «yo ___ (hablar)» (yo hablo)'),
    answer: 'hablo',
    hint: T('Primera persona de -ar.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el presente: «nosotros ___ (vivir)»'),
      answer: 'vivimos',
      hint: T('El 1.º plural de -ir cambia la vocal a -i-.'),
    },
    {
      kind: 'choose',
      prompt: T('En América, el plural de «tú» es casi siempre…'),
      options: [T('{vosotros}'), T('{ustedes}'), T('{vos}'), T('{ellos}')],
      answer: 1,
      hint: T('Regla §5: sección europeo × americano.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la persona con el verbo'),
      pairs: [
        { a: T('yo'), b: T('{comen}') },
        { a: T('tú'), b: T('{comes}') },
        { a: T('nosotros'), b: T('{comemos}') },
        { a: T('ellos'), b: T('{hablan}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Tres conjugaciones: -ar, -er, -ir; el presente sale del infinitivo cambiando la vocal final.',
      ),
    },
    { n: '2', text: T('El pronombre sujeto se omite porque el verbo ya marca la persona.') },
    { n: '3', text: T('El presente también marca hábito y acción en curso.') },
    { n: '4', text: T('Voseo (Argentina/Uruguay): tú hablas → vos hablás, con acento final.') },
    { n: '5', text: T('Fuera de España, el plural de «tú» es casi siempre ustedes.') },
  ],
  notes: [
    {
      label: T('La forma {soy} sirve para todo'),
      text: T(
        'El presente solo tiene tres terminaciones: {-o}, {-as}, {-a}. Por eso {hablo} y {habla} se diferencian solo en persona — el sujeto hace el resto.',
      ),
    },
  ],
  examples: [
    { text: '{Creo en Dios}', gloss: T('Creo en Dios.') },
    { text: '{Oramos juntos}', gloss: T('Oramos juntos.') },
    { text: '{Viven en paz}', gloss: T('Viven en paz.') },
    { text: '{Ama a su prójimo}', gloss: T('Ama a su prójimo (Mc 12.30 — presente habitual).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente de indicativo'),
      head: [T('Persona'), T('hablar (-ar)'), T('comer (-er)'), T('vivir (-ir)')],
      rows: [
        ['yo', '{hablo}', '{como}', '{vivo}'],
        ['tú', '{hablas}', '{comes}', '{vives}'],
        ['él/ella/usted', '{habla}', '{come}', '{vive}'],
        ['nosotros', '{hablamos}', '{comemos}', '{vivimos}'],
        ['vosotros', '{habláis}', '{coméis}', '{vivís}'],
        ['ellos/ustedes', '{hablan}', '{comen}', '{viven}'],
      ],
    },
    {
      caption: T('Tabla 2 — Voseo rioplatense × tuteo'),
      head: [T('Infinitivo'), T('tú (España/.std. am.)'), T('vos (Argentina/Uruguay)')],
      rows: [
        ['{hablar}', '{hablas}', '{hablás}'],
        ['{tener}', '{tienes}', '{tenés}'],
        ['{poder}', '{puedes}', '{podés}'],
        ['{querer}', '{quieres}', '{querés}'],
        ['{ir}', '{vas}', '{vas}'],
      ],
    },
  ],
};

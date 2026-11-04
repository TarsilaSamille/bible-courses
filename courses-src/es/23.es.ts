import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Las preposiciones y la "a" personal'),
  subtitle: T('amo a Dios — ¡las personas llevan «a»!'),
  section: T('Las preposiciones'),
  body: C(`## La {a} personal

El objeto directo de **persona** lleva la preposición {a}, que no existe en portugués:

{amo a Dios} «amo a Dios» · {vio a Jesús} «vio a Jesús» · {no vi a nadie} «no vi a nadie» · {ama a su prójimo} «ama a su prójimo» (Mc 12.30) · {sirve a Dios} «sirve a Dios».

Pero las **cosas** no la llevan: {veo la cruz} «veo la cruz» · {compré un libro} · {tengo un amigo} (aquí {amigo} es sustantivo, no pronombre).

Dos motivos: las palabras que empiezan por consonante suenan mal tras {a}, y la distinción persona/cosa viene del latín.

**Excepción importante**: la {a} desaparece ante {el} — {ama al prójimo} «ama al prójimo».

## El repertorio

• {a} — a, para · {en} — en, dentro · {de} — de, procedencia
• {con} — con · {sin} — sin · {sobre} — sobre, acerca de
• {entre} — entre · {hacia} — hacia · {hasta} — hasta
• {desde} — desde (origen) · {tras} — tras (¡transparente!)
• {durante} — durante · {contra} — contra

## Contracciones

{a} + {el} = {al} · {de} + {el} = {del}. Nada más contrae.

{al tercer día} «al tercer día» (Gn 1.5) · {la palabra del Señor} «la palabra del Señor».

## Preposiciones de contenido teológico

• {en} con creer: {creo en Dios} «creo en Dios» (¡no {creo a Dios}!).
• {sin} en afirmaciones fuertes: {sin fe} «sin fe» (Hb 11.6: {es imposible} «es imposible»).
• {con} = compañía: {conmigo} · {con Dios} · {con Él}.
• {por} = agente: {enviado por Dios}.

Ej.: {¿Por qué me has abandonado?} «¿por qué me has abandonado?» (Mt 27.46) — {por} de causa; {A Dios le debo} «a Dios le debo» — {de} de procedencia.`),
  vocab: [
    V('a', 'a', 'a (¡personal!)'),
    V('al', 'al', 'al (= a + el)'),
    V('del', 'del', 'del (= de + el)'),
    V('en', 'en', 'en'),
    V('sin', 'sin', 'sin'),
    V('hasta', 'hasta', 'hasta'),
    V('desde', 'desde', 'desde'),
    V('a Dios', 'Dios', 'a Dios (¡persona: lleva a!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «amo a Dios»?'),
    options: [
      T('El objeto directo PERSONA lleva la «a» personal'),
      T('Porque es plural'),
      T('Porque es futuro'),
      T('Por casualidad'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa la preposición de la fe: «Creo ___ Dios»'),
      answer: 'en',
      hint: T('Regla §5: creer usa «en».'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es correcta?'),
      options: [T('Veo la cruz'), T('Veo a cruz'), T('Veo a la cruz'), T('Veo el cruz')],
      answer: 0,
      hint: T('Regla §1: las COSAS no llevan «a».'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la preposición con su valor'),
      pairs: [
        { a: T('{a}'), b: T('dirección / persona') },
        { a: T('{de}'), b: T('origen, posesión') },
        { a: T('{con}'), b: T('compañía') },
        { a: T('{sin}'), b: T('privación') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Los objetos directos de persona llevan a: amo a Dios, vi a Jesús, no vi a nadie.'),
    },
    { n: '2', text: T('Los objetos directos de cosa no llevan a: veo la cruz, tengo un libro.') },
    { n: '3', text: T('Ante «el», a + el = al; de + el = del. Ninguna otra contracción.') },
    { n: '4', text: T('Con pronombre indirecto (le, me, nos) desaparece la a: le dio, me dio.') },
    { n: '5', text: T('Creer usa «en» (creo en Dios); saber usa «de» (sé de aquí).') },
  ],
  notes: [
    {
      label: T('La {a} personal es obligatoria'),
      text: T(
        'Ante {lo}, {la}, {los}, {las} o {le}, el sustantivo recibe una {a} que antes no tenía: {a} + {el} → {al}. La forma se elide ante vocal: {amigo}, no {al amigo}.',
      ),
    },
  ],
  examples: [
    { text: '{amo a Dios}', gloss: T('Amo a Dios (¡persona → a personal!).') },
    { text: '{veo la cruz}', gloss: T('Veo la cruz (cosa → sin a).') },
    { text: '{al tercer día}', gloss: T('Al tercer día (a + el = al).') },
    { text: '{creo en Dios}', gloss: T('Creo en Dios (¡en de la fe!).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Preposiciones esenciales'),
      head: [T('Preposición'), T('Valor'), T('Ejemplo')],
      rows: [
        ['{a}', 'direção, pessoa', '{amo a Dios}'],
        ['{en}', 'lugar, crer', '{creo en Dios}'],
        ['{de}', 'origem, posse', '{la palabra del Señor}'],
        ['{con}', 'companhia', '{con Él}'],
        ['{sin}', 'privação', '{sin fe}'],
        ['{sobre}', 'sobre, tema', '{sobre la fe}'],
        ['{entre}', 'entre', '{entre nosotros}'],
        ['{hasta}', 'até', '{hasta el fin}'],
        ['{desde}', 'desde (origem)', '{desde el principio}'],
        ['{por}', 'causa, agente', '{por Dios}'],
        ['{para}', 'finalidade', '{para salvar}'],
      ],
    },
    {
      caption: T('Tabla 2 — La «a» personal: cuándo aparece'),
      head: [T('Caso'), T('Ejemplo'), T('¿Usa «a»?')],
      rows: [
        [T('persona'), '{amo a Dios}', T('sí')],
        [T('cosa'), '{veo la cruz}', T('no')],
        [T('persona + el'), '{ama al prójimo}', T('se convierte en al')],
        [T('pronombre «le» (indirecto)'), '{Le doy el libro}', T('no (¡sin «a»!)')],
        [T('verbo de movimiento'), '{Voy a la casa}', T('no (¡«a» = dirección!)')],
      ],
    },
  ],
};

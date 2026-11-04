import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('Los pronombres personales'),
  subtitle: T('yo, tú, él — me/te/lo, le/les'),
  section: T('Los pronombres'),
  body: C(`## Tres series, tres funciones

**Sujeto** (casi siempre dispensable, porque el verbo ya dice quién): {yo}, {tú}, {él/ella/usted}, {nosotros}, {vosotros}, {ellos/ustedes}.

**Objeto directo**: {me}, {te}, {lo/la}, {nos}, {os}, {los/las} — {Dios te ama} «Dios te ama» · {lo veo} «lo veo».

**Objeto indirecto** (dativo): {me}, {te}, {le}, {nos}, {os}, {les} — {le doy} «le doy» · {les hablo} «les hablo».

## {le} → {se}

Cuando el objeto indirecto {le} o {les} aparece **junto** a un objeto directo {lo/la/los/las}, se convierte en {se}: {se lo dio} «se lo dio» · {se las dio} «se las dio» · {se lo dijo} «se lo dijo».

Es la solución española para lo que el portugués resuelve colocando el pronombre delante del nombre.

## Dónde va el pronombre

• Antes del verbo conjugado: {te amo} «te amo» · {lo veo} «lo veo».
• Después del infinitivo, gerundio e imperativo **afirmativo**: {amarte} «amarte» · {hablándome} «hablándome» · {ámame} «ámame».
• Antes del verbo en el negativo y en el subjuntivo: {No me digas} «no me digas».

## {os} y la marca vocálica

Con el pronombre {os} (vosotros), los verbos de {-er} e {-ir} añaden una vocal delante: {decís} → {decíos} «decidme», {tenéis} → {teneos}, {oís} → {oídos} «oidme». Los de {-ar} no cambian: {hablad} + {os} = {hablad}.`),
  vocab: [
    V('yo', 'yo', 'yo'),
    V('tú', 'tú', 'tú'),
    V('lo', 'lo', 'lo (¡objeto!)'),
    V('le', 'le', 'le (¡indirecto!)'),
    V('les', 'les', 'les'),
    V('se lo', 'se', 'se lo (¡le → se!)'),
    V('ámame', 'amar', 'ámame (imperativo + me)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué «se lo dio» y no «le lo dio»?'),
    options: [
      T('Error'),
      T('¡«le/les» se convierte en «se» ante «lo/la»!'),
      T('Plural'),
      T('Pretérito'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Dios ___ ama» (Dios te ama)'),
      answer: 'te',
      hint: T('Objeto directo de 2.ª persona: te.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Dónde va el pronombre con el infinitivo?'),
      options: [T('{te amo}'), T('{amar te}'), T('{amarte}'), T('{amarme}')],
      answer: 2,
      hint: T('Regla §3: después del infinitivo, pegado.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con su función'),
      pairs: [
        { a: T('{yo}'), b: T('sujeto') },
        { a: T('{me}'), b: T('objeto directo') },
        { a: T('{le}'), b: T('objeto indirecto') },
        { a: T('{se}'), b: T('le/les ante lo/la') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El pronombre sujeto se omite cuando el verbo ya identifica al sujeto: Hablo, Habla Dios.',
      ),
    },
    { n: '2', text: T('El objeto indirecto usa le/les: le doy el libro, les hablo.') },
    { n: '3', text: T('le/les se convierte en se ante lo/la/los/las: se lo dio, se las dijo.') },
    {
      n: '4',
      text: T(
        'Los pronombres se pegan al infinitivo, gerundio e imperativo afirmativo; en el negativo van antes.',
      ),
    },
  ],
  notes: [
    {
      label: T('Él se restituye'),
      text: T(
        '{él} vuelve al final de la cláusula cuando se une a otro elemento: {Le doy el libro a él}. La posición final no es opcional: evita repetir el sustantivo.',
      ),
    },
  ],
  examples: [
    { text: '{Dios te ama}', gloss: T('Dios te ama (objeto directo te).') },
    { text: '{se lo dio}', gloss: T('Se lo dio (¡le → se!).') },
    { text: '{ámame}', gloss: T('ámame (imperativo + pronombre pegado).') },
    { text: '{no me lo digas}', gloss: T('no me lo digas (negativo: antes del verbo).') },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Las tres series'),
      head: [T('Persona'), T('Sujeto'), T('Objeto directo'), T('Objeto indirecto')],
      rows: [
        ['1ª', '{yo}', '{me}', '{me}'],
        ['2ª', '{tú}', '{te}', '{te}'],
        ['3ª', '{él/ella/usted}', '{lo/la}', '{le}'],
        ['1ª pl.', '{nosotros}', '{nos}', '{nos}'],
        ['2ª pl.', '{vosotros}', '{os}', '{os}'],
        ['3ª pl.', '{ellos/ustedes}', '{los/las}', '{les}'],
      ],
    },
    {
      caption: T('Tabla 2 — Posición del pronombre'),
      head: [T('Contexto'), T('Posición'), T('Ejemplo')],
      rows: [
        [T('verbo conjugado'), 'antes', '{te amo}'],
        [T('infinitivo'), 'depois, colado', '{amarte}'],
        [T('gerundio'), 'depois, colado', '{diciéndoselo}'],
        [T('imperativo afirmativo'), 'depois, colado', '{ámame}'],
        [T('negativo / subjuntivo'), 'antes', '{no me lo digas}'],
      ],
    },
  ],
};

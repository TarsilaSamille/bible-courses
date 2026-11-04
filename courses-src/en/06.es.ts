import { C, T, V } from '../shared.mts';

export default {
  id: 6,
  title: T('Modales y voz pasiva'),
  subtitle: T('must, may, shall — was made'),
  section: T('El verbo'),
  body: C(`## Los modales tienen una sola forma

Los modales {can/could}, {may/might}, {must}, {shall/should}, {will/would} y {ought} no cambian según la persona. Van seguidos de infinitivo sin to: {can pray}, {must obey}, {may come}. En pasado o contexto irreal cambia el auxiliar: {could go}, {should have helped}, {might come}.

Sus valores no son intercambiables. {Can} expresa capacidad o posibilidad; {may}, permiso formal o posibilidad incierta; {must}, obligación fuerte; {shall} aparece en promesas formales, instrucciones y fórmulas bíblicas. En el inglés contemporáneo, {will} suele expresar voluntad o predicción.

## Voz pasiva

La pasiva emplea {be} en todos los tiempos + participio: {is written}, {was healed}, {will be saved}. El agente puede aparecer con {by}; si importa más el paciente o el suceso, {by} puede omitirse: {The prisoner was released}.

{Was made flesh} es a la vez pasiva y una afirmación teológica autorizada. En Juan 1:14, {was made} destaca la encarnación mientras el agente divino puede quedar sin nombrar. La pasiva no significa “no hay agente”: cambia el orden de la información.`),
  vocab: [
    V('can', 'can', 'poder'),
    V('may', 'may', 'poder/permitir'),
    V('must', 'must', 'deber'),
    V('shall', 'shall', 'deberá/debe'),
    V('should', 'should', 'debería/consejo'),
    V('was made', 'make', 'fue hecho'),
    V('is written', 'write', 'está escrito'),
    V('will be saved', 'save', 'será salvado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué construcción es “was made flesh”?'),
    options: [T('activa'), T('pasiva: be + participio'), T('reflexiva'), T('condicional')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa: “She ___ pray” (ella puede orar).'), answer: 'can' },
    {
      kind: 'match',
      prompt: T('Relaciona modal y valor.'),
      pairs: [
        { a: 'must', b: T('obligación') },
        { a: 'may', b: T('permiso') },
        { a: 'should', b: T('consejo') },
      ],
      answer: ['0-0', '1-1', '2-2'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase es correcta?'),
      options: [T('He must to go'), T('He must go'), T('He must went'), T('He must going')],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('Nunca uses to después de un modal: He can help, no He can to help.') },
    {
      n: '2',
      text: T(
        'Modal base + have + participio sitúa una acción pasada en el tiempo modal: She should have called.',
      ),
    },
    { n: '3', text: T('El auxiliar pasivo es be: is made, was made, will be made; no has made.') },
  ],
  notes: [
    {
      label: T('Registro:'),
      text: T(
        'Hoy shall tiene tono formal o bíblico. {Will} es normal en promesas cotidianas, mientras que {should} suele recomendar.',
      ),
    },
  ],
  examples: [
    { text: '{Thou shalt not kill}', gloss: T('No matarás — arcaico/mandamiento') },
    { text: '{The Word was made flesh}', gloss: T('La Palabra fue hecha carne — pasiva') },
    { text: '{It shall be done}', gloss: T('Será hecho — shall + pasiva') },
  ],
  tables: [
    {
      caption: T('Valores modales'),
      head: [T('Modal'), T('Valor típico'), T('Ejemplo')],
      rows: [
        ['{can}', T('capacidad'), '{I can read}'],
        ['{may}', T('permiso'), '{You may enter}'],
        ['{must}', T('obligación'), '{We must love}'],
        ['{should}', T('consejo/deber'), '{You should pray}'],
      ],
    },
  ],
};

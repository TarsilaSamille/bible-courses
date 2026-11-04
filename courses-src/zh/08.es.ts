import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  section: T('Sintaxis'),
  title: T('El orden SVO, que no es el nuestro'),
  subtitle: T('El mandarín pone el verbo en medio, y el contexto sostiene la frase'),
  body: C(`## El verbo va en medio

El portugués dice "yo como una manzana": **sujeto, verbo, objeto**. El mandarín dice {wǒ chī píngguǒ}, lo mismo con {chī} en medio. Parece idéntico, y la diferencia aparece en lo que viene después. El portugués puede adelantar el objeto, "ayer me lo comí"; en mandarín el objeto se queda tras el verbo, y también el adverbio: {wǒ zuótiān chī le tā}.

El orden es siempre sujeto, verbo, objeto, y nunca se invierte. Por eso no se puede adelantar una frase como el portugués permite.

## El objeto indirecto va primero

Con dos complementos, el indirecto va primero: {wǒ gěi tā yī běn shū} es "le doy un libro". {gěi} marca "dar" y {tā} es el objeto indirecto. El portugués sería "le doy un libro a él"; el orden de los complementos es el contrario, y quien traduzca por la sintaxis portuguesa lo invierte todo.

## Sin sujeto, la frase es un enigma

Con el verbo en medio y el sujeto omitido, un grupo aislado como {chī le} no significa nada: ¿quién comió? El contexto es obligatorio. Por eso la lectura bíblica en chino se hace por capítulos y no por versículos, y por eso los Salmos, tan llenos de sintagmas nominales, son más difíciles que la prosa de los Evangelios.`),
  vocab: [
    V('chī', '吃', 'comer (chī)'),
    V('gěi', '给', 'dar (gěi)'),
    V('本', '本', 'libro; clasificador (běn)'),
    V('昨天', '昨天', 'ayer (zuótiān)'),
  ],
  rules: [
    { n: '1', text: T('El orden es siempre sujeto — verbo — objeto, nunca se invierte.') },
    { n: '2', text: T('Con dos complementos, el indirecto va primero: {wǒ gěi tā yī běn shū}.') },
    { n: '3', text: T('Sin sujeto explícito, el contexto debe decir quién actúa.') },
  ],
  notes: [
    {
      label: T('Lea por capítulos, no por versículos'),
      text: T(
        'En una lengua donde el sujeto se omite y el verbo no cierra la frase, el versículo aislado pierde lo que lo hace legible. El capítulo es la unidad de sentido.',
      ),
    },
  ],
  examples: [
    { text: '我吃苹果', gloss: T('wǒ chī píngguǒ — yo como una manzana') },
    { text: '我昨天吃了它', gloss: T('wǒ zuótiān chī le tā — yo lo comí ayer') },
    { text: '我给他一本书', gloss: T('wǒ gěi tā yī běn shū — le doy un libro') },
  ],
  tables: [
    {
      caption: T('Los mismos dos complementos en órdenes opuestas'),
      head: [T('Lengua'), T('Orden de los complementos'), T('Ejemplo')],
      rows: [
        [T('portugués'), T('objeto antes del indirecto'), T('doy un libro a él')],
        [T('chino'), T('indirecto antes del objeto'), T('{wǒ gěi tā yī běn shū}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {我给他一本书}, ¿cuál es el verbo?'),
    options: [T('{我}'), T('{给}'), T('{他}'), T('{本}')],
    answer: 1,
  },
  exercises: [
    { kind: 'fill', prompt: T('Completa "yo como" con el verbo: 我____ (comer)'), answer: '吃' },
    {
      kind: 'match',
      prompt: T('Une la palabra con su función en la frase'),
      pairs: [
        { a: T('{我}'), b: T('sujeto') },
        { a: T('{吃}'), b: T('verbo') },
        { a: T('{昨天}'), b: T('adverbio de tiempo') },
        { a: T('{本}'), b: T('clasificador') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};

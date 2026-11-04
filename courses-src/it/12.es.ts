import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Pronombres combinados, ci y ne'),
  subtitle: T('me lo, te ne, ce lo'),
  section: T('Los pronombres y la pasiva'),
  body: C(`## El orden de los pronombres es fijo

Cuando el pronombre indirecto ({mi}, {ti}, {si}, {ci}, {vi}) y el directo ({lo}, {la}, {li}, {le}) aparecen juntos, el italiano los **colapsa en una sola forma**, en un orden que no se negocia: {me lo}, {te ne}, {ce lo}, {glielo}. El objeto va siempre en medio, como en {me lo dai}.

La regla del {ci} es **la única configuración**: ante {lo}, {la}, {li} o {le}, {ci} se vuelve {ce}, porque {ce} más {lo} suena mejor que {ci} más {lo}. De {ce lo diamo} («se lo damos») sale {dammelo}, y el grupo puede pegarse al verbo: {diccelo}, {eccolo}.

## {Ci}, {ce} y {vi}: tres que se confunden

{ci} es lugar: {Qui ci trova?}, «¿quién está aquí?»; {Vivo qui}, donde {ci} se pega a {qui} y casi sobra. {ci} también puede indicar persona, la costumbre italiana de usar {ci} por «nosotros»: {Dio ci ama}, «Dios nos ama». Y con verbos como {dare}, {ci} es el {a} a nosotros: {Dammi il pane}.

{vi} es {voi} como objeto, {vi do}, «a ti te doy». Y {si} es la forma reflexiva de tercera persona: {loro parla di sé}, «habla de sí».

## {Ne}: el sustituto de {di}

{ne} sustituye un complemento introducido por {di}, y la preposición desaparece: {parla di Gesù} se vuelve {ne parla}. {Ho visto un libro} se vuelve {ne ho visto uno}. El {ne} va antes del verbo, como clítico, y lo que sustituye puede ser persona, lugar o cantidad: {Vieni da Italia? — Sì, ne vengo}.

Traducir {ne} por «de él» está mal la mitad de las veces. {Ne ho visto due} no es «vi dos de ellos» ni «tengo dos años»: es «vi dos, de los que vi».

## {Dio} {ce} {lo} {dona}

En {Dio ce lo dona}, el {ce} indica a nosotros, el {lo} identifica lo que se da, y {donare} es el verbo. Es **la construcción más corta del italiano y la más informativa**: pronombre, persona, cosa y acción en una expresión de cinco palabras. Quien traduce literalmente «Dio ce lo dona» pierde el punto; en italiano natural es {Dio ce lo dona}, «Dios nos da esto».

## Criterio de lectura

Cada vez que veas dos pronombres pegados, des hazlos en orden: quién recibe ({mi}, {ci}, {vi}), qué recibe ({lo}, {la}, {li}, {le}), y el {ne}. Y si la frase tiene {ne} sin {di} visible, busca el {di} que sustituyó: está en la oración anterior, o está implícito.`),
  vocab: [
    V('me lo', 'me', 'melo'),
    V('ce lo', 'ci', 'noselo'),
    V('te ne', 'te', 'te eso'),
    V('pensaci', 'pensare', '¡piensa en eso!'),
    V('glielo', 'gli', 'selo'),
    V('melo', 'me', 'melo'),
    V('ci', 'ci', 'nos / ahí'),
    V('vi', 'vi', 'a vosotros'),
    V('ne', 'ne', 'de ello/de ellos'),
    V('si', 'si', 'se (reflexivo)'),
    V('donare', 'donare', 'dar'),
    V('vendere', 'vendere', 'vender'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Por qué se usa ce lo y no ci lo?'),
    options: [
      T('ci se vuelve ce ante lo, la, li o le'),
      T('Son palabras distintas'),
      T('Es un error de escritura'),
      T('Porque ci es plural'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Transforma: ci + lo → ___'),
      answer: 'ce lo',
      hint: T('Ci cambia de forma ante lo.'),
    },
    {
      kind: 'fill',
      prompt: T('Transforma: parla di me → ___ parla'),
      answer: 'ne',
      hint: T('Ne sustituye a di me.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué significa ne ho due?'),
      options: [
        T('Tengo dos años'),
        T('Tengo dos de ellos'),
        T('Le doy dos'),
        T('Estoy en dos lugares'),
      ],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T('El orden es indirecto, directo, {ne}: {me lo}, {te ne}, {ce lo}, {glielo}.'),
    },
    {
      n: '2',
      text: T('{Ci} se vuelve {ce} ante {lo}, {la}, {li} o {le}: {ce lo diamo}, nunca {ci lo}.'),
    },
    {
      n: '3',
      text: T(
        '{Vi} es {voi} como objeto, {vi do}, y {si} es el reflexivo de tercera persona, {loro parla di sé}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{Ne} sustituye una expresión con {di}, y {di} desaparece: {parla di Gesù} → {ne parla}.',
      ),
    },
    {
      n: '5',
      text: T(
        'En el imperativo afirmativo el grupo se pega al verbo: {dammelo}, {diccelo}, {eccolo}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Ne} y {ci} en el mismo sitio'),
      text: T(
        '{ne} y {ci} ocupan la misma posición: donde entra uno, entra el otro. Es regla de reposición y no de sentido, y por eso {me ne} y {me ci} conviven en el italiano hablado.',
      ),
    },
    {
      label: T('Cinco palabras, tres datos'),
      text: T(
        '{Dio ce lo dona} es la construcción más corta del italiano y la más informativa: el pronombre {ce} dice a quién, el {lo} dice qué, y el verbo dice la acción. El español necesita una frase entera para decir las tres cosas.',
      ),
    },
  ],
  examples: [
    { text: 'Dammi il libro.', gloss: T('Dame el libro.') },
    { text: 'Me lo dai?', gloss: T('¿Me lo das?') },
    { text: 'Dio ce lo dona.', gloss: T('Dios nos da esto.') },
    { text: 'Ne parla bene.', gloss: T('Habla bien de ello.') },
    { text: 'Ne ho visto due.', gloss: T('He visto dos.') },
    { text: 'Pensaci.', gloss: T('¡Piensa en eso!') },
    { text: 'C’era un uomo.', gloss: T('Había un hombre.') },
    { text: 'Parlane con lui.', gloss: T('Háblale de ello.') },
  ],
  tables: [
    {
      caption: T('Ordem dos pronomes'),
      head: ['Indiretto', 'Diretto', 'Particella'],
      rows: [
        ['mi, ti, si, ci, vi', 'lo, la, li, le', 'ne'],
        ['me lo', 'ce lo', 'te ne'],
        ['glielo', 'melo', 'dillo'],
      ],
    },
    {
      caption: T('Ce, ci, vi, ne, si'),
      head: ['Pronome', 'Esempio', 'Glossa'],
      rows: [
        ['ci', 'Dio ci ama', 'noi'],
        ['ce', 'Dio ce lo dona', 'noi + lo'],
        ['vi', 'vi do', 'voi'],
        ['ne', 'ne parla', 'di qualcosa'],
        ['si', 'si lava', 'riflessivo'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('Prefijos per- y ke-; sufijo -an'),
  subtitle: T('pergi, kehendak, makanan'),
  section: T('El nombre'),
  body: C(`Estos tres patrones amplían nombres y verbos, pero sus valores no son intercambiables.

per- + verbo, a menudo con -kan, expresa separación o conclusión de un proceso: {pergi} «ir», {perjalan} «viajar», {berpisah} «separarse». {per-…-kan} puede expresar una acción prolongada y también causación: {menjalankan} «hacer correr»; {memperlihatkan} «hacer ver»; {mempersembahkan} «ofrecer/presentar». El elemento {kan} no significa PASADO.

ke- + sustantivo + -an indica resultado, dominio, totalidad o colección: {ke- + behem → keberadaan}, {ke- + hendak + -an → kehendak}, {ke- + raja + -an → kerajaan}. La secuencia {ea} refleja un proceso histórico y no una regla aplicable a todo ke-an.

Históricamente, {kebenaran} puede analizarse como {ke- + benar + -an}, pero significa «verdad, justicia, fidelidad» según el contexto. {Kerajaan} significa «reino» y funciona metafóricamente en {Kerajaan Allah} «Reino de Dios».

El -an nominal forma herramienta, producto, acción/instancia o dominio: {-an + makan → makanan} «comida» (literalmente «aquello que se come»); {-an + tulis → tulisan} «escrito»; {-an + baca → bacaan} «lectura». No toda forma en -an contiene ke-.`),
  vocab: [
    V('pergi', 'pergi', 'ir, marcharse'),
    V('perjalanan', 'jalan', 'viaje'),
    V('berpisah', 'pisah', 'separarse'),
    V('menjalankan', 'jalan', 'hacer correr; ejecutar'),
    V('memperlihatkan', 'lihat', 'mostrar'),
    V('mempersembahkan', 'sembah', 'ofrecer, presentar'),
    V('kehendak', 'hendak', 'voluntad, deseo'),
    V('kerajaan', 'raja', 'reino'),
    V('kebenaran', 'benar', 'verdad, justicia, fidelidad'),
    V('makanan', 'makan', 'comida'),
    V('minuman', 'minum', 'bebida'),
    V('tulisan', 'tulis', 'escrito, escritura'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el mejor análisis de {kerajaan}?'),
    options: [
      T('ke- + raja + -an, «reino»'),
      T('ke- = pasado + -an = plural'),
      T('ke- = negación + -an = objeto'),
      T('ke- = lugar + -an = futuro'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: «Allah ___ kami» = «Dios nos alcanza» .'),
      answer: 'mencapai',
      hint: T('Verbo: meN- + capai.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es un sustantivo abstracto con -an?'),
      options: [T('kebenaran'), T('buku'), T('kamu'), T('saya')],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        '{Ke-} suele cambiar la vocal de la raíz: {raja} → {kerajaan}, {hendak} → {kehendak}.',
      ),
    },
    {
      n: '2',
      text: T(
        'La combinación de {per-}, {ke-} y {-an} no es totalmente libre. Las formas establecidas no se derivan solo por reglas mecánicas.',
      ),
    },
    {
      n: '3',
      text: T(
        'En {mempersembahkan}, {per-} destaca la realización de la acción y {-kan} destaca el objeto o resultado; no traduzcas literalmente el paquete de afijos.',
      ),
    },
  ],
  notes: [
    {
      label: T('Etimología'),
      text: T(
        '{Ke-} es el mismo prefijo de {kedua} «dos» y {kepada} «a/para»; {-an} también aparece sin ke-.',
      ),
    },
  ],
  examples: [
    { text: 'Yesus pergi ke bukit.', gloss: T('Jesús fue al monte.') },
    { text: 'Jadilah kehendak-Mu.', gloss: T('Hágase tu voluntad.') },
    { text: 'Matius menerima makanan.', gloss: T('Mateo recibe comida.') },
  ],
  tables: [
    {
      caption: T('Patrones y valores'),
      head: ['Padrão', 'Valor', 'ES'],
      rows: [
        ['per- + V', T('ir, separarse, completar'), '{pergi} «irse»'],
        ['per-…-kan', T('hacer/realizar plenamente'), '{menjalankan} «hacer correr»'],
        ['ke-…-an', T('resultado, dominio, colección'), '{kerajaan} «reino»'],
        ['-an', T('producto, instrumento, actividad'), '{makanan} «comida»'],
      ],
    },
  ],
};

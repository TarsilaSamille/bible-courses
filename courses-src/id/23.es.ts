import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  section: T('Verbo'),
  title: T('Causativo y benefactivo'),
  subtitle: T('mengirimi, membelikan: el -kan que vuelve indirecto al verbo'),
  body: C(`## -kan no es una sola cosa

Quien aprende el {-kan} como «hacer» aprende la parte más pequeña. El sufijo aparece en cuatro familias, y se distinguen por el segundo objeto que el verbo gana.

{1} Causativo o factitivo. El sujeto hace que el verbo ocurra. {menuliskan} «mandar escribir», {membesarkan} «criar», {memperpanjang} «prolongar», {mendengarkan} «hacer oír». El segundo objeto es lo afectado, y la acción viene de fuera.

{2} Benefactivo. El sujeto hace el verbo **para** alguien. {membelikan} «comprar para alguien», {mengirimi} «enviar una carta a alguien», {membayarkan} «pagar por alguien», {memasukkan} «guardar algo dentro». El segundo objeto es el beneficiario, y es el mismo beneficiario que el portugués marca con «para».

{3} Aplicativo. El segundo objeto es la superficie a la que se aplica la acción. {memasukkan} «poner dentro», {menanamkan} «plantar en», {mencangkokkan} «injertar en». El receptor es un lugar.

{4} Factitivo con agente. El sujeto hace que otro sujeto lo haga. El ejemplo legítimo es {menyuruh} «mandar que», que trae la acción pedida y no un agente.

La distinción que le importa al lector es la segunda, porque es la que el griego del Nuevo Testamento usa más y la que el portugués resuelve con una preposición. Un participio griego como «escrito para» o «enviado a» es un {-kan} en indonesio, y quien busca «para» en el verbo lo busca en el sitio equivocado.

## La preposición que se volvió sufijo

En portugués el benefactivo es una preposición: «comprar **para** alguien», «enviar **a** alguien». En indonesio la misma información puede estar en tres sitios, y conocer los tres ahorra errores

{1} En el sufijo. {membelikan} ya dice «comprar para alguien», y el beneficiario llega como segundo objeto: {membelikan buku untuk ibu} «comprar un libro para la madre».

{2} En la preposición. El verbo no lleva sufijo y el receptor va marcado: {membawa oleh ubur}, {mengirimi surat kepada ayah} «enviar una carta al padre». Con nombre propio el {kepada} se fusiona: {mengirimi Ami}.

{3} En el clítico. Con pronombre el receptor se vuelve clítico y la preposición desaparece: {mengirim surat kepadamu} «enviar una carta a ti», {meminum obat untuknya} «tomar el medicamento por él».

Lo que engaña es que el {-kan} y el {untuk} pueden aparecer juntos, y no está mal: {membelikan buku untuk ibunya} «comprar un libro para su madre». El {-kan} vuelve indirecto al verbo y el {untuk} dice quién se beneficia. Son dos datos distintos, aunque el mismo nombre aparezca en los dos huecos.

Y hay un caso en que el {-kan} hace el trabajo del {untuk} solo: {mengirimi} sin nada más ya significa «enviar una carta a alguien», con el destinatario obligatoriamente dentro del verbo. Es el mismo mecanismo que {menuliskan}, y es lo que produce la lectura más difícil: un verbo con dos objetos en el que el segundo no aparece.

## Cuándo no hay -kan

Los verbos de ayudar, enseñar y servir **no** llevan {-kan}, y el destinatario va siempre marcado: {membantu} «ayudar», {menolong} «socorrer», {mengajar} «enseñar», {melayani} «servir», {mendoah} «rogar por».

{membantu ibunya} «ayuda a su madre», {melayani tamu} «sirve al huésped», {mendoah untuk negara} «roga por la patria». La preposición es obligatoria aquí, y quien añade {-kan} produce {membantukan ibunya}, que es un verbo distinto y mucho más raro.

La regla práctica para el lector es una pregunta: **pregunta quién se beneficia.** Si el beneficiario es el destinatario natural de la acción y el verbo significa algo como hacer algo por alguien, el {-kan} es probable. Si el verbo ya es sobre ayudar y el {-kan} suena raro, es porque no es benefactivo.

Y hay {-kan} lexicalizados que no significan nada de eso: {mengatakan} «decir», {meletakkan} «poner», {meminum} «beber». Son {-kan} que perdieron el segundo objeto y se quedaron con el sentido de la base. Una lista de ellos sirve más que una regla, porque son pocos.

## Berilah dengan gratis

{Mateo 10:8} tiene el ejemplo más limpio de benefactivo en el Nuevo Testamento: el texto pide al que envía que {Berilah dengan gratis, dan terimalah juga dengan gratis}. El {dengan gratis} es un adverbio de modo, y el verbo {beri} no lleva {-kan} porque «dar» ya es transitivo.

Quien traduce por «dad gratuitamente» acierta el sentido y falla la lectura: el versículo va sobre un verbo que da a alguien, y quien escribe {memberikan dengan gratis} introduce un {-kan} que vuelve indirecto al verbo y sugiere que el dar lo hace otro. El griego original tiene un solo verbo para dar; el indonesio tiene dos, y el contexto elige el más simple.

La frase siguiente, sobre recibir, muestra el otro lado: {terima} tampoco lleva {-kan}, porque «recibir» ya es un verbo con destinatario. Y el paralelismo que el griego hace con un solo verbo repetido, el indonesio lo hace con dos verbos que riman y una preposición común, y el lector tiene que notar que la preposición es la misma en los dos casos.`),
  vocab: [
    V('beri', 'beri', 'dar'),
    V('terima', 'terima', 'recibir'),
    V('beli', 'beli', 'comprar'),
    V('membelikan', 'beli', 'comprar para alguien'),
    V('kirim', 'kirim', 'enviar'),
    V('mengirim', 'kirim', 'enviar'),
    V('mengirimkan', 'kirim', 'enviar en nombre de'),
    V('iri', 'iri', 'carta, mensaje'),
    V('mengirimi', 'iri', 'enviar carta a alguien'),
    V('bayar', 'bayar', 'pagar'),
    V('membayarkan', 'bayar', 'pagar por alguien'),
    V('masuk', 'masuk', 'entrar'),
    V('memasukkan', 'masuk', 'poner dentro'),
    V('bantu', 'bantu', 'ayudar'),
    V('membantu', 'bantu', 'ayudar'),
    V('melayani', 'layani', 'servir'),
    V('dengar', 'dengar', 'oír'),
    V('mendengarkan', 'dengar', 'escuchar'),
    V('untuk', 'untuk', 'para'),
    V('kepada', 'kepada', 'a'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Con {-kan} el verbo queda indirecto: {membelikan} «comprar para alguien», {mengirimi} «enviar carta a alguien».',
      ),
    },
    {
      n: '2',
      text: T(
        'El beneficiario puede ir en el segundo objeto ({untuk + nombre}), en la preposición ({kepada + nombre}) o en el clítico ({kepadamu}).',
      ),
    },
    {
      n: '3',
      text: T(
        '{mengirimi} sin objeto visible ya significa «enviar carta a alguien»: el destinatario está dentro del verbo.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los verbos de ayudar, enseñar y servir no llevan {-kan}: {membantu ibunya}, {melayani tamu}, {mendoah untuk negara}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Algunos {-kan} son lexicalizados y no señalan nada de indirecto: {mengatakan} «decir», {meletakkan} «poner».',
      ),
    },
  ],
  notes: [
    {
      label: T('El segundo objeto obligatorio'),
      text: T(
        'En {mengirimi} y {menuliskan} el segundo objeto es obligatorio, pero puede quedar implícito cuando el contexto ya lo ha fijado. Por eso una misma raíz parece transitiva en un punto e indirecta en otro: {mengirim surat} y {mengirimi surat}.',
      ),
    },
    {
      label: T('Por qué -kan y -i conviven'),
      text: T(
        'Los dos sufijos vuelven indirecto al verbo, y la elección sigue lo que se añade: {-kan} introduce una acción hecha a alguien, {-i} introduce el recipiente o la superficie. {menuliskan} recibe, {menutupi} cubre.',
      ),
    },
  ],
  examples: [
    { text: 'Dia membelikan buku untuk ibunya.', gloss: T('Él compró un libro para su madre.') },
    { text: 'Dia mengirimi surat kepada ayah.', gloss: T('Él envió una carta a su padre.') },
    { text: 'Dia mengirimi Ami surat.', gloss: T('Él le envió una carta a Ami.') },
    { text: 'Dia meminjamkan bukunya kepada adi.', gloss: T('Él prestó su libro a su hermano.') },
    { text: 'Dia membayar ongkos bus.', gloss: T('Él pagó el pasaje de autobús.') },
    { text: 'Dia membantu ibunya.', gloss: T('Él ayuda a su madre.') },
    { text: 'Dia mendengarkan lagu itu.', gloss: T('Él escucha esa canción.') },
    {
      text: 'Surat itu dimasukkan ke dalam kotak.',
      gloss: T('La carta se puso dentro de la caja.'),
    },
    { text: 'Dia mengatakan yang sebenarnya.', gloss: T('Él dijo la verdad.') },
    { text: 'Dia meletakkan buku di meja.', gloss: T('Él puso el libro sobre la mesa.') },
  ],
  tables: [
    {
      caption: T('As quatro famílias do -kan'),
      head: ['Família', 'Segundo objeto', 'Exemplo', 'Leia como'],
      rows: [
        ['causativo', 'o que é afetado', 'membesarkan anak', 'criar uma criança'],
        ['causativo', 'o que é afetado', 'memperpanjang jalan', 'prolongar a rua'],
        ['benefactive', 'quem se beneficia', 'membelikan buku', 'comprar um livro'],
        ['benefactive', 'quem recebe', 'mengirimi surat', 'enviar uma carta'],
        ['aplicativo', 'o lugar', 'memasukkan surat', 'pôr dentro uma carta'],
        ['lexicalizado', 'nenhum', 'mengatakan rahasia', 'dizer um segredo'],
      ],
    },
    {
      caption: T('Onde o destinatário pode aparecer'),
      head: ['Via', 'Padrão', 'Exemplo', 'Leia como'],
      rows: [
        [
          'segundo objeto',
          'V-kan + untuk + nome',
          'membelikan buku untuk ibu',
          'comprar um livro para a mãe',
        ],
        [
          'preposição',
          'mengirimi + kepada + nome',
          'mengirimi surat kepada ayah',
          'enviar uma carta ao pai',
        ],
        ['clítico', 'mengirim + clítico', 'kepadamu', 'para ti'],
        ['interno ao verbo', 'mengirimi', 'mengirimi Ami', 'enviar uma carta à Ami'],
        ['verbo sem -kan', 'membantu + untuk', 'membantu ibunya', 'ajudar a mãe'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué añade {mengirimi} a {mengirim}?'),
    options: [
      T('un destinatario: «enviar carta a alguien»'),
      T('el pasado'),
      T('el plural'),
      T('el pasivo'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa: comprar para la madre = Ix ___ buku untuk ibu.'),
      answer: 'membelikan',
      hint: T('La base {beli} más el sufijo indirecto.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál oración es correcta?'),
      options: [
        T('Dia mengirimi surat kepada ayah.'),
        T('Dia mengirimi surat ke ayah.'),
        T('Dia kirimkan surat kepada.'),
        T('Dia mengirims surat kepada ayah.'),
      ],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Une el verbo con su tipo'),
      pairs: [
        { a: T('{membelikan}'), b: T('benefactivo') },
        { a: T('{memasukkan}'), b: T('aplicativo') },
        { a: T('{membantu}'), b: T('sin -kan') },
        { a: T('{mengatakan}'), b: T('lexicalizado') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
};

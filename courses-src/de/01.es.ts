import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('Alfabeto y pronunciación'),
  subtitle: T('A–Z, ä, ö, ü y ß'),
  section: T('Fundamentos'),
  body: C(`El alemán tiene 26 letras básicas, a las que se añaden los tres sonidos con diéresis (ä, ö, ü) y la eszett (ß), que cuenta como letra propia. El sistema es transparente, pero la grafía no siempre revela la longitud de la vocal.

Los sonidos más delicados son los grupos consonánticos. sch vale siempre /ʃ/ (Schule). ch suena /ç/ después de ä, ö, ü y a veces después de ie, y suena /x/ en los demás casos (Buch, Milch). No existe ningún contexto en el que sch valga /ʃ/ + x.

La letra r tiene tres pronunciaciones: al inicio de la palabra o ante vocal, /ʁ/ (rotina); al final de sílaba o ante consonante, /ɐ/ (Vater); doble, /ʁ/ (Herr). La w suena /v/ (Wasser) y la v suena /f/ en palabras nativas (Vater), pero /v/ en las palabras préstamo (Vase). Una s inicial de sílaba suena /z/ (Sonne, Psalm) y la z vale siempre /ts/.

Por último, la desconsonantización final: una consonante final deja de sonorizarse, aunque conserve la grafía. Tag suena [taːk], Hund suena [hʊnt] y Kind suena [kɪnt].`),
  vocab: [
    V('A', 'A', 'a (vocal abierta, /a/)'),
    V('E', 'E', 'e (vocal cerrada, /eː/)'),
    V('I', 'I', 'i (vocal, /ɪ/)'),
    V('O', 'O', 'o (vocal, /ɔ/)'),
    V('U', 'U', 'u (vocal, /ʊ/)'),
    V('Ä', 'A', 'diéresis, /ɛː/ (Mädchen)'),
    V('Ö', 'O', 'diéresis, /øː/ (schön)'),
    V('Ü', 'U', 'diéresis, /yː/ (Bücher)'),
    V('ß', 'ß', 'eszett, /s/ (Straße)'),
    V('ch', 'ch', 'ch suave tras ä, ö, ü e ie'),
    V('sch', 'sch', 'sh, /ʃ/ (Schule)'),
    V('r', 'r', 'tres sonidos: rotárico, vocálico y doble'),
    V('w', 'w', '/v/ (Wasser)'),
    V('z', 'z', '/ts/ (Zeit) y inicial (Zahl)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Qué sonido tiene ch en Bücher?'),
    options: [T('/x/'), T('/ç/'), T('/k/'), T('/ʃ/')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe con eszett: groß, ella → ___'),
      answer: 'große',
      hint: T('La vocal o es larga, así que lleva ß.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la letra con el sonido.'),
      pairs: [
        { a: T('w'), b: T('/v/ (Wasser)') },
        { a: T('sch'), b: T('/ʃ/ (Schule)') },
        { a: T('s inicial de sílaba'), b: T('/z/ (Sonne)') },
      ],
      answer: ['a', 'a', 'a'],
    },
    {
      kind: 'choose',
      prompt: T('¿Qué palabra tiene la vocal u larga?'),
      options: [T('Hund'), T('Tut'), T('Mutter'), T('Buch')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Completa la palabra: Mädch___ (niña)'),
      answer: 'en',
      hint: T('Seis letras, la última es n.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Las vocales largas y cortas no se distinguen por la grafía: solo el oído y el contexto revelan el valor.',
      ),
    },
    {
      n: '2',
      text: T(
        'La longitud se marca con h tras la vocal (Tee) o con la repetición de la vocal (See); la ß indica que la vocal precedente es larga.',
      ),
    },
    {
      n: '3',
      text: T(
        'La vocal inicial de la palabra forma sílaba abierta y es larga: Arbeit, Bruder, Erde.',
      ),
    },
    {
      n: '4',
      text: T(
        'Ante r, l, m, n, w la semivocal u o ü es obligatoria: führen, Löwe, du, neu. Tras r solo w exige vocal: Bräutigam.',
      ),
    },
  ],
  notes: [
    {
      label: T('Eszett frente a ss'),
      text: T(
        'La ß aparece tras vocal larga o diptongo: Straße, Fuß, heißt, groß. La ss aparece tras vocal corta: Wasser, Klasse, lassen. Con tres consonantes, la ß pasa a ss: Weiß → weiße, fließen → fließt.',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En 1 Juan 1:1, Im Anfang war das Wort. La aliteración en W muestra que el texto empieza por una vocal abierta y larga, justo lo que el alfabeto ya permite reconocer.',
      ),
    },
  ],
  examples: [
    { text: 'Wasser /ˈvasɐ/', gloss: T('agua (a corto; ss tras vocal corta)') },
    { text: 'Vater /ˈfaːtɐ/', gloss: T('padre (a largo; la r final suena /ɐ/)') },
    { text: 'Arbeit /ˈarbaɪt/', gloss: T('trabajo (a inicial abierto y largo; ei = /aɪ/)') },
    { text: 'Bücher /ˈbyːçɐ/', gloss: T('libros (ü largo; ch suena /ç/)') },
    { text: 'Groß /ɡʁoːs/', gloss: T('grande (o largo; la ß marca la vocal larga)') },
    { text: 'Kirche /ˈkɪʁçə/', gloss: T('iglesia (ch tras i suena /ç/; la r inicial suena /ʁ/)') },
  ],
  tables: [
    {
      caption: T('Vocales largas y cortas'),
      head: ['Vogal', 'Longa', 'Curta'],
      rows: [
        ['a', 'Tee /teː/', 'Wasser /ˈvasɐ/'],
        ['e', 'See /zeː/', 'Bett /bɛt/'],
        ['i', 'vier /fiːɐ̯/', 'Bild /bɪlt/'],
        ['o', 'Boot /boːt/', 'Sonne /zɔnə/'],
        ['u', 'Tut /tuːt/', 'Hund /hʊnt/'],
        ['ä', 'Mädchen /mɛːtçən/', 'Bär /bɛːɐ̯/'],
        ['ö', 'schön /ʃøːn/', 'Höhle /høːlə/'],
        ['ü', 'Bücher /ˈbyːçɐ/', 'Müller /ˈmʏlɐ/'],
        ['y', 'Cyklop /tsyːklɔp/', 'System /zʏsteːm/'],
      ],
    },
    {
      caption: T('Los sonidos de ch'),
      head: ['Contexto', 'Som', 'Exemplos'],
      rows: [
        ['após ä, ö, ü, ie', '/ç/ palatal', 'ich, Bücher, Mädchen, Kirsche'],
        ['após a, e, i, o, u', '/x/ velar', 'Buch, Milch, Nacht, Schnitt'],
        ['início de palavra', '/k/ ou /ç/', 'Charme, Chaos, Chiemsee'],
      ],
    },
  ],
};

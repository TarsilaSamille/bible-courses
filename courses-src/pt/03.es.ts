import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('Verbos en presente'),
  subtitle: T('amar, creer, partir y verbos irregulares'),
  section: T('El verbo: forma y tiempo'),
  body: C(`## Tres sentidos para una sola forma

El presente portugués describe hábito, hecho actual o verdad permanente, y la forma es la misma en los tres. Lo que cambia es lo que el hablante quiere decir, y lo decide el contexto. «Yo amo a mis amigos» es hábito; «él ama» puede ser lo que está pasando ahora; «Dios es amor» (1 Juan 4:8) no es una afirmación sobre lo que Dios hará, es una afirmación sobre lo que él es.

En los textos bíblicos el presente es famoso justamente por eso. Juan 3:16 dice {creram} en imperfecto, pero 1 Juan 4:8 y Juan 14:6 usan el presente para lo que no tiene fecha: {Deus é amor}, {Eu sou o caminho}. Traducir por {será} o {seria} conserva la gramática del verbo y rompe la afirmación.

## Las terminaciones y la trampa de {-ir}

Las terminaciones regulares de {amar} son {-o, -as, -a, -amos, -am}; las de {crer} son {-o, -es, -e, -emos, -em}; las de {partir} son {-o, -es, -e, -imos, -em}. Solo el {-ir} cambia {-e} por {-i} en el presente: es la única terminación que hace que un infinitivo en {-ir} siga el patrón de {-er}.

Esa es la trampa del texto bíblico: {partimos} e {-imos}, no {partemos} ni {-emos}. La forma {cremos} existe y es de {crer}; la forma {partimos} es de {partir} y de nada más.

Los verbos irregulares más frecuentes son {ser}, {ter}, {ir}, {dizer}, {fazer} y {haver}. Ninguna regla los produce: {sou} y {são} vienen del latín, y {temos} cambia la {-n} del latín {tenemus} por una {-m}.

## Lo que la forma no dice

La forma {creio} es el presente de {crer} en primera persona, y es el par que se confunde con {crio}, presente de {criar}. La diferencia está en lo que hace la {e}: {cr-e-io} tiene {ei}, {cr-io} no.

La preposición {em} también cambia el sentido sin cambiar la forma. {creio} solo está incompleto, y {creio em Deus} quiere decir que creo que Dios existe y es fiable. Juan 3:15 usa {πιστεύω} con {εἰς} en griego, y es el dativo {εἰς} el que {em} traduce.

## Criterio de lectura

Con cualquier verbo en presente, pregúntate: ¿es {amar} o {partir}, y la terminación lo confirma? ¿Es irregular, y entonces qué forma irregular? ¿Hay preposición unida, como el {em} de {creio em}? Las tres respuestas resuelven el verbo antes de que la persona decida el resto.`),
  vocab: [
    V('amo', 'amar', 'amo'),
    V('ama', 'amar', 'ama'),
    V('creio', 'crer', 'creo'),
    V('crê', 'crer', 'cree'),
    V('sou', 'ser', 'soy'),
    V('é', 'ser', 'es'),
    V('tenho', 'ter', 'tengo'),
    V('diz', 'dizer', 'dice'),
    V('vem', 'vir', 'viene'),
    V('está', 'estar', 'está'),
    V('amar', 'amar', 'amar (verbo)'),
    V('criar', 'criar', 'crear'),
    V('fazer', 'fazer', 'hacer'),
    V('haver', 'haver', 'haber (verbo impersonal)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma de presente de «crer» en 1.ª persona?'),
    options: [T('creo'), T('crea'), T('crío'), T('creería')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa «Dios ___ amor».'),
      answer: 'é',
      hint: T('Verbo ser, 3.ª persona del presente.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración expresa una verdad permanente?'),
      options: [
        T('Amo a mis amigos.'),
        T('Dios es amor.'),
        T('Amó la ciudad.'),
        T('Amaré a mis amigos.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el presente con la persona correspondiente.'),
      pairs: [
        { a: T('soy'), b: T('1.ª persona') },
        { a: T('es'), b: T('3.ª persona') },
        { a: T('tenemos'), b: T('1.ª persona plural') },
      ],
      answer: ['a', 'b', 'c'],
    },
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'El presente de {ser} y {ter} no sigue regla: {sou}, {és}, {é}, {somos}, {são} y {tenho}, {tens}, {tem}, {temos}, {têm}. Son las dos formas que el texto bíblico repite en cada página.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Un verbo en {-ir} toma {-o, -es, -e, -imos, -em}: {parto}, {partes}, {parte}, {partimos}, {partem}. Solo {-ir} cambia la {-e} del presente por {-i}.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{cr-e-io} tiene {ei} y {cr-io} no: la {e} es lo que separa {creio} de {crio}, no la letra que viene después.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{creio} solo está incompleto; {creio em Deus} es lo que dice que creo que él existe y es fiable, y la {em} es lo que añade eso.',
      ),
    },
    {
      n: '§5',
      text: T(
        'En el presente sin fecha, {Deus é amor} (1 Juan 4:8) y {Eu sou o caminho} (Juan 14:6) afirman lo que el sujeto es. Traducir por {será} o {seria} conserva la forma y pierde la afirmación.',
      ),
    },
  ],
  notes: [
    {
      label: T('El acento'),
      text: T(
        'En Portugal {falo} y {fales} pueden llevar acento diacrítico, que el portugués de Brasil no usa. Estas tablas siguen el sistema de Brasil, el de las traducciones bíblicas en portugués de Brasil.',
      ),
    },
    {
      label: T('El griego también'),
      text: T(
        'Juan 3:15 usa {πιστεύω} con {εἰς} ({creio em}), y {εἰς} es dativo: quien traduce por {creio Deus} perdió el complemento.',
      ),
    },
  ],
  examples: [
    { text: 'Deus é amor.', gloss: T('Presente con valor de verdad sin fecha.') },
    { text: 'Eu sou o caminho.', gloss: T('Presente que afirma lo que Jesús es (Jn 14.6).') },
    { text: 'Eu creio em Deus.', gloss: T('La {em} completa el sentido de {crer}.') },
    { text: 'Eu amo os meus amigos.', gloss: T('Presente de hábito, no de suceso.') },
    { text: 'Ele ama o povo.', gloss: T('Puede ser lo que está pasando ahora.') },
    { text: 'A multidão grita.', gloss: T('Presente en escena, y el contexto da el tiempo.') },
    {
      text: 'Nós partimos ao amanhecer.',
      gloss: T('{-imos}: solo el infinitivo en {-ir} cambia la {-e}.'),
    },
    { text: 'Eles creem nos profetas.', gloss: T('{creem} de {crer}, no de {criar}.') },
    { text: 'Não temas, disse ele.', gloss: T('Negación antes del verbo, presente intacto.') },
  ],
  tables: [
    {
      caption: T('Presente regular de los tres modelos'),
      head: ['Pessoa', 'amar', 'crer', 'partir'],
      rows: [
        ['eu', 'amo', 'creio', 'parto'],
        ['tu', 'amas', 'crês', 'partes'],
        ['ele', 'ama', 'crê', 'parte'],
        ['nós', 'amamos', 'cremos', 'partimos'],
        ['eles', 'amam', 'creem', 'partem'],
      ],
    },
    {
      caption: T('Los irregulares que el texto repite'),
      head: ['Pessoa', 'ser', 'ter', 'haver'],
      rows: [
        ['eu', 'sou', 'tenho', 'hei'],
        ['tu', 'és', 'tens', 'há'],
        ['ele', 'é', 'tem', 'há'],
        ['nós', 'somos', 'temos', 'há'],
        ['eles', 'são', 'têm', 'há'],
      ],
    },
    {
      caption: T('Lo que el presente puede describir'),
      head: ['Valor', 'Exemplo', 'Referência'],
      rows: [
        ['hábito', 'eu amo os meus amigos', '—'],
        ['fato atual', 'ele ama o povo', '—'],
        ['verdade sem data', 'Deus é amor', '1 Jo 4.8'],
      ],
    },
  ],
};

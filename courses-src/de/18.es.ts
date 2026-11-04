import { C, T, V } from '../shared.mts';

export default {
  id: 18,
  title: T('La conjugación en presente'),
  subtitle: T('ich, du, er — y el secreto está al final'),
  section: T('Los verbos'),
  body: C(`## La persona se esconde al final

El español dice «yo hablo» y la terminación verbal sigue a la vista. El alemán dice {ich spreche} y el pronombre ha absorbido la información: ya no hay terminación de persona. Quien ejecuta la acción ha emigrado a la **terminación**.

Por eso el presente es la forma más barata del sistema: basta mirar el final del verbo para saber quién actúa. Y por eso está tan gastado. {Ich spreche} y {sie sprechen} pueden significar «yo hablo» y «ellos hablan» y, en un texto sobre un manuscrito, «se habla». El contexto decide.

## El verbo regular

Toma {machen} «hacer», quita la {en} del infinitivo: queda {mach-}. Ahora añade las terminaciones de presente:

- {ich mach-e} «yo hago»
- {du mach-st} «tú haces»
- {er / sie / es mach-t} «él hace»
- {wir mach-en} «nosotros hacemos»
- {ihr mach-t} «vosotros hacéis»
- {sie / Sie mach-en} «ellos / usted hacen»

Tres reglas breves y una excepción cubren todo:

**1. La {e} solo aparece en la primera persona del singular.** {ich spreche}, {ich mache}, {ich lerne}. En las demás personas desaparece: {du sprichst}.

**2. Detrás de {s} o {ß}, la {e} se cae.** {du heißt} «te llamas» y {er reist} «él viaja» pierden la {e}, porque la {s} o la {ß} ya ocupa ese lugar.

**3. Si el radical termina en {d} o {t}, se inserta una {e} antes de la terminación.** {du arbeitest}, {ihr findet}, {er wartet}, {sie rechnet}. Es una {e} de apoyo, y la pronunciación la delata: {du sprichst} [ˈʃpʁɪçst] frente a {du rechnest} [ˈʁɛçnəst].

**La excepción: los verbos en {eln}.** {sammeln} da {ich sammle}, {du sammelst}, sin {e} intermedia. La {l} ya está delante y la {e} desaparecería igualmente: {sammele} suena demasiado formal, {sammle} es la forma natural.

## El verbo {sein}

{Sein} «ser» no sigue nada de esto y es el único que hay que aprenderse de memoria en presente: {ich bin}, {du bist}, {er ist}, {wir sind}, {ihr seid}, {sie sind}. Fíjate en la doble irregularidad: {ist} en el singular, {sind} en el plural.

{ist} merece atención en su pronunciación: es [ɪst] «ist», con una {i} breve y siseante. Mucha gente la alarga por influencia del español y produce [iːst], que suena pedante y equivocado.

## El verbo {haben}

{Haben} «tener» es casi regular, con un solo cambio: la {a} del radical se vuelve {i} en la primera y en la tercera persona del singular. {ich habe}, {du hast}, {er hat}, {wir haben}, {ihr habt}, {sie haben}. Compáralo con {geben} «dar», que hace lo mismo: {ich gebe}, {du gibst}, {er gibt}.

La forma {er hat} [hat] merece atención: la {h} es aspirada en casi toda Alemania, [h], y la {a} es abierta. Quien no aspira suena extranjero de inmediato.

## El orden de las palabras

En la oración afirmativa el verbo ocupa la **segunda posición**, sin excepción:

- {Ich spreche heute Deutsch.} «Hoy hablo alemán.» (sujeto, verbo, resto)
- {Heute spreche ich Deutsch.} «Hoy hablo alemán.» (adverbio, verbo, sujeto)
- {Mein Bruder spricht heute Deutsch.} (sujeto, verbo, resto)

En la pregunta el verbo pasa a la **primera** posición: {Sprichst du Deutsch?} «¿Hablas alemán?»; {Hast du Zeit?} «¿Tienes tiempo?».

Y en el imperativo el verbo abre la oración y pierde la terminación de {du}: {Sprich!} «¡Habla!», {Sei still!} «¡Cállate!».

## Lo esencial

El presente regular es {radical} + terminación, con {e} solo en la primera persona, {e} de apoyo antes de {d}/{t} y nada en los verbos en {eln}; {sein} y {haben} son los dos que hay que memorizar; y el verbo siempre queda en segunda posición.`),
  vocab: [
    V('sprechen', 'sprechen', 'hablar (ich spreche, du sprichst, er spricht)'),
    V('machen', 'machen', 'hacer (regular: ich mache, du machst, er macht)'),
    V('lernen', 'lernen', 'aprender (er lernt Deutsch)'),
    V('arbeiten', 'arbeiten', 'trabajar (e de apoyo: ich arbeite, er arbeitet)'),
    V('warten', 'warten', 'esperar (er wartet auf + acusativo)'),
    V('finden', 'finden', 'encontrar, hallar (ihr findet)'),
    V('sammeln', 'sammeln', 'reunir, coleccionar (sin e: ich sammle)'),
    V('heißen', 'heißen', 'llamarse (du heißt, er heißt)'),
    V('sein', 'sein', 'ser (ich bin, du bist, er ist, wir sind)'),
    V('haben', 'haben', 'tener (ich habe, du hast, er hat, wir haben)'),
    V('geben', 'geben', 'dar (a > i: ich gebe, du gibst, er gibt)'),
    V('lesen', 'lesen', 'leer (du liest, er liest, wir lesen)'),
    V('schreiben', 'schreiben', 'escribir (du schreibst, er schreibt)'),
    V('ich', 'ich', 'yo (siempre minúscula, incluso sola)'),
    V('er/sie/es', 'er', 'él/ella/eso ({sie} = ella o ellos; {es} = cosa)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es la forma correcta de {er} + {arbeiten} en presente?'),
    options: [
      T(
        'er arbeitet — la e de apoyo entra antes de la terminación {t}, porque el radical acaba en {t}',
      ),
      T('er arbeit — la e de apoyo entra siempre, incluso sin terminación'),
      T('er arbeitst — se cambió la terminación de {du}'),
      T('er arbeiten — se usó el infinitivo como forma verbal'),
    ],
    answer: 0,
    hint: T('Regla §3: un radical en {d} o {t} lleva e de apoyo antes de la terminación.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el presente de {sein} en la tercera persona del singular: er ___'),
      answer: 'ist',
      hint: T('La {i} breve suena [ɪst], nunca [iːst].'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el pronombre con su forma de {sein}.'),
      pairs: [
        { a: T('ich'), b: T('bin') },
        { a: T('du'), b: T('bist') },
        { a: T('er'), b: T('ist') },
        { a: T('wir'), b: T('sind') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿En qué oración está el verbo correctamente en segunda posición?'),
      options: [
        T('{Heute spreche ich mit ihm.} — adverbio, verbo, sujeto'),
        T('{Spreche heute ich mit ihm.} — verbo, adverbio, sujeto'),
        T('{Heute ich spreche mit ihm.} — adverbio, sujeto, verbo'),
        T('{Ich heute spreche mit ihm.} — sujeto, adverbio, verbo'),
      ],
      answer: 0,
      hint: T('Regla §5: el verbo nunca es el primer elemento en la oración afirmativa.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El presente regular es el infinitivo menos {en} o {ern} más la terminación: {mach-} + {e}, {lern-} + {t}, {spiel-} + {en}.',
      ),
    },
    {
      n: '2',
      text: T(
        'La {e} de la terminación aparece solo en {ich}: {ich spreche}, {ich lerne}. En las demás personas desaparece: {du sprichst}, {er lernt}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Un radical en {d} o {t} lleva e de apoyo antes de la terminación: {ich arbeite}, {du arbeitest}, {ihr findet}, {er wartet}. Sin esa {e} el sonido sería demasiado duro.',
      ),
    },
    {
      n: '4',
      text: T(
        'Excepción: los verbos en {eln} no llevan e intermedia: {ich sammle}, {du sammelst}, {er sammelt}, {wir sammeln}.',
      ),
    },
    {
      n: '5',
      text: T(
        'En la oración afirmativa el verbo ocupa la segunda posición, sea cual sea el primer elemento; en la pregunta pasa a la primera: {Sprichst du Deutsch?}.',
      ),
    },
  ],
  notes: [
    {
      label: T('La {e} que nadie ve'),
      text: T(
        'La e de apoyo es la marca más discreta del alemán, y la pronunciación es lo que la delata. {ich rechne} suena [ˈʁɛçnə], con una [ə] claramente perceptible: [ˈʁɛçnəst] en {du rechnest}. La misma e aparece en {sammle} [ˈzamlə] y en {schnelle} [ˈʃnɛlə]. Quien la suprime produce grupos consonánticos duros, comparables con la {gn} del italiano. Para la lectura bíblica es irrelevante, porque el texto escrito no guarda el sonido; para la lectura en voz alta lo es todo.',
      ),
    },
    {
      label: T('Lectura bíblica'),
      text: T(
        'El presente domina la Biblia de Lutero precisamente porque el narrador suele hablar en presente. En Juan 1:1, {Im Anfang war das Wort} «En el principio era el Verbo»: {war} es la forma de tercera persona de {sein}, y el «era» del español no aparece. En 1 Juan 1:9, {Wenn wir unsre Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt} «si confesamos nuestros pecados, él es fiel y justo para perdonarnos»: {ist} se repite, y el patrón {so ist} — la oración de resultado por «entonces» — es la marca estilística del versículo. En Gálatas 5:1, {So seid ihr durch Christus freigesprochen} «así que vosotros estáis libres por Cristo»: la oración termina en presente porque el efecto del evangelio es permanente. Reconocer el presente es reconocer que el texto dice algo que sigue en pie.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich spreche jeden Tag Deutsch.',
      gloss: T('Hablo alemán todos los días (regla §2: la e solo en ich).'),
    },
    {
      text: 'Du sprichst sehr gut.',
      gloss: T('Hablas muy bien ({sprichst}: desapareció la e del ich).'),
    },
    {
      text: 'Er arbeitet bei einer Bank.',
      gloss: T('Trabaja en un banco ({arbeitet}: e de apoyo tras la t).'),
    },
    {
      text: 'Ihr findet die Tür.',
      gloss: T('Encontráis la puerta ({findet}: e de apoyo tras la d).'),
    },
    {
      text: 'Wir sammeln die Reste.',
      gloss: T('Recogemos los restos (verbo en eln: sin e intermedia).'),
    },
    { text: 'Wie heißt du?', gloss: T('¿Cómo te llamas? ({heißt}: sin e tras la ß).') },
    { text: 'Er ist mein Bruder.', gloss: T('Él es mi hermano ({ist} es breve, [ɪst]).') },
    {
      text: 'Ich habe keine Zeit.',
      gloss: T('No tengo tiempo ({habe}: la a del radical se vuelve i en ich).'),
    },
    {
      text: 'Sprichst du Englisch?',
      gloss: T('¿Hablas inglés? (pregunta: el verbo en primera posición).'),
    },
    {
      text: 'Heute lese ich einen Brief.',
      gloss: T('Hoy leo una carta (el verbo en segunda posición, tras el adverbio).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Presente de indicativo en los seis lugares'),
      head: [T('Persona'), T('machen'), T('arbeiten'), T('lernen'), T('sammeln')],
      rows: [
        ['ich', 'mache', 'arbeite', 'lerne', 'sammle'],
        ['du', 'machst', 'arbeitest', 'lernst', 'sammelst'],
        ['er/sie/es', 'macht', 'arbeitet', 'lernt', 'sammelt'],
        ['wir', 'machen', 'arbeiten', 'lernen', 'sammeln'],
        ['ihr', 'macht', 'arbeitet', 'lernt', 'sammelt'],
        ['sie/Sie', 'machen', 'arbeiten', 'lernen', 'sammeln'],
      ],
    },
    {
      caption: T('Tabla 2 — Los tres verbos que hay que memorizar'),
      head: [T('Persona'), T('sein'), T('haben'), T('werden')],
      rows: [
        ['ich', 'bin', 'habe', 'werde'],
        ['du', 'bist', 'hast', 'wirst'],
        ['er/sie/es', 'ist', 'hat', 'wird'],
        ['wir', 'sind', 'haben', 'werden'],
        ['ihr', 'seid', 'habt', 'werdet'],
        ['sie/Sie', 'sind', 'haben', 'werden'],
      ],
    },
  ],
};

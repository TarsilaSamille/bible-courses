import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('Ortografía y acentos'),
  subtitle: T(
    '{é è ê à ù ç œ} — cinco signos que un francés no usa nunca, más una {i} que casi no aparece',
  ),
  section: T('Fundamentos'),
  body: C(`## El acento francés está al final de la palabra, no al principio

En español el acento marca la tonicidad y puede aparecer en muchas posiciones. En francés esto casi nunca ocurre: lo que el acento marca es **la última vocal pronunciada de la palabra**, y esa posición es estable. Una palabra aguda es aguda; una grave es grave. El resultado es una de las estructuras más regulares de la lengua.

El acento tiene dos trabajos, y nunca se mezclan. El **acento grave** {è} aparece solo en palabras graves, para decir cuál vocal es la última que suena: {père, mère, frère, après, règlement, niveau, ève, Noël}. El **circunflejo** {â, ê, î, ô, û} aparece en palabras agudas, con la misma función: {hôtel, forêt, crêpe, goût, sûr, dû, tôt, Saône}.

Fíjate en lo que esto resuelve. En {père} y {mère} la última vocal es la {e} muda, así que el acento tiene que señalar el {è} que va antes. En {hôtel} y {forêt} la última vocal es de verdad el {ê}/{ô}, y el acento lo confirma. En ningún caso el acento indica énfasis: el francés **no tiene ninguna oxítona acentuada por tonicidad**.

Hay un único caso en que el circunflejo deja de ser funcional: en muchas palabras heredadas del latín hoy marca solo la antigua longitud de una vocal que luego se acortó. {fête} (latín *fēsta*), {hôtel} (*hostel*), {tête}, {bête}, {intègre}, {système}. Ahí su función es etimológica, no fonética — quítalo y casi nadie lo nota.

## El {â} circular

En {château}, {forêt}, {côte}, {hôpital}, {tête}, {fête}, {mâle} y {bâiller}, el {â} representa el sonido [ɑ], la {a} abierta. Es la única vocal cuyo acento cambia el sonido, y por eso esos acentos son indispensables: {château} [ʃɑto] «castillo» y {châtau} no existen.

## La cedilla {ç}: una coma que cambia el sonido

La {ç} es la única otra marca que el español también usa, y sigue exactamente la misma regla: ante {a, o, u} la {c} sería [k], y la {ç} la convierte en [s]. {ça} [sa], {cédez} [sede], {garçon} [ɡaʁsɔ̃], {reçu} [ʁəsy], {douce} [dus], {façon} [fasɔ̃] — la {c} de {façon} y {garçon} es el mismo sonido, y la diferencia de grafía es solo por legibilidad.

## La ligadura {œ} y la diéresis {ë}

{œ} es la {oe} ligadura: suena [ø] como en {œuvre} [œvʁ] «obra», {cœur} [kœʁ] «corazón», {sœur} [sœʁ] «hermana», {œuf} [œf] «huevo», {fœre} [fœʁ] «fuego». Y atención: la {oe} sin ligadura, como en {soeur} y {oeuf}, suena [œ] **igual**. La ligadura es una señal de pronunciación, no de etimología.

La {ë} es más rara, pero sigue la misma lógica: {ë} = [ɛ] abierta, como {è}, e indica que una {e} sola sería muda. {Noël} [nɔɛl], {canoë}, {mael}, {reëlect}, {Haïti}. La más conocida es un nombre propio, no una palabra común.

## El acento que no es acento: la {i} trémula

No esperes encontrar {í} marcando tonicidad. Cuando la {i} aparece en sílaba tónica tras vocal, el francés escribe {y}: {exil} [ɛɡzil], {pays} [pei] «país», {Guyane} [ɡɥijɛn]. La regla es **vocal + {i} tónica = {y}**. Por eso tienes {vrai} [vʁɛ], {essai} [ɛsɛ], {travail} [tʁavaj], {détail} [deta(j)], {soleil} [sɔlɛj] — y de ahí, por un camino trillado, *il* → *ill*.

Esta es la regla de muda cum liquida, y llega más allá de la {i}: en {travail} el {ai} funciona como una unidad, en {vraiment} igual, y en {faut} también el {au}. Cuando dos sonidos se funden en una sílaba, su contorno desaparece y nace un sonido nuevo.

## Lectura aplicada

El texto de **Louis Segond** de {Juan 1:1} es, sin pretenderlo, un manifiesto de la ortografía francesa: {Au commencement était la Parole, et la Parole était avec Dieu, et la Parole était Dieu}. Fíjate en que **no hay ni un solo acento de tonicidad** en las 24 sílabas. Lo que sostiene la frase son las terminaciones: {commencement} acaba en schwa, {était} en {t} muda, {avec} en {v} muda, {Parole} en {l} muda, {Dieu} en {œ} muda. La frase parece sin acentos porque el francés no los necesita.

Ahora mira los detalles de {Juan 1:5}: {La lumière brille dans les ténèbres, et les ténèbres ne l’ont point reçue}. Aquí {brille} lleva una {i} tónica tras {e}, lo que da [ij]: [bʁij] — el {y} que ya conhecías en {soleil}, escrito {i}. Y {reçue} lleva cedilla, porque {ç} antes de {u}.

Compara con {Salmo 1:1}: {Heureux l’homme qui n’a pas walké dans le conseil des pécheurs}. Fíjate en {l’homme} — la {h} inicial de {homme} es muda y por eso **no** hay elisión, escribimos {l’homme} y no {l’homme}, que estaría mal por la misma razón que {l’héros}.

## Lo esencial

El acento francés señala la última vocal que suena, nunca la tonicidad. Y los signos que importan para el sonido son pocos: {â} = [ɑ], {ç} = [s], {œ} = [ø], {ë} = [ɛ], y el {y} disfrazado de {i}.`),
  vocab: [
    V('père', 'père', 'padre; grave: la última vocal es {è}, no la {e} muda'),
    V('mère', 'mère', 'madre; el acento es obligatorio para revelar el sonido'),
    V('hôtel', 'hôtel', 'hotel; {ô} abierta [o] y {el} final muda'),
    V('forêt', 'forêt', 'bosque; {ê} = [ɛ] y {t} final muda'),
    V('château', 'château', 'castillo; {â} = [ɑ] abierta'),
    V('garçon', 'garçon', 'chico; {ç} = [s] ante {o}'),
    V('reçu', 'recevoir', 'recibido; {ç} = [s] ante {u}'),
    V('façon', 'façon', 'modo, manera; {ç} = [s] ante {a}'),
    V('sœur', 'sœur', 'hermana; {œ} = [ø] y {r} uvular final'),
    V('cœur', 'cœur', 'corazón; {œ} = [ø]'),
    V('œuf', 'œuf', 'huevo; ligadura {œ} = [ø]'),
    V('Noël', 'Noël', 'Navidad; {ë} = [ɛ] abierta'),
    V('travail', 'travail', 'trabajo; {ai} tónico tras vocal'),
    V('pays', 'pays', 'país; {y} = vocal + {i} tónica'),
    V('soleil', 'soleil', 'sol; {euil} = [œj] con {i} semivocal'),
    V('fête', 'fête', 'fiesta; {ê} de origen latina, suena [fɛt]'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {père}, ¿qué está marcando realmente el acento grave {è}?'),
    options: [
      T('La última vocal que suena de la palabra, porque la {e} final es muda'),
      T('La tonicidad de la sílaba {père}'),
      T('Una vocal larga del latín, y nada más'),
      T('Un diptongo, una marca de sonido sin posición fija'),
    ],
    answer: 0,
    hint: T('Regla §1: el acento es posicional — siempre antes de la última vocal.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Escribe la palabra con acento circunflejo: foret (bosque)'),
      answer: 'forêt',
      hint: T('La última vocal es la propia {e}, así que el acento va en ella.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase respeta la regla del {y} por vocal + {i} tónica?'),
      options: [
        T('{Il a guéri} — la {i} de {guéri} es tónica y se vuelve [i]'),
        T('{Le petit chien} — la {i} de {petit} va tras una {t}'),
        T('{Une vie calme} — la {i} de {vie} va seguida de otra vocal'),
        T('{Il habite ici} — las dos {i} son átonas'),
      ],
      answer: 0,
      hint: T('Regla §2: la prueba es vocal + {i}, no {t} + {i} ni vocal + {i} + vocal.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada signo con su función'),
      pairs: [
        { a: T('{â}'), b: T('vocal [ɑ] abierta en {château}') },
        { a: T('{ç}'), b: T('sonido [s] ante {a, o, u}') },
        { a: T('{œ}'), b: T('vocal [ø] en {sœur}') },
        { a: T('{ë}'), b: T('vocal [ɛ] abierta en {Noël}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'fill',
      prompt: T('En {il est mon berger}, ¿cuántos acentos de tonicidad hay?'),
      answer: 'zero',
      hint: T(
        'Una pista: el nombre de Dios en francés es {Dieu} [djø] — la última vocal es muda, y aun así no se acentúa.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El acento marca la última vocal que suena, y su posición es siempre la penúltima: {père, mère, frère, après, hôtel, forêt, goût, sûr}.',
      ),
    },
    {
      n: '2',
      text: T(
        'El grave {è} aparece solo en graves y el circunflejo {â ê î ô û} solo en agudas; ninguno marca tonicidad.',
      ),
    },
    {
      n: '3',
      text: T(
        'El {â} es la única vocal cuyo acento cambia el sonido: [a] pasa a [ɑ] en {château}, {forêt}, {côte}, {tête}, {fête}.',
      ),
    },
    {
      n: '4',
      text: T(
        'La {ç} da [s] ante {a, o, u} donde la {c} daría [k]: {ça, façon, garçon, reçu, douce, leçon}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Vocal + {i} tónica se escribe {y}: {travail, pays, exil,}~abilidad; y {œ} = [ø] tanto ligado ({cœur}) como suelto ({soeur}).',
      ),
    },
  ],
  notes: [
    {
      label: T('La palabra aguda que nadie acentúa'),
      text: T(
        'Un hispanohablante pasa años acentuando {café} y {casa}; en francés ambos serían errores. Una palabra aguda como {café}, {idée}, {papier} ya lo revela su final mudo, y una grave como {maison}, {chaise} su {n} o {s} final. No hay nada que hacer.',
      ),
    },
    {
      label: T('Cuando el acento miente'),
      text: T(
        'En {fête}, {hôtel}, {tête}, {bête}, {système}, {intègre} el circunflejo es una fosilización: marca la vocal larga del latín, hoy pronunciada breve. Un alumno cuidadoso que intente alargarla sonará arcaico, no francés. El acento no siempre es fonético: a veces es un mapa.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole',
      gloss: T('En el principio era el Verbo (Jn 1:1) — ni un acento de tonicidad'),
    },
    {
      text: 'il était dans le monde',
      gloss: T('estaba en el mundo — {était} aguda, {o} cerrada [o]'),
    },
    {
      text: 'un bon père',
      gloss: T('un buen padre — {père} grave, acento obligatoriamente en {è}'),
    },
    {
      text: 'la lumière brille',
      gloss: T('la luz brilla — {ill} = [j] más {i} semivocal, como {soleil}'),
    },
    { text: 'une tête de blé', gloss: T('una cabeza de trigo — {ê} = [ɛ] abierta') },
    { text: 'le château de Paris', gloss: T('el castillo de París — {â} = [ɑ] abierta') },
    { text: 'un cœur pur', gloss: T('un corazón puro — {œ} = [ø] y {r} uvular final') },
    {
      text: 'le garçon et sa sœur',
      gloss: T(' el niño y su hermana — {ç} y {œ} en una sola frase'),
    },
    {
      text: 'le travail est court',
      gloss: T('el trabajo es corto — el {ai} tónico funciona como una unidad'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Los acentos y lo que marcan'),
      head: [T('Signo'), T('Tipo de palabra'), T('Sonido'), T('Ejemplo')],
      rows: [
        ['{è}', 'grave', '[ɛ]', '{père}'],
        ['{ê}', 'aigue', '[ɛ]', '{forêt}'],
        ['{ô}', 'aigue', '[o]', '{hôtel}'],
        ['{û}', 'aigue', '[y]', '{sûr}'],
        ['{â}', 'circunflexo histórico', '[ɑ]', '{château}'],
        ['{ë}', 'trema', '[ɛ]', '{Noël}'],
      ],
    },
    {
      caption: T('Tabla 2 — Signos que cambian el sonido'),
      head: [T('Par'), T('Con el signo'), T('Sin él'), T('Ejemplo')],
      rows: [
        ['c / ç', '[s]', '[k]', '{façon} / {capot}'],
        ['e / è', '[ɛ]', '[ə]', '{père} / {pere}'],
        ['o / ô', '[ɔ]', '[o]', '{côte} / {cote}'],
        ['a / â', '[ɑ]', '[a]', '{château} / {chaton}'],
        ['i / y', '[i]', '[i]', '{travail} / {travaux}'],
      ],
    },
  ],
};

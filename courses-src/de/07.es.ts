import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('El género de los sustantivos'),
  subtitle: T('reglas, pares y excepciones'),
  section: T('Los sustantivos'),
  body: C(`El género del sustantivo alemán es gramatical, no natural. No hay correspondencia entre el género y el sexo del referente: die Sonne es femenino y el sol es masculino en portugués; die Mutter es femenino, y la boca de un río (der Mund) también es masculino. No hay, por tanto, camino seguro para deducir el género por la lógica del significado.

Existen, sin embargo, regularidades fuertes. El masculino abarca a las personas y los animales de sexo masculino (der Mann, der Hund, der Hahn), los días, meses y estaciones (der Montag, der Mai, der Herbst), las bebidas alcohólicas (der Wein, der Sekt, der Schnaps) y los sustantivos terminados en -er que designan hombres (der Lehrer, der Maler).

El femenino es la mayor clase y agrupa un conjunto amplio de terminaciones: -ung, -heit, -keit, -schaft, -ei, -ie, -tät, -ik, -ur y -in (la mujer que lo ejerce: die Königin, die Ärztin). Reciben también el femenino los nombres de mujer (die Frau, die Schwester) y los sustantivos terminados en -e que designan cosas sin vida: die Straße, die Farbe, die Größe, die Butter.

El neutro reúne los infinitivos y adjetivos nominalizados (das Essen, das Gute), los sustantivos colectivos de personas (das Volk), los nombres de idiomas y continentes (das Deutsch, das Europa) y los sustantivos con prefijo ge-, be-, ver-, er-, ent-, emp-, zer- o de origen griego/latino (das Getränk, das Problem, das Studium).

Atención a dos excepciones frecuentes. Los diminutivos en -chen y -lein son siempre neutros: das Mädchen, das Bärchen; pero forman el plural en -chen, sin nasal: die Mädchen. Y los pares: siempre que exista un par masculino y femenino, apréndelos juntos — der Vater y die Mutter, der Sohn y die Tochter —, porque uno arrastra al otro en la memoria.`),
  vocab: [
    V('der Mann', 'Mann', 'el hombre (masculino)'),
    V('die Frau', 'Frau', 'la mujer, la esposa (femenino)'),
    V('der Vater', 'Vater', 'el padre (masculino)'),
    V('die Mutter', 'Mutter', 'la madre (femenino)'),
    V('der Sohn', 'Sohn', 'el hijo (masculino)'),
    V('die Tochter', 'Tochter', 'la hija (femenino)'),
    V('die Sonne', 'Sonne', 'el sol (femenino, contra lo esperado)'),
    V('die Größe', 'Größe', 'el tamaño (femenino en -e)'),
    V('die Übung', 'Übung', 'el ejercicio (femenino en -ung)'),
    V('die Freiheit', 'Freiheit', 'la libertad (femenino en -heit)'),
    V('die Universität', 'Universität', 'la universidad (femenino en -ität)'),
    V('die Königin', 'Königin', 'la reina (femenino en -in)'),
    V('das Mädchen', 'Mädchen', 'la niña (neutro en -chen)'),
    V('das Getränk', 'Getränk', 'la bebida (neutro en ge-)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál de estos sustantivos es femenino?'),
    options: [T('das Problem'), T('die Forschung'), T('der Frühling'), T('das Bauernhaus')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Da el género de «Lehrer»: ___ Lehrer'),
      answer: 'der',
      hint: T('Terminación -er que designa a un hombre.'),
    },
    {
      kind: 'fill',
      prompt: T('Da el género de «Sonntag»: ___ Sonntag'),
      answer: 'der',
      hint: T('Todos los días de la semana masculinos.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es el género de «das Verstehen»?'),
      options: [T('femenino'), T('masculino'), T('neutro'), T('varía con el referente')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el sustantivo con su género.'),
      pairs: [
        { a: T('die Forschung'), b: T('femenino (-ung)') },
        { a: T('das Studium'), b: T('neutro (-um)') },
        { a: T('der Bauer'), b: T('masculino (-er)') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los sustantivos de profesión masculino y femenino forman un par regular: der Arzt / die Ärztin, der Student / die Studentin.',
      ),
    },
    {
      n: '2',
      text: T(
        'Los diminutivos en -chen y -lein son neutros y forman el plural sin cambio: das Mädchen, die Mädchen; das Bärchen, die Bärchen.',
      ),
    },
    {
      n: '3',
      text: T(
        'Los idiomas y los continentes son neutros: das Deutsch, das Englisch, das Europa, das Afrika.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los nombres de ciudades y países son neutros cuando aparecen con artículo: das Berlin, das Deutschland, das Bayern; sin artículo no cambia nada: in Berlin, in Deutschland.',
      ),
    },
  ],
  notes: [
    {
      label: T('Regla mnemotécnica del género'),
      text: T(
        'Ninguna lista de reglas sustituye al vocabulario. La práctica eficiente es siempre la misma: anota el artículo junto al sustantivo, memoriza el plural y marca el género con un color. Quien escribe el género al lado, aunque sea mal, lo corrige en tres repeticiones; quien no lo escribe lo memoriza mal durante años.',
      ),
    },
    {
      label: T('El origen del género'),
      text: T(
        'Los tres géneros heredaron el sistema del griego antiguo, que clasifica lo que tiene movimiento (masculino) y lo que es inerte (neutro), con el femenino como categoría de lo vivo y de la pareja. Por eso die Sonne es femenino: la palabra latina sōl se clasificó con las demás cosas luminosas, y no con el sol macho griego hēlios.',
      ),
    },
  ],
  examples: [
    { text: 'Die Sonne scheint.', gloss: T('El sol brilla (die = femenino, contra lo esperado).') },
    {
      text: 'Der Vater und die Mutter kommen.',
      gloss: T('El padre y la madre vienen (par aprendible).'),
    },
    { text: 'Sie ist Ärztin.', gloss: T('Ella es médica (femenino de Arzt en -in).') },
    {
      text: 'Das Mädchen spielt mit dem Hund.',
      gloss: T('La niña juega con el perro (diminutivo neutro).'),
    },
    {
      text: 'Die Mädchen spielen im Garten.',
      gloss: T('Las niñas juegan en el jardín (plural sin nasal).'),
    },
    {
      text: 'Er studiert in Berlin.',
      gloss: T('Estudia en Berlín (ciudad neutra, sin artículo).'),
    },
    {
      text: 'Die Größe des Hauses ist beträchtlich.',
      gloss: T('El tamaño de la casa es considerable (femenino en -e).'),
    },
    { text: 'Das Getränk ist kalt.', gloss: T('La bebida está fría (neutro con ge-).') },
  ],
  tables: [
    {
      caption: T('Pistas de género por terminación'),
      head: ['Terminação', 'Gênero', 'Exemplos'],
      rows: [
        [
          '-ung, -heit, -keit, -schaft, -ei, -ie, -tät, -ik, -ur',
          'feminino',
          'die Übung, die Freiheit, die Nation',
        ],
        ['-in (profissão feminina)', 'feminino', 'die Ärztin, die Lehrerin'],
        ['-e (objeto sem vida)', 'feminino', 'die Straße, die Farbe'],
        ['-chen, -lein (diminutivo)', 'neutro', 'das Mädchen, das Bärchen'],
        ['-er (homem)', 'masculino', 'der Lehrer, der Bauer'],
        ['-ling, -ig, -ich', 'masculino', 'der Frühling, der König'],
        ['-ismus, -um, -ment, -tion, -ität', 'neutro', 'das Christentum, das Studium'],
        ['ge-, be-, ver-, er-, ent-, emp-, zer-', 'em geral neutro', 'das Getränk, das Gebäude'],
        ['-chen / -lein: plural', 'sem nasal', 'die Mädchen, die Tassen'],
      ],
    },
    {
      caption: T('Pares aprendibles'),
      head: ['Masculino', 'Feminino', 'Gloss'],
      rows: [
        ['der Vater', 'die Mutter', 'pai / mãe'],
        ['der Sohn', 'die Tochter', 'filho / filha'],
        ['der Bruder', 'die Schwester', 'irmão / irmã'],
        ['der Hahn', 'die Henne', 'galo / galinha'],
        ['der Stier', 'die Kuh', 'touro / vaca'],
        ['der Hengst', 'die Stute', 'cavalo / égua'],
        ['der Junggeselle', 'die Junggesellin', 'solteiro / solteira'],
        ['der Poet', 'die Dichterin', 'poeta / poetisa'],
      ],
    },
  ],
};

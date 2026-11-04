import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('El plural de los sustantivos'),
  subtitle: T('cinco patrones principales'),
  section: T('Los sustantivos'),
  body: C(`El plural alemán tiene cinco patrones de terminación, y el género del singular decide casi todo. El plural -e es el más frecuente y pertenece sobre todo al femenino: die Frau → die Frauen, die Stadt → die Städte, die Straße → die Straßen. Alcanza también algunos sustantivos masculinos: der Bote → die Boten, der Junge → die Jungen, der Hund → die Hunde.

El plural -n/-en es el de los masculinos llamados débiles y el de los diminutivos: der Mensch → die Menschen, der Kunde → die Kunden, der Student → die Studenten, das Mädchen → die Mädchen. Una regla práctica: todo masculino terminado en -e, -el, -er o -en y de dos sílabas hace -n o -en.

El plural -er es casi exclusivo de los masculinos en -ling, -ig e -ich, y casi siempre con diéresis en el plural: der Frühling → die Frühlinge, der König → die Könige, der Fuchs → die Füchse. El plural sin terminación pertenece a los masculinos graves: der Vater → die Väter, der Lehrer → die Lehrer, der Sohn → die Söhne. El plural -s, por último, queda reservado para los masculinos extranjeros: der Bus → die Busse, das Auto → die Autos, der Computer → die Computer.

La diéresis del plural sigue un patrón: entra en muchos monosílabos y en los bisílabos terminados en -er, -el, -en (Mann → Männer, Buch → Bücher, Baum → die Bäume, Vater → die Väter, Mutter → die Mütter), pero no entra cuando el plural ya lleva -e o -s (Garten → Gärten, Tag → Tage, Hund → Hunde) ni en los diminutivos (das Mädchen → die Mädchen). Así, la diéresis del plural es una señal bastante fiable: si apareció el trema, el sustantivo es casi siempre masculino o neutro.`),
  vocab: [
    V('die Frauen', 'Frau', 'las mujeres (plural -e)'),
    V('die Städte', 'Stadt', 'las ciudades (plural -e con diéresis)'),
    V('die Straßen', 'Straße', 'las calles (plural -e, sin diéresis)'),
    V('die Jungen', 'Junge', 'los chicos (plural -n)'),
    V('die Hunde', 'Hund', 'los perros (plural -e)'),
    V('die Menschen', 'Mensch', 'los seres humanos (plural -en)'),
    V('die Kunden', 'Kunde', 'los clientes (plural -en)'),
    V('die Mädchen', 'Mädchen', 'las niñas (plural sin terminación)'),
    V('die Füchse', 'Fuchs', 'los zorros (plural -e con diéresis)'),
    V('die Könige', 'König', 'los reyes (plural -e)'),
    V('die Väter', 'Vater', 'los padres (plural sin terminación con diéresis)'),
    V('die Mütter', 'Mutter', 'las madres (plural -ü)'),
    V('die Bücher', 'Buch', 'los libros (plural -ü)'),
    V('die Busse', 'Bus', 'los autobuses (plural -e, palabra extranjera)'),
    V('die Autos', 'Auto', 'los coches (plural -s)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿Cuál es el plural correcto de «das Mädchen»?'),
    options: [T('die Mädchen'), T('die Mädchens'), T('die Mägdchen'), T('der Mädchen')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Forma el plural: der König → ___'),
      answer: 'die Könige',
      hint: T('Un masculino en -ig hace -e con diéresis.'),
    },
    {
      kind: 'fill',
      prompt: T('Forma el plural: die Lehrerin → ___'),
      answer: 'die Lehrerinnen',
      hint: T('Los femeninos hacen casi siempre -e o -n.'),
    },
    {
      kind: 'choose',
      prompt: T('¿En qué plural NO hay diéresis?'),
      options: [T('die Bücher'), T('die Männer'), T('die Hunde'), T('die Bäume')],
      answer: 2,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el singular con el plural.'),
      pairs: [
        { a: T('der Bus'), b: T('die Busse') },
        { a: T('das Buch'), b: T('die Bücher') },
        { a: T('der Lehrer'), b: T('die Lehrer') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Los sustantivos femeninos casi nunca hacen plural en -er ni sin terminación: die Lehrerin → die Lehrerinnen.',
      ),
    },
    {
      n: '2',
      text: T(
        'El plural -n es obligatorio en los masculinos en -e, -el, -en y en los diminutivos, aunque el singular ya termine en -e: der Junge → die Jungen.',
      ),
    },
    {
      n: '3',
      text: T(
        'La diéresis del plural entra en monosílabos (Buch, Baum) y en bisílabos en -er, -el, -en (Vater, Glück), pero desaparece ante el -e, -en, -er y -s del plural.',
      ),
    },
    {
      n: '4',
      text: T(
        'Los diminutivos en -chen y -lein nunca reciben diéresis ni terminación nueva: das Bäumchen → die Bäumchen.',
      ),
    },
  ],
  notes: [
    {
      label: T('El plural siempre lleva el artículo die'),
      text: T(
        'En plural todos los géneros se funden en die, y esa fusión es lo que hace el plural alemán tan fácil de reconocer. Cuando la oración lleva un plural con terminación visible (die Hunde), la falta de distinción no molesta; cuando lleva un plural sin terminación (die Väter), es la terminación la que delata el género del singular.',
      ),
    },
    {
      label: T('Plurales aparentemente pleonásicos'),
      text: T(
        'Algunos plurales parecen pleonásicos y no lo son: die Kirschen es la ciruela, y Kirsch- es la parte de la palabra que indica la fruta; Kirschbaum es el cerezo. Del mismo modo, das Ei es el huevo, pero der Eisberg es el iceberg, porque -ei forma un compuesto distinto. Un plural en -n sirve a veces para mantener el singular vivo dentro de él.',
      ),
    },
  ],
  examples: [
    { text: 'Die Frauen arbeiten viel.', gloss: T('Las mujeres trabajan mucho (femenino → -e).') },
    {
      text: 'Die Städte sind alt.',
      gloss: T('Las ciudades son antiguas (diéresis con plural -e).'),
    },
    {
      text: 'Die Jungen spielen draußen.',
      gloss: T('Los chicos juegan fuera (masculino débil → -n).'),
    },
    {
      text: 'Die Mädchen gehen zur Schule.',
      gloss: T('Las niñas van al colegio (diminutivo sin terminación).'),
    },
    {
      text: 'Die Füchse jagen nachts.',
      gloss: T('Los zorros cazan de noche (masculino en -ch → -e con diéresis).'),
    },
    {
      text: 'Unsere Lehrer sind freundlich.',
      gloss: T('Nuestros profesores son simpáticos (plural sin terminación).'),
    },
    {
      text: 'Die Väter kommen später.',
      gloss: T('Los padres vienen más tarde (plural cero con diéresis).'),
    },
    {
      text: 'Die Busse fahren hier.',
      gloss: T('Los autobuses pasan aquí (masculino préstamo → -e).'),
    },
  ],
  tables: [
    {
      caption: T('Los cinco patrones de plural'),
      head: ['Padrão', 'Terminação', 'Gênero típico', 'Exemplos'],
      rows: [
        ['1', '-e', 'feminino (e alguns masculinos)', 'die Frauen, die Straßen, die Hunde'],
        [
          '2',
          '-n / -en',
          'masculinos fracos e diminutivos',
          'die Menschen, die Kunden, die Mädchen',
        ],
        ['3', '-er', 'masculinos em -ling, -ig, -ich', 'die Füchse, die Könige, die Frühlinge'],
        [
          '4',
          '∅ (nenhuma)',
          'masculinos graves em -er, -el, -en',
          'die Väter, die Lehrer, die Söhne',
        ],
        ['5', '-s', 'masculinos estrangeiros', 'die Busse, die Autos, die Computers'],
      ],
    },
    {
      caption: T('Cuándo aparece la diéresis en el plural'),
      head: ['Singular', 'Plural', 'Diéresis'],
      rows: [
        ['der Mann', 'die Männer', 'sim'],
        ['das Buch', 'die Bücher', 'sim'],
        ['der Baum', 'die Bäume', 'sim'],
        ['die Stadt', 'die Städte', 'sim'],
        ['der Vater', 'die Väter', 'sim'],
        ['die Straße', 'die Straßen', 'não (plural em -e)'],
        ['der Tag', 'die Tage', 'não (plural em -e)'],
        ['der Bus', 'die Busse', 'não (plural em -s)'],
        ['das Mädchen', 'die Mädchen', 'não (diminutivo)'],
        ['der Hund', 'die Hunde', 'não (plural em -e)'],
      ],
    },
  ],
};

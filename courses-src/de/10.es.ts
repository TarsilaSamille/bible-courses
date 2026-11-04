import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('El nominativo'),
  subtitle: T('sujeto y predicativo'),
  section: T('Los casos'),
  body: C(`El nominativo tiene dos funciones. La primera es la de sujeto: el término que concuerda con el verbo en número y persona. ¿Wer kommt? responde quién realiza la acción. En Der Schlüssel steckt im Schloss el nominativo es der Schlüssel, y el dativo im Schloss indica solo dónde.

La segunda función es la de complemento nominal, o predicativo, ligado a verbos que expresan identidad o estado: sein, werden, bleiben, heißen, scheinen. Esos verbos admiten dos nominativos: Er ist Arzt, Er heißt Peter, Sie wird Lehrerin. Cuando la cualidad es un adjetivo, el complemento ya no es nominativo, sino un predicativo sin caso: Er ist ein guter Arzt.

Observa la diferencia entre los dos modelos. Con sustantivo, el caso se flexiona junto a él: Er ist der Arzt (identidad, con artículo definido). Con adjetivo más sustantivo, es la construcción de calidad: Er ist ein guter Arzt. El primero identifica, el segundo caracteriza. La distinción existe también en portugués, pero el alemán conserva la marca morfológica: der Arzt es nominativo, y ein guter Arzt también.

El nominativo puede aparecer además detrás de un verbo de movimiento o de un impersonal: Es regnet (llueve), Es sind zehn Leute gekommen (impersonal con sentido existencial), Mir ist kalt. En esos casos es no es un sujeto verdadero: es un sujeto vacío que ocupa la posición y deja la información al dativo o al resto de la oración.

Por último, existe un segundo nominativo en construcciones como Er ist Arzt und Lehrer, con el singular valiendo por el plural: Die Kinder sind Schüler. Esa concordancia existe porque toda la oración es el sujeto, y lo que se flexiona es el verbo.`),
  vocab: [
    V('der Nominativ', 'Nominativ', 'el nominativo'),
    V('das Subjekt', 'Subjekt', 'el sujeto'),
    V('das Prädikat', 'Prädikat', 'el predicado'),
    V('sein', 'sein', 'ser'),
    V('werden', 'werden', 'become, quedarse'),
    V('heißen', 'heißen', 'llamarse'),
    V('bleiben', 'bleiben', 'quedarse, permanecer'),
    V('scheinen', 'scheinen', 'parecer'),
    V('das Wetter', 'Wetter', 'el tiempo (atmosfera)'),
    V('es regnen', 'regnen', 'llover'),
    V('mir sein', 'sein', 'ser impersonal (dativo)'),
    V('der Arzt', 'Arzt', 'el médico'),
    V('die Lehrerin', 'Lehrerin', 'la profesora'),
    V('ein guter Arzt', 'gut', 'un buen médico (calidad)'),
    V('es sein', 'sein', 'haber (impersonal existencial)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En «Er ist der Arzt», ¿cuál es la función de der Arzt?'),
    options: [T('solo sujeto'), T('complemento del nominativo'), T('objeto directo'), T('dativo')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el sujeto: ___ Kinder spielen.'),
      answer: 'Die',
      hint: T('En plural el artículo es siempre die.'),
    },
    {
      kind: 'fill',
      prompt: T('Da el verbo para «die Kinder»: die Kinder ___ (jugar).'),
      answer: 'spielen',
      hint: T('El plural termina siempre en -n.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué frase flexiona el adjetivo?'),
      options: [
        T('Er ist ein guter Arzt.'),
        T('Der gute Arzt kommt.'),
        T('Er ist gut.'),
        T('Er bleibt gut.'),
      ],
      answer: 1,
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su función.'),
      pairs: [
        { a: T('heißen'), b: T('llamarse') },
        { a: T('werden'), b: T('become') },
        { a: T('scheinen'), b: T('parecer') },
      ],
      answer: ['a', 'a', 'a'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El sujeto concuerda con el verbo en número: Das Kind spielt, die Kinder spielen. Si el sujeto está en plural, el verbo necesariamente pasa a -n.',
      ),
    },
    {
      n: '2',
      text: T(
        'Con sein, werden, bleiben, heißen y scheinen el sustantivo que completa la oración es nominativo, no acusativo.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cuando el complemento de identidad es un adjetivo, ese adjetivo no se flexiona: Er ist ein guter Arzt, pero Der gute Arzt kommt.',
      ),
    },
    {
      n: '4',
      text: T(
        'El es impersonal solo es realmente vacío cuando está presente: Heute wird es kalt — en Die Temperatur ist niedrig el sustantivo ocupa su lugar.',
      ),
    },
  ],
  notes: [
    {
      label: T('El sujeto vacío'),
      text: T(
        'En Es regnet el es no designa nada. Existe porque el alemán exige un elemento en primera posición y porque el verbo necesita un sujeto explícito. Todo verbo impersonal del clima y de las sensaciones (es regnet, es friert, mir ist warm) sigue ese molde, y por eso se puede invertir: ¿Regnet es? = ¿está lloviendo?',
      ),
    },
    {
      label: T('Vínculo bíblico'),
      text: T(
        'En Juan 1:1, das Wort war bei Gott. Observa la construcción war bei: en lugar de neben (que exigiría dativo), el verbo ser recibe un dativo, y por eso el sustantivo bei Gott no es genitivo. El caso lo marca la preposición, nunca el sustantivo.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Schlüssel steckt im Schloss.',
      gloss: T('La llave está en la cerradura (nominativo + dativo).'),
    },
    { text: 'Kommt der Mann?', gloss: T('¿Viene el hombre? (sujeto pospuesto).') },
    { text: 'Er ist der Arzt.', gloss: T('Él es el médico (identidad, dos nominativos).') },
    {
      text: 'Er ist ein guter Arzt.',
      gloss: T('Él es un buen médico (calidad, predicado sin caso).'),
    },
    {
      text: 'Sie heißt Anna und ist Studentin.',
      gloss: T('Se llama Anna y es estudiante (dos nominativos).'),
    },
    { text: 'Es regnet seit gestern.', gloss: T('Llueve desde ayer (es = sujeto vacío).') },
    {
      text: 'Es sind zwölf Leute gekommen.',
      gloss: T('Han venido doce personas (es impersonal existencial).'),
    },
    { text: 'Mir ist kalt.', gloss: T('Tengo frío (impersonal con dativo).') },
    {
      text: 'Die Kinder sind Schüler.',
      gloss: T('Los niños son estudiantes (singular en plural).'),
    },
  ],
  tables: [
    {
      caption: T('Nominativo como sujeto y como predicado'),
      head: ['Função', 'Estrutura', 'Exemplo', 'O que marca'],
      rows: [
        ['sujeito', 'N + verbo', 'Der Mann kommt.', 'concordância com o verbo'],
        ['sujeito posposto', 'verbo + N', 'Kommt der Mann?', 'verbo na primeira posição'],
        ['complemento de identidade', 'sein + N', 'Er ist der Arzt.', 'dois nominativos'],
        [
          'complemento de qualidade',
          'sein + adj + N',
          'Er ist ein guter Arzt.',
          'predicado sem caso',
        ],
        ['atribuição nominal', 'heißen + N', 'Sie heißt Anna.', 'dois nominativos'],
        ['tornar-se', 'werden + N', 'Sie wird Ärztin.', 'dois nominativos'],
        ['impessoal', 'es + verbo', 'Es regnet.', 'sujeito vazio'],
        ['impessoal existencial', 'es + sein + N', 'Es sind zehn Leute da.', 'sujeito vazio'],
      ],
    },
    {
      caption: T('Verbos que admiten dos nominativos'),
      head: ['Verbo', 'Significado', 'Frase'],
      rows: [
        ['sein', 'ser, estar', 'Das Buch ist ein Geschenk.'],
        ['werden', 'tornar-se', 'Er wird Lehrer.'],
        ['bleiben', 'ficar, permanecer', 'Er bleibt mein Freund.'],
        ['heißen', 'chamar-se', 'Der Berg heißt Brocken.'],
        ['scheinen', 'parecer', 'Sie scheint krank zu sein.'],
        ['werden', 'virar (algo)', 'Es wurde Abend.'],
      ],
    },
  ],
};

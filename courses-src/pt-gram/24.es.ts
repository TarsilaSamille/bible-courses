import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  section: T('El sentido y la subordinación'),
  title: T('Figuras de lenguaje'),
  subtitle: T('Comparación, sustitución y efecto expresivo'),
  body: C(`**Visión general.** La {metáfora} transfiere el sentido sin marca de comparación, y la {comparación} lo marca: en {Yo soy la vid} no hay {como}; en {Él es como un ángel} lo hay.

**Regla 1.** La {metonimia} sustituye un término por otro ligado por relación y no por semejanza: en {la corona de José}, {corona} vale por {rey}, que es quien la lleva.

**Regla 2.** La {hipérbole} amplifica más allá de lo posible y el {eufemismo} atenúa: en {murieron de hambre}, la primera; en {pasó de esta vida}, el segundo.

**Regla 3.** La {ironía} dice lo contrario de lo que piensa, y la {personificación} da acción humana a lo que no es humano: en {el viento aullaba}, la segunda.

**Regla 4.** La {antítesis} pone al lado lo que se opone, y es la figura más explícita del texto bíblico: en {El amor es paciente; el amor, no}, la oposición está escrita.

**Aplicación.** En {Yo soy la vid, y vosotros los racimos}, la metáfora es explícita en la imagen e implícita en la marca: el verbo {ser} mantiene la comparación, y por eso la oración puede convertirse en {Él es como la vid} sin perder el sentido. En {Esto es mi cuerpo}, el griego (τοῦτό ἐστιν τὸ σῶμά μου) usa verbo de identidad y no de comparación, lo que hace obligatoria la lectura **sacramental** y no una metáfora.

**Verificación.** Para cada figura, pregunta: ¿el verbo es {ser} o {parecer}? Si es {ser} con imagen, es **metáfora**; si hay {como}, es **comparación**. ¿La asociación es de {semejanza} o de {relación}? Y ¿la fuerza es de {intensificar}, de {suavizar} o de {contrastar}? Tres preguntas dicen qué hacer con la traducción, y la última decide si el griego puede volverse comparación en portugués.`),
  vocab: [
    V('metáfora', 'metáfora', 'comparación sin {como}'),
    V('comparação', 'comparação', 'comparación con {como}'),
    V('metonímia', 'metonímia', 'sustitución por relación'),
    V('hipérbole', 'hipérbole', 'ampliación más allá de lo real'),
    V('eufemismo', 'eufemismo', 'suavización del término duro'),
    V('ironia', 'ironia', 'decir lo contrario de lo que se piensa'),
    V('personificação', 'personificação', 'acción humana en lo no humano'),
    V('antítese', 'antítese', 'oposición escrita lado a lado'),
    V('a videira', 'a videira', 'imagen del texto de Juan 15'),
    V('οὐδείς', 'οὐδείς', 'hipérbole griega de la negación'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'La {metáfora} transfiere el sentido sin marca de comparación, y la {comparación} lo marca: en {Yo soy la vid} no hay {como}; en {Él es como un ángel} lo hay.',
      ),
    },
    {
      n: '§2',
      text: T(
        'La {metonimia} sustituye un término por otro ligado por relación y no por semejanza: en {la corona de José}, {corona} vale por {rey}, que es quien la lleva.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {hipérbole} amplifica más allá de lo posible y el {eufemismo} atenúa: en {murieron de hambre}, la primera; en {pasó de esta vida}, el segundo.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La {ironía} dice lo contrario de lo que piensa, y la {personificación} da acción humana a lo que no es humano: en {el viento aullaba}, la segunda.',
      ),
    },
    {
      n: '§5',
      text: T(
        'La {antítesis} pone al lado lo que se opone, y es la figura más explícita del texto bíblico: en {El amor es paciente; el amor, no}, la oposición está escrita.',
      ),
    },
  ],
  notes: [
    {
      label: T('La metáfora que el griego no marca'),
      text: T(
        'El griego antiguo apenas usa {como} en comparaciones, y por eso la lectura griega es más compacta que la portuguesa. El portugués introdujo el {como}, y con él la posibilidad de leer la oración como comparación explícita. Traducir {οἶδα ὅσον} por {sé como} añade una marca que el griego no tenía, y por eso la traducción a veces crea una metáfora nueva y a veces conserva la antigua.',
      ),
    },
    {
      label: T('La hipérbole que el griego usa más'),
      text: T(
        'En {οὐδεὶς ἄνθρωπος}, {ningún hombre}, el griego une el negativo {οὐδείς} a una expresión absoluta, y el resultado es más fuerte que cualquier portugués corriente. En griego la negación intensifica; en portugués la doble negación {no es posible que nadie} suena más débil. Es una hipérbole que solo hace la lengua de origen.',
      ),
    },
  ],
  examples: [
    {
      text: 'Eu sou a videira, e vós os ramos',
      gloss: T('Metáfora: {la vid} sustituye a {Dios} sin {como} en medio.'),
    },
    {
      text: 'Ele é como um anjo',
      gloss: T('Comparación explícita: el {como} marca la transferencia de sentido.'),
    },
    {
      text: 'a coroa de José',
      gloss: T('Metonimia: {corona} vale por {rey}, que es quien la lleva.'),
    },
    {
      text: 'morreram de fome no deserto',
      gloss: T(
        'Hipérbole: ningún hombre muere solo de hambre en el desierto, y la imagen refuerza.',
      ),
    },
    { text: 'passou desta vida', gloss: T('Eufemismo: lo que es {murió} aparece como {pasó}.') },
    {
      text: 'o vento uivava',
      gloss: T('Personificación: el {viento} recibe la acción humana de {aullar}.'),
    },
    {
      text: 'O amor é paciente; o amor, não',
      gloss: T('Antítesis: {es paciente} y {no} quedan al lado, y el {es} se repite.'),
    },
    {
      text: 'bendito o que vem em nome do Senhor',
      gloss: T('La frase es literal, y es la forma del texto lo que la hace cita.'),
    },
    {
      text: 'isto é o meu corpo',
      gloss: T('El verbo {es} es de identidad, no de comparación, y la lectura es sacramental.'),
    },
  ],
  tables: [
    {
      caption: T('Figuras de comparación y de sustitución'),
      head: [T('Figura'), T('O que faz'), T('Marca'), T('Exemplo')],
      rows: [
        [T('{metáfora}'), T('transfere sentido'), T('nenhuma'), T('{Eu sou a videira}')],
        [T('{comparação}'), T('compara com {como}'), T('{como}'), T('{Ele é como um anjo}')],
        [T('{metonímia}'), T('troca por relação'), T('nenhuma'), T('{a coroa de José}')],
        [T('{alegoria}'), T('dá um sentido escondido'), T('símbolo'), T('{o bom pastor}')],
        [T('{ironia}'), T('diz o contrário'), T('tom do texto'), T('{ótimo, ottimo}')],
      ],
    },
    {
      caption: T('Figuras de efecto'),
      head: [T('Figura'), T('Força'), T('Efeito'), T('Exemplo')],
      rows: [
        [T('{hipérbole}'), T('amplia'), T('reforça'), T('{ninguém believe}')],
        [T('{eufemismo}'), T('atenua'), T('suaviza'), T('{passou desta vida}')],
        [T('{ironia}'), T('inverte'), T('contradiz'), T('{ótimo, ottimo}')],
        [T('{personificação}'), T('humaniza'), T('dá vida'), T('{o vento uivava}')],
        [T('{apóstrofe}'), T('dirige-se a alguém'), T('chama'), T('{Deus, meu Deus}')],
        [T('{antítese}'), T('opõe'), T('contrasta'), T('{é paciente; o amor, não}')],
      ],
    },
    {
      caption: T('Lo que decide el verbo en la figura'),
      head: [T('Verbo'), T('Com imagem'), T('Com {como}'), T('O que traduzir')],
      rows: [
        [T('{ser}'), T('metáfora'), T('comparação'), T('manter o verbo')],
        [T('{parecer}'), T('sugestão'), T('hipérbole'), T('atenuar')],
        [T('{tornar-se}'), T('transformação'), T('comparação'), T('manter o verbo')],
        [T('{ficar}'), T('resultado'), T('eufemismo'), T('manter o verbo')],
        [T('{chamar}'), T('símbolo'), T('comparação'), T('não traduzir por {como}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {la corona de José}, la figura usada es:'),
    options: [
      T('metonimia, porque {corona} sustituye a {rey} por relación'),
      T('metáfora, porque {corona} es una imagen de {rey}'),
      T('hipérbole, porque {corona} es mayor que el rey'),
      T('eufemismo, porque {corona} evita decir {rey}'),
    ],
    answer: 0,
    hint: T('La metonimia es relación, no semejanza: quien lleva la corona es el rey.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {Él es como un ángel}, hay:'),
      options: [
        T('comparación explícita, marcada por {como}'),
        T('metáfora, porque no hay verbo {ser}'),
        T('hipérbole, porque el ángel es mayor que el hombre'),
        T('metonimia, porque {ángel} designa a Dios'),
      ],
      answer: 0,
      hint: T('El {como} es la marca que distingue comparación de metáfora.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona cada figura con lo que hace.'),
      pairs: [
        { a: T('{metáfora}'), b: T('transferencia de sentido') },
        { a: T('{metonimia}'), b: T('sustitución por relación') },
        { a: T('{hipérbole}'), b: T('ampliación más allá de lo real') },
        { a: T('{eufemismo}'), b: T('suavización del término') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('La figura que amplía el sentido más allá de lo posible es la ______.'),
      answer: 'hipérbole',
      hint: T('En {murieron de hambre}, nadie muere solo de eso.'),
    },
  ],
};

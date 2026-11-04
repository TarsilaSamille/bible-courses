import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  section: T('La flexión de la palabra y la concordancia'),
  title: T('Colocación pronominal'),
  subtitle: T('Proclisis, enclisis y mesoclisis'),
  body: C(`**Visión general.** Hay {proclisis} cuando el pronombre encuentra una palabra que lo atrae por delante: en {no me vea}, el {no} atrae al {me} ante el verbo.

**Regla 1.** En los demás casos el pronombre va detrás del verbo, lo que se llama {enclisis}: en {habla-me}, {vio-lo}, el pronombre queda pegado al verbo.

**Regla 2.** La {mesoclisis} aparece cuando el infinitivo y el auxiliar forman locución: en {dir-me-ás}, el pronombre queda entre los dos, y el verbo es la locución entera.

**Regla 3.** La palabra que atrae es siempre {negativa}, {interrogativa}, {relativa}, {conjunción} o pronombre: en {Quién me vio}, {me} es atraído por causa de {quién}.

**Regla 4.** El griego resuelve la misma frase por {enclisis} y por la terminación del verbo: en {κλαίω} el pronombre no aparece, y la forma verbal ya dice la persona.

**Aplicación.** En {Jesus amou-o}, el pronombre {o} está en **enclisis** y es objeto directo de {amou}. En {no me vio}, el mismo pronombre está en **proclisis** por causa del {no}. En el griego original, el pronombre es **enclítico** y se pega a la primera palabra acentuada de la frase, que no siempre es el verbo, y por eso la posición en portugués rara vez coincide con la griega.

**Verificación.** Pregunta cuatro cosas, en este orden. ¿Hay **negación**, **interrogación** o **conjunción** antes del verbo? ¿Hay otro pronombre, como con {me} y {te} juntos? ¿El verbo es de los de **enclisis obligatoria**? Si la respuesta es no a las tres y el verbo es un auxiliar de futuro, la {mesoclisis} es posible. En cualquier caso, la posición no es libre: la decide la estructura, no la fluidez.`),
  vocab: [
    V('próclise', 'próclise', 'pronombre antes del verbo'),
    V('ênclise', 'ênclise', 'pronombre después del verbo'),
    V('mesóclise', 'mesóclise', 'pronombre entre infinitivo y auxiliar'),
    V('pronome oblíquo', 'pronome oblíquo', 'forma átona de objeto'),
    V('não', 'não', 'palabra que atrae la proclisis'),
    V('se', 'se', 'palabra que atrae la proclisis'),
    V('amar-te-ei', 'amar-te-ei', 'mesoclisis en el futuro de indicativo'),
    V('dizer-me', 'dizer-me', 'mesoclisis en el infinitivo'),
    V('fala-me', 'fala-me', 'enclisis en verbo simple'),
    V('palavra atrativa', 'palavra atrativa', 'palabra que provoca proclisis'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Hay {proclisis} cuando el pronombre encuentra una palabra que lo atrae por delante: en {no me vea}, el {no} atrae al {me} ante el verbo.',
      ),
    },
    {
      n: '§2',
      text: T(
        'En los demás casos el pronombre va detrás del verbo, lo que se llama {enclisis}: en {habla-me}, {vio-lo}, el pronombre queda pegado al verbo.',
      ),
    },
    {
      n: '§3',
      text: T(
        'La {mesoclisis} aparece cuando el infinitivo y el auxiliar forman locución: en {dir-me-ás}, el pronombre queda entre los dos, y el verbo es la locución entera.',
      ),
    },
    {
      n: '§4',
      text: T(
        'La palabra que atrae es siempre {negativa}, {interrogativa}, {relativa}, {conjunción} o pronombre: en {Quién me vio}, {me} es atraído por causa de {quién}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'El griego resuelve la misma frase por {enclisis} y por la terminación del verbo: en {κλαίω} el pronombre no aparece, y la forma verbal ya dice la persona.',
      ),
    },
  ],
  notes: [
    {
      label: T('Donde griego y portugués discrepan'),
      text: T(
        'En {Jesus amou-o}, el portugués pone el pronombre detrás del verbo; el griego antiguo {ἠγάπησεν αὐτόν} también, pero la posición griega es la de la última palabra acentuada de la frase. Resultado: en varias oraciones el griego y el portugués divergen, y no por error de ninguno, sino porque las dos lenguas fijaron reglas distintas para el mismo problema.',
      ),
    },
    {
      label: T('La forma que el griego prescinde'),
      text: T(
        'El griego antiguo tiene pronombre reflexivo {ἑαυτοῦ} y oblicuo {αὐτοῦ}, pero los usa poco: la terminación del verbo ya marca la persona, y el pronombre aparece solo cuando la oración es ambigua. El portugués no tiene esa economía, y por eso la colocación pronominal es una discusión larga en la que cada excepción nueva nace del texto bíblico.',
      ),
    },
  ],
  examples: [
    { text: 'Jesus amou-o', gloss: T('Enclisis: el pronombre {o} va después del verbo {amou}.') },
    { text: 'não me viu', gloss: T('Proclisis: el {no} atrae al {me} ante el verbo {vio}.') },
    {
      text: 'Quem me viu?',
      gloss: T('Pronombre {me} en proclisis por causa del pronombre interrogativo {Quién}.'),
    },
    {
      text: 'dir-me-ás',
      gloss: T('Mesoclisis: el pronombre queda entre el infinitivo {dir} y el auxiliar {ás}.'),
    },
    {
      text: 'amá-lo-emos',
      gloss: T('Mesoclisis con infinitivo y auxiliar {emos} formando un solo verbo.'),
    },
    {
      text: 'falar-me',
      gloss: T('Mesoclisis con auxiliar {ar}: el pronombre queda entre {fal} y {ar}.'),
    },
    {
      text: 'não se diga',
      gloss: T(
        'La {se} de cliticización no provoca proclisis: el {no} atrae al pronombre, {se} se queda.',
      ),
    },
    {
      text: 'dou-lhes a lei',
      gloss: T('Enclisis con pronombre {les}; el orden indirecto y directo sigue el régimen.'),
    },
    {
      text: 'Jesus, que me ama, deu-me',
      gloss: T(
        'La oración adjetiva trae el {que} que atrae, y {me} queda proclítico incluso en forma clítica.',
      ),
    },
  ],
  tables: [
    {
      caption: T('Palabras que provocan proclisis'),
      head: [T('Tipo'), T('Palavras'), T('Exemplo')],
      rows: [
        [T('negativas'), T('{não}, {nem}, {nunca}, {jamás}'), T('{não me veja}')],
        [T('interrogativas'), T('{quem}, {que}, {qual}'), T('{Quem me viu}')],
        [T('relativas'), T('{que}, {o qual}'), T('{a lei que me deram}')],
        [T('conjunções'), T('{que}, {se}, {como}'), T('{Sei que ele sabe}')],
        [T('pronomes'), T('{me}, {te}, {nos}, {vos}'), T('{me diz que sim}')],
        [T('indefinidos'), T('{alguém}, {alguma coisa}'), T('{Alguém me viu}')],
        [T('virtuais'), T('{e}, {mas}, {nem}'), T('{E me chamaram}')],
        [T('pronome relativo'), T('{quem}, {que}'), T('{Quem me ouvir, seu é}')],
      ],
    },
    {
      caption: T('Las tres posiciones del pronombre'),
      head: [T('Posição'), T('Onde fica'), T('Quando'), T('Exemplo')],
      rows: [
        [T('{próclise}'), T('antes do verbo'), T('com palavra atrativa'), T('{não me veja}')],
        [T('{ênclise}'), T('depois do verbo'), T('sem atrativa'), T('{fala-me}')],
        [
          T('{mesóclise}'),
          T('entre infinitivo e auxiliar'),
          T('com locução verbal'),
          T('{dir-me-ás}'),
        ],
      ],
    },
    {
      caption: T('Enclisis y mesoclisis por tiempo verbal'),
      head: [T('Tempo'), T('Forma simples'), T('Com auxiliar'), T('Posição')],
      rows: [
        [T('presente'), T('{fala}'), T('{está falando}'), T('ênclise')],
        [T('pretérito'), T('{falou}'), T('{havia falado}'), T('ênclise')],
        [T('futuro'), T('{falará}'), T('{dir-me-ás}'), T('mesóclise possível')],
        [T('infinitivo'), T('{falar}'), T('{dizer-me}'), T('mesóclise')],
        [T('gerúndio'), T('{falando}'), T('{estou falando}'), T('ênclise')],
        [T('particípio'), T('{falado}'), T('{tendo falado}'), T('ênclise')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {no me vio}, el pronombre {me} está en proclisis por causa de:'),
    options: [
      T('del {no}, que es palabra que atrae'),
      T('de la persona de {me}'),
      T('del verbo {vio}'),
      T('de la forma de {me}, que es átona'),
    ],
    answer: 0,
    hint: T('Quita el {no} y {me} pasa a enclisis: {vio-me}.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('En {dir-me-ás}, hay mesoclisis porque:'),
      options: [
        T('el infinitivo {dir} y el auxiliar {ás} forman una locución verbal'),
        T('el pronombre {me} es del tipo que gusta de la mesoclisis'),
        T('{dir} es verbo de movimiento y {ás} es el auxiliar'),
        T('la oración tiene negación que empuja al pronombre'),
      ],
      answer: 0,
      hint: T('Contados por separado, {dir} y {ás} son dos verbos; juntos, uno.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona la oración con la posición del pronombre.'),
      pairs: [
        { a: T('{no me vea}'), b: T('{proclisis}') },
        { a: T('{habla-me}'), b: T('{enclisis}') },
        { a: T('{dir-me-ás}'), b: T('{mesoclisis}') },
        { a: T('{Quién me vio}'), b: T('{proclisis} por pronombre') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('El pronombre que queda entre el infinitivo y el auxiliar está en ______.'),
      answer: 'mesóclise',
      hint: T('En {dir-me-ás}, el {me} queda en medio del verbo.'),
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 25,
  title: T('La partícula de posesión y sus vecinas'),
  subtitle: T('لِـ، وَ، بَيْنَ، ضِدّ، دُونَ، عِنْدَ، نَحْوَ'),
  section: T('Partículas'),
  body: C(`## La partícula que hace tres cosas

{لِـ} es la partícula más flexible del sistema, y conviene separarla en tres usos antes de mirar las demás. Con un sustantivo es de posesión: {لَهُ} significa "de él" y también "él tiene". Con un sustantivo que nombra a una persona es de destino: {لَكَ} es "para ti".

El tercer uso es el que le importa a quien lee. **{لِـ} más un nombre verbal indica finalidad.** {لِشُكْرِكَ} es "para agradecerte", {لِقَوْلِهِ} es "para decir". El español resuelve esto con "para" más un infinitivo, y el árabe con una partícula más un sustantivo, y por eso esas formas aparecen tanto en el texto bíblico.

El uso de posesión tiene una forma abreviada que es el origen de todos los pronombresPEGados. Donde el sustantivo está escrito, la cláusula dice {كِتَابُ لَهُ}; donde no lo está, dice solo {كِتَابُهُ}, y {لَهُ} se ha vuelto sufijo. Quien ve {رَأْسُهُ} está viendo un sustantivo sin sustantivo dentro.

## بَيْنَ, ضِدّ, دُونَ, عِنْدَ, نَحْوَ

Las cinco vecinas hacen un trabajo más especial, y cada una tiene el complemento que la define.

{بَيْنَ} es "entre", y el complemento es un lugar o un grupo. Su construcción más famosa es {بَيْنَ يَدَيْهِ}, que significa literalmente "entre sus dos manos" y se traduce "delante de él": las manos son lo que está delante. {بَيْنَكُمْ} significa "entre vosotros", y {مِنْ بَيْنِكُمْ} significa "de entre vosotros".

{ضِدّ} es "contra", y exige una persona o una fuerza: {ضَدَّ الظَّالِمِينَ}. {دُونَ} fija un límite y no una separación: {دُونَ أَبَاءٍ} es literalmente "bajo padres" y vale "sin padres". La diferencia entre {مِنْ} y {دُونَ} es la diferencia entre cortar y medir.

{عِنْدَ} es "junto a" y, cuando el complemento es un precio, se vuelve "por": {عِنْدَ دِينَارِ} es "por un dinar". {نَحْوَ} es "hacia" cuando el complemento es un lugar y "cerca de" cuando es un número: {نَحْوَ سِتَّةِ}.

## {وَ} no es una partícula

{وَ} es conjunción, y la diferencia no es el nombre sino la función. Una partícula rige el caso del sustantivo que viene después; una conjunción no rige nada. {وَ} une palabras, une cláusulas y además puede suplir un elemento que se omitió.

En {جَاءَ مُوسَى وَهَارُونُ} la {وَ} une dos sujetos. En {كَانَ الرَّجُلُ فِي الْبَيْتِ وَالْمَرْأَةُ فِي الْبَيْتِ} suple el verbo omitido en la segunda cláusula, y el verbo omitido es {كَانَتْ}. En {وَالْمَلَكُ وَالْقَارِنُ} retoma lo que estaba sobreentendido.

Y junto a ella viven tres partículas que se le parecen y no tienen nada que ver: {بِـ}, {لِـ} y {كَـ}. Las tres unen un verbo a un sustantivo, las tres rigen el genitivo y las tres tienen una forma que solo aparece en el habla. {وَ} no une ningún verbo a ningún sustantivo: une sustantivo con sustantivo.

## Criterio de lectura

En {لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ} hay una partícula, dos preposiciones y una conjunción, y las cuatro hacen trabajos distintos. {لَهُ} es posesión o destino, y la terminación {ـُ} muestra que el sustantivo que viene detrás está en genitivo por causa de la partícula. {فِي} y {مَا} se repiten, y la repetición es lo que produce el paralelismo. {وَ} une las dos mitades y no se traduce por nada en español además de la "y" que ya está dentro de la segunda mitad.

Lo que el lector gana aquí es una costumbre de separar. {وَ} une, {لِـ} posee, {فِي} localiza, {بِـ} instrumenta. Cada una tiene una terminación que la delata, y una frase donde aparecen las cuatro es una frase donde están escritas cuatro relaciones.`),
  vocab: [
    V('لِـ', 'إلى', 'partícula de posesión y de destino'),
    V('لَهُ', 'له', 'de él; él tiene'),
    V('لَكَ', 'لك', 'para ti'),
    V('لِشُكْرِكَ', 'شكر', 'para agradecerte'),
    V('وَ', 'و', 'y; y también'),
    V('بَيْنَ', 'بين', 'entre; en medio de'),
    V('يَدَيْهِ', 'يد', 'sus dos manos'),
    V('ضِدّ', 'ضد', 'contra'),
    V('دُونَ', 'دون', 'sin; por debajo de'),
    V('عِنْدَ', 'عند', 'junto a; en presencia de'),
    V('نَحْوَ', 'نحو', 'hacia; cerca de'),
    V('بِـ', 'في', 'por; instrumento'),
    V('مَعَنَا', 'نحن', 'con nosotros'),
    V('السَّمَاوَات', 'سماوات', 'los cielos'),
    V('مِلَكُوت', 'ملكوت', 'reino'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En {لِشُكْرِكَ}, ¿qué marca {لِـ}?'),
    options: [T('Posesión'), T('Destino'), T('Finalidad'), T('Origen')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa {بَيْنَ ___}: "delante de él" es {بَيْنَ يَدَيْهِ}, y "entre" es {بَيْنَ ___}.'),
      answer: 'يَدَيْهِ',
      hint: T('Son sus dos manos.'),
    },
    {
      kind: 'choose',
      prompt: T('{بَيْنَ يَدَيْهِ} significa...'),
      options: [T('Entre sus dos manos'), T('Sobre él'), T('Contra él'), T('A partir de él')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associe partícula e sentido.'),
      pairs: [
        { a: T('ضِدّ'), b: T('contra') },
        { a: T('دُونَ'), b: T('sin; por debajo') },
        { a: T('عِنْدَ'), b: T('junto a; por un precio') },
        { a: T('نَحْوَ'), b: T('hacia; cerca de') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('¿Cuál es la diferencia entre {وَ} y {لِـ}?'),
      options: [
        T('Ninguna'),
        T('{وَ} es conjunción y {لِـ} es partícula'),
        T('{وَ} es partícula y {لِـ} es conjunción'),
        T('{لِـ} nunca une un verbo a un sustantivo'),
      ],
      answer: 1,
    },
  ],
  rules: [
    { n: '1', text: T('**{لِـ} hace tres cosas: posesión, destino y finalidad.**') },
    { n: '2', text: T('La finalidad es {لِـ} más un nombre verbal: {لِقَوْلِهِ}, "para decir".') },
    { n: '3', text: T('{عِنْدَ} con un precio significa "por": {عِنْدَ دِينَارِ}, "por un dinar".') },
    { n: '4', text: T('{بَيْنَ} con {يَدَ} significa "delante": {بَيْنَ يَدَيْهِ}.') },
    {
      n: '5',
      text: T(
        '{وَ} es conjunción y no rige caso; las partículas {بِـ}, {لِـ} y {كَـ} unen un verbo a un sustantivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('La partícula que se volvió sufijo'),
      text: T(
        'La {لِـ} del genitivo es la marca de posesión: {كِتَابُ لَهُ} es la forma larga y {كِتَابُهُ} la corta. Donde aparece el sustantivo aparece la partícula; donde desaparece el sustantivo, queda solo el sufijo.',
      ),
    },
    {
      label: T('Por qué {دُونَ} no es como {مِنْ}'),
      text: T(
        '{مِنْ} separa y {دُونَ} mide. {دُونَ أَبَاءٍ} es literalmente "bajo padres", y el límite es lo que da el sentido de "sin". Cambiar las dos produce una frase que sigue siendo comprensible y no es la que dijo el texto.',
      ),
    },
  ],
  examples: [
    { text: 'لَهُ', gloss: T('de él; él tiene') },
    { text: 'لَكَ', gloss: T('para ti') },
    { text: 'لِشُكْرِكَ', gloss: T('para agradecerte') },
    { text: 'بَيْنَ يَدَيْهِ', gloss: T('entre sus dos manos; delante de él') },
    { text: 'ضَدَّ الظَّالِمِينَ', gloss: T('contra los opresores') },
    { text: 'دُونَ أَبَاءٍ', gloss: T('sin padres; por debajo de padres') },
    { text: 'عِنْدَ اللهِ', gloss: T('junto a Dios; en su presencia') },
    { text: 'نَحْوَ سِتَّةِ', gloss: T('cerca de seis') },
    { text: 'مَعَنَا', gloss: T('con nosotros') },
  ],
  tables: [
    {
      caption: T('{لِـ} y sus tres usos'),
      head: [T('Uso'), T('Complemento'), T('Ejemplo'), T('Glosa')],
      rows: [
        [T('posesión'), T('un sustantivo'), 'لَهُ', T('de él; él tiene')],
        [T('destino'), T('un sustantivo o una persona'), 'لَكَ', T('para ti')],
        [T('finalidad'), T('un nombre verbal'), 'لِشُكْرِكَ', T('para agradecerte')],
        [T('comparación'), T('un sustantivo'), 'مَثْلِي', T('como yo')],
      ],
    },
    {
      caption: T('Las cinco vecinas'),
      head: [T('Partícula'), T('Glosa'), T('Complemento típico'), T('Ejemplo')],
      rows: [
        ['بَيْنَ', T('entre; en medio de'), T('un lugar o un grupo'), 'بَيْنَ يَدَيْهِ'],
        ['ضِدّ', T('contra'), T('una persona o una fuerza'), 'ضَدَّ الظَّالِمِينَ'],
        ['دُونَ', T('sin; por debajo'), T('un límite'), 'دُونَ أَبَاءٍ'],
        ['عِنْدَ', T('junto a'), T('una persona, un lugar o un precio'), 'عِنْدَ دِينَارِ'],
        ['نَحْوَ', T('hacia; cerca de'), T('un lugar o un número'), 'نَحْوَ سِتَّةِ'],
      ],
    },
    {
      caption: T('Unión y regencia'),
      head: [T('Forma'), T('Función'), T('Qué une'), T('Ejemplo')],
      rows: [
        [
          'وَ',
          T('conjunción; no rige nada'),
          T('sustantivo con sustantivo, cláusula con cláusula'),
          'مُوسَى وَهَارُونُ',
        ],
        ['بـ', T('partícula; rige el genitivo'), T('verbo con sustantivo'), 'بِالْقُوَّةِ'],
        ['لـ', T('partícula; rige el genitivo'), T('verbo con sustantivo'), 'لِشُكْرِكَ'],
        ['كـ', T('partícula; rige el genitivo'), T('verbo con sustantivo'), 'كَمَثْلِهِ'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  section: T('El verbo'),
  title: T('Los verbos esenciales'),
  subtitle: T('{go}, {come}, {be}, {have}, {do}, {say} y los catorce que resuelven casi todo'),
  body: C(`## Veinte verbos, tres columnas cada uno

Un verbo regular tiene una sola regla: en pasado recibe {-ed}, y eso es todo. {work}, {worked}, {worked}; {love}, {loved}, {loved}; {open}, {opened}, {opened}. El irregular rompe la regla en las dos columnas a la vez, y por eso {eat}, {ate}, {eaten} no se deduce de nada.

El número es pequeño y el peso es grande. {be}, {have}, {do}, {go}, {come}, {say}, {get}, {make}, {know}, {think}, {take}, {see}, {give}, {find}, {tell}, {become}, {leave}, {feel}, {put} y {bring} cubren más de la mitad de los verbos que aparecen en un capítulo de Evangelio en inglés. Quien conoce los veinte reconoce el resto por contexto, aunque no sepa la forma.

Lo que cambia de una lengua a otra es lo que se guarda. El portugués guarda el infinitivo, el pretérito y el participio, y casi todos los irregulares usan la misma raíz en los tres: {falei}, {falado}, {parti}, {partido}, {vi}, {visto}. El inglés guarda el presente, el pasado y el participio, y en los irregulares el pasado y el participio suelen ser **dos palabras distintas**: {go}, {went}, {gone}; {eat}, {ate}, {eaten}; {see}, {saw}, {seen}.

## {Be}: el verbo que no tiene forma fija

{Be} es el único verbo inglés que cambia de forma en el presente según la persona: {I am}, {you are}, {he is}, {we are}, {they are}. El portugués resuelve lo mismo con {sou}, {és}, {é}, {somos}, {são}, y el griego con {εἰμί}, que es una forma sola para todas las personas. Tres soluciones al mismo problema, y el inglés es el único que repite la palabra.

En pasado son dos: {I was}, {he was}, {they were}. En participio, una: {been}, más el gerundio {being}. Cinco formas para un verbo, y ninguna se parece a las del presente: {am}, {is}, {are}, {was}, {were}, {been}, {being}.

El error que provoca el texto bíblico es {be} contra {become}. Juan 1:14 dice {the Word became flesh}, y el griego es {ὁ λόγος σὰρξ ἐγένετο}, aoristo de {γίνομαι}, que es {become}. Traducir por {was} conserva la forma simple y borra el verbo que dice que algo pasó a existir. {Was} y {became} no son sinónimos en inglés, aunque la regla del portugués los haga parecerlo.

## Dos columnas, y no una

El pasado y el participio de los irregulares son **dos columnas separadas**, y no siempre coinciden. Cuando coinciden, la misma palabra sirve en los dos tiempos: {come}, {came}, {come}; {do}, {did}, {done}; {say}, {said}, {said}. Cuando no coinciden, son dos palabras: {write}, {wrote}, {written}; {break}, {broke}, {broken}; {choose}, {chose}, {chosen}; {sing}, {sang}, {sung}.

Es la columna del participio la que el lector casi nunca tiene a mano. En {has eaten}, {gone}, {written}, {seen} y {taken}, los pasados {ate}, {went}, {wrote}, {saw} y {took} son más conocidos, y quien los cambia de sitio escribe {has ate}, {has went}, {has saw}. El participio gobierna los tiempos compuestos y es lo que más aparece en el texto.

## {Say}, {tell}, {speak}, {talk}: cuatro verbos que el portugués junta en dos

{say} es lo que se dice con palabras, {tell} es lo que se dice a alguien: {he said} y {he told Mary}. {speak} es el acto de hablar, y {talk} es la conversación, que puede ser entre dos personas o con la propia lengua: {he spoke to the crowd}, {he talked with her}.

{say} y {tell} son la pareja que {falar} y {dizer} forman en portugués, pero invertida: en portugués {dizer} sirve para los dos ({disse} y {contou}), y en inglés son dos verbos. En el texto bíblico esto aparece en Marcos 1:30, donde {told} y {said} traducen el mismo verbo griego, {ἀπήγγειλαν}, y la traducción tiene que elegir.

## En la Biblia

KJV es la traducción que más sufre de esa elección, porque usa una palabra inglesa para cada verbo griego. Marcos 4:39 trae {Peace, be still}, y el griego es {Σιωπήσον καὶ γαλάσσου}; en Juan 1:1, {In the beginning was the Word} trae {was} por {ἦν}; en Juan 1:14, {the Word became flesh} trae {became} por {ἐγένετο}. Tres verbos griegos distintos, tres palabras inglesas distintas, y esa correspondencia es lo que el lector tiene que ver.`),
  vocab: [
    V('be', 'be', 'ser / estar'),
    V('am', 'be', 'yo soy'),
    V('is', 'be', 'él es'),
    V('were', 'be', 'nosotros éramos'),
    V('been', 'be', 'sido'),
    V('being', 'be', 'estando'),
    V('go', 'go', 'ir'),
    V('went', 'go', 'fue'),
    V('gone', 'go', 'ido'),
    V('come', 'come', 'venir'),
    V('came', 'come', 'vino'),
    V('have', 'have', 'tener'),
    V('has', 'have', 'él tiene'),
    V('had', 'have', 'él tenía'),
    V('do', 'do', 'hacer'),
    V('did', 'do', 'hizo'),
    V('done', 'do', 'hecho'),
    V('say', 'say', 'decir'),
    V('eat', 'eat', 'comer'),
    V('ate', 'eat', 'comió'),
    V('eaten', 'eat', 'comido'),
    V('was', 'be', 'él era'),
    V('became', 'become', 'se volvió'),
    V('tell', 'tell', 'contar a alguien'),
    V('told', 'tell', 'contó'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'En los irregulares el pasado y el participio son dos columnas y no siempre la misma palabra: {go}, {went}, {gone}; {eat}, {ate}, {eaten}; {write}, {wrote}, {written}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{be} tiene siete formas: {am}, {is}, {are}, {was}, {were}, {been}, {being}. Ningún otro verbo inglés cambia de forma en el presente según la persona.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Después de {does} y {did} el verbo vuelve a la forma base: {he does go}, nunca {he does goes}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Después de un modal el verbo no flexiona: {can go}, {must go}, {will go}, {should go}. {goes} es imposible ahí.',
      ),
    },
    {
      n: '§5',
      text: T(
        'Juan 1:1 trae {was} por {ἦν} y Juan 1:14 trae {became} por {ἐγένετο}. Son verbos griegos distintos y palabras inglesas distintas; {was} y {became} no son sinónimos.',
      ),
    },
  ],
  notes: [
    {
      label: T('El participio que casi nadie tiene a mano'),
      text: T(
        'Los pasados irregulares {ate}, {went}, {wrote}, {saw} y {took} son los más conocidos, y los participios {eaten}, {gone}, {written}, {seen} y {taken} son los que aparecen en los tiempos compuestos. Cambiarlos produce {has ate} y {has went}, que el lector detecta como error aunque no sepa la regla.',
      ),
    },
    {
      label: T('Lo que la KJV pierde'),
      text: T(
        'Marcos 4:39 trae {Peace, be still}, y el griego es {Σιωπήσον καὶ γαλάσσου}, con {σιωπήσον} en imperativo aoristo. La KJV perdió el aoristo y el portugués antiguo también; quien lee el griego sabe que el verbo pide obediencia inmediata y no una atmósfera de calma.',
      ),
    },
  ],
  examples: [
    {
      text: 'In the beginning was the Word.',
      gloss: T('{was}: {be} en pasado, traduciendo {ἦν} del griego.'),
    },
    {
      text: 'And the Word became flesh.',
      gloss: T('{became}: {become}, traduciendo {ἐγένετο}, que es otro verbo griego.'),
    },
    {
      text: 'He has eaten the bread.',
      gloss: T('{has eaten}: presente compuesto con {has} y el participio.'),
    },
    {
      text: 'They have gone to the mountain.',
      gloss: T('{gone} es el participio; el pasado correspondiente sería {went}.'),
    },
    { text: 'Peace, be still!', gloss: T('Imperativo de {be}, Mc 4:39.') },
    { text: 'He told Mary everything.', gloss: T('{told} de {tell}: lo que se dice a alguien.') },
    { text: 'He said nothing.', gloss: T('{said} de {say}: lo que se dice con palabras.') },
    {
      text: 'She does not go there.',
      gloss: T('Después de {does}, el verbo vuelve a la forma base {go}.'),
    },
    {
      text: 'They must go.',
      gloss: T('Después de un modal el verbo no flexiona: {go}, nunca {goes}.'),
    },
    {
      text: 'I have written the letter.',
      gloss: T('{written}: el participio de {write}, y no {wrote}.'),
    },
  ],
  tables: [
    {
      caption: T('Los verbos esenciales en tres columnas'),
      head: [T('Base'), T('Pasado'), T('Participio'), T('Portugués')],
      rows: [
        [T('{be}'), T('{was}'), T('{been}'), T('{ser / estar}')],
        [T('{go}'), T('{went}'), T('{gone}'), T('{ir}')],
        [T('{come}'), T('{came}'), T('{come}'), T('{vir}')],
        [T('{have}'), T('{had}'), T('{had}'), T('{ter}')],
        [T('{do}'), T('{did}'), T('{done}'), T('{fazer}')],
        [T('{say}'), T('{said}'), T('{said}'), T('{dizer}')],
        [T('{see}'), T('{saw}'), T('{seen}'), T('{ver}')],
        [T('{take}'), T('{took}'), T('{taken}'), T('{tomar}')],
        [T('{give}'), T('{gave}'), T('{given}'), T('{dar}')],
        [T('{eat}'), T('{ate}'), T('{eaten}'), T('{comer}')],
        [T('{write}'), T('{wrote}'), T('{written}'), T('{escrever}')],
        [T('{break}'), T('{broke}'), T('{broken}'), T('{quebrar}')],
      ],
    },
    {
      caption: T('{Be} en todas sus formas'),
      head: [T('Tiempo'), T('Forma'), T('Persona'), T('Ejemplo')],
      rows: [
        [T('presente'), T('{am}'), T('{I}'), T('{I am}')],
        [T('presente'), T('{are}'), T('{you / we / they}'), T('{they are}')],
        [T('presente'), T('{is}'), T('{he / she}'), T('{he is}')],
        [T('pasado'), T('{was}'), T('{I / he / she / it}'), T('{he was}')],
        [T('pasado'), T('{were}'), T('{you / we / they}'), T('{they were}')],
        [T('participio'), T('{been}'), T('—'), T('{has been}')],
        [T('gerundio'), T('{being}'), T('—'), T('{is being made}')],
      ],
    },
    {
      caption: T('Cuatro verbos que el portugués junta en dos'),
      head: [T('Verbo'), T('Lo que significa'), T('Oración'), T('Portugués')],
      rows: [
        [T('{say}'), T('decir con palabras'), T('{he said}'), T('{disse}')],
        [T('{tell}'), T('contar a alguien'), T('{he told her}'), T('{contou a ela}')],
        [T('{speak}'), T('hablar, con tono oficial'), T('{he spoke}'), T('{falou}')],
        [T('{talk}'), T('conversar'), T('{he talked}'), T('{conversou}')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('En "they have __ the bread", ¿qué forma de {eat}?'),
    options: [T('eat'), T('ate'), T('eaten'), T('eats')],
    answer: 2,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('El participio de {write} es ______, y el pasado es {wrote}.'),
      answer: 'written',
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su forma en la tercera columna.'),
      pairs: [
        { a: T('{see}'), b: T('{seen}') },
        { a: T('{take}'), b: T('{taken}') },
        { a: T('{go}'), b: T('{gone}') },
        { a: T('{give}'), b: T('{given}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('En "he ___ go every day", ¿qué verbo lo completa correctamente?'),
      options: [T('do'), T('does'), T('did'), T('doing')],
      answer: 1,
    },
  ],
};

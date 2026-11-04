// build-zh.mts — monta o curso de chinês a partir de um fonte legível.
//
// O conteúdo vive em bible-courses/courses/zh.json, que é o que o app carrega
// (contentNode.ts). Escrever esse JSON à mão é ilegível e impossível de revisar;
// este arquivo é o fonte editorial, e o exportador continua sendo quem calcula o
// contentVersion.
//
// Gera apenas se o destino ainda não existir: rodar de novo não sobrescreve
// trabalho humano.
import { existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ALVO = join(import.meta.dir, '..', 'courses', 'zh.json');
// `--force` regenera do zero. Sem ele, um curso que já existe não é
// sobrescrito: conteúdo escrito à mão é mais valioso que o gerador.
const force = process.argv.includes('--force');
if (existsSync(ALVO) && !force) {
  console.log('courses/zh.json já existe — nada escrito (use --force para regenerar).');
  process.exit(0);
}

type Text = { pt: string; en: string; es: string };
type Cell = string | Text;
const t = (pt: string, en: string, es: string): Text => ({ pt, en, es });

/**
 * Corpo da lição, com os três idiomas em template literals ADJACENTES.
 *
 * Não é estilo: durante a escrita deste curso o corpo saiu em português só três
 * vezes, sempre porque o `t(..., ..., ...)` de três argumentos numa chamada de
 * muitas linhas deixa a linha do meio passar despercebida. Com os três textos
 * lado a lado, a falta aparece na leitura. E o validador abaixo já falhava com
 * um crash: agora falha com o nome do campo e da lição.
 */
const corpo = (pt: string, en: string, es: string): Text => ({ pt, en, es });

const v = (form: string, lemma: string, pt: string, en: string, es: string) => ({
  form,
  lemma,
  lang: 'zh',
  pt,
  en,
  es,
});

type Exercise =
  | { kind: 'choose'; prompt: Text; options: Cell[]; answer: number | number[]; hint?: Text }
  | { kind: 'fill'; prompt: Text; answer: string; hint?: Text }
  | { kind: 'match'; prompt: Text; pairs: { a: Cell; b: Cell }[]; answer: number[]; hint?: Text };

type Lesson = {
  id: number;
  section: Text;
  title: Text;
  subtitle: Text;
  body: Text;
  vocab: ReturnType<typeof v>[];
  rules: { n: string; text: Text }[];
  notes: { label: Text; text: Text }[];
  examples: { text: string; gloss: Cell }[];
  tables: { caption: Text; head: Cell[]; rows: Cell[][] }[];
  exercise: Exercise;
  exercises: Exercise[];
};

const lições: Lesson[] = [];
const L = (l: Lesson) => {
  lições.push(l);
};

// ===========================================================================
// 1
// ===========================================================================
L({
  id: 1,
  section: t('Escrita', 'Writing', 'Escritura'),
  title: t(
    'O ideograma é uma palavra, não uma letra',
    'The character is a word, not a letter',
    'El ideograma es una palabra, no una letra',
  ),
  subtitle: t(
    'Nenhum caractere corresponde a um som, e é por isso que o aprendizado vai do desenho para o todo',
    'No character stands for a sound, and that is why learning goes from the shape to the whole',
    'Ningún carácter representa un sonido, y por eso el aprendizaje va de la forma al conjunto',
  ),
  body: corpo(
    `## Um caractere, uma palavra

Em português, {a} é uma letra e {casa} são quatro. Em chinês não existe essa separação: cada caractere vale por uma palavra ou por um pedaço dela. Não há "A" para=a, e por isso ninguém diz que alguém "soletra" em chinês — diz-se {cá} {zi} {xiě}, "compor caracteres".

A consequência é a inversa da do português. Quem reconhece o som de uma palavra inglesa não sabe nada sobre o significado; quem reconhece um caractere chinês já sabe o significado, mesmo sem entender a frase. Por isso um leitor iniciante de {_} {zhōng} {guó} ("China") entende mais num relance do que quem está decorando o alfabeto pinyin.

## Por que os caracteres não parecem um código

Há uma tentação de ler o chinês como um código: cada caractere seria uma letra trocada. Não é. Um caractere é uma **palavra**, e as palavras se combinam como em qualquer língua: {nǐ} {hǎo} são duas palavras ("você é bom"), não três letras.

Os caracteres também não foram inventados de uma vez: {日} e {月} (sol e lua) são os componentes de {明}, "claro". Reconhecer essas combinações é o que faz o vocabulário crescer rápido.

## O que isso significa para a Bíblia

Três coisas. A primeira: a tradução da {和合本} (1919) usou caracteres que já eram usuais na escrita do século XIX, o que torna o texto antigo legível. A segunda: os versículos são {números} {relógio} {livro} — a numereração bíblica é a mesma da ocidental, o que torna a citação fácil. A terceira: como cada caractere é uma palavra, um versículo de João 1 tem cerca de vinte palavras, e dá para aprendê-las uma a uma.`,

    `## One character, one word

In Portuguese, {a} is a letter and {casa} is four of them. In Chinese there is no such split: each character stands for a word or a piece of one. There is no "A" for =a, which is why nobody says someone "spells" in Chinese — one says {cá} {zi} {xiě}, "to compose characters".

The consequence is the reverse of the Portuguese one. Recognising the sound of an English word tells you nothing about its meaning; recognising a Chinese character already tells you the meaning, even without understanding the sentence. This is why a beginner reading {zhōng} {guó} ("China") understands more at a glance than someone still memorising the pinyin alphabet.

## Why characters do not look like a code

There is a temptation to read Chinese as a cipher: each character would be a swapped letter. It is not. A character is a **word**, and words combine as they do in any language: {nǐ} {hǎo} are two words ("you are good"), not three letters.

Nor were characters invented all at once: {日} and {月} (sun and moon) are the components of {明}, "bright". Recognising those combinations is what makes vocabulary grow fast.

## What this means for the Bible

Three things. First, the Union Version ({和合本}, 1919) used characters already current in nineteenth-century writing, which makes the old text readable. Second, verses are numbered as in the West, so citing them is easy. Third, because each character is a word, a verse of John 1 has about twenty words, and you can learn them one at a time.`,

    `## Un carácter, una palabra

En portugués, {a} es una letra y {casa} son cuatro. En chino no existe esa separación: cada carácter vale por una palabra o por un pedazo de ella. No hay "A" para =a, y por eso nadie dice que alguien "escriba con letras" en chino: se dice {cá} {zi} {xiě}, "componer caracteres".

La consecuencia es la inversa de la portuguesa. Reconocer el sonido de una palabra inglesa no dice nada sobre su significado; reconocer un carácter chino ya dice el significado, aunque no se entienda la frase. Por eso quien empieza leyendo {zhōng} {guó} ("China") entiende más de un vistazo que quien sigue memorizando el alfabeto pinyin.

## Por qué los caracteres no parecen un código

Hay quien lee el chino como un cifrado: cada carácter sería una letra cambiada. No lo es. Un carácter es una **palabra**, y las palabras se combinan como en cualquier lengua: {nǐ} {hǎo} son dos palabras ("tú eres bueno"), no tres letras.

Los caracteres tampoco se inventaron de una vez: {日} y {月} (sol y luna) son los componentes de {明}, "claro". Reconocer esas combinaciones es lo que hace crecer rápido el vocabulario.

## Qué significa para la Biblia

Tres cosas. Primera: la Versión Unión ({和合本}, 1919) usó caracteres ya corrientes en la escritura del siglo XIX, lo que hace legible el texto antiguo. Segunda: los versículos se numeran como en Occidente, así que citarlos es fácil. Tercera: como cada carácter es una palabra, un versículo de Juan 1 tiene unas veinte palabras, y se pueden aprender una a una.`,
  ),
  vocab: [
    v(
      '中',
      '中',
      'meio; centro; China (zhōngguó)',
      'middle; centre; China (zhōngguó)',
      'medio; centro; China (zhōngguó)',
    ),
    v('国', '国', 'país (guó)', 'country (guó)', 'país (guó)'),
    v('好', '好', 'bom (hǎo)', 'good (hǎo)', 'bueno (hǎo)'),
    v('人', '人', 'pessoa; gente (rén)', 'person; people (rén)', 'persona; gente (rén)'),
    v('日', '日', 'sol; dia (rì)', 'sun; day (rì)', 'sol; día (rì)'),
    v('月', '月', 'lua; mês (yuè)', 'moon; month (yuè)', 'luna; mes (yuè)'),
    v('明', '明', 'claro; brilhante (míng)', 'bright; clear (míng)', 'claro; brillante (míng)'),
    v('字', '字', 'caractere (zì)', 'character (zì)', 'carácter (zì)'),
    v('写', '写', 'escrever (xiě)', 'to write (xiě)', 'escribir (xiě)'),
    v(
      '和合本',
      '和合本',
      'a Union Version, Bíblia chinesa de 1919',
      'the Union Version, Chinese Bible of 1919',
      'la Unión, Biblia china de 1919',
    ),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'Um caractere vale por uma palavra, não por um som. Não há alfabeto chinês.',
        'One character stands for a word, not for a sound. There is no Chinese alphabet.',
        'Un carácter representa una palabra, no un sonido. No hay alfabeto chino.',
      ),
    },
    {
      n: '2',
      text: t(
        'Reconhecer o caractere já entrega o significado — o oposto do português.',
        'Recognising the character already yields the meaning — the opposite of Portuguese.',
        'Reconocer el carácter ya da el significado: lo contrario del portugués.',
      ),
    },
    {
      n: '3',
      text: t(
        'Reconhecer os componentes (radical) abre portas: {明} tem {日} e {月}.',
        'Recognising components (radicals) opens doors: {明} contains {日} and {月}.',
        'Reconocer los componentes (radicales) abre puertas: {明} contiene {日} y {月}.',
      ),
    },
  ],
  notes: [
    {
      label: t(
        'Qual tradução china usar',
        'Which Chinese translation to use',
        'Qué traducción china usar',
      ),
      text: t(
        '{和合本} (Union Version, 1919) é a mais lida e usa caracteres que já eram correntes no século XIX — o texto não soa arcaico.',
        '{和合本} (Union Version, 1919) is the most widely read and uses characters already current in 19th-century writing, so the text does not sound archaic.',
        '{和合本} (Unión, 1919) es la más leída y usa caracteres ya corrientes en la escritura del siglo XIX, así que el texto no suena arcaico.',
      ),
    },
    {
      label: t('Mandarim ou cantonês', 'Mandarin or Cantonese', 'Mandarín o cantonés'),
      text: t(
        'O curso ensina o chinês padrão (putonghua), que é o da {和合本} em todo o Continente. O cantonês usa caracteres quase iguais e outra pronúncia.',
        'The course teaches Standard Chinese (putonghua), the language of {和合本} across the mainland. Cantonese uses almost the same characters and a different pronunciation.',
        'El curso enseña mandarín estándar (putonghua), la lengua de {和合本} en la península. El cantonés usa casi los mismos caracteres y otra pronunciación.',
      ),
    },
  ],
  examples: [
    { text: '中', gloss: 'centro; China' },
    { text: '中国', gloss: 'China' },
    { text: '好人', gloss: 'pessoa boa' },
    { text: '明', gloss: 'claro (sol + lua)' },
    { text: '写字', gloss: 'escrever caracteres' },
  ],
  tables: [
    {
      caption: t(
        'Composição de três caracteres',
        'Three characters broken down',
        'Tres caracteres descompuestos',
      ),
      head: [
        t('Caractere', 'Character', 'Carácter'),
        t('Componente', 'Component', 'Componente'),
        t('Sentido', 'Meaning', 'Sentido'),
      ],
      rows: [
        [
          t('明', '明', '明'),
          t('{日} + {月}', '{日} + {月}', '{日} + {月}'),
          t('sol + lua = claro', 'sun + moon = bright', 'sol + luna = claro'),
        ],
        [
          t('好', '好', '好'),
          t('{女} + {子}', '{女} + {子}', '{女} + {子}'),
          t('mulher + filho = bom', 'woman + child = good', 'mujer + hijo = bueno'),
        ],
        [
          t('和', '和', '和'),
          t('{禾} + {口}', '{禾} + {口}', '{禾} + {口}'),
          t('grão + boca = harmónico', 'grain + mouth = harmony', 'grano + boca = armonía'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'O que {明} significa, e por quê?',
      'What does {明} mean, and why?',
      '¿Qué significa {明} y por qué?',
    ),
    options: [
      t(
        'Claro, porque une sol e lua',
        'Bright, because it joins sun and moon',
        'Claro, porque une sol y luna',
      ),
      t('Escuro, porque é a noite', 'Dark, because it is night', 'Oscuro, porque es la noche'),
      t(
        'Não tem significado próprio',
        'It has no meaning of its own',
        'No tiene significado propio',
      ),
      t('Significa apenas "escrever"', 'It only means "to write"', 'Solo significa "escribir"'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Escreva o caractere da lua: ____',
        'Write the character for moon: ____',
        'Escribe el carácter de la luna: ____',
      ),
      answer: '月',
      hint: t(
        'O mesmo caractere significa também "mês".',
        'The same character also means "month".',
        'El mismo carácter significa también "mes".',
      ),
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue o caractere ao sentido',
        'Match each character to its meaning',
        'Une el carácter con su sentido',
      ),
      pairs: [
        { a: t('{人}', '{人}', '{人}'), b: t('pessoa', 'person', 'persona') },
        { a: t('{日}', '{日}', '{日}'), b: t('sol; dia', 'sun; day', 'sol; día') },
        { a: t('{好}', '{好}', '{好}'), b: t('bom', 'good', 'bueno') },
        { a: t('{字}', '{字}', '{字}'), b: t('caractere', 'character', 'carácter') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});
// ===========================================================================
// 2
// ===========================================================================
L({
  id: 2,
  section: t('Escrita', 'Writing', 'Escritura'),
  title: t(
    'Pinyin: ler sem saber falar',
    'Pinyin: reading without speaking',
    'Pinyin: leer sin saber hablar',
  ),
  subtitle: t(
    'A romanização que torna o charset procurável no teclado',
    'The romanisation that makes the characters typeable',
    'La romanización que hace escribibles los caracteres',
  ),
  body: corpo(
    `## Para que serve o pinyin

O pinyin é a romanização oficial do chinês, aprovada em 1958. Ele não é uma língua: é o mapa entre a letra que se digita e o caractere que se vê. Quem está no teclado do celular precisa dele; quem lê caracteres não precisa.

Duas propriedades tornam o pinyin útil para quem está a aprender. A primeira: **é fonético e regular** — cada letra corresponde sempre ao mesmo som, e as iniciais e finais têm uma lista fechada. A segunda: **o mesmo caractere pode ter várias leituras**, mas quase sempre a mesma: {行} é {xíng} ("andar") ou {háng} ("fileira"), e o contexto decide.

## As iniciais e as finais

As iniciais (o som que vem antes) são dezessete: {b p m f d t n l g k h j q x zh ch sh r z c s}, escritas {b}, {p}, {m}… e {zh} {ch} {sh} {r} para os três casos especiais. As finais (o som que vem depois) são mais numerosas, e é aí que o Mandarin te obriga a pensar: {i}, {u} e {ü} aparecem escritos {i}, {u} e {ü} depois de {j q x y}, e {yu} no lugar de {ü}.

O {ü} é o som de "você" em Mandarin. Depois de {j q x y} ele se escreve {u}: {jū} vale {jü}, {yuè} vale {yüe}. Fora desse grupo, o Mandarin não tem essa letra.

## Por que isso interessa ao estudo bíblico

O pinyin torna os textos chineses pesquisáveis por som: quem ouviu {Yēsū} numa pregação pode procurar {耶稣} no teclado. Também torna possível verificar a pronúncia de um nome próprio isolado, coisa que o contexto nem sempre revela.`,

    `## What pinyin is for

Pinyin is the official romanisation of Chinese, approved in 1958. It is not a language: it is the map between the key you type and the character you see. Whoever is on a phone keyboard needs it; whoever reads characters does not.

Two properties make pinyin useful for a learner. First, it is **phonetic and regular** — each letter always stands for the same sound, and initials and finals come from a closed list. Second, **the same character may have several readings**, but usually only one: {行} is {xíng} ("to walk") or {háng} ("row"), and context decides.

## Initials and finals

The initials (the sound before) number seventeen: {b p m f d t n l g k h j q x zh ch sh r z c s}, written {b}, {p}, {m}… with {zh} {ch} {sh} {r} for the three special cases. Finals (the sound after) are more numerous, and that is where Mandarin forces you to think: {i}, {u} and {ü} are written {i}, {u} and {ü} after {j q x y}, and {yu} stands where {ü} would.

The {ü} is the sound of "you" in Mandarin. After {j q x y} it is written {u}: {jū} stands for {jü}, {yuè} for {yüe}. Outside that group, Mandarin has no such sound.

## Why this matters for Bible study

Pinyin makes Chinese searchable by sound: someone who has heard {Yēsū} in a sermon can type {耶稣}. It also lets you check the reading of an isolated proper noun, which context does not always reveal.`,

    `## Para qué sirve el pinyin

El pinyin es la romanización oficial del chino, aprobada en 1958. No es una lengua: es el mapa entre la tecla que pulsas y el carácter que ves. Quien está en el teclado del móvil lo necesita; quien lee caracteres, no.

Dos propiedades lo hacen útil para quien aprende. Primera: es **fonético y regular** — cada letra representa siempre el mismo sonido, y las iniciales y finales salen de una lista cerrada. Segunda: **un mismo carácter puede tener varias lecturas**, pero casi siempre una sola: {行} es {xíng} ("andar") o {háng} ("fila"), y decide el contexto.

## Iniciales y finales

Las iniciales (el sonido previo) son diecisiete: {b p m f d t n l g k h j q x zh ch sh r z c s}, escritas {b}, {p}, {m}… con {zh} {ch} {sh} {r} para los tres casos especiales. Los finales (el sonido posterior) son más numerosos, y ahí el mandarín te obliga a pensar: {i}, {u} y {ü} se escriben {i}, {u} y {ü} tras {j q x y}, y {yu} ocupa el lugar de {ü}.

El {ü} es el sonido de "tú" en mandarín. Tras {j q x y} se escribe {u}: {jū} vale por {jü}, {yuè} por {yüe}. Fuera de ese grupo, el mandarín no tiene ese sonido.

## Por qué importa para el estudio bíblico

El pinyin hace que el chino se pueda buscar por sonido: quien oyó {Yēsū} en un sermón puede escribir {耶稣}. También permite comprobar la lectura de un nombre propio suelto, algo que el contexto no siempre revela.`,
  ),
  vocab: [
    v(
      '行',
      '行',
      'andar (xíng); fileira (háng)',
      'to walk (xíng); row (háng)',
      'andar (xíng); fila (háng)',
    ),
    v(
      '和合',
      '和合',
      'união; conjunto (héhé)',
      'union; to combine (héhé)',
      'unión; combinar (héhé)',
    ),
    v('字', '字', 'caractere (zì)', 'character (zì)', 'carácter (zì)'),
    v('拼音', '拼音', 'romanização (pīnyīn)', 'romanisation (pīnyīn)', 'romanización (pīnyīn)'),
    v(
      '声母',
      '声母',
      'som inicial (shēngmǔ)',
      'initial sound (shēngmǔ)',
      'sonido inicial (shēngmǔ)',
    ),
    v('韵母', '韵母', 'som final (yùnmǔ)', 'final sound (yùnmǔ)', 'sonido final (yùnmǔ)'),
    v('耶稣', '耶稣', 'Jesus (Yēsū)', 'Jesus (Yēsū)', 'Jesús (Yēsū)'),
    v('北', '北', 'norte (běi)', 'north (běi)', 'norte (běi)'),
    v('白', '白', 'branco; dizer (bái)', 'white; to say (bái)', 'blanco; decir (bái)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'Pinyin é fonético: cada letra tem sempre o mesmo som.',
        'Pinyin is phonetic: each letter always has the same sound.',
        'El pinyin es fonético: cada letra tiene siempre el mismo sonido.',
      ),
    },
    {
      n: '2',
      text: t(
        'As iniciais são dezessete; {zh}, {ch} {sh} e {r} são casos especiais.',
        'There are seventeen initials; {zh}, {ch}, {sh} and {r} are the special cases.',
        'Hay diecisiete iniciales; {zh}, {ch}, {sh} y {r} son los casos especiales.',
      ),
    },
    {
      n: '3',
      text: t(
        'Depois de {j q x y}, o {ü} escreve-se {u}: {jū} = {jü}, {yuè} = {yüe}.',
        'After {j q x y}, {ü} is written {u}: {jū} = {jü}, {yuè} = {yüe}.',
        'Tras {j q x y}, el {ü} se escribe {u}: {jū} = {jü}, {yuè} = {yüe}.',
      ),
    },
    {
      n: '4',
      text: t(
        'Um mesmo caractere pode ter mais de uma leitura; o contexto decide.',
        'One character may have more than one reading; context decides.',
        'Un mismo carácter puede tener más de una lectura; el contexto decide.',
      ),
    },
  ],
  notes: [
    {
      label: t(
        'Pinyin não é pronúncia de diccionario',
        'Pinyin is not dictionary pronunciation',
        'El pinyin no es pronunciación de diccionario',
      ),
      text: t(
        'O pinyin escreve o som, mas não marca o tom. Por isso {ma} pode ser {mā} (mãe), {má} (cavalo) ou {mǎ} (peça de xadrez) — a lição 3 trata disso.',
        'Pinyin writes the sound but does not mark tone. So {ma} can be {mā} (mother), {má} (horse) or {mǎ} (a game piece) — lesson 3 covers this.',
        'El pinyin escribe el sonido pero no marca el tono. Así {ma} puede ser {mā} (madre), {má} (caballo) o {mǎ} (ficha) — la lección 3 lo trata.',
      ),
    },
  ],
  examples: [
    { text: '北', gloss: 'běi — norte' },
    { text: '白', gloss: 'bái — branco' },
    { text: '行', gloss: 'xíng — andar; háng — fileira' },
  ],
  tables: [
    {
      caption: t('Iniciais do pinyin', 'Pinyin initials', 'Iniciales del pinyin'),
      head: [
        t('Grupo', 'Group', 'Grupo'),
        t('Letras', 'Letters', 'Letras'),
        t('Som', 'Sound', 'Sonido'),
      ],
      rows: [
        [
          t('Bilabial', 'Bilabial', 'Bilabial'),
          t('{b} {p} {m}', '{b} {p} {m}', '{b} {p} {m}'),
          t('lábios', 'lips', 'labios'),
        ],
        [
          t('Dental', 'Dental', 'Dental'),
          t('{d} {t} {n} {l}', '{d} {t} {n} {l}', '{d} {t} {n} {l}'),
          t('língua nos dentes', 'tongue at the teeth', 'lengua en los dientes'),
        ],
        [
          t('Velar', 'Velar', 'Velar'),
          t('{g} {k} {h}', '{g} {k} {h}', '{g} {k} {h}'),
          t('fundo da boca', 'back of the mouth', 'fondo de la boca'),
        ],
        [
          t('Palatal', 'Palatal', 'Palatal'),
          t('{j} {q} {x}', '{j} {q} {x}', '{j} {q} {x}'),
          t('palato', 'palate', 'paladar'),
        ],
        [
          t('Retroflexo', 'Retroflex', 'Retroflejo'),
          t('{zh} {ch} {sh} {r}', '{zh} {ch} {sh} {r}', '{zh} {ch} {sh} {r}'),
          t('líquia dobrada', 'curled tongue tip', 'punta de la lengua curvada'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Depois de {j}, o {ü} escreve-se como?',
      'After {j}, how is {ü} written?',
      'Después de {j}, ¿cómo se escribe el {ü}?',
    ),
    options: [
      t('{v}', '{v}', '{v}'),
      t('{u}', '{u}', '{u}'),
      t('{ü}', '{ü}', '{ü}'),
      t('{yu}', '{yu}', '{yu}'),
    ],
    answer: 1,
    hint: t(
      'Vale para {j q x y}. Depois de outras, mantém-se o {ü}.',
      'The same holds after {j q x y}. After other letters the {ü} stays.',
      'Igual tras {j q x y}. Tras otras letras el {ü} se mantiene.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Escreva o caractere do norte, lido {běi}: ____',
        'Write the character for north, read {běi}: ____',
        'Escribe el carácter del norte, leído {běi}: ____',
      ),
      answer: '北',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue a inicial ao grupo',
        'Match the initial to its group',
        'Une la inicial con su grupo',
      ),
      pairs: [
        {
          a: t('{b} {p} {m}', '{b} {p} {m}', '{b} {p} {m}'),
          b: t('bilabial (lábios)', 'bilabial (lips)', 'bilabial (labios)'),
        },
        {
          a: t('{g} {k} {h}', '{g} {k} {h}', '{g} {k} {h}'),
          b: t('velar (fundo da boca)', 'velar (back of mouth)', 'velar (fondo de la boca)'),
        },
        {
          a: t('{zh} {ch} {sh}', '{zh} {ch} {sh}', '{zh} {ch} {sh}'),
          b: t('retroflexo', 'retroflex', 'retroflejo'),
        },
        {
          a: t('{j} {q} {x}', '{j} {q} {x}', '{j} {q} {x}'),
          b: t('palatal (palato)', 'palatal (palate)', 'palatal (paladar)'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// 3
// ===========================================================================
L({
  id: 3,
  section: t('Fonética', 'Phonetics', 'Fonética'),
  title: t('Os quatro tons', 'The four tones', 'Los cuatro tonos'),
  subtitle: t(
    'A mesma sílaba, quatro meanings — o tom é parte da palavra',
    'The same syllable, four meanings — tone is part of the word',
    'La misma sílaba, cuatro significados: el tono es parte de la palabra',
  ),
  body: corpo(
    `## O que é o tom

O Mandarin é uma língua tonal: cada sílaba tem um dos quatro tons, mais um tom neutro. O tom não é melodia; é altura relativa. Duas sílabas idênticas com tons diferentes são palavras diferentes, às vezes de significado oposto.

Os quatro tons são: {ā} (primeiro, alto e plano), {á} (segundo, sobe), {ǎ} (terceiro, desce e sobe) e {à} (quarto, desce bruscamente). O tom neutro, sem marca, é o das sílabas curtas, e soa como meio-tom.

O exemplo mais citado mostra por que isso importa para a tradução: {mā} é "mãe", {má} é "cavalo" e {mǎ} é "peça de xadrez". A mesma escrita, três palavras sem relação.

## A regra que quase basta

Para quem está a ler, há um atalho: **quase toda sílaba com o terceiro tom escreve-se com a vogal {i} ou {u}**. É por isso que {nǐ} ("você") e {hǎo} ("bom") têm aquele som que soa tão diferente de {nī} e {hāo}. A regra falha em poucos casos ({ē}, {é}), o que basta para enganar quem a usa sozinha.

## Como isso muda a leitura da Bíblia

Os versículos chineses são escritos sem qualquer marca de tom, e o tradutor escolheu o tom pelo sentido. Quem lê em voz alta precisa recriar essa escolha. Um exemplo concreto de João 1:1: {yǔ} é o verbo "ser" (3.ª pessoa), e o tradutor escreve {是} — o contexto resolve o que a escrita não diz.`,

    `## What a tone is

Mandarin is tonal: every syllable carries one of four tones, plus a neutral tone. Tone is not melody; it is relative pitch. Two identical syllables with different tones are different words, sometimes with opposite meanings.

The four tones are: {ā} (first, high and level), {á} (second, rising), {ǎ} (third, dipping then rising) and {à} (fourth, falling sharply). The neutral tone, unmarked, belongs to short syllables and sounds like a half tone.

The most cited example shows why this matters for translation: {mā} is "mother", {má} is "horse" and {mǎ} is "a game piece". Same writing, three unrelated words.

## The rule that nearly suffices

For a reader there is a shortcut: **almost every third-tone syllable is written with {i} or {u}**. That is why {nǐ} ("you") and {hǎo} ("good") sound so unlike {nī} and {hāo}. The rule fails in a few cases ({ē}, {é}), which is enough to mislead anyone who leans on it alone.

## How this changes reading the Bible

Chinese verses carry no tone marks, and the translator chose each one by sense. Anyone reading aloud has to recreate that choice. A concrete case from John 1:1: {yǔ} is the verb "to be" (third person), and the translator writes {是} — context settles what the writing does not say.`,

    `## Qué es el tono

El mandarín es una lengua tonal: cada sílaba lleva uno de cuatro tonos, más un tono neutro. El tono no es melodía, es altura relativa. Dos sílabas idénticas con tonos distintos son palabras distintas, a veces de sentido opuesto.

Los cuatro tonos son: {ā} (primero, alto y plano), {á} (segundo, ascendente), {ǎ} (tercero, cae y sube) y {à} (cuarto, descendente). El tono neutro, sin marca, es el de las sílabas cortas y suena a medio tono.

El ejemplo más citado muestra por qué importa para traducir: {mā} es "madre", {má} es "caballo" y {mǎ} es "ficha de ajedrez". Misma escritura, tres palabras sin relación.

## La regla que casi basta

Para quien lee hay un atajo: **casi toda sílaba de tercer tono se escribe con {i} o {u}**. Por eso {nǐ} ("tú") y {hǎo} ("bueno") suenan tan distinto de {nī} y {hāo}. La regla falla en pocos casos ({ē}, {é}), lo que basta para engañar a quien se apoya solo en ella.

## Cómo cambia esto la lectura de la Biblia

Los versículos chinos no llevan ninguna marca de tono, y el traductor eligió cada uno por el sentido. Quien lee en voz alta tiene que recrear esa elección. Un caso concreto de Juan 1:1: {yǔ} es el verbo "ser" (tercera persona), y el traductor escribe {是} — el contexto resuelve lo que la escritura no dice.`,
  ),
  vocab: [
    v('妈', '妈', 'mãe (mā, tom 1)', 'mother (mā, tone 1)', 'madre (mā, tono 1)'),
    v(
      '马',
      '马',
      'cavalo; peça de xadrez (mǎ, tom 3)',
      'horse; a game piece (mǎ, tone 3)',
      'caballo; ficha de ajedrez (mǎ, tono 3)',
    ),
    v('你', '你', 'você (nǐ, tom 3)', 'you (nǐ, tone 3)', 'tú (nǐ, tono 3)'),
    v('好', '好', 'bom (hǎo, tom 3)', 'good (hǎo, tone 3)', 'bueno (hǎo, tono 3)'),
    v('是', '是', 'ser (shì, tom 4)', 'to be (shì, tone 4)', 'ser (shì, tono 4)'),
    v('不', '不', 'não (bù, tom 4)', 'not (bù, tone 4)', 'no (bù, tono 4)'),
    v('四', '四', 'quatro (sì, tom 4)', 'four (sì, tone 4)', 'cuatro (sì, tono 4)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'Cada sílaba tem um de quatro tons, ou tom neutro.',
        'Every syllable has one of four tones, or the neutral tone.',
        'Cada sílaba tiene uno de cuatro tonos, o tono neutro.',
      ),
    },
    {
      n: '2',
      text: t(
        'O terceiro tom quase sempre se escreve com {i} ou {u}: {nǐ} e {hǎo}.',
        'The third tone is almost always written with {i} or {u}: {nǐ} and {hǎo}.',
        'El tercer tono casi siempre se escribe con {i} o {u}: {nǐ} y {hǎo}.',
      ),
    },
    {
      n: '3',
      text: t(
        'Dois terceiros seguidos: o primeiro éFalado com altura baixa, para não colidir — {nǐ hǎo} soa como "níhhǎo".',
        'Two third tones in a row: the first is pronounced low — {nǐ hǎo} sounds like "níhhǎo".',
        'Dos tercer tonos seguidos, el primero se pronuncia bajo: {nǐ hǎo} suena "níhhǎo".',
      ),
    },
  ],
  notes: [
    {
      label: t(
        'Por que o texto não tem tom',
        'Why the text carries no tone marks',
        'Por qué el texto no lleva tonos',
      ),
      text: t(
        'A {和合本} é de 1919 e escreve sem marcas de tom, por influência do costume europeu. As edições modernas usam marcas.',
        'The 1919 {和合本} writes without tone marks, following European custom. Modern editions add them.',
        'La {和合本} de 1919 escribe sin marcas de tono, por influencia de la costumbre europea. Las ediciones modernas las añaden.',
      ),
    },
  ],
  examples: [
    { text: '妈', gloss: 'mā — mãe (tom 1)' },
    { text: '马', gloss: 'mǎ — cavalo / peça (tom 3)' },
    { text: '你好', gloss: 'nǐ hǎo — olá (dois terceiros)' },
  ],
  tables: [
    {
      caption: t('Os quatro tons', 'The four tones', 'Los cuatro tonos'),
      head: [
        t('Tom', 'Tone', 'Tono'),
        t('Marca', 'Mark', 'Marca'),
        t('Altura', 'Pitch', 'Altura'),
        t('Exemplo', 'Example', 'Ejemplo'),
      ],
      rows: [
        [
          t('1', '1', '1'),
          t('{ā}', '{ā}', '{ā}'),
          t('alto e plano', 'high and level', 'alto y plano'),
          t('{mā} mãe', '{mā} mother', '{mā} madre'),
        ],
        [
          t('2', '2', '2'),
          t('{á}', '{á}', '{á}'),
          t('sobe', 'rising', 'ascendente'),
          t('{má} cavalo', '{má} horse', '{má} caballo'),
        ],
        [
          t('3', '3', '3'),
          t('{ǎ}', '{ǎ}', '{ǎ}'),
          t('desce e sobe', 'dips then rises', 'cae y sube'),
          t('{mǎ} peça', '{mǎ} piece', '{mǎ} ficha'),
        ],
        [
          t('4', '4', '4'),
          t('{à}', '{à}', '{à}'),
          t('desce', 'falling', 'descendente'),
          t('{mà}四项', '{mà} four items', '{mà} cuatro cosas'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Em {nǐ hǎo}, o que acontece com o primeiro tom?',
      'In {nǐ hǎo}, what happens to the first tone?',
      'En {nǐ hǎo}, ¿qué pasa con el primer tono?',
    ),
    options: [
      t('Fica no terceiro tom', 'It stays on the third tone', 'Se queda en el tercer tono'),
      t(
        'É falado com altura baixa, para não colidir',
        'It is pronounced low, so it does not collide',
        'Se pronuncia bajo, para no chocar',
      ),
      t('Muda para o primeiro tom', 'It changes to the first tone', 'Cambia al primer tono'),
      t('Vira tom neutro', 'It becomes the neutral tone', 'Se vuelve tono neutro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Escreva a vogal acentuada de "mãe": m____',
        'Write the accented vowel of "mother": m____',
        'Escribe la vocal acentuada de "madre": m____',
      ),
      answer: 'ā',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue a sílaba ao tom',
        'Match the syllable to its tone',
        'Une la sílaba con su tono',
      ),
      pairs: [
        { a: t('{mā}', '{mā}', '{mā}'), b: t('tom 1 — mãe', 'tone 1 — mother', 'tono 1 — madre') },
        {
          a: t('{mà}', '{mà}', '{mà}'),
          b: t('tom 4 — desce', 'tone 4 — falling', 'tono 4 — descendente'),
        },
        {
          a: t('{hǎo}', '{hǎo}', '{hǎo}'),
          b: t('tom 3 — desce e sobe', 'tone 3 — dips then rises', 'tono 3 — cae y sube'),
        },
        {
          a: t('{má}', '{má}', '{má}'),
          b: t('tom 2 — sobe', 'tone 2 — rising', 'tono 2 — ascendente'),
        },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// 4
// ===========================================================================
L({
  id: 4,
  section: t('Fonética', 'Phonetics', 'Fonética'),
  title: t(
    'Sem espaços: onde acaba a palavra',
    'No spaces: where the word ends',
    'Sin espacios: dónde acaba la palabra',
  ),
  subtitle: t(
    'Três caracteres formam quase sempre uma palavra, e o contexto decide',
    'Three characters almost always form one word, and context decides',
    'Tres caracteres forman casi siempre una palabra, y el contexto decide',
  ),
  body: corpo(
    `## O problema

O Mandarin é escrito sem espaços entre palavras. Um principiante vê {我爱你} e não sabe se isso é uma palavra, duas ou três. A boa notícia: na prática, **quase todas as palavras têm dois ou três caracteres**, e em geral se agrupam de dois em dois.

{Mā ma} são dois caracteres e uma palavra: "mãe". {Chī fàn} também: "comer". A dificuldade aparece nas palavras de quatro ou mais caracteres, como {Shàngchuán}, e é aí que o vocabulário salva: se você reconhece os componentes, reconhece a palavra.

## Três regras que resolvem o caso comum

A primeira: {wǒ} ("eu"), {nǐ} ("você") e {tā} ("ele") são palavras de um só caractere, e quase todo o resto se agrupa em pares. A segunda: locução e palavra composta de quatro caracteres separam-se em dois pares, como {xīn ài} ("amor genuíno") ou {měi lì} ("beleza"). A terceira: não existe separação entre {的} e o que vem antes — {wǒ} + {的} + {shū} é "o meu livro", e o {的} é uma partícula de vínculo, como um "de" português colado.

## O que isso muda para quem lê a Bíblia

Números de versículo e referências são um alívio: {约翰} {3} {16} lê-se "Yīnyà sān shíliù", e a pessoa que procura passa direto. Já os nomes próprios compostos, como o de Israel, e os títulos podem demorar mais: muitos começam por {主}, que é o nome de Deus. Vale a pena decorar os nomes em bloco, e não por caractere solto.`,

    `## The problem

Mandarin is written without spaces between words. A beginner sees {我爱你} and cannot tell whether that is one word, two or three. The good news: in practice **almost every word is two or three characters**, and they group in twos.

{Mā ma} is one word, "mother". {Chī fàn} is one word too, "to eat". Difficulty shows up in four-character words such as {Shàngchuán}, and there vocabulary saves you: recognise the parts and you recognise the word.

## Three rules that handle the common case

First: {wǒ} ("I"), {nǐ} ("you") and {tā} ("he") are single-character words, and nearly everything else pairs up. Second: a four-character word splits into two pairs, as {xīn ài} ("true love") or {měi lì} ("beauty"). Third: there is no space before {的} — {wǒ} + {的} + {shū} is "my book", and {的} is a linking particle, a Portuguese "de" glued on.

## What this means for reading the Bible

Verse numbers are a relief: {约翰} {3} {16} reads "Yīnyà sān shíliù", and someone looking it up goes straight there. Compound proper nouns, such as the one for Israel, and titles can take longer: many begin with {主}, the divine name, so learn those names as whole units rather than character by character.`,

    `## El problema

El mandarín se escribe sin espacios entre palabras. Un principiante ve {我爱你} y no sabe si es una palabra, dos o tres. La buena noticia: en la práctica **casi toda palabra tiene dos o tres caracteres**, y se agrupan de dos en dos.

{Mā ma} es una palabra, "madre". {Chī fàn} también lo es, "comer". La dificultad aparece en palabras de cuatro caracteres como {Shàngchuán}, y ahí el vocabulario te salva: si reconoces las partes, reconoces la palabra.

## Tres reglas que resuelven el caso común

Primera: {wǒ} ("yo"), {nǐ} ("tú") y {tā} ("él") son palabras de un solo carácter, y casi todo lo demás se agrupa en pares. Segunda: una palabra de cuatro caracteres se parte en dos pares, como {xīn ài} ("amor genuíno") o {měi lì} ("belleza"). Tercera: no hay espacio ante {的} — {wǒ} + {的} + {shū} es "mi libro", y {的} es una partícula de enlace, una "de" portuguesa pegada.

## Qué significa para leer la Biblia

Los números de versículo son un alivio: {约翰} {3} {16} se lee "Yīnyà sān shíliù", y quien lo busca vai direto. Los nombres propios compuestos (Israel) y los títulos pueden tardar más: muchos empiezan por {主}, el nombre divino, así que conviene aprender esos nombres como bloque y no carácter a carácter.`,
  ),
  vocab: [
    v('我', '我', 'eu (wǒ)', 'I (wǒ)', 'yo (wǒ)'),
    v('爱', '爱', 'amar (ài)', 'to love (ài)', 'amar (ài)'),
    v('你', '你', 'você (nǐ)', 'you (nǐ)', 'tú (nǐ)'),
    v('他', '他', 'ele (tā)', 'he (tā)', 'él (tā)'),
    v('的', '的', 'partícula de vínculo (de)', 'linking particle (of)', 'partícula de enlace (de)'),
    v('书', '书', 'livro (shū)', 'book (shū)', 'libro (shū)'),
    v('吃饭', '吃饭', 'comer (chī fàn)', 'to eat (chī fàn)', 'comer (chī fàn)'),
    v('约翰', '约翰', 'João (Yuēhàn)', 'John (Yuēhàn)', 'Juan (Yuēhàn)'),
    v('主', '主', 'Senhor; dono (zhǔ)', 'Lord; master (zhǔ)', 'Señor; dueño (zhǔ)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'Palavras têm quase sempre dois ou três caracteres.',
        'Words almost always have two or three characters.',
        'Las palabras tienen casi siempre dos o tres caracteres.',
      ),
    },
    {
      n: '2',
      text: t(
        '{我} {你} {他} são palavras de um só caractere; o resto, em pares.',
        '{我} {你} {he} are single-character words; the rest pair up.',
        '{我} {你} {他} son palabras de un solo carácter; el resto, en pares.',
      ),
    },
    {
      n: '3',
      text: t(
        'A partícula {的} liga sem espaço: {wǒ de shū} = "o meu livro".',
        'The particle {的} joins with no space: {wǒ de shū} = "my book".',
        'La partícula {的} enlaza sin espacio: {wǒ de shū} = "mi libro".',
      ),
    },
    {
      n: '4',
      text: t(
        'Palavras de quatro caracteres normalmente se dividem em dois pares.',
        'Four-character words normally split into two pairs.',
        'Las palabras de cuatro caracteres suelen dividirse en dos pares.',
      ),
    },
  ],
  notes: [
    {
      label: t('O pinyin ajuda a separar', 'Pinyin helps you split', 'El pinyin ayuda a separar'),
      text: t(
        'As edições com pinyin separam cada sílaba — {shàng} {chuán} — o que mostra onde acaba a sílaba e, com o hábito, onde acaba a palavra.',
        'Pinyin editions put a space at every syllable — {shàng} {chuán} — which shows where the syllable ends and, with practice, where the word does.',
        'Las ediciones con pinyin separan cada sílaba — {shàng} {chuán} — lo que muestra dónde acaba la sílaba y, con práctica, la palabra.',
      ),
    },
  ],
  examples: [
    { text: '妈妈', gloss: 'mā ma — mãe (dois dos mesmos caracteres)' },
    { text: '我的书', gloss: 'wǒ de shū — o meu livro' },
    { text: '吃饭', gloss: 'chī fàn — comer' },
    { text: '爱心', gloss: 'xīn ài — amor genuíno' },
  ],
  tables: [
    {
      caption: t('Onde acaba a palavra', 'Where the word ends', 'Dónde acaba la palabra'),
      head: [
        t('Escrito', 'Written', 'Escrito'),
        t('Separado', 'Split', 'Separado'),
        t('Significado', 'Meaning', 'Significado'),
      ],
      rows: [
        [
          t('{我爱你}', '{我爱你}', '{我爱你}'),
          t('{wǒ} {ài} {nǐ}', '{wǒ} {ài} {nǐ}', '{wǒ} {ài} {nǐ}'),
          t('eu amo você — três palavras', 'I love you — three words', 'te amo — tres palabras'),
        ],
        [
          t('{吃饭}', '{吃饭}', '{吃饭}'),
          t('{chī} {fàn}', '{chī} {fàn}', '{chī} {fàn}'),
          t('comer — uma palavra', 'to eat — one word', 'comer — una palabra'),
        ],
        [
          t('{我的书}', '{我的书}', '{我的书}'),
          t('{wǒ} {的} {shū}', '{wǒ} {的} {shū}', '{wǒ} {的} {shū}'),
          t('o meu livro — três palavras', 'my book — three words', 'mi libro — tres palabras'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Em {我的书}, o que é {的}?',
      'In {我的书}, what is {的}?',
      'En {我的书}, ¿qué es {的}?',
    ),
    options: [
      t('Um verbo', 'A verb', 'Un verbo'),
      t('Uma partícula de vínculo', 'A linking particle', 'Una partícula de enlace'),
      t('Um pronome', 'A pronoun', 'Un pronombre'),
      t('Um numeral', 'A numeral', 'Un numeral'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Complete "amar": 吃____ (comer) e ____爱 (amar)',
        'Complete "to eat": 吃____ (to eat) and ____爱 (to love)',
        'Completa "comer": 吃____ (comer) y ____爱 (amar)',
      ),
      answer: '饭',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue a palavra ao sentido',
        'Match each word to its meaning',
        'Une la palabra con su sentido',
      ),
      pairs: [
        { a: t('{我}', '{我}', '{我}'), b: t('eu', 'I', 'yo') },
        { a: t('{书}', '{书}', '{书}'), b: t('livro', 'book', 'libro') },
        { a: t('{吃饭}', '{吃饭}', '{吃饭}'), b: t('comer', 'to eat', 'comer') },
        { a: t('{主}', '{主}', '{主}'), b: t('Senhor; dono', 'Lord; master', 'Señor; dueño') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// 5
// ===========================================================================
L({
  id: 5,
  section: t('Números', 'Numbers', 'Números'),
  title: t(
    'Contar: classifiers e a forma —er',
    'Counting: classifiers and the —er form',
    'Contar: clasificadores y la forma —er',
  ),
  subtitle: t(
    'Nenhum número vai sozinho; cada substantivo pede o seu',
    'No number stands alone; each noun asks for its own',
    'Ningún número va solo; cada sustantivo pide el suyo',
  ),
  body: corpo(
    `## Nenhum número é autossuficiente

Em português, "dois livros" é "livros" mais "dois". Em chinês o número é quase sempre **incompleto**: {liǎng} {běn} {shū}, dois livros, e {běn} é o *classifier* — uma palavra que indica a categoria e a forma do que se conta. O número diz quanto; o classifier diz o quê.

Há cerca de cem classifiers, e não é preciso decorar todos. Os que resolvem quase tudo são poucos: {个} (gé, genérico, só para coisas pequenas e abstratas), {本} (běn, para livros e objetos com páginas), {只} (zhī, para animais), {个} ou {位} (wèi, para pessoas, com polidez), {张} (zhāng, para folhas: duas folhas de papel são {liǎng} {zhāng} {zhǐ}).

## A forma —er

Depois do número, o substantivo pode tomar a forma terminada em {er} (neutro): {liǎng} {běn} {shū} e {yī} {běn} {shū}, um livro. É um eco do Mandarin falado antigo, e aparece sobretudo com um, dois e alguns: {yī} {zhī} {yā} ("um galinha").

Isto é diferente do plural português: {shū} não muda para "livros". O plural já está no {er}.

## Por que importa para a Bíblia

Os números aparecem o tempo todo nos salmos e nos evangelhos — "três dias", "duzentos", "muitos anos". E o versículo 3 de Ezequiel é literalmente {sān}, três, o que a {和合本} acrescenta entre colchetes no texto para não confundir o número com o substantivo {三}, que significa "número". Ler isso sem saber classifiers é uma parede.`,

    `## No number is self-sufficient

In Portuguese, "two books" is "books" plus "two". In Chinese the number is almost always **incomplete**: {liǎng} {běn} {shū}, two books, where {běn} is the *classifier* — a word naming the category and shape of what is counted. The number says how many; the classifier says what.

There are around a hundred classifiers and you need not learn them all. The few that cover most cases are: {个} (gè, generic, for small and abstract things), {本} (běn, for books and anything with pages), {只} (zhī, for animals), {位} (wèi, for people, politely), {张} (zhāng, for sheets: two sheets of paper are {liǎng} {zhāng} {zhǐ}).

## The —er form

After the number the noun can take the form ending in {er} (neuter): {liǎng} {běn} {shū} and {yī} {běn} {shū}, one book. It is an echo of older spoken Mandarin and shows up above all with one, two and some: {yī} {zhī} {yā}, "one hen".

This is not the Portuguese plural: {shū} does not change into "books". The plural already sits in the {er}.

## Why it matters for the Bible

Numbers are everywhere in the Psalms and the Gospels — "three days", "two hundred", "many years". And Ezekiel 3 is literally {sān}, three, which the {和合本} inserts in brackets so the numeral is not confused with the noun {三}, "number". Reading that without knowing classifiers is a wall you cannot climb.`,

    `## Ningún número se basta solo

En portugués, "dos libros" es "libros" más "dos". En chino el número casi siempre está **incompleto**: {liǎng} {běn} {shū}, dos libros, donde {běn} es el *clasificador* — una palabra que nombra la categoría y la forma de lo que se cuenta. El número dice cuánto; el clasificador dice qué.

Hay unos cien clasificadores y no hace falta aprenderlos todos. Los pocos que resuelven casi todo son: {个} (gè, genérico, para cosas pequeñas y abstractas), {本} (běn, para libros y objetos con páginas), {只} (zhī, para animales), {位} (wèi, para personas, con cortesía), {张} (zhāng, para hojas: dos hojas de papel son {liǎng} {zhāng} {zhǐ}).

## La forma —er

Tras el número, el sustantivo puede tomar la forma terminada en {er} (neutro): {liǎng} {běn} {shū} y {yī} {běn} {shū}, un libro. Es un eco del mandarín hablado antiguo y aparece sobre todo con uno, dos y algunos: {yī} {zhī} {yā}, "una gallina".

Esto no es el plural portugués: {shū} no pasa a "libros". El plural ya está en el {er}.

## Por qué importa para la Biblia

Los números aparecen por todas partes en los Salmos y los evangelios — "tres días", "doscientos", "muchos años". Y Ezequiel 3 es literalmente {sān}, tres, que la {和合本} pone entre corchetes para que el numeral no se confunda con el sustantivo {三}, "número". Leer eso sin saber clasificadores es una pared que no se sube.`,
  ),
  vocab: [
    v(
      '个',
      '个',
      'classifier genérico (gè)',
      'generic classifier (gè)',
      'clasificador genérico (gè)',
    ),
    v(
      '本',
      '本',
      'classifier para livros (běn)',
      'classifier for books (běn)',
      'clasificador para libros (běn)',
    ),
    v(
      '只',
      '只',
      'classifier para animais (zhī)',
      'classifier for animals (zhī)',
      'clasificador para animales (zhī)',
    ),
    v(
      '张',
      '张',
      'classifier para folhas (zhāng)',
      'classifier for sheets (zhāng)',
      'clasificador para hojas (zhāng)',
    ),
    v(
      '位',
      '位',
      'classifier cortês para pessoas (wèi)',
      'polite classifier for people (wèi)',
      'clasificador cortés para personas (wèi)',
    ),
    v('两', '两', 'dois (liǎng)', 'two (liǎng)', 'dos (liǎng)'),
    v('三', '三', 'três (sān)', 'three (sān)', 'tres (sān)'),
    v('书', '书', 'livro (shū)', 'book (shū)', 'libro (shū)'),
    v('数字', '数字', 'número (shùzì)', 'number (shùzì)', 'número (shùzì)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'O número nunca vai sozinho: vem com um classifier.',
        'The number never stands alone: it comes with a classifier.',
        'El número nunca va solo: viene con un clasificador.',
      ),
    },
    {
      n: '2',
      text: t(
        '{两} "dois" usa-se só com classifier; {二} é o "dois" de número abstracto.',
        '{两} "two" is used only with a classifier; {二} is the abstract "two".',
        '{两} "dos" se usa solo con clasificador; {二} es el "dos" abstracto.',
      ),
    },
    {
      n: '3',
      text: t(
        'A forma {—er} marca plural com um, dois e alguns: {yī běn shū} = "um livro".',
        'The {—er} form marks plural with one, two and some: {yī běn shū} = "one book".',
        'La forma {—er} marca plural con uno, dos y algunos: {yī běn shū} = "un libro".',
      ),
    },
    {
      n: '4',
      text: t(
        'O substantivo nunca muda de forma: o plural está no {er}, não no substantivo.',
        'The noun itself never changes: the plural is in the {er}, not in the noun.',
        'El sustantivo nunca cambia: el plural está en el {er}, no en el sustantivo.',
      ),
    },
  ],
  notes: [
    {
      label: t(
        'O "três" entre colchetes em Ezequiel',
        'The bracketed "three" in Ezekiel',
        'El "tres" entre corchetes en Ezequiel',
      ),
      text: t(
        'Na {和合本}, {三} aparece entre colchetes em Ezequiel 3,2 porque o substantivo {三} é "número", e não o numeral. É um lembrete do tradutor, não uma edição do texto.',
        'In the {和合本}, {三} appears in brackets at Ezekiel 3,2 because the noun {三} means "number", not the numeral. It is the translator\'s reminder, not an edition of the text.',
        'En la {和合本}, {三} aparece entre corchetes en Ezequiel 3,2 porque el sustantivo {三} significa "número", no el numeral. Es un recordatorio del traductor, no una edición del texto.',
      ),
    },
  ],
  examples: [
    { text: '两个', gloss: 'liǎng gè — dois (coisas pequenas)' },
    { text: '三本', gloss: 'sān běn — três livros' },
    { text: '三只', gloss: 'sān zhī — três animais' },
    { text: '一张', gloss: 'yì zhāng — uma folha' },
  ],
  tables: [
    {
      caption: t(
        'O mesmo número, classifiers diferentes',
        'The same number, different classifiers',
        'El mismo número, clasificadores distintos',
      ),
      head: [
        t('Classificador', 'Classifier', 'Clasificador'),
        t('Para', 'For', 'Para'),
        t('Exemplo', 'Example', 'Ejemplo'),
      ],
      rows: [
        [
          t('{个} gè', '{个} gè', '{个} gè'),
          t(
            'coisas pequenas, abstratas',
            'small or abstract things',
            'cosas pequeñas o abstractas',
          ),
          t('{yī gè rén} uma pessoa', '{yī gè rén} one person', '{yī gè rén} una persona'),
        ],
        [
          t('{本} běn', '{本} běn', '{本} běn'),
          t('livros, registos', 'books, records', 'libros, registros'),
          t('{sān běn shū} três livros', '{sān běn shū} three books', '{sān běn shū} tres libros'),
        ],
        [
          t('{只} zhī', '{只} zhī', '{只} zhī'),
          t('animais', 'animals', 'animales'),
          t('{yī zhī gǒu} um cão', '{yī zhī gǒu} one dog', '{yī zhī gǒu} un perro'),
        ],
        [
          t('{位} wèi', '{位} wèi', '{位} wèi'),
          t('pessoas, com polidez', 'people, politely', 'personas, con cortesía'),
          t(
            '{yī wèi xiānsheng} um senhor',
            '{yī wèi xiānsheng} a gentleman',
            '{yī wèi xiānsheng} un caballero',
          ),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Qual classifier completa {三 ____ 鸡}?',
      'Which classifier completes {三 ____ 鸡}?',
      '¿Qué clasificador completa {三 ____ 鸡}?',
    ),
    options: [
      t('{本}', '{本}', '{本}'),
      t('{只}', '{只}', '{只}'),
      t('{张}', '{张}', '{张}'),
      t('{个}', '{个}', '{个}'),
    ],
    answer: 1,
    hint: t(
      '{鸡} é uma galinha, e {鸡} classifica-se como animal.',
      '{鸡} is a hen, and animals take their own classifier.',
      '{鸡} es una gallina, y los animales tienen su propio clasificador.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Escreva o numeral de "três" em caracteres: ____',
        'Write the numeral for "three" in characters: ____',
        'Escribe el numeral de "tres" en caracteres: ____',
      ),
      answer: '三',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue o substantivo ao classifier',
        'Match the noun to its classifier',
        'Une el sustantivo con su clasificador',
      ),
      pairs: [
        { a: t('livro {书}', 'book {书}', 'libro {书}'), b: t('{本}', '{本}', '{本}') },
        { a: t('cão {狗}', 'dog {狗}', 'perro {狗}'), b: t('{只}', '{只}', '{只}') },
        { a: t('página {页}', 'page {页}', 'página {页}'), b: t('{张}', '{张}', '{张}') },
        { a: t('coisa {人}', 'person {人}', 'persona {人}'), b: t('{个}', '{个}', '{个}') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// 6
// ===========================================================================
L({
  id: 6,
  section: t('Pronomes', 'Pronouns', 'Pronombres'),
  title: t(
    'Pronomes e demonstrativos',
    'Pronouns and demonstratives',
    'Pronombres y demostrativos',
  ),
  subtitle: t(
    'O Mandarin economiza como o português — e é isso que o torna difícil de ler',
    'Mandarin saves words the way Portuguese does, and that is what makes it hard to read',
    'El mandarín ahorra palabras como el portugués, y eso es lo que lo hace difícil de leer',
  ),
  body: corpo(
    `## Três pronomes, um só

{chinese} tem {wǒ} (eu), {nǐ} (você) e {tā} (ele). Não há distinção de gênero nem de formalidade: o "você" respeitoso é o mesmo {nǐ}, e a distinção está no verbo, como se viu na lição 3.

O ponto que complica a leitura é que **o pronome costuma ser omitido**. Em {tā shì shīfu}, "ele é professor", o sujeito pode ser omitido se o contexto já disse quem é. O português obriga; o Mandarin dispensa. Lendo um versículo, a frase {chū} {qù} por si só não diz "quem" — e a leitura bíblica está cheia de sujeito omitido.

## Demonstrativos: onde, não qual

Os demonstrativos são {zhè} (este, perto) e {nà} (esse, longe), e vêm **depois** do substantivo: {zhè} {běn} {shū} é "este livro", literalmente "livro-este". Não há artigo nem gênero: {zhè} {shān} e {nà} {shān} são "esta montanha" e "aquela montanha".

A posição importa porque {zhè} {zhè} também significa "isto é": {wǒ} {zhè} {zhè} {shì} {shuō} {de} quer dizer "isto é o que estou a dizer".

## Por que isso importa para a Bíblia

Os Salmos são o caso mais duro: salmos como o 23 são quase todos sintagmas nominais sem verbo explícito, e em Mandarin isso produz frases que parecem incompletas ao olho português. Reconhecer a omissão do sujeito e do verbo é o que separa quem está a ler e quem está a decorar caracteres.`,

    `## Three pronouns, one form

Chinese has {wǒ} (I), {nǐ} (you) and {tā} (he). There is no gender and no formal register: the respectful "you" is the same {nǐ}, and the distinction sits in the verb, as lesson 3 showed.

What makes reading hard is that **the pronoun is usually dropped**. In {tā shì shīfu}, "he is a teacher", the subject can go missing once context has identified it. Portuguese insists; Mandarin dispenses. Reading a verse, the fragment {chū} {qù} on its own does not say who — and biblical reading is full of dropped subjects.

## Demonstratives: where, not which

Demonstratives are {zhè} (this, near) and {nà} (that, far), and they come **after** the noun: {zhè} {běn} {shū} is "this book", literally "book-this". There is no article and no gender: {zhè} {shān} and {nà} {shān} are "this mountain" and "that mountain".

Position matters because {zhè} {zhè} also means "this is": {wǒ} {zhè} {zhè} {shì} {shuō} {de} means "this is what I am saying".

## Why this matters for the Bible

The Psalms are the hardest case: a psalm like 23 is almost entirely noun phrases with no explicit verb, and in Mandarin that produces sentences that look incomplete to a Portuguese eye. Recognising the dropped subject and dropped verb is what separates reading from memorising characters.`,

    `## Tres pronombres, una sola forma

El chino tiene {wǒ} (yo), {nǐ} (tú) y {tā} (él). No hay género ni registro formal: el "usted" respetuoso es el mismo {nǐ}, y la distinción está en el verbo, como mostró la lección 3.

Lo que dificulta la lectura es que **el pronombre suele omitirse**. En {tā shì shīfu}, "él es profesor", el sujeto puede caer en cuanto el contexto ya lo identificó. El portugués insiste; el mandarín dispensa. Leyendo un versículo, el fragmento {chū} {qù} por sí solo no dice quién — y la lectura bíblica está llena de sujetos omitidos.

## Demostrativos: dónde, no cuál

Los demostrativos son {zhè} (este, cerca) y {nà} (ese, lejos), y van **después** del sustantivo: {zhè} {běn} {shū} es "este libro", literalmente "libro-este". No hay artículo ni género: {zhè} {shān} y {nà} {shān} son "esta montaña" y "aquella montaña".

La posición importa porque {zhè} {zhè} significa también "esto es": {wǒ} {zhè} {zhè} {shì} {shuō} {de} quiere decir "esto es lo que digo".

## Por qué importa para la Biblia

Los Salmos son el caso más duro: un salmo como el 23 es casi todo sintagmas nominales sin verbo explícito, y en mandarín eso produce frases que parecen incompletas a un ojo portugués. Reconocer el sujeto y el verbo omitidos es lo que separa leer de decorar caracteres.`,
  ),
  vocab: [
    v('我', '我', 'eu (wǒ)', 'I (wǒ)', 'yo (wǒ)'),
    v('你', '你', 'você (nǐ)', 'you (nǐ)', 'tú (nǐ)'),
    v('他', '他', 'ele; ela (tā)', 'he; she (tā)', 'él; ella (tā)'),
    v('这', '这', 'este, perto (zhè)', 'this, near (zhè)', 'este, cerca (zhè)'),
    v('那', '那', 'esse, longe (nà)', 'that, far (nà)', 'ese, lejos (nà)'),
    v('是', '是', 'ser (shì)', 'to be (shì)', 'ser (shì)'),
    v('出去', '出去', 'sair (chūqù)', 'to go out (chūqù)', 'salir (chūqù)'),
    v('山', '山', 'montanha (shān)', 'mountain (shān)', 'montaña (shān)'),
    v('主', '主', 'Senhor (zhǔ)', 'Lord (zhǔ)', 'Señor (zhǔ)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'O pronome do sujeito é omitido quando o contexto já o diz.',
        'The subject pronoun is dropped when context supplies it.',
        'El pronombre de sujeto se omite cuando el contexto ya lo da.',
      ),
    },
    {
      n: '2',
      text: t(
        'Não há gênero nem pessoa formal: {tā} serve para ele e para ela.',
        'There is no gender and no formal person: {tā} covers he and she.',
        'No hay género ni persona formal: {tā} sirve para él y para ella.',
      ),
    },
    {
      n: '3',
      text: t(
        'Os demonstratives vêm DEPOIS do substantivo: {zhè běn shū} = "este livro".',
        'Demonstratives come AFTER the noun: {zhè běn shū} = "this book".',
        'Los demostrativos van DESPUÉS del sustantivo: {zhè běn shū} = "este libro".',
      ),
    },
    {
      n: '4',
      text: t(
        '{zhè zhè} também significa "isto é": {wǒ zhè zhè shì shuō de}.',
        '{zhè zhè} also means "this is": {wǒ zhè zhè shì shuō de}.',
        '{zhè zhè} significa también "esto es": {wǒ zhè zhè shì shuō de}.',
      ),
    },
  ],
  notes: [
    {
      label: t('Omitir não é opcional', 'Dropping is not optional', 'Omitir no es opcional'),
      text: t(
        'Quando o sujeito é omitido e nada antes o identificou, a frase fica realmente ambígua. Nos Salmos isso acontece a cada versículo, e é por isso que o estudo de Salmos em chinês começa pela gramática e não pelo texto.',
        'When the subject is dropped and nothing before identified it, the sentence is genuinely ambiguous. In the Psalms that happens every verse, which is why studying Psalms in Chinese starts with grammar, not with the text.',
        'Cuando el sujeto se omite y nada antes lo identificó, la frase queda realmente ambigua. En los Salmos eso pasa en cada versículo, y por eso estudiar Salmos en chino empieza por la gramática y no por el texto.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: 'tā shì lǎoshī — ele é professor' },
    { text: '这本书', gloss: 'zhè běn shū — este livro' },
    { text: '那山', gloss: 'nà shān — aquela montanha' },
    { text: '我这就是', gloss: 'wǒ zhè jiù shì — isto é o que eu digo' },
  ],
  tables: [
    {
      caption: t(
        'Onde o pronome aparece e onde some',
        'Where the pronoun shows and where it vanishes',
        'Dónde aparece el pronombre y dónde desaparece',
      ),
      head: [
        t('Frase', 'Sentence', 'Frase'),
        t('Com pronome', 'With pronoun', 'Con pronombre'),
        t('Sem pronome', 'Without pronoun', 'Sin pronombre'),
      ],
      rows: [
        [
          t('afirmação', 'statement', 'afirmación'),
          t(
            '{wǒ shì shīfu} eu sou professor',
            '{wǒ shì shīfu} I am a teacher',
            '{wǒ shì shīfu} yo soy profesor',
          ),
          t('{wǒ} é obrigatório', '{wǒ} is required', '{wǒ} es obligatorio'),
        ],
        [
          t('pergunta', 'question', 'pregunta'),
          t(
            '{nǐ shì lǎoshī ma} você é professor?',
            '{nǐ shì lǎoshī ma} are you a teacher?',
            '{nǐ shì lǎoshī ma} ¿eres profesor?',
          ),
          t('{nǐ} é obrigatório', '{nǐ} is required', '{nǐ} es obligatorio'),
        ],
        [
          t('resposta', 'reply', 'respuesta'),
          t('{shì de} sim', '{shì de} yes', '{shì de} sí'),
          t(
            '{shì} basta: o sujeito vem do contexto',
            'just {shì}: the subject comes from context',
            'solo {shì}: el sujeto viene del contexto',
          ),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Em {这本书}, o que {这} faz?',
      'In {这本书}, what does {这} do?',
      'En {这本书}, ¿qué hace {这}?',
    ),
    options: [
      t(
        'Vem antes do substantivo, como artigo',
        'It comes before the noun, like an article',
        'Va antes del sustantivo, como un artículo',
      ),
      t(
        'Vem depois do substantivo, a apontar',
        'It comes after the noun, pointing at it',
        'Va después del sustantivo, señalándolo',
      ),
      t('É um verbo', 'It is a verb', 'Es un verbo'),
      t('É um numeral', 'It is a numeral', 'Es un numeral'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Complete "ele" com o pronome: ____ 是 老师 (ele é professor)',
        'Complete "he" with the pronoun: ____ 是 老师 (he is a teacher)',
        'Completa "él" con el pronombre: ____ 是 老师 (él es profesor)',
      ),
      answer: '他',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue o pronome à pessoa',
        'Match the pronoun to the person',
        'Une el pronombre con la persona',
      ),
      pairs: [
        { a: t('{我}', '{我}', '{我}'), b: t('eu', 'I', 'yo') },
        { a: t('{你}', '{你}', '{你}'), b: t('você', 'you', 'tú') },
        { a: t('{他}', '{他}', '{他}'), b: t('ele; ela', 'he; she', 'él; ella') },
        { a: t('{这}', '{这}', '{这}'), b: t('este (perto)', 'this (near)', 'este (cerca)') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// 7
// ===========================================================================
L({
  id: 7,
  section: t('Sintaxe', 'Syntax', 'Sintaxis'),
  title: t(
    '是 e a frase que só tem substantivo',
    '是 and the subject-predicate sentence',
    '是 y la frase que solo tiene sustantivo',
  ),
  subtitle: t(
    'Nem toda frase tem verbo, e em chinês isso é normal',
    'Not every sentence has a verb, and in Chinese that is normal',
    'No toda frase tiene verbo, y en chino eso es normal',
  ),
  body: corpo(
    `## Uma frase sem verbo

Depois de {wǒ} e {nǐ}, o Mandarin pode dizer {tā shì shīfu} — "ele é professor". O {shì} é o verbo "ser", e traduz-se normalmente por "ser". Mas há um segundo uso, mais interessante e muito frequente: {shì} **introduz um substantivo como descrição**, sem qualquer verbo no resto da frase.

{wǒ shì shīfu} é "eu sou professor". {wǒ shì Zhāng} é "sou Zhang". No segundo, {Zhāng} não é verbo nem algo de que se predica: é o que se diz de alguém sem precisar da palavra "ser".

## Por que isto importa para os Salmos

O Salmo 23 diz, na {和合本}, {yēhéhuá shì wǒ de yáng} — "Jeová é meu pastor". Traduzido ao pé da letra, o verbo "ser" parece fraco. Mas em Mandarin o {shì} de identificação é omitido o tempo todo, e a frase {shì wǒ de yáng} é "pastor meu", sem verbo nenhum. Todo o peso está no {de}: {wǒ de} é um genitivo curto, "meu", colado sem espaço.

Quem traduz palavra a palavra produz um disparate. Quem reconhece a frase nominal produz "O Senhor é o meu pastor" sem esforço.

## Três frases que só diferem no verbo

{shì} acrescenta um substantivo como descrição. Compare: {tā shì shīfu} (ele é professor), {tā zài nàlǐ} (ele está lá) e {tā lái le} (ele veio). A primeira identifica, a segunda diz onde, a terceira narra o que aconteceu. Todas têm verbo, mas só a primeira usa {shì}.`,
    `## A sentence with no verb

After {wǒ} and {nǐ}, Mandarin can say {tā shì shīfu} — "he is a teacher". {shì} is the verb "to be", and it usually translates as "is". But it has a second use, more interesting and very frequent: {shì} **introduces a noun as description**, with no verb anywhere else in the sentence.

{wǒ shì shīfu} is "I am a teacher". {wǒ shì Zhāng} is "I am Zhang". In the second, {Zhāng} is neither a verb nor something predicated of: it is what you say of someone without needing the word "to be".

## Why this matters for the Psalms

Psalm 23 says, in the {和合本}, {yēhéhuá shì wǒ de yáng} — "Yahweh is my shepherd". Translated literally, the verb "is" looks thin. But in Mandarin the identifying {shì} is dropped all the time, and the phrase {shì wǒ de yáng} is "shepherd of mine", with no verb at all. All the weight sits in the {de}: {wǒ de} is a short genitive, "my", glued on without a space.

Word-for-word translation produces nonsense. Recognising the noun phrase produces "The Lord is my shepherd" without effort.

## Three sentences that differ only in the verb

{shì} adds a noun as description. Compare: {tā shì shīfu} (he is a teacher), {tā zài nàlǐ} (he is there) and {tā lái le} (he came). The first identifies, the second says where, the third narrates what happened. All three have a verb, but only the first uses {shì}.`,
    `## Una frase sin verbo

Después de {wǒ} y {nǐ}, el mandarín puede decir {tā shì shīfu} — "él es profesor". {shì} es el verbo "ser", y suele traducirse por "es". Pero tiene un segundo uso, más interesante y muy frecuente: {shì} **introduce un sustantivo como descripción**, sin ningún verbo en el resto de la frase.

{wǒ shì shīfu} es "yo soy profesor". {wǒ shì Zhāng} es "yo soy Zhang". En el segundo, {Zhāng} no es verbo ni algo de que se predique: es lo que se dice de alguien sin necesitar la palabra "ser".

## Por qué importa para los Salmos

El Salmo 23 dice, en la {和合本}, {yēhéhuá shì wǒ de yáng} — "Yahvé es mi pastor". Traducido al pie de la letra, el verbo "es" parece flojo. Pero en mandarín el {shì} de identificación se omite a menudo, y la frase {shì wǒ de yáng} es "pastor mío", sin verbo alguno. Todo el peso está en el {de}: {wǒ de} es un genitivo breve, "mi", pegado sin espacio.

Quien traduce palabra por palabra produce un disparate. Quien reconoce el sintagma nominal produce "El Señor es mi pastor" sin esfuerzo.

## Tres frases que solo difieren en el verbo

{shì} añade un sustantivo como descripción. Compara: {tā shì shīfu} (él es profesor), {tā zài nàlǐ} (él está allí) y {tā lái le} (él vino). La primera identifica, la segunda dice dónde, la tercera narra lo ocurrido. Las tres tienen verbo, pero solo la primera usa {shì}.`,
  ),
  vocab: [
    v('是', '是', 'ser; identificar (shì)', 'to be; to identify (shì)', 'ser; identificar (shì)'),
    v('的', '的', 'genitivo curto: de (de)', 'short genitive: of (de)', 'genitivo breve: de (de)'),
    v('羊', '羊', 'ovelha; pastor (yáng)', 'sheep; shepherd (yáng)', 'oveja; pastor (yáng)'),
    v('在', '在', 'estar em (zài)', 'to be at (zài)', 'estar en (zài)'),
    v(
      '那里',
      '那里',
      'lá, aquele lugar (nàlǐ)',
      'there, that place (nàlǐ)',
      'allí, aquel lugar (nàlǐ)',
    ),
    v('来', '来', 'vir (lái)', 'to come (lái)', 'venir (lái)'),
    v('耶和华', '耶和华', 'Jeová (Yēhéhuá)', 'Yahweh (Yēhéhuá)', 'Yahvé (Yēhéhuá)'),
    v('牧者', '牧者', 'pastor (mùzhě)', 'shepherd (mùzhě)', 'pastor (mùzhě)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        '{shì} traduz "ser" no português, mas em Mandarin é também verbo de descrição.',
        '{shì} means "to be" in Portuguese, but in Mandarin it is also a describing verb.',
        '{shì} significa "ser" en portugués, pero en mandarín es también verbo de descripción.',
      ),
    },
    {
      n: '2',
      text: t(
        '{de} liga posse sem verbo: {wǒ de shū} = "meu livro".',
        '{de} links possession with no verb: {wǒ de shū} = "my book".',
        '{de} liga la posesión sin verbo: {wǒ de shū} = "mi libro".',
      ),
    },
    {
      n: '3',
      text: t(
        '{shì} identifica, {zài} localiza, {lái} narra — não são sinônimos.',
        '{shì} identifies, {zài} locates, {lái} narrates — they are not synonyms.',
        '{shì} identifica, {zài} localiza, {lái} narra: no son sinónimos.',
      ),
    },
  ],
  notes: [
    {
      label: t(
        'Por que o Salmo 23 engana em tradução literal',
        'Why Psalm 23 misleads in literal translation',
        'Por qué el Salmo 23 engaña en traducción literal',
      ),
      text: t(
        '{yēhéhuá shì wǒ de yáng} tem quatro palavras. A versão portuguesa acrescenta "é o meu", três palavras que o chinês não tem. A habilidade aqui é reconhecer o sintagma nominal, não decorar caracteres.',
        '{yēhéhuá shì wǒ de yáng} is a four-word sentence. The Portuguese version adds "is my", three words Chinese does not have. The skill here is recognising the noun phrase, not memorising characters.',
        '{yēhéhuá shì wǒ de yáng} tiene cuatro palabras. La versión portuguesa añade "es mi", tres palabras que el chino no tiene. La habilidad está en reconocer el sintagma nominal, no en decorar caracteres.',
      ),
    },
  ],
  examples: [
    { text: '他是老师', gloss: 'tā shì lǎoshī — ele é professor' },
    { text: '我在那里', gloss: 'wǒ zài nàlǐ — eu estou lá' },
    { text: '耶和华是我的牧者', gloss: 'Yēhéhuá shì wǒ de mùzhě — o Senhor é o meu pastor' },
  ],
  tables: [
    {
      caption: t(
        'Três verbos que não se substituem',
        'Three verbs that are not interchangeable',
        'Tres verbos que no se sustituyen',
      ),
      head: [
        t('Verbo', 'Verb', 'Verbo'),
        t('Pergunta a que responde', 'Question it answers', 'Pregunta que responde'),
        t('Exemplo', 'Example', 'Ejemplo'),
      ],
      rows: [
        [
          t('{shì}', '{shì}', '{shì}'),
          t('O que ele é?', 'What is he?', '¿Qué es?'),
          t(
            '{tā shì shīfu} ele é professor',
            '{tā shì shīfu} he is a teacher',
            '{tā shì shīfu} es profesor',
          ),
        ],
        [
          t('{zài}', '{zài}', '{zài}'),
          t('Onde ele está?', 'Where is he?', '¿Dónde está?'),
          t('{tā zài nàlǐ} ele está lá', '{tā zài nàlǐ} he is there', '{tā zài nàlǐ} está allí'),
        ],
        [
          t('{lái}', '{lái}', '{lái}'),
          t('O que ele fez?', 'What did he do?', '¿Qué hizo?'),
          t('{tā lái le} ele veio', '{tā lái le} he came', '{tā lái le} vino'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Em {我在那里}, qual é a função do {在}?',
      'In {我在那里}, what does {在} do?',
      'En {我在那里}, ¿qué función cumple {在}?',
    ),
    options: [
      t('Identifica o que ele é', 'Identifies what he is', 'Identifica lo que es'),
      t('Indica onde ele está', 'Indicates where he is', 'Indica dónde está'),
      t('Marca tempo passado', 'Marks past time', 'Marca tiempo pasado'),
      t('Liga posse', 'Links possession', 'Liga la posesión'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Complete "Jeová é meu pastor" (耶和华____我的牧者): ____',
        'Complete "Yahweh is my shepherd" (耶和华____我的牧者): ____',
        'Completa "Yahvé es mi pastor" (耶和华____我的牧者): ____',
      ),
      answer: '是',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue o verbo à pergunta',
        'Match the verb to the question',
        'Une el verbo con la pregunta',
      ),
      pairs: [
        { a: t('{shì}', '{shì}', '{shì}'), b: t('O que ele é?', 'What is he?', '¿Qué es?') },
        { a: t('{zài}', '{zài}', '{zài}'), b: t('Onde ele está?', 'Where is he?', '¿Dónde está?') },
        {
          a: t('{lái}', '{lái}', '{lái}'),
          b: t('O que ele fez?', 'What did he do?', '¿Qué hizo?'),
        },
        { a: t('{的}', '{的}', '{的}'), b: t('De quem é?', 'Whose is it?', '¿De quién es?') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// 8
// ===========================================================================
L({
  id: 8,
  section: t('Sintaxe', 'Syntax', 'Sintaxis'),
  title: t(
    'A ordem SVO, que não é a nossa',
    'SOV order, which is not ours',
    'El orden SVO, que no es el nuestro',
  ),
  subtitle: t(
    'O Mandarin põe o verbo no meio, e quem segura a frase é o contexto',
    'Mandarin puts the verb in the middle, and context holds the sentence up',
    'El mandarín pone el verbo en medio, y el contexto sostiene la frase',
  ),
  body: corpo(
    `
## O verbo vai para o meio

Português diz "eu como maçã": sujeito, verbo, objeto. O Mandarin diz {wǒ chī píngguǒ} — o mesmo, com o {chī} no meio. Parece idêntico; a diferença aparece no que vem **depois**. O português pode adiantar o objeto ("ontem comi-o"); em Mandarin o objeto fica depois do verbo, e o advérbio também: {wǒ zuótiān chī le tā}.

A ordem é sempre **sujeito — verbo — objeto**, e nunca se inverte. Por isso uma oração não pode ser movida para a frente como o português permite.

## O objeto indireto vem primeiro

Quando há dois complementos, o indireto vem primeiro: {wǒ gěi tā yī běn shū} é "dou-lhe um livro". O {gěi} marca "dar" e o {tā} é o objeto indireto. O português seria "dou um livro a ele"; a ordem dos complementos é a oposta, e quem traduz pela sintaxe portuguesa inverte tudo.

## Sem sujeito, a frase vira enigma

Com o verbo no meio e o sujeito omitido, um grupo isolado como {chī le} não significa nada: quem comeu? O contexto é obrigatório. É por isso que a leitura bíblica em chinês se faz por capítulos e não por versículos — e por isso que os Salmos, tão cheios de sintagma nominal, são mais difíceis do que a prosa dos Evangelhos.`,

    `## The verb goes in the middle

Portuguese says "I eat an apple": subject, verb, object. Mandarin says {wǒ chī píngguǒ} — the same, with {chī} in the middle. It looks identical; the difference shows in what comes **after**. Portuguese can front the object ("I ate it yesterday"); in Mandarin the object stays after the verb and so does the adverb: {wǒ zuótiān chī le tā}.

The order is always **subject — verb — object**, and it is never inverted. That is why a clause cannot be moved to the front the way Portuguese allows.

## The indirect object comes first

With two complements the indirect comes first: {wǒ gěi tā yī běn shū} is "I give him a book". {gěi} marks "to give" and {tā} is the indirect object. Portuguese would be "I give a book to him"; the order of the complements is reversed, and anyone translating by Portuguese syntax flips it.

## With no subject, the sentence becomes a riddle

With the verb in the middle and the subject dropped, an isolated phrase like {chī le} means nothing: who ate? Context is obligatory. That is why biblical reading in Chinese is done by chapters and not by verses — and why the Psalms, so full of noun phrases, are harder than the prose of the Gospels.`,

    `## El verbo va en medio

El portugués dice "yo como una manzana": sujeto, verbo, objeto. El mandarín dice {wǒ chī píngguǒ} — lo mismo, con {chī} en medio. Parece idéntico; la diferencia aparece en lo que viene **después**. El portugués puede adelantar el objeto ("ayer me lo comí"); en mandarín el objeto se queda tras el verbo, y también el adverbio: {wǒ zuótiān chī le tā}.

El orden es siempre **sujeto — verbo — objeto**, y nunca se invierte. Por eso no se puede adelantar una frase como el portugués permite.

## El objeto indirecto va primero

Con dos complementos, el indirecto va primero: {wǒ gěi tā yī běn shū} es "le doy un libro". {gěi} marca "dar" y {tā} es el objeto indirecto. El portugués sería "le doy un libro a él"; el orden de los complementos es el contrario, y quien traduzca por la sintaxis portuguesa lo invierte todo.

## Sin sujeto, la frase es un enigma

Con el verbo en medio y el sujeto omitido, un grupo aislado como {chī le} no significa nada: ¿quién comió? El contexto es obligatorio. Por eso la lectura bíblica en chino se hace por capítulos y no por versículos — y por eso los Salmos, tan llenos de sintagmas nominales, son más difíciles que la prosa de los Evangelios.`,
  ),
  vocab: [
    v('吃', '吃', 'comer (chī)', 'to eat (chī)', 'comer (chī)'),
    v('给', '给', 'dar (gěi)', 'to give (gěi)', 'dar (gěi)'),
    v('本', '本', 'livro; classifier (běn)', 'book; classifier (běn)', 'libro; clasificador (běn)'),
    v('昨天', '昨天', 'ontem (zuótiān)', 'yesterday (zuótiān)', 'ayer (zuótiān)'),
  ],
  rules: [
    {
      n: '1',
      text: t(
        'A ordem é sempre sujeito — verbo — objeto, e nunca se inverte.',
        'The order is always subject — verb — object, never inverted.',
        'El orden es siempre sujeto — verbo — objeto, nunca se invierte.',
      ),
    },
    {
      n: '2',
      text: t(
        'Com dois complementos, o indireto vem primeiro: {wǒ gěi tā yī běn shū}.',
        'With two complements the indirect comes first: {wǒ gěi tā yī běn shū}.',
        'Con dos complementos, el indirecto va primero: {wǒ gěi tā yī běn shū}.',
      ),
    },
    {
      n: '3',
      text: t(
        'Sem sujeito explícito, o contexto tem de dizer quem age.',
        'Without an explicit subject, context must supply the doer.',
        'Sin sujeto explícito, el contexto debe decir quién actúa.',
      ),
    },
  ],
  notes: [
    {
      label: t(
        'Leia por capítulos, não por versículos',
        'Read by chapters, not by verses',
        'Lea por capítulos, no por versículos',
      ),
      text: t(
        'Numa língua onde o sujeito se omite e o verbo não fecha a frase, o versículo isolado perde o que o torna legível. O capítulo é a unidade de sentido.',
        'In a language where the subject is dropped and the verb does not close the sentence, the isolated verse loses what makes it readable. The chapter is the unit of sense.',
        'En una lengua donde el sujeto se omite y el verbo no cierra la frase, el versículo aislado pierde lo que lo hace legible. El capítulo es la unidad de sentido.',
      ),
    },
  ],
  examples: [
    { text: '我吃苹果', gloss: 'wǒ chī píngguǒ — eu como maçã' },
    { text: '我昨天吃了它', gloss: 'wǒ zuótiān chī le tā — eu comi-o ontem' },
    { text: '我给他一本书', gloss: 'wǒ gěi tā yī běn shū — dou-lhe um livro' },
  ],
  tables: [
    {
      caption: t(
        'Os mesmos dois complementos em ordens opostas',
        'The same two complements in opposite orders',
        'Los mismos dos complementos en órdenes opuestas',
      ),
      head: [
        t('Língua', 'Language', 'Lengua'),
        t('Ordem dos complementos', 'Order of the complements', 'Orden de los complementos'),
        t('Exemplo', 'Example', 'Ejemplo'),
      ],
      rows: [
        [
          t('português', 'Portuguese', 'portugués'),
          t('objeto antes do indireto', 'object before the indirect', 'objeto antes del indirecto'),
          t('dou um livro a ele', 'I give a book to him', 'doy un libro a él'),
        ],
        [
          t('chinês', 'Chinese', 'chino'),
          t('indireto antes do objeto', 'indirect before the object', 'indirecto antes del objeto'),
          t('{wǒ gěi tā yī běn shū}', '{wǒ gěi tā yī běn shū}', '{wǒ gěi tā yī běn shū}'),
        ],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: t(
      'Em {我给他一本书}, qual é o verbo?',
      'In {我给他一本书}, which is the verb?',
      'En {我给他一本书}, ¿cuál es el verbo?',
    ),
    options: [
      t('{我}', '{我}', '{我}'),
      t('{给}', '{给}', '{给}'),
      t('{他}', '{他}', '{他}'),
      t('{本}', '{本}', '{本}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: t(
        'Complete "eu como" com o verbo: 我____ (comer)',
        'Complete "I eat" with the verb: 我____ (to eat)',
        'Completa "yo como" con el verbo: 我____ (comer)',
      ),
      answer: '吃',
    },
    {
      kind: 'match',
      prompt: t(
        'Ligue a palavra à função na frase',
        'Match the word to its role in the sentence',
        'Une la palabra con su función en la frase',
      ),
      pairs: [
        { a: t('{我}', '{我}', '{我}'), b: t('sujeito', 'subject', 'sujeto') },
        { a: t('{吃}', '{吃}', '{吃}'), b: t('verbo', 'verb', 'verbo') },
        {
          a: t('{昨天}', '{昨天}', '{昨天}'),
          b: t('advérbio de tempo', 'time adverb', 'adverbio de tiempo'),
        },
        { a: t('{本}', '{本}', '{本}'), b: t('classifier', 'classifier', 'clasificador') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
});

// ===========================================================================
// Escrita e trava de qualidade
// ===========================================================================

/**
 * Trava contra a classe de erro mais fácil de cometer neste arquivo e mais
 * difícil de ver: lixo de alfabeto dentro da prosa. Enquanto escrevia estas
 * lições apareceram cirílico e japonês no meio de frases em português, e nenhum
 * erro de tipo ou de schema os pegaria — o JSON sai válido, com a frase
 * corrompida. Aqui o build falha na hora.
 *
 * Legítimo: caracteres CJK dentro de {chaves}, e pinyin com acento.-Ilegítimo:
 * qualquer caractere cirílico ou hangul, e qualquer caractere CJK fora de {…}.
 */
const CJK = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uac00-\ud7af]/;
const CIRILICO = /[\u0400-\u04ff]/;
const problemas: string[] = [];

/**
 * Os campos onde CJK tem de aparecer dentro de {chaves}: a prosa. Neles, um
 * caractere fora de chave é lixo — foi assim que cirílico e japonês entraram em
 * frases em português enquanto escrevia estas lições, e nenhum erro de tipo ou de
 * schema pega isso: o JSON sai válido, com a frase corrompida.
 *
 * Fora da prosa, CJK é o conteúdo: form, lemma, o texto de um exemplo e a
 * resposta de um preenchimento são CJK sem chaves por definição.
 */
/**
 * Campos que precisam dos três idiomas.
 *
 * `body`, `rules` e `notes` são prosa, e neles um ideograma fora de {chaves} é
 * lixo — foi assim que kanji japonês entrou numa frase em português enquanto se
 * escrevia a lição 3. `title` e `subtitle` ficam de fora dessa regra de propósito:
 * num curso de chinês o título É o caractere, e embrulhá-lo em chaves só
 * produziria {是} e a frase, que é pior. A exceção é por tipo de campo, não por
 * ficheiro: o `body` da mesma lição continua sob a regra estrita.
 */
const prosa = (l: Lesson) =>
  [
    ['title', l.title, false],
    ['subtitle', l.subtitle, false],
    ['section', l.section, false],
    ['body', l.body, true],
    ...l.rules.map((r, i): [string, Text, boolean] => [`rules[${i}]`, r.text, true]),
    ...l.notes.map((n, i): [string, Text, boolean] => [`notes[${i}].label`, n.label, true]),
    ...l.notes.map((n, i): [string, Text, boolean] => [`notes[${i}].text`, n.text, true]),
    ...l.tables.map((tb, i): [string, Text, boolean] => [`tables[${i}].caption`, tb.caption, true]),
  ] as [string, Text, boolean][];

lições.forEach((l) => {
  for (const [onde, txt, cjkProibido] of prosa(l)) {
    const faltando = (['pt', 'en', 'es'] as const).filter(
      (k) => typeof txt?.[k] !== 'string' || !txt[k].trim(),
    );
    if (faltando.length) {
      problemas.push(`lição ${l.id} ${onde}: falta ${faltando.join(' e ')}`);
      continue;
    }
    for (const k of ['pt', 'en', 'es'] as const) {
      const s = txt[k] ?? '';
      if (CIRILICO.test(s))
        problemas.push(`lição ${l.id} ${onde}.${k}: cirílico em "${s.slice(0, 40)}"`);
      if (cjkProibido) {
        const fora = s.replace(/\{[^}]*\}/g, '');
        const achado = fora.match(CJK);
        if (achado)
          problemas.push(
            `lição ${l.id} ${onde}.${k}: CJK fora de {chaves} (${achado[0]}) em "${s.slice(0, 40)}"`,
          );
      }
    }
  }

  // Sequência e campos obrigatórios: o schema exige, e o exportador não corrige.
  if (l.id !== l.id) problemas.push(`lição ${l.id}: id inconsistente`);
  if (!l.vocab.length) problemas.push(`lição ${l.id}: sem vocabulário`);
  if (!l.exercise) problemas.push(`lição ${l.id}: sem exercício principal`);
  if (!l.exercises.length) problemas.push(`lição ${l.id}: sem exercícios extra`);

  // Vocabulário: formas únicas e as três traduções. A forma é o que o leitor
  // marca no corpo; duas entradas com a mesma forma marcam a mesma coisa duas
  // vezes e o contador "palavras aprendidas" não fecha.
  const vistas = new Set<string>();
  for (const w of l.vocab) {
    if (vistas.has(w.form))
      problemas.push(`lição ${l.id}: forma repetida no vocabulário: ${w.form}`);
    vistas.add(w.form);
    if (!w.pt.trim() || !w.en.trim() || !w.es.trim()) {
      problemas.push(`lição ${l.id}: ${w.form} sem tradução completa`);
    }
    if (w.lang !== 'zh') problemas.push(`lição ${l.id}: ${w.form} sem lang "zh"`);
  }

  const confere = (ex: Exercise | undefined, onde: string) => {
    if (!ex) {
      problemas.push(`lição ${l.id} ${onde}: ausente`);
      return;
    }
    for (const k of ['pt', 'en', 'es'] as const) {
      if (!ex.prompt[k]?.trim()) problemas.push(`lição ${l.id} ${onde}: prompt sem ${k}`);
    }
    if (ex.kind === 'choose') {
      const n = ex.options.length;
      if (n < 2 || n > 4) problemas.push(`lição ${l.id} ${onde}: choose com ${n} opções`);
      for (const r of Array.isArray(ex.answer) ? ex.answer : [ex.answer]) {
        if (typeof r !== 'number' || r < 0 || r >= n) {
          problemas.push(`lição ${l.id} ${onde}: resposta ${r} fora das opções (0–${n - 1})`);
        }
      }
    }
    if (ex.kind === 'fill' && typeof ex.answer !== 'string') {
      problemas.push(`lição ${l.id} ${onde}: fill sem resposta de texto`);
    }
    if (ex.kind === 'match') {
      const esq = ex.pairs.map((p) => (typeof p.a === 'string' ? p.a : p.a.pt));
      if (esq.length < 3) problemas.push(`lição ${l.id} ${onde}: match com ${esq.length} pares`);
      if (new Set(esq).size !== esq.length)
        problemas.push(`lição ${l.id} ${onde}: match com chaves repetidas`);
    }
  };
  confere(l.exercise, 'exercise');
  l.exercises.forEach((ex, i) => confere(ex, `exercises[${i}]`));

  // Tabelas: cabeçalho e corpo com o mesmo número de células, senão sobra
  // célula órfã sem cabeçalho na tela.
  l.tables.forEach((tb, i) => {
    const n = tb.head.length;
    tb.rows.forEach((r, j) => {
      if (r.length !== n) {
        problemas.push(
          `lição ${l.id}: tabela ${i} ("${tb.caption.pt}") linha ${j} com ${r.length} de ${n} células`,
        );
      }
    });
  });
});

lições.forEach((l, i) => {
  if (l.id !== i + 1) problemas.push(`lição com id ${l.id} está na posição ${i + 1}`);
});

if (problemas.length) {
  console.error(`${problemas.length} problema(s) no curso de chinês:\n  ` + problemas.join('\n  '));
  process.exit(1);
}

const curso = {
  schemaVersion: 1,
  id: 'zh',
  lang: 'zh',
  title: t('Chinês', 'Chinese', 'Chinês'),
  description: t(
    'Mandarim do início: o ideograma é palavra, o pinyin, os quatro tons, contagem, pronomes e a falta de espaços.',
    'Mandarin from the start: the character is a word, pinyin, the four tones, counting, pronouns and running words together.',
    'Mandarín desde el principio: el ideograma es palabra, el pinyin, los cuatro tonos, contar, pronombres y las palabras pegadas.',
  ),
  lessons: lições,
};

// O contentVersion é do exportador (export-courses.mts), não daqui: ele o deriva
// do conteúdo final e é o gate de CI.
writeFileSync(ALVO, JSON.stringify(curso, null, 2) + '\n', 'utf8');

const verbetes = lições.reduce((n, l) => n + l.vocab.length, 0);
const exercicios = lições.reduce((n, l) => n + 1 + l.exercises.length, 0);
console.log(
  `courses/zh.json: ${lições.length} lições, ${verbetes} verbetes, ${exercicios} exercícios.`,
);

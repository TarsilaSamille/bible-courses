import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  title: T('Verbos fracos e o wayyiqtol'),
  subtitle: T('וַיֹּאמֶר — a corrente que conta a Bíblia'),
  section: T('Verbo e numeral'),
  body: C(`## O motor da narrativa

Quase toda a narrativa bíblica corre sobre uma única forma verbal: o **wayyiqtol** (também chamado waw consecutivo). Ele se forma com {וַ} + a 3.ª m. do verbo, e significa «e aconteceu que». Graças a ele, Gênesis 1-11 vira uma corrente de ações:

{וַיֹּאמֶר} «e disse» · {וַיַּרְא} «e viu» · {וַיִּקְרָא} «e chamou» · {וַיִּשְׁמַע} «e ouviu» · {וַיָּבֹא} «e veio» · {וַיַּבְדֵּל} «e separou»

O sinal gráfico é o {ו} com {ַ} (pataj) seguido de dagesh forte na letra seguinte: {וַיֹּאמֶר}, {וַיִּקְרָא}. Reconhecer esse par é reconhecer metade da Bíblia.

Explicação técnica: historicamente o wayyiqtol nasce do **yiqtol** (imperfecto) com {ו} copulativo e dagesh naf (a duplicação que neutraliza a vogal). Por isso muchos libros públicos de gramática ensinam: {וַ} + yiqtol = passado narrativo. As formas são idênticas às do yiqtol com {ו}.

## Três verbos que você não pode decorar como os outros

As raízes com guturais (cap. 13) ou com {א}/{ו} deformam o paradigma (Gesenius §62-75). São os verbos «fracos», e basta conhecê-los:

{אמר} «dizer»: {אָמַר} «disse» · {יֹאמַר} «dirá» · {יֹאמֵר} «disse (wayyiqtol)»
{היה} «ser»: {הָיָה} «foi» · {יִהְיֶה} «será» · {יְהִי} «haja»
{בוא} «vir»: {בָּא} «veio» · {יָבוֹא} «virá» · {יָבֹא} «que venha»

A irregularidade fica visível: {יֹאמַר} tem {ו} com holam, {יִהְיֶה} tem {י} com hiriq, {יָבוֹא} dobra o {ב}. Nada disso é erro: é o motivo pelo qual eles aparecem em quase todas as listas de solo palabras para decorar.

## O wayyiqtol e o aspecto

O wayyiqtol não é só «passado»: é **imperfectivo narrativo**. Ele conta o que acontece dentro de uma cena aberta. Em Gênesis 3, {וַיֹּאמֶר} «e disse» abre a cena, e o verbo seguinte {וַיִּקְרָא} «e chamou» continua a mesma cena. Quando a narrativa salta de cena, o verbo muda para o qatal ({בָּרָא}, {הָיָה}), e é esse contraste que faz o estilo bíblico respirar.

## Construção de uma cadeia

Tente ler esta sequência do capítulo 1, marcando o {וַ} de cada vez:

{וַיֹּאמֶר} e {וַיַּרְא} e {וַיַּבְדֵּל} e {וַיִּקְרָא} «e disse… e viu… e separou… e chamou» (Gn 1.3-5)

Perceba que {וַיַּרְא} «e viu» e {וַיַּבְדֵּל} «e separou» têm o mesmo padrão: {וַ} + {י} + dagesh. Uma vez que você enxerga o padrão, o texto deixa de ser uma lista de palavras e se torna uma história contada.

## Fique atento ao que não é wayyiqtol

Nem todo {וַ} inicial é narrativa. Em {וְהִיא} «e ela», {וְאַתָּה} «e tu» o {ו} é apenas a conjunção «e» com schwa. A diferença é o {ַ}: com {ַ} e dagesh, narrativa; sem, simples coordenação.

Na prática, quase todo {וַ} com dagesh numa narrativa é wayyiqtol, e quase todo {ו} com sheva é coordenação. A gramática bíblica é assim: leia o padrão, confirme com o contexto.`),
  vocab: [
    V('וַיֹּאמֶר', 'אמר', 'e ele disse'),
    V('וַיַּרְא', 'ראה', 'e ele viu'),
    V('וַיִּקְרָא', 'קרא', 'e ele chamou'),
    V('וַיִּשְׁמַע', 'שׁמע', 'e ele ouviu'),
    V('וַיָּבֹא', 'בוא', 'e ele veio'),
    V('וַיַּבְדֵּל', 'בדל', 'e ele separou'),
    V('וַיְהִי', 'היה', 'e houve'),
    V('יֹאמַר', 'אמר', 'ele dirá'),
    V('יִהְיֶה', 'היה', 'ele será'),
    V('יָבוֹא', 'בוא', 'ele virá'),
    V('וְהִיא', 'הִיא', 'e ela'),
    V('אָמַר', 'אמר', 'ele disse (qatal)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que o «וַ» inicial faz em «וַיֹּאמֶר»?'),
    options: [
      T('Nega o verbo'),
      T('Transforma o verbo em passado narrativo («e disse»)'),
      T('Forma o plural'),
      T('Marca o feminino'),
    ],
    answer: 1,
    hint: T('O {וַ} seguido de dagesh forte é a marca da narrativa.'),
  },
  exercises: [
    {
      kind: 'match',
      prompt: T('Ligue a forma ao seu tempo/modo.'),
      pairs: [
        { a: '{אָמַר}', b: T('qatal (passado)') },
        { a: '{יֹאמַר}', b: T('yiqtol (futuro)') },
        { a: '{וַיֹּאמֶר}', b: T('wayyiqtol (narrativa)') },
        { a: '{לֵאמֹר}', b: T('infinitivo') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual destas formas é wayyiqtol?'),
      options: [T('וְהִיא'), T('וַיָּבֹא'), T('וְאֵת'), T('וְאַתָּה')],
      answer: 1,
      hint: T('Regra §4: {וַ} com dagesh é narrativa; {ו} com sheva é coordenação.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o wayyiqtol de {שׁמע} «ouvir» (3.ª m.).'),
      answer: 'וַיִּשְׁמַע',
      hint: T('{וַ} + {י} com dagesh forte + {שְׁמַע}.'),
    },
    {
      kind: 'choose',
      prompt: T('Por que {היה} é chamado de verbo fraco?'),
      options: [
        T('Porque a raiz tem só duas letras'),
        T('Porque o final {ה} muda de vogal conforme o tempo ({הָיָה}, {יִהְיֶה})'),
        T('Porque só aparece no Antigo Testamento'),
        T('Porque é um verbo irregular'),
      ],
      answer: 1,
      hint: T('Compare {הָיָה} com {יִהְיֶה}: o {ה} não recebe dagesh forte no futuro.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O wayyiqtol = {וַ} + verbo; na prática, {וַ} + dagesh na letra seguinte é o sinal de narrativa.',
      ),
    },
    {
      n: '2',
      text: T(
        'O wayyiqtol é aspecto imperfectivo: conta o que acontece dentro de uma cena; o qatal marca a passagem para outra cena.',
      ),
    },
    {
      n: '3',
      text: T(
        'Verbos com guturais ou com {א}/{ו} são «fracos» e mudam vogal e dagesh: memorize {אמר}, {היה}, {בוא}, {מות} e {ראה} como um bloco.',
      ),
    },
    { n: '4', text: T('Nem todo {וַ} é narrativa: {ו} com sheva ({וְ}) é só a conjunção «e».') },
    {
      n: '5',
      text: T(
        'Em {וַיֹּאמֶר} o sujeito vem do contexto ({אֱלֹהִים}), não de um pronome: o hebraico dispensa o pronome explícito.',
      ),
    },
  ],
  notes: [
    {
      label: T('Exegese:'),
      text: T(
        'Como o wayyiqtol conta o que está acontecendo, a sua frequência é um termômetro teológico. Nos relatos de criação (Gn 1) ele domina; nosSALmos e nos provérbios, o qatal e o particípio dominam; nos salmos históricos, a cadeia de {וַ} cresce. Ler a proporção entre os dois é ler a atitude do autor diante dos fatos: o que está posto em cena ou o que já é fato consumado.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'O nome «wayyiqtol» é moderno: os gramáticos hebrais antigos não o usavam, chamavam o phenomenon de {וַיִּקְטֹל} e estudavam-no como uma das «formas Quatals» (as dez terminações de {קטל}: {הוּא}, {הוּז}, {הוּם}…). Os missionários propuseram o termo atual, mais fácil de ensinar.',
      ),
    },
  ],
  examples: [
    { text: '{וַיֹּאמֶר}', gloss: T('e disse — {וַ} + dagesh + {אמר}') },
    { text: '{וַיַּרְא}', gloss: T('e viu — {וַיִּ} + {ראה}') },
    { text: '{וַיִּקְרָא}', gloss: T('e chamou — {וַיִּ} + {קרא}') },
    { text: '{וַיִּשְׁמַע}', gloss: T('e ouviu — {וַיִּ} + {שׁמע}') },
    { text: '{וַיָּבֹא}', gloss: T('e veio — de {בוא} (verbo fraco)') },
    { text: '{וַיַּבְדֵּל}', gloss: T('e separou — piel de {בדל} (Gn 1.4)') },
    { text: '{יֹאמַר}', gloss: T('dirá — futuro de {אמר} com holam') },
    { text: '{יִהְיֶה}', gloss: T('será — futuro de {היה}') },
    { text: '{יָבוֹא}', gloss: T('virá — futuro de {בוא} com {ב} forte') },
    { text: '{וְהִיא}', gloss: T('e ela — {ו} + sheva: simples coordenação') },
    { text: '{וַיְהִי}', gloss: T('e houve — narrativa de {היה} (Gn 1.3)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Verbos fracos: os três que mais aparecem'),
      head: [
        T('Verbo'),
        T('Qatal (passado)'),
        T('Infinitivo'),
        T('Yiqtol (futuro)'),
        T('Wayyiqtol'),
      ],
      rows: [
        [T('{אמר} «dizer»'), '{אָמַר}', '{לֵאמֹר}', '{יֹאמַר}', '{וַיֹּאמֶר}'],
        [T('{היה} «ser»'), '{הָיָה}', '{לִהְיוֹת}', '{יִהְיֶה}', '{וַיְהִי}'],
        [T('{בוא} «vir»'), '{בָּא}', '{לָבוֹא}', '{יָבוֹא}', '{וַיָּבֹא}'],
        [T('{מות} «morrer»'), '{מָת}', '{לָמוּת}', '{יָמוּת}', '{וַיָּמוּת}'],
      ],
    },
    {
      caption: T('Tabela 2 — O wayyiqtol na narrativa de Gênesis 1'),
      head: [T('Forma'), T('Glosa'), T('Referência')],
      rows: [
        ['{וַיֹּאמֶר}', T('e disse'), 'Gn 1.3'],
        ['{וַיְהִי}', T('e houve'), 'Gn 1.3'],
        ['{וַיַּרְא}', T('e viu'), 'Gn 1.4'],
        ['{וַיַּבְדֵּל}', T('e separou'), 'Gn 1.4'],
        ['{וַיִּקְרָא}', T('e chamou'), 'Gn 1.5'],
        ['{וַיַּעַשׂ}', T('e fez'), 'Gn 1.7'],
      ],
    },
    {
      caption: T('Tabela 3 — {וַ} narrativo ou simples coordenação?'),
      head: [T('Forma'), T('Sinal'), T('Leitura')],
      rows: [
        ['{וַיֹּאמֶר}', T('{וַ} + dagesh'), T('e disse (narrativa)')],
        ['{וְהִיא}', T('{ו} + sheva'), T('e ela')],
        ['{וְאֵת}', T('{ו} + sheva'), T('e (marcador)')],
        ['{וַיְהִי}', T('{וַ} + dagesh'), T('e houve (narrativa)')],
      ],
    },
  ],
};

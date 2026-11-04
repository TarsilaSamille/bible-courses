import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  section: T('O verbo: o presente e o aspecto'),
  title: T('Os verbos essenciais'),
  subtitle: T('{быть}, {идти}, {хотеть}, {мочь}, {есть} e verbos que o aspecto divide em dois'),
  body: C(`## Dez verbos, e dois que enganam o ouvido

Um verbo russo regular faz a desinência pelo tempo: em {читаю}, {читаешь}, {читают}, o tema {чита-} não se mexe. Os essenciais não têm tema fixo: {есть}, {хотел}, {может}, {шёл}, {был}, {будем} são formas que nenhuma regra produz, e são as que aparecem em toda página.

São poucos e pesam muito. {быть}, {идти}, {ходить}, {приходить}, {есть} (comer), {пить}, {спать}, {видеть}, {слышать}, {знать}, {думать}, {говорить}, {сказать}, {любить}, {хотеть}, {мочь}, {дать}, {взять}, {делать}, {читать}, {писать} cobrem quase tudo o que se diz num capítulo de Evangelho.

## {Быть}: o verbo que não tem presente

O russo não flexiona {быть} no presente. Aonde o português diz "eu sou", "ele é", "nós somos", o russo põe zero forma: {я студент}, {он доктор}, {мы здесь}. O presente de {быть} é um espaço vazio, e esse vazio entre sujeito e predicado é o que faz a frase russa andar.

O passado apareceu como {был}, {была}, {было}, {были}; e o futuro, como {буду}, {будешь}, {будет}, {будем}, {будете}, {будут}. Só a questão do 3.ªsing é um outro verbo: {есть} também diz "existe, é" em afirmações ontológicas, como {в начале было Слово}, onde {было} é neutro fraco porque {Слово} é neutro.

Quem aprende a falar russo traduz para o português como se o espaço vazio fosse um verbo, e fala "sou eu aqui"; quem fala com o russo põe espaço onde o português espera forma. As duas línguas dizem a mesma coisa, uma com sinal e uma sem.

## {Хотеть}: o infinitivo que fica sem partícula

{Хотеть}, "querer", tem conjugação de primeira pessoa em {-у} e o resto de segunda: {хочу}, {хочешь}, {хочет}, {хотим}, {хотите}, {хотят}. É um pouco de cada verbo, e é por isso que o ouvido russo o conhece mesmo sem nunca ter visto a palavra.

Quando alguém quer fazer algo, o russo põe o infinitivo direto: {я хочу читать}, {он хочет уйти}. Não há equivalente da partícula {чтобы} que o espanhol e o português exigem quando há troca de sujeito: {я хочу, чтобы ты пришёл} tem que mostrar o sujeito novo com {чтобы}.

## O aspecto: o par que um único verbo faz

Cada verbo russo vem em par de aspectos. O imperfeito fala do ato em curso, incompleto, iterativo: {читать}. O perfeito fala do ato concluído, fechado com um resultado: {прочитать}. O verbo perfeito não tem presente real — {прочитаю} é um futuro simples, que só fala de "vou ler e terminar". O imperfeito tem o presente: {читаю} é o que está acontecendo agora.

A escolha não se traduz por tempo verbal. "Li o livro" pode ser {я читал} (li, descarregado) ou {я прочитал} (terminei, e o livro está lido). O russo marca com o prefixo {про-} o que o português marca com o contexto.

## Na Bíblia

João 1:1 traz {В начале было Слово}, no começo era o Verbo. {было} é o neutro do passado de {быть}, e {Слово} é neutro, porque no evangelho a identidade do Verbo se diz sem artigo. João 3:16 traz {возлюбил Бог мир}, o perfeito passado de {возлюбить}, amar, porque o que Deus fez é um fato concluído.

Marcos 4:39 traz {Замолчи и перестань бушевать}, e são dois imperativos perfeitos: {замолчи} é o imperativo de {замолчать}, parar de falar, e {перестань} é de {перестать}, deixar de fazer. O grego é um imperativo aoristo, e o russo traduz por perfeito porque é exatamente "para de uma vez".

O leitor cuidadoso percebe que o verbo russo escolhe o aspecto antes do tempo. {Был} ou {читал} não decidem se a frase é passada; {был} fala do que era, {читал} fala do que se fazia sem término. {Прочитал} e {увидел} dizem que algo aconteceu e acabou. O tempo mora nos sufixos; o aspecto mora no prefixo ou no próprio radical.`),
  vocab: [
    V('быть', 'быть', 'ser, haver'),
    V('был', 'быть', 'ele era/foi'),
    V('было', 'быть', 'era/foi (neutro)'),
    V('буду', 'быть', 'eu serei'),
    V('есть', 'есть', 'comer; haver (imperativo)'),
    V('идти', 'идти', 'ir a pé'),
    V('пойти', 'пойти', 'ir (perf.)'),
    V('хотеть', 'хотеть', 'querer'),
    V('хочу', 'хотеть', 'eu quero'),
    V('мочь', 'мочь', 'poder'),
    V('могу', 'мочь', 'eu posso'),
    V('дать', 'дать', 'dar (perf.)'),
    V('взять', 'взять', 'tomar (perf.)'),
    V('читать', 'читать', 'ler (imperf.)'),
    V('прочитать', 'прочитать', 'ler (perf.)'),
    V('видеть', 'видеть', 'ver (imperf.)'),
    V('сказать', 'сказать', 'dizer (perf.)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'O russo não flexiona {быть} no presente: {я студент}, {он доктор}, {мы здесь}. O presente é zero.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Cada verbo russo vem em par: imperfectivo ({читать}, {писать}, {делать}) e perfeito ({прочитать}, {написать}, {сделать}). O perfeito não tem presente real.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{хочу} é a 1.ª pessoa de {хотеть}, forma irregular com sufixo {-у}; o objeto é infinitivo direto: {я хочу читать}. Com troca de sujeito, entra {чтобы}: {я хочу, чтобы он пришёл}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{прочитаю}, {напишу}, {сделаю} são futuros simples porque o perfeito não flexiona presente: o que parece presente de perfeito é o futuro.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O imperativo sai da 2.ª pessoa menos a desinência: {читай}, {пиши}, {иди}. O perfeito dá a ordem do que se cumpre uma vez: {прочитай}, {напиши}.',
      ),
    },
  ],
  notes: [
    {
      label: T('{Есть} faz dois verbos ao mesmo tempo'),
      text: T(
        '{есть} diz "comer" (imperfectivo, com particípio {ел}), e em {это есть истина} aparece como cópula de identidade ontológica — a mesma palavra com duas leituras de frase.',
      ),
    },
    {
      label: T('{Мочь} e o futuro de perfeito'),
      text: T(
        '{мочь} tem o futuro perfeito raro; o russo prefere dizer {смогу} como presente de {смочь}, o perfeito de {мочь}. Assim, o que parece presente de {смочь} é o futuro, e {мог} é o único passado que {мочь} tem.',
      ),
    },
  ],
  examples: [
    { text: 'В начале было Слово.', gloss: T('{было}: neutro do passado de {быть} (Jo 1:1).') },
    { text: 'Я студент.', gloss: T('Cópula zero: o presente de {быть} não se escreve.') },
    { text: 'Он был дома.', gloss: T('{был}: passado de {быть}, 3.ª masc.') },
    { text: 'Я буду дома.', gloss: T('{буду}: futuro de {быть}, 1.ª sing.') },
    { text: 'Я хочу читать.', gloss: T('{хочу} + infinitivo: o infinitivo não tem partícula.') },
    { text: 'Она хочет прийти.', gloss: T('{хочет}: 3.ª sing. de {хотеть}; {прийти} é perfeito.') },
    { text: 'Я читаю.', gloss: T('{читаю}: presente imperfectivo, agora.') },
    {
      text: 'Я прочитаю.',
      gloss: T('{прочитаю}: perfeito, forma de futuro — não há presente de perfeito.'),
    },
    {
      text: 'Замолчи и перестань.',
      gloss: T('Imperativos perfeitos: {замолчи} e {перестань} (Mc 4:39).'),
    },
    { text: 'Он взял хлеб.', gloss: T('{взял}: passado de perfeito {взять}, tomar.') },
  ],
  tables: [
    {
      caption: T('O presente dos essenciais'),
      head: ['Лицо', 'идти', 'хотеть', 'мочь', 'дать (perf)', 'читать'],
      rows: [
        ['я', 'иду', 'хочу', 'могу', 'дам', 'читаю'],
        ['ты', 'идёшь', 'хочешь', 'можешь', 'дашь', 'читаешь'],
        ['он/она', 'идёт', 'хочет', 'может', 'даст', 'читает'],
        ['мы', 'идём', 'хотим', 'можем', 'дадим', 'читаем'],
        ['вы', 'идёте', 'хотите', 'можете', 'дадите', 'читаете'],
        ['они', 'идут', 'хотят', 'могут', 'дадут', 'читают'],
      ],
    },
    {
      caption: T('O par de aspecto dos essenciais'),
      head: [T('imperfectivo'), T('perfeito'), T('glossa')],
      rows: [
        ['читать', 'прочитать', T('ler')],
        ['писать', 'написать', T('escrever')],
        ['делать', 'сделать', T('fazer')],
        ['говорить', 'сказать', T('dizer')],
        ['видеть', 'увидеть', T('ver')],
        ['брать', 'взять', T('tomar')],
        ['давать', 'дать', T('dar')],
        ['идти', 'пойти', T('ir a pé')],
      ],
    },
    {
      caption: T('O passado dos essenciais'),
      head: ['инфинитив', 'я', 'она', 'они'],
      rows: [
        ['быть', 'был', 'была', 'были'],
        [T('есть (comer)'), 'ел', 'ела', 'ели'],
        ['хотеть', 'хотел', 'хотела', 'хотели'],
        ['мочь', 'мог', 'могла', 'могли'],
        ['дать', 'дал', 'дала', 'дали'],
        ['взять', 'взял', 'взяла', 'взяли'],
        ['идти', 'шёл', 'шла', 'шли'],
        ['прийти', 'пришёл', 'пришла', 'пришли'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma da 1.ª pessoa de {хотеть}?'),
    options: [T('{хочу}'), T('{хочешь}'), T('{хотю}'), T('{хочю}')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete "В начале было ___" com o sujeito de João 1:1.'),
      answer: 'Слово',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo imperfectivo ao seu par perfeito.'),
      pairs: [
        { a: T('{читать}'), b: T('{прочитать}') },
        { a: T('{писать}'), b: T('{написать}') },
        { a: T('{делать}'), b: T('{сделать}') },
        { a: T('{говорить}'), b: T('{сказать}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Em "Я прочитаю", a forma é:'),
      options: [
        T('presente de perfeito'),
        T('futuro simples com aspecto perfeito'),
        T('imperativo'),
        T('passado de imperfectivo'),
      ],
      answer: 1,
    },
  ],
};

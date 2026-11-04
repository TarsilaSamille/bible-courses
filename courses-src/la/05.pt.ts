import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('Declinações e o verbo sum'),
  title: T('Os verbos essenciais'),
  subtitle: T('eo, venio, sum, habeo, facio, dico: os verbos que sustentam quase toda frase'),
  body: C(`## Doze verbos, e dois que não têm regra

Um verbo latino regular tira a terminação e devolve uma nova: em {amo}, {amas}, {amat}, o tema {ama-} não se mexe. Os essenciais não têm tema fixo: {eo}, {venio}, {sum}, {habeo}, {facio}, {dico}, {video}, {audio}, {edo}, {bibo}, {dormio}, {morior}, {nascor}, {lego}, {scribo}, {loquor}, {vestio}, {possum}, {volo}, {scio}, {fero}, {pono} são formas que nenhuma regra produz, e são o que se lê em toda página.

São poucos e pesam muito. {eo} ir, {venio} vir, {sum} ser, {habeo} ter, {facio} fazer, {dico} dizer, {video} ver, {audio} ouvir, {edo} comer, {bibo} beber, {dormio} dormir, {morior} morrer, {nascor} nascer, {lego} ler, {scribo} escrever, {loquor} falar, {vestio} vestir, {possum} poder, {volo} querer, {scio} saber, {fero} levar, {pono} pôr cobrem quase tudo o que se diz num capítulo de Evangelho.

## sum: o verbo que não tem presente regular

{sum} é o verbo mais irregular do latim: {sum}, {es}, {est}, {sumus}, {estis}, {sunt}. O imperfeito é {eram}, {eras}, {erat}, {eramus}, {eratis}, {erant}, e o futuro {ero}, {eris}, {erit}, {erimus}, {eritis}, {erunt}. Não há tema comum entre o presente e o imperfeito — é memorizar, não deduzir.

{sum} também é o auxiliar do perfeito passivo: {amatus sum}, {amatus es}, {amatus est}. O particípio concorda com o sujeito, e {sum} fecha a frase. O português traduz por «foi amado», mas o latim diz «amado é» — o verbo ser carrega o tempo.

## eo e venio: ir e vir

{eo} «ir» é irregular no presente: {eo}, {is}, {it}, {imus}, {itis}, {eunt}. O imperfeito é {ibam}, {ibas}, {ibat}, {ibamus}, {ibatis}, {ibant}, e o futuro {ibo}, {ibis}, {ibit}, {ibimus}, {ibitis}, {ibunt}. O tema muda de {i-} para {ib-} — é a marca do verbo.

{venio} «vir» é regular na 4ª conjugação: {venio}, {venis}, {venit}, {venimus}, {venitis}, {veniunt}. O imperfeito é {veniebam}, {veniebas}, {veniebat}, {veniebamus}, {veniebatis}, {veniebant}, e o futuro {veniam}, {venies}, {veniet}, {veniemus}, {venietis}, {venient}. A diferença de sentido é a do português: {eo} indica movimento para fora, {venio} para dentro.

## Na Bíblia

João 1:1 começa com {erat}: {In principio erat Verbum}, no começo era o Verbo. {erat} é o imperfeito de {sum}, 3ª pessoa do singular. E João 1:3 fecha com {factum est}, o perfeito passivo de {facio}: tudo foi feito. O latim que começa com {erat} termina com {factum est}: o Verbo já era, e tudo o resto foi feito.

Marcos 4:39 traz {tacere}, «calar»: é o infinitivo de {taceo}, «estar calado». O versículo inteiro mostra o método: o latim coloca a ordem de Jesus no infinitivo para dizer que o mar não responde à ordem, mas a Cristo.`),
  vocab: [
    V('eo', 'eo', 'eu vou'),
    V('venio', 'venio', 'vir'),
    V('veni', 'venio', 'vem'),
    V('sum', 'sum', 'ser'),
    V('eram', 'sum', 'era'),
    V('habeo', 'habeo', 'ter'),
    V('habebam', 'habeo', 'tinha'),
    V('facio', 'facio', 'fazer'),
    V('feci', 'facio', 'fiz'),
    V('dico', 'dico', 'dizer'),
    V('dixi', 'dico', 'disse'),
    V('video', 'video', 'ver'),
    V('vidi', 'video', 'vi'),
    V('audio', 'audio', 'ouvir'),
    V('audivi', 'audio', 'ouvi'),
    V('edo', 'edo', 'comer'),
    V('bibo', 'bibo', 'beber'),
    V('dormio', 'dormio', 'dormir'),
    V('morior', 'morior', 'morrer'),
    V('nascor', 'nascor', 'nascer'),
    V('lego', 'lego', 'ler'),
    V('scribo', 'scribo', 'escrever'),
    V('loquor', 'loquor', 'falar'),
    V('vestio', 'vestio', 'vestir'),
    V('possum', 'possum', 'poder'),
    V('volo', 'volo', 'querer'),
    V('scio', 'scio', 'saber'),
    V('fero', 'fero', 'levar'),
    V('pono', 'pono', 'pôr'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{sum} é o verbo mais irregular: {sum}, {es}, {est}, {sumus}, {estis}, {sunt}. Imperfeito {eram}, {eras}, {erat}. Futuro {ero}, {eris}, {erit}.',
      ),
    },
    {
      n: '§2',
      text: T(
        '{sum} é o auxiliar do perfeito passivo: {amatus sum}, {amatus es}, {amatus est}. O particípio concorda com o sujeito.',
      ),
    },
    {
      n: '§3',
      text: T(
        '{eo} é irregular no presente: {eo}, {is}, {it}, {imus}, {itis}, {eunt}. Imperfeito {ibam}, {ibas}, {ibat}. Futuro {ibo}, {ibis}, {ibit}.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{venio} é regular na 4ª conjugação: {venio}, {venis}, {venit}, {venimus}, {venitis}, {veniunt}. Imperfeito {veniebam}, {veniebas}, {veniebat}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'João 1:1 usa {erat} (imperfeito de {sum}) e João 1:3 usa {factum est} (perfeito passivo de {facio}): o Verbo já era, e tudo o resto foi feito.',
      ),
    },
  ],
  notes: [
    {
      label: T('O eo que não é «ir»'),
      text: T(
        '{eo} indica movimento para fora, {venio} para dentro. Quem traduz os dois por «ir» perde a direção. O imperfeito de {eo} é {ibam}, não {eobam} — o tema muda.',
      ),
    },
    {
      label: T('O sum que não é «ser»'),
      text: T(
        '{sum} é o verbo «ser», mas também o auxiliar do perfeito passivo. Em {amatus sum}, {sum} carrega o tempo e o particípio carrega o estado.',
      ),
    },
  ],
  examples: [
    {
      text: 'In principio erat Verbum',
      gloss: T('Jo 1:1 — {erat} é imperfeito de {sum}: o Verbo já era.'),
    },
    {
      text: 'et Verbum erat apud Deum',
      gloss: T('Jo 1:1 — {erat} com {apud}: o Verbo estava junto de Deus.'),
    },
    {
      text: 'omnia per ipsum facta sunt',
      gloss: T('Jo 1:3 — {facta sunt} é perfeito passivo de {facio}: tudo foi feito.'),
    },
    { text: 'eo ad te', gloss: T('{eo} com {ad}: vou a ti.') },
    { text: 'venio ad te', gloss: T('{venio} com {ad}: venho a ti.') },
    { text: 'habeo unum filium', gloss: T('{habeo} com objeto direto: tenho um filho.') },
    { text: 'dico vobis', gloss: T('{dico} com dativo: digo-vos.') },
    { text: 'video caelum', gloss: T('{video} com objeto direto: vejo o céu.') },
    { text: 'audio vocem', gloss: T('{audio} com objeto direto: ouço a voz.') },
    { text: 'tacere', gloss: T('Mc 4:39 — infinitivo de {taceo}: calar.') },
  ],
  tables: [
    {
      caption: T('O presente e o imperfeito de sum'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'sum', 'eram', 'ero'],
        [T('2.ª sing.'), 'es', 'eras', 'eris'],
        [T('3.ª sing.'), 'est', 'erat', 'erit'],
        [T('1.ª pl.'), 'sumus', 'eramus', 'erimus'],
        [T('2.ª pl.'), 'estis', 'eratis', 'eritis'],
        [T('3.ª pl.'), 'sunt', 'erant', 'erunt'],
      ],
    },
    {
      caption: T('O presente e o imperfeito de eo'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'eo', 'ibam', 'ibo'],
        [T('2.ª sing.'), 'is', 'ibas', 'ibis'],
        [T('3.ª sing.'), 'it', 'ibat', 'ibit'],
        [T('1.ª pl.'), 'imus', 'ibamus', 'ibimus'],
        [T('2.ª pl.'), 'itis', 'ibatis', 'ibitis'],
        [T('3.ª pl.'), 'eunt', 'ibant', 'ibunt'],
      ],
    },
    {
      caption: T('O presente e o imperfeito de venio'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Futuro')],
      rows: [
        [T('1.ª sing.'), 'venio', 'veniebam', 'veniam'],
        [T('2.ª sing.'), 'venis', 'veniebas', 'venies'],
        [T('3.ª sing.'), 'venit', 'veniebat', 'veniet'],
        [T('1.ª pl.'), 'venimus', 'veniebamus', 'veniemus'],
        [T('2.ª pl.'), 'venitis', 'veniebatis', 'venietis'],
        [T('3.ª pl.'), 'veniunt', 'veniebant', 'venient'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {In principio erat Verbum}, qual o tempo de {erat}?'),
    options: [T('Presente'), T('Imperfeito'), T('Futuro'), T('Perfeito')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "omnia per ipsum ___" com o perfeito passivo de {facio} para "foi feito".',
      ),
      answer: 'facta sunt',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu imperfeito.'),
      pairs: [
        { a: T('{eo}'), b: T('{ibam}') },
        { a: T('{venio}'), b: T('{veniebam}') },
        { a: T('{sum}'), b: T('{eram}') },
        { a: T('{habeo}'), b: T('{habebam}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual o futuro de {sum} na 1ª pessoa?'),
      options: [T('{ero}'), T('{sum}'), T('{eram}'), T('{erit}')],
      answer: 0,
    },
  ],
};

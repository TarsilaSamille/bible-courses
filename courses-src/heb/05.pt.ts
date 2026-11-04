import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  title: T('Pronomes e o passado (qatal)'),
  subtitle: T('אֲנִי…הֵם · כָּתַבְתִּי…כָּתְבוּ — o sujeito gruda no verbo'),
  section: T('Substantivos, adjetivos e pronomes'),
  body: C(`## Os pronomes independentes

O hebraico tem dez pronomes pessoais plenos, escritos como palavras inteiras: {אֲנִי} «eu», {אַתָּה} «tu (m.)», {אַתְּ} «tu (f.)», {הוּא} «ele», {הִיא} «ela», {אֲנַחְנוּ} «nós», {אַתֶּם} «2.ª pl. (m.)», {אַתֶּן} «2.ª pl. (f.)», {הֵם} «eles», {הֵן} «elas». Todos começam por {א} ou {ה} — é a marca visual da pessoa.

Esses pronomes são raros: a forma comum é o **verbo com sufixo**. Em {כָּתַבְתִּי} o pronome eu já está colado no verbo, então o tradutor português escreve «escrevi» e o espanhol «escribí», sem sujeito visível. A gramática hebraica permite essa omissão em quase toda frase finita.

## A raiz e as três camadas

Um verbo hebraico é sempre: **raiz** (consonas) + **tempo** (vogais) + **pessoa** (sufixos). Com a raiz {כתב} «escrever»:

{כָּתַבְתִּי} «eu escrevi» (raiz {כתב} + {ַ} do qatal + {־תִּי} de 1.ª sing.)
{כָּתַבְתָּ} «tu (m.) escreveste» ({־תָּ} de 2.ª m.)
{כָּתַבְתְּ} «tu (f.) escreveste» ({־תְּ} de 2.ª f.)
{כָּתַב} «ele escreveu» (3.ª m.: **sem sufixo**)
{כָּתְבָה} «ela escreveu» (3.ª f.: {־ה} com qamats)
{כָּתַבְנוּ} «nós escrevemos» ({־נוּ} de 1.ª pl.)
{כָּתְבוּ} «eles escreveram» ({־וּ} de 3.ª pl.)

As duas formas «sem nada» — {כָּתַב} e {כָּתְבָה} — são as mais frequentes do idioma inteiro.

## O qatal não é só passado

Chamamos de qatal a forma com {ַ} (pataj) no singular. Historicamente é um perfectivo, e na Bíblia cobre três usos: (1) passado narrativo — {בָּרָא} «criou» (Gn 1.1); (2) presente de estado — {אֱלֹהִים טוֹב} «Deus é bom»; (3) modalidade — {יְהִי} «seja», {נַעֲשֶׂה} «façamos» (coortativo, cap. 16). Não procurei um passado «puro»: o contexto decide.

Um detalhe que economiza tempo: a 3.ª pessoa do singular é idêntica no qatal e no futuro ({כָּתַב} «escreveu» e «escreverá»). Só o contexto e as outras pessoas revelam o tempo.

## As vogais da raiz

O tempo mora nas vogais da raiz: {ַ} no singular ({כָּתַב}), {ָ} antes dos sufixos de 1.ª e 2.ª pessoa do plural ({כָּתַבְנוּ}, {כָּתְבוּ}). Raízes com {ו} normalmente mostram {וֹ} (holam) em vez de {ו}, como em {מוֹת} «morrer» e {יוֹדֵעַ} «saber».

## {הָיָה}, o verbo mais útil

{הָיָה} «ser, estar» serve para quase tudo: {הָיָה} «ele foi», {הָיְתָה} «ela foi», {הָיִיתִי} «eu fui», {הָיִינוּ} «nós fomos», {הָיוּ} «eles foram». Na forma de 3.ª sing. fora do início da frase, ele costuma aparecer como {יְהִי}: {וְלֹא יְהִי} «e não houve».

É com {הָיָה} que Deus responde no Êxodo 3:14: {אֶהְיֶה אֲשֶׁר אֶהְיֶה} «EU SOU O QUE SOU». Guarde essa frase — ela volta no capítulo 16 com o jussivo {יְהִי} «haja».

## Frases para montar

{אֲנִי כָּתַבְתִּי} «eu escrevi» (pronome explícito) · {כָּתַבְתִּי} «escrevi» (com sufixo) · {אַתָּה כָּתַבְתָּ} «tu escreveste» · {הוּא כָּתַב} «ele escreveu» · {אֲנַחְנוּ כָּתַבְנוּ} «nós escrevemos».`),
  vocab: [
    V('אֲנִי', 'אֲנִי', 'eu'),
    V('אַתָּה', 'אַתָּה', 'tu (masc.)'),
    V('הוּא', 'הוּא', 'ele'),
    V('הִיא', 'הִיא', 'ela'),
    V('אֲנַחְנוּ', 'אֲנַחְנוּ', 'nós'),
    V('הֵם', 'הֵם', 'eles'),
    V('כָּתַבְתִּי', 'כתב', 'eu escrevi'),
    V('כָּתַבְתָּ', 'כתב', 'tu escreveste'),
    V('כָּתְבָה', 'כתב', 'ela escreveu'),
    V('כָּתְבוּ', 'כתב', 'eles escreveram'),
    V('הָיָה', 'היה', 'ele foi/era'),
    V('יְהִי', 'היה', 'haja, seja'),
    V('כתב', 'כתב', 'escrever (raiz)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: «___ כָּתַבְתִּי» = «eu escrevi» (pronome).'),
    answer: 'אֲנִי',
    hint: T('O pronome de 1.ª pessoa do singular.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {כָּתְבָה} «ela escreveu», o {־ה} indica:'),
      options: [
        T('3.ª pessoa do singular feminino'),
        T('plural feminino'),
        T('1.ª pessoa do plural'),
        T('a partícula {ה} do substantivo'),
      ],
      answer: 0,
      hint: T('É o único caso em que a 3.ª pessoa recebe sufixo: {־ה} com qamats.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva o qatal de {כתב} para «nós escrevemos».'),
      answer: 'כָּתַבְנוּ',
      hint: T('Raiz {כתב} + vogal {ַ} + sufixo {־נוּ} de 1.ª pessoa do plural.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome à pessoa.'),
      pairs: [
        { a: '{אֲנִי}', b: T('1.ª sing.') },
        { a: '{אַתְּ}', b: T('2.ª fem. sing.') },
        { a: '{הֵן}', b: T('3.ª pl. fem.') },
        { a: '{אַתֶּם}', b: T('2.ª pl. masc.') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Por que {יְהִי} (Gn 1.3) é uma forma de {הָיָה}?'),
      options: [
        T('É uma raiz diferente, doeu-verbo «ver»'),
        T('É {הָיָה} na forma usual fora do início da frase'),
        T('É um particípio de {הָיָה}'),
        T('É um numeral'),
      ],
      answer: 1,
      hint: T('Compare {וְיְהִי} (Gn 1.5) com {הָיָה}: só o {־י} inicial se move.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Todo verbo finito = raiz + vogal de tempo + sufixo de pessoa; a 3.ª do singular masculine não recebe sufixo algum.',
      ),
    },
    {
      n: '2',
      text: T(
        'O pronome pessoal vive dentro do verbo: {כָּתַבְתִּי} já é «eu escrevi». Os pronomes independentes só aparecem por ênfase.',
      ),
    },
    {
      n: '3',
      text: T(
        'A vogal da raiz diz o tempo: {ַ} no singular ({כָּתַב}) e {ָ} antes dos sufixos plurais ({כָּתַבְנוּ}, {כָּתְבוּ}).',
      ),
    },
    {
      n: '4',
      text: T(
        'Qatal = perfectivo: serve para o passado, para o presente de estado e para a modalidade ({יְהִי} «seja»). O contexto decide.',
      ),
    },
    {
      n: '5',
      text: T(
        'A 3.ª pessoa do singular é idêntica em qatal e em futuro ({כָּתַב}); só as outras pessoas revelam o tempo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Atenção:'),
      text: T(
        'Não procure um pronome retractionário: em {וַיֹּאמֶר} (cap. 10) não há sufixo de pessoa nem pronome, e mesmo assim a tradução portuguesa é «e ele disse». O contexto e a concordância com o substantivo em {אֱלֹהִים} recuperam o sujeito. Isso é normal em hebraico e não é omissão do escriba.',
      ),
    },
    {
      label: T('Curiosidade:'),
      text: T(
        'Os dez pronomes ocupam poucas linhas na Bíblia porque raramente aparecem: o Antigo Testamento tem milhares de ocorrências de {הוּא} e {אֵת}, mas pouquíssimas orações em que o sujeito só pode ser o pronome. Por isso este curso se concentra nos verbos: eles é que carregam a pessoa.',
      ),
    },
  ],
  examples: [
    { text: '{אֲנִי}', gloss: T('eu — só aparece quando o verbo não o carrega') },
    { text: '{אַתָּה}', gloss: T('tu (m.) — o mesmo termo de {אַתְּ} só muda a vogal') },
    { text: '{הוּא}', gloss: T('ele — {ה} + {ו} (holam) + shureq') },
    { text: '{כָּתַב}', gloss: T('ele escreveu — sem sufixo: 3.ª m.') },
    { text: '{כָּתְבָה}', gloss: T('ela escreveu — {־ה} com qamats: 3.ª f.') },
    { text: '{כָּתַבְתִּי}', gloss: T('eu escrevi — {־תִּי}: 1.ª pessoa') },
    { text: '{כָּתַבְתֶּם}', gloss: T('vós escrevestes — {־תֶּם}: 2.ª pl. m.') },
    { text: '{כָּתְבוּ}', gloss: T('eles escreveram — {־וּ} e vogal {ָ} na raiz') },
    { text: '{הָיָה}', gloss: T('ele foi/era — o verbo mais versátil do idioma') },
    { text: '{אֶהְיֶה אֲשֶׁר אֶהְיֶה}', gloss: T('EU SOU O QUE SOU (Êx 3.14)') },
    { text: '{יְהִי}', gloss: T('haja, seja — {הָיָה} na forma usual não inicial') },
    { text: '{אֲנַחְנוּ}', gloss: T('nós — {א} + {נחנו}: marca de 1.ª pl.') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os dez pronomes pessoais'),
      head: [T('Pessoa'), T('Singular'), T('Plural')],
      rows: [
        [T('1.ª'), '{אֲנִי} «eu»', '{אֲנַחְנוּ} «nós»'],
        [T('2.ª m.'), '{אַתָּה} «tu»', '{אַתֶּם} «vós (m.)»'],
        [T('2.ª f.'), '{אַתְּ} «tu»', '{אַתֶּן} «vós (f.)»'],
        [T('3.ª m.'), '{הוּא} «ele»', '{הֵם} «eles»'],
        [T('3.ª f.'), '{הִיא} «ela»', '{הֵן} «elas»'],
      ],
    },
    {
      caption: T('Tabela 2 — Qatal de {כתב} «escrever»'),
      head: [T('Pessoa'), T('Sufixo'), T('Forma'), T('Glosa')],
      rows: [
        [T('3.ª m.'), T('—'), '{כָּתַב}', T('ele escreveu')],
        [T('3.ª f.'), '{־ה}', '{כָּתְבָה}', T('ela escreveu')],
        [T('2.ª m.'), '{־תָּ}', '{כָּתַבְתָּ}', T('tu escreveste')],
        [T('2.ª f.'), '{־תְּ}', '{כָּתַבְתְּ}', T('tu escreveste')],
        [T('1.ª'), '{־תִּי}', '{כָּתַבְתִּי}', T('eu escrevi')],
        [T('1.ª pl.'), '{־נוּ}', '{כָּתַבְנוּ}', T('nós escrevemos')],
        [T('2.ª pl. m.'), '{־תֶּם}', '{כָּתַבְתֶּם}', T('vós escribestes')],
        [T('3.ª pl.'), '{־וּ}', '{כָּתְבוּ}', T('eles escreveram')],
      ],
    },
    {
      caption: T('Tabela 3 — O verbo {הָיָה} «ser» em todo o paradigma'),
      head: [T('Pessoa'), T('Forma'), T('Glosa')],
      rows: [
        [T('3.ª m.'), '{הָיָה}', T('ele foi/era')],
        [T('3.ª f.'), '{הָיְתָה}', T('ela foi/era')],
        [T('2.ª m.'), '{הָיִיתָ}', T('tu foste')],
        [T('1.ª'), '{הָיִיתִי}', T('eu fui')],
        [T('1.ª pl.'), '{הָיִינוּ}', T('nós fomos')],
        [T('3.ª pl.'), '{הָיוּ}', T('eles foram')],
        [T('Forma corriqueira (não inicial)'), '{יְהִי}', T('haja/seja (Gn 1.3)')],
      ],
    },
  ],
};

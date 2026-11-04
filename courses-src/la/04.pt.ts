import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Adjetivos de 1.ª e 2.ª e o verbo sum'),
  subtitle: T('{bonus, -a, -um} concorda com o substantivo; {sum, es, est}'),
  section: T('Declinações e o verbo sum'),
  body: C(`## Um adjetivo, três terminações

Em latim, um único adjetivo tem **três** formas de referência — uma para cada gênero — e é a concordância que escolhe qual usar. {Bonus} é masculino, {bona} feminino, {bonum} neutro. O mesmo substantivo {verbum} pode receber os três:

{Verbum bonum} «a boa palavra»;
{Verb bona} «o bom (verbo)»;
{Pueri boni} «os bons meninos» (meninos bons).

O adjective concorda com o substantivo em **gênero, número e caso**. A terminação do adjetivo é idêntica à do substantivo: um adjetivo de 1.ª/2.ª declinação funciona como {bonus}: {bonā} é ablativo feminino, {bonīs} é dativo plural de qualquer gênero.

Há uma armadilha: nos textos da Vulgata, adjetivos como {sanctus} podem substantivar-se e virar substantivos — {sancti} «os santos», {sanctum} «o que é santo». O contexto resolve.

## Sum: o verbo mais irregular do latim

{sum} «ser» é o verbo que você mais vai encontrar, e o mais irregular: sua raiz é {es-} (assim em {sum}, {es}, {sunt}), o que produz uma série de formas que não se parecem com nada:

| Pessoa | Presente | Imperfeito | Perfeito |
|---|---|---|---|
| eu | sum | eram | fui |
| tu | es | eras | fuisti |
| ele/ela | est | erat | fuit |
| nós | sumus | eramus | fuimus |
| vós | estis | eratis | fuistis |
| eles/elas | sunt | erant | fuerunt |

Observe: {sum} + {b} = {sub}: {sub-} é o prefixo de {suble-} «sobreviver», {sub-} «embaixo». Aí {sub} é a única pista de que o verbo tem raiz {es}.

## Est, erat, erat

A Vulgata usa o verbo {sum} mais no **imperfeito** do que no presente, porque el latín prefiere narrar una acción continua a un estado seco. El Evangelio de Juan abre com três imperfeitos seguidos de um presente — e a mudança é deliberada:

{In principio erat Verbum} «No princípio **era** a Palavra» — duração sem princípio;
{Et Verbum erat apud Deum} «e a Palavra **era** com Deus» — coexistência;
{Et Deus erat Verbum} «e Deus **era** a Palavra» — identificação;
{Hic erat et hic est et hic venturus est} «Aqui **era**, e aqui **é**, e aqui virá» (Apocalipse 1:4).

A mudança do {erat} para o {est} marca a passagem da eternidade para o tempo. Se você repara que o verbo {sum} é o único que não tem radical supino, entenderá por que os tradutores sempre o traduzem por «ser» e não por «estar».`),
  vocab: [
    V('bonus', 'bonus', 'bom (masc.)'),
    V('bona', 'bonus', 'bom (fem.)'),
    V('malus', 'malus', 'mau (masc.)'),
    V('magnus', 'magnus', 'grande'),
    V('parvus', 'parvus', 'pequeno'),
    V('verus', 'verus', 'verdadeiro'),
    V('primus', 'primus', 'primeiro'),
    V('pulcher', 'pulcher', 'formoso'),
    V('sanctus', 'sanctus', 'santo'),
    V('sum', 'sum', 'ser, estar'),
    V('es', 'sum', 'és (2.ª sing.)'),
    V('est', 'sum', 'é (3.ª sing.)'),
    V('sunt', 'sum', 'são'),
    V('erat', 'sum', 'era (imperf.)'),
    V('fuit', 'sum', 'foi (perfeito)'),
    V('Deus', 'Deus', 'Deus'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {puella bona rosam amat}, o que concorda e por quê?'),
    options: [
      T('{bona} concorda com {puella}: feminino singular nominativo'),
      T('{bona} concorda com {rosam}: feminino singular acusativo'),
      T('{bona} concorda com {amat}: verbo presente'),
      T('{bona} não concorda com nada: é um advérbio'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Por que {sunt} e {est} não se parecem, se o verbo é o mesmo?'),
      options: [
        T('Porque {sum} é irregular: a raiz é {es-}'),
        T('Porque são de duas declinações diferentes'),
        T('Porque {sunt} é um substantivo'),
        T('Porque a Vulgata escreve de forma irregular'),
      ],
      answer: 0,
      hint: T('Regra §4.'),
    },
    {
      kind: 'fill',
      prompt: T('Imperfeito de {sum}, 3.ª pessoa do singular: e_a_'),
      answer: 'erat',
      hint: T('A forma aparece em {In principio erat Verbum}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue {bonus} à concordância correspondente'),
      pairs: [
        { a: T('bonus'), b: T('masc. nom. sing.') },
        { a: T('bonum'), b: T('neut. nom./acu. sing.') },
        { a: T('bonae'), b: T('fem. gen./dat. sing.') },
        { a: T('bonis'), b: T('dat./abl. plural, qualquer gênero') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O adjetivo concorda com o substantivo em gênero, número e caso — e a terminação é a mesma do substantivo.',
      ),
    },
    {
      n: '2',
      text: T('Um adjetivo de 1.ª/2.ª tem três formas de referência: {bonus}, {bona}, {bonum}.'),
    },
    {
      n: '3',
      text: T('A posição do adjetivo é livre: {puer bonus} e {bonus puer} dizem o mesmo.'),
    },
    {
      n: '4',
      text: T(
        '{sum} tem raiz {es-} e nenhuma forma regular: o único jeito é decorar o paradigma inteiro.',
      ),
    },
    {
      n: '5',
      text: T(
        'O latim usa o imperfeito de {sum} para exprimir duração sem começo; o presente, para um estado delimitado.',
      ),
    },
  ],
  notes: [
    {
      label: T('Pista de radical:'),
      text: T(
        'Se em uma palavra você reconhece {es-} seguido de algo, provavelmente é forma de {sum}: {praes-ens} «presente» (de *praesum*, estou presente), {ab-sens}, {potens}. É a única família de palavras que guarda a raiz {es-} viva no latim.',
      ),
    },
    {
      label: T('Adjetivo substantivado:'),
      text: T(
        'Quando um adjetivo perde o substantivo, vira substantivo: {bonum} «o bem», {sancti} «os santos», {electi} «os eleitos». Em {Tu solus bonus in bonis} (Marcos 10:18), {bonus} tem sentido substantivo: «só tu és bom».',
      ),
    },
  ],
  examples: [
    { text: 'bonus', gloss: T('bom (masc. nom. sing.)') },
    { text: 'bona', gloss: T('bom (fem. nom. sing.)') },
    { text: 'bonum', gloss: T('bom (neutro), ou «o bem»') },
    { text: 'sum', gloss: T('sou, sou') },
    { text: 'es', gloss: T('és (2.ª sing.)') },
    { text: 'est', gloss: T('é (3.ª sing.)') },
    { text: 'sunt', gloss: T('são') },
    { text: 'erat', gloss: T('era (imperfeito)') },
    { text: 'fuit', gloss: T('foi (perfeito)') },
    {
      text: 'In principio erat Verbum',
      gloss: T('«No princípio era a Palavra» — {erat}, não {est}'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Adjetivos de 1.ª e 2.ª: {bonus, -a, -um}'),
      head: [T('Caso'), T('Masc.'), T('Fem.'), T('Neut.')],
      rows: [
        ['Nom.', 'bonŭs', 'bonă', 'bonum'],
        ['Voc.', 'bonĭ', 'bonă', 'bonum'],
        ['Gen.', 'bonī', 'bonāe', 'bonī'],
        ['Dat.', 'bonō', 'bonāe', 'bonō'],
        ['Acu.', 'bonum', 'bonam', 'bonum'],
        ['Abl.', 'bonō', 'bonā', 'bonō'],
        ['Nom. pl.', 'bonī', 'bonae', 'bonă'],
        ['Acu. pl.', 'bonōs', 'bonās', 'bonă'],
        ['Dat./Abl. pl.', 'bonīs', 'bonīs', 'bonīs'],
      ],
    },
    {
      caption: T('Tabela 2 — Verbo {sum}: presente, imperfeito, perfeito'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Perfeito')],
      rows: [
        [T('1.ª sing.'), 'sum', 'eram', 'fui'],
        [T('2.ª sing.'), 'es', 'eras', 'fuisti'],
        [T('3.ª sing.'), 'est', 'erat', 'fuit'],
        [T('1.ª pl.'), 'sumus', 'eramus', 'fuimus'],
        [T('2.ª pl.'), 'estis', 'eratis', 'fuistis'],
        [T('3.ª pl.'), 'sunt', 'erant', 'fuerunt'],
      ],
    },
  ],
};

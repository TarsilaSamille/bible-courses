import { C, T, V } from '../shared.mts';

export default {
  id: 1,
  title: T('O alfabeto e a pronúncia do latim'),
  subtitle: T('v = «u» de {vicus}, c e g, h muda — como soa'),
  section: T('O alfabeto e a pronúncia'),
  body: C(`## A face do alfabeto

O latim usa as 23 letras do alfabeto latino, sem {j}, sem {u} consonantal e sem {w}. Não há acentos: o que distingue {a} de {ă}, ou {e} de {ĕ}, é apenas a posição na sílaba. Para o principiante basta saber que vogais breves e longas mudam o peso da sílaba:

- {ă} seguida de uma só consoante: {ă-maf};
- {ā} seguida de duas ou mais: {ā-mā-ter};
- {ē} longa quase sempre fechada: {rēg-num}; {ĕ} breve aberta: {rĕ-gĕ-na};
- {ŏ} em pausa, {ō} dentro de palavra: {ĕ-gŏ}, {clŏ-rum}.

Quem fala português ou espanhol vai errar em seis pontos:

{c} = {k} ante {a, o, u}; = «g» ante {e, i, y}: {Cĭ-vĭtas}, Cēsar;
{g} = {g} ante {a, o, u}; = «j» ante {e, i, y}: {genus}, {Gĕnĕ-sis};
{h} é sempre muda: {homo} lê-se «ômo», habet «ábet»;
{v} soa como o {u} de {vicus}: {vĕ-nĕ-rĕ}, {vŏ-cābŭlum};
{i} e {u} são consoantes antes de vogal: {iam}, {uă-tĕr};
{x} vale {cs}: {dix-it}, axis.

## Vogais e semivogais

As cinco vogais {a, e, i, o, u} formam ditongos e hiatos. {ae} e {oe} não são ditongos: são grafias alternativas de {a} e {e} longas, e {ei} nunca é ditongo — é {e̱i}, e breve mais i. Em {deus} pronuncia-se «deus» com o {e} breve: é o exemplo mais famoso do latim e a prova de que o grego θεός não sobreviveu intacto.

## O que ler em voz alta

Diga sem hesitar:

{Deus} — viam — {Deus verbum} — {Deus verbum caro} — {In principio erat Verbum}.

Cada palavra já está marcada: o que aparece clicável na tela deixa você consultar a glosa passando o mouse.`),
  vocab: [
    V('Deus', 'Deus', 'Deus'),
    V('Dominus', 'Dominus', 'Senhor'),
    V('verbum', 'verbum', 'palavra'),
    V('homo', 'homo', 'homem (h muda)'),
    V('via', 'via', 'caminho, via'),
    V('lux', 'lux', 'luz'),
    V('terra', 'terra', 'terra'),
    V('aqua', 'aqua', 'água'),
    V('mater', 'mater', 'mãe'),
    V('pater', 'pater', 'pai'),
    V('filius', 'filius', 'filho'),
    V('vita', 'vita', 'vida'),
    V('mundus', 'mundus', 'mundo'),
    V('cor', 'cor', 'coração'),
    V('genus', 'genus', 'gente, raça (g = j)'),
    V('vicus', 'vicus', 'aldeia (v = u)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como soa o {v} de {vicus}?'),
    options: [
      T('Como o «v» de «viva» em português'),
      T('Como o «u» de «você»'),
      T('Muda'),
      T('Como o «b» de «bom»'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Em {genus} «gente, raça», o {g} inicial soa como…'),
      options: [
        T('{g} dura, como em {gallus}'),
        T('meia-vogal, como o «i» de «gente»'),
        T('{k} dura'),
        T('{h} brasileira'),
      ],
      answer: 1,
      hint: T('Regra §1: {g} antes de {e, i}.'),
    },
    {
      kind: 'fill',
      prompt: T('Escreva com letra latina o som «ômo» de {homo}: h_ _ _o'),
      answer: 'omo',
      hint: T('O {h} do latim nunca soa.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a palavra ao seu valor>'),
      pairs: [
        { a: T('Civitas'), b: T('«ki» — c = k ante i') },
        { a: T('Dixit'), b: T('«dicsit» — x = cs') },
        { a: T('Habet'), b: T('«ábet» — h muda') },
        { a: T('Genus'), b: T('«yenus» — g = j ante e') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    { n: '1', text: T('{c} e {g} mudam de valor diante de {e, i, y}: {genus} soa «yenus».') },
    { n: '2', text: T('{h} nunca soa e {v} sempre soa como {u}: habet, {vicus}.') },
    {
      n: '3',
      text: T('Vogal breve seguida de uma só consoante; vogal longa seguida de duas ou mais.'),
    },
    {
      n: '4',
      text: T('{ae} e {oe} são vogais longas, nunca ditongos; {ei} é {e} breve mais {i}.'),
    },
    {
      n: '5',
      text: T('{i} e {u} viram consoantes [j] e [w] antes de vogal: {iam} «já», {uăter}.'),
    },
  ],
  notes: [
    {
      label: T('Cuidado:'),
      text: T(
        'A ortografia latina não usa maiúsculas como marca de nome próprio. A Vulgata escreve {Dominus} e {Deus} com inicial maiúscula porque é um livro — não porque a palavra o exija. Siga a convenção onde for mais prático, sem crer que existe uma regra de santidade na letra.',
      ),
    },
    {
      label: T('Origem:'),
      text: T(
        '{Deus} vem do grego θεός e já tinha abreviado a pronúncia; por isso o {e} é breve. Palavras de origem grega conservam uma peculiaridade: Cēsar, {poēta}, {nēmō}.',
      ),
    },
  ],
  examples: [
    { text: 'Deus', gloss: T('Deus.') },
    { text: 'Dominus', gloss: T('O Senhor.') },
    { text: 'verbum', gloss: T('palavra (latim neutro, 2.ª decl.)') },
    { text: 'homo', gloss: T('homem — «ômo»') },
    { text: 'via', gloss: T('caminho, «via»') },
    { text: 'lux', gloss: T('luz') },
    { text: 'terra', gloss: T('terra, país') },
    { text: 'mater', gloss: T('mãe — «máter»') },
    { text: 'filius', gloss: T('filho') },
    { text: 'cor', gloss: T('coração') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Consoantes de valor enganoso'),
      head: [T('Letra'), T('Valor'), T('Exemplo')],
      rows: [
        ['c', T('k ante a, o, u; «g» ante e, i, y'), 'Civĭtas, Cēsar'],
        ['g', T('«g» ante a, o, u; «j» ante e, i, y'), 'Galla, genus'],
        ['h', T('muda'), 'homo, habet'],
        ['v', T('soa como «u» (labial)'), 'vicus, vōx'],
        ['x', T('vale «cs»'), 'dixit, axis'],
      ],
    },
    {
      caption: T('Tabela 2 — Vogais: breve e longa'),
      head: [T('Vogal'), T('Breve'), T('Longa')],
      rows: [
        ['a', 'ăgrĭ', 'māter'],
        ['e', 'rĕgĕna', 'rēgnum'],
        ['i', 'fĭlĭus', 'vīnum'],
        ['o', 'mŏdŭs', 'nōvus'],
        ['u', 'pŭer', 'cūr'],
      ],
    },
  ],
};

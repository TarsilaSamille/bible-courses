import { C, T, V } from '../shared.mts';

export default {
  id: 3,
  title: T('A segunda declinação'),
  subtitle: T('{dominus, domini} — o masculino que governa a Vulgata'),
  section: T('Declinações e o verbo sum'),
  body: C(`## O tema em -us e em -um

A 2.ª declinação reúne os masculinos em {-us} e os neutros em {-um}. O nominativo conserva a vogal: {dominus} «senhor», {servus} «escravo», {puer} «menino» no masculino; {bellum} «guerra», {verbum} «palavra», {templum} «templo» no neutro.

O tema é o radical sem a vogal do nominativo: {domino-}, {servo-}, {puer-}, {bello-}, {verbo-}. Daí vêm todas as formas:

| Caso | Masculino -us | Neutro -um |
|---|---|---|
| Nom. | dominus | bellum |
| Gen. | domini | belli |
| Dat. | domino | bello |
| Acu. | dominum | bellum |
| Abl. | domino | bello |

Dois casosidem repetem forma: o **nominativo e o vocativo** em -us/-um, e o **dativo e o ablativo** em -o. Compare com a 1.ª, onde era o genitivo e o dativo que coincidiam.

## O plural: -i e -a

O plural do masculino e do neutro troca a terminação por {ī}: {domini} «senhores», {belli} «guerras», {verba} «palavras». Note que o genitivo plural e o nominativo plural são idênticos — o mesmo acontece em inglês com *the men / of the men*.

| Caso | Masculino | Neutro |
|---|---|---|
| Nom. | dominī | bella |
| Voc. | dominī | bella |
| Gen. | dominōrum | bellōrum |
| Dat. | dominīs | bellīs |
| Acu. | dominōs | bella |
| Abl. | dominīs | bellīs |

O neutro é mais simples que o masculino: no acusativo e no nominativo plural, {bella} é idêntico, como em {verba} «palavras».

## Como reconhecer a 2.ª declinação

Quatro sinais bastam:

1. Nominativo em {us} (masculino) ou {um} (neutro) — {servus}, {templum};
2. Genitivo singular em {ī} — {servī}, {templī};
3. Genitivo plural em {ōrum} — {servōrum}, {templōrum};
4. A maioria termina em {ium} ou {ius} no dativo, próprio desta declinação — {scītōrium}, {hortīus}.

O sinal 3 é o mais confiável em textos: se você vir {-ōrum}, é 2.ª declinação quase sempre.

## Do latim cotidiano à Vulgata

O latim de Roma não era literário: era a fala da rua. Um livro de contas de agricultor, a baixa de um soldado, o rótulo de um tendero — era isso que a maioria das pessoas dizia. Em compensação, o latim da Vulgata é literário e regular, e é por isso mesmo que ele serve de norma.

O substantivo mais frequente de toda a Vulgata é {verbum}: «palavra». Ele aparece 1.385 vezes, e os textos de {Ioannes} usam a palavra com sentido de revelation — o que o tradutor grego loava.`),
  vocab: [
    V('dominus', 'dominus', 'senhor, domina'),
    V('servus', 'servus', 'escravo, servo'),
    V('puer', 'puer', 'menino, servo'),
    V('bellum', 'bellum', 'guerra'),
    V('verbum', 'verbum', 'palavra'),
    V('templum', 'templum', 'templo'),
    V('deus', 'deus', 'Deus'),
    V('populus', 'populus', 'povo'),
    V('filius', 'filius', 'filho'),
    V('frater', 'frater', 'irmão'),
    V('liber', 'liber', 'livre'),
    V('agricola', 'agricola', 'agricultor'),
    V('magister', 'magister', 'mestre, professor'),
    V('hortus', 'hortus', 'horta'),
    V('nummus', 'nummus', 'moeda'),
    V('Ioannes', 'Ioannes', 'João'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {servus servum amat}, o que governa o segundo {servum}?'),
    options: [
      T('O nominativo, por concordância'),
      T('O verbo {amat} «ama»'),
      T('Nada: é um ablativo de meio'),
      T('A preposição implícita {in}'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o sinal mais confiável de 2.ª declinação num texto corrido?'),
      options: [
        T('O nominativo em {us}'),
        T('O genitivo plural em {ōrum}'),
        T('O {i} do genitivo singular'),
        T('O dativo em {ius}'),
      ],
      answer: 1,
      hint: T('Regra §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitivo plural de {verbum} (palavras): verb_ _ _'),
      answer: 'verborum',
      hint: T('-ōrum é o genitivo plural masculino e neutro da 2.ª.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao que se sabe dela'),
      pairs: [
        { a: T('domino'), b: T('dativo ou ablativo — mesma forma') },
        { a: T('domini'), b: T('genitivo singular (também nom. plural)') },
        { a: T('verba'), b: T('neutro: nom. e acusativo plural') },
        { a: T('dominos'), b: T('acusativo plural masculino') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A 2.ª declinação tem nominativo e vocativo iguais ({us}/{um}) e dativo e ablativo iguais ({o}).',
      ),
    },
    {
      n: '2',
      text: T(
        'O neutro é mais simples que o masculino: acusativo plural iguala nominativo plural, como em {verba}.',
      ),
    },
    {
      n: '3',
      text: T('O genitivo plural em {-ōrum} identifica a 2.ª declinação em qualquer texto.'),
    },
    {
      n: '4',
      text: T(
        'Vigile nos {ius}: {templum} dá dativo {templō}, e {fīlius} dá {fīliō} — o {i} nunca se alonga.',
      ),
    },
    {
      n: '5',
      text: T(
        'O verbo transitivo governa o acusativo; se o substantivo estiver em -o, não é objeto.',
      ),
    },
  ],
  notes: [
    {
      label: T('O mais frequente:'),
      text: T(
        '{Verbum} é o substantivo mais frequente de toda a Vulgata: 1.385 ocorrências. Em {In principio erat Verbum} (João 1:1) o grego traz λόγος, que a Vulgata traduz por {Verbum} — e é essa palavra que o Evangelho de João usa do próprio Cristo.',
      ),
    },
    {
      label: T('Cuidado:'),
      text: T(
        'Genitivos gregos como {deī} «de Deus» e {Christī} «de Cristo» não seguem a declinação regular: sobraram resquícios do grego. Não os derive pelo paradigma; guarde-os como formas que se reconhece pela forma.',
      ),
    },
  ],
  examples: [
    { text: 'dominus', gloss: T('o senhor (nom. sing.)') },
    { text: 'domini', gloss: T('do senhor (gen. sing.) ou os senhores (nom. pl.)') },
    { text: 'domino', gloss: T('ao senhor, com o senhor (dat./abl. sing.)') },
    { text: 'dominum', gloss: T('o senhor (acus. sing.)') },
    { text: 'dominos', gloss: T('os senhores (acus. pl.)') },
    { text: 'verbum', gloss: T('palavra (neutro, nominativo e acusativo)') },
    { text: 'verba', gloss: T('palavras (nom./acus. plural)') },
    { text: 'puer', gloss: T('menino, e também servo') },
    { text: 'servus', gloss: T('escravo, servo') },
    { text: 'In principio erat Verbum', gloss: T('«No princípio era a Palavra» (João 1:1)') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — 2.ª declinação: {dominus, -i} e {bellum, -i}'),
      head: [T('Caso'), T('Sing. -us'), T('Plur. -us'), T('Sing. -um'), T('Plur. -um')],
      rows: [
        ['Nom.', 'dominŭs', 'dominī', 'bellum', 'bellă'],
        ['Voc.', 'dominŭs', 'dominī', 'bellum', 'bellă'],
        ['Gen.', 'dominī', 'dominōrum', 'bellī', 'bellōrum'],
        ['Dat.', 'dominō', 'dominīs', 'bellō', 'bellīs'],
        ['Acu.', 'dominum', 'dominōs', 'bellum', 'bellă'],
        ['Abl.', 'dominō', 'dominīs', 'bellō', 'bellīs'],
      ],
    },
    {
      caption: T('Tabela 2 — Genitivos irregulares de 2.ª, os que você vai encontrar na Vulgata'),
      head: [T('Forma'), T('Significado'), T('Exemplo')],
      rows: [
        ['deī', T('de Deus'), '{Deī} Filius «o Filho de Deus»'],
        ['Christī', T('de Cristo'), '{Christī} fīlius'],
        ['Iesū', T('de Jesus (latimizado)'), '{Iesū} Christus «Jesus Cristo»'],
        ['sanctī', T('do santo'), '{sanctī} spiritus'],
        ['caelī', T('do céu'), '{caelī} regnum'],
      ],
    },
  ],
};

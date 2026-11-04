import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('O comparativo e o superlativo'),
  subtitle: T('más/menos — el más… (relativo!)'),
  section: T('Adjetivos e advérbios'),
  body: C(`## Comparativo de desigualdade

Se forma com {más} ou {menos} + adjetivo, e o adjetivo **não muda**: {más grande} «maior» · {menos claro} «menos claro» · {más difícil} «mais difícil». Para igualdade, {tan} … {como}: {tan bueno como} «tão bom quanto» · {tan alto como} «tão alto quanto».

Em espanhol, {más} não pode iniciar frase: escreva {Más vale} (nunca «*Más vale»!). E, como em português, exige {que} ou {de lo que} quando se comparam coisas muito diferentes: {Es más alto de lo que era} «é mais alto do que era».

## {que} ou {como}?

• {que} = **comparação**, traduz o «do que»: {mayor que} «maior do que» · {mejor que} «melhor do que» · {más que} «mais do que».
• {como} = **igualdade**, traduz o «como»: {igual que} é mais comum; {es como tú} «é como você».

Padrão: {más} + adjetivo + **{que}** + termo. Nas expressões fixas o sentido é literal: {más que} «mais que» (muito).

## Comparativos irregulares

• {bueno} → {mejor} «melhor» (superlativo {el mejor})
• {malo} → {peor} «pior» ({el peor})
• {grande} → {mayor} «maior» ({el mayor})
• {pequeño} → {menor} «menor» ({el menor})

## Superlativo relativo

Precisa de artigo: {el más grande} «o maior» · {la mejor} «a melhor» · {los más jóvenes} «os mais jovens». Pode-se suprimir o artigo em orações como {es la mejor} → «é a melhor».

Bíblico: 1Co 13.13 {Ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor} «o maior deles é o amor».

## Superlativo absoluto

Sem artigo, com o sufixo {-ísimo} (ou {-ísimo/-ísimo} nos irregulares): {buenísimo} «boníssimo» · {grandísimo} · {muchísimo} «muitíssimo» · {cercanísimo} «muito perto». Também é comum o {muy} + adjetivo.

## Superlativo Geoffrey

Nada.`),
  vocab: [
    V('más grande', 'grande', 'maior'),
    V('mejor', 'bueno', 'melhor (irregular!)'),
    V('peor', 'malo', 'pior'),
    V('el más grande', 'grande', 'o maior (relativo!)'),
    V('buenísimo', 'bueno', 'boníssimo (-ísimo!)'),
    V('mayor', 'grande', 'maior (irregular!)'),
    V('el amor', 'amor', 'o amor (1Co 13:13)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"el más grande" × "grandísimo"?'),
    options: [
      T('Iguais'),
      T('Relativo (o maior, com artigo) × absoluto (muitíssimo grande!)'),
      T('O contrário'),
      T('Erro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Comparativo irregular de "bueno": ___ (melhor)'),
      answer: 'mejor',
      hint: T('Regra §4 — só quatro irregulares.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está CORRETA?'),
      options: [
        T('Es más alto que su padre'),
        T('Más vale que vengas'),
        T('Es más alto como su padre'),
        T('Es el más alto que su padre'),
      ],
      answer: 1,
      hint: T('Regra §1: «más» nunca inicia a frase.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o superlativo relativo: "___ mayor de ellos es el amor" (1Co 13:13)'),
      answer: 'el',
      hint: T('Regra §5: o superlativo relativo leva artigo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Comparativo com más/menos (invariável!); «más» nunca inicia a frase: Más vale.'),
    },
    { n: '2', text: T('Comparação leva que (mayor que); igualdade leva como (tan bueno como).') },
    { n: '3', text: T('Apenas quatro comparativos irregulares: mejor, peor, mayor, menor.') },
    {
      n: '4',
      text: T('Superlativo relativo leva artigo (el más grande); absoluto usa -ísimo (buenísimo).'),
    },
  ],
  notes: [
    {
      label: T('Comparar pessoas com cuidado'),
      text: T(
        '{más} + adjetivo + {que} compara com pessoas; {tan} + adjetivo + {como} faz o mesmo. {más} + substantivo + {de} compara coisas. Trocar as duas formas muda o sentido, não só a gramática.',
      ),
    },
  ],
  examples: [
    { text: '{más grande}', gloss: T('Maior.') },
    { text: '{mejor}', gloss: T('Melhor.') },
    { text: '{el más grande}', gloss: T('O maior.') },
    { text: '{buenísimo}', gloss: T('Boníssimo (superlativo absoluto).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Comparativos irregulares'),
      head: [T('Positivo'), T('Comparativo'), T('Superlativo relativo'), T('Superlativo absoluto')],
      rows: [
        ['{bueno}', '{mejor}', '{el mejor}', '{buenísimo}'],
        ['{malo}', '{peor}', '{el peor}', '{malísimo}'],
        ['{grande}', '{mayor}', '{el mayor}', '{grandísimo}'],
        ['{pequeño}', '{menor}', '{el menor}', '{pequeñísimo}'],
      ],
    },
    {
      caption: T('Tabela 2 — Os três usos'),
      head: [T('Tipo'), T('Forma'), T('Exemplo'), T('Precisa de artigo?')],
      rows: [
        [T('comparativo'), '{más} + adj.', '{más grande}', T('não')],
        [T('igualdade'), '{tan} + adj. + {como}', '{tan bueno como}', T('não')],
        [T('sup. relativo'), '{el} + {más} + adj.', '{el más grande}', T('sim')],
        [T('sup. absoluto'), 'adj. + {-ísimo}', '{buenísimo}', T('não')],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('Comparativos e superlativos'),
  subtitle: T('πιο καλός — ο πιο καλός'),
  section: T('O verbo'),
  body: C(`## Comparativo: πιο + adjetivo, sem flexão

O grego moderno forma o comparativo de um jeito só: πιο mais o adjetivo, sem flexionar. πιο καλός «melhor», πιο ακριβός «mais caro». Compare com o português, que flexiona: bom, melhor, o melhor — o grego dispensa esse trabalho.

A comparação com outra pessoa ou coisa usa από, não que: πιο καλός από εσένα «melhor que tu». E quando o segundo termo é uma pessoa, o pronome leva o artigo: από εσένα, από εμένα, não από εγώ.

## Superlativo: o artigo entra

O superlativo é πιο + adjetivo, mas com artigo definite: ο πιο καλός «o melhor», η πιο καλή «a melhor», το πιο μικρό «o menor». O artigo é o que marca o superlativo; sem ele, πιο καλός é só comparativo.

E ο πιο καλός «o melhor» é diferente de ο καλύτερος (o melhor de um grupo). Se a frase não diz de quem, o grego usa o artigo mesmo assim — a comparação vem do próprio contexto, não do substantivo.

## Igualdade e diferença

τόσο… όσο é a construção de igualdade: τόσο μεγάλο όσο το σπίτι «tão grande quanto a casa». Nos dois lados a mesma forma, e o verbo costuma ser copiado do segundo: είναι τόσο… όσο.

Para menos: λιγότερο, μικρότερος, πιο μικρό. Para quantidade: λιγότερο από εμένα «menos que eu». Para superlativo absoluto, sem termo de comparação, o grego usa πιο + superlativo ou o sufixo -τατος: ο πιο καλύτερος, ο καλύτερος.

## As formas antigas continuam, mas não são o padrão

καλύτερος, μεγαλύτερος, χειρότερος sobreviveram em registros elevado e em expressões fixas. O padrão produtivo do grego moderno é πιο + adjetivo, e o aoristo antigo morreu como regra. Quem traduzir o Novo Testamento com καλύτερος acerta a forma e erra o ouvido: soa como português, não como grego falado.

## O que ler

Toda vez que vir πιο, decida primeiro se há artigo: com artigo é superlativo, sem artigo é comparativo. E se o grego antigo aparecer (μεγαλύτερος), entenda, mas não reproduza na tradução corrente.`),
  vocab: [
    V('πιο', 'πιο', 'mais'),
    V('πιο καλός', 'καλός', 'melhor'),
    V('ο πιο καλός', 'καλός', 'o melhor'),
    V('από', 'από', 'que (comparação)'),
    V('τόσο', 'τόσο', 'tan'),
    V('όσο', 'όσο', 'como; cuanto'),
    V('λιγότερο', 'λίγο', 'menos'),
    V('καλύτερος', 'καλός', 'melhor (elevado)'),
    V('μεγαλύτερος', 'μεγάλος', 'maior (elevado)'),
    V('ακριβός', 'ακριβός', 'caro'),
    V('μικρός', 'μικρός', 'pequeno'),
    V('μικρότερος', 'μικρός', 'menor'),
    V('σπίτι', 'σπίτι', 'casa'),
    V('εσένα', 'εσύ', 'a ti'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('___ καλός από μένα'),
    answer: 'πιο',
    hint: T('Palavra «mais»'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o superlativo?'),
      options: [T('πιο καλός'), T('ο πιο καλός'), T('από μένα'), T('τόσο καλός')],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('τόσο καλός ___ ο φίλος μου'),
      answer: 'όσο',
      hint: T('Segunda parte da igualdade'),
    },
    {
      kind: 'match',
      prompt: T('Associar estrutura'),
      pairs: [
        { a: 'πιο', b: T('mais') },
        { a: 'τόσο', b: T('intensidade') },
        { a: 'όσο', b: T('comparação') },
      ],
      answer: ['a1', 'a2', 'a3'],
    },
  ],
  rules: [{ n: '§1', text: T('πιο no varía por género o número.') }],
  notes: [
    {
      label: T('Precaución'),
      text: T(
        'από εμένα significa «de mí» como origen o agente; en comparación de cantidad también significa «que yo».',
      ),
    },
  ],
  examples: [
    { text: 'η Αθήνα είναι πιο μεγάλη από την Τρίβα', gloss: T('Atenas es mayor que Trípoli') },
  ],
  tables: [
    {
      caption: T('Grados'),
      head: ['Grado', 'Estructura'],
      rows: [
        ['comparativo', 'πιο + adjetivo'],
        ['superlativo', 'artículo + πιο + adjetivo'],
        ['igualdad', 'τόσο + adj. + όσο'],
      ],
    },
  ],
};

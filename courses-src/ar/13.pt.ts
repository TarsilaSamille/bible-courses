import { C, T, V } from '../shared.mts';

export default {
  id: 13,
  title: T('Numerais e concordância'),
  subtitle: T('Do um ao milhar'),
  section: T('O nome'),
  body: C(`## De 3 a 10, o numeral é feminino

De {ثَلَاثَة} a {عَشَرَة}, o numeral aparece na forma feminina mesmo diante de um substantivo masculino: {ثَلَاثَةُ أَيَّامٍ} é "três dias", e não "três livro". Não é erro, é herança de uma regra antiga em que o substantivo contável era tratado como feminino. O numeral {اثْنَانِ} é o único que concorda normalmente.

## O substantivo vai para o genitivo

O substantivo contado perde a nunação e recebe o genitivo, visível em {أَيَّامٍ}. O numeral fica no caso que o resto da oração pedir. Por isso a tradução tem de manter a ideia de contagem: em português basta dizer "três dias", mas o genitivo está lá e some na tradução.

## De 11 a 99 muda tudo

A estrutura se inverte: a unidade vem primeiro, a dezena depois, e o substantivo continua no plural. {إِحْدَى عَشَرَةَ} é "onze" (unidadefemem + dezena) e {ثَلَاثَةَ عَشَرَ} é "treze" (unidade masculina + dezena). A inversão entre 13 e 19 em relação a 11 e 12 é uma das características clássicas do sistema.

## Acima de cem

{mِائَة} e {أَلْف} são indeclináveis e não exigem mudança de gênero. A partir de duzentos, a concordência volta: {مِائَتَانِ} é dual, {مِائَةٌ وَثَلَاثُونَ} mantém a unidade e a dezena separadas.

## Critério de leitura

Conte de 3 a 20 até o padrão ser automático. Depois, em qualquer versículo com numeral, verifique três coisas: o gênero do numeral, o caso do substantivo e a posição da unidade em relação à dezena.`),
  vocab: [
    V('وَاحِد', 'واحد', 'um'),
    V('اِثْنَانِ', 'اثنان', 'dois'),
    V('ثَلَاثَة', 'ثلاثة', 'três'),
    V('أَرْبَعَة', 'أربعة', 'quatro'),
    V('خَمْسَة', 'خمسة', 'cinco'),
    V('سِتَّة', 'ستة', 'seis'),
    V('سَبْعَة', 'سبعة', 'sete'),
    V('ثَمَانِيَة', 'ثمانية', 'oito'),
    V('تِسْعَة', 'تسعة', 'nove'),
    V('عَشَرَة', 'عشرة', 'dez'),
    V('مِائَة', 'مائة', 'cem'),
    V('أَلْف', 'ألف', 'mil'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Como se diz “sete”?'),
    answer: 'سَبْعَة',
    hint: T('Começa por sīn e termina em tāʾ marbūṭa.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual numeral conta “livros” (masculinos)?'),
      options: [T('ثَلَاثَة'), T('ثَلَاث'), T('ثَلَاثُ'), T('ثُلُث')],
      answer: 0,
    },
    {
      kind: 'match',
      prompt: T('Associe número e forma.'),
      pairs: [
        { a: T('2'), b: T('اِثْنَانِ') },
        { a: T('5'), b: T('خَمْسَة') },
        { a: T('10'), b: T('عَشَرَة') },
      ],
      answer: [0, 1, 2],
    },
    {
      kind: 'fill',
      prompt: T('Complete “___ لَيْلَةٍ” (mil noites).'),
      answer: 'أَلْفُ',
      hint: T('A palavra significa “mil”.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T('De 3 a 10 o numeral é feminino, independentemente do substantivo contado.'),
    },
    { n: '2', text: T('O substantivo contado de 3 a 10 fica no genitivo, normalmente plural.') },
    { n: '3', text: T('11–99 são construídos: a unidade vem antes da dezena.') },
  ],
  notes: [
    {
      label: T('Contagem'),
      text: T('A forma {ثَلَاثَة} não torna “dia” feminino: é um fenômeno de polaridade numeral.'),
    },
  ],
  examples: [
    { text: 'ثَلَاثَةُ أَيَّامٍ', gloss: T('três dias') },
    { text: 'سَبْعُ سِنِينَ', gloss: T('sete anos') },
    { text: 'اِثْنَا عَشَرَ', gloss: T('doze') },
  ],
  tables: [
    {
      caption: T('Números 1–12'),
      head: [T('Número'), T('Árabe')],
      rows: [
        ['1', 'وَاحِد'],
        ['2', 'اِثْنَانِ'],
        ['3', 'ثَلَاثَة'],
        ['4', 'أَرْبَعَة'],
        ['5', 'خَمْسَة'],
        ['6', 'سِتَّة'],
        ['7', 'سَبْعَة'],
        ['8', 'ثَمَانِيَة'],
        ['9', 'تِسْعَة'],
        ['10', 'عَشَرَة'],
        ['11', 'إِحْدَى عَشَرَةَ'],
        ['12', 'اِثْنَا عَشَرَ'],
      ],
    },
  ],
};

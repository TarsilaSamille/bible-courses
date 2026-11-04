import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  title: T('Discurso indireto com bahwa'),
  subtitle: T('berkata bahwa, apakah, supaya'),
  section: T('Registro e discurso'),
  body: C(`A oração indireta é introduzida por {bahwa} «que». Em geral, o tempo e o aspecto visíveis permanecem iguais.

DIRECT → INDIRECTO
{Isa berkata: «Saya akan datang»} → {Isa berkata bahwa saya akan datang}.
O {akan} continua expressando futuro relativo à situação do relato, não obrigatoriamente em relação ao momento da fala. A tradução espanhola pode variar entre «dijo que vendría» e «dijo: «vendré»» segundo o contexto e o ponto de vista.

{konon} significa «se dice/dicen que» e introduz relato no confirmado. {kata orang} «dicen» e {kata-kata mereka} «sus palabras» deixam o contenido en segundo plano.

{berkata apakah…} = «preguntó si…»:
{Dia bertanya apakah saya datang} = «Preguntou si yo vendría/iba a ir».
Para uma pergunta direta sobre lugar, use a expressão interrogativa:
{Di mana saya tinggal?} → {Dia bertanya di mana saya tinggal} = «Preguntó dónde vivo».

Ordem e tentativa:
{menyuruh + verbo} = «mandar que»: {Isa menyuruh mereka pergi} «mandó que se fueran».
{meminta supaya + verbo} = «pedir que»: {Isa meminta supaya mereka berdoa} «pidió que oraran».
{suruh} sozinho pode expressar um pedido ou uma ordem, conforme quem fala.

{kata-Nya} é 3.ª pessoa formal/elevada «suas palavras», com pronominalização: {Firman} → {Nya} = «él». Assim, {kata-Nya} literalmente «suas palavras/dijo Ele» conserva o referente divino.`),
  vocab: [
    V('bahwa', 'bahwa', 'que (oração completiva)'),
    V('berkata', 'kata', 'dizer, falar'),
    V('apakah', 'apakah', 'se, si (pergunta)'),
    V('bertanya', 'tanya', 'perguntar'),
    V('supaya', 'supaya', 'para que'),
    V('meminta', 'minta', 'pedir'),
    V('menyuruh', 'suruh', 'mandar, ordenar'),
    V('suruh', 'suruh', 'mandar; pedir'),
    V('konon', 'konon', 'diz-se'),
    V('kata orang', 'kata', 'dizem; as pessoas dizem'),
    V('kata-kata mereka', 'kata', 'suas palavras'),
    V('kata-Nya', 'kata', 'suas palavras; disse Ele'),
    V('datang', 'datang', 'vir'),
    V('tinggal', 'tinggal', 'morar, ficar'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma «ele perguntou onde eu moro»?'),
    options: [
      T('Dia bertanya di mana saya tinggal'),
      T('Dia bertanya apakah saya tinggal'),
      T('Dia bertanya bahwa saya tinggal'),
      T('Dia bertanya supaya saya tinggal'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: «Isa berkata ___ saya akan datang» = «Jesus disse que eu viria».'),
      answer: 'bahwa',
      hint: T('Conector completivo neutro.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual traduz corretamente {konon kabarnya}?'),
      options: [
        T('Dizem que o boato é…'),
        T('Se confirma imediatamente que…'),
        T('Perguntaram se…'),
        T('Foi ordenado que…'),
      ],
      answer: 0,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Na sequência direta → indireta, pronomes e demonstrativos podem ser convertidos ao padrão 3.ª pessoa: {saya} → {saya} quando o referente permanece claro; a pronominalização de {Firman} em {Nya} depende do registro.',
      ),
    },
    {
      n: '2',
      text: T(
        'Perguntas indiretas não usam {apakah} quando conservam uma palavra interrogativa como {di mana}; {apakah} aparece com sim/não ou ao final da oração.',
      ),
    },
    {
      n: '3',
      text: T(
        'Traduza o tempo pela função discursiva, não por uma mudança automática de conjugação.',
      ),
    },
  ],
  notes: [
    {
      label: T('Criterio'),
      text: T(
        'Não há uma regra categórica de “não se muda o tempo”. O relato indireto preserva, reinterpreta ou converte o aspecto conforme o ponto de vista narrativo.',
      ),
    },
  ],
  examples: [
    { text: 'Isa berkata bahwa ia akan datang.', gloss: T('Jesus disse que viria.') },
    { text: 'Dia bertanya apakah saya datang.', gloss: T('Perguntou se eu viria.') },
    { text: 'Isa meminta supaya mereka berdoa.', gloss: T('Jesus pediu que orassem.') },
  ],
  tables: [
    {
      caption: T('Perguntas e ordens indiretas'),
      head: ['Padrão', 'PT', 'ES'],
      rows: [
        ['berkata bahwa', T('disse que'), '{berkata bahwa saya datang}'],
        ['bertanya apakah', T('perguntou se'), '{bertanya apakah saya datang}'],
        ['menyuruh + V', T('mandou que'), '{menyuruh mereka pergi}'],
        ['meminta supaya + V', T('pediu que'), '{meminta supaya mereka berdoa}'],
      ],
    },
  ],
};

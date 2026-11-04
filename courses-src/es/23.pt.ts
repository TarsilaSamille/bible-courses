import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('As preposições e o "a" pessoal'),
  subtitle: T('amo a Dios — gente leva "a"'),
  section: T('As preposições'),
  body: C(`## O {a} pessoal

O objeto direto de **pessoa** leva o prepositivo {a}, que não existe em português:

{amo a Dios} «amo a Deus» · {vio a Jesús} «viu Jesus» · {no vi a nadie} «não vi ninguém» · {ama a su prójimo} «ama o seu próximo» (Mc 12:30) · {sirve a Dios} «serve a Deus».

Mas **coisas** não levam: {veo la cruz} «vejo a cruz» · {compré un libro} · {tengo un amigo} (aqui {amigo} é substantivo, não pronome).

Dois motivos: as palavras com consoante inicial por som (a + {r} é difícil) e a distinção entre pessoa e coisa, herdada do latim.

**Exceção importante**: o {a} desaparece antes de {el} — {ama al prójimo} «ama o próximo».

## O repertório

• {a} — a, para · {en} — em, dentro · {de} — de, procedência
• {con} — com · {sin} — sem · {sobre} — sobre, a respeito
• {entre} — entre · {hacia} — em direção a · {hasta} — até
• {desde} — desde (origem) · {tras} — atrás, transpassado (transparente!)
• {durante} — durante · {hacia} — perto de (tempo)

## Contrações

{a} + {el} = {al} · {de} + {el} = {del}. Nada mais contrai.

{al tercer día} «ao terceiro dia» (Gn 1:5) · {la palabra del Señor} «a palavra do Senhor».

## Preposições de conteúdo religioso

{en} com {crer}: {creo en Dios} «creio em Deus» (não {creo a Dios}!).
{sin} em afirmações fortes: {sin fe} «sem fé» (Hb 11:6: {es imposible} «é impossível»).
{con} = companhia: {conmigo} · {con Dios} · {con Él}.
{por} = agente: {enviado por Dios}.

Ex.: {¿Por qué me has abandonado?} «por que me abandonaste?» (Mt 27:46) — {por} de causa; {A Dios le debo} «devo a Deus» — {de} de origem.`),
  vocab: [
    V('a', 'a', 'a (pessoal!)'),
    V('al', 'al', 'ao (= a + el)'),
    V('del', 'del', 'do (= de + el)'),
    V('en', 'en', 'em'),
    V('sin', 'sin', 'sem'),
    V('hasta', 'hasta', 'até'),
    V('desde', 'desde', 'desde'),
    V('a Dios', 'Dios', 'a Deus (pessoa: leva a!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "amo A Dios"?'),
    options: [
      T('Objeto-direto PESSOA leva "a" pessoal'),
      T('Porque é plural'),
      T('Porque é futuro'),
      T('Por acaso'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete a preposição de crença: "Creo ___ Dios" (creio em Deus)'),
      answer: 'en',
      hint: T('Regra §5: crer usa «en».'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está correta?'),
      options: [T('Veo la cruz'), T('Veo a cruz'), T('Veo a la cruz'), T('Veo el cruz')],
      answer: 0,
      hint: T('Regra §1: coisas NÃO levam «a».'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a preposição ao seu valor'),
      pairs: [
        { a: T('{a}'), b: T('direção / pessoa') },
        { a: T('{de}'), b: T('origem, posse') },
        { a: T('{con}'), b: T('companhia') },
        { a: T('{sin}'), b: T('privação') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Objetos diretos de pessoa levam a: amo a Dios, vi a Jesús, no vi a nadie.'),
    },
    { n: '2', text: T('Objetos diretos de coisa não levam a: veo la cruz, tengo un libro.') },
    { n: '3', text: T('Antes de «el», a + el = al; de + el = del. Nenhuma outra contração.') },
    { n: '4', text: T('Com pronome indireto (le, me, nos) o a some: le dio, me dio, nos dio.') },
    { n: '5', text: T('Crer usa «en» (creo en Dios); saber usa «de» (sé de aquí).') },
  ],
  notes: [
    {
      label: T('O {a} pessoal é obrigatório'),
      text: T(
        'Antes de {lo}, {la}, {los}, {las} o {le}, o substantivo recebe o {a} que não existia sozinho: {a} + {el} → {al}. A forma elide-se diante de vogal: {amigo}, no {al amigo}.',
      ),
    },
  ],
  examples: [
    { text: '{amo a Dios}', gloss: T('Amo a Deus (pessoa → a pessoal).') },
    { text: '{veo la cruz}', gloss: T('Vejo a cruz (coisa → sem a).') },
    { text: '{al tercer día}', gloss: T('Ao terceiro dia (a + el = al).') },
    { text: '{creo en Dios}', gloss: T('Creio em Deus (en de crença!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Preposições essenciais'),
      head: [T('Preposição'), T('Valor'), T('Exemplo')],
      rows: [
        ['{a}', 'direção, pessoa', '{amo a Dios}'],
        ['{en}', 'lugar, crer', '{creo en Dios}'],
        ['{de}', 'origem, posse', '{la palabra del Señor}'],
        ['{con}', 'companhia', '{con Él}'],
        ['{sin}', 'privação', '{sin fe}'],
        ['{sobre}', 'sobre, tema', '{sobre la fe}'],
        ['{entre}', 'entre', '{entre nosotros}'],
        ['{hasta}', 'até', '{hasta el fin}'],
        ['{desde}', 'desde (origem)', '{desde el principio}'],
        ['{por}', 'causa, agente', '{por Dios}'],
        ['{para}', 'finalidade', '{para salvar}'],
      ],
    },
    {
      caption: T('Tabela 2 — O «a» pessoal: quando aparece'),
      head: [T('Caso'), T('Exemplo'), T('Usa «a»?')],
      rows: [
        [T('pessoa'), '{amo a Dios}', T('sim')],
        [T('coisa'), '{veo la cruz}', T('não')],
        [T('pessoa + el'), '{ama al prójimo}', T('vira al')],
        [T('pronombre «le» (indireto)'), '{Le doy el libro}', T('não (sem «a»!)')],
        [T('verbo de movimento'), '{Voy a la casa}', T('não («a» = direção!)')],
      ],
    },
  ],
};

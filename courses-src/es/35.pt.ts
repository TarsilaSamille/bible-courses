import { C, T, V } from '../shared.mts';

export default {
  id: 35,
  title: T('A oração subordinada e o discurso indireto'),
  subtitle: T('que, cuando, aunque — e a leitura de João 1:1-5'),
  section: T('Sintaxe'),
  body: C(`## O que faz uma subordinada

Uma subordinada **depende** de uma oração principal e não existe sozinha: {Creo que Dios existe} «creio que Deus existe» — sem o {creo}, o resto é um fragmento. Em espanhol, **a ordem não se inverte** ao reportar, como em inglês.

As principais classes:

• **Substantivas** (função de substantivo): {Creo que...} «creio que», {Sé que...} «sei que», {Espero que...} «espero que», {Que viene} «que vem», {Lo que sea} «o que for».
• **Adjetivas** (função de adjetivo): {el hombre que vino} «o homem que veio», {cuyo nombre}, {donde está}.
• **Adverbiais** (função de advérbio): {porque} «porque», {cuando} «quando», {aunque} «embora», {si} «se», {para que} «para que», {mientras} «enquanto», {como} «como».

## O subjuntivo nas adverbiais

• {porque + indicativo} «porque» (causa real): {Vino porque me llamó} «veio porque me chamou».
• {para que + subjuntivo} (finalidade): {Estudio para que apruebe} «estudo para que eu seja aprovado». A causa com {porque} fica no indicativo; a finalidade pede {para que} e subjuntivo.
• {cuando} com futuro certo → indicativo; com futuro incerto → **subjuntivo**: {Cuando venga} «quando vier» · {Cuando viene el tren} «quando o trem vem».
• {aunque} **sempre** leva subjuntivo: {aunque sea} «ainda que seja» · {aunque llegue tarde} «ainda que chegue tarde».
• {si} condicional: {si viene, avísame} «se vier, avise-me» (subjuntivo) — {si viene todos los días} «se vem todo dia» (indicativo, hábito).
• {mientras} «enquanto» leva o **indicativo**: {mientras oraba, vino} «enquanto orava, veio» (Gn 3:9). Em Jo 20:29, o contraste é {mientras espero, viene} «enquanto espero, vem» — o presente de {esperar} opõe-se ao futuro de {venir}.`),
  vocab: [
    V('aunque sea', 'ser', 'ainda que seja (subj.!)'),
    V('cuando venga', 'venir', 'quando vier (subj.!)'),
    V('dijo que', 'decir', 'disse que'),
    V('vendría', 'venir', 'viria (futuro → condicional!)'),
    V('había venido', 'venir', 'tinha vindo (pret → pluscuamperf.)'),
    V('preguntó', 'preguntar', 'perguntou'),
    V('mandó que salieran', 'mandar', 'mandou que saíssem'),
    V('resplandece', 'resplandecer', 'brilha (presente! Jo 1:5)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Dice que vendrá" no passado?'),
    options: [
      T('Dijo que vendrá'),
      T('Dijo que vendría (futuro → condicional!)'),
      T('Dijo que viene'),
      T('Dijo que venga'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Converta para o indireto: "Dice que viene" → "Dijo que ___"'),
      answer: 'vendría',
      hint: T('Regla §4: presente → condicional no discurso indireto.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa o subjuntivo corretamente?'),
      options: [
        T('Aunque es joven, trabaja'),
        T('Aunque sea joven, trabaja'),
        T('Cuando es joven, trabaja'),
        T('Si es joven, trabaja'),
      ],
      answer: 1,
      hint: T('Regra §2: «aunque» exige sempre subjuntivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a Reporting imperativa: "Mandó que ___" (que saíssem)'),
      answer: 'salieran',
      hint: T('Regra §5: a ordem indireta usa o imperfeito do subjuntivo.'),
    },
  ],
  rules: [
    { n: '1', text: T('A subordinada não existe sozinha: siempre depende de uma principal.') },
    {
      n: '2',
      text: T(
        'Aunque, cuando (futuro incerto), para que, si (hipótese) e antes de que pedem subjuntivo.',
      ),
    },
    {
      n: '3',
      text: T(
        'No discurso indireto o verbo recua: presente → condicional, pretérito → pluscuamperfecto.',
      ),
    },
    {
      n: '4',
      text: T(
        'Perguntas indiretas não levam «que» e mantêm o tempo do direto: Preguntó dónde vivía.',
      ),
    },
    { n: '5', text: T('Ordens indiretas usam o imperfeito do subjuntivo: mandó que salieran.') },
  ],
  notes: [
    {
      label: T('Como ler o texto bíblico:'),
      text: T(
        'Leia sempre em voz alta, versículo por versículo, e identifique primeiro o verbo: se é {es}, {era}, {está} ou {estában}, você tem estado; se é {hizo}, {dijo}, {vio}, você tem ação. Depois procure o gatilho do subjuntivo ({porque}, {aunque}, {para que}, {cuando}). Uma subordinada sem gatilho é adjetiva ({el Verbo que era Dios}).',
      ),
    },
    {
      label: T('Europeu × americano:'),
      text: T(
        'A sintaxe é idêntica nos dois mundos. As diferenças são de léxico ({vosotros} × {ustedes}, {ordenador} × {computadora}) e de pronúncia ({z} = θ na Espanha, {ll} = jota). O texto bíblico castelhano (Reina-Valera 1960) segue a norma da Espanha, que é a que este curso ensina.',
      ),
    },
  ],
  examples: [
    {
      text: '{Aunque sea difícil, lo haré}',
      gloss: T('Ainda que seja difícil, farei (aunque + subjuntivo!).'),
    },
    {
      text: '{Dijo que vendría}',
      gloss: T('Disse que viria (presente → condicional no indireto).'),
    },
    {
      text: '{Mandó que salieran}',
      gloss: T('Mandou que saíssem (imperativo → imperfeito do subjuntivo).'),
    },
    {
      text: '{En el principio era el Verbo}',
      gloss: T('No princípio era o Verbo (Jo 1:1 — principal + tempo de estado).'),
    },
    {
      text: '{Y la luz resplandece}',
      gloss: T('E a luz brilha (Jo 1:5 — presente: a luz brilha agora).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As três classes de subordinadas'),
      head: [T('Classe'), T('Conjunção'), T('Exemplo'), T('Modo típico')],
      rows: [
        [T('substantiva'), '{que}, {si}, {cómo}', '{Creo que es verdad}', T('indic. ou subj.')],
        [T('adjetiva'), '{que}, {quien}, {cuyo}', '{el libro que leo}', T('indicativo')],
        [
          T('temporal'),
          '{cuando}, {mientras}',
          '{Cuando venga, te veré}',
          T('subjuntivo (futuro incerto)'),
        ],
        [T('concessiva'), '{aunque}', '{Aunque sea difícil}', T('sempre subjuntivo')],
        [T('causal'), '{porque, como}', '{Porque lo vi, supe}', T('indicativo')],
        [T('final'), '{para que, a fin de que}', '{Estudio para que apruebe}', T('subjuntivo')],
        [T('condicional'), '{si}', '{Si viene, avísame}', T('subjuntivo (hipótese)')],
      ],
    },
    {
      caption: T('Tabela 2 — Correlação de tempos no discurso indireto'),
      head: [T('Direto'), T('Indireto'), T('Referência')],
      rows: [
        ['{Dice que viene}', '{Dijo que vendría}', 'pres. → cond.'],
        ['{Dice que ha venido}', '{Dijo que había venido}', 'perf. → pluscuamperf.'],
        ['{Dice que vino}', '{Dijo que había venido}', 'pret. → pluscuamperf.'],
        ['{PREGUNTA dónde vive}', '{Preguntó dónde vivía}', 'pres. → imperf. (sem «que»!)'],
        ['{¿Vienes?} → Dice que sí', '{Dijo que sí}', '—'],
        ['{¡Salgan de aquí!}', '{Mandó que salieran}', 'imperativo → imp. subj.'],
      ],
    },
    {
      caption: T('Tabela 3 — Capstone: João 1:1-5 analisado'),
      head: [T('Trecho'), T('Estrutura'), T('Tempo verbal')],
      rows: [
        ['{En el principio era el Verbo}', T('adjunto + verbo + sujeito'), '{era} (imperf.)'],
        ['{Y el Verbo era con Dios}', T('coordenada por «y»'), '{era} (imperf.)'],
        ['{Y el Verbo era Dios}', T('sujeito + ser + atributo'), '{era} (imperf.)'],
        ['{En él estaba la vida}', T('en + pronome + estar'), '{estaba} (imperf.)'],
        ['{Y la luz resplandece}', T('verbo sem objeto'), '{resplandece} (pres.)'],
        [
          '{las tiniegas no la alcanzó}',
          T('sujeito posposto + no + pretérito'),
          '{alcanzaron} (pret.)',
        ],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('O subjuntivo'),
  subtitle: T('hable, coma — quero QUE…'),
  section: T('Os verbos'),
  body: C(`## O que provoca o subjuntivo

O subjuntivo aparece quando o falante **impõe, deseja, duda ou ordena**: {Quiero que hable} «quero que fale» · {No creo que sea así} «não creio que seja assim» · {Es necesario que vengas} «é necessário que venhas» · {ojalá} «oxalá» (do árabe, oxalá!) · {para que} «para que» · {antes de que} «antes de que».

## A formação é uma troca de vogal

No presente, troca-se a vogal temática pela **vogal da fechada {e}/{a}**:

{-ar} → {-e}: {hable}, {hables}, {hable}, {hablemos}, {hablen}.
{-er}/{-ir} → {-a}: {coma}, {comas}, {coma}, {comamos}, {coman} · {viva}, {tenga}, {sea}, {vaya}.

A forma {sea} (de {ser}) é a que mais aparece no texto bíblico, exatamente por causa dos imperativos de Gênesis: {Sea la luz} «haja luz».

## O passado do subjuntivo

Depois de um verbo no passado, o subjuntivo usa o **imperfeito do subjuntivo**, com duas formas sinônimas: {-ra} e {-se}.

{Quería que hablaras} = {Quería que hablase} «queria que falasses».
{Como si hubieras venido} «como se tivesses vindo».

## Pontos de atenção

1. Após {ojalá}, {a no ser que}, {con tal de que} — sempre subjuntivo.
2. {Para que} usa **indicativo** quando o sujeito é o mesmo: {Te lo digo para que vengas} (outro) × {Study para que apruebe} — este {apruebe} também é subjuntivo porque o sujeito muda.
3. Subjuntivo com valor de **condicional**: {quien quiera, que venga}.

## Pronomes e ordem

Os pronomes entram **antes** do verbo: {Dios te ama} «Deus te ama» (afetivo!) · {se lo dio} «deu-lho» (duplo objeto).

Bíblico: {Santificado sea tu nombre} «santificado seja o teu nome» · {Venga tu reino} «venha o teu reino» (Mt 6:10).`),
  vocab: [
    V('hable', 'hablar', 'fale (subj.)'),
    V('sea', 'ser', 'seja (subj.)'),
    V('vaya', 'ir', 'vá (subj.)'),
    V('tenga', 'tener', 'tenha (subj.)'),
    V('ojalá', 'ojalá', 'oxalá'),
    V('hablaras', 'hablar', 'falasses (imp. subj.!)'),
    V('venga', 'venir', 'venha (subj.)'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: "Santificado ___ tu nombre"'),
    answer: 'sea',
    hint: T('Subjuntivo de "ser".'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Quiero que ___ (hablar)" (quero que fale)'),
      answer: 'hable',
      hint: T('Regra §2: -ar no subjuntivo vira -e.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual verbo é irregular no presente do subjuntivo?'),
      options: [
        T('{hablar} → {hable}'),
        T('{ir} → {vaya}'),
        T('{comer} → {coma}'),
        T('{cantar} → {cante}'),
      ],
      answer: 1,
      hint: T('Regra §2: os irregulares não seguem a troca.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete o passado do subjuntivo: "Quería que ___ (hablar)" (queria que falasse)'),
      answer: 'hablase',
      hint: T('Regra §3: -ara ou -ase (duas formas equivalentes).'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Subjuntivo sempre após gatilhos de desejo, dúvida e ordem: quiero que, ojalá, para que.',
      ),
    },
    { n: '2', text: T('A troca de vogal vale para os regulares: -ar → -e, -er/-ir → -a.') },
    {
      n: '3',
      text: T(
        'Imperfeito do subjuntivo (hablara/hablase) aparece após passado: Quería que hablaras.',
      ),
    },
    {
      n: '4',
      text: T(
        'Com quando, se o futuro é certo, o verbo vai a futuro; se é incerto, vai a subjuntivo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Três valores, uma forma'),
      text: T(
        'O subjuntivo aparece em desejo ({quiero que vengas}), dúvida ({no creo que sea}) e ordem ({que venga}). Em Gênesis 1, {Sea la luz} é ordem — o contexto mais antigo do uso no Novo Testamento.',
      ),
    },
  ],
  examples: [
    { text: '{Santificado sea tu nombre}', gloss: T('Santificado seja o teu nome ({sea}!).') },
    { text: '{Venga tu reino}', gloss: T('Venha o teu reino (Mt 6:10).') },
    { text: '{se lo dio}', gloss: T('Deu-lho (pronome duplo!).') },
    { text: '{Ojalá venga}', gloss: T('Oxalá venha (desejo com o subjuntivo).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Subjuntivo presente'),
      head: [T('Pessoa'), T('-ar → -e'), T('-er/-ir → -a')],
      rows: [
        ['yo', '{hable}', '{coma}'],
        ['tú', '{hables}', '{comas}'],
        ['él/ella/usted', '{hable}', '{coma}'],
        ['nosotros', '{hablemos}', '{comamos}'],
        ['vosotros', '{habléis}', '{comáis}'],
        ['ellos/ustedes', '{hablen}', '{coman}'],
      ],
    },
    {
      caption: T('Tabela 2 — Gatilhos do subjuntivo'),
      head: [T('Expressão'), T('Valor'), T('Exemplo')],
      rows: [
        ['{quiero que}', 'desejo', '{Quiero que vengas}'],
        ['{es necesario que}', 'necessidade', '{Es necesario que oremos}'],
        ['{no creo que}', 'dúvida', '{No creo que sea así}'],
        ['{ojalá}', 'desejo (doce)', '{Ojalá venga}'],
        ['{para que}', 'finalidade', '{Lo hizo para que lo vieran}'],
        ['{antes de que}', 'anterioridade', '«antes de que»'],
        ['{a no ser que}', 'concessão', '{A no ser que llueva}'],
        ['{cuando + futuro}', 'temporal futura', '«cuando venga»'],
      ],
    },
  ],
};

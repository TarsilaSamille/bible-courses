import { C, T, V } from '../shared.mts';

export default {
  id: 14,
  title: T('{ser} e {estar}'),
  subtitle: T('essência × estado — o par famoso'),
  section: T('Os verbos'),
  body: C(`## {ser} = identidade

{ser} responde a **quem é** o que é: identidade, origem, hora, matéria, profissão. Formas: {soy}, {eres}, {es}, {somos}, {sois}, {son}.

{Soy cristiano} «sou cristão» · {Es de Dios} «é de Deus» · {Son las tres} «são três horas» · {Fue escrito} «foi escrito» (passiva!).

## {estar} = estado

{estar} responde a **como está** ou **onde está**: lugar, estado físico, ação em curso. Formas: {estoy}, {estás}, {está}, {estamos}, {estáis}, {están}.

{Estoy aquí} «estou aqui» · {Está escrito} «está escrito» (estado!) · {Están orando} «estão orando» · {Está cansado} «está cansado».

## Quatro decisões

1. **Identidade × profissão**: {Es médico} (sou médico) e não {Está médico}.
2. **Material × estado**: {Es de madera} (é de madeira) × {Está mojado} (está molhado).
3. **Lugar**: sempre {estar} — {La casa está en Madrid} — exceto eventos: {La reunión es en Madrid} (acontecimento programado!).
4. **Ação em curso**: {estar} + gerúndio ({está hablando}) ou {estar} + {a} + infinitivo ({está por hablar}? não: {está a punto de} «está prestes a»).

## A porta para a passiva

{ser} + particípio = **voz passiva** ({fue creado}) · {estar} + particípio = **estado** ({está creado}? melhor: {todo está creado}). O cap. 20 volta ao tema.

## Teologia em duas palavras

{ Dios es amor} «Deus **é** amor» (1Jo 4:8 — o ser de Deus é amor) × {Dios está con nosotros} «Deus **está** conosco» (presença temporária do Espírito, 1 Jn 4.16: {la unidad, que el Espíritu está entre nosotros}). A escolha do verbo carrega a teologia.

Ex.: {¿Dónde estás?} «onde estás?» (Gn 3:9 — Deus procura Adão!).`),
  vocab: [
    V('soy', 'ser', 'sou (essência!)'),
    V('estoy', 'estar', 'estou (estado!)'),
    V('es', 'ser', 'é (essência!)'),
    V('está', 'estar', 'está (estado!)'),
    V('Son las tres', 'ser', 'são três horas'),
    V('están orando', 'estar', 'estão orando (gerúndio!)'),
    V('es', 'ser', 'é (1 Jn 4.8)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Dios es amor" × "Dios está con nosotros"?'),
    options: [
      T('Iguais'),
      T('Essência (ser!) × presença/estado (estar!)'),
      T('O contrário'),
      T('Erro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: "Son las ___" (são três horas)'),
      answer: 'tres',
      hint: T('Hora é matéria/tempo: sempre ser.'),
    },
    {
      kind: 'choose',
      prompt: T('"La casa ___ en Madrid." Qual verbo?'),
      options: [T('{es}'), T('{está}'), T('{son}'), T('{están}')],
      answer: 1,
      hint: T('Regra §2: lugar = estar.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase ao verbo certo'),
      pairs: [
        { a: T('{Dios es amor}'), b: T('ser (essência)') },
        { a: T('{La puerta está cerrada}'), b: T('estar (estado!)') },
        { a: T('{Fue escrito}'), b: T('ser (passiva!)') },
        { a: T('{Están orando}'), b: T('estar (gerúndio!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('Ser = identidade, origem, hora, matéria. Estar = lugar, estado, ação em curso.'),
    },
    {
      n: '2',
      text: T(
        'Ser + particípio forma a passiva (fue escrito); estar + particípio indica estado (está cerrado).',
      ),
    },
    { n: '3', text: T('Lugares e estados usam estar; eventos programados usam ser.') },
  ],
  notes: [
    {
      label: T('O mesmo adjetivo, dois verbos'),
      text: T(
        'A escolha entre {ser} e {estar} não é de significado mas de estado: {es aburrido} é diagnóstico, {está aburrido} é observação. Em {ser} + {-ado} o valor é permanente; com {estar} é temporário.',
      ),
    },
  ],
  examples: [
    { text: '{Dios es amor}', gloss: T('Deus é amor — essência! (1 Jn 4.8).') },
    { text: '{Dios está con nosotros}', gloss: T('Deus está conosco — presença!') },
    { text: '¿Dónde estás?}', gloss: T('Onde estás? (Gn 3:9).') },
    { text: '{Están orando}', gloss: T('Estão orando (ação em curso).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — ser × estar'),
      head: [T('Pessoa'), T('ser (essência!)'), T('estar (estado!)')],
      rows: [
        ['yo', '{soy}', '{estoy}'],
        ['tú', '{eres}', '{estás}'],
        ['él/ella/usted', '{es}', '{está}'],
        ['nosotros', '{somos}', '{estamos}'],
        ['vosotros', '{sois}', '{estáis}'],
        ['ellos/ustedes', '{son}', '{están}'],
      ],
    },
    {
      caption: T('Tabela 2 — O que pede cada verbo'),
      head: [T('Pergunta'), T('Verbo'), T('Exemplo')],
      rows: [
        [T('Quem é?'), '{ser}', '{Es el Hijo}'],
        [T('De que é feito?'), '{ser}', '{La mesa es de madera}'],
        [T('Que horas são?'), '{ser}', '{Son las tres}'],
        [T('Onde está?'), '{estar}', '{Está en la casa}'],
        [T('Como está?'), '{estar}', '{Está enfermo}'],
        [T('O que está fazendo?'), '{estar}', '{Están orando}'],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Los pronombres reflexivos'),
  subtitle: T('me/te/se — lavarse, arrepentirse'),
  section: T('Los pronombres'),
  body: C(`## El juego de los pronombres

El reflexivo repite al sujeto: {me}, {te}, {se}, {nos}, {os}, {se}.

{me lavo} «me lavo» · {te levantas} «te levantas» · {se lava} «se lava» · {nos amamos} «nos amamos» · {os laváis} «os laváis».

Cuando el sujeto es de tercera persona ({él}, {ella}, {usted}, {ellos}, {ustedes}), el pronombre es siempre {se}: {se arrepintió} «se arrepintió» · {Se fueron} «se fueron».

## Reflexivo frente a recíproco

**Reflexivo**: cada uno actúa sobre sí mismo · {Me miro al espejo} «me miro al espejo».
**Recíproco**: dos o más intercambian acciones · {se aman} «se aman» · {se escribían} «se escribían» · {Se abrazaron} «se abrazaron».

La pista es el **plural** del verbo; el contexto decide.

## Verbos siempre reflexivos

Hay verbos que **nunca** aparecen sin {se}: {arrepentirse} «arrepentirse» · {quejarse} «quejarse» · {atreverse} «atreverse» · {acostumbrarse} · {darse cuenta} «darse cuenta» — {¡Vete!} «¡vete!».

## El {se} que cambia el sentido

• {dormir} «dormir» frente a {dormirse} «dormirse»
• {ir} «ir» frente a {irse} «irse, marcharse»
• {parecer} «parecer» frente a {parecerse} «parecerse» — {Se parece a su padre} «se parece a su padre»
• {sentar} «sentar» frente a {sentarse} «sentarse»
• {despertar} «despertar» frente a {despertarse} «despertarse»

Bíblico: {Venga tu reino} «venga tu reino» · {Tuyos son los cielos} «tuyos son los cielos» — el reflexivo queda sobreentendido en la relación con Dios.`),
  vocab: [
    V('me lavo', 'lavarse', 'me lavo'),
    V('se arrepintió', 'arrepentirse', 'se arrepintió'),
    V('se aman', 'amarse', 'se aman (¡recíproco!)'),
    V('dormirse', 'dormirse', 'dormirse (¡≠ dormir!)'),
    V('Vete', 'irse', '¡vete!'),
    V('se parece a su padre', 'parecerse', 'se parece a su padre'),
    V('Se fueron', 'irse', 'Se fueron (¡3.ª persona!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('¿«dormir» frente a «dormirse»?'),
    options: [
      T('Iguales'),
      T('Dormir frente a dormirse (¡el reflexivo cambia el sentido!)'),
      T('Presente frente a pasado'),
      T('Yo frente a él'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Completa el reflexivo: «ellos ___ fueron» (se fueron)'),
      answer: 'se',
      hint: T('Regla §1: 3.ª persona = se.'),
    },
    {
      kind: 'choose',
      prompt: T('¿Qué oración es RECÍPROCA?'),
      options: [
        T('Se miraron en el espejo'),
        T('Se abrazaron al verse'),
        T('Se lava las manos'),
        T('Se arrepintió del pecado'),
      ],
      answer: 1,
      hint: T('Regla §2: recíproco = dos agentes intercambian acciones.'),
    },
    {
      kind: 'match',
      prompt: T('Relaciona el verbo con su sentido con «se»'),
      pairs: [
        { a: T('{ir}'), b: T('ir (movimiento)') },
        { a: T('{irse}'), b: T('irse, marcharse') },
        { a: T('{parecer}'), b: T('parecer (opinión)') },
        { a: T('{parecerse}'), b: T('parecerse (a alguien)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'El pronombre repite al sujeto: me, te, se, nos, os, se. En 3.ª persona es siempre «se».',
      ),
    },
    {
      n: '2',
      text: T('Recíproco = acciones intercambiadas entre varias personas: se aman, se escribían.'),
    },
    {
      n: '3',
      text: T('Algunos verbos son siempre reflexivos: arrepentirse, quejarse, atreverse, irse.'),
    },
    {
      n: '4',
      text: T('El reflexivo puede cambiar el sentido del verbo: dormir/dormirse, ir/irse.'),
    },
  ],
  notes: [
    {
      label: T('Reflexivo o recíproco'),
      text: T(
        '{se} es reflexivo cuando un agente actúa sobre sí y recíproco cuando dos o más intercambian acciones: {se miran} (uno a otro) frente a {se mira} (a sí mismo). El número del verbo lo dice.',
      ),
    },
  ],
  examples: [
    { text: '{se arrepintió}', gloss: T('Se arrepintió (verbo siempre reflexivo).') },
    { text: '{se aman}', gloss: T('Se aman (recíproco).') },
    { text: '{Vete}', gloss: T('¡Vete! (irse + pronombre).') },
    {
      text: '{Se parece a su padre}',
      gloss: T('Se parece a su padre (parecer frente a parecerse).'),
    },
  ],
  tables: [
    {
      caption: T('Tabla 1 — Paradigma reflexivo'),
      head: [T('Sujeto'), T('Pronombre'), T('Ejemplo')],
      rows: [
        ['yo', '{me}', '{me lavo}'],
        ['tú', '{te}', '{te levantas}'],
        ['él/ella/usted', '{se}', '{se lava}'],
        ['nosotros', '{nos}', '{nos amamos}'],
        ['vosotros', '{os}', '{os laváis}'],
        ['ellos/ustedes', '{se}', '{Se fueron}'],
      ],
    },
    {
      caption: T('Tabla 2 — Verbos que cambian con «se»'),
      head: [T('Sin «se»'), T('Sentido A'), T('Con «se»'), T('Sentido B')],
      rows: [
        ['{dormir}', T('dormir'), '{dormirse}', T('dormirse')],
        ['{ir}', T('ir'), '{irse}', T('irse')],
        ['{parecer}', T('parecer'), '{parecerse}', T('parecerse')],
        ['{despertar}', T('despertar a otro'), '{despertarse}', T('despertarse')],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 28,
  title: T('Os pronomes reflexivos'),
  subtitle: T('me/te/se — lavar-se, arrepender-se'),
  section: T('Os pronomes'),
  body: C(`## O jogo dos pronomes

O reflexivo repete o sujeito: {me}, {te}, {se}, {nos}, {os}, {se}.

{me lavo} «lavo-me» · {te levantas} «levantas-te» · {se lava} «lava-se» · {nos amamos} «amamo-nos» · {os laváis} «lavais-vos».

Quando o sujeito é 3ª pessoa ({él}, {ella}, {usted}, {ellos}, {ustedes}), o pronome é sempre {se}: {se arrepintió} «arrependeu-se» · {Se fueron} «foram-se embora».

## Reflexivo × recíproco

**Reflexivo**: cada um age sobre si mesmo · {Me Occasionally miro al espejo} «Olho-me ao espelho».
**Recíproco**: dois ou mais trocam ações entre si — {se aman} «amam-se» · {se escribían} «escreviam-se um ao outro» · {Se abrazaron} «abraçaram-se».

A pista é o **plural** do substantivo ou o **plural do verbo**: {nos amamos} pode ser reflexivo ou recíproco, o contexto decide.

## Verbos sempre reflexivos

Há verbos que **nunca** aparecem sem o {se}: {arrepentirse} «arrepender-se» · {quejarse} «queixar-se» · {atreverse} «atrever-se» · {acostumbrarse} «acostumar-se» · {darse cuenta} «dar-se conta» — {¡Vete!} «Vai-te embora!».

## O {se} que muda o sentido

Muitos verbos mudam de significado com o reflexivo:

• {dormir} «dormir» × {dormirse} «adormecer-se»
• {ir} «ir» × {irse} «ir-se embora»
• {parecer} «parecer» × {parecerse} «parecer-se (a alguém)» — {Se parece a su padre} «parece-se com o pai»
• {sentar} «sentar» × {sentarse} «sentar-se»
• {despertar} «acordar» × {despertarse} «acordar-se»

Bíblico: {Venga tu reino} «venha o teu reino» · {Tuyos son los cielos} «teus são os céus» — reflexivo implícito na relationação com Deus, o que o português não marca.`),
  vocab: [
    V('me lavo', 'lavarse', 'lavo-me'),
    V('se arrepintió', 'arrepentirse', 'arrependeu-se'),
    V('se aman', 'amarse', 'amam-se (recíproco!)'),
    V('dormirse', 'dormirse', 'adormecer (≠ dormir!)'),
    V('Vete', 'irse', 'vai-te embora!'),
    V('se parece a su padre', 'parecerse', 'parece-se com o pai'),
    V('Se fueron', 'irse', 'foram-se embora (3ª pessoa!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"dormir" × "dormirse"?'),
    options: [
      T('Iguais'),
      T('Dormir × adormecer (o reflexivo muda o sentido!)'),
      T('Presente × passado'),
      T('Eu × ele'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o reflexivo: " ellos ___ fueron" (foram-se embora)'),
      answer: 'se',
      hint: T('Regra §1: 3ª pessoa = se.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é RECÍPROCA?'),
      options: [
        T('Se miraron en el espejo'),
        T('Se abrazaron al verse'),
        T('Se lava las manos'),
        T('Se arrepintió del pecado'),
      ],
      answer: 1,
      hint: T('Regla §2: recíproco = dois agentes trocam ações.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu sentido com «se»'),
      pairs: [
        { a: T('{ir}'), b: T('ir (movimento)') },
        { a: T('{irse}'), b: T('ir-se embora') },
        { a: T('{parecer}'), b: T('parecer (opinião)') },
        { a: T('{parecerse}'), b: T('ser parecido (com)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O pronome repete o sujeito: me, te, se, nos, os, se. Em 3ª pessoa é sempre «se».'),
    },
    { n: '2', text: T('Recíproco = ações trocadas entre várias pessoas: se aman, se escribían.') },
    {
      n: '3',
      text: T('Alguns verbos são sempre reflexivos: arrepentirse, quejarse, atreverse, irse.'),
    },
    { n: '4', text: T('O reflexivo pode mudar o sentido do verbo: dormir/dormirse, ir/irse.') },
  ],
  notes: [
    {
      label: T('Reflexivo ou recíproco'),
      text: T(
        'O pronome {se} é reflexivo quando um agente age sobre si e recíproco quando dois ou mais trocam ações: {se miran} (um ao outro) contra {se mira} (a si mesmo). O número do verbo diz qual é.',
      ),
    },
  ],
  examples: [
    { text: '{se arrepintió}', gloss: T('Arrependeu-se (verbo sempre reflexivo).') },
    { text: '{se aman}', gloss: T('Amam-se (recíproco).') },
    { text: '{Vete}', gloss: T('Vai-te embora! ({irse} + pronome).') },
    { text: '{Se parece a su padre}', gloss: T('Parece-se com o pai ({parecer} × {parecerse}).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Paradigma reflexivo'),
      head: [T('Sujeito'), T('Pronome'), T('Exemplo')],
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
      caption: T('Tabela 2 — Verbos que mudam com «se»'),
      head: [T('Sem «se»'), T('Sentido A'), T('Com «se»'), T('Sentido B')],
      rows: [
        ['{dormir}', T('dormir'), '{dormirse}', T('adormecer')],
        ['{ir}', T('ir'), '{irse}', T('ir-se embora')],
        ['{parecer}', T('parecer'), '{parecerse}', T('ser parecido')],
        ['{despertar}', T('acordar (outro)'), '{despertarse}', T('acordar-se')],
      ],
    },
  ],
};

import { C, T, V } from '../shared.mts';

export default {
  id: 21,
  title: T('A voz passiva'),
  subtitle: T('fue escrito — se venden casas'),
  section: T('Os verbos'),
  body: C(`## Duas passivas, não uma

O espanhol resolve a passiva de duas maneiras: com {ser} (evento, escritura,-death) e com {se} (processo cotidiano, natural).

**A. {ser} + particípio** — a passiva clássica, solene, de documento e de evangelho.

{fue escrito} «foi escrito» · {es amado} «é amado» · {será salvado} «será salvo» · {fue crucificado} «foi crucificado».

O particípio **concorda** com o sujeito: {fueron escritas} «foram escritas».

O agente entra com {por}: {escrito por Dios} «escrito por Deus» · {purificado por la sangre de Cristo} (Hb 9:14).

**B. {se} + verbo** — a passiva circunstancial, com sentido impessoal ou natural: {se venden casas} «vendem-se casas» · {se habla español} «fala-se espanhol» · {se hace todo} «faz-se tudo».

Aqui o verbo **concorda com o substantivo**: {se venden} «vendem-se» (plural!) · {se habla español} «fala-se espanhol» (singular, porque {español} é singular). É o mesmo mecanismo do português do Brasil.

## Como distinguir {se} reflexivo de {se} passivo

A regra é a **presença de um objeto indireto ou de um agente explícito**:

• Reflexivo: {El niño se lava} «a criança lava-se» — o sujeito pratica a ação sobre si mesmo; {se arrepintió} «arrependeu-se».
• Passivo: {Se escribió una carta} «escreveu-se uma carta» — o sujeito pratica, mas o objeto é paciente.
• {Se lo antirrealizar} — se o pronome {me, te, se} indica a pessoa que sofre, é reflexivo; se o {se} se refere ao objeto, é impessoal.

## God's one-line summary

Bíblico: {fue traspasado} «foi traspassado» (Jo 19:37) · {fueron hallados} «foram achados» · {Es escondido para el mundo} «está escondido para o mundo».

A Igreja primitiva usava quase só a primeira: {ser} + particípio, com o agente explícito por {por}.`),
  vocab: [
    V('fue escrito', 'escribir', 'foi escrito'),
    V('será salvado', 'salvar', 'será salvo'),
    V('fue crucificado', 'crucificar', 'foi crucificado'),
    V('se venden', 'vender', 'vendem-se'),
    V('se arrepintió', 'arrepentirse', 'arrependeu-se'),
    V('fue traspasado', 'traspasar', 'foi traspassado (Jo 19:37)'),
    V('por Dios', 'por', 'por Deus (agente!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em "se venden casas", com quem concorda?'),
    options: [T('Com "casas" (plural)'), T('Sempre singular'), T('Com o agente'), T('Com nada')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Passiva com ser: "___ fue escrito" (isto foi escrito)'),
      answer: 'Esto',
      hint: T('Regra §1: o sujeito vem antes do verbo.'),
    },
    {
      kind: 'choose',
      prompt: T('Em "se escribe una carta", a construção é…'),
      options: [
        T('reflexiva'),
        T('passiva com se (o sujeito não é o paciente!)'),
        T('impessoal'),
        T('Erro'),
      ],
      answer: 1,
      hint: T('Regra §3: quem faz? quem sofre?'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a passiva ao seu tipo'),
      pairs: [
        { a: T('{fue escrito}'), b: T('ser + particípio (solenidade)') },
        { a: T('{se venden casas}'), b: T('se + verbo (cotidiano)') },
        { a: T('{fue crucificado}'), b: T('particípio concorda (masc.!)') },
        { a: T('{se arrepintió}'), b: T('se reflexivo (não passivo!)') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'ser + particípio = passiva agentiva; o particípio concorda com o sujeito: fueron escritas.',
      ),
    },
    {
      n: '2',
      text: T('O agente da passiva agentiva vem com por: escrito por Dios, enviado por Dios.'),
    },
    {
      n: '3',
      text: T(
        'se + verbo = passiva impessoal; o verbo concorda com o substantivo: se venden casas.',
      ),
    },
    {
      n: '4',
      text: T(
        'se + pronome (me, te, se) indica que a ação recai sobre a pessoa: se lava, se arrepintió.',
      ),
    },
  ],
  notes: [
    {
      label: T('{ser} + participio'),
      text: T(
        'Duas construções se confundem: {fue escrito} (passiva, sem agente) e {fue escrito por Dios} (agente explícito). O {por} é o que separa resultado de autoria.',
      ),
    },
  ],
  examples: [
    { text: '{fue escrito}', gloss: T('Foi escrito (passiva agentiva).') },
    { text: '{se venden casas}', gloss: T('Vendem-se casas (verbo no plural!).') },
    { text: '{fue traspasado}', gloss: T('Foi traspassado (Jo 19:37).') },
    { text: '{se arrepintió}', gloss: T('Arrependeu-se (reflexivo, não passiva!).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — As duas passivas'),
      head: [T('Tipo'), T('Estrutura'), T('Concordância'), T('Exemplo')],
      rows: [
        [T('passiva agentiva'), '{ser} + particípio', T('particípio ~ sujeito'), '{fue escrito}'],
        [T('passiva impessoal'), '{se} + verbo', T('verbo ~ substantivo'), '{se venden casas}'],
        [T('reflexivo'), '{se} + verbo + objeto indireto', T('verbo = sujeito'), '{se arrepintió}'],
      ],
    },
    {
      caption: T('Tabela 2 — Participios irregulares mais usados'),
      head: [T('Infinitivo'), T('Gerúndio'), T('Participio')],
      rows: [
        ['{escribir}', '{escribiendo}', '{escrito}'],
        ['{hacer}', '{haciendo}', '{hecho}'],
        ['{decir}', '{diciendo}', '{dicho}'],
        ['{ver}', '{viendo}', '{visto}'],
        ['{leer}', '{leyendo}', '{leído}'],
        ['{crucificar}', '{crucificando}', '{crucificado}'],
        ['{morir}', '{muriendo}', '{muerto}'],
        ['{abrir}', '{abriendo}', '{abierto}'],
      ],
    },
  ],
};

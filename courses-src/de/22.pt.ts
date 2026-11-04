import { C, T, V } from '../shared.mts';

export default {
  id: 22,
  title: T('Os verbos modais'),
  subtitle: T('können, müssen, sollen, wollen, mögen, dürfen'),
  section: T('Os verbos'),
  body: C(`## O que é um verbo modal

Os verbos modais não nomeiam ações: nomeiam a **postura** de quem age diante da ação. *können* é poder, *müssen* é necessidade, *sollen* é obrigação ou recomendação, *wollen* é vontade, *dürfen* é permissão e *mögen* é desejo ou gosto. Em vez de dizer o que aconteceu, dizem como o falante se posiciona diante disso.

A marca visível disso está na forma: todos os seis modais perdem a terminação **-en** no singular da primeira e da terceira pessoa. Não é *ich kann-e*, é *ich kann*. O plural de primeira e terceira pessoa volta ao infinitivo: *wir können*, *sie können*.



## Posição e segunda forma verbal

O modal é sempre o **segundo** verbo da oração: *Ich muss jetzt gehen*, *Wir wollen das Buch lesen*. E nunca aparece sozinho: precisa de um infinitivo, que na oração principal fica no fim — *Er muss die Rechnung bezahlen*.

No Perfekt e no Passado, o particípio do modal é substituído pelo infinitivo: em vez de *hat gekonnt* diz-se *hat können können*. É por isso que o Perfekt dos modais é inteiramente **irregular** e sempre leva um segundo infinitivo: *Sie hat kommen können*.

## Substituição do passivo

Como o modal pode receber a voz passiva, basta acoplar a um verbo qualquer em Infinitivo: *Die Rechnung muss bezahlt werden*, *Die Fenster müssen gestrichen werden*. O substantivo de agente (der Passivsatz) fica dispensado, e a frase fica muito mais curta. Na Bíblia de Lutero você encontra construções assim.

## O essencial

Modais não conjugam como verbos comuns nem tomam particípio no passado: conjugam-se pela terminação curta e reparam-se com o infinitivo. E porque não descrevem ação, quase nunca admitem um objeto direto por si só — *Ich kann* precisa de *das* ou de um infinitivo para dizer o que é que se pode.`),
  vocab: [
    V('können', 'können', 'poder, ser capaz de'),
    V('kann', 'können', 'pode (3.ª pessoa e ich)'),
    V('müssen', 'müssen', 'ter de, precisar de'),
    V('sollen', 'sollen', 'dever, supor que se deve'),
    V('wollen', 'wollen', 'querer'),
    V('dürfen', 'dürfen', 'ter permissão, poder (por direito)'),
    V('mögen', 'mögen', 'gostar de, querer (concessivo)'),
    V('ich kann', 'können', 'eu posso'),
    V('Sie hat kommen können', 'können', 'ela pôde vir (Perfekt com duplo infinitivo)'),
    V('muss bezahlt werden', 'werden', 'tem de ser pago (substituição do passivo)'),
    V('Du sollst deinen Vater und deine Mutter ehren', 'sollen', 'honrarás o teu pai e a tua mãe'),
    V('Wir müssen die Fenster streichen', 'streichen', 'temos de pintar as janelas'),
    V('Er will nicht kommen', 'wollen', 'ele não quer vir'),
    V('Das mag sein', 'mögen', 'pode ser (concessivo)'),
    V('Ich muss sofort gehen', 'gehen', 'tenho de ir imediatamente'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta de {können} na 3.ª pessoa do singular?'),
    options: [T('kann'), T('kannen'), T('kannst'), T('könnt')],
    answer: 0,
    hint: T('Regra §1: no singular não há terminação -en.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o Perfekt: Ich habe arbeiten ___ (tive de trabalhar).'),
      answer: 'müssen',
      hint: T('Regra §3: o participio do modal é o próprio infinitivo.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase forma a voz passiva com modal?'),
      options: [
        T('Der Brief muss geschrieben werden.'),
        T('Der Brief muss ich schreiben.'),
        T('Muss ich der Brief schreiben.'),
        T('Der Brief wird müssen geschrieben.'),
      ],
      answer: 0,
      hint: T('Regra §4: modal + Infinitivo + werden.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduza: {Du sollst deinen Vater und deine Mutter ehren}'),
      answer: 'you shall honour your father and your mother',
      hint: T('É o quarto mandamento na tradução de Lutero.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o modal ao seu valor'),
      pairs: [
        { a: T('dürfen'), b: T('permissão') },
        { a: T('müssen'), b: T('necessidade') },
        { a: T('sollen'), b: T('obrigação ou conselho') },
        { a: T('wollen'), b: T('vontade própria') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A primeira e a terceira pessoa do singular perdem o -en: ich kann, er muss, sie soll, du magst. O plural de primeira e terceira pessoa é igual ao infinitivo: wir können, sie mögen.',
      ),
    },
    {
      n: '2',
      text: T(
        'O modal ocupa a segunda posição da oração e o infinitivo vai para o fim: Du musst die Tür schließen.',
      ),
    },
    {
      n: '3',
      text: T(
        'No Perfekt não há particípio: o próprio infinitivo volta, e o verbo auxiliar fica no fim. Ich habe arbeiten müssen (não *gemusst).',
      ),
    },
    {
      n: '4',
      text: T(
        'Modal + Infinitivo + werden dá a passiva de substituição: Die Briefe müssen heute geschrieben werden.',
      ),
    },
    {
      n: '5',
      text: T(
        'A negação de müssen esvazia o valor: Ich muss significa «tenho de», mas Ich muss nicht significa «não preciso de».',
      ),
    },
  ],
  notes: [
    {
      label: T('mögen tem duas vidas'),
      text: T(
        'Com o sentido de «gostar de», *mögen* behave-se como um verbo comum e admite objeto: *Ich mag Kaffee*. Com sentido concessivo — «pode ser que» — o objeto some e a frase passa a ser um comentário sobre o que se admite: *Das mag sein*, *Er mag krank sein*. Nessa segunda vida, o verbo já não diz nada sobre o sujeito e se aproxima de um conectivo, ao lado de *vielleicht* e *wohl*.',
      ),
    },
    {
      label: T('Leitura em Lutero'),
      text: T(
        'O quarto mandamento — *Du sollst deinen Vater und deine Mutter ehren* — usa *sollen*, não *müssen*. A diferença não é teórica: *müssen* diria que alguém de fora obriga, *sollen* diz que a vontade é o fundamento. Do mesmo modo, as bem-aventuranças começam todas por *Selig sind*, e os sermões de Lutero alternam *sollen* e *dürfen* para passar da Lei para a plenitude do Evangelho.',
      ),
    },
  ],
  examples: [
    { text: 'Ich kann gut schwimmen.', gloss: T('Sei nadar bem (capacidade).') },
    { text: 'Du musst die Tür schließen.', gloss: T('Tens de fechar a porta (necessidade).') },
    {
      text: 'Du sollst deinen Vater und deine Mutter ehren.',
      gloss: T('Honrarás o teu pai e a tua mãe (mandamento).'),
    },
    {
      text: 'Hier darf man nicht rauchen.',
      gloss: T('Aqui não se pode fumar (permissão negada).'),
    },
    {
      text: 'Die Rechnung muss bezahlt werden.',
      gloss: T('A conta tem de ser paga (passivo com modal).'),
    },
    { text: 'Sie hat kommen können.', gloss: T('Ela pôde vir (duplo infinitivo no Perfekt).') },
    { text: 'Wir haben nicht kommen dürfen.', gloss: T('Não nos foi permitido vir.') },
    {
      text: 'Er will morgen nach Berlin fahren.',
      gloss: T('Ele quer viajar para Berlim amanhã (vontade).'),
    },
    {
      text: 'Mag sein, er hat sich verspätet.',
      gloss: T('Pode ser que ele se tenha atrasado (concessivo).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Presente dos seis modais'),
      head: [T('Infinitivo'), T('ich'), T('du'), T('er/sie/es'), T('wir'), T('ihr'), T('sie/Sie')],
      rows: [
        ['können', 'kann', 'kannst', 'kann', 'können', 'könnt', 'können'],
        ['müssen', 'muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'],
        ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'],
        ['wollen', 'will', 'willst', 'will', 'wollen', 'wollt', 'wollen'],
        ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'],
        ['mögen', 'mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'],
      ],
    },
    {
      caption: T('Tabela 2 — O que cada modal comunica'),
      head: [T('Modal'), T('Valor'), T('Frase de exemplo')],
      rows: [
        ['können', 'capacidade, possibilidade', 'Ich kann gut schwimmen.'],
        ['müssen', 'necessidade interna ou externa', 'Ich muss früh aufstehen.'],
        ['sollen', 'ordem, instrução, conselho', 'Du sollst nicht lügen.'],
        ['wollen', 'vontade própria do sujeito', 'Er will nach Berlin.'],
        ['dürfen', 'permissão, autorização', 'Hier darf man nicht rauchen.'],
        ['mögen', 'gosto, desejo, concessivo', 'Mag sein, er hat Angst.'],
      ],
    },
  ],
};

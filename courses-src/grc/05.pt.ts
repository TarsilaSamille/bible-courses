import { C, T, V } from '../shared.mts';

export default {
  id: 5,
  section: T('O verbo'),
  title: T('Os verbos essenciais'),
  subtitle: T('ἔρχομαι, εἰμί, λέγω, ἐσθίω: as raízes que prendem o NT'),
  body: C(`## Seis verbos que nenhuma gramática discute

O Novo Testamento se apoia em meia dúzia de verbos. {ἔρχομαι} «ir, vir», {εἰμί} «ser», {γίνομαι} «tornar-se, acontecer», {λέγω} «dizer», {ἀκούω} «ouvir» e {ἐσθίω} «comer» aparecem em quase todo versículo, e nenhum deles tem conjugação regular.

A dificuldade de cada um é diferente. {εἰμί} não segue o paradigma de {-ω}: no presente faz {εἰμί}, {εἶ}, {ἐστίν}, {ἐσμέν}, {ἐστέ}, {εἰσίν}, e no imperfeito {ἤμην}, {ἦς}, {ἦν}. É o verbo que fecha a identidade das coisas.

{ἔρχομαι} é deponente — só tem médio — e muda o tema conforme o tempo: presente {ἔρχομαι}, imperfeito {ἠρχόμην}, futuro {ἐλεύσομαι}, aoristo {ἦλθον}. Três temas em um verbo só, e o aoristo não tem nenhuma letra do presente.

{γίνομαι} é o mais traiçoeiro: parece {γίνομαι}, é deponente, é raiz de {γένους} e ainda assim o aoristo sai com {ἐγενόμην}. O sentido de «acontecer» emerge do mesmo verbo que faz «tornar-se»: {ἐγένετο} responde tanto a «ele tornou-se» quanto a «aconteceu».

## εἰμί e ἔχω: ser e ter

O grego do NT continua tendo {εἰμί} onde o hebraico usa {הָיָה}, e o paralelo é exato: {ἦν} «era», como em João 1:1. Mas onde o hebraico continua sem verbo «ter», o grego ganhou um: {ἔχω}. O tradutor que lê {ἔχω} como «ter» perde o verbo que diz «estar com», «possuir» e «levar».

{λέγω} e {ἐσθίω} são a mesma história em graus diferentes. Ambos mudam de tema nos tempos compostos: {εἶπον}, {ἐφάγον}, {φάγω}. O que o português guarda no mesmo infinitivo ({dizer}, {comer}), o grego exprime com três pedaços que se memorizam separados.

## Aoristo, perfeito e o que se perde na tradução

{ἐσθίω} no aoristo é {ἐφάγον} — o «comi» acabado. Mas o perfeito muda tudo: {ἐδήδοκα} traz o estado do que está comido. No diálogo do pão em João 6, {ἐσθίει} e os derivados continuam o aspecto imperfectivo.

A distinção entre {ἦλθον} e {ἐλήλυθα} diz o mesmo que «vim» e «tenho vindo»: um marca o evento, outro o estado atual que dele vem. O leitor que só usa o infinitivo para buscar no léxico perde exatamente essa nota.

## Na Bíblia

João 1:1 faz dois verbos em cinco palavras: {Ἐν ἀρχῇ ἦν ὁ λόγος}. {ἦν} é imperfeito de {εἰμί} — o cenário que já estava dado antes do ponto de observação. E João 1:3 fecha com {ἐγένετο}, {γίνομαι} de novo em aoristo, para marcar a criação que se fez. O grego que começa com {ἦν} termina com {ἐγένετο}: o Verbo já era, e tudo o resto aconteceu.

Marcos 4:39 traz {πεφίμωσο}, «calamo-te»: é a forma passiva do aoristo de {φιμόω}, «amarrar a boca». O versículo inteiro mostra o método: o grego coloca a ordem de Jesus no passivo para dizer que o mar não responde à ordem, mas a Cristo.`),
  vocab: [
    V('ἔρχομαι', 'ἔρχομαι', 'ir / vir (pres. depoente)'),
    V('ἦλθον', 'ἔρχομαι', 'veio (aoristo)'),
    V('εἰμί', 'εἰμί', 'ser'),
    V('ἦν', 'εἰμί', 'era'),
    V('γίνομαι', 'γίνομαι', 'tornar-se'),
    V('ἐγένετο', 'γίνομαι', 'aconteceu'),
    V('λέγω', 'λέγω', 'dizer'),
    V('εἶπον', 'λέγω', 'disse (aoristo)'),
    V('ἐσθίω', 'ἐσθίω', 'comer'),
    V('ἐφάγον', 'ἐσθίω', 'comi (aoristo)'),
    V('ἔχω', 'ἔχω', 'ter'),
    V('ἀκούω', 'ἀκούω', 'ouvir'),
    V('ἤκουσα', 'ἀκούω', 'ouvi (aoristo)'),
    V('βλέπω', 'βλέπω', 'ver'),
    V('εἶδον', 'βλέπω', 'vi (aoristo)'),
    V('δίδωμι', 'δίδωμι', 'dar'),
    V('ἔδωκα', 'δίδωμι', 'dei (aoristo)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{εἰμί} não conjuga em {-ω}: presente {εἰμί} — {εἶ} — {ἐστίν}; imperfeito {ἤμην} — {ἦς} — {ἦν}. É memorizar, não deduzir.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbos deponentes não têm voz ativa, mas recebem formas médias: {γίνομαι}, {ἔρχομαι}, {ἀποκρίνομαι}. O aoristo de {ἔρχομαι} é {ἦλθον}, e não deriva do presente.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O aoristo de {ἐσθίω} é {ἐφάγον}, de {λέγω} é {εἶπον}, de {βλέπω} é {εἶδον}: três temas separados, três notas, um verbo só.',
      ),
    },
    {
      n: '§4',
      text: T(
        '{ἦν} e {ἐγένετο} não se trocam: {ἦν} é cenário (João 1:1), {ἐγένετο} é o que aconteceu no ponto X (João 1:3).',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego do NT não tem verbo «ter» comum; {ἔχω} cobre «ter», «possuir» e «estar com». Em João 15:4 {ἔχω} diz ao ramo que não dá fruto.',
      ),
    },
  ],
  notes: [
    {
      label: T('O aoristo que parece futuro'),
      text: T(
        '{ἐλεύσομαι} é futuro de {ἔρχομαι}, mas o presente {ἔρχομαι} e o aoristo {ἦλθον} não compartilham tema. Quem decora só o infinitivo não reconhece o verbo no texto.',
      ),
    },
    {
      label: T('O ser que não vai como o latim'),
      text: T(
        'O grego diz {ἦν οὖν ψυχή} «era a alma», onde o latim/português dói com {fuit anima}: {ἦν} descreve o estado que se agrega ao histórico. Quando {ἐγένετο} substitui {ἦν} no mesmo verso, a frase passa a narrar criação.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ἐν ἀρχῇ ἦν ὁ λόγος',
      gloss: T('Jo 1:1 — {ἦν} é imperfeito de {εἰμί}: o Verbo já era antes do discurso.'),
    },
    {
      text: 'καὶ θεὸς ἦν ὁ λόγος',
      gloss: T('Jo 1:1 — {ἦν} sem artigo defende predicado nominal: Verbo era Deus.'),
    },
    {
      text: 'πάντα δι᾽ αὐτοῦ ἐγένετο',
      gloss: T('Jo 1:3 — {ἐγένετο} de {γίνομαι}: tudo veio a ser.'),
    },
    {
      text: 'ἔφαγεν ὁ λαός',
      gloss: T('Ex 16:35 LXX — {ἔφαγεν} é aoristo de {ἐσθίω}: o maná foi comido.'),
    },
    {
      text: 'ἦλθον οὖν μαθηταὶ αὐτοῦ',
      gloss: T('Jo 4:8 — {ἦλθον} é aoristo de {ἔρχομαι}: eles vieram.'),
    },
    {
      text: 'οὕτως αἰεὶ λεγόμενα',
      gloss: T('particípio médio de {λέγω}: as coisas sempre ditas.'),
    },
    { text: 'ἀκούσῃ ὃν ἐγὼ ἀκούω', gloss: T('futuro ativo de {ἀκούω}: ouvirás o que eu ouço.') },
    {
      text: 'ἐδήδοκες φάγεσαι',
      gloss: T('perfeito + futuro de {ἐσθίω}: o que se comeu torna-se a comida futura.'),
    },
    { text: 'ἔδωκεν αὐτοῖς', gloss: T('aoristo de {δίδωμι}: deu-lhes.') },
  ],
  tables: [
    {
      caption: T('O imperfeito de εἰμί — o verbo que não tem -ω'),
      head: [T('Pessoa'), T('Presente'), T('Imperfeito'), T('Futuro')],
      rows: [
        [T('1s'), T('{εἰμί}'), T('{ἤμην}'), T('{ἔσομαι}')],
        [T('2s'), T('{εἶ}'), T('{ἦς}'), T('{ἔσῃ}')],
        [T('3s'), T('{ἐστί(ν)}'), T('{ἦν}'), T('{ἔσται}')],
        [T('1p'), T('{ἐσμέν}'), T('{ἦμεν}'), T('{ἐσόμεθα}')],
        [T('2p'), T('{ἐστέ}'), T('{ἦτε}'), T('{ἔσεσθε}')],
        [T('3p'), T('{εἰσί(ν)}'), T('{ἦσαν}'), T('{ἔσονται}')],
      ],
    },
    {
      caption: T('Os aoristos fortes dos deponentes do NT'),
      head: [T('Verbo'), T('Aoristo'), T('Futuro'), T('Observação')],
      rows: [
        [T('{ἔρχομαι}'), T('{ἦλθον}'), T('{ἐλεύσομαι}'), T('tema novo')],
        [T('{γίνομαι}'), T('{ἐγενόμην}'), T('{γενήσομαι}'), T('perde o presente')],
        [T('{ἀποκρίνομαι}'), T('{ἀπεκρινάμην}'), T('{ἀποκριθήσομαι}'), T('resposta à pergunta')],
        [T('{φοβέομαι}'), T('{ἐφοβήθην}'), T('{φοβηθήσομαι}'), T('aoristo passivo comum')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Ἐν ἀρχῇ ἦν ὁ λόγος}, qual o tempo e número de {ἦν}?'),
    options: [
      T('Aoristo, 1ª singular'),
      T('Imperfeito, 3ª singular'),
      T('Perfeito, 3ª plural'),
      T('Presente, 3ª singular'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T(
        'Complete "πάντα δι᾽ αὐτοῦ ___" com a forma de aoristo de {γίνομαι} para "aconteceu".',
      ),
      answer: 'ἐγένετο',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu aoristo.'),
      pairs: [
        { a: T('{ἔρχομαι}'), b: T('{ἦλθον}') },
        { a: T('{ἐσθίω}'), b: T('{ἐφάγον}') },
        { a: T('{εἰμί}'), b: T('{ἤμην}') },
        { a: T('{γίνομαι}'), b: T('{ἐγενόμην}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual a forma aoristo de {λέγω}?'),
      options: [T('{ἐλέγομεν}'), T('{εἶπον}'), T('{ἐλογήθην}'), T('{λέξω}')],
      answer: 1,
    },
  ],
};

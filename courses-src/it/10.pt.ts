import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Futuro e condizionale'),
  subtitle: T('parlerò, parlerei'),
  section: T('O tempo do verbo'),
  body: C(`## Uma raiz, duas terminações

O futuro e o condicional saem do mesmo radical do infinitivo, **quase sempre sem a vogal final**: {parlare} → {parler-}, {leggere} → {legger-}, {finire} → {finir-}. Depois a terminação faz todo o trabalho, e é ela que separa os dois tempos.

O futuro acrescenta {-ò}, {-ai}, {-à}, {-emo}, {-ete}, {-anno}: {parlerò}, {parlerai}, {parlerà}, {parleremo}, {parlerete}, {parleranno}. O condicional acrescenta {-ei}, {-esti}, {-ebbe}, {-emmo}, {-este}, {-ebbero}: {parlerei}, {parlesti}, {parlerebbe}, {parleremmo}, {parlereste}, {parlerebbero}. Uma vogal trocada, dois tempos: {parlerò} e {parlerei} diferem só na última sílaba.

## O condicional não é só hipótese

O condicional **é o tempo da hipótese**, da possibilidade e da cortesia: {Vorrei un caffè} («eu gostaria de um café»), {Potresti aiutarmi?} («poderia me ajudar?»), {Lo farei} («eu faria, se pudesse»). {Vorrei} é mais do que um desejo: é um pedido educado, e a distância que o italiano constrói é o que faz o pedido funcionar.

Traduzir {Lo farei} por «eu farei» erra. O contexto decide se é condicional (hipótese) ou futuro (fato previsto), e muitas vezes a diferença é justamente o que o narrador não quer afirmar. Nos evangelhos, {Verrà il tuo regno} e {Avrà la gloria} usam o futuro para o que é certo; {sarebbe venuto} usa o condicional para o que é apenas possível.

## Os irregulares são poucos e muito usados

{Essere} dá {sarò} e {sarei}, {avere} dá {avrò} e {avrei}, {fare} dá {farò} e {farei}, {andare} dá {andrò} e {andrei}, {venire} dá {verrò} e {verrei}, {vedere} dá {vedrò} e {vedrei}, {potere} dá {potrò} e {potrei}, {dovere} dá {dovrò} e {dovrei}, {sapere} dá {saprò} e {saprei}. O padrão é sempre o mesmo: o verbo **perde sílaba** e ganha {-rò} ou {-rei}.

É o mesmo caminho do latim: {amāre} dava {amābō}, e o italiano {verrò} desce de {venire} mais o futuro do latim. O italiano não inventou nada aqui; guardou o final.

## O que ler

Se ver uma forma em {-rò} ou {-rei}, o radical é o do verbo e a terminação diz o tempo. E cuidado com os irregulares: {andrò} não é {andare} + {-ò} com o {a} intacto, e {verrò} não tem {n}. Quando a forma não sai da regra, é porque o verbo está na lista.`),
  vocab: [
    V('parlerò', 'parlare', 'falarei'),
    V('parlerei', 'parlare', 'falaria'),
    V('sarò', 'essere', 'serei'),
    V('avrò', 'avere', 'terei'),
    V('verrà', 'venire', 'virá'),
    V('vorrei', 'volere', 'gostaria'),
    V('potresti', 'potere', 'podrías'),
    V('farei', 'fare', 'haré'),
    V('vedrà', 'vedere', 'verá'),
    V('andrò', 'andare', 'iré'),
    V('dovrò', 'dovere', 'deberé'),
    V('saprà', 'sapere', 'sabrá'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete Ap 1:7: ogni occhio lo ___ (vedere, futuro)'),
    answer: 'vedrà',
    hint: T('Futuro irregular de vedere.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é o futuro di essere?'),
      options: [T('serei'), T('sarò'), T('sia'), T('ero')],
      answer: 1,
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é um pedido cortês?'),
      options: [
        T('Dammi il libro!'),
        T('Potresti darmi il libro?'),
        T('Mi dai il libro.'),
        T('Dare il libro.'),
      ],
      answer: 1,
    },
    {
      kind: 'fill',
      prompt: T('Complete: avrei ___ (dire, condicional composto)'),
      answer: 'detto',
      hint: T('Participio irregular de dire.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O futuro tira do infinitivo tudo menos a vogal final: {parlare} → {parlerò}, {leggere} → {leggerò}.',
      ),
    },
    {
      n: '2',
      text: T(
        'O condicional usa {-ei}, {-esti}, {-ebbe}, {-emmo}, {-este}, {-ebbero}: {parlerei} e {parlerò} diferem só na última sílaba.',
      ),
    },
    {
      n: '3',
      text: T(
        '{Vorrei} e {potresti} são condicionais de cortesia e não futuros: «eu gostaria», «poderia».',
      ),
    },
    {
      n: '4',
      text: T(
        'Os irregulares trocam o final: {essere} → {sarò} e {sarei}, {venire} → {verrò} e {verrei}, {avere} → {avrò} e {avrei}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O condicional composto é o imperfeito do auxiliar mais o participio: {avrei detto}, {sarei andato}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O condicional não é um futuro'),
      text: T(
        '{Parlerei} não é o futuro de {parlerò}: é o que se faz no caso de. A mesma forma cobre desejo, cortesia e hipótese, {vorrei un caffè}, {se venissi, ti chiamerei}. A forma é uma só, e o que muda é o que o falante está disposto a afirmar.',
      ),
    },
    {
      label: T('{Lo farei} tem dois valores'),
      text: T(
        '{Lo farei} pode ser futuro ({lo farò domani}) ou condicional ({se potessi, lo farei}). O contexto decide, e em {Se venissi, ti chiamerei} a hipótese está na oração anterior; quem traduz só o verbo perde a condição.',
      ),
    },
  ],
  examples: [
    { text: 'Parlerò con lui domani.', gloss: T('Falarei com ele amanhã.') },
    { text: 'Vorrei un caffè.', gloss: T('Eu gostaria de um café.') },
    { text: 'Potresti aiutarmi?', gloss: T('Você poderia me ajudar?') },
    { text: 'Ogni occhio lo vedrà.', gloss: T('Todo olho o verá.') },
    { text: 'Sarà come un albero.', gloss: T('Será como uma árvore.') },
    { text: 'Se venissi, ti chiamerei.', gloss: T('Se viesses, eu te chamaria.') },
    { text: 'Verrà il tuo regno.', gloss: T('Virá o teu reino.') },
    { text: 'Avrà la gloria.', gloss: T('Terá a glória.') },
  ],
  tables: [
    {
      caption: T('Futuro e condicional'),
      head: ['Persona', 'Futuro', 'Condicional'],
      rows: [
        ['io', 'parlerò', 'parlerei'],
        ['tu', 'parlerai', 'parleresti'],
        ['lui/lei', 'parlerà', 'parlerebbe'],
        ['noi', 'parleremo', 'parleremmo'],
        ['voi', 'parlerete', 'parlereste'],
        ['loro', 'parleranno', 'parlerebbero'],
      ],
    },
    {
      caption: T('Futuro e condicional irregulares'),
      head: ['Infinitivo', 'Futuro', 'Condicional'],
      rows: [
        ['essere', 'sarò', 'sarei'],
        ['avere', 'avrò', 'avrei'],
        ['fare', 'farò', 'farei'],
        ['andare', 'andrò', 'andrei'],
        ['venire', 'verrò', 'verrei'],
        ['vedere', 'vedrò', 'vedrei'],
        ['potere', 'potrò', 'potrei'],
        ['dovere', 'dovrò', 'dovrei'],
        ['sapere', 'saprò', 'saprei'],
      ],
    },
  ],
};

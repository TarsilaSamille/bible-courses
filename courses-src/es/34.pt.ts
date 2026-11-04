import { C, T, V } from '../shared.mts';

export default {
  id: 34,
  title: T('A oração principal'),
  subtitle: T('ordem flexível, sujeito que sumir — Jo 1:1'),
  section: T('Sintaxe'),
  body: C(`## O esqueleto: sujeito + verbo

Toda oração tem um **verbo**; o sujeito é o termo que o verbo traz junto, e por isso pode **sumir**: {Oro} = {Yo oro} «(eu) oro» · {Oramos} «(nós) oramos» · {Habla Dios} «Deus fala».

O verbo já contém a pessoa, o número e (na maioria das vezes) o tempo, o modo e o aspecto.

## A ordem é flexível

A ordem neutra é **SVO**, mas o espanhol permite realçar qualquer elemento movendo-o para o início:

• Verbo primeiro (ênfase no verbo): {Vino Jesús} «veio Jesus».
• Objeto primeiro (ênfase no objeto): {A Dios oramos} «a Deus oramos» · {El Hijo amo} «o Filho eu amo» (1Jo 4:9: {El Hijo amo, y no yo}!).
• Adjunto adverbial primeiro (cenário): {En el principio era el Verbo} «no princípio era o Verbo» (Jo 1:1) · {Cuando vio, lloró} «quando viu, chorou».

O que nunca muda é a relação **sujeito–verbo**: se o sujeito vem depois, recebe o pronome: {Existe un Dios} «existe um Deus» (sujeito posposto, verbo 3ª pessoa).

## A negação

O {no} entra **antes** do verbo e antes de qualquer pronome: {No creo} «não creio» · {No te veo} «não te vejo» · {No hay} «não há» · {No lo sé} «não sei».

Duas negações são impossíveis: {*No no creo} está errado.

## A pergunta

A entonação já basta: {¿Vienes?} «(tu) vens?».

Com palavra interrogativa, a ordem **não se inverte**: {¿Dónde moras?} «onde moras?» · {¿Por qué?} — o sujeito fica depois do verbo, como na afirmação.

Exceção coloquial: {¿Vienes tú?} (sujeito retomado, com sentido de contraste).

## Leitura de João 1:1–2 (Reina-Valera 1960)

{En} {el principio} {era} {el Verbo}, {y} {el Verbo} {era} {con Dios}...

1. {En el principio} — adjunto temporal, 1º lugar: **cenário**.
2. {era} — verbo {ser} na 3ª pessoa do singular do **imperfeito**: descrição, não ação pontual.
3. {el Verbo} — sujeito posposto, marcado pelo artigo **definido** {el}: unicidade.
4. {En el principio... era} — o tempo verbal é o **imperfeito**, não o pretérito: o Verbo já *era* quando começou a contar a história.
5. Repetição: {y el Verbo era con Dios} — {y} apenas junta; a estrutura se repete como um refrão.

A frase mais curta do capítulo — {Y el Verbo era Dios} (Jo 1:1) — é a mesma Ossalama invertida: sujeito {el Verbo} + {era} + predicativo {Dios}.`),
  vocab: [
    V('oro', 'orar', 'oro (sem "yo"!)'),
    V('No creo', 'creer', 'não creio'),
    V('No hay', 'haber', 'não há'),
    V('Vino Jesús', 'venir', 'veio Jesus (verbo 1º!)'),
    V('el Verbo', 'verbo', 'o Verbo (art. definido!)'),
    V('En el principio', 'principio', 'no princípio (Jo 1:1)'),
    V('era con Dios', 'ser', 'era com Deus (Jo 1:1)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "Oro" dispensa "yo"?'),
    options: [
      T('Erro'),
      T('O verbo carrega a pessoa (sujeito some!)'),
      T('Só poesia'),
      T('Futuro'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Onde está o «no» na negação?'),
      options: [
        T('Depois do verbo'),
        T('Antes do verbo e dos pronomes'),
        T('No fim da frase'),
        T('Onde der'),
      ],
      answer: 1,
      hint: T('Regra §3: «no» sempre antes do verbo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete João 1:1: "En el principio ___ el Verbo" (era)'),
      answer: 'era',
      hint: T('Regra §5: o tempo aqui é o imperfeito (cenário).'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a função ao exemplo'),
      pairs: [
        { a: T('sujeito elíptico'), b: T('{Oro}') },
        { a: T('verbo em 1º lugar'), b: T('{Vino Jesús}') },
        { a: T('cenário'), b: T('{En el principio}') },
        { a: T('negação'), b: T('{No creo}') },
      ],
      answer: ['0-0', '1-1', '2-2', '3-3'],
    },
  ],
  rules: [
    {
      n: '1',
      text: T('O sujeito pode ser omitido porque o verbo já o identifica: Oro, Habla Dios.'),
    },
    {
      n: '2',
      text: T('A ordem SVO é neutra, mas qualquer elemento pode ser antecipado para dar ênfase.'),
    },
    {
      n: '3',
      text: T('O «no» da negação vem sempre antes do verbo e dos pronomes: no te veo, no lo sé.'),
    },
    {
      n: '4',
      text: T(
        'Na pergunta com palavra-Q não há inversão: ¿Dónde moras? tem o mesmo esqueleto da afirmação.',
      ),
    },
    {
      n: '5',
      text: T(
        'O imperfeito com {ser} e {estar} descreve estado: era, estaba — é o tempo do fundo narrativo.',
      ),
    },
  ],
  notes: [
    {
      label: T('Assunto, verbo, complemento'),
      text: T(
        'A oração principal tem exatamente isso. O que complica a leitura é que o verbo pode vir no meio: {A Dios oramos} inverte a ordem sem mudar o papel de cada palavra.',
      ),
    },
  ],
  examples: [
    {
      text: '{En el principio era el Verbo}',
      gloss: T('No princípio era o Verbo (Jo 1:1 — adjunto + verbo + sujeito).'),
    },
    { text: '{Oro}', gloss: T('Oro (o sujeito «yo» sumiu).') },
    { text: '{No lo sé}', gloss: T('Não sei (negação + pronome átono).') },
    { text: '{¿Dónde moras?}', gloss: T('Onde moras? (pergunta sem inversão; Jo 1:38).') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Ordem dos elementos'),
      head: [T('Padrão'), T('Exemplo'), T('Efeito')],
      rows: [
        ['SVO', '{Dios ama al mundo}', T('neutro')],
        ['SVO (sujeito omitido)', '{Ama al mundo}', T('sujeito elíptico')],
        ['Verbo + sujeito', '{Vino Jesús}', T('ênfase no verbo')],
        ['Objeto + verbo + sujeito', '{Al mundo lo amó Dios}', T('ênfase no objeto')],
        ['Adjunto + verbo + sujeito', '{En el principio era el Verbo}', T('cenário')],
      ],
    },
    {
      caption: T('Tabela 2 — Análise de João 1:1-2'),
      head: [T('Palavra'), T('Função'), T('Nota')],
      rows: [
        ['{En el principio}', T('adjunto temporal'), T('abre o versículo')],
        ['{era}', T('verbo (imperf.)'), T('descrição, não evento')],
        ['{el Verbo}', T('sujeito posposto'), T('art. definido: unicidade')],
        ['{con Dios}', T('complemento'), T('preposição + a pessoal')],
        ['{y el Verbo}', T('coordenação'), T('{y} só liga orações')],
      ],
    },
  ],
};

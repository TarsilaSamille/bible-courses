import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Congiuntivo e pronomes'),
  subtitle: T('che parli; Dio ti ama'),
  section: T('O passado e a leitura'),
  body: C(`## O congiuntivo não é só desejo

O congiuntivo italiano **não significa apenas** «subjetivo» ou «desejo». Ele aparece depois de emoção, {sono contento che tu vada}; depois de dúvida, {non credo che sia qui}; depois de ordem e exortação, {ti prego di venire}; e depois de conectores como {affinché} («para que»), {perché} («porque») e {sebbene} («embora»).

A regra prática cabe numa linha: se a oração tem um sujeito diferente do sujeito principal, o congiuntivo é o normal. Em {voglio che tu vada}, quem quer é uma pessoa e quem vai é outra. Quando o sujeito é o mesmo, o italiano falado alterna entre indicativo e congiuntivo com mais liberdade do que a prescrição, e o falante não percebe a tensão entre os dois.

## A formação é mais fácil do que parece

O congiuntivo presente **troca a terminação final** do infinitivo pela terminação correspondente do presente: {parlare} → {parli}, {leggere} → {legga}, {finire} → {finisca}. Em relação ao presente indicativo, é o mesmo comutador; a diferença está nos irregulares, que também mudam: {essere} → {sia}, {avere} → {abbia}, {fare} → {faccia}, {andare} → {vada}, {dare} → {dia}, {sapere} → {sappia}.

É por isso que {so che lui è qui} (indicativo, certeza) se distingue de {so che lui sia qui} (congiuntivo, relato de outro). O substantivo é o mesmo; o que muda é o quanto o falante assume como verdade.

## Os pronomes são poucos e grudam

Os pronomes simples são {mi}, {ti}, {si}, {lo}, {la}, {li}, {le}, {ci}, {vi}, {ne}. **Todos se põem antes do verbo**, e {lo}, {la}, {li}, {le} podem ir depois. Em {Dio ti ama}, o {ti} significa «a ti» e vem antes do verbo.

O {si} reflexo merece atenção: {si} só é reflexo quando a ação recai sobre o sujeito. Em {lui si lava}, «ele se lava»; em {Maria si è vestita}, pode ser reflexo («Maria se vestiu») ou passivo («Maria foi vestida»). Quem fala sabe qual das duas coisas aconteceu, e a frase sozinha não diz.

## Na Bíblia

{Sia santificato il tuo nome}, do Pai-Nosso, é congiuntivo de desejo. A forma {è} ali seria erro: {è santificato il tuo nome} seria uma notícia sobre um fato consumado, e o versículo deixaria de ser um pedido. O mesmo vale para {Venga il tuo regno} e {Sia fatta la tua volontà}: os três pedidos centrais do Pai-Nosso estão no congiuntivo, e não é acaso, porque um pedido é por definição o que se quer e ainda não se tem.

## O que ler

Se a oração principal tem verbo de emoção, de dúvida ou de ordem, espere o congiuntivo. Se vir {sia}, {abbia}, {faccia}, {vada}, é congiuntivo; e se a frase for um desejo ou um relato, a tradução precisa disso. Se vir {so che} seguido de indicativo, não corrija: a certeza é afirmação, e afirmar é o oposto de supor.`),
  vocab: [
    V('parli', 'parlare', 'fales (subj.)'),
    V('sia', 'essere', 'seja (subj.)'),
    V('abbia', 'avere', 'tenha (subj.)'),
    V('vada', 'andare', 'vá (subj.)'),
    V('venga', 'venire', 'venha (subj.)'),
    V('ti', 'ti', 'a ti'),
    V('ci', 'ci', 'a nós'),
    V('ne', 'ne', 'disso/deles'),
    V('che', 'che', 'que (conjunção)'),
    V('affinché', 'affinché', 'para que'),
    V('perché', 'perché', 'porque'),
    V('sebbene', 'sebbene', 'embora'),
    V('voglio', 'volere', 'quero'),
  ],
  exercise: {
    kind: 'fill',
    prompt: T('Complete: Sia santificato ___ nome (teu)'),
    answer: 'il tuo',
    hint: T('Artigo + possessivo.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual frase usa corretamente o congiuntivo?'),
      options: [
        T('Spero che Dio ___ buono.'),
        T('Spero che Dio è buono.'),
        T('So che Dio ___ buono.'),
        T('Penso che Dio va buono.'),
      ],
      answer: 0,
      hint: T('Spero richiede congiuntivo.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete: Dio ___ ama (ti)'),
      answer: 'ti',
      hint: T('Pronome objeto.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual forma significa «tenha» no congiuntivo?'),
      options: [T('ha'), T('abbia'), T('abbia avuto'), T('avrebbe')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Depois de emoção, dúvida, ordem ou finalidade o verbo vai no congiuntivo: {sono contento che tu vada}, {non credo che sia qui}.',
      ),
    },
    {
      n: '2',
      text: T('Com sujeito diferente do principal o congiuntivo é o normal: {voglio che tu vada}.'),
    },
    {
      n: '3',
      text: T(
        'A formação troca a terminação final do infinitivo: {parlare} → {parli}, {leggere} → {legga}, {finire} → {finisca}.',
      ),
    },
    {
      n: '4',
      text: T(
        'Os irregulares do congiuntivo são {sia}, {abbia}, {faccia}, {vada}, {dia} e {sappia}.',
      ),
    },
    {
      n: '5',
      text: T(
        '{So che} fica no indicativo e {penso che} vai no congiuntivo: {so che è qui} contra {penso che sia qui}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O que muda com {che}'),
      text: T(
        'A diferença entre {so che lui è qui} e {so che lui sia qui} é o quanto o falante assume como verdade. No primeiro, {è} é afirmação; no segundo, {sia} é o que se pensa. A estrutura é a mesma, o verbo é que carrega o valor.',
      ),
    },
    {
      label: T('{Sia}, e não {è}'),
      text: T(
        '{Sia santificato il tuo nome} é congiuntivo de desejo. Se viesse {è santificato}, a frase seria uma constatação, e o pedido do Pai-Nosso viraria notícia. O mesmo argumento vale para {venga il tuo regno}.',
      ),
    },
  ],
  examples: [
    { text: 'Non credo che sia qui.', gloss: T('Não acredito que esteja aqui.') },
    { text: 'Spero che Dio sia buono.', gloss: T('Espero que Deus seja bom.') },
    { text: 'Voglio che tu vada.', gloss: T('Quero que você vá.') },
    { text: 'Ti prego di venire.', gloss: T('Peço que você venha.') },
    { text: 'So che lui è qui.', gloss: T('Sei que ele está aqui.') },
    { text: 'So che lui sia qui.', gloss: T('Sei que ele deveria estar aqui.') },
    { text: 'Sia la tua volontà.', gloss: T('Seja a tua vontade.') },
    { text: 'Dio ci ama.', gloss: T('Deus nos ama.') },
  ],
  tables: [
    {
      caption: T('Presente del congiuntivo'),
      head: ['Persona', '-are (parlare)', '-ere (leggere)', '-ire (finire)', 'irregolari'],
      rows: [
        ['io', 'parli', 'legga', 'finisca', 'sia'],
        ['tu', 'parli', 'legga', 'finisci', 'abbia'],
        ['lui/lei', 'parli', 'legga', 'finisca', 'vada, dia'],
        ['noi', 'parliamo', 'leggiamo', 'finiamo', '—'],
        ['voi', 'parliate', 'leggiate', 'finiate', '—'],
        ['loro', 'parlino', 'leggano', 'finiscano', '—'],
      ],
    },
    {
      caption: T('O que provoca o congiuntivo'),
      head: ['Frase', 'Verbo', 'Modo'],
      rows: [
        ['sono contento che tu vada', 'vada', 'congiuntivo'],
        ['non credo che sia qui', 'sia', 'congiuntivo'],
        ['affinché venga', 'venga', 'congiuntivo'],
        ['ti prego di venire', 'venire', 'infinitivo'],
        ['so che è qui', 'è', 'indicativo'],
      ],
    },
  ],
};

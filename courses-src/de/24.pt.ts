import { C, T, V } from '../shared.mts';

export default {
  id: 24,
  title: T('O passado Perfekt'),
  subtitle: T('haben e ist mais o particípio, e a posição das palavras'),
  section: T('Os verbos'),
  body: C(`## A fórmula

O Perfekt é a única forma de passado que o alemão constrói de fora para dentro: primeiro o auxiliar (*haben* ou *ist*) na segunda posição, o particípio na última, e o resto no meio. *Ich habe den ganzen Tag gearbeitet*. Troque o auxiliar, a frase toda muda de sentido sem que nada mais mude.

A escolha do auxiliar é semântica. **haben** marca um processo que o sujeito executa e do qual é responsável: *Wir haben das Buch übersetzt*. **ist** marca deslocação, mudança de estado ou algo que acontece a alguém: *Der Brief ist angekommen*. Não existe um critério puramente gramatical: o que decide é se o sujeito é agente ou paciente.

## O particípio

O particípio tem quatro padrões de formação, e todos são regulares:

- **fraco**, com a terminação *-t* e o *-en* do infinitivo: *machen → gemacht*, *lernen → gelernt*, *suchen → gesucht*;
- **forte**, quando o verbo tem alternância vocálica: *sprechen → gesprochen*, *lesen → gelesen*, *nehmen → genommen*;
- **misto**, com terminação *-en* depois de um adjetivo curto: *stark gemalt*, *hell gebrannt*;
- **sem particípio**, quando o verbo é inseparável ou termina em *-ieren*: *verstehen → verstanden*, *studieren → studiert*, *passieren → passiert*.

Verbos separáveis recuperam o prefixo: *anrufen → angerufen*, *aufstehen → aufgestanden*. O *ge-* entra entre o radical e a terminação, e a vogal do prefixo é harmonizada quando possível: *sprechen → gesprochen*, *lesen → gelesen*.

## O que a posição faz

O Perfekt é uma forma de segunda posição, como o presente. O auxiliar herda o lugar do verbo conjugado e o particípio vai para o fim, depois de qualquer elemento em posição final: *Ich habe es gestern nicht geschafft*. Se houver uma segunda parte da oração separada por vírgula, o auxiliar volta para o fim dessa parte: *Er ist ins Haus gegangen, hat aber niemanden gesehen*.

E a posição revela o tempo. Compare *Ich habe das Buch gelesen* (ação encerrada, resultado visível agora) com *Ich lese das Buch* (ação em curso). O Tempo verbal é o tempo da sintaxe.

## O essencial

O Perfekt não é um passado distante: é um passado **encerrado** visto do presente. O auxiliar diz se o sujeito agiu ou foi atingido; o particípio fecha a oração; o resultado continua válido agora.`),
  vocab: [
    V('haben', 'haben', 'auxiliar do Perfekt com ação'),
    V('ist', 'sein', 'auxiliar do Perfekt com deslocação ou estado'),
    V('gelesen', 'lesen', 'lido (particípio forte)'),
    V('gesprochen', 'sprechen', 'falado (particípio forte)'),
    V('gemacht', 'machen', 'feito (particípio fraco em -t)'),
    V('verstanden', 'verstehen', 'compreendido (inseparável, sem ge-)'),
    V('angerufen', 'anrufen', 'telefonado (prefixo recuperada)'),
    V('aufgestanden', 'aufstehen', 'levantado (separável com ist)'),
    V('stark gemalt', 'malen', 'pintado fortemente (particípio misto)'),
    V('übersetzt', 'übersetzen', 'traduzido (inseparável, sem ge-)'),
    V('Ich habe den ganzen Tag gearbeitet.', 'arbeiten', 'Trabalhei o dia inteiro.'),
    V('Der Brief ist angekommen.', 'ankommen', 'A carta chegou (deslocação).'),
    V('Was ich euch geboten habe', 'bieten', 'o que vos he mandado (Mateus 28:20)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Der Brief ___ angekommen}, qual auxiliar entra?'),
    options: [
      T('ist, porque o sujeito é paciente da ação'),
      T('hat, porque o particípio termina em -en'),
      T('wird, porque o verbo é fraco'),
      T('bleibt, porque é um movimento curto'),
    ],
    answer: 0,
    hint: T('Regra §2: quem não age leva ist.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Particípio de {sprechen}: ___'),
      answer: 'gesprochen',
      hint: T('O particípio forte harmoniza a vogal: sp → gespro-.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase está bem formada?'),
      options: [
        T('Ich habe den Brief bekommen.'),
        T('Ich habe den Brief gebekommen.'),
        T('Ich habe der Brief bekommen.'),
        T('Ich bin den Brief bekommen.'),
      ],
      answer: 0,
      hint: T('Regra §3: bekommen é inseparável, logo não há ge-.'),
    },
    {
      kind: 'fill',
      prompt: T('Complete a posição final: Ich habe das Buch gestern ___ (ler).'),
      answer: 'gelesen',
      hint: T('O particípio fecha a oração, depois dos complementos.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao seu particípio'),
      pairs: [
        { a: T('machen'), b: T('gemacht') },
        { a: T('verstehen'), b: T('verstanden') },
        { a: T('anrufen'), b: T('angerufen') },
        { a: T('studieren'), b: T('studiert') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O Perfekt tem duas peças e uma ordem: auxiliar na segunda posição, particípio no fim. Ich habe das Buch gestern nicht gelesen.',
      ),
    },
    {
      n: '2',
      text: T(
        'haben quando o sujeito executa a ação, ist quando a ação o o estado acontece a ele: Wir haben gearbeitet contra Er ist gestorben.',
      ),
    },
    {
      n: '3',
      text: T(
        'O particípio dos verbos inseparáveis não recebe ge-: verstehen → verstanden, übersetzen → übersetzt, gefallen → gefallen.',
      ),
    },
    {
      n: '4',
      text: T(
        'O particípio dos modais é o próprio infinitivo e ocupa a última posição: Ich habe kommen müssen, nicht *gekommen müssen*.',
      ),
    },
    {
      n: '5',
      text: T(
        'Com outro auxiliar no fim da oração, o Perfekt dobra a cláusula e repete o auxiliar: Ich habe ihn gesehen, und er hat mich erkannt.',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o Perfekt é a voz da escrita'),
      text: T(
        'A história do Perfekt é a história de uma palavra que já foi fraca. No Alto Germânico Antigo, *haben* ainda era o único auxiliar; o *ist* do Perfekt aparece por volta do século IX. Na fala oral do sul da Alemanha, o Perfekt praticamente desapareceu: lá se diz *ich habe gelesen* e *ich bin gelesen*, com o participio à solta. A forma escrita, que a escola fixou, é a forma literária — e é por isso que uma história escrita em alemão moderno soa imediatamente a texto de estudo, não a conversa.',
      ),
    },
    {
      label: T('Leitura em Lutero'),
      text: T(
        'Nas páginas de Lutero, o Perfekt aparece sempre que o narrador volta do narrado para o ouvinte: *und lehret sie halten alles, was ich euch geboten habe* (Mateus 28:20), *und ich habe euch gesagt* (João 24:25). O *Präteritum* empurra o ouvinte para dentro da cena; o *Perfekt*, com o seu auxiliar na segunda posição, puxa-o de volta para aí no *agora* da narração. É um recurso de teólogo, não de cronista.',
      ),
    },
  ],
  examples: [
    {
      text: 'Ich habe den ganzen Tag gearbeitet.',
      gloss: T('Trabalhei o dia inteiro (auxiliar em 2.ª posição).'),
    },
    {
      text: 'Wir haben das Buch nicht übersetzt.',
      gloss: T('Não traduzimos o livro (inseparável sem ge-).'),
    },
    { text: 'Der Brief ist angekommen.', gloss: T('A carta chegou (ist: deslocação).') },
    {
      text: 'Er ist ins Haus gegangen, hat aber niemanden gesehen.',
      gloss: T('Entrou em casa, mas não viu ninguém (auxiliar repetido).'),
    },
    {
      text: 'Ich habe es gestern nicht geschafft.',
      gloss: T('Não consegui ontem (particípio no fim).'),
    },
    {
      text: 'Hat sie das Buch schon gelesen?',
      gloss: T('Ela já leu o livro? (pergunta com o auxiliar em 1.ª).'),
    },
    { text: 'Ich habe kommen müssen.', gloss: T('Tive de vir (duplo infinitivo).') },
    {
      text: 'Und lehret sie halten alles, was ich euch geboten habe.',
      gloss: T('E ensinai-lhes a observar tudo o que vos mandei (Mateus 28:20).'),
    },
    {
      text: 'Wann hast du das Buch bekommen?',
      gloss: T('Quando recebeste o livro? (inseparável sem ge-).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Quatro padrões de formação do particípio'),
      head: [T('Padrão'), T('Fraco'), T('Forte'), T('Misto'), T('Sem particípio')],
      rows: [
        [
          'verbo simples',
          'machen → gemacht',
          'sprechen → gesprochen',
          'stark → stark gemalt',
          'verstehen → verstanden',
        ],
        ['verbo com -ieren', '—', '—', '—', 'studieren → studiert'],
        ['separável', 'suchen → gesucht', 'anrufen → angerufen', '—', 'passieren → passiert'],
        ['inseparável be-, ge-, ver-', 'besuchen → besucht', '—', '—', 'bekommen → bekommen'],
        ['regra', 'ge- + radical + -t', 'ge- + radical + -en', 'ge- + radical + -en', 'sem ge-'],
      ],
    },
    {
      caption: T('Tabela 2 — Ordem das palavras no Perfekt'),
      head: [T('Posição'), T('O que ocupa'), T('Exemplo')],
      rows: [
        ['1.ª', 'sujeito, elemento de tempo ou negação', 'Gestern habe ich lange geschlafen.'],
        ['2.ª', 'verbo conjugado (auxiliar do Perfekt)', 'Ich habe lange geschlafen.'],
        ['final', 'particípio + complementos', 'Ich habe lange geschlafen.'],
        ['meio', 'sujeito indireto, complementos', 'Ich habe das Buch nicht fertig gelesen.'],
        ['2.ª parte', 'novo auxiliar após a vírgula', 'Er ging fort, hat aber nichts gesagt.'],
      ],
    },
  ],
};

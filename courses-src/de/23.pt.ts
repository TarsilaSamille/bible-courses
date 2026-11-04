import { C, T, V } from '../shared.mts';

export default {
  id: 23,
  title: T('Os verbos irregulares'),
  subtitle: T('vogal alternante, {ist} e {hat} e o grupo do {Präteritum}'),
  section: T('Os verbos'),
  body: C(`## A Alternância vocálica

A maioria dos verbos alemães forma o passado somando o radical de perfectivo ao imperfectivo, sem alterar a vogal: *spielen – spielte – gespielt*, *suchen – suchte – gesucht*. Os irregulares fazem outra coisa: trocam a vogal do radical. *sprechen – sprach – gesprochen*, *lesen – las – gelesen*, *geben – gab – gegeben*. Essa troca chamamos *Ablaut*, e é a marca mais antiga da língua, anterior até à formação do Protogermânico.

A regra nua do Perfekt é a seguinte: um verbo leva **haben** quando o sujeito age e **ist** quando o sujeito está em movimento ou muda de estado. *Ich habe das Buch gelesen* (ação), *Das Kind ist zur Schule gegangen* (mudança), *Er ist gestorben* (estado). Os verbos que pedem **ist** formam um grupo fechado e pequeno.

## Os quatro verbos que não seguem o modelo

Quatro verbos formam um caso à parte, porque não se conjugam nem como fortes nem como fracos: **sein**, **haben**, **werden** e **wissen**. *sein* é o único verbo impessoal do grupo, o que explica o uso da terceira pessoa sem sujeito explícito: *Es ist kalt*, *Es ist heute Sonntag*. E é por isso que o-course do indicativo de *sein* é irregular: *ich bin, du bist, er ist, wir sind, ihr seid, sie sind*.

| Infinitivo | Präteritum | Perfekt | Auxiliar |
|---|---|---|---|
| sein | war | ist gewesen | ist |
| haben | hatte | hat gehabt | hat |
| werden | wurde | ist geworden | ist |
| wissen | wusste | hat gewusst | hat |
| sprechen | sprach | hat gesprochen | hat |
| lesen | las | hat gelesen | hat |
| sehen | sah | hat gesehen | hat |
| nehmen | nahm | hat genommen | hat |
| geben | gab | hat gegeben | hat |
| essen | aß | hat gegessen | hat |
| trinken | trank | hat getrunken | hat |
| schlafen | schlief | hat geschlafen | hat |
| helfen | half | hat geholfen | hat |
| laufen | lief | ist gelaufen | ist |
| fahren | fuhr | ist gefahren | ist |

## O bloco do Präteritum

Os verbos **fortes** formaram o passado com um *Ablaut* e esse grupo, formado por alguns dos verbos mais frequentes da língua, fixou a forma em **Präteritum** como passé narrativo: *ich sagte, er kam, wir gingen*. Em vez disso, os verbos fracos formaram o passado com o sufixo *-te* e quase o perderam: hoje se diz *ich sagte* e não *ich sagte*. Antigo, médio e alto-germânico: no presente a diferença é mínima entre forte e fraco; o que separa os grupos é o passado.

Aos fortes contam-se ainda os verbos com *Umlaut* no passado, sem *Ablaut* completo: *halten – hielt – gehalten*, *bestellen – bestellte – bestellt*, *zählen – zählte – gezählt*. A vogal longa do presente salta para *ie*, e o *Perfekt* volta ao *ie* do presente: *hält – hielt – gehalten*.

## O essencial

O que separa um verbo do outro está no passado, não no presente. Guarde três colunas por vez — presente, Präteritum, Perfekt — e a irregularidade deixa de ser uma lista para virar um esquema.`),
  vocab: [
    V('sprechen', 'sprechen', 'falar (sprach, hat gesprochen)'),
    V('lesen', 'lesen', 'ler (las, hat gelesen)'),
    V('sehen', 'sehen', 'ver (sah, hat gesehen)'),
    V('geben', 'geben', 'dar (gab, hat gegeben)'),
    V('nehmen', 'nehmen', 'pegar, tomar (nahm, hat genommen)'),
    V('essen', 'essen', 'comer (aß, hat gegessen)'),
    V('trinken', 'trinken', 'beber (trank, hat getrunken)'),
    V('sein', 'sein', 'ser (war, ist gewesen)'),
    V('haben', 'haben', 'ter (hatte, hat gehabt)'),
    V('werden', 'werden', 'tornar-se, ficar (wurde, ist geworden)'),
    V('wissen', 'wissen', 'saber (wusste, hat gewusst)'),
    V('gehen', 'gehen', 'ir (ging, ist gegangen)'),
    V('laufen', 'laufen', 'correr (lief, ist gelaufen)'),
    V('halten', 'halten', 'segurar, manter (hielt, hat gehalten)'),
    V('ist geworden', 'werden', 'tornou-se (auxiliar ist)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o auxiliar do Perfekt em {Das Kind ist gestorben}?'),
    options: [
      T('ist, porque o verbo indica estado'),
      T('hat, porque é um verbo forte'),
      T('wird, porque é um estado novo'),
      T('bleibt, porque o sujeito permanece'),
    ],
    answer: 0,
    hint: T('Regra §3: verbs de estado levam ist.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Präteritum de {sprechen} na 1.ª pessoa: ich ___'),
      answer: 'sprach',
      hint: T('Forte: o -ie- do presente vira -a-.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual das frases usa corretamente o forte {nehmen}?'),
      options: [
        T('Er nahm den Schlüssel und ging.'),
        T('Er namete den Schlüssel und ging.'),
        T('Er nimmet den Schlüssel und ging.'),
        T('Er nehmte den Schlüssel und ging.'),
      ],
      answer: 0,
      hint: T('Regra §1 e §2: o forte nunca recebe -te.'),
    },
    {
      kind: 'fill',
      prompt: T('Traduza {es begab sich} (Lucas 2:8).'),
      answer: 'it came to pass',
      hint: T('Präteritum de sich begeben, a forma fixa das narrativas de Lutero.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à forma do Perfekt'),
      pairs: [
        { a: T('gehen'), b: T('ist gegangen') },
        { a: T('lesen'), b: T('hat gelesen') },
        { a: T('werden'), b: T('ist geworden') },
        { a: T('verstehen'), b: T('hat verstanden') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Fortes trocam a vogal do radical no passado: sprechen – sprach – gesprochen, lesen – las – gelesen, trinken – trank – getrunken.',
      ),
    },
    {
      n: '2',
      text: T(
        'A terminação -te do Präteritum pertence aos verbos fracos: ich sagte, wir suchten. Nos fortes ele nunca aparece: ich sprach, wir sprachen.',
      ),
    },
    {
      n: '3',
      text: T(
        'No Perfekt, apenas verbos de movimento, mudança de estado e os quatro casos à parte usam ist; todo o resto leva hat.',
      ),
    },
    {
      n: '4',
      text: T(
        'sein, haben, werden e wissen não seguem nenhum modelo: conjugate-os como frases inteiras, nunca por analogia.',
      ),
    },
    {
      n: '5',
      text: T(
        'Depois de verbos com Umlaut no passado o Perfekt volta ao ie: halten – hielt – hat gehalten, zählen – zählte – hat gezählt.',
      ),
    },
  ],
  notes: [
    {
      label: T('Dois terços dos irregulares são heranças'),
      text: T(
        'Os fortes alemães são quase todos de origem saxônica ou frâncica, e o padrão se fixou em uma área dialectal por volta do século VI. Em dialetos de ensino do sul — bávaro, suíço, austríaco — o *Ablaut* foi abandonado, e você ouve *ich hab gelesen* no lugar de *ich habe gelesen*. Luter escreveu numa forma que soa arcaica e elevada justamente para criar distância em relação a esse cambio germânico comum.',
      ),
    },
    {
      label: T('Leitura em Lutero'),
      text: T(
        'A construção *und es begab sich* do relato da Natividade, e todo o pretérito das narrativas do Novo Testamento, corre exclusivamente sobre verbos fortes: *es begab sich, daß ein Knecht des Herrn aus dem Hause des Herzoges Absalom zog* (Lucas 2:8). O versículo é longo porque o *Präteritum* — aquilo que se contou uma vez — permite que uma ação pontual ocupe o lugar do presente narrativo.',
      ),
    },
  ],
  examples: [
    { text: 'Ich habe das Buch gelesen.', gloss: T('Eu li o livro (Perfekt com haben).') },
    { text: 'Es ist heute Sonntag.', gloss: T('Hoje é domingo (sein sem sujeito).') },
    { text: 'Wir sind nach Hause gegangen.', gloss: T('Fomos para casa (movimento: ist).') },
    { text: 'Der Lehrer sprach lange.', gloss: T('O professor falou muito (Präteritum forte).') },
    { text: 'Sie hat das Brot gegessen.', gloss: T('Ela comeu o pão (Ablaut a – aß – e).') },
    { text: 'Er hat den Brief genommen.', gloss: T('Ele pegou a carta (nehmen: -ahm-, -omm-).') },
    { text: 'Ich habe es nicht gewusst.', gloss: T('Eu não sabia (wissen: fraco no passado).') },
    {
      text: 'Der Zug ist nach Berlin gefahren.',
      gloss: T('O comboio foi para Berlim (ist + gefahren).'),
    },
    {
      text: 'Es begab sich zu der Zeit, daß ein Knecht des Herrn ging.',
      gloss: T('Sucedeu nesse tempo que um servo do Senhor foi (Präteritum forte, Lucas 2:8).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Fortes e fracos: {spielen} contra {sprechen}'),
      head: [T('Tipo'), T('Presente'), T('Präteritum'), T('Particípio')],
      rows: [
        ['fraco (-te)', 'spielt', 'spielte', 'gespielt'],
        ['fraco (-te)', 'sucht', 'suchte', 'gesucht'],
        ['forte (Ablaut)', 'spricht', 'sprach', 'gesprochen'],
        ['forte (Ablaut)', 'gibt', 'gab', 'gegeben'],
        ['forte (Ablaut)', 'isst', 'aß', 'gegessen'],
        ['forte (Ablaut)', 'nimmt', 'nahm', 'genommen'],
        ['forte (Ablaut)', 'schläft', 'schlief', 'geschlafen'],
        ['forte (Ablaut)', 'hilft', 'half', 'geholfen'],
        ['forte (Ablaut)', 'trifft', 'traf', 'getroffen'],
        ['forte (Ablaut)', 'isst', 'aß', 'gegessen'],
      ],
    },
    {
      caption: T('Tabela 2 — {haben} ou {ist} no Perfekt?'),
      head: [T('Pergunta'), T('Auxiliar'), T('Exemplo')],
      rows: [
        ['ação do sujeito', 'hat', 'Er hat das Buch gelesen.'],
        ['movimento', 'ist', 'Wir sind nach Hause gegangen.'],
        ['mudança de estado', 'ist', 'Das Wetter ist kalt geworden.'],
        ['processo sem agente', 'ist', 'Es ist lange her.'],
        ['verbo de estado', 'ist', 'Er ist gestorben. / geblieben.'],
        ['verbo de sentido', 'hat', 'Ich habe ihn verstanden.'],
      ],
    },
  ],
};

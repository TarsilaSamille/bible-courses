import { C, T, V } from '../shared.mts';

export default {
  id: 10,
  title: T('Os advérbios'),
  subtitle: T('{-ment}, {très}, {beaucoup} e o lugar de cada um'),
  section: T('Os adjetivos e os adverbios'),
  body: C(`## Um advérbio nunca concorda

O advérbio é a palavra que não olha para o substantivo. Ele é invariável, não tem género nem número, e por isso pode modificar um verbo, um adjetivo, outro advérbio ou uma oração inteira: {Il parle clairement}, {une maison très grande}, {Il travaille vraiment trop}, {Elle est_{{parti}} rapidement}.

A esmagadora maioria se forma do **feminino do adjetivo + {-ment}**: {claire → clairement}, {rapide → rapidement}, {heureuse → heureusement}, {douce → doucement}, {vraie → vraiment}, {folle → follement}. Repare que se parte da forma feminina, não da masculina: {heureuse}, não {heureux}.

Duas famílias transformam o final: os adjetivos em *-ant* dão *-amment* ({constant → constamment}, {habitant → habituellement}), e os em *-ent* dão *-emment* ({patient → patiemment}, {sage → sagement}).

E há um punhado que não vem de nenhum adjetivo: {bien}, {mal}, {vite}, {tôt}, {tard}, {ensemble}, {debout}, {souvent}, {peut-être}, {ici}, {partout}. Esses são os mais frequentes, e por isso mesmo os que você vai usar primeiro.

## Intensificar: {très} sim, com verbos não

A regra curta: **{très} nunca intensifica verbo**. Ele vai antes de adjetivo ({très grand}) e de advérbio ({très vite}), e só isso.

| Intensificador | Com adjetivo | Com verbo | Com substantivo |
|---|---|---|---|
| {très} | {très grand} | — (impossível) | — (impossível) |
| {trop} | {trop grand} | {trop travailler} | {trop de travail} |
| {assez} | {assez grand} | {assez travailler} | {assez de temps} |
| {beaucoup} | {beaucoup?} | {beaucoup travailler} | {beaucoup de livres} |
| {peu} | {peu?} | {peu travailler} | {peu de temps} |

Perceba a coluna do meio: {beaucoup}, {trop}, {assez} e {peu} entram diretamente antes do verbo, sem {de}. E {trop} tem um truque: com {pas}, {trop} perde o sentido negativo e significa «nem»: {Ce n'est pas trop tard} = «Não é tarde demais», literalmente «não é muito tarde».

Perto de {beaucoup}, os quantificadores recebem a preposição {de}: {beaucoup de gens}, {bien des gens}, {trop de monde}.

## Onde o advérbio se coloca

Na frase simples, o advérbio curto vai **depois do verbo conjugado e antes do complemento**: {Il parle bien français}, {Elle travaille beaucoup}, {Nous sommes arrivés tard}. Com verbo auxiliar, o advérbio separa o auxiliar do principal: {Il a beaucoup travaillé}, {Nous avons déjà mangé}, {Elle est déjà partie}.

O advérbio longo, ao contrário, tende a ir para o fim: {Il a parlé très clairement à ses élèves}, {Elle habite maintenant à Genève}.

E cuidado com a negação: em francês ela envolve o verbo, e o advérbio fica fora dela. {Je ne comprends pas} — nunca {Je ne pas comprends}. Com auxiliar: {Je n'ai pas compris}, {Il ne parle pas bien français}.

## Advérbios que também são adjetivos

Alguns vocábulos vestem a mesma roupa nos dois papéis:

- {bien} — advérbio ({il parle bien}) e adjetivo ({c'est bien})
- {mal} — advérbio ({il dort mal}) e adjetivo ({un mauvais, c'est mal})
- {grand} — advérbio ({il parle grand}) e adjetivo ({un grand homme})
- {direct} — {parlez-moi direct} e {un train direct}
- {tout} — advérbio invariável ({il mange tout}) e adjetivo concordante ({toute la ville})

Em {tout}, a regra é que a concordância aparece **somente** quando há um substantivo determinado à frente: {tout le monde}, {tous les jours}, {toute la ville}. Sem substantivo, é invariável: {Tout est bon} «tudo é bom».

## Leitura — Louis Segond

{Vous serez mes disciples, si vous faites toutes les choses que je vous ai enseignées} (Mt 23:28) traz {toutes}, {toutes les choses} com determinantes, logo concordado. {Le Père vous aime et vous salue} (1Co 16:23) mostra {vous} como pronome, tratado em capítulo próprio. {Je vous donne le repos, et je vous rafraîchirai} apoia-se numa frase verbal; {Gardez donc vos yeux tournés} (Lc 12:20) põe o advérbio curto {donc} entre verbo e objeto, que é o seu lugar fixo. O lado negativo da questão fica para o capítulo do presente.

## O essencial

O advérbio é invariável e se forma quase sempre do feminino do adjetivo mais *-ment*. *{Très} intensifica adjetivo e advérbio, nunca verbo; diante de substantivo, {beaucoup}, {trop}, {peu} e {assez} exigem {de}.`),
  vocab: [
    V('clairement', 'clair', 'claramente; de claire + -ment'),
    V('rapidement', 'rapide', 'rapidamente; de rapide'),
    V('doucement', 'doux', 'suavemente; de douce + -ment'),
    V('patiemment', 'patient', 'pacientemente; -ent → -emment'),
    V('constamment', 'constant', 'constantemente; -ant → -amment'),
    V('vraiment', 'vrai', 'realmente; forma própria'),
    V('très', 'très', 'muito; só com adjetivo/advérbio'),
    V('beaucoup', 'beaucoup', 'muito; + verbo, ou + de + subst.'),
    V('trop', 'trop', 'demaisado; com {pas} = nem'),
    V('assez', 'assez', 'o bastante; + de + subst.'),
    V('peu', 'peu', 'pouco; {un peu} = um pouco'),
    V('bien', 'bien', 'bem; advérbio e adjetivo'),
    V('vite', 'vite', 'rapidamente; sem derivada'),
    V('tout', 'tout', 'tudo; invariável sem substantivo'),
    V('debout', 'debout', 'em pé; invariável (debout ou assise)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é a forma correta em «il travaille ___»?'),
    options: [T('{beaucoup}'), T('{beaucoup de}'), T('{très}'), T('{peu de}')],
    answer: 0,
    hint: T(
      'Regra §4: diante de verbo, o intensificador entra sozinho; o {de} só vem com substantivo.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Advérbio derivado de {rapide}: ___ment'),
      answer: 'rapid e',
      hint: T('Deriva do feminino {rapide}, não da forma final.'),
    },
    {
      kind: 'choose',
      prompt: T('Em «{Je ne parle pas bien français}», onde fica o advérbio {bien}?'),
      options: [
        T('Fora da negação, entre o verbo e o complemento'),
        T('Dentro da negação, entre {ne} e {pas}'),
        T('No fim da frase, depois do complemento'),
        T('No início, antes do pronome {je}'),
      ],
      answer: 0,
      hint: T('Regra §5: a negação envolve o verbo; o advérbio fica fora dela.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o advérbio ao adjetivo de origem'),
      pairs: [
        { a: T('clairement'), b: T('{clair}') },
        { a: T('patiemment'), b: T('{patient}') },
        { a: T('vraiment'), b: T('{vrai}') },
        { a: T('vite'), b: T('{?} — sem adjetivo de origem') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T(
        'Em «{Il travaille beaucoup, et il mange peu}», quantos advérbios de quantidade aparecem?',
      ),
      options: [T('Nenhum'), T('Um'), T('Dois'), T('Três')],
      answer: 1,
      hint: T('{beaucoup} e {peu} formam um par; cada um conta uma vez.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Os advérbios de modo derivam do feminino do adjetivo + {-ment}: {claire → clairement}, {rapide → rapidement}, {heureuse → heureusement}. São invariáveis: nunca concordam em género nem número.',
      ),
    },
    {
      n: '2',
      text: T(
        'Adjetivos em *-ant* e *-ent* passam a *-amment* e *-emment*: {constant → constamment}, {patient → patiemment}. E há formas autônomas: {vrai → vraiment}, {seul → seulement}, {facile → facilement}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Vários advérbios não derivam de adjetivo nenhum: {bien}, {mal}, {vite}, {tôt}, {tard}, {ensemble}, {debout}, {souvent}, {peut-être}. São os mais frequentes da língua: convém aprendê-los como unidades.',
      ),
    },
    {
      n: '4',
      text: T(
        '{très} intensifica adjetivos e advérbios, nunca verbos: {très bon}, {très vite}. Diante de verbo, use {beaucoup}, {trop}, {assez} ou {peu} ({il travaille trop}); diante de substantivo, todos exigem {de}: {beaucoup de livres}, {trop de travail}.',
      ),
    },
    {
      n: '5',
      text: T(
        'O advérbio curto vai depois do verbo conjugado: {il parle bien français}. Com auxiliar, separa o auxiliar do principal: {il a beaucoup travaillé}, {elle est déjà partie}. A negação envolve o verbo: {je ne comprends pas} — nunca {je ne pas comprends}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O truque do {trop} com {pas}'),
      text: T(
        "Dentro de uma negação, {trop} muda de sentido: {ce n'est pas trop tard} significa «não é tarde demais», e não «não é muito tarde». É o mesmo mecanismo de {ne … pas} que será estudado no capítulo do presente, aplicado a um advérbio de grau.",
      ),
    },
    {
      label: T('Quando o advérbio concorda'),
      text: T(
        'A regra é estreita e vale a pena decorá-la: {tout} concorda apenas quando tem um substantivo determinado à frente — {tous les jours}, {toute la ville}, {tout le monde}. Sem substantivo, é invariável: {Tout est bon} «tudo é bom», {Elle a tout vendu} «vendeu tudo». {bien} e {mal} passam por uma prova semelhante: se substituem por {bon} e {mauvais} no mesmo ponto, são adjetivos.',
      ),
    },
  ],
  examples: [
    { text: 'elle parle clairement', gloss: T('ela fala claramente — de {claire}') },
    { text: 'il marche rapidement', gloss: T('ele caminha rapidamente — *-ment* invariável') },
    { text: 'il est patient', gloss: T('ele é paciente — de onde vem {patiemment}') },
    {
      text: 'il est constamment absent',
      gloss: T('ele está constantemente ausente — *-ant → -amment*'),
    },
    { text: "c'est vraiment vrai", gloss: T('é realmente verdade — forma autônoma') },
    { text: 'un très beau livre', gloss: T('um livro muito bonito — {très} + adjetivo') },
    { text: 'il travaille beaucoup', gloss: T('ele trabalha muito — {beaucoup} + verbo') },
    { text: 'beaucoup de livres', gloss: T('muitos livros — {beaucoup} + {de} + subst.') },
    { text: 'trop de travail', gloss: T('trabalho demais — {trop} + {de}') },
    { text: 'toute la ville', gloss: T('toda a cidade — {tout} concorda com subst.') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Formação dos advérbios em {-ment}'),
      head: [T('Origem'), T('Regra'), T('Resultado')],
      rows: [
        ['adjetivo comum', 'feminino + {-ment}', '{claire → clairement}'],
        ['adjetivo em -eux', 'feminino *-euse* + {-ment}', '{heureuse → heureusement}'],
        ['adjetivo em -ant', '{-ant} → {-amment}', '{constant → constamment}'],
        ['adjetivo em -ent', '{-ent} → {-emment}', '{patient → patiemment}'],
        ['forma própria', 'sem regra geral', '{vrai → vraiment}'],
        ['advérbios sem derivada', 'aprende-se como unidade', '{vite, tôt, tard, bien, mal}'],
      ],
    },
    {
      caption: T('Tabela 2 — Intensidade e quantidade'),
      head: [T('Palavra'), T('Com verbo'), T('Com substantivo'), T('Observação')],
      rows: [
        [
          '{très}',
          '— (não intensifica verbo)',
          '— (não usa com subst.)',
          '{très grand}, {très vite}',
        ],
        ['{trop}', '{trop travailler}', '{trop de travail}', 'com {pas}: «nem»'],
        ['{assez}', '{assez travailler}', '{assez de temps}', 'também {assez de} = alguns'],
        ['{beaucoup}', '{beaucoup travailler}', '{beaucoup de livres}', '{bien des gens}'],
        ['{peu}', '{peu travailler}', '{peu de temps}', '{un peu de sel}'],
        [
          '{tout}',
          '{tout manger}',
          'concorda se houver subst.',
          '{toute la ville} × {Tout est bon}',
        ],
      ],
    },
  ],
};

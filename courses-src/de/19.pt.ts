import { C, T, V } from '../shared.mts';

export default {
  id: 19,
  section: T('Os verbos'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    '{gehen}, {kommen}, {sein}, {haben}, {machen}, {sagen} e os verbos que decidem cada frase',
  ),
  body: C(`## Vinte verbos, e três que não têm forma fixa

Um verbo alemão regular tira a terminação e devolve uma nova: em {mache}, {machst}, {macht}, o tema {mach-} não se mexe. Os essenciais não têm tema fixo: {bin}, {bist}, {ist}, {war}, {werde}, {wird}, {habe}, {hast}, {hat}, {will}, {wollte} são formas que nenhuma regra produz, e é preciso aprendê-las soltas.

São poucos e pesam muito. {gehen}, {kommen}, {sein}, {haben}, {machen}, {sagen}, {geben}, {sehen}, {essen}, {trinken}, {schlafen}, {sterben}, {lesen}, {schreiben}, {sprechen}, {hören}, {nehmen}, {bringen}, {wissen}, {können}, {wollen}, {müssen}, {dürfen}, {sollen} cobrem quase tudo o que se diz num capítulo de Evangelho.

## O Präsens que troca de vogal no du e no er

No Präsens, os verbos fortes trocadores de vogal mudam a vogal só na 2.ª e na 3.ª pessoa do singular. É aí que {sehen} vira {siehst}/{sieht}, {lesen} vira {liest}/{liest}, {geben} vira {gibst}/{gibt}, {essen} vira {isst}/{isst}, {sprechen} vira {sprichst}/{spricht}.

As três famílias: {e} vira {ie} ou {i}, {a} vira {ä}, {au} vira {äu}. Não é uma anotação de estilo: é a regra que decide a pronúncia. Quem escreve {sehen} sem notar que o {e} virou {ie} fala {si-en} onde o alemão fala {zihst}.

O {wir} e o {sie/Sie} ficam no radical do infinitivo: {sehen} faz {sehen}, {fahren} faz {fahren}. E o Präsens de {können}, {wollen}, {müssen} e os outros modais não muda vogal nenhuma no singular; só na 1.ª e 3.ª do singular fica sem desinência: {ich kann}, {er kann}, e {du kannst}.

## Perfekt: quem leva {haben} e quem leva {sein}

O Perfekt é {haben} ou {sein} no presente mais um particípio: {ich habe gemacht}, {ich bin gegangen}. A escolha do auxiliar não é livre. Os verbos de movimento e de mudança de estado levam {sein}: {ich bin gegangen}, {sie ist gekommen}, {er ist gestorben}, {wir sind gefahren}. O resto leva {haben}: {ich habe gegessen}, {du hast gelesen}, {sie haben geschlafen}.

Se o verbo não se move e não muda de estado, é {haben}. Se há movimento físico ou o sujeito nasce, morre, permanece ou vira outra coisa, é {sein}. É tão simples quanto isso, e quase nenhum verbo escapa.

O pretérito do verbo {sein} não tem particípio; usa a forma {war}: {ich war}, {du warst}, {er war}, {wir waren}, {ihr wart}, {sie waren}. E o Präteritum de {haben} é {hatte}, {hattest}, {hatte}, {hatten}, {hattet}, {hatten}.

## Os seis modais

{können}, {wollen}, {müssen}, {dürfen}, {sollen} e {mögen} são os modais, e o que os marca é o original: na 1.ª e 3.ª pessoa do singular o presente não tem desinência. {ich kann}, {er kann}; {ich will}, {er will}; {ich muss}, {er muss}; {ich darf}, {er darf}; {ich soll}, {er soll}; {ich mag}, {er mag}. Só na 2.ª pessoa aparece o {st}: {du kannst}, {du willst}.

O modal governa o infinitivo, que não leva {zu}: {ich kann gehen}, {er will lesen}, {wir müssen essen}. E o {zu} entra no resto: {ich entscheide mich, zu gehen} tem {zu gehen}, {kanst du gehen} não tem {zu}.

## Na Bíblia

João 1:1 abre com {war}: {Im Anfang war das Wort}, no começo era o Verbo. {War} é o pretérito de {sein}, e é o que o alemão usa onde o grego usava {ἦν}. João 3:16 traz {hat Gott die Welt geliebt} na versão de Lutero: {geliebt} é o particípio de {lieben} e {hat} é o auxiliar.

Marcos 4:39 é um verbo imperativo inteiro: {Schweige und verstumme!}, cala e emudece. {Schweige} é o imperativo de {schweigen} e {verstumme} é o de {verstummen}, os dois sem desinência à vista. O grego é {Σιωπήσον καὶ γαλάσσου}, e a tradução de Lutero preserva o que a inglesa da KJV apaga: era um comando.`),
  vocab: [
    V('bin', 'sein', 'eu sou'),
    V('bist', 'sein', 'tu és'),
    V('war', 'sein', 'ele era / eu era'),
    V('werde', 'werden', 'eu vou / fico'),
    V('habe', 'haben', 'eu tenho'),
    V('hatte', 'haben', 'eu tinha'),
    V('gehe', 'gehen', 'eu vou'),
    V('komme', 'kommen', 'eu venho'),
    V('esse', 'essen', 'eu como'),
    V('isst', 'essen', 'tu comes / ele come'),
    V('sehe', 'sehen', 'eu vejo'),
    V('siehst', 'sehen', 'tu vês'),
    V('lese', 'lesen', 'eu leio'),
    V('liest', 'lesen', 'tu lês / ele lê'),
    V('gebe', 'geben', 'eu dou'),
    V('gibt', 'geben', 'ele dá'),
    V('kann', 'können', 'eu posso / ele pode'),
    V('will', 'wollen', 'eu quero / ele quer'),
    V('muss', 'müssen', 'eu devo / ele deve'),
    V('darf', 'dürfen', 'eu posso / ele pode (autorizado)'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        '{sein} e {haben} flexionam à mão: {ich bin}, {du bist}, {er ist}, {wir sind}, {ihr seid}, {sie sind}; {ich habe}, {du hast}, {er hat}, {wir haben}, {ihr habt}, {sie haben}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'No Präsens a vogal dos verbos fortes muda na 2.ª e 3.ª do singular: {e}→{ie/i} ({siehst}, {liest}, {gibst}, {isst}), {a}→{ä} ({fährst}, {trägst}, {schläfst}), {au}→{äu} ({läufst}).',
      ),
    },
    {
      n: '§3',
      text: T(
        'O Perfekt usa {sein} com verbos de movimento ou mudança de estado ({ich bin gegangen}, {er ist gestorben}), e {haben} com o restante ({ich habe gegessen}).',
      ),
    },
    {
      n: '§4',
      text: T(
        'Os modais não têm desinência na 1.ª e 3.ª do singular: {ich kann}, {er will}, {sie muss}, {es darf}. O infinitivo que governam não leva {zu}: {ich kann gehen}.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O imperativo de {du} sai da 2.ª pessoa sem a desinência: {geh!}, {komm!}, {sieh!}, {lies!}, {iss!}.',
      ),
    },
  ],
  notes: [
    {
      label: T('O Präteritum que o Perfekt substituiu'),
      text: T(
        '{War} e {hatte} são os únicos passados que o alemão usa onde o presente do Perfekt não funciona. Nos modais é o contrário: o Perfekt ({hätte gekonnt}) é raro e o Präteritum ({konnte}, {wollte}, {musste}, {durfte}, {sollte}, {mochte}) é o passado normal. {Ich konnte gehen} é comum; {ich habe gekonnt gehen} quase não aparece fora do colloquial.',
      ),
    },
    {
      label: T('O {ward} que João 3:16 não tem'),
      text: T(
        'A tradução de Lutero traz {ward} em vez de {wurde} na passagem do verbo {werden}: {ward Fleisch} é {wurde Fleisch}. A forma {ward} é o Präteritum antigo de {werden}, e desapareceu do alemão moderno, mas está na edição de 1545 e é o que o leitor encontra.',
      ),
    },
  ],
  examples: [
    { text: 'Im Anfang war das Wort.', gloss: T('{war}: pretérito de {sein}, Jo 1:1.') },
    { text: 'Das Wort ist Gott.', gloss: T('{ist}: presente de {sein}.') },
    { text: 'Ich habe gegessen.', gloss: T('Perfekt com {haben}: participes de {essen}.') },
    { text: 'Er ist gekommen.', gloss: T('Perfekt com {sein}: movimento.') },
    { text: 'Sie ist gestorben.', gloss: T('Perfekt com {sein}: mudança de estado.') },
    { text: 'Ich kann nicht kommen.', gloss: T('Modal {können} sem desinência de pessoa.') },
    { text: 'Wir müssen essen.', gloss: T('{müssen} governa o infinitivo sem {zu}.') },
    { text: 'Geh!', gloss: T('Imperativo de {gehen} sem a desinência.') },
    { text: 'Iss!', gloss: T('Imperativo de {essen} sem a vogal {e}.') },
    { text: 'Ich sehe den Mann.', gloss: T('Presente de {sehen}, radical sem mudança.') },
  ],
  tables: [
    {
      caption: T('Präsens dos essenciais'),
      head: [T('Pessoa'), T('sein'), T('haben'), T('gehen'), T('essen'), T('sehen')],
      rows: [
        ['ich', 'bin', 'habe', 'gehe', 'esse', 'sehe'],
        ['du', 'bist', 'hast', 'gehst', 'isst', 'siehst'],
        ['er/sie/es', 'ist', 'hat', 'geht', 'isst', 'sieht'],
        ['wir', 'sind', 'haben', 'gehen', 'essen', 'sehen'],
        ['ihr', 'seid', 'habt', 'geht', 'esst', 'seht'],
        ['sie/Sie', 'sind', 'haben', 'gehen', 'essen', 'sehen'],
      ],
    },
    {
      caption: T('Perfekt e o auxiliar de cada verbo'),
      head: [T('Verbo'), T('Ausiliar'), T('Perfekt'), T('Particípio')],
      rows: [
        ['gehen', 'sein', 'ist gegangen', 'gegangen'],
        ['kommen', 'sein', 'ist gekommen', 'gekommen'],
        ['sterben', 'sein', 'ist gestorben', 'gestorben'],
        ['bleiben', 'sein', 'ist geblieben', 'geblieben'],
        ['fahren', 'sein', 'ist gefahren', 'gefahren'],
        ['werden', 'sein', 'ist geworden', 'geworden'],
        ['essen', 'haben', 'hat gegessen', 'gegessen'],
        ['sehen', 'haben', 'hat gesehen', 'gesehen'],
        ['lesen', 'haben', 'hat gelesen', 'gelesen'],
        ['schreiben', 'haben', 'hat geschrieben', 'geschrieben'],
        ['geben', 'haben', 'hat gegeben', 'gegeben'],
        ['nehmen', 'haben', 'hat genommen', 'genommen'],
      ],
    },
    {
      caption: T('Os seis modais no presente'),
      head: [T('Modal'), T('ich'), T('du'), T('er'), T('wir'), T('Perfekt')],
      rows: [
        ['können', 'kann', 'kannst', 'kann', 'können', 'hat gekonnt'],
        ['wollen', 'will', 'willst', 'will', 'wollen', 'hat gewollt'],
        ['müssen', 'muss', 'musst', 'muss', 'müssen', 'hat gemusst'],
        ['dürfen', 'darf', 'darfst', 'darf', 'dürfen', 'hat gedurft'],
        ['sollen', 'soll', 'sollst', 'soll', 'sollen', 'hat gesollt'],
        ['mögen', 'mag', 'magst', 'mag', 'mögen', 'hat gemocht'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual auxiliar leva {sterben} no Perfekt?'),
    options: [T('{haben}'), T('{sein}'), T('{werden}'), T('{gehen}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o Präsens de {essen}: "Du ___" (3.ª do singular).'),
      answer: 'isst',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo ao auxiliar do Perfekt.'),
      pairs: [
        { a: T('{gehen}'), b: T('{sein}') },
        { a: T('{essen}'), b: T('{haben}') },
        { a: T('{kommen}'), b: T('{sein}') },
        { a: T('{lesen}'), b: T('{haben}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual é a forma correta do modal {können} na 1.ª pessoa?'),
      options: [T('{ich kanne}'), T('{ich kannst}'), T('{ich kann}'), T('{ich können}')],
      answer: 2,
    },
  ],
};

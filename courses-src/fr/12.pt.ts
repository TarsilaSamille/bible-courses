import { C, T, V } from '../shared.mts';

export default {
  id: 12,
  section: T('Os verbos'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    '{aller}, {venir}, {être}, {avoir}, {faire}, {dire} e os verbos irregulares que regem quase toda frase',
  ),
  body: C(`## Vinte verbos, e dois que não têm regra

Um verbo francês regular se conjuga por terminação: em {parle}, {parles}, {parle}, o tema {parl-} não se mexe e só muda o final. Os essenciais não têm tema fixo: {vais}, {viens}, {suis}, {ai}, {fais}, {dis} são seis formas que nenhuma regra produz, e é preciso aprendê-las soltas.

São poucos e pesam muito. {aller}, {venir}, {être}, {avoir}, {faire}, {dire}, {pouvoir}, {devoir}, {vouloir}, {savoir}, {voir}, {donner}, {prendre}, {manger}, {boire}, {dormir}, {mourir}, {naître}, {lire}, {écrire}, {parler}, {écouter}, {mettre}, {sortir}, {partir}, {arriver}, {rester} e {tomber} cobrem quase tudo o que se diz num capítulo de Evangelho.

## {Aller} + infinitivo e {venir de} + infinitivo: futuro e passado sem conjugar

O francês anuncia o futuro sem flexionar quase nada: é {aller} no presente mais um infinitivo. {Je vais manger}, {il va venir}, {nous allons partir}. A forma de {aller} guarda a pessoa ({vais}, {vas}, {va}, {allons}, {allez}, {vont}), e o infinitivo não muda nunca.

O mesmo truque no passado recente inverte a direção: {venir de} mais infinitivo. {Je viens de manger}, {il vient d’arriver}, {nous venons de partir}. É um passado que não tem relação com distância, e quem traduz por {je viens de manger} literal pensa em movimento, mas o sentido é "acabei de comer".

O pretérito composto dessas mesmas ideias usa {être} e {avoir} como auxiliares: {je suis allé} usa {être} porque {aller} é um dos 16 verbos de movimento, {j’ai mangé} usa {avoir}. Sem o auxiliar certo a frase fica correta de forma e errada de pessoa.

## As quatro mudanças de radical

O radical dos verbos irregulares muda em quatro famílias, e a família é o que separa quem muda de quem fica.

- **{e} vira {è}**: {mène}, {lève}, {achète}, {pèse} de {peser}.
- **{é} vira {è}**: {espère}, {préfère}, {répète}, {complète}.
- **{-eler} e {-eter} dobram a consoante**: {j’appelle}, {il jette}, {nous jetons}.
- **{y} vira {i}** em {-yer}: {j’envoie}, {je paie}, {j’essaie}.

No presente de indicativo só a 1.ª, 2.ª, 3.ª do singular e a 3.ª do plural mudam. O {nous} e o {vous} ficam com o radical do infinitivo: {nous menons}, {vous préférez}, {nous jetons}, {nous envoyons}. É no {nous} e no {vous} que o ouvido francês confirma qual é o radical.

## Os três que pedem infinitivo

{pouvoir}, {devoir} e {vouloir} governam o infinitivo e nunca uma forma conjugada: {je peux aller}, {tu dois lire}, {il veut partir}. Quem traduz do português esquece isso fácil: "eu posso que vou" não existe, o francês diz {je peux aller} e ponto.

{falloir} merece nota porque não tem pessoa: {il faut} é sempre terceira pessoa com {il}, e o que segue é o infinitivo. "Il faut que je parte" é uma oração inteira, e a parte conjugada, {parte}, está no subjuntivo.

## Na Bíblia

João 1:1 começa com {était}, o imperfeito de {être}: no começo era a Palavra. João 1:5 traz {brille}, o presente de {briller}, que é regular em {-er}, e {était} de novo, como algo que já estava lá. E João 1:14 traz {a été faite}, o passé composé de {être} com o particípio de {faire}, numa frase passiva em que o sujeito é {la Parole}.

João 3:16 traduz {a aimé}, o passé composé de {aimer}: Deus amou o mundo. O mesmo verbo em presente seria {aime}, e a diferença entre o que Deus é e o que Deus fez se perde quando o tempo se apaga.`),
  vocab: [
    V('vais', 'aller', 'eu vou'),
    V('viens', 'venir', 'eu venho'),
    V('suis', 'être', 'eu sou'),
    V('ai', 'avoir', 'eu tenho'),
    V('fais', 'faire', 'eu faço'),
    V('dis', 'dire', 'eu digo'),
    V('peux', 'pouvoir', 'eu posso'),
    V('dois', 'devoir', 'eu devo'),
    V('veux', 'vouloir', 'eu quero'),
    V('sais', 'savoir', 'eu sei'),
    V('vois', 'voir', 'eu vejo'),
    V('prends', 'prendre', 'eu tomo'),
    V('mange', 'manger', 'eu como'),
    V('bois', 'boire', 'eu bebo'),
    V('dors', 'dormir', 'eu durmo'),
    V('étais', 'être', 'eu era'),
    V('brille', 'briller', 'ele brilha'),
    V('est venue', 'venir', 'ela veio'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Dez presentes irregulares não têm regra: {vais}, {viens}, {suis}, {ai}, {fais}, {dis}, {peux}, {dois}, {veux} e {sais}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'O futuro próximo é {aller} no presente mais infinitivo: {je vais manger}, e o passé récent é {venir de} mais infinitivo: {je viens de manger}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'Só treze verbos usam {être} como auxiliar do passé composé: {aller}, {venir}, {arriver}, {partir}, {naître}, {mourir}, {rester}, {tomber}, {entrer}, {sortir}, {monter}, {descendre} e {passer}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'O radical muda no presente de indicativo por quatro famílias: e→è ({mène}), é→è ({espère}), -eler/-eter com consoante dobrada ({j’appelle}), y→i ({j’envoie}). {Nous} e {vous} ficam no infinitivo.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{pouvoir}, {devoir} e {vouloir} governam o infinitivo: {je peux aller}, {tu dois lire}, {il veut partir}, e nunca uma forma conjugada.',
      ),
    },
  ],
  notes: [
    {
      label: T('O auxiliar diz quem é quem'),
      text: T(
        'No passé composé, {être} com verbos de movimento ou de mudança de estado: {je suis allé}. {Avoir} com verbos de ação: {j’ai mangé}. Trocado, a frase continua gramatical e muda de pessoa: {je suis mangé} não diz quem comeu o quê, e {j’ai allé} não existe.',
      ),
    },
    {
      label: T('O passé recent não tem distância'),
      text: T(
        '{Je viens de manger} diz "acabei de comer", e não que eu vim comer. {Venir de} como construção amarra-se ao passado: no presente é "acabei", no imperfeito {je venais de manger} é "eu tinha acabado de comer". É um pretérito que a tradução por "vim" apaga.',
      ),
    },
  ],
  examples: [
    {
      text: 'Au commencement était la Parole.',
      gloss: T('{était}: imperfeito de {être}, o que já valia antes de tudo.'),
    },
    {
      text: 'la lumière brille dans les ténèbres',
      gloss: T('{brille}: presente, o que acontece em cena (Jo 1:5).'),
    },
    {
      text: 'la Parole a été faite chair',
      gloss: T(
        '{a été faite}: passé composé passivo de {faire}, com {être} como auxiliar (Jo 1:14).',
      ),
    },
    {
      text: 'Car Dieu a tant aimé le monde',
      gloss: T('{a aimé}: passé composé de {aimer} (Jo 3:16).'),
    },
    {
      text: 'Je vais manger.',
      gloss: T('{aller} no presente mais infinitivo {manger}: futuro próximo.'),
    },
    {
      text: 'Je viens de manger.',
      gloss: T('{venir de} mais infinitivo: passé récent, "acabei de comer".'),
    },
    { text: 'J’ai mangé du pain.', gloss: T('Passé composé com {avoir}: o particípio não muda.') },
    { text: 'Elle est venue.', gloss: T('Passé composé com {être}: {venue} concorda com {elle}.') },
    { text: 'Nous allons sortir.', gloss: T('Presente de {aller} com {nous}: {allons}.') },
    { text: 'Il faut partir.', gloss: T('{falloir} impessoal, sempre com {il} e infinitivo.') },
  ],
  tables: [
    {
      caption: T('Presente dos essenciais irregulares'),
      head: [T('Sujeito'), T('aller'), T('venir'), T('être'), T('avoir'), T('faire')],
      rows: [
        ['je', 'vais', 'viens', 'suis', 'ai', 'fais'],
        ['tu', 'vas', 'viens', 'es', 'as', 'fais'],
        ['il/elle', 'va', 'vient', 'est', 'a', 'fait'],
        ['nous', 'allons', 'venons', 'sommes', 'avons', 'faisons'],
        ['vous', 'allez', 'venez', 'êtes', 'avez', 'faites'],
        ['ils/elles', 'vont', 'viennent', 'sont', 'ont', 'font'],
      ],
    },
    {
      caption: T('Passé composé com être e avoir'),
      head: [T('Verbo'), T('Auxiliar'), T('Particípio'), T('Exemplo')],
      rows: [
        ['aller', 'être', 'allé', 'je suis allé'],
        ['venir', 'être', 'venu', 'elle est venue'],
        ['mourir', 'être', 'mort', 'il est mort'],
        ['naître', 'être', 'né', 'elle est née'],
        ['prendre', 'avoir', 'pris', 'j’ai pris'],
        ['faire', 'avoir', 'fait', 'j’ai fait'],
        ['dire', 'avoir', 'dit', 'j’ai dit'],
        ['voir', 'avoir', 'vu', 'j’ai vu'],
        ['manger', 'avoir', 'mangé', 'j’ai mangé'],
        ['boire', 'avoir', 'bu', 'j’ai bu'],
        ['dormir', 'avoir', 'dormi', 'j’ai dormi'],
        ['écrire', 'avoir', 'écrit', 'j’ai écrit'],
      ],
    },
    {
      caption: T('As quatro mudanças de radical'),
      head: [T('Verbo'), T('{je}'), T('{nous}'), T('Mudança')],
      rows: [
        ['mener', 'mène', 'menons', '{e} → {è}'],
        ['lever', 'lève', 'levons', '{e} → {è}'],
        ['acheter', 'achète', 'achetons', '{e} → {è}'],
        ['espérer', 'espère', 'espérons', '{é} → {è}'],
        ['préférer', 'préfère', 'préférons', '{é} → {è}'],
        ['appeler', 'appelle', 'appelons', '{l} → {ll}'],
        ['jeter', 'jette', 'jetons', '{t} → {tt}'],
        ['envoyer', 'envoie', 'envoyons', '{y} → {i}'],
        ['payer', 'paie', 'payons', '{y} → {i}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual verbo é preciso para formar o passé composé de {venir}?'),
    options: [T('{avoir}'), T('{être}'), T('{aller}'), T('{faire}')],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o futuro próximo: "Nous ___ partir" (aller + partir).'),
      answer: 'allons',
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao verbo da conjugação.'),
      pairs: [
        { a: T('{vais}'), b: T('{aller}') },
        { a: T('{viens}'), b: T('{venir}') },
        { a: T('{suis}'), b: T('{être}') },
        { a: T('{peux}'), b: T('{pouvoir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual forma substitui "je" no futuro próximo com {voir}?'),
      options: [T('{Je va voir}'), T('{Je vais voir}'), T('{Je voir}'), T('{Je aller voir}')],
      answer: 1,
    },
  ],
};

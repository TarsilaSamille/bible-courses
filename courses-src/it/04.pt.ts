import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('I verbi essenziali'),
  subtitle: T('{andare}, {venire}, {fare}, {dire} e os outros que com eles regem quase toda frase'),
  section: T('Il nome e il verbo'),
  body: C(`## Uma vintena de verbos, e quatro que não têm regra

Um verbo italiano regular se conjuga por sufixo: em {parlo}, {parli}, {parla}, o tema {parl-} fica firme e muda só a terminação. Os essenciais não têm tema firme. {vado}, {vengo}, {faccio} e {dico} são quatro formas que não se deduzem de nada, e o mesmo vale para {posso}, {devo}, {voglio}, {so} e {do}.

São poucos e pesam muito. {andare}, {venire}, {fare}, {dire}, {avere}, {essere}, {potere}, {dovere}, {volere}, {sapere}, {vedere}, {dare}, {prendere}, {mangiare}, {bere}, {dormire}, {morire}, {nascere}, {leggere}, {scrivere}, {parlare}, {ascoltare}, {vestire} e {guardare} cobrem quase tudo o que se diz num capítulo de Evangelho. O resto da língua se forma em cima deles.

Vale uma regra que decide sozinho a forma de talvez metade das frases: nos verbos terminados em {-are}, a primeira pessoa **perde o {-o} final**. {parlo}, {guardo}, {mango}, {ascolto}, {lavoro}. Nos terminados em {-ere} e {-ire}, o {-o} **fica**: {prendo}, {vivo}, {dormo}, {parto}. {Mangiare} segue o primeiro grupo ({mangio}) e {dormire} o segundo ({dormo}), e o italiano não avisa qual é qual.

## {Andare} e {venire}: as duas séries que se confundem

{andare} faz {vado}, {vai}, {va}, {andiamo}, {andate}, {vanno}. {venire} faz {vengo}, {vieni}, {viene}, {veniamo}, {venite}, {vengono}. São as duas séries mais irregulares depois de {essere} e {avere}, e a assimetria do {v} contra o {n} é a pista que resta: quem não decorou {vado} e {vengo} não tem como adivinhá-los.

O particípio separa tudo: {andato}, {venuto}, {arrivato}, {salito}, {partito}, {uscito}. No *passato prossimo* a forma é a mesma nos dois, {sono andato}, {sono venuto}, e por isso o contexto precisa dizer quem chegou e quem partiu. No grego, {ἦλθεν} e {ἦλθον} chegam perto, e é essa proximidade que a tradução precisa decidir.

{fare} e {dire} seguem a mesma lógica com um {-c} a mais: {faccio}, {fai}, {fa}, {facciamo}, {fanno}; {dico}, {dici}, {dice}, {diciamo}, {dicono}. {Diciamo} é de {dire} e {facciamo} é de {fare}, e os dois têm o mesmo final, o que faz deles o par mais confundido do capítulo.

## L’imperativo que troca de cara

O imperativo de {tu} é o infinito sem o final: {va}, {vieni}, {fa}, {di}, {guarda}, {prendi}, {dormi}, {mangia}, {bevi}, {leggi}. Com o {Lei} de cortesia a forma vem do subjuntivo, não do infinito: {vada}, {venga}, {faccia}, {dica}, {guardi}, {prenda}. É a diferença mais visível entre falar com um amigo e falar com um desconhecido, e aparece na primeira linha de qualquer texto.

A forma {di} leva apóstrofo: {di’} quando sozinha, {dimelo} quando prende um pronome ({di} + {melo}). Quem escreve {dimelo} sem o apóstrofo escreve errado por um caractere, e é o tipo de coisa que o leitor só percebe depois de tropeçar nela.

## {Potere}, {dovere}, {volere}: os três que pedem infinitivo

{potere}, {dovere} e {volere} governam o infinitivo, e não o nome: {posso andare}, {devo leggere}, {voglio capire}. {Volere} governa também o nome, {voglio il libro}, e a diferença é de sentido e não de forma: {voglio mangiare} é «quero comer» e {voglio la minestra} é «quero a sopa».

{so} é a única forma de {sapere} que perde uma letra: {so}, {sai}, {sa}, {sappiamo}, {sapete}, {sanno}. Só o {io} fica sem o {s}, e é por isso que {so} colide com {dire} no registro familiar: {non lo so}, eu não sei. Quem chega do português lê {so} como verbo dire e perde o sentido.

## Nella Bibbia

Giovanni 1:1 abre com {era}, imperfeito de {essere}, e o verbo é o mesmo que faz {Dio è luce} no versículo 5: {è} é o presente. Giovanni 1:5 traz {brilla}, presente de um verbo em {-are}, e {era} de novo como luz que já estava. Três verbos, três tempos, e {era} aparece duas vezes com valores diferentes: o que já era antes de tudo e o que estava em cena.

Mateus 5:9 traz {beati}, os bem-aventurados, e o verbo {essere} não flexiona: é um adjetivo substantivado, como em {beato} e {beata}. O mesmo {essere} que flexiona em {era} aparece aqui sem pessoa nem número, e é o que faz {beati} funcionar como frase e não como oração.`),
  vocab: [
    V('vado', 'andare', 'eu vou'),
    V('va', 'andare', 'ele vai; vai!'),
    V('vengo', 'venire', 'eu venho'),
    V('vieni', 'venire', 'vem!'),
    V('faccio', 'fare', 'eu faço'),
    V('fa', 'fare', 'ele faz; faz!'),
    V('dico', 'dire', 'eu digo'),
    V('di', 'dire', 'diz!'),
    V('posso', 'potere', 'eu posso'),
    V('devo', 'dovere', 'eu devo'),
    V('voglio', 'volere', 'eu quero'),
    V('so', 'sapere', 'eu sei'),
    V('mangio', 'mangiare', 'eu como'),
    V('prendo', 'prendere', 'eu tomo'),
    V('era', 'essere', 'ele era'),
    V('brilla', 'brillare', 'ele brilha'),
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Nos verbos em {-are} a primeira pessoa perde o {-o}: {parlo}, {mangio}, {ascolto}. Nos verbos em {-ere} e {-ire} o {-o} fica: {prendo}, {dormo}, {vivo}.',
      ),
    },
    {
      n: '2',
      text: T(
        '{vado}, {vengo}, {faccio}, {dico}, {posso}, {devo}, {voglio}, {so} e {do} não se derivam de nada e são o que há para decorar.',
      ),
    },
    {
      n: '3',
      text: T(
        'O imperativo de {tu} sai do infinito sem o final ({va}, {vieni}, {fa}, {di}), e o de {Lei} sai do subjuntivo ({vada}, {venga}, {faccia}, {dica}).',
      ),
    },
    {
      n: '4',
      text: T('{di} perde o {-i} e vira {di’}: {dimelo} é {di} + {melo}, com o apostrofo no meio.'),
    },
    {
      n: '5',
      text: T(
        '{potere}, {dovere} e {volere} governam o infinitivo: {posso andare}, {devo leggere}, {voglio capire}. {Volere} aceita também o nome.',
      ),
    },
  ],
  notes: [
    {
      label: T('O {so} que quer dizer duas coisas'),
      text: T(
        '{so} é o presente de {sapere}, «eu sei», e é também o presente de {dire} no registro coloquial: {so tutto}, eu sei de tudo. As duas formas são idênticas e o contexto decide, o mesmo que acontece com {fui} em português e com {fuit} na Vulgata.',
      ),
    },
    {
      label: T('O particípio que revela o verbo'),
      text: T(
        'O {passato prossimo} é {essere} ou {avere} mais o particípio, e o particípio revela qual verbo entrou: {sono andato}, {sono venuto}, {ho mangiato}, {ho bevuto}. Sem o particípio, o italiano não diz se o sujeito foi ou fez.',
      ),
    },
  ],
  examples: [
    {
      text: 'In principio era il Verbo.',
      gloss: T('{era} é o imperfeto de {essere}, e é o mesmo verbo de {è} no presente.'),
    },
    { text: 'Dio è luce.', gloss: T('{è} no presente: o que Deus é.') },
    {
      text: 'La luce brilla nelle tenebre.',
      gloss: T('{brilla}: presente de um verbo em {-are}, o mesmo grupo de {mangio} e {parlo}.'),
    },
    {
      text: 'Vado e vengo.',
      gloss: T('{vado} de {andare} e {vengo} de {venire}: as duas séries irregulares.'),
    },
    {
      text: 'Sono andato a Roma.',
      gloss: T('Participio {andato} com {essere} no {passato prossimo}.'),
    },
    { text: 'Ho mangiato il pane.', gloss: T('Participio {mangiato} com {avere}.') },
    { text: 'Non lo so.', gloss: T('{so} de {sapere}, e não de {dire}.') },
    { text: 'Posso venire domani.', gloss: T('{posso} governa o infinitivo {venire}.') },
    { text: 'Di’ questo a Pietro.', gloss: T('{di’} com apostrofo: o {di} do imperativo.') },
    {
      text: 'Venga con noi.',
      gloss: T('Imperativo de {Lei}: vem do subjuntivo, não do infinito.'),
    },
  ],
  tables: [
    {
      caption: T('Presente dos essenciais irregulares'),
      head: ['Pessoa', 'andare', 'venire', 'fare', 'dire', 'potere'],
      rows: [
        ['io', 'vado', 'vengo', 'faccio', 'dico', 'posso'],
        ['tu', 'vai', 'vieni', 'fai', 'dici', 'puoi'],
        ['lui/lei', 'va', 'viene', 'fa', 'dice', 'può'],
        ['noi', 'andiamo', 'veniamo', 'facciamo', 'diciamo', 'possiamo'],
        ['voi', 'andate', 'venite', 'fate', 'dite', 'potete'],
        ['loro', 'vanno', 'vengono', 'fanno', 'dicono', 'possono'],
      ],
    },
    {
      caption: T('Particípios que não seguem a terminação'),
      head: ['Verbo', 'Particípio', 'Frase'],
      rows: [
        ['andare', 'andato', 'sono andato'],
        ['venire', 'venuto', 'sono venuto'],
        ['fare', 'fatto', 'ho fatto'],
        ['dire', 'detto', 'ho detto'],
        ['bere', 'bevuto', 'ho bevuto'],
        ['morire', 'morto', 'è morto'],
        ['nascere', 'nato', 'è nato'],
        ['leggere', 'letto', 'ho letto'],
      ],
    },
    {
      caption: T('Imperativo: tu e Lei'),
      head: ['Verbo', 'tu', 'Lei'],
      rows: [
        ['andare', 'va', 'vada'],
        ['venire', 'vieni', 'venga'],
        ['fare', 'fa', 'faccia'],
        ['dire', 'di’', 'dica'],
        ['dormire', 'dormi', 'dorma'],
        ['mangiare', 'mangia', 'mangia'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Complete: Io ___ dalla Spagna (andare, presente).'),
    options: [T('vado'), T('vengono'), T('ando'), T('vaio')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de {tu} de {dormire}: Dormi, e o de {Lei} é ______.'),
      answer: 'Dorma',
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao verbo'),
      pairs: [
        { a: T('{faccio}'), b: T('{fare}') },
        { a: T('{vengo}'), b: T('{venire}') },
        { a: T('{mangio}'), b: T('{mangiare}') },
        { a: T('{posso}'), b: T('{potere}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase usa {essere} como verbo, e não como substantivo?'),
      options: [
        T('{Beati} i poveri in spirito.'),
        T('La {luce} era nel mondo.'),
        T('Il {mondo} è stato creato.'),
        T('{Egli} è Dio.'),
      ],
      answer: 3,
    },
  ],
};

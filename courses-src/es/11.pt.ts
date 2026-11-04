import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('Os verbos'),
  title: T('Os verbos essenciais'),
  subtitle: T(
    '{ir}, {venir}, {ser}, {tener}, {hacer}, {decir} e os catorze que sustentam quase toda oração',
  ),
  body: C(`## Vinte verbos e uma regra que decide meia língua

Um verbo regular se conjuga por sufixo: em {hablo}, {hablas}, {habla}, o tema {habl-} não se mexe e só muda a terminação. Os essenciais não têm tema fixo. {voy}, {vengo}, {soy}, {tengo}, {hago}, {digo}, {puedo}, {quiero}, {sé} e {do} são dez formas que nenhuma regra produz, e é preciso aprendê-las soltas.

São poucos e pesam muito. {ir}, {venir}, {ser}, {estar}, {tener}, {hacer}, {decir}, {poder}, {querer}, {saber}, {ver}, {dar}, {comer}, {beber}, {dormir}, {morir}, {nacer}, {leer}, {escribir}, {hablar}, {escuchar}, {tomar}, {poner} e {salir} cobrem quase tudo o que se diz num capítulo de Evangelho. O resto da língua se constrói em cima deles.

Sobre esses regulares há uma regra que decide sozinha a metade das frases, e é a **vocal da bota**: no presente de muitos verbos terminados em {-ar} e {-er} as formas tônicas mudam de vogal. {pienso}, {quiero}, {siento}, {entiendo}, {tiendo}, {pierdo}, {miento}, {prefiero}. Mas {nosotros} e {vosotros} mantêm a vogal original: {pensamos}, {queremos}, {sentimos}, {entendemos}, {tienden}, {perdemos}, {mienten}, {preferimos}. Se a forma não termina em {-amos} nem em {-éis}, é a bota.

## {Ir} + {a} + infinitivo: o futuro que não flexiona

O espanhol anuncia o futuro sem flexionar nenhum verbo: é {ir} no presente mais {a} mais infinitivo. {Voy a comer}, {va a venir}, {vamos a salir}. A forma de {ir} guarda a pessoa ({voy}, {vas}, {va}, {vamos}, {vais}, {van}), mas o infinitivo não muda nunca, e esse é o preço de um verbo que serve em todos os tempos compostos.

A {a} não tem papel próprio fora dessa construção, e é por isso que a frase se desfaz quando se troca o verbo: {voy al mercado} é {ir} com lugar, e {voy a ver} é {ir} mais {ver} sem {a} no meio. Quem traduz do português {vou ver} por {voy a ver} acerta, e quem escreve {voy ver} erra sem querer dizer outra coisa.

O mesmo truque funciona no passado: {iba a comer} era {ir} no imperfeito mais infinitivo. E o pretérito composto {he ido}, {has ido}, {hemos ido}, {había ido} é {ir} com o particípio {ido}, que não muda de gênero nem de número.

## As três mudanças de raiz

Os verbos que mudam de vogal formam três grupos, e o que separa os grupos é a que vogal cada uma vira.

- **{e} vira {ie}**: {piensa}, {quiere}, {siente}, {entiende}, {tiende}, {pierde}, {miente}, {prefiere}.
- **{o} vira {ue}**: {vuelve}, {duerme}, {muere}, {muestra}, {encuentra}, {vuela}, {juega}, {huele}.
- **{e} vira {i}** só no passado e só na 1.ª e 3.ª pessoa: {pidió}, {siguió}, {sirvió}, {vistió}, {eligió}, {eligieron}.

O primeiro grupo mantém a vogal nas outras formas: {piensa}, {piensan}, {piensa}, {pensamos}, {pensáis}. O segundo também: {vuelve}, {vuelan}, {volvemos}. O terceiro só muda no passado, e é o que o texto bíblico mais usa, porque o passado é o tempo da narrativa.

## {Tener que}, {deber} e {hay que}: a obrigação com três verbos

Em espanhol a obrigação tem três verbos, e a escolha diz de que obrigação é. **{tener que}** é pessoal: *{Tengo que irme}*, tenho de me ir. **{deber}** é dever ou necessidade: *{Debo irme}*, devo ir-me. **{Hay que}** é impessoal e não tem sujeito: *{Hay que irse}*, é preciso ir-se, tanto faz quem vá.

Os três regem o infinitivo e nunca uma forma conjugada: *{tengo que ir}*, nunca *{tengo que voy}*. É esse detalhe que denuncia quem traduz do português, onde *{tenho que ir}* e *{tenho de ir}* são a mesma coisa.

## Na Bíblia

João 1:1 traz {era}, o pretérito de {ser}, e João 1:5 traz {resplandece}, o presente de um verbo em {-er}. São dois tempos para o mesmo assunto: o que já era antes de tudo e o que está acontecendo em cena. E 1 João 4:8 traz {Dios es amor}, presente de {ser}, ao lado de João 3:16, {Dios amó al mundo}, pretérito de {amar}.

A escolha entre {ama} e {amó} é escolha do tradutor. {Amar} no presente afirma o que Deus é; no pretérito afirma o que ele fez. {Es amor} e {amó al mundo} dizem coisas diferentes, e uma tradução que põe os dois no mesmo tempo apaga a diferença.`),
  vocab: [
    V('voy', 'ir', 'eu vou'),
    V('va', 'ir', 'ele vai; vá!'),
    V('vengo', 'venir', 'eu venho'),
    V('viene', 'venir', 'ele vem; venha!'),
    V('soy', 'ser', 'eu sou'),
    V('es', 'ser', 'ele é'),
    V('tengo', 'tener', 'eu tenho'),
    V('hago', 'hacer', 'eu faço'),
    V('digo', 'decir', 'eu digo'),
    V('puedo', 'poder', 'eu posso'),
    V('quiero', 'querer', 'eu quero'),
    V('pienso', 'pensar', 'eu penso'),
    V('duermo', 'dormir', 'eu durmo'),
    V('sigo', 'seguir', 'eu sigo'),
    V('vuelvo', 'volver', 'eu volto'),
    V('era', 'ser', 'ele era'),
    V('amó', 'amar', 'ele amou'),
    V('resplandece', 'resplandecer', 'ele brilha'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Dez presentes irregulares não têm regra: {voy}, {vengo}, {soy}, {tengo}, {hago}, {digo}, {puedo}, {quiero}, {sé} e {do}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'A vogal da bota vale para as formas tônicas e nunca para {nosotros} nem {vosotros}: {pienso} contra {pensamos}, {vuelvo} contra {volvemos}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'O futuro é {ir} no presente mais {a} mais o infinitivo, e o infinitivo não flexiona: {voy a comer}, {va a venir}, {vamos a salir}.',
      ),
    },
    {
      n: '§4',
      text: T(
        'Depois de {a} não pode haver outro verbo conjugado: {voy a ver}, nunca {voy a veo}.',
      ),
    },
    {
      n: '§5',
      text: T(
        '{tener que}, {deber} e {hay que} regem o infinitivo: {tengo que ir}, {debo ir}, {hay que ir}, e nunca uma forma conjugada.',
      ),
    },
  ],
  notes: [
    {
      label: T('O verbo {ir} e {ser} têm o mesmo passado'),
      text: T(
        '{fui} é de {ser} e de {ir}: {fui bueno} é {ser}, {fui a Roma} é {ir}. E o plural fecha os dois igual: {fuimos}, {fueron}. O contexto é o que diz qual, e o verbo espanhol não dá nenhuma pista.',
      ),
    },
    {
      label: T('O futuro que o português já tinha'),
      text: T(
        'O português diz {vou comer} e {irei comer}, duas formas para a mesma ideia. O espanhol guardou só a primeira: {voy a comer}. Traduzir {irei} por {voy a} não perde o sentido, e traduzir {vou} por {voy a} também não; o que se perde é quem escreve {voy comer}.',
      ),
    },
  ],
  examples: [
    {
      text: 'En el principio era el Verbo.',
      gloss: T('{era}: pretérito de {ser}, 3.ª do singular.'),
    },
    {
      text: 'La luz resplandece en las tinieblas.',
      gloss: T('{resplandece}: presente, o que está acontecendo em cena (Jo 1:5).'),
    },
    { text: 'Dios es amor.', gloss: T('Presente de {ser}: o que Deus é (1 Jo 4:8).') },
    { text: 'Dios amó al mundo.', gloss: T('Pretérito de {amar}: o que Deus fez (Jo 3:16).') },
    { text: 'Voy a comer.', gloss: T('{ir} no presente mais {a} mais o infinitivo {comer}.') },
    { text: 'Voy al mercado.', gloss: T('{ir} com lugar: aqui não há {a} nem infinitivo.') },
    { text: 'Tengo que irme.', gloss: T('Obrigação pessoal com {tener que} e infinitivo.') },
    { text: 'Hay que irse.', gloss: T('Obrigação impessoal, sem sujeito.') },
    { text: 'No pensé y luego se lo pedí.', gloss: T('A vogal da bota: {pienso} e {pensamos}.') },
    {
      text: 'Volvió a su casa.',
      gloss: T('No passado {volvió} volta ao {o}: só o presente troca.'),
    },
  ],
  tables: [
    {
      caption: T('Presente dos essenciais irregulares'),
      head: [T('Pessoa'), T('ir'), T('venir'), T('tener'), T('hacer'), T('decir')],
      rows: [
        ['yo', '{voy}', '{vengo}', '{tengo}', '{hago}', '{digo}'],
        ['tú', '{vas}', '{vienes}', '{tienes}', '{haces}', '{dices}'],
        ['él', '{va}', '{viene}', '{tiene}', '{hace}', '{dice}'],
        ['nosotros', '{vamos}', '{venimos}', '{tenemos}', '{hacemos}', '{decimos}'],
        ['vosotros', '{vais}', '{venís}', '{tenéis}', '{hacéis}', '{decís}'],
        ['ellos', '{van}', '{vienen}', '{tienen}', '{hacen}', '{dicen}'],
      ],
    },
    {
      caption: T('Pretérito dos irregulares'),
      head: [T('Verbo'), T('Singular'), T('Plural')],
      rows: [
        ['{ir}', '{fui, fuiste, fue}', '{fuimos, fuisteis, fueron}'],
        ['{ser}', '{fui, fuiste, fue}', '{fuimos, fuisteis, fueron}'],
        ['{estar}', '{estuve, estuviste, estuvo}', '{estuvimos, estuvisteis, estuvieron}'],
        ['{tener}', '{tuve, tuviste, tuvo}', '{tuvimos, tuvisteis, tuvieron}'],
        ['{hacer}', '{hice, hiciste, hizo}', '{hicimos, hicisteis, hicieron}'],
        ['{decir}', '{dije, dijiste, dijo}', '{dijimos, dijisteis, dijeron}'],
        ['{poder}', '{pude, pudiste, pudo}', '{pudimos, pudisteis, pudieron}'],
        ['{saber}', '{supe, supiste, supo}', '{supimos, supisteis, supieron}'],
      ],
    },
    {
      caption: T('Mudanças de raiz no presente'),
      head: [T('Verbo'), T('{nosotros}'), T('Forma tônica'), T('Mudança')],
      rows: [
        ['pensar', '{pensamos}', '{pienso}', '{e} → {ie}'],
        ['querer', '{queremos}', '{quiero}', '{e} → {ie}'],
        ['seguir', '{seguimos}', '{sigo}', '{e} → {i}'],
        ['dormir', '{dormimos}', '{duermo}', '{o} → {ue}'],
        ['volver', '{volvemos}', '{vuelvo}', '{o} → {ue}'],
        ['morir', '{morimos}', '{muero}', '{o} → {ue}'],
        ['jugar', '{jugamos}', '{juego}', '{u} → {ue}'],
        ['sentir', '{sentimos}', '{siento}', '{e} → {ie}'],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Qual é o presente de {volver} na 3.ª pessoa do singular?'),
    options: [T('vuelve'), T('vuelvo'), T('volve'), T('volvido')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o futuro: "Nosotros ___ a salir" (ir + a + salir).'),
      answer: 'vamos',
    },
    {
      kind: 'match',
      prompt: T('Ligue o verbo à mudança de raiz.'),
      pairs: [
        { a: T('{pienso}'), b: T('{e} → {ie}') },
        { a: T('{duermo}'), b: T('{o} → {ue}') },
        { a: T('{sigo}'), b: T('{e} → {i}') },
        { a: T('{juego}'), b: T('{u} → {ue}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase expressa obrigação impessoal?'),
      options: [T('Tengo que irme.'), T('Debo irme.'), T('Hay que irse.'), T('Voy a irme.')],
      answer: 2,
    },
  ],
};

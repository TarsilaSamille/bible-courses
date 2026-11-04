import { C, T, V } from '../shared.mts';

export default {
  id: 11,
  section: T('The verbs'),
  title: T('The essential verbs'),
  subtitle: T(
    '{ir}, {venir}, {ser}, {tener}, {hacer}, {decir} and the fourteen that hold up almost every clause',
  ),
  body: C(`## Twenty verbs and one rule that decides half the language

A regular verb conjugates by suffix: in {hablo}, {hablas}, {habla}, the stem {habl-} does not move and only the ending changes. The essentials have no fixed stem. {voy}, {vengo}, {soy}, {tengo}, {hago}, {digo}, {puedo}, {quiero}, {sé} and {do} are ten forms that no rule produces, and they have to be learned one by one.

They are few and they weigh a lot. {ir}, {venir}, {ser}, {estar}, {tener}, {hacer}, {decir}, {poder}, {querer}, {saber}, {ver}, {dar}, {comer}, {beber}, {dormir}, {morir}, {nacer}, {leer}, {escribir}, {hablar}, {escuchar}, {tomar}, {poner} and {salir} cover almost everything said in a chapter of a Gospel. The rest of the language is built on top of them.

Over those regulars there is a rule that decides half the sentences on its own, and it is the **boot vowel**: in the present of many verbs ending in {-ar} and {-er} the stressed forms change vowel. {pienso}, {quiero}, {siento}, {entiendo}, {tiendo}, {pierdo}, {miento}, {prefiero}. But {nosotros} and {vosotros} keep the original vowel: {pensamos}, {queremos}, {sentimos}, {entendemos}, {tienden}, {perdemos}, {mienten}, {preferimos}. If the form does not end in {-amos} or in {-éis}, it is the boot.

## {Ir} + {a} + infinitive: the future that does not conjugate

Spanish announces the future without conjugating any verb: it is {ir} in the present plus {a} plus an infinitive. {Voy a comer}, {va a venir}, {vamos a salir}. The form of {ir} keeps the person ({voy}, {vas}, {va}, {vamos}, {vais}, {van}), but the infinitive never changes, and that is the price of a verb that works in every compound tense.

The {a} has no role of its own outside this construction, which is why the sentence falls apart when the verb changes: {voy al mercado} is {ir} with a place, and {voy a ver} is {ir} plus {ver} with no {a} in between. Anyone who translates Portuguese {vou ver} as {voy a ver} gets it right, and whoever writes {voy ver} gets it wrong without meaning anything else.

The same trick works in the past: {iba a comer} was {ir} in the imperfect plus an infinitive. And the perfect {he ido}, {has ido}, {hemos ido}, {había ido} is {ir} with the participle {ido}, which changes neither gender nor number.

## The three stem changes

The verbs that change vowel form three groups, and what separates the groups is which vowel each one becomes.

- **{e} becomes {ie}**: {piensa}, {quiere}, {siente}, {entiende}, {tiende}, {pierde}, {miente}, {prefiere}.
- **{o} becomes {ue}**: {vuelve}, {duerme}, {muere}, {muestra}, {encuentra}, {vuela}, {juega}, {huele}.
- **{e} becomes {i}** only in the past and only in the 1st and 3rd person: {pidió}, {siguió}, {sirvió}, {vistió}, {eligió}, {eligieron}.

The first group keeps the vowel in the other forms: {piensa}, {piensan}, {piensa}, {pensamos}, {pensáis}. The second does too: {vuelve}, {vuelan}, {volvemos}. The third changes only in the past, and that is the one biblical text uses most, because the past is the tense of narrative.

## {Tener que}, {deber} and {hay que}: obligation with three verbs

In Spanish obligation has three verbs, and the choice says what kind of obligation it is. **{tener que}** is personal: *{Tengo que irme}*, I have to go. **{deber}** is duty or necessity: *{Debo irme}*, I ought to go. **{Hay que}** is impersonal and has no subject: *{Hay que irse}*, it is necessary to go, no matter who does it.

All three govern the infinitive and never a conjugated form: *{tengo que ir}*, never *{tengo que voy}*. That detail is what gives away whoever translates from Portuguese, where *{tenho que ir}* and *{tenho de ir}* are the same thing.

## In the Bible

John 1:1 brings {era}, the preterite of {ser}, and John 1:5 brings {resplandece}, the present of an {-er} verb. Two tenses for the same subject: what already was before everything began and what is happening in the scene. And 1 John 4:8 brings {Dios es amor}, present of {ser}, next to John 3:16, {Dios amó al mundo}, preterite of {amar}.

The choice between {ama} and {amó} is the translator's choice. {Amar} in the present asserts what God is; in the preterite it asserts what he did. {Es amor} and {amó al mundo} say different things, and a translation that puts both in the same tense erases the difference.`),
  vocab: [
    V('voy', 'ir', 'I go'),
    V('va', 'ir', 'he goes; go!'),
    V('vengo', 'venir', 'I come'),
    V('viene', 'venir', 'he comes'),
    V('soy', 'ser', 'I am'),
    V('es', 'ser', 'he is'),
    V('tengo', 'tener', 'I have'),
    V('hago', 'hacer', 'I do'),
    V('digo', 'decir', 'I say'),
    V('puedo', 'poder', 'I can'),
    V('quiero', 'querer', 'I want'),
    V('pienso', 'pensar', 'I think'),
    V('duermo', 'dormir', 'I sleep'),
    V('sigo', 'seguir', 'I follow'),
    V('vuelvo', 'volver', 'I return'),
    V('era', 'ser', 'he was'),
    V('amó', 'amar', 'he loved'),
    V('resplandece', 'resplandecer', 'he shines'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'Ten irregular presents have no rule: {voy}, {vengo}, {soy}, {tengo}, {hago}, {digo}, {puedo}, {quiero}, {sé} and {do}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'The boot vowel holds for the stressed forms and never for {nosotros} or {vosotros}: {pienso} against {pensamos}, {vuelvo} against {volvemos}.',
      ),
    },
    {
      n: '§3',
      text: T(
        'The future is {ir} in the present plus {a} plus the infinitive, and the infinitive does not conjugate: {voy a comer}, {va a venir}, {vamos a salir}.',
      ),
    },
    {
      n: '§4',
      text: T('After {a} no other conjugated verb is allowed: {voy a ver}, never {voy a veo}.'),
    },
    {
      n: '§5',
      text: T(
        '{tener que}, {deber} and {hay que} govern the infinitive: {tengo que ir}, {debo ir}, {hay que ir}, and never a conjugated form.',
      ),
    },
  ],
  notes: [
    {
      label: T('{ir} and {ser} share their past'),
      text: T(
        '{fui} belongs to {ser} and to {ir}: {fui bueno} is {ser}, {fui a Roma} is {ir}. And the plural closes both the same way: {fuimos}, {fueron}. The context is what says which, and the Spanish verb gives no clue at all.',
      ),
    },
    {
      label: T('The future Portuguese already had'),
      text: T(
        'Portuguese says {vou comer} and {irei comer}, two forms for the same idea. Spanish kept only the first: {voy a comer}. Translating {irei} as {voy a} loses no sense, and translating {vou} as {voy a} does not either; what loses is whoever writes {voy comer}.',
      ),
    },
  ],
  examples: [
    { text: 'En el principio era el Verbo.', gloss: T('{era}: preterite of {ser}, 3rd singular.') },
    {
      text: 'La luz resplandece en las tinieblas.',
      gloss: T('{resplandece}: present, what is happening in the scene (Jn 1:5).'),
    },
    { text: 'Dios es amor.', gloss: T('Present of {ser}: what God is (1 Jn 4:8).') },
    { text: 'Dios amó al mundo.', gloss: T('Preterite of {amar}: what God did (Jn 3:16).') },
    { text: 'Voy a comer.', gloss: T('{ir} in the present plus {a} plus the infinitive {comer}.') },
    {
      text: 'Voy al mercado.',
      gloss: T('{ir} with a place: here there is no {a} and no infinitive.'),
    },
    { text: 'Tengo que irme.', gloss: T('Personal obligation with {tener que} plus infinitive.') },
    { text: 'Hay que irse.', gloss: T('Impersonal obligation, no subject.') },
    { text: 'No pensé y luego se lo pedí.', gloss: T('The boot vowel: {pienso} and {pensamos}.') },
    {
      text: 'Volvió a su casa.',
      gloss: T('In the past {volvió} returns to the {o}: only the present changes.'),
    },
  ],
  tables: [
    {
      caption: T('Present of the irregular essentials'),
      head: [T('Person'), T('ir'), T('venir'), T('tener'), T('hacer'), T('decir')],
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
      caption: T('Preterite of the irregulars'),
      head: [T('Verb'), T('Singular'), T('Plural')],
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
      caption: T('Stem changes in the present'),
      head: [T('Verb'), T('{nosotros}'), T('Stressed form'), T('Change')],
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
    prompt: T('What is the present of {volver} in the 3rd person singular?'),
    options: [T('vuelve'), T('vuelvo'), T('volve'), T('volvido')],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete the future: "Nosotros ___ a salir" (ir + a + salir).'),
      answer: 'vamos',
    },
    {
      kind: 'match',
      prompt: T('Match the verb to its stem change.'),
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
      prompt: T('Which sentence expresses impersonal obligation?'),
      options: [T('Tengo que irme.'), T('Debo irme.'), T('Hay que irse.'), T('Voy a irme.')],
      answer: 2,
    },
  ],
};

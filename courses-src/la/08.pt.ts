import { C, T, V } from '../shared.mts';

export default {
  id: 8,
  title: T('A terceira declinação'),
  subtitle: T('{rex, regis} — o nominativo engana, o genitivo não'),
  section: T('Declinações e o verbo sum'),
  body: C(`## Como se reconhece

A 3.ª declinação é a mais copious do latim: contém o vocabulário mais abstrato, os nomes de agent, os neutros em {-ium}. Reconhece-se por um par de propriedades que bastam para classificar qualquer palavra:

1. O **nominativo** termina em consoante, ou em {-as}, {-os}, {-er}, {-or}, {-es} — {rex}, {civitas}, {canis}, {miles}, {lumen};
2. O **genitivo singular** termina em {-is} ou {-os} — {regis}, {civitatis}, {canis}, {militis}, {luminis}.

Se você vir um {-is} no genitivo singular, é 3.ª declinação quase sempre. É por isso que a da 3.ª é a que se decora primeiro.

## O tema: duas vogais de paradeiro

A dificuldade real da 3.ª declinação está no **imperfeito**, e o problema é visível já em {rex, regis}. O tema é {reg-}, e o nominativo tem {e} + {x}; no genitivo aparece {e} + {i}. O que acontece é que o {x} representa uma {ks} que o latim escreve ora como {x}, ora como {c}: por isso o mesmo tema tem dois genres de.

Simplificando: o genitivo singular mostra o tema mais o {is}. Compare:

- {rex, regis} — tema {reg-}, mas o nominativo tem {x};
- {miles, militis} — tema {mīlit-} (vogal longa);
- {lumen, luminis} — tema {lūmin-} (vogal longa).

Nos dois últimos a vogal do tema é longa, e por isso o {i} do genitivo é breve e a forma pesa mais.

## O plural

O plural troca o final do tema por {ēs} e alonga a vogal final. O problema aparece nos **nominativo e genitivo plurais**, que seguem temas diferentes:

| Singular | Gen. sg. | Nom. pl. | Gen. pl. |
|---|---|---|---|
| rēx | rēgis | rēgēs | rēgum |
| mīles | mīlitis | mīlitēs | mīlitum |
| lūmen | lūminis | lūmina | lūminum |
| pars | partis | partēs | partium |
| canis | canis | canēs | canum |

Repare em {pars} → {partium} e em {canis} → {canum}: uns temas ganham {i} antes do sufixo {um}, outros não. A razão histórica é que alguns temas tinham {i} em sua origem; outros não. Não há regra — só a forma.

## Substantivos em -ius

Um grupo de neutros tem {i} no genitivo singular e {ium} no plural: {bellum, belli} mas {bellōrum}, {verbum, verbī} mas {verbōrum}, {civis, civis} mas {cīvium}, {hostis, hostis} mas {hostium}. São os **i-stem**, e suas formas são regulares uma vez que se aprende a regra: genitivo pl. e dativo pl. em {i} + {um}.

O substantivo mais famoso do grupo é {civitas} «cidade» — e é justamente ele que a Vulgata usa quando fala da cidade de {Hierusalem}: {Ierusalem, quae est civitas Iudaeae}.

## O que a Vulgata faz com a 3.ª declinação

Os nomes que dominam o Novo Testamento em latim são quase todos de 3.ª: {lux} e {lux} de {lux}, {caro} «carne», {salvator} «salvador», {pax} «paz», {fides} «fé», {spes} «esperança», {mors} «morte». Se você decora a 3.ª declinação, decora o vocabulário central da fé cristã.`),
  vocab: [
    V('rex', 'rex', 'rei (x = cs)'),
    V('regnum', 'regnum', 'reino'),
    V('corpus', 'corpus', 'corpo'),
    V('lumen', 'lumen', 'luz, claridade'),
    V('miles', 'miles', 'soldado'),
    V('canis', 'canis', 'cão'),
    V('gens', 'gens', 'gente, nação'),
    V('urbs', 'urbs', 'cidade'),
    V('pars', 'pars', 'parte (i-stem)'),
    V('mors', 'mors', 'morte'),
    V('amor', 'amor', 'amor'),
    V('pastor', 'pastor', 'pastor'),
    V('flos', 'flos', 'flor'),
    V('nomen', 'nomen', 'nome'),
    V('hostis', 'hostis', 'inimigo (i-stem)'),
    V('civitas', 'civitas', 'cidade, Estado'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('O que revela o genitivo {regis} sobre a forma {rex}?'),
    options: [
      T('Que o tema é {reg-} e o {x} do nominativo esconde um {cs}'),
      T('Que {rex} é da 2.ª declinação'),
      T('Que {rex} é um verbo'),
      T('Que o genitivo nunca coincide com o tema'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual destes i-stem tem genitivo plural em {ium}?'),
      options: [T('{canum}'), T('{mīlitum}'), T('{cīvium}'), T('{rēgum}')],
      answer: 2,
      hint: T('Regra §4: i-stem tem {i} antes do sufixo {um}.'),
    },
    {
      kind: 'fill',
      prompt: T('Genitivo singular de {corpus}: corp_ _'),
      answer: 'corporis',
      hint: T('Tema {corpor-} + {is}, com {u} breve: «corpŏris».'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o nominativo ao genitivo singular'),
      pairs: [
        { a: T('lumen'), b: T('lūminis — tema com vogal longa') },
        { a: T('civitas'), b: T('civitatis — tema simples') },
        { a: T('miles'), b: T('mīlitis — como em mīles mīlitum') },
        { a: T('flos'), b: T('flōris — x por causa do z grego') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    { n: '1', text: T('Nominativo em consoante + genitivo singular em {-is} = 3.ª declinação.') },
    {
      n: '2',
      text: T('O genitivo singular é tema + {is}: é a forma mais segura de encontrar o tema real.'),
    },
    {
      n: '3',
      text: T(
        'O {x} do nominativo pode esconder {c} ou {g}: {rex} = {regs}, {flos} = {flōs} (grego φλόξ).',
      ),
    },
    {
      n: '4',
      text: T(
        'Nos i-stem, o genitivo e o dativo plural recebem {i} antes de {um}: {cīvium}, {hostium}.',
      ),
    },
    {
      n: '5',
      text: T('No plural, dativo e ablativo são idênticos em {ibus}: {rēgibus}, {civibus}.'),
    },
  ],
  notes: [
    {
      label: T('A soma dos temas:'),
      text: T(
        'O latim tem, em quase todos os substantivos, três temas: o **nominal** (do nominativo), o **genital** (do genitivo) e o **vocativo** (do singular). O latim é uma **língua de três temas**, e é por isso que o dativo singular não sai nunca do tema do nominativo: {rēgī} vem de {rēx} + {ī}, não de {reg-}.',
      ),
    },
    {
      label: T('Cuidado com:'),
      text: T(
        'Existem i-stems que só revelam sua natureza no plural. O latim os tem em {pars}, {mīles}, {cīvis} e {equus} — e todos se comportam de um jeito diferente. O único recurso é aprendê-los: {partium} e {mīlitum} seguem cada um seu caminho, e o texto não avisa.',
      ),
    },
  ],
  examples: [
    { text: 'rex', gloss: T('rei (nom. sing.)') },
    { text: 'regis', gloss: T('do rei (gen. sing.) — o tema à mostra') },
    { text: 'regem', gloss: T('o rei (acus. sing.)') },
    { text: 'rege', gloss: T('pelo rei (abl. sing.), {e} breve') },
    { text: 'regum', gloss: T('dos reis (gen. plural)') },
    { text: 'regibus', gloss: T('aos reis, com os reis (dat./abl. pl.)') },
    { text: 'lumen', gloss: T('luz — neutro puro, nom. = acus.') },
    { text: 'corpus', gloss: T('corpo — tema {corpor-}, {u} breve') },
    { text: 'civitas', gloss: T('cidade — «a cidade de Judá»') },
    { text: 'pars', gloss: T('parte — genitivo plural {partium}') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — 3.ª declinação: {rex, regis} (tema consoante)'),
      head: [T('Caso'), T('Singular'), T('Plural')],
      rows: [
        ['Nom.', 'rēx', 'rēgēs'],
        ['Voc.', 'rēx', 'rēgēs'],
        ['Gen.', 'rēgis', 'rēgum'],
        ['Dat.', 'rēgī', 'rēgibus'],
        ['Acu.', 'rēgem', 'rēgēs'],
        ['Abl.', 'rēge', 'rēgibus'],
      ],
    },
    {
      caption: T('Tabela 2 — 3.ª declinação: i-stem ({civis, civis}) e neutro ({lumen, luminis})'),
      head: [T('Caso'), T('i-stem'), T('Neutro'), T('Nota')],
      rows: [
        ['Nom.', 'civis', 'lūmen', T('neutro puro')],
        ['Gen.', 'civis', 'lūminis', T('aqui {i} breve ou {ī}?')],
        ['Dat.', 'civi', 'lūminī', T('= ablativo')],
        ['Acu.', 'civem', 'lūmen', T('= nominativo')],
        ['Abl.', 'cive', 'lūmine', T('{e} breve')],
        ['Gen. pl.', 'cīvium', 'lūminum', T('o {i} dos i-stem')],
        ['Nom. pl.', 'civēs', 'lūmina', T('neutro: {a} curta')],
      ],
    },
  ],
};

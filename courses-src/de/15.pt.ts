import { C, T, V } from '../shared.mts';

export default {
  id: 15,
  title: T('O comparativo e o superlativo'),
  subtitle: T('besser, größer, am besten — grau erleichtert'),
  section: T('Adjetivos e advérbios'),
  body: C(`## A regra curta

O comparativo acrescenta **-er**, o superlativo acrescenta **-ste**. Nada mais. Um adjetivo de uma sílaba como {klein} «pequeno» dá {kleiner} «menor» e {am kleinsten} «o menor». Um adjetivo de duas sílabas faz o mesmo, desde que não tenha {ie}, {ei} ou {eu} no radical: {teuer} «caro» dá {teurer} e {am teuersten}. A pronúncia acompanha o sufixo: {-er} soa [ɐ], um schwa som, e {-est} [əst] recebe o acento tônico — {größer} é [ˈɡʁøːsɐ], {am größten} é [am ˈɡʁøːstn̩].

O truque que resolve quase tudo é o grau: **grau** é uma das poucas palavras do alemão cuja forma está prevista. Ele funciona como multiplicador:

- {viel} + grau = {mehr} «mais»
- {hoch} + grau = {höher} «mais alto»
- {teuer} + grau = {teurer} «mais caro»

Você já sabe dizer mais sobre quase qualquer coisa: basta acrescentar **mehr**.

## O que faz o {ö} e o {ü}

Sete adjetivos trocam a vogal do radical. O {ö} e o {ü} não são enfeite: eles aproximam a palavra do sentido, porque {groß} é grande e {größer} é comparativamente grande — não apenas maior. E a pronúncia é o que denuncia o falante: {ö} é [øː], um vogal redondo fechado como o {o}alongado, e {ü} é [yː], fechado na frente. Nenhum outro som do alemão faz exatamente isso.

Sete adjetivos recebem umlaut. Cinco deles trocam de fato a vogal do radical: {groß} → {größer}, {hoch} → {höher}, {jung} → {jünger}, {gut} → {besser}, {nahe} → {näher}. Os dois seguintes apenas ganham o som: {arm} → {ärmer}, {stark} → {stärker}, {kalt} → {kälter}.

O superlativo dessas formas suprime o {e} do {-(e)st}: {am größten} «no maior», {am besten} «no melhor», {am jüngsten} «no mais jovem». E o superlativo de {viel} é {am meisten}, com {v} que vira {m}.

## {als} ou {wie}

A distinção é de sentido, não de forma. {wie} «como» introduz **igualdade**: {mein Bruder ist so groß wie ich} «meu irmão é tão alto quanto eu». {als} «do que» introduz **diferença**: {mein Bruder ist größer als ich} «meu irmão é mais alto do que eu».

Quando há igualdade mas com uma reserva, o alemão usa {nicht so … wie}: {Der Weg ist nicht so lang, wie ich dachte} «o caminho não é tão longo quanto eu pensava».

Um cuidado: {als} também significa «quando» e «como» (= «ao invés de»). O contexto resolve, mas leia sempre a frase completa antes de escolher.

## Advérbios comparativos

Os advérbios tiram o {e} antes de {r} ou {st}, e por isso quase todos têm só duas formas:

- {gut} → {besser} [ˈbɛsɐ] «melhor»
- {oft} → {öfter} «mais vezes»
- {gern} → {lieber} «de preferência»
- {viel} → {mehr} «mais»

Verbos nunca formam superlativo. Para dizer «o que mais», o alemão recorre a um substantivo: {das Beste} «o melhor», {das Schönste} «o mais belo», com {das} se referring a algo neutro ou {das Beste} como substantivo neutro.

## O essencial

{-(e)r} e {-(e)st} resolvem a comparação comum; {grau} resolve tudo o que é «mais»; sete adjetivos trocam a vogal e perdem o {e} no superlativo; {wie} é igualdade, {als} é diferença.`),
  vocab: [
    V('klein', 'klein', 'pequeno (comp.: kleiner, sup.: am kleinsten)'),
    V('groß', 'groß', 'grande (comp.: größer, sup.: am größten)'),
    V('gut', 'gut', 'bom (comp.: besser, sup.: am besten)'),
    V('teuer', 'teuer', 'caro (comp.: teurer, sup.: am teuersten)'),
    V('hoch', 'hoch', 'alto (comp.: höher, sup.: am höchsten)'),
    V('jung', 'jung', 'jovem (comp.: jünger, sup.: am jüngsten)'),
    V('nahe', 'nahe', 'perto (comp.: näher, sup.: am nächsten)'),
    V('arm', 'arm', 'pobre (comp.: ärmer, sup.: am ärmsten)'),
    V('stark', 'stark', 'forte, forte (comp.: stärker, sup.: am stärksten)'),
    V('viel', 'viel', 'muito (comp.: mehr, sup.: am meisten)'),
    V('gern', 'gern', 'de bom grado (comp.: lieber)'),
    V('oft', 'oft', 'às vezes (comp.: öfter)'),
    V('grau', 'grau', 'grau, grau; «mais» (grau + adjetivo)'),
    V('als', 'als', 'do que, mais que (diferença); quando'),
    V('wie', 'wie', 'como, igual a (igualdade)'),
    V('am besten', 'gut', 'o melhor, de maneira ótima'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {mein Bruder ist größer ___ ich}, qual palavra preenche o espaço?'),
    options: [
      T('als — há diferença de estatura entre os dois'),
      T('wie — seria também correto, porque {größer} pressupõe desigualdade'),
      T('so — {so} introduz a igualdade, não a diferença'),
      T('gern — {gern} forma comparativo, mas não faz sentido aqui'),
    ],
    answer: 0,
    hint: T('Regra §3: {als} marca diferença, {wie} marca igualdade.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Superlativo de {gut} na forma de superlativo de qualidade: am ___'),
      answer: 'besten',
      hint: T(
        '{gut} é irregular no comparativo ({besser}) e o superlativo perde o {e}: {beste} + {n}.',
      ),
    },
    {
      kind: 'match',
      prompt: T('Ligue o comparativo ao superlativo correspondente.'),
      pairs: [
        { a: T('größer'), b: T('am größten') },
        { a: T('jünger'), b: T('am jüngsten') },
        { a: T('teurer'), b: T('am teuersten') },
        { a: T('kleiner'), b: T('am kleinsten') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual frase é inteiramente correta?'),
      options: [
        T('Der Berg ist höher als der Hügel.'),
        T('Der Berg ist so hoch wie der Hügel.'),
        T('Der Berg ist höch so hoch der Hügel.'),
        T('Der Berg ist mehr hoch als der Hügel.'),
      ],
      answer: 0,
      hint: T('Regra §2: {hoch} + {grau} = {höher}; e {höher} já é diferente, logo {als}.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O comparativo acrescenta {-er} e o superlativo acrescenta {-ste} a praticamente qualquer adjetivo, sem alteração interna.',
      ),
    },
    {
      n: '2',
      text: T(
        'O grau resolve o «mais»: {hoch} + {grau} = {höher}, {teuer} + {grau} = {teurer}, {viel} + {grau} = {mehr}.',
      ),
    },
    {
      n: '3',
      text: T(
        'Cinco adjetivos trocam a vogal do radical: {groß} → {größer}, {hoch} → {höher}, {jung} → {jünger}, {gut} → {besser}, {nahe} → {näher}. No superlativo todos perdem o {e}: {am größten}, {am höchsten}, {am jüngsten}, {am besten}, {am nächsten}.',
      ),
    },
    {
      n: '4',
      text: T(
        '{wie} introduz igualdade e {als} introduz diferença. Com igualdade reservada use {nicht so … wie}: {Er ist nicht so alt wie sein Bruder}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Verbos não formam superlativo. O «mais» verbal vira substantivo: {das Beste} «o melhor», {das Schönste} «o mais belo».',
      ),
    },
  ],
  notes: [
    {
      label: T('O truque do grau'),
      text: T(
        'Aprender o comparativo e o superlativo como listas é frágil: são milhares de adjetivos e nenhuma garantia. Aprender **grau** é uma regra só. Diga {hoch} e {grau} juntos e a forma aparece sozinha. Se a palavra já termina em {er} — {sicher} «seguro», {dunkel} «escuro» —, a {er} do comparativo simplesmente se duplica: {sicherer}, {dunkler}.',
      ),
    },
    {
      label: T('Leitura bíblica'),
      text: T(
        'Em 1 Coríntios 13:13, Lutero escreve: {Der Glaube, die Hoffnung, die Liebe, bleibt. Diese drei aber bleiben ewig.} «A fé, a esperança, o amor permanecem. Estes três, porém, permanecem para sempre.» A Tradução de Zürcher prefere o superlativo substantivado: {Aber der höchste davon ist die Liebe} «mas o maior deles é o amor». Repare que o comparativo não aparece nenhuma das duas vezes: o «maior» é construído com {-(e)st} mais um substantivo, e {höchste} vem da série de umlaut. Em Salmo 19:1, {Der Himmel erzählt die Ehre Gottes}, note ainda o {ch} de {Himmel} e {erzählt} soado [ç] antes de {e}, sinal claro de que o falante domina os sons.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Berg ist höher als der Hügel.',
      gloss: T('A montanha é mais alta do que a colina (comp. de {hoch} com {als}).'),
    },
    {
      text: 'Dieses Buch ist teurer als jenes.',
      gloss: T('Este livro é mais caro do que aquele ({teuer} + {-er} mantém o {e} do radical).'),
    },
    {
      text: 'Meine Mutter ist so alt wie mein Vater.',
      gloss: T('Minha mãe é tão velha quanto meu pai ({so … wie} = igualdade).'),
    },
    {
      text: 'Das ist am besten.',
      gloss: T('Isso é o melhor / da melhor maneira ({am besten}, forma de qualidade).'),
    },
    {
      text: 'Sie ist die Beste in der Klasse.',
      gloss: T('Ela é a melhor da turma (superlativo substantivado com {die}).'),
    },
    {
      text: 'Ich trinke lieber Tee als Kaffee.',
      gloss: T('Prefiro chá a café ({gern} → {lieber}, comparativo de advérbio).'),
    },
    {
      text: 'Der Weg ist nicht so lang, wie ich dachte.',
      gloss: T(
        'O caminho não é tão longo quanto eu pensava ({nicht so … wie} = igualdade com reserva).',
      ),
    },
    {
      text: 'Er ist noch jünger als ich.',
      gloss: T('Ele é ainda mais jovem do que eu ({noch} + comparativo intensifica).'),
    },
    {
      text: 'Diese Straße ist die breiteste der Stadt.',
      gloss: T('Esta rua é a mais larga da cidade (superlativo de {breit} em {breiteste}).'),
    },
    {
      text: 'Wir sprechen mehr Deutsch als Englisch.',
      gloss: T('Falamos mais alemão do que inglês ({mehr} é comparativo de {viel}, sem {e}).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — O grau em três colunas'),
      head: [T('Adjetivo'), T('Comparativo'), T('Superlativo'), T('Partícula')],
      rows: [
        ['klein', 'kleiner', 'kleinst-', 'am kleinsten'],
        ['groß', 'größer', 'größt-', 'am größten'],
        ['hoch', 'höher', 'höchst-', 'am höchsten'],
        ['jung', 'jünger', 'jüngst-', 'am jüngsten'],
        ['arm', 'ärmer', 'ärmst-', 'am ärmsten'],
        ['nahe', 'näher', 'nächst-', 'am nächsten'],
        ['teuer', 'teurer', 'teuerst-', 'am teuersten'],
        ['gut', 'besser', 'best-', 'am besten'],
        ['viel', 'mehr', 'meist-', 'am meisten'],
        ['gern', 'lieber', '—', 'am liebsten'],
      ],
    },
    {
      caption: T('Tabela 2 — O sufixo e a vogal do radical'),
      head: [T('Tipo de palavra'), T('Final do radical'), T('Superlativo'), T('Exemplo')],
      rows: [
        ['uma sílaba', 'qualquer', '-est', 'am klugsten'],
        ['-d ou -t', 'qualquer', '-sten (sem e)', 'am breitesten'],
        ['-s, -ß, -sch, -z', 'qualquer', '-sten (sem e)', 'am kürzesten'],
        ['-el, -er, -em', 'sem alteração', '-sten (com e)', 'am dunkelsten'],
        ['três ou mais sílabas', 'qualquer', '-sten (com e)', 'am interessantesten'],
      ],
    },
  ],
};

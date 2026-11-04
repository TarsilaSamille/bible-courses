import { C, T, V } from '../shared.mts';

export default {
  id: 9,
  title: T('Pronomes pessoais e reflexivos'),
  subtitle: T('{ego, tu, is, nos} — e o {se} que traduz toda uma oração grega'),
  section: T('Pronomes e sintaxe do período'),
  body: C(`## As três pessoas

O latim tem pronomes pessoais para três pessoas, em seis formas cada um — exatamente como o português. O que muda é o caso:

| | eu | tu | ele/ela | nós | vós | eles/elas |
|---|---|---|---|---|---|---|
| nom. | ego | tu | is, ea | nos | vos | eī, eae |
| acus. | mē | tē | eum, eam | nōs | vōs | eōs, eās |
| abl. | mē | tē | eō, eā | nōbīs | vōbīs | eīs, eīs |

{Is, ea, id} é o ponto de partida: latim, como português, não tem gênero gramatical no pronome. O gênero vem do referente — {is} pode ser «ele» ou «ela», {eum} pode ser «o homem» ou «a cidade» (neste caso, {eam}).

Repare que {eis} serve para o dativo e o ablativo, e que o plural {ei} e {eis} são idênticos. É por isso que o contexto faz todo o trabalho: em {Deus est lux vobis} o {vobis} é dativo; em {Deus est lux apud vos} é ablativo.

## Ego sum via veritas et vita

O Evangelho de João põe o pronome {ego} no começo das sete grandes declarações de Jesus, e o grego εγώ é enfático por natureza. O latim costuma produzir o mesmo efeito com a ordem das palavras, mas a Vulgata mantém a posição inicial, porque {ego} em latim **não é enfático**: é apenas o pronome de 1.ª pessoa.

{Ego sum via veritas et vita} «Eu sou o caminho, a verdade e a vida» (João 14:6);
{Ego sum lux mundi} «Eu sou a luz do mundo» (João 8:12).

A forma {sum} aqui é {sum} simples, sem {ei}: em latim o pronome {ego} dispensa o verbo substantivo. Compare com o grego, que diria ἐγώ εἰμι.

## O pronome reflexivo {se}

O latim tem um só pronome reflexivo para as três pessoas: {se}, de {sui}, e é sempre **acusativo**: {se} ou {sē} (diferem, mas só quando o pronome vai só). Não pode ter outro antecedente além do sujeito da própria oração:

{Pueri {se} amant} — os meninos amam **a si mesmos**;
{Pueri {se} amant} — os meninos são amados **uns pelos outros** (o latim admite as duas leituras!);
{Pueri {sē} vetant} — os meninos se proíbem (o {e} é longo, sintético).

O latim faz a mesma coisa com um pronome indireto, {sibi}, que governa o dativo:

{Pueri {sibi} cavas faciunt} «os meninos fazem covas para si mesmos».

## O que o {se} faz na Vulgata

A {se} do Novo Testamento é mais poderosa que o seu antecedente grego. Compare:

{ἐὰν οὐκ ἀποστείλῃ τὴν υἱὸν} → {Si non miserit Filium suum}
{ἀπέστειλεν ὁ θεὸς τὸν υἱὸν αὐτοῦ} → {Misit Deus Filium suum}

No primeiro versículo o grego traz o **aoristo subjuntivo**; no segundo o **aoristo indicativo**. A Vulgata não distingue os dois: escreve {miserit} nos dois casos. O leitor latino precisa descobrir o modo pelo contexto, porque a forma é idêntica. Essa é a genialidade e o limite do latim: uma forma para dois valores.`),
  vocab: [
    V('ego', 'ego', 'eu'),
    V('tu', 'tu', 'tu'),
    V('is', 'is', 'ele (masc.)'),
    V('ea', 'ea', 'ela (fem.)'),
    V('id', 'id', 'aquilo (neutro)'),
    V('eos', 'is', 'eles (masc. acus.)'),
    V('eis', 'is', 'a eles, para eles'),
    V('nos', 'nos', 'nós'),
    V('vobis', 'vos', 'a vós, para vós'),
    V('sui', 'sui', 'de si, seu'),
    V('sibi', 'sibi', 'para si, a si'),
    V('se', 'se', 'se (reflexivo)'),
    V('meus', 'meus', 'meu'),
    V('tuus', 'tuus', 'teu'),
    V('suus', 'suus', 'seu, dele/da'),
    V('eius', 'eius', 'dele/dela, dele (gen.)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Deus est lux vobis}, o que {vobis} expressa?'),
    options: [
      T('Dativo: «a vós» — {lux} é o objeto'),
      T('Ablativo: «com vós»'),
      T('Nominativo: «vós sois»'),
      T('Genitivo: «de vós»'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('Qual é a restrição do pronome reflexivo {se}?'),
      options: [
        T('Só pode ter o sujeito da oração como antecedente'),
        T('Só pode aparecer no plural'),
        T('Nunca pode ser dativo'),
        T('Precisa de um antecedente substantivo explícito'),
      ],
      answer: 0,
      hint: T('Regra §3.'),
    },
    {
      kind: 'fill',
      prompt: T('Dativo plural de {tu} (vós): vo_ _'),
      answer: 'vobis',
      hint: T('É a forma que aparece em {Deus est lux vobis}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o pronome ao caso'),
      pairs: [
        { a: T('eum'), b: T('acusativo masculino singular') },
        { a: T('eis'), b: T('dat. ou abl. plural') },
        { a: T('eae'), b: T('nominativo feminino plural') },
        { a: T('sibi'), b: T('dativo reflexivo: «para si»') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O latim não marca gênero no pronome: {is} vale para ele e para ela; o gênero vem do referente.',
      ),
    },
    {
      n: '2',
      text: T(
        '{eis}, {eis} e {eis} servem ao dativo e ao ablativo plural; só o verbo indica qual é qual.',
      ),
    },
    {
      n: '3',
      text: T(
        'O reflexivo {se} é sempre acusativo e só pode refletir o sujeito da própria oração.',
      ),
    },
    {
      n: '4',
      text: T('O reflexivo indireto é {sibi} e governa o dativo: {sibi} facere «fazer para si».'),
    },
    {
      n: '5',
      text: T(
        'O possessivo de 3.ª pessoa é {suus} para o sujeito e {eius} para quem não é o sujeito.',
      ),
    },
  ],
  notes: [
    {
      label: T('sui × eius:'),
      text: T(
        'Traducir «suyo» siempre por {suus} es un error frecuente. Em {Ego sum via veritas et vita} o {sua} é {suus}, porque o referente é o sujeito; em {Amavit verbum suum} o referente pode ser outro, e o latim escreve {eius}.',
      ),
    },
    {
      label: T('Perda do modo:'),
      text: T(
        'O latim funde o indicativo e o subjuntivo do aoristo grego numa forma só ({miserit}). Isso é called *syncretismo* e é comum a todo o latim. Consequência prática: em um conditional como {Si non venerit, non videbit}, só a tradução revela se é condicional ou narración.',
      ),
    },
  ],
  examples: [
    { text: 'ego', gloss: T('eu (nom.)') },
    { text: 'tu', gloss: T('tu (nom.)') },
    { text: 'is', gloss: T('ele (nom. masc.)') },
    { text: 'eum', gloss: T('o (acus. masc.)') },
    { text: 'eis', gloss: T('a eles, para eles (dat.); deles, com eles (abl.)') },
    { text: 'vobis', gloss: T('a vós (dat.) / com vós (abl.)') },
    { text: 'se', gloss: T('se, a si mesmo (acus.)') },
    { text: 'sibi', gloss: T('para si (dat.)') },
    { text: 'sui', gloss: T('de si, seu (gen.)') },
    { text: 'Ego sum via veritas et vita', gloss: T('«Eu sou o caminho, a verdade e a vida»') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Pronomes pessoais'),
      head: [T('Pessoa'), T('1.ª'), T('2.ª'), T('3.ª masc.'), T('3.ª fem.')],
      rows: [
        ['Nom.', 'egŏ', 'tŭ', 'is', 'eă'],
        ['Acu.', 'mē', 'tē', 'eum', 'eam'],
        ['Abl.', 'mē', 'tē', 'eō', 'eā'],
      ],
    },
    {
      caption: T('Tabela 2 — Pronomes possessivos'),
      head: [T('Pessoa'), T('Singular'), T('Plural'), T('Exemplo')],
      rows: [
        [
          T('1.ª pessoa'),
          'meŭs, mea, meum',
          'noster, nostra, nostrum',
          '{Filium} meum «meu Filho»',
        ],
        [T('2.ª pessoa'), 'tuŭs, tua, tuum', 'vester, vestra, vestrum', '{Pater} tuus «teu Pai»'],
        [T('3.ª pessoa'), 'suŭs, sua, suum', 'eius, eorum, earum', '{Verbum} suum «sua Palavra»'],
      ],
    },
  ],
};

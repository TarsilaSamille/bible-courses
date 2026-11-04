import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  title: T('O imperativo'),
  subtitle: T('{parle, parlons, parlez} — ordem, pedido, conselho e receita'),
  section: T('Os verbos'),
  body: C(`## Só três pessoas

O imperativo é o único modo da língua francesa que não tem presente completo: existem exatamente **três** formas, uma para {tu}, uma para {nous} e uma para {vous}. Nenhuma pessoa tem duas formas, como o português, e não existe forma para {je}, {il} ou {ils}.

A regra morfológica é mais simples do que parece: para os grupos em {-er}, {-ir} e {-re}, a forma de {nous} é o presente sem {s} ({parlons}) e a de {vous} é o presente sem {s} ({parlez}). Para {tu}, é quase sempre o presente sem a terminação de {-er} ({parle}, {finis}, {prends}).

| Infinitivo | tu | nous | vous |
|---|---|---|---|
| parler | parle | parlons | parlez |
| finir | finis | finissons | finissez |
| prendre | prends | prenons | prenez |
| vendre | vends | vendons | vendez |
| attendre | attends | attendons | attendez |

Note a assimetria: o {vous} nunca recebe {s}, mas o {tu} dos verbos em {-er} fica sem {s} só por causa da regra §2. Em um único ponto o {vous} se parece com o {tu} — nos verbos {être}, {avoir} e {savoir} — e é o único lugar da língua em que os dois coincidem.

## O -{s} facultativo do {tu}

Esta é a peculiaridade mais celebrada do francês, e ela já estava no latim: {parle} e {parles} são **a mesma forma**, pronunciadas de maneiras diferentes.

A regra é uma só: os verbos em {-er} tiram o {s} de {tu} **antes de palavra que comece por vogal ou por {h} mudo** — {parle}, {mange}, {prie}, {écoute}, {aide}. Diante de consoante ou no fim da frase, o {s} volta e é soado como {s} de {le}: {parles}, {manges}, {pries}.

| Contexto | Forma | Pronúncia |
|---|---|---|
| {Parle} | sem {s} | {paʁl} |
| {Tu parles} | com {s} | {ty paʁl} |
| {Parle-moi} | sem {s} | {paʁl mwa} |
| {Tu parles bien} | com {s} | {ty paʁl bjɛ̃} |

Na prática escrita, quase todo mundo deixa o {s} fora. É a chamada orthographe rectifiée, adotada em 1990 pela Académie. O hífen antes de {y} é o mesmo {s}: {Dis-y}, {Va-t-en}.

## O imperativo negativo

O negativo é mais fácil do que se imagina, porque a negação **não muda de forma**: entra {ne} na frente e {pas} atrás, e o verbo fica intacto.

- {Ne parle pas} — duas sílabas nasais e o verbo, só isso
- {Ne viens pas}, {Ne faites pas}, {Ne prends pas}
- {N’y pense pas} — o {y} absorve o {ne}

A única complicação é o uso de {ne}, que na fala cotidiana de boa parte da Europa é cada vez mais raro, mas que a norma mantém obrigatório: {Ne parle pas}, e não {Parle pas}.

## Pronomes e hiatos

No afirmativo, os pronomes **vêm depois** do verbo e se ligam a ele por hífen, porque a terminação nasal do verbo soa como consoante e o encontro seria impossível ({donne-mo} é impronunciável; o que se ouve é {donnemoi}, com o {e} engolido).

| Tipo | Exemplos | Posição |
|---|---|---|
| COD | {donne-moi}, {dis-lui}, {levez-la} | depois do verbo |
| COI | {parle-nous}, {réponds-lui} | depois do verbo |
| Pronome + verbo {y} | {donnez-m’en} | antes do {y} |

No negativo, com a forma de duas palavras {ne … pas}, os pronomes **sobem** para antes do verbo: {Ne me donne pas}, {Ne lui parle pas}. Com a forma de uma palavra ({ne … point}, {ne … jamais}, {ne … rien}), o verbo fica em forma negativa e os pronomes ficam grudados: {Ne lui donnez point}, {Ne me parlez jamais}, {Ne me donnez rien}.

## Verbos irregulares

Os dois mais frequentes da língua não seguem a regra. Vale decorar os dois inteiros:

| Infinitivo | tu | nous | vous |
|---|---|---|---|
| être | sois | soyons | soyez |
| avoir | aie | ayons | ayez |
| savoir | sache | sachons | sachiez |
| vouloir | veuille | veuillons | voulez |

O resto da lição é aplicação. Na leitura bíblica em Segond, o imperativo é o modo por excelência: é ele que dá as leis, os mandamentos e os conselhos. Em {Tu ne convoiteras pas}, o futuro {convoiteras} — futuro ou condicional, as duas leituras servem — precede o {pas}: o inteiro {ne … pas} fica *entre* o sujeito e o verbo, e o verbo fica no último lugar. É a ordem francesa exata:

1. pronomes de sujeito
2. {ne}
3. verbo conjugado
4. {pas, jamais, rien, plus, point}
5. pronomes obliques

Repare que {ne} e {pas} **cercam** o verbo, e que os pronomes indiretos ficam depois de {pas}, colados nele. Em {Ne nous parle pas}, o {pas} governa {nous}: ele fica grudado no pronome, não no verbo. E todo imperativo negativo herda a negação do latim {ne … pas} — e nenhuma língua românica mais antiga conservou o anel duplo de negação.`),
  vocab: [
    V('parle', 'parler', 'fala (2.ª sing., sem {s})'),
    V('parlez', 'parler', 'falem (2.ª pl. formal)'),
    V('parlons', 'parler', 'falemos'),
    V('ne parle pas', 'parler', 'não fale / não fales'),
    V('prends', 'prendre', 'pega (imperativo irregular)'),
    V('donne-moi', 'donner', 'dá-me (COD depois do verbo)'),
    V('dis-lui', 'dire', 'diz-lhe (COI, hífen obrigatório)'),
    V('donnez-m’en', 'donner', 'dai-me disso (pronome + {y})'),
    V('sois', 'être', 'seja (irregular)'),
    V('soyez', 'être', 'sejam (irregular)'),
    V('ayez', 'avoir', 'tenham (irregular)'),
    V('ne me parle pas', 'parler', 'não me fale (pronomes sobem no negativo)'),
    V('ne lui donnez rien', 'donner', 'não lhe dê nada ({ne … rien})'),
    V('n’y pense pas', 'penser', 'não penses nisso'),
    V('tu ne convoiteras pas', 'convoiter', 'não cobiçarás (o décimo mandamento)'),
    V('va-t-en', 'aller', 'vai-te embora (hífen igual ao {s} do {tu})'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T(
      'Em «{Ne me parle pas}», por que o pronome {me} vem antes do verbo, e não depois como no afirmativo?',
    ),
    options: [
      T('Porque o negativo de duas palavras ({ne … pas}) desloca os pronomes para antes do verbo'),
      T('Porque {me} deixa de ser pronome e vira artigo indefinido'),
      T('Porque o imperativo negativo exige o {vous} em vez do {tu}'),
      T('Porque depois de {ne} nunca há hífen nem pronome oblíquo'),
    ],
    answer: 0,
    hint: T(
      'Regra §3: com {ne … pas} os pronomes sobem; com {ne … rien}/{ne … jamais} ficam grudados no verbo.',
    ),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Imperativo de {être} em «vous ___ amis» (vocativo de Deus): s___z'),
      answer: 'oyez',
      hint: T('É a forma irregular do {vous} de {être}, sem o {x}.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a forma ao valor da terminação'),
      pairs: [
        { a: T('parlons'), b: T('1.ª pl. — inclusivo: «falemos»') },
        { a: T('parlez'), b: T('2.ª pl. — polidez ou grupo: «falem»') },
        { a: T('sois'), b: T('2.ª sing. irregular de {être}') },
        { a: T('ayez'), b: T('2.ª pl. irregular de {avoir}') },
      ],
      answer: [0, 1, 2, 3],
    },
    {
      kind: 'choose',
      prompt: T('Qual das frases aplica corretamente o {-s} do {tu}?'),
      options: [
        T('{Tu parles?} — {s} antes de {q}, que é consoante'),
        T('{Prie pour nous} — sem {s}, porque vem {nous}'),
        T('{Parle?} — sem {s}, porque a frase termina ali'),
        T('{Écoute-moi} — sem {s}, porque {moi} é palavra vazia'),
      ],
      answer: 0,
      hint: T(
        'A {s} volta quando a palavra seguinte começa por consoante, e cai quando começa por vocal ou {h} mudo.',
      ),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'O imperativo tem **três** formas: {tu}, {nous}, {vous}. Para {nous} e {vous}, é o presente sem {s}; para {tu}, é o presente sem a terminação de {-er}. Não há forma para {je}, {il} nem {ils}.',
      ),
    },
    {
      n: '2',
      text: T(
        'Os verbos em {-er} do singular {tu} tiram o {s} antes de vocal ou {h} mudo: {parle}, {mange}, {aide}. Diante de consoante ou na pausa, o {s} volta soado: {tu parles}, {tu manges}.',
      ),
    },
    {
      n: '3',
      text: T(
        'No afirmativo os pronomes ficam **depois** do verbo, unidos por hífen: {donne-moi}, {dis-lui}, {donnez-m’en}. No negativo de duas palavras sobem para antes do verbo: {Ne me donne pas}. No de uma palavra ficam grudados: {Ne me donnez rien}.',
      ),
    },
    {
      n: '4',
      text: T(
        'O negativo não altera o verbo: {ne} entra, {pas} sai, e nada mais. {Ne parle pas}, {Ne viens pas}, {N’y pense pas} — com {y}, o {ne} vira {n’}.',
      ),
    },
    {
      n: '5',
      text: T(
        'Decore os irregulares {être} ({sois, soyons, soyez}) e {avoir} ({aie, ayons, ayez}): são as formas mais frequentes de todo o modo e aparecem em {Sois{,} le Bien,} «Sê tu o Bem» e em {Ayez de la compassion} «Tende compaixão».',
      ),
    },
  ],
  notes: [
    {
      label: T('O hífen é um som, não uma pontuação'),
      text: T(
        'Em {donne-moi} o hífen marca um {e} que desaparece na fala: ouvimos {donnemoi}, com o {e} de {donne} engolido pelo nasal. É por isso que o hífen não é decorativo — sem ele, a escrita descreveria {donnemo i}, que ninguém pronuncia. O mesmo acontece com o {s} de {tu}: {parle} e {parles} são a mesma palavra escrita de dois jeitos, e o hífen de {va-t-en} é esse mesmo {s} encontrando o {y}. A ortografia francesa é, em boa parte, uma transcrição fonética disfarçada de norma.',
      ),
    },
    {
      label: T('O mandamento que não se traduz'),
      text: T(
        'Os dez mandamentos na versão Segond misturam dois modos. «Tu n’auras pas d’autres dieux» traz {n’auras} — futuro/condicional de {avoir} — e «Tu ne convoiteras pas» traz {convoiteras}. Nos dois, o verbo fica no último lugar e {ne … pas} o cerca: é a negação do latim {-ne … pas} transportada sem mudar uma vírgula. A polêmica sobre a correção de {ne … pas} para {pas … point} o mostra. E o nono e décimo mandamentos, no texto de Segond, vêm inteiramente no modo que acabamos de estudar.',
      ),
    },
  ],
  examples: [
    { text: 'Parle.', gloss: T('fala! (2.ª sing., {s} caída)') },
    { text: 'Écoute-moi bien.', gloss: T('escute-me bem (pronome depois do verbo)') },
    { text: 'Ne prions pas.', gloss: T('não vamos orar (plural inclusivo + {ne … pas})') },
    { text: 'Dis-lui la vérité.', gloss: T('diz-lhe a verdade ({dire} + COI)') },
    { text: 'N’y touche pas.', gloss: T('não mexa nisso ({ne} absorvido por {y})') },
    { text: 'Donnez-m’en deux.', gloss: T('dai-me dois ({donner} + {m’} + {en})') },
    {
      text: 'Priez pour vos Enemis.',
      gloss: T('orem pelos vossos inimigos ({pour} regendo o infinitivo)'),
    },
    {
      text: 'Ayez de la compassion.',
      gloss: T('tenham compaixão (imperativo irregular de {avoir})'),
    },
    { text: 'Va-t-en.', gloss: T('vai embora ({va} + {t’} + {en})') },
    {
      text: 'Tu ne convoiteras pas.',
      gloss: T('não cobiçarás (10.º mandamento, verbo em último lugar)'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — formation of the imperative'),
      head: [T('Grupo'), T('tu'), T('nous'), T('vous')],
      rows: [
        ['parler', 'parle', 'parlons', 'parlez'],
        ['finir', 'finis', 'finissons', 'finissez'],
        ['vendre', 'vends', 'vendons', 'vendez'],
        ['être', 'sois', 'soyons', 'soyez'],
        ['avoir', 'aie', 'ayons', 'ayez'],
        ['savoir', 'sache', 'sachons', 'sachiez'],
        ['vouloir', 'veuille', 'veuillons', 'voulez'],
        ['prendre', 'prends', 'prenons', 'prenez'],
      ],
    },
    {
      caption: T('Tabela 2 — posição dos pronomes no imperativo'),
      head: [T('Contexto'), T('Ordem'), T('Exemplo'), T('Glosa')],
      rows: [
        [
          T('afirmativo'),
          'verbo + hífen + pronomes',
          T('{donne-moi le livre}'),
          T('dá-me o livro'),
        ],
        [
          T('negativo {ne … pas}'),
          '{ne} + pronomes + verbo + {pas}',
          T('{Ne me donne pas le livre}'),
          T('não me dê o livro'),
        ],
        [
          T('negativo {ne … rien}'),
          '{ne} + verbo negativo + pronomes',
          T('{Ne me donnez rien}'),
          T('não me dê nada'),
        ],
        [T('com {y}'), 'verbo + hífen + pronome + {y}', T('{Donnez-m’en}'), T('dai-me disso')],
        [T('com {ne} + {y}'), '{N’} + verbo + {pas}', T('{N’y touche pas}'), T('não mexa nisso')],
      ],
    },
  ],
};

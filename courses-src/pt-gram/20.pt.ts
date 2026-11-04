import { C, T, V } from '../shared.mts';

export default {
  id: 20,
  section: T('A regência, a crase e a colocação pronominal'),
  title: T('Colocação pronominal em detalhe'),
  subtitle: T('Aplicação das regras de próclise, ênclise e mesóclise'),
  body: C(`**Visão geral.** A {palavra atrativa} determina a próclise, e são cinco os tipos que puxam o pronome: {negação}, {interrogação}, {relativo}, {conjunção} e {pronome}.

**Regra 1.** Verbos como {dar}, {fazer} e {trazer} exigem {ênclise} mesmo com atrativa atrás: em {Deus me deu}, o pronome fica depois do verbo porque o verbo manda.

**Regra 2.** A {mesóclise} só existe com infinitivo e auxiliar: em {dir-me-ás} e {amá-lo-emos}, o pronome fica entre as duas partes da locução.

**Regra 3.** A {se} de cliticização é o pronome oblíquo do verbo: em {lavou-se}, o {se} vem de {lavar}, e o verbo já é pronominal por natureza.

**Regra 4.** O grego resolve o mesmo problema por {enclise} e pela terminação do verbo, e é por isso que a posição grega e a portuguesa raramente coincidem.

**Aplicação.** Em {Dir-me-ás que isto é suave}, a mesóclise {dir-me-ás} é futuro do indicativo, e o pronome está dentro do verbo. No grego original (διελθόντες), o pronome {αὐτόν} vem enclítico, colado ao particípio, e a posição grega é sempre pós-verbal. A mesóclise portuguesa é uma solução para um problema que o grego não tinha: é o português que precisa acomodar dois verbos num só lugar.

**Verificação.** Para um pronome, pergunte na ordem: há **negação**, **interrogação** ou **conjunção** antes do verbo? Há outro pronome? O verbo é um dos de **ênclise obrigatória**? Se a resposta é não para as três e o verbo é um auxiliar de futuro, a {mesóclise} é possível. E em qualquer caso: a posição **não** é livre, ela é decidida pela estrutura sintática, e não pela fluência do falante.`),
  vocab: [
    V('palavra atrativa', 'palavra atrativa', 'palavra que provoca próclise'),
    V('verbo conjugado', 'verbo conjugado', 'verbo com pessoa e número'),
    V('locução verbal', 'locução verbal', 'infinitivo mais auxiliar'),
    V('próclise', 'próclise', 'pronome antes do verbo'),
    V('ênclise', 'ênclise', 'pronome depois do verbo'),
    V('mesóclise', 'mesóclise', 'pronome entre infinitivo e auxiliar'),
    V('dir-me-ás', 'dir-me-ás', 'mesóclise com auxiliar {ás}'),
    V('não me veja', 'não me veja', 'próclise por causa de {não}'),
    V('dir-me', 'dir-me', 'mesóclise com auxiliar {r}'),
    V('διελθόντες', 'διελθόντες', 'particípio grego com pronome enclítico'),
  ],
  rules: [
    {
      n: '§1',
      text: T(
        'A {palavra atrativa} determina a próclise, e são cinco os tipos que puxam o pronome: {negação}, {interrogação}, {relativo}, {conjunção} e {pronome}.',
      ),
    },
    {
      n: '§2',
      text: T(
        'Verbos como {dar}, {fazer} e {trazer} exigem {ênclise} mesmo com atrativa atrás: em {Deus me deu}, o pronome fica depois do verbo porque o verbo manda.',
      ),
    },
    {
      n: '§3',
      text: T(
        'A {mesóclise} só existe com infinitivo e auxiliar: em {dir-me-ás} e {amá-lo-emos}, o pronome fica entre as duas partes da locução.',
      ),
    },
    {
      n: '§4',
      text: T(
        'A {se} de cliticização é o pronome oblíquo do verbo: em {lavou-se}, o {se} vem de {lavar}, e o verbo já é pronominal por natureza.',
      ),
    },
    {
      n: '§5',
      text: T(
        'O grego resolve o mesmo problema por {enclise} e pela terminação do verbo, e é por isso que a posição grega e a portuguesa raramente coincidem.',
      ),
    },
  ],
  notes: [
    {
      label: T('O arcaísmo que a Escritura preserva'),
      text: T(
        'As traduções bíblicas em português antigo preservam formas como {dir-me-ás} e {falar-te-ei}, que o uso corrente abandonou. Não é erro: é o registro de uma língua que ainda não tinha perdido a {mesóclise}. Quem lê essas formas como erro de digitação perde a informação de que o texto é antigo, e a informação está no próprio texto.',
      ),
    },
    {
      label: T('A {se} que não é a {se} da crase'),
      text: T(
        'Em {falar-se}, o {se} é pronome oblíquo: o {a} da preposição e o {o} do artigo fundiram-se, e sobrou o {se} do verbo. Em {a casa}, o {a} é artigo e não tem nada a ver com pronome. São três ocorrências de {a} numa frase só, e cada uma faz um trabalho diferente.',
      ),
    },
  ],
  examples: [
    {
      text: 'Dir-me-ás que isto é suave',
      gloss: T('Mesóclise: o pronome fica entre {dir} e {ás}.'),
    },
    {
      text: 'falar-te-ei',
      gloss: T('Mesóclise com o auxiliar {-ei}: o pronome fica dentro da locução.'),
    },
    {
      text: 'não me veja',
      gloss: T('Próclise: a palavra atrativa {não} puxa o pronome para a frente.'),
    },
    {
      text: 'Deus me deu',
      gloss: T(
        'Ênclise obrigatória: o verbo {deu} exige o pronome depois, mesmo com sujeito à frente.',
      ),
    },
    {
      text: 'Quem me viu disse',
      gloss: T('O pronome interrogativo {Quem} provoca a próclise de {me}.'),
    },
    {
      text: 'viu-me',
      gloss: T('Ênclise: sem atrativa, o pronome vai para depois do verbo {viu}.'),
    },
    {
      text: 'lavou-se',
      gloss: T('A {se} é pronome oblíquo do verbo {lavar}, e a forma é pronominal.'),
    },
    {
      text: 'amemo-nos',
      gloss: T('A mesma locução escrita sem hiatos: {amemo-nos} é a forma tradicional.'),
    },
    {
      text: 'διελθόντες',
      gloss: T('Particípio grego: o pronome enclítico vem depois da palavra acentuada.'),
    },
  ],
  tables: [
    {
      caption: T('Verbos que exigem o pronome depois'),
      head: [T('Grupo'), T('Verbos'), T('Com {não}'), T('Sem {não}')],
      rows: [
        [
          T('com objeto direto'),
          T('{dar}, {ver}, {fazer}'),
          T('{Deus não me deu}'),
          T('{Deus me deu}'),
        ],
        [T('com objeto indireto'), T('{falar}, {responder}'), T('{não me falou}'), T('{falou-me}')],
        [T('com os dois objetos'), T('{trazer}'), T('{não me trouxe}'), T('{trouxe-me}')],
        [T('com infinitivo'), T('{deixar}, {ver}'), T('{não me deixou}'), T('{deixou-me}')],
        [T('com locução'), T('{ir}, {vir}'), T('{não me vejo}'), T('{vou-me}')],
        [T('com {se} próprio'), T('{lavar-se}'), T('{não se lavou}'), T('{lavou-se}')],
      ],
    },
    {
      caption: T('Posição do pronome por tempo'),
      head: [T('Tempo'), T('Com auxiliar'), T('Sem auxiliar'), T('Posição')],
      rows: [
        [T('presente'), T('{está falando}'), T('{fala}'), T('ênclise')],
        [T('pretérito'), T('{havia falado}'), T('{falou}'), T('ênclise')],
        [T('futuro'), T('{vai falar}'), T('{falará}'), T('mesóclise possível')],
        [T('infinitivo'), T('{dizer}'), T('{dir}'), T('mesóclise com {r}')],
        [T('gerúndio'), T('{está falando}'), T('{falando}'), T('ênclise')],
        [T('particípio'), T('{tendo falado}'), T('{falado}'), T('ênclise')],
      ],
    },
    {
      caption: T('As cinco palavras que puxam o pronome'),
      head: [T('Tipo'), T('Palavras'), T('Frase'), T('Posição')],
      rows: [
        [T('negativas'), T('{não}, {nem}, {nunca}'), T('{não me veja}'), T('próclise')],
        [T('interrogativas'), T('{quem}, {qual}, {que}'), T('{Quem me viu}'), T('próclise')],
        [T('relativas'), T('{que}, {o qual}'), T('{a lei que me deram}'), T('próclise')],
        [T('conjunções'), T('{que}, {se}, {como}'), T('{Sei que ele sabe}'), T('próclise')],
        [T('pronomes'), T('{me}, {te}, {nos}'), T('{me diz que sim}'), T('próclise')],
      ],
    },
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Em {Deus me deu}, o pronome {me} está em ênclise porque:'),
    options: [
      T('o verbo {deu} exige o pronome depois, mesmo com sujeito à frente'),
      T('o sujeito {Deus} vem primeiro, e o pronome segue o sujeito'),
      T('não há palavra atrativa antes do verbo'),
      T('o verbo é um auxiliar de futuro'),
    ],
    answer: 0,
    hint: T('Os verbos {dar}, {fazer} e {trazer} pedem o pronome depois, sempre.'),
  },
  exercises: [
    {
      kind: 'choose',
      prompt: T('A mesóclise só acontece:'),
      options: [
        T('com locução verbal, entre o infinitivo e o auxiliar'),
        T('com qualquer verbo no presente do indicativo'),
        T('com verbo transitivo sem objeto indireto'),
        T('com a palavra {não} antes do verbo'),
      ],
      answer: 0,
      hint: T('O que define a mesóclise é haver dois verbos na mesma locução.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue a frase à posição do pronome.'),
      pairs: [
        { a: T('{dir-me-ás}'), b: T('mesóclise') },
        { a: T('{não me veja}'), b: T('próclise') },
        { a: T('{viu-o}'), b: T('ênclise') },
        { a: T('{lavou-se}'), b: T('ênclise com {se} pronominal') },
      ],
      answer: ['a', 'b', 'c', 'd'],
    },
    {
      kind: 'fill',
      prompt: T('A palavra que provoca a próclise chama-se ______.'),
      answer: 'atrativa',
      hint: T('Em {não me veja}, o {não} é a palavra atrativa.'),
    },
  ],
};

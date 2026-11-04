import { C, T, V } from '../shared.mts';

export default {
  id: 4,
  title: T('Os artigos indefinidos'),
  subtitle: T('un/una/unos/unas — e quando somem'),
  section: T('Os artigos'),
  body: C(`## O sistema

O indefinido traduz o "um" português e o "a" indefinite inglês: {un} (m. sg.), {una} (f. sg.), {unos} «uns» e {unas} «umas» (plural). O plural **não** significa "alguns" por acaso: é o plural normal, {un libro}/{unos libros}, {una casa}/{unas casas}.

Como o definido, {un} vira {un agua} «uma água» quando o feminino começa em {a} tônico.

## Quando o artigo INDEFINIDO some

1. **Após {ser}** com profissão, religião ou nacionalidade: {Es médico} «é médico» · {Es española} «é espanhola» · {Son estudiantes} «são estudantes». Mas se entra um **adjetivo**, o {un} volta: {Es un buen médico} · {Fue una estudiante excelente}.
2. **Com {otro}, {cierto}, {algun}, {cada}, {varios}, {todos}, {muchos}**: {otro día} «outro dia» · {cada uno} «cada um» · {algún día} «algum dia».
3. **Com substantivos contáveis já definidos pelo contexto**: {Tengo libros} «tenho livros» (não é preciso dizer quantos).
4. Em expressões fixas de medida ou quantidade: {un poco de} «um pouco de» · {una taza de} «uma xícara de».

## {uno} como pronome

{uno} (nunca {un uno}!) é pronome indefinite pessoal: {Uno nunca sabe} «ninguém sabe» · {Uno solo} «só um» · {Uno mismo} «o próprio».

Ex.: {a cada uno conforme su capacidad} «a cada um conforme sua capacidade» (Mt 25:15; Bible in Spanish) — o {a} é preposição, {cada uno} já é «cada um».`),
  vocab: [
    V('un', 'un', 'um'),
    V('una', 'un', 'uma'),
    V('unos', 'un', 'uns (plural!)'),
    V('otro día', 'otro', 'outro dia (sem "un"!)'),
    V('cada uno', 'uno', 'cada um'),
    V('uno', 'uno', 'alguém, um (pronome!)'),
    V('un agua', 'agua', 'uma água (eufonia!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('"Es maestro" × "Es un buen maestro"?'),
    options: [
      T('Iguais'),
      T('Sem adjetivo, sem "un"; COM adjetivo, volta o "un"'),
      T('O contrário'),
      T('Erro nas duas'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete sem artigo: "___ buena maestra" (Ela é uma boa professora)'),
      answer: 'una',
      hint: T('Com adjetivo, o «un» volta.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase segue a regra?'),
      options: [
        T('Tengo un libros'),
        T('Tengo otros libros'),
        T('Tengo unos libros'),
        T('Tengo libros'),
      ],
      answer: 1,
      hint: T('Regra §2: com otro nunca «un».'),
    },
    {
      kind: 'fill',
      prompt: T('Substitua por «uno»: "Ningún hombre puede ___ mismo" (nenhum homem pode...)'),
      answer: 'salvar',
      hint: T('Fórmula: poder uno mismo + verbo.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Profissões e nacionalidades após ser dispensam un: Es maestro — mas Es un buen maestro COM adjetivo.',
      ),
    },
    { n: '2', text: T('Com outro/cierto/tal, nunca un: otro día (outro dia!).') },
    { n: '3', text: T('Uno é pronome e nunca leva un: uno nunca sabe, cada uno, uno mismo.') },
  ],
  notes: [
    {
      label: T('Lo = o + lo'),
      text: T(
        'O {lo} não tem sozinho: é {a} + {lo} com {a} absorvido. Por isso {lo vi} pode ser "o vi" ou "eu o vi" — o que resolve o texto, não a gramática.',
      ),
    },
  ],
  examples: [
    { text: '{un libro}', gloss: T('Um livro.') },
    { text: '{unos días}', gloss: T('Uns dias.') },
    { text: '{cada uno}', gloss: T('Cada um (Mt 25:15).') },
    { text: '{otro día}', gloss: T('Outro dia — sem «un».') },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Indefinidos'),
      head: [T('Número'), T('Masculino'), T('Feminino')],
      rows: [
        [T('Singular'), '{un}', '{una}'],
        [T('Plural'), '{unos}', '{unas}'],
      ],
    },
    {
      caption: T('Tabela 2 — Onde o indefinido aparece e onde some'),
      head: [T('Contexto'), T('Com indefinido'), T('Sem indefinido')],
      rows: [
        [T('profissão (ser)'), '{Es un médico}', '{Es médico}'],
        [T('profissão + adjetivo'), '{Es un buen médico}', '—'],
        [T('nacionalidade'), '{Es un americano}', '{Es americano}'],
        [T('contável vago'), '—', '{Tengo libros}'],
        [T('quantificadores'), '—', '{otro día}, {algún día}'],
      ],
    },
  ],
};

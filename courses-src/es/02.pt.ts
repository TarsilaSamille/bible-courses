import { C, T, V } from '../shared.mts';

export default {
  id: 2,
  title: T('A ortografia e os acentos'),
  subtitle: T('agudas, graves, esdrújulas — onde cai o acento'),
  section: T('O espanhol'),
  body: C(`## Três classes de palavras

O espanhol só precisa de três categorias, e a categoria decide se o acento é escrito:

**Agudas** (última sílaba tônica): {casa}, {libro}, {papel}, {Dios}, {Jesús}.
**Graves** (penúltima sílaba tônica): {cantar}, {luz}, {vivir}, {árbol} «árvore».
**Esdrújulas** (antepenúltima sílaba tônica): {música}, {teléfono}, {págena}? não — {página} «página», {rápido}.

## A regra de ouro

Palavra terminada em **vogal, {n} ou {s}** é **grave** e NÃO leva acento: {casa}, {libro}, {hablan}, {valientes}.
Palavra terminada em **qualquer outra consoante** é **aguda** e NÃO leva acento: {hablar}, {luz}, {papel}, {fiel}.

O acento escrito aparece **só para quebrar a regra**:
• {habló} «falou», {cantó} «cantou» — agudas terminadas em vogal (quebram §1).
• {lápiz}, {útil} — graves terminadas em consoante (quebram §2).
• {música}, {teléfono}, {rápido} — esdrújulas: **sempre** com acento.

## Casos que enganam

• {José} vs {José}? Não: {josé} é nome próprio; o comum é {josefina}. O ponto real: nome próprio terminado em silde e tônico fica AGUDO e leva acento mesmo acabando em {n}/{s}/{vogal}: {Nicolás}, {Jesús}, {Papá}.
• {María}, {río}, {día} — vogais adjacentes que NÃO formam ditongo: cada uma é tônica e a sílaba é esdrújula, logo acento obrigatório.
• {tú}, {él}, {sí}, {más}, {mí} — acentos **diacríticos**: o acento não marca só o som, marca o **significado**.
• {solo} × {sólo} — a RAE aboliu a distinção; hoje **sempre** {solo}, sem acento.

## Acento gráfico: interrogação e exclamação

Toda pergunta e exclamação leva acento (a RAE escreve o traço também nos pontos, exceto no ponto final): {¿Dónde está Dios?} · {¡Santo sea!} · {¿Cuánto tiempo?}

Ex.: {¿Hablas español?} «Falas espanhol?» — leitura bíblica: {¿Qué es la verdad?} (Jo 18:38).`),
  vocab: [
    V('habló', 'hablar', 'falou (aguda!)'),
    V('lápiz', 'lápiz', 'lápis'),
    V('él', 'él', 'ele (× el artigo!)'),
    V('tú', 'tú', 'tu (× tu possessivo!)'),
    V('Jesús', 'Jesús', 'Jesus (aguda em s!)'),
    V('música', 'música', 'música (esdrújula!)'),
    V('árbol', 'árbol', 'árvore (grave quebrada!)'),
    V('cuánto', 'cuánto', 'quanto (interrogativo!)'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Por que "habló" leva acento?'),
    options: [
      T('Porque é aguda terminada em vogal (quebra a regra!)'),
      T('Sempre se acentua verbo'),
      T('É plural'),
      T('Por acaso'),
    ],
    answer: 0,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Palavra esdrújula («música») leva acento? Escreva sempre ou nunca.'),
      answer: 'siempre',
      hint: T('Regra §2, terceiro item.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual par só muda de SIGNIFICADO com acento?'),
      options: [T('hablar / hablaré'), T('tú / tu'), T('casa / casas'), T('papel / papeles')],
      answer: 1,
      hint: T('Acento diacrítico (§3).'),
    },
    {
      kind: 'fill',
      prompt: T('Qual das duas se escreve sem acento hoje: solo ou sólo?'),
      answer: 'solo',
      hint: T('A RAE aboliu a distinção.'),
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'Vogal/N/S no fim = grave sem acento (casa, hablan); outra consoante = aguda sem acento (hablar, luz).',
      ),
    },
    {
      n: '2',
      text: T(
        'Acento só ao quebrar a regra: habló (aguda em vogal!), lápiz, música (esdrújulas sempre!).',
      ),
    },
    {
      n: '3',
      text: T(
        'Acento diacrítico muda o sentido: el (artigo) × él (ele); tu × tú; mi × mí; si × sí.',
      ),
    },
    {
      n: '4',
      text: T('Perguntas e exclamações sempre com ¿...? e ¡...! (RAE também nos pontos).'),
    },
  ],
  notes: [
    {
      label: T('Europeu × americano:'),
      text: T(
        'Acentuação e ortografia são praticamente iguais nos dois mundos. Diferenças reais: {vosotros} (só na Espanha, {ustedes} na América), {vale} «ok», {ordenador} × {computadora}, {coche} × {carro}. A accentuação do texto bíblico (Reina-Valera) segue a norma castelhana, compartilhada pelas duas Américas.',
      ),
    },
  ],
  examples: [
    { text: '{habló}', gloss: T('Falou (aguda em vogal!).') },
    { text: '{él}', gloss: T('Ele (× el, artigo!).') },
    { text: '{Jesús}', gloss: T('Jesus (aguda em S!).') },
    { text: '{música}', gloss: T('Música (esdrújula: acento obrigatório!).') },
    {
      text: '¿Qué es la verdad?}',
      gloss: T('O que é a verdade? (Jo 18:38 — interrogativa com acento gráfico!).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Classe × acento'),
      head: [T('Terminação'), T('Classe natural'), T('Exemplo (sem acento)'), T('Quebra a regra')],
      rows: [
        [T('vogal'), T('grave'), T('{casa}, {libro}'), T('{habló}, {canción}')],
        [T('-n'), T('grave'), T('{cantan}, {pan}'), T('{cantón}, {Jesús}')],
        [T('-s'), T('grave'), T('{valientes}, {libros}'), T('{papás}, {días}')],
        [T('outra consoante'), T('aguda'), T('{hablar}, {papel}'), T('{útil}, {lápiz}')],
        [T('3+ sílabas, tônica na 3ª'), T('esdrújula'), T('—'), T('{música}, {teléfono}')],
      ],
    },
    {
      caption: T('Tabela 2 — Homófonos que o acento separa'),
      head: [T('Com acento'), T('Sentido'), T('Sem acento'), T('Sentido')],
      rows: [
        ['{él}', T('ele'), '{el}', T('o (artigo)')],
        ['{tú}', T('tu (2ª pessoa)'), '{tu}', T('teu (possessivo)')],
        ['{sí}', T('sim'), '{si}', T('se (condicional)')],
        ['{mí}', T('mim'), '{mi}', T('meu')],
        ['{este}', T('este (demo.)'), '{este}', T('este (indef.)')],
      ],
    },
  ],
};

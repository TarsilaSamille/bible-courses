import { C, T, V } from '../shared.mts';

export default {
  id: 27,
  title: T('A voz passiva'),
  subtitle: T('werden mais o particípio, o agente por {von} e o {Passivsatz}'),
  section: T('Os verbos'),
  body: C(`## A forma

O passivo alemão é feito de **werden** no presente mais o **particípio** do verbo principal. O *werden* vai conjugado na segunda posição e o particípio fecha a oração: *Der Brief wird geschrieben*, *Die Fenster wurden gestrichen*, *Die Rechnung ist bezahlt worden*. Não há auxiliar: quem traz a ação é o próprio *werden*, e aquilo que sofre a ação é o particípio.

Quem faz a ação entra com **von** mais Dativo: *Der Brief wird von meinem Bruder geschrieben*. Em muitos casos, porém, a informação é tão importante quanto a ação, e o agente vira um substantivo com o sufixo **-ung** ou **-er**: *die Übersetzung, die Lösung, der Verfasser, der Leser*. É o que se chama **Passivsatz**: a pessoa que age é tratada como uma coisa.



## O agente é facultativo

O grande privilégio do passivo alemão é dispensar o sujeito. Sem *von*, sem substantivo, a frase fica sem agente declarado: *Das Haus wird gebaut*, *Es wurde viel gearbeitet*. Isso não é ausência de informação: é a informação de que o agente é irrelevante para o que se quer dizer. Em Lutero o recurso é constante, porque o texto bíblico interessa pelo facto, não por quem o executa.

E a grande vantagem é a reordenação: o objeto pode ser colocado onde o sujeito estaria, o particípio vai para o fim, e a ação fica em foco. Uma frase ativa como *Ich habe das Buch gelesen* torna-se *Das Buch ist von mir gelesen worden*.

## O duplo passivo

Há ainda uma terceira possibilidade, mais rara e muito alemã: **modal** + *werden* + particípio. *Die Rechnung muss bezahlt werden*, *Die Fenster müssen gestrichen werden*, *Er soll entlassen werden*. Aqui a construção não tem agente nem objeto, e o sentido é de necessidade ou de regra. É a passiva que as gramáticas escolares ensinam primeiro.

## O essencial

O passivo alemão troca o sujeito pelo particípio. O que era o sujeito na ativa vira o objeto de referência na passiva, e o agente, se interessar, vira preposição com *von* ou substantivo terminado em *-er* ou *-ung*.`),
  vocab: [
    V('werden', 'werden', 'auxiliar da passiva, sem sentido de tornar-se'),
    V('wird geschrieben', 'schreiben', 'é escrito (passivo presente)'),
    V('wurde geöffnet', 'öffnen', 'foi aberto (passivo no Präteritum)'),
    V('ist bezahlt worden', 'bezahlen', 'foi pago (Perfekt passivo com worden)'),
    V('von meinem Bruder', 'Bruder', 'pelo meu irmão (agente com von)'),
    V('die Übersetzung', 'Übersetzung', 'a tradução (agente nominalizado em -ung)'),
    V('der Verfasser', 'Verfasser', 'o autor (agente em -er)'),
    V('muss bezahlt werden', 'bezahlen', 'tem de ser pago (modal + passivo)'),
    V(
      'Der Brief wird von meinem Bruder geschrieben.',
      'schreiben',
      'A carta é escrita pelo meu irmão.',
    ),
    V('Die Tür wurde geöffnet.', 'öffnen', 'A porta foi aberta.'),
    V('Die Rechnung ist bezahlt worden.', 'bezahlen', 'A conta foi paga (estado resultante).'),
    V('Es wurde viel geredet.', 'reden', 'Falou-se muito (agente anônimo).'),
    V('Er soll entlassen werden.', 'entlassen', 'Ele deve ser demitido (regra).'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('Como se forma o Perfekt passivo de {schreiben}?'),
    options: [
      T('ist geschrieben worden'),
      T('hat geschrieben worden'),
      T('wird geschrieben werden'),
      T('ist geschrieben sein'),
    ],
    answer: 0,
    hint: T('Regra §2: ist + Partizip II + worden.'),
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete o passivo do Präteritum: Die Tür wurde ___.'),
      answer: 'geöffnet',
      hint: T('Präteritum da passiva: wurde + Partizip II.'),
    },
    {
      kind: 'choose',
      prompt: T('Qual frase conserva a informação de que alguém age?'),
      options: [
        T('Der Brief wird von meinem Bruder geschrieben.'),
        T('Der Brief wird geschrieben.'),
        T('Es wird geschrieben.'),
        T('Der Brief muss geschrieben werden.'),
      ],
      answer: 0,
      hint: T('Regra §3: só von mais Dativo declara o agente.'),
    },
    {
      kind: 'fill',
      prompt: T('Agente nominalizado de {übersetzen}: die ___'),
      answer: 'Übersetzung',
      hint: T('Regra §4: substantivos em -ung nominalizam o agente.'),
    },
    {
      kind: 'match',
      prompt: T('Ligue o tempo à construção passiva'),
      pairs: [
        { a: T('Presente'), b: T('wird geschrieben') },
        { a: T('Präteritum'), b: T('wurde geschrieben') },
        { a: T('Perfekt'), b: T('ist geschrieben worden') },
        { a: T('Futur I'), b: T('wird geschrieben werden') },
      ],
      answer: [0, 1, 2, 3],
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'A passiva é werden no presente mais o particípio, e o particípio fecha a oração: Die Tür wird geöffnet.',
      ),
    },
    {
      n: '2',
      text: T(
        'No Perfekt, o particípio é seguido obrigatoriamente por worden: ist geöffnet worden. E o auxiliar é sempre ist, nunca hat.',
      ),
    },
    {
      n: '3',
      text: T(
        'O agente entra com von mais Dativo, ou desaparece: Der Brief wird von meinem Bruder geschrieben.',
      ),
    },
    {
      n: '4',
      text: T(
        'Se o sujeito ativo for pessoa, ele não vira von mas um substantivo em -er ou -ung: der Verfasser, die Übersetzung.',
      ),
    },
    {
      n: '5',
      text: T(
        'No imperativo e no particípio adjectives a passiva perde o werden por completo: Öffne die Tür! / Sei gelobt, mein Gott!',
      ),
    },
  ],
  notes: [
    {
      label: T('Por que o Novo Testamento é um livro passivo'),
      text: T(
        'A tradução do grego alterou o que o texto diz. Nos textos gregos a ação vem para a frente, com o verbo no início e o sujeito marcado: *ἐλάβεν ὁ θεὸς τὸν Ἰσραήλ*. Luther traduz com a ordem alemã — verbo conjugado em segundo lugar, objeto em terceiro — e o resultado é uma frase gramaticalmente activa: *Israel ist von Gott genommen worden*. O grego põe o verbo em Evidence e o substantivo no fim; o alemão põe o substantivo em primeiro lugar e o verbo no fim. A mesma inversão de ênfase atravessa toda a cadência de Lucas, do *und es begab sich* ao *und es geschah*.',
      ),
    },
    {
      label: T('O Agent Passiv é humano; o Patient não'),
      text: T(
        'Quando o agente é uma pessoa, o Passive recorre ao **Agent Passiv** em *-er* ou *-ung*: *der Verfasser, die Übersetzerin, die Schöpfung*. Quando o agente é uma coisa, uma força, um processo, ele desaparece. Daí a frase *Es wurde viel gearbeitet*, em que ninguém trabalha, e a tradução bíblica *alles, was ich euch geboten habe*, onde o que age é o próprio Jesus — e mesmo assim o grego original usa um aoristo de sentido passivo, *ἐνετειλάμην*, «fui enviado em missão». A passiva é um modo de falar em que o sujeito é sistematicamente excluído.',
      ),
    },
  ],
  examples: [
    {
      text: 'Der Brief wird geschrieben.',
      gloss: T('A carta está sendo escrita (passivo presente).'),
    },
    {
      text: 'Der Brief wird von meinem Bruder geschrieben.',
      gloss: T('A carta é escrita pelo meu irmão (agente com von).'),
    },
    { text: 'Die Tür wurde geöffnet.', gloss: T('A porta foi aberta (passivo do Präteritum).') },
    {
      text: 'Die Rechnung ist bezahlt worden.',
      gloss: T('A conta foi paga (Perfekt com worden).'),
    },
    {
      text: 'Die Fenster müssen gestrichen werden.',
      gloss: T('As janelas têm de ser pintadas (modal + passivo).'),
    },
    { text: 'Er soll entlassen werden.', gloss: T('Ele deve ser demitido (regra, não facto).') },
    { text: 'Es wurde viel geredet.', gloss: T('Falou-se muito (agente omitido).') },
    {
      text: 'Das Buch wurde vom Autor geschrieben.',
      gloss: T('O livro foi escrito pelo autor (agente nominalizado).'),
    },
    {
      text: 'Sei gelobt, mein Gott.',
      gloss: T('Bendito sejas, meu Deus (imperativo sem werden).'),
    },
  ],
  tables: [
    {
      caption: T('Tabela 1 — Os tempos da passiva'),
      head: [T('Tempo'), T('Construção'), T('Exemplo')],
      rows: [
        ['Presente', 'wird + Partizip II', 'Die Tür wird geöffnet.'],
        ['Präteritum', 'wurde + Partizip II', 'Die Tür wurde geöffnet.'],
        ['Perfekt', 'ist + Partizip II + worden', 'Die Tür ist geöffnet worden.'],
        ['Plusquamperfekt', 'war + Partizip II + gewesen', 'Die Tür war geöffnet gewesen.'],
        ['Futur I', 'wird + Partizip II + werden', 'Die Tür wird geöffnet werden.'],
        ['Imperativo', 'nur Partizip II', 'Öffne die Tür!'],
      ],
    },
    {
      caption: T('Tabela 2 — Ativa e passiva lado a lado'),
      head: [T('Ativa'), T('Passiva'), T('O que muda')],
      rows: [
        ['Ich schreibe den Brief.', 'Der Brief wird geschrieben.', 'o objeto vira sujeito'],
        ['Sie öffnet die Tür.', 'Die Tür wird geöffnet.', 'o objeto vira sujeito'],
        [
          'Mein Bruder hat es gemacht.',
          'Es ist von meinem Bruder gemacht worden.',
          'o sujeito vira agente explícito',
        ],
        [
          'Der Autor schrieb das Buch.',
          'Das Buch wurde vom Autor geschrieben.',
          'o sujeito vira agente explícito',
        ],
        ['Jemand hat gelogen.', 'Es wurde gelogen.', 'o agente desaparece'],
        [
          'Man kann das nicht beweisen.',
          'Das kann nicht bewiesen werden.',
          'modal + werden + particípio',
        ],
      ],
    },
  ],
};

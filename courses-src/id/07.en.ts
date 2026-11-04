import { C, T, V } from '../shared.mts';

export default {
  id: 7,
  title: T('Reading: The Lord’s Prayer and Psalm 22'),
  subtitle: T('Bapa kami yang di sorga'),
  section: T('Readings'),
  body: C(`The Lord’s Prayer combines names, pronouns, relative clauses, passives, and imperatives. The Indonesian text reads {Bapa kami yang di sorga, dikuduskanlah nama-Mu}: “Our Father who is in heaven, may your name be hallowed.”

ANALYSIS
• {Bapa}: “Father.”
• {kami}: possessive subject “our”; the whole clause serves as the subject of {dikuduskanlah}.
• {yang di sorga}: passive relative: “who is in heaven.”
• {nama-Mu}: “your name”; {Mu} is a second-person formal/possessive enclitic attached to the base.
• {dikuduskanlah}: {di-} + {kuduskan} + {-lah}; a passive (“be hallowed”) with an emphatic command.

Continue: {Datanglah kerajaan-Mu, jadilah kehendak-Mu}. {Datanglah} can have desiderative force: “may it come”; {jadilah} “be done.” {Kerajaan-Mu} with {datang} evokes the biblical image of the kingdom’s arrival.

{Berikanlah kami pada hari ini makanan kami yang secukupnya}. {Berikanlah} combines {beri} + {kan} + {lah} and is more natural than {berilah kami}. {Kami} is the beneficiary; {yang secukupnya} is a relative meaning “that is sufficient.”

In {Ampunilah kami akan kesalahan kami}, {akan} is a postpositional NOMINALIZER meaning “of/for.” It is not the future {akan}. {Kesalahan} means “errors” or “debts.”

In Psalm 22:2, {Allahku, Allahku} = “My God, my God” ({ku}, first person). {Mengapa} introduces a question: “why.” {Meninggalkan} = {meN- + tinggal + kan}, “to abandon.” {Aku} is emphatic in Biblical register.`),
  vocab: [
    V('Bapa', 'bapa', 'father'),
    V('sorga', 'sorga', 'heaven'),
    V('kuduskan', 'kudus', 'to sanctify'),
    V('dikuduskanlah', 'kudus', 'be hallowed!'),
    V('nama-Mu', 'nama', 'your name'),
    V('kerajaan', 'raja', 'kingdom'),
    V('kehendak', 'hendak', 'will, desire'),
    V('Berikanlah', 'beri', 'give!'),
    V('secukupnya', 'cukup', 'that is sufficient'),
    V('Ampunilah', 'ampun', 'forgive!'),
    V('akan', 'akan', 'of; for (nominalizer)'),
    V('kesalahan', 'salah', 'error, debt'),
    V('meninggalkan', 'tinggal', 'to abandon'),
  ],
  exercise: {
    kind: 'choose',
    prompt: T('What does {-lah} do in {dikuduskanlah}?'),
    options: [
      T('marks the past'),
      T('gives commanding or desired force to the passive'),
      T('creates the plural'),
      T('negates the verb'),
    ],
    answer: 1,
  },
  exercises: [
    {
      kind: 'fill',
      prompt: T('Complete: “___lah nama-Mu” = “may your name be hallowed.”'),
      answer: 'dikuduskan',
      hint: T('Starts with di- and contains the root kudus.'),
    },
    {
      kind: 'choose',
      prompt: T('In “akan kesalahan,” what function does {akan} have?'),
      options: [T('future'), T('nominalizer, “of”'), T('pronoun'), T('negation')],
      answer: 1,
    },
  ],
  rules: [
    {
      n: '1',
      text: T(
        'The entire nominal clause {Bapa kami yang di sorga} is the subject of {dikuduskanlah}; do not read {kami} alone as its subject.',
      ),
    },
    {
      n: '2',
      text: T(
        '{-lah} can create commanding or desiderative force, but it does not create past time.',
      ),
    },
    {
      n: '3',
      text: T(
        'TB uses lowercase for divine names; in ordinary text, capitalize {Allah}, {Tuhan}, and {Yesus} according to the edition’s convention.',
      ),
    },
  ],
  notes: [
    {
      label: T('Pronunciation'),
      text: T('{sorga} is pronounced approximately [ˈsɔrɡa], with an open velar vowel.'),
    },
  ],
  examples: [
    { text: 'Bapa kami yang di sorga.', gloss: T('Our Father who is in heaven.') },
    { text: 'Datanglah kerajaan-Mu.', gloss: T('May your kingdom come.') },
    { text: 'Ampunilah kami akan kesalahan kami.', gloss: T('Forgive our debts.') },
  ],
  tables: [
    {
      caption: T('Structures in the Lord’s Prayer'),
      head: ['Estrutura', 'PT', 'ES'],
      rows: [
        ['yang + passiva', T('relative clause'), '{yang di sorga} = «que está en el cielo»'],
        ['-Mu', T('2nd-person possessive'), '{nama-Mu} = «tu nombre»'],
        ['akan + N', T('nominalizer'), '{akan kesalahan} = «de los errores»'],
      ],
    },
  ],
};

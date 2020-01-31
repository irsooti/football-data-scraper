export type Acronyms = { page: string; enum: string[] };

const italyPage = 'italym.php';
const englandPage = 'englandm.php';

export const SERIE_A: Acronyms = { enum: ['I1'], page: italyPage };
export const SERIE_B: Acronyms = { enum: ['I2'], page: italyPage };
export const ITALY: Acronyms = {
  enum: [...SERIE_A.enum, ...SERIE_B.enum],
  page: italyPage
};

export const PREMIER_LEAGUE: Acronyms = { enum: ['E0'], page: englandPage };

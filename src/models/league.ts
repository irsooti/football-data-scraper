export type League = { page: string; acronyms: string[] };

const italyPage = 'italym.php';
const englandPage = 'englandm.php';

export const SERIE_A: League = { acronyms: ['I1'], page: italyPage };
export const SERIE_B: League = { acronyms: ['I2'], page: italyPage };
export const ITALY: League = {
  acronyms: [...SERIE_A.acronyms, ...SERIE_B.acronyms],
  page: italyPage
};

export const PREMIER_LEAGUE: League = { acronyms: ['E0'], page: englandPage };

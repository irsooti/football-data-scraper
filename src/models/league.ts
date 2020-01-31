export type League = { page: string; acronyms: string[] };

const italyPage = 'italym.php';
const englandPage = 'englandm.php';
const scotlandPage = 'scotlandm.php';

/**
 * ITALY
 */
export const SERIE_A: League = { acronyms: ['I1'], page: italyPage };
export const SERIE_B: League = { acronyms: ['I2'], page: italyPage };
export const ITALY: League = {
  acronyms: [...SERIE_A.acronyms, ...SERIE_B.acronyms],
  page: italyPage
};

/**
 * ENGLAND
 */

export const ENGLISH_PREMIER_LEAGUE: League = {
  acronyms: ['E0'],
  page: englandPage
};
export const CHAMPIONSHIP: League = { acronyms: ['E1'], page: englandPage };
export const LEAGUE_1: League = { acronyms: ['E2'], page: englandPage };
export const LEAGUE_2: League = { acronyms: ['E3'], page: englandPage };
export const CONFERENCE: League = { acronyms: ['EC'], page: englandPage };
export const ENGLAND: League = {
  page: englandPage,
  acronyms: [
    ...ENGLISH_PREMIER_LEAGUE.acronyms,
    ...CHAMPIONSHIP.acronyms,
    ...LEAGUE_1.acronyms,
    ...LEAGUE_2.acronyms,
    ...CONFERENCE.acronyms
  ]
};

/**
 * SCOTLAND
 */
export const SCOTLAND_PREMIER_LEAGUE: League = {
  acronyms: ['SC0'],
  page: scotlandPage
};
export const DIVISION_1: League = { acronyms: ['SC1'], page: scotlandPage };
export const DIVISION_2: League = { acronyms: ['SC2'], page: scotlandPage };
export const DIVISION_3: League = { acronyms: ['SC3'], page: scotlandPage };
export const SCOTLAND: League = {
  page: scotlandPage,
  acronyms: [
    ...SCOTLAND_PREMIER_LEAGUE.acronyms,
    ...DIVISION_1.acronyms,
    ...DIVISION_2.acronyms,
    ...DIVISION_3.acronyms
  ]
};

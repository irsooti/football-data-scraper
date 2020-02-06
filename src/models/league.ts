export type League = { page: string; acronyms: string[] };
export interface LeagueItem {
  url: string;
  leagueName: string;
  id: string;
}
export interface LeagueItemWithContent {
  id: string;
  leagueName: string;
  getContent(): Promise<{}[]>;
}

const italyPage = 'italym.php';
const englandPage = 'englandm.php';
const scotlandPage = 'scotlandm.php';
const germanyPage = 'germanym.php';
const spainPage = 'spainm.php';
const francePage = 'francem.php';
const netherLandPage = 'netherlandsm.php';
const belgiumPage = 'belgiumm.php';
const portugalPage = 'portugalm.php';
const turkeyPage = 'turkeym.php';
const greecePage = 'greecem.php';

//#region Pages
export const SERIE_A: League = { acronyms: ['I1'], page: italyPage };
export const SERIE_B: League = { acronyms: ['I2'], page: italyPage };
export const ITALY: League = {
  acronyms: [...SERIE_A.acronyms, ...SERIE_B.acronyms],
  page: italyPage
};

//#endregion

//#region ENGLAND
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

//#endregion
//#region SCOTLAND
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
//#endregion
//#region GERMANY
export const BUNDESLIGA_1: League = { acronyms: ['D1'], page: germanyPage };
export const BUNDESLIGA_2: League = { acronyms: ['D2'], page: germanyPage };
export const GERMANY: League = {
  page: germanyPage,
  acronyms: [...BUNDESLIGA_1.acronyms, ...BUNDESLIGA_2.acronyms]
};
//#endregion
//#region SPAIN
export const LIGA_PRIMERA: League = { acronyms: ['SP1'], page: spainPage };
export const LIGA_SEGUNDA: League = { acronyms: ['SP2'], page: spainPage };
export const SPAIN: League = {
  page: spainPage,
  acronyms: [...LIGA_PRIMERA.acronyms, ...LIGA_SEGUNDA.acronyms]
};
//#endregion
//#region FRANCE
export const LE_CHAMPIONNAT: League = { acronyms: ['F1'], page: francePage };
export const LIGUE_2: League = { acronyms: ['F2'], page: francePage };
export const FRANCE: League = {
  page: francePage,
  acronyms: [...LE_CHAMPIONNAT.acronyms, ...LIGUE_2.acronyms]
};
//#endregion
//#region BELGIUM
export const JUPILER_LEAGUE: League = { acronyms: ['B1'], page: belgiumPage };
export const BELGIUM: League = {
  page: belgiumPage,
  acronyms: [...JUPILER_LEAGUE.acronyms]
};
//#endregion
//#region NETHERLAND
export const EREDIVISIE: League = { acronyms: ['N1'], page: netherLandPage };
export const NETHERLAND: League = {
  acronyms: [...EREDIVISIE.acronyms],
  page: netherLandPage
};
//#endregion
//#region PORTUGAL
export const LIGA_1: League = { acronyms: ['P1'], page: portugalPage };
export const PORTUGAL: League = {
  acronyms: [...LIGA_1.acronyms],
  page: portugalPage
};
//#endregion
//#region TURKEY
export const FUTBOL_LIGI_1: League = { acronyms: ['T1'], page: turkeyPage };
export const TURKEY: League = {
  acronyms: [...FUTBOL_LIGI_1.acronyms],
  page: turkeyPage
};
//#endregion
//#region GREECE
export const ETHNIKI_KATIGORIA: League = { acronyms: ['G1'], page: greecePage };
export const GREECE: League = {
  acronyms: [...ETHNIKI_KATIGORIA.acronyms],
  page: greecePage
};
//#endregion

import {
  League,
  ScraperResponse,
  LeagueItem,
  LeagueItemWithContent
} from './models';
import * as fs from 'fs';
import fetch from 'node-fetch';
import {
  fetchAndParseToDOM,
  regExpBuilderByLeague,
  writeCsvToDirectory
} from './utils';
import csv from 'csv-parser';
import { LeagueRecord } from './models';

const SITE_TO_SCRAPE = 'https://www.football-data.co.uk';

/**
 * Scrape and returns the file to download
 * @param {number} start
 * @param {number} end
 * @param {League} league
 */
export async function scrapeBySeason(
  start: number,
  end: number,
  league: League
): Promise<LeagueItem[]> {
  const last2Start = start.toString().substr(2, 2);
  const last2End = end.toString().substr(2, 2);

  const dom = await fetchAndParseToDOM(`${SITE_TO_SCRAPE}/${league.page}`, {
    method: 'get'
  });

  // METHOD 1
  // const $iSeason = Array.from(dom.querySelectorAll('i')).find(
  //   v => v.textContent == `Season ${start}/${end}`
  // );
  // const $hrefSerieA = nextElementSiblingUntilNodeIs($iSeason, 'a');
  // const $hrefSerieB = nextElementSiblingUntilNodeIs(
  //   $hrefSerieA.nextElementSibling,
  //   'a'
  // );

  // METHOD 2
  const regExp = regExpBuilderByLeague(last2Start, last2End, league.acronyms);
  return Array.from(dom.querySelectorAll('a'))
    .filter(v => {
      return regExp.test(v.getAttribute('href'));
    })
    .map(href => ({
      url: SITE_TO_SCRAPE + '/' + href.getAttribute('href'),
      leagueName: href.text,
      id: href.href
        .split('/')
        .reverse()[0]
        .replace('.csv', '')
    }));
}

/**
 * Scrape and returns the file to download
 * @param {number} start
 * @param {number} end
 * @param {League} league
 */
export async function scrapeBySeasonAndDownload(
  start: number,
  end: number,
  acronyms: League
): Promise<ScraperResponse<LeagueItem[]>> {
  const scraperResponse: ScraperResponse<LeagueItem[]> = {
    data: [],
    error: undefined
  };

  const scrapedUrls = await scrapeBySeason(start, end, acronyms);
  try {
    const scrapedRequests = scrapedUrls.map((item: LeagueItem) =>
      fetch(item.url).then(response =>
        writeCsvToDirectory(response, item.id, item.leagueName)
      )
    );

    const downloadedUrl = await Promise.all(scrapedRequests);

    scraperResponse.data = downloadedUrl;
  } catch (err) {
    scraperResponse.error = err;
  }

  return scraperResponse;
}

export async function getBySeason(
  start: number,
  end: number,
  acronyms: League
) {
  const result = await scrapeBySeasonAndDownload(start, end, acronyms);
  const response: ScraperResponse<LeagueItemWithContent[]> = {
    data: [],
    error: undefined
  };

  return result.data.map((r: LeagueItem) => {
    return {
      getContent: (): Promise<LeagueRecord[]> =>
        new Promise((resolve, reject) => {
          const content = [];
          fs.createReadStream(r.url)
            .pipe(csv())
            .on('data', data => {
              content.push(data);
            })
            .on('end', () => {
              resolve(content);
            })
            .on('error', reject);
        }),
      id: r.id,
      leagueName: r.leagueName
    };
  });

  // return response;
}

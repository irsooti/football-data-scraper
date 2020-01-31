// https://www.football-data.co.uk/italym.php
import { Acronyms } from './acronyms';
import * as fs from 'fs';
import fetch from 'node-fetch';
import {
  fetchAndParseToDOM,
  regExpBuilderByLeague,
  writeCsvToDirectory
} from './utils';

const SITE_TO_SCRAPE = 'https://www.football-data.co.uk';

interface ScraperResponse {
  data: string[];
  error: Error;
}

export async function scrapeBySeason(
  start: number,
  end: number,
  acronyms: Acronyms
): Promise<string[]> {
  const last2Start = start.toString().substr(2, 2);
  const last2End = end.toString().substr(2, 2);

  const dom = await fetchAndParseToDOM(`${SITE_TO_SCRAPE}/${acronyms.page}`, {
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
  const regExp = regExpBuilderByLeague(last2Start, last2End, acronyms.enum);
  return Array.from(dom.querySelectorAll('a'))
    .filter(v => {
      return regExp.test(v.getAttribute('href'));
    })
    .map(href => SITE_TO_SCRAPE + '/' + href.getAttribute('href'));
}

export async function scrapeBySeasonAndDownload(
  start: number,
  end: number,
  acronyms: Acronyms
): Promise<ScraperResponse> {
  let scraperResponse: ScraperResponse = {
    data: [],
    error: undefined
  };
  const scrapedUrls = await scrapeBySeason(start, end, acronyms);
  try {
    const downloadedUrl = await Promise.all(
      scrapedUrls.map((url: string) =>
        fetch(url)
          .then(writeCsvToDirectory)
          .catch(err => err.message)
      )
    );

    scraperResponse.data = downloadedUrl;
  } catch (err) {
    scraperResponse.error = err;
  }

  return scraperResponse;
}

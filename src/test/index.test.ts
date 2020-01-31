import { scrapeBySeason, scrapeBySeasonAndDownload } from '../index';
import { SERIE_B, ITALY, PREMIER_LEAGUE } from '../acronyms';

it('scrapes without any problems', async () => {
  const data = await scrapeBySeasonAndDownload(2019, 2020, ITALY);
  expect(data.error).toBe(undefined);
});

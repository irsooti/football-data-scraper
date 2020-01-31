import { scrapeBySeason, scrapeBySeasonAndDownload, models } from '../';

it('scrapes without any problems', async () => {
  const data = await scrapeBySeasonAndDownload(2019, 2020, models.ITALY);
  const data2 = await scrapeBySeasonAndDownload(2018, 2019, models.ITALY);
  expect(data.error).toBe(undefined);
});

import { scrapeBySeason, scrapeBySeasonAndDownload, models } from '../';
import { getBySeason } from '../scrapers';

it('scrapes without any problems', async () => {
  const data = await scrapeBySeason(2019, 2020, models.ITALY);
  console.log(data)
  expect(data.length).toBeGreaterThan(0);
});

it('scrapes and download csv without any problems', async () => {
  const data = await scrapeBySeasonAndDownload(2019, 2020, models.ITALY);
  console.log(data)
  expect(data.error).toBe(undefined);
});

it('scrapes, download csv and parse to json without any problems', async () => {
  const data = await getBySeason(2019, 2020, models.ITALY);

  console.log(data)
  expect((await data[0].getContent())[0].Date).toBeDefined();
});

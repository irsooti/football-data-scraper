import { scrape } from '../index';

it('should die', async () => {
  console.dir(await scrape().then(r => r).json());
  expect(true).toBe(true);
});

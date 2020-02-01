# Football data scraper
### A scraper for http://www.football-data.co.uk/


What this library can do for you?

It can scrapes this football site and save for you the csv inside of it.
I made some facilities in order to get the csv for specific season and for some specific league!

This is a sample on how it works:

```js
import { scrapeBySeason, scrapeBySeasonAndDownload, models } from '@irsooti/football-data-scraper';

async function yourFunc() {
    const data = await scrapeBySeasonAndDownload(2019, 2020, models.ITALY);
    console.log(data)
    // it will save the csv in your project path and it returns ['path/to/download/serieA.csv', 'path/to/download/serieB.csv']
};
```

Otherwise, if you want just only the link to download the file:

```js
import { scrapeBySeason, scrapeBySeasonAndDownload, models } from '@irsooti/football-data-scraper';

async function yourFunc() {
    const data = await scrapeBySeason(2019, 2020, models.ITALY);
    console.log(data)
    // it will returns ['remote/path/serieA', 'remote/path/serieB']
};
```

Hope you enjoy it!

<a href="https://www.buymeacoffee.com/r9RgtIF" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-red.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
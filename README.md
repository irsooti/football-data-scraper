# Football data scraper
### A scraper for http://www.football-data.co.uk/ 

![npm (scoped)](https://img.shields.io/npm/v/@irsooti/football-data-scraper?style=for-the-badge)


🤷‍♂️ What this library can do for you?

It can scrapes this football site and save for you the csv inside of it.
I made some facilities in order to get the csv for specific season and for some specific league!

See the examples below:

```js
import {
  scrapeBySeason,
  scrapeBySeasonAndDownload,
  models
} from '@irsooti/football-data-scraper';

async function yourFunc() {
  const data = await scrapeBySeason(2019, 2020, models.ITALY);
  console.log(data);
  //   { data:
  //        [ { id: 'I1',
  //            leagueName: 'Serie A',
  //            url:
  //             '/<local-path>/Projects/football-data-scraper/csv/1920/I1.csv' },
  //          { id: 'I2',
  //            leagueName: 'Serie B',
  //            url:
  //             '/<local-path>/Projects/football-data-scraper/csv/1920/I2.csv' } ],
  //       error: undefined 
  //    }
}
```

Otherwise, if you want just only the link to download the file:

```js
import {
  scrapeBySeason,
  scrapeBySeasonAndDownload,
  models
} from '@irsooti/football-data-scraper';

async function yourFunc() {
  const data = await scrapeBySeason(2019, 2020, models.ITALY);
  console.log(data);
  // It returns:

  // [{
  //   url: 'https://www.football-data.co.uk/mmz4281/1920/I1.csv',
  //   leagueName: 'Serie A',
  //   id: 'I1'
  // },
  // {
  //   url: 'https://www.football-data.co.uk/mmz4281/1920/I2.csv',
  //   leagueName: 'Serie B',
  //   id: 'I2'
  // }];
}
```
Or if you want the data already json parsed:

```js
import {
  scrapeBySeason,
  scrapeBySeasonAndDownload,
  models
} from '@irsooti/football-data-scraper';

async function yourFunc() {
  const data = await getBySeason(2019, 2020, models.ITALY);
  console.log(data);
  // It returns:

    // [ { getContent: [Function: getContent] <-- Promise,
    //     id: 'I1',
    //     leagueName: 'Serie A' },
    //   { getContent: [Function: getContent],
    //     id: 'I2',
    //     leagueName: 'Serie B' } ]

}
```

Hope you enjoy it!

<a href="https://www.buymeacoffee.com/r9RgtIF" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-red.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

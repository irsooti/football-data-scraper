import * as fs from 'fs';
import * as path from 'path';
import fetch, { Response } from 'node-fetch';
import { LeagueItem } from '../models';

export default async function(
  response: Response,
  id: string,
  name: string
): Promise<LeagueItem> {
  const [filename, season] = response.url.split('/').reverse();
  const commonPath = path.resolve('.') + '/csv';

  if (!fs.existsSync(commonPath)) {
    fs.mkdirSync(commonPath);
  }
  if (!fs.existsSync(commonPath + '/' + season)) {
    fs.mkdirSync(commonPath + '/' + season);
  }
  const file = fs.createWriteStream(commonPath + '/' + season + '/' + filename);

  try {
    file.write(await response.buffer());
    return {
      id,
      leagueName: name,
      url: commonPath + '/' + season + '/' + filename
    } as LeagueItem;
  } catch (err) {
    const seasonSplitted = season.split('');
    seasonSplitted.splice(2, 0, '-');
    throw new Error(
      `Can't create the csv of ${filename} for the season ${seasonSplitted.join(
        ''
      )}`
    );
  } finally {
    file.close();
  }
}

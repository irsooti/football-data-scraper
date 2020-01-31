import * as fs from 'fs';
import * as path from 'path';
import fetch, { Response } from 'node-fetch';

export default async function(response: Response): Promise<string> {
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
    return commonPath + '/' + season + '/' + filename;
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

// https://www.football-data.co.uk/italym.php

import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

export function scrape() {
  return fetch('https://www.football-data.co.uk/italym.php', { method: 'get' });
}

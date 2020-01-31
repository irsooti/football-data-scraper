import { JSDOM } from 'jsdom';
import fetch, { RequestInit } from 'node-fetch';

export default async function fetchAndParseToDOM(
  url: string,
  options?: RequestInit
): Promise<Document> {
  try {
    const fetchedSite = await fetch(url, options);
    const text = await fetchedSite.text();
    return new JSDOM(text).window.document;
  } catch (e) {
    throw e;
  }
}

import { LeagueItem } from './league';

export default interface ScraperResponse<T> {
  data: T;
  error: Error;
}

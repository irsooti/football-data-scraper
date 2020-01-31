import { League } from '../models/league';

export default function regExpBuilderByLeague(
  start: string,
  end: string,
  acronyms: string[]
): RegExp {
  let text = '';
  acronyms.forEach(acronym => {
    if (text) {
      text = text + '|';
    }
    text = text + `${start}${end}/${acronym}.csv$`;
  });
  return new RegExp(text, 'i');
}

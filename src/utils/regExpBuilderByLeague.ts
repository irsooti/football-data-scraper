import { Acronyms } from '../acronyms';

export default function regExpBuilderByLeague(
  start: string,
  end: string,
  acronyms: string[]
): RegExp {
  let string: string = '';
  acronyms.forEach(acronym => {
    if (string) {
      string = string + '|';
    }
    string = string + `${start}${end}/${acronym}.csv$`;
  });
  return new RegExp(string, 'i');
}

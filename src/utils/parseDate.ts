import { DEFAULT_DATE_FORMAT_OPTIONS } from 'constants/date';
import { DEFAULT_LANGUAGE } from 'constants/lang';

/**
 * Parses a date string into a localized date string.
 *
 * @param {string} dateString - The date string to parse.
 * @param {string} [lang=DEFAULT_LANGUAGE] - The language to use for formatting.
 * @param {Intl.DateTimeFormatOptions} [options=DEFAULT_DATE_FORMAT_OPTIONS] - The formatting options.
 * @returns {string} The formatted date string.
 */
export const parseDate = (
  dateString: string,
  lang: string = DEFAULT_LANGUAGE,
  options: Intl.DateTimeFormatOptions = DEFAULT_DATE_FORMAT_OPTIONS,
): string => {
  const date = new Date(dateString);

  return date.toLocaleDateString(lang, options);
};

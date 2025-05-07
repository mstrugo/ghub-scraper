import { DEFAULT_DATE_FORMAT_OPTIONS } from 'constants/date';
import { DEFAULT_LANGUAGE } from 'constants/lang';

export const parseDate = (dateString: string, lang = DEFAULT_LANGUAGE, options = DEFAULT_DATE_FORMAT_OPTIONS) => {
  const date = new Date(dateString);

  return date.toLocaleDateString(lang, options);
};

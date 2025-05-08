/**
 * Default date format options for displaying dates.
 *
 * @type {Intl.DateTimeFormatOptions}
 * @property {string} year - The format for the year (e.g., '2-digit').
 * @property {string} month - The format for the month (e.g., 'numeric').
 * @property {string} day - The format for the day (e.g., 'numeric').
 */
export const DEFAULT_DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: '2-digit',
  month: 'numeric',
  day: 'numeric',
};

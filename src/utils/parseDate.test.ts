import { parseDate } from './parseDate';

describe('parseDate', () => {
  it('should format a valid date string with default language and options', () => {
    const dateString = '2016-02-20T15:06:58Z';
    const expected = '2/20/16';
    const result = parseDate(dateString);
    expect(result).toBe(expected);
  });

  it('should format a valid date string with a specific language', () => {
    const dateString = '2016-02-20T15:06:58Z';
    const expected = '20/2/16';
    const lang = 'es-ES';
    const result = parseDate(dateString, lang);
    expect(result).toBe(expected);
  });

  it('should format a valid date string with specific options', () => {
    const dateString = '2023-10-01';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const result = parseDate(dateString, undefined, options);
    expect(result).toBe(new Date(dateString).toLocaleDateString(undefined, options));
  });

  it('should format a valid date string with specific language and options', () => {
    const dateString = '2023-10-01';
    const lang = 'fr-FR';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const result = parseDate(dateString, lang, options);
    expect(result).toBe(new Date(dateString).toLocaleDateString(lang, options));
  });

  it('should handle invalid date strings gracefully', () => {
    const dateString = 'invalid-date';
    const result = parseDate(dateString);
    expect(result).toBe('Invalid Date');
  });
});

import { theme } from './theme';

describe('theme', () => {
  it('should have fontFamily property', () => {
    expect(theme.typography.fontFamily).toContain('fontFamily');
  });
});

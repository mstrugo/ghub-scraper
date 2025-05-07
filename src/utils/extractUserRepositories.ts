import { GHUserRepositories } from 'types/github';
import type { ParsedRepositories } from 'types/userDetails';

export const extractUserRepositories = (data: GHUserRepositories[]): ParsedRepositories[] => {
  return data.map(({ name, html_url }) => ({ name, url: html_url }));
};

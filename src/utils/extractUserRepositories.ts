import { GHUserRepositories } from 'types/github';
import type { ParsedRepositories } from 'types/userDetails';

export const extractUserRepositories = (data: GHUserRepositories[]): ParsedRepositories[] => {
  return data.map((repo) => {
    const { name, html_url } = repo;
    return { name, url: html_url };
  });
};

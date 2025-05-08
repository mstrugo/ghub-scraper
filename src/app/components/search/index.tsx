'use client';

import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, Tooltip } from '@mui/material';
import { useUserContext } from 'contexts/users';
import { useState, type FormEvent, type JSX } from 'react';

/**
 * A search component to allow users to search for GitHub profiles.
 *
 * @returns {JSX.Element} The rendered Search component.
 */
export const Search = (): JSX.Element => {
  const { triggerSearch, isSearchPerformed, resetSearch } = useUserContext();
  const [term, setTerm] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    triggerSearch(term.trim());
  };

  return (
    <Box component="form" display="flex" alignItems="start" gap={1} onSubmit={handleSubmit} onReset={resetSearch}>
      <TextField
        variant="outlined"
        label="Search Users"
        placeholder="Type +3 letters to get better results..."
        type="search"
        fullWidth
        size="small"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />

      <IconButton color="warning" type="submit" aria-label="search" disabled={!term.trim()}>
        <Tooltip title="Search" placement="top" arrow>
          <SearchIcon />
        </Tooltip>
      </IconButton>

      <IconButton color="error" type="reset" aria-label="clear search results" disabled={!isSearchPerformed}>
        <Tooltip title="Clear Search Results" placement="top" arrow>
          <CancelIcon />
        </Tooltip>
      </IconButton>
    </Box>
  );
};

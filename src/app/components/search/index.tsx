'use client';

import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import { Box, IconButton, TextField, Tooltip } from '@mui/material';
import { useUserContext } from 'contexts/users';
import { useState, type FormEvent } from 'react';

export const Search = () => {
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

      <Tooltip title="Search" placement="top" arrow>
        <IconButton color="warning" type="submit" aria-label="search" disabled={!term.trim()}>
          <SearchIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Clear Search Results" placement="top" arrow>
        <IconButton color="error" type="reset" aria-label="clear search results" disabled={!isSearchPerformed}>
          <CancelIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

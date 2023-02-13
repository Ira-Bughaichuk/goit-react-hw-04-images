import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './Searchbar.styled';
import SearchIcon from '@mui/icons-material/Search';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Ведіть назву');
      return;
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <>
      <SearchBarHeader>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton onClick={handleSubmit} type="submit">
            <SearchIcon />
          </SearchFormButton>

          <SearchFormInput
            onChange={handleChange}
            name="query"
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    </>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
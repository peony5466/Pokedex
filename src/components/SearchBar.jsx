import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';

const SearchBar = ({ onSearchChange, pokemons, value }) => {
  const {language}= useLanguage();

  const options = pokemons ? pokemons.map(p=> p.names[language] || p.names['en'] ) : [];


  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={options}
      inputValue={value}
      onInputChange={(event, newInputValue)=>{
        onSearchChange(newInputValue);
      }}
      renderInput={(params)=>(
        <TextField
          {...params}
          fullWidth
          autoFocus
          placeholder=" Enter a pokemon name .."
          variant="outlined"
        />
      )}
      sx={{ mb: 4 }}
    />
  );
};
export default SearchBar;
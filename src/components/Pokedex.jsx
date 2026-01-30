import React, {useState, useEffect} from 'react';
import { Grid , CircularProgress, Box, Typography} from '@mui/material';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import { useLanguage } from '../context/LanguageContext';


const Pokedex = ({ searchTerm, pokemons = [], typeColors }) => {
  const { language } = useLanguage();

  const filteredPokemons = pokemons?.filter((pokemon) => {
    const name = pokemon.names[language] || pokemon.names['en'];
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Grid container spacing={3} justifyContent="center" sx={{ p: 3 }}>
      {filteredPokemons.map((pokemon) => (
        <Grid item key={pokemon.id}>
          <PokemonCard pokemon={pokemon} typeColors={typeColors} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Pokedex;
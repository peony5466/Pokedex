import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Container, Box, Typography } from '@mui/material';
import PokemonDetail from '../components/PokemonDetail';

const PokemonDetailPage = ({ pokemons, typeColors }) => {
  const { id } = useParams();
  const pokemon = pokemons.find(p => p.id === parseInt(id));

  if (!pokemon) return <Typography sx={{ p: 4 }}>Pokémon introuvable.</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Button component={Link} to="/" variant="outlined" sx={{ mb: 3 }}>
        Retour à la liste
      </Button>
      <PokemonDetail pokemon={pokemon} typeColors={typeColors} />
    </Container>
  );
};

export default PokemonDetailPage;
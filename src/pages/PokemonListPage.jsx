import React from 'react';
import SearchBar from '../components/SearchBar'; // Importation de la barre de recherche.
import Pokedex from '../components/Pokedex'; // Importation de la grille.
import { type } from '@testing-library/user-event/dist/cjs/utility/type.js';

const PokemonListPage = ({ searchTerm, onSearchChange, pokemons, typeColors }) => {
  return (
    <>
      {/* On passe la fonction pour mettre à jour le texte de recherche */}
      <SearchBar onSearchChange={onSearchChange} pokemons={pokemons} />
      {/* On passe le texte actuel pour filtrer les pokémons dans la grille */}
      <Pokedex searchTerm={searchTerm} pokemons = {pokemons} typeColors = {typeColors} />
    </>
  );
};

export default PokemonListPage;
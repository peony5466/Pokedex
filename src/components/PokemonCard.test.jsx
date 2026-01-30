import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../context/LanguageContext';
import PokemonCard from './PokemonCard';

// 1. On définit les données du Pokémon pour le test
const mockPokemon = {
  id: 1,
  names: { fr: 'Bulbizarre', en: 'Bulbasaur' },
  types: ['grass', 'poison'],
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
};

// 2. AJOUT : On définit l'objet des couleurs (ce qui manquait et causait l'erreur)
const mockTypeColors = {
  grass: { backgroundColor: '#7AC74C', translations: { fr: 'Plante' } },
  poison: { backgroundColor: '#A33EA1', translations: { fr: 'Poison' } }
};

describe('PokemonCard', () => {
  it('affiche le nom traduit et le numéro formaté', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          {/* 3. On passe bien "mockTypeColors" ici */}
          <PokemonCard pokemon={mockPokemon} typeColors={mockTypeColors} />
        </LanguageProvider>
      </MemoryRouter>
    );

    // Vérifie le numéro formaté (No. 001) [4]
    expect(screen.getByText(/No. 001/i)).toBeInTheDocument();
    
    // Vérifie le nom en français par défaut [2, 5]
    expect(screen.getByText(/Bulbizarre/i)).toBeInTheDocument();
  });
});
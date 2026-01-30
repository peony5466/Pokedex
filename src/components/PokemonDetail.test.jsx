import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PokemonDetail from './PokemonDetail';
import { LanguageProvider } from '../context/LanguageContext';

// Données fictives pour le test
const mockPokemon = {
  id: 1,
  names: { fr: 'Bulbizarre', en: 'Bulbasaur' },
  height: 7, 
  weight: 69, 
  types: ['grass'],
  moves: ['Tackle']
};

const mockTypeColors = {
  grass: { backgroundColor: '#7AC74C', translations: { fr: 'Plante' } }
};

describe('PokemonDetail', () => {
  it('affiche les détails techniques et les types', () => {
    render(
      <LanguageProvider>
        <PokemonDetail 
          pokemon={mockPokemon} 
          onClose={() => {}} 
          typeColors={mockTypeColors} 
        />
      </LanguageProvider>
    );
    
    // Vérification du badge de type
    expect(screen.getByText(/Plante/i)).toBeInTheDocument();
    // Vérification des calculs (taille/10 et poids/10) [3, 4]
    expect(screen.getByText(/0.7 m/i)).toBeInTheDocument();
    expect(screen.getByText(/6.9 kg/i)).toBeInTheDocument();
  });

  it('affiche les mouvements après un clic', () => {
    render(
      <LanguageProvider>
        <PokemonDetail 
          pokemon={mockPokemon} 
          onClose={() => {}} 
          typeColors={mockTypeColors} 
        />
      </LanguageProvider>
    );
    
    // Simulation du clic sur le bouton pour voir les mouvements [4, 5]
    const button = screen.getByText(/Voir les mouvements/i);
    fireEvent.click(button); 
    expect(screen.getByText(/Tackle/i)).toBeInTheDocument();
  });
});
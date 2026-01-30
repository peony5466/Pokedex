import React from 'react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import Logo from './Logo'

describe('Logo', () => {
  it('affiche une image avec le texte alternatif "Pokedex Logo"', () => {
    // Rend le composant Logo dans le DOM virtuel [1]
  
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    
    // Recherche l'élément par son texte alternatif défini dans le composant [3]
    const logoImg = screen.getByAltText(/Pokedex Logo/i);
    
    // Vérifie que l'image est bien présente [1, 4]
    expect(logoImg).toBeInTheDocument();
  });
});
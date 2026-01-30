import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LanguageProvider } from '../context/LanguageContext'
import Pokedex from './Pokedex'

const queryClient = new QueryClient()

describe('Pokedex', () => {
  it('affiche un pokemon simplement', () => {
    // Données minimales pour que le composant ne plante pas [2, 3]
    const mockPokes = [{ id: 1, names: { fr: 'Bulbizarre', en: 'Bulbasaur' }, types: ['grass'] }]
    const mockColors = { grass: { backgroundColor: '#7AC74C', translations: { fr: 'Plante' } } }

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <LanguageProvider>
            <Pokedex searchTerm="" pokemons={mockPokes} typeColors={mockColors} />
          </LanguageProvider>
        </MemoryRouter>
      </QueryClientProvider>
    )

    // On vérifie juste si le texte est là [1, 4]
    expect(screen.getByText(/Bulbizarre/i)).toBeInTheDocument()
  })
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageSelection from './LanguageSelection';
import { LanguageProvider } from '../context/LanguageContext'; // Importation nécessaire [3]

describe('LanguageSelection', () => {
  it('affiche les options de langue FR, EN et DE', () => {
    // On enveloppe le composant dans le Provider pour lui donner accès au contexte [2]
    render(
      <LanguageProvider>
        <LanguageSelection language="fr" onLanguageChange={() => {}} />
      </LanguageProvider>
    );
    
    // On vérifie que les options sont bien présentes dans le document [4]
    expect(screen.getByText(/FR/i)).toBeInTheDocument();
    expect(screen.getByText(/EN/i)).toBeInTheDocument();
    expect(screen.getByText(/DE/i)).toBeInTheDocument();
  });
});
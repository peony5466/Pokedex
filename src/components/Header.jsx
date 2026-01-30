import React from 'react';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Icône Lune
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Icône Soleil
import Logo from './Logo';
import LanguageSelection from './LanguageSelection';

// Ajout des props toggleTheme et mode pour gérer le changement de thème
const Header = ({ language, onLanguageChange, toggleTheme, mode }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      mb: 4 
    }}>
      {/* Élément à gauche : Le Logo */}
      <Logo />

      {/* Groupe d'éléments à droite : Langue + Bouton Theme */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <LanguageSelection language={language} onLanguageChange={onLanguageChange} />
        
        {/* Bouton Toggle Theme */}
        <IconButton onClick={toggleTheme} color="inherit" sx={{ ml: 1 }}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
import React from 'react';
import { Box } from '@mui/material'; // Importation du composant de base MUI [3]
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to = "/" sx = {{textDecoration:'none', display:'flex'}}>
    <Box
      component="img"
      src="/logopok.svg" // Le "/" pointe directement vers le dossier public [4, 7]
      alt="Pokedex Logo"
      sx={{ 
        width: { xs: 150, sm: 200, md: 250 }, // Taille responsive (petite sur mobile, grande sur PC)
        height: 'auto',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)' } // Petit effet de zoom au survol [8]
      }}
    />
    </Link>
  );
};

export default Logo;
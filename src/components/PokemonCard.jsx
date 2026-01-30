import React from 'react';
import { Paper, Typography, Box, alpha } from '@mui/material';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../context/LanguageContext';
import TypeBadge from './TypeBadge';

const PokemonCard = ({ pokemon, typeColors }) => {
  const { language } = useLanguage();

  // 1. Sécurisation du nom et des types
  const name = pokemon.names?.[language] || pokemon.names?.en || 'Unknown';
  const type1 = pokemon.types?.[0]?.toLowerCase();
  const type2 = pokemon.types?.[1]?.toLowerCase(); // Récupère le deuxième type s'il existe

  // 2. Récupération des couleurs depuis les sources
  const color1 = typeColors?.[type1]?.backgroundColor || '#9e9e9e';
  const color2 = type2 ? typeColors?.[type2]?.backgroundColor : null;

  // 3. Logique du dégradé (Problème 3 réglé)
  // Si 2 types : mélange color1 et color2. Si 1 type : color1 vers sombre.
  const backgroundGradient = color2
    ? `linear-gradient(115deg, ${alpha(color1, 0.4)} 0%, ${alpha(color2, 0.3)} 100%)`
    : `linear-gradient(0deg, ${alpha(color1, 0.4)} 0%, rgba(0,0,0,0.6) 100%)`;

  const glowColor = color1; // La lueur néon utilise la couleur principale

  return (
    <Paper
      component={Link}
      to={`/pokemon/${pokemon.id}`}
      elevation={0}
      sx={{
        p: 2,
        width: 220, // Largeur fixe pour garder une forme de carte (Problème 2 réglé)
        minHeight: 300,
        textAlign: 'center',
        display: 'block',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 5, // Arrondi prononcé mais garde la forme rectangulaire

        // Style créatif futuriste inspiré de l'image source [2]
        background: backgroundGradient,
        backdropFilter: 'blur(10px)',
        border: `1px solid ${alpha(glowColor, 0.3)}`,
        transition: 'all 0.4s ease-in-out',

        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: `0 0 20px ${alpha(glowColor, 0.3)}, 
            0 0 40px ${alpha(glowColor, 0.4)}, 
            0 0 60px ${alpha(glowColor, 0.4)}`,
          border: `1px solid ${glowColor}`,
        },
      }}
    >
      <Typography variant="caption" sx={{ color: alpha('#fff', 0.6), fontWeight: 800 }}>
        No. {pokemon.id.toString().padStart(3, '0')}
      </Typography>

      <Typography variant="h6" sx={{ color: 'white', fontWeight: 900, mb: 1 }}>
        {name}
      </Typography>

      {/* Zone Image avec Lazy Loading restauré (Problème 1 réglé) */}
      <Box sx={{ height: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', my: 2 }}>
        <LazyLoadImage
          alt={name}
          src={pokemon.image}
          width={110}
          height={110}
          threshold={100}
          // Remettez ici le chemin vers votre GIF de chargement
          placeholderSrc="pokeball.gif" 
          style={{ 
            objectFit: 'contain', 
            filter: `drop-shadow(0 0 8px ${alpha(glowColor, 0.5)})` 
          }}
        />
      </Box>

      {/* Affichage des badges de types */}
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
        {pokemon.types?.map((type) => (
          <TypeBadge key={type} type={type} typeColors={typeColors} />
        ))}
      </Box>
    </Paper>
  );
};

export default PokemonCard;
import React, { useState } from 'react';
import { Box, Typography, Button, Paper, alpha, Grid } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';
import TypeBadge from './TypeBadge';

const PokemonDetail = ({ pokemon, typeColors }) => {
  const { language } = useLanguage();
  const [showMoves, setShowMoves] = useState(false);
  const name = pokemon.names[language] || pokemon.names['en'];

  return (
    <Paper sx={{ 
      p: 4, borderRadius: 8, color: 'white',
      bgcolor: 'rgba(180, 200, 239, 0.85)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center'
    }}>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>{name}</Typography>
      <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.5)', mb: 2 }}>
        No. {pokemon.id.toString().padStart(3, '0')}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
        {pokemon.types.map(type => <TypeBadge key={type} type={type} typeColors={typeColors} />)}
      </Box>
      <Box component="img" src={pokemon.image} alt={name} sx={{ width: 200 }} />

      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={6}>
          <Typography variant="body2" color="rgba(255,255,255,0.6)">Taille</Typography>
          <Typography variant="h6">{pokemon.height / 10} m</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="rgba(255,255,255,0.6)">Poids</Typography>
          <Typography variant="h6">{pokemon.weight / 10} kg</Typography>
        </Grid>
      </Grid>

      <Button 
        fullWidth variant="contained" 
        onClick={() => setShowMoves(!showMoves)}
        sx={{ borderRadius: 4, py: 1.5, fontWeight: 'bold', textTransform: 'none' }}
      >
        {showMoves ? "Masquer capacités" : `Voir les mouvements (${pokemon.moves.length})`}
      </Button>

      {showMoves && (
        <Box sx={{ mt: 3, maxHeight: 200, overflowY: 'auto', textAlign: 'left', p: 2, bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 4 }}>
          {pokemon.moves.map(move => <Typography key={move} variant="body2" sx={{ mb: 0.5 }}>• {move}</Typography>)}
        </Box>
      )}
    </Paper>
  );
};

export default PokemonDetail;
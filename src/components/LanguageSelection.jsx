import React from 'react';
import { Select, MenuItem } from '@mui/material';
import { useLanguage } from '../context/LanguageContext'; // Utilisation du hook global [4]

const LanguageSelection = () => {
  const { language, setLanguage } = useLanguage(); // Récupère les données du contexte [3]

  return (
    <Select
      value={language}
      onChange={(e) => setLanguage(e.target.value)} // Met à jour globalement [3, 5]
      size="small"
      sx={{ color: '#555', border: '1px solid #555', bgcolor: 'rgba(255,255,255,0.1)' }}
    >
      <MenuItem value="fr">FR</MenuItem>
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="de">DE</MenuItem>
      <MenuItem value="it">IT</MenuItem>
      <MenuItem value="es">ES</MenuItem>
      <MenuItem value="ko">KO</MenuItem>
      <MenuItem value="ja">JA</MenuItem>
    </Select>
  );
};

export default LanguageSelection;
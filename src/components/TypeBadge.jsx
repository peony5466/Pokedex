import React from 'react';
import { Chip } from '@mui/material';
import { useLanguage } from '../context/LanguageContext';

const TypeBadge = ({ type, typeColors }) => {
  const {language} = useLanguage();
  const normalizedType = type.toLowerCase();
  const colorData = typeColors[normalizedType];
  
  const backgroundColor = colorData?.backgroundColor || '#ccc';
  const label = colorData?.translations[language] || colorData?.translations?.en || type; // Vous pouvez adapter selon la langue actuelle si besoin

  return (
    <Chip 
      label={label} 
      size="small" 
      sx={{ backgroundColor, color: 'white', fontWeight: 'bold', textTransform: 'uppercase' }} 
    />
  );
};

export default TypeBadge;
import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Création du conteneur global pour la langue [2]
const LanguageContext = createContext(null);

// 2. Le Fournisseur (Provider) qui enveloppe l'application [2, 3]
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('pokedex-lang') || 'fr'; 
  }); // État initial [2]

  useEffect (() => { 
    localStorage.setItem('pokedex-lang', language);
  }, [language]);

  // On transmet la langue et la fonction de modification [3]
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 3. Le Hook pour consommer la langue dans les composants [3, 4]
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage doit être utilisé à l'intérieur d'un LanguageProvider"); // Sécurité [4]
  }
  return context;
};
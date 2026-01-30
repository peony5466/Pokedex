import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';
import { ThemeProvider,  createTheme, CssBaseline, Box, CircularProgress, Typography } from '@mui/material';
import { LanguageProvider } from './context/LanguageContext';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import Header from './components/Header';

//const theme = createTheme({ palette: { mode: 'dark', background: '#ff7f50' , primary: { main: '#ff7f50' } } });

// Layout global pour inclure le Header sur  page 
const RootLayout = ({ toggleTheme, mode }) => (
  <Box sx={{ minHeight: '100vh', transition: '0.3s' }}> 
    <Header toggleTheme = {toggleTheme} mode = {mode} />
    <Outlet /> 
  </Box>
);

function App() {
  const [searchTerm, setSearchTerm] = useState(() => 
    localStorage.getItem('pokedex-search') || '');
  const [mode , setMode] = useState(() => 
    localStorage.getItem('pokedex-theme') || 'dark');


  useEffect(()=>{
    localStorage.setItem('pokedex-theme', mode);
  },[mode]);


  useEffect(()=> {
    localStorage.setItem('pokedex-search', searchTerm);
  }, [searchTerm]);


  const {data: pokemons, isLoading: loadPokes } = useQuery({
    queryKey: ['pokemons'],
    queryFn: ( ) => axios.get('https://pokedex-jgabriele.vercel.app/pokemons.json').then(res=> res.data)
  });


  const {data: typeColors, isLoading: loadTypes} = useQuery({
    queryKey: ['types'],
    queryFn: ()=> axios.get('https://pokedex-jgabriele.vercel.app/types.json').then (res =>res.data)
  });


  const theme = useMemo(()=> createTheme({
    palette: {
      mode: mode,
      primary: {main: '#ff7f50'},
      background:{
        default: mode === 'dark' ? '#0B1020 ' : 'rgba(180, 200, 239, 0.85) ', // Navy profond en mode sombre
        paper: mode === 'dark' ? '#080c1b' : '#f1f0a7aa',
      }
    },
  }), [mode]);

//basculer entre les 2 modes
  const toggleTheme = () =>{
    setMode((prevMode)=>(prevMode === 'light' ? 'dark' : 'light'));
  };



  if(loadPokes || loadTypes){
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt:10}}>
        <CircularProgress color='primary'></CircularProgress>
      </Box>
    );
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout toggleTheme= {toggleTheme} mode = {mode} />}>
        <Route index element={
          <PokemonListPage 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
            pokemons={pokemons} // On passe la liste récupérée via l'URL [1]
            typeColors={typeColors}
          />
        } />
        <Route path="pokemon/:id" element={<PokemonDetailPage pokemons = {pokemons} typeColors = {typeColors} />} />
      </Route>
    )
  );

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </ThemeProvider>
  );
}
export default App;
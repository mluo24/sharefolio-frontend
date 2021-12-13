import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages/Index';

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stories" element={<Index />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages/Index';
import GeneralLayout from "./GeneralLayout";

const theme = createTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route element={<GeneralLayout />}>
              <Route index element={<Home />} />
              <Route path="stories" element={<Index />} />
          </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

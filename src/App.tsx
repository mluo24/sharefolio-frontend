import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import GeneralLayout from "./GeneralLayout";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="stories" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

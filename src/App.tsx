import "./App.css";
import { ThemeProvider, createTheme, LinkProps } from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./Pages/Home";
import Stories from "./Pages/Stories";
import GeneralLayout from "./GeneralLayout";
import React from "react";
import Categories from "./Pages/Categories";

const LinkBehavior = React.forwardRef<
  any,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<GeneralLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="stories" element={<Stories />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

import "./App.css";
import {
  ThemeProvider,
  createTheme,
  LinkProps,
  ListItemButtonProps,
} from "@mui/material";
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
import PageNotFound from "./Pages/PageNotFound";
import Story from "./Pages/Story";
import Chapter from "./Pages/Chapter";
import Category from "./Pages/Category";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import store, {persistor} from "./store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";

// this part is used to make sure that links use react router for routing
const LinkBehavior = React.forwardRef<any,
  Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }>((props, ref) => {
  const {href, ...other} = props;
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
    MuiListItemButton: {
      defaultProps: {
        component: LinkBehavior,
      } as ListItemButtonProps,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter>
            <Routes>
              <Route element={<GeneralLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route
                  path="login"
                  element={
                    <ProtectedRoute>
                      <Login/>
                    </ProtectedRoute>
                  }
                />
                <Route path="register" element={<Register/>}/>
                <Route path="profile">
                  <Route
                    index
                    element={
                      <ProtectedRoute>
                        <Profile/>
                      </ProtectedRoute>
                    }
                  />
                  <Route path="edit" element={<ProtectedRoute><EditProfile/></ProtectedRoute>}/>
                </Route>
                <Route path="stories">
                  <Route index element={<Stories/>}/>
                  <Route path=":storyid/:storyslug" element={<Story/>}/>
                  <Route
                    path=":storyid/:storyslug/c/:chapterid"
                    element={<Chapter/>}
                  />
                </Route>
                <Route path="categories">
                  <Route index element={<Categories/>}/>
                  <Route path=":categoryslug" element={<Category/>}/>
                </Route>
              </Route>
              <Route path="*" element={<PageNotFound/>}/>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

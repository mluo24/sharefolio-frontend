import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../store";
import { ChildrenProps } from "../Types/PageProps";

// probably replace this with the tutorial
// https://dev.to/koladev/django-rest-authentication-cmh
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
const ProtectedRoute = (props: ChildrenProps) => {
  const auth = useSelector((state: RootState) => state.auth);
  let location = useLocation();

  if (!auth.account) {
    if (location.pathname !== "/login") return <Navigate replace to="/login" />;
    else return props.children;
  } else {
    if (location.pathname === "/login") return <Navigate replace to="/" />;
    else return props.children;
  }
};

export default ProtectedRoute;

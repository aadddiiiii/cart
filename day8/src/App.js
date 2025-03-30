import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home  from "./HOME/Home";
import { Profile } from "./PROFILE/Profile";
import { Login } from "./LOGIN/Login";
import { Firstnav } from "./Components/NAVBAR/Firstnav";
import { ProtectedRouter } from "./Components/NAVBAR/protectedRouter";
import { Notfound } from "./NOTFOUND/Notfound";
import Signin from "./SIGNIN/Signin";

function App() {
  const route = createBrowserRouter([
    {
      path: "/home",
      element: (
        <ProtectedRouter>
          <Firstnav />
          <Home />
        </ProtectedRouter>
      ),
      errorElement: <Notfound />,
    },
    {
      path: "/profile",
      element: (
        <ProtectedRouter>
          <Firstnav />
          <Profile />
        </ProtectedRouter>
      ),
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default App;

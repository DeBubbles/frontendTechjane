import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Prijsvoorspeller from "./components/Pages/Prijsvoorspeller";
import Projects from "./components/Pages/Projects";
import Config from "./components/Pages/Config";
import Login from "./components/Pages/login";
import ForgotPassword from "./components/Pages/forgotpassword";
import Admin from "./components/Pages/Admin";

const Root = () => {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <Nav name="Home" account={false}></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </main>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "prijsvoorspeller",
          element: <Prijsvoorspeller />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "config",
          element: <Config />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

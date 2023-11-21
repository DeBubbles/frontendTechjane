import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Prijsvoorspeller from "./components/Pages/Prijsvoorspeller";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Login from "./components/Pages/login";
import Register from "./components/Pages/register";
import ForgotPassword from "./components/Pages/forgotpassword";

const Root = () => {
  return (
    <>
      <Nav name="Home" account={false}></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
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
          path: "contacts",
          element: <Contact />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
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

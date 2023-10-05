//import "./App.css";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav name="Home" account={false}></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

const App = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "prijsvoorspeller",
                // element: <Home/>
            },
            {
                path: "projects",
                // element: <Detail/>
            }
        ]
    }
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//import "./App.css";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Nav name="Home" account={false}></Nav>
      <div style={{height:500}}></div>
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

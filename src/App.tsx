//import "./App.css";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav name="Home" account={false}></Nav>
      <div style={{height:500}}></div>
      <Footer></Footer>
    </>
  );
}

export default App;

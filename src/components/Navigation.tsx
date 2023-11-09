import "./css/navigation.css";
import {
  useParams,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import logo from "../assets/techjane.png";
import placeholder from "../assets/placeholder_account.jpg";

interface NavigationProps {
  name: string;
  account: boolean;
}

const Nav = (props: NavigationProps) => {
  document.title = props.name;
  if (props.account) {
    return (
      <section id="navigation">
        <div>
          <a href="https://techjane.be/">
            <img src={logo} alt="logo techjane"></img>
          </a>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="prijsvoorspeller">Prijsvoorspeller</Link>
            </li>
            <li>
              <Link to="">Projects</Link>
            </li>
          </ul>
          <button>
            <img src={placeholder} alt="placeholder"></img>
          </button>
        </div>
      </section>
    );
  } else {
    return (
      <section id="navigation">
        <div>
          <a href="https://techjane.be/">
            <img src={logo} alt="logo techjane"></img>
          </a>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="prijsvoorspeller">Prijsvoorspeller</Link>
            </li>
            <li>
              <Link to="projects">Projects</Link>
            </li>
          </ul>
          <Link to="Login">Login</Link>
        </div>
      </section>
    );
  }
};

export default Nav;

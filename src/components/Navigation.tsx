import "./css/navigation.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/techjane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavigationProps {
  name: string;
  account: boolean;
}

function handleDropdown() {
  const dropdownMenu = document.getElementById("dropdownMenu") as HTMLElement;
  const dropdownContent = document.getElementById(
    "dropdownContent"
  ) as HTMLElement;

  dropdownContent.style.display = "none";

  dropdownMenu.addEventListener("mouseenter", () => {
    const dropdownRect = dropdownMenu.getBoundingClientRect();

    if (window.innerWidth - dropdownRect.right < dropdownContent.offsetWidth) {
      dropdownContent.style.right = "0";
      dropdownContent.style.left = "auto";
    } else {
      dropdownContent.style.left = `${dropdownRect.left}px`;
      dropdownContent.style.right = "auto";
    }

    dropdownContent.style.display = "block";
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownContent.style.display = "none";
  });

  document.addEventListener("click", (e: Event) => {
    const target = e.target as HTMLElement;
    if (!dropdownMenu.contains(target)) {
      dropdownContent.style.display = "none";
    }
  });
}

const Nav = (props: NavigationProps) => {
  useEffect(() => {
    handleDropdown();
  }, []);
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
              <Link to="projects">Projects</Link>
            </li>
          </ul>
          <ul>
            <li>
              <a href="Login">Login</a>
            </li>
            <li className="dropdown" id="dropdownMenu">
              <a href="#" className="dropbtn">
                Menu &#9776;
              </a>
              <ul className="dropdown-content" id="dropdownContent">
                <li>
                  <Link to="config">
                    <button>Configuration</button>
                  </Link>
                </li>
                <li>
                  <Link to="admin">
                    <button>Admin</button>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
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
          <ul>
            <li className="dropdown" id="dropdownMenu">
              <a href="#" className="dropbtn">
                Menu &#9776;
              </a>
              <ul className="dropdown-content" id="dropdownContent">
                <li>
                  <Link to="config">
                    <FontAwesomeIcon icon={["fas", "cogs"]} size="1x" />
                    <button>Configuration</button>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  }
};

export default Nav;

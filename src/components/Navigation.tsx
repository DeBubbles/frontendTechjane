import "./css/navigation.css";
import logo from "../assets/techjane.png";
import placeholder from "../assets/placeholder_account.jpg";

interface NavigationProps {
  name: string;
  account: boolean;
}

const Nav = (props: NavigationProps) => {
  document.title = props.name;
  if(props.account){
    return (
      <section id="navigation">
        <div>
          <a href="https://techjane.be/"><img src={logo} alt="logo techjane" ></img></a>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Prijsvoorspeller</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <button><img src={placeholder} alt="placeholder"></img></button>
        </div>
      </section>
    );
  }else{
    return (
      <section id="navigation">
        <div>
          <a href="https://techjane.be/"><img src={logo} alt="logo techjane" ></img></a>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Prijsvoorspeller</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <a href="#">Login</a>
        </div>
      </section>
    );
  }
  
};

export default Nav;

import "./css/navigation.css";
import placeholder from "../assets/placeholder_account.jpg";

interface NavigationProps {
  name: string;
  account: boolean;
}

const Nav = (props: NavigationProps) => {
  if(props.account){
    return (
      <section>
        <div>
          <h1>{props.name}</h1>
          <ul>
            <li>Home</li>
            <li>Prijsvoorspeller</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <button><img src={placeholder} alt="placeholder"></img></button>
        </div>
      </section>
    );
  }else{
    return (
      <section>
        <div>
          <h1>{props.name}</h1>
          <ul>
            <li>Home</li>
            <li>Prijsvoorspeller</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <a href="#">Login</a>
        </div>
      </section>
    );
  }
  
};

export default Nav;

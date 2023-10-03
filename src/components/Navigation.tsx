import "./css/navigation.css";

interface NavigationProps {
  name: string;
}

const Nav = (props: NavigationProps) => {
  return (
    <section>
      <div>
        <h1>{props.name}</h1>
        <ul>
          <li>Home</li>
          <li>Prijsvoorspeller</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </section>
  );
};

export default Nav;

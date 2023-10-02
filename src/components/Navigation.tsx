import "./css/navigation.css";

interface NavigationProps {
  name: string;
}

const Nav = (props: NavigationProps) => {
  return (
    <>
      <div>
        <figure>
          <img src="" alt="" />
        </figure>
      </div>
      <h1>{props.name}</h1>
      <div>
        <ul>
          <li>Home</li>
          <li>Prijsvoorspeller</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;

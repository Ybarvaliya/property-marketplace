import NavBar from "./NavBar";
import './Header.css'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="logo">XYZ Industries</div>
      <NavBar></NavBar>
      <div className="buttons">
        <button className="button1">Sign Up</button>
        <button className="button2">Sign In</button>
      </div>
    </div>
  );
};

export default Header;

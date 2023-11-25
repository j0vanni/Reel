import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/reel_logo.png";
import "./Navbar.css";

//this will just be the blocks rendered above and below the links for looks
const BlocksRow = ({width, position}) => {
  const numberOfBlocks = Math.floor(width / 20);

  return (
    <div className={`blocks-row ${position === 'top' ? 'blocks-row-top' : 'blocks-row-bottom'}`}>
      {Array(numberOfBlocks)
        .fill(null)
        .map((_, i) => (
          <div className="block" key={i}></div>
        ))}
    </div>
  )
}


function Navbar() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav-holder">
      <div>
        <Link to="/">
          <img src={logo} alt="Reel" className="logo" />
        </Link>
      </div>
      <BlocksRow width={windowWidth} position='top'/>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/upload">Upload</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
      <BlocksRow width={windowWidth} position='bottom'/>
    </nav>
  );
}
export default Navbar;

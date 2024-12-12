// CSS
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="alignNavbar">
          <h3>
            <span className="highlight">Discover</span> some
            <span className="highlight">more</span> about our business
          </h3>
          <div className="links">
            <a href="#about-us">About us</a>|<a href="#services">Services</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

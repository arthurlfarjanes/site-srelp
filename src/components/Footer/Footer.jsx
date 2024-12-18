// CSS
import "./Footer.css";

// Images
import reactLogo from "../../assets/images/react.svg";
import gmailLogo from "../../assets/images/gmail.png";
import Logo from "../../assets/images/logo-completo.png";
import Instagram from "../../assets/images/instagram.svg";

// External Libs
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="background">
          <div className="align-footer-column">
            <div className="footer-column">
              <div className="divLogo">
                <h1 className="h1-footer">
                  Strategic Real Estate Legal Partners
                </h1>
              </div>
            </div>
          </div>
          <div className="align-footer-column">
            <div className="footer-column">
              <h3>Learn</h3>
              <ul>
                <li>
                  <a href="#about-us">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <img src={Logo} alt="" className="iconCasa" />
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <Tooltip title="carolinamussifialdini@gmail.com">
                <a href="mailto:carolinamussifialdini@gmail.com">
                  <img className="medium-icon" src={gmailLogo} alt="E-mail" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="rodape">
          <span>Developed by Arthur Lanzilotti Farjanes</span> <span>|</span>
          <a href="https://www.instagram.com/arthur_lanzi/" target="_blank">
            <img src={Instagram} alt="" className="small-icon" />
          </a>
          <a
            href="https://react.dev/blog/2023/03/16/introducing-react-dev"
            target="_blank"
          >
            <img src={reactLogo} alt="" className="small-icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

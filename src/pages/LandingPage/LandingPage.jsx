// CSS
import "./LandingPage.css";

// Components
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ScrollTop from "../../components/ScrollTop/ScrollTop";
import AboutUs from "../../components/AboutUs/AboutUs";
import Services from "../../components/Services/Services";

// React
import { useMenu } from "../../context/MenuContext/MenuContext";

function LandingPage() {
  const { isMenuOpen } = useMenu();
  return (
    <>
      <div className="LandingPage">
        <div className="alignTop">
          <Header />
        </div>
        <div className="section-top">
          <h1>COMING SOON...</h1>
          <h2>
            Our <span className="highlight">website</span> will
            <span className="highlight"> soon</span> be
            <span className="highlight"> live</span>
          </h2>
        </div>
        <AboutUs />
        {/* <div className="divisor-smaller"></div> */}
        <Services />
        <Footer />
      </div>
      <ScrollTop />
    </>
  );
}

export default LandingPage;

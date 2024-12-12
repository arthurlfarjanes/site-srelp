// CSS
import "./ScrollTop.css";

// React
import { useState } from "react";

// Image
import upOutline from "../../assets/images/chevron-up.png";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true);
    } else if (scrolled <= 150) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button className={visible ? "ScrollTopBtn" : "displayBtnNone"}>
      <img src={upOutline} alt="" onClick={scrollToTop} />
    </button>
  );
}

export default ScrollTop;

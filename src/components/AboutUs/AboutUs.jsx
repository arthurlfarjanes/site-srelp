// CSS
import "./AboutUs.css";

// Images
import image1 from "../../assets/images/mercado-imobiliario-brasileiro1.jpg";

function AboutUs() {
  return (
    <>
      <section id="about-us" className="section-aboutUs">
        <img className="imageFormat" src={image1} alt="Real Estate Market" />
        <div className="align-about-us">
          <h3>Get to know SRELP</h3>
          <div className="divisor-white"></div>
          <p>
            Strategic Real Estate Legal Partners (SRELP) offers a comprehensive
            suite of services designed to meet the diverse needs of our real
            estate clients. Our services encompass property acquisition and
            disposition, leasing and tenant representation, investment and
            portfolio management, property management, legal and regulatory
            compliance, and pro bono real estate rental listings for low-income
            families. Each service is meticulously crafted to ensure that our
            clients receive the highest level of expertise and support
            throughout the entire life cycle of their real estate ventures. We
            aim to create value for our clients by providing professional,
            efficient, and effective real estate services that meet their unique
            needs and objectives.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;

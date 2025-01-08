// CSS
import "./AboutUs.css";

// Images
import image1 from "../../assets/images/mercado-imobiliario-brasileiro1.jpg";
import check from "../../assets/images/accept.png";

function AboutUs() {
  return (
    <>
      <section id="about-us" className="section-aboutUs">
        <img className="imageFormat" src={image1} alt="Real Estate Market" />
        <div className="align-about-us">
          <h3>About Us: Carolina Mussi</h3>
          <div className="divisor-white"></div>
          <p>
            Carolina Mussi is a versatile and visionary professional in the
            legal and real estate sectors, with over a decade of experience
            leading teams and implementing strategic solutions to transform
            businesses. Her legal expertise, combined with an innovative
            perspective on the real estate market, allows her to create
            efficient and sustainable strategies across different segments, with
            a special focus on affordable housing. Her commitment to innovation
            and housing inclusion has generated a positive impact on companies
            and clients, solidifying her reputation as a reference in the
            industry.
          </p>
        </div>
      </section>

      <div className="alignContentAboutUs">
        <div className="contentAboutUs">
          <div className="contentGap">
            <h3>Transformative Achievements</h3>
            <h4>
              Carolina Mussi has a proven track record of impactful initiatives
              in the real estate market, including the development of
              high-performance teams in the affordable housing sector.
            </h4>
          </div>
          <div className="contentGap2">
            <p>
              <span className="highlight">
                Gabbai Construtora - Innovation in Affordable Housing:
              </span>{" "}
              At Gabbai Construtora, a company specializing in social housing
              and active in the Minha Casa Minha Vida program, Carolina
              structured an online sales division, ensuring that affordable
              homes reached the right audience. She implemented the CV -
              Construtor de Vendas CRM, hired and trained a team of five online
              sales agents and a coordinator, and played a key role in the sales
              of several housing developments focused on low-income families.
              Her work was crucial in optimizing processes and ensuring
              compliance with strict regulations, making sure that the
              properties benefited those who truly needed them.
            </p>
            <p>
              <span className="highlight">
                Agulha no Celeiro – Innovation in Property Acquisition:
              </span>{" "}
              At the Agulha no Celeiro real estate agency, Carolina pioneered
              property acquisition innovation by creating a specialized team
              supported by a cutting-edge Scraper bot. This automated tool
              scanned competitor websites and listings to identify potential
              properties, enabling faster and more efficient acquisitions. With
              a manager and six acquisition agents, the team successfully
              acquired 50 to 70 properties per month. Additionally, she
              modernized the legal department and is currently developing a
              rental and property management division to enhance client
              retention and expand the company’s services.
            </p>
            <p>
              <span className="highlight">
                Lopes Brasil – Leadership in Rental Market:
              </span>{" "}
              At Lopes Brasil Real Estate Consulting, Carolina led the rental
              department, managing multiple stores and teams. Her expertise
              ensured a seamless customer experience, overseeing the entire
              process from prospecting to contract closure, resulting in high
              client satisfaction rates and greater operational efficiency.
            </p>
          </div>

          <div className="uniqueValue">
            <h3>Carolina Mussi’s Unique Value</h3>
            <div className="align-check">
              <img className="small-icon" src={check} alt="" />
              <p>Leadership in complex projects.</p>
            </div>
            <div className="align-check">
              <img className="small-icon" src={check} alt="" />
              <p>
                Technological innovation applied to sales, property acquisition,
                and legal management..
              </p>
            </div>
            <div className="align-check">
              <img className="small-icon" src={check} alt="" />
              <p>
                Expertise in affordable housing, ensuring efficiency and
                compliance in social housing projects.
              </p>
            </div>
            <div className="align-check">
              <img className="small-icon" src={check} alt="" />
              <p>
                A strategic vision that connects real estate sales with
                long-term client retention through complementary services.
              </p>
            </div>
          </div>

          <div className="Mission">
            <h3>Mission</h3>
            <p>
              Carolina Mussi is committed to delivering comprehensive and
              innovative solutions in the legal and real estate sectors,
              promoting excellence in affordable housing, rentals, and property
              management. Her focus on client retention and value creation for
              investors and residents ensures that each project not only drives
              economic impact but also contributes to social development and
              access to dignified housing. Her passion for transforming
              challenges into opportunities makes every initiative unique and
              successful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

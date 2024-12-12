// CSS
import "./Services.css";

// React
import { useState } from "react";

// Images
import image2 from "../../assets/images/city4.webp";
import image3 from "../../assets/images/leasing.jpg";
import image4 from "../../assets/images/office.jpg";
import image5 from "../../assets/images/portfolio.jpg";
import image6 from "../../assets/images/compliance.webp";
import image7 from "../../assets/images/probono.jpg";
import setaBaixo from "../../assets/images/chevron-down.png";
import setaCima from "../../assets/images/chevron-up.png";
import check from "../../assets/images/accept.png";

function Services() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
  const [showMore4, setShowMore4] = useState(false);
  const [showMore5, setShowMore5] = useState(true);
  const [showMore6, setShowMore6] = useState(false);

  return (
    <>
      <section id="services" className="section-services">
        <div className="align-services-content">
          <div className="align-top-title">
            <h3>Services</h3>
            <h4>Learn more about what we do</h4>
          </div>
          <div className="align-all-services">
            <div className="service">
              <div className="align-service">
                <div className="title-alignment">
                  <div className="image-container">
                    <img
                      className="image-format-services"
                      src={image2}
                      alt=""
                    />
                    <div className="overlay"></div>
                    <h4>Property Acquisition and Disposition</h4>
                  </div>
                </div>
                <div className="align-preview-service">
                  <p>
                    Our Property Acquisition and Disposition service begins with
                    a detailed client consultation to understand their needs and
                    goals...
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMore1((prev) => !prev);
                  }}
                  className="show-more-btn"
                >
                  Show {showMore1 ? "Less" : "More"}{" "}
                  <img
                    className="small-icon"
                    src={showMore1 ? setaCima : setaBaixo}
                    alt=""
                  />
                </div>

                {showMore1 && (
                  <>
                    <div className="card-service">
                      <div className="numberIcon">1</div>
                      <p>
                        We conduct market research to identify suitable
                        properties, evaluate market trends and potential ROI,
                        and assist with due diligence, including inspections,
                        title searches, and environmental assessments, ensuring
                        no hidden issues.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">2</div>
                      <p>
                        After due diligence, we negotiate acquisition terms to
                        secure the best deal, manage contracts, and coordinate
                        with lenders for a smooth closing. Post-acquisition, we
                        offer support to help clients manage and optimize their
                        assets.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">3</div>
                      <p>
                        For property disposition, we conduct market analysis to
                        determine the best timing and strategy, create marketing
                        plans to attract buyers, and handle the entire sale
                        process, ensuring maximum ROI with minimal risks.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="service">
              <div className="align-service">
                <div className="title-alignment">
                  <div className="image-container">
                    <img
                      className="image-format-services"
                      src={image4}
                      alt=""
                    />
                    <div className="overlay"></div>
                    <h4>Leasing and Tenant Representation</h4>
                  </div>
                </div>
                <div className="align-preview-service">
                  <p>
                    Our Leasing and Tenant Representation service provides
                    tailored support for property owners seeking tenants or
                    clients searching for rental spaces...
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMore2((prev) => !prev);
                  }}
                  className="show-more-btn"
                >
                  Show {showMore2 ? "Less" : "More"}{" "}
                  <img
                    className="small-icon"
                    src={showMore2 ? setaCima : setaBaixo}
                    alt=""
                  />
                </div>
                {showMore2 && (
                  <>
                    <div className="card-service">
                      <div className="numberIcon">1</div>
                      <p>
                        We offer market analysis, competitive pricing
                        strategies, property marketing, tenant screening, and
                        lease negotiation, managing the entire leasing process.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">2</div>
                      <p>
                        For tenants, we assess their location, budget, and space
                        needs, conduct property searches, arrange tours, and
                        negotiate favorable lease terms. We also offer ongoing
                        support throughout the lease term to address any issues.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">3</div>
                      <p>
                        Our Leasing and Tenant Representation service fosters
                        mutually beneficial relationships, ensuring property
                        owners maximize occupancy and income while tenants find
                        suitable spaces. With expertise in lease negotiations
                        and market analysis, we provide insights to support
                        informed decisions for both parties.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="service">
              <div className="align-service">
                <div className="title-alignment">
                  <div className="image-container">
                    <img
                      className="image-format-services"
                      src={image5}
                      alt=""
                    />
                    <div className="overlay"></div>
                    <h4>Investment and Portfolio Management</h4>
                  </div>
                </div>
                <div className="align-preview-service">
                  <p>
                    Our Investment and Portfolio Management service starts with
                    assessing clients' goals, risk tolerance, and financial
                    situation...
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMore3((prev) => !prev);
                  }}
                  className="show-more-btn"
                >
                  Show {showMore3 ? "Less" : "More"}{" "}
                  <img
                    className="small-icon"
                    src={showMore3 ? setaCima : setaBaixo}
                    alt=""
                  />
                </div>
                {showMore3 && (
                  <>
                    <div className="card-service">
                      <div className="numberIcon">1</div>
                      <p>
                        We create a tailored investment strategy—focused on
                        growth, income, or balance—and identify opportunities
                        through detailed market research and analysis.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">2</div>
                      <p>
                        We assist clients in acquiring investments, managing
                        transactions from due diligence to closing. Our ongoing
                        portfolio management includes performance monitoring,
                        adjustments for optimized returns, market analysis,
                        property valuations, and financial reporting to keep
                        clients informed.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">3</div>
                      <p>
                        Our service includes strategic planning, asset
                        allocation for diversification, and alignment with
                        long-term goals. We advise on property improvements,
                        leasing, and value-enhancing initiatives to optimize
                        investment performance, helping clients build and manage
                        successful real estate portfolios with consistent
                        returns and growth.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="service">
              <div className="align-service">
                <div className="title-alignment">
                  <div className="image-container">
                    <img
                      className="image-format-services"
                      src={image3}
                      alt=""
                    />
                    <div className="overlay"></div>
                    <h4>Property Management</h4>
                  </div>
                </div>
                <div className="align-preview-service">
                  <p>
                    Our property management service includes assessing
                    properties, creating a tailored management plan, setting
                    rental rates, marketing to attract tenants, and scheduling
                    maintenance...
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowMore4((prev) => !prev);
                  }}
                  className="show-more-btn"
                >
                  Show {showMore4 ? "Less" : "More"}{" "}
                  <img
                    className="small-icon"
                    src={showMore4 ? setaCima : setaBaixo}
                    alt=""
                  />
                </div>
                {showMore4 && (
                  <>
                    <div className="card-service">
                      <div className="numberIcon">1</div>
                      <p>
                        We also manage tenant relations, including screening,
                        leasing, rent collection, and lease enforcement.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">2</div>
                      <p>
                        We offer financial reporting and analysis to keep
                        property owners updated on asset performance, including
                        income/expense reports, budget forecasts, and
                        improvement recommendations. We also manage property
                        maintenance and repairs, coordinating with contractors
                        for timely and efficient issue resolution.
                      </p>
                    </div>
                    <div className="card-service">
                      <div className="numberIcon">3</div>
                      <p>
                        Our Property Management service ensures professional and
                        efficient asset management, aiming to maximize rental
                        income, minimize vacancies, and maintain compliance. We
                        focus on enhancing the performance and profitability of
                        clients' real estate investments, providing peace of
                        mind.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="dif-format-service">
            <div className="align-dif-format">
              <div className="column-service">
                <h3>Legal and Regulatory Compliance</h3>
                <p>
                  The life cycle of our Legal and Regulatory Compliance service
                  begins with a comprehensive review of our client's properties
                  and operations to identify any potential legal or regulatory
                  issues.
                </p>
                <div
                  onClick={() => {
                    setShowMore5((prev) => !prev);
                  }}
                  className="show-more-btn"
                >
                  Show {showMore5 ? "Less" : "More"}{" "}
                  <img
                    className="small-icon"
                    src={showMore5 ? setaCima : setaBaixo}
                    alt=""
                  />
                </div>
                <div className="gap-div">
                  {showMore5 && (
                    <>
                      <div className="align-check">
                        <img className="small-icon" src={check} alt="" />
                        <p>
                          We guide compliance with local, state, and federal
                          regulations, including zoning laws, building codes,
                          environmental regulations, and fair housing laws. We
                          also assist with preparing and filing any necessary
                          permits, licenses, and other documentation.
                        </p>
                      </div>
                      <div className="align-check">
                        <img className="small-icon" src={check} alt="" />
                        <p>
                          We provide ongoing support to ensure our clients
                          comply with all relevant regulations. This includes
                          regular audits and inspections and updates on any
                          changes to laws or regulations that may impact their
                          properties or operations. We also provide training and
                          education to property owners and managers to help them
                          understand and comply with legal and regulatory
                          requirements.
                        </p>
                      </div>
                      <div className="align-check">
                        <img className="small-icon" src={check} alt="" />
                        <p>
                          Our Legal and Regulatory Compliance service is
                          designed to protect our clients from potential legal
                          and financial risks. We strive to ensure that their
                          properties and operations fully comply with all
                          relevant regulations, minimizing the risk of fines,
                          penalties, and other legal issues. Our goal is to
                          provide our clients with the peace of mind that comes
                          from knowing that all applicable laws and regulations
                          are managing their real estate investments.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="column-service-image">
                <img src={image6} alt="" />
              </div>
            </div>
          </div>

          <div className="all-in-pro-bono">
            <div className="overlay-bigger"></div>
            <div className="pro-bono-content">
              <h3>
                Pro Bono: Real Estate Rental Listing for Low-Income Families
              </h3>
              <div className="divisor"></div>
              <p>
                Our pro bono real estate rental listing service for low-income
                families begins with a thorough assessment of the families'
                housing needs and preferences. We work closely with local
                housing authorities, non-profit organizations, and community
                groups to identify available rental properties that meet the
                needs of lowincome families. We conduct a comprehensive search
                to identify suitable properties and arrange family property
                tours.
              </p>
              <p>
                Once a suitable property is found, we assist with the
                application and leasing process, providing guidance and support
                to ensure the families secure the rental housing they need. We
                also offer ongoing support throughout the lease term, addressing
                any issues or concerns that may arise and helping the families
                maintain stable housing.
              </p>
              <p>
                Our pro bono real estate rental listing service is designed to
                provide low-income families with safe, affordable housing
                access. We strive to create opportunities for these families to
                secure stable housing and improve their quality of life. By
                helping low-income families find and maintain affordable rental
                housing, we aim to positively impact our communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

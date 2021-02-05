import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Auth from "../../component/AuthComponent/Auth";
import "./Home.css";
import Image1 from "../../images/shield.svg";
import Image2 from "../../images/medal.svg";
import Image3 from "../../images/leverage.svg";
import Image4 from "../../images/seminar.svg";
import Image5 from "../../images/stock-market.svg";
import Image6 from "../../images/desktop-computer.svg";
import Image7 from "../../images/check-mark.svg";

const Home = () => {
  return (
    <>
      <Container fluid className="main">
        <Row>
          <Col as="main" lg={7} xs={12} className="main_container">
            <h1 className="main_header_text">
              Join over 3 million people who have already chosen RallyTrade
            </h1>
            <p className="main_subtext">
              Rally Trade is an international online broker providing highly
              competitive brokerage service to emerging financial economics. We
              infuse cutting edge technology, low transactional fees with an
              array of financial instruments to give you an unmatched trading
              experience
            </p>
            <div className="button_cont mt-5">
              <Button variant="success" className="w-50" size="lg">
                Join Now
              </Button>
            </div>
          </Col>
          <Col as="main" lg={5} xs={12} className="main_container2">
            <Auth />
          </Col>
        </Row>
      </Container>
      <Container fluid className="main_2">
        <Row>
          <Col xs={12} className="main_2_col1">
            <h6 className="core_main_text">OUR CORE VALUES</h6>
            <div className="core_values d-flex flex-wrap w-full">
              {/* Single Core */}
              <div className="single_core_values">
                <Image
                  fluid
                  src={Image1}
                  alt="Rally Trade"
                  className="single_core_image"
                />
                <h6 className="values_text">Regulated & Secure</h6>
              </div>
              {/* Single Core */}
              <div className="single_core_values">
                <Image
                  fluid
                  src={Image2}
                  alt="Rally Trade"
                  className="single_core_image"
                />
                <h6 className="values_text">Award Wining</h6>
              </div>
              {/* Single Core */}
              <div className="single_core_values">
                <Image
                  fluid
                  src={Image3}
                  alt="Rally Trade"
                  className="single_core_image"
                />
                <h6 className="values_text">1:1000 Leverage</h6>
              </div>
              {/* Single Core */}
              <div className="single_core_values">
                <Image
                  fluid
                  src={Image4}
                  alt="Rally Trade"
                  className="single_core_image"
                />
                <h6 className="values_text">Live Seminars and Trading</h6>
              </div>
              {/* Single Core */}
              <div className="single_core_values">
                <Image
                  fluid
                  src={Image5}
                  alt="Rally Trade"
                  className="single_core_image"
                />
                <h6 className="values_text">Advanced Trading Platform</h6>
              </div>
              {/* Single Core */}
              <div className="single_core_values">
                <Image
                  fluid
                  src={Image6}
                  alt="Rally Trade"
                  className="single_core_image"
                />
                <h6 className="values_text">500+ Trading Platforms</h6>
              </div>
            </div>
          </Col>
          <Col xs={12} className="main_col2">
            <h6 className="core_main_text core_main_text2">
              Open Your Account To Start Trading Today
            </h6>
            <div className="core_values d-flex flex-wrap w-full">
              {/* Single Account */}
              <div className="single_account_cont">
                <h6 className="single_account_main_text">Basic Account</h6>
                <h6 className="single_account_sub_text">
                  <span>$100</span> + Bonus
                </h6>
                <h6 className="single_account_detail">
                  Same competitive spreads, smaller trade sizes
                </h6>

                <div className="divider"></div>
                <h6 className="single_account_include">INCLUDES</h6>
                <div className="content_account mt-2">
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                </div>
                <div className="mt-5">
                  <Button variant="success" block size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
              {/* Single Account */}
              <div className="single_account_cont">
                <h6 className="single_account_main_text">Standard Account</h6>
                <h6 className="single_account_sub_text">
                  <span>$100</span> + Bonus
                </h6>
                <h6 className="single_account_detail">
                  Competitive spreads, all round offering
                </h6>

                <div className="divider"></div>
                <h6 className="single_account_include">INCLUDES</h6>
                <div className="content_account mt-2">
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                </div>
                <div className="mt-5">
                  <Button variant="success" block size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
              {/* Single Account */}
              <div className="single_account_cont">
                <h6 className="single_account_main_text">Pro Account</h6>
                <h6 className="single_account_sub_text">
                  <span>$500</span> + Bonus
                </h6>
                <h6 className="single_account_detail">
                  No commission, no requotes, super tight spreads
                </h6>

                <div className="divider"></div>
                <h6 className="single_account_include">INCLUDES</h6>
                <div className="content_account mt-2">
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                  {/* Single */}
                  <div className="single_include d-flex justify-between mt-3">
                    <Image
                      fluid
                      src={Image7}
                      alt="Rally Trade"
                      className="check"
                    />
                    <h6 className="single_include_text ml-3 mt-2">
                      Lorem Ipsum
                    </h6>
                  </div>
                </div>
                <div className="mt-5">
                  <Button variant="success" block size="lg">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;

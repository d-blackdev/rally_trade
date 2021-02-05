import React from "react";
import { Col, Image, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <Container className="footer" fluid>
      <Row>
        <Col sm={6} md={4} lg={4}>
          <div className="footer_logo_cont">
            <Link to="/" className="navbar-logo">
              <p>RallyTrade</p>
            </Link>
          </div>
          <h6 className="footer_header">FRNG Lagos</h6>

          <h6 className="footer_address">
            Fanis House, 21 Adeniyi Jones Avenue,Ikeja,Lagos State
          </h6>
          <h6 className="footer_address2">Phone: +234 901 874 0318</h6>
        </Col>
        <Col sm={6} md={4} lg={3}>
          <h6 className="footer_header">FRNG PortHarcourt</h6>
          {/* LINKS */}
          <h6 className="footer_address">
            Fanis House, 21 Adeniyi Jones Avenue,Ikeja,Lagos State
          </h6>
          <h6 className="footer_address2">Phone: +234 901 874 0318</h6>
        </Col>
        <Col sm={6} md={4} lg={2}>
          <h6 className="footer_header">Customer Care</h6>
          {/* LINKS */}
          <h6 className="footer_address">
            Fanis House, 21 Adeniyi Jones Avenue,Ikeja,Lagos State
          </h6>
          <h6 className="footer_address2">Phone: +234 901 874 0318</h6>
        </Col>
        <Col sm={6} md={4} lg={3}>
          <h6 className="footer_header">Customer Care</h6>
          {/* LINKS */}
          <h6 className="footer_address">
            Fanis House, 21 Adeniyi Jones Avenue,Ikeja,Lagos State
          </h6>
          <h6 className="footer_address2">Phone: +234 901 874 0318</h6>
          {/* ICONS */}
          <div className="footer_icons">
            <Link to="#" className="footer_icon">
              <FaFacebook className="single_footer_icon" />
            </Link>
            <Link to="#" className="footer_icon">
              <FaTwitter className="single_footer_icon" />
            </Link>
            <Link to="#" className="footer_icon">
              <FaInstagram className="single_footer_icon" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;

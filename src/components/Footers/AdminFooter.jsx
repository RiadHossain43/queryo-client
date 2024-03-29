import React from "react";

// reactstrap components
import { Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="12">
          <div className="copyright text-center text-xl-left text-muted">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="https://github.com/RiadHossain43/queryo-client"
              rel="noopener noreferrer"
              target="_blank"
            >
              Queryo 
            </a>{" "}
            all rights reserved
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

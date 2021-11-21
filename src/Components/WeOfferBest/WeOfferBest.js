import React from "react";
import { Col, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
const WeOfferBest = () => {
  return (
    <div className="container my-3">
      <Fade bottom>
        <h1 className="my-4 p-3 display-6">We offer best The best Trips</h1>
      </Fade>
      <Row xs={1} md={2} lg={2} className="g-3">
        <Col>
          <div
            className="d-flex shadow p-3  h-100"
            style={{ borderRadius: "11px" }}
          >
            <div className="m-3">
              <i className="fas fa-ship fa-4x text-primary"></i>
            </div>
            <div>
              <h4>Various Adventures</h4>
              <p>We offer various types of Adventure Trip in resonable Price</p>
            </div>
          </div>
        </Col>
        <Col>
          <div
            className="d-flex shadow p-3 h-100"
            style={{ borderRadius: "11px" }}
          >
            <div className="m-3">
              <i className="fas fa-car fa-4x text-primary"></i>
            </div>
            <div>
              <h4>Family Trips</h4>
              <p>
                For family trps our packages are awesome there are lots of
                reasonable packages here
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div
            className="d-flex shadow p-3  h-100"
            style={{ borderRadius: "11px" }}
          >
            <div className="m-3">
              <i className="fas fa-box-open fa-4x text-primary"></i>
            </div>
            <div>
              <h4>Custom Packages</h4>
              <p>We offer Custom packages tour resonable Price</p>
            </div>
          </div>
        </Col>
        <Col>
          <div
            className="d-flex shadow p-3  h-100"
            style={{ borderRadius: "11px" }}
          >
            <div className="m-3">
              <i className="fas fa-suitcase-rolling fa-4x text-primary"></i>
            </div>
            <div>
              <h4>Complete Guide</h4>
              <p>
                We also offer complete guide packages those who needs guide can
                book the package
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WeOfferBest;

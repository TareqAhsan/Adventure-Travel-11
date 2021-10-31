import React from "react";
import { Carousel } from "react-bootstrap";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src="https://i.ibb.co/s54dz2C/14.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src="https://i.ibb.co/L81LbW1/7.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src="https://i.ibb.co/mvdrnYp/6.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

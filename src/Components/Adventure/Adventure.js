import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom'
const Adventure = () => {
  return (
    <Container>
      <h1 className="my-3 py-4">Take yourself in an Adventure Ideas</h1>
      <Row xs={1} md={2} className="g-4">
        <Zoom>
          <Card className="bg-dark text-white">
            <Card.Img src="https://i.ibb.co/NnTdJj8/sky.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Sky diving</Card.Title>
              <Card.Text>
                Skydiving is parachuting from an airplane for fun. ... Skydiving
                includes free falling (usually from an aeroplane) through the
                air prior to opening a parachute.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Zoom>
        <Zoom>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.ibb.co/b7SPyWb/group-of-young-people-on-kayak-outing-rafting-down-the-river.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Kayaking</Card.Title>
              <Card.Text>
                Kayaking is the use of a kayak for moving over water. ... A
                kayak is a low-to-the-water, canoe-like boat in which the
                paddler sits facing forward, legs in front, using a
                double-bladed paddle to pull front-to-back on one side and then
                the other in rotation
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Zoom>
        <Zoom>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.ibb.co/c1mJ4nk/Pescasseroli-AQ-Italy-August-31-2017-Group-of-hikers-reach-the-top-of-the-ridges-of-the-mountains-of.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Hill tracking</Card.Title>
              <Card.Text>
                Brings to surface the hidden passions of many individuals who
                are in want of adventure . The Trekking routes are made to pass
                through the valleys so that the dense forests , fresh water
                streams , steep hills provide enough material for adventur
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Zoom>
        <Zoom>
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://i.ibb.co/TYkpTFD/Young-man-bungee-jumping-over-river.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Bungee Jump</Card.Title>
              <Card.Text>
                Bungee jumping is an adventurous sport in which people jump from
                higher ground such as a bridge with an elastic rope tied to
                their ankles to stop them from hitting the ground.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Zoom>
      </Row>
    </Container>
  );
};

export default Adventure;

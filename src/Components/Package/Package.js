import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
const Package = ({ pack }) => {
  const { name, img, price, description, _id } = pack;
  return (
    <Zoom>
      <Card className="h-100 rounded">
        <Card.Img
          style={{ height: "250px" }}
          className="rounded"
          variant="top"
          src={img}
        />
        <Card.Body className="pb-0">
          <Card.Title className="mb-1">{name}</Card.Title>
          <Card.Title className="mb-1">price ${price}</Card.Title>
          <Card.Text className="mb-0">{description.slice(0, 160)}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <Link to={`/placebook/${_id}`}>
            <Button
              // onClick={() => addAppointment(service)}
              variant="primary"
              className="w-50 m-1"
            >
              BookNow
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Zoom>
  );
};

export default Package;

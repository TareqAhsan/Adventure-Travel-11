import React from "react";
import { Row, Spinner } from "react-bootstrap";
import useAuth from "../hooks/useAuth";
import Package from "../Package/Package";
const Packages = () => {
  const { packages, setPackages } = useAuth();
  return (
    <div className="bg-light p-5">
      <div className="container  pt-4 text-center">
        <h1 className="text-primary my-3 py-3 display-4">Our Packages</h1>
        {
          !packages?.length ? <Spinner animation="border"  variant="primary"></Spinner>:
          <Row xs={1} md={2} lg={3} className="g-4">
          {packages?.map((pack) => (
            <Package key={pack._id} pack={pack}></Package>
          ))}
        </Row>
        }
      </div>
    </div>
  );
};

export default Packages;

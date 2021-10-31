import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const MyBooking = () => {
  const [mybookings, setMybookings] = useState();
  const { allContext } = useAuth();
  const { user } = allContext;
  const email = user?.email;
  useEffect(() => {
    axios(`https://macabre-goosebumps-11185.herokuapp.com/book/${email}`).then((result) => {
      setMybookings(result.data);
    });
  }, [email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to cancel ?");
    if (proceed) {
      axios.delete(`https://macabre-goosebumps-11185.herokuapp.com/book/${id}`).then((result) => {
        if (result.data.deletedCount > 0) {
          alert("booking cancel successfully");
          const remain = mybookings.filter((remain) => remain._id !== id);
          setMybookings(remain);
        }
      });
    }
  };
  return (
    <div className="container my-5">
      {mybookings?.length ? (
        <h1 className="py-3">You have book the following package</h1>
      ) : (
        <h1 className="py-5 my-5 display-2">You have no bookings</h1>
      )}
      <div className="row g-4">
        {mybookings?.map((singleData) => (
          <div
            className="card mb-3 shadow col-lg-6 col-12 p-2"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={singleData?.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body p-1">
                  <h5 className="card-title">{singleData?.name}</h5>
                  <h6>Price :{singleData?.price}</h6>
                  <p className="card-text m-0">
                    {singleData?.description.slice(0, 160)}
                  </p>
                  <Button
                    onClick={() => handleDelete(singleData?._id)}
                    className="m-2 btn-danger"
                  >
                    cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;

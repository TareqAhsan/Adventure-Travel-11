import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../hooks/useAuth";

const PlaceBook = () => {
  const [singleData, setSingleData] = useState();
  const { allContext } = useAuth();
  const { user } = allContext;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  useEffect(() => {
    axios(`https://macabre-goosebumps-11185.herokuapp.com/packages/${id}`).then(
      (result) => {
        setSingleData(result.data);
      }
    );
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    singleData.email = data.email;
    singleData.status = "pending";
    delete singleData._id;
    axios
      .post(
        "https://macabre-goosebumps-11185.herokuapp.com/book/add",
        singleData
      )
      .then((result) => {
        console.log(result.data);
        if (result.data.insertedId) {
          alert("book confirmed");
          reset();
        }
      });
  };
  return (
    <div className="container my-5">
      <div className="py-3 mt-3">
        <h1 className="my-2 pb-2">Place your Booking here</h1>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <Row xs={1} lg={2}>
              <Col>
                <img className="img-fluid" src={singleData?.img} />
              </Col>
              <Col>
                <h6 className="text-uppercase">{singleData?.name}</h6>
                <h6>Price :{singleData?.price}</h6>
                <p>{singleData?.description.slice(0, 160)}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow p-3 rounded-3"
            >
              {/* register your input into the hook by invoking the "register" function */}
              <input
                className="form-control mb-3"
                defaultValue={user?.displayName}
                {...register("name")}
                readOnly
                placeholder="name"
              />
              <input
                className="form-control mb-3"
                defaultValue={user?.email}
                {...register("email")}
                placeholder="email"
                readOnly
              />
              <input
                className="form-control mb-3"
                defaultValue=""
                {...register("city")}
                placeholder="city"
              />
              <input
                className="form-control mb-3"
                defaultValue=""
                {...register("address")}
                placeholder="Address"
              />

              {/* include validation with required or other standard HTML validation rules */}
              <input
                className="form-control mb-3"
                {...register("PhoneNo", { required: true })}
                placeholder="phoneNo"
              />
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="PlaceBooking"
              />
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PlaceBook;

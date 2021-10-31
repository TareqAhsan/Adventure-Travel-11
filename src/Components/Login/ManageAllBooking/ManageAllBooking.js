import axios from "axios";
import React, { useEffect, useState } from "react";

const ManageAllBooking = () => {
  const [manage, setManage] = useState();
  useEffect(() => {
    axios(`https://macabre-goosebumps-11185.herokuapp.com/manage`).then((result) => {
      setManage(result.data);
    });
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are sure want to delete ?");
    if (proceed) {
      axios.delete(`https://macabre-goosebumps-11185.herokuapp.com/manage/${id}`).then((result) => {
        if (result.data.deletedCount > 0) {
          alert("deleted successfully");
          const remain = manage.filter((data) => data._id !== id);
          setManage(remain);
        }
      });
    }
  };

  return (
    <div className="container my-5">
      <h1 className="py-3">Manage Booking</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">package</th>
            <th scope="col">email</th>
            <th scope="col">status</th>
            <th scope="col">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {manage?.map((data) => (
            <tr key={data._id}>
              <th scope="row">{data.name}</th>
              <td>{data.email}</td>
              <td className="text-danger">{data.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="btn-danger btn"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllBooking;

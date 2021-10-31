import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 bg-dark py-4" style={{bottom:"0"}}>
      <div className="container  mt-5 py-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-2 g-lg-3">
          <div className="col">
            <div className="p-3">
              <h3 className="text-white">Useful Links</h3>
            </div>
            <div className="d-flex flex-column  mb-4">
              <a className="text-decoration-none">Home</a>
              <a className="text-decoration-none">about</a>
              <a className="text-decoration-none">Adventures</a>
              <a className="text-decoration-none">Blog</a>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h3 className="text-white">Support Links</h3>
            </div>
            <div className="d-flex flex-column  mb-4">
              <a className="text-decoration-none">Ask a Questions</a>
              <a className="text-decoration-none">Delivery terms</a>
              <a className="text-decoration-none">Career</a>
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              <h3 className="text-white">Reach us</h3>
            </div>
            <div className=" mb-4 text-primary">
              <p>
                <i className="fas fa-map-marker me-2"></i>
                <span>932 Galvin St. Pompano Beach, FL 33060</span>
              </p>
              <p>
                <i className="fas fa-envelope-open-text me-2"></i>
                <span>example@emample.com</span>
              </p>
              <p>
                <i className="fas fa-phone me-2"></i>
                <span>+88001144455566</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

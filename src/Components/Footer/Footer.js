import React from "react";

const Footer = () => {
  return (
    <div className="mt-5 bg-dark py-4" style={{ bottom: "0" }}>
      <div className="container  mt-5 py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-lg-3">
          <div className="col">
            <div style={{ textAlign: "left" }}>
              {/* <div className="p-3"> */}
              <h5 className="text-white py-3">Useful Links</h5>
              {/* </div> */}
              <div className="d-flex flex-column  mb-4 text-white">
                <a className="text-decoration-none text-white">Home</a>
                <a className="text-decoration-none text-white">about</a>
                <a className="text-decoration-none text-white">Adventures</a>
                <a className="text-decoration-none text-white">Blog</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "left" }}>
              {/* <div className="p-3"> */}
              <h5 className="text-white py-3">Support Links</h5>
              {/* </div> */}
              <div className="d-flex flex-column  mb-4">
                <a className="text-decoration-none text-white">
                  Ask a Questions
                </a>
                <a className="text-decoration-none text-white">
                  Delivery terms
                </a>
                <a className="text-decoration-none text-white">Career</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "left" }}>
              {/* <div className="p-3"> */}
              <h5 className="text-white py-3">Company</h5>
              {/* </div> */}
              <div className="d-flex flex-column  mb-4">
                <a className="text-decoration-none text-white">How We Work</a>
                <a className="text-decoration-none text-white">Destinations</a>
                <a className="text-decoration-none text-white">Work With Us</a>
                <a className="text-decoration-none text-white">Help Center</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div style={{ textAlign: "left" }}>
              <h5 className="text-white py-3">Reach us</h5>

              <div className=" mb-4 text-white">
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
                <div className="d-flex">
                <i class="fab fa-facebook fa-2x me-2"></i>
                <i class="fab fa-instagram fa-2x me-2"></i>
                <i class="fab fa-linkedin fa-2x me-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

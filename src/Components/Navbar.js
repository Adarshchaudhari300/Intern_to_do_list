import React, { useState } from "react";
import threeBars from "../Images/3bars.jpg"; // Import the image
import Body from "./Body";

const Navbar = () => {
  //////////////////////////////////////////////////////////////////////////////////////////
  const [displayChange, setdisplayChange] = useState(true);

  const handleDisplayChange = () => {
    setdisplayChange((prev) => !prev); // Toggle state
  };
  //////////////////////////////////////////////////////////////////////////////////////////
  const [displayChange2, setdisplayChange2] = useState(true);

  const handleDisplayChange2 = () => {
    setdisplayChange2((prev) => !prev); // Toggle state
  };

  //////////////////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <button onClick={handleDisplayChange} className="btn " type="button">
          <img src={threeBars} alt="Menu" width="30" height="30" />
        </button>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            DO IT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button onClick={handleDisplayChange2} className="btn" type="button">
                <img src={threeBars} alt="Menu" width="30" height="30" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Pass state to Body */}
      <Body displayChange={displayChange}  displayChange2={displayChange2}/>
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import threeBars from "../Images/3bars.jpg"; // Import the image
import threeline from "../Images/3line.png"; // Import the image
import ninedots from "../Images/9dots.png"; // Import the image
import logo from "../Images/log.png"; // Import the image
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
  let img2;
  if (displayChange2) {
    img2 = threeline;
  } else {
    img2 = ninedots;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button onClick={handleDisplayChange} className="btn " type="button">
            <img src={threeBars} alt="Menu" width="30" height="30" />
          </button>
          <a className="navbar-brand" href="/">
          <img src={logo} alt="Menu" width="150" height="50" />
           </a>

          <button onClick={handleDisplayChange2} className="btn" type="button">
            <img src={img2} alt="Menu" width="30" height="30" />
          </button>
        </div>
      </nav>

      {/* Pass state to Body */}
      <Body displayChange={displayChange} displayChange2={displayChange2} />
    </>
  );
};

export default Navbar;

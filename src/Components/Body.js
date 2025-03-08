import React, { useState } from "react";
import Column2 from "./Column2";
import "../Css/Body.css";

const Body = (props) => {
  let { displayChange, displayChange2 } = props;
  let note = {
    todo: "",
  };
  const [rightDisplay1, setrightDisplay] = useState(note);
  return (
    <div className="container text-center">
      <div className="row">
        {/* Hide Column 1 when {displayChange} is false */}
        {/* column-1 */}
        {/* ------------------------------------------------- */}
        <div
          className={`col col-2 border border-dark ${
            displayChange ? "d-flex" : "d-none"
          }`}
        >
          Column 1
        </div>
        {/* ------------------------------------------------- */}

        {/* column-2 */}
        {/* ------------------------------------------------- */}
        <div
          style={{ height: "90vh" }}
          className={`overflow-scroll col ${
            !displayChange ? "col-9" : "col-7"
          } border border-dark`}
        >
          <Column2
            displayChange2={displayChange2}
            rightDisplay={setrightDisplay}
          />
        </div>
        {/* -------------------------------------------------  */}

        {/* Column-3 */}
        {/* ------------------------------------------------- */}
        <div id="col3maindiv" className="col col-3 border border-dark">
            <div id="col3maindiv2">Current <span>To-Do</span></div>
          <div id="col3subdiv1"><span>Due Time :</span>{rightDisplay1.time}</div>
          <div id="col3subdiv2"><span>Text :</span> {rightDisplay1.todo}</div>
        </div>
        {/* ------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Body;

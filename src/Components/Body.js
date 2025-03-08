import React, { useState } from "react";
import Column2 from "./Column2";

const Body = (props) => {
  let { displayChange,displayChange2} = props;
let note={
    todo:"",

}
  const [rightDisplay1, setrightDisplay] = useState(note);
  return (
    <div className="container text-center">
      <div className="row">
        {/* Hide Column 1 when displayChange is false */}
        {/* ------------------------------------------------- */}
        <div
          className={`col col-2 border border-dark ${
            displayChange ? "d-flex" : "d-none"
          }`}
        >
          Column 1
        </div>
        {/* ------------------------------------------------- */}
        {/* ------------------------------------------------- */}
        <div style={{height:"90vh"}}
          className={ `overflow-scroll col ${
            !displayChange ? "col-9" : "col-7"
          } border border-dark`}
        >
          <Column2  displayChange2={displayChange2} rightDisplay={setrightDisplay}/>
        </div>
        {/* -------------------------------------------------  */}
        {/* ------------------------------------------------- */}
        <div className="col col-3 border border-dark">{rightDisplay1.todo}</div>
        {/* ------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Body;

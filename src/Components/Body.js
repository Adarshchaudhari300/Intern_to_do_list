import React, { useState } from "react";
import Column2 from "./Column2";
import "../Css/Body.css";
import Column1 from "./Column1";

const Body = (props) => {
  let { displayChange, displayChange2 } = props;
  let note = {
    todo: "",
  };

  const [rightDisplay1, setrightDisplay] = useState(note);

  const [todosbody, settodosbody] = useState([]);
  // console.log(todosbody);

  let todayTodos = todosbody.filter((item) => {
    return item.time === new Date().toDateString();
  });

  return (
    <div className="container text-center">
      <div className="row">
        {/* Hide Column 1 when {displayChange} is false */}

        {/* column-1 */}
        {/* ------------------------------------------------- */}
        <div className={`col col-3  ${displayChange ? "d-flex" : "d-none"}`}>
          <Column1 todosbody={todosbody} todayTodos={todayTodos} />
        </div>

        {/* column-2 */}
        {/* ------------------------------------------------- */}
        <div
          style={{ height: "90vh" }}
          className={` col ${!displayChange ? "col-9" : "col-6"}  `}
        >
          <Column2
            displayChange2={displayChange2}
            rightDisplay={setrightDisplay}
            settodosbody={settodosbody}
          />
        </div>

        {/* Column-3 */}
        {/* ------------------------------------------------- */}
        <div id="col3maindiv" className="col col-3 ">
          <div id="col3maindiv2">
            Current <span>To-Do</span>
          </div>
          <div id="col3subdiv1">
            <span>Due Time :</span>
            {rightDisplay1.time}
          </div>
          <div id="col3subdiv2">
            <span>Text :</span> {rightDisplay1.todo}
          </div>
        </div>
        {/* ------------------------------------------------- */}
      </div>
    </div>
  );
};

export default Body;

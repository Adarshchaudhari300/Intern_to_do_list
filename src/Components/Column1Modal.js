import React from "react";
import "../Css/Column1Modal.css";

const Column1Modal = (props) => {
  let { todayTodos, todosbody } = props;
  // console.log(todosbody);
  // console.log("columnmodal");
  return (
    <>
      <div className="accordion" id="accordionExample">
        {/* accordian of All task in column 1 */}
        <div id="accordionExamplediv1" className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              All Task
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            {/* mapping all to_do in column 1 */}
            {todosbody.map((item) => {
              return (
                <div key={item.id} className="accordion-body">
                  {item.todo}
                </div>
              );
            })}
          </div>
        </div>
        {/* accordian of todays task in column 2 */}
        <div id="accordionExamplediv2" className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Today
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            {/* mapping todays to_dos in column 1 */}
            {todayTodos.map((item) => {
              return (
                <div key={item.id} className="accordion-body">
                  {item.todo}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Column1Modal;

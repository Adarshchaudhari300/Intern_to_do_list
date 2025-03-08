import React from "react";

const Column1Modal = (props) => {
  let { todayTodos, todosbody } = props;
  console.log(todosbody);
  console.log("columnmodal");
  return (
    <>
      <div className="accordion" id="accordionExample">
        {/* accordian of All task in column 1 */}
        <div className="accordion-item">
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
        <div className="accordion-item">
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
          {/* accordian of starred task (currently displayed none) in column 1 */}
        <div className="accordion-item d-none">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Starred
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column1Modal;

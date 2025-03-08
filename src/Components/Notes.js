import React from "react";
import "../Css/Notes.css";


const Notes = (props) => {
  let { displayChange2, handleCheckBox, item ,rightDisplay,handleDelete} = props;
  return (
    <>
      <div
        className={`my-3 container ${
          displayChange2 ? "d-flex'" : "col-4"
        } justify-content-between`}
        style={{ height: "50px" }}
      >
        <div className="d-flex">
          <div className="form-check">
            <input
              onChange={handleCheckBox}
              name={item.id}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div
            onClick={() => {
              rightDisplay(item);
            }}
            className={`${
              item.isCompleted ? "text-decoration-line-through" : ""
            }`}
          >
            {item.todo}
          </div>
        </div>
        <div>
          <span className=" mx-2">{item.time}</span>
          <button
            onClick={(e) => {
              handleDelete(e, item.id);
              rightDisplay("");
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Notes;

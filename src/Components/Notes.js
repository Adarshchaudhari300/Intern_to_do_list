import React, { useState } from "react";
import "../Css/Notes.css";

const Notes = (props) => {
  let { displayChange2, handleCheckBox, item, rightDisplay, handleDelete } =
    props;


  return (
    <>
      <div
        id="notediv1bigcontainer"
        className={`my-3 container ${
          displayChange2 ? "d-flex'" : "col-6"
        } justify-content-between`}
      >
        <div id="notediv2taskcontainer" className="d-flex">
          <div id="notediv2taskcontainer1" className="form-check">
            <input
              checked={item.isCompleted}
              onChange={handleCheckBox}
              name={item.id}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
          </div>
          <div
            id="notediv2taskcontainer2"
            onClick={() => {
              rightDisplay(item);
            }}
            className={`${
              item.isCompleted ? "text-decoration-line-through" : ""
            }`}
          >
            {item.todo.slice(0, 80)}
          </div>
        </div>
        <div id="notediv2taskcontainer3" className="d-flex justify-content-end">
          <span className=" mx-2">
            <strong>Due:</strong> {item.time}
          </span>

          <button
            onClick={(e) => {
              handleDelete(e, item.id);
              rightDisplay("");
            }}
            className="btn btn-sm "
          >
            Trash
          </button>
        </div>
      </div>
    </>
  );
};

export default Notes;

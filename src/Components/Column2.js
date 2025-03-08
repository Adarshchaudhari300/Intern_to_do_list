import React, { useState } from "react";
import recycle from "../Images/recycle.webp";
import calender from "../Images/calender.webp";
import DD from "../Images/DD.png";
import { v4 as uuidv4 } from "uuid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import Notes from "./Notes";

const Column2 = (props) => {
  let { displayChange2, rightDisplay } = props;

  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  /////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  /////////////////////////////////////////////////////////////////////////////////////////
  const handleAdd = () => {
    settodos([
      ...todos,
      { id: uuidv4(), todo, isCompleted: false, time: date.toDateString() },
    ]);
    settodo("");
    console.log(todos);
  };

  /////////////////////////////////////////////////////////////////////////////////////////
  const handleCheckBox = (e) => {
    let id = e.target.name;
    console.log(`Id is ${id}`);
    let index = todos.findIndex((item) => {
      return item.id === id;
    });

    todos[index].isCompleted = !todos[index].isCompleted;

    //this {if else} pushesh the done or undone to_do element to bottom or top respectively
    if (todos[index].isCompleted) {
      let newTodos = todos.filter((item) => {
        return item.id !== id;
      });
      let newTodos1 = [
        ...newTodos,
        {
          id,
          todo: todos[index].todo,
          isCompleted: todos[index].isCompleted,
          time: todos[index].time,
        },
      ];
      settodos(newTodos1);
    } else {
      let newTodos = todos.filter((item) => {
        return item.id !== id;
      });
      let newTodos1 = [
        {
          id,
          todo: todos[index].todo,
          isCompleted: todos[index].isCompleted,
          time: todos[index].time,
        },
        ...newTodos,
      ];
      settodos(newTodos1);
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
  };
  /////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////
  const recyclefun = () => {
    settodo("");
  };
  ///////////////////////////////////////////////////////////////////////////////////////
  const [datedisplay, setdatedisplay] = useState(false);
  const handleCalender = () => {
    if (datedisplay) {
      setdatedisplay(false);
    } else {
      setdatedisplay(true);
    }
  };
  const [date, setDate] = useState(new Date());

  //   const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div>
        <Calendar
          onClickDay={handleCalender}
          className={`float-end ${datedisplay ? "d-block" : "d-none"}`}
          onChange={setDate}
          value={date}
        />
      </div>

      <p className="d-inline-flex gap-1">
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          To-Do
          <img src={DD} alt="Menu" width="30" height="30" />
        </button>
      </p>
      <div className="collapse " id="collapseExample">
        <div className="card   ">
          <div className="mb-3">
            <textarea
              type="text"
              onChange={handleChange}
              value={todo}
              placeholder="Add text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
            <div className="d-flex justify-content-center ">
              <div className="d-flex  w-50 p-3  justify-content-start  ">
                <button onClick={recyclefun} className="btn">
                  <img src={recycle} alt="Menu" width="30" height="30" />
                </button>
                <button onClick={handleCalender} className="btn">
                  <img src={calender} alt="Menu" width="30" height="30" />
                </button>
              </div>
              <div className="d-flex  w-50 p-3  justify-content-end  ">
                <button onClick={handleAdd} className="btn btn-success ">
                  Add task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rendering all the To_Dos in new page */}
      <div className="row">
        {todos.map((item) => {
          return (
            <Notes
              displayChange2={displayChange2}
              handleCheckBox={handleCheckBox}
              item={item}
              rightDisplay={rightDisplay}
              handleDelete={handleDelete}
              key={item.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Column2;

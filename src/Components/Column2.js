import React, { useEffect, useState } from "react";
import recycle from "../Images/recycle.webp";
import calender from "../Images/calender.webp";
import DD from "../Images/DD.png";
import { v4 as uuidv4 } from "uuid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles
import Notes from "./Notes";
import "../Css/Column2.css";

const Column2 = (props) => {
  let { displayChange2, rightDisplay, settodosbody } = props;

  const [todo, settodo] = useState("");
  //dummmy to_dos
  //such data can be stored in the mongodb by creating api through express and saving it to mongoDB
  let newnote = [
    {
      id: "a1b2c3d4e5-1234-5678-9101-abcdef123456",
      todo: "Buy books of Science",
      isCompleted: false,
      time: "Sat Mar 08 2025",
    },
    {
      id: "a1b2casd3d4e5-1234-5678-9101-abcdef123456",
      todo: "Buy groceries for the week",
      isCompleted: false,
      time: "Sat Mar 08 2025",
    },
    {
      id: "f6g7h8i9j0-2345-6789-1011-ghijkl789012",
      todo: "Complete the project report",
      isCompleted: false,
      time: "Sat Mar 09 2025",
    },
    {
      id: "k1l2m3n4o5-3456-7890-1121-mnopqr345678",
      todo: "Call the bank regarding account updates",
      isCompleted: false,
      time: "Sat Mar 09 2025",
    },
    {
      id: "p6q7r8s9t0-4567-8901-2131-stuvwx567890",
      todo: "Schedule an appointment with the dentist",
      isCompleted: false,
      time: "Sat Mar 10 2025",
    },
    {
      id: "u1v2w3x4y5-5678-9012-3141-uvwxyz678901",
      todo: "Prepare slides for the team meeting",
      isCompleted: false,
      time: "Sat Mar 10 2025",
    },
    {
      id: "z6a7b8c9d0-6789-0123-4151-abcdef789012",
      todo: "Go for a morning jog",
      isCompleted: false,
      time: "Sat Mar 11 2025",
    },
    {
      id: "e1f2g3h4i5-7890-1234-5161-ghijkl890123",
      todo: "Read a chapter from the new book",
      isCompleted: false,
      time: "Sat Mar 11 2025",
    },
    {
      id: "j6k7l8m9n0-8901-2345-6171-mnopqr901234",
      todo: "Plan weekend trip itinerary",
      isCompleted: false,
      time: "Wed Mar 12 2025",
    },
    {
      id: "o1p2q3r4s5-9012-3456-7181-stuvwx012345",
      todo: "Organize the workspace and declutter",
      isCompleted: false,
      time: "Thu Mar 12 2025",
    },
  ];

  const [todos, settodos] = useState(newnote);

  /////////////////////////////////////////////////////////////////////////////////////////
  const handleChange = (e) => {
    settodo(e.target.value);
  };
  /////////////////////////////////////////////////////////////////////////////////////////

  //sending todos to body everytime the todos is changed here
  useEffect(() => {
    settodosbody(todos);
  }, [todos]);
  /////////////////////////////////////////////////////////////////////////////////////////
  const handleAdd = () => {
    settodos([
      ...todos,
      { id: uuidv4(), todo, isCompleted: false, time: date.toDateString() },
    ]);
    settodo("");
    // settodosbody(todos);
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
    // settodosbody(todos);
  };

  /////////////////////////////////////////////////////////////////////////////////////////
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    settodos(newTodos);
    // settodosbody(todos);
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
      <div id="col2BigContainer">
        {/* this toggels the add task container */}
        <p id="col2dropdown" className="d-inline-flex gap-1">
          <button
            className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add To-Do
            <img src={DD} alt="Menu" width="20" height="30" />
          </button>
        </p>

        {/* this is the add task container */}
        <div className="collapse position-relative " id="collapseExample">
          <div className="mb-3">
            <textarea
              type="text"
              onChange={handleChange}
              value={todo}
              placeholder="Add text"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
            <div className="d-flex justify-content-center ">
              <div
                id="col2div2icons"
                className="d-flex  w-50 p-3  justify-content-start  "
              >
                <button onClick={recyclefun} className="btn">
                  <img src={recycle} alt="Menu" width="40" height="40" />
                </button>
                <button onClick={handleCalender} className="btn">
                  <img src={calender} alt="Menu" width="40" height="40" />
                </button>
              </div>
              <div
                id="col2div2btnimg"
                className="d-flex  w-50 p-3  justify-content-end  "
              >
                <button onClick={handleAdd} className="btn ">
                  Add task
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* setting the calender for scheduling the task */}
        <div className="position-absolute ">
          <Calendar
            onClickDay={handleCalender}
            className={`float-end ${datedisplay ? "d-block" : "d-none"}`}
            onChange={setDate}
            value={date}
          />
        </div>

        {/* Rendering all the To_Dos in new page */}
        <div id="col2div3bigcontainer" className="row">
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
      </div>
    </>
  );
};

export default Column2;

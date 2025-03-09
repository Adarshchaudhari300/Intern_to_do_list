import React from "react";
import Column1Modal from "./Column1Modal";
import ProgressBar from "./ProgressBar";
import "../Css/Column1.css";
import logimg from "../Images/logimg.jpeg"; // Import the image

const Column1 = (props) => {
  let { todayTodos, todosbody } = props;

  //creating new array of done tasks
  let newcheckedtodos = todayTodos.filter((item) => {
    return item.isCompleted === true;
  });

  //counting length of toatl and done todays task
  let TotalTodayToDo = 0;
  TotalTodayToDo = todayTodos.length;
  let DoneTodayToDo = 0;
  DoneTodayToDo = newcheckedtodos.length;

  //converting the done task into percentage of todays task and passing it to progress bar
  let percentageCompleted = 0;
  if (TotalTodayToDo !== 0) {
    percentageCompleted = 100 * (DoneTodayToDo / TotalTodayToDo);
  }

  //fetching user-name from localStorage
  let username = localStorage.getItem("username");

  return (
    <>
      <div
        id="col1maindiv"
        className="d-flex flex-column mb-3 justify-content-start"
        style={{ width: "100%" }}
      >
        {/* First Div is Of Login in info */}
        <div id="col1div1" className="container my-4 ">
          <img src={logimg} alt="Menu" width="80" height="80" />
          <div>Hey , {username}</div>
        </div>

        {/* second div is of All task And Todays task Modal */}
        <div id="col1div2" className="container ">
          <Column1Modal todosbody={todosbody} todayTodos={todayTodos} />
        </div>

        {/* Third Div is of Complted Todays Task */}
        <div id="col1div3" className="  d-flex flex-column just">
          <div id="col1div3div1">
            Today Task : <strong>{TotalTodayToDo}</strong>
          </div>
          <div id="col1div3div2" className="align-items-center mx-auto">
            <ProgressBar percentage={percentageCompleted} />
          </div>
          <div id="col1div3div3">
            Task Done : <strong>{DoneTodayToDo}</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default Column1;

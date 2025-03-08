import React from "react";
import Column1Modal from "./Column1Modal";
import ProgressBar from "./ProgressBar";

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

  return (
    <>
      <div
        className="d-flex flex-column mb-3 justify-content-center"
        style={{ width: "100%" }}
      >
        {/* First Div is Of Login in info */}
        <div className="container my-4">This is Logged In Logo</div>

        {/* second div is of All task And Todays task Modal */}
        <div className="container ">
          <Column1Modal todosbody={todosbody} todayTodos={todayTodos} />
        </div>

        {/* Third Div is of Complted Todays Task */}
        <div className="container border border-dark d-flex flex-column mb-3 my-4 just">
          <div>
            Today Task : <strong>{TotalTodayToDo}</strong>
          </div>
          <div className="align-items-center mx-auto">
            <ProgressBar percentage={percentageCompleted} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Column1;

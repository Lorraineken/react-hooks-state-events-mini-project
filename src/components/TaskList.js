import React from "react";
import Task from "./Task";

function TaskList({taskData}) {

const displayTasks=taskData.map((data) => {
  return (
    <Task key={data.id} category={data.category} text={data.text}/>
  )
})

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {displayTasks}
    </div>
  );
}

export default TaskList;

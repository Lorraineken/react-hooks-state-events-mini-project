import React, {useState} from "react";
import Task from "./Task";

function TaskList({taskData}) {

const [task,setTask]=useState(taskData)

  
const displayTasks=task.map((data) => {
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

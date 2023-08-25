import React from "react";
import Task from "./Task"

function TaskList({tasks=[{text:"" , category: ""}], setTaskList, selected}) {

  // const [tasks,settasks] = useState(tasks)

  const filteredTask = tasks.filter((task)=>{  
    if(selected === "All"){
      return true
    }
    return task.category === selected;
  })

  console.log(selected)

  function handleDelete(taskName){
    const tasksToDisplay = tasks.filter((task)=>{
      return task.text!==taskName
    })
    setTaskList(tasksToDisplay)
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {filteredTask.map((task,index)=>{
        return <Task key={index} task={task} handleDelete={handleDelete}/>
      })}
      {/*<Task/> */}
    </div>
  );
}

export default TaskList;

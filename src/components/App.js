import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [selected,setSelected] = useState("All")
  const [taskList,setTaskList] = useState(TASKS)

  function onTaskFormSubmit(newTask){
    console.log(newTask)
    const newTaskList = [...taskList, newTask]
    setTaskList(newTaskList)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={setSelected}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} setTaskList={setTaskList} selected={selected}/>
    </div>
  );
}

export default App;

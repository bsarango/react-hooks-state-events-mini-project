import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [input, setInput] = useState(" ")
  const [select, setSelect] = useState("All")

  const categoryOptions = categories.map((category)=>{
    return <option key={category}>{category}</option>
  })

  function handleChange(event){
    
    setInput(event.target.value)
  }

  function handleSelect(event){
    
    setSelect(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newTask={
      "text":input, 
      "category":select,
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={input}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleSelect} value={select}>
          {/* render <option> elements for each category here */}
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

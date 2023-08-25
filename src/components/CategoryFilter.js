import React from "react";

function CategoryFilter({categories, selected, setSelected}) {
  // const [selected,setSelected] = useState("All")

  const categoryButtons = categories.map((category)=>{
    return <button key={category} className={selected===category ? "selected":null} onClick={handleCateogryClick}>{category}</button>
  })

  
  function handleCateogryClick(event){
    setSelected(event.target.innerText)
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

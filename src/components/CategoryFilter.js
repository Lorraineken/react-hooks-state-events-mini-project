import React,{useState} from "react";

function CategoryFilter({categoryData}) {

  const [cat,setCat] =useState(categoryData)

  const displayCat = cat.map((item)=> <button>{item}</button>)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {displayCat}
    </div>
  );
}

export default CategoryFilter;

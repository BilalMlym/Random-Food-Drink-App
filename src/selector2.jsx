import React, { useEffect, useState } from "react";


const Selector2 = () => {
//   const [countries, setCountries] = useState(null);
  const [meal, setMeal] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);




  useEffect(() => {
    fetch("/server/meals")
      .then((responce) => responce.json())
      .then((responce) => setMeal(responce.categories))
      .catch((error) => console.log({ error }));
  }, []);
  
console.log(meal)
 
 
  return (

    
    <div className="w-72 font-medium h-full">
      <h3 className="text-white p-6" > Meals Category</h3>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Meal"}
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        
        {meal?.map((meal) => (
          <li
            key={meal?.strCategory}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
                meal?.strCategory?.toLowerCase() === selected?.toLowerCase() &&
                "bg-sky-600 text-white"
              }
            }
            ${
              meal?.strCategory?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            
            onClick={() => {
              if (meal?.strCategory?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(meal?.strCategory);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {meal.strCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector2;
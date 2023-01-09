import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector1 = () => {
//   const [countries, setCountries] = useState(null);
const [drink, setDrink] = useState([]);
  const [meal, setMeal] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/server/drinks")
      .then((responce) => responce.json())
      .then((responce) => setDrink(responce.drinks))
      .catch((error) => console.log({ error }));
  }, []);
 console.log(drink)



  useEffect(() => {
    fetch("/server/meals")
      .then((responce) => responce.json())
      .then((responce) => setMeal(responce.categories))
      .catch((error) => console.log({ error }));
  }, []);
  
console.log(meal)
 
 
  return (

    
    <div className="w-72 font-medium h-full">
      <h3 className="text-white p-6" > Drinks Category</h3>
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
          : "Select Drink"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        
        {drink?.map((drink) => (
          <li
            key={drink?.strCategory}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
                drink?.strCategory?.toLowerCase() === selected?.toLowerCase() &&
                "bg-sky-600 text-white"
              }
            }
            ${
              drink?.strCategory?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            
            onClick={() => {
              if (drink?.strCategory?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(drink?.strCategory);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {drink.strCategory}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector1;
import React, { useEffect, useState } from "react";
import axios from 'axios'










const Selector1 = () => {
 
  const [drink, setDrink] = useState([]);
  const [meal, setMeal] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [randomDrinks, setRandomDrinks] = useState([]);
  
  


  useEffect(() => {
    fetch("/server/drinks")
      .then((responce) => responce.json())
      .then((responce) => setDrink(responce.drinks))
      .catch((error) => console.log({ error }));
  }, []);
  console.log(drink);

  useEffect(() => {
    fetch("/server/meals")
      .then((responce) => responce.json())
      .then((responce) => setMeal(responce.categories))
      .catch((error) => console.log({ error }));
  }, []);

  console.log(meal);

  




function handleClick(){
  axios.post('/server/DrinkPosts', {
    selected 
  })
  .then(function (response) {
    return response.data
  })
  .then(data => setRandomDrinks(data.drinks))
  .catch(function (error) {
    console.log(error);
  });
  
}


  return (
    <div className="w-72 font-medium h-full">
      <h3 className="text-white p-6"> Drinks Category</h3>
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
              if (
                drink?.strCategory?.toLowerCase() !== selected.toLowerCase()
              ) {
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
      <div onClick={handleClick} style={{
      textAlign: 'center',
      width: '100px',
      border: '1px solid gray',
      borderRadius: '5px'
    }}>
      Send data to backend
      <div>
        {randomDrinks.map(drink => 
          <div>{drink.strDrink} </div>
          )}
      </div>
    </div>
      
      
    </div>
  );
};

export default Selector1;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Meal = () => {
  const [meal, setMeal] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const [randomMeal, setRandomMeal] = useState([]);

  useEffect(() => {
    fetch('/meals/get_categories')
      .then((responce) => responce.json())
      .then((responce) => setMeal(responce.meals[0]))
      .catch((error) => console.log({ error }));
  }, []);

  function handleClick() {
    axios
      .post('/meals/get_random', {
        selected,
      })
      .then(function (response) {
        return response.data;
      })
      .then((data) => setRandomMeal(data))
      .catch(function (error) {
        console.log(error);
      });
  }

  const getName = () => {
    if (!selected) {
      return 'Select Drink';
    }
    if (selected?.length > 25) {
      return `${selected?.substring(0, 25)}...`;
    }
    return selected;
  };

  return (
    <div className="w-72 font-medium h-full">
      <h3 className="text-white p-6"> Meals Category</h3>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-5 flex items-center justify-between rounded ${
          !selected && 'text-gray-700'
        }`}
      >
        {getName()}
      </button>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? 'max-h-60' : 'max-h-0'
        } `}
      >
        {meal && (
          <li
            key={meal?.strCategory}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              meal?.strCategory?.toLowerCase() === selected?.toLowerCase() &&
              'bg-sky-600 text-white'
            }
            }
            ${
              meal?.strCategory?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
            onClick={() => {
              if (meal?.strCategory?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(meal?.strCategory);
                setOpen(false);
                setInputValue('');
              }
            }}
          >
            {meal.strCategory}
          </li>
        )}
      </ul>
      <button
        type="button"
        onClick={handleClick}
        style={{
          textAlign: 'center',
          width: '250px',
          border: '1px solid gray',
          borderRadius: '5px',
        }}
        className="p-3"
      >
        <button className="rounded-sm" type="button">
          Give me a random {selected}
        </button>
      </button>
      <div className="p-1" />
      <div
        className="bg-gray-300 text-lg rounded-lg p-6 min-w-[44px] object-cover shadow-lg shadow-black-200"
        key={randomMeal.strMeal}
      >
        {randomMeal.strMeal}
        <img className="rounded-lg" src={randomMeal.strMealThumb} alt="pict" />
      </div>
    </div>
  );
};

export default Meal;

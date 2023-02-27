import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Selector1 = () => {
  const [drink, setDrink] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    fetch('/drinks/get_categories')
      .then((responce) => responce.json())
      .then((responce) => setDrink(responce.drinks[0]))
      .catch((error) => console.log({ error }));
  }, []);

  function handleClick() {
    axios
      .post('/drinks/get_random', {
        selected,
      })
      .then(function (response) {
        return response.data;
      })
      .then((data) => setRandomDrink(data))
      .catch(function (error) {
        console.log('error');
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
      <h3 className="text-white p-6"> Drinks Category</h3>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full p-5 flex items-center justify-between rounded ${
          !selected && 'text-gray-700'
        }`}
      >
        {getName()}
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? 'max-h-60' : 'max-h-0'
        } `}
      >
        {drink && (
          <li
            key={drink?.strCategory}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              drink?.strCategory?.toLowerCase() === selected?.toLowerCase() &&
              'bg-sky-600 text-white'
            }
            }
            ${
              drink?.strCategory?.toLowerCase().startsWith(inputValue)
                ? 'block'
                : 'hidden'
            }`}
            onClick={() => {
              if (
                drink?.strCategory?.toLowerCase() !== selected.toLowerCase()
              ) {
                setSelected(drink?.strCategory);
                setOpen(false);
                setInputValue('');
              }
            }}
          >
            {drink.strCategory}
          </li>
        )}
      </ul>
      <div
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
      </div>
      <div className="p-1" />
      <div
        className="bg-gray-300 text-lg rounded-lg p-6 min-w-[44px] object-cover shadow-lg shadow-black-200"
        key={randomDrink.strDrink}
      >
        {randomDrink.strDrink}
        <img
          className="rounded-lg"
          src={randomDrink.strDrinkThumb}
          alt="pict"
        />
      </div>
    </div>
  );
};

export default Selector1;

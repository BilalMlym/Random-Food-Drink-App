import React, { useState } from 'react';
import DrinkCategory from './DrinkCategory/DrinkCategory';
import RandomDrink from './RandomDrink/RandomDrink';

const Drink = () => {
  const [drinkCategory, setDrinkCategory] = useState(null);

  return (
    <div>
      <DrinkCategory category={drinkCategory} setCategory={setDrinkCategory} />
      <RandomDrink category={drinkCategory} />
    </div>
  );
};

export default Drink;

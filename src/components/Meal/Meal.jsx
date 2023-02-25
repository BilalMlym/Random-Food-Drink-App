import React, { useState } from 'react';
import MealCategory from './MealCategory/MealCategory';
import RandomMeal from './RandomMeal/RandomMeal';

const Meal = () => {
  const [mealCategory, setMealCategory] = useState(null);

  return (
    <div>
      <MealCategory category={mealCategory} setCategory={setMealCategory} />
      <RandomMeal category={mealCategory} />
    </div>
  );
};

export default Meal;

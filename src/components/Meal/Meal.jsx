import React, { useEffect, useState } from 'react';
import MealCategory from './MealCategory/MealCategory';

const Meal = () => {
  const [mealCategory, setMealCategory] = useState(null);
  useEffect(() => {
    console.log(mealCategory);
  }, [mealCategory]);
  return (
    <div>
      <MealCategory category={mealCategory} setCategory={setMealCategory} />
    </div>
  );
};

export default Meal;

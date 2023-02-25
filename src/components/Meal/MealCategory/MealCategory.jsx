import React, { useEffect, useState } from 'react';
import './MealCategory.scss';
import PropTypes from 'prop-types';

const MealCategory = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  useEffect(() => {
    fetch('/meals/get_categories')
      .then((response) => response.json())
      .then((data) => setCategories(data.meals))
      .catch((error) => console.log({ error }));
  }, []);

  const getName = () => {
    if (!category) {
      return 'Select Meal';
    }
    if (category?.length > 25) {
      return `${category?.substring(0, 25)}...`;
    }
    return category;
  };

  if (!categories) {
    return null;
  }

  return (
    <div className="meal-category">
      <h3 className="text-white p-6"> Meals Category</h3>
      <div onClick={() => setShowCategories((v) => !v)}>{getName()}</div>
      <ul>
        {showCategories &&
          categories.map((c) => {
            const categoryName = c?.strCategory;
            return (
              <div
                key={categoryName}
                onClick={() => {
                  setCategory(categoryName);
                  setShowCategories(false);
                }}
              >
                {categoryName}
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default MealCategory;

MealCategory.propTypes = {
  setCategory: PropTypes.func,
  category: PropTypes.string,
};

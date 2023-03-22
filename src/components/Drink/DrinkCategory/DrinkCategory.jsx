import React, { useEffect, useState } from 'react';
import './DrinkCategory.scss';
import PropTypes from 'prop-types';

const DrinkCategory = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  useEffect(() => {
    fetch('/drinks/get_categories')
      .then((response) => response.json())
      .then((data) => setCategories(data.drinks))
      .catch((error) => console.log({ error }));
  }, []);

  const getName = () => {
    if (!category) {
      return 'Select Drink';
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
    <div className="drink-category">
      <h3 className="text-white p-6"> Drinks Category</h3>
      <button type="button" onClick={() => setShowCategories((v) => !v)}>
        {getName()}
      </button>
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

export default DrinkCategory;

DrinkCategory.propTypes = {
  setCategory: PropTypes.func,
  category: PropTypes.string,
};

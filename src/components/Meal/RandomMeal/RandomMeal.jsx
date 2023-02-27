import React, { useState } from 'react';
import './RandomMeal.scss';
import PropTypes from 'prop-types';

const RandomMeal = ({ category }) => {
  const [meal, setMeal] = useState(null);

  const getRandomMeal = () => {
    fetch('/meals/get_random', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selected: category }),
    })
      .then((response) => response.json())
      .then((data) => setMeal(data))
      .catch((error) => console.log({ error }));
  };
  if (!category) {
    return null;
  }

  if (!meal) {
    return (
      <div
        className="random-meal"
        onClick={() => {
          getRandomMeal();
        }}
      >
        <div className="random-button-text">Click for Random Meal</div>
      </div>
    );
  }
  return (
    <div
      className="random-meal"
      onClick={() => {
        getRandomMeal();
      }}
    >
      <div className="meal">
        <div>{meal?.strMeal}</div>
        <div className="img-wrapper">
          <img alt="meal" src={meal?.strMealThumb} />
        </div>
        <div className="click">Click for More Random Meal</div>
      </div>
    </div>
  );
};

export default RandomMeal;

RandomMeal.propTypes = {
  category: PropTypes.string,
};

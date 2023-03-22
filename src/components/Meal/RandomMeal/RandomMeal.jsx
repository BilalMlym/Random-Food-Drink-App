import React, { useState } from 'react';
import './RandomMeal.scss';
import PropTypes from 'prop-types';
import Loading from '../../Loading/Loading';

const RandomMeal = ({ category }) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomMeal = async () => {
    setLoading(true);
    const data = await fetch('/meals/get_random', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selected: category }),
    })
      .then((response) => response.json())
      .catch((error) => console.log({ error }));

    setTimeout(() => {
      setMeal(data);
      // do something here 1 sec after current has changed
      setLoading(false);
    }, 3000);
  };
  if (!category) {
    return null;
  }

  if (loading) {
    return (
      <div className="random-meal">
        <Loading />
      </div>
    );
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

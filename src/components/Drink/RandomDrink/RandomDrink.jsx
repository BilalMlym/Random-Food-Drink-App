import React, { useState } from 'react';
import './RandomDrink.scss';
import PropTypes from 'prop-types';
import Loading from '../../Loading/Loading';

const RandomDrink = ({ category }) => {
  const [drink, setDrink] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRandomDrink = async () => {
    setLoading(true);
    const data = await fetch('/drinks/get_random', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selected: category }),
    })
      .then((response) => response.json())
      .catch((error) => console.log({ error }));

    setTimeout(() => {
      setDrink(data);
      // do something here 1 sec after current has changed
      setLoading(false);
    }, 3000);
  };
  if (!category) {
    return null;
  }

  if (loading) {
    return (
      <div className="random-drink">
        <Loading />
      </div>
    );
  }

  if (!drink) {
    return (
      <div
        className="random-drink"
        onClick={() => {
          getRandomDrink();
        }}
      >
        <div className="random-button-text">Click for Random Drink</div>
      </div>
    );
  }
  return (
    <div
      className="random-drink"
      onClick={() => {
        getRandomDrink();
      }}
    >
      <div className="drink">
        <div>{drink?.strDrink}</div>
        <div className="img-wrapper">
          <img alt="drink" src={drink?.strDrinkThumb} />
        </div>
        <div className="click">Click for More Random Drink</div>
      </div>
    </div>
  );
};

export default RandomDrink;

RandomDrink.propTypes = {
  category: PropTypes.string,
};

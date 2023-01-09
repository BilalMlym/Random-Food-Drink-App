import React, { useState, useEffect } from "react";
import "./App.css";
// import data from '../server/data.json'

function App() {
  const [drink, setDrink] = useState([]);
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    fetch("/server/drinks")
      .then((responce) => responce.json())
      .then((responce) => setDrink(responce.drinks))
      .catch((error) => console.log({ error }));
  }, []);
 console.log(drink)



  useEffect(() => {
    fetch("/server/meals")
      .then((responce) => responce.json())
      .then((responce) => setMeal(responce.categories))
      .catch((error) => console.log({ error }));
  }, []);
  
console.log(meal)



  return (
    <div>
      <h4>Drinks</h4>
      {drink.map((drink) => (
        <div key={drink.strDrink}>
          <h3>{drink.strDrink}</h3>
        </div>
      ))}
      
      <div>
      <h4>Meals</h4>
      {meal.map((meal) => (
        <div key={meal.strCategory}>
          <h3>{meal.strCategory}</h3>
      </div>
      ))}
      
    </div>
    </div>
    
  );
}

export default App;

//commit
import React, { useState, useEffect } from "react";
import "./App.css";
// import data from '../server/data.json'

function App() {
  const [drink, setDrink] = useState([]);
  const [meal, setMeal] = useState({});

  useEffect(() => {
    fetch("/server/drinks")
      .then((responce) => responce.json())
      .then((responce) => setDrink(responce.drinks))
      .catch((error) => console.log({ error }));
  }, []);
 



  useEffect(() => {
    fetch("/server/meals")
      .then((responce) => responce.json())
      .then((responce) => setMeal(responce.drinks))
      .catch((error) => console.log({ error }));
  }, []);
  console.log((meal));




  return (
    <div>
      <h4>Drinks</h4>
      {/* {drink.map((drink) => (
        <div key={drink.strDrink}>
          <h3>{drink.strDrink}</h3>
        </div>
      ))} */}
      
      <div>
      <h4>Meals</h4>
      
    </div>
    </div>
    
  );
}

export default App;

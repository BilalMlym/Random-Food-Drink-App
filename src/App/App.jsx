import React from 'react';
import './App.scss';
import Meal from '../components/Meal/Meal';
import Drink from '../components/Drink/Drink';

function App() {
  return (
    <div className="bg">
      <div>
        <Meal />
      </div>
      <div>
        <Drink />
      </div>
    </div>
  );
}

export default App;

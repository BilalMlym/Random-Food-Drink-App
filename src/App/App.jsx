import React from 'react';
import './App.scss';
import Meal from '../components/Meal/Meal';

function App() {
  return (
    <div className="bg">
      <div>
        <Meal />
      </div>
      <div>
        {/* <Selector1 className="absolute items-center w-10 h-full" /> */}
      </div>
    </div>
  );
}

export default App;

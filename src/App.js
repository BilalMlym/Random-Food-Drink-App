import React from "react";
import "./App.css";
import Selector1 from "./selector1";
import Selector2 from "./selector2";

function App() {
  return (
    <div className="flex items-center justify-center p-2 h-full w-full bg-slate-400 overflow-x-scroll">
      <div>
        <Selector1 className="absolute items-center w-10 h-full" />
      </div>

      <div className="w-6 bg-white"></div>
      <div>
        <Selector2 className="absolute items-center w-10 h-full" />
      </div>
    </div>
  );
}

export default App;

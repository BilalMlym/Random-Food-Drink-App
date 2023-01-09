import React from "react";
import "./App.css";
import Selector1 from "./selector1";
import Selector2 from "./selector2";

function App() {
  return (
    <div className="flex items-center justify-center p-2 h-full w-full bg-slate-400 overflow-x-scroll">
      <Selector1 className="flex items-center w-10 h-full" />

      <div className="w-6 bg-white"></div>
      <Selector2 className="flex items-center w-10 h-full" />
    </div>
  );
}

export default App;

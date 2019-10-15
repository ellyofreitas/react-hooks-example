import React from "react";
import "./App.css";
import Ref from "./hooks/Ref";
import Reducer from './hooks/Reducer';
import State from './hooks/State';
import Effect from './hooks/Effect';
import Memo from './hooks/Memo';
import Context from './hooks/Context';

function App() {
  return (
    <div className="App">
      <Context />
    </div>
  );
}

export default App;

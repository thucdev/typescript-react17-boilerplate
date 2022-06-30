import React from "react";
import "./App.css";


export interface Detail {
  id: number;
  isOpened: boolean;
}

const App: React.FC = () => {

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header"> Typescript boilerplate</header>

      </div>
    </div>
  );
};

export default App;

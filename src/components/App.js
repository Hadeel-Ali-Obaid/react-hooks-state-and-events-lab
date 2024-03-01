import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mood, setMood] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mood ? "App dark" : "App light"
  const buttonText = mood ? "Light Mode" : "Dark Mode"

  function handleClick() {
    const  moods = (() => {
      if (mood === true) {
        return false;
      } else {
        return true;
      }
    });
    setMood(moods);
  }
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
 
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle dark mode */}
        <button onClick={toggleDarkMode}>Dark Mode</button>
      </header>
      {/* ShoppingList component with items data */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

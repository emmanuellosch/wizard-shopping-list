import Headline from "./Headline";
import ShoppingItem from "./ShoppingItem";
import "./App.css";
import React, { useState } from "react";

function App() {
  const shoppingItems = [
    { title: "Hat", isDone: false },
    { title: "Wand", isDone: false },
    { title: "Broomstick (Nimbus 2022)", isDone: false },
    { title: "Butterbeer", isDone: false },
    { title: "TheDailyProphet", isDone: false },
    { title: "Hat", isDone: false },
    { title: "Owl", isDone: false },
  ];
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="App">
      <Headline name="Harrys" />
      {submitting && <div>Submtting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Add shopping item</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Add to List</button>
      </form>

      {shoppingItems.map((shoppingItem) => (
        <ShoppingItem title={shoppingItem.title} isDone={shoppingItem.isDone} />
      ))}
    </div>
  );
}

export default App;

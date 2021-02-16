import Headline from "./Headline";
import ShoppingItem from "./ShoppingItem";
import "./App.css";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false };
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  return (
    <div className="App">
      <Headline name="Harrys" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <br />
      {shoppingItems.map((shoppingItem) => (
        <ShoppingItem title={shoppingItem.title} isDone={shoppingItem.isDone} />
      ))}
    </div>
  );
}

export default App;

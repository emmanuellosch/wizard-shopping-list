import { useState } from "react";
import Headline from "./Headline";
import ShoppingList from "./ShoppingList";
import Form from "./Form";

function App() {
  const [shoppingItems, setShoppingItems] = useState([]);

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false };
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  function toggleCheckbox(indexToToggle) {
    console.log(indexToToggle);

    const itemToToggle = shoppingItems.find(
      (item, index) => index === indexToToggle
    );
    itemToToggle.isDone = !itemToToggle.isDone;

    const firstHalf = shoppingItems.slice(0, indexToToggle);

    const secondHalf = shoppingItems.slice(indexToToggle + 1);
    setShoppingItems([...firstHalf, itemToToggle, ...secondHalf]);
  }

  function deleteShoppingItem(indexToDelete) {
    const allRemainingItems = shoppingItems.filter((item, index) => {
      if (index === indexToDelete) {
      } else {
        return item;
      }
    });
    setShoppingItems(allRemainingItems);
  }

  return (
    <div className="App">
      <Headline name="Harrys" />
      <Form onCreateShoppingItem={addShoppingItem} />
      <br />
      <ShoppingList
        items={shoppingItems}
        onToggleItem={toggleCheckbox}
        onDeleteItem={deleteShoppingItem}
      />
    </div>
  );
}

export default App;

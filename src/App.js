import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import loadFromLocal from "./lib/loadFromLocal";
import saveToLocal from "./lib/saveToLocal";
import Headline from "./Headline";
import ShoppingList from "./ShoppingList";
import Form from "./Form";
import FilterButtons from "./FilterButtons";

function App() {
  const LOCAL_STORAGE_KEY = "hogwartsShoppingList";
  const [shoppingItems, setShoppingItems] = useState(
    loadFromLocal(LOCAL_STORAGE_KEY) ?? []
  );

  /*
  const [openItems, setOpenItems] = useState(
    loadFromLocal(LOCAL_STORAGE_KEY) ?? []
  );
  */

  useEffect(() => {
    saveToLocal(LOCAL_STORAGE_KEY, shoppingItems);
  }, [shoppingItems]);

  /*
  function filterOpenItems() {
    const allRemainOpenItemsOnly = openItems.filter(
      (item) => item.isDone !== false
    );
    setOpenItems(allRemainOpenItemsOnly);
  }
  */

  function addShoppingItem(title) {
    const newShoppingItem = { title: title, isDone: false, id: uuidv4() };
    console.log(newShoppingItem);
    setShoppingItems([...shoppingItems, newShoppingItem]);
  }

  function toggleCheckbox(idToToggle) {
    const newItems = shoppingItems.map((item) => {
      if (item.id === idToToggle) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setShoppingItems(newItems);
  }

  function deleteShoppingItem(shoppingItemId) {
    const allRemainingItems = shoppingItems.filter(
      (item) => item.id !== shoppingItemId
    );
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

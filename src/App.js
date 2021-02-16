import Headline from "./Headline";
import ShoppingItem from "./ShoppingItem";
import "./App.css";
import Form from "./Form";

function App() {
  const shoppingItems = [];

  function addShoppingItem(title) {
    const shoppingItem = { title, isDone: false };
    shoppingItems.push(shoppingItem);
    console.log(shoppingItems);
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

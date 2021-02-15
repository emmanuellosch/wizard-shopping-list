import Headline from "./Headline";
import ShoppingItem from "./ShoppingItem";
import "./App.css";

function App() {
  const shoppingItems = [
    { title: "Hat", isDone: false },
    { title: "Wand", isDone: false },
    { title: "Broomstick (Nimbuds 2022)", isDone: false },
    { title: "Butterbeer", isDone: false },
    { title: "TheDailyProphet", isDone: false },
    { title: "Hat", isDone: false },
  ];

  return (
    <div className="App">
      <Headline name="Harry's Wizard Shopping-List" />
      {shoppingItems.map((shoppingItem) => (
        <ShoppingItem title={shoppingItem.title} isDone={shoppingItem.isDone} />
      ))}
    </div>
  );
}

export default App;

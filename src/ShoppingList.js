import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items = [], onToggleItem }) {
  return (
    <section>
      {items.map((shoppingItem, index) => (
        <ShoppingItem
          title={shoppingItem.title}
          isDone={shoppingItem.isDone}
          onToggleItem={() => onToggleItem(index)}
        />
      ))}
    </section>
  );
}

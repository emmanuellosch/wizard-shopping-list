import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({
  items = [],
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <section>
      {items.map((shoppingItem, index) => (
        <ShoppingItem
          title={shoppingItem.title}
          isDone={shoppingItem.isDone}
          onToggleItem={() => onToggleItem(index)}
          onDeleteItem={() => onDeleteItem(index)}
        />
      ))}
    </section>
  );
}

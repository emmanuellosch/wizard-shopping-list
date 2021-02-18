import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({
  items = [],
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <section>
      {items.map(({ title, isDone, id }) => (
        <ShoppingItem
          key={id}
          title={title}
          isDone={isDone}
          onToggleItem={() => onToggleItem(id)}
          onDeleteItem={() => onDeleteItem(id)}
        />
      ))}
    </section>
  );
}

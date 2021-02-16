export default function ShoppingItem({ title, isDone, onToggleItem }) {
  return (
    <section>
      <label>
        <input type="checkbox" checked={isDone} onChange={onToggleItem} />
        {title}
      </label>
    </section>
  );
}

export default function ShoppingItem({ title, isDone = false }) {
  return (
    <section>
      <label>
        <input type="checkbox" checked={isDone} />
        {title}
      </label>
    </section>
  );
}

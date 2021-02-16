import "./Form.css";

export default function Form({ onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.title;
    onCreateShoppingItem(input.value);
    form.reset();
    input.focus();
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h3>Add to your Trolley</h3>
      <input name="title" type="text" placeholder="What else do you need?" />
      <button className="Button">Add to List</button>
    </form>
  );
}

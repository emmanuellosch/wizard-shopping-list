import PropTypes from "prop-types";
import styled from "styled-components";
import FilterButtons from "./FilterButtons";

export default function Form({ onCreateShoppingItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.title;
    if (input.value.length >= 2) onCreateShoppingItem(input.value);
    form.reset();
    input.focus();
  }

  return (
    <Form2 onSubmit={handleSubmit}>
      <h3>Add to your Trolley</h3>
      <input name="title" type="text" placeholder="What else do you need?" />
      <Button2>Add to List</Button2>
      <FilterButtons />
    </Form2>
  );
}

const Form2 = styled.form`
  display: flex;
  flex-direction: column;

  input {
    padding: 0.3rem;
  }

  h3 {
    font-size: 15px;
    color: black;
    font-style: oblique;
  }
`;

const Button2 = styled.button`
  background-color: #b31b06;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 0.4rem, 0.8rem;
  margin: 1rem 0;
`;

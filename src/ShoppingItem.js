import styled from "styled-components";

export default function ShoppingItem({
  title,
  isDone,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <section>
      <label>
        <BigCheckbox type="checkbox" checked={isDone} onChange={onToggleItem} />
        {title}

        <DeleteIcon onClick={onDeleteItem}> &times;</DeleteIcon>
      </label>
    </section>
  );
}

const BigCheckbox = styled.input`
  margin-top: 0.5rem;
  margin-right: 0.7rem;
`;

const DeleteIcon = styled.span`
  color: tomato;
  margin-left: 2rem;
  cursor: pointer;
`;

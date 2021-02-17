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
        <input type="checkbox" checked={isDone} onChange={onToggleItem} />
        {title}

        <DeleteIcon onClick={onDeleteItem}> &times;</DeleteIcon>
      </label>
    </section>
  );
}

const DeleteIcon = styled.span`
  color: tomato;
  padding-left: 1rem;
  cursor: pointer;
`;

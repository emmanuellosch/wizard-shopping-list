import styled from "styled-components";

export default function ShowAndOpenButtons() {
  return (
    <section>
      <Button3>Still open</Button3>

      <Button4>Show all</Button4>
    </section>
  );
}

const Button3 = styled.button`
  background-color: #b31b06;
  color: white;
  border: none;
  border-radius: 40px;
  padding: 0.4rem, 0.8rem;
  margin: 1rem 0;
`;

const Button4 = styled.button`
  background-color: #b31b06;
  color: white;
  border: none;
  border-radius: 40px;
  width: fit-content;
`;

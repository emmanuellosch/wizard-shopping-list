import styled from "styled-components";

export default function FilterButtons() {
  return (
    <Section>
      <Button3>Still have to buy</Button3>

      <Button4>Show all</Button4>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Button3 = styled.button`
  background-color: #b31b06;
  color: white;
  border: none;
  border-radius: 40px;
`;

const Button4 = styled.button`
  background-color: #b31b06;
  color: white;
  border: none;
  border-radius: 40px;
`;

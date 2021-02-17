import styled from "styled-components";

export default function Headline({ name }) {
  return <H1>{name}'s Shopping List</H1>;
}

const H1 = styled.h1`
  color: #b31b06;
  font-size: 24px;
`;

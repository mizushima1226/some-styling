import styled from "styled-components";

export const Button = () => {
  return <SButton>ボタン</SButton>;
};

const SButton = styled.button`
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  padding: 8px 10px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

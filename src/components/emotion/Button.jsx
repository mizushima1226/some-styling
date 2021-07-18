/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
export const Emotion = () => {
  const containerStyle = css`
    display: flex;
    justify-content: center;
  `;
  const titleStyle = css({
    color: "#aaa"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <SButton>ボタン</SButton>
    </div>
  );
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

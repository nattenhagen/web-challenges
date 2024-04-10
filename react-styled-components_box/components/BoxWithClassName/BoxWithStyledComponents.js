import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};
  margin: 20px;
  display: inline-block;

  &:hover {
    background-color: ${(props) => (props.$isBlack ? "red" : "red")};
  }
`;

function BoxWithStyledComponents({ $isBlack }) {
  return <StyledBox $isBlack={$isBlack} />;
}

export default BoxWithStyledComponents;

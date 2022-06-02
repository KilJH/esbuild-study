import React from "react";
import styled from "@emotion/styled";

export const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  background: #2050f0;
`;

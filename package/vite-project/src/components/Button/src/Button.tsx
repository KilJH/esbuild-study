import React from 'react';
import styled from '@emotion/styled';

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button`
  background: #2050f0;
  color: white;
  border: none;

  padding: 8px 16px;
`;

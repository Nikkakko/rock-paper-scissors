import React from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
  text: string;
  bgColor?: string;
  textColor?: string;
};

const Button = ({ onClick, text, bgColor, textColor }: Props) => {
  return (
    <ButtonStyled
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  padding: 11px 36px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2.5px;

  color: #ffffff;

  @media (min-width: 768px) {
    /* padding: 15px 60px; */
  }
`;

export default Button;

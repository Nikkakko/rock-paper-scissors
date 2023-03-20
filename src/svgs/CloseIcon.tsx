import React from 'react';
import styled from 'styled-components';

type Props = {
  onClick: () => void;
};

const CloseIcon = ({ onClick }: Props) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      onClick={onClick}
    >
      <path
        fill='#3B4262'
        fillRule='evenodd'
        d='M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z'
        opacity='.25'
      />
    </Svg>
  );
};

const attrs = styled.svg.attrs({
  xmlns: 'http://www.w3.org/2000/svg',
})``;

const Svg = styled(attrs)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default CloseIcon;

import React from 'react';

type Props = {
  width: string;
  height: string;
};

const PenagonIcon = ({ width, height }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='329'
      height='313'
      style={{
        width: width,
        height: height,
      }}
      viewBox='0 0 329 313'
      preserveAspectRatio='xMidYMid meet'
    >
      <path
        fill='none'
        stroke='#000'
        strokeWidth='15'
        d='M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z'
        opacity='.2'
      />
    </svg>
  );
};

export default PenagonIcon;

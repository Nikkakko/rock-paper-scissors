import React, { useRef } from 'react';
import styled from 'styled-components';
import { ImageRulesBonus } from '../assets';
import { CloseIcon } from '../svgs';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RulesModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  return (
    <ModalOverlay ref={modalRef} onClick={handleClick}>
      <ModalContent>
        <HeadingRules>Rules</HeadingRules>
        <ModalImage src={ImageRulesBonus} alt='rules' />
        <CloseIcon onClick={onClose} />
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  gap: 96px;
  padding: 0 32px;
  border-radius: 8px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
    width: 483px;
    height: 400px;
    gap: 20px;
    position: relative;

    svg {
      position: absolute;
      top: 32px;
      right: 32px;
    }
  }

  @media (min-width: 1440px) {
  }
`;

const ModalImage = styled.img`
  width: 311px;
  height: 305px;
`;

const HeadingRules = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  /* identical to box height, or 100% */

  color: #3b4262;
`;

export default RulesModal;

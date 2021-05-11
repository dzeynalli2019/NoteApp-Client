import React from "react";
import styled from "styled-components";

const handleClick = e => {
  e.stopPropagation();
};

export const Modal = ({ actions, text, close }) => {
  return (
    <ModalContainer onClick={close}>
      <Modall onClick={handleClick}>
        <ModalText>{text}</ModalText>
        {actions}
      </Modall>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Modall = styled.div`
  height: 160px;
  width: 380px;
  background-color: rgb(57, 58, 77);
  border-radius: 5px;
  color: white;
  text-align: center;
`;

const ModalText = styled.p`
  margin-top: 30px;
  font-size: 20px;
  margin-bottom: 20px;
`;
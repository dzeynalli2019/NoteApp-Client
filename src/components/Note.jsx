import React from "react";
import styled from "styled-components";

export const Note = ({ note: { title, text, date, color }, newChange, onUpdate, onDelete }) => {
  return (
    <NoteContainer color={color}>
      <NoteHeader>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </NoteHeader>
      <Text>{text}</Text>
      <Input type="text" placeholder="Edit your note" onChange={newChange}/>
      <BtnContainer>
        <Button1 onClick={onUpdate}>Update</Button1>
        <Button2 onClick={onDelete}>Delete</Button2>
      </BtnContainer>
    </NoteContainer>
  );
};

const NoteContainer = styled.div`
    border-top: 10px solid ${p => p.color};
    color: white;
    background-color: white;
    padding-bottom: 20px;
`;

const NoteHeader = styled.div`
    background-color: rgb(57, 58, 77);
    padding: 15px 40px;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

const Text = styled.p`
    text-align: center;
    color: black;
    margin: 20px 40px;
    text-align: justify;
    text-decoration: none;
`;

const Date = styled.div`
  font-size: 12px;
  margin: 10px 0;
`;

const BtnContainer = styled.div`
  margin: 0 40px;
  position: relative;
`;

const Input = styled.input`
  padding: 5px;
  margin: 10px 40px;
  width: 78%;
`;

const Button1 = styled.button`
  background-color: rgb(57, 58, 77);
  color: white;
  border-color: rgb(57, 58, 77);
  padding: 7px 15px;
`;

const Button2 = styled.button`
  background-color: rgb(57, 58, 77);
  color: white;
  border-color: rgb(57, 58, 77);
  padding: 7px 15px;
  position: absolute;
  right: 0;
`;
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";

import { Container } from "../../commons";

export const Create = () => {

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [color, setColor] = useState('#d32727');
  const [list, setList] = useState([]);
  // const [newContent, setNewContent] = useState("");

  function changeTitleHandler (event) {
      setTitle(event.target.value);
  }

  function changeTextHandler (event) {
      setText(event.target.value);
  }

  function changeColorHandler (event) {
    setColor(event.target.value);
  }

  useEffect(() => {
      Axios.get("https://note-app-beginners.herokuapp.com/").then((response) => {
          setList(response.data);
      })
  }, []);

  function clickHandler () {
      Axios.post("https://note-app-beginners.herokuapp.com/createNote", {
          noteTitle: title, 
          noteText: text,
          noteColor: color
      });
      
      setList([
          ...list, 
          {noteTitle: title, noteText: text, noteColor: color},
      ]);
  }


  return (
    <Container>
    <StyledForm >
      <StyledInput
        type="text"
        name={title}
        onChange={changeTitleHandler}
      />
      <StyledTextarea
        type="text"
        name={text}
        onChange={changeTextHandler}
      />

      <StyledColorContainer>
        <h4>Color: </h4>
        <StyledRadioLabel color="#d32727">
          <input
            type="radio"
            name={color}
            value="#d32727"
            checked={color === "#d32727"}
            onChange={changeColorHandler}
          />
          <span></span>
        </StyledRadioLabel>
        <StyledRadioLabel color="#3a2c84">
          <input
            type="radio"
            name={color}
            value="#3a2c84"
            checked={color === "#3a2c84"}
            onChange={changeColorHandler}
          />
          <span></span>
        </StyledRadioLabel>
        <StyledRadioLabel color="#ef8e0b">
          <input
            type="radio"
            name={color}
            value="#ef8e0b"
            checked={color === "#ef8e0b"}
            onChange={changeColorHandler}
          />
          <span></span>
        </StyledRadioLabel>
        <StyledRadioLabel color="#516f55">
          <input
            type="radio"
            name={color}
            value="#516f55"
            checked={color === "#516f55"}
            onChange={changeColorHandler}
          />
          <span></span>
        </StyledRadioLabel>
      </StyledColorContainer>
      <StyledButton onClick={clickHandler}>Create</StyledButton>
    </StyledForm>
  </Container>
);
};

const StyledForm = styled.form`
      max-width: 500px;
      margin: 60px auto;
      padding: 30px 20px;
      background-color: #e4e9ef;
      border-radius: 15px;
  `;

const inputStyles = `
      display: block;
      border 2px solid transparent;
      transition: all .3s ease;
      width: 100%;
      padding: 10px;
      border-radius: 5px;
      
      &:focus {
          border-color: rgb(57, 58, 77);
          outline: none;
      }
  `;

const StyledInput = styled.input`
      ${inputStyles}
  `;

const StyledTextarea = styled.textarea`
      ${inputStyles};
      height: 100px;
      margin-top: 10px;
      resize: none;
  `;

const StyledColorContainer = styled.div`
      display: flex;
      align-items: center;
      margin: 10px 0;
      
      h4 {
          margin: 0 25px 0 0;
      }
  `;

const StyledRadioLabel = styled.label`
      input {
          display: none;
      }
      
      span {
          display: inline-block;
          width: 30px;
          height: 30px;
          border-radius: 100%;
          margin: 0 10px;
          background-color: ${p => p.color};
          border: 4px solid transparent;
          transition: all .3s ease;
          cursor: pointer;
      }
      
      input:checked + span {
          border-color: white;
      }
  `;

const StyledButton = styled.button`
       ${inputStyles};
       text-transform: uppercase;
       font-weight: bold;
       background-color: rgb(57, 58, 77);
       color: white;   
  `;
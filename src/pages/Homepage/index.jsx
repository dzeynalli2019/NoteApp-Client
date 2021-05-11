import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";

import { Container } from "../../commons";
import { Note } from "../../components";
import { Modal } from "../../components";

export const Homepage = ({ history }) => {
  const [list, setList] = useState([]);
  const [newText, setNewText] = useState("");

  const [modalStatus, setModalStatus] = useState(false);
  const toggleModal = () => setModalStatus((v) => !v);


  useEffect(() => {
      Axios.get("https://note-app-beginners.herokuapp.com/").then((response) => {
          setList(response.data);
      })
  }, []);

  function deleteHandler (noteTitle) {
    Axios.delete(`https://note-app-beginners.herokuapp.com/${noteTitle}`);
}


function changeUpdate (event) {
  setNewText(event.target.value);
}

function updateHandler (name) {
  Axios.patch("https://note-app-beginners.herokuapp.com/", {
      noteTitle: name, 
      noteText: newText
  });
  setNewText("");
}

  return (
    <Container>
      <h1>Homepage</h1>
      <Row>
        {list.map(
          (note) =>
            !note.completed && (
              <StyledDiv key={note.id}>
                <Note
                  newChange={changeUpdate}
                  onUpdate={() => {updateHandler(note.title)}}
                  onDelete={toggleModal}
                  note={note}
                />
                {modalStatus && (
                  <Modal
                    close={toggleModal}
                    text="Do you want to remove this note?"
                    actions={[
                      <ModalBtn
                        key={1}
                        onClick={() => {
                          deleteHandler(note.title)
                          history.push("/");
                          toggleModal();
                        }}
                      >
                        Remove
                      </ModalBtn>,
                      <ModalBtn key={2} onClick={toggleModal}>
                        Cancel
                      </ModalBtn>,
                    ]}
                  />
                )}
              </StyledDiv>
            )
        )}
      </Row>
    </Container>
  );
};

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const StyledDiv = styled.div`
  width: calc(100% / 3);
  padding: 0 15px 30px;
`;

const ModalBtn = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 10px 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  color: white;
`;
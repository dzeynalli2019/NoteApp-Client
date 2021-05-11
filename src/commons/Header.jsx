import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

// import images from "../styles/img";

export const Header = () => {
  return (
    <Container>
      <Logo>NotesApp</Logo>
      <div>
        <StyledNavLink exact to="/">
          Actual
        </StyledNavLink>
        <StyledNavLink to="/create">         
          Create
        </StyledNavLink>
      </div>
    </Container>
  );
};

const Container = styled.header`
    background: rgb(57, 58, 77);
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
`;

const StyledNavLink = styled(NavLink)`
    display: inline-block;
    color: white;
    text-decoration: none;
    margin: 0 15px;
    padding: 10px 15px;
    min-width: 150px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: rgba(38, 39, 50, 0.2);
    transition: all .3s ease-out;
    
    span {
        margin-right: 10px;
    }
    
    &.active {
        background-color: white;
        color: rgb(38, 39, 50);
    }
`;
import styled from "styled-components";

export const ItemCard = styled.article`
width: 300px;
background: #F15A24;
border-radius: 20px;
display: flex;
flex-direction: column;
justify-content: center;

  img {
    width: 300px;
    height: 300px;
    border-radius: 20px 20px 0px 0;
  }

  strong {
    padding: 10px;
    font-size: 24px;
  }

  span {
    align-self: flex-end;
    padding: 10px;
    font-size: 16px;
  }

  button {
    background-color: #00AB9E;
    padding: 10px;
    outline: none;
    border: 0;
    border-radius: 20px;
    margin: 20px;
    color: white;
    transition: background-color 0.2s;
  }

  button:hover{
    background-color: #00AB5E;
  }
`;
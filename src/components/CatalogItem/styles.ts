import styled from "styled-components";

export const ItemCard = styled.article`
width: 300px;
background: #26C3EB;
border-radius: 20px;
display: flex;
flex-direction: column;

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
    background-color: #00b300;
    padding: 10px;
    outline: none;
    border: 0;
    border-radius: 20px;
    margin: 20px;
    color: white;
    transition: background-color 0.2s;
  }

  button:hover{
    background-color: #008000;
  }
`;

export const ItemImage = styled.div`
  position: relative;
  width: 100%;

  img {
    display: block;
    width: 100%;
    border-radius: 20px 20px 0px 0;
  }

  img + img {
    position: absolute;
    width: 100%;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    padding: 25%;
    border-radius: 20px 20px 0px 0;
  }
`;
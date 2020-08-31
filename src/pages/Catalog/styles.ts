import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
  background: #28262e;

  svg {
    margin-left: 20px;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: collumn;
  justify-content: center;
  padding: 20px;

  article + article {
    margin-left: 50px;
  }
`;
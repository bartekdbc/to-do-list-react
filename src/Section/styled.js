import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: #ffffff;
  box-shadow: 0 0 5px #ddd;
  margin-bottom: 20px;
`;

export const Header = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto auto;
  grid-gap: 10px;
  border-bottom: 2px solid #eeeeee;
  padding: 20px;
  margin: 0;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const List = styled.div`
  padding: 0px;
  border: none;
`;

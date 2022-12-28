import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
  margin-bottom: 20px;
`;

export const Header = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto auto;
  border-bottom: 2px solid ${({ theme }) => theme.color.gallery};
  padding: 20px;
  margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const List = styled.div`
  padding: 0px;
  border: none;
`;
